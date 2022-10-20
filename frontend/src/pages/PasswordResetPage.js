import React from 'react'
import Form from 'react-bootstrap/Form'
import InputComponent from "../components/InputComponent"
import ButtonComponent from "../components/ButtonComponent"
import ImgCarro from "../img/carro.png"

export const PasswordResetPage = () => {
  return (
    <div class="container-fluid AppContainer pb-5" >
      <div class="row justify-content-between align-items-start">
        <img class="ImgF" src={ImgCarro} alt=""/>
        <h1 class="TitleApp pt-2">bills road</h1>
      </div>

      <div class="row justify-content-center align-items-center">
        <div class="col-xl-4 col-md-8 col-10 p-0 FormContainer">
          <div class="TitleContainer">
            <h2 class="Title text-center TitleCoco">Cambiar contraseña</h2>
          </div>
          <div class="row text-center justify-content-center m-5">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <InputComponent type="password" name="password" placeholder="Nueva contraseña" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <InputComponent type="password" name="password2" placeholder="Repetir contraseña" />
              </Form.Group>
              <ButtonComponent type="button" text="CAMBIAR" />
            </Form>
          </div>
        </div>
      </div>
    </div>
  )
}
