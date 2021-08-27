import Header from './components/Header';
import CarContainer from './containers/CarsContainer';

import './App.css';

function App() {
  const car = {
    brand: 'lamborghini',
    model: 'veneno',
    price: '$4 million',
    image:
      'https://pictures.topspeed.com/IMG/crop/201303/2013-lamborghini-veneno-33_1600x0w.jpg',
  };

  return (
    <div className="app">
      <Header />
      <CarContainer />
    </div>
  );
}

export default App;
