import React from "react";
import SpeakerBox from "../../components/SpeakerBox";
import { Container, Title, SpeakerContainer } from "./styles";
import { colors, metrics } from "../../global/index";
import { Wrapper } from "../../global/globalStyle";
import { connect } from "react-redux";
import Button from "../../components/Button";
import * as formActions from "../../store/reducers/actions/form";

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
      <Button
        width={460}
        backgroundColor={colors.white}
        bThickness={4}
        bRadius={metrics.borderRadius.round}
        onClick={() => dispatch(formActions.showForm(form))}
      >
        Clique para se inscrever!
      </Button>
    </Wrapper>
  </Container>
);

export default connect(state => ({
  speakers: state.speakers,
  form: state.form
}))(ThemesAndSpeakers);
