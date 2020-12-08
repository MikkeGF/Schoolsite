/**
 *
 * Counter
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/src/styles/styles.scss';
import './Button.scss';

import { decrement, increment } from '../../containers/Home/actions';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';
const Section = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 50vh;
  margin: 10px;
  padding: 10px;
  background-color: lightblue;
`;

const ButtonWrapper = styled.div`
  display: flex;
  padding: 20px;
  height: 200px;
  width: 400px;
  &&& {
    justify-content: space-around;
  }
`;

function Counter() {
  const count = useSelector(state => state.homereducer.count);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <Section>
      <Wrapper>
        <h1>Redux testing</h1>
        <h3> {`Count: ${count} `}</h3>
        <ButtonWrapper>
          <AwesomeButton
            type="secondary"
            size="small"
            onPress={handleDecrement}
          >
            -
          </AwesomeButton>
          <AwesomeButton
            type="secondary"
            size="small"
            onPress={handleIncrement}
          >
            +
          </AwesomeButton>
        </ButtonWrapper>
      </Wrapper>
    </Section>
  );
}

Counter.propTypes = {};

export default memo(Counter);
