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

const MonitoringScreen: FC<{ frame: number }> = ({ frame }) => {
  const draw = interpolate(frame, [1163, 1217], [0, 1], {
    ...clamp,
    easing: ease,
  });
  const anomaly = interpolate(frame, [1210, 1231], [0, 1], {
    ...clamp,
    easing: ease,
  });

  return (
    <g transform="translate(447 857)">
      <path
        d="M141 209H271L291 345H118Z"
        fill="#242821"
        stroke="#4A5243"
        strokeWidth="3"
      />
      <path d="M195 215H233L235 340H191Z" fill="#121714" />
      <path
        d="M102 344H310L330 366H80Z"
        fill="#394238"
        stroke="#6D715A"
        strokeWidth="2"
      />
      <rect
        x="-4"
        y="9"
        width="427"
        height="248"
        rx="31"
        fill="#101310"
        stroke="#67766A"
        strokeWidth="3"
      />
      <path
        d="M9 235V35Q9 16 28 16H386Q409 16 409 38"
        fill="none"
        stroke="#A0A789"
        strokeWidth="2"
        opacity=".47"
      />
      <rect
        x="13"
        y="27"
        width="387"
        height="201"
        rx="15"
        fill="url(#swabakar-work-monitor)"
        stroke="#394B43"
        strokeWidth="2"
      />
      <path
        d="M98 59V190H365M98 107H365M98 148H365M172 62V189M237 62V189M304 62V189M365 62V190"
        fill="none"
        stroke={teal}
        strokeWidth="1.5"
        opacity=".24"
      />
      <path
        d="M48 128V86a8 8 0 0 1 16 0v42a15 15 0 1 1-16 0Z"
        fill="none"
        stroke={teal}
        strokeWidth="3"
        opacity=".82"
      />
      <path
        d="M56 100V142"
        fill="none"
        stroke={teal}
        strokeWidth="4"
        strokeLinecap="round"
        opacity=".82"
      />
      <circle cx="56" cy="142" r="6" fill={teal} />
      <path
        d="M105 169 137 157 172 162 207 135 240 143 270 130 301 108 333 116 357 79"
        fill="none"
        stroke={teal}
        strokeWidth="5"
        strokeLinejoin="round"
        strokeLinecap="round"
        pathLength={1}
        strokeDasharray={`${draw} 1`}
        opacity={draw > 0 ? 1 : 0}
      />
      <g opacity={anomaly}>
        <path
          d="M301 108 333 116 357 79"
          fill="none"
          stroke={amber}
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle
          cx="357"
          cy="79"
          r={11 + 5 * anomaly}
          fill={amber}
          opacity=".15"
        />
        <circle cx="357" cy="79" r="5.5" fill={amber} />
      </g>
      <path
        d="M32 199H80M38 205H74"
        fill="none"
        stroke="#64756B"
        strokeWidth="2.5"
        opacity=".6"
      />
      <circle cx="375" cy="243" r="3.5" fill={teal} opacity=".8" />
      <path
        d="M310 244H351"
        stroke="#687169"
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="4 4"
        opacity=".52"
      />
    </g>
  );
};

const Worker: FC<{ frame: number }> = ({ frame }) => {
  const lift = interpolate(frame, [1229, 1268], [0, 1], {
    ...clamp,
    easing: ease,
  });
  const signal = interpolate(frame, [1258, 1274, 1291], [0, 0.9, 0.49], clamp);
  const gaze = interpolate(
    frame,
    [1188, 1210, 1240, 1268],
    [0, 3, 3, 0],
    clamp,
  );
  const handX = 159 + 86 * lift;
  const handY = 333 - 135 * lift;
  const elbowX = 199 + 34 * lift;
  const elbowY = 397 - 82 * lift;

  return (
    <g transform="translate(131 723)">
      <path
        d="M10 509 22 389 31 308 51 278 97 270 113 238 174 225 184 269 238 287 266 339 271 507Z"
        fill="#3B5148"
        stroke="#1D2820"
        strokeWidth="5"
      />
      <path
        d="M97 270 117 213 170 214 185 267 160 291 129 297Z"
        fill="#A56746"
      />
      <path
        d="M102 261 118 224 160 224 175 257 151 272 124 279Z"
        fill="#764B37"
      />
      <path
        d="M94 126 132 103 178 113 204 139 204 151 220 169 215 180 202 184 203 204 191 228 164 242 130 222 110 204 87 179Z"
        fill="#BC8055"
        stroke="#38281E"
        strokeWidth="4"
      />
      <path
        d="M103 161 127 138 142 141 150 180 167 216 164 240 130 222 114 203 90 173Z"
        fill="#966045"
      />
      <path
        d="M178 131 197 145 202 157 217 169 214 177 198 183 195 198 190 216 172 228"
        fill="none"
        stroke="#E2A06F"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M192 195 203 192"
        fill="none"
        stroke="#55382C"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M174 163 185 164"
        transform={`translate(0 ${gaze})`}
        fill="none"
        stroke="#322623"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M157 149 201 148 211 155 202 172 166 173 156 163Z"
        fill="#ADB8A3"
        fillOpacity=".28"
        stroke="#B9C4AA"
        strokeWidth="3"
      />
      <path
        d="M158 153 123 146M186 151 174 168"
        fill="none"
        stroke="#D5D8AE"
        strokeWidth="2"
        opacity=".63"
      />
      <path
        d="M85 133Q82 109 102 89L134 78 177 78 204 92 219 118 209 132 140 143 95 145Z"
        fill="#C99149"
        stroke="#483323"
        strokeWidth="4"
      />
      <path
        d="M101 126 110 104 140 85 169 84 198 96 210 113 177 112 136 125Z"
        fill="#E0AA5F"
      />
      <path
        d="M134 120 144 95 155 80 170 80 159 95 149 117"
        fill="#F3BD71"
        opacity=".65"
      />
      <path
        d="M86 132 112 131 183 119 221 117 237 124 226 133 186 137 131 149 92 148Z"
        fill="#F2BA6A"
        stroke="#6F4D32"
        strokeWidth="3"
      />
      <path
        d="M100 145 120 146 131 158 128 179 113 188 95 181 89 164Z"
        fill="#2C382F"
        stroke="#798473"
        strokeWidth="3"
      />
      <path
        d="M106 152 117 153 126 165 122 176 112 181 101 174 99 163Z"
        fill="#3D4537"
      />
      <path
        d="M100 186 120 204 132 215"
        fill="none"
        stroke="#464438"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path
        d="M92 271 123 302 149 306 174 283 184 268 208 279 188 312 173 324 122 324 83 287Z"
        fill="#27382F"
        stroke="#52685A"
        strokeWidth="2.5"
      />
      <path
        d="M53 278 87 271 116 328 119 495 96 519H36L46 375Z"
        fill="#BD7837"
      />
      <path
        d="M183 267 208 275 232 308 242 399 236 521H172L161 470 170 345Z"
        fill="#C7833A"
      />
      <path
        d="M58 279 74 275 101 336 107 507H88L82 349ZM190 278 203 291 214 335 213 503H194L196 337Z"
        fill="#D8DAC0"
        opacity=".81"
      />
      <path
        d="M43 422 111 419M166 423 239 425M40 448 115 446M165 447 239 451"
        fill="none"
        stroke="#D2D6BB"
        strokeWidth="13"
        opacity=".8"
      />
      <path
        d="M118 344 137 353 158 342M138 353V485"
        fill="none"
        stroke="#6B7B61"
        strokeWidth="2.5"
      />
      <path
        d="M31 309 18 349 19 412 33 445 80 467 102 439 73 417 63 358Z"
        fill="#3E5146"
        stroke="#293C31"
        strokeWidth="5"
      />
      <path
        d="M24 403 39 431 77 450"
        fill="none"
        stroke="#667962"
        strokeWidth="3.5"
        opacity=".6"
      />
      <path
        d="M71 435 89 438 122 451 132 463 121 477 103 473 78 461Z"
        fill="#758172"
        stroke="#34453A"
        strokeWidth="3"
      />
      <path d="M24 508H253L272 538H5Z" fill="#1C251D" opacity=".88" />
      <path
        d={`M220 304Q249 338 ${elbowX} ${elbowY}Q${elbowX - 24} ${elbowY + 23} ${handX} ${handY + 14}`}
        fill="none"
        stroke="#253831"
        strokeWidth="49"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d={`M218 304Q244 338 ${elbowX} ${elbowY}Q${elbowX - 24} ${elbowY + 23} ${handX} ${handY + 14}`}
        fill="none"
        stroke="#516458"
        strokeWidth="35"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <g transform={`translate(${handX} ${handY}) rotate(${-15 + 24 * lift})`}>
        <path
          d="M-11-41H17Q23-41 23-33V7Q23 17 14 17H-11Q-18 17-18 10V-35Q-18-41-11-41Z"
          fill="#171E17"
          stroke="#8D9A82"
          strokeWidth="2.7"
        />
        <path
          d="M10-43V-71Q10-74 14-74Q17-74 17-70V-43"
          fill="#1C251D"
          stroke="#7D826B"
          strokeWidth="2"
        />
        <rect x="-9" y="-29" width="23" height="10" rx="2" fill="#75A293" />
        <path
          d="M-7-11H11M-7-6H11M-7-1H11"
          fill="none"
          stroke="#68776B"
          strokeWidth="2.5"
        />
        <circle
          cx="14"
          cy="-35"
          r="2.6"
          fill={signal > 0.2 ? teal : "#7A8172"}
        />
        <path
          d="M-19-1-8-8 0-4-5 1 12 3 17 9 11 18-6 22-19 16-24 9Z"
          fill="#8A9382"
          stroke="#34463B"
          strokeWidth="2.5"
        />
        <path
          d="M-8 6 11 10M-8 12 9 15"
          fill="none"
          stroke="#59675B"
          strokeWidth="1.8"
        />
        <g
          fill="none"
          stroke={teal}
          strokeWidth="2.5"
          strokeLinecap="round"
          opacity={signal}
        >
          <path d="M29-71Q36-63 29-53M36-77Q49-64 37-47" />
        </g>
      </g>
    </g>
  );
};

const MonitoringStation: FC<{ frame: number }> = ({ frame }) => (
  <g>
    <path
      d="M480 1000 564 954 621 898 680 854 745 843 807 852 856 873 902 914 974 945 1080 975V1049H480Z"
      fill="#252824"
      stroke="#6E624F"
      strokeWidth="3"
    />
    <path
      d="M625 899 679 855 741 845 804 853 842 870 779 866 726 878 699 904 661 930 564 955Z"
      fill="#403C33"
    />
    <path
      d="M0 1035 195 1018 448 1023 704 1013 1080 1024V1465H0Z"
      fill="#2B3027"
    />
    <path
      d="M0 1059 298 1037 704 1032 1080 1043 1080 1159 740 1136 292 1147 0 1177Z"
      fill="#22291F"
    />
    <path
      d="M0 1177 292 1147 740 1136 1080 1159"
      fill="none"
      stroke="#746853"
      strokeWidth="3"
      opacity=".46"
    />
    <path
      d="M0 1009 110 1008 259 1008 434 1005M765 1005 913 1008 1080 1011M0 1039 435 1032M766 1031 1080 1039"
      fill="none"
      stroke="#9F8A61"
      strokeWidth="5"
      opacity=".65"
    />
    {[101, 274, 419, 790, 939].map((x) => (
      <path
        key={x}
        d={`M${x} 997V1077`}
        fill="none"
        stroke="#786C52"
        strokeWidth="7"
        opacity=".78"
      />
    ))}
    <path
      d="M0 1235 189 1217 300 1214 418 1226 649 1214 1080 1211V1480H0Z"
      fill="#32342B"
    />
    <path
      d="M0 1235 189 1217 300 1214 418 1226 649 1214 1080 1211"
      fill="none"
      stroke="#736951"
      strokeWidth="3"
    />
    <path
      d="M30 1315 309 1294 600 1298 1080 1281M0 1353 387 1340 836 1325 1080 1332"
      fill="none"
      stroke="#746B53"
      strokeWidth="3"
      opacity=".2"
    />
    <MonitoringScreen frame={frame} />
    <Worker frame={frame} />
  </g>
);

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
