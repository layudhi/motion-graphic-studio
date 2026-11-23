import {
  AbsoluteFill,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { HaulTruck } from "./HaulTruck";

const MineLandscape = () => (
  <svg viewBox="0 0 1080 1920" aria-hidden="true">
    <path
      d="M0 985 93 873l125-44 137-160 103 68 107-116 128 132 139 36 248 189v194H0Z"
      fill="#202831"
    />
    <path
      d="m0 1020 121-138 125-40 142-135 111 65 72-80 82 86 163 43 264 183v192H0Z"
      fill="#252E37"
    />
    <path d="m0 762 127 27 72 78h113l121 130h111l85 156H0Z" fill="#303B45" />
    <path d="M0 852h142l72 78h102l83 84h123l59 139H0Z" fill="#2A343E" />
    <path
      d="M0 852h142l72 78h102l83 84h123l59 139 M0 970h157l62 63h116l91 89h126"
      fill="none"
      stroke="#46535E"
      strokeWidth={3}
    />
    <path
      d="m1080 821-117 4-98 97H741l-91 99h-86l-88 133h604Z"
      fill="#37424C"
    />
    <path d="M1080 909H967l-87 86H771l-84 94H559l-62 65h583Z" fill="#2E3944" />
    <path
      d="M1080 909H967l-87 86H771l-84 94H559l-62 65 m583-163H985l-75 72H796l-87 91"
      fill="none"
      stroke="#4C5863"
      strokeWidth={3}
    />
    <path
      d="m0 1147 76 6 70-20 86 17 61-12 100 13 72-16 104 13 76-25 63 12 67-13 137 16 58-19 110 14v60H0Z"
      fill="#48535C"
    />
    <path d="M0 1159H1080V1377H0Z" fill="#27313B" />
    <path d="M0 1160H1080 M0 1376H1080" stroke="#69737B" strokeWidth={4} />
    <path d="M0 1352H1080" stroke="#F59E0B" strokeWidth={5} opacity={0.8} />
    <path
      d="M0 1298H1080"
      stroke="#ADB5BC"
      strokeWidth={4}
      strokeDasharray="66 58"
      opacity={0.58}
    />
    <path
      d="M0 1378h1080v130l-96-41-127 9-116-25-140 29-172-41-112 27-134-36-99 28-84-19Z"
      fill="#202831"
    />
    <path
      d="m97 1407 43-5 32 12h-80z M448 1418l27-9 36 5 20 12h-95z M843 1413l21-11 38 4 17 13h-79z"
      fill="#45515C"
    />
    <path
      d="M104 514v-32h56m760 0h56v32 M104 1516v32h56m760 0h56v-32"
      fill="none"
      stroke="#56636E"
      strokeWidth={2}
    />
  </svg>
);

const MovingTruck = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const distance = interpolate(frame, [0, 4 * fps - 1], [0, 1120], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const truckX = distance - 285;

  return (
    <>
      <svg
        viewBox="0 0 1080 1920"
        aria-hidden="true"
        style={{ position: "absolute", inset: 0 }}
      >
        <ellipse
          cx={truckX + 324}
          cy={1219}
          rx={275}
          ry={11}
          fill="#11161C"
          opacity={0.68}
        />
        {[0, 8, 16, 24].map((offset) => {
          const age = ((frame + offset) % 32) / 32;

          return (
            <ellipse
              key={offset}
              cx={truckX + 131 - age * 240}
              cy={1209 - age * 27}
              rx={12 + age * 26}
              ry={4 + age * 12}
              fill="#A39172"
              opacity={Math.sin(Math.PI * age) * 0.24}
            />
          );
        })}
      </svg>
      <div style={{ position: "absolute", left: truckX, top: 912 }}>
        <HaulTruck distance={distance} />
      </div>
    </>
  );
};

export const HaulRoadScene = () => (
  <AbsoluteFill>
    <MineLandscape />
    <MovingTruck />
  </AbsoluteFill>
);
