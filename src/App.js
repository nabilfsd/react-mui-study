import ImageCard from "./components/ImageCard";
import * as React from 'react';
import HeaderSection from "./components/HeaderSection";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material";
import theme from './utils/theme';


function App() {

  return (
    <React.Fragment>
      <CssBaseline></CssBaseline>
      <ThemeProvider theme={theme}>
        <div className="app">
          <HeaderSection></HeaderSection>
          <ImageCard></ImageCard>
        </div>
      </ThemeProvider>
    </React.Fragment>
    )
}

export default App;
