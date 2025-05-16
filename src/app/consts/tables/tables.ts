import {MeasurementsType, TablesGroup} from "@/app/types/measurementsTypes";
import {Barriers} from "@/app/caculationMath/Barriers";
import {ExteriorSidingService} from "@/app/caculationMath/ExteriorSiding";
import {TalesPropertiesType} from "@/app/types/tablesTypes";

type LayoutRule = { xs: number; sm: number; md: number };
type LayoutRulesType = {
    [K in (typeof TablesGroup)[keyof typeof TablesGroup]]?: LayoutRule;
};
export  const LayoutRules: LayoutRulesType = {
    [TablesGroup.BARRIERS_GATES]: {xs:12, sm:12, md:12},
    [TablesGroup.BARRIERS_FENCE]: {xs:12, sm:12, md:12},
    [TablesGroup.SIDING]: {xs:12, sm:6, md:4},
    [TablesGroup.CORNERS]: {xs:12, sm:6, md:6},
    [TablesGroup.UTILITIES_ROOM]: {xs:12, sm:6, md:6},
    [TablesGroup.EAVES_SOFFIT]: {xs:12, sm:6, md:6},
    [TablesGroup.EAVES_FASCIA]: {xs:12, sm:6, md:6},
    [TablesGroup.LANDSCAPING_YARD]:{xs:12,sm:6,md:6},
    [TablesGroup.ROOF_MAIN]:{xs:12,sm:6,md:6}
};

export  const calculationFunctions={
    [MeasurementsType.BARRIERS]:Barriers.main.bind(Barriers),
    [MeasurementsType.EXTERIOR_SIDING]:ExteriorSidingService.getExteriorSiding.bind(ExteriorSidingService),
    [MeasurementsType.UTILITIES]:()=>null,
    [MeasurementsType.EAVES]:()=>null,
    [MeasurementsType.INTERIOR]:()=>null,
    [MeasurementsType.LANDSCAPING]:()=>null,
    [MeasurementsType.ROOF]:()=>null,
    [MeasurementsType.STRUCTURES]:()=>null,
    [MeasurementsType.APERTURES]:()=>null
}

const roofPitchOptions=["Low Pitch",
    "4/12 Pitch",
    "6/12 Pitch",
    "8/12 Pitch",
    "10/12 Pitch"]
const AperturesProperties=[
    {name:"argonGlass",
        label:"LOW E ARGON Package",type:"select",options:["Yes","No"]},
    {name:"soundReduction",label:"Sound reduction package",type:"select",options:["Yes","No"]},
    {name:"frameColor",label:"Frame Color",type:"select",options:["White","Brown","Custom"]},
    {name:"frameType",label:"Frame Type",type:"text"},
    {name:"customColor",label:"Custom Frame Color",type:"text"},
]
export  const TablesProperties:TalesPropertiesType={
    [TablesGroup.STRUCTURES_COVERED]:[
        {name:"roofPitch",label:"Roof Pitch",type:"select",options:roofPitchOptions},
        {name:"roofStyle",label:"Roof style",type:"select",options:[
                "Flat & Low Slope",
                "Gable Roof",
                "Hip Roof"
            ]}
    ],
    [TablesGroup.APERTURES_DOORS]:AperturesProperties,
    [TablesGroup.APERTURES_WINDOWS]:AperturesProperties,
    [TablesGroup.ROOF_MAIN]:[{name:"roofPitch",label:"Roof Pitch",type:"select",options:roofPitchOptions}]
}