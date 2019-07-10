import React, { Component } from "react";
import SpeakerBox from "../../components/SpeakerBox";
import { Container, Title, SpeakerContainer } from "./styles";
import { colors, metrics } from "../../global/index";
import { Wrapper } from "../../global/globalStyle";
import Speaker from "../../images/Speakers/dr_claudio.png";
import letterI from "../../images/Backgrounds/letter_t.png";
import Button from "../../components/Button";

export default class ThemesAndSpeakers extends Component {
  state = {
    speakers: [
      {
        id: 1,
        background: letterI,
        image: Speaker,
        theme: "Motivação",
        name: "Bernadinho",
        ocupation:
          "Técnico da Seleção Brasileira de voleibol e campeão olímpico"
      },
      {
        id: 2,
        background: letterI,
        image: Speaker,
        theme: "Maestria",
        name: "Bernadinho",
        ocupation:
          "Técnico da Seleção Brasileira de voleibol e campeão olímpico"
      },
      {
        id: 2,
        background: letterI,
        image: Speaker,
        theme: "Maestria",
        name: "Bernadinho",
        ocupation:
          "Técnico da Seleção Brasileira de voleibol e campeão olímpico"
      },
      {
        id: 2,
        background: letterI,
        image: Speaker,
        theme: "Maestria",
        name: "Bernadinho",
        ocupation:
          "Técnico da Seleção Brasileira de voleibol e campeão olímpico"
      },
      {
        id: 2,
        background: letterI,
        image: Speaker,
        theme: "Maestria",
        name: "Bernadinho",
        ocupation:
          "Técnico da Seleção Brasileira de voleibol e campeão olímpico"
      },
      {
        id: 2,
        background: letterI,
        image: Speaker,
        theme: "Maestria",
        name: "Bernadinho",
        ocupation:
          "Técnico da Seleção Brasileira de voleibol e campeão olímpico"
      }
    ]
  };
  render() {
    return (
      <Container>
        <Wrapper>
          <Title />
          <SpeakerContainer>
            {this.state.speakers.map(speaker => (
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
          >
            Clique para se inscrever!
          </Button>
        </Wrapper>
      </Container>
    );
  }
}
