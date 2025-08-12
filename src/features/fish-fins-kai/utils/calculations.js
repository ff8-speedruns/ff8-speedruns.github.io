// Fish Fins Kai calculation utilities converted from vanilla JS to React

export function LimitLevelNumerator(currentHp, maxHp, deadCharacters = 0, statusArray = []) {
  const hpMod = Math.trunc(2500 * (currentHp / maxHp));
  const deathBonus = Math.trunc(1600 + (deadCharacters * 200));

  // For StatusSum
  const STATUSES = {
    'aura': 200,
    'slow': 15,
    'poison': 30,
    'darkness': 30,
    'silence': 30,
    'petrifying': 30,
    'doom': 45
  };

  let statusSum = 0;

  statusArray.forEach((affliction) => {
    if (affliction in STATUSES) {
      statusSum += STATUSES[affliction];
    }
  });

  const statusBonus = Math.trunc(10 * statusSum);

  return (statusBonus + deathBonus - hpMod);
}

export function LimitsBetweenRng(rngStart, rngEnd, currentHp, maxHp, rngData) {
  // Waves wants the number of refreshes between the second last limit -> last limit
  const result = {
    limits: 0,
    refreshesToLastLimit: 0
  };
  
  // An array of limit break refreshes. length = total # of limits. Each index = number of (total) refreshes to get to limit x.
  const limits = [];

  if (isNaN(parseInt(currentHp))) return result;

  const numerator = LimitLevelNumerator(currentHp, maxHp, 0, []);

  // Need to map RNG values using Kaivel's explanation.
  let endRng = rngEnd;
  if (rngStart > rngEnd) endRng += 256;

  for (let i = rngStart; i <= endRng; i++) {
    // RNG if we go over 256
    const moduloRngIndex = i % 256;

    const limitLevel = Math.trunc(numerator / (160 + rngData[moduloRngIndex]));

    // Limit break!
    if (limitLevel > 4) {
      limits.push(i);
    }
  }

  // Calculations
  result.limits = limits.length;
  if (limits.length === 0)
    result.refreshesToLastLimit = 0;
  if (limits.length === 1)
    result.refreshesToLastLimit = limits[0];
  if (limits.length > 1)
    result.refreshesToLastLimit = limits[limits.length - 1] - limits[limits.length - 2];

  return result;
}

export function GenerateRowObject(row, qhp, rngData) {
  const obj = {};

  // Set up some logic variables - ensure qhp is treated as string first
  const qhpString = String(qhp || '');
  const qHP = parseInt(qhpString) || 0;  // Use 0 if qhp is invalid
  const qhpIsValid = !isNaN(parseInt(qhpString)) && qhpString.trim() !== '';

  // Set up some RNG variables
  const qCalcHp = qHP - row.globaldamage_q;

  // Calculate limit refreshes only if QHP is valid and RNG data exists
  let limitRefreshes1, limitRefreshes2, limitRefreshes3;
  
  if (qhpIsValid && rngData && rngData.length > 0) {
    limitRefreshes1 = LimitsBetweenRng(row.rng_start_1 + 1, row.rng_end_1, qCalcHp, 501, rngData);
    limitRefreshes2 = LimitsBetweenRng(row.rng_start_2 + 1, row.rng_end_2, qCalcHp, 501, rngData);
    limitRefreshes3 = LimitsBetweenRng(row.rng_start_3 + 1, row.rng_end_3, qCalcHp, 501, rngData);
  } else {
    // Default values when QHP is not provided or RNG data missing
    limitRefreshes1 = { limits: 0, refreshesToLastLimit: 0 };
    limitRefreshes2 = { limits: 0, refreshesToLastLimit: 0 };
    limitRefreshes3 = { limits: 0, refreshesToLastLimit: 0 };
  }

  // Basic things
  obj.index = row.index;
  obj.pattern = row.pattern;

  // For future ref: https://sebhastian.com/javascript-double-question-mark/
  obj.fish1Sequence = row.manip_1 ?? "?"; // manip1
  obj.fish1Refreshes = row.skip_1 ?? "?"; //skip1
  obj.fish1hp = row.hp1 ?? "?"; // hp1
  obj.fish1drop = row.drop1 ?? "?"; // drop1

  obj.fish1limits = limitRefreshes1.limits;
  obj.fish1refreshesToLastLimit = limitRefreshes1.limits <= 1 ? obj.fish1Refreshes : limitRefreshes1.refreshesToLastLimit;

  // Calculate damage to Q in phase 1 to determine which phase 2 is displayed
  const phase1Qdamage = row.damage_q1;
  const qPhase1HP = (qHP - phase1Qdamage);

  if (qPhase1HP > row.hp3) {
    // Use Skip 2
    obj.fish2Sequence = row.manip_2 ?? "?"; // manip2
    obj.fish2Refreshes = row.skip_2 ?? "?"; //skip_2
    obj.fish2hp = row.hp2 ?? "?"; // phase2
    obj.fish2drop = row.drop2 ?? "?"; // phase2

    obj.fish2limits = limitRefreshes2.limits;
    obj.fish2refreshesToLastLimit = limitRefreshes2.limits <= 1 ? obj.fish2Refreshes : limitRefreshes2.refreshesToLastLimit;
  } else {
    // Use Skip 3
    obj.fish2Sequence = row.manip_3 ?? "?"; // manip3
    obj.fish2Refreshes = row.skip_3 ?? "?"; //skip_3
    obj.fish2hp = row.hp3 ?? "?"; // phase3
    obj.fish2drop = row.drop3 ?? "?"; // phase3

    obj.fish2limits = limitRefreshes3.limits;
    obj.fish2refreshesToLastLimit = limitRefreshes3.limits <= 1 ? obj.fish2Refreshes : limitRefreshes3.refreshesToLastLimit;
  }

  return obj;
}

// Constants
export const SQUALL_MAX_HP = 486;
export const QUISTIS_MAX_HP = 501;
