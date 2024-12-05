"use client"
import FormCreator from "@/app/components/system99/calculations/Form/Form";

const Fencing = () => {
  const inputFields = [
    { label: "Fence Length (LF)", name: "L", id: "outlined-basic1" },
    { label: "Fence Height (LF)", name: "H", id: "outlined-basic2" },
    { label: "Gate Quantity (ea)", name: "B", id: "outlined-basic3" },
    { label: "Corner Quantity (ea)", name: "C", id: "outlined-basic4" }
  ];
  const result=[
    { "id": "cementTotal", "value": 0, "label": "cement Total" },
    { "id": "standardPanelTotal", "value": 0, "label": "standard Panel Total" },
    { "id": "standardPostTotal", "value": 0, "label": "standard Post Total" },
    { "id": "picketHalfPostTotal", "value": 0, "label": "picket Half Post Total" },
    { "id": "picketMetalPostCapTotal", "value": 0, "label": "picket Metal Post Cap Total" },
    { "id": "verticalPicketTotal", "value": 0, "label": "vertical Picket Total" },
    { "id": "picketRailTotal", "value": 0, "label": "picket Rail Total" },
    { "id": "picketPostAdapterTotal", "value": 0, "label": "picket Post Adapter Total" },
    { "id": "chainLinkLength", "value": 0, "label": "chain Link Length" },
    { "id": "chainLinkTensionBandTotal", "value": 0, "label": "chain Link Tension Band Total" },
    { "id": "chainLinkBraceBandTotal", "value": 0, "label": "chain Link Brace Band Total" },
    { "id": "chainLinkRailEndTotal", "value": 0, "label": "chain Link Rail End Total" },
    { "id": "chainLinkBoltTotal", "value": 0, "label": "chain Link Bolt Total" },
    { "id": "chainLinkGateClipTotal", "value": 0, "label": "chain Link Gate Clip Total" },
    { "id": "chainLinkGatePostHingeTotal", "value": 0, "label": "chain Link Gate Post Hinge Total" },
    { "id": "chainLinkGateFrameHingeTotal", "value": 0, "label": "chain Link Gate Frame Hinge Total" },
    { "id": "chainLinkForkLatchKitTotal", "value": 0, "label": "chain Link Fork Latch Kit Total" },
    { "id": "chainLinkBolt1_25Total", "value": 0, "label": "chain Link Bolt 1 1/4 Total" },
    { "id": "chainLinkLinePostTotal", "value": 0, "label": "chain Link Line Post Total" },
    { "id": "chainLinkFabricRollTotal", "value": 0, "label": "chain Link Fabric Roll Total" },
    { "id": "chainLinkFenceTieTotal", "value": 0, "label": "chain Link Fence Tie Total" },
    { "id": "chainLinkLinePostEyeTopTotal", "value": 0, "label": "chain Link Line Post Eye Top Total" },
    { "id": "chainLinkPanelClampTotal", "value": 0, "label": "chain Link Panel Clamp Total" },
    { "id": "chainLinkHogRingTotal", "value": 0, "label": "chain Link Hog Ring Total" },
    { "id": "chainLinkTopRailSleeveConnectorTotal", "value": 0, "label": "chain Link Top Rail Sleeve Connector Total" },
    { "id": "chainLinkCornerPostPlugCapTotal", "value": 0, "label": "chain Link Corner Post Plug Cap Total" },
    { "id": "chainLinkCornerEndPostTotal", "value": 0, "label": "chain Link Corner End Post Total" },
    { "id": "chainLinkTopRailTotal", "value": 0, "label": "chain Link Top Rail Total" },
    { "id": "chainLinkFabricBarTotal", "value": 0, "label": "chain Link Fabric Bar Total" }
  ]
  return (
    <div>
        <FormCreator inputFields={inputFields} url={"fencing"} result={result}/>
    </div>
  );
};

export default Fencing;
