const Car = ({ car }) => {
  const { brand, model, price, image } = car;

  return (
    <article>
      <h3>{brand}</h3>
      <small>{model}</small>
      <strong>{price}</strong>
      <img
        width="500"
        height="300"
        src={image}
        alt="car" />
    </article>
  )
}

export default Car;