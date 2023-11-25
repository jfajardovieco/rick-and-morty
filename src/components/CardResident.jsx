import { useEffect } from "react"
import useFetch from "../hook/useFetch"
import './styles/CardResident.css'


const CardResident = ({ url }) => {
    const [ resident, getResident ]= useFetch(url)

    useEffect(() => {
        getResident()
    }, [])
    console.log(resident)
  return (
    
    <article className="resident">
        <header className="resident__header">
            <img  className="resident__image" src={resident?.image} alt="" />
            <div className="resident__status">
                <div className={`resident__status-circle ${resident?.status}`}></div>
                <span className="resident__status-vlue">{resident?.status}</span>
            </div>
        </header>
        <article className="resident__body">
            <h3 className="resident__name">{resident?.name}</h3>
            <hr />
            <ul className="resident__stats">
                
                    <li className="resident__stat"><span className="resident__stat__label">Specie: </span>
                    
                    <span className="resident__stat__label">{resident?.species}</span></li>
                    <li className="resident__stat">
                        <span className="resident__stat__Value">Origin: </span>
                        <span className="resident__stat__Value">{resident?.origin.name}</span></li>
                    <li>
                        <span>Episodes where appear: </span>
                        <span>{resident?.episode.length}</span></li>
                
            </ul>
        </article>
    </article>
  )
}

export default CardResident