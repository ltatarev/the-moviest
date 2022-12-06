import styled from '@emotion/styled';
import { ReactNode } from 'react';

type GradientOverlay = {
  children: ReactNode;
};

// TODO: Please rework asap - legacy css
const StyledContainer = styled.div`
  height: 100%;
  background: #000000;
  background: -moz-linear-gradient(
    -45deg,
    #000000 0%,
    #000000 25%,
    #1e539e 50%,
    #ff3083 75%,
    #7800a8 100%
  );
  /* FF3.6-15 */
  background: -webkit-linear-gradient(
    -45deg,
    #000000 0%,
    #000000 25%,
    #1e539e 50%,
    #ff3083 75%,
    #7800a8 100%
  );
  /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(
    135deg,
    #000000 0%,
    #000000 25%,
    #1e539e 50%,
    #ff3083 75%,
    #7800a8 100%
  );
  /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  background-size: 400% 400%;
  background-repeat: no-repeat;
  transition: 0.5s all;
  border-top-left-radius: 1.5rem;

  &:hover {
    background-position: 100% 100%;
  }
`;

export function GradientOverlay({ children }: GradientOverlayProps) {
  return <StyledContainer>{children}</StyledContainer>;
}
