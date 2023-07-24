import './style.css';
import {Composition} from 'remotion';
import {VideoHello} from './videos';

export function Root() {
  const fps = 30;
  const durationInSeconds = 5;
  return (
    <Composition
      id='hello'
      component={VideoHello}
      width={1280}
      height={720}
      fps={fps}
      durationInFrames={durationInSeconds * fps}
    />
  );
}
