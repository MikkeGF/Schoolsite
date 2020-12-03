/**
 *
 * Group
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import Animation from '../Animation/Loadable';

function Group(props) {
  const { groupAnimation } = props;
  return (
    <>
      <Animation animation={groupAnimation} />
    </>
  );
}

Group.propTypes = {};

export default memo(Group);
