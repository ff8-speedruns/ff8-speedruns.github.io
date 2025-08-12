import SearchBar from '../features/fish-fins-kai/components/SearchBar';
import { FishFinResult } from '../features/fish-fins-kai/components/ResultCard';
import { GenerateRowObject } from '../features/fish-fins-kai/utils/calculations';
import { useState, useEffect } from 'react';
import { Stack, Text, Container } from '@mantine/core';

export default function FishFinsKaiPage() {
  const [searchData, setSearchData] = useState({ qhp: '', pattern: '' });
  const [results, setResults] = useState([]);
  const [kaivalData, setKaivalData] = useState([]);
  const [limitRngData, setLimitRngData] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleSearchChange = (data) => {
    setSearchData(data);
  };

  // Load data on component mount
  useEffect(() => {
    const loadData = async () => {
      try {
        const kaivalResponse = await fetch('./data/fish-fins-kai.json');
        const kaivalJson = await kaivalResponse.json();
        setKaivalData(kaivalJson);

        const limitRngResponse = await fetch('./data/limitRng.json');
        const limitRngJson = await limitRngResponse.json();
        setLimitRngData(limitRngJson);

        setLoading(false);
      } catch (error) {
        console.error('Error loading data:', error);
        setLoading(false);
      }
    };

    loadData();
  }, []);

  // Calculate patterns when search data changes
  useEffect(() => {
    if (loading || kaivalData.length === 0) return;

    const pattern = searchData.pattern.trim().replace(/ /g, '').toLowerCase();

    if (pattern === '') {
      setResults([]);
      return;
    }

    const filteredResults = kaivalData.filter(element =>
      element.pattern.toLowerCase().replace(/ /g, '').startsWith(pattern)
    );

    const processedResults = filteredResults.map(row => {
      const qhpString = String(searchData.qhp || '');
      const qhp = parseInt(qhpString);
      const qhpIsValid = !isNaN(qhp) && qhpString.trim() !== '';

      // Only check reset conditions if QHP is provided and valid
      if (qhpIsValid) {
        const qHPAfterDamage = qhp - row.globaldamage_q;

        // Check for RESET conditions
        if (qHPAfterDamage > row.hp1 || qHPAfterDamage <= 0) {
          const qHpNeeded = Math.abs(qHPAfterDamage) + 1;
          return {
            ...row,
            isReset: true,
            resetReason: qHPAfterDamage > row.hp1 ? "HP too high for limit breaks" : "Quistis dies (needs " + qHpNeeded + " more HP)"
          };
        }
      }

      // Generate the row object with calculations
      const rowObject = GenerateRowObject(row, qhpString, limitRngData);
      return {
        ...rowObject,
        isReset: false
      };
    });

    setResults(processedResults);
  }, [searchData, kaivalData, limitRngData, loading]);


  if (loading) {
    return <Text>Loading data...</Text>;
  }

  return (
    <Stack spacing="md">
      <SearchBar onChange={handleSearchChange} />
      <Container align='center'>
        {results.length > 0 && (
          <Stack spacing="sm">
            {results.map((result, index) => (
              <FishFinResult
                key={index}
                pattern={result}
              />
            ))}
          </Stack>
        )}

        {searchData.pattern && results.length === 0 && !loading && (
          <Text c="dimmed">No patterns found matching "{searchData.pattern}"</Text>
        )}
      </Container>
    </Stack>
  );
}