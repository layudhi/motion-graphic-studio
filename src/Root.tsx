import { Composition } from "remotion";
import { MyComposition } from "./Composition";
import { MiningSafetyDemo } from "./MiningSafetyDemo";

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
    </>
  );
};
