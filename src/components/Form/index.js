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

const Form = ({ form, dispatch }) => (
  <Container disabled={form.disabled}>
    <Box>
      <FormContainer>
        <TitleBar />
        <FormContent>
          <FormText>Nome</FormText>
          <InputElement type="text" />
        </FormContent>
        <FormContent>
          <FormText>E-mail</FormText>
          <InputElement type="text" />
        </FormContent>
        <FormContent>
          <FormText>Celular</FormText>
          <InputElement type="text" />
        </FormContent>
        <FormContent>
          <FormText>Data de Nascimento</FormText>
          <InputElement type="text" />
        </FormContent>
        <FormContent>
          <FormText>RG</FormText>
          <InputElement type="text" />
        </FormContent>
        <FormContent>
          <FormText>Quantidade</FormText>
          <InputElement type="text" />
        </FormContent>
        <FormContent>
          <Button
            width={"100%"}
            bThickness={4}
            backgroundColor={"#fff"}
            bRadius={"none"}
          >
            Comprar!
          </Button>
        </FormContent>
      </FormContainer>
    </Box>
    <Box />
  </Container>
);

export default connect(state => ({ form: state }))(Form);
