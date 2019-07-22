import React from "react";

import {
  Container,
  Title,
  SupportersContainer,
  Sponsors,
  ContactSection,
  Contacts
} from "./styles";

const Supporters = () => (
  <Container>
    <Title>conheça os patrocinadores do evento:</Title>
    <SupportersContainer>
      <Sponsors />
    </SupportersContainer>
    <ContactSection />
    <Contacts />
  </Container>
);

export default Supporters;
