import React from "react";
import Header from "./Common/Header";
import Choice from "./Choice/Choice";
import endpoints from "../config";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      planets: [],
      vehicles: [],
      selectedPlanets: [],
      selectedVehicles: [],
      loading: false,
      error: false,
    };
  }

  selectPlanet = (e) => {
    let selectedPlanets = document.getElementsByClassName("planets");
    let planets = [];

    for (let i = 0; i < selectedPlanets.length; i++) {
      let planetName = selectedPlanets[i].value;
      if (planetName !== "") {
        planets.push(planetName);
      }
    }

    let removeDuplicates = new Set(planets);
    let cleanPlanetsArray = [...removeDuplicates];

    this.setState({ selectedPlanets: cleanPlanetsArray });
  };

  selectVehicle = (prevShip, currentShip) => {

    let selectedVehicles = [...this.state.vehicles];
    if (!prevShip) {
      for (let vehcile of selectedVehicles) {
        if (vehcile.name === currentShip) {
          --vehcile.total_no;
        }
      }
    }
    else {
      for (let vehcile of selectedVehicles) {
        if (vehcile.name === currentShip) {
          --vehcile.total_no;
        } else if (vehcile.name === prevShip) {
          ++vehcile.total_no;
        }
      }
    }
    this.setState({ selectedVehicles });
  }

  resetVehicleState = (ship) => {
   
    let selectedVehicles = [...this.state.vehicles];
    for (let vehcile of selectedVehicles) {
      if (vehcile.name === ship) {
           ++vehcile.total_no;
      }
    }
    this.setState({ selectedVehicles });
  }

  componentDidMount() {
    let { planetsAPI, vehiclesAPI } = endpoints;
    fetch(planetsAPI)
      .then((res) => res.json())
      .then((response) => {
        if (response.length > 0) {
          this.setState({ planets: response });
        } else {
          this.setState({ error: true });
        }
      })
      .catch((err) => {
        console.error(err);
        this.setState({ error: true });
      });

    fetch(vehiclesAPI)
      .then((res) => res.json())
      .then((response) => {
        if (response.length > 0) {
          this.setState({ vehicles: response });
        } else {
          this.setState({ error: true });
        }
      })
      .catch((err) => {
        console.error(err);
        this.setState({ error: true });
      });
  }

  resetPlan = () => {
    let vehicles = [...this.state.vehicles];
    let planets = [...this.state.planets];
    this.setState(
      { vehicles: [], planets: [], selectedPlanets: [], selectedVehciles: [] },
      function () {
        this.setState({ vehicles, planets });
      }
    );
  };

  submitPlan = () => {
    this.props.history.push({
      pathname: "/success",
      state: {
        planets: this.state.selectedPlanets,
        vehicles: this.state.selectedVehicles,
      },
    });
  };

  render() {
    return (
      <div className="container customPadding">
        <div className="row">
          <Header />
          {this.state.error ? (
            <p className="alert alert-danger">Sorry there was an error.</p>
          ) : null}
          {this.state.planets.length > 0 ? (
            <React.Fragment>
              {Array.from({ length: 4 }).map((arr, i) => {
                return (
                  <Choice
                    planets={this.state.planets}
                    vehicles={this.state.vehicles}
                    option={i + 1}
                    selectPlanet={this.selectPlanet}
                    planetsSelected={this.state.selectedPlanets}
                    selectedVehciles={this.state.selectedVehicles}
                    selectVehicle={this.selectVehicle}
                    resetVehicleState={this.resetVehicleState}
                    key={i}
                  />
                );
              })}
            </React.Fragment>
          ) : null}
        </div>
        <div className="row">
          <div className="col-md-12 text-center submitHolder">
            <button
              type="button"
              className="btn btn-secondary btn-lg btn-rounded"
              onClick={this.resetPlan}
            >
              Reset Plan
            </button>{" "}
            <button
              type="button"
              className="btn btn-primary btn-lg btn-rounded"
              disabled={this.state.selectedVehicles.length === 4 ? false : true}
              onClick={this.submitPlan}
            >
              Find Falcone
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
