import logo from './logo.svg';
import './App.css';
import { Typography } from '@mui/material';
import Navbar from './components/Navbar';
import FeatureHero from './components/FeatureHero';
import { useState } from 'react';
import FeatureAContent from './components/FeatureAContent';
import FeatureBContent from './components/FeatureBContent';

function App() {
  const [selectedFeature, setSelectedFeature] = useState("feature-a")
  return (
    <>
      <Navbar 
        selectedFeature={selectedFeature}
        setSelectedFeature={setSelectedFeature}
        />
      <FeatureHero feature={selectedFeature}/>
      {selectedFeature === "feature-a" ? <FeatureAContent/> : <FeatureBContent/>}
    </>
  );
}

export default App;
