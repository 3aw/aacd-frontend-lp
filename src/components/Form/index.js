import React, { Component } from "react";
import { connect, useDispatch } from "react-redux";
import Button from "../Button";
import { Container, Box, FormContainer, TitleBar, FormContent, FormText, InputElement } from "./styles";
import * as formActions from "../../store/reducers/actions/form";

export class Form extends Component {
  state = {
    name: "",
    email: "",
    cellphone: "",
    birthdate: "",
    id: "",
    amount: null,
    formIsValid: null,
    active: null,
    participants: [{}, {}]
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
  handleSelect = e => {
    this.setState({ amount: e.target.value });
    for (let i = 0; i < this.state.amount; i++) {
      this.setState({ amount: [i] });
    }
  };

  newSubscriber = e => {
    e.preventDefault();
  };
  render() {
    console.log(this.state.amount);
    const { form } = this.props;
    const { dispatch } = this.props;
    return (
      <Container disabled={form.disabled}>
        <Box>
          <FormContainer onSubmit={this.handleSubmit}>
            <TitleBar onClick={() => dispatch(formActions.toggleAll(form))} />
            <FormContent>
              <FormText>Nome</FormText>
              <InputElement onChange={this.handleChange} type="text" name="name" active={true} />
            </FormContent>
            <FormContent>
              <FormText>E-mail</FormText>
              <InputElement active={true} onChange={this.handleChange} type="text" name="email" />
            </FormContent>
            <FormContent>
              <FormText>Celular</FormText>
              <InputElement active={true} onChange={this.handleChange} type="text" name="cellphone" />
            </FormContent>
            <FormContent>
              <FormText>Data de Nascimento</FormText>
              <InputElement onChange={this.handleChange} type="text" name="birthdate" active={true} />
            </FormContent>
            <FormContent>
              <FormText>RG</FormText>
              <InputElement onChange={this.handleChange} type="text" name="id" active={true} />
            </FormContent>
            <FormContent>
              <FormText>Participantes</FormText>
              <button type="button" onClick={this.newSubscriber}>
                Adicionar participante
              </button>

              {this.state.participants.map((item, index) => (
                <div key={index}>
                  {" "}
                  <FormContent>
                    <FormText>Nome</FormText>
                    <InputElement onChange={this.handleChange} type="text" name="name" active={true} />
                  </FormContent>
                  <FormContent>
                    <FormText>E-mail</FormText>
                    <InputElement active={true} onChange={this.handleChange} type="text" name="email" />
                  </FormContent>
                </div>
              ))}
            </FormContent>

            {this.state.form}
            <FormContent>{this.state.amount == null ? <InputElement active={false} name="name" type="text" /> : ""}</FormContent>
            <FormContent>
              <Button width={"100%"} bThickness={2} height={20} backgroundColor={"#fff"} bRadius={"32px"}>
                Comprar!
              </Button>
            </FormContent>
          </FormContainer>
        </Box>
      </Container>
    );
  }
}

export default connect(state => ({ form: state.form }))(Form);
