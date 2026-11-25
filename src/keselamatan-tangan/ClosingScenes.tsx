import { useId } from "react";
import { AbsoluteFill, Sequence, useCurrentFrame } from "remotion";
import { Artwork, glide, Keyword, palette, rise } from "./Design";
import { Family, Porch } from "./Home";
import { OpenHand } from "./People";
import { Clipboard, Workshop, Worktable } from "./Workshop";

const AfterShift = () => {
  const frame = useCurrentFrame();
  const lower = glide(frame, 0, 90);
  const reach = glide(frame, 114, 204);
  const x = 366 + 151 * reach;
  const y = 956 + 232 * lower - 74 * reach;

  return (
    <Artwork>
      <Workshop depth={-15 * reach} />
      <path
        d="M618 594 1004 668V1222L615 1181Z"
        fill="#365565"
        stroke="#183344"
        strokeWidth="9"
      />
      <path
        d="M632 616 808 653V1199L631 1179ZM825 656 986 686V1210L825 1190Z"
        fill="#426576"
        stroke="#74929d"
        strokeWidth="5"
      />
      <path
        d="M739 745 786 753M739 762 786 770M739 779 786 787M904 777 959 784M904 794 959 801M904 811 959 818"
        stroke="#678994"
        strokeWidth="5"
      />
      <path
        d="M782 981V1032M840 993V1044"
        stroke="#b6c2be"
        strokeWidth="8"
        strokeLinecap="round"
      />
      <Worktable y={1154} />
      <ellipse
        cx="678"
        cy="1293"
        rx="187"
        ry="35"
        fill="#263f4d"
        opacity={0.38 * lower}
      />
      <OpenHand
        transform={`translate(${509 + 35 * lower} ${1066 + 198 * lower}) rotate(${40 - lower * 51}) scale(.88)`}
      />
      <g transform={`translate(${x} ${y}) rotate(${-3 + reach * 11})`}>
        <path
          d="M-573-8Q-388-6-195-25L-13-40 15-19 12 29-193 83-573 137Z"
          fill="#43636e"
          stroke="#263e50"
          strokeWidth="8"
        />
        <path
          d="M-365 9Q-179-20-21-24"
          stroke="#748c90"
          strokeWidth="11"
          strokeLinecap="round"
          opacity=".51"
          fill="none"
        />
        <path d="M-32-35-6-39 6 32-29 41Z" fill="#335563" />
        <OpenHand transform="scale(.72)" bare />
      </g>
    </Artwork>
  );
};

const BackHome = () => {
  const frame = useCurrentFrame();
  const id = useId();
  const drift = glide(frame, 6, 120);
  const light = 0.24 * (1 - rise(frame, 0, 20));
  const scale = 1 - drift * 0.053;
  const embrace = 1.7 * (glide(frame, 13, 74) - glide(frame, 90, 126));

  return (
    <AbsoluteFill>
      <Artwork>
        <defs>
          <linearGradient id={`${id}-match`} x2="1" y2=".85">
            <stop stopColor="#c4deed" stopOpacity=".02" />
            <stop offset=".5" stopColor="#ffe6b7" stopOpacity=".87" />
            <stop offset="1" stopColor="#fbd399" stopOpacity=".12" />
          </linearGradient>
        </defs>
        <Porch />
        <Family
          transform={`translate(${481 - 481 * scale} ${1000 - 1000 * scale}) scale(${scale}) rotate(${-embrace} 541 1647)`}
        />
        <rect
          width="1080"
          height="1920"
          fill={`url(#${id}-match)`}
          opacity={light}
        />
      </Artwork>
      <Keyword
        lines={["KELUARGA"]}
        y={190}
        size={131}
        accent={palette.gold}
        progress={rise(frame, 41, 67)}
      />
    </AbsoluteFill>
  );
};

export const SameHands = () => (
  <AbsoluteFill>
    <Sequence name="Akhir shift" durationInFrames={205}>
      <AfterShift />
    </Sequence>
    <Sequence name="Pelukan di rumah" from={205} durationInFrames={130}>
      <BackHome />
    </Sequence>
  </AbsoluteFill>
);

export const ComeHomeSafe = () => {
  const frame = useCurrentFrame();
  const id = useId();
  const pull = glide(frame, 0, 151);
  const nextTitle = 203;
  const isClosing = frame >= nextTitle;
  const shift = 30 * (1 - pull);

  return (
    <AbsoluteFill>
      <Artwork>
        <defs>
          <clipPath id={`${id}-work`}>
            <path d="M0 0H657L422 1920H0Z" />
          </clipPath>
          <linearGradient id={`${id}-shade`} x2="0" y2="1">
            <stop stopColor="#0d1e30" stopOpacity=".63" />
            <stop offset=".51" stopColor="#0d1e30" stopOpacity="0" />
            <stop offset=".83" stopColor="#0d1e30" stopOpacity="0" />
            <stop offset="1" stopColor="#0d1e30" stopOpacity=".89" />
          </linearGradient>
        </defs>
        <Porch />
        <Family
          transform={`translate(${294 - shift} ${255 - shift}) scale(${0.89 + (1 - pull) * 0.058})`}
        />
        <g clipPath={`url(#${id}-work)`}>
          <Workshop depth={-shift} />
          <Worktable y={1119} />
          <Clipboard
            transform={`translate(${123 - shift} 1065) rotate(-9) scale(.89)`}
            activeRow={0}
          />
          <g transform="translate(160 1440) rotate(-62)">
            <path
              d="M-394-34-89-38 10-36 14 30-98 55-395 82Z"
              fill="#be714b"
              stroke="#213b4c"
              strokeWidth="7"
            />
            <path d="M-95-37-64-38-60 49-90 55Z" fill="#c4d8cc" />
            <OpenHand transform="translate(4 0) scale(.73)" />
          </g>
        </g>
        <path
          d="M656 0 422 1920"
          stroke="#f6c581"
          strokeWidth="4"
          opacity=".57"
        />
        <rect width="1080" height="1920" fill={`url(#${id}-shade)`} />
      </Artwork>
      <Keyword
        lines={isClosing ? ["PULANG", "SELAMAT"] : ["JSA", "SEBELUM KERJA"]}
        size={isClosing ? 156 : 121}
        y={isClosing ? 395 : 433}
        accent={palette.gold}
        progress={isClosing ? rise(frame, nextTitle, 220) : rise(frame, 8, 29)}
      />
    </AbsoluteFill>
  );
};
