/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import CenteredTabs from '../../components/CenteredTabs/Loadable';
// import axios from 'axios';
// import  { CircularProgress } from '@material-ui/core';
import ski from '../../images/ski.gif';
import burning from '../../images/burningsmaller.gif';
import balloon from '../../images/balloon.gif';
import skate from '../../images/apple.gif';
import text from '../../images/text.gif';

export default function HomePage(props) {
  // const [state, setState] = useState(null);

  // useEffect(() => {
  //  axios.get('http://207.154.197.252:5000/posts').then((res) => {
  //   const response = res.data;
  //   setState(response)
  //   });
  // }, [])

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
    {
      name: 'Burning House',
      url: burning,
    },
  ];

  const groupAnimation = [
    {
      name: 'text-transform',
      url: text,
    },
  ];

  return (
    <>
      <CenteredTabs group={groupAnimation} animations={animations} {...props} />
    </>
  );
}
