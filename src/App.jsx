import { HashRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import { useDisclosure } from '@mantine/hooks';
import { AppShell, Burger, Group, UnstyledButton, Text, ActionIcon, useMantineColorScheme, Title } from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons-react';
import classes from './MobileNavbar.module.css';
import Home from './pages/HomePage';
import FishFinsKaiPage from './pages/FishFinsKaiPage';
import FishFinsPage from './pages/FishFinsPage';
import CarawayCodePage from './pages/CarawayCodePage';
import CardsPage from './pages/CardsPage';
import EncounterCalculatorPage from './pages/EncounterCalculatorPage';
import FinalPartyManipPage from './pages/FinalPartyManipPage';

const pages = [
  { name: 'Home', header: '', path: '/' },
  { name: 'Codes', header: 'Caraway Code', path: '/codes' },
  { name: 'Cards', header: 'Card Manipulation', path: '/cards' },
  { name: 'Encounters', header: 'Encounter Calculator', path: '/encounters' },
  { name: 'Final Party', header: 'Final Party Calculator', path: '/final-party' },
  { name: 'Fish Fins', header: 'Fish Fins', path: '/fish-fins' },
  { name: 'Fish Fins Kai', header: 'Kaivel\'s Fish Fins', path: '/fish-fins-kai' }
];

function PageHeader() {
  const location = useLocation();
  const currentPage = pages.find(page => page.path === location.pathname);
  const pageName = currentPage ? currentPage.header : '';

  return (
    <Title order={1} mb="md" style={{
      paddingBottom: '0.5rem'
    }}>
      {pageName}
    </Title>
  );
}

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
                {pages.map((page) => (
                  <UnstyledButton key={page.name} className={classes.control} component={Link} to={page.path}>
                    {page.name}
                  </UnstyledButton>
                ))}
              </Group>
            </Group>
          </Group>
        </AppShell.Header>

        <AppShell.Navbar py="md" px={4}>
          {pages.map((page) => (
            <UnstyledButton key={page.name} className={classes.control} component={Link} to={page.path}>
              {page.name}
            </UnstyledButton>
          ))}
        </AppShell.Navbar>

        <AppShell.Main mx="md">
          <PageHeader />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/codes" element={<CarawayCodePage />} />
            <Route path="/cards" element={<CardsPage />} />
            <Route path="/encounters" element={<EncounterCalculatorPage />} />
            <Route path="/final-party" element={<FinalPartyManipPage />} />
            <Route path="/fish-fins" element={<FishFinsPage />} />
            <Route path="/fish-fins-kai" element={<FishFinsKaiPage />} />
          </Routes>
        </AppShell.Main>
      </AppShell>
    </HashRouter>
  )
}

export default App
