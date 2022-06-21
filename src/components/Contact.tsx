import styled from 'styled-components';
import Icon from '@mdi/react';
import { mdiEmailOutline, mdiPhoneOutline } from '@mdi/js';

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
        <ParagraphWithIcon>
          <Icon path={mdiPhoneOutline} size={1} title='Phone Number' />
          <StyledParagraph>555-555-5555</StyledParagraph>
        </ParagraphWithIcon>
        <ParagraphWithIcon>
          <Icon path={mdiEmailOutline} size={1} title='Email' />
          <StyledParagraph>lizasummer.is.not.real@gmail.com</StyledParagraph>
        </ParagraphWithIcon>
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
  background-color: #046e87;
  color: white;
  gap: 30px;
`;

const StyledSectionHeading = styled.h2`
  font-family: var(--headings-font-family);
  font-size: var(--h2-font-size);
  font-weight: var(--h2-font-weight);
  margin: 0;
`;

const ParagraphWithIcon = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
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
`;

export default Contact;
