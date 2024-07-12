import React, {useEffect} from 'react'
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading'
import ScrollService from '../../utilities/ScrollService'
import Animations from '../../utilities/Animations'
import './AboutMe.css'


export default function AboutMe(props) {
  return (
    <div className='about-me-container'>
        <div className='about-me-parent'>
            <ScreenHeading title={'About Me'} subHeading={'Why Choose me?'}/>
        </div>
    </div>
  )
}
