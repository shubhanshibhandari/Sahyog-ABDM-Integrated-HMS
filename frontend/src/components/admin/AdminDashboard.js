import React, {useState} from 'react';
import Doctor from "./Doctor";
import AdminHome from "./AdminHome";
import Staff from "./Staff";
import {Button, Col} from "reactstrap"
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarFooter,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
} from 'cdbreact';
import Sidebar from "./Sidebar";
import PatchURL from "./PatchURL";
function AdminDashboard({user}) {
    const falseState = {
        adminHome: false,
        doctor: false,
        staff: false,
        patch:false
    }

    const [adminState,setAdminState] = useState({
        adminHome: true,
        doctor: false,
        staff: false,
        patch:false
    })
    const handleDashboard = (action)=> {
        console.log(action)
        switch(action) {

            case "ADMIN-HOME":
                setAdminState({
                    ...falseState,
                    adminHome: true
                })
                break;

            case "DOCTOR":
                setAdminState({
                    ...falseState,
                    doctor: true
                })
                break;

            case "STAFF":
                setAdminState({
                    ...falseState,
                    staff: true
                })
                break;
            case "PATCH":
                setAdminState({
                    ...falseState,
                    patch: true
                })
                break;
        }
    }
    return (

        <div className="container-fluid">
            <div className="row">
                <Col md="3" lg="2">
                <Sidebar handleDashboard={handleDashboard} state = {adminState}/>
                </Col>
                <Col md="9" lg ="8">
                     <div className="row">
                         <h5>Dashboard</h5>
                         <div>
                             <div style={ {height: 1000}}>
                                 {adminState.doctor && <Doctor/>}
                                 {adminState.staff && <Staff/>}
                                 {adminState.adminHome && <AdminHome/>}
                                 {adminState.patch && <PatchURL/>}
                             </div>
                         </div>
                     </div>
                </Col>
            </div>
        </div>


    )
}

export default AdminDashboard

// <div className="row">
//     <Sidebar handleDashboard={handleDashboard}/>
// <div className="col" style={{height: '100vh'}}>
//
// </div>
// </div>