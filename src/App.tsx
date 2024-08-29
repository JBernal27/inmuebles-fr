import './App.css'
import {
  Experimental_CssVarsProvider as MaterialCssVarsProvider,
  THEME_ID as MATERIAL_THEME_ID,
} from "@mui/material/styles";
import { CssVarsProvider as JoyCssVarsProvider } from "@mui/joy/styles";
import { joyTheme, materialTheme } from './theme';
import { CssBaseline } from '@mui/material';
import { Route } from "react-router-dom";
import Home from './components/pages/public/home/home.page';
import { RoutesWithNotFound } from './components/utilities/routes-with-not-found';

function App() {
  return (
    <MaterialCssVarsProvider theme={{ [MATERIAL_THEME_ID]: materialTheme }}>
      <JoyCssVarsProvider theme={joyTheme}>
        <CssBaseline enableColorScheme />
        <RoutesWithNotFound>
          <Route path={"/"} element={<Home />} />
        </RoutesWithNotFound>
      </JoyCssVarsProvider>
    </MaterialCssVarsProvider>
  )
}

export default App
