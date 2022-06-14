import './App.css';
import Banner from './Layout/Banner';
import BelowCTA from './Layout/BelowCTA';
import CardList from './Layout/CardList';
import { Footer } from './Layout/Footer';
import Header from './Layout/Header';

function App() {
  return (
    
    <div className="App">
      <Header />
      <Banner />
      <CardList />
      <BelowCTA />
      <Footer />
    </div>
    
    
  );
}

export default App;
