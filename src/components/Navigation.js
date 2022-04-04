import styled from "styled-components";

export default function Navigation({ onNavigate }) {
  return (
    <NavStyled>
      <button onClick={() => onNavigate("home")}>Home</button>
      <button onClick={() => onNavigate("about")}>About</button>
    </NavStyled>
  );
}

const NavStyled = styled.nav`
  display: flex;
  gap: 1em;
  justify-content: center;
  background-color: lightblue;
  padding: 0.2em;

  button {
    font-size: 1rem;
    padding: 0.2em 2em;
  }
`;
