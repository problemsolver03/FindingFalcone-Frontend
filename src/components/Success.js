import React from "react";

class Success extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      response: null
    };
    if (this.props.location.state === undefined) {
      this.props.history.push("/");
    }
  }
  componentDidMount() {
    console.log(this.props);

    let planets = this.props.location.state.planets;
    let vehicles = [];
    for (let vehicle of this.props.location.state.vehicles) {
      vehicles.push(vehicle.name);
    }
    console.log(planets);
    fetch("https://findfalcone.herokuapp.com/token", {
      method: "POST",
      headers: { Accept: "application/json" }
    })
      .then(res => res.json())
      .then(response => {
        if (response.token !== undefined) {
          fetch("https://findfalcone.herokuapp.com/find", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              token: response.token,
              planet_names: planets,
              vehicle_names: vehicles
            })
          })
            .then(res => res.json())
            .then(response => {
              console.log(response);
              this.setState({ loading: false, response: response });
            })
            .catch(err => console.error(err));
        }
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div className="container customPadding">
        <div className="row">
          <div className="col-md-12 successHolder">
            <br />
            {this.state.loading ? (
              <h1 className="header">Please wait...</h1>
            ) : null}

            {this.state.response !== null ? (
              <>
                {this.state.response.status === "success" ? (
                  <div>
                    <h1 className="header">Success!</h1>
                    <p className="lead">
                      It's a hit falcone has been found on{" "}
                      <b className="orange">
                        {this.state.response.planet_name}
                      </b>
                    </p>
                  </div>
                ) : (
                  <div>
                    <h1 className="header">Missed!</h1>
                    <p className="lead">
                      This mission was not successfull let's try again with
                      different options.
                    </p>
                    <button
                      type="button"
                      className="btn btn-rounded"
                      onClick={() => {
                        this.props.history.goBack();
                      }}
                    >
                      Try again
                    </button>
                  </div>
                )}
              </>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

export default Success;
