import { useId } from "react";

export const skin = {
  light: "#e4ad86",
  base: "#c98d6b",
  shadow: "#9a5c49",
  outline: "#6b413b",
};

export const OpenHand = ({
  transform,
  bare = false,
}: {
  readonly transform?: string;
  readonly bare?: boolean;
}) => {
  const id = useId();
  const body = bare ? skin.base : "#334858";
  const highlight = bare ? skin.light : "#718595";
  const shadow = bare ? skin.shadow : "#233542";
  const outline = bare ? skin.outline : "#152a39";

  return (
    <g transform={transform}>
      <defs>
        <linearGradient id={`${id}-hand`} x2=".65" y2="1">
          <stop stopColor={highlight} />
          <stop offset=".53" stopColor={body} />
          <stop offset="1" stopColor={shadow} />
        </linearGradient>
      </defs>
      <path
        d="M-3-30 43-35Q61-39 75-60L102-89Q113-101 125-94Q139-86 128-71L109-42Q118-38 139-45L241-66Q258-69 264-57Q269-45 251-39L155-16 266-32Q282-34 286-22Q289-10 271-6L163 16 254 9Q269 8 272 19Q275 31 259 35L155 49 218 52Q232 53 233 65Q233 77 217 77L132 75Q104 77 82 65Q62 54 39 39L-3 34Z"
        fill={`url(#${id}-hand)`}
        stroke={outline}
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <path
        d="M27-19Q61-23 83-44L113-75M57 11Q94 34 136 30M95 53Q115 62 146 62"
        fill="none"
        stroke={highlight}
        strokeWidth="4"
        strokeLinecap="round"
        opacity=".7"
      />
      <path
        d="M167-33 180-21M177 0 188 12M177 29 186 40M166 56 176 67"
        fill="none"
        stroke={outline}
        strokeWidth="3"
        strokeLinecap="round"
        opacity=".56"
      />
      {bare ? (
        <path
          d="M235-56 248-59Q255-60 257-53L241-48ZM259-23 271-25Q278-26 280-20L265-15ZM246 17 257 16Q265 15 265 21L250 25ZM208 57 219 58Q226 58 226 64L211 66Z"
          fill="#f2bea0"
          opacity=".72"
        />
      ) : (
        <>
          <path
            d="M54-22 78-42 117-34 140-6 130 34 100 41 63 21Z"
            fill="#526b7b"
            stroke="#243b48"
            strokeWidth="4"
          />
          <path
            d="M76-34 118-24 130-7 122 20 103 27 77 13 64-6Z"
            fill="#718696"
          />
          <path
            d="M147-33 211-48 214-38 153-22ZM156-1 225-16 229-5 159 10ZM158 28 216 21 218 31 158 40ZM149 58 194 59V68L148 67Z"
            fill="#6a8493"
          />
          <path
            d="M61-8 83 13 113 18M85-24 108-19 122-5"
            stroke="#9bb0b7"
            strokeWidth="2"
            fill="none"
            opacity=".7"
          />
          <path
            d="M-5-34 34-36 41 40-4 36Z"
            fill="#1c3447"
            stroke="#102738"
            strokeWidth="4"
          />
          <path d="M4-26 21-28 27 31 11 30Z" fill="#bd7950" />
        </>
      )}
    </g>
  );
};

export const ClosedGlove = ({ transform }: { readonly transform?: string }) => (
  <g transform={transform}>
    <path
      d="M-3-32 41-32Q60-47 85-45L126-27Q151-27 161-8L167 13Q166 34 145 44L102 55Q77 54 52 43L-3 34Z"
      fill="#425a6b"
      stroke="#1b3140"
      strokeWidth="5"
      strokeLinejoin="round"
    />
    <path
      d="M49-29Q73-45 106-29L137-12 136 7 110 20 72 10 54-4Z"
      fill="#778e9a"
      stroke="#2f4959"
      strokeWidth="4"
    />
    <path
      d="M78 14 92 36M103 13 119 33M126 3 144 21"
      stroke="#233b4a"
      strokeWidth="6"
      strokeLinecap="round"
    />
    <path
      d="M86 29Q96 15 114 14L145 7Q160 8 159 20L149 33 101 48Z"
      fill="#576f7f"
      stroke="#263d4b"
      strokeWidth="4"
    />
    <path
      d="M-4-35H34V39H-4Z"
      fill="#263d4e"
      stroke="#192e3d"
      strokeWidth="4"
    />
    <path d="M7-29H18V32H7Z" fill="#d18b56" />
  </g>
);

export const CrewHead = ({
  transform,
  helmet = true,
  complexion = "warm",
}: {
  readonly transform?: string;
  readonly helmet?: boolean;
  readonly complexion?: "warm" | "deep";
}) => {
  const face = complexion === "warm" ? skin.base : "#9e654d";
  const light = complexion === "warm" ? skin.light : "#bd8669";
  const shade = complexion === "warm" ? skin.shadow : "#754936";

  return (
    <g transform={transform}>
      <path d="M78 115 134 112 145 182Q117 205 73 172Z" fill={shade} />
      <path
        d="M47 54Q57 20 109 22Q148 20 165 61L169 86 184 110Q188 116 173 122L169 150Q156 169 133 170L107 160 77 145 60 121 42 109 39 86Z"
        fill={face}
        stroke="#31404b"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <path
        d="M108 33Q148 30 155 60L163 91 175 113 162 118 159 143 140 155 112 148 100 132 110 118 98 101Z"
        fill={light}
      />
      <path
        d="M40 87Q25 67 45 40 57 14 100 13 145 11 161 34L166 56Q151 54 143 45 107 70 77 62L63 103 56 111 47 93Z"
        fill="#202932"
      />
      <path
        d="M56 41Q93 17 136 31M80 48Q119 34 142 41"
        fill="none"
        stroke="#344652"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M55 98Q47 85 42 92 39 103 45 114 54 126 63 119"
        fill={face}
        stroke={shade}
        strokeWidth="3"
      />
      <path
        d="M49 98Q57 101 56 110M148 131Q157 134 166 131"
        stroke={shade}
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M127 79Q142 74 151 79"
        stroke="#3d3030"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M130 90Q141 86 149 89"
        stroke="#312d2b"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
      <ellipse cx="143" cy="90" rx="4.5" ry="3.8" fill="#222d31" />
      {helmet && (
        <>
          <path
            d="M62 78 56 113 105 161 132 165 149 153"
            fill="none"
            stroke="#223540"
            strokeWidth="5"
            strokeLinejoin="round"
          />
          <path
            d="M33 61Q39 19 65 9 121-13 154 22 169 40 171 59L185 64 190 72 33 77 22 70Z"
            fill="#e5ebe7"
            stroke="#657983"
            strokeWidth="4"
            strokeLinejoin="round"
          />
          <path
            d="M73 11Q112-5 139 21 150 36 155 57L136 58Q128 26 106 22 91 21 73 28Z"
            fill="#f8f5e9"
          />
          <path d="M27 67 182 62 191 71 44 80 24 74Z" fill="#b0c4cb" />
          <path
            d="M61 92 115 84 128 84 154 83 169 88 165 105Q150 115 133 105L126 95 115 97 107 103 74 101Z"
            fill="#b5e1e6"
            fillOpacity=".32"
            stroke="#304e5c"
            strokeWidth="4"
            strokeLinejoin="round"
          />
          <path
            d="M77 94 113 90M136 91 158 89"
            stroke="#daeef0"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
        </>
      )}
    </g>
  );
};

export const Mechanic = ({
  transform,
  gesture = 0,
  lead = true,
  nearArm = true,
}: {
  readonly transform?: string;
  readonly gesture?: number;
  readonly lead?: boolean;
  readonly nearArm?: boolean;
}) => {
  const jacket = lead ? "#c96e3d" : "#b66742";

  return (
    <g transform={transform}>
      <ellipse
        cx="140"
        cy="754"
        rx="152"
        ry="21"
        fill="#0d1d29"
        opacity=".49"
      />
      <path
        d="M60 429 217 430 224 551 203 617 212 719 154 728 130 579 103 649 103 723 43 723 37 639 57 540Z"
        fill="#23394d"
        stroke="#182d3e"
        strokeWidth="6"
      />
      <path
        d="M146 488 213 489 211 542 195 611 204 673 163 679 149 606 130 548Z"
        fill="#344d61"
      />
      <path
        d="M69 485 115 493 96 570 78 619 82 687 52 692 50 633Z"
        fill="#3d5365"
      />
      <path
        d="M164 604 193 599 196 625 169 628ZM49 637 80 636 83 657 48 659Z"
        fill="#506776"
      />
      <path
        d="M40 700 107 698 111 719 138 729 144 747 36 748 29 736Z"
        fill="#a57758"
        stroke="#20323f"
        strokeWidth="6"
      />
      <path
        d="M154 697 213 696 220 721 251 732 255 748 149 750 145 735Z"
        fill="#b0845f"
        stroke="#20323f"
        strokeWidth="6"
      />
      <path
        d="M31 738H141V754H38L30 748ZM148 740H255V754H153L147 748Z"
        fill="#162735"
      />
      <path
        d="M80 164 135 156 175 167 221 190 244 270 230 365 229 464 60 479 30 443 38 341 44 231Z"
        fill={jacket}
        stroke="#1e3546"
        strokeWidth="6"
      />
      <path
        d="M61 172 98 169 117 205 146 193 187 171 215 187 204 217 160 228 127 227 93 215 48 220Z"
        fill="#354e60"
      />
      <path d="M141 228 155 451 214 444 213 243 181 218Z" fill="#e08c53" />
      <path d="M62 214 106 228 95 343 65 416 38 420 47 278Z" fill="#ab593b" />
      <path
        d="M78 223 94 226 92 358 70 359ZM182 224 201 219 211 346 190 354Z"
        fill="#bcc7c1"
      />
      <path d="M40 362 231 344 232 366 39 388Z" fill="#c5c9b9" />
      <path
        d="M139 226 147 447M155 275H185V322H159"
        fill="none"
        stroke="#614e46"
        strokeWidth="4"
      />
      <path d="M77 416 134 413 131 448 73 451Z" fill="#bb693f" />
      <CrewHead
        transform={`translate(35 -11) rotate(${gesture} 113 150)`}
        complexion={lead ? "warm" : "deep"}
      />
      <path
        d="M48 247Q23 248 21 292L19 397 31 414 72 411 86 379 88 271Z"
        fill="#ac6247"
        stroke="#273c49"
        strokeWidth="5"
      />
      <path d="M19 380 77 374 75 395 20 403Z" fill="#a7b8b3" />
      <ClosedGlove transform="translate(36 413) rotate(85) scale(.42)" />
      {nearArm && (
        <>
          <path
            d="M179 214Q224 197 247 250L253 319 239 429 188 421 201 314 177 278Z"
            fill="#cb794c"
            stroke="#344858"
            strokeWidth="5"
          />
          <path
            d="M200 314 252 312 250 334 196 337ZM192 395 245 404 240 424 188 416Z"
            fill="#c7cec1"
          />
          <ClosedGlove transform="translate(214 424) rotate(90) scale(.45)" />
        </>
      )}
    </g>
  );
};

type Point = readonly [number, number];

export const WorkArm = ({
  shoulder,
  elbow,
  wrist,
  hand = true,
  width = 91,
  handAngle,
}: {
  readonly shoulder: Point;
  readonly elbow: Point;
  readonly wrist: Point;
  readonly hand?: boolean;
  readonly width?: number;
  readonly handAngle?: number;
}) => {
  const [x, y] = wrist;
  const angle = (Math.atan2(y - elbow[1], x - elbow[0]) * 180) / Math.PI;
  const beforeElbow = elbow.map(
    (axis, index) => axis + (shoulder[index] - axis) * 0.23,
  );
  const afterElbow = elbow.map(
    (axis, index) => axis + (wrist[index] - axis) * 0.22,
  );
  const sleeve = `M${shoulder.join(" ")} L${beforeElbow.join(" ")} Q${elbow.join(" ")} ${afterElbow.join(" ")} L${wrist.join(" ")}`;

  return (
    <>
      <path
        d={sleeve}
        fill="none"
        stroke="#263c4b"
        strokeWidth={width + 8}
        strokeLinecap="round"
      />
      <path
        d={sleeve}
        fill="none"
        stroke="#cf7848"
        strokeWidth={width}
        strokeLinecap="round"
      />
      <path
        d={sleeve}
        fill="none"
        stroke="#e39358"
        strokeWidth={width * 0.36}
        strokeLinecap="round"
        opacity=".66"
        transform="translate(0 -11)"
      />
      <g
        transform={`translate(${x} ${y}) rotate(${angle}) scale(${width / 91})`}
      >
        <path
          d="M-49-42-30-43-27 43-44 43Z"
          fill="#cad6cc"
          stroke="#7e928d"
          strokeWidth="2"
        />
        <path
          d="M-25-41H4Q17-36 19 0L16 32 4 39H-25Z"
          fill="#354f61"
          stroke="#263d4f"
          strokeWidth="4"
        />
      </g>
      {hand && (
        <OpenHand
          transform={`translate(${x} ${y}) rotate(${handAngle ?? angle}) scale(${width / 194})`}
        />
      )}
    </>
  );
};
