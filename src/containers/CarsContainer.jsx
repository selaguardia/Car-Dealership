import React from 'react';
import CarList from '../components/CarList';

class CarContainer extends React.Component {

  state = {
    available: [
      {
        id: 'gfhsfnfgsf',
        brand: 'lamborghini',
        model: 'veneno',
        price: '$4 million',
        image:
          'https://pictures.topspeed.com/IMG/crop/201303/2013-lamborghini-veneno-33_1600x0w.jpg',
      },
      {
        id: 'thrtthnsnsg',
        brand: 'Koenigsegg',
        model: 'Agera',
        price: '$1.9 million',
        image:
          'https://blog.dupontregistry.com/wp-content/uploads/2017/03/koenigsegg-rs-agera-gryphon-2.jpg',
      },
      {
        id: 'shnnnwyn',
        brand: 'ferrari',
        model: 'veneno',
        price: 'laferrari',
        image:
          'https://static.wikia.nocookie.net/1323a386-cee6-4e30-a26d-00f62c598778',
      }
    ],
    garage: [
      {
        id: 'shnnnwyn',
        brand: 'ferrari',
        model: 'veneno',
        price: 'laferrari',
        image:
          'https://static.wikia.nocookie.net/1323a386-cee6-4e30-a26d-00f62c598778',
      }
    ],
   } 

  render() {
    return (
      <div className="row">
        <CarList title="available" cars={this.state.available} />
        <CarList title="garage" cars={this.state.garage} />
      </div>
    )
  }
}

export default CarContainer;