import React, { Component } from "react";
import styled from "styled-components";


import { connect } from "react-redux";
import { withRouter } from "react-router-dom";


class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scrollToIndex: 0
        };

    }

    componentDidMount() {

    }



    render() {
        return(<div></div>)
    }
}

const mapStateToProp = state => {
    return {
        landingPageData: state.home.landingPageData
    };
};

export default withRouter(connect(mapStateToProp)(HomePage));

const Wrapper = styled.div`
  .btn-install {
    display: flex;
    justify-content: center;
    flex-wrap: nowrap;
    align-items: center;
    .btn-link {
      margin: 10px 10px;
      img {
        max-width: 100%;
      }
    }
  }
 
`;
