import React from 'react'
import Main from '../components/main.jsx'
import ViewProfile from '../components/ViewProfile'
import StudentProfile from '../components/StudentProfile'
import PDtracker from '../components/PDtracker'
import { Route } from 'react-router-dom'
//PDtracker
function DashBoard(){
    return(
        <>
     {/* <StudentProfile /> 
    <ViewProfile />
    <Main />
    <PDtracker /> */}
    <Route exact path="/" component={Main}/>
    <Route exact path="/PDtracker" component={PDtracker}/>
    <Route exact path="/ViewProfile" component={ViewProfile}/>
    <Route exact path="/StudentProfile" component={StudentProfile}/>
    </>
    )
}
export default DashBoard;