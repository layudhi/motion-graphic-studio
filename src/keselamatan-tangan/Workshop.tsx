import { useId } from "react";

export const Workshop = ({ depth = 0 }: { readonly depth?: number }) => {
  const id = useId();

  return (
    <>
      <defs>
        <linearGradient
          id={`${id}-wall`}
          x2=".84"
          y2="1"
          gradientUnits="objectBoundingBox"
        >
          <stop stopColor="#152c41" />
          <stop offset=".56" stopColor="#34566c" />
          <stop offset="1" stopColor="#162736" />
        </linearGradient>
        <linearGradient id={`${id}-floor`} x2="0" y2="1">
          <stop stopColor="#3b5869" />
          <stop offset="1" stopColor="#172838" />
        </linearGradient>
        <radialGradient id={`${id}-light`} cx=".61" cy=".45" r=".64">
          <stop stopColor="#c7eafb" stopOpacity=".31" />
          <stop offset="1" stopColor="#c7eafb" stopOpacity="0" />
        </radialGradient>
        <linearGradient id={`${id}-shade`} x2="0" y2="1">
          <stop stopColor="#081722" stopOpacity=".72" />
          <stop offset=".45" stopColor="#081722" stopOpacity="0" />
          <stop offset=".78" stopColor="#081722" stopOpacity="0" />
          <stop offset="1" stopColor="#081722" stopOpacity=".8" />
        </linearGradient>
      </defs>
      <rect
        x="-150"
        y="-100"
        width="1380"
        height="2120"
        fill={`url(#${id}-wall)`}
      />
      <g transform={`translate(${depth} 0)`}>
        <path d="M575 460 1080 570V1208H575Z" fill="#0c2638" />
        <path d="M602 504 1080 602V1134L602 1102Z" fill="#3d6379" />
        <path d="M627 530 1080 622V743L627 686Z" fill="#688fa5" opacity=".64" />
        <path
          d="M627 731 1080 777M627 837 1080 858M627 949 1080 952M627 1058 1080 1046"
          stroke="#284b61"
          strokeWidth="5"
          opacity=".8"
        />
        <path
          d="M802 564V1122M982 603V1131"
          stroke="#22455a"
          strokeWidth="13"
        />
        <path
          d="M627 530 1080 622 1095 666 627 582Z"
          fill="#c4e3f0"
          opacity=".12"
        />
        <path d="M68 658 416 574V1174H68Z" fill="#203b51" />
        <path d="M95 675 390 612V1137H95Z" fill="#314f63" />
        <path
          d="M119 735 364 694M119 827 364 803M119 919 364 912M119 1011 364 1021"
          stroke="#54778a"
          strokeWidth="3"
          opacity=".48"
        />
        <path d="M-112 1170H1100L1270 2030H-165Z" fill={`url(#${id}-floor)`} />
        <path
          d="M570 1171 408 1920M602 1171 875 1920M566 1171-104 1840M654 1171 1200 1578"
          stroke="#8aacbd"
          strokeWidth="4"
          opacity=".14"
        />
        <path
          d="M-60 1322 1130 1322M-60 1510 1130 1510M-60 1755 1130 1755"
          stroke="#8aacbd"
          strokeWidth="4"
          opacity=".14"
        />
        <path
          d="M108 1490 370 1287H381L136 1490ZM800 1369 1014 1603H992L789 1369Z"
          fill="#d8a75d"
          opacity=".35"
        />
        <path
          d="M-40 760 570 442 1120 572V453L559 297-40 575Z"
          fill="#244359"
        />
        <path
          d="M-40 560 556 287 1129 445M557 287V474"
          fill="none"
          stroke="#7796a8"
          strokeWidth="6"
          opacity=".36"
        />
        <path
          d="M-120 531 549 277 1196 438M170 488 577 404 965 475"
          stroke="#11293b"
          strokeWidth="34"
          fill="none"
        />
        <path
          d="M180 492 565 410 957 478"
          stroke="#486c82"
          strokeWidth="5"
          fill="none"
        />
        <path
          d="M262 540 421 503 426 516 267 558ZM687 508 846 536 844 553 684 524Z"
          fill="#dff3f9"
          opacity=".64"
        />
        <path
          d="M480 477 517 468V1196L480 1209ZM1060 579H1085V1195H1059Z"
          fill="#172f41"
        />
        <path
          d="M476 480 484 478V1209H476ZM1054 580H1062V1196H1054Z"
          fill="#4d6c7e"
        />
        <g transform="translate(119 895)" opacity=".8">
          <path
            d="M-9 284V9H204V284M-18 64H216M-18 156H216M-18 249H216"
            fill="none"
            stroke="#172b3c"
            strokeWidth="11"
          />
          <path
            d="M11 31H66V59H11ZM87 18H159V59H87ZM42 108H180V150H42Z"
            fill="#547286"
          />
          <path d="M15 207H73V244H15Z M101 189H174V243H101Z" fill="#375467" />
          <path
            d="M11 34H66M87 21H159M42 112H180M101 193H174"
            stroke="#7691a1"
            strokeWidth="3"
          />
        </g>
      </g>
      <rect
        x="-150"
        y="-100"
        width="1380"
        height="2120"
        fill={`url(#${id}-light)`}
      />
      <rect
        x="-150"
        y="-100"
        width="1380"
        height="2120"
        fill={`url(#${id}-shade)`}
      />
    </>
  );
};

export const Dozer = ({
  transform,
  muted = false,
}: {
  readonly transform?: string;
  readonly muted?: boolean;
}) => {
  const id = useId();
  const dark = muted ? "#223b4a" : "#253541";
  const gold = muted ? "#597082" : "#c6914d";
  const goldLight = muted ? "#728797" : "#e2b164";

  return (
    <g transform={transform}>
      <defs>
        <linearGradient id={`${id}-glass`} x2=".8" y2="1">
          <stop stopColor="#90b0bd" />
          <stop offset=".55" stopColor="#4f7385" />
          <stop offset="1" stopColor="#314a5d" />
        </linearGradient>
        <linearGradient id={`${id}-blade`} x2="1" y2=".65">
          <stop stopColor={goldLight} />
          <stop offset=".52" stopColor={gold} />
          <stop offset="1" stopColor={muted ? "#384f61" : "#8d6033"} />
        </linearGradient>
      </defs>
      <ellipse
        cx="434"
        cy="531"
        rx="424"
        ry="34"
        fill="#0a1a27"
        opacity=".58"
      />
      <path
        d="M143 364 245 269 378 282 489 380 638 415 659 481 612 521H164Q94 519 85 474L97 416Z"
        fill="#172835"
        stroke={dark}
        strokeWidth="13"
      />
      <path
        d="M122 426 252 287 365 304 478 397 625 439 636 473 608 494H162Q118 494 116 467Z"
        fill="#354754"
        stroke="#4d626f"
        strokeWidth="9"
      />
      {[
        [251, 353, 48],
        [176, 452, 43],
        [274, 449, 36],
        [362, 449, 36],
        [450, 450, 36],
        [533, 454, 37],
        [607, 456, 31],
      ].map(([x, y, r]) => (
        <g key={x}>
          <circle
            cx={x}
            cy={y}
            r={r}
            fill="#243746"
            stroke="#627681"
            strokeWidth="5"
          />
          <circle
            cx={x}
            cy={y}
            r={r * 0.51}
            fill="#3b5161"
            stroke="#8295a0"
            strokeWidth="3"
          />
          <circle cx={x} cy={y} r={r * 0.17} fill="#1f3543" />
        </g>
      ))}
      <path
        d="M91 479 112 495M90 451 113 459M101 414 126 424M122 386 144 399M150 357 174 372M178 327 206 341M207 303 232 318M243 269 250 295M281 264 278 292M319 268 314 300M358 271 349 301M392 286 380 314M420 311 405 340M449 334 432 357M481 365 457 385M515 383 508 410M553 395 546 419M590 407 585 426M631 422 622 449M665 463 637 466M637 491 653 508M603 503V524M563 503V524M524 503V524M485 503V524M446 503V524M407 503V524M368 503V524M329 503V524M290 503V524M251 503V524M212 503V524M173 502V522M134 493 125 511"
        fill="none"
        stroke="#7b8b92"
        strokeOpacity=".73"
        strokeWidth="5"
      />
      <path
        d="M109 312 124 235 207 191 392 200 465 155 677 173 714 203 691 308 620 365 412 377 367 304 244 273 172 336Z"
        fill={gold}
        stroke={dark}
        strokeWidth="8"
      />
      <path
        d="M126 235 205 192 392 201 440 172 478 193 240 236 132 262Z"
        fill={goldLight}
      />
      <path
        d="M455 169 471 121 654 137 687 177 659 204 470 192Z"
        fill={goldLight}
        stroke={dark}
        strokeWidth="7"
      />
      <path d="M460 213 663 219 651 282 615 317 457 317Z" fill={dark} />
      <path
        d="M484 232 637 237M481 247 635 251M478 262 630 265M474 277 623 280M472 292 611 295"
        fill="none"
        stroke="#6e8692"
        strokeOpacity=".68"
        strokeWidth="5"
      />
      <path
        d="M200 191 214 56 403 57 430 207 392 233 219 235Z"
        fill={dark}
        stroke="#192d3b"
        strokeWidth="8"
      />
      <path
        d="M233 74 291 74 283 173 226 177ZM304 74 386 74 410 173 296 173Z"
        fill={`url(#${id}-glass)`}
      />
      <path
        d="M229 143 281 106 283 124 229 165ZM303 146 387 91 389 108 302 168Z"
        fill="#d7e9ef"
        opacity=".34"
      />
      <path
        d="M219 46 397 45 423 57 410 72 206 69Z"
        fill={goldLight}
        stroke={dark}
        strokeWidth="6"
      />
      <path
        d="M221 199 401 192M338 81 352 180"
        stroke="#3c5b6d"
        strokeWidth="6"
      />
      <path d="M432 156 439 69 459 58 475 65V82H458L454 159" fill={dark} />
      <path d="M165 275 189 263H221V276H186L177 312H161Z" fill={dark} />
      <path
        d="M343 250 384 249M318 269 368 269M294 286 351 288"
        stroke="#313b44"
        strokeWidth="8"
        strokeLinecap="round"
      />
      <path
        d="M566 358 770 373 761 424 538 401Z"
        fill={gold}
        stroke={dark}
        strokeWidth="9"
      />
      <circle
        cx="561"
        cy="379"
        r="17"
        fill="#526677"
        stroke="#273f4d"
        strokeWidth="6"
      />
      <path
        d="M642 254 762 333"
        stroke={dark}
        strokeWidth="25"
        strokeLinecap="round"
      />
      <path
        d="M644 254 707 294"
        stroke={goldLight}
        strokeWidth="17"
        strokeLinecap="round"
      />
      <path
        d="M707 294 757 326"
        stroke="#b1c1c8"
        strokeWidth="11"
        strokeLinecap="round"
      />
      <path
        d="M772 292Q822 352 830 463L846 492 817 509 734 475 737 308Z"
        fill={`url(#${id}-blade)`}
        stroke={dark}
        strokeWidth="10"
      />
      <path
        d="M769 313Q807 385 816 472M738 462 829 490"
        fill="none"
        stroke={goldLight}
        strokeWidth="8"
        opacity=".7"
      />
      <path d="M734 475 818 501 847 486 844 511 818 524 736 495Z" fill={dark} />
      <path
        d="M137 244 174 236 166 255 135 261Z"
        fill="#f8dea2"
        opacity={muted ? 0.22 : 0.8}
      />
    </g>
  );
};

export const Worktable = ({ y = 1230 }: { readonly y?: number }) => (
  <g transform={`translate(0 ${y})`}>
    <path d="M34 198H1008V614H34Z" fill="#112638" />
    <path d="M34 198H1008V232H34Z" fill="#233d50" />
    <path
      d="M55 242H398V328H55ZM55 347H398V432H55ZM55 452H398V538H55Z"
      fill="#28495a"
      stroke="#365c6e"
      strokeWidth="4"
    />
    <path
      d="M165 283H296M165 390H296M165 494H296"
      stroke="#819aa5"
      strokeWidth="9"
      strokeLinecap="round"
      opacity=".55"
    />
    <path d="M478 243H993V563H478Z" fill="#1b3344" />
    <path d="M500 272H965V525H500Z" fill="#102538" />
    <path
      d="M-90 181 116 12 871 0 1157 147 1072 212-62 216Z"
      fill="#546e7d"
      stroke="#233c4e"
      strokeWidth="7"
    />
    <path
      d="M-37 175 142 27 861 18 1112 147 1037 192 12 196Z"
      fill="#647f8d"
      opacity=".86"
    />
    <path d="M-62 210 1072 206 1157 146V179L1072 245-52 247Z" fill="#253f52" />
    <path
      d="M-62 208 1071 205 1137 155M54 155 1086 150"
      stroke="#88a1ad"
      strokeWidth="4"
      fill="none"
      opacity=".52"
    />
  </g>
);

export const Clipboard = ({
  transform,
  activeRow = -1,
  lift = 0,
  kind = "jsa",
}: {
  readonly transform?: string;
  readonly activeRow?: number;
  readonly lift?: number;
  readonly kind?: "jsa" | "sop";
}) => (
  <g transform={transform}>
    <rect
      x="12"
      y="23"
      width="305"
      height="389"
      rx="18"
      fill="#122638"
      opacity=".7"
    />
    <rect
      x="1"
      y="9"
      width="305"
      height="390"
      rx="19"
      fill={kind === "sop" ? "#4a6574" : "#b27a46"}
      stroke="#203746"
      strokeWidth="7"
    />
    <path
      d={`M19 24H287V${356 - lift}L${256 - lift * 0.6} 376H19Z`}
      fill="#e9ecdf"
    />
    <path
      d={`M287 ${356 - lift} ${256 - lift * 0.6} 376 261 ${350 - lift}Z`}
      fill="#b8c5c5"
    />
    {kind === "jsa" ? (
      <>
        <path
          d="M34 95H272V326H34Z"
          fill="#dce7e2"
          stroke="#5e7a80"
          strokeWidth="3"
        />
        <path d="M34 96H272V127H34Z" fill="#446574" />
        <path
          d="M103 96V326M178 96V326M34 167H272M34 207H272M34 247H272M34 287H272"
          stroke="#839e9f"
          strokeWidth="3"
        />
        {activeRow >= 0 && (
          <rect
            x="37"
            y={129 + activeRow * 40}
            width="232"
            height="36"
            fill="#e9a959"
            opacity=".48"
          />
        )}
        <path
          d="M48 146H84M116 146H161M194 146H250M48 186H90M116 186H151M194 186H244M48 226H80M116 226H165M194 226H232M48 266H91M116 266H157M194 266H245"
          stroke="#52737c"
          strokeWidth="5"
          strokeLinecap="round"
        />
      </>
    ) : (
      <>
        <path
          d="M38 104H246"
          stroke="#547a8a"
          strokeWidth="15"
          strokeLinecap="round"
        />
        <path
          d="M42 150H257M42 182H222M42 214H251M42 246H201M42 278H258M42 310H177"
          stroke="#78929a"
          strokeWidth="6"
          strokeLinecap="round"
        />
        {activeRow >= 0 && (
          <rect
            x="33"
            y="134"
            width="234"
            height="35"
            rx="7"
            fill="#f9b44f"
            opacity=".4"
          />
        )}
      </>
    )}
    <rect
      x="86"
      y="4"
      width="136"
      height="44"
      rx="10"
      fill="#708a94"
      stroke="#2d4856"
      strokeWidth="5"
    />
    <rect
      x="118"
      y="0"
      width="71"
      height="23"
      rx="9"
      fill="#b4c6cb"
      stroke="#526d7a"
      strokeWidth="4"
    />
    <path d="M104 37H207" stroke="#dce5e3" strokeWidth="3" opacity=".54" />
  </g>
);

export const ImpactTool = ({ transform }: { readonly transform?: string }) => (
  <g transform={transform}>
    <path
      d="M9 62 100 53 190 58 209 96 101 102 9 88Z"
      fill="#172b3a"
      opacity=".46"
    />
    <path
      d="M50 10H156L179 28V62H147L129 47 117 109H85L85 56 50 50Z"
      fill="#c78346"
      stroke="#203747"
      strokeWidth="6"
    />
    <path d="M53 10H145L145 28H53Z" fill="#e7ae66" />
    <path
      d="M49 18 22 20 6 28V45L50 46Z"
      fill="#70838b"
      stroke="#283f48"
      strokeWidth="5"
    />
    <path d="M86 62H127L119 108H88Z" fill="#364c53" />
    <path
      d="M73 111H130L140 128 131 141H72L61 128Z"
      fill="#324651"
      stroke="#203442"
      strokeWidth="6"
    />
    <path d="M100 56H117L113 72H100Z" fill="#934b2d" />
  </g>
);
