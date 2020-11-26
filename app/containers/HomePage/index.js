/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, {useState, useEffect} from 'react';
import CenteredTabs from '../../components/CenteredTabs/Loadable';
import axios from 'axios';
import  { CircularProgress } from '@material-ui/core';


export default function HomePage() {

  const [state, setState] = useState(null);

  useEffect(() => {
   axios.get('http://207.154.197.252:5000/posts').then((res) => {
    const response = res.data;
    setState(response)
    });
  }, [])



    return (
      <>
      { state
        ? <CenteredTabs state={state} />
        : <CircularProgress  />
      }
      </>
    );
}
