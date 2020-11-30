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
justify-content: center;
`;

const Gif = styled.img`
 max-width: 100%;

`
const Header = styled.h1`
display: flex;
justify-content: center;
`;

function Animation({animation}) {
console.log(animation);
  return (
    <>
    <Header>{animation.name}</Header>
    <Wrapper>
      <Gif src={animation.url}></Gif>
    </Wrapper>
    </>

  );
}

Animation.propTypes = {};

export default memo(Animation);
