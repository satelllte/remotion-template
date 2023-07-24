import {
  AbsoluteFill,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';
import {loadFont} from '@remotion/google-fonts/Orbitron';

const {fontFamily} = loadFont();

export function VideoHello() {
  return (
    <AbsoluteFill
      style={{fontFamily}}
      className='flex items-center justify-center bg-stone-950'
    >
      <Text />
    </AbsoluteFill>
  );
}

function Text() {
  const frame = useCurrentFrame();
  const {fps, durationInFrames} = useVideoConfig();
  const durationFade = fps * 1.5;
  const opacity = interpolate(
    frame,
    [0, durationFade, durationInFrames - durationFade, durationInFrames],
    [0, 1, 1, 0],
  );
  const shift = Math.sin((2 * frame) / fps) * 15;
  const rotation = Math.sin((1.25 * frame) / fps) * 10;
  return (
    <div
      style={{
        opacity,
        transform: `translateY(${shift}%) rotate(${rotation}deg)`,
      }}
      className='text-[172px] text-emerald-500'
    >
      Hello!
    </div>
  );
}
