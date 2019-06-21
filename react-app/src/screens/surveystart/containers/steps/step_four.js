import React from "react";
import CurrencyInput from "react-currency-input";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInfoCircle} from "@fortawesome/free-solid-svg-icons";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

export class Step4 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            s4_housing: 0,
            s4_telecoms:0,
            s4_transportation:0,
            s4_groceries:0,
            s4_restaurants:0,
            s4_childcare:0,
            s4_shopping:0,
            s4_others:0,
            s4_total : 0,
        };

        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(){

        var s4_total = (this.state.s4_housing + this.state.s4_telecoms + this.state.s4_transportation
            + this.state.s4_groceries + this.state.s4_restaurants  + this.state.s4_childcare + this.state.s4_shopping
            + this.state.s4_others )*12
        this.setState({s4_total},()=>{


        });



        this.props.handleChange("s4_total",s4_total)
    }
    render() {
        if (this.props.currentStep !== 4) { // Prop: The current step
            return null
        }
        // The markup for the Step 1 UI
        return(
            <div className="form-group">
                <h3 className="jsx-588172725 " style={{color:'#004f78'}}>What are your monthly expenses?</h3>
                <br />


                <div style={{ flex: 1, flexDirection: 'column',width:'70%',display: 'flex'}}>

                    <div style={{display: 'flex',flex:1, flexDirection: 'row'}} >
                        <div
                            style={{ flex:2, textAlign:'right',paddingTop:15, fontSize:'1.125rem'}}>Housing</div>
                        <div style={{display: 'flex',flex:1, flexDirection: 'row'}} >
                            <CurrencyInput style={{width:260,marginLeft:15,marginTop:8}} value={this.state.s4_housing}
                                           prefix="$"
                                           onChangeEvent={(event, maskedvalue, floatvalue)=>{
                                this.setState({
                                    s4_housing:floatvalue
                                },()=>{
                                    this.props.handleChange("s4_housing",floatvalue)
                                    this.handleChange()
                                })

                            }}/>
                            <ButtonToolbar style={{marginLeft:10,marginTop:33}}>
                                <OverlayTrigger

                                    overlay={
                                        <Tooltip  >
                                            Housing
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
                            style={{ flex:2, textAlign:'right',paddingTop:15, fontSize:'1.125rem'}}>Telecoms</div>
                        <div style={{display: 'flex',flex:1, flexDirection: 'row'}} >
                            <CurrencyInput style={{width:260,marginLeft:15,marginTop:8}} value={this.state.s4_telecoms}
                                           prefix="$"
                                           onChangeEvent={(event, maskedvalue, floatvalue)=>{
                                this.setState({
                                    s4_telecoms:floatvalue
                                },()=>{
                                    this.props.handleChange("s4_telecoms",floatvalue)
                                    this.handleChange()
                                })

                            }}/>
                            <ButtonToolbar style={{marginLeft:10,marginTop:33}}>
                                <OverlayTrigger

                                    overlay={
                                        <Tooltip  >
                                            Telecoms
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
                            style={{ flex:2, textAlign:'right',paddingTop:15, fontSize:'1.125rem'}}>Transportation</div>
                        <div style={{display: 'flex',flex:1, flexDirection: 'row'}} >
                            <CurrencyInput style={{width:260,marginLeft:15,marginTop:8}} value={this.state.s4_transportation}
                                           prefix="$"
                                           onChangeEvent={(event, maskedvalue, floatvalue)=>{
                                this.setState({
                                    s4_transportation:floatvalue
                                },()=>{
                                    this.props.handleChange("s4_transportation",floatvalue)
                                    this.handleChange()
                                })

                            }}/>
                            <ButtonToolbar style={{marginLeft:10,marginTop:33}}>
                                <OverlayTrigger

                                    overlay={
                                        <Tooltip  >
                                            Transportation
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
                            style={{ flex:2, textAlign:'right',paddingTop:15, fontSize:'1.125rem'}}>Groceries</div>
                        <div style={{display: 'flex',flex:1, flexDirection: 'row'}} >
                            <CurrencyInput style={{width:260,marginLeft:15,marginTop:8}} value={this.state.s4_groceries}
                                           prefix="$"
                                           onChangeEvent={(event, maskedvalue, floatvalue)=>{
                                this.setState({
                                    s4_groceries:floatvalue
                                },()=>{
                                    this.props.handleChange("s4_groceries",floatvalue)
                                    this.handleChange()
                                })

                            }}/>
                            <ButtonToolbar style={{marginLeft:10,marginTop:33}}>
                                <OverlayTrigger

                                    overlay={
                                        <Tooltip  >
                                            Groceries
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
                            style={{ flex:2, textAlign:'right',paddingTop:15, fontSize:'1.125rem'}}>Restaurants</div>
                        <div style={{display: 'flex',flex:1, flexDirection: 'row'}} >
                            <CurrencyInput style={{width:260,marginLeft:15,marginTop:8}}
                                           prefix="$"
                                           value={this.state.s4_restaurants} onChangeEvent={(event, maskedvalue, floatvalue)=>{
                                this.setState({
                                    s4_restaurants:floatvalue
                                },()=>{
                                    this.props.handleChange("s4_restaurants",floatvalue)
                                    this.handleChange()
                                })

                            }}/>
                            <ButtonToolbar style={{marginLeft:10,marginTop:33}}>
                                <OverlayTrigger

                                    overlay={
                                        <Tooltip  >
                                            Restaurants
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
                            style={{ flex:2, textAlign:'right',paddingTop:15, fontSize:'1.125rem'}}>Shopping</div>
                        <div style={{display: 'flex',flex:1, flexDirection: 'row'}} >
                            <CurrencyInput style={{width:260,marginLeft:15,marginTop:8}} value={this.state.s4_shopping}
                                           prefix="$"
                                           onChangeEvent={(event, maskedvalue, floatvalue)=>{
                                this.setState({
                                    s4_shopping:floatvalue
                                },()=>{
                                    this.props.handleChange("s4_shopping",floatvalue)
                                    this.handleChange()
                                })

                            }}/>
                            <ButtonToolbar style={{marginLeft:10,marginTop:33}}>
                                <OverlayTrigger

                                    overlay={
                                        <Tooltip  >
                                            Shopping
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
                            style={{ flex:2, textAlign:'right',paddingTop:15, fontSize:'1.125rem'}}>Childcare</div>
                        <div style={{display: 'flex',flex:1, flexDirection: 'row'}} >
                            <CurrencyInput style={{width:260,marginLeft:15,marginTop:8}} value={this.state.s4_childcare}
                                           prefix="$"
                                           onChangeEvent={(event, maskedvalue, floatvalue)=>{
                                this.setState({
                                    s4_childcare:floatvalue
                                },()=>{
                                    this.props.handleChange("s4_childcare",floatvalue)
                                    this.handleChange()
                                })

                            }}/>
                            <ButtonToolbar style={{marginLeft:10,marginTop:33}}>
                                <OverlayTrigger

                                    overlay={
                                        <Tooltip  >
                                            Childcare
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
                            style={{ flex:2, textAlign:'right',paddingTop:15, fontSize:'1.125rem'}}>Others</div>
                        <div style={{display: 'flex',flex:1, flexDirection: 'row'}} >
                            <CurrencyInput style={{width:260,marginLeft:15,marginTop:8}} value={this.state.s4_others}
                                           prefix="$"
                                           onChangeEvent={(event, maskedvalue, floatvalue)=>{
                                this.setState({
                                    s4_others:floatvalue
                                },()=>{

                                    this.props.handleChange("s4_others",floatvalue)
                                    this.handleChange()
                                })

                            }}/>
                            <ButtonToolbar style={{marginLeft:10,marginTop:33}}>
                                <OverlayTrigger

                                    overlay={
                                        <Tooltip  >
                                            Others
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
                            <CurrencyInput readonly="readonly" style={{width:260,marginLeft:15,marginTop:8}}  prefix="$" value={this.state.s4_total} />
                            <ButtonToolbar style={{marginLeft:10,marginTop:33}}>
                                <OverlayTrigger

                                    overlay={
                                        <Tooltip  >
                                            Total
                                        </Tooltip>
                                    }
                                >
                                    <FontAwesomeIcon style={{marginLeft:10}} icon={faInfoCircle} size="1x"    />
                                </OverlayTrigger>
                            </ButtonToolbar>
                        </div>

                    </div>

                    <br />
                </div>
            </div>
        )
    }
}