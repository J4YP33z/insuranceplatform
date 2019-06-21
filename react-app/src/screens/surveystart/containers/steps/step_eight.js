import React from "react";
import { DropdownButton, DropdownItem } from "react-bootstrap"

import "bootstrap/dist/css/bootstrap.min.css"
import CurrencyInput from "react-currency-input";
export class Step8 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            s8_child:1,
            s8_current_child:1,
            s8_current_child_age:1,
            s8_current_child_will_start_colege:1,
            s8_wannafund:'1',
            s8_childs_age_current:[1],
            s8_childs_age_start_college:[1],
            s8_annual_cost_of_college:0,
            s8_assets : 0,
            s8_existing_savings:0,

        }
    }
    onSelectAge(myIndex,evt){
            var s8_childs_age_current = this.state.s8_childs_age_current
            s8_childs_age_current[myIndex] = evt.target.value

            this.setState({s8_childs_age_current:s8_childs_age_current },()=>{
                this.props.handleChange("s8_childs_age_current",s8_childs_age_current)

                console.log("s8_childs_age_current", JSON.stringify(this.state.s8_childs_age_current))
                this.props.handleChange("s8_childs_age_current",this.state.s8_childs_age_current)
            })
    }

    onSelectAgeToCollege(myIndex,evt){
        var s8_childs_age_start_college = this.state.s8_childs_age_start_college
        s8_childs_age_start_college[myIndex] = evt.target.value
        this.setState({s8_childs_age_start_college: s8_childs_age_start_college },()=>{

            console.log("s8_childs_age_start_college", JSON.stringify(this.state.s8_childs_age_start_college))
            this.props.handleChange("s8_childs_age_start_college",this.state.s8_childs_age_start_college)
        })
    }
    childStartCollege(currentUser) {

        var childItem = []
        var dropItemsAges= []
        for (var i = 0; i < 30; i++) {
            dropItemsAges.push(<DropdownItem eventKey={i}>{i}</DropdownItem>);
        }
        var dropItems = []
        for (var i = 13; i < 30; i++) {
            dropItems.push(<DropdownItem eventKey={i}>{i}</DropdownItem>);
        }


        for(var i = 0;i < this.state.s8_child;i++){

            childItem.push(<div>
                <div style={{display: 'flex',flex:1, flexDirection: 'row'}} >
                    <div
                        style={{ flex:5, textAlign:'right',paddingTop:15, fontSize:'1.125rem'}}>
                        What is your child {i+1}'s age?
                    </div>
                    <div style={{flex:3}}>

                        <input
                            type='number'
                            id={'todo__'+i}
                            pattern='[0-9]{0,5}'
                            onChange={this.onSelectAge.bind(this, i)}

                            // onChange={this.handleChange.bind(this)}
                            value={this.state.s8_childs_age_current[i] }
                        />


                    </div>

                </div>
                <br/>
                <div style={{display: 'flex',flex:1, flexDirection: 'row'}} >
                    <div
                        style={{ flex:5, textAlign:'right',paddingTop:15, fontSize:'1.125rem'}}>
                        At what age will child  {i+1} start college?
                    </div>
                    <div style={{flex:3}}>
                        <input
                            type='number'
                            id={'todo__colege_'+i}
                            pattern='[0-9]{0,5}'
                            onChange={this.onSelectAgeToCollege.bind(this, i)}

                            // onChange={this.handleChange.bind(this)}
                            value={this.state.s8_childs_age_start_college[i]}
                        />



                    </div>

                </div>
                <br/>
                <div style={{display: 'flex',flex:1,height:1, width:"70%", marginLeft:"20%", flexDirection: 'row',backgroundColor:"#333"}} />
                <br/>
            </div>)
        }
        if(this.state.s8_current_child>this.state.s8_child){
            return  null
        }
        return (<div>
            {childItem}
        </div>)
    }
    toggle = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }
    handleChange(){


    }
    handleOptionChange(changeEvent) {
        this.props.handleChange("s8_wannafund", changeEvent.target.value)
        this.setState({
            s8_wannafund: changeEvent.target.value
        });
    }
    render() {
        if (this.props.currentStep !==9) {
            return null
        }

        return(
            <div className="form-group">
                <h1 className="jsx-588172725 ">Family</h1>
                <br />

                <div style={{ flex: 1, flexDirection: 'column',width:'100%',display: 'flex',margin:15}}>
                    <div style={{display: 'flex',flex:1, flexDirection: 'row'}} >
                        <div
                            style={{ flex:5, textAlign:'right',paddingTop:15, fontSize:'1.125rem'}}>
                            How many children do you have?
                        </div>
                        <div style={{flex:3}}>
                            <DropdownButton  style={{width:'100%',marginTop:5,zIndex:1}} title={this.state.s8_child} id="childscount" key="childscount"
                                            onSelect={(evt)=>{
                                                this.setState({s8_child: evt },()=>{
                                                  var s8_childs_age_current = []
                                                  var s8_childs_age_start_college = []
                                                    for(var i =0 ;i<evt;i++){
                                                        s8_childs_age_current.push(1)
                                                        s8_childs_age_start_college.push(1)
                                                    }
                                                    this.setState({s8_childs_age_current,s8_childs_age_start_college})

                                                })
                                            }}
                                            open={this.state.isOpen } >

                                <DropdownItem eventKey="1">1</DropdownItem>
                                <DropdownItem eventKey="2">2</DropdownItem>
                                <DropdownItem eventKey="3">3</DropdownItem>
                                <DropdownItem eventKey="4">4</DropdownItem>
                                <DropdownItem eventKey="5">5</DropdownItem>
                                <DropdownItem eventKey="6">6</DropdownItem>
                                <DropdownItem eventKey="7">7</DropdownItem>
                                <DropdownItem eventKey="8">8</DropdownItem>
                                <DropdownItem eventKey="9">9</DropdownItem>
                            </DropdownButton>

                        </div>

                    </div>
                    <div style={{display: 'flex',flex:1, flexDirection: 'row'}} >
                        <div
                            style={{ flex:5, textAlign:'right',paddingTop:15, fontSize:'1.125rem'}}>
                            Do you want to fund your children's undergraduate education?
                        </div>

                        <div style={{flex:3,display:'flex',flexDirection: 'row',marginTop:15
                            , marginLeft:20 , justifyContent:'center'}}>
                            <div style={{width:50}}>
                                <input type="radio" name="undergraduate_education"
                                       id="undergraduate_education_yes" style={{marginRight:5}}
                                       value="1"
                                       checked={this.state.s8_wannafund === '1'}
                                       onChange={this.handleOptionChange.bind(this)}
                                />Yes
                            </div>
                            <div style={{width:50}}>
                                <input type="radio" name="undergraduate_education"  id="undergraduate_education_no" style={{marginRight:5}}
                                       value="2"
                                       checked={this.state.s8_wannafund === '2'}
                                       onChange={this.handleOptionChange.bind(this)}
                                /> No
                            </div>
                        </div>

                    </div>
                        <br/>

                    <br/>

                    {this.state.s8_wannafund === '1'? (
                        <div>
                            {this.state.s8_child >0 ? this.childStartCollege() :null}
                            <br/>
                            <div style={{display: 'flex',flex:1, flexDirection: 'row'}} >
                                <div
                                    style={{ flex:5, textAlign:'right',paddingTop:15, fontSize:'1.125rem'}}>
                                    What is the current annual cost of college education?
                                </div>
                                <div style={{flex:3}}>
                                    <CurrencyInput style={{width:'100%',marginTop:8}} value={this.state.s8_annual_cost_of_college}
                                                   prefix="$"
                                                   onChangeEvent={(event, maskedvalue, floatvalue)=>{
                                                       this.setState({
                                                           s8_annual_cost_of_college:floatvalue
                                                       },()=>{

                                                           this.props.handleChange("s8_annual_cost_of_college",floatvalue)
                                                           this.handleChange()
                                                       })

                                                   }}/>
                                </div>
                            </div>
                        </div>
                    ): null}



                </div>





                <br />
                <br />
            </div>)
    }
}