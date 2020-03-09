import React from "react";
import styled from "styled-components";
const VideoContainer = styled.video`
  max-width: 830px;
  width: 100%;
`;

export default function VideoPlayer(props) {
  const { video, autoplay = true, muted = false } = props;
  return (
    <VideoContainer key={video} controls autoPlay={autoplay} muted={muted}>
      <source src={video} type="video/mp4" />
    </VideoContainer>
  );
}
