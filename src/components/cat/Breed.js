import React, { useEffect, useContext } from 'react'
import BreedContext from '../../context/breed/breedContext'

const Breed = ({ match }) => {
  const breedContext = useContext(BreedContext)
  const { breed, getSingleBreed } = breedContext
  useEffect(() => {
    getSingleBreed(match.params.breed)
    //eslint-disable-next-line
  }, [])
  return (
    <div className="row">
      <div className="col s12">
        <div className="card" style={{ height: '400px' }}>
          <div className="card-content">
            <span className="card-title blue-text">
              <strong>{breed[0].name}</strong>
            </span>
            <div className="row">
              <ul className="stats col s6">
                <li>Weight(kg) : {breed[0].weight.metric}</li>
                <li>Life Span : {breed[0].life_span}</li>
                <li>Temperament : {breed[0].temperament}</li>
                <li>Adaptability : {breed[0].adaptability}</li>
                <li>Affection Level : {breed[0].affection_level}</li>
                <li>Child Friendly : {breed[0].child_friendly}</li>
                <li>Dog Friendly : {breed[0].dog_friendly}</li>
                <li>Energy Level : {breed[0].energy_level}</li>
                <li>Experimental : {breed[0].experimental}</li>
                <li>Grooming : {breed[0].grooming}</li>
              </ul>
              <ul className="stats col s6">
                <li>Hairless : {breed[0].hairless}</li>
                <li>Health Issues : {breed[0].health_issues}</li>
                <li>Hypoallergenic : {breed[0].hypoallergenic}</li>
                <li>Indoor : {breed[0].indoor}</li>
                <li>Intelligence : {breed[0].intelligence}</li>
                <li>Rarity : {breed[0].rare}</li>
                <li>Shedding Level : {breed[0].shedding_level}</li>
                <li>Short Legs : {breed[0].short_legs}</li>
                <li>Social Needs : {breed[0].social_needs}</li>
                <li>Stranger Friendly : {breed[0].stranger_friendly}</li>
                <li>Vocalisation : {breed[0].vocalisation}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Breed
