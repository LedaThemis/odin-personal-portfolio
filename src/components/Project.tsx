import styled from 'styled-components';
import Icon from '@mdi/react'
import { mdiOpenInNew } from '@mdi/js';

interface ProjectProps {
  imageURL: string;
  title: string;
  description: string;
  githubLink: string;
  demoLink: string;
}

const Project = ({ imageURL, title, description, githubLink, demoLink }: ProjectProps) => {
  return (
    <StyledContainer>
      <StyledProjectImage src={imageURL} alt="" />
      <StyledTitleSection>
        <StyledProjectTitle>{title}</StyledProjectTitle>
        <StyledProjectLinksSection>
          <StyledLink href={githubLink} target="_blank" rel="noreferrer">
            <StyledProjectIcons className="devicon-github-original colored" />
            <StyledHiddenSpan>Project {title}, Github (opens in a new tab)</StyledHiddenSpan>
          </StyledLink>
          <StyledLink href={demoLink} target="_blank" rel="noreferrer">
            <Icon path={mdiOpenInNew} size={1} />
            <StyledHiddenSpan>Project {title}, Demo (opens in a new tab)</StyledHiddenSpan>
          </StyledLink>
        </StyledProjectLinksSection>
      </StyledTitleSection>
      <StyledDescription>{description}</StyledDescription>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const StyledProjectImage = styled.img`
  width: 100%;
`;

const StyledTitleSection = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledProjectLinksSection = styled.div`
    display: flex;
    gap: 10px;
`

const StyledProjectTitle = styled.h3`
  font-family: var(--headings-font-family);
  font-size: var(--h3-font-size);
  font-weight: var(--h3-font-weight);
  margin: 0;
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: black;

  &:visited {
    color: black;
  }
`;

const StyledProjectIcons = styled.i`
  font-size: 1.5rem;
`;

const StyledDescription = styled.p`
  font-family: var(--descriptions-font-family);
  color: #565656;
  margin: 0;
`;

const StyledHiddenSpan = styled.span`
  clip: rect(1px, 1px, 1px, 1px);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;

  &:focus {
    clip: auto;
    height: auto;
    overflow: auto;
    position: absolute;
    width: auto;
  }
`;

export default Project;
