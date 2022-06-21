import styled from 'styled-components';

const AboutMe = () => {
  return (
    <StyledContainer>
      <StyledFigure>
        <StyledProfileImage
          src="https://images.pexels.com/photos/6347901/pexels-photo-6347901.jpeg?cs=srgb&dl=pexels-liza-summer-6347901.jpg&fm=jpg"
          alt=""
        />
        <StyledProfileName>Liza Summer</StyledProfileName>
      </StyledFigure>
      <StyledSection>
        <StyledSectionHeader>About me</StyledSectionHeader>
        <StyledDescription>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Egestas sed tempus urna et. Semper auctor neque vitae tempus quam pellentesque. Pellentesque
          pulvinar pellentesque habitant morbi tristique senectus et. Ullamcorper a lacus vestibulum sed arcu non odio
          euismod lacinia. Et malesuada fames ac turpis. Fermentum iaculis eu non diam phasellus vestibulum lorem.
          Nascetur ridiculus mus mauris vitae. Tempus imperdiet nulla malesuada pellentesque elit eget gravida.
        </StyledDescription>
        <StyledSocialsSection>
          <StyledSocialsLink href="https://github.com" target="_blank" rel="noreferrer">
            <StyledSocialsIcons className="devicon-github-original" aria-hidden="true" />
            <StyledHiddenSpan>Personal Github Profile (opens in new tab)</StyledHiddenSpan>
          </StyledSocialsLink>
          <StyledSocialsLink href="https://linkedin.com" target="_blank" rel="noreferrer">
            <StyledSocialsIcons className="devicon-linkedin-plain" aria-hidden="true" />
            <StyledHiddenSpan>Personal Linkedin Profile (opens in new tab)</StyledHiddenSpan>
          </StyledSocialsLink>
          <StyledSocialsLink href="https://twitter.com" target="_blank" rel="noreferrer">
            <StyledSocialsIcons className="devicon-twitter-original" aria-hidden="true"></StyledSocialsIcons>
            <StyledHiddenSpan>Personal Twitter Profile (opens in new tab)</StyledHiddenSpan>
          </StyledSocialsLink>
        </StyledSocialsSection>
      </StyledSection>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
`;

const StyledFigure = styled.figure`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  box-shadow: 2px 1px 6px 1px #56565691;
  height: 600px;
`;

const StyledProfileImage = styled.img`
  height: 100%;
  width: 500px;
  object-fit: cover;
`;

const StyledProfileName = styled.h1`
  font-family: var(--headings-font-family);
  font-weight: var(--h1-font-weight);
  font-size: var(--h1-font-size);
  color: white;
  text-shadow: -2px 3px 8px black;
  margin: 0;
  margin-top: -75px;
`;

const StyledSection = styled.section`
  box-shadow: 2px 1px 6px 1px #56565691;
  padding: 32px;
  padding-left: 16px;
  display: flex;
  gap: 32px;
  flex-direction: column;
`;

const StyledSectionHeader = styled.h2`
  font-family: var(--headings-font-family);
  font-weight: var(--h2-font-weight);
  font-size: var(--h2-font-size);
  margin: 0;
`;

const StyledDescription = styled.p`
  font-family: Roboto, sans-serif;
  color: #565656;
  font-size: var(--p-font-size);
  margin: 0;
`;

const StyledSocialsSection = styled.div`
  display: flex;
  gap: 16px;
  align-self: flex-end;
`;

const StyledSocialsLink = styled.a`
  text-decoration: none;
  color: black;

  &:visited {
    color: black;
  }
`;

const StyledSocialsIcons = styled.i`
  font-size: 1.5rem;
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

export default AboutMe;
