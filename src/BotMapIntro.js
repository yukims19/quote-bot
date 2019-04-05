import React, { Component } from "react";
import publicIp from "public-ip";

//TODO: find map depending on user location
class BotMapIntro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ip: "",
      lat: "",
      log: ""
    };
  }
  componentDidMount() {
    let lat;
    let log;
    navigator.geolocation.getCurrentPosition(data => {
      lat = data.coords.latitude;
      log = data.coords.longitude;
    });

    publicIp.v4().then(ip => {
      this.setState({
        ip: ip,
        lat: lat,
        log: log
      });
    });
  }
  render() {
    return (
      <div className="bot-map-intro">
        <div className="intro-img-wrapper">
          <img
            id="user-bot"
            src={`https://robohash.org/${this.state.ip}.png?bgset=bg2​`}
            alt="User Bot"
          />
          <img
            id="user-map"
            src={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/pin-s(-122.4033477,37.7904462)/${
              this.state.log
            },${
              this.state.lat
            },9.67,0.00,0.00/400x400@2x?access_token=pk.eyJ1Ijoic2VhbnAiLCJhIjoiY2p1MDY1YmljM2NnMjN6bXVnZXRpeGdvdSJ9.om-OkYVrL4-GyeWA3Evj2g`}
            alt="User location map"
          />
        </div>
        <p>
          I was built in San Francisco to find quotes for you. Rate each quote
          and I will try to find even better ones.
        </p>
      </div>
    );
  }
}

export default BotMapIntro;
