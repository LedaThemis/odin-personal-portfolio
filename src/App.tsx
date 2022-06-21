import styled from 'styled-components';

import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {
  return (
    <StyledContainer>
      <StyledMainContainer>
        <AboutMe />
        <Projects />
        <Contact />
      </StyledMainContainer>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  @media (min-width: 2000px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const StyledMainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 100px;

  max-width: 2000px;

  & > * {
    padding-left: 64px;
    padding-right: 64px;
    box-sizing: border-box;
  }

  @media (max-width: 750px) {
    & > * {
      padding-left: 16px;
      padding-right: 16px;
      box-sizing: border-box;
    }
  }
`;

export default App;
