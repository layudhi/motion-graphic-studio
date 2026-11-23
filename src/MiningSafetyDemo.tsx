import {
  AbsoluteFill,
  Easing,
  Interactive,
  interpolate,
  Sequence,
  Track,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { HaulRoadScene } from "./HaulRoadScene";

const SafetyFrame = () => (
  <AbsoluteFill style={{ pointerEvents: "none" }}>
    <svg viewBox="0 0 1080 1920" aria-hidden="true">
      <path
        d="M104 248H976 M104 1672H976"
        fill="none"
        stroke="#404B56"
        strokeWidth={2}
      />
      <path
        d="M64 208V104H168 M912 104H1016V208 M64 1712V1816H168 M912 1816H1016V1712"
        fill="none"
        stroke="#53606B"
        strokeWidth={2}
      />
      <path
        d="M104 1672H232 M104 1672V1691 M976 1672V1691"
        fill="none"
        stroke="#F59E0B"
        strokeWidth={4}
      />
      <path
        d="M902 200l24-44h14l-24 44zm26 0 24-44h14l-24 44zm26 0 24-44h14l-24 44z"
        fill="#F59E0B"
      />
      <rect x={104} y={167} width={16} height={16} fill="#F59E0B" />
    </svg>
    <Interactive.Div
      name="Mining safety label"
      style={{
        position: "absolute",
        top: 149,
        left: 140,
        right: 210,
        fontFamily: "Arial, sans-serif",
        fontSize: 42,
        fontWeight: 700,
        letterSpacing: 5,
        color: "#FFFFFF",
        lineHeight: 1.2,
      }}
    >
      MINING SAFETY
    </Interactive.Div>
  </AbsoluteFill>
);

const TitleBackdrop = () => (
  <svg
    viewBox="0 0 1080 1920"
    aria-hidden="true"
    style={{ position: "absolute", inset: 0 }}
  >
    <path
      d="M104 364H976V1534H104Z M104 598H976 M104 832H976 M104 1066H976 M104 1300H976 M322 364V1534 M540 364V1534 M758 364V1534"
      fill="none"
      stroke="#252E37"
      strokeWidth={1.5}
    />
    <path
      d="M758 598h218v234H758z M784 832l192-208 M848 832l128-139 M912 832l64-69"
      fill="none"
      stroke="#323E49"
      strokeWidth={2}
    />
    <path
      d="M104 1406H744l56-56h176 M104 1426H720"
      fill="none"
      stroke="#404B56"
      strokeWidth={2}
    />
    <path d="M912 1350h64" fill="none" stroke="#F59E0B" strokeWidth={4} />
  </svg>
);

const OpeningTitle = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <div style={{ position: "absolute", top: 712, left: 104, right: 104 }}>
      <Interactive.Div
        name="Safety"
        style={{
          fontFamily: "Arial, sans-serif",
          fontWeight: 900,
          fontSize: 165,
          lineHeight: 1.18,
          letterSpacing: -7,
          color: "#FFFFFF",
          opacity: interpolate(frame, [0, 0.48 * fps], [0.35, 1], {
            extrapolateRight: "clamp",
          }),
          translate: interpolate(
            frame,
            [0, 0.58 * fps],
            ["0px 46px", "0px 0px"],
            {
              easing: Easing.bezier(0.16, 1, 0.3, 1),
              extrapolateRight: "clamp",
            },
          ),
        }}
      >
        SAFETY
      </Interactive.Div>
      <Interactive.Div
        name="First"
        style={{
          fontFamily: "Arial, sans-serif",
          fontWeight: 900,
          fontSize: 193,
          lineHeight: 0.99,
          letterSpacing: -8,
          color: "#F59E0B",
          opacity: interpolate(frame, [0.13 * fps, 0.63 * fps], [0.24, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          translate: interpolate(
            frame,
            [0.13 * fps, 0.73 * fps],
            ["0px 46px", "0px 0px"],
            {
              easing: Easing.bezier(0.16, 1, 0.3, 1),
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            },
          ),
        }}
      >
        FIRST
      </Interactive.Div>
      <div
        style={{ width: 164, height: 7, marginTop: 63, background: "#F59E0B" }}
      />
    </div>
  );
};

const OpeningScene = () => (
  <>
    <TitleBackdrop />
    <svg
      width={166}
      height={166}
      viewBox="0 0 166 166"
      aria-hidden="true"
      style={{ position: "absolute", top: 475, left: 104 }}
    >
      <path
        d="M24 0H166V142L142 166H0V24Z"
        fill="#242A2E"
        stroke="#F59E0B"
        strokeWidth={3}
      />
      <path
        d="M43 95V83a40 40 0 0 1 40-40 40 40 0 0 1 40 40v12 M73 46v25 M93 46v25"
        fill="none"
        stroke="#F59E0B"
        strokeWidth={7}
        strokeLinecap="round"
      />
      <path d="M34 96h98v15l-9 10H43l-9-10z" fill="#F59E0B" />
    </svg>
    <OpeningTitle />
  </>
);

const ClosingShield = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <svg
      width={166}
      height={174}
      viewBox="0 0 166 174"
      aria-hidden="true"
      style={{ position: "absolute", top: 475, left: 104 }}
    >
      <path
        d="M24 4H162V142L138 166H4V28Z"
        fill="#242A2E"
        stroke="#F59E0B"
        strokeWidth={3}
      />
      <path
        d="m83 31 42 15v32c0 25-17 43-42 56-25-13-42-31-42-56V46z"
        fill="none"
        stroke="#F59E0B"
        strokeWidth={6}
        strokeLinejoin="round"
      />
      <path
        d="m62 82 14 14 28-30"
        pathLength={1}
        fill="none"
        stroke="#FFFFFF"
        strokeWidth={7}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray={1}
        strokeDashoffset={interpolate(frame, [0.16 * fps, 0.68 * fps], [1, 0], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
          easing: Easing.out(Easing.cubic),
        })}
      />
    </svg>
  );
};

const ClosingMessage = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <div style={{ position: "absolute", top: 756, left: 104, right: 104 }}>
      <Interactive.Div
        name="Utamakan"
        style={{
          fontFamily: "Arial, sans-serif",
          fontWeight: 900,
          fontSize: 123,
          lineHeight: 1.12,
          letterSpacing: -5,
          color: "#FFFFFF",
          opacity: interpolate(frame, [0, 0.36 * fps], [0.46, 1], {
            extrapolateRight: "clamp",
          }),
          translate: interpolate(
            frame,
            [0, 0.48 * fps],
            ["0px 32px", "0px 0px"],
            {
              easing: Easing.bezier(0.16, 1, 0.3, 1),
              extrapolateRight: "clamp",
            },
          ),
        }}
      >
        UTAMAKAN
      </Interactive.Div>
      <Interactive.Div
        name="Keselamatan"
        style={{
          fontFamily: "Arial, sans-serif",
          fontWeight: 900,
          fontSize: 107,
          lineHeight: 1.18,
          letterSpacing: -4,
          color: "#F59E0B",
          opacity: interpolate(frame, [0.08 * fps, 0.48 * fps], [0.35, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          translate: interpolate(
            frame,
            [0.08 * fps, 0.58 * fps],
            ["0px 32px", "0px 0px"],
            {
              easing: Easing.bezier(0.16, 1, 0.3, 1),
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            },
          ),
        }}
      >
        KESELAMATAN
      </Interactive.Div>
      <div
        style={{ width: 164, height: 7, marginTop: 63, background: "#F59E0B" }}
      />
    </div>
  );
};

const ClosingScene = () => (
  <>
    <TitleBackdrop />
    <ClosingShield />
    <ClosingMessage />
  </>
);

export const MiningSafetyDemo = () => {
  const { fps } = useVideoConfig();

  return (
    <AbsoluteFill style={{ backgroundColor: "#161B22", overflow: "hidden" }}>
      <Track name="Mining safety scenes">
        <Sequence name="Safety first" durationInFrames={3 * fps}>
          <OpeningScene />
        </Sequence>
        <Sequence
          name="Mine haul road"
          from={3 * fps}
          durationInFrames={4 * fps}
        >
          <HaulRoadScene />
        </Sequence>
        <Sequence
          name="Closing message"
          from={7 * fps}
          durationInFrames={3 * fps}
        >
          <ClosingScene />
        </Sequence>
      </Track>
      <SafetyFrame />
    </AbsoluteFill>
  );
};
