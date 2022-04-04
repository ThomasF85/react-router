import { useState } from "react";
import styled from "styled-components";
import Navigation from "./components/Navigation";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [user, setUser] = useState("");

  return (
    <SiteWrapper>
      <Navigation onNavigate={navigate} />
      {currentPage === "home" && <HomePage onCreateUser={createUser} />}
      {currentPage === "about" && <AboutPage user={user} />}
    </SiteWrapper>
  );

  function navigate(page) {
    setCurrentPage(page);
  }

  function createUser(name) {
    setUser(name);
    setCurrentPage("about");
  }
}

const SiteWrapper = styled.div`
  max-width: 50em;
  margin: 0 auto;
`;
