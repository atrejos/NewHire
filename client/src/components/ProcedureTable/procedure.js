import React from 'react';
import AppTable from './AppTable';
import 'bootstrap/dist/css/bootstrap.min.css';
import CandidateCard from './CandidateInfoCard';
//Procedure Form Page

function Procedure() {
    return (
        <div>
            <div>
                <CandidateCard />
            </div>
            <body style={{padding: '0 10%'}}>
                <AppTable />
            </body>
        </div>
    );
  }
  
  export default Procedure;