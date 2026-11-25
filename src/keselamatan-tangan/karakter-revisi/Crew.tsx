import { useId } from "react";
import { RevisedGrip, RevisedHand } from "./Hands";

type Point = readonly [number, number];

type ArmProps = {
  readonly shoulder: Point;
  readonly elbow: Point;
  readonly wrist: Point;
  readonly hand?: boolean;
  readonly width?: number;
  readonly handAngle?: number;
};

const along = (start: Point, end: Point, fraction: number): Point => [
  start[0] + (end[0] - start[0]) * fraction,
  start[1] + (end[1] - start[1]) * fraction,
];

const offset = (point: Point, normal: Point, length: number) =>
  `${point[0] + normal[0] * length} ${point[1] + normal[1] * length}`;

export const RevisedArm = ({
  shoulder,
  elbow,
  wrist,
  hand = true,
  width = 91,
  handAngle,
}: ArmProps) => {
  const id = useId();
  const upper = Math.atan2(elbow[1] - shoulder[1], elbow[0] - shoulder[0]);
  const lower = Math.atan2(wrist[1] - elbow[1], wrist[0] - elbow[0]);
  const upperNormal: Point = [-Math.sin(upper), Math.cos(upper)];
  const lowerNormal: Point = [-Math.sin(lower), Math.cos(lower)];
  const upperEdge = along(elbow, shoulder, 0.19);
  const lowerEdge = along(elbow, wrist, 0.18);
  const elbowForm: Point = [
    (upperNormal[0] + lowerNormal[0]) / 2,
    (upperNormal[1] + lowerNormal[1]) / 2,
  ];
  const top = width * 0.47;
  const joint = width * 0.345;
  const cuff = width * 0.245;
  const stroke = `M${offset(shoulder, upperNormal, top)}
    L${offset(upperEdge, upperNormal, joint)}
    Q${offset(elbow, elbowForm, joint)} ${offset(lowerEdge, lowerNormal, joint)}
    L${offset(wrist, lowerNormal, cuff)} L${offset(wrist, lowerNormal, -cuff)}
    L${offset(lowerEdge, lowerNormal, -joint)}
    Q${offset(elbow, elbowForm, -joint)} ${offset(upperEdge, upperNormal, -joint)}
    L${offset(shoulder, upperNormal, -top)}
    Q${shoulder[0] - Math.cos(upper) * top} ${shoulder[1] - Math.sin(upper) * top} ${offset(shoulder, upperNormal, top)}Z`;
  const angle = (lower * 180) / Math.PI;
  const [x, y] = wrist;

  return (
    <>
      <defs>
        <linearGradient id={`${id}-sleeve`} x2=".88" y2="1">
          <stop stopColor="#587487" />
          <stop offset=".52" stopColor="#3b586d" />
          <stop offset="1" stopColor="#263d53" />
        </linearGradient>
      </defs>
      <path
        d={stroke}
        fill={`url(#${id}-sleeve)`}
        stroke="#1b3040"
        strokeWidth={width * 0.043}
        strokeLinejoin="round"
      />
      <path
        d={`M${offset(shoulder, upperNormal, -top * 0.62)} Q${offset(upperEdge, upperNormal, -joint * 0.76)} ${offset(elbow, elbowForm, -joint * 0.72)} L${offset(along(elbow, wrist, 0.86), lowerNormal, -cuff * 0.83)}`}
        fill="none"
        stroke="#78909d"
        strokeWidth={Math.max(2, width * 0.035)}
        opacity=".6"
        strokeLinecap="round"
      />
      <path
        d={`M${offset(upperEdge, upperNormal, joint * 0.79)} Q${offset(elbow, elbowForm, -0.045 * width)} ${offset(lowerEdge, lowerNormal, joint * 0.64)} M${offset(lowerEdge, lowerNormal, -joint * 0.76)} Q${offset(elbow, elbowForm, -0.14 * width)} ${offset(upperEdge, upperNormal, -joint * 0.38)}`}
        stroke="#264455"
        strokeWidth={width * 0.04}
        opacity=".65"
        strokeLinecap="round"
        fill="none"
      />
      <g
        transform={`translate(${x} ${y}) rotate(${angle}) scale(${width / 91})`}
      >
        <path
          d="M-31-25-18-24-18 25-32 26Z"
          fill="#c5d2ca"
          stroke="#819693"
          strokeWidth="2.1"
        />
        <path
          d="M-17-23 9-22Q15-12 13 2L10 23-17 24Z"
          fill="#243d50"
          stroke="#1c3345"
          strokeWidth="3"
        />
        <path d="M-14-18 7-19" fill="none" stroke="#587787" strokeWidth="2" />
      </g>
      {hand && (
        <RevisedHand
          transform={`translate(${x} ${y}) rotate(${handAngle ?? angle}) scale(${width / 166})`}
        />
      )}
    </>
  );
};

export const RevisedCrewHead = ({
  transform,
  helmet = true,
  complexion = "warm",
  gaze = 0,
  blink = false,
}: {
  readonly transform?: string;
  readonly helmet?: boolean;
  readonly complexion?: "warm" | "deep";
  readonly gaze?: number;
  readonly blink?: boolean;
}) => {
  const id = useId();
  const warm = complexion === "warm";
  const lit = warm ? "#e8b18a" : "#c48c6e";
  const mid = warm ? "#c98c65" : "#a16b52";
  const dark = warm ? "#945c4c" : "#754939";

  return (
    <g transform={transform}>
      <defs>
        <linearGradient id={`${id}-face`} x2=".86" y2=".84">
          <stop stopColor={dark} />
          <stop offset=".51" stopColor={mid} />
          <stop offset="1" stopColor={lit} />
        </linearGradient>
        <linearGradient id={`${id}-hat`} x2=".85" y2=".9">
          <stop stopColor="#fffdf4" />
          <stop offset=".63" stopColor="#ebefea" />
          <stop offset="1" stopColor="#b7c9cb" />
        </linearGradient>
      </defs>
      <path
        d="M74 117Q90 133 124 135L140 170 120 190 71 173Q79 154 74 117Z"
        fill={dark}
        stroke="#55463f"
        strokeWidth="3"
      />
      <path
        d="M85 135 119 147 129 171Q103 176 82 165Z"
        fill={mid}
        opacity=".76"
      />
      <path
        d="M48 67C49 36 74 21 108 20C142 19 164 34 168 62L168 82C170 95 176 102 183 111Q186 119 176 123L168 125C170 134 166 142 161 146Q162 152 156 158Q142 174 122 170C104 167 88 155 77 144Q66 134 60 121L49 107C43 95 45 80 48 67Z"
        fill={`url(#${id}-face)`}
        stroke="#4a4140"
        strokeWidth="3.3"
      />
      <path
        d="M133 54Q154 56 161 76L165 98 173 114 162 123 158 138 152 150Q141 157 123 149L113 137 122 129 114 119 115 100Z"
        fill={lit}
        opacity=".72"
      />
      <path
        d="M62 70Q64 39 111 34 133 36 157 48Q162 53 164 66C152 60 147 57 139 51Q118 66 97 61Q84 66 80 82L68 116 61 110 56 93 48 93 45 77Z"
        fill="#26323a"
      />
      <path
        d="M55 65Q69 31 109 32 136 32 155 43M65 62Q84 42 110 43"
        fill="none"
        stroke="#51636b"
        strokeWidth="3.8"
        strokeLinecap="round"
        opacity=".7"
      />
      <path
        d="M65 104Q60 92 51 95Q42 100 48 115C53 128 60 130 68 122"
        fill={mid}
        stroke={dark}
        strokeWidth="3.1"
      />
      <path
        d="M52 104Q59 102 62 113M166 124Q170 126 173 124M141 140Q149 144 161 137M141 150Q147 153 152 150"
        stroke={dark}
        strokeWidth="2.6"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M131 78Q144 71 155 77"
        stroke="#4a3b37"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
      />
      {blink ? (
        <path
          d="M131 90Q141 94 153 89"
          stroke="#4b3a36"
          strokeWidth="2.6"
          fill="none"
          strokeLinecap="round"
        />
      ) : (
        <>
          <path
            d="M129 89Q140 83 153 88Q143 97 130 92Z"
            fill="#f4e7d6"
            stroke="#63463d"
            strokeWidth="2.4"
          />
          <circle cx={145 + gaze} cy="90" r="4.5" fill="#382e30" />
          <circle cx={146.3 + gaze} cy="88.8" r="1.15" fill="#f4e9db" />
        </>
      )}
      {helmet && (
        <>
          <path
            d="M63 78 54 110Q77 147 118 169L140 167 155 155"
            fill="none"
            stroke="#203645"
            strokeWidth="4.5"
            strokeLinejoin="round"
          />
          <path
            d="M42 60C45 34 59 17 82 10C104 2 126 6 146 16C164 25 175 43 177 62L193 67 195 74C159 81 84 84 34 77L23 73 25 67Z"
            fill={`url(#${id}-hat)`}
            stroke="#5a7583"
            strokeWidth="3.5"
            strokeLinejoin="round"
          />
          <path
            d="M75 16Q100 6 127 13Q149 23 157 41L163 60 150 61Q145 33 128 24Q108 13 91 22L82 47 69 48Z"
            fill="#fbf9ee"
            opacity=".82"
          />
          <path
            d="M28 69Q84 64 136 61L178 63 193 69 193 74Q125 84 33 77Z"
            fill="#d0dde0"
            stroke="#78919c"
            strokeWidth="2"
          />
          <path
            d="M40 71Q113 75 180 67"
            stroke="#f9fbf7"
            strokeWidth="2.5"
            fill="none"
            opacity=".8"
          />
          <path
            d="M57 93 113 87 127 86 155 84 170 88 166 102Q163 108 153 110L137 109Q130 106 128 97L123 95 118 101Q108 106 97 104L74 101Z"
            fill="#c5eced"
            fillOpacity=".21"
            stroke="#2e5362"
            strokeWidth="3.3"
            strokeLinejoin="round"
          />
          <path
            d="M79 93 110 90M138 89 157 87"
            stroke="#dff3ee"
            strokeWidth="2.7"
            strokeLinecap="round"
          />
          <circle
            cx="68"
            cy="154"
            r="2.3"
            fill="#879ba3"
            transform="translate(19 -9)"
          />
        </>
      )}
    </g>
  );
};

export const RevisedMechanic = ({
  transform,
  gesture = 0,
  lead = true,
  nearArm = true,
  lean = 0,
  gaze = 0,
  blink = false,
}: {
  readonly transform?: string;
  readonly gesture?: number;
  readonly lead?: boolean;
  readonly nearArm?: boolean;
  readonly lean?: number;
  readonly gaze?: number;
  readonly blink?: boolean;
}) => {
  const id = useId();

  return (
    <g transform={transform}>
      <defs>
        <linearGradient id={`${id}-pants`} x2=".77" y2="1">
          <stop stopColor="#456174" />
          <stop offset=".53" stopColor="#354d62" />
          <stop offset="1" stopColor="#213a50" />
        </linearGradient>
        <linearGradient id={`${id}-vest`} x2=".94" y2="1">
          <stop stopColor={lead ? "#ef9a56" : "#e88a51"} />
          <stop offset=".56" stopColor={lead ? "#d97c43" : "#c97748"} />
          <stop offset="1" stopColor={lead ? "#ad5239" : "#a65a43"} />
        </linearGradient>
      </defs>
      <ellipse
        cx="137"
        cy="749"
        rx="126"
        ry="15"
        fill="#102533"
        opacity=".49"
      />
      <path
        d="M73 418 198 414 215 456 215 522Q225 579 210 621L216 703 166 712 151 664 153 613 135 551 116 613 112 663 105 712 50 711 48 662 55 590Q56 556 66 524L61 477Z"
        fill={`url(#${id}-pants)`}
        stroke="#192f42"
        strokeWidth="4.4"
        strokeLinejoin="round"
      />
      <path
        d="M80 459 123 458 132 501 108 568Q96 604 84 636L79 702 62 704 63 646 73 590 76 534Z"
        fill="#536d7e"
        opacity=".71"
      />
      <path
        d="M155 465 195 454 204 506 199 567 187 617 194 701 177 704 165 645 169 603 147 524Z"
        fill="#5a7080"
        opacity=".55"
      />
      <path
        d="M132 454 139 516 119 572M188 476 191 524M60 600 100 588M164 604 201 595M64 661 100 665M180 656 206 649"
        stroke="#223c4e"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        opacity=".8"
      />
      <path
        d="M74 494 111 488 119 540 76 549ZM166 482 202 477 207 529 170 528Z"
        fill="#3d586e"
        stroke="#2b4659"
        strokeWidth="3"
      />
      <path
        d="M53 686 105 687 110 708 134 724 137 740 37 742 36 729 45 716ZM163 684 213 685 220 707 243 721 251 738 153 741 152 728 159 712Z"
        fill="#a27b5f"
        stroke="#283d4a"
        strokeWidth="4.3"
      />
      <path
        d="M49 712Q77 706 107 715L125 727 121 735 74 736 45 729ZM160 715Q188 705 214 713L237 727 238 736 194 736 157 730Z"
        fill="#bd9870"
      />
      <path
        d="M56 698 91 696M62 706 97 703M170 696 202 694M175 704 206 701"
        stroke="#d2b28c"
        strokeWidth="2.8"
        strokeLinecap="round"
      />
      <path
        d="M37 733Q90 740 137 731L138 749H37ZM152 733Q201 740 250 730V748L153 749Z"
        fill="#233540"
      />
      <path
        d="M48 743V750M65 743V750M83 743V750M104 742V750M122 740V749M163 743V749M182 744V749M202 744V749M221 743V749M240 740V748"
        stroke="#63717a"
        strokeWidth="2.6"
        opacity=".62"
      />
      <g transform={`rotate(${lean} 137 437)`}>
        <path
          d="M82 174 127 163 176 172Q216 178 230 204L246 265 226 314 221 392 214 448Q144 468 63 451L48 430 45 345 55 234Q57 197 82 174Z"
          fill="#3e596c"
          stroke="#233b4c"
          strokeWidth="4.5"
        />
        <path
          d="M86 178 114 168 133 216 168 180 188 177Q211 185 216 200L207 318 214 423 189 442 144 449 75 444 65 429 76 323 65 248Z"
          fill={`url(#${id}-vest)`}
          stroke="#864e3d"
          strokeWidth="3.5"
        />
        <path
          d="M109 177 132 216 153 184 174 173 159 225 139 247 117 233 94 186Z"
          fill="#334e61"
        />
        <path
          d="M94 180 109 176 119 207 104 329 89 331 100 221Z M175 175 190 178 187 242 193 319 177 322 169 244Z"
          fill="#dce1d5"
          stroke="#a4b0a8"
          strokeWidth="2.5"
        />
        <path
          d="M73 332Q128 339 211 315L211 337Q132 357 71 352Z M70 376Q131 382 211 359L213 377Q133 401 69 395Z"
          fill="#c9d4ca"
          stroke="#9faeaa"
          strokeWidth="2.4"
        />
        <path
          d="M126 240 138 438M75 431Q141 450 207 420"
          stroke="#9a573c"
          strokeWidth="3.4"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M145 264 169 259 172 287 147 294ZM84 403 110 409 106 431 82 426Z"
          fill="#ba6843"
          stroke="#a05c41"
          strokeWidth="2.5"
        />
        <RevisedCrewHead
          transform={`translate(33 -5) rotate(${gesture} 107 157)`}
          complexion={lead ? "warm" : "deep"}
          gaze={gaze}
          blink={blink}
        />
        <RevisedArm
          shoulder={[56, 233]}
          elbow={[37, 325]}
          wrist={[33, 409]}
          width={56}
          hand={false}
        />
        <RevisedGrip transform="translate(33 409) rotate(88) scale(.35)" />
        {nearArm && (
          <>
            <RevisedArm
              shoulder={[211, 219]}
              elbow={[229, 334]}
              wrist={[224, 421]}
              width={68}
              hand={false}
            />
            <RevisedGrip transform="translate(224 421) rotate(90) scale(.4)" />
          </>
        )}
      </g>
    </g>
  );
};
