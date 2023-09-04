import { ActionIcon, Badge, Table, Anchor, Text, ScrollArea } from '@mantine/core';
import { IconBrandGithub } from '@tabler/icons-react'

const statuses = {
    WORKING: { text: 'Working', color: 'green' },
    NEEDSTESTERS: { text: 'Needs Testers', color: 'yellow' },
    UNDERCONSTRUCTION: { text: 'Under Construction', color: 'orange' },
    EXTERNAL: { text: 'External Link', color: 'gray' },

}

const data = [
    {
        title: 'Caraway Code',
        status: statuses.WORKING,
        description: 'Reads a specific memory address from FF8_EN or FF8_FR (Steam 2013 / non-remaster) containing the code to get into the Caraway mansion. Note: This tool is illegal in speedruns as it reads directly from game memory.',
        link: 'https://github.com/ff8-speedruns/ff8-Julia/releases',
        github: 'https://github.com/ff8-speedruns/ff8-Julia'
    },
    {
        title: 'Caraway Code - Poles',
        status: statuses.NEEDSTESTERS,
        description: 'Alternate website for the pole manip',
        link: 'https://galbadia.garden/caraway-code',
        github: 'https://github.com/ff8-speedruns/caraway-code'
    },
    {
        title: 'Card RNG Manip Tool',
        status: statuses.UNDERCONSTRUCTION,
        description: 'A webpage to keep track of early game RNG events to help with Zell card.',
        link: 'https://galbadia.garden/card-manip/',
        github: 'https://github.com/ff8-speedruns/card-manip'
    },
    {
        title: 'Cheat Engine Tables (PC)',
        status: statuses.WORKING,
        description: 'A file for use with Cheat Engine to manipulate various aspects of game memory.',
        link: 'https://github.com/ff8-speedruns/ff8-memory/releases',
        github: 'https://github.com/ff8-speedruns/ff8-memory'
    },
    {
        title: 'Controls Randomizer',
        status: statuses.WORKING,
        description: 'Randomizes controller inputs while playing FF8 by reading and shuffling the control mapping in the game\'s memory while you play. Has some configuration options.',
        link: 'https://github.com/ff8-speedruns/ff8-controls-randomizer/releases',
        github: 'https://github.com/ff8-speedruns/ff8-controls-randomizer'
    },
    {
        title: 'Encounter Calculator',
        status: statuses.WORKING,
        description: 'Using the previous encounter formation ID along with the encounter counter (total number of encounters) we can tell which encounter formation we will receive next.',
        link: 'https://galbadia.garden/encounter-calculator',
        github: 'https://github.com/ff8-speedruns/encounter-calculator'
    },
    {
        title: 'Esthar Practice',
        status: statuses.WORKING,
        description: 'Quick memory writer for Esthar encounter stuff.',
        link: 'https://github.com/ff8-speedruns/esthar-practice/releases',
        github: 'https://github.com/ff8-speedruns/esthar-practice'
    },
    {
        title: 'Final Party Manipulation',
        status: statuses.NEEDSTESTERS,
        description: 'Conversion of Pingval\'s final party manipulation code for Playstation and awesomeWaves\' modifications for PC ruby script to JS, so that it can be run on the web without requiring runners to install Ruby.',
        link: 'https://galbadia.garden/final-party-manip',
        github: 'https://github.com/ff8-speedruns/final-party-manip'
    },
    {
        title: 'Fish Fin Manip',
        status: statuses.WORKING,
        description: 'Table lookup for the fish fin manipulation.',
        link: 'https://galbadia.garden/fish-fins',
        github: 'https://github.com/ff8-speedruns/fish-fins'
    },
    {
        title: 'Kaivel\'s Fish Fin Manip',
        status: statuses.WORKING,
        description: 'Table lookup for Kaivel\'s alternate fish fin manipulation.',
        link: 'https://galbadia.garden/fish-fins-kai',
        github: 'https://github.com/ff8-speedruns/fish-fins-kai'
    },
    {
        title: 'Slot Manipulation',
        status: statuses.EXTERNAL,
        description: 'The End manip created by Kaivel & romaindurand',
        link: 'https://ff8-manip.romaindurand.fr/',
        github: 'https://github.com/romaindurand/ff8-slot-manip'
    }
];

export default function RootToolsList() {
    const rows = data.map((row) => {
        return (
            <tr key={row.title}>
                <td>
                    <Anchor link={row.link}>
                        {row.title}
                    </Anchor>
                </td>
                <td><Badge color={row.status.color} variant="filled">{row.status.text}</Badge></td>
                <td><Text fz="sm">{row.description}</Text></td>
                <td>
                    <ActionIcon color="blue" radius="xl" variant="light" title="Github Link" component="a" href={row.github}>
                        <IconBrandGithub />
                    </ActionIcon>
                </td>
            </tr>
        );
    });

    return (
        <ScrollArea>
            <Table sx={{ minWidth: 800 }} verticalSpacing="xs">
                <thead>
                    <tr>
                        <th>Project</th>
                        <th>Status</th>
                        <th>Description</th>
                        <th>Source</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </Table>
        </ScrollArea>
    );
}