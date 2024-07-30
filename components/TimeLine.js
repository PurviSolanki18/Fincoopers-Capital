

import React from 'react';
import styled from 'styled-components';

const TimelineContainer = styled.div`
  font-family: Arial, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: white;
`;

const Timeline = styled.div`
  position: relative;
  width: 80%;
  height: 2px;
  background-color: #333;
`;

const Event = styled.div`
  position: absolute;
  width: 12px;
  height: 12px;
  background-color: #333;
  border-radius: 50%;
  top: 50%;
  transform: translateY(-50%);
`;

const Box = styled.div`
  position: absolute;
  width: 220px;
  padding: 15px;
  background-color: #a8d8ff;
  border-radius: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  
  &:nth-of-type(odd) {
    bottom: 20px;
  }
  
  &:nth-of-type(even) {
    top: 20px;
  }
  
  &:nth-of-type(1) {
    left: 0;
  }
  
  &:nth-of-type(2) {
    left: 33%;
  }
  
  &:nth-of-type(3) {
    left: 66%;
  }
  
  &:nth-of-type(4) {
    right: 0;
  }
  
  &::after {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
  }
  
  &:nth-of-type(odd)::after {
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    border-top: 10px solid #a8d8ff;
  }
  
  &:nth-of-type(even)::after {
    top: -10px;
    left: 50%;
    transform: translateX(-50%);
    border-bottom: 10px solid #a8d8ff;
  }
`;

const Title = styled.h3`
  margin-top: 0;
  font-size: 14px;
  font-weight: bold;
`;

const Description = styled.p`
  margin-bottom: 0;
  font-size: 12px;
`;

const events = [
  { title: "Foundation and Vision", description: "Defined core values of integrity, transparency, and innovation from the outset." },
  { title: "Early Growth and Trust Building", description: "Built initial client base through strong emphasis on trust and ethical practices." },
  { title: "Expansion and Market Leadership", description: "Gained recognition for excellence and innovation in financial services." },
  { title: "Sustainability and Future Vision", description: "Increased engagement in community initiatives and corporate social responsibility." }
];

const TimelineComponent = () => (
  <TimelineContainer>
    <Timeline>
      {events.map((event, index) => (
        <React.Fragment key={index}>
          <Event style={{ left: `${index * 25}%` }} />
          <Box style={{ left: `${index * 25}%` }}>
            <Title>{event.title}</Title>
            <Description>{event.description}</Description>
          </Box>
        </React.Fragment>
      ))}
    </Timeline>
  </TimelineContainer>
);

export default TimelineComponent;
