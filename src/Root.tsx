import { Composition } from "remotion";
import { MyComposition } from "./Composition";
import { MiningSafetyDemo } from "./MiningSafetyDemo";
import { KeselamatanTangan } from "./keselamatan-tangan/KeselamatanTangan";
import { KeselamatanTanganRevisiKarakter } from "./keselamatan-tangan/KeselamatanTanganRevisiKarakter";
import {
  BatubaraSwabakar,
  batubaraSwabakarSchema,
} from "../projects/batubara-swabakar/BatubaraSwabakar";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <MyComposition />
      <Composition
        id="MiningSafetyDemo"
        component={MiningSafetyDemo}
        width={1080}
        height={1920}
        fps={30}
        durationInFrames={300}
      />
      <Composition
        id="BatubaraSwabakar"
        component={BatubaraSwabakar}
        width={1080}
        height={1920}
        fps={30}
        durationInFrames={1241}
        schema={batubaraSwabakarSchema}
        defaultProps={{ showSubtitles: false }}
      />
      <Composition
        id="KeselamatanTangan"
        component={KeselamatanTangan}
        width={1080}
        height={1920}
        fps={30}
        durationInFrames={1980}
      />
      <Composition
        id="KeselamatanTanganRevisiKarakter"
        component={KeselamatanTanganRevisiKarakter}
        width={1080}
        height={1920}
        fps={30}
        durationInFrames={1980}
      />
    </>
  );
};
