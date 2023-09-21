import React from "react";
import { Route, Switch } from 'react-router-dom';
import Home from "../pages/home";
import AllContacts from "../pages/allContacts";
import { ALL_CONTACTS, HOME, US_CONTACTS } from "./constants";
import USContacts from "../pages/usContacts";

const AllRoutes = () =>  {
    return (
        <Switch>
            {/* Route for the Home page */}
            <Route exact key="home" path={HOME} component={Home} />
            
            {/* Route for displaying all contacts */}
            <Route exact key="all" path={ALL_CONTACTS} component={AllContacts} />
            
            {/* Route for displaying US contacts */}
            <Route exact key="us" path={US_CONTACTS} component={USContacts} />
        </Switch>
    );
};

export default AllRoutes;
