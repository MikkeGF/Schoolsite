/**
 *
 * Animation
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-self: center;
  align-items: center;

  justify-content: center;
`;

const Gif = styled.img`
  max-width: 100%;
  padding: 50px;
`;

const Header = styled.h1`
  display: flex;
  justify-content: center;
`;

function Animation({ animation }) {
  return (
    <React.Fragment>
      <Header>{animation.name}</Header>
      <Wrapper>
        <Gif src={animation.url} />
      </Wrapper>
    </React.Fragment>
  );
}

Animation.propTypes = { animation: PropTypes.object };

export default memo(Animation);
