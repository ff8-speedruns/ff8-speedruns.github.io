import { Container, Text, Title, Button, ActionIcon, Group, useMantineColorScheme } from '@mantine/core';
import { IconSun, IconMoonStars, IconBrandDiscordFilled, IconVocabulary } from '@tabler/icons-react';

export default function HomeHeader() {

    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    const dark = colorScheme === 'dark';
    return (
        <Container my="xl">
            <Group>
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
                <Button
                    component="a"
                    href="https://ff8.wiki"
                    size="md"
                    variant="gradient"
                    gradient={{ from: 'blue', to: 'cyan' }}
                    leftIcon={<IconVocabulary />}
                >
                    Wiki
                </Button>
            </Group>
        </Container>
    );
}