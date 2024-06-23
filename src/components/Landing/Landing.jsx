import React from 'react'
import Navbar from './Navbar'
import Welcome from './Welcome'
import Building from './Building'
import Stockevl from './Stockevl'
import MemberShip from './MemberShip'
import MemberCard from './MemberCard'
import TakeStep from './TakeStep'
import Footer2 from './Footer2'
import Slider from './Slider'
import Roadmap from '../Roadmap'

function Landing({language}) {
  return (
    <div>
        <Navbar/>
        <Welcome/>
        <Building/>
        <Stockevl/>
        <MemberShip/>
        <Roadmap language={language} />
        <Slider/>
        <TakeStep/>
        <Footer2/>
    </div>
  )
}

export default Landing