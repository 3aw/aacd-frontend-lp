import React from "react";

import {
  Container,
  Title,
  SupportersContainer,
  SponsorsText,
  Sponsors,
  Contact
} from "./styles";

const Supporters = () => (
  <Container>
    <Title>conheça os patrocinadores do evento:</Title>
    <SupportersContainer>
      <SponsorsText />
      <Sponsors />
    </SupportersContainer>
    <Contact />
  </Container>
);

export default Supporters;
