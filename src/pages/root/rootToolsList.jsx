import { ActionIcon, Table, Anchor, Text, Container } from '@mantine/core';
import { StatusBadge } from '@ff8-speedruns/ui';
import { IconBrandGithub } from '@tabler/icons-react';

// Status keys come from @ff8-speedruns/ui
const data = [
    {
        title: 'Caraway Code - Poles',
        status: 'needsTesters',
        description: 'Alternate website for the pole manip',
        link: '/caraway-code/',
        github: 'https://github.com/ff8-speedruns/caraway-code'
    },
    {
        title: 'Card RNG Manip',
        status: 'development',
        description: 'A webpage to keep track of early game RNG events to help with Zell card.',
        link: '/cards/',
        github: 'https://github.com/ff8-speedruns/cards'
    },
    {
        title: 'Cheat Engine Tables (PC)',
        status: 'working',
        description: 'A file for use with Cheat Engine to read or manipulate various aspects of game memory.',
        link: 'https://github.com/ff8-speedruns/ff8-memory/releases',
        github: 'https://github.com/ff8-speedruns/ff8-memory'
    },
    {
        title: 'Controls Randomizer',
        status: 'working',
        description: 'Randomizes controller inputs while playing FF8 by reading and shuffling the control mapping in the game\'s memory while you play. Has some configuration options.',
        link: 'https://github.com/ff8-speedruns/ff8-controls-randomizer/releases',
        github: 'https://github.com/ff8-speedruns/ff8-controls-randomizer'
    },
    {
        title: 'Encounter Calculator',
        status: 'working',
        description: 'Using the previous encounter formation ID along with the encounter counter (total number of encounters) we can tell which encounter formation we will receive next.',
        link: '/encounter-calculator/',
        github: 'https://github.com/ff8-speedruns/encounter-calculator'
    },
    {
        title: 'Esthar Practice',
        status: 'working',
        description: 'Quick memory writer for Esthar encounter stuff.',
        link: 'https://github.com/ff8-speedruns/esthar-practice/releases',
        github: 'https://github.com/ff8-speedruns/esthar-practice'
    },
    {
        title: 'Final Party Manipulation',
        status: 'working',
        description: 'Conversion of Pingval\'s final party manipulation code for Playstation and awesomeWaves\' modifications for PC ruby script to JS, so that it can be run on the web without requiring runners to install Ruby.',
        link: '/final-party-manip/',
        github: 'https://github.com/ff8-speedruns/final-party-manip'
    },
    {
        title: 'Fish Fin Manip',
        status: 'working',
        description: 'Table lookup for the fish fin manipulation.',
        link: '/fish-fins/',
        github: 'https://github.com/ff8-speedruns/fish-fins'
    },
    {
        title: 'Kaivel\'s Fish Fin Manip',
        status: 'working',
        description: 'Table lookup for Kaivel\'s alternate fish fin manipulation.',
        link: '/fish-fins-kai/',
        github: 'https://github.com/ff8-speedruns/fish-fins-kai'
    },
    {
        title: 'Slot Manipulation',
        status: 'external',
        description: 'The End manip created by Kaivel & romaindurand',
        link: 'https://ff8-manip.romaindurand.fr/',
        github: 'https://github.com/romaindurand/ff8-slot-manip'
    }
];

export default function RootToolsList() {
    const rows = data.map((row) => (
        <Table.Tr key={row.title}>
            <Table.Th scope="row" w={180}>
                <Anchor href={row.link}>{row.title}</Anchor>
            </Table.Th>
            <Table.Td>
                <StatusBadge status={row.status} />
            </Table.Td>
            <Table.Td>
                <Text fz="sm">{row.description}</Text>
            </Table.Td>
            <Table.Td>
                <ActionIcon
                    color="blue"
                    radius="xl"
                    variant="light"
                    component="a"
                    href={row.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${row.title} source on GitHub`}
                >
                    <IconBrandGithub />
                </ActionIcon>
            </Table.Td>
        </Table.Tr>
    ));

    return (
        <Container>
            <Table.ScrollContainer minWidth={800}>
                <Table verticalSpacing="xs" highlightOnHover>
                    <Table.Thead>
                        <Table.Tr>
                            <Table.Th>Project</Table.Th>
                            <Table.Th>Status</Table.Th>
                            <Table.Th>Description</Table.Th>
                            <Table.Th>Source</Table.Th>
                        </Table.Tr>
                    </Table.Thead>
                    <Table.Tbody>{rows}</Table.Tbody>
                </Table>
            </Table.ScrollContainer>
        </Container>
    );
}
