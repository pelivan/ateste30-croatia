import styled from "styled-components";

export const ContactContainer = styled.div`
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? "#f9f9f9" : "#010606")};
  @media screen and (max-width: 768px) {
    padding: 20px 0;
  }
`;

export const ContactWrapper = styled.div`
  display: grid;
  z-index: 1;
  width: 100%auto;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-items: center;
`;

export const ContactRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};
  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`;

export const ContactH1 = styled.h1`
  margin-top: 50px;
  font-size: 2rem;
  color: #fff;
  margin-bottom: 64px;
  @media screen and (max-width: 480px) {
    text-align: center;
    font-size: 1.8rem;
    margin-top: 0px;
  }
`;

export const ContactH2 = styled.h2`
  margin-top: 10px;
  text-align: center;
  font-size: 1.4rem;
  color: #fff;
  margin-bottom: 18px;
  @media screen and (max-width: 480px) {
    font-size: 1.4rem;
    margin-top: 10px;
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  grid-area: col1;
`;
export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const ItemStyles = styled.div`
  padding: 1rem;
  margin-right: 30px;
  background-color: var(--deep-dark);
  display: flex;
  align-items: center;
  gap: 2rem;
  border-radius: 8px;
  margin-bottom: 2rem;
  .icon {
    color: var(--white);
    background-color: var(--gray-2);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
  }
  svg {
    width: 3.5rem;
  }
`;

export const PStyle = styled.div`
  max-width: 500px;
  margin: 0 auto;
  font-size: 1.5rem;
  line-height: 1.3em;
  @media only screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const ContactSectionStyle = styled.div`
  padding: 10rem 0;
  .contactSection__wrapper {
    display: flex;
    gap: 5rem;
    margin-top: 7rem;
    justify-content: space-between;
    position: relative;
  }
  .contactSection__wrapper::after {
    position: absolute;
    content: "";
    width: 2px;
    height: 50%;
    background-color: var(--gray-1);
    left: 50%;
    top: 30%;
    transform: translate(-50%, -50%);
  }
  .left {
    width: 100%;
    max-width: 500px;
  }
  .right {
    max-width: 500px;
    width: 100%;
    border-radius: 12px;
    /* padding-left: 3rem; */
  }
  @media only screen and (max-width: 768px) {
    .contactSection__wrapper {
      flex-direction: column;
    }
    .contactSection__wrapper::after {
      display: none;
    }
    .left,
    .right {
      max-width: 100%;
    }
    .right {
      padding: 4rem 2rem 2rem 2rem;
    }
  }
`;

export const StyledContactForm = styled.div`
  color: #fff;
  width: 100%;
  .form-group {
    width: 100%;
    color: #fff;
  }
  label {
    font-size: 1.4rem;
    color: #fff;
    @media only screen and (max-width: 768px) {
      font-size: 1.2rem;
    }
  }
  input,
  textarea {
    width: 100%;
    font-size: 1rem;
    padding: 1rem;
    outline: none;
    border: none;
    border-radius: 8px;
    @media only screen and (max-width: 768px) {
      font-size: 1.2rem;
    }
    margin: 0.5rem 0;
  }
  textarea {
    min-height: 180px;
    resize: vertical;
  }
  button[type="submit"] {
    background-color: #fff;
    color: #000;
    font-size: 1rem;
    display: inline-block;
    outline: none;
    border: none;
    padding: 1rem 4rem;
    width: 100%;
    margin-top: 10px;
    border-radius: 8px;
    cursor: pointer;
    &:hover {
      transition: all 0.2s ease-in-out;
      background: #f74040d5;
      color: #fff;
    }
  }
`;
