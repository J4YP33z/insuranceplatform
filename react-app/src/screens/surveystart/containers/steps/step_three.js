import React from "react";
import DatePicker from "react-datepicker/es";
import CurrencyInput from 'react-currency-input'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInfoCircle} from "@fortawesome/free-solid-svg-icons";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
export class Step3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            s3_other_monthly_income: 0,
            s3_annual_income:0,
            s3_annual_bonus:0,
            s3_monthly_salary:0
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(){

        var s3_annual_income =  (this.state.s3_monthly_salary + this.state.s3_other_monthly_income)*12 + this.state.s3_annual_bonus
        this.setState({s3_annual_income: s3_annual_income},()=>{
        });

        this.props.handleChange("s3_annual_income",s3_annual_income)

    }
    render() {
        if (this.props.currentStep !== 3) { // Prop: The current step
            return null
        }
        // The markup for the Step 1 UI
        return(
            <div className="form-group">
                <h3 className="jsx-588172725 " style={{color:'#004f78'}}>What is your income?</h3>


                <div style={{ flex: 1, flexDirection: 'column',width:'70%',display: 'flex'}}>

                    <div style={{display: 'flex',flex:1, flexDirection: 'row'}} >
                        <div
                             style={{ flex:2, textAlign:'right',paddingTop:15, fontSize:'1.125rem'}}>Monthly Salary</div>
                       <div style={{display: 'flex',flex:1, flexDirection: 'row'}} >
                           <CurrencyInput style={{width:260,marginLeft:15,marginTop:8}} value={this.state.s3_monthly_salary}
                                          prefix="$"
                                          onChangeEvent={(event, maskedvalue, floatvalue)=>{
                               this.setState({
                                   s3_monthly_salary:floatvalue
                               },()=>{
                                   this.props.handleChange("s3_monthly_salary",floatvalue)
                                   this.handleChange()
                               })
                           }}/>

                           <ButtonToolbar style={{marginLeft:10,marginTop:33}}>
                               <OverlayTrigger

                                   overlay={
                                       <Tooltip  >
                                           Monthly Salary
                                       </Tooltip>
                                   }
                               >
                                   <FontAwesomeIcon style={{marginLeft:10}} icon={faInfoCircle} size="1x"    />
                               </OverlayTrigger>
                           </ButtonToolbar>

                       </div>

                    </div>

                    <div style={{display: 'flex',flex:1, flexDirection: 'row'}} >
                        <div
                            style={{ flex:2, textAlign:'right',paddingTop:15, fontSize:'1.125rem'}}>Annual Bonus</div>
                        <div style={{display: 'flex',flex:1, flexDirection: 'row'}} >
                            <CurrencyInput style={{width:260,marginLeft:15,marginTop:8}} value={this.state.s3_annual_bonus}
                                           prefix="$"
                                           onChangeEvent={(event, maskedvalue, floatvalue)=>{
                                this.setState({
                                    s3_annual_bonus:floatvalue
                                },()=>{
                                    this.props.handleChange("s3_annual_bonus",floatvalue)
                                    this.handleChange()
                                })

                            }}/>
                            <ButtonToolbar style={{marginLeft:10,marginTop:33}}>
                                <OverlayTrigger

                                    overlay={
                                        <Tooltip  >
                                            Annual Bonus
                                        </Tooltip>
                                    }
                                >
                                    <FontAwesomeIcon style={{marginLeft:10}} icon={faInfoCircle} size="1x"    />
                                </OverlayTrigger>
                            </ButtonToolbar>
                        </div>
                    </div>


                    <div style={{display: 'flex',flex:1, flexDirection: 'row'}} >
                        <div
                            style={{ flex:2, textAlign:'right',paddingTop:15, fontSize:'1.125rem'}}>Other monthly income</div>
                        <div style={{display: 'flex',flex:1, flexDirection: 'row'}} >
                            <CurrencyInput style={{width:260,marginLeft:15,marginTop:8}} value={this.state.s3_other_monthly_income}
                                           prefix="$"
                                           onChangeEvent={(event, maskedvalue, floatvalue)=>{
                                this.setState({
                                    s3_other_monthly_income:floatvalue
                                },()=>{

                                    this.props.handleChange("s3_other_monthly_income",floatvalue)
                                    this.handleChange()
                                })

                            }}/>

                            <ButtonToolbar style={{marginLeft:10,marginTop:33}}>
                                <OverlayTrigger

                                    overlay={
                                        <Tooltip  >
                                            Other monthly income
                                        </Tooltip>
                                    }
                                >
                                    <FontAwesomeIcon style={{marginLeft:10}} icon={faInfoCircle} size="1x"    />
                                </OverlayTrigger>
                            </ButtonToolbar>
                        </div>

                    </div>


                    <div style={{display: 'flex',flex:1, flexDirection: 'row'}} >
                        <div
                            style={{ flex:2, textAlign:'right',paddingTop:15, fontSize:'1.125rem'}}>Annual income</div>
                        <div style={{display: 'flex',flex:1, flexDirection: 'row'}}>
                            <CurrencyInput style={{width:260,marginLeft:15,marginTop:8}} readonly="readonly" value={this.state.s3_annual_income}
                                           prefix="$"
                            />
                            <ButtonToolbar style={{marginLeft:10,marginTop:33}}>
                                <OverlayTrigger

                                    overlay={
                                        <Tooltip  >
                                            Annual income
                                        </Tooltip>
                                    }
                                >
                                    <FontAwesomeIcon style={{marginLeft:10}} icon={faInfoCircle} size="1x"    />
                                </OverlayTrigger>
                            </ButtonToolbar>
                        </div>

                    </div>

                    <br />
                    <br />
                </div>
            </div>
        )
    }
}