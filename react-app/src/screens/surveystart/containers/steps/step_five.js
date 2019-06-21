import React from "react";
import CurrencyInput from "react-currency-input";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInfoCircle} from "@fortawesome/free-solid-svg-icons";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

export class Step5 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            s5_creditcard :0,
            s5_mortgage:0,
            s5_carloan : 0,
            s5_otherloans: 0 ,
            s5_total : 0,
        };

        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(){

        var s5_total = (this.state.s5_creditcard + this.state.s5_mortgage + this.state.s5_carloan
            + this.state.s5_otherloans)*12
        this.setState({s5_total},()=>{
        });
        this.props.handleChange("s5_total",s5_total)
    }
    render() {
        if (this.props.currentStep !== 5) { // Prop: The current step
            return null
        }
        // The markup for the Step 1 UI
        return(
            <div className="form-group">
                <h1 className="jsx-588172725 ">What are your liabilities?</h1>
                <br />
                <br />

                <div style={{ flex: 1, flexDirection: 'column',width:'70%',display: 'flex'}}>

                    <div style={{display: 'flex',flex:1, flexDirection: 'row'}} >
                        <div
                            style={{ flex:2, textAlign:'right',paddingTop:15, fontSize:'1.125rem'}}>Credit Card Debt</div>
                        <div style={{display: 'flex',flex:1, flexDirection: 'row'}} >
                            <CurrencyInput style={{width:260,marginLeft:15,marginTop:8}}
                                           prefix="$"
                                           value={this.state.s5_creditcard}

                                           onChangeEvent={(event, maskedvalue, floatvalue)=>{
                                               this.setState({
                                                   s5_creditcard:floatvalue
                                               },()=>{
                                                   this.props.handleChange("s5_creditcard",floatvalue)
                                                   this.handleChange()
                                               })
                                           }}/>
                            <ButtonToolbar style={{marginLeft:10,marginTop:33}}>
                                <OverlayTrigger

                                    overlay={
                                        <Tooltip  >
                                            Credit Card Debt
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
                            style={{ flex:2, textAlign:'right',paddingTop:15, fontSize:'1.125rem'}}>Mortgage</div>
                        <div style={{display: 'flex',flex:1, flexDirection: 'row'}} >
                            <CurrencyInput style={{width:260,marginLeft:15,marginTop:8}} value={this.state.s5_mortgage}
                                           prefix="$"
                                           onChangeEvent={(event, maskedvalue, floatvalue)=>{
                                               this.setState({
                                                   s5_mortgage:floatvalue
                                               },()=>{
                                                   this.props.handleChange("s5_mortgage",floatvalue)
                                                   this.handleChange()
                                               })

                                           }}/>
                            <ButtonToolbar style={{marginLeft:10,marginTop:33}}>
                                <OverlayTrigger

                                    overlay={
                                        <Tooltip  >
                                            Mortgage
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
                            style={{ flex:2, textAlign:'right',paddingTop:15, fontSize:'1.125rem'}}>Car Loan</div>
                        <div style={{display: 'flex',flex:1, flexDirection: 'row'}} >
                            <CurrencyInput style={{width:260,marginLeft:15,marginTop:8}} value={this.state.s5_carloan}
                                           prefix="$"
                                           onChangeEvent={(event, maskedvalue, floatvalue)=>{
                                               this.setState({
                                                   s5_carloan:floatvalue
                                               },()=>{
                                                   this.props.handleChange("s5_carloan",floatvalue)
                                                   this.handleChange()
                                               })

                                           }}/>
                            <ButtonToolbar style={{marginLeft:10,marginTop:33}}>
                                <OverlayTrigger

                                    overlay={
                                        <Tooltip  >
                                            Car Loan
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
                            style={{ flex:2, textAlign:'right',paddingTop:15, fontSize:'1.125rem'}}>Other Loans</div>
                        <div style={{display: 'flex',flex:1, flexDirection: 'row'}} >
                            <CurrencyInput style={{width:260,marginLeft:15,marginTop:8}} value={this.state.s5_otherloans}
                                           prefix="$"
                                           onChangeEvent={(event, maskedvalue, floatvalue)=>{
                                               this.setState({
                                                   s5_otherloans:floatvalue
                                               },()=>{
                                                   this.props.handleChange("s5_otherloans",floatvalue)
                                                   this.handleChange()
                                               })

                                           }}/>
                            <ButtonToolbar style={{marginLeft:10,marginTop:33}}>
                                <OverlayTrigger

                                    overlay={
                                        <Tooltip  >
                                            Other Loans
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
                            style={{ flex:2, textAlign:'right',paddingTop:15, fontSize:'1.125rem'}}>Total</div>
                        <div style={{display: 'flex',flex:1, flexDirection: 'row'}} >
                            <CurrencyInput readonly="readonly" style={{width:260,marginLeft:15,marginTop:8}}  prefix="$" value={this.state.s5_total} />
                            <ButtonToolbar style={{marginLeft:10,marginTop:33}}>
                                <OverlayTrigger

                                    overlay={
                                        <Tooltip  >
                                            Your Total
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