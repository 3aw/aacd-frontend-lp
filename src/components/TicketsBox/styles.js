import styled from "styled-components";
import React from "react";
import { colors, metrics } from "../../global/index";

export const Container = styled.div`
  width: 226px;
  height: 287px;
  border-radius: ${metrics.borderRadius.square};
  box-shadow: 0 0 7px 0 rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
  background: ${colors.white};
  margin-right: 20px;
  padding: 20px;
`;

export const TicketLot = styled.div`
  font-size: ${metrics.fonts.xxlarge};
`;

export const LotType = styled.h3`
  font-family: "Oswald", sans-serif;
  font-size: ${metrics.fonts.xxlarge};
  color: ${colors.lightred};
  font-weight: 700;
  letter-spacing: 6.4px;
  text-transform: uppercase;
`;

export const TicketTotal = styled.p`
  font-size: ${metrics.fonts.medium};
  color: ${colors.lightred};
  font-family: "Asap", sans-serif;
  letter-spacing: 1.6px;
  font-weight: 400;
  text-align: center;
  text-transform: uppercase;
`;

export const PriceBox = styled.div`
  position: relative;
  width: auto;
  height: 120px;
`;

export const PriceCurrency = styled.p`
  font-size: 19px;
  letter-spacing: 2px;
  color: ${colors.green};
  font-weight: bold;
  font-family: "Asap", sans-serif;
  position: relative;
`;

export const PriceValue = styled(PriceCurrency)`
  font-size: 83px;
`;

export const Cents = styled(PriceCurrency)`
  padding-top: 20px;
`;

export const Price = styled.div`
  display: flex;
`;

export const PriceTotal = ({ children }) => {
  const price = children.split(",");
  return (
    <>
      <PriceValue>{price[0]}</PriceValue>
      <Cents>,{price[1]}</Cents>
    </>
  );
};
