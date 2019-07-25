import React, { Component } from "react";
import { Container, ImageLogo, WrapMobile } from "./styles";
import Button from "../Button";
import Logo from "../../images/logosmall.png";
import { colors, metrics } from "../../global/index";
import { connect } from "react-redux";
import * as formActions from "../../store/reducers/actions/form";

class Menu extends Component {
  state = {
    hidden: true
  };
  componentWillMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  // form = useSelector(state => state.form);
  handleScroll = e => {
    if (navigator.userAgent.indexOf("Chrome") >= 0) {
      if (e.path[1].scrollY > 200) {
        this.setState({ hidden: false });
      } else {
        this.setState({ hidden: true });
      }
    } else {
      if (e.pageY > 200) {
        this.setState({ hidden: false });
      } else {
        this.setState({ hidden: true });
      }
    }
  };
  detectDevice = (form, dispatch) => {
    if (window.screen.width <= 760) {
      return (
        <Container hidden={this.state.hidden}>
          <ImageLogo src={Logo} />
          <Button
            disabled={false}
            width={30}
            backgroundColor={colors.white}
            bThickness={2}
            bRadius={metrics.borderRadius.round}
            onClick={() => dispatch(formActions.showForm(form))}
            height={10}
          >
            Inscreva-se!
          </Button>
        </Container>
      );
    } else if (window.screen.width >= 1024) {
      return (
        <Container hidden={this.state.hidden}>
          <ImageLogo src={Logo} />
          <WrapMobile>
            <Button
              disabled={false}
              width={30}
              backgroundColor={colors.white}
              bThickness={2}
              bRadius={metrics.borderRadius.round}
              onClick={() => dispatch(formActions.showForm(form))}
              height={20}
            >
              Clique para se inscrever!
            </Button>
          </WrapMobile>
        </Container>
      );
    }
  };
  render() {
    const { form } = this.props;
    const { dispatch } = this.props;
    return this.detectDevice(form, dispatch);
  }
}

export default connect(state => ({ form: state.form }))(Menu);
