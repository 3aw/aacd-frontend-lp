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
  InputElement,
  ParticipantBox,
  TitleForm,
  SubscribersContainer
} from "./styles";
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
    subscribers: []
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
    const active = this.state.active;
    this.setState({
      active: true,
      subscribers: [...subscribers, { name: "Samuel", email: "teste@teste" }]
    });
  };

  render() {
    console.log(this.state.subscribers);
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
              <Button
                onClick={this.newSubscriber}
                width={40}
                height={15}
                backgroundColor={"#fff"}
                bRadius={"8px"}
                bThickness={2}
                center={true}
              >
                Adicionar participante
              </Button>
            </FormContent>
            <SubscribersContainer active={this.state.active}>
              {this.state.subscribers.map((item, index) => (
                <>
                  <TitleForm>Dados do Participante: 0{index + 1}</TitleForm>
                  <ParticipantBox key={index}>
                    <FormContent>
                      <FormText>Nome</FormText>
                      <InputElement
                        onChange={e => this.handleChangeSubscriber(e, index)}
                        type="text"
                        name="name"
                      />
                    </FormContent>
                    <FormContent>
                      <FormText>E-mail</FormText>
                      <InputElement
                        onChange={e => this.handleChangeSubscriber(e, index)}
                        type="text"
                        name="email"
                      />
                    </FormContent>
                  </ParticipantBox>
                </>
              ))}
            </SubscribersContainer>

            {this.state.form}
            <FormContent>
              <Button
                width={"100%"}
                bThickness={2}
                height={20}
                backgroundColor={"#fff"}
                bRadius={"32px"}
              >
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
