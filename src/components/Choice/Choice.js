import React from "react";
import Vehicles from "../Vehicles/Vehicles";
import Planets from "../Planets/Planets";
import ChoiceHeader from "./ChoiceHeader";
import './choice.css'

class Choice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false,
      activeShip: null,
      elem:null
    };
  }

  handleChange = () => {

    this.setState({ selected: true }, function () {     
      this.props.selectPlanet();
    });
    
    if (this.state.selected) { 
     
      this.props.resetVehicleState(this.state.activeShip); 
      console.log(this.state.elem)
      document.getElementById(this.state.elem).checked = false;
      this.setState({ activeShip: null,elem:null });
    }
    

  };
  getShip = (ship,elem) => {
    this.setState({activeShip:ship,elem:elem})
  }

  render() {
    return (
      <div className="col-md-3">
        <div className="choice">
          <ChoiceHeader option={this.props.option} />
          <Planets
            planets={this.props.planets}
            planetsSelected={this.props.planetsSelected}
            option={this.props.option}
            handleChange={this.handleChange}
          />
          <br />
          {
            this.state.selected ?
              (
                <Vehicles
                  vehicles={this.props.vehicles}
                  option={this.props.option}
                  planets={this.props.planets}
                  selectVehicle={this.props.selectVehicle}
                  getShip={this.getShip}
                />
              )
              :
              null
          }
        </div>
      </div>
    );
  }
}

export default Choice;
