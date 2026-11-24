import { loadFont } from "@remotion/fonts";
import { Audio } from "@remotion/media";
import { useEffect, useState } from "react";
import {
  AbsoluteFill,
  Easing,
  interpolate,
  Sequence,
  staticFile,
  Track,
  useCurrentFrame,
  useDelayRender,
} from "remotion";
import { z } from "zod";
import { MonitoringScenes } from "./MonitoringScenes";
import { StockpileScenes } from "./StockpileScenes";

const bone = "#F1E8D5";
const amber = "#F5A33B";
const teal = "#8BD0C7";
const titleFont = "Swabakar Barlow Condensed";
const subtitleFont = "Swabakar Barlow";

export const batubaraSwabakarSchema = z.object({
  showSubtitles: z.boolean().describe("Subtitle dari WAV LAMA: belum sinkron dengan VO baru, jangan untuk final"),
});

type Props = z.infer<typeof batubaraSwabakarSchema>;

type KeywordProps = {
  readonly children: string;
  readonly size?: number;
  readonly tone?: string;
  readonly accentLastLine?: boolean;
  readonly top?: number;
  readonly enter?: boolean;
};

const Keyword: React.FC<KeywordProps> = ({
  children,
  size = 100,
  tone = bone,
  accentLastLine = false,
  top = 228,
  enter = true,
}) => {
  const frame = useCurrentFrame();
  const lines = children.split("\n");
  const progress = enter
    ? interpolate(frame, [0, 12], [0, 1], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: Easing.out(Easing.cubic),
      })
    : 1;

  return (
    <div
      style={{
        position: "absolute",
        left: 88,
        right: 180,
        top,
        opacity: progress,
        translate: `0 ${18 * (1 - progress)}px`,
        fontFamily: `"${titleFont}", sans-serif`,
        fontSize: size,
        fontWeight: 700,
        lineHeight: 0.91,
        letterSpacing: "0.01em",
        textShadow: "0 5px 28px rgba(13, 11, 9, 0.75)",
      }}
    >
      {lines.map((line, index) => (
        <div
          data-qa-role="keyword"
          key={line}
          style={{
            width: "max-content",
            whiteSpace: "nowrap",
            color: accentLastLine && index === lines.length - 1 ? amber : tone,
          }}
        >
          {line}
        </div>
      ))}
    </div>
  );
};

// The existing SRT/JSON cues were aligned to a DIFFERENT 43.88s WAV.
// Deliberately do not display them with the corrected 41.36s recording.
// The user may request showSubtitles during preview to see this explicit block.
const Subtitle: React.FC = () => (
  <div
    data-qa-role="subtitle-alignment-pending"
    style={{
      position: "absolute",
      left: 110,
      right: 110,
      bottom: 432,
      textAlign: "center",
      background: "rgba(12, 16, 14, 0.80)",
      color: "#F1E8D5",
      borderRadius: 12,
      padding: "12px 18px",
      fontSize: 31,
      fontFamily: "sans-serif",
      lineHeight: 1.25,
    }}
  >
    SUBTITLE MENUNGGU SINKRONISASI VO BARU
  </div>
);

// Retiming for the 41.36s replacement VO is *visual-only and provisional*.
// Keep the previously approved drawing motion while revising scene boundaries.
// This is not a substitute for sentence-level forced alignment against new WAV.
const Illustration: React.FC<{
  readonly oldStart: number;
  readonly oldEnd: number;
  readonly duration: number;
}> = ({ oldStart, oldEnd, duration }) => {
  const localFrame = useCurrentFrame();
  const ratio = Math.min(localFrame, duration - 1) / Math.max(1, duration - 1);
  const frame = oldStart + Math.round(ratio * (oldEnd - oldStart - 1));

  return (
    <>
      {frame < 1038 ? (
        <StockpileScenes frame={frame} />
      ) : (
        <MonitoringScenes frame={frame} />
      )}
      <AbsoluteFill
        style={{
          background:
            "linear-gradient(180deg, rgba(17, 16, 14, 0.44), transparent 37%)",
          pointerEvents: "none",
        }}
      />
    </>
  );
};

export const BatubaraSwabakar: React.FC<Props> = ({ showSubtitles }) => {
  const { delayRender, continueRender, cancelRender } = useDelayRender();
  const [fontHandle] = useState(() =>
    delayRender("Loading Swabakar typography"),
  );

  useEffect(() => {
    Promise.all([
      loadFont({
        family: titleFont,
        url: staticFile("fonts/batubara-swabakar/BarlowCondensed-Bold.ttf"),
        weight: "700",
      }),
      loadFont({
        family: subtitleFont,
        url: staticFile("fonts/batubara-swabakar/Barlow-SemiBold.ttf"),
        weight: "600",
      }),
    ])
      .then(() => continueRender(fontHandle))
      .catch(cancelRender);
  }, [cancelRender, continueRender, fontHandle]);

  return (
    <AbsoluteFill style={{ backgroundColor: "#191A18", overflow: "hidden" }}>
      <Track name="Adegan">
        <Sequence name="Panas tersembunyi" durationInFrames={90}>
          <Illustration oldStart={0} oldEnd={90} duration={90} />
          <Sequence layout="none" from={47}>
            <Keyword size={118} accentLastLine>
              {"PANAS\nTERSEMBUNYI"}
            </Keyword>
          </Sequence>
        </Sequence>
        <Sequence name="Tanpa pemantik" from={90} durationInFrames={188}>
          <Illustration oldStart={90} oldEnd={291} duration={188} />
          <Sequence layout="none" from={90}>
            <Keyword size={92}>TANPA PEMANTIK</Keyword>
          </Sequence>
        </Sequence>
        <Sequence name="Nama proses" from={278} durationInFrames={178}>
          <Illustration oldStart={291} oldEnd={480} duration={178} />
          <Sequence layout="none" from={90}>
            <Keyword size={120}>SWABAKAR</Keyword>
          </Sequence>
        </Sequence>
        <Sequence name="Oksidasi" from={456} durationInFrames={188}>
          <Illustration oldStart={480} oldEnd={681} duration={188} />
          <Sequence layout="none" from={71} durationInFrames={52}>
            <Keyword tone={teal}>OKSIGEN</Keyword>
          </Sequence>
          <Sequence layout="none" from={124}>
            <Keyword tone={teal}>OKSIDASI</Keyword>
          </Sequence>
        </Sequence>
        <Sequence name="Panas menumpuk" from={644} durationInFrames={234}>
          <Illustration oldStart={681} oldEnd={930} duration={234} />
          <Sequence layout="none" from={60}>
            <Keyword size={96} tone={amber}>
              PANAS MENUMPUK
            </Keyword>
          </Sequence>
        </Sequence>
        <Sequence name="Risiko kebakaran" from={878} durationInFrames={101}>
          <Illustration oldStart={930} oldEnd={1038} duration={101} />
          <Keyword size={92} tone={amber}>
            RISIKO KEBAKARAN
          </Keyword>
        </Sequence>
        <Sequence
          name="Pengelolaan dan pemantauan"
          from={979}
          durationInFrames={203}
        >
          <Illustration oldStart={1038} oldEnd={1254} duration={203} />
          <Sequence layout="none" from={18} durationInFrames={99}>
            <Keyword size={92}>KELOLA TIMBUNAN</Keyword>
          </Sequence>
          <Sequence layout="none" from={124}>
            <Keyword tone={teal}>PANTAU SUHU</Keyword>
          </Sequence>
        </Sequence>
        <Sequence name="Laporan" from={1182} durationInFrames={59}>
          <Illustration oldStart={1254} oldEnd={1317} duration={59} />
          <Keyword tone={teal} enter={false}>
            PANTAU SUHU
          </Keyword>
          <Sequence layout="none" from={11}>
            <Keyword size={94} tone={amber} top={329}>
              LAPORKAN
            </Keyword>
          </Sequence>
        </Sequence>
      </Track>
      {showSubtitles && (
        <Sequence name="Subtitle sementara" layout="none">
          <Subtitle />
        </Sequence>
      )}
      <Audio
        name="Narasi asli"
        src={staticFile("audio/VO_Batubara_Swabakar.wav")}
      />
    </AbsoluteFill>
  );
};
