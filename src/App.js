import { useState } from 'react';
import './App.css';
import Banner from './Layout/Banner';
import BelowCTA from './Layout/BelowCTA';
import FeatureList from './Layout/FeatureList';
import { Footer } from './Layout/Footer';
import Header from './Layout/Header';

function App() {

  const [cartTotal, setCartTotal] = useState(0);

  return (
    
    <div className="App">
        <Header cartTotal={cartTotal} />
        <Banner />
        <FeatureList />
        <BelowCTA setCartTotal={setCartTotal} />
        <Footer />
    </div>
    
    
  );
}

export default App;
