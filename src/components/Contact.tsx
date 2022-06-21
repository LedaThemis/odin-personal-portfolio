import styled from 'styled-components';

import StyledSocials from './StyledSocials';

const Contact = () => {
  return (
    <StyledContainer>
      <StyledSectionHeading>Contact me</StyledSectionHeading>
      <StyledParagraph>Please get in touch if you think our work could be mutually beneficial!</StyledParagraph>
      <StyledParagraph>
        1234 Random Road
        <br />
        Random Town, California 12345
      </StyledParagraph>
      <StyledContactArea>
        <StyledParagraph>555-555-5555</StyledParagraph>
        <StyledParagraph>lizasummer.is.not.real@gmail.com</StyledParagraph>
      </StyledContactArea>
      <StyledSocials color="white" fontSize="2rem" />
    </StyledContainer>
  );
};

const StyledContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 64px;
  padding-bottom: 64px;
  background-color: #0891b2;
  color: white;
  gap: 30px;
`;

const StyledSectionHeading = styled.h2`
  font-family: var(--headings-font-family);
  font-size: var(--h2-font-size);
  font-weight: var(--h2-font-weight);
  margin: 0;
`;

const StyledParagraph = styled.p`
  font-family: var(--descriptions-font-family);
  font-size: var(--p-font-size);
  margin: 0;
`;

const StyledContactArea = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export default Contact;
