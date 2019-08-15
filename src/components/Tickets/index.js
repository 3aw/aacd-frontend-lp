import React, { useState, useEffect } from "react";
import { Wrapper } from "../../global/globalStyle";
import { Container, Title, TicketsContainer } from "./styles";
import TicketsBox from "../../components/TicketsBox";
import { connect } from "react-redux";
import axios from "axios";

const Tickets = ({ tickets, dispatch }) => {
  const [lotes, setLotes] = useState([]);
  const [lote, setLote] = useState({ value: 0 });

  async function getData() {
    const response = await axios.get("http://impactar.3aw.com.br/batches/list").catch(err => err.response);
    setLotes(response.data.lotes);
    setLote(response.data.lote);
  }
  useEffect(() => {
    getData();
  }, []);

  return (
    <Container>
      <Wrapper>
        <Title />
        <TicketsContainer>{lote ? <TicketsBox lot={lote.name} currency={"R$"} price={lote.value.toFixed(2).replace(".", ",")} value={"Comprar!"} /> : <p>Ingressos Esgotados!</p>}</TicketsContainer>
      </Wrapper>
    </Container>
  );
};

export default connect(state => ({ tickets: state.tickets }))(Tickets);
