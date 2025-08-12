import { Container, Button, Group } from '@mantine/core';
import { IconBrandDiscordFilled, IconVocabulary } from '@tabler/icons-react';

export default function Header() {

  return (
    <Container my="xl">
      <Group>
        <Button
          component="a"
          href="https://discord.gg/W89guqKuj7"
          size="md"
          variant="gradient"
          gradient={{ from: 'blue', to: 'cyan' }}
          leftSection={<IconBrandDiscordFilled />}
        >
          Discord
        </Button>
        <Button
          component="a"
          href="https://ff8.wiki"
          size="md"
          variant="gradient"
          gradient={{ from: 'blue', to: 'cyan' }}
          leftSection={<IconVocabulary />}
        >
          Wiki
        </Button>
      </Group>
    </Container>
  );
}