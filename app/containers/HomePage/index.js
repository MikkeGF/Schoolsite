/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, { useState, useEffect } from 'react';

// import axios from 'axios';
import CenteredTabs from '../../components/CenteredTabs/Loadable';
// import  { CircularProgress } from '@material-ui/core';
import ski from '../../images/ski.gif';
import burning from '../../images/burningsmaller.gif';
import balloon from '../../images/balloon.gif';
import skate from '../../images/apple.gif';
import text from '../../images/text.gif';
import joulu from '../../images/joulu.gif';
import moonstar from '../../images/moonstar.gif'
import skeleton from '../../images/skeleton.gif'
import zoom from '../../images/zoom.gif'
import hello from '../../images/hello.gif'
import rotate from '../../images/react.gif'
export default function HomePage(props) {
  // const [data, setData] = useState(null);

  // useEffect(() => {
  //   axios.get('https://40.69.209.24:4000/posts').then(res => {
  //     const response = res.data;
  //     setData(response);
  //   });
  // }, []);

  const animations = [
    {
      name: 'Skier',
      url: ski,
    },
    {
      name: 'Balloon',
      url: balloon,
    },

    {
      name: 'Skate',
      url: skate,
    },
  ];

  const groupAnimation = [
    {
      name: 'text-transform',
      url: text,
    },
    {
      name: 'Moonstar',
      url: moonstar,
    },
    {
      name: 'Skeleton',
      url: skeleton,
    },
    {
      name: 'Camera Zoom',
      url: zoom,
    },
    {
      name: 'Rotate text',
      url: rotate,
    },
    {
      name: 'Typing text effect',
      url: hello,
    },
  ];

  const ownAnimation = [
    {
      name: 'Burning House',
      url: burning,
    },
    {
      name: 'Merry Christmas',
      url: joulu,
    },
  ];

  return (
    <>
      <CenteredTabs
        group={groupAnimation}
        ownAnimation={ownAnimation}
        animations={animations}
        {...props}
      />
    </>
  );
}
