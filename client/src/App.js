import React from 'react';
import AppNavbar from './components/AppNavbar';
import AppTable from './components/AppTable';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <AppNavbar />
      <AppTable />
    </div>
  );
}

export default App;
