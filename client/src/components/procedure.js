import React from 'react';
import AppNavbar from './components/AppNavbar';
import AppTable from './components/AppTable';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

//Procedure Form Page

function flow() {
    return (
        <div>
            <div>
                <AppNavbar />
            </div>
            <div>
                <AppTable />
            </div>
        </div>
    );
  }
  
  export default flow;