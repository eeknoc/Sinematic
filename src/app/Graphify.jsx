import React from 'react'
import Navbar from '../components/Navbar'
import FeatureAContent from '../components/FeatureAContent'
import FeatureHero from '../components/FeatureHero'

export default function Graphify() {
  return <>
  <Navbar/>
  <FeatureHero feature="graphify"/>
  <FeatureAContent/>
  </>
}
