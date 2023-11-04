import './styles/InfoLocation.css'

const InfoLocation = ( {location} ) => {
  return (
    <article className='location'>
        <h2 className='location'>{location?.name}</h2>
        
            <ul className='location__info'>
                <li className='location__item'><span className='location__value'>Type: </span>{location?.type}</li>
                <li className='location__item'><span className='location__value'>Dimension: </span>{location?.dimension}</li>
                <li className='location__item'><span className='location__value'>Population: </span>{location?.residents.length}</li>
                </ul>
        
    </article>
  )
}

export default InfoLocation