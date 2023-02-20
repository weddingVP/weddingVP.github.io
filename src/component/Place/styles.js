import styled from "styled-components";
import background from "./assets/bg.jpeg";
import city from "./assets/city.jpeg";

export const Container = styled.div`
  position: relative;
  padding: 40px 20px 80px;
  margin: -50px 0 0;

  :after {
    content: "";
    background-image: url(${background});
    /* CSS gradients */
    background: linear-gradient(
        to top,
        rgba(255, 255, 255, 0) 20%,
        rgba(255, 255, 255, 1)
      ),
      url(${background});
    background-position: top center;
    background-size: cover;
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    opacity: 0.3;
    z-index: -1;
  }
`;

export const PlaceBackground = styled.div`
  margin: 32px -20px 32px;
  position: relative;
  max-width: 980px;
  background-image: url(${city});
  filter: saturate(0.7);
  height: 460px;
  background-size: cover;
  overflow: hidden;

  @media (min-width: 680px) {
    margin: 32px auto 32px;
  }
`;

export const Im = styled.img`
  position: absolute;
  bottom: 70px;
  left: -20px;
`;

export const Content = styled.div`
  background-color: white;
  position: absolute;
  bottom: 70px;
  right: -40px;
  border-radius: 50%;
  height: 304px;
  width: 304px;
  box-shadow: 0 0 0 16px rgb(255 255 255 / 35%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 48px;
`;

export const Text = styled.p`
  color: rgba(0, 0, 0, 0.7);
  font-size: 32px;
  margin: 0;
`;

export const SubText = styled(Text)`
  margin: 0;
  font-size: 22px;
`;

export const Con = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;
`;
