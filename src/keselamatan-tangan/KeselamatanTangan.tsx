import { loadFont } from "@remotion/fonts";
import { Audio } from "@remotion/media";
import { useEffect, useState } from "react";
import {
  AbsoluteFill,
  Sequence,
  staticFile,
  Track,
  useDelayRender,
} from "remotion";
import { ComeHomeSafe, SameHands } from "./ClosingScenes";
import { JsaReview, SafeWork } from "./ControlScenes";
import { palette } from "./Design";
import { Hook, PinchPoint, Routine } from "./WorkshopScenes";

export const KeselamatanTangan = () => {
  const { delayRender, continueRender, cancelRender } = useDelayRender();
  const [fontHandle] = useState(() => delayRender("Memuat Barlow Condensed"));

  useEffect(() => {
    loadFont({
      family: "Keselamatan Barlow Condensed",
      url: staticFile("fonts/batubara-swabakar/BarlowCondensed-Bold.ttf"),
      weight: "700",
    }).then(() => continueRender(fontHandle), cancelRender);
  }, [fontHandle, continueRender, cancelRender]);

  return (
    <AbsoluteFill style={{ backgroundColor: palette.deep, overflow: "hidden" }}>
      <Track name="Adegan JSA">
        <Sequence name="Hook" durationInFrames={90}>
          <Hook />
        </Sequence>
        <Sequence name="Jebakan rutinitas" from={90} durationInFrames={246}>
          <Routine />
        </Sequence>
        <Sequence name="Titik jepit" from={336} durationInFrames={368}>
          <PinchPoint />
        </Sequence>
        <Sequence
          name="SOP, JSA, dan kontrol"
          from={704}
          durationInFrames={456}
        >
          <JsaReview />
        </Sequence>
        <Sequence name="Kerja terkendali" from={1160} durationInFrames={237}>
          <SafeWork />
        </Sequence>
        <Sequence name="Tangan yang sama" from={1397} durationInFrames={335}>
          <SameHands />
        </Sequence>
        <Sequence name="Pulang selamat" from={1732} durationInFrames={248}>
          <ComeHomeSafe />
        </Sequence>
      </Track>
      <Track name="Suara">
        <Audio
          name="VO sumber"
          src={staticFile("audio/vo_video_k3_jsa_tangan_kpc.wav")}
          from={0}
          volume={1}
        />
        <Audio
          name="Ambience dan efek orisinal"
          src={staticFile("audio/keselamatan-tangan-sfx.wav")}
          from={0}
        />
      </Track>
    </AbsoluteFill>
  );
};
