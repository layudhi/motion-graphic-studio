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
  useVideoConfig,
} from "remotion";
import { z } from "zod";
import { MonitoringScenes } from "./MonitoringScenes";
import { StockpileScenes } from "./StockpileScenes";
import captions from "./subtitles.provisional.json";

const bone = "#F1E8D5";
const amber = "#F5A33B";
const teal = "#8BD0C7";
const titleFont = "Swabakar Barlow Condensed";
const subtitleFont = "Swabakar Barlow";

export const batubaraSwabakarSchema = z.object({
  showSubtitles: z.boolean().describe("Tampilkan subtitle sementara"),
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

const Subtitle: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const timeMs = (1000 * frame) / fps;
  const caption = captions.find(
    ({ startMs, endMs }) => startMs <= timeMs && timeMs < endMs,
  );

  if (!caption) {
    return null;
  }

  return (
    <div
      style={{
        position: "absolute",
        left: 88,
        right: 180,
        bottom: 415,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        data-qa-role="subtitle"
        style={{
          padding: "12px 22px 14px",
          maxWidth: 812,
          boxSizing: "border-box",
          borderRadius: 12,
          backgroundColor: "rgba(15, 15, 13, 0.90)",
          color: bone,
          fontFamily: `"${subtitleFont}", sans-serif`,
          fontSize: 44,
          fontWeight: 600,
          lineHeight: 1.14,
          textAlign: "center",
          whiteSpace: "pre-line",
        }}
      >
        {caption.text}
      </div>
    </div>
  );
};

const Illustration: React.FC<{ readonly start: number }> = ({ start }) => {
  const localFrame = useCurrentFrame();
  const frame = start + localFrame;

  return (
    <>
      {start < 1038 ? (
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
          <Illustration start={0} />
          <Sequence layout="none" from={47}>
            <Keyword size={118} accentLastLine>
              {"PANAS\nTERSEMBUNYI"}
            </Keyword>
          </Sequence>
        </Sequence>
        <Sequence name="Tanpa pemantik" from={90} durationInFrames={201}>
          <Illustration start={90} />
          <Sequence layout="none" from={96}>
            <Keyword size={92}>TANPA PEMANTIK</Keyword>
          </Sequence>
        </Sequence>
        <Sequence name="Nama proses" from={291} durationInFrames={189}>
          <Illustration start={291} />
          <Sequence layout="none" from={95}>
            <Keyword size={120}>SWABAKAR</Keyword>
          </Sequence>
        </Sequence>
        <Sequence name="Oksidasi" from={480} durationInFrames={201}>
          <Illustration start={480} />
          <Sequence layout="none" from={76} durationInFrames={56}>
            <Keyword tone={teal}>OKSIGEN</Keyword>
          </Sequence>
          <Sequence layout="none" from={132}>
            <Keyword tone={teal}>OKSIDASI</Keyword>
          </Sequence>
        </Sequence>
        <Sequence name="Panas menumpuk" from={681} durationInFrames={249}>
          <Illustration start={681} />
          <Sequence layout="none" from={64}>
            <Keyword size={96} tone={amber}>
              PANAS MENUMPUK
            </Keyword>
          </Sequence>
        </Sequence>
        <Sequence name="Risiko kebakaran" from={930} durationInFrames={108}>
          <Illustration start={930} />
          <Keyword size={92} tone={amber}>
            RISIKO KEBAKARAN
          </Keyword>
        </Sequence>
        <Sequence
          name="Pengelolaan dan pemantauan"
          from={1038}
          durationInFrames={216}
        >
          <Illustration start={1038} />
          <Sequence layout="none" from={19} durationInFrames={105}>
            <Keyword size={92}>KELOLA TIMBUNAN</Keyword>
          </Sequence>
          <Sequence layout="none" from={124}>
            <Keyword tone={teal}>PANTAU SUHU</Keyword>
          </Sequence>
        </Sequence>
        <Sequence name="Laporan" from={1254} durationInFrames={63}>
          <Illustration start={1254} />
          <Keyword tone={teal} enter={false}>
            PANTAU SUHU
          </Keyword>
          <Sequence layout="none" from={12}>
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
