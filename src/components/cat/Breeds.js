import React, { useContext, useEffect } from 'react'
import BreedItem from './BreedItem'
import BreedContext from '../../context/breed/breedContext'

const Breeds = () => {
  const breedContext = useContext(BreedContext)
  const { breeds, getAllBreeds } = breedContext

  useEffect(() => {
    getAllBreeds()
    // eslint-disable-next-line
  }, [])
  return (
    <div className="row">
      {breeds.map(breed => (
        <BreedItem key={breed.id} breed={breed} />
      ))}
    </div>
  )
}

export default Breeds
