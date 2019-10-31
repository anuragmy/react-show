import React, { Component } from "react";
import Slide from "react-reveal/Slide";

class Timeuntil extends Component {
  state = {
    deadline: "Dec, 16, 2019",
    seconds: "0",
    hours: "0",
    minutes: "0",
    days: "0"
  };

  getUntil() {
    const time = Date.parse(this.state.deadline) - Date.parse(new Date());
    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor((time / 1000 / 60) % 60);
    const hours = Math.floor((time / (100 * 60 * 60)) % 24);
    const days = Math.floor(time / (100 * 60 * 60 * 24));
    this.setState({ days, minutes, seconds, hours });
  }

  componentDidMount() {
    setInterval(() => this.getUntil(this.state.deadline), 1000);
  }

  render() {
    const { days, minutes, seconds, hours } = this.state;
    return (
      <Slide left delay={100}>
        <div>
          <div className="countdown_wrapper">
            <div className="countdown_top">Event Starts In</div>
            <div className="countdown_bottom">
              <div className="countdown_item">
                <div className="countdown_time">{days}</div>
                <div className="countdown_tag">Days</div>
              </div>
              <div className="countdown_item">
                <div className="countdown_time">{hours}</div>
                <div className="countdown_tag">Hours</div>
              </div>
              <div className="countdown_item">
                <div className="countdown_time">{minutes}</div>
                <div className="countdown_tag">Minutes</div>
              </div>
              <div className="countdown_item">
                <div className="countdown_time">{seconds}</div>
                <div className="countdown_tag">Seconds</div>
              </div>
            </div>
          </div>
        </div>
      </Slide>
    );
  }
}

export default Timeuntil;
