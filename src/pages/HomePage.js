import styled from "styled-components";
import Form from "../components/Form";

export default function HomePage({ onCreateUser }) {
  return (
    <Wrapper>
      <h1>Home page</h1>
      <Form onCreateUser={onCreateUser} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  gap: 20px;
  padding: 20px 0;
`;
