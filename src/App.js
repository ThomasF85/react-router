import { useState } from "react";
import styled from "styled-components";
import Navigation from "./components/Navigation";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";

export default function App() {
  const [user, setUser] = useState("");

  return (
    <SiteWrapper>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage user={user} />} />
      </Routes>
    </SiteWrapper>
  );

  function createUser(name) {
    setUser(name);
    //setCurrentPage("about");
  }
}

const SiteWrapper = styled.div`
  max-width: 50em;
  margin: 0 auto;
`;
