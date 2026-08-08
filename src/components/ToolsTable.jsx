import { ActionIcon, Table, Anchor, Container } from '@mantine/core';
import { StatusBadge } from '@ff8-speedruns/ui';
import { IconBrandGithub } from '@tabler/icons-react';

// Status keys come from the STATUSES vocabulary in @ff8-speedruns/ui.
const TOOLS = [
  {
    title: 'Caraway Code / Poles',
    status: 'working',
    description: 'Pole skip helper for the Caraway mansion code.',
    link: '/caraway-code/',
    github: 'https://github.com/ff8-speedruns/caraway-code',
  },
  {
    title: 'Card RNG Manip',
    status: 'development',
    description: 'A webpage to keep track of early game RNG events to help with Zell card.',
    link: '/cards/',
    github: 'https://github.com/ff8-speedruns/cards',
  },
  {
    title: 'Cheat Engine Tables (PC)',
    status: 'working',
    description: 'A file for use with Cheat Engine to read or manipulate various aspects of game memory.',
    link: 'https://github.com/ff8-speedruns/ff8-memory/releases',
    github: 'https://github.com/ff8-speedruns/ff8-memory',
  },
  {
    title: 'Controller Patches',
    status: 'working',
    description: 'Patches to enable analog inputs on PC and/or background controller inputs.',
    link: 'https://github.com/ff8-speedruns/ff8-controls-randomizer/releases',
    github: 'https://github.com/ff8-speedruns/ff8-controls-randomizer',
  },
  {
    title: 'Controls Randomizer',
    status: 'working',
    description: 'Randomizes controller inputs while playing FF8 by reading and shuffling the control mapping in the game\'s memory while you play. Has some configuration options.',
    link: 'https://github.com/ff8-speedruns/controller-patches/releases',
    github: 'https://github.com/ff8-speedruns/controller-patches/',
  },
  {
    title: 'Encounter Calculator',
    status: 'working',
    description: 'Using the previous encounter formation ID along with the encounter counter (total number of encounters) we can tell which encounter formation we will receive next.',
    link: '/encounter-calculator/',
    github: 'https://github.com/ff8-speedruns/encounter-calculator',
  },
  {
    title: 'Esthar Practice',
    status: 'working',
    description: 'Quick memory writer for Esthar encounter stuff.',
    link: 'https://github.com/ff8-speedruns/esthar-practice/releases',
    github: 'https://github.com/ff8-speedruns/esthar-practice',
  },
  {
    title: 'Final Party Manipulation',
    status: 'working',
    description: 'Conversion of Pingval\'s final party manipulation code for Playstation and awesomeWaves\' modifications for PC ruby script to JS, so that it can be run on the web without requiring runners to install Ruby.',
    link: '/final-party-manip/',
    github: 'https://github.com/ff8-speedruns/final-party-manip',
  },
  {
    title: 'Fish Fin Manip',
    status: 'working',
    description: 'Table lookup for the fish fin manipulation.',
    link: '/fish-fins/',
    github: 'https://github.com/ff8-speedruns/fish-fins',
  },
  {
    title: 'Kaivel\'s Fish Fin Manip',
    status: 'working',
    description: 'Table lookup for Kaivel\'s alternate fish fin manipulation.',
    link: '/fish-fins-kai/',
    github: 'https://github.com/ff8-speedruns/fish-fins-kai',
  },
  {
    title: 'Slot Manipulation',
    status: 'external',
    description: 'The End manip created by Kaivel & romaindurand',
    link: 'https://ff8-manip.romaindurand.fr/',
    github: 'https://github.com/romaindurand/ff8-slot-manip',
  },
  {
    title: 'World Map Encounters',
    status: 'working',
    description: 'Find where enemies appear on the world map, how often they appear, and how many you get per encounter.',
    link: '/world-map-encounters/',
    github: 'https://github.com/ff8-speedruns/world-map-encounters',
  },
];

export default function ToolsTable() {
  return (
    <Container>
      <Table.ScrollContainer minWidth={760}>
        {/* Column widths live on the thead cells and layout="fixed" makes the
            browser honour them, so Status always has room for its longest
            badge ("External Link") instead of ellipsing it. */}
        <Table verticalSpacing="xs" fz="sm" layout="fixed" highlightOnHover>
          <Table.Thead>
            <Table.Tr>
              <Table.Th w={200}>Project</Table.Th>
              <Table.Th w={150}>Status</Table.Th>
              <Table.Th>Description</Table.Th>
              <Table.Th w={70}>Source</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {TOOLS.map((tool) => (
              <Table.Tr key={tool.title}>
                <Table.Th scope="row" fw={500}>
                  <Anchor href={tool.link} inherit>
                    {tool.title}
                  </Anchor>
                </Table.Th>
                <Table.Td>
                  <StatusBadge status={tool.status} />
                </Table.Td>
                <Table.Td>{tool.description}</Table.Td>
                <Table.Td>
                  <ActionIcon
                    color="blue"
                    radius="xl"
                    variant="light"
                    component="a"
                    href={tool.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${tool.title} source on GitHub`}
                  >
                    <IconBrandGithub />
                  </ActionIcon>
                </Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
      </Table.ScrollContainer>
    </Container>
  );
}
