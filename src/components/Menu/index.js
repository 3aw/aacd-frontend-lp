import React, { Component } from "react";
import { MenuBar, Container, ImageLogo } from "./styles";
import Button from "../Button";
import Logo from "../../images/logosmall.png";
import { colors, metrics } from "../../global/index";

export default class Menu extends Component {
  state = {
    hidden: true,
    prevScrollpos: window.pageYOffset
  };

  constructor(props) {
    super(props);

    // Bind the function to this component, so it has access to this.state
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentWillMount() {
    // When this component mounts, begin listening for scroll changes
    window.addEventListener("scroll", this.handleScroll);
  }

  handleScroll(e) {
    if (e.pageY > 200) {
      this.setState({ hidden: false });
    } else {
      this.setState({ hidden: true });
    }
  }

  render() {
    return (
      <Container hidden={this.state.hidden}>
        <ImageLogo src={Logo} />
        <Button width={435} backgroundColor={colors.white} bThickness={4} bRadius={metrics.borderRadius.round}>
          Clique para se inscrever!
        </Button>
      </Container>
    );
  }
}
