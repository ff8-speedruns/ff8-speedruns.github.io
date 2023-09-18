import { Container, Text, Title, Button, ActionIcon, Group, useMantineColorScheme } from '@mantine/core';
import { IconSun, IconMoonStars, IconBrandDiscordFilled } from '@tabler/icons-react';

export default function RootHeader() {

    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    const dark = colorScheme === 'dark';
    return (
        <Container my="xl">
            <Group position="apart">
            <Title>
                Final Fantasy{' '}
                <Text component="span" variant="gradient" gradient={{ from: 'blue', to: 'cyan' }} inherit>
                    VIII
                </Text>
            </Title>
            <ActionIcon
                size="lg"
                variant="outline"
                color={dark ? 'yellow' : 'blue'}
                onClick={() => toggleColorScheme()}
                title="Toggle color scheme"
            >
                {dark ? <IconSun size="1.1rem" /> : <IconMoonStars size="1.1rem" />}
            </ActionIcon>
            </Group>

            <Text size="xl" color="dimmed" my="lg">
                This is a collection of information, resources, and tools for Final Fantasy VIII speedrunning.
            </Text>

            <Button
                component="a"
                href="https://discord.gg/W89guqKuj7"
                size="md"
                variant="gradient"
                gradient={{ from: 'blue', to: 'cyan' }}
                leftIcon={<IconBrandDiscordFilled />}
            >
                Discord
            </Button>
        </Container>
    );
}