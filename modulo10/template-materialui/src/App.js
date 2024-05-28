import Header from "./components/header";
import ListarTarefa from "./pages/tarefa/ListarTarefa";
import Login from "./pages/Login";
import DataGridDemo from "./pages/DataGrid/dataGrid";
import ToggleColorMode from "./components/DarkTheme";
import ActionAreaCard from "./components/card";
import Box from '@mui/material/Box';
import IconCheckboxes from "./components/icons";


function App() {
  return (
    <div className="App">
      <Header />
      <ToggleColorMode />
      
      <Login/>
      <Box sx={{ display: 'flex', gap: 2 }}>
        <ActionAreaCard />
        <ActionAreaCard />
        <ActionAreaCard />
        <ActionAreaCard />

      </Box>
      <IconCheckboxes/>
      
      
    </div>
  );
}

export default App;
