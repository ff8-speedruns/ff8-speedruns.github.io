import { Card, Text, Group, Badge, Stack, Divider, Box, Flex } from '@mantine/core';
import { IconFish, IconTarget, IconRefresh, IconBolt } from '@tabler/icons-react';
import { GenerateRowObject } from '../utils/calculations';
import { MarkdownText } from '../utils/markdownParser';
import classes from '../css/FishFinResult.module.css';

export function FishFinResult({ pattern }) {
  const totalFins = (pattern.fish1drop || 0) + (pattern.fish2drop || 0);

  // Handle reset state
  if (pattern.isReset) {
    return (
      <Card withBorder radius="lg" className={classes.card} padding="lg">
        {/* Header */}
        <Group justify="space-between" mb="md">
          <Box ta="left">
            <Text fw={700} size="lg" c="red">
              {pattern.pattern.toUpperCase()}
            </Text>
            <Text size="sm" c="dimmed" align>
              Index #{pattern.index}
            </Text>
          </Box>
          <Badge
            size="lg"
            variant="filled"
            color="red"
            leftSection={<IconBolt size={16} />}
          >
            RESET
          </Badge>
        </Group>

        <Divider mb="md" />

        {/* Reset Message */}
        <Box className={classes.resetSection}>
          <Group gap="xs" mb="sm">
            <IconBolt size={20} color="red" />
            <Text fw={600} size="md" c="red">
              Reset Required: <strong>{pattern.resetReason}</strong>
            </Text>
          </Group>
          <Text size="sm" c="dimmed">
            This pattern cannot be executed with the given values.
          </Text>
        </Box>
      </Card>
    );
  }

  return (
    <Card withBorder radius="lg" className={classes.card} padding="lg">
      {/* Header */}
      <Group justify="space-between" mb="md">
        <Box ta="left">
          <Text fw={700} size="lg" c="blue">
            {pattern.pattern.toUpperCase()}
          </Text>
          <Text size="sm" c="dimmed">
            Index #{pattern.index}
          </Text>
        </Box>
        <Badge
          size="lg"
          variant="gradient"
          gradient={{ from: 'blue', to: 'cyan' }}
          leftSection={<IconFish size={16} />}
        >
          {totalFins} Fins
        </Badge>
      </Group>

      <Divider mb="md" />

      {/* Fish Results */}
      <Stack spacing="lg">
        {/* First Fish */}
        <Box className={classes.fishSection}>
          <Group justify="space-between" mb="xs">
            <Text fw={600} size="md" c="teal">
              🐟 First Fish
            </Text>
            <Badge variant="light" color="teal">
              {pattern.fish1drop} fins
            </Badge>
          </Group>

          <Box className={classes.manipSection} mb="sm">
            <Text size="sm" c="dimmed" mb={4}>Manipulation:</Text>
            <Box className={classes.manipText}>
              <Flex align="center" justify="center" gap={4} w="100%">
                <MarkdownText boldClass="satb" italicClass="important">
                  {pattern.fish1Sequence}
                </MarkdownText>
                {">"}
                <IconRefresh size={16} className={classes.statIcon} />
                <Text size="sm">
                  <span>{pattern.fish1Refreshes} refreshes</span>{' '}
                  <span className={`limit`}>({pattern.fish1limits} limits)</span>
                </Text>
              </Flex>
            </Box>
          </Box>

          <Group gap="xl">
            <Flex align="center" gap={4}>
              <IconTarget size={16} className={classes.statIcon} />
              <Text size="sm" fw={500}>{pattern.fish1hp} HP</Text>
            </Flex>
            <Flex align="center" gap={4}>
              <IconRefresh size={16} className={classes.statIcon} />
              <Text size="sm">
                <span >{pattern.fish1Refreshes} total refreshes</span>{' '}
                <span className={`limit`}>({pattern.fish1limits} limits)</span>
              </Text>
            </Flex>
            or
            <Flex align="center" gap={4}>
              <IconRefresh size={16} className={classes.statIcon} />
              <Text size="sm">
                <span className={`limit`}>
                  {Math.max(pattern.fish1limits - 1, 0)} limits + {pattern.fish1refreshesToLastLimit} refresh
                </span>
              </Text>
            </Flex>
          </Group>
        </Box>

        {/* Second Fish */}
        <Box className={classes.fishSection}>
          <Group justify="space-between" mb="xs">
            <Text fw={600} size="md" c="orange">
              🐟 Second Fish
            </Text>
            <Badge variant="light" color="orange">
              {pattern.fish2drop} fins
            </Badge>
          </Group>

          <Box className={classes.manipSection} mb="sm">
            <Text size="sm" c="dimmed" mb={4}>Manipulation:</Text>
            <Box className={classes.manipText}>
              <MarkdownText boldClass="satb" italicClass="important">
                {pattern.fish2Sequence}
              </MarkdownText>
            </Box>
          </Box>


          <Group gap="xl">
            <Flex align="center" gap={4}>
              <IconTarget size={16} className={classes.statIcon} />
              <Text size="sm" fw={500}>{pattern.fish2hp} HP</Text>
            </Flex>
            <Flex align="center" gap={4}>
              <IconRefresh size={16} className={classes.statIcon} />
              <Text size="sm">
                <span>{pattern.fish2Refreshes} total refreshes</span>{' '}
                <span className={`limit`}>({pattern.fish2limits} limits)</span>
              </Text>
            </Flex>
            or
            <Flex align="center" gap={4}>
              <IconRefresh size={16} className={classes.statIcon} />
              <Text size="sm">
                <span className={`limit`}>
                  {Math.max(pattern.fish2limits - 1, 0)} limits + {pattern.fish2refreshesToLastLimit} refresh
                </span>
              </Text>
            </Flex>
          </Group>
        </Box>
      </Stack>
    </Card>
  );
}
