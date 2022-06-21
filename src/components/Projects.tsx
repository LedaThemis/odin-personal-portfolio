import styled from 'styled-components';

import Project from './Project';

const Projects = () => {
  return (
    <StyledContainer>
      <StyledHeader>My Work</StyledHeader>
      <ProjectsContainer>
        <Project
          imageURL="https://via.placeholder.com/150"
          title="Project Name 1"
          description="Short description of a project. just a couple sentences will do."
          githubLink="https://github.com"
          demoLink="https://example.com"
        />
        <Project
          imageURL="https://via.placeholder.com/150"
          title="Project Name 2"
          description="Short description of a project. just a couple sentences will do."
          githubLink="https://github.com"
          demoLink="https://example.com"
        />
        <Project
          imageURL="https://via.placeholder.com/150"
          title="Project Name 3"
          description="Short description of a project. just a couple sentences will do."
          githubLink="https://github.com"
          demoLink="https://example.com"
        />
        <Project
          imageURL="https://via.placeholder.com/150"
          title="Project Name 4"
          description="Short description of a project. just a couple sentences will do."
          githubLink="https://github.com"
          demoLink="https://example.com"
        />
        <Project
          imageURL="https://via.placeholder.com/150"
          title="Project Name 5"
          description="Short description of a project. just a couple sentences will do."
          githubLink="https://github.com"
          demoLink="https://example.com"
        />
        <Project
          imageURL="https://via.placeholder.com/150"
          title="Project Name 6"
          description="Short description of a project. just a couple sentences will do."
          githubLink="https://github.com"
          demoLink="https://example.com"
        />
      </ProjectsContainer>
    </StyledContainer>
  );
};

const StyledContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
`;

const StyledHeader = styled.h2`
  margin: 0;
  font-family: var(--headings-font-family);
  font-size: var(--h2-font-size);
  font-weight: var(--h2-font-weight);
`;

const ProjectsContainer = styled.div`
  display: grid;
  gap: 32px;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));

  @media (max-width: 750px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
`;

export default Projects;
