import React from 'react'
import { Link } from 'react-router-dom'

const BreedItem = ({ breed }) => {
  return (
    <div className="col s6">
      <div className="card" style={{ height: '400px' }}>
        <div className="card-content">
          <span className="card-title blue-text">
            <strong>
              <Link to={`/breed/${breed.id}`}>{breed.name}</Link>
            </strong>
          </span>
          <span className="description">{breed.description}</span>
        </div>
      </div>
    </div>
  )
}

export default BreedItem
