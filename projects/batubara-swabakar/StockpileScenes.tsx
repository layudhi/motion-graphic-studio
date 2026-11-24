import type { FC } from "react";
import { Easing, interpolate, random } from "remotion";

const coalPile =
  "M79 1125L156 1079L209 1014L248 999L297 948L337 930L376 866L405 845L450 766L477 739L517 758L561 749L607 802L651 838L692 901L743 922L789 980L830 1002L858 1044L907 1080L955 1120L979 1159L927 1205L804 1230L642 1249L471 1251L323 1228L180 1192L94 1157Z";

const pileSection =
  "M114 1135L182 1096L235 1052L291 1015L348 969L400 902L453 821L482 797L517 813L565 814L614 859L665 921L715 942L759 998L814 1032L849 1077L904 1114L949 1155L918 1181L828 1202L685 1222L475 1229L330 1207L211 1179Z";

const terrainFacets = [
  [
    "M79 1125L156 1079L209 1014L248 999L297 948L337 930L379 901L348 969L289 1021L210 1124L113 1156Z",
    "#443a30",
  ],
  [
    "M337 930L376 866L405 845L450 766L477 739L493 781L433 855L400 902L348 969Z",
    "#624b37",
  ],
  [
    "M477 739L517 758L561 749L607 802L651 838L692 901L626 874L565 814L517 813L482 797Z",
    "#665240",
  ],
  [
    "M561 749L607 802L651 838L692 901L743 922L789 980L830 1002L858 1044L801 1012L764 981L716 943L665 922L612 861L571 819Z",
    "#35322c",
  ],
  [
    "M79 1125L113 1156L252 1182L330 1207L472 1229L685 1222L829 1202L918 1181L979 1159L927 1205L804 1230L642 1249L471 1251L323 1228L180 1192L94 1157Z",
    "#171715",
  ],
  ["M248 999L297 948L337 930L289 995L258 1027L205 1044L223 1015Z", "#544537"],
  [
    "M294 1092L370 1004L433 937L482 870L548 871L590 914L562 936L477 925L389 1027L321 1103Z",
    "#38332a",
  ],
  [
    "M560 857L612 875L680 956L746 983L801 1084L870 1179L807 1203L775 1120L698 1031L656 1008L608 935Z",
    "#2c2924",
  ],
  [
    "M477 934L561 943L617 994L676 1026L720 1074L728 1184L614 1204L548 1132L445 1100L415 1027Z",
    "#3c342a",
  ],
  [
    "M211 1123L306 1082L391 1097L448 1094L549 1135L588 1217L474 1218L326 1191L256 1178Z",
    "#4e3e2f",
  ],
  [
    "M744 922L788 979L830 1002L858 1044L907 1080L955 1120L979 1159L919 1154L866 1107L803 1078Z",
    "#4d4135",
  ],
];

const contour =
  "M-176 15C-179-22-146-60-91-74C-46-86-41-111 14-100C65-90 73-68 122-69C150-70 180-36 177-9C172 23 203 49 151 71C125 83 93 79 57 93C9 110-28 92-59 88C-101 82-143 82-165 51C-173 39-175 28-176 15Z";

const leftMacroRock =
  "M-53 827L62 704L194 696L301 761L397 782L474 866L511 947L476 1006L486 1069L401 1151L272 1214L114 1182L-53 1118Z";
const upperMacroRock =
  "M535 584L689 506L874 531L1038 625L1142 721L1109 898L990 947L883 930L812 910L764 864L682 846L628 790L572 773L552 689Z";
const lowerMacroRock =
  "M660 1074L733 1008L827 990L906 1006L993 968L1108 1006L1170 1163L1105 1343L973 1430L788 1410L710 1340L641 1303L606 1162Z";

type Point = readonly [number, number];

const oxygenStart: Point = [450, 603];
const oxygenRoute: readonly (readonly [Point, Point, Point])[] = [
  [
    [465, 674],
    [458, 719],
    [506, 763],
  ],
  [
    [543, 807],
    [526, 829],
    [543, 861],
  ],
  [
    [576, 914],
    [602, 941],
    [511, 977],
  ],
];
const oxygenPath = `M${oxygenStart.join(" ")}${oxygenRoute.map((curve) => `C${curve.map((point) => point.join(" ")).join(" ")}`).join("")}`;

const oxygenPosition = (progress: number): Point => {
  const segmentPosition =
    Math.min(1, Math.max(0, progress)) * oxygenRoute.length;
  const segmentIndex = Math.min(
    Math.floor(segmentPosition),
    oxygenRoute.length - 1,
  );
  const t = segmentPosition - segmentIndex;
  const inverse = 1 - t;
  const start =
    segmentIndex === 0 ? oxygenStart : oxygenRoute[segmentIndex - 1][2];
  const [controlOne, controlTwo, end] = oxygenRoute[segmentIndex];

  return [
    inverse ** 3 * start[0] +
      3 * inverse ** 2 * t * controlOne[0] +
      3 * inverse * t ** 2 * controlTwo[0] +
      t ** 3 * end[0],
    inverse ** 3 * start[1] +
      3 * inverse ** 2 * t * controlOne[1] +
      3 * inverse * t ** 2 * controlTwo[1] +
      t ** 3 * end[1],
  ];
};

const cool = "#88cfc8";
const amber = "#f5a33b";
const easing = Easing.bezier(0.33, 0.0, 0.26, 1.0);

const animate = (frame: number, frames: number[], values: number[]) =>
  interpolate(frame, frames, values, {
    easing,
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

const chipPalette = [
  "#6c5740",
  "#8b775d",
  "#1b1b18",
  "#312f27",
  "#715d4c",
  "#171715",
];

const coalChips = Array.from({ length: 160 }, (_, index) => {
  const x = 74 + random(`coal-x-${index}`) * 930;
  const y = 741 + random(`coal-y-${index}`) * 521;
  const size = 3 + random(`coal-size-${index}`) * 21;
  const color = chipPalette[index % chipPalette.length];

  return (
    <path
      key={index}
      d={`M${x} ${y}l${size * 0.8} ${-size * 0.48} ${size} ${size * 0.36} ${-size * 0.56} ${size * 0.44}Z`}
      fill={color}
      opacity={0.32 + random(`coal-opacity-${index}`) * 0.3}
    />
  );
});

const sectionChips = Array.from({ length: 134 }, (_, index) => {
  const x = 108 + random(`cutaway-x-${index}`) * 840;
  const y = 807 + random(`cutaway-y-${index}`) * 428;
  const size = 6 + random(`cutaway-size-${index}`) * 34;

  return (
    <path
      key={index}
      d={`M${x} ${y}l${size * 0.91} ${-size * 0.42} ${size * 0.78} ${size * 0.24} ${-size * 0.31} ${size * 0.56} ${-size * 0.83} ${size * 0.16}Z`}
      fill={chipPalette[index % chipPalette.length]}
      opacity={0.35}
    />
  );
});

const Valley: FC<{ frame: number }> = ({ frame }) => (
  <g
    transform={`translate(${animate(frame, [0, 289, 681, 1037], [0, -17, -23, -41])} 0)`}
  >
    <ellipse cx={507} cy={926} rx={716} ry={501} fill="url(#sp-valley-glow)" />
    <path
      d="M-88 883V748L56 747L160 687L234 687L303 644L388 644L459 676L574 676L644 719L746 713L826 667L920 678L1010 643L1167 638V930Z"
      fill="#3a2d26"
      opacity={0.63}
    />
    <path
      d="M-86 973V837L59 834L149 788L253 782L322 746L393 746L444 713L533 715L602 760L678 765L762 792L862 784L962 730L1176 725V942L1066 963L920 960L828 993L571 971L479 996L316 995L191 972Z"
      fill="#4f3d2f"
      opacity={0.74}
    />
    <path
      d="M-93 938L45 929L105 890L202 881L256 849L385 846L445 823L592 840L700 864L796 856L890 828L984 815L1151 826V1019L996 1055L826 1027L632 1061L536 1049L411 1082L183 1044L-96 1041Z"
      fill="#392e25"
    />
    <g fill="none" stroke="#917354" strokeWidth={3} opacity={0.36}>
      <path d="M-35 770L63 771L161 712L241 712L309 665L381 665" />
      <path d="M-40 863L68 861L155 813L264 808L330 773L399 774L452 747L507 748" />
      <path d="M-32 953L69 944L118 912L213 902L266 869L384 868M685 891L797 882L894 852L991 840L1156 850" />
      <path d="M555 763L607 788L678 792L761 818L867 809L964 754L1148 748" />
    </g>
    <path
      d="M-97 1112C147 1035 378 1069 537 1083C726 1111 861 1047 1142 1059V1454H-97Z"
      fill="url(#sp-ground)"
    />
    <path
      d="M-92 1237C190 1184 324 1292 513 1312C732 1329 900 1285 1150 1216M-64 1288C160 1252 283 1333 493 1361C728 1385 963 1326 1146 1271"
      fill="none"
      stroke="#987756"
      strokeWidth={4}
      opacity={0.38}
    />
    <path
      d="M-116 1183C97 1133 314 1167 453 1202C658 1255 864 1203 1153 1129L1154 1190C903 1246 715 1307 480 1248C258 1191 61 1187-116 1235Z"
      fill="#302820"
      opacity={0.84}
    />
  </g>
);

const HeatContours: FC<{
  x: number;
  y: number;
  scale: number;
  intensity: number;
  frame: number;
}> = ({ x, y, scale, intensity, frame }) => (
  <g transform={`translate(${x} ${y}) scale(${scale})`} opacity={intensity}>
    <ellipse rx={210} ry={140} fill="url(#sp-heat-glow)" />
    {[1.0, 0.79, 0.57, 0.35, 0.17].map((ring, index) => (
      <path
        key={ring}
        d={contour}
        transform={`rotate(${index * 9 - 8}) scale(${ring * (1 + 0.025 * Math.sin(frame / 19 + index))})`}
        fill={index >= 3 ? "#fdb151" : "#a54b28"}
        fillOpacity={index === 4 ? 0.64 : 0.15}
        stroke={index > 2 ? "#ffc377" : amber}
        strokeWidth={index >= 3 ? 7 : 2.8}
        strokeOpacity={0.45 + index * 0.09}
      />
    ))}
    <circle r={8} cx={3} cy={-1} fill="#ffe2ae" opacity={0.76} />
  </g>
);

const CrossSection: FC<{
  frame: number;
  reveal: number;
  heatSize: number;
  heatIntensity: number;
}> = ({ frame, reveal, heatSize, heatIntensity }) => (
  <g>
    <clipPath id="sp-section-reveal">
      <ellipse cx={519} cy={994} rx={498 * reveal} ry={335 * reveal} />
    </clipPath>
    <g clipPath="url(#sp-section-reveal)">
      <path d={pileSection} fill="url(#sp-section-fill)" />
      <g clipPath="url(#sp-cutaway-clip)">
        <path
          d="M101 1165L276 1136L339 1077L410 1054L462 997L560 960L671 994L752 1091L941 1163M124 1216L321 1180L400 1130L479 1139L577 1228M375 959L463 922L557 917L651 975L734 992L847 1122M422 857L500 879L552 864L615 927"
          fill="none"
          stroke="#807055"
          strokeWidth={6}
          opacity={0.17}
        />
        {sectionChips}
        <HeatContours
          x={519}
          y={994}
          frame={frame}
          scale={heatSize}
          intensity={heatIntensity}
        />
      </g>
      <path
        d={pileSection}
        fill="none"
        stroke="#af8253"
        strokeWidth={4}
        opacity={0.6}
      />
    </g>
  </g>
);

const HeightAndVentilation: FC<{ frame: number }> = ({ frame }) => {
  const visibility = animate(frame, [706, 747, 881, 924], [0, 1, 1, 0]);

  return (
    <g opacity={visibility}>
      <g fill="none" stroke="#e0c09a" opacity={0.68}>
        <path
          d="M811 778H895M917 778H940V1165H917M940 1165H895"
          strokeWidth={3}
        />
        <path d="M940 805V1136" strokeWidth={3} strokeDasharray="3 13" />
        <path
          d="M924 790L940 778L956 790M924 1153L940 1165L956 1153"
          strokeWidth={4}
        />
      </g>
      <g fill="none" strokeWidth={4.2} strokeLinecap="round" opacity={0.84}>
        <path
          d="M98 986C161 993 200 1030 256 1063"
          stroke={cool}
          markerEnd="url(#sp-cool-arrow)"
        />
        <path
          d="M870 947C803 963 781 1010 734 1042"
          stroke={cool}
          markerEnd="url(#sp-cool-arrow)"
        />
        <path
          d="M426 977C393 945 381 896 360 831"
          stroke="#edb27a"
          strokeDasharray="10 11"
          strokeDashoffset={-(frame - 706) / 3}
          markerEnd="url(#sp-warm-arrow)"
        />
        <path
          d="M577 944C617 912 615 852 610 770"
          stroke="#edb27a"
          strokeDasharray="10 11"
          strokeDashoffset={-(frame - 706) / 3}
          markerEnd="url(#sp-warm-arrow)"
        />
      </g>
    </g>
  );
};

const Smolder: FC<{ frame: number }> = ({ frame }) => {
  const visibility = animate(frame, [1004, 1016, 1037], [0, 0.61, 0.92]);

  return (
    <g opacity={visibility} clipPath="url(#sp-cutaway-clip)">
      <g transform="translate(519 994)">
        <path
          d="M-37 12L-10-11L11-8L19 4L36 1L43 12L19 20L3 13L-21 18Z"
          fill="#fdb854"
        />
        <path d="M-26 13L-11-7L1 0L22 12L13 21L-3 18L-12 22Z" fill="#ff8140" />
        <path d="M-15 10L-4 3L11 13L7 17L-3 14Z" fill="#fff0c1" />
        <path
          d="M-6-6C-32-26-25-42-12-54C-4-66-17-79-23-83M15-5C-2-33 28-37 26-53"
          fill="none"
          stroke="#b7aa94"
          strokeWidth={11}
          strokeLinecap="round"
          opacity={0.22 + 0.08 * Math.sin(frame / 9)}
        />
      </g>
    </g>
  );
};

const PileArtwork: FC<{ frame: number }> = ({ frame }) => {
  const zoom = animate(
    frame,
    [0, 28, 89, 178, 291, 364, 473, 681, 741, 930, 1037],
    [0.91, 0.95, 1.36, 0.93, 1.01, 1.16, 1.78, 1.53, 0.94, 1.14, 1.59],
  );
  const reveal = animate(
    frame,
    [26, 86, 179, 369, 679, 745],
    [0, 0.75, 0.75, 1.13, 1.13, 1.27],
  );
  const heatSize = animate(
    frame,
    [44, 91, 291, 474, 681, 767, 930, 1037],
    [0.31, 0.69, 0.61, 0.7, 0.63, 0.82, 1.08, 1.27],
  );
  const intensity = animate(
    frame,
    [45, 85, 228, 289, 681, 878, 1037],
    [0, 0.78, 0.58, 0.78, 0.78, 1, 1],
  );
  const siteLight = animate(
    frame,
    [90, 191, 237, 295, 475, 681, 746, 962],
    [1, 1, 0.61, 0.88, 0.8, 0.8, 1, 0.73],
  );

  return (
    <>
      <g opacity={siteLight}>
        <Valley frame={frame} />
      </g>
      <g transform={`translate(504 978) scale(${zoom}) translate(-519 -994)`}>
        <ellipse
          cx={525}
          cy={1205}
          rx={501}
          ry={84}
          fill="url(#sp-contact-shadow)"
        />
        <path
          d={coalPile}
          fill="url(#sp-pile-base)"
          stroke="#8c6c4d"
          strokeWidth={4}
        />
        <g clipPath="url(#sp-pile-clip)">
          {terrainFacets.map(([path, fill]) => (
            <path key={path} d={path} fill={fill} />
          ))}
          {coalChips}
          <path
            d="M175 1097L215 1060L261 1047L313 990L372 958L426 872L484 787M606 854L666 893L708 944L774 983L850 1071L915 1106"
            fill="none"
            stroke="#a98a62"
            strokeWidth={3}
            opacity={0.53}
          />
        </g>
        <CrossSection
          frame={frame}
          reveal={reveal}
          heatSize={heatSize}
          heatIntensity={intensity}
        />
        {frame >= 706 && frame < 924 ? (
          <HeightAndVentilation frame={frame} />
        ) : null}
        {frame >= 1004 ? <Smolder frame={frame} /> : null}
      </g>
    </>
  );
};

const MacroRocks: FC = () => (
  <>
    <g fill="url(#sp-macro-rock)" stroke="#8c745a" strokeWidth={4}>
      <path d={leftMacroRock} />
      <path d={upperMacroRock} />
      <path d={lowerMacroRock} />
    </g>
    <g
      stroke="#a59173"
      strokeOpacity={0.28}
      strokeWidth={3}
      strokeLinejoin="round"
    >
      <path
        d="M-53 827L62 704L194 696L301 761L253 826L119 840L30 930L-53 926Z"
        fill="#554738"
      />
      <path
        d="M30 930L119 840L253 826L340 865L323 942L221 983L102 1012Z"
        fill="#373129"
      />
      <path
        d="M301 761L397 782L474 866L511 947L433 925L340 865L253 826Z"
        fill="#6c5741"
      />
      <path
        d="M340 865L433 925L511 947L476 1006L486 1069L394 1101L307 1045L323 942Z"
        fill="#464036"
      />
      <path
        d="M221 983L323 942L307 1045L394 1101L401 1151L272 1214L218 1109L102 1012Z"
        fill="#292822"
      />
      <path
        d="M535 584L689 506L874 531L1038 625L958 680L818 627L701 638L599 692L552 689Z"
        fill="#514032"
      />
      <path
        d="M599 692L701 638L818 627L958 680L898 767L812 772L721 718Z"
        fill="#60503a"
      />
      <path
        d="M552 689L599 692L721 718L812 772L764 864L682 846L628 790L572 773Z"
        fill="#453a2d"
      />
      <path
        d="M812 772L898 767L958 680L1038 625L1142 721L1109 898L990 947L883 930L812 910L764 864Z"
        fill="#2e2b24"
      />
      <path
        d="M660 1074L733 1008L827 990L906 1006L993 968L1108 1006L1065 1095L938 1094L854 1155L732 1136Z"
        fill="#61503e"
      />
      <path
        d="M732 1136L854 1155L938 1094L1065 1095L1023 1240L918 1273L822 1231L731 1254L641 1303L606 1162L660 1074Z"
        fill="#3e352b"
      />
      <path
        d="M641 1303L731 1254L822 1231L918 1273L1023 1240L1105 1343L973 1430L788 1410L710 1340Z"
        fill="#302923"
      />
    </g>
    <g fill="none" stroke="#c8a16d" strokeWidth={2.7} opacity={0.38}>
      <path d="M7 811L70 771L162 763L222 789M31 963L112 931L154 945L257 891L315 903M259 1127L317 1096L368 1117L410 1082" />
      <path d="M594 604L681 562L774 584M674 793L735 800L767 824M885 825L957 804L1012 827L1080 769" />
      <path d="M680 1127L752 1063L816 1051L876 1074M885 1151L969 1123L1009 1133M705 1238L755 1209L804 1207L846 1220" />
    </g>
  </>
);

const OxygenFlow: FC<{ frame: number }> = ({ frame }) => {
  const visibility = animate(frame, [514, 548, 642, 665], [0, 1, 1, 0]);
  const draw = animate(frame, [526, 600], [0, 1]);
  const molecule = animate(frame, [535, 596, 651], [0, 0.92, 1.34]);

  return (
    <g opacity={visibility}>
      <path
        d={oxygenPath}
        fill="none"
        stroke={cool}
        strokeWidth={4}
        strokeOpacity={0.65}
        strokeDasharray={`${draw} 1`}
        pathLength={1}
        markerEnd={draw >= 0.97 ? "url(#sp-cool-arrow)" : undefined}
      />
      {[0, 0.17, 0.34].map((offset) => {
        const progress = molecule - offset;
        const [x, y] = oxygenPosition(progress);

        return (
          <circle
            key={offset}
            cx={x}
            cy={y}
            r={5}
            fill="#bcfaf0"
            opacity={animate(progress, [0, 0.12, 0.93, 1], [0, 1, 1, 0])}
          />
        );
      })}
      <g
        opacity={animate(frame, [550, 571, 612, 643], [0, 1, 1, 0])}
        transform="translate(524 796)"
      >
        <circle r={37} fill="#243733" stroke={cool} strokeWidth={2.4} />
        <text
          x={0}
          y={0}
          textAnchor="middle"
          dominantBaseline="central"
          fill="#d9eee7"
          fontFamily="sans-serif"
          fontSize={28}
          fontWeight={700}
        >
          O₂
        </text>
      </g>
    </g>
  );
};

const MacroArtwork: FC<{ frame: number; opacity: number }> = ({
  frame,
  opacity,
}) => {
  const warmth = animate(frame, [573, 603, 649], [0, 0.63, 0.98]);
  const zoom = animate(frame, [466, 526, 654, 697], [0.95, 1.01, 1.06, 1.12]);

  return (
    <g opacity={opacity}>
      <ellipse
        cx={549}
        cy={918}
        rx={648}
        ry={556}
        fill="url(#sp-macro-ambient)"
      />
      <g transform={`translate(504 979) scale(${zoom}) translate(-504 -979)`}>
        <MacroRocks />
        <HeatContours
          x={504}
          y={981}
          frame={frame}
          scale={animate(frame, [573, 659], [0.13, 0.66])}
          intensity={warmth}
        />
        <OxygenFlow frame={frame} />
      </g>
    </g>
  );
};

const HeatTrend: FC<{ frame: number }> = ({ frame }) => {
  const visibility = animate(frame, [779, 805, 898, 928], [0, 1, 1, 0]);
  const advance = animate(frame, [782, 916], [0, 1]);

  return (
    <g transform="translate(721 1205)" opacity={visibility}>
      <rect
        width={185}
        height={106}
        rx={18}
        fill="#211c17"
        stroke="#ab845c"
        strokeWidth={2}
      />
      <path
        d="M22 22V82H162M22 63H162M22 43H162"
        fill="none"
        stroke="#9e866d"
        strokeOpacity={0.32}
        strokeWidth={2}
      />
      <path
        d="M28 74L54 70L79 66L104 51L123 46L153 27"
        fill="none"
        stroke={amber}
        strokeWidth={5}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray={`${advance} 1`}
        pathLength={1}
      />
      <circle
        cx={153}
        cy={27}
        r={6}
        fill="#ffce89"
        opacity={animate(frame, [888, 914], [0, 1])}
      />
    </g>
  );
};

export const StockpileScenes: FC<{ frame: number }> = ({ frame }) => {
  const macroOpacity = animate(frame, [462, 487, 669, 699], [0, 1, 1, 0]);

  return (
    <svg
      width={1080}
      height={1920}
      viewBox="0 0 1080 1920"
      style={{ position: "absolute", inset: 0 }}
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="sp-valley-glow">
          <stop stopColor="#806449" stopOpacity={0.47} />
          <stop offset={0.62} stopColor="#493326" stopOpacity={0.31} />
          <stop offset={1} stopColor="#3b2a20" stopOpacity={0} />
        </radialGradient>
        <radialGradient id="sp-contact-shadow">
          <stop stopColor="#141311" stopOpacity={0.94} />
          <stop offset={1} stopColor="#141311" stopOpacity={0} />
        </radialGradient>
        <radialGradient id="sp-heat-glow">
          <stop stopColor="#ffac46" stopOpacity={0.85} />
          <stop offset={0.37} stopColor="#df6b2d" stopOpacity={0.61} />
          <stop offset={0.7} stopColor="#a64b29" stopOpacity={0.33} />
          <stop offset={1} stopColor="#a64b29" stopOpacity={0} />
        </radialGradient>
        <radialGradient id="sp-macro-ambient">
          <stop stopColor="#493d2a" stopOpacity={0.8} />
          <stop offset={0.67} stopColor="#382f24" stopOpacity={0.59} />
          <stop offset={1} stopColor="#271f19" stopOpacity={0} />
        </radialGradient>
        <linearGradient
          id="sp-ground"
          x2={0}
          y2={1}
          gradientUnits="objectBoundingBox"
        >
          <stop stopColor="#473729" />
          <stop offset={0.69} stopColor="#2b211a" />
          <stop offset={1} stopColor="#281f19" stopOpacity={0.12} />
        </linearGradient>
        <linearGradient id="sp-pile-base" x1={0} y1={0} x2={1} y2={1}>
          <stop stopColor="#4e4134" />
          <stop offset={1} stopColor="#27231d" />
        </linearGradient>
        <linearGradient id="sp-section-fill" x1={0} y1={0} x2={1} y2={1}>
          <stop stopColor="#423829" />
          <stop offset={0.53} stopColor="#27231d" />
          <stop offset={1} stopColor="#343024" />
        </linearGradient>
        <linearGradient id="sp-macro-rock" x1={0} y1={0} x2={1} y2={1}>
          <stop stopColor="#66513c" />
          <stop offset={1} stopColor="#22221c" />
        </linearGradient>
        <linearGradient
          id="sp-art-visibility"
          x1={0}
          x2={0}
          y1={430}
          y2={1470}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity={0} />
          <stop offset={0.16} stopColor="#fff" />
          <stop offset={0.82} stopColor="#fff" />
          <stop offset={1} stopColor="#fff" stopOpacity={0} />
        </linearGradient>
        <mask
          id="sp-view-mask"
          maskUnits="userSpaceOnUse"
          x={0}
          y={0}
          width={1080}
          height={1920}
        >
          <rect width={1080} height={1920} fill="url(#sp-art-visibility)" />
        </mask>
        <clipPath id="sp-pile-clip">
          <path d={coalPile} />
        </clipPath>
        <clipPath id="sp-cutaway-clip">
          <path d={pileSection} />
        </clipPath>
        <marker
          id="sp-cool-arrow"
          markerWidth={5}
          markerHeight={5}
          refX={4}
          refY={2.5}
          orient="auto"
        >
          <path d="M0 0L5 2.5L0 5Z" fill={cool} />
        </marker>
        <marker
          id="sp-warm-arrow"
          markerWidth={5}
          markerHeight={5}
          refX={4}
          refY={2.5}
          orient="auto"
        >
          <path d="M0 0L5 2.5L0 5Z" fill="#edb27a" />
        </marker>
      </defs>
      <g mask="url(#sp-view-mask)">
        {macroOpacity < 1 ? (
          <g opacity={1 - macroOpacity}>
            <PileArtwork frame={frame} />
          </g>
        ) : null}
        {macroOpacity > 0 ? (
          <MacroArtwork frame={frame} opacity={macroOpacity} />
        ) : null}
        {frame >= 779 && frame < 928 ? <HeatTrend frame={frame} /> : null}
      </g>
    </svg>
  );
};
