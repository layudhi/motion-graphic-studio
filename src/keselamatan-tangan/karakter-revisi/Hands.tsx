import { useId } from "react";

export type HandGesture = "reach" | "point" | "rest";

type HandProps = {
  readonly transform?: string;
  readonly bare?: boolean;
  readonly gesture?: HandGesture;
};

const silhouettes: Record<HandGesture, string> = {
  reach:
    "M-5-28 34-32C50-35 57-44 64-54L85-79C94-90 106-89 112-83C118-77 114-68 109-60L97-42C111-39 129-40 147-45L214-66C227-71 239-66 241-58C243-49 234-44 224-41L162-18 238-35C249-38 259-33 259-26C260-17 251-12 241-10L164 10 229-1C242-4 249 2 250 9C251 16 245 22 233 25L160 38 200 34C212 33 219 38 218 46C217 53 208 57 198 58L142 65C116 70 98 68 81 57L53 42C36 34 22 32-5 33Z",
  point:
    "M-5-30 36-34C50-38 61-48 73-64L88-79C97-86 108-85 113-79C120-73 114-64 107-53L99-39C115-41 135-53 159-57L227-77C242-81 253-77 255-67C257-58 247-53 235-49L173-26 152-15C172-21 187-13 188-2C189 4 184 11 176 14C193 15 197 23 191 33C188 39 178 43 169 44C179 47 181 54 176 60C165 74 125 77 103 70C82 64 63 54 46 43C33 35 14 33-5 33Z",
  rest: "M-5-27 32-33Q52-34 64-48L81-67Q93-80 104-76Q116-70 109-57L101-44Q120-48 136-44L193-35C212-34 228-26 236-15C241-8 233 0 224-4L200-15 159-20 219 3C234 10 239 18 234 25C229 34 218 29 205 23L159 10 198 35C210 44 211 51 205 56C198 63 188 57 180 52L139 32 167 55C174 62 174 69 168 73C161 78 153 73 144 68L106 50C87 57 70 52 54 44L32 36-5 35Z",
};

const seams: Record<HandGesture, string> = {
  reach: "M160-36 173-27M169-5 182 5M167 23 180 31M161 47 173 50",
  point:
    "M158-43 172-35M127-7Q151-15 174-10M126 19Q154 14 180 16M118 45Q141 40 168 43",
  rest: "M164-33 168-20M170-7 165 8M162 19 155 31M145 39 138 50",
};

export const RevisedHand = ({
  transform,
  bare = false,
  gesture = "reach",
}: HandProps) => {
  const id = useId();
  const contour = bare ? "#784a3f" : "#172c38";

  return (
    <g transform={transform}>
      <defs>
        <linearGradient id={`${id}-dorsal`} x2=".6" y2="1">
          <stop stopColor={bare ? "#f0b691" : "#8ea0a9"} />
          <stop offset=".54" stopColor={bare ? "#d79874" : "#526977"} />
          <stop offset="1" stopColor={bare ? "#b7765a" : "#334857"} />
        </linearGradient>
        <linearGradient id={`${id}-pad`} x2=".5" y2="1">
          <stop stopColor="#9aadb2" />
          <stop offset="1" stopColor="#536d76" />
        </linearGradient>
      </defs>
      <path
        d={silhouettes[gesture]}
        fill={`url(#${id}-dorsal)`}
        stroke={contour}
        strokeWidth="3.7"
        strokeLinejoin="round"
      />
      <path
        d={seams[gesture]}
        stroke={contour}
        strokeWidth="2.6"
        opacity=".64"
        strokeLinecap="round"
        fill="none"
      />
      {bare ? (
        <>
          <path
            d="M13-14Q46-20 74-43M24 18Q58 24 90 36"
            fill="none"
            stroke="#f4c5a3"
            strokeWidth="4"
            opacity=".67"
            strokeLinecap="round"
          />
          {gesture === "rest" && (
            <path
              d="M225-19Q235-16 234-10 231-8 225-11L218-15Z M223 13Q232 15 232 22 229 26 220 22L214 18Z M195 45Q203 48 202 52 198 55 191 50Z M157 65Q165 68 165 71 160 73 153 69Z"
              fill="#f4c5ad"
              opacity=".84"
            />
          )}
        </>
      ) : (
        <>
          <path
            d="M54-20Q66-33 85-34L115-35 143-22 147-7 137 15 111 28 80 23 62 13Z"
            fill={`url(#${id}-pad)`}
            stroke="#334d5a"
            strokeWidth="3.6"
          />
          <path
            d="M66-15Q80-30 102-26L126-22M72 4Q91 15 111 15"
            fill="none"
            stroke="#bcc7c6"
            strokeWidth="2.1"
            opacity=".67"
            strokeLinecap="round"
          />
          <path d="M69-55 90-76 98-71 83-50Z" fill="#afbbbe" opacity=".54" />
          {gesture === "reach" && (
            <path
              d="M150-42 205-58 210-51 155-33ZM160-12 223-27 225-19 164-4ZM159 13 219 4 221 12 160 21ZM147 41 191 38 193 46 147 50Z"
              fill="#9cadae"
              opacity=".67"
            />
          )}
          {gesture === "point" && (
            <path
              d="M158-54 224-72 228-65 162-47ZM148 3 182 2M144 29 180 28M135 53 165 52"
              fill="none"
              stroke="#a7b5b8"
              strokeWidth="4"
              opacity=".65"
              strokeLinecap="round"
            />
          )}
          {gesture === "rest" && (
            <path
              d="M143-35Q186-32 216-19M146-13 206 5M143 11 184 37M133 32 154 56"
              fill="none"
              stroke="#9fadb0"
              strokeWidth="4"
              opacity=".65"
              strokeLinecap="round"
            />
          )}
          <path
            d="M-7-31 25-34 35 33-8 37Z"
            fill="#263b49"
            stroke="#152d39"
            strokeWidth="3.8"
          />
          <path d="M-3-25 9-26 14 31 2 32Z" fill="#be8755" />
          <path
            d="M25-32 30 29"
            stroke="#84999b"
            strokeWidth="2"
            opacity=".5"
          />
        </>
      )}
    </g>
  );
};

export const RevisedGrip = ({ transform }: { readonly transform?: string }) => {
  const id = useId();

  return (
    <g transform={transform}>
      <defs>
        <linearGradient id={`${id}-grip`} x2=".68" y2="1">
          <stop stopColor="#93a6aa" />
          <stop offset=".53" stopColor="#596f7d" />
          <stop offset="1" stopColor="#2c414f" />
        </linearGradient>
      </defs>
      <path
        d="M-6-29 39-35Q54-43 72-44L103-41Q124-39 135-27L154-12Q160-1 154 17L145 29Q131 44 106 49L69 47Q53 42 37 34L-8 35Z"
        fill={`url(#${id}-grip)`}
        stroke="#1c303d"
        strokeWidth="4.5"
      />
      <path
        d="M52-28Q74-40 107-29L126-15 126-4 111 14 75 16 61 7Z"
        fill="#768e97"
        stroke="#3e5764"
        strokeWidth="3"
      />
      <path
        d="M99-17Q117-12 131 1M109-6Q128 0 144 12M115 8Q130 14 141 22M108 23Q123 26 133 33"
        fill="none"
        stroke="#304b58"
        strokeWidth="3"
        opacity=".88"
        strokeLinecap="round"
      />
      <path
        d="M74 31Q82 19 100 14L125 12Q138 6 148 8C156 10 154 21 147 27L125 39 103 47Z"
        fill="#647f88"
        stroke="#2a4552"
        strokeWidth="3.6"
      />
      <path
        d="M95 31 112 24 135 20"
        fill="none"
        stroke="#97acad"
        strokeWidth="2.8"
        strokeLinecap="round"
        opacity=".7"
      />
      <path
        d="M-8-33 30-35 36 35-9 38Z"
        fill="#253b49"
        stroke="#192e3a"
        strokeWidth="4"
      />
      <path d="M-2-27 11-28 15 30 1 31Z" fill="#ba8452" />
    </g>
  );
};
