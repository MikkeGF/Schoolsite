/**
 *
 * CenteredTabs
 *
 */

import React, { memo, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Animation from '../Animation/Loadable';
import PropTypes from 'prop-types';
import Social from '../Social/Loadable';

// import styled from 'styled-components';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    backgroundColor: 'lightgrey',
  },
});

function CenteredTabs({ animations }) {

  const classes = useStyles();
  const [value, setValue] = useState(0);
  console.log(value);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <React.Fragment>
      <Paper className={classes.root}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="secondary"
          centered
        >
          <Tab label="Animations" />
          <Tab label="Facebook/Twitter" />
        </Tabs>
      </Paper>
      <div>
        { value === 0 &&
          animations.map((animation) => (
              <Animation animation={animation} key={animation.name} />
          ))}
      </div>
      <div>
      { value === 1 &&
        <Social />
      }
      </div>
    </React.Fragment>
  );
}

 CenteredTabs.propTypes = {animations: PropTypes.array.isRequired};

export default memo(CenteredTabs);
