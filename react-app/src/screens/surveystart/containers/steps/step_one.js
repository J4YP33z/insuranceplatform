import React from "react";

import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Tooltip from 'react-bootstrap/Tooltip'
import OverlayTrigger from  'react-bootstrap/OverlayTrigger'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {
    faCoffee,
    faCog,
    faSpinner,
    faInfoCircle,
    faSquare,
    faCheckSquare
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
library.add(
    fab,
    faCoffee,
    faCog,
    faSpinner,
    faInfoCircle,
    faSquare,
    faCheckSquare
)


export class Step1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            s1_selectedOption: '1'

        };
        //this.handleOptionChange.bind(this)

    }

    handleOptionChange(changeEvent) {
        this.props.handleChange("s1_selectedOption", changeEvent.target.value)
        this.setState({
            s1_selectedOption: changeEvent.target.value
        });
    }

    render() {
        if (this.props.currentStep !== 1) { // Prop: The current step
            return null
        }
        return(

            <div className="form-group">
                   <ButtonToolbar>
                    <OverlayTrigger
                        key={"step_1_info"}
                        placement={"step_1_info"}
                        overlay={
                            <Tooltip id={`tooltip-${"step_1_info"}`}>
                                Please choose the profile that best describes you.
                            </Tooltip>
                        }
                    >
                        <h3 className="jsx-588172725 " style={{color:'#004f78'}}>Please choose the profile that best describes you.

                            <FontAwesomeIcon    variant="secondary" style={{marginLeft:10, marginTop: -10}} icon={faInfoCircle} size="1x"    />
                        </h3>
                    </OverlayTrigger>
                </ButtonToolbar>


                <FontAwesomeIcon icon="fa-info-circle" />
                <div className="container_checker">

                    <ul>
                        <li>
                            <input type="radio" id="f-option" name="selector" value="1"
                                   checked={this.state.s1_selectedOption === '1'}
                                   onChange={this.handleOptionChange.bind(this)}/>
                                <label htmlFor="f-option" style={{display:'flex', flex:1, flexDirection: 'row'}}>
                                    <h4>I’sm a single professional</h4>

                                    <ButtonToolbar style={{marginLeft:10,top:33}}>
                                        <OverlayTrigger
                                            key={"step_1_info"}
                                            placement={"step_1_info"}
                                            overlay={
                                                <Tooltip id={`tooltip-${"step_1_info"}`}>
                                                    I’m a single  professional
                                                </Tooltip>
                                            }
                                        >
                                            <FontAwesomeIcon style={{marginLeft:10}} icon={faInfoCircle} size="1x"  onMouseOver={this.props.showPopupWithText.bind(this,"I’m a married")} />
                                        </OverlayTrigger>
                                    </ButtonToolbar>
                                </label>

                                <div className="check"></div>
                        </li>

                        <li>
                            <input type="radio" id="s-option" name="selector" value="2"
                                   checked={this.state.s1_selectedOption === '2'}
                                   onChange={this.handleOptionChange.bind(this)} />
                            <label htmlFor="s-option" style={{display:'flex', flex:1, flexDirection: 'row'}}><h4>I’m married with no kids</h4>

                                    <ButtonToolbar style={{marginLeft:10,top:33}}>
                                        <OverlayTrigger

                                            overlay={
                                                <Tooltip  >
                                                    I’m married with no kids
                                                </Tooltip>
                                            }
                                        >
                                            <FontAwesomeIcon style={{marginLeft:10}} icon={faInfoCircle} size="1x"  onMouseOver={this.props.showPopupWithText.bind(this,"I’m a married")} />
                                        </OverlayTrigger>
                                    </ButtonToolbar>
                        </label>


                                <div className="check">
                                    <div className="inside">

                                    </div>
                                </div>
                        </li>

                        <li>
                            <input type="radio" id="t-option" name="selector" value="3"
                                   checked={this.state.s1_selectedOption === '3'}
                                   onChange={this.handleOptionChange.bind(this)} />

                            <label htmlFor="t-option" style={{display:'flex', flex:1, flexDirection: 'row'}}><h4>I’m a parent</h4>

                                <ButtonToolbar style={{marginLeft:10,top:33}}>
                                    <OverlayTrigger

                                        overlay={
                                            <Tooltip>
                                                I’m a parent
                                            </Tooltip>
                                        }
                                    >
                                        <FontAwesomeIcon style={{marginLeft:10}} icon={faInfoCircle} size="1x"  onMouseOver={this.props.showPopupWithText.bind(this,"I’m a married")} />
                                    </OverlayTrigger>
                                </ButtonToolbar>
                            </label>


                                <div className="check">
                                    <div className="inside"></div>
                                </div>
                        </li>
                    </ul>
                </div>



                </div>

        )
    }
}