import { useId } from "react";
import { AbsoluteFill, Sequence, useCurrentFrame } from "remotion";
import { useCharacterArtwork } from "./CharacterArtwork";
import { Artwork, glide, Keyword, palette, rise } from "./Design";
import { Clipboard, Dozer, Workshop, Worktable } from "./Workshop";

const AtTheBench = () => {
  const frame = useCurrentFrame();
  const { Mechanic, WorkArm, revised } = useCharacterArtwork();
  const settle = glide(frame, 3, 56);

  return (
    <Artwork>
      <Workshop depth={-20 * settle} />
      <Dozer transform="translate(230 708) scale(.79)" muted />
      <Mechanic
        transform="translate(101 617)"
        gesture={11 + 7 * settle}
        nearArm={false}
      />
      <Mechanic
        transform="translate(925 643) scale(-.93 .93)"
        gesture={8 + 9 * settle}
        lead={false}
        nearArm={false}
      />
      <Worktable y={1157} />
      <Clipboard
        transform="translate(696 1292) rotate(-77) scale(.54)"
        activeRow={0}
      />
      <Clipboard
        transform="translate(363 1286) rotate(-66) scale(.51)"
        kind="sop"
      />
      <WorkArm
        shoulder={revised ? [312, 836] : [314, 853]}
        elbow={[386, 1014]}
        wrist={[407 + 20 * settle, 1121]}
        width={80}
        handAngle={73 - 15 * settle}
      />
      <WorkArm
        shoulder={revised ? [728, 847] : [737, 872]}
        elbow={[714, 1016]}
        wrist={[684 - 12 * settle, 1124]}
        width={75}
        handAngle={107}
      />
    </Artwork>
  );
};

const ReadThePlan = () => {
  const frame = useCurrentFrame();
  const id = useId();
  const { OpenHand, revised } = useCharacterArtwork();
  const reach = glide(frame, 4, 29);
  const transfer = glide(frame, 66, 91);
  const hazard = rise(frame, 122, 146);
  const lean = glide(frame, 113, 145);
  const title = frame < 70 ? "SOP" : frame < 122 ? "JSA" : "BAHAYA";

  return (
    <AbsoluteFill>
      <Artwork>
        <defs>
          <linearGradient id={`${id}-mat`} x2=".79" y2="1">
            <stop stopColor="#132d43" />
            <stop offset=".55" stopColor="#386477" />
            <stop offset="1" stopColor="#182d3f" />
          </linearGradient>
          <pattern
            id={`${id}-paper`}
            width="34"
            height="34"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M0 34H34V0"
              fill="none"
              stroke="#5c8190"
              strokeWidth="2"
              opacity=".22"
            />
          </pattern>
        </defs>
        <rect width="1080" height="1920" fill={`url(#${id}-mat)`} />
        <path d="M0 485 1080 367V1467L0 1684Z" fill="#4c6d79" />
        <path d="M0 497 1080 378V1445L0 1657Z" fill={`url(#${id}-paper)`} />
        <path
          d="M0 519 1080 396M0 1610 1080 1411"
          fill="none"
          stroke="#9bb6ba"
          strokeWidth="4"
          opacity=".43"
        />
        <g transform={`translate(${-30 * lean} ${28 * lean})`}>
          <Clipboard
            transform="translate(145 655) rotate(-8) scale(1.14)"
            kind="sop"
            activeRow={frame < 70 ? 0 : -1}
          />
          <Clipboard
            transform="translate(509 613) rotate(7) scale(1.17)"
            activeRow={frame >= 70 ? (frame >= 122 ? 2 : 0) : -1}
          />
          <path
            d="M905 610 942 612 897 978 870 974Z"
            fill="#263f51"
            stroke="#91aab1"
            strokeWidth="4"
          />
          <path d="M899 610 906 584 939 588 943 612Z" fill="#e0b77b" />
        </g>
        <g opacity={hazard}>
          <path
            d="M670 803 692 807 732 1071 828 1129"
            fill="none"
            stroke="#fad089"
            strokeWidth="6"
            strokeDasharray="12 14"
          />
          <circle
            cx="668"
            cy="803"
            r="17"
            fill="#f9b44f"
            stroke="#f5f3eb"
            strokeWidth="5"
          />
          <rect
            x="507"
            y="1096"
            width="460"
            height="407"
            rx="27"
            fill="#143346"
            stroke="#7c9eaa"
            strokeWidth="5"
          />
          <path
            d="M530 1230H944M530 1355H944M640 1115V1476M775 1115V1476M900 1115V1476"
            stroke="#5a8092"
            strokeWidth="2"
            opacity=".33"
          />
          <Dozer transform="translate(521 1154) scale(.48)" muted />
          <circle
            cx="862"
            cy="1340"
            r="35"
            fill="#f9b44f"
            fillOpacity=".31"
            stroke="#f9b44f"
            strokeWidth="6"
          />
          <circle cx="862" cy="1340" r="9" fill="#ffd69b" />
        </g>
        <g
          transform={`translate(${120 + 96 * reach + 260 * transfer + 16 * lean} ${1246 - 200 * reach + 25 * transfer - 26 * lean}) rotate(${-48 - 14 * reach + 11 * transfer})`}
        >
          <path
            d="M-890-84-120-55 11-45 29 31-119 57-890 126Z"
            fill={revised ? "#526f81" : "#c27449"}
            stroke="#263f50"
            strokeWidth="8"
          />
          <path d="M-120-55-86-53-81 51-118 58Z" fill="#c8d0bd" />
          <path
            d="M-55-51 15-46 26 34-57 47Z"
            fill="#355366"
            stroke="#263f50"
            strokeWidth="4"
          />
          <OpenHand transform="translate(10 0) scale(.91)" gesture="point" />
        </g>
      </Artwork>
      <Keyword
        lines={[title]}
        progress={
          frame < 70
            ? rise(frame, 24, 43)
            : frame < 122
              ? rise(frame, 70, 84)
              : hazard
        }
        size={145}
        y={178}
      />
    </AbsoluteFill>
  );
};

const ControlDiagram = () => {
  const frame = useCurrentFrame();
  const id = useId();
  const secure = glide(frame, 9, 39);
  const verify = rise(frame, 41, 62);
  const flourish = rise(frame, 56, 79);

  return (
    <AbsoluteFill>
      <Artwork>
        <defs>
          <radialGradient id={`${id}-wash`} cx=".48" cy=".57" r=".68">
            <stop stopColor="#294e5b" />
            <stop offset="1" stopColor="#101f32" />
          </radialGradient>
          <linearGradient id={`${id}-insert`} x2="1" y2="1">
            <stop stopColor="#557987" />
            <stop offset="1" stopColor="#2e495b" />
          </linearGradient>
        </defs>
        <rect width="1080" height="1920" fill={`url(#${id}-wash)`} />
        <path
          d="M84 577 499 562 510 1313 84 1347Z"
          fill="#223e50"
          stroke="#567685"
          strokeWidth="5"
        />
        <path
          d="M548 562 957 587 957 1349 547 1313Z"
          fill="#284655"
          stroke="#567685"
          strokeWidth="5"
        />
        <path
          d="M105 608 476 594 485 1268 104 1305Z M573 596 931 614 930 1305 572 1273Z"
          fill={`url(#${id}-insert)`}
        />
        <path
          d="M118 672H467M118 1196H467M591 676H915M591 1202H915"
          stroke="#789fab"
          strokeWidth="3"
          opacity=".47"
        />
        <g>
          <rect
            x="173"
            y="750"
            width="238"
            height="205"
            rx="24"
            fill="#1c3444"
            stroke="#93a8ac"
            strokeWidth="9"
          />
          <rect
            x="191"
            y="769"
            width="201"
            height="169"
            rx="14"
            fill="#355366"
          />
          <circle
            cx="291"
            cy="846"
            r="51"
            fill="#263f51"
            stroke="#98afb3"
            strokeWidth="7"
          />
          <path
            d="M292 818 329 827 333 846 299 857 264 858 252 840 258 825Z"
            fill="#9aabb1"
            stroke="#243b4c"
            strokeWidth="5"
          />
          <path
            d="M288 865V904"
            stroke="#dcb26a"
            strokeWidth="7"
            strokeLinecap="round"
          />
          <g transform={`translate(0 ${(1 - secure) * -50})`}>
            <path
              d="M254 912V883Q254 850 284 850 317 850 317 884V920"
              stroke="#dce7e0"
              strokeWidth="16"
              strokeLinecap="round"
              fill="none"
            />
            <rect
              x="228"
              y="906"
              width="111"
              height="105"
              rx="13"
              fill="#f0aa61"
              stroke="#20394a"
              strokeWidth="7"
            />
            <path
              d="M240 922H327"
              stroke="#ffce8a"
              strokeWidth="7"
              opacity=".74"
            />
            <circle cx="284" cy="957" r="11" fill="#423a39" />
            <path
              d="M287 955V981"
              stroke="#423a39"
              strokeWidth="8"
              strokeLinecap="round"
            />
            <path
              d="M311 871Q346 901 367 964"
              stroke="#c2d4cb"
              strokeWidth="5"
              fill="none"
            />
            <path
              d="M353 967 372 944 413 953 434 1056 363 1077Z"
              fill="#d87c64"
              stroke="#263e4a"
              strokeWidth="5"
            />
            <path
              d="M371 995 404 988M376 1016 407 1008M380 1035 409 1027"
              stroke="#f6dcbf"
              strokeWidth="4"
            />
          </g>
        </g>
        <g>
          <path d="M584 1128 906 1127 928 1155 598 1170Z" fill="#183648" />
          <path
            d="M613 816 847 775 900 820 892 924 703 963 617 921Z"
            fill="#7895a1"
            stroke="#294655"
            strokeWidth="8"
          />
          <path d="M614 816 846 773 891 818 699 858Z" fill="#a1b7bb" />
          <path d="M701 859 892 821 893 918 703 957Z" fill="#577786" />
          <circle
            cx="796"
            cy="872"
            r="43"
            fill="#294656"
            stroke="#aec5c6"
            strokeWidth="6"
          />
          <circle cx="796" cy="872" r="23" fill="#658994" />
          <g opacity={secure}>
            <path
              d="M748 948 830 932 850 1132 714 1132Z"
              fill="#bd8a55"
              stroke="#243d4b"
              strokeWidth="8"
            />
            <path d="M758 976 813 965 827 1113H738Z" fill="#e0a869" />
            <path
              d="M722 1105H844V1137H714ZM738 946 833 928 842 956 737 974Z"
              fill="#a69a75"
              stroke="#29494b"
              strokeWidth="5"
            />
          </g>
        </g>
        <path
          d="M281 1136V1402L520 1469 748 1401V1136"
          stroke="#76bbab"
          strokeWidth="5"
          fill="none"
          strokeDasharray="12 14"
          opacity={verify}
        />
        <g
          transform={`translate(522 1469) scale(${0.78 + 0.22 * flourish})`}
          opacity={verify}
        >
          <circle r="67" fill="#174f49" stroke="#64cc9a" strokeWidth="7" />
          <path
            d="M-31 2-10 24 34-24"
            stroke="#c6f0d7"
            strokeWidth="11"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </g>
      </Artwork>
      <Keyword
        lines={frame < 42 ? ["ISOLASI"] : ["ISOLASI", "VERIFIKASI"]}
        y={175}
        size={119}
        accent={frame < 42 ? palette.amber : palette.green}
        progress={rise(frame, 2, 15)}
      />
    </AbsoluteFill>
  );
};

export const JsaReview = () => (
  <AbsoluteFill>
    <Sequence name="Tinjau bersama" durationInFrames={70}>
      <AtTheBench />
    </Sequence>
    <Sequence name="SOP dan JSA" from={70} durationInFrames={205}>
      <ReadThePlan />
    </Sequence>
    <Sequence name="Isolasi dan verifikasi" from={275} durationInFrames={181}>
      <ControlDiagram />
    </Sequence>
  </AbsoluteFill>
);

export const SafeWork = () => {
  const frame = useCurrentFrame();
  const id = useId();
  const { ClosedGlove, Mechanic, WorkArm, revised } = useCharacterArtwork();
  const settle = glide(frame, 2, 49);
  const action =
    glide(frame, 43, 66) -
    glide(frame, 72, 94) +
    glide(frame, 101, 122) -
    glide(frame, 130, 157);
  const angle = -5 + (revised ? 12 : 10) * action;
  const radians = (angle * Math.PI) / 180;
  const wristX = 744 - 306 * Math.cos(radians) - 180 * Math.sin(radians);
  const wristY = 1117 - 306 * Math.sin(radians) + 180 * Math.cos(radians);
  const nod = glide(frame, 146, 165) - glide(frame, 169, 196);

  return (
    <AbsoluteFill>
      <Artwork>
        <defs>
          <linearGradient id={`${id}-panel`} x2="1" y2="1">
            <stop stopColor="#69889b" />
            <stop offset=".44" stopColor="#3b5b70" />
            <stop offset="1" stopColor="#224154" />
          </linearGradient>
          <linearGradient id={`${id}-shadow`} x2="0" y2="1">
            <stop offset=".54" stopColor="#0b1b2c" stopOpacity="0" />
            <stop offset="1" stopColor="#0b1b2c" stopOpacity=".71" />
          </linearGradient>
        </defs>
        <Workshop depth={-26 * settle} />
        <g opacity=".94">
          <Mechanic
            transform="translate(1014 581) scale(-.71 .71)"
            gesture={12 * nod}
            lead={false}
          />
        </g>
        <g transform={`translate(${-16 * settle} ${24 * (1 - settle)})`}>
          <path
            d="M689 933 1114 768 1187 1523 907 1614 599 1475 576 1130Z"
            fill={`url(#${id}-panel)`}
            stroke="#1f384c"
            strokeWidth="12"
          />
          <path
            d="M684 949 1119 808 1118 900 650 1040Z"
            fill="#96acb1"
            opacity=".61"
          />
          <path
            d="M639 1053 1037 936 1130 1391 714 1512 624 1438 593 1178Z"
            fill="#406478"
            stroke="#98b0b6"
            strokeWidth="6"
          />
          <path
            d="M681 1269 1042 1173M691 1291 1046 1199M698 1315 1052 1224M708 1339 1058 1248M716 1363 1064 1272"
            stroke="#314f62"
            strokeWidth="14"
          />
          <circle
            cx="744"
            cy="1117"
            r="69"
            fill="#2e4c61"
            stroke="#8aa2b0"
            strokeWidth="6"
          />
          <path
            d="M744 1070 785 1093 785 1140 744 1164 704 1140 704 1093Z"
            fill="#9eb0b7"
            stroke="#243d52"
            strokeWidth="7"
          />
          <WorkArm
            shoulder={[41, 1512]}
            elbow={[222, 1411]}
            wrist={[wristX, wristY]}
            width={155}
            hand={false}
          />
          <g transform={`rotate(${angle} 744 1117)`}>
            <path
              d="M430 1298 718 1125"
              stroke="#172e40"
              strokeWidth="43"
              strokeLinecap="round"
            />
            <path
              d="M443 1290 723 1121"
              stroke="#a7bac2"
              strokeWidth="26"
              strokeLinecap="round"
            />
            <path
              d="M520 1243 686 1145"
              stroke="#d3e0df"
              strokeWidth="6"
              strokeLinecap="round"
              opacity=".77"
            />
            <path
              d="M432 1302 533 1243"
              stroke="#2d485c"
              strokeWidth="44"
              strokeLinecap="round"
            />
            <ellipse
              cx="744"
              cy="1117"
              rx="41"
              ry="36"
              fill="#acbfc6"
              stroke="#284555"
              strokeWidth="7"
            />
            <ellipse
              cx="744"
              cy="1117"
              rx="22"
              ry="19"
              fill="#536f7e"
              stroke="#cbd6d5"
              strokeWidth="4"
            />
            <ClosedGlove transform="translate(437 1296) rotate(-31) scale(1.27)" />
          </g>
        </g>
        <rect width="1080" height="1920" fill={`url(#${id}-shadow)`} />
      </Artwork>
      <Keyword
        lines={["KERJA AMAN"]}
        y={190}
        size={130}
        accent={palette.green}
        progress={rise(frame, 45, 71)}
      />
    </AbsoluteFill>
  );
};
