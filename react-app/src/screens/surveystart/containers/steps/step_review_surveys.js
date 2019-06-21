import React from "react";

export class ReviewSurveyAllDone extends React.Component {
    render() {
        if (this.props.currentStep !==10) { // Prop: The current step
            return null
        }
        // The markup for the Step 1 UI
        return(
            <div className="form-group" style={{display: 'flex', justifyContent:'center', alignItems:'center'}}>
                <div style={{width:460}}>
                <h1 className="jsx-588172725 ">What are your monthly expenses?</h1>
                <br/><br/>
                <h5 className="jsx-588172725 ">Below, we’ve estimated your family’s expenses based on the spending patterns of millions of Canadians.
                    If any of these estimates seem too high or too low, please edit them.</h5>
                    <br/><br/>

                <h2 className="jsx-588172725 ">Edit estimates below</h2>

                <br />
                <div className="jsx-405667435">
                    <div className="jsx-3204514433 inputRow has-tooltip big  ">
                        <div className="jsx-3204514433 tooltip-container">&nbsp;</div>
                        <label className="jsx-3204514433">
                            <div className="jsx-3204514433 label-container has-tooltip big ">Mortgage / rent</div>
                            <div className="jsx-3204514433 content-container has-tooltip big "><span
                                className="jsx-405667435 static-input">$11,221,112</span></div>
                        </label></div>
                    <div className="jsx-3204514433 inputRow has-tooltip big  ">

                        <label className="jsx-3204514433" style={{display: 'flex',flex:1, flexDirection: 'row' }}>
                            <div className="jsx-3204514433 label-container has-tooltip big "  style={{flex:2,marginTop:10,   textAlign :'left', justifyContent:'left', alignItems:'left'}}>Housing
                                bills &amp; utilities
                            </div>
                            <div style={{flex:1}} className="jsx-3204514433 content-container has-tooltip big ">
                                <div
                                    className="jsx-819937489 jsx-3124856362 jsx-3124856362 jsx-3210304440 inputContainer   ">
                                    <input name="exps_utilities" type="tel" max="999999" id="exps_utilities"
                                           placeholder="$" data-number="false" data-form-id="f7VVY9LqJe"
                                           aria-describedby="exps_utilities-errors"
                                           className="jsx-819937489 jsx-3124856362 jsx-3124856362 jsx-3210304440"
                                           value="$21,050"/><label aria-hidden="true" htmlFor="exps_utilities"
                                                                  className="jsx-819937489 jsx-3124856362 jsx-3124856362 jsx-3210304440 icon-container">

                                    </label>
                                        <div id="exps_utilities-errors" aria-live="polite"
                                             className="jsx-819937489 jsx-3124856362 jsx-3124856362 jsx-3210304440 errorMessage"></div>
                                </div>
                            </div>
                        </label></div>
                    <div className="jsx-3204514433 inputRow has-tooltip big  ">

                        <label className="jsx-3204514433" style={{display: 'flex',flex:1, flexDirection: 'row'}}>
                            <div className="jsx-3204514433 label-container has-tooltip big " style={{flex:2,   textAlign :'left', justifyContent:'left', alignItems:'left'}}>Phone, internet, cable
                            </div>
                            <div className="jsx-3204514433 content-container has-tooltip big ">
                                <div
                                    className="jsx-819937489 jsx-3124856362 jsx-3124856362 jsx-3210304440 inputContainer   ">
                                    <input name="exps_telecom" type="tel" max="999999" id="exps_telecom" placeholder="$"
                                           data-number="false" data-form-id="51w-q0mi_q"
                                           aria-describedby="exps_telecom-errors"
                                           className="jsx-819937489 jsx-3124856362 jsx-3124856362 jsx-3210304440"
                                           value="$250"/><label aria-hidden="true" htmlFor="exps_telecom"
                                                               className="jsx-819937489 jsx-3124856362 jsx-3124856362 jsx-3210304440 icon-container">

                                    </label>
                                        <div id="exps_telecom-errors" aria-live="polite"
                                             className="jsx-819937489 jsx-3124856362 jsx-3124856362 jsx-3210304440 errorMessage"></div>
                                </div>
                            </div>
                        </label></div>
                    <div className="jsx-3204514433 inputRow has-tooltip big  ">

                        <label className="jsx-3204514433" style={{display: 'flex',flex:1, flexDirection: 'row'}}>
                            <div className="jsx-3204514433 label-container has-tooltip big "  style={{flex:2,  textAlign :'left',  justifyContent:'left', alignItems:'left'}}>Groceries,
                                restaurants &amp; alcohol
                            </div>
                            <div className="jsx-3204514433 content-container has-tooltip big ">
                                <div
                                    className="jsx-819937489 jsx-3124856362 jsx-3124856362 jsx-3210304440 inputContainer   ">
                                    <input name="exps_food" type="tel" max="999999" id="exps_food" placeholder="$"
                                           data-number="false" data-form-id="mCmUuJPW1w"
                                           aria-describedby="exps_food-errors"
                                           className="jsx-819937489 jsx-3124856362 jsx-3124856362 jsx-3210304440"
                                           value="$22,200" /><label aria-hidden="true" htmlFor="exps_food"
                                                                  className="jsx-819937489 jsx-3124856362 jsx-3124856362 jsx-3210304440 icon-container">

                                    </label>
                                        <div id="exps_food-errors" aria-live="polite"
                                             className="jsx-819937489 jsx-3124856362 jsx-3124856362 jsx-3210304440 errorMessage"></div>
                                </div>
                            </div>
                        </label></div>
                    <div className="jsx-3204514433 inputRow has-tooltip big  ">

                        <label className="jsx-3204514433" style={{display: 'flex',flex:1, flexDirection: 'row'}}>
                            <div className="jsx-3204514433 label-container has-tooltip big "   style={{flex:2, textAlign :'left',  justifyContent:'left', alignItems:'left'}}>Shopping,
                                fitness &amp; grooming
                            </div>
                            <div className="jsx-3204514433 content-container has-tooltip big ">
                                <div
                                    className="jsx-819937489 jsx-3124856362 jsx-3124856362 jsx-3210304440 inputContainer   ">
                                    <input name="exps_shopping" type="tel" max="999999" id="exps_shopping"
                                           placeholder="$" data-number="false" data-form-id="AmvzSr4GdX"
                                           aria-describedby="exps_shopping-errors"
                                           className="jsx-819937489 jsx-3124856362 jsx-3124856362 jsx-3210304440"
                                           value="$12,300" /><label aria-hidden="true" htmlFor="exps_shopping"
                                                                  className="jsx-819937489 jsx-3124856362 jsx-3124856362 jsx-3210304440 icon-container">

                                    </label>
                                        <div id="exps_shopping-errors" aria-live="polite"
                                             className="jsx-819937489 jsx-3124856362 jsx-3124856362 jsx-3210304440 errorMessage"></div>
                                </div>
                            </div>
                        </label></div>
                    <div className="jsx-3204514433 inputRow has-tooltip big  ">

                        <label className="jsx-3204514433" style={{display: 'flex',flex:1, flexDirection: 'row'}}>
                            <div className="jsx-3204514433 label-container has-tooltip big "  style={{flex:2, textAlign :'left',  justifyContent:'left', alignItems:'left'}}>Cars, taxis &amp; public
                                transit
                            </div>
                            <div className="jsx-3204514433 content-container has-tooltip big ">
                                <div
                                    className="jsx-819937489 jsx-3124856362 jsx-3124856362 jsx-3210304440 inputContainer   ">
                                    <input name="exps_transportation" type="tel" max="999999" id="exps_transportation"
                                           placeholder="$" data-number="false" data-form-id="NSNFmZc395"
                                           aria-describedby="exps_transportation-errors"
                                           className="jsx-819937489 jsx-3124856362 jsx-3124856362 jsx-3210304440"
                                           value="$14,800"/><label aria-hidden="true" htmlFor="exps_transportation"
                                                                  className="jsx-819937489 jsx-3124856362 jsx-3124856362 jsx-3210304440 icon-container">

                                    </label>
                                        <div id="exps_transportation-errors" aria-live="polite"
                                             className="jsx-819937489 jsx-3124856362 jsx-3124856362 jsx-3210304440 errorMessage"></div>
                                </div>
                            </div>
                        </label></div>
                    <div className="jsx-3204514433 inputRow has-tooltip big  ">

                        <label className="jsx-3204514433" style={{display: 'flex',flex:1, flexDirection: 'row'}}>
                            <div className="jsx-3204514433 label-container has-tooltip big "  style={{flex:2,   textAlign :'left', justifyContent:'left', alignItems:'left'}}>Childcare &amp; education
                            </div>
                            <div className="jsx-3204514433 content-container has-tooltip big ">
                                <div
                                    className="jsx-819937489 jsx-3124856362 jsx-3124856362 jsx-3210304440 inputContainer   ">
                                    <input name="exps_childcare" type="tel" max="999999" id="exps_childcare"
                                           placeholder="$" data-number="false" data-form-id="C7s5ObbuQy"
                                           aria-describedby="exps_childcare-errors"
                                           className="jsx-819937489 jsx-3124856362 jsx-3124856362 jsx-3210304440"
                                           value="$0" />
                                           <label aria-hidden="true" htmlFor="exps_childcare"
                                                             className="jsx-819937489 jsx-3124856362 jsx-3124856362 jsx-3210304440 icon-container">

                                    </label>
                                        <div id="exps_childcare-errors" aria-live="polite"
                                             className="jsx-819937489 jsx-3124856362 jsx-3124856362 jsx-3210304440 errorMessage"></div>
                                </div>
                            </div>
                        </label></div>
                    <div className="jsx-3204514433 inputRow has-tooltip big  ">

                        <label className="jsx-3204514433" style={{display: 'flex',flex:1, flexDirection: 'row'}}>
                            <div className="jsx-3204514433 label-container has-tooltip big "  style={{flex:2, textAlign :'left', justifyContent:'left', alignItems:'left'}}>Discretionary, travel,
                                rec. &amp; gifts
                            </div>
                            <div className="jsx-3204514433 content-container has-tooltip big ">
                                <div
                                    className="jsx-819937489 jsx-3124856362 jsx-3124856362 jsx-3210304440 inputContainer   ">
                                    <input name="exps_discretionary" type="tel" max="999999" id="exps_discretionary"
                                           placeholder="$" data-number="false" data-form-id="X0sOYL24SV"
                                           aria-describedby="exps_discretionary-errors"
                                           className="jsx-819937489 jsx-3124856362 jsx-3124856362 jsx-3210304440"
                                           value="$13,550" /><label aria-hidden="true" htmlFor="exps_discretionary"
                                                                  className="jsx-819937489 jsx-3124856362 jsx-3124856362 jsx-3210304440 icon-container">

                                    </label>
                                        <div id="exps_discretionary-errors" aria-live="polite"
                                             className="jsx-819937489 jsx-3124856362 jsx-3124856362 jsx-3210304440 errorMessage"></div>
                                </div>
                            </div>
                        </label></div>
                    <div className="jsx-3204514433 inputRow has-tooltip big  ">

                        <label className="jsx-3204514433" style={{display: 'flex',flex:1, flexDirection: 'row'}}>
                            <div className="jsx-3204514433 label-container has-tooltip big "  style={{flex:2,  textAlign :'left',  justifyContent:'left', alignItems:'left'}}>Other</div>
                            <div   style={{flex:1}}className="jsx-3204514433 content-container has-tooltip big ">
                                <div
                                    className="jsx-819937489 jsx-3124856362 jsx-3124856362 jsx-3210304440 inputContainer   ">
                                    <input name="exps_other" type="tel" max="999999" id="exps_other" placeholder="$"
                                           data-number="false" data-form-id="_vJq2zWojn"
                                           aria-describedby="exps_other-errors"
                                           className="jsx-819937489 jsx-3124856362 jsx-3124856362 jsx-3210304440"
                                           value="$0" /><label aria-hidden="true" htmlFor="exps_other"
                                                             className="jsx-819937489 jsx-3124856362 jsx-3124856362 jsx-3210304440 icon-container">

                                    </label>
                                        <div id="exps_other-errors" aria-live="polite"
                                             className="jsx-819937489 jsx-3124856362 jsx-3124856362 jsx-3210304440 errorMessage"></div>
                                </div>
                            </div>
                        </label></div>
                    <div className="jsx-405667435 totalRow" style={{display: 'flex',flex:1, flexDirection: 'row', justifyContent:'center', alignItems:'center'}}>
                        <div className="jsx-3204514433 inputRow has-tooltip big  bold">
                            <div className="jsx-3204514433 tooltip-container">&nbsp;</div>
                            <label className="jsx-3204514433">
                                <div className="jsx-3204514433 label-container has-tooltip big ">Total Monthly
                                    Expenses
                                </div>
                                <div className="jsx-3204514433 content-container has-tooltip big "><span
                                    className="jsx-405667435 static-input">$11,305,262</span></div>
                            </label></div>
                    </div>
                    <div className="jsx-6061633 whatifcontainer">
                        <div className="jsx-2212846626 whatif">
                            <div className="jsx-2212846626 content">
                                <button type="button" className="jsx-2212846626"><span className="jsx-2212846626">Why do these expenses look high?</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <div className="jsx-2212846626 info-container">
                                        <div className="jsx-2212846626 info-absolute">

                                        </div>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                </div>


            </div>)
    }
}