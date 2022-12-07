import styled from '@emotion/styled';
import { Button } from '@modules/ui/Button';
import Link from 'next/link';

const Video = styled.video`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('/assets/00.png');
  background-position: center center;
  background-size: cover;
  margin: 0 auto;
  height: 100%;
  width: 100%;
  font-family: 'Montserrat', sans-serif;
  overflow: hidden;
  object-fit: cover;
  max-width: 100vw;
  max-height: 100vh;
  z-index: -1000;
`;

export default function Explore() {
  return (
    <>
      <div className="flex justify-end mx-20">
        <h1 className="flex text-white font-poppins text-2xl lowercase my-20 pr-30">
          <Link href="/home">
            <Button title="Explore >" />
          </Link>
        </h1>
      </div>
      <Video autoPlay muted playsInline loop>
        <source src="/assets/bg.webm" type="video/webm" />
      </Video>
    </>
  );
}
