import { useId } from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { Artwork, glide, Keyword, rise } from "../Design";
import { Clipboard, Dozer, ImpactTool, Workshop, Worktable } from "../Workshop";
import { RevisedArm, RevisedMechanic } from "./Crew";

type Point = readonly [number, number];

const elbowBetween = (shoulder: Point, wrist: Point): Point => {
  const upper = 192;
  const lower = 180;
  const dx = wrist[0] - shoulder[0];
  const dy = wrist[1] - shoulder[1];
  const distance = Math.hypot(dx, dy);
  const along =
    (upper * upper - lower * lower + distance * distance) / (2 * distance);
  const bend = Math.sqrt(Math.max(0, upper * upper - along * along));

  return [
    shoulder[0] + (dx * along - dy * bend) / distance,
    shoulder[1] + (dy * along + dx * bend) / distance,
  ];
};

export const RevisedRoutine = () => {
  const frame = useCurrentFrame();
  const id = useId();
  const ready = glide(frame, 15, 105);
  const reach = glide(frame, 74, 204);
  const hold = glide(frame, 202, 241);
  const gaze = glide(frame, 63, 127);
  const lean = 5.2 * reach - 0.75 * hold;
  const radians = (lean * Math.PI) / 180;
  const root: Point = [140, 576];
  const shoulder: Point = [
    root[0] + 137 + 75 * Math.cos(radians) + 216 * Math.sin(radians),
    root[1] + 437 + 75 * Math.sin(radians) - 216 * Math.cos(radians),
  ];
  const wrist: Point = [
    393 + 166 * reach - 5 * hold,
    1042 + 58 * reach - 8 * ready,
  ];
  const elbow = elbowBetween(shoulder, wrist);
  const focus = glide(frame, 12, 236);

  return (
    <AbsoluteFill>
      <Artwork>
        <defs>
          <linearGradient id={`${id}-shade`} x2="0" y2="1">
            <stop offset=".66" stopColor="#091925" stopOpacity="0" />
            <stop offset="1" stopColor="#091925" stopOpacity=".63" />
          </linearGradient>
        </defs>
        <Workshop depth={-19 * focus} />
        <g transform={`translate(${-18 * focus} ${5 * (1 - focus)})`}>
          <Dozer transform="translate(391 696) scale(.72)" />
          <g transform="translate(492 174) scale(.55 .86)">
            <Worktable y={1045} />
          </g>
          <Clipboard
            transform="translate(675 1162) rotate(93) scale(.34)"
            lift={8 + (1 - reach) * Math.sin(frame / 7) * 9}
          />
          <ImpactTool transform="translate(728 1117) rotate(-23) scale(.96)" />
          <RevisedMechanic
            transform={`translate(${root.join(" ")})`}
            nearArm={false}
            lean={lean}
            gesture={4 + 6 * ready - 3 * gaze - 2 * hold}
            gaze={-0.6 + 2.7 * gaze}
            blink={(frame > 32 && frame < 36) || (frame > 179 && frame < 183)}
          />
          <RevisedArm
            shoulder={shoulder}
            elbow={elbow}
            wrist={wrist}
            width={82}
            handAngle={36 - 17 * reach + 3 * hold}
          />
          <ellipse
            cx={wrist[0] + 49}
            cy="1179"
            rx={54 + 19 * reach}
            ry="14"
            fill="#1f3849"
            opacity={0.09 + 0.18 * reach}
          />
        </g>
        <rect width="1080" height="1920" fill={`url(#${id}-shade)`} />
      </Artwork>
      <Keyword
        lines={["RUTINITAS?"]}
        y={190}
        progress={rise(frame, 132, 151)}
      />
    </AbsoluteFill>
  );
};
