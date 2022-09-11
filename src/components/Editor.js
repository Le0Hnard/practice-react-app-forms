import React, { Component } from 'react';

export default class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Bob",
      flavor: "Vanilla",
      toppings: ["Strawberries"],
      twoScoops: false
    };

    this.flavors = ["Chocolate", "Double Chocolate", "Triple Chocolate", "Vanilla"];
    this.toppings = ["Sprinkles", "Fudge Sauce", "Strawberries", "Maple Syrup"];
  }

  updateFormValue = (event) => {
    this.setState({ [event.target.name]: event.target.value }, () => this.props.submit(this.state));
  }

  updateFormValueOptions = (event) => {
    let options = [...event.target.options].filter(o => o.selected).map(o => o.value);

    this.setState({ [event.target.name]: options }, () => this.props.submit(this.state));
  }

  updateFormValueCheck = (event) => {
    this.setState({ [event.target.name]: event.target.checked }, () => this.props.submit(this.state));
  }

  render() {
    return (
      <div className="h5 bg-info text-white p-2">
        <div className="form-group">
          <label>Name</label>
          <input className="form-control" name="name" value={ this.state.name } onChange={ this.updateFormValue } />
        </div>
        <div className="form-group">
          <label>Ice Cream Flavors</label>
          {/* <select className="form-control" name="flavor" value={ this.state.flavor } onChange={ this.updateFormValue }>
            {
              this.flavors.map(flavor =>
                <option value={ flavor } key={ flavor }>
                  { flavor }
                </option>
              )
            }
          </select> */}
          {
            this.flavors.map(flavor => 
              <div className="form-check" key={ flavor }>
                <input className="form-check-input" type="radio" name="flavor" value={ flavor }
                checked={ this.state.flavor === flavor } onChange={ this.updateFormValue } />
                <label className="form-check-label">{ flavor }</label>
              </div>
            )
          }
        </div>
        <div className="form-group">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" checked={ this.state.twoScoops } onChange={ this.updateFormValueCheck } 
            name="twoScoops"/>
            <label className="form-check-label">Two Scoops</label>
          </div>
        </div>
        <div className="form-group">
            <label>Ice Cream Toppings</label>
            <select className="form-control" multiple={ true } name="toppings" value={ this.state.toppings } onChange={ this.updateFormValueOptions }>
              {
                this.toppings.map(top => 
                  <option value={ top } key={ top }>
                    { top }
                  </option>
                )
              }
            </select>
        </div>
      </div>
    );
  }
}
