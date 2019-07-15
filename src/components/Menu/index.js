import React, { Component } from "react";
import { Container, ImageLogo } from "./styles";
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
  render() {
    const { form } = this.props;
    const { dispatch } = this.props;
    return (
      <Container hidden={this.state.hidden}>
        <ImageLogo src={Logo} />
        <Button
          disabled={false}
          width={435}
          backgroundColor={colors.white}
          bThickness={4}
          bRadius={metrics.borderRadius.round}
          onClick={() => dispatch(formActions.showForm(form))}
        >
          Clique para se inscrever!
        </Button>
      </Container>
    );
  }
}

export default connect(state => ({ form: state.form }))(Menu);
