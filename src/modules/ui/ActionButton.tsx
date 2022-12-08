import { RightArrow } from './RightArrow';
import styled from '@emotion/styled';

type ActionButtonProps = {
  title: string;
};

// TODO: Please rework asap - legacy css
const Button = styled.div`
  position: relative;
  top: 0px;
  display: inline-block;
  cursor: pointer;
  width: 12rem;
  &:hover > div {
    width: 100%;
  }
  &:hover > div > span > svg {
    transition: all 0.4s cubic-bezier(0.65, 0, 0.076, 1);
    -webkit-transform: translate(2.5rem, 0);
    transform: translate(2.5rem, 0);
  }
  &:hover > div > span::before {
    transition: all 0.4s cubic-bezier(0.65, 0, 0.076, 1);
    -webkit-transform: translate(2.5rem, 0);
    transform: translate(2.5rem, 0);
  }
  &:hover > p {
    color: #fff;
  }
`;

const Circle = styled.div`
  transition: all 0.4s cubic-bezier(0.65, 0, 0.076, 1);
  position: relative;
  margin: 0;
  width: 2.5rem;
  height: 2.5rem;
  background: #e63e65;
  border-radius: 2.5rem;
`;

const Arrow = styled.span`
  transition: all 0.4s cubic-bezier(0.65, 0, 0.076, 1);
  display: block;
  position: relative;
  left: 0.5rem;
  top: 0.7rem;
  width: 2.125rem;
  overflow: hidden;
  & > svg {
    position: relative;
    left: -2rem;
  }
  &:before {
    position: absolute;
    content: '';
    top: 0.3rem;
    right: 1.0625rem;
    opacity: 100;
    width: 0.525rem;
    height: 0.525rem;
    background: #e63e65;
    border-top: 0.125rem solid #fff;
    border-right: 0.125rem solid #fff;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;

const Text = styled.p`
  transition: all 0.4s cubic-bezier(0.65, 0, 0.076, 1);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 0.45rem 0;
  margin: 0 0 0 1.85rem;
  color: #282936;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
`;

export function ActionButton({ title }: ActionButtonProps) {
  return (
    <Button>
      <Circle>
        <Arrow>
          <RightArrow />
        </Arrow>
      </Circle>
      <Text>{title}</Text>
    </Button>
  );
}
