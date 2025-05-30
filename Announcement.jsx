import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: #ba5370;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

const Announcement = () => {
  return <Container>Today's Discount - Apple at ₹150</Container>;
};

export default Announcement;
