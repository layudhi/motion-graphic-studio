import { useId } from "react";
import { useCharacterArtwork } from "./CharacterArtwork";
import { skin } from "./People";

export const Porch = () => {
  const id = useId();

  return (
    <>
      <defs>
        <linearGradient id={`${id}-sunset`} x2="1" y2="1">
          <stop stopColor="#633f46" />
          <stop offset=".59" stopColor="#d58e60" />
          <stop offset="1" stopColor="#f7c985" />
        </linearGradient>
        <linearGradient id={`${id}-evening`} x2="0" y2="1">
          <stop stopColor="#111f30" stopOpacity=".96" />
          <stop offset=".37" stopColor="#111f30" stopOpacity="0" />
          <stop offset=".71" stopColor="#381e32" stopOpacity="0" />
          <stop offset="1" stopColor="#2a2735" stopOpacity=".6" />
        </linearGradient>
        <linearGradient id={`${id}-terrace`} x2="0" y2="1">
          <stop stopColor="#9b6959" />
          <stop offset="1" stopColor="#45515c" />
        </linearGradient>
      </defs>
      <rect
        x="-120"
        y="-120"
        width="1320"
        height="2160"
        fill={`url(#${id}-sunset)`}
      />
      <circle cx="882" cy="724" r="176" fill="#ffd98b" opacity=".88" />
      <path
        d="M-48 1051Q134 979 284 1007L421 1056Q568 988 708 1031L856 1019Q973 947 1123 1004V1247H-48Z"
        fill="#98696b"
        opacity=".57"
      />
      <path
        d="M-48 1152Q95 1028 233 1066L389 1150Q593 1093 677 1142L815 1149Q1018 1051 1121 1130V1287H-48Z"
        fill="#5f5b64"
        opacity=".8"
      />
      <path d="M-45 525 405 567 400 1390H-45Z" fill="#a67668" />
      <path d="M-72 589 386 613 388 673-72 654Z" fill="#d8a587" />
      <path
        d="M31 734 332 742 332 1155 31 1174Z"
        fill="#624d55"
        stroke="#c59074"
        strokeWidth="18"
      />
      <path d="M50 745 309 762V1137L52 1159Z" fill="#78585b" />
      <path
        d="M52 749 158 756Q141 916 71 1135L51 1154ZM313 756 203 759Q238 1019 299 1139L313 1139Z"
        fill="#cf9a78"
      />
      <path
        d="M41 943 322 941M176 754V1147"
        stroke="#704f57"
        strokeWidth="11"
      />
      <path
        d="M-45 1394 1105 1285 1140 1937H-73Z"
        fill={`url(#${id}-terrace)`}
      />
      <path
        d="M-32 1555 1121 1434M-18 1743 1119 1608M612 1338 406 1923M779 1316 922 1928"
        stroke="#e1ad79"
        strokeWidth="4"
        opacity=".25"
      />
      <path d="M398 550 1120 459V494L457 624H401Z" fill="#654b4e" />
      <path d="M929 512 965 508V1379L929 1391Z" fill="#905c51" />
      <path d="M928 515 937 513V1385L929 1390Z" fill="#e5b07f" opacity=".68" />
      <path d="M448 1237 1120 1191 1120 1220 448 1266Z" fill="#a16b5b" />
      <path
        d="M525 1250V1324M653 1244V1313M785 1229V1302M999 1213V1285"
        stroke="#825c56"
        strokeWidth="11"
      />
      <path
        d="M460 1239 1103 1198"
        stroke="#edaf7c"
        strokeWidth="4"
        opacity=".55"
      />
      <rect
        x="-120"
        y="-120"
        width="1320"
        height="2160"
        fill={`url(#${id}-evening)`}
      />
    </>
  );
};

export const matchHand = "translate(517 1114) rotate(8) scale(.72)";

export const Family = ({ transform }: { readonly transform?: string }) => {
  const { CrewHead, OpenHand } = useCharacterArtwork();
  return (
    <FamilyPose transform={transform} CrewHead={CrewHead} OpenHand={OpenHand} />
  );
};

type FamilyPoseProps = Pick<
  ReturnType<typeof useCharacterArtwork>,
  "CrewHead" | "OpenHand"
> & {
  readonly transform?: string;
};

const FamilyPose = ({ transform, CrewHead, OpenHand }: FamilyPoseProps) => (
  <g transform={transform}>
    <ellipse cx="493" cy="1647" rx="357" ry="34" fill="#493942" opacity=".43" />
    <path
      d="M224 1357 391 1370Q448 1392 440 1481L397 1604 361 1649H286L293 1554 316 1458Q226 1484 161 1552L130 1616 87 1615 88 1556Q120 1418 224 1357Z"
      fill="#35434e"
      stroke="#2d3a44"
      strokeWidth="8"
    />
    <path
      d="M227 1372 292 1425 218 1494 145 1554 118 1617 91 1610 96 1568Q129 1431 227 1372Z"
      fill="#465560"
    />
    <path
      d="M105 1599 141 1611 141 1638 104 1659H58Q49 1642 64 1632Z M290 1626 361 1627 377 1640 405 1648 406 1662H286Z"
      fill="#37424b"
      stroke="#263640"
      strokeWidth="6"
    />
    <path
      d="M61 1654 107 1655 141 1639M288 1660H405"
      stroke="#9d9b90"
      strokeWidth="5"
    />
    <path
      d="M171 1110Q180 1027 239 999L328 975 398 1008Q467 1029 466 1112L491 1397 452 1457 319 1465 180 1422Z"
      fill="#446766"
      stroke="#344e53"
      strokeWidth="8"
    />
    <path
      d="M223 1022 306 996 333 1046 353 1131 330 1445 199 1414 183 1168Z"
      fill="#567570"
    />
    <path
      d="M310 1002 326 1040 371 1080 408 1017 391 1004 357 1039 333 1018Z"
      fill="#263e46"
    />
    <path
      d="M302 923 359 916 386 991 405 1025 373 1053 328 1028 298 1000Z"
      fill={skin.base}
      stroke={skin.shadow}
      strokeWidth="6"
    />
    <CrewHead
      transform="translate(235 776) rotate(9 116 143) scale(1.22)"
      helmet={false}
    />
    <path
      d="M314 1058Q360 1067 386 1084 409 1108 418 1136"
      fill="none"
      stroke="#97a79a"
      strokeWidth="4"
      opacity=".56"
    />
    <path
      d="M477 1414Q524 1390 614 1398L747 1420 749 1518 731 1634 679 1642 663 1583 638 1491 602 1583 592 1641 535 1644 527 1568 508 1509Z"
      fill="#705b65"
      stroke="#57454f"
      strokeWidth="8"
    />
    <path
      d="M557 1462 611 1463 587 1584 579 1626 545 1629 541 1568Z M667 1488 710 1488 731 1528 718 1626 689 1630Z"
      fill="#8a6c71"
    />
    <path
      d="M538 1626 588 1624 611 1642 620 1657 525 1659 525 1645Z M680 1627 728 1625 753 1640 767 1655 675 1659Z"
      fill="#d6b38c"
      stroke="#5f4e53"
      strokeWidth="6"
    />
    <path d="M528 1654H618M677 1654H764" stroke="#f0d9b2" strokeWidth="5" />
    <path
      d="M439 1100Q469 1046 525 1033L588 1018Q650 1006 713 1049 775 1090 786 1187L802 1432 737 1511 487 1501 445 1397Z"
      fill="#c77459"
      stroke="#6b4a4f"
      strokeWidth="8"
    />
    <path
      d="M619 1040Q706 1030 752 1117L772 1199 783 1415 743 1471 637 1488 664 1312Z"
      fill="#d58b69"
    />
    <path
      d="M502 1065Q523 1044 577 1035L602 1061 638 1057 651 1044 672 1050 641 1081 580 1087 545 1071Z"
      fill="#b46656"
    />
    <g transform="translate(585 1053) scale(.79) translate(-585 -1053)">
      <path
        d="M525 913 611 937 632 1033Q601 1095 548 1053L514 1021Z"
        fill="#c98a64"
        stroke="#915d50"
        strokeWidth="6"
      />
      <path
        d="M488 903Q471 834 529 785 594 725 660 765 719 801 719 888L696 961 653 1026 565 1007 506 966Z"
        fill="#4a343c"
      />
      <path
        d="M506 841Q528 784 602 786 668 780 682 834L672 874 684 902 670 916 656 958Q620 993 565 973L532 952 508 926 488 912 484 887Z"
        fill="#e7a77b"
        stroke="#925c50"
        strokeWidth="5"
      />
      <path
        d="M514 826Q555 765 635 786Q680 800 678 829 636 836 585 811 562 847 529 858L527 910 505 941 487 919 474 885Z"
        fill="#4b343a"
      />
      <path
        d="M499 830Q533 769 608 780M498 852Q549 825 563 795"
        fill="none"
        stroke="#76505a"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <path
        d="M616 860Q630 854 642 859M606 878Q621 886 637 874M624 924Q640 932 657 916"
        fill="none"
        stroke="#694340"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M583 891Q603 898 610 909 591 918 578 907Z"
        fill="#d7886c"
        opacity=".75"
      />
      <path
        d="M513 915Q520 903 527 911M665 892 673 903 663 908"
        stroke="#9c5f55"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M497 932Q477 957 460 991L468 1033Q500 1019 520 983L533 950Z"
        fill="#4b343c"
      />
    </g>
    <path
      d="M480 1097Q458 1121 446 1167L412 1193 441 1231 493 1203Q517 1176 522 1144Z"
      fill="#ad6159"
      stroke="#805455"
      strokeWidth="6"
    />
    <path
      d="M422 1191 383 1200 363 1197Q340 1186 332 1197T354 1226Q401 1245 444 1223L443 1201Z"
      fill="#d99a70"
      stroke="#986052"
      strokeWidth="4"
    />
    <path
      d="M348 1204Q373 1218 390 1216"
      fill="none"
      stroke="#bb7c63"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <path
      d="M267 1045Q302 1029 334 1088L405 1147Q448 1154 517 1114"
      fill="none"
      stroke="#2e4d56"
      strokeWidth="105"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M267 1045Q302 1029 334 1088L405 1147Q448 1154 517 1114"
      fill="none"
      stroke="#527370"
      strokeWidth="92"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M272 1015Q301 1015 328 1062L401 1123Q444 1130 492 1106"
      fill="none"
      stroke="#789386"
      strokeWidth="14"
      strokeLinecap="round"
      opacity=".75"
    />
    <OpenHand transform={matchHand} bare gesture="rest" />
    <path
      d="M539 1450Q583 1481 621 1472M688 1473Q729 1471 755 1440"
      fill="none"
      stroke="#f0a67f"
      strokeWidth="5"
      opacity=".5"
    />
  </g>
);
