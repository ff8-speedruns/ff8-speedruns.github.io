import { List, Anchor, Title, Container, ThemeIcon } from '@mantine/core';
import { IconBulb } from '@tabler/icons-react'

const data = [
    { name: 'Pingval', link: 'http://pingval.g1.xrea.com/' },
    { name: 'Kaivel', link: 'https://www.twitch.tv/kaivel' },
    { name: 'awesomeWaves', link: 'https://www.twitch.tv/awesomeWaves' },
    { name: 'BlRT', link: 'https://twitch.tv/BlRT' },
    { name: 'FF8 - Caraway Code  retro-engineering (Amshagar)', link: 'https://docs.google.com/document/d/1k0wViIjYPa6oakFvcwXxwmXj_2O_Q8FL9Ab5XRfsA6I/' },
    { name: 'Hyne savegame editor for Final Fantasy VIII (myst6re)', link: 'https://github.com/myst6re/hyne' },
    { name: 'Deling Final Fantasy VIII field archive editor (myst6re)', link: 'https://github.com/myst6re/deling' },
    { name: 'FF8/Tools Wiki - ffrtt.ru', link: 'http://wiki.ffrtt.ru/index.php/FF8/Tools' },
    { name: 'FF8 ID items list(Qhimm.com) ', link: 'http://forums.qhimm.com/index.php?topic=17034.0' },
    { name: 'FFVIII - Game Corner Guides', link: 'https://guides.gamercorner.net/ffviii/' },
    { name: 'Final Fantasy VIII Cheat Table', link: 'https://fearlessrevolution.com/viewtopic.php?t=1029' },
    { name: 'Maps and Locations - Game8', link: 'https://game8.co/games/Final_Fantasy_VIII/archives/270984' },
    { name: 'Final Fantasy VIII (F) RAM MAP Par Beuj, Kaivel, Ony, KartSeven, AmShagar', link: 'https://docs.google.com/document/d/1unjgx4zAUUcIroed8ahxmD-9yhMHZQESjrjWuzFnML8' },
    { name: 'czardragon', link: 'https://gamehacking.org/czardragon/' },
    { name: 'Brofar', link: 'https://twitch.tv/brofar' }
];

export default function RootCredits() {

    return (
        <Container my="lg">
            <Title>
                Credits & Sources
            </Title>
            <List
                my="md"
                spacing="xs"
                size="sm"
                center
                icon={
                    <ThemeIcon color="blue" size={24} radius="xl">
                        <IconBulb size="1rem" />
                    </ThemeIcon>
                }>
                {data.map((credit) => {
                    return (<List.Item key={credit.name}><Anchor href={credit.link} target="_blank">{credit.name}</Anchor></List.Item>);
                })}
            </List>
        </Container>
    );
}