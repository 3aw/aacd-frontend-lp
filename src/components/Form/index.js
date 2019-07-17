import React, { Component } from "react";
import { connect, useDispatch } from "react-redux";
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
import * as formActions from "../../store/reducers/actions/form";

export class Form extends Component {
  state = {
    name: "",
    email: "",
    cellphone: "",
    birthdate: "",
    id: "",
    amount: null,
    formIsValid: null
  };
  handleSubmit = e => {
    const { dispatch } = this.props;
    e.preventDefault();
    this.handleValidation(dispatch);
  };
  handleValidation = dispatch => {
    let { name, email, cellphone, birthdate, id, amount } = this.state;
    this.setState({ formIsValid: false });
    if (name === "") {
      console.log("Nome Vazio");
    } else if (email === "") {
      console.log("E-mail Vazio");
    } else if (cellphone === "") {
      console.log("Celular Vazio");
    } else if (birthdate === "") {
      console.log("Data de Nascimento Vazio");
    } else if (id === "") {
      console.log("ID Vazio");
    } else if (amount === null) {
      console.log("Qtd Vazio");
    } else {
      this.setState({ formIsValid: true });
      dispatch(formActions.formSubmit());
    }
  };
  handleQtd = e => {
    e.preventDefault();
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    this.setState({ formIsValid: false });
    console.log(`Estado formIsValid: ${this.state.formIsValid}`);
  };
  render() {
    const { form } = this.props;
    const { dispatch } = this.props;
    return (
      <Container disabled={form.disabled}>
        <Box>
          <FormContainer onSubmit={this.handleSubmit}>
            <TitleBar onClick={() => dispatch(formActions.toggleAll(form))} />
            <FormContent>
              <FormText>Nome</FormText>
              <InputElement
                onChange={this.handleChange}
                type="text"
                name="name"
              />
            </FormContent>
            <FormContent>
              <FormText>E-mail</FormText>
              <InputElement
                onChange={this.handleChange}
                type="text"
                name="email"
              />
            </FormContent>
            <FormContent>
              <FormText>Celular</FormText>
              <InputElement
                onChange={this.handleChange}
                type="text"
                name="cellphone"
              />
            </FormContent>
            <FormContent>
              <FormText>Data de Nascimento</FormText>
              <InputElement
                onChange={this.handleChange}
                type="text"
                name="birthdate"
              />
            </FormContent>
            <FormContent>
              <FormText>RG</FormText>
              <InputElement
                onChange={this.handleChange}
                type="text"
                name="id"
              />
            </FormContent>
            <FormContent>
              <FormText>Quantidade</FormText>
              <InputElement
                onKeyPress={this.handleQtd}
                onChange={this.handleChange}
                type="number"
                name="amount"
                min="1"
                max="10"
              />
            </FormContent>
            <FormContent>
              <Button
                width={"100%"}
                bThickness={2}
                backgroundColor={"#fff"}
                bRadius={"32px"}
              >
                Comprar!
              </Button>
            </FormContent>
          </FormContainer>
        </Box>
        <Box />
      </Container>
    );
  }
}

export default connect(state => ({ form: state.form }))(Form);
