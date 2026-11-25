import { useId } from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { Artwork, glide, Keyword, rise } from "./Design";
import { Mechanic, OpenHand, WorkArm } from "./People";
import { Clipboard, Dozer, ImpactTool, Workshop, Worktable } from "./Workshop";

const Hatch = ({
  id,
  color = "#f9b44f",
}: {
  readonly id: string;
  readonly color?: string;
}) => (
  <pattern
    id={id}
    width="22"
    height="22"
    patternUnits="userSpaceOnUse"
    patternTransform="rotate(34)"
  >
    <path d="M0-22V44" stroke={color} strokeWidth="8" opacity=".76" />
  </pattern>
);

export const Hook = () => {
  const frame = useCurrentFrame();
  const id = useId();
  const reveal = rise(frame, 12, 45);
  const move = glide(frame, 0, 31);
  const zoom = 1.26 - 0.26 * reveal;

  return (
    <AbsoluteFill>
      <Artwork>
        <defs>
          <Hatch id={`${id}-hatch`} />
          <linearGradient id={`${id}-arm`} x2=".95" y2="1">
            <stop stopColor="#b86140" />
            <stop offset=".5" stopColor="#e3955d" />
            <stop offset="1" stopColor="#713f3d" />
          </linearGradient>
          <radialGradient id={`${id}-wool`} cx=".15" cy=".85" r=".95">
            <stop stopColor="#0b1a2b" stopOpacity=".52" />
            <stop offset="1" stopColor="#0b1a2b" stopOpacity="0" />
          </radialGradient>
        </defs>
        <Workshop depth={-35 * reveal} />
        <g
          transform={`translate(563 1108) scale(${zoom}) translate(-563 -1108)`}
        >
          <g opacity=".82">
            <Dozer
              transform={`translate(${192 + reveal * 28} 652) scale(.94)`}
              muted
            />
          </g>
          <Worktable y={1154} />
          <path
            d="M726 1056 861 1014 941 1075 917 1238 794 1235 722 1170Z"
            fill="#263d4e"
            stroke="#142c3d"
            strokeWidth="12"
          />
          <path d="M726 1056 861 1014 940 1074 805 1117Z" fill="#73909e" />
          <path d="M805 1117 940 1074 917 1238 794 1235Z" fill="#536d7b" />
          <path
            d="M835 1135 908 1111 894 1202 826 1200Z"
            fill="#3d5665"
            stroke="#8399a3"
            strokeWidth="5"
          />
          <ImpactTool transform="translate(780 1237) rotate(-22) scale(.91)" />
          <g opacity={0.3 + 0.7 * reveal}>
            <path
              d="M740 1102 793 1138 785 1248 719 1198Z"
              fill="#c87b3c"
              fillOpacity=".38"
            />
            <path
              d="M740 1102 793 1138 785 1248 719 1198Z"
              fill={`url(#${id}-hatch)`}
              stroke="#f9b44f"
              strokeWidth="5"
            />
            <path
              d="M782 1186 800 1203 820 1184"
              fill="none"
              stroke="#ffd081"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <g
            transform={`translate(${234 + 100 * move} ${1237 - 75 * move}) rotate(${-18 + move * 11})`}
          >
            <path
              d="M-515-169Q-345-151-166-94L22-48 41 21 21 64-175 85Q-392 134-532 151Z"
              fill={`url(#${id}-arm)`}
              stroke="#142c3d"
              strokeWidth="9"
            />
            <path
              d="M-135-89-95-80-83 74-126 81ZM-78-75-49-68-41 69-72 73Z"
              fill="#cdd8cd"
            />
            <path
              d="M-20-58 37-47 45 43 11 66-18 65Z"
              fill="#2c495d"
              stroke="#163247"
              strokeWidth="7"
            />
            <path
              d="M-268-112Q-151-69-36-44M-279 52Q-157 35-32 23"
              fill="none"
              stroke="#774b42"
              strokeWidth="5"
              opacity=".45"
            />
            <OpenHand transform="translate(32 1) scale(1.17)" />
          </g>
        </g>
        <rect
          width="1080"
          height="1920"
          fill={`url(#${id}-wool)`}
          pointerEvents="none"
        />
      </Artwork>
      <Keyword
        lines={["JSA", "SEBELUM KERJA"]}
        size={123}
        y={198}
        progress={rise(frame, 36, 53)}
      />
    </AbsoluteFill>
  );
};

export const Routine = () => {
  const frame = useCurrentFrame();
  const id = useId();
  const move = glide(frame, 15, 205);
  const pause = rise(frame, 174, 192);
  const flutter = Math.sin(frame / 6) * (1 - pause) * 11 + 11;
  const shift = glide(frame, 8, 236);

  return (
    <AbsoluteFill>
      <Artwork>
        <defs>
          <linearGradient id={`${id}-base`} x2="0" y2="1">
            <stop offset=".64" stopColor="#091924" stopOpacity="0" />
            <stop offset="1" stopColor="#091924" stopOpacity=".79" />
          </linearGradient>
        </defs>
        <Workshop depth={shift * -16} />
        <g transform={`translate(${-12 * shift} ${13 * (1 - shift)})`}>
          <Dozer transform="translate(330 697) scale(.79)" />
          <Mechanic
            transform="translate(158 652) scale(1.02)"
            gesture={12 * move}
            nearArm={false}
          />
          <Worktable y={1149} />
          <Clipboard
            transform="translate(292 1186) rotate(73) scale(.49)"
            lift={flutter}
          />
          <ImpactTool transform="translate(670 1214) rotate(-24) scale(1.03)" />
          <ellipse
            cx={460 + 112 * move}
            cy={1219 + 49 * move}
            rx={117}
            ry={20}
            fill="#162d3e"
            opacity=".29"
          />
          <WorkArm
            shoulder={[374, 886]}
            elbow={[407 + 51 * move, 1032 + 37 * move]}
            wrist={[438 + 86 * move, 1122 + 73 * move]}
            width={84}
            handAngle={68 - 37 * move}
          />
          <path
            d="M131 1462 438 1457M654 1469 970 1461"
            stroke="#658794"
            strokeWidth="3"
            opacity=".62"
          />
        </g>
        <rect width="1080" height="1920" fill={`url(#${id}-base)`} />
      </Artwork>
      <Keyword
        lines={["RUTINITAS?"]}
        y={190}
        progress={rise(frame, 132, 151)}
      />
    </AbsoluteFill>
  );
};

export const PinchPoint = () => {
  const frame = useCurrentFrame();
  const id = useId();
  const trackIn = glide(frame, 0, 145);
  const ghost = rise(frame, 121, 164);
  const identify = rise(frame, 211, 232);
  const retract = glide(frame, 319, 367);
  const size = 0.98 + 0.08 * trackIn;
  const intense = 0.74 + 0.18 * Math.sin(frame / 13);

  return (
    <AbsoluteFill>
      <Artwork>
        <defs>
          <Hatch id={`${id}-pinch`} />
          <pattern
            id={`${id}-grid`}
            width="48"
            height="48"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M0 48H48V0"
              stroke="#91b2c2"
              opacity=".18"
              strokeWidth="2"
              fill="none"
            />
          </pattern>
          <linearGradient id={`${id}-metal`} x2=".82" y2=".92">
            <stop stopColor="#93acb6" />
            <stop offset=".4" stopColor="#5d7b8d" />
            <stop offset="1" stopColor="#294558" />
          </linearGradient>
          <radialGradient id={`${id}-sky`} cx=".7" cy=".57" r=".65">
            <stop stopColor="#365b73" />
            <stop offset="1" stopColor="#0e2236" />
          </radialGradient>
        </defs>
        <rect width="1080" height="1920" fill={`url(#${id}-sky)`} />
        <path d="M0 588H1080V1578H0Z" fill={`url(#${id}-grid)`} />
        <path
          d="M94 642H1000M94 1518H1000"
          stroke="#7193a7"
          strokeWidth="2"
          opacity=".3"
        />
        <g
          transform={`translate(637 1103) scale(${size}) translate(-637 -1103)`}
        >
          <path
            d="M752 1190 1085 904 1189 1227 1050 1450 717 1406 658 1335Z"
            fill="#1d3444"
            stroke="#102638"
            strokeWidth="15"
          />
          <path
            d="M649 1283 737 1191 926 1105 1096 1105 1107 1293 726 1383Z"
            fill={`url(#${id}-metal)`}
            stroke="#233e4e"
            strokeWidth="10"
          />
          <path
            d="M695 1280 738 1229 932 1158 1070 1153"
            fill="none"
            stroke="#a5bdc5"
            strokeWidth="6"
            opacity=".72"
          />
          <path
            d="M586 750 886 662 1040 750 1108 950 953 984 713 1042 599 985Z"
            fill="#425e70"
            stroke="#172f42"
            strokeWidth="13"
          />
          <path
            d="M586 750 881 655 1020 736 697 834Z"
            fill={`url(#${id}-metal)`}
          />
          <path d="M587 753 699 835 702 1020 595 974Z" fill="#35566c" />
          <path
            d="M720 858 911 808 927 878 740 934Z"
            fill="#738e9b"
            stroke="#344f63"
            strokeWidth="8"
          />
          <path d="M720 862 772 849 793 902 740 920Z" fill="#a0afb7" />
          <circle
            cx="825"
            cy="899"
            r="70"
            fill="#344e60"
            stroke="#8aa4af"
            strokeWidth="9"
          />
          <circle
            cx="825"
            cy="899"
            r="40"
            fill="#567482"
            stroke="#213d52"
            strokeWidth="10"
          />
          <path
            d="M823 867 851 883 851 914 823 931 797 913 797 883Z"
            fill="#9bb1b8"
          />
          <path
            d="M824 899 1020 820"
            stroke="#1c394a"
            strokeWidth="52"
            strokeLinecap="round"
          />
          <path
            d="M831 892 998 827"
            stroke="#718f9f"
            strokeWidth="30"
            strokeLinecap="round"
          />
          <path
            d="M732 1035 904 998 984 1030 883 1140 750 1186 726 1141Z"
            fill={`url(#${id}-pinch)`}
            stroke="#f9b44f"
            strokeWidth="8"
            opacity={intense * (0.65 + identify * 0.35)}
          />
          <g
            opacity={ghost * (1 - 0.39 * retract)}
            transform={`translate(0 ${70 * ghost})`}
          >
            <path
              d="M602 959 718 1010 980 948 1079 904"
              fill="none"
              stroke="#f9b44f"
              strokeDasharray="15 12"
              strokeWidth="8"
              strokeLinecap="round"
            />
            <path
              d="M828 965V1051M810 1031 828 1050 845 1026"
              fill="none"
              stroke="#ffd495"
              strokeWidth="8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <circle
            cx="787"
            cy="1118"
            r={124 + 12 * (1 - identify)}
            fill="none"
            stroke="#ffd184"
            strokeWidth="5"
            strokeDasharray="12 13"
            opacity={identify * 0.9}
          />
          <path
            d="M716 1218 610 1350H515"
            stroke="#ffd184"
            strokeWidth="5"
            fill="none"
            opacity={identify}
          />
          <circle cx="515" cy="1350" r="7" fill="#ffd184" opacity={identify} />
          <g
            transform={`translate(${361 - 305 * retract} ${1172 + 114 * retract}) rotate(${-6 + 13 * retract})`}
          >
            <path
              d="M-579-86-182-70 20-49 36 32-154 87-569 156Z"
              fill="#c47146"
              stroke="#132a3a"
              strokeWidth="9"
            />
            <path d="M-128-61-94-58-86 68-122 77Z" fill="#bed2c9" />
            <path
              d="M-45-58 30-50 41 38-41 57Z"
              fill="#3a5468"
              stroke="#253f52"
              strokeWidth="6"
            />
            <OpenHand transform="translate(3 0) scale(1.06)" />
          </g>
        </g>
      </Artwork>
      {frame < 211 ? (
        <Keyword
          lines={["ENERGI", "TERSIMPAN"]}
          y={192}
          progress={rise(frame, 10, 35)}
        />
      ) : (
        <Keyword
          lines={["TITIK JEPIT"]}
          y={206}
          progress={rise(frame, 211, 232)}
        />
      )}
    </AbsoluteFill>
  );
};
