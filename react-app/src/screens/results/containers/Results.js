import React, { Component } from "react";
import styled from "styled-components";

import cookie from 'react-cookies'

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import styles from '../surveyintro.css'
const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
})
class Results extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scrollToIndex: 0,
            email : '',
            data : cookie.load('data_survey'),
            firstName : ''
        };

        //this.handleChange = this.handleChange.bind(this)

    }

    componentDidMount() {
        this.clearHomeView()
    }

    onThankStart(){
        window.location.href =  window.location.origin  ;

    }
    clearHomeView(){
        document.getElementById('root').remove()
        //React.unmountComponentAtNode(document.getElementById('root'));
    }

    onSurveyStart(){
       //window.location.href =  window.location.origin +  "/life/questions/1";

    }


    render() {
        var data = this.state.data

        var totalEducation = 0
        if(data.children != undefined){
            for (let i=0; i< data.children.length; i++) {
                totalEducation  += data.children[i].education_fees.postgrad_year_1
            }
        }

        return(  <div className="form-group" style={{display: 'flex', justifyContent:'center', alignItems:'center'}}>
            <div style={{width:460}}>
                <div className="jsx-120979117 advisorContainer"><img alt=""
                                                                     src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPAwRVxjuBy1ZeQRoMYcaWpAy2KfSchGZLk6yK5asE-lEgvG26xA"
                                                                     className="jsx-120979117 alex-img"/>
                </div>




                <div className="jsx-405667435">

                    <h4>Client</h4>
                    <div className="jsx-3204514433 inputRow has-tooltip big  ">

                        <label className="jsx-3204514433" style={{display: 'flex',flex:1, flexDirection: 'row' }}>
                            <div className="jsx-3204514433 label-container has-tooltip big "
                                 style={{flex:2,marginTop:25,   textAlign :'left', justifyContent:'left', alignItems:'left'}}>Life Insurance
                            </div>
                            <div style={{flex:1}} className="jsx-3204514433 content-container has-tooltip big ">
                                <div
                                    className="jsx-819937489 jsx-3124856362 jsx-3124856362 jsx-3210304440 inputContainer   ">
                                    <input name="exps_utilities" type="tel" max="999999" id="exps_utilities"
                                           placeholder="$" data-number="false" data-form-id="f7VVY9LqJe"
                                           aria-describedby="exps_utilities-errors"
                                           className="jsx-819937489 jsx-3124856362 jsx-3124856362 jsx-3210304440"
                                           value={formatter.format(data.client.life_insurance) } />

                                </div>
                            </div>
                        </label></div>

                    <div className="jsx-3204514433 inputRow has-tooltip big  ">

                        <label className="jsx-3204514433" style={{display: 'flex',flex:1, flexDirection: 'row' }}>
                            <div className="jsx-3204514433 label-container has-tooltip big "
                                 style={{flex:2,marginTop:25,   textAlign :'left', justifyContent:'left', alignItems:'left'}}>Critical Illness
                            </div>
                            <div style={{flex:1}} className="jsx-3204514433 content-container has-tooltip big ">
                                <div
                                    className="jsx-819937489 jsx-3124856362 jsx-3124856362 jsx-3210304440 inputContainer   ">
                                    <input name="exps_utilities" type="tel" max="999999" id="exps_utilities"
                                           placeholder="$" data-number="false" data-form-id="f7VVY9LqJe"
                                           aria-describedby="exps_utilities-errors"
                                           className="jsx-819937489 jsx-3124856362 jsx-3124856362 jsx-3210304440"
                                           value={formatter.format(data.client.critical_illness) } />
                                </div>
                            </div>
                        </label></div>
                    <div className="jsx-3204514433 inputRow has-tooltip big  ">

                        <label className="jsx-3204514433" style={{display: 'flex',flex:1, flexDirection: 'row' }}>
                            <div className="jsx-3204514433 label-container has-tooltip big "
                                 style={{flex:2,marginTop:25,   textAlign :'left', justifyContent:'left', alignItems:'left'}}>Accidental Death Benefit
                            </div>
                            <div style={{flex:1}} className="jsx-3204514433 content-container has-tooltip big ">
                                <div
                                    className="jsx-819937489 jsx-3124856362 jsx-3124856362 jsx-3210304440 inputContainer   ">
                                    <input name="exps_utilities" type="tel" max="999999" id="exps_utilities"
                                           placeholder="$" data-number="false" data-form-id="f7VVY9LqJe"
                                           aria-describedby="exps_utilities-errors"
                                           className="jsx-819937489 jsx-3124856362 jsx-3124856362 jsx-3210304440"
                                           value={formatter.format(data.client.accidental_death_benefit) } />
                                </div>
                            </div>
                        </label></div>

                    <div className="jsx-3204514433 inputRow has-tooltip big  ">

                        <label className="jsx-3204514433" style={{display: 'flex',flex:1, flexDirection: 'row' }}>
                            <div className="jsx-3204514433 label-container has-tooltip big "
                                 style={{flex:2,marginTop:25,   textAlign :'left', justifyContent:'left', alignItems:'left'}}>Wavier of Premium
                            </div>
                            <div style={{flex:1}} className="jsx-3204514433 content-container has-tooltip big ">
                                <div
                                    className="jsx-819937489 jsx-3124856362 jsx-3124856362 jsx-3210304440 inputContainer   ">
                                    <input name="exps_utilities" type="tel" max="999999" id="exps_utilities"
                                           placeholder="$" data-number="false" data-form-id="f7VVY9LqJe"
                                           aria-describedby="exps_utilities-errors"
                                           className="jsx-819937489 jsx-3124856362 jsx-3124856362 jsx-3210304440"
                                           value={formatter.format(data.client.wavier_of_premium) } />
                                </div>
                            </div>
                        </label></div>

                    <div className="jsx-3204514433 inputRow has-tooltip big  ">

                        <label className="jsx-3204514433" style={{display: 'flex',flex:1, flexDirection: 'row' }}>
                            <div className="jsx-3204514433 label-container has-tooltip big "
                                 style={{flex:2,marginTop:25,   textAlign :'left', justifyContent:'left', alignItems:'left'}}>Long Term Care
                            </div>
                            <div style={{flex:1}} className="jsx-3204514433 content-container has-tooltip big ">
                                <div
                                    className="jsx-819937489 jsx-3124856362 jsx-3124856362 jsx-3210304440 inputContainer   ">
                                    <input name="exps_utilities" type="tel" max="999999" id="exps_utilities"
                                           placeholder="$" data-number="false" data-form-id="f7VVY9LqJe"
                                           aria-describedby="exps_utilities-errors"
                                           className="jsx-819937489 jsx-3124856362 jsx-3124856362 jsx-3210304440"
                                           value={formatter.format(data.client.long_term_care) } />
                                </div>
                            </div>
                        </label></div>


                    <div className="jsx-3204514433 inputRow has-tooltip big  ">

                        <label className="jsx-3204514433" style={{display: 'flex',flex:1, flexDirection: 'row' }}>
                            <div className="jsx-3204514433 label-container has-tooltip big "
                                 style={{flex:2,marginTop:25,   textAlign :'left', justifyContent:'left', alignItems:'left'}}>Family Income Benefit ($)
                            </div>
                            <div style={{flex:1}} className="jsx-3204514433 content-container has-tooltip big ">
                                <div
                                    className="jsx-819937489 jsx-3124856362 jsx-3124856362 jsx-3210304440 inputContainer   ">
                                    <input name="exps_utilities" type="tel" max="999999" id="exps_utilities"
                                           placeholder="$" data-number="false" data-form-id="f7VVY9LqJe"
                                           aria-describedby="exps_utilities-errors"
                                           className="jsx-819937489 jsx-3124856362 jsx-3124856362 jsx-3210304440"
                                           value={formatter.format(data.client.family_income_benefit) } />
                                </div>
                            </div>
                        </label></div>


                    <div className="jsx-3204514433 inputRow has-tooltip big  ">

                        <label className="jsx-3204514433" style={{display: 'flex',flex:1, flexDirection: 'row' }}>
                            <div className="jsx-3204514433 label-container has-tooltip big "
                                 style={{flex:2,marginTop:25,   textAlign :'left', justifyContent:'left', alignItems:'left'}}>Family Income Benefit (term)
                            </div>
                            <div style={{flex:1}} className="jsx-3204514433 content-container has-tooltip big ">
                                <div
                                    className="jsx-819937489 jsx-3124856362 jsx-3124856362 jsx-3210304440 inputContainer   ">
                                    <input name="exps_utilities" type="tel" max="999999" id="exps_utilities"
                                           placeholder="$" data-number="false" data-form-id="f7VVY9LqJe"
                                           aria-describedby="exps_utilities-errors"
                                           className="jsx-819937489 jsx-3124856362 jsx-3124856362 jsx-3210304440"
                                           value={formatter.format(data.client.family_income_benefit_term) } />
                                </div>
                            </div>
                        </label></div>

                    <br/>
                    <br/>

                    <h4>Spouse</h4>
                    <div className="jsx-3204514433 inputRow has-tooltip big  ">

                        <label className="jsx-3204514433" style={{display: 'flex',flex:1, flexDirection: 'row' }}>
                            <div className="jsx-3204514433 label-container has-tooltip big "
                                 style={{flex:2,marginTop:25,   textAlign :'left', justifyContent:'left', alignItems:'left'}}>Life Insurance
                            </div>
                            <div style={{flex:1}} className="jsx-3204514433 content-container has-tooltip big ">
                                <div
                                    className="jsx-819937489 jsx-3124856362 jsx-3124856362 jsx-3210304440 inputContainer   ">
                                    <input name="exps_utilities" type="tel" max="999999" id="exps_utilities"
                                           placeholder="$" data-number="false" data-form-id="f7VVY9LqJe"
                                           aria-describedby="exps_utilities-errors"
                                           className="jsx-819937489 jsx-3124856362 jsx-3124856362 jsx-3210304440"
                                           value={formatter.format(data.spouse.life_insurance) } />

                                </div>
                            </div>
                        </label></div>

                    <div className="jsx-3204514433 inputRow has-tooltip big  ">

                        <label className="jsx-3204514433" style={{display: 'flex',flex:1, flexDirection: 'row' }}>
                            <div className="jsx-3204514433 label-container has-tooltip big "
                                 style={{flex:2,marginTop:25,   textAlign :'left', justifyContent:'left', alignItems:'left'}}>Critical Illness
                            </div>
                            <div style={{flex:1}} className="jsx-3204514433 content-container has-tooltip big ">
                                <div
                                    className="jsx-819937489 jsx-3124856362 jsx-3124856362 jsx-3210304440 inputContainer   ">
                                    <input name="exps_utilities" type="tel" max="999999" id="exps_utilities"
                                           placeholder="$" data-number="false" data-form-id="f7VVY9LqJe"
                                           aria-describedby="exps_utilities-errors"
                                           className="jsx-819937489 jsx-3124856362 jsx-3124856362 jsx-3210304440"
                                           value={formatter.format(data.spouse.critical_illness) } />
                                </div>
                            </div>
                        </label></div>
                    <div className="jsx-3204514433 inputRow has-tooltip big  ">

                        <label className="jsx-3204514433" style={{display: 'flex',flex:1, flexDirection: 'row' }}>
                            <div className="jsx-3204514433 label-container has-tooltip big "
                                 style={{flex:2,marginTop:25,   textAlign :'left', justifyContent:'left', alignItems:'left'}}>Accidental Death Benefit
                            </div>
                            <div style={{flex:1}} className="jsx-3204514433 content-container has-tooltip big ">
                                <div
                                    className="jsx-819937489 jsx-3124856362 jsx-3124856362 jsx-3210304440 inputContainer   ">
                                    <input name="exps_utilities" type="tel" max="999999" id="exps_utilities"
                                           placeholder="$" data-number="false" data-form-id="f7VVY9LqJe"
                                           aria-describedby="exps_utilities-errors"
                                           className="jsx-819937489 jsx-3124856362 jsx-3124856362 jsx-3210304440"
                                           value={formatter.format(data.spouse.accidental_death_benefit) } />
                                </div>
                            </div>
                        </label></div>

                    <div className="jsx-3204514433 inputRow has-tooltip big  ">

                        <label className="jsx-3204514433" style={{display: 'flex',flex:1, flexDirection: 'row' }}>
                            <div className="jsx-3204514433 label-container has-tooltip big "
                                 style={{flex:2,marginTop:25,   textAlign :'left', justifyContent:'left', alignItems:'left'}}>Wavier of Premium
                            </div>
                            <div style={{flex:1}} className="jsx-3204514433 content-container has-tooltip big ">
                                <div
                                    className="jsx-819937489 jsx-3124856362 jsx-3124856362 jsx-3210304440 inputContainer   ">
                                    <input name="exps_utilities" type="tel" max="999999" id="exps_utilities"
                                           placeholder="$" data-number="false" data-form-id="f7VVY9LqJe"
                                           aria-describedby="exps_utilities-errors"
                                           className="jsx-819937489 jsx-3124856362 jsx-3124856362 jsx-3210304440"
                                           value={formatter.format(data.spouse.wavier_of_premium) } />
                                </div>
                            </div>
                        </label></div>

                    <div className="jsx-3204514433 inputRow has-tooltip big  ">

                        <label className="jsx-3204514433" style={{display: 'flex',flex:1, flexDirection: 'row' }}>
                            <div className="jsx-3204514433 label-container has-tooltip big "
                                 style={{flex:2,marginTop:25,   textAlign :'left', justifyContent:'left', alignItems:'left'}}>Long Term Care
                            </div>
                            <div style={{flex:1}} className="jsx-3204514433 content-container has-tooltip big ">
                                <div
                                    className="jsx-819937489 jsx-3124856362 jsx-3124856362 jsx-3210304440 inputContainer   ">
                                    <input name="exps_utilities" type="tel" max="999999" id="exps_utilities"
                                           placeholder="$" data-number="false" data-form-id="f7VVY9LqJe"
                                           aria-describedby="exps_utilities-errors"
                                           className="jsx-819937489 jsx-3124856362 jsx-3124856362 jsx-3210304440"
                                           value={formatter.format(data.spouse.long_term_care) } />
                                </div>
                            </div>
                        </label></div>


                    <div className="jsx-3204514433 inputRow has-tooltip big  ">

                        <label className="jsx-3204514433" style={{display: 'flex',flex:1, flexDirection: 'row' }}>
                            <div className="jsx-3204514433 label-container has-tooltip big "
                                 style={{flex:2,marginTop:25,   textAlign :'left', justifyContent:'left', alignItems:'left'}}>Family Income Benefit ($)
                            </div>
                            <div style={{flex:1}} className="jsx-3204514433 content-container has-tooltip big ">
                                <div
                                    className="jsx-819937489 jsx-3124856362 jsx-3124856362 jsx-3210304440 inputContainer   ">
                                    <input name="exps_utilities" type="tel" max="999999" id="exps_utilities"
                                           placeholder="$" data-number="false" data-form-id="f7VVY9LqJe"
                                           aria-describedby="exps_utilities-errors"
                                           className="jsx-819937489 jsx-3124856362 jsx-3124856362 jsx-3210304440"
                                           value={formatter.format(data.spouse.family_income_benefit) } />
                                </div>
                            </div>
                        </label></div>


                    <div className="jsx-3204514433 inputRow has-tooltip big  ">

                        <label className="jsx-3204514433" style={{display: 'flex',flex:1, flexDirection: 'row' }}>
                            <div className="jsx-3204514433 label-container has-tooltip big "
                                 style={{flex:2,marginTop:25,   textAlign :'left', justifyContent:'left', alignItems:'left'}}>Family Income Benefit (term)
                            </div>
                            <div style={{flex:1}} className="jsx-3204514433 content-container has-tooltip big ">
                                <div
                                    className="jsx-819937489 jsx-3124856362 jsx-3124856362 jsx-3210304440 inputContainer   ">
                                    <input name="exps_utilities" type="tel" max="999999" id="exps_utilities"
                                           placeholder="$" data-number="false" data-form-id="f7VVY9LqJe"
                                           aria-describedby="exps_utilities-errors"
                                           className="jsx-819937489 jsx-3124856362 jsx-3124856362 jsx-3210304440"
                                           value={formatter.format(data.spouse.family_income_benefit_term) } />
                                </div>
                            </div>
                        </label></div>

                    <br/>
                    <div style={{width:'100%', height:1,backgroundColor:"#cccccc"}}> </div>

                    <br/>

                    <h4>Education Fees</h4>

                    <div className="jsx-3204514433 inputRow has-tooltip big  ">

                        <label className="jsx-3204514433" style={{display: 'flex',flex:1, flexDirection: 'row' }}>
                            <div className="jsx-3204514433 label-container has-tooltip big "
                                 style={{flex:2,marginTop:25,   textAlign :'left', justifyContent:'left', alignItems:'left'}}>Total postgrad fees
                            </div>
                            <div style={{flex:1}} className="jsx-3204514433 content-container has-tooltip big ">
                                <div
                                    className="jsx-819937489 jsx-3124856362 jsx-3124856362 jsx-3210304440 inputContainer   ">
                                    <input name="exps_utilities" type="tel" max="999999" id="exps_utilities"
                                           placeholder="$" data-number="false" data-form-id="f7VVY9LqJe"
                                           aria-describedby="exps_utilities-errors"
                                           className="jsx-819937489 jsx-3124856362 jsx-3124856362 jsx-3210304440"
                                           value={formatter.format(totalEducation)}/>
                                </div>
                            </div>
                        </label></div>



                    <div className="jsx-3204514433 inputRow has-tooltip big  ">

                        <label className="jsx-3204514433" style={{display: 'flex',flex:1, flexDirection: 'row' }}>
                            <div className="jsx-3204514433 label-container has-tooltip big "
                                 style={{flex:2,marginTop:25,   textAlign :'left', justifyContent:'left', alignItems:'left'}}>Total Cost of Education
                            </div>
                            <div style={{flex:1}} className="jsx-3204514433 content-container has-tooltip big ">
                                <div
                                    className="jsx-819937489 jsx-3124856362 jsx-3124856362 jsx-3210304440 inputContainer   ">
                                    <input name="exps_utilities" type="tel" max="999999" id="exps_utilities"
                                           placeholder="$" data-number="false" data-form-id="f7VVY9LqJe"
                                           aria-describedby="exps_utilities-errors"
                                           className="jsx-819937489 jsx-3124856362 jsx-3124856362 jsx-3210304440"
                                           value={formatter.format(totalEducation)}/>
                                </div>
                            </div>
                        </label></div>
                    <br/>
                    <div style={{width:'100%', height:1,backgroundColor:"#cccccc"}}> </div>

                    <br/>

                    <div className="jsx-3204514433 inputRow has-tooltip big  ">

                        <label className="jsx-3204514433" style={{display: 'flex',flex:1, flexDirection: 'row' }}>
                            <div className="jsx-3204514433 label-container has-tooltip big "
                                 style={{flex:2,marginTop:25,   textAlign :'left', justifyContent:'left', alignItems:'left'}}>Retirement
                            </div>
                            <div style={{flex:1}} className="jsx-3204514433 content-container has-tooltip big ">
                                <div
                                    className="jsx-819937489 jsx-3124856362 jsx-3124856362 jsx-3210304440 inputContainer   ">
                                    <input name="exps_utilities" type="tel" max="999999" id="exps_utilities"
                                           placeholder="$" data-number="false" data-form-id="f7VVY9LqJe"
                                           aria-describedby="exps_utilities-errors"
                                           className="jsx-819937489 jsx-3124856362 jsx-3124856362 jsx-3210304440"
                                           value={formatter.format(data.retirement)}/>

                                </div>
                            </div>
                        </label></div>
                    <br/><br/>
                    <div className="jsx-2656848681-survey button-container-survey">
                        <button onClick={this.onThankStart.bind(this)} type="submit"
                                className="jsx-3793907981 jsx-1013809249 jsx-454034926 jsx-702405775 jsx-3044182086-survey jsx-1705429334-survey undefined btn-primary border-radius btn-survey">
                            HOME
                        </button>
                    </div>


                </div>
            </div>


        </div>)
    }


}

const mapStateToProp = state => {
    return {

    };
};

export default withRouter(connect(mapStateToProp)(Results));

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
