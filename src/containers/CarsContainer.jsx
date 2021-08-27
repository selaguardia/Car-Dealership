import React from 'react';
import CarList from '../components/CarList';

class CarContainer extends React.Component {

  state = {
    available: [
      {
        id: 'gfhsfnfgsf',
        brand: 'Lamborghini',
        model: 'Veneno',
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
        brand: 'Ferrari',
        model: 'Veneno',
        price: '$2.1 million',
        image:
          'https://static.wikia.nocookie.net/1323a386-cee6-4e30-a26d-00f62c598778',
      }
    ],
    garage: []
  }
  
  addToGarage = (id) => {
    this.setState((prevState) => {
      const foundCar = prevState.available.find(car => car.id === id);
      console.log({foundCar});
      return {
        available: prevState.available.filter(car => car.id !== id),
        garage: [...prevState.garage, foundCar]
      }
    })
  }

  removeFromGarage = (id) => {
    this.setState((prevState) => {
      const foundCar = prevState.garage.find(car => car.id === id);
      console.log({foundCar});
      return {
        garage: prevState.garage.filter(car => car.id !== id),
        available: [...prevState.available, foundCar]
      }
    })
  }

  render() {
    return (
      <div className="row">
        <CarList 
          title="Available"
          addToGarage={this.addToGarage}
          cars={this.state.available} />
        
        <CarList 
          title="Garage" 
          cars={this.state.garage}
          removeFromGarage={this.removeFromGarage} />
      </div>
    )
  }
}

export default CarContainer;