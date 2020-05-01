import React from "react";

class Vehicles extends React.Component {
  state = {
    activePlanet: null,
    suitableVehicles: [],
    activeShip: null,
    timetaken: null
  };

  componentDidMount() {
    let { option, planets } = this.props;

    let seletectedShip = document.getElementsByClassName("planets")[option - 1]
      .value;
    if (seletectedShip !== "") {
      for (let planet of planets) {
        if (planet.name === seletectedShip) {
          this.setState({ activePlanet: planet });
        }
      }
    }
  }

  seletShip = (ship, timetaken) => {
    this.state.activeShip === null
      ? this.props.selectVehicle(false, ship)
      : this.props.selectVehicle(this.state.activeShip, ship);

    this.setState({ activeShip: ship, timetaken: timetaken });
  };

  render() {
    let { option, vehicles } = this.props;

    return (
      <div>
        {this.state.activePlanet !== null ? (
          <>
            <label>
              Choose Ship
              <small>
                to travel {this.state.activePlanet.distance} megamiles
              </small>
              {this.state.timetaken !== null ? (
                <small className="time">
                  Timetaken : {this.state.timetaken}
                </small>
              ) : null}
            </label>
            <ul className="vehicleList">
              {vehicles.map((ship, i) => {
                return (
                  <li
                    key={i}
                    className={
                      ship.name === this.state.activeShip ? "active" : ""
                    }
                  >
                    <input
                      type="radio"
                      name={`choice${option}`}
                      id={`choice${option}${i}`}
                      disabled={
                        ship.max_distance < this.state.activePlanet.distance ||
                        ship.name === this.state.activeShip ||
                        ship.total_no === 0
                          ? true
                          : false
                      }
                      onClick={() =>
                        this.seletShip(
                          ship.name,
                          this.state.activePlanet.distance / ship.speed
                        )
                      }
                    />
                    <label htmlFor={`choice${option}${i}`} className="vehicle">
                      {ship.name}{" "}
                      <b>
                        <small>Max Distance</small> {ship.max_distance}
                      </b>
                      <b className="available">{ship.total_no}</b>
                    </label>
                  </li>
                );
              })}
            </ul>
          </>
        ) : null}
      </div>
    );
  }
}
export default Vehicles;
