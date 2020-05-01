import React from "react";
import Vehicles from "./Vehicles";
import Planets from "./Planets";

class Choice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false
    };
  }

  handleChange = () => {
    this.setState({ selected: true }, function() {
      this.props.selectPlanet();
    });
  };

  render() {
    return (
      <div className="col-md-3">
        <div className="choice">
          <h3>
            <span>{this.props.option}</span>{" "}
            <small>
              Option for <br />
              King Shan
            </small>{" "}
          </h3>
          <Planets
            planets={this.props.planets}
            planetsSelected={this.props.planetsSelected}
            option={this.props.option}
            handleChange={this.handleChange}
          />
          <br />
          {this.state.selected ? (
            <Vehicles
              vehicles={this.props.vehicles}
              option={this.props.option}
              planets={this.props.planets}
              selectVehicle={this.props.selectVehicle}
              selectedVehciles={this.props.selectedVehicles}
            />
          ) : null}
        </div>
      </div>
    );
  }
}

export default Choice;
