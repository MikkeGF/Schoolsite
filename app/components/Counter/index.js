/**
 *
 * Counter
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';
const Section = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 50vw;
  display: flex;
  height: 50vh;
  margin: 10px;
  padding: 10px;
  background-color: lightblue;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

function Counter() {
  const count = useSelector(state => state.homereducer.count);

  return (
    <Section>
      <Wrapper>
        <h3> {`Count: ${count}`}</h3>
        <ButtonWrapper />
      </Wrapper>
    </Section>
  );
}

Counter.propTypes = {};

export default memo(Counter);
