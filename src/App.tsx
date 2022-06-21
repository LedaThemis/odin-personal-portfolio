import styled from 'styled-components';

import AboutMe from './components/AboutMe';
import Projects from './components/Projects';

const App = () => {
  return (
    <StyledMainContainer>
      <AboutMe />
      <Projects />
    </StyledMainContainer>
  );
};

const StyledMainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 100px;

  padding: 64px;
  box-sizing: border-box;
`

export default App;
