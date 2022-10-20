import React from 'react'
import { useNavigate } from "react-router-dom"
import Form from 'react-bootstrap/Form'
import InputComponent from "../components/InputComponent"
import ButtonComponent from "../components/ButtonComponent"
import ImgCarro from "../img/carro.png"

export const PasswordRecoveryPage = () => {
  let navigate = useNavigate()
  const Back = () => {
    let path = `/login`
    navigate(path)
  }

  return (
    <div class="container-fluid AppContainer pb-5" >
      <div class="row justify-content-between align-items-start">
        <img class="ImgF" src={ImgCarro} alt="" />
        <h1 class="TitleApp pt-2">bills road</h1>
      </div>

      <div class="row justify-content-center align-items-center">
        <div class="col-xl-4 col-md-8 col-10 p-0 FormContainer">
          <div class="TitleContainer">
            <h2 class="Title text-center TitleCoco">Recuperar contraseña</h2>
          </div>
          <div class="row text-center justify-content-center m-5">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <InputComponent type="email" name="email" placeholder="Escribe aqui tu correo" />
              </Form.Group>
              <ButtonComponent type="button" onClick={Back} text="ATRÁS" />
              <ButtonComponent type="submit" text="RECUPERAR" />
            </Form>
          </div>
        </div>
      </div>
    </div>
  )
}
