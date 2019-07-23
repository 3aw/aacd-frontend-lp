import React, { Component } from "react";
import { connect, useDispatch } from "react-redux";
import Button from "../Button";
import { Container, Box, FormContainer, TitleBar, FormContent, FormText, InputElement, ParticipantBox, TitleForm } from "./styles";
import * as formActions from "../../store/reducers/actions/form";

export class Form extends Component {
  state = {
    amount: null,
    formIsValid: null,
    active: null,

    buyer: {
      name: "",
      email: "",
      cellphone: "",
      birthdate: "",
      id: ""
    },
    subscribers: [{ name: "", email: "" }]
  };
  handleSubmit = e => {
    const { dispatch } = this.props;
    e.preventDefault();
    console.log(this.state.buyer);
    // this.handleValidation(dispatch);
  };

  handleValidation = dispatch => {
    let { name, email, cellphone, birthdate, id } = this.state.buyer;
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
    } else {
      this.setState({ formIsValid: true });
      dispatch(formActions.formSubmit());
    }
  };

  handleQtd = e => {
    e.preventDefault();
  };

  handleChange = e => {
    const { buyer } = this.state;
    buyer[e.target.name] = e.target.value;
    this.setState({ buyer: buyer });
    this.setState({ formIsValid: false });
    // console.log(`Estado formIsValid: ${this.state.formIsValid}`);
  };

  handleChangeSubscriber = (e, index) => {
    const subscribers = this.state.subscribers;
    subscribers[index][e.target.name] = e.target.value;

    this.setState({ subscribers: subscribers });
  };

  handleSelect = e => {
    this.setState({ amount: e.target.value });
    for (let i = 0; i < this.state.amount; i++) {
      this.setState({ amount: [i] });
    }
  };

  newSubscriber = e => {
    e.preventDefault();
    const subscribers = this.state.subscribers;
    this.setState({ subscribers: [...subscribers, { name: "Samuel", email: "teste@teste" }] });
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
            <TitleForm>Dados do comprador</TitleForm>
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
              <TitleForm>Informação dos participantes</TitleForm>
              <Button type="button" onClick={this.newSubscriber} bRadius={30}>
                Adicionar participante
              </Button>

              {this.state.subscribers.map((item, index) => (
                <ParticipantBox key={index}>
                  <FormContent>
                    <FormText>Nome</FormText>
                    <InputElement onChange={e => this.handleChangeSubscriber(e, index)} type="text" name="name" active={true} />
                  </FormContent>
                  <FormContent>
                    <FormText>E-mail</FormText>
                    <InputElement active={true} onChange={e => this.handleChangeSubscriber(e, index)} type="text" name="email" />
                  </FormContent>
                </ParticipantBox>
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
