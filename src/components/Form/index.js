import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "../Button";
import { Container, Box, FormContainer, TitleBar, FormContent, FormText, InputElement, ParticipantBox, TitleForm, SubscribersContainer, LoadingBox, Text } from "./styles";
import * as formActions from "../../store/reducers/actions/form";
import axios from "axios";
import { ReactComponent as Loading } from "../../images/loading.svg";

export class Form extends Component {
  state = {
    loading: false,
    amount: null,
    formIsValid: null,
    active: null,
    batch: 1,
    event: 1,
    buyer: {
      name: "",
      email: "",
      phone: "",
      birthdate: "",
      rg: ""
    },
    subscribers: []
  };
  handleSubmit = e => {
    e.preventDefault();
    const { dispatch } = this.props;
    this.handleValidation(dispatch);
  };

  handleValidation = dispatch => {
    let { name, email, phone, birthdate, rg } = this.state.buyer;
    this.setState({ formIsValid: false });
    if (name === "") {
      console.log("Nome Vazio");
    } else if (email === "") {
      console.log("E-mail Vazio");
    } else if (phone === "") {
      console.log("Celular Vazio");
    } else if (birthdate === "") {
      console.log("Data de Nascimento Vazio");
    } else if (rg === "") {
      console.log("ID Vazio");
    } else {
      this.setState({ formIsValid: true });
      this.send();
      // dispatch(formActions.formSubmit());
      // console.log(this.state);
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
    this.setState({
      active: true,
      subscribers: [...subscribers, { name: "Samuel", rg: "" }]
    });
  };

  seed = e => {
    this.setState({
      buyer: {
        name: "Samuel Levy",
        email: "samuellevy@nokengo.com",
        phone: "21982785401",
        birthdate: "20/07/1992",
        rg: "23.488.577-0"
      },
      subscribers: [{ name: "Cayque Freitas", rg: "1112223334" }, { name: "Vinicius Machado", rg: "9998885552" }]
    });
    console.log("seed");
  };

  send = async () => {
    console.log("sending");
    this.setState({ loading: true });

    axios({
      method: "post",
      url: "http://localhost:3000/subscribe/new",
      data: {
        batch: 1,
        event: 1,
        buyer: this.state.buyer,
        subscribers: this.state.subscribers
      }
    }).then(response => {
      window.location.href = response.data.url;
    });
  };

  render() {
    const { form } = this.props;
    const { dispatch } = this.props;
    return (
      <Container disabled={form.disabled}>
        {this.state.loading && (
          <LoadingBox>
            <Loading />
            <Text>Redirecionando para pagamento. Aguarde.</Text>
          </LoadingBox>
        )}

        <Box>
          <FormContainer onSubmit={this.handleSubmit}>
            <TitleBar onClick={() => dispatch(formActions.toggleAll(form))} />
            <TitleForm>Dados do comprador</TitleForm>
            <FormContent>
              <button type={"button"} onClick={this.seed}>
                preencher
              </button>
              <FormText>Nome</FormText>
              <InputElement onChange={this.handleChange} type="text" name="name" />
            </FormContent>
            <FormContent>
              <FormText>E-mail</FormText>
              <InputElement onChange={this.handleChange} type="text" name="email" />
            </FormContent>
            <FormContent>
              <FormText>Celular</FormText>
              <InputElement onChange={this.handleChange} type="text" name="phone" />
            </FormContent>
            <FormContent>
              <FormText>Data de Nascimento</FormText>
              <InputElement onChange={this.handleChange} type="text" name="birthdate" />
            </FormContent>
            <FormContent>
              <FormText>RG</FormText>
              <InputElement onChange={this.handleChange} type="text" name="rg" />
            </FormContent>
            <SubscribersContainer active={this.state.active}>
              {this.state.subscribers.map((item, index) => (
                <ParticipantBox key={index}>
                  <TitleForm>Dados do Participante: {index + 1}</TitleForm>
                  <FormContent>
                    <FormText>Nome</FormText>
                    <InputElement onChange={e => this.handleChangeSubscriber(e, index)} type="text" name="name" />
                  </FormContent>
                  <FormContent>
                    <FormText>RG</FormText>
                    <InputElement onChange={e => this.handleChangeSubscriber(e, index)} type="text" name="rg" />
                  </FormContent>
                </ParticipantBox>
              ))}
            </SubscribersContainer>

            <FormContent>
              <Button onClick={this.newSubscriber} width={40} height={15} backgroundColor={"#fff"} bRadius={"8px"} bThickness={2}>
                Adicionar participante
              </Button>
            </FormContent>
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
