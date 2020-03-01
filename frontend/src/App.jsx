import React from 'react';
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import CustomerDetailsContainer from "./customer/CustomerDetailsContainer";
import CustomersContainer from "./customer/CustomersContainer";
import OrderSchedulesContainer from "./orderSchedule/OrderSchedulesContainer";
import OrderScheduleDetailsContainer from "./orderSchedule/OrderScheduleDetailsContainer";

export default () => {
    return (
        <Router>
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                                <span className={'nav-link'}>
                                    <Link to="/">Home</Link>
                                </span>
                        </li>
                        <li className="nav-item">
                            <span className={'nav-link'}>
                                <Link to="/customers">Customers</Link>
                            </span>
                        </li>
                        <li className="nav-item">
                            <span className={'nav-link'}>
                                <Link to="/orderSchedules">Order Schedules</Link>
                            </span>
                        </li>
                    </ul>
                </nav>
                <br/>
                {/* Route Declarations*/}
                <Route exact path="/customers" component={CustomersContainer}/>
                <Route exact path="/customers/:id" component={CustomerDetailsContainer}/>
                <Route exact path="/orderSchedules" component={OrderSchedulesContainer}/>
                <Route exact path="/orderSchedules/:id" component={OrderScheduleDetailsContainer}/>
            </div>
        </Router>
    );
}
