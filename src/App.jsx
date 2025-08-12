import { HashRouter, Routes, Route, Link } from "react-router-dom";
import { useDisclosure } from '@mantine/hooks';
import { AppShell, Burger, Group, UnstyledButton, Text, ActionIcon, useMantineColorScheme } from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons-react';
import classes from './MobileNavbar.module.css';
import Home from './pages/HomePage';

function App() {
  const [opened, { toggle }] = useDisclosure();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';

  return (
    <HashRouter>
      <AppShell
        header={{ height: 60 }}
        navbar={{ width: 300, breakpoint: 'sm', collapsed: { desktop: true, mobile: !opened } }}
        padding="md"
      >
        <AppShell.Header>
          <Group h="100%" px="md">
            <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
            <Group justify="space-between" style={{ flex: 1 }}>
              <Group>
                <ActionIcon
                  size="lg"
                  variant="outline"
                  color={dark ? 'yellow' : 'blue'}
                  onClick={() => toggleColorScheme()}
                  title="Toggle color scheme"
                >
                  {dark ? <IconSun size="1.1rem" /> : <IconMoonStars size="1.1rem" />}
                </ActionIcon>

                <Text component="span" variant="gradient" gradient={{ from: 'blue', to: 'cyan' }} inherit>
                  Final Fantasy VIII
                </Text>
              </Group>
              <Group ml="xl" gap={0} visibleFrom="sm">
                <UnstyledButton className={classes.control} component={Link} to={"/"}>Home</UnstyledButton>
                <UnstyledButton className={classes.control} component={Link} to={"/codes"}>Codes</UnstyledButton>
                <UnstyledButton className={classes.control} component={Link} to={"/cards"}>Cards</UnstyledButton>
                <UnstyledButton className={classes.control} component={Link} to={"/encounters"}>Encounters</UnstyledButton>
                <UnstyledButton className={classes.control} component={Link} to={"/final-party"}>Final Party</UnstyledButton>
                <UnstyledButton className={classes.control} component={Link} to={"/fish-fins"}>Fish Fins</UnstyledButton>
                <UnstyledButton className={classes.control} component={Link} to={"/fish-fins-kai"}>Fish Fins Kai</UnstyledButton>
              </Group>
            </Group>
          </Group>
        </AppShell.Header>

        <AppShell.Navbar py="md" px={4}>
          {
            //TODO: Replace with links to other pages
          }
          <UnstyledButton className={classes.control}>Home</UnstyledButton>
          <UnstyledButton className={classes.control}>Blog</UnstyledButton>
          <UnstyledButton className={classes.control}>Contacts</UnstyledButton>
          <UnstyledButton className={classes.control}>Support</UnstyledButton>
        </AppShell.Navbar>

        <AppShell.Main >
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </AppShell.Main>
      </AppShell>
    </HashRouter>
  )
}

export default App
