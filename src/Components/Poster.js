import React from "react";
import styled from "styled-components";
import Tooltip from "./Tooltip";
import { useHover } from "../hooks/useHover";
import { useMouseMove } from "../hooks/useMouseMove";

const Container = styled.div`
  flex-shrink: 1;
  padding: 0 5px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.p`
  font-weight: bold;
`;

const Poster = ({ data, onClick }) => {
  const { name, description, image, id } = data;
  const coords = useMouseMove();
  const [hoverRef, isHovered] = useHover();

  return (
    <>
      <Container>
        <div ref={hoverRef}>
          {isHovered && <Tooltip coords={coords} text={description} />}
          <img onClick={() => onClick(id)} src={image} alt={name} />
        </div>
        <Title>{name}</Title>
      </Container>
    </>
  );
};

export default Poster;
