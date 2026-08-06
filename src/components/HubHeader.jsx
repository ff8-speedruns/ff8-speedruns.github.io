import { Container, Text, Title, Button, Group } from '@mantine/core';
import { ColorSchemeToggle } from '@ff8-speedruns/ui';
import { IconBrandDiscordFilled, IconVocabulary } from '@tabler/icons-react';

// The hub deliberately doesn't use ToolShell/SiteHeader from @ff8-speedruns/ui:
// those carry a "Back to Garden" link, which would point back at this page.
const LINKS = [
  { label: 'Discord', href: 'https://discord.gg/W89guqKuj7', icon: IconBrandDiscordFilled },
  { label: 'Wiki', href: 'https://ff8.wiki', icon: IconVocabulary },
];

export default function HubHeader() {
  return (
    <Container my="xl">
      <Group justify="space-between">
        <Title>
          Final Fantasy{' '}
          <Text component="span" variant="gradient" inherit>
            VIII
          </Text>
        </Title>
        <ColorSchemeToggle />
      </Group>

      <Text size="xl" c="dimmed" my="lg">
        This is a collection of information, resources, and tools for Final Fantasy VIII speedrunning (and other fun things).
      </Text>

      <Group>
        {LINKS.map(({ label, href, icon: Icon }) => (
          <Button
            key={href}
            component="a"
            href={href}
            size="md"
            variant="gradient"
            leftSection={<Icon />}
          >
            {label}
          </Button>
        ))}
      </Group>
    </Container>
  );
}
