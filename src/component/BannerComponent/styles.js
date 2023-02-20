import styled from "styled-components";
import background from "./assets/main-photo.jpeg";

export const Container = styled.div`
  align-items: center;
  background-image: url(${background});
  background-position: top center;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 32px;
  height: 100dvh;
  width: 100%;
  justify-content: center;
`;

export const NavigationBar = styled.div`
  position: absolute;
  color: white;
  display: flex;
  justify-content: center;
  gap: 10px 32px;
  top: 0;
  padding: 20px;
  width: calc(100% - 40px);
  flex-wrap: wrap;
`;

export const Name = styled.p`
  margin: 0;
  font-size: 14px;
`;

export const NamesContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 12px;

  svg {
    width: 40px;
    height: 40px;
  }
`;

export const PersonName = styled.p`
  background-color: rgba(0, 0, 0, 0.2);
  padding: 5px 10px;
  border-radius: 10px;
  color: white;
  font-size: 28px;
  margin: 0;
`;
