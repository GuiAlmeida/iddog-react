import React from "react";
import DogIMG from "./../img/sadDog.png";
import { ButtonLink, ErrorFound, Wrapper } from "../styles";

const NotFound = () => {
  return (
    <main>
      <Wrapper>
        <ErrorFound>
          <img src={DogIMG} alt="notFound" className="notFound__img" />
          <p className="notFound__text">
            Opss, nosso cachorro comeu esta página.
          </p>
          <ButtonLink href="/" className="nes-btn">
            Voltar para home
          </ButtonLink>
        </ErrorFound>
      </Wrapper>
    </main>
  );
};

export default NotFound;
