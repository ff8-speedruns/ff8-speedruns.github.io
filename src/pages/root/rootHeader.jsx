import { createStyles, Container, Text, Button, Group, rem } from '@mantine/core';

const useStyles = createStyles((theme) => ({
    wrapper: {
        position: 'relative',
        boxSizing: 'border-box',
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
    },

    inner: {
        position: 'relative',
        paddingTop: rem(50),
        paddingBottom: rem(60),

        [theme.fn.smallerThan('sm')]: {
            paddingBottom: rem(80),
            paddingTop: rem(80),
        },
    },

    title: {
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        fontSize: rem(62),
        fontWeight: 900,
        lineHeight: 1.1,
        margin: 0,
        padding: 0,
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,

        [theme.fn.smallerThan('sm')]: {
            fontSize: rem(42),
            lineHeight: 1.2,
        },
    },

    description: {
        marginTop: theme.spacing.xl,
        fontSize: rem(24),

        [theme.fn.smallerThan('sm')]: {
            fontSize: rem(18),
        },
    },

    controls: {
        marginTop: `calc(${theme.spacing.xl} * 2)`,

        [theme.fn.smallerThan('sm')]: {
            marginTop: theme.spacing.xl,
        },
    },

    control: {
        paddingLeft: rem(38),
        paddingRight: rem(38),

        [theme.fn.smallerThan('sm')]: {
            height: rem(54),
            paddingLeft: rem(18),
            paddingRight: rem(18),
            flex: 1,
        },
    },
}));

export default function RootHeader() {
    const { classes } = useStyles();
    return (
        <div className={classes.wrapper}>
            <Container size={700} className={classes.inner}>
                <h1 className={classes.title}>
                    Final Fantasy{' '}
                    <Text component="span" variant="gradient" gradient={{ from: 'blue', to: 'cyan' }} inherit>
                        VIII
                    </Text>
                </h1>

                <Text className={classes.description} color="dimmed">
                    This is a collection of information, resources, and tools for Final Fantasy VIII speedrunning.
                </Text>

                <Group className={classes.controls}>
                    <Button
                        size="xl"
                        className={classes.control}
                        variant="gradient"
                        gradient={{ from: 'blue', to: 'cyan' }}
                    >
                        Get started
                    </Button>

                    <Button
                        component="a"
                        href="https://github.com/mantinedev/mantine"
                        size="xl"
                        variant="default"
                        className={classes.control}
                    >
                        GitHub
                    </Button>
                </Group>
            </Container>
        </div>
    );
}