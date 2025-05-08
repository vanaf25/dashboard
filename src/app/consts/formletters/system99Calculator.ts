import {TablesGroup} from "@/app/types/measurementsTypes";
import {INTERIOR_COLUMNS} from "@/app/consts/formletters/interiorColumns";
import {EAVES_COLUMNS} from "@/app/consts/formletters/eavesColumns";
import {UTILITIES_COLUMNS} from "@/app/consts/formletters/utilitiesColumns";
import {BARRIERS_COLUMNS} from "@/app/consts/formletters/barriersColumns";
import {CORNERS_COLUMNS, EXTERIOR_SIDING_COLUMNS} from "@/app/consts/formletters/exteriorSidingColumns";
import {LANDSCAPING_COLUMNS} from "@/app/consts/formletters/landscapingColumns";



export const COLUMNS={
    ...EAVES_COLUMNS,
    ...UTILITIES_COLUMNS,
    ...BARRIERS_COLUMNS,
    ...INTERIOR_COLUMNS,
    ...LANDSCAPING_COLUMNS,
  [TablesGroup.SIDING]: EXTERIOR_SIDING_COLUMNS,
  [TablesGroup.CORNERS]: CORNERS_COLUMNS,
}