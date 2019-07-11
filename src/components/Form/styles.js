import styled from "styled-components";
import formbg from "../../images/backgroundForm.png";
import girlbg from "../../images/formgirl.png";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const Box = styled.div`
  width: 50%;
  background: url(${formbg});
  background-repeat: no-repeat;
  background-position: top left;
  :last-child {
    background: url(${girlbg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 50%;
  }
`;

export const FormContainer = styled.div`
  height: 100vh;
  width: 100%;
  padding: 35px 70px 60px 170px;
`;
