import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInfoCircle} from "@fortawesome/free-solid-svg-icons";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

export class Step6 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            s6_age :0
        };

        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event){


        /**
        this.setState({s6_age:event.target.value},()=>{
            this.props.handleChange("s6_age",event.target.value)

        });**/
    }
    isNumeric(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }
    render() {
        if (this.props.currentStep !== 6) { // Prop: The current step
            return null
        }
        // The markup for the Step 1 UI
        return(
            <div className="form-group">
                <h1 className="jsx-588172725 ">At what age do you want to retire?</h1>
                <br />
                <br />

                <div style={{ flex: 1, flexDirection: 'column',width:'70%',display: 'flex'}}>

                    <div style={{display: 'flex',flex:1, flexDirection: 'row'}} >
                        <div
                            style={{ flex:2, textAlign:'right',paddingTop:15, fontSize:'1.125rem'}}>Age to retire</div>
                        <div style={{  marginTop:8, marginLeft: 10,display: 'flex',flex:1, flexDirection: 'row'}}>
                            <input
                                type='numeric'
                                id="s6_age"
                                pattern="[0-9]{0,5}"
                                onChange={(event)=>{
                                    var inputValue = event.target.value
                                    if(!this.isNumeric(inputValue)){
                                        return
                                    }
                                    var intTemp = Math.abs(parseInt(inputValue))
                                    if(intTemp < 0){
                                        intTemp = intTemp
                                    }
                                    if(intTemp > 130){
                                        intTemp = 100
                                    }
                                    this.setState({
                                        s6_age:intTemp
                                    },()=>{
                                        this.props.handleChange("s6_age",intTemp)
                                        this.handleChange()
                                    })
                                }}
                               // onChange={this.handleChange.bind(this)}
                                value={this.state.s6_age}
                            />
                            <ButtonToolbar style={{marginLeft:10,marginTop:28}}>
                                <OverlayTrigger

                                    overlay={
                                        <Tooltip  >
                                            Age to retire
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