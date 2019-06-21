import React from "react";
import CurrencyInput from "react-currency-input";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInfoCircle} from "@fortawesome/free-solid-svg-icons";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

export class Step7 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            s7_life_insurance :0,
            s7_critical_illness :0,
            s7_medician_insurance :0
        };

        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(){


        /**
        this.setState({s6_age:event.target.value},()=>{


        });**/
    }

    render() {
        if (this.props.currentStep !== 7) { // Prop: The current step
            return null
        }
        // The markup for the Step 1 UI
        return(
            <div className="form-group">
                <h1 className="jsx-588172725 ">How much existing Life Insurance coverage do you have?</h1>
                <br />
                <br />

                <div style={{ flex: 1, flexDirection: 'column',width:'100%',display: 'flex'}}>

                    <div style={{display: 'flex',flex:1, flexDirection: 'row'}} >
                        <div
                            style={{ flex:2, textAlign:'right',paddingTop:15, fontSize:'1.125rem'}}>
                            How much existing Life Insurance coverage do you have?
                        </div>
                        <div style={{display: 'flex',flex:1, flexDirection: 'row',marginTop:8}}>


                            <CurrencyInput style={{width:260,marginLeft:15,marginTop:8}}
                                           prefix="$"

                                           value={this.state.s7_life_insurance}
                                           id="s7_life_insurance"
                                           onChangeEvent={(event, maskedvalue, floatvalue)=>{
                                               this.setState({
                                                   s7_life_insurance: floatvalue
                                               },()=>{
                                                   this.props.handleChange("s7_life_insurance",floatvalue)
                                                   this.handleChange()
                                               })
                                           }}
                            />
                            <ButtonToolbar style={{marginLeft:10,marginTop:33}}>
                                <OverlayTrigger

                                    overlay={
                                        <Tooltip  >
                                            Life Insurance
                                        </Tooltip>
                                    }
                                >
                                    <FontAwesomeIcon style={{marginLeft:10}} icon={faInfoCircle} size="1x"    />
                                </OverlayTrigger>
                            </ButtonToolbar>

                        </div>

                    </div>
                    <br/>
                    <div style={{display: 'flex',flex:1, flexDirection: 'row'}} >
                        <div
                            style={{ flex:2, textAlign:'right',paddingTop:15, fontSize:'1.125rem'}}>
                            How much existing Medical Insurance coverage do you have?
                        </div>
                        <div style={{display: 'flex',flex:1, flexDirection: 'row' ,marginTop:8}}>
                            <CurrencyInput style={{width:260,marginLeft:15,marginTop:8}}
                                 prefix="$"

                                 value={this.state.s7_medician_insurance}
                                id="s7_medician_insurance"
                                onChangeEvent={(event, maskedvalue, floatvalue)=>{
                                      this.setState({
                                             s7_medician_insurance: floatvalue
                                               },()=>{
                                                   this.props.handleChange("s7_medician_insurance",floatvalue)
                                                   this.handleChange()
                                               })
                                 }}
                            />
                            <ButtonToolbar style={{marginLeft:10,marginTop:33}}>
                                <OverlayTrigger

                                    overlay={
                                        <Tooltip  >
                                            Medical Insurance
                                        </Tooltip>
                                    }
                                >
                                    <FontAwesomeIcon style={{marginLeft:10}} icon={faInfoCircle} size="1x"    />
                                </OverlayTrigger>
                            </ButtonToolbar>

                        </div>

                    </div>
                    <br />

                    <div style={{display: 'flex',flex:1, flexDirection: 'row'}} >
                        <div
                            style={{ flex:2, textAlign:'right',paddingTop:15, fontSize:'1.125rem'}}>
                            How much existing Critical Illness coverage do you have?
                        </div>
                        <div style={{display: 'flex',flex:1, flexDirection: 'row',marginTop:8}}>

                            <CurrencyInput style={{width:260,marginLeft:15,marginTop:8}}
                                           prefix="$"

                                           value={this.state.s7_critical_illness}
                                           id="s7_critical_illness"
                                           onChangeEvent={(event, maskedvalue, floatvalue)=>{
                                               this.setState({
                                                   s7_critical_illness: floatvalue
                                               },()=>{
                                                   this.props.handleChange("s7_critical_illness",floatvalue)
                                                   this.handleChange()
                                               })
                                           }}
                            />

                            <ButtonToolbar style={{marginLeft:10,marginTop:33}}>
                                <OverlayTrigger

                                    overlay={
                                        <Tooltip  >
                                            Critical Illness
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