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
    amount: null
  };
  handleSubmit = e => {
    e.preventDefault();
    return {
      type: "SHOW_CONFIRMATION"
    };
  };
  //   validation = () => {
  //     const { dispatch } = this.props;
  //     let { email } = this.state.email;
  //     if ((this.state.name = "")) {
  //       alert("preencha o nome");
  //     } else if ((email = "")) {
  //       alert("preencha o e-mail");
  //     }
  //     //  else {
  //     //   dispatch(formActions.formSubmit());
  //     // }
  //   };

  handleQtd = e => {
    e.preventDefault();
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    const { form } = this.props;
    const { dispatch } = this.props;
    return (
      <Container disabled={form.disabled}>
        <Box>
          <FormContainer onSubmit={this.handleSubmit}>
            <TitleBar onClick={() => dispatch(formActions.showForm(form))} />
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
                bThickness={4}
                backgroundColor={"#fff"}
                bRadius={"none"}
                onClick={() => dispatch(formActions.formSubmit())}
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
