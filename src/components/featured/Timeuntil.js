import React, { Component } from "react";
import Slide from "react-reveal/Slide";

class Timeuntil extends Component {
  render() {
    return (
      <Slide left delay={100}>
        <div>
          <div className="countdown_wrapper">
            <div className="countdown_top">Event Starts In</div>
            <div className="countdown_bottom">
              <div className="countdown_item">
                <div className="countdown_time">23</div>
                <div className="countdown_tag">Days</div>
              </div>
              <div className="countdown_item">
                <div className="countdown_time">23</div>
                <div className="countdown_tag">Days</div>
              </div>
              <div className="countdown_item">
                <div className="countdown_time">23</div>
                <div className="countdown_tag">Days</div>
              </div>
            </div>
          </div>
        </div>
      </Slide>
    );
  }
}

export default Timeuntil;
