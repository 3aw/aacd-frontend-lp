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

  componentWillUnmount() {
    // If this component is unmounted, stop listening
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll(e) {
    let lastScrollTop = 0;
    const currentScrollTop = this.state.prevScrollpos;
    if (!this.state.hidden && currentScrollTop > lastScrollTop) {
      this.setState({ hidden: false });
    } else if (this.state.hidden) {
      this.setState({ hidden: true });
    }
    lastScrollTop = currentScrollTop;
  }

  render() {
    return this.state.hidden ? null : (
      <Container hidden={this.state.hidden}>
        <ImageLogo src={Logo} />
        <Button
          width={435}
          backgroundColor={colors.white}
          bThickness={4}
          bRadius={metrics.borderRadius.round}
        >
          Clique para se inscrever!
        </Button>
      </Container>
    );
  }
}
