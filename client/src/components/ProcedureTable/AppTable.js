import React from 'react';
import { Table, Button } from 'reactstrap';
import AppButtonDrop from './AppButtonDrop';
import RowElement from './RowElement';

const AppTable = (props) => {
  return (
    <Table hover striped responsive size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>Date Completed</th>
          <th>Step</th>
          <th>Form</th>
          <th>CompletedBy</th>
          <th>Procedure</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <RowElement num="1" DateIn="10/31/19" Step="Recieved Paperwork" Form=" " CompletedBy="From Hiring Supervisor" Procedure="Print and add to file"/>
        <RowElement num="2" DateIn="10/31/19" Step="Request B/G Check" Form="CBC Form" CompletedBy="Athletics HR" Procedure="Print and attach email SEND EMAIL TO SUPERVISOR"/>
        <RowElement num="3" DateIn="10/31/19" Step="Send 1-3 to Compliance" Form="" CompletedBy="Athletics HR" Procedure="Print and attach email"/>
        <RowElement num="4" DateIn="10/31/19" Step="Request to Hire Approval" Form="" CompletedBy="Athletics HR" Procedure="Replace Original RTH form with approved form"/>
        <RowElement num="5" DateIn="10/31/19" Step="Intern Application and Degree Documentation from College" Form="If Applicable" CompletedBy="Athletics HR"/>
        <RowElement num="6" DateIn="10/31/19" Step="B/G Check Cleared" Form="Email from TAMU HR" CompletedBy="" Procedure="Employment File"/>
        <RowElement num="7" DateIn="10/31/19" Step="Send email to employee (cc manager) to bring in ID's for I-9 processing" Procedure="Print and attach email"/>
        <RowElement num="8" DateIn="10/31/19" Step="ID's" Form="DL-Social-Passport-BC" CompletedBy="Athletics HR" Procedure="FOR I-9, Copy and add to file"/>
        <RowElement num="9" DateIn="10/31/19" Step="Request UIN if non-student" Form="UIN Manager" CompletedBy="Athletics HR"/>
        <RowElement num="10" DateIn="10/31/19" Step="I-9 Processed" Form="Guardian Action" CompletedBy="Athletics HR"/>
        <RowElement num="11" DateIn="10/31/19" Step="Selective Service" Form="http://www.sss.gov" CompletedBy="Check Status and Print Letter" Procedure="Employment File"/>
        <RowElement num="12" DateIn="10/31/19" Step="Compliance Education Form" Form="Paper Form" CompletedBy="Athletics HR" Procedure="Employment File"/>
        <RowElement num="13" DateIn="10/31/19" Step="Employee Confidentiality" Form="Paper Form" CompletedBy="Athletics HR" Procedure="Employment File"/>      
        <RowElement num="14" DateIn="10/31/19" Step="Email Setup (if applicable)" Form="AIT Helpdesk" CompletedBy="Athletics HR" Procedure="Submit Ticket and print email"/>
        <RowElement num="15" DateIn="10/31/19" Step="Processed in Workday to hire" Form="(add uin# in comments)" CompletedBy="Athletics HR" Procedure="SEND EMAIL TO SUPERVISOR"/>
        <RowElement num="16" DateIn="10/31/19" Step="I-9 E-Verify" Form="Guardian Action" CompletedBy="Athletics HR" Procedure="Submit Ticket and print email"/>
        <RowElement num="17" DateIn="10/31/19" Step="Costing Allocations" Form="Workday Action" CompletedBy="Athletics HR" Procedure="Initial of Person Completed"/>
        <RowElement num="18" DateIn="10/31/19" Step="Background Entry" Form="Workday Action" CompletedBy="Athletics HR" Procedure="Initial of Person Completed"/>
        <RowElement num="19" DateIn="10/31/19" Step="Selective Service Entry" Form="Workday Action" CompletedBy="Athletics HR" Procedure="Initial of Person Completed"/>
        <RowElement num="20" DateIn="10/31/19" Step="Mail Stop Entry" Form="Workday Action" CompletedBy="Athletics HR" Procedure="Initial of Person Completed"/>
        <RowElement num="21" DateIn="10/31/19" Step="Submit Completed Onboarding Task" Form="Workday Action" CompletedBy="Athletics HR"/>
        <RowElement num="22" DateIn="10/31/19" Step="Scan into Laserfiche" CompletedBy="Remove Personal Information (I-9,SSN,IDs) and Scan as TIF" Procedure="Initial of Person Completed"/>      
      </tbody>
    </Table>
  );
}

export default AppTable;