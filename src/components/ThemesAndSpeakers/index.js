import React from "react";
import SpeakerBox from "../../components/SpeakerBox";
import { Container, Title, SpeakerContainer } from "./styles";
import { Wrapper } from "../../global/globalStyle";
import { connect } from "react-redux";

const ThemesAndSpeakers = ({ form, speakers, dispatch }) => (
  <Container>
    <Wrapper>
      <Title />
      <SpeakerContainer>
        {speakers.map(speaker => (
          <SpeakerBox
            key={speaker.id}
            bg={speaker.background}
            image={speaker.image}
            theme={speaker.theme}
            name={speaker.name}
            ocupation={speaker.ocupation}
          />
        ))}
      </SpeakerContainer>
    </Wrapper>
  </Container>
);

export default connect(state => ({
  speakers: state.speakers,
  form: state.form
}))(ThemesAndSpeakers);
