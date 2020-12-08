/**
 *
 * CenteredTabs
 *
 */

import React, { memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PropTypes from 'prop-types';
import Animation from '../Animation/Loadable';
import Social from '../Social/Loadable';
import Home from '../../containers/Home/Loadable';

// import styled from 'styled-components';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    backgroundColor: 'lightgrey',
  },
});

function CenteredTabs(props) {
  const { animations, group, ownAnimation } = props;
  const { match, history } = props;
  const { params } = match;
  const { page } = params;

  const tabNameToIndex = {
    0: 'animations',
    1: 'social',
    2: 'group',
    3: 'ownAnimation',
    4: 'redux'
  };
  const indexToTabName = {
    animations: 0,
    social: 1,
    group: 2,
    ownAnimation: 3,
    redux: 4
  };
  const [selectedTab, setSelectedTab] = React.useState(indexToTabName[page]);

  const classes = useStyles();
  const handleChange = (event, newValue) => {
    history.push(`/home/${tabNameToIndex[newValue]}`);
    setSelectedTab(newValue);
  };

  return (
    <React.Fragment>
      <Paper className={classes.root}>
        <Tabs
          value={selectedTab}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="secondary"
          centered
        >
          <Tab label="Lesson Animations" />
          <Tab label="Facebook/Twitter" />
          <Tab label="Group animation" />
          <Tab label="Own animation" />
          <Tab label="Redux" />
        </Tabs>
      </Paper>
      <div>
        {selectedTab === 0 &&
          animations.map(animation => (
            <Animation animation={animation} key={animation.name} />
          ))}
      </div>
      <div>{selectedTab === 1 && <Social />}</div>
      <div>
        {selectedTab === 2 &&
          group.map(animation => (
            <Animation animation={animation} key={animation.name} />
          ))}
      </div>
      <div>
        {selectedTab === 3 &&
          ownAnimation.map(animation => (
            <Animation animation={animation} key={animation.name} />
          ))}
      </div>
      <div>
      {selectedTab === 4 &&
        <Home />
      }
      </div>
    </React.Fragment>
  );
}
CenteredTabs.propTypes = {
  ownAnimation: PropTypes.array.isRequired,
  group: PropTypes.array.isRequired,
  animations: PropTypes.array.isRequired,
  match: PropTypes.object,
  history: PropTypes.object,
};

export default memo(CenteredTabs);
