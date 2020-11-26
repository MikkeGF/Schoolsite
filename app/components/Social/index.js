/**
 *
 * Social
 *
 */

import React, { memo } from 'react';
import Facebook from '../Facebook/Loadable';
import Twitter from '../Twitter/Loadable';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function Social() {
  return (
    <React.Fragment>
      <Facebook />
      <Twitter />
    </React.Fragment>
  );
}

Social.propTypes = {};

export default memo(Social);
