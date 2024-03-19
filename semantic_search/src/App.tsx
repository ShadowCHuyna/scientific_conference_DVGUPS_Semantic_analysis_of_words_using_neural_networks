import { Box, CircularProgress, Container } from '@mui/material';
import * as React from 'react';
import SearchAppBar from './components/SearchPage/appBar/SearchAppBar';
import SearchSettings from './components/SearchPage/SearchSettings/SearchSettings';
import SearchList from './components/SearchPage/SearchList/SearchList';
import SettingsPage from './components/SettingsPage/SettingsPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SearchPage from './components/SearchPage/SearchPage';
import { MainApp } from './utils/MainApp';


export default function App() {
  MainApp.init()
  
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="SettingsPage" element={<SettingsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

