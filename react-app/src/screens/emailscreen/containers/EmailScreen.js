import React, { Component } from "react";
import styled from "styled-components";

import styles from '../surveyintro.css'

import cookie from 'react-cookies'
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
const API_URL = "http://27.71.232.36:8243/api/info"

class EmailScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scrollToIndex: 0,
            email : '',
            firstName : '',
            isValidEmail : false,
            cookie :  cookie.load('ref_token')
        };
        //var cookie =  cookie.load('ref_token')
        //this.handleChange = this.handleChange.bind(this)

    }

    onSubmitEmail(){
        var bodyPost =  JSON.stringify({
            email: this.state.email,
            firstName: this.state.firstName,
            ref_token: this.state.cookie
        })

        fetch(API_URL,{
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
            },
            body:bodyPost
        }).then(response => {
            console.log(response)

            window.location.href =  window.location.origin +  '/survey/thanks'
        })
            .catch(error =>{
                console.log(error)

                window.location.href =  window.location.origin +  '/survey/thanks'
            })
    }

    componentDidMount() {
        this.clearHomeView()
    }
    validate = (text) => {
        console.log(text);
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
        if(reg.test(text) === false)
        {
            console.log("Email is Not Correct");
            this.setState({isValidEmail:false})
            return false;
        }
        else {
            this.setState({isValidEmail:true})
            console.log("Email is Correct");
        }
    }

    clearHomeView(){
        document.getElementById('root').remove()
        //React.unmountComponentAtNode(document.getElementById('root'));
    }

    onSurveyStart(){
        if(this.state.isValidEmail){

            this.onSubmitEmail()
        }else{
                alert("Invalid email address")
        }

    }
    render() {

        return(<div>
            <div id="root">
                <div className="jsx-3477327004 App">
                    <div className="jsx-3990040374 nav-container">
                        <nav aria-label="main navigation" className="jsx-3990040374 navbar">
                            <div className="jsx-3990040374 navbar-brand"><a className="home-link"
                                                                            href="/?utm_source=policyme"><img
                                src="data:image/svg+xml,%3Csvg xmlns=&#x27;http://www.w3.org/2000/svg&#x27; width=&#x27;130&#x27; height=&#x27;30&#x27; viewBox=&#x27;0 0 130 30&#x27;%3E%3Cg fill=&#x27;none&#x27; fill-rule=&#x27;evenodd&#x27;%3E%3Cpath fill=&#x27;%23363636&#x27; d=&#x27;M.065 22.295V1.005h7.733c2.505 0 4.52.66 6.044 1.98 1.524 1.32 2.286 3.059 2.286 5.219 0 2.252-.8 4.063-2.4 5.433-1.601 1.37-3.706 2.056-6.314 2.056H3.057v6.602H.065zm2.992-9.353h4.649c1.626 0 2.943-.438 3.95-1.315 1.008-.876 1.511-2.017 1.511-3.423 0-1.325-.5-2.394-1.503-3.21-1.003-.815-2.322-1.222-3.958-1.222h-4.65v9.17zM20.21 20.553c-1.483-1.488-2.225-3.337-2.225-5.548s.744-4.048 2.232-5.51c1.489-1.462 3.347-2.193 5.577-2.193 2.21 0 4.06.734 5.554 2.201 1.493 1.467 2.24 3.301 2.24 5.502 0 2.2-.747 4.045-2.24 5.532-1.493 1.488-3.344 2.232-5.554 2.232-2.23 0-4.091-.739-5.584-2.216zm.66-5.548c0 1.437.465 2.652 1.396 3.645.93.993 2.107 1.49 3.528 1.49 1.401 0 2.565-.497 3.49-1.49.926-.993 1.39-2.208 1.39-3.645 0-1.416-.464-2.616-1.39-3.6-.925-.983-2.089-1.474-3.49-1.474-1.421 0-2.598.489-3.528 1.467-.931.978-1.397 2.18-1.397 3.607zM37.454 22.295V.073h2.885v22.222zM45.555 3.527c-.358-.346-.537-.78-.537-1.299 0-.52.18-.952.537-1.299.358-.346.803-.52 1.335-.52.522 0 .966.174 1.335.52.368.347.552.78.552 1.3 0 .519-.184.952-.552 1.298-.369.347-.813.52-1.335.52-.532 0-.977-.173-1.335-.52zm-.077 18.768V7.685h2.87v14.61h-2.87zM52.52 15.005c0-2.19.732-4.022 2.194-5.494 1.463-1.473 3.304-2.209 5.524-2.209 1.81 0 3.37.517 4.679 1.551 1.31 1.035 2.097 2.377 2.363 4.028h-2.946a3.532 3.532 0 0 0-1.42-2.148c-.74-.535-1.633-.802-2.676-.802-1.453 0-2.621.486-3.506 1.46-.885.972-1.327 2.177-1.327 3.614 0 1.426.445 2.624 1.334 3.591.89.968 2.056 1.452 3.499 1.452 1.043 0 1.935-.265 2.677-.794a3.496 3.496 0 0 0 1.419-2.125h2.946c-.266 1.64-1.054 2.975-2.363 4.004-1.31 1.03-2.87 1.544-4.68 1.544-1.462 0-2.784-.336-3.965-1.009a7.19 7.19 0 0 1-2.762-2.766c-.66-1.172-.99-2.47-.99-3.897zM68.399 7.654h3.114l5.784 11.92 5.34-11.92h3.053l-9.942 22.221H72.71l3.1-6.953z&#x27;/%3E%3Cpath fill=&#x27;%231BB0DB&#x27; d=&#x27;M89.449 22.295V1.005h2.194l8.423 13.817 8.423-13.817h2.24v21.29h-3.023V7.608l-6.658 10.897H99.13L92.41 7.516l.061 14.779H89.45zm25.637-7.29c0-1.447.317-2.754.95-3.92a7.003 7.003 0 0 1 2.717-2.766c1.176-.678 2.516-1.017 4.02-1.017 1.36 0 2.584.321 3.674.963A6.736 6.736 0 0 1 129 10.947c.614 1.146.926 2.448.936 3.905 0 .55-.02.963-.061 1.238l-.062-.03v.03H117.94c.215 1.212.75 2.206 1.604 2.98.854.775 1.96 1.162 3.321 1.162.86 0 1.596-.16 2.21-.482.613-.32 1.073-.766 1.38-1.337h3.115c-.42 1.304-1.246 2.34-2.478 3.11-1.233.77-2.672 1.154-4.319 1.154-2.26 0-4.106-.731-5.538-2.193-1.432-1.462-2.148-3.288-2.148-5.48zm2.853-1.07h9.083c-.123-1.274-.57-2.285-1.342-3.034-.773-.749-1.783-1.123-3.03-1.123-1.29 0-2.345.387-3.169 1.162-.823.774-1.337 1.772-1.542 2.995z&#x27;/%3E%3C/g%3E%3C/svg%3E%0A"
                                alt="PolicyMe" className="jsx-3990040374"/></a><a className="home-link-icon"
                                                                                  href="https://www.policyme.com?utm_source=policyme"><img
                                src="data:image/svg+xml,%3Csvg xmlns=&#x27;http://www.w3.org/2000/svg&#x27; width=&#x27;130&#x27; height=&#x27;30&#x27; viewBox=&#x27;0 0 130 30&#x27;%3E%3Cg fill=&#x27;none&#x27; fill-rule=&#x27;evenodd&#x27;%3E%3Cpath fill=&#x27;%23363636&#x27; d=&#x27;M.065 22.295V1.005h7.733c2.505 0 4.52.66 6.044 1.98 1.524 1.32 2.286 3.059 2.286 5.219 0 2.252-.8 4.063-2.4 5.433-1.601 1.37-3.706 2.056-6.314 2.056H3.057v6.602H.065zm2.992-9.353h4.649c1.626 0 2.943-.438 3.95-1.315 1.008-.876 1.511-2.017 1.511-3.423 0-1.325-.5-2.394-1.503-3.21-1.003-.815-2.322-1.222-3.958-1.222h-4.65v9.17zM20.21 20.553c-1.483-1.488-2.225-3.337-2.225-5.548s.744-4.048 2.232-5.51c1.489-1.462 3.347-2.193 5.577-2.193 2.21 0 4.06.734 5.554 2.201 1.493 1.467 2.24 3.301 2.24 5.502 0 2.2-.747 4.045-2.24 5.532-1.493 1.488-3.344 2.232-5.554 2.232-2.23 0-4.091-.739-5.584-2.216zm.66-5.548c0 1.437.465 2.652 1.396 3.645.93.993 2.107 1.49 3.528 1.49 1.401 0 2.565-.497 3.49-1.49.926-.993 1.39-2.208 1.39-3.645 0-1.416-.464-2.616-1.39-3.6-.925-.983-2.089-1.474-3.49-1.474-1.421 0-2.598.489-3.528 1.467-.931.978-1.397 2.18-1.397 3.607zM37.454 22.295V.073h2.885v22.222zM45.555 3.527c-.358-.346-.537-.78-.537-1.299 0-.52.18-.952.537-1.299.358-.346.803-.52 1.335-.52.522 0 .966.174 1.335.52.368.347.552.78.552 1.3 0 .519-.184.952-.552 1.298-.369.347-.813.52-1.335.52-.532 0-.977-.173-1.335-.52zm-.077 18.768V7.685h2.87v14.61h-2.87zM52.52 15.005c0-2.19.732-4.022 2.194-5.494 1.463-1.473 3.304-2.209 5.524-2.209 1.81 0 3.37.517 4.679 1.551 1.31 1.035 2.097 2.377 2.363 4.028h-2.946a3.532 3.532 0 0 0-1.42-2.148c-.74-.535-1.633-.802-2.676-.802-1.453 0-2.621.486-3.506 1.46-.885.972-1.327 2.177-1.327 3.614 0 1.426.445 2.624 1.334 3.591.89.968 2.056 1.452 3.499 1.452 1.043 0 1.935-.265 2.677-.794a3.496 3.496 0 0 0 1.419-2.125h2.946c-.266 1.64-1.054 2.975-2.363 4.004-1.31 1.03-2.87 1.544-4.68 1.544-1.462 0-2.784-.336-3.965-1.009a7.19 7.19 0 0 1-2.762-2.766c-.66-1.172-.99-2.47-.99-3.897zM68.399 7.654h3.114l5.784 11.92 5.34-11.92h3.053l-9.942 22.221H72.71l3.1-6.953z&#x27;/%3E%3Cpath fill=&#x27;%231BB0DB&#x27; d=&#x27;M89.449 22.295V1.005h2.194l8.423 13.817 8.423-13.817h2.24v21.29h-3.023V7.608l-6.658 10.897H99.13L92.41 7.516l.061 14.779H89.45zm25.637-7.29c0-1.447.317-2.754.95-3.92a7.003 7.003 0 0 1 2.717-2.766c1.176-.678 2.516-1.017 4.02-1.017 1.36 0 2.584.321 3.674.963A6.736 6.736 0 0 1 129 10.947c.614 1.146.926 2.448.936 3.905 0 .55-.02.963-.061 1.238l-.062-.03v.03H117.94c.215 1.212.75 2.206 1.604 2.98.854.775 1.96 1.162 3.321 1.162.86 0 1.596-.16 2.21-.482.613-.32 1.073-.766 1.38-1.337h3.115c-.42 1.304-1.246 2.34-2.478 3.11-1.233.77-2.672 1.154-4.319 1.154-2.26 0-4.106-.731-5.538-2.193-1.432-1.462-2.148-3.288-2.148-5.48zm2.853-1.07h9.083c-.123-1.274-.57-2.285-1.342-3.034-.773-.749-1.783-1.123-3.03-1.123-1.29 0-2.345.387-3.169 1.162-.823.774-1.337 1.772-1.542 2.995z&#x27;/%3E%3C/g%3E%3C/svg%3E%0A"
                                alt="PolicyMe" className="jsx-3990040374"/></a>
                                <div className="jsx-3990040374 right-items">
                                    <button type="button" style={{backgroundColor:'transparent'}}
                                            className="jsx-153874796 item"><span
                                        className="jsx-153874796 question">?</span></button>
                                </div>
                            </div>
                        </nav>
                    </div>
                    <div className="jsx-2764992642 loader">
                        <div style={{animation:'spin 1s linear infinite'}} className="jsx-3757454469 spinner "></div>
                    </div>
                    <main className="jsx-3477327004">
                        <div className="jsx-3477327004 main">
                            <div className="jsx-2854776454 container   advisor">
                                <div className="jsx-120979117 advisorContainer"><img alt=""
                                                                                     src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPAwRVxjuBy1ZeQRoMYcaWpAy2KfSchGZLk6yK5asE-lEgvG26xA"
                                                                                     className="jsx-120979117 alex-img"/>
                                </div>
                                <div className="jsx-588172725 heading"><h1 className="jsx-588172725 ">Thanks! That's all I need to make my recommendation.</h1>
                                </div>
                                <p className="jsx-2656848681"><p>We’ll use this email address to save your recommendation. </p>
                                    <p>Your email is always safe with us.</p>
                                </p>
                                <br/>

                                <div style={{ flex: 1, flexDirection: 'column',width:'100%',display: 'flex'
                                    , justifyContent:'center', alignItems:'center'}}>
                                    <input
                                        className="inputEmailName"
                                        id="se_firstName"
                                        placeholder={'First Name'}
                                        onChange={(event)=>{
                                            var inputValue = event.target.value
                                            this.setState({
                                                firstName:inputValue
                                            },()=>{
                                                //  this.props.handleChange("se_firstName",inputValue)
                                               // this.handleChange()
                                            })
                                        }}
                                        // onChange={this.handleChange.bind(this)}
                                        value={this.state.firstName}
                                    ></input>
                                </div>
                                <br/>
                                <div style={{ flex: 1, flexDirection: 'column',width:'100%',display: 'flex'
                                    , justifyContent:'center', alignItems:'center'}}>
                                    <input
                                        id="se_email"
                                        className="inputEmailName"
                                        placeholder={'Email'}
                                        onChange={(event)=>{
                                            var inputValue = event.target.value
                                            this.setState({
                                                email:inputValue
                                            },()=>{
                                                this.validate(inputValue)
                                                //  this.props.handleChange("se_email",inputValue)
                                              //  this.handleChange()
                                            })
                                        }}
                                        // onChange={this.handleChange.bind(this)}
                                        value={this.state.email}
                                    />
                                </div>
                                {!this.state.isValidEmail?  (<span style={{color: "red"}}>Invalid email address</span>) : null}

                                <br/>
                                <br/>
                                <div className="jsx-2656848681-survey button-container-survey">
                                    <button onClick={this.onSurveyStart.bind(this)} type="submit"
                                            className="jsx-3793907981 jsx-1013809249 jsx-454034926 jsx-702405775 jsx-3044182086-survey jsx-1705429334-survey undefined btn-primary border-radius btn-survey">Get
                                        Recommendation
                                    </button>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>

        </div>)
    }


}

const mapStateToProp = state => {
    return {

    };
};

export default withRouter(connect(mapStateToProp)(EmailScreen));

const Wrapper = styled.div`
  .btn-install {
    display: flex;
    justify-content: center;
    flex-wrap: nowrap;
    align-items: center;
    .btn-link {
      margin: 10px 10px;
      img {
        max-width: 100%;
      }
    }
  }
 
`;
