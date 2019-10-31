import React from 'react';
import AppNavbar from './AppNavbar';
import AppTable from './AppTable';
import 'bootstrap/dist/css/bootstrap.min.css';

//Procedure Form Page

function Procedure() {
    return (
        <div>
            {/* <div>
                <AppNavbar />
            </div> */}
            <body style={{padding: '10%'}}>
                <AppTable />
            </body>
        </div>
    );
  }
  
  export default Procedure;