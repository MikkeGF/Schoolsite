/**
 *
 * Group
 *
 */

import React, { memo, useState } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import Animation from '../Animation/Loadable';
import skate from '../../images/apple.gif';
import ski from '../../images/ski.gif';

import SwiperCore, { Controller } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/controller/controller.scss'

// install Swiper's Controller component
SwiperCore.use([Controller]);




const Gifs = {
  first: {
    name: 'testi1',
    url: skate
  },
  second: {
    name: 'ski',
    url: ski

  }
}


const Wrapper = styled.div`

`;

const Image = styled.img`

`;

const Styledswiper = styled(Swiper)`

`;
function Group() {

  const [firstSwiper, setFirstSwiper] = useState(null);
  const [secondSwiper, setSecondSwiper] = useState(null);

  return (
    <main>
      <Swiper onSwiper={setFirstSwiper} controller={{ control: secondSwiper }}>
        <SwiperSlide>
          <Wrapper>
            <Image src={Gifs.first.url} >
            </Image>
          </Wrapper>
        </SwiperSlide>
        <SwiperSlide>
          <Wrapper>
            <Image src={Gifs.second.url} >
            </Image>
          </Wrapper>
        </SwiperSlide>
      </Swiper>
    </main>
  );
}

Group.propTypes = {};

export default memo(Group);
