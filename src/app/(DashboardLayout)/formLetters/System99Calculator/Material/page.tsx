"use client";
import HardieParts from "./HardieParts";
import Trim from "./Trim";
import VynilParts from "./VynilParts";
import CedarMill from "./CedarMill";
import SheetingTable from "./SheetingTable";
import GenericHomeWrap from "./GenericHomeWrap";
import HardieFascia from "./HardieFascia";
import Paint from "./Paint";
import WoodFascia from "./WoodFascia";
import DeckSurface from "./DeckSurface";
import RailingSystems from "./RailingSystems";
import DeckFrame from "./DeckFrame";
import DeckAndPorchCover from "./DeckAndPorchCover";
import Fence from "./Fence";
import ConcreteSlab from "./ConcreteSlab";
import ExtraParts from "./ExtraParts";
import WindowsParts from "./WindowsParts";
import VynilSoffit from "./VynilSoffit";

const Page = () => {
  return (
    <div>
      <HardieParts/>
      <Trim/>
      <VynilParts/>
      <CedarMill/>
      <SheetingTable/>
      <GenericHomeWrap/>
      <HardieFascia/>
      <Paint/>
      <WindowsParts/>
      <WoodFascia/>
      <VynilSoffit/>
      <DeckSurface/>
      <RailingSystems/>
      <DeckFrame/>
      <DeckAndPorchCover/>
      <Fence/>
      <ConcreteSlab/>
      <ExtraParts/>
    </div>
  );
};

export default Page;
