import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";

const TheLoader2 = (props) => {

  return (
  <div id="wrapperWashing">
  <div id="washingMachine" className="isFilled isWashing">
    <div id="controls">WASHING</div>
    <div id="door" />
    <div id="tub">
      <span className="clothes" />
      <span className="clothes" />
      <span className="clothes" />
    </div>
  </div>
  {/* <div id="playground">
    <button id="content">EMPTY</button>
    <button id="opening">CLOSE</button>
    <button id="power"disabled>
      START
    </button>
  </div> */}
</div>

  );
};

export default TheLoader2;
