import React, { useReducer } from 'react'
import axios from 'axios'
import BreedContext from './breedContext'
import breedReducer from './breedReducer'
import { GET_ALL_BREEDS, GET_SINGLE_BREED, GET_IMAGES } from '../types'

const BreedState = props => {
  const initialState = {
    breeds: [],
    breed: [
      {
        adaptability: '',
        affection_level: '',
        alt_names: '',
        cfa_url: '',
        child_friendly: '',
        country_code: '',
        country_codes: '',
        description: '',
        dog_friendly: '',
        energy_level: '',
        experimental: '',
        grooming: '',
        hairless: '',
        health_issues: '',
        hypoallergenic: '',
        id: '',
        indoor: '',
        intelligence: '',
        lap: '',
        life_span: '',
        name: '',
        natural: '',
        origin: '',
        rare: '',
        rex: '',
        shedding_level: '',
        short_legs: '',
        social_needs: '',
        stranger_friendly: '',
        suppressed_tail: '',
        temperament: '',
        vcahospitals_url: '',
        vetstreet_url: '',
        vocalisation: '',
        weight: '',
        wikipedia_url: ''
      }
    ],
    images: []
  }

  const [state, dispatch] = useReducer(breedReducer, initialState)

  // Actions
  // Get All Breeds
  const getAllBreeds = async () => {
    const config = {
      headers: {
        'x-api-key': process.env.REACT_APP_API_KEY
      }
    }
    try {
      const res = await axios.get('/breeds', config)
      dispatch({
        type: GET_ALL_BREEDS,
        payload: res.data
      })
    } catch (err) {}
  }

  // Get Breed by name
  const getSingleBreed = async breed => {
    const config = {
      headers: {
        'x-api-key': process.env.REACT_APP_API_KEY
      }
    }
    try {
      const res = await axios.get(`/breeds/search?q=${breed}`, config)
      dispatch({
        type: GET_SINGLE_BREED,
        payload: res.data
      })
    } catch (err) {}
  }

  // Get Images
  const getImages = async (
    size = 'med',
    limit = '6',
    breed = '',
    category = ''
  ) => {
    const config = {
      headers: {
        'x-api-key': process.env.REACT_APP_API_KEY
      }
    }
    const res = await axios.get(
      `/images/search?size=${size}&limit=${limit}&breed_id=${breed}&category_ids=${category}&order=RANDOM`,
      config
    )
    console.log(`/images/search?size=${size}&limit=${limit}&breed_id=${breed}`)
    console.log(res.data)
    dispatch({
      type: GET_IMAGES,
      payload: res.data
    })
  }

  return (
    <BreedContext.Provider
      value={{
        breeds: state.breeds,
        breed: state.breed,
        images: state.images,
        getAllBreeds,
        getSingleBreed,
        getImages
      }}
    >
      {props.children}
    </BreedContext.Provider>
  )
}

export default BreedState
