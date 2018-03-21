import React, { Component } from "react";
import * as modal_actions from '../redux/actions/modal';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';



class ProjectComponent extends Component {
    openModal(data) {
      this.props.modalHandler(true);
      this.props.contentFill(data);
    }
    render() {
    return (
      <div onClick={() => this.openModal(this.props.data)} className={`portfolio ${this.props.data.type} button`} data-cat='{this.props.data.type}'>
        <div className="portfolio-wrapper">
          <img src="img/portfolios/logo/5.jpg" alt="" />
          <div className="label">
            <div className="label-text">
              <a className="text-title">{this.props.data.projectName}</a>
              <span className="text-category">{this.props.data.type.toUpperCase()}</span>
            </div>
            <div className="label-bg" />
          </div>
        </div>
      </div>
    );
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
      contentFill: modal_actions.modalContentFill,
      modalHandler: modal_actions.modalHandler
  }, dispatch);
}

export default connect(null, matchDispatchToProps)(ProjectComponent);



