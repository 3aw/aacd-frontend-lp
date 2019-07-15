import React from "react";
import Button from "../Button";
import {
  Container,
  Box,
  FormContainer,
  TitleBar,
  FormContent,
  FormText,
  InputElement
} from "./styles";
import { connect } from "react-redux";
import * as formActions from "../../store/reducers/actions/form";

function handleSubmit(e) {
  e.preventDefault();
  return {
    type: "SHOW_CONFIRMATION"
  };
}
function handleChange(e) {
  console.log(e);
  return {
    type: "SET_DATA",
    payload: {
      [e.target.name]: e.target.value
    }
  };
}

const Form = ({ form, dispatch }) => (
  <Container disabled={form.disabled}>
    <Box>
      <FormContainer onSubmit={e => handleSubmit(e)}>
        <TitleBar onClick={() => dispatch(formActions.showForm(form))} />
        <FormContent>
          <FormText>Nome</FormText>
          <InputElement
            onChange={e => dispatch(handleChange(e))}
            type="text"
            name="name"
          />
        </FormContent>
        <FormContent>
          <FormText>E-mail</FormText>
          <InputElement
            onChange={e => handleChange(e)}
            type="text"
            name="email"
          />
        </FormContent>
        <FormContent>
          <FormText>Celular</FormText>
          <InputElement
            onChange={e => handleChange(e)}
            type="text"
            name="cellphone"
          />
        </FormContent>
        <FormContent>
          <FormText>Data de Nascimento</FormText>
          <InputElement
            onChange={e => handleChange(e)}
            type="text"
            name="birthdate"
          />
        </FormContent>
        <FormContent>
          <FormText>RG</FormText>
          <InputElement onChange={e => handleChange(e)} type="text" name="id" />
        </FormContent>
        <FormContent>
          <FormText>Quantidade</FormText>
          <InputElement
            onChange={e => handleChange(e)}
            type="text"
            name="amount"
          />
        </FormContent>
        <FormContent>
          <Button
            width={"100%"}
            bThickness={4}
            backgroundColor={"#fff"}
            bRadius={"none"}
            onClick={() => dispatch(formActions.formSubmit(form))}
          >
            Comprar!
          </Button>
        </FormContent>
      </FormContainer>
    </Box>
    <Box />
  </Container>
);

export default connect(state => ({ form: state.form }))(Form);
