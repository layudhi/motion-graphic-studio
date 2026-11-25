import type { ReactNode } from "react";
import { Easing, interpolate } from "remotion";

export const palette = {
  navy: "#112436",
  deep: "#0b1928",
  steel: "#466278",
  ink: "#172b3c",
  ivory: "#f5f3eb",
  amber: "#f9b44f",
  green: "#64cc9a",
  gold: "#fad089",
  orange: "#d87c43",
};

const easeOut = Easing.bezier(0.16, 1, 0.3, 1);

export const rise = (frame: number, start: number, end: number) =>
  interpolate(frame, [start, end], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: easeOut,
  });

export const glide = (frame: number, start: number, end: number) =>
  interpolate(frame, [start, end], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.inOut(Easing.cubic),
  });

export const Artwork = ({ children }: { readonly children: ReactNode }) => (
  <svg
    viewBox="0 0 1080 1920"
    width="1080"
    height="1920"
    aria-hidden="true"
    style={{ position: "absolute", inset: 0, overflow: "hidden" }}
  >
    {children}
  </svg>
);

export const Keyword = ({
  lines,
  progress = 1,
  x = 94,
  y = 176,
  size = 126,
  accent = palette.amber,
}: {
  readonly lines: readonly string[];
  readonly progress?: number;
  readonly x?: number;
  readonly y?: number;
  readonly size?: number;
  readonly accent?: string;
}) => (
  <div
    data-hand-safety-keyword
    style={{
      position: "absolute",
      left: x,
      top: y,
      opacity: progress,
      translate: `0 ${(1 - progress) * 22}px`,
      color: palette.ivory,
      fontFamily: '"Keselamatan Barlow Condensed", "Arial Narrow", sans-serif',
      fontWeight: 700,
      fontSize: size,
      letterSpacing: "0.016em",
      lineHeight: 0.91,
      textShadow: "0 5px 20px #0b192850",
      whiteSpace: "nowrap",
    }}
  >
    <div
      style={{
        width: Math.round(size * 0.65),
        height: 7,
        marginBottom: 27,
        background: accent,
        scale: `${progress} 1`,
        transformOrigin: "left center",
      }}
    />
    {lines.map((line, index) => (
      <div
        key={line}
        style={{
          color: index === lines.length - 1 ? accent : palette.ivory,
        }}
      >
        {line}
      </div>
    ))}
  </div>
);
