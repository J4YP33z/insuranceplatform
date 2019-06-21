import React from "react";
import  DatePicker  from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInfoCircle} from "@fortawesome/free-solid-svg-icons";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
export class Step2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            s2_birthDay: new Date()

        };
        //this.handleOptionChange.bind(this)
        this.handleChange = this.handleChange.bind(this);
    }

     date2str(x, y) {
        var z = {
            M: x.getMonth() + 1,
            d: x.getDate(),
            h: x.getHours(),
            m: x.getMinutes(),
            s: x.getSeconds()
        };
        y = y.replace(/(M+|d+|h+|m+|s+)/g, function(v) {
            return ((v.length > 1 ? "0" : "") + eval('z.' + v.slice(-1))).slice(-2)
        });

        return y.replace(/(y+)/g, function(v) {
            return x.getFullYear().toString().slice(-v.length)
        });
    }
    handleChange(date) {
        this.setState({
            s2_birthDay: date
        });
        var today = new Date()
        var age = today.getFullYear() - date.getFullYear()

       //alert( this.date2str(this.state.s2_birthDay, "dd-MM-yyyy"))
        this.props.handleChange("s2_birthDay",this.date2str(this.state.s2_birthDay, "dd-MM-yyyy"))
        this.props.handleChange("s2_age",age)
        //console.log('s2_age__' + age)
    }
    render() {
        if (this.props.currentStep !== 2) { // Prop: The current step
            return null
        }
        // The markup for the Step 1 UI
        return(

            <div className="form-group">
                <h3 className="jsx-588172725 " style={{color:'#004f78'}}>What is your birthday?

                </h3>
                <br />
                <div style={{display:'flex',marginTop:50,  alignItems:'center' ,flex:1, flexDirection: 'row' ,
                    justifyContent:'center' }}>
                    <DatePicker
                        style={{zIndex:1}}
                        selected={this.state.s2_birthDay}
                        onChange={this.handleChange}

                        showMonthDropdown = {true}
                        showYearDropdown = {true}
                        dateFormat="dd/MM/yyyy"    dropdownMode="select"
                    />
                    <ButtonToolbar style={{marginLeft:10,top:33}}>
                        <OverlayTrigger
                            key={"step_1_info"}
                            placement={"step_1_info"}
                            overlay={
                                <Tooltip id={`tooltip-${"step_1_info"}`}>
                                    What is your birthday?
                                </Tooltip>
                            }
                        >
                            <FontAwesomeIcon style={{marginLeft:10}} icon={faInfoCircle} size="1x"    />
                        </OverlayTrigger>
                    </ButtonToolbar>
                </div>


                <br />
                <br />
            </div>

        )
    }
}