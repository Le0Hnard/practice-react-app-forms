import React, { Component } from 'react';
import ValidateData from './validator';
import { ValidationContext } from './ValidationContext';

export default class FormValidator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      erroes: {},
      dirty: {},
      formSubmitted: false,
      getMessagesForField: this.getMessagesForField
    };
  }

  static getDerivedStateFromProps(props, state) {
    return {
      errors: ValidateData(props.data, props.rules)
    }
  }

  get formValid() {
    return Object.keys(this.state.errors).length === 0;
  }

  handleChange = (ev) => {
    let name = ev.target.name;
    this.setState(state => state.dirty[name] = true);
  }

  handleClick = (ev) => {
    this.setState({ formSubmitted: true }, () => {
      if(this.formValid) {
        this.props.submit(this.props.data);
      }
    });
  }

  getButtonClasses() {
    return this.state.formSubmitted && !this.formValid ? "btn-danger" : "btn-primary";
  }

  getMessagesForField = (field) => {
    return  (this.state.formSubmitted || this.state.dirty[field]) ? this.state.errors[field] || [] : [];
  }

  render() {
    return (
      <>
        <ValidationContext.Provider value={ this.state }>
          <div onChange={ this.handleChange }>
            { this.props.children }
          </div>
        </ValidationContext.Provider>

        <div className="text-center">
          <button 
            className={ `btn ${this.getButtonClasses()}` } 
            onClick={ this.handleClick } 
            disabled={ this.state.formSubmitted && !this.formValid }
          >
            Submit
          </button>
        </div>
      </>
    )
  }
}
