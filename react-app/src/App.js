import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { shape } from 'prop-types'
import { connect } from "react-redux";
import { HomePage } from "./screens/home";
import { SurveyPage } from "./screens/survey";
import { EmailScreen } from "./screens/emailscreen";
import {SurveyStart} from './screens/surveystart'
import {ThanksForSurvey} from './screens/thankforsurvey'
import {Results} from './screens/results'
import { Route, withRouter, Redirect ,BrowserRouter as Router} from "react-router-dom";
class ProtectedRoute extends Component {
  render() {
    const { component: Component, ...props } = this.props;
    return (
        <Route
            {...props}
            render={matchProps => {
                return (
                    <Component {...matchProps} />
                )
            }}
        />
    )
  }
}
class App extends Component {
    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {

    }


     render(){
         return (<div className="App">
             <div style={{ position: "relative" }}>
                 <Route exact path="/" component={HomePage} />
                 <Route exact path="/life" component={SurveyPage} />
                 <Route exact path="/survey/thanks" component={ThanksForSurvey} />
                 <Route exact path="/survey/email" component={EmailScreen} />
                 <Route exact path="/survey/recommendation" component={Results} />
                 <ProtectedRoute
                     exact
                     path="/life/questions/:id"
                     component={SurveyStart}

                 />
             </div>
         </div>)
     }
}

const mapStateToProp = state => {
    return {

    };
};
export default withRouter(connect(mapStateToProp)(App));