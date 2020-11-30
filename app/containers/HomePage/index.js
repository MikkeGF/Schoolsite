/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, {useState, useEffect} from 'react';
import CenteredTabs from '../../components/CenteredTabs/Loadable';
// import axios from 'axios';
import  { CircularProgress } from '@material-ui/core';
import ski from '../../images/ski.gif';
import burning from '../../images/burningsmaller.gif';
import balloon from '../../images/balloon.gif';



export default function HomePage() {

  // const [state, setState] = useState(null);

  // useEffect(() => {
  //  axios.get('http://207.154.197.252:5000/posts').then((res) => {
  //   const response = res.data;
  //   setState(response)
  //   });
  // }, [])

  const animations = [
    {
      name: "Balloon",
      url: balloon
    },
    {
      name: "Burning House",
      url: burning
    },
    {
      name: "Skier",
      url: ski

    }
  ]



    return (
      <>
       <CenteredTabs animations={animations} />
      </>
    );
}
