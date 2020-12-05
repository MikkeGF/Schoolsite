/**
 *
 * Gatest
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

const ReactGA = require('react-ga');

function Gatest() {
  return (
    <React.Fragment>
      <ReactGA.OutboundLink
        eventLabel="Jahti"
        to="https://www.youtube.com/watch?v=D0t82I8w3-Q"
        target="_blank"
      >
        jahti
      </ReactGA.OutboundLink>
    </React.Fragment>
  );
}

Gatest.propTypes = {};

export default Gatest;
