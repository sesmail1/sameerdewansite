import React, { Component } from "react";
import * as modal_actions from '../redux/actions/modal';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Modal extends Component {
  componentDidMount() {
    console.log(this.props.content)
  }
    close() {
      this.props.modalHandler(false);
    }
    render() {
      let style = {
        display: (this.props.display) ? 'block' : 'none'
      };
    if(this.props.display == true)
      return (
          <div id="myModal" className="modal" style={style}>
        
          <div className="modal-content">
            <div className="modal-header fixed-top">
              <span onClick={() => this.close()} className="close">&times;</span>
            </div>
            <div className="modal-body navbar-inner">
              <div className="container col-xs-12">
          
                <h1 className="my-4 heading">{this.props.content.projectName}
                  <br/>
                  <small className="subheading">{this.props.content.type}</small>
                </h1>
          
                <div className="row mb-4">
          
                  <div className="col-md-10 col-lg-6">
                    <img className="img-fluid" src="http://placehold.it/750x500" alt=""/>
                  </div>
          
                  <div className="col-md-10 col-lg-4">
                    <h3 className="my-3">Project Description</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna
                      varius vitae. Sed dui lorem, adipiscing in adipiscing et, interdum nec metus. Mauris ultricies, justo eu
                      convallis placerat, felis enim.</p>
                    <h3 className="my-3">Project Details</h3>
                    <ul>
                      <li>Lorem Ipsum</li>
                      <li>Dolor Sit Amet</li>
                      <li>Consectetur</li>
                      <li>Adipiscing Elit</li>
                    </ul>
                  </div>
          
                </div>
          
                <div className="row">
          
                  <div className="col-md-10 col-lg-4">
                    <h3 className="my-3">Project Description</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna
                      varius vitae. Sed dui lorem, adipiscing in adipiscing et, interdum nec metus. Mauris ultricies, justo eu
                      convallis placerat, felis enim.</p>
                    <h3 className="my-3">Project Details</h3>
                    <ul>
                      <li>Lorem Ipsum</li>
                      <li>Dolor Sit Amet</li>
                      <li>Consectetur</li>
                      <li>Adipiscing Elit</li>
                    </ul>
                  </div>
                  <div className="col-md-10 col-lg-6 ">
                    <img className="img-fluid" src="http://placehold.it/750x500" alt=""/>
                  </div>
          
          
                </div>
          
                <h3 className="my-4">Related Projects</h3>
          
                <div className="row mx-auto">
          
                  <div className="col-xl-4 col-md-5 col-sm-6 mb-4">
                    <a href="#">
                      <img className="img-fluid" src="http://placehold.it/500x300" alt=""/>
                    </a>
                  </div>
          
                  <div className="col-xl-4 col-md-5 col-sm-6 mb-4">
                    <a href="#">
                      <img className="img-fluid" src="http://placehold.it/500x300" alt=""/>
                    </a>
                  </div>
          
                  <div className="col-xl-4 col-md-5 col-sm-6 mb-4">
                    <a href="#">
                      <img className="img-fluid" src="http://placehold.it/500x300" alt=""/>
                    </a>
                  </div>
          
                  <div className="col-xl-4 col-md-5 col-sm-6 mb-4">
                    <a href="#">
                      <img className="img-fluid" src="http://placehold.it/500x300" alt=""/>
                    </a>
                  </div>
          
                </div>
          
              </div>
            </div>
          </div>
          
          </div>
      );
      else return (
        <div></div>
      );
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
      contentFill: modal_actions.modalContentFill,
      modalHandler: modal_actions.modalHandler
  }, dispatch);
};

function mapStateToProps(state) {
  return {
      display: state.modal,
      content: state.currentPortfolioItem
  };
};

export default connect(mapStateToProps, matchDispatchToProps)(Modal);