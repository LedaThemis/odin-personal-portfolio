import styled from 'styled-components';

import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {
  return (
    <StyledMainContainer>
      <AboutMe />
      <Projects />
      <Contact />
    </StyledMainContainer>
  );
};

const StyledMainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 100px;

  & > * {
    padding-left: 64px;
    padding-right: 64px;
    box-sizing: border-box;
  }
`;

export default App;
