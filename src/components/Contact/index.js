import React, { useRef } from "react";
import {
  ContactContainer,
  ContactWrapper,
  ContactRow,
  ContactH1,
  FormStyle,
  Column1,
  Column2,
  ItemStyles,
  PStyle,
  BtnWrap,
} from "./ContactElement";
import { Home, Mail, PhoneCall } from "tabler-icons-react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qi3yqu9",
        "template_ryubrlr",
        form.current,
        "vZV6mts00ch6WHt_C"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <ContactContainer id="contact">
        <ContactWrapper>
          <ContactH1>Slobodno nas kontaktirajte</ContactH1>
          <ContactRow>
            <Column1>
              <ItemStyles>
                <div className="icon">
                  <Home size={48} strokeWidth={1.5} color={"#808080"} />
                </div>
                <div className="info">
                  <PStyle>Indije 72 - Banjole, 52100 Pula</PStyle>
                </div>
              </ItemStyles>
              <ItemStyles>
                <div className="icon">
                  <Mail size={48} strokeWidth={1.5} color={"#808080"} />
                </div>
                <div className="info">
                  <PStyle>
                    <a href="mailto:atestshopcroatia@gmail.com">
                      atestshopcroatia@gmail.com
                    </a>
                  </PStyle>
                </div>
              </ItemStyles>
              <ItemStyles>
                <div className="icon">
                  <PhoneCall size={48} strokeWidth={1.5} color={"#808080"} />
                </div>
                <div className="info">
                  <PStyle>
                    <a href="tel:+385 97 676 2048">+385 97 676 2048</a>
                  </PStyle>
                </div>
              </ItemStyles>
            </Column1>
            <Column2>
              <FormStyle>
                {/* <form ref={form} onSubmit={sendEmail}>
                  <div className="form-group">
                    <label htmlFor="name">
                      Vaše ime
                      <input type="text" id="name" name="name" />
                    </label>
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">
                      E-mail
                      <input type="email" id="email" name="email" />
                    </label>
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">
                      Poruka
                      <textarea type="text" id="message" name="message" />
                    </label>
                  </div>
                  <BtnWrap>
                    <button type="submit">Pošalji</button>
                  </BtnWrap>
                </form> */}
                <form ref={form} onSubmit={sendEmail}>
                  <label>Name</label>
                  <input type="text" name="user_name" />
                  <label>Email</label>
                  <input type="email" name="user_email" />
                  <label>Message</label>
                  <textarea name="message" />
                  <input type="submit" value="Send" />
                </form>
              </FormStyle>
            </Column2>
          </ContactRow>
        </ContactWrapper>
      </ContactContainer>
    </>
  );
};

export default Contact;
