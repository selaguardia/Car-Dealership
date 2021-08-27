import Car from '../components/Car';

function CarList ({title, cars}) {
  console.log({cars})
  return (
    <div className="col">
      <h3>{title}</h3>
      {
        cars.map((car) => <Car key={car.id} car={car} />)
      }
    </div>
  )
}
export default CarList;