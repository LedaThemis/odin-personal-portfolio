import styled from 'styled-components';

interface StyledSocialsProps {
  color: string;
  fontSize: string;
  style?: object;
}

const StyledSocials = ({ style, ...props }: StyledSocialsProps) => {
  return (
    <StyledSocialsSection style={style}>
      <StyledSocialsLink href="https://github.com" target="_blank" rel="noreferrer" {...props}>
        <StyledSocialsIcons className="devicon-github-original" aria-hidden="true" {...props} />
        <StyledHiddenSpan>Personal Github Profile (opens in new tab)</StyledHiddenSpan>
      </StyledSocialsLink>
      <StyledSocialsLink href="https://linkedin.com" target="_blank" rel="noreferrer" {...props}>
        <StyledSocialsIcons className="devicon-linkedin-plain" aria-hidden="true" {...props} />
        <StyledHiddenSpan>Personal Linkedin Profile (opens in new tab)</StyledHiddenSpan>
      </StyledSocialsLink>
      <StyledSocialsLink href="https://twitter.com" target="_blank" rel="noreferrer" {...props}>
        <StyledSocialsIcons className="devicon-twitter-original" aria-hidden="true" {...props} />
        <StyledHiddenSpan>Personal Twitter Profile (opens in new tab)</StyledHiddenSpan>
      </StyledSocialsLink>
    </StyledSocialsSection>
  );
};

export default StyledSocials;

const StyledSocialsSection = styled.div`
  display: flex;
  gap: 16px;
`;

interface StyledSocialsLinkProps {
    color: string;
  }

const StyledSocialsLink = styled.a<StyledSocialsLinkProps>`
  text-decoration: none;
  color: ${props => props.color};

  &:visited {
    color: ${props => props.color};
  }
`;

interface StyledSocialsIconsProps {
    fontSize: string;
  }

const StyledSocialsIcons = styled.i<StyledSocialsIconsProps>`
  font-size: ${props => props.fontSize};
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
