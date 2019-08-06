import styled from "styled-components";

const colors = {
  black: "#000000"
};

export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: black;
  font-weight: normal;
  text-transform: uppercase;
  letter-spacing: 5px;
`;

export const Wrapper = styled.div`
  justify-content: center;
  align-items: center;
  min-height: 100%;
  height: 100vh;
  display: flex;
  flex-flow: column nowrap;
`;

export const Strong = styled.strong`
  font-weight: bold;
`;

export const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  text-align: center;
  border: none;
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
  width: 100%;
  outline: none;
  font-size: 0.8em;
`;

export const Form = styled.form`
  width: 100%;
  max-width: 300px;
  margin: 2em auto;
  text-align: center;
`;

export const Gallery = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  max-width: 2000px;
  margin: 0 auto;
`;

export const GalleryImage = styled.div`
  display: block;
  width: 280px;
  height: 280px;
  position: relative;
  margin-bottom: 40px;
  cursor: pointer;
  figure {
    width: 100%;
    height: 100%;
    margin: 0;
    transition: 0.2s opacity;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Nav = styled.nav`
  margin: 60px auto;
  width: 450px;
  text-align: center;
  .nav__list {
    padding: 0;
    margin: 0;
    display: flex;
    list-style: none;
    justify-content: center;
    .nav__list-separator {
      min-width: 10px;
    }
    .nav__list-item {
      min-width: 110px;
      width: 110px;
      text-110px: center;
    }
    .nav__list-link {
      text-decoration: none;
      color: ${colors.black};
      display: inline-block;
      width: 100%;
    }
  }
`;

export const Button = styled.button`
  background: ${colors.black};
  box-shadow: none;
  border: none;
  padding: 10px 26px;
  font-size: 14px;
  text-transform: capitalize;
  color: #fff;
`;

export const ButtonLink = styled.a`
  background: ${colors.black};
  box-shadow: none;
  border: none;
  padding: 10px 26px;
  font-size: 14px;
  text-transform: capitalize;
  color: #fff;
  text-decoration: none;
  text-transform: initial;
`;

export const ErrorFound = styled.div`
  padding: 30px;
  box-shadow: none;
  border: none;
  padding: 10px 26px;
  font-size: 14px;
  text-align: center;
  text-transform: capitalize;
  color: ${colors.black};
  .notFound__img {
    max-width: 100%;
    width: 500px;
  }
  .notFound__text {
    font-size: 30px;
    font-weight: 600;
    text-transform: initial;
    padding-bottom: 30px;
  }
`;

export const ModalView = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99999;
  background: rgba(0, 0, 0, 0.8);
  justify-content: center;
  align-items: center;
  display: flex;
  flex-flow: column nowrap;
  .modal__content {
    width: 400px;
  }
`;
