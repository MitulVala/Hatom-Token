import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ThemeModeContextProvider from './contexts/ThemeModeContext';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const THEME = createTheme({
  typography: {
    "fontFamily": `"Arial"`,
    "fontSize": 14,
    "fontWeightLight": 300,
    "fontWeightRegular": 400,
    "fontWeightMedium": 500
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={THEME}>
    <ThemeModeContextProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ThemeModeContextProvider>
  </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
