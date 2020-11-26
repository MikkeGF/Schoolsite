/**
 *
 * Ski
 *
 */

import React, {useState} from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import AnimateCC from "react-adobe-animate";


function Ski() {
  const [paused, setPaused] = useState(false);
  const [, setAnimationObject] = useState(null);
  const getAnimationObject = obj => setAnimationObject(obj);
  const onClick = () => setPaused(!paused);


  return (
    <React.Fragment>
      <AnimateCC
      animationName="ski_atlas_1"
      getAnimationObject={getAnimationObject}
      paused={paused}
      />
      <button onClick={onClick}>{paused ? "Unpause" : "Pause"}</button>
      </React.Fragment>
  );
}

Ski.propTypes = {};

export default Ski;
