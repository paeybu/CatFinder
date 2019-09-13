import React, { useContext, useEffect, useState } from 'react'
import BreedContext from '../../context/breed/breedContext'
import M from 'materialize-css'

const SearchImage = () => {
  const [options, setOptions] = useState({
    breed: '',
    category: ''
  })
  const breedContext = useContext(BreedContext)
  const { images, getImages } = breedContext
  useEffect(() => {
    // getImages()
    var elems = document.querySelectorAll('select')
    M.FormSelect.init(elems, {})
    getImages('med', 6, options.breed, options.category)
  }, [options])

  const onChange = e => {
    setOptions({
      ...options,
      [e.target.name]: e.target.value
    })

    // getImages('med', '6', options.breed, options.category)
  }

  return (
    <>
      <div className="row">
        <div className="col s12">
          <h1>Search Image</h1>
          <form>
            <div className="input-field">
              <select name="breed" onChange={onChange}>
                <option value="">--Select a breed--</option>
                <option value="abys">Abyssinian</option>
                <option value="aege">Aegean</option>
                <option value="abob">American Bobtail</option>
                <option value="acur">American Curl</option>
                <option value="asho">American Shorthair</option>
                <option value="awir">American Wirehair</option>
                <option value="amau">Arabian Mau</option>
                <option value="amis">Australian Mist</option>
                <option value="bali">Balinese</option>
                <option value="bamb">Bambino</option>
                <option value="beng">Bengal</option>
                <option value="birm">Birman</option>
                <option value="bomb">Bombay</option>
                <option value="bslo">British Longhair</option>
                <option value="bsho">British Shorthair</option>
                <option value="bure">Burmese</option>
                <option value="buri">Burmilla</option>
                <option value="cspa">California Spangled</option>
                <option value="ctif">Chantilly-Tiffany</option>
                <option value="char">Chartreux</option>
                <option value="chau">Chausie</option>
                <option value="chee">Cheetoh</option>
                <option value="csho">Colorpoint Shorthair</option>
                <option value="crex">Cornish Rex</option>
                <option value="cymr">Cymric</option>
                <option value="cypr">Cyprus</option>
                <option value="drex">Devon Rex</option>
                <option value="dons">Donskoy</option>
                <option value="lihu">Dragon Li</option>
                <option value="emau">Egyptian Mau</option>
                <option value="ebur">European Burmese</option>
                <option value="esho">Exotic Shorthair</option>
                <option value="hbro">Havana Brown</option>
                <option value="hima">Himalayan</option>
                <option value="jbob">Japanese Bobtail</option>
                <option value="java">Javanese</option>
                <option value="khao">Khao Manee</option>
                <option value="kora">Korat</option>
                <option value="kuri">Kurilian</option>
                <option value="lape">LaPerm</option>
                <option value="mcoo">Maine Coon</option>
                <option value="mala">Malayan</option>
                <option value="manx">Manx</option>
                <option value="munc">Munchkin</option>
                <option value="nebe">Nebelung</option>
                <option value="norw">Norwegian Forest Cat</option>
                <option value="ocic">Ocicat</option>
                <option value="orie">Oriental</option>
                <option value="pers">Persian</option>
                <option value="pixi">Pixie-bob</option>
                <option value="raga">Ragamuffin</option>
                <option value="ragd">Ragdoll</option>
                <option value="rblu">Russian Blue</option>
                <option value="sava">Savannah</option>
                <option value="sfol">Scottish Fold</option>
                <option value="srex">Selkirk Rex</option>
                <option value="siam">Siamese</option>
                <option value="sibe">Siberian</option>
                <option value="sing">Singapura</option>
                <option value="snow">Snowshoe</option>
                <option value="soma">Somali</option>
                <option value="sphy">Sphynx</option>
                <option value="tonk">Tonkinese</option>
                <option value="toyg">Toyger</option>
                <option value="tang">Turkish Angora</option>
                <option value="tvan">Turkish Van</option>
                <option value="ycho">York Chocolate</option>
              </select>
              <label htmlFor="breed">Breed</label>
            </div>
            <label htmlFor="category">Category:</label>
            <select name="category" onChange={onChange}>
              <option value="">--Select a category--</option>
              <option value="5">Boxes</option>
              <option value="15">Clothes</option>
              <option value="1">Hats</option>
              <option value="14">Sinks</option>
              <option value="2">Space</option>
              <option value="4">Sunglasses</option>
              <option value="7">Ties</option>
            </select>
            <label htmlFor="category">Category</label>
          </form>
        </div>
      </div>
      <div className="row">
        {images.map(img => (
          <div
            key={img.id}
            className="col s12 m6 l4"
            style={{
              background: `url('${img.url}')`,
              minHeight: '300px',
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
              backgroundRepeat: 'no-repeat'
            }}
          ></div>
        ))}
      </div>
    </>
  )
}

export default SearchImage
