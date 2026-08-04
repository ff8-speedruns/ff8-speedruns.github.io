import HubHeader from './components/HubHeader';
import ToolsTable from './components/ToolsTable';
import Credits from './components/Credits';

// One static page, so there's no router here. Theme, colour-scheme storage and
// the mod+J shortcut all come from FF8Provider (see main.jsx), shared with
// every tool.
export default function App() {
  return (
    <>
      <HubHeader />
      <ToolsTable />
      <Credits />
    </>
  );
}
