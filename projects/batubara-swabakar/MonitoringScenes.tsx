import type { FC } from "react";
import { Easing, interpolate } from "remotion";

const amber = "#F5A33B";
const teal = "#74BCB7";
const ease = Easing.bezier(0.26, 0.72, 0.27, 1);
const clamp = {
  extrapolateLeft: "clamp",
  extrapolateRight: "clamp",
} as const;

const Terraces: FC = () => (
  <g>
    <path
      d="M0 824 108 783 213 755 310 766 388 739 521 732 620 752 732 728 837 738 951 703 1080 740V1044H0Z"
      fill="#312A23"
    />
    <path
      d="M0 856 133 828 227 799 331 802 423 782 539 792 670 775 759 793 917 759 1080 782V1035H0Z"
      fill="#3D3026"
    />
    <path
      d="M0 900 259 864 390 867 505 840 615 850 760 817 889 829 1080 803V1060H0Z"
      fill="#493A2D"
    />
    <path
      d="M0 935 234 900 374 912 517 872 650 886 785 859 941 866 1080 846"
      fill="none"
      stroke="#987051"
      strokeWidth="3"
      opacity=".22"
    />
    <path
      d="M0 958 168 943 367 965 517 925 660 941 815 914 1002 926 1080 902V1254H0Z"
      fill="#31281F"
    />
    <path
      d="M0 958 168 943 367 965 517 925 660 941 815 914 1002 926 1080 902"
      fill="none"
      stroke="#83674E"
      strokeWidth="4"
      opacity=".41"
    />
  </g>
);

const Dozer: FC<{ frame: number }> = ({ frame }) => {
  const advance = interpolate(frame, [1051, 1156], [0, 124], {
    ...clamp,
    easing: ease,
  });
  const blade = interpolate(frame, [1061, 1090, 1149], [-6, 1, 0], clamp);
  const rotorAngle = (advance * 180) / (Math.PI * 16);

  return (
    <g transform={`translate(${481 + advance} 1048)`}>
      <ellipse cx="120" cy="18" rx="155" ry="15" fill="#080A08" opacity=".52" />
      <path d="M-2-13 36-38H207L245-8 222 17H19Z" fill="#171917" />
      <path
        d="M20-41H208Q232-39 239-18L241-9Q240 13 216 16H19Q-2 14-7-1Q-10-15 1-29Z"
        fill="#1C1C19"
        stroke="#918169"
        strokeWidth="3"
      />
      <path
        d="M15-31H211Q224-30 228-15L231-9Q229 4 214 7H20Q7 5 5-5Q4-15 15-31Z"
        fill="#2C2D29"
        stroke="#45443C"
        strokeWidth="2"
      />
      <path
        d="M15-36H210M20 13H213"
        stroke="#9D876B"
        strokeWidth="2"
        strokeDasharray="6 6"
        opacity=".62"
      />
      {[26, 68, 111, 154, 201].map((position, index) => (
        <g
          key={position}
          transform={`translate(${position} -10) rotate(${rotorAngle})`}
        >
          <circle
            r={index === 0 || index === 4 ? 14 : 11}
            fill="#444138"
            stroke="#646054"
            strokeWidth="2"
          />
          <path d="M-7 0H7M0-7V7" stroke="#302F29" strokeWidth="2" />
          <circle r="4.5" fill="#9B8060" />
        </g>
      ))}
      <path
        d="M12-35V-56L27-76 90-79 106-82H215L229-70 227-43 214-35Z"
        fill="#9A672F"
        stroke="#27211A"
        strokeWidth="3"
      />
      <path
        d="M16-48 35-61 98-62 107-72H211L221-62 219-47H100L73-37H23Z"
        fill="#75502D"
      />
      <path
        d="M138-78 158-96 218-95 231-86 231-63 136-66Z"
        fill="#B37E41"
        stroke="#302319"
        strokeWidth="3"
      />
      <path
        d="M145-78 227-77M189-90H214M189-86H218"
        stroke="#E4AE63"
        strokeWidth="2.5"
        opacity=".7"
      />
      <path
        d="M52-79 54-135 72-152H132L146-139 153-78Z"
        fill="#7E5931"
        stroke="#211F1A"
        strokeWidth="3"
      />
      <path d="M62-83 64-133 77-144H128L138-133 143-83Z" fill="#242D2C" />
      <path
        d="M70-132 79-139H101V-106H70ZM107-139H126L134-130 137-106H107Z"
        fill="#769087"
      />
      <path
        d="M72-133 95-138 75-110H70ZM108-138H123L112-109H108Z"
        fill="#A6B5A4"
        opacity=".48"
      />
      <path d="M77-147H134L146-142V-135L69-136 58-128 57-135Z" fill="#C59250" />
      <path
        d="M66-82V-128M104-85V-140M74-102H137"
        fill="none"
        stroke="#473624"
        strokeWidth="3"
      />
      <path
        d="M90-96H100M12-63H40M13-55H35M224-87H229"
        stroke="#E3BC80"
        strokeWidth="3"
        opacity=".8"
      />
      <path
        d="M168-96V-122H177V-96M169-121H181"
        fill="none"
        stroke="#343129"
        strokeWidth="5"
      />
      <rect x="216" y="-82" width="11" height="7" rx="2" fill="#E6C892" />
      <g transform={`translate(0 ${blade})`}>
        <path
          d="M170-39 254-52 263-41 182-28Z"
          fill="#986638"
          stroke="#35291D"
          strokeWidth="3"
        />
        <path
          d="M196-57 257-65 260-62"
          fill="none"
          stroke="#D5B186"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M259-84 277-86 279-56 270-19 253-12 242-20 254-57Z"
          fill="#C08D55"
          stroke="#332719"
          strokeWidth="3"
        />
        <path
          d="M270-79 272-55 262-21 255-19"
          fill="none"
          stroke="#EBB877"
          strokeWidth="3"
        />
        <path d="M252-18Q276-24 285-17L278-10 248-11Z" fill="#6E573D" />
      </g>
    </g>
  );
};

const RoutineStockpile: FC<{ frame: number }> = ({ frame }) => {
  const heightMarker = interpolate(frame, [1066, 1087], [0, 1], {
    ...clamp,
    easing: ease,
  });
  const settle = interpolate(frame, [1038, 1156], [0, 34], clamp);

  return (
    <g transform={`translate(${-settle} 0)`}>
      <path
        d="M0 1102 126 1072 183 1018 224 986 271 907 343 844 404 816 522 812 566 830 631 866 689 916 760 948 848 992 939 1046 1080 1073V1250H0Z"
        fill="#201F1C"
      />
      <path
        d="M131 1084 183 1020 227 984 272 904 343 844 404 817 522 812 564 831 631 867 687 916 757 948 848 993 943 1049 1022 1081 893 1118 697 1105 513 1088 256 1088Z"
        fill="url(#swabakar-work-coal)"
      />
      <path
        d="M183 1020 227 984 272 904 343 844 404 817 522 812 564 831 473 838 402 865 343 923 317 1010 261 1053 131 1084Z"
        fill="#4B4338"
        opacity=".9"
      />
      <path
        d="M327 954 402 865 473 838 564 831 631 867 687 916 757 948 680 946 603 909 528 881 454 890 378 931Z"
        fill="#4B443B"
        opacity=".54"
      />
      <path
        d="M261 1053 317 1010 350 923 373 935 344 986 365 1004 429 1009 395 1043 388 1083 256 1087 132 1084Z"
        fill="#1B1E1A"
      />
      <path
        d="M330 1039 425 978 483 949 560 935 629 946 702 980 770 998 855 1034 952 1074"
        fill="none"
        stroke="#77705B"
        strokeWidth="8"
        opacity=".22"
      />
      <path
        d="M228 982 273 904 343 844 405 818 522 812 563 830M452 892 529 882 603 910 679 945 752 949M383 1024 482 994 567 988 644 1001 687 1023 765 1048"
        fill="none"
        stroke="#9A876C"
        strokeWidth="2.5"
        opacity=".27"
      />
      <g fill="#77705B" opacity=".26">
        <path d="M248 967 256 956 268 958 261 971ZM275 927 284 919 292 923 288 930ZM300 905 305 890 320 893 317 900ZM326 881 337 871 350 874 340 881ZM368 853 380 847 392 849 389 855ZM399 844 411 838 419 839 418 845ZM447 846 464 841 472 846 460 851ZM520 856 533 853 543 859 528 862ZM557 875 567 870 578 877 569 882ZM588 896 602 895 614 903 600 904Z" />
        <path d="M230 1037 242 1026 255 1031 247 1038ZM201 1029 210 1023 215 1027 211 1032ZM355 967 361 955 377 951 376 963ZM388 989 401 981 412 981 407 994ZM413 954 427 944 435 950 430 959ZM456 930 466 924 483 924 480 933ZM487 912 501 904 509 907 507 913ZM535 911 553 913 560 920 542 923ZM635 920 646 916 657 922 651 930ZM692 952 711 950 721 957 701 957ZM778 978 795 980 806 988 789 989Z" />
      </g>
      <path
        d="M0 1097 218 1080 421 1056 564 1058 652 1072 814 1074 1080 1100V1450H0Z"
        fill="#30281F"
      />
      <path
        d="M0 1097 218 1080 421 1056 564 1058 652 1072 814 1074 1080 1100"
        fill="none"
        stroke="#8C6F53"
        strokeWidth="4"
        opacity=".76"
      />
      <path
        d="M0 1150 232 1117 434 1109 614 1114 768 1125 1080 1158M0 1206 194 1170 434 1151 625 1162 826 1192 1080 1200"
        fill="none"
        stroke="#6F553D"
        strokeWidth="4"
        opacity=".41"
      />
      <path
        d="M170 1090 345 1080 486 1081M319 1113 495 1103 633 1110"
        fill="none"
        stroke="#897157"
        strokeWidth="4"
        strokeDasharray="16 13"
        opacity=".38"
      />
      <g
        opacity={heightMarker * 0.88}
        fill="none"
        stroke="#C4AF8A"
        strokeWidth="3"
      >
        <path
          d="M204 817H369M168 1063H228"
          strokeDasharray="6 8"
          opacity=".6"
        />
        <path d="M177 817H204M188 817V1063M177 1063H204M179 827 188 817 197 827M179 1053 188 1063 197 1053" />
      </g>
      <Dozer frame={frame} />
    </g>
  );
};


/**
 * Human-focused Gate B revision.
 * The temperature indicator is explicitly a surface/accessible-point illustration,
 * not a claim that a single reading establishes the internal coal temperature.
 */
const SurfaceTemperatureCard: FC<{ frame: number }> = ({ frame }) => {
  const appears = interpolate(frame, [1178, 1195, 1250, 1268], [0, 1, 1, 0.18], clamp);
  const progress = interpolate(frame, [1192, 1227], [0, 1], clamp);
  return (
    <g transform="translate(690 728)" opacity={appears}>
      <rect x="0" y="0" width="298" height="150" rx="20" fill="#182723" fillOpacity=".95" stroke="#6F9381" strokeWidth="3"/>
      <path d="M24 46H274" stroke="#55796D" strokeOpacity=".45" strokeWidth="2"/>
      <text x="24" y="30" fontFamily="sans-serif" fontSize="19" fontWeight="700" letterSpacing="1.3" fill="#D5EDE2">
        CEK SUHU PERMUKAAN
      </text>
      <g transform="translate(25 65)">
        <path d="M0 50H247M0 25H247M0 0H247" fill="none" stroke="#68857A" strokeWidth="1.5" opacity=".35"/>
        <path d="M0 44 44 40 78 42 120 32 151 34 189 17 241 11"
          fill="none" stroke={teal} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"
          pathLength={1} strokeDasharray={`${progress} 1`} />
        <circle cx="241" cy="11" r="8" fill={amber} opacity={progress}/>
      </g>
    </g>
  );
};

const MinerWorker: FC<{ frame: number }> = ({ frame }) => {
  // A single connected shoulder-elbow-hand chain changes the action
  // from an infrared thermometer check to speaking into a radio.
  const report = interpolate(frame, [1252, 1280], [0, 1], {...clamp, easing: ease});
  const handX = 420 - 129 * report;
  const handY = 304 - 150 * report;
  const elbowX = 354 - 28 * report;
  const elbowY = 312 - 64 * report;
  const breathing = Math.sin(frame / 16) * 1.6;
  const radioSignal = interpolate(frame, [1271, 1281, 1293, 1314], [0, 0.9, 0.65, 0], clamp);

  return (
    <g transform={`translate(100 ${706 + breathing})`}>
      {/* Grounded boots and two trouser legs, instead of a floating torso. */}
      <ellipse cx="225" cy="584" rx="186" ry="22" fill="#10140F" opacity=".53"/>
      <path d="M157 384 213 391 207 532 179 554 146 535Z" fill="#33433B" stroke="#182921" strokeWidth="5"/>
      <path d="M220 391 278 381 286 535 255 553 223 530Z" fill="#2C4137" stroke="#182921" strokeWidth="5"/>
      <path d="M150 500H211M223 502H283" stroke="#AAB6A1" strokeWidth="12" opacity=".68"/>
      <path d="M143 523 182 535 204 528 207 556 192 577 127 577 127 554Z" fill="#202620" stroke="#819080" strokeWidth="3"/>
      <path d="M226 530 258 536 283 522 304 555 300 579H228L215 563Z" fill="#202620" stroke="#819080" strokeWidth="3"/>
      <path d="M129 567H203M232 570H299" stroke="#111B16" strokeWidth="8" strokeLinecap="round"/>

      {/* Neck, asymmetric natural shoulders, and semi-realistic torso. */}
      <path d="M183 195 180 240 234 255 246 215 236 184Z" fill="#A57657"/>
      <path d="M148 226Q174 213 195 213L229 223 254 219Q283 222 300 244L313 382 281 417 151 418 129 384 127 279Q128 244 148 226Z"
        fill="#344E43" stroke="#1C2F28" strokeWidth="5"/>
      <path d="M166 236 195 263 229 265 260 232 270 255 246 297 194 297 151 261Z" fill="#213D35"/>
      <path d="M146 225 176 218 197 277 210 406 151 406 133 271Z" fill="#BF7C39"/>
      <path d="M257 224 275 231 298 281 293 402 236 413 232 286Z" fill="#D08A42"/>
      <path d="M153 237 165 232 196 287 204 398 186 397 179 284Z" fill="#F0E8C8" opacity=".92"/>
      <path d="M262 237 275 247 267 290 261 397 244 400 248 286Z" fill="#F0E8C8" opacity=".92"/>
      <path d="M150 346 204 346M245 345 294 344M151 368 203 369M245 368 292 369"
        stroke="#DDE2C8" strokeWidth="12" opacity=".83" />
      <path d="M216 293V402M193 293 214 304 235 293" stroke="#91A391" strokeWidth="3" fill="none"/>
      <path d="M153 407Q218 418 286 406" stroke="#17271F" strokeWidth="9" fill="none"/>

      {/* Head: jaw/ear/nose contours with aligned safety eyewear and hard hat. */}
      <path d="M174 106Q180 76 212 68Q245 69 258 96L266 132 278 149 268 157 265 187Q259 207 235 218L204 212Q177 199 170 174Z"
        fill="#B98260" stroke="#513827" strokeWidth="4"/>
      <path d="M182 111Q193 91 212 89L218 177 202 199 180 178Z" fill="#915E45" opacity=".46"/>
      <path d="M260 133 278 148 266 158 256 154" fill="#D7A078"/>
      <path d="M244 184Q252 186 260 181" stroke="#654733" strokeWidth="3" strokeLinecap="round" fill="none"/>
      <path d="M241 145 255 146" stroke="#342D25" strokeWidth="3.5" strokeLinecap="round"/>
      <path d="M177 143Q170 134 168 146L175 169Q181 175 187 163" fill="#AA7558" stroke="#604330" strokeWidth="3"/>
      <path d="M224 132 261 130 265 146 245 153 222 147Z"
        fill="#B9D0C7" fillOpacity=".3" stroke="#D3D9CD" strokeWidth="3"/>
      <path d="M217 136 183 133M243 137 252 148" stroke="#D4DDD0" strokeWidth="2" opacity=".74"/>
      <path d="M175 110V94Q176 55 213 45Q249 48 268 83L269 110 247 118 201 123Z" fill="#D69B53" stroke="#594127" strokeWidth="4"/>
      <path d="M187 98 197 69 217 54 236 63 247 96Z" fill="#F6BC69" opacity=".78"/>
      <path d="M169 109Q207 112 249 100L287 104 285 118 247 121 196 131 166 120Z"
        fill="#EFC07B" stroke="#6A4A2F" strokeWidth="3"/>
      <path d="M178 135Q165 135 165 151L177 175" stroke="#2B3E36" strokeWidth="7" fill="none" />
      <path d="M177 166Q178 197 204 213" fill="none" stroke="#435A50" strokeWidth="5"/>

      {/* Left arm relaxed, weight-bearing at the hip. */}
      <path d="M145 259Q126 278 122 326L120 383Q128 408 153 409L179 384"
        fill="none" stroke="#253B33" strokeWidth="46" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M140 277Q130 324 139 377" fill="none" stroke="#536F61" strokeWidth="27" strokeLinecap="round"/>
      <path d="M163 379 177 370 190 377 190 395 177 404 161 397Z" fill="#A67D5B" stroke="#314339" strokeWidth="3"/>

      {/* Right sleeve, forearm, glove and the device share the same hand pivot. */}
      <path d={`M283 258Q312 265 ${elbowX} ${elbowY}Q${elbowX + 15} ${elbowY + 15} ${handX} ${handY}`}
        fill="none" stroke="#1D3028" strokeWidth="51" strokeLinecap="round" strokeLinejoin="round"/>
      <path d={`M286 256Q321 278 ${elbowX} ${elbowY}L${handX} ${handY}`}
        fill="none" stroke="#4B6658" strokeWidth="35" strokeLinecap="round" strokeLinejoin="round"/>
      <path d={`M${elbowX-13} ${elbowY+10}L${elbowX+13} ${elbowY-10}`} stroke="#D6DBC4" strokeWidth="10"/>
      <g transform={`translate(${handX} ${handY})`}>
        {/* Measuring instrument: directional probe and display, not a hand-held radio. */}
        <g opacity={1-report} transform="rotate(-17)">
          <path d="M-10-35 18-35 29-6 8 17-17 8Z" fill="#384C45" stroke="#101D18" strokeWidth="3"/>
          <path d="M-13-37 46-46 55-32 22-19-8-17Z" fill="#252C27" stroke="#93ACA0" strokeWidth="3"/>
          <rect x="0" y="-29" width="17" height="13" rx="3" fill="#96D9C7"/>
          <path d="M4 7 6 25" stroke="#1B2B25" strokeWidth="12" strokeLinecap="round"/>
        </g>
        {/* Compact handheld radio appears as the arm moves up to the mouth. */}
        <g opacity={report} transform="rotate(6)">
          <rect x="-20" y="-50" width="34" height="78" rx="8" fill="#1B2822" stroke="#A5B4A5" strokeWidth="3"/>
          <path d="M3-50V-79" stroke="#BCC8AF" strokeWidth="6" strokeLinecap="round"/>
          <rect x="-10" y="-37" width="16" height="11" rx="2" fill={teal}/>
          <path d="M-10-11H5M-10-4H5M-10 3H5" stroke="#7B9B8C" strokeWidth="2"/>
          <path d="M23-44Q36-32 23-17M32-52Q51-32 34-10"
            fill="none" stroke={teal} strokeWidth="3" strokeLinecap="round" opacity={radioSignal}/>
        </g>
        <path d="M-19 1Q-14-11-2-11L19-2 24 12 13 21-8 22-23 14Z"
          fill="#9DAA97" stroke="#304539" strokeWidth="3"/>
        <path d="M-11 6 8 11M-11 13 8 17" stroke="#657C6C" strokeWidth="2" opacity=".7"/>
      </g>
    </g>
  );
};

const MonitoringStation: FC<{ frame: number }> = ({ frame }) => {
  const report = interpolate(frame, [1252, 1280], [0, 1], clamp);
  const beam = interpolate(frame, [1195, 1208, 1244, 1263], [0, 0.86, 0.78, 0], clamp);
  const hotSpot = interpolate(frame, [1212, 1243], [0, 0.85], clamp);
  return (
    <g>
      {/* Accessible stockpile face with worker-scale context. */}
      <path d="M460 1071 505 1010 574 968 635 929 705 897 773 870 829 884 899 922 963 982 1080 1027V1158H460Z"
        fill="url(#swabakar-work-coal)" stroke="#776653" strokeWidth="3"/>
      <path d="M504 1012 573 970 633 928 705 897 770 870 823 883 771 901 712 933 679 984 603 1019Z" fill="#4C473C"/>
      <path d="M701 903 773 872 830 885 902 926 952 984 850 960 785 927Z" fill="#352F29"/>
      <path d="M0 1120 188 1103 360 1110 518 1082 743 1088 1080 1110V1500H0Z" fill="#30352C"/>
      <path d="M0 1120 188 1103 360 1110 518 1082 743 1088 1080 1110" fill="none" stroke="#80725C" strokeWidth="4"/>
      <path d="M0 1185 207 1160 427 1168 696 1140 1080 1175M0 1257 273 1247 531 1269 792 1243 1080 1255"
        fill="none" stroke="#6F6852" strokeWidth="4" opacity=".48"/>
      <path d="M0 1336 237 1322 523 1339 779 1317 1080 1333" fill="none" stroke="#6C6857" strokeWidth="3" opacity=".35"/>
      <path d="M42 1092 96 1093 143 1091M861 1080H1080" stroke="#C5A668" strokeWidth="5" opacity=".58"/>
      <path d="M58 1090V1150M98 1092V1146M879 1081V1144M1007 1081V1152" stroke="#A28E65" strokeWidth="7" opacity=".6"/>

      {/* No numerical temperature or fake regulatory threshold is implied. */}
      <g opacity={hotSpot}>
        <ellipse cx="685" cy="964" rx="50" ry="27" fill={amber} opacity=".14"/>
        <ellipse cx="685" cy="964" rx="28" ry="13" fill={amber} opacity=".22"/>
      </g>
      <path d="M540 1011 684 965" stroke={amber} strokeWidth="3.5"
        strokeDasharray="10 10" strokeLinecap="round" opacity={beam*(1-report)}/>
      <circle cx="684" cy="965" r="9" stroke={amber} fill="none" strokeWidth="3" opacity={beam*(1-report)}/>
      <SurfaceTemperatureCard frame={frame}/>
      <MinerWorker frame={frame}/>
    </g>
  );
};

export const MonitoringScenes: FC<{ frame: number }> = ({ frame }) => {
  const glide = interpolate(frame, [1138, 1170], [0, 1], {
    ...clamp,
    easing: ease,
  });
  const finalSettle = interpolate(frame, [1170, 1294], [0, 1], {
    ...clamp,
    easing: ease,
  });

  return (
    <svg
      aria-hidden="true"
      width="1080"
      height="1920"
      viewBox="0 0 1080 1920"
      style={{ position: "absolute", inset: 0 }}
    >
      <defs>
        <linearGradient id="swabakar-work-sky" x2="0" y2="1">
          <stop stopColor="#1A1A17" />
          <stop offset=".56" stopColor="#403127" />
          <stop offset="1" stopColor="#191A18" />
        </linearGradient>
        <linearGradient id="swabakar-work-coal" x2=".23" y2="1">
          <stop stopColor="#504437" />
          <stop offset="1" stopColor="#21241F" />
        </linearGradient>
        <linearGradient id="swabakar-work-monitor" x2=".36" y2="1">
          <stop stopColor="#203630" />
          <stop offset="1" stopColor="#121C18" />
        </linearGradient>
        <linearGradient id="swabakar-work-vignette" x2="0" y2="1">
          <stop stopColor="#181916" />
          <stop offset=".28" stopColor="#181916" stopOpacity=".72" />
          <stop offset=".41" stopColor="#181916" stopOpacity="0" />
          <stop offset=".62" stopColor="#181916" stopOpacity="0" />
          <stop offset=".84" stopColor="#181916" stopOpacity=".92" />
          <stop offset="1" stopColor="#181916" />
        </linearGradient>
      </defs>
      <rect width="1080" height="1920" fill="url(#swabakar-work-sky)" />
      <Terraces />
      <g transform={`translate(${-78 * glide} 0)`} opacity={1 - glide}>
        <RoutineStockpile frame={frame} />
      </g>
      <g
        transform={`translate(${86 * (1 - glide) - 23 * finalSettle} ${-12 * finalSettle})`}
        opacity={glide}
      >
        <MonitoringStation frame={frame} />
      </g>
      <rect
        width="1080"
        height="1920"
        fill="url(#swabakar-work-vignette)"
        pointerEvents="none"
      />
    </svg>
  );
};
