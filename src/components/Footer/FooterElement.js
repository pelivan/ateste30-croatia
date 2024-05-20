import styled from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #000;
  color: #fff;
  height: 60px;
  z-index: 1;
  width: 100%;
  padding-bottom: 80px;
  @media screen and (max-width: 480px) {
    padding-top: 20px;
  }
`;
export const FooterRow = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: row;
`;
