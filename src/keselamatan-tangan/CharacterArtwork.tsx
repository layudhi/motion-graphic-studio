import { createContext, useContext } from "react";
import type { ComponentProps, ComponentType, ReactNode } from "react";
import {
  RevisedArm,
  RevisedCrewHead,
  RevisedMechanic,
} from "./karakter-revisi/Crew";
import { RevisedGrip, RevisedHand } from "./karakter-revisi/Hands";
import type { HandGesture } from "./karakter-revisi/Hands";
import { ClosedGlove, CrewHead, Mechanic, OpenHand, WorkArm } from "./People";

type Artwork = {
  readonly revised: boolean;
  readonly OpenHand: ComponentType<
    ComponentProps<typeof OpenHand> & { readonly gesture?: HandGesture }
  >;
  readonly ClosedGlove: typeof ClosedGlove;
  readonly CrewHead: typeof CrewHead;
  readonly Mechanic: typeof Mechanic;
  readonly WorkArm: typeof WorkArm;
};

const CharacterArtwork = createContext<Artwork>({
  revised: false,
  OpenHand,
  ClosedGlove,
  CrewHead,
  Mechanic,
  WorkArm,
});

const revisedArtwork: Artwork = {
  revised: true,
  OpenHand: RevisedHand,
  ClosedGlove: RevisedGrip,
  CrewHead: RevisedCrewHead,
  Mechanic: RevisedMechanic,
  WorkArm: RevisedArm,
};

export const useCharacterArtwork = () => useContext(CharacterArtwork);

export const RevisedCharacterArtwork = ({
  children,
}: {
  readonly children: ReactNode;
}) => (
  <CharacterArtwork.Provider value={revisedArtwork}>
    {children}
  </CharacterArtwork.Provider>
);
