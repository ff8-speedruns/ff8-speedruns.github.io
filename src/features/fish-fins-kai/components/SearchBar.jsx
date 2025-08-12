import { useState } from 'react';
import { Input, NumberInput, CloseButton, Grid, rem } from '@mantine/core';
import { IconHeartFilled } from '@tabler/icons-react';

export default function SearchBar({ onChange }) {
  const [qhp, setQhp] = useState('');
  const [pattern, setPattern] = useState('');
  const icon = <IconHeartFilled style={{ width: rem(20), height: rem(20) }} stroke={1.5} />;

  const handleQhpChange = (value) => {
    setQhp(value);
    onChange({ qhp: value, pattern });
  };

  const handlePatternChange = (event) => {
    const value = event.currentTarget.value;
    setPattern(value);
    onChange({ qhp, pattern: value });
  };

  return (
    <Grid gutter="md" justify="space-between" align="center" mb="xl">
      <Grid.Col span={4}>
        <Input.Wrapper label="Quistis HP" size="lg">
          <NumberInput
            leftSection={icon}
            allowNegative={false}
            size="xl"
            placeholder=""
            value={qhp}
            onChange={handleQhpChange}
            rightSectionPointerEvents="all"
            mt="md"
            rightSection={
              <CloseButton
                aria-label="Clear input"
                onClick={() => {
                  setQhp('');
                  onChange({ qhp: '', pattern });
                }}
                style={{ display: qhp ? undefined : 'none' }}
              />
            }
          />
        </Input.Wrapper>
      </Grid.Col>
      <Grid.Col span={8}>
        <Input.Wrapper label="Pattern" size="lg">
          <Input
            size="xl"
            placeholder=""
            value={pattern}
            onChange={handlePatternChange}
            rightSectionPointerEvents="all"
            mt="md"
            rightSection={
              <CloseButton
                aria-label="Clear input"
                onClick={() => {
                  setPattern('');
                  onChange({ qhp, pattern: '' });
                }}
                style={{ display: pattern ? undefined : 'none' }}
              />
            }
          />
        </Input.Wrapper>
      </Grid.Col>
    </Grid>
  );
}