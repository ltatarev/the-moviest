import styled from '@emotion/styled';

// TODO: Please rework asap - legacy css
const ShadowButton = styled.div`
  border: 2px solid white;
  border-radius: 30px;
  padding: 0.5rem 1rem;
  -webkit-box-shadow: 6px 6px 0px 0px rgba(230, 62, 66, 1);
  -moz-box-shadow: 6px 6px 0px 0px rgba(230, 62, 66, 1);
  box-shadow: 6px 6px 0px 0px rgba(230, 62, 66, 1);
  animation-name: slideBoxShadowIn;
  animation-duration: 300ms;
  animation-timing-function: ease-out;

  &:hover {
    background: rgba(230, 62, 66, 1);
    animation-name: slideBoxShadowOut;
    animation-duration: 300ms;
    animation-timing-function: ease-in;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
  }

  @keyframes slideBoxShadowOut {
    0% {
      background: rgba(230, 62, 66, 0);
      -webkit-box-shadow: 6px 6px 0px 0px rgba(230, 62, 66, 1);
      -moz-box-shadow: 6px 6px 0px 0px rgba(230, 62, 66, 1);
      box-shadow: 6px 6px 0px 0px rgba(230, 62, 66, 1);
    }
    50% {
      background: rgba(230, 62, 66, 0.4);
      -webkit-box-shadow: 2px 2px 0px 0px rgba(230, 62, 66, 0.5);
      -moz-box-shadow: 2px 2px 0px 0px rgba(230, 62, 66, 0.5);
      box-shadow: 2px 2px 0px 0px rgba(230, 62, 66, 0.5);
    }
    100% {
      background: rgba(230, 62, 66, 1);
      -webkit-box-shadow: none;
      -moz-box-shadow: none;
      box-shadow: none;
    }
  }

  @keyframes slideBoxShadowIn {
    0% {
      -webkit-box-shadow: none;
      -moz-box-shadow: none;
      box-shadow: none;
    }
    50% {
      -webkit-box-shadow: 2px 2px 0px 0px rgba(230, 62, 66, 0.5);
      -moz-box-shadow: 2px 2px 0px 0px rgba(230, 62, 66, 0.5);
      box-shadow: 2px 2px 0px 0px rgba(230, 62, 66, 0.5);
    }
    100% {
      -webkit-box-shadow: 6px 6px 0px 0px rgba(230, 62, 66, 1);
      -moz-box-shadow: 6px 6px 0px 0px rgba(230, 62, 66, 1);
      box-shadow: 6px 6px 0px 0px rgba(230, 62, 66, 1);
    }
  }
`;

export function Button({ title }: { title: string }) {
  return <ShadowButton>{title}</ShadowButton>;
}
