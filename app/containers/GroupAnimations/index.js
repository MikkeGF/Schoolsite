/**
 *
 * GroupAnimations
 *
 */

import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect, useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { CircularProgress } from '@material-ui/core';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectGroupAnimations from './selectors';
import reducer from './reducer';
import saga from './saga';
import { getAnimations } from './actions';
import styled from 'styled-components';
import Animation from '../../components/Animation/Loadable';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  place-content: center;
  align-items: center;
`

export function GroupAnimations() {
  useInjectReducer({ key: 'groupAnimations', reducer });
  useInjectSaga({ key: 'groupAnimations', saga });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAnimations())
  }, [dispatch]);

  const state = useSelector(state => state.animationreducer.data)
  console.log(state)
  return (
    <div>
      <Helmet>
        <title>GroupAnimations</title>
      </Helmet>
      { state ?
        state.map(animation => (
          <Animation animation={animation} key={animation.name} />
        ))
        :
        <Wrapper>
          <CircularProgress />
        </Wrapper>
      }
    </div>
  );
}

GroupAnimations.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  groupAnimations: makeSelectGroupAnimations(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(GroupAnimations);
