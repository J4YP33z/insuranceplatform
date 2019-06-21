import React from "react";
import { DropdownButton, DropdownItem } from "react-bootstrap"

import "bootstrap/dist/css/bootstrap.min.css"
import CurrencyInput from "react-currency-input";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInfoCircle} from "@fortawesome/free-solid-svg-icons";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
export class Step_Asset extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,

            s8_assets : 0,
            s8_existing_savings:0,
            s8_inflation : 0

        }
    }
    isNumeric(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }
    render() {
        if (this.props.currentStep !==8) {
            return null
        }

        return(
            <div className="form-group">
                <h1 className="jsx-588172725 ">Assets</h1>
                <br />
                <br />

                <div style={{ flex: 1, flexDirection: 'column',width:'70%',display: 'flex'}}>
                    <div style={{ flex: 1, flexDirection: 'column',width:'100%',display: 'flex'}}>

                        <div style={{display: 'flex',flex:1, flexDirection: 'row'}} >
                            <div
                                style={{ flex:2, textAlign:'right',paddingTop:15, fontSize:'1.125rem'}}>
                                Your Assets
                            </div>
                            <div style={{display: 'flex',flex:1, flexDirection: 'row',marginTop:8}}>

                                <CurrencyInput style={{width:260,marginLeft:15,marginTop:8}}
                                               prefix="$"

                                               value={this.state.s8_assets}
                                               id="s8_assets"
                                               onChangeEvent={(event, maskedvalue, floatvalue)=>{
                                                   this.setState({
                                                       s8_assets: floatvalue
                                                   },()=>{
                                                       this.props.handleChange("s8_assets",floatvalue)
                                                       //this.handleChange()
                                                   })
                                               }}
                                />

                                <ButtonToolbar style={{marginLeft:10,marginTop:33}}>
                                    <OverlayTrigger

                                        overlay={
                                            <Tooltip  >
                                                Your Assets
                                            </Tooltip>
                                        }
                                    >
                                        <FontAwesomeIcon style={{marginLeft:10}} icon={faInfoCircle} size="1x"    />
                                    </OverlayTrigger>
                                </ButtonToolbar>

                            </div>

                        </div>
                    </div>

                    <div style={{ flex: 1, flexDirection: 'column',width:'100%',display: 'flex'}}>

                        <div style={{display: 'flex',flex:1, flexDirection: 'row'}} >
                            <div
                                style={{ flex:2, textAlign:'right',paddingTop:15, fontSize:'1.125rem'}}>
                                Exiting Saving
                            </div>
                            <div style={{display: 'flex',flex:1, flexDirection: 'row',marginTop:8}}>
                                <CurrencyInput style={{width:260,marginLeft:15,marginTop:8}}
                                               prefix="$"

                                               value={this.state.s8_existing_savings}
                                               id="s8_assets"
                                               onChangeEvent={(event, maskedvalue, floatvalue)=>{
                                                   this.setState({
                                                       s8_existing_savings: floatvalue
                                                   },()=>{
                                                       this.props.handleChange("s8_existing_savings",floatvalue)
                                                       //this.handleChange()
                                                   })
                                               }}
                                />

                                <ButtonToolbar style={{marginLeft:10,marginTop:33}}>
                                    <OverlayTrigger

                                        overlay={
                                            <Tooltip  >
                                                Exiting Saving
                                            </Tooltip>
                                        }
                                    >
                                        <FontAwesomeIcon style={{marginLeft:10}} icon={faInfoCircle} size="1x"    />
                                    </OverlayTrigger>
                                </ButtonToolbar>


                            </div>

                        </div>
                    </div>

                    <div style={{ flex: 1, flexDirection: 'column',width:'100%',display: 'flex'}}>

                        <div style={{display: 'flex',flex:1, flexDirection: 'row'}} >
                            <div
                                style={{ flex:2, textAlign:'right',paddingTop:15, fontSize:'1.125rem'}}>
                                Inflation
                            </div>
                            <div style={{display: 'flex',flex:1, flexDirection: 'row',marginTop:8}}>
                                <input
                                    type='numeric'
                                    id="s3_inflation"
                                    pattern='[0-9]{0,5}'
                                    style={{width:260,marginLeft:15,marginTop:8}}
                                    onChange={(event)=>{
                                        var inputValue = event.target.value
                                        if(!this.isNumeric(inputValue)){
                                            return
                                        }
                                        this.setState({
                                            s8_inflation:inputValue
                                        },()=>{
                                            this.props.handleChange("s8_inflation",inputValue)
                                          //  this.handleChange()
                                        })
                                    }}
                                    value={this.state.s8_inflation}
                                />
                                <ButtonToolbar style={{marginLeft:10,marginTop:33}}>
                                    <OverlayTrigger

                                        overlay={
                                            <Tooltip  >
                                                Inflation
                                            </Tooltip>
                                        }
                                    >
                                        <FontAwesomeIcon style={{marginLeft:10}} icon={faInfoCircle} size="1x"    />
                                    </OverlayTrigger>
                                </ButtonToolbar>


                            </div>

                        </div>
                    </div>
                </div>

            </div>
        )
    }
}