import React from "react";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import UserPage from "./UserPage";
import SearchPage from "./SearchPage";
import {Route, Switch, Redirect} from "react-router-dom";
import ErrorPage from "./ErrorPage";
import Menu from "./Menu";

function ContentPage() {
    return (
        <>
            <Menu/>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/about" component={AboutPage}/>
                <Route exact path="/user" component={UserPage}/>
                <Route exact path="/search" component={SearchPage}/>
                <Route exact path="/user/:fname/:lname" component={UserPage}/>
                <Route exact path="/user/:fname" component={UserPage}/>
                {/* <Route component={ErrorPage}/> */}
                <Redirect to="/"/>
            </Switch>
            {/* <HomePage />
            <AboutPage /> */}
        </>
    )
}

export default ContentPage;