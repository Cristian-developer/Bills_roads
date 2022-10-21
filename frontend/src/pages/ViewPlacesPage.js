import React, { useContext, useState, useEffect } from 'react'
import AuthContext from '../context/AuthContext'
import { API_BASE_URL } from '../env'

import { useNavigate } from "react-router-dom"

import ProfilePictureComponent from "../components/ProfilePictureComponent"
import AddPlaceBtn from '../components/AddPlaceBtn'
import ImgCarro from "../img/carro.png"
import ImgProfile from "../img/man.png"
import CardImg from "../img/servicio-de-auto.png"
import Cards from "../components/Cards"

export const ViewPlacesPage = () => {
  const { user, authTokens } = useContext(AuthContext)
  const [cards, setCards] = useState([])

  const navigate = useNavigate()
  const AddPlace = () => {
    let path = `/add_place`
    navigate(path)
  }

  const chooseCardSide = (index) => {
    return index % 2 === 0 ? 'justify-content-start' : 'justify-content-end'
  }

  const getUserName = () => {
    return `${user.first_name} ${user.last_name}`
  }
  const fetchPlaces = async () => {
    const response = await fetch(`${API_BASE_URL}places_api/get/all/`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${authTokens.access}`,
      }
    })
    const data = await response.json()
    console.log(data.data)
    setCards(data.data)
  }

  useEffect(() => {
    fetchPlaces()
  }, [])

  return (
    <div className="container-fluid AppContainer" >
      <div className="row justify-content-between align-items-start">
        <img className="ImgF col-auto" src={ImgCarro} alt="" />
        <ProfilePictureComponent componentClass="col-auto" name={getUserName()} photo={ImgProfile} />
      </div>

      <div className="row justify-content-center align-items-center">

        <div className="w-100"></div>

        <div className="col-8 d-flex justify-content-center align-items-center h-100">
          <div className="row ">

            <div className="col-6 justify-contet-start TitlesContainer mb-4">
              <h2 className="Title3 inline-block">Lugares</h2>
              <AddPlaceBtn handleClick={AddPlace} showBtn={user.is_staff}/>
            </div>


            <div className="w-100"></div>

            {cards.map(({ ciudad, departamento, descripcion, id }, index) => (
              <div className="col-6 mb-5 p-0" key={id}>
                <div className={`row ${chooseCardSide(index)}`}>
                  <div className="col-auto">
                    <Cards imageSource={CardImg} ciudad={ciudad} departamento={departamento} text={descripcion} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
