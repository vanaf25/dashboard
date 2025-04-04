"use client";
import SquareFootage from "./SquareFootage";
import Size from "./Size";
import Windows from "./Windows";
import Doors from "./Doors";
import LineerFeet from "./LineerFeet";
import Deck from "./Deck";
import Fence from "./Fence";
import Cover from "./Cover";
import ExtraBoards from "./ExtraBoards";
import ExtraItems from "./ExtraItems";
import SupplyLength from "./SupplyLength";
import Excavation from "./Excavation";
import Concrete from "./Concrete";
/*
import Doors from "./Doors";
import LineerFeet from "./LineerFeet";
import Deck from "./Deck";
import Fence from "./Fence";
import Cover from "./Cover";
import Concrete from "./Concrete";
import Excavation from "./Excavation";
import ExtraBoards from "./ExtraBoards";
import ExtraItems from "./ExtraItems";
import SupplyLength from "./SupplyLength";
*/

const EditableTables = () => {
  return (
    <>
      <Size/>
    <Windows/>
      <Doors/>
      <LineerFeet/>
      <Deck/>
      <Fence/>
      <Cover/>
      <Concrete additionalColumns={[]}/>
      <Excavation additionalColumns={[]}/>
      <ExtraBoards/>
      <ExtraItems/>
      <SupplyLength/>
    </>

  );
};

export default EditableTables;
