import React, { useState } from "react";
import styled from "styled-components";
import { useGetData } from "./hooks/useGetData";
import VideoPlayer from "./Components/VideoPlayer";
import Poster from "./Components/Poster";

const AppWrapper = styled.div`
  text-align: center;
  margin-top: 60px;
`;

const Section = styled.div`
  justify-content: center;
  display: flex;
  margin: 20px 0;
  flex-wrap: wrap;
`;

function App() {
  const { data, loading, error } = useGetData();
  const [currentVideoId, setCurrentVideoId] = useState(1);

  if (loading) {
    return <div>Loading data</div>;
  }

  if (error) {
    return <div>Something went wrong with the request</div>;
  }

  const currentVideo = data.find(d => d.id === currentVideoId).video;

  return (
    <AppWrapper>
      <Section>
        <VideoPlayer video={currentVideo} />
      </Section>
      <Section>
        {data.map(d => (
          <Poster onClick={setCurrentVideoId} key={d.id} data={d} />
        ))}
      </Section>
    </AppWrapper>
  );
}

export default App;
