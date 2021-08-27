import React from 'react';

class Car extends React.Component {
  state = {
    show: true
  }

  handleShow = () => this.setState({ 
    show: !this.state.show
  });

  render() {
    const { brand, model, price, image } = this.props.car;

    return (
      <article>
        <h3>{brand}</h3>
        <small>{model}</small>
        <strong>{price}</strong>

        { this.state.show ? 
          <button onClick={this.handleShow}>
            Show Car
          </button> :
          <>
            <button onClick={this.handleShow}>
              Hide Car
            </button>
            <img
              width="500"
              height="300"
              src={image}
              alt="car" />
          </>
        }
        
      </article>
    )
  }
}


export default Car;