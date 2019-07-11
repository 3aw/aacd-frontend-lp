import React from "react";

import {
  Container,
  Title,
  SupportersContainer,
  SponsorsText,
  Sponsors,
  ContactSection,
  Contacts
} from "./styles";

const Supporters = () => (
  <Container>
    <Title>conheça os patrocinadores do evento:</Title>
    <SupportersContainer>
      <SponsorsText />
      <Sponsors />
    </SupportersContainer>
    <ContactSection />
    <Contacts />
  </Container>
);

export default Supporters;
