import { Interactive } from "remotion";

const tireRadius = 61;

const Wheel = ({ cx, distance }: { cx: number; distance: number }) => (
  <g transform={`translate(${cx} 245)`}>
    <g
      style={{
        transformOrigin: "0px 0px",
        rotate: `${(distance / tireRadius) * (180 / Math.PI)}deg`,
      }}
    >
      <circle r={tireRadius} fill="#10141A" />
      <circle r="54" fill="#242D36" stroke="#404D58" strokeWidth="3" />
      <circle
        r="50"
        fill="none"
        stroke="#141A21"
        strokeDasharray="11 11.44"
        strokeWidth="10"
      />
      <circle r="38" fill="#182128" stroke="#4B5965" strokeWidth="4" />
      <circle r="29" fill="#BF7316" stroke="#0F1419" strokeWidth="5" />
      <circle
        r="22"
        fill="none"
        stroke="#FBBF24"
        strokeDasharray="4 13.28"
        strokeWidth="4"
      />
      <circle r="13" fill="#323D47" stroke="#161B22" strokeWidth="4" />
      <path d="M-6 -2h12v4H-6z" fill="#DCE3E6" />
    </g>
  </g>
);

export const HaulTruck = ({ distance }: { distance: number }) => (
  <Interactive.Svg
    name="Mining haul truck illustration"
    width={640}
    height={320}
    viewBox="0 0 640 320"
    style={{ display: "block" }}
    aria-hidden
  >
    {/* Loaded rock silhouettes sit behind the upper lip of the bed. */}
    <path
      d="M55 87 81 58l28-4 20 12 37-35 40-3 34 19 35-22 39 8 28 24 28-7 35 37Z"
      fill="#485661"
      stroke="#161B22"
      strokeLinejoin="round"
      strokeWidth="5"
    />
    <path
      d="m82 61 26-4 20 13-18 17H64Zm85-27 37-3 31 19-19 15-26-7-33 11Zm108-6 37 8 26 23-28 4-29-20Z"
      fill="#65737D"
    />
    <path
      d="m129 71 28-5 32-8 28 8 25-16 37-8 31 22 28-6 31-5 28 34H115Z"
      fill="#3A4751"
    />

    <Interactive.Path
      name="Truck chassis"
      d="M107 187h478l15 17-13 38h-59l-32-15H173l-24 18h-38l-18-19Z"
      fill="#3C4853"
      stroke="#161B22"
      strokeLinejoin="round"
      strokeWidth="6"
    />
    <path d="M115 210h471l-7 16H122Z" fill="#27313A" />
    <path d="M193 214h76l-21 19h-48Zm133 0h92l-12 17h-84Z" fill="#11171D" />
    <path
      d="m245 196 73-47 11 15-74 48Z"
      fill="#8F5420"
      stroke="#161B22"
      strokeWidth="5"
    />
    <path d="m264 185 46-29 5 7-47 30Z" fill="#E3A848" />

    <Interactive.Path
      name="Ore dump bed"
      d="M29 83h322l57-26h43l-11 42-69 72H101l-55-32Z"
      fill="#F59E0B"
      stroke="#161B22"
      strokeLinejoin="round"
      strokeWidth="6"
    />
    <path d="M36 87h315l59-26h37l-6 18h-28l-57 29H41Z" fill="#FBBF24" />
    <path d="m49 133 62 23h251l65-68h13l-71 79H104l-54-30Z" fill="#AB6211" />
    <path d="M81 113h289l-30 35H113l-26-11Z" fill="#DB8813" />
    <path
      d="M117 110l22 45m42-45 18 45m47-45 10 45m48-45-5 45m49-45-17 45"
      fill="none"
      stroke="#FFC244"
      strokeLinejoin="round"
      strokeWidth="5"
    />
    <path d="M47 97h301l57-27" fill="none" stroke="#FFE0A0" strokeWidth="3" />
    <path
      d="M45 144v42h30v-12H55v-26"
      fill="#BE7115"
      stroke="#161B22"
      strokeWidth="4"
    />
    <path d="M51 173h15v7H51Z" fill="#F7EEE1" />

    {/* Near-side deck, operator cab, and engine housing. */}
    <Interactive.Path
      name="Operator cab"
      d="M459 107h13V77l14-11h66l10 13 10 53h22l15 22v37l-13 17H447v-47h12Z"
      fill="#F59E0B"
      stroke="#161B22"
      strokeLinejoin="round"
      strokeWidth="6"
    />
    <path d="m477 78 11-10h62l11 14h-84Z" fill="#FBBF24" />
    <path
      d="M485 87h63l9 48h-72Z"
      fill="#344958"
      stroke="#161B22"
      strokeLinejoin="round"
      strokeWidth="5"
    />
    <path d="M490 90h38l-38 39Z" fill="#567789" />
    <path d="M542 89l8 43h-7l-7-43Z" fill="#7997A5" />
    <path d="M509 87v48" stroke="#161B22" strokeWidth="4" />
    <path d="M479 142h78v26h-78Z" fill="#CC7A0B" />
    <path
      d="M488 146h19"
      stroke="#161B22"
      strokeLinecap="round"
      strokeWidth="4"
    />
    <path d="M559 140h32l12 16h-44Z" fill="#FBBF24" />
    <path d="M568 160h23v19h-23Z" fill="#3A4248" />
    <path d="M574 162v15m6-15v15m6-15v15" stroke="#697783" strokeWidth="2" />
    <path d="M597 163h10v12h-10Z" fill="#FFEFBE" />
    <path d="M446 183h144l-12 20H449Z" fill="#AA6412" />
    <path d="M437 170h122" stroke="#161B22" strokeWidth="6" />
    <path
      d="M437 169v-35h32m-15 0v35m15-35v35"
      fill="none"
      stroke="#FBBF24"
      strokeLinejoin="round"
      strokeWidth="4"
    />
    <path
      d="M417 173h45l-8 13h-43Z"
      fill="#FBBF24"
      stroke="#161B22"
      strokeWidth="4"
    />
    <path
      d="M425 185l-22 54m41-54-22 54m-5-39h21m-26 13h20m-25 13h20"
      fill="none"
      stroke="#161B22"
      strokeLinejoin="round"
      strokeWidth="7"
    />
    <path
      d="M425 185l-22 54m41-54-22 54m-5-39h21m-26 13h20m-25 13h20"
      fill="none"
      stroke="#DF9C35"
      strokeLinejoin="round"
      strokeWidth="3"
    />
    <path
      d="M517 65v-7h13v7"
      fill="#FFCE65"
      stroke="#161B22"
      strokeLinejoin="round"
      strokeWidth="3"
    />
    <path
      d="M568 113h15v-9h-3v-10h-7v15h-7Z"
      fill="#25313A"
      stroke="#161B22"
      strokeWidth="3"
    />

    <Wheel cx={157} distance={distance} />
    <Wheel cx={507} distance={distance} />
    <path
      d="M94 223c8-25 33-41 63-41s55 16 63 41m224 0c8-25 33-41 63-41s55 16 63 41"
      fill="none"
      stroke="#161B22"
      strokeLinecap="round"
      strokeWidth="10"
    />
    <path
      d="M94 221c8-25 33-41 63-41s55 16 63 41m224 0c8-25 33-41 63-41s55 16 63 41"
      fill="none"
      stroke="#E7951B"
      strokeLinecap="round"
      strokeWidth="5"
    />
    <path
      d="M599 194h20v13h-35l7-13Z"
      fill="#303B43"
      stroke="#161B22"
      strokeLinejoin="round"
      strokeWidth="4"
    />
  </Interactive.Svg>
);
