import React from "react";
import styled from "styled-components";

const ToolTipWrapper = styled.div.attrs(props => ({
  style: {
    top: `${props.position.y + 3}px`,
    left: `${props.position.x + 3}px`
  }
}))`
  position: fixed;
  width: 290px;
  padding: 6px 20px;
  background-color: #ffffff;
  font-size: 0.8em;
  text-align: left;
  line-height: 1.4em;
  opacity: 0.9;
  z-index: 0;
  border-radius: 5px;
`;

export default function Tooltip({ text, coords }) {
  // const ref = useRef();

  /*useEffect(() => {
    // this is where I would calculate if the tooltip was outside the window
    // thus changing its position and passing it to the position prop rather than
    // using coords
  }, [coords]);*/

  return (
    <ToolTipWrapper /*ref={ref}*/ position={coords}>{text}</ToolTipWrapper>
  );
}
