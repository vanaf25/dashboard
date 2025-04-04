export class ExteriorSidingService {
    static calculateExteriorPaint({ wallArea, wallHeightLi, wallLengthLi }: { wallArea: number; wallHeightLi: number; wallLengthLi: number }) {
        return {
            PaintNewSidingBare: Math.ceil(wallArea / 175),
            PaintExistingSideBar: Math.ceil(wallArea / 320),
            PaintTrimQuantity: Math.ceil((wallLengthLi * wallHeightLi) / 3840 * 12)
        };
    }

    static plankSiding({ wallLength, wallHeight }: { wallLength: number; wallHeight: number }) {
        const { wallHeightLi } = this.getBasicExteriorVariables({ wallLength, wallHeight });
        const planksPerRow = wallLength / 12;
        const rows4Inch = Math.ceil(wallHeightLi / 4);
        const rows7Inch = Math.ceil(wallHeightLi / 7);
        const rows10_5Inch = Math.ceil(wallHeightLi / 10.5);
        const plankTotal4Inch = Math.ceil(rows4Inch * planksPerRow);
        const plankTotal7Inch = Math.ceil(rows7Inch * planksPerRow);
        const plankTotal10_5Inch = Math.ceil(rows10_5Inch * planksPerRow);
        return {
            PlanksPerRowQuantity: Math.ceil(planksPerRow),
            RowsPerWall4InchRevealQuantity: rows4Inch,
            RowsPerWall7InchRevealQuantity: rows7Inch,
            RowsPerWall10_5InchRevealQuantity: rows10_5Inch,
            PlankTotalQuantityPerWall4: plankTotal4Inch,
            PlankTotalQuantityPerWall7: plankTotal7Inch,
            PlankTotalQuantityPerWall10_5: plankTotal10_5Inch
        };
    }

    static calculateSheetSiding(WallArea: number) {
        return {
            SidingPanel4x8Quantity: Math.ceil(WallArea / 32),
            SidingPanel4x10Quantity: Math.ceil(WallArea / 40)
        };
    }

    static getBasicExteriorVariables({ wallLength, wallHeight }: { wallLength: number; wallHeight: number }) {
        return {
            wallArea: wallLength * wallHeight,
            wallLengthLi: wallLength * 12,
            wallHeightLi: wallHeight * 12
        };
    }

    static calculateHomeWrap(wallArea: number) {
        const S = Math.ceil(wallArea / 24);
        return {
            OSBSheathingQuantity: S,
            OSBSheathingNailQuantity: S * 24,
            ThermoplasticWrapRollQuantity: Math.ceil(wallArea / 1350)
        };
    }

    static stuccoWallCovering({ wallArea }: { wallArea: number }) {
        return {
            Basecoat80lbQuantityPer20: Math.ceil(wallArea / 20),
            Basecoat80lbQuantityPer15: Math.ceil(wallArea / 15),
            Basecoat80lbQuantityPer10: Math.ceil(wallArea / 10),
            Topcoat80lbQuantity: Math.ceil(wallArea / 65),
            SealerQuantity: Math.ceil(wallArea / 100),
            PaintAndSealerQuantity: Math.ceil(wallArea / 125)
        };
    }

    static brickWallCovering({ wallLengthLi, wallHeightLi, wallArea }: { wallLengthLi: number; wallHeightLi: number; wallArea: number }) {
        const area = wallLengthLi * wallHeightLi;
        return {
            CinderBlockQuantity: Math.ceil(area / 128),
            BrickQuantityPer18: Math.ceil(area / 18),
            BrickQuantityPer22: Math.ceil(area / 22),
            BrickQuantityPer27: Math.ceil(area / 27),
            BrickMortarQuantity: Math.ceil(wallArea / 128),
            CinderBlockMortarQuantity: Math.ceil(wallArea / 9),
            SealerQuantity: Math.ceil(wallArea / 200)
        };
    }

    static corners({ wallHeight, Q, U }: { wallHeight: number; Q: number; U: number }) {
        const InsideCornerQuantity = Math.ceil((wallHeight / 12) * Q);
        return {
            InsideCornerQuantity,
            OutsideCornerWoodQuantity: InsideCornerQuantity * 2,
            OutsideCornerVinylPrefabQuantity: Math.ceil((wallHeight / Q) * U)
        };
    }

    static vinylSiding({ wallLength, wallHeight }: { wallLength: number; wallHeight: number }) {
        const { wallHeightLi } = this.getBasicExteriorVariables({ wallLength, wallHeight });
        const wallLength16 = wallLength / 16;
        return {
            Siding12InchCoverageQuantity: Math.round(wallLength16 * wallHeight),
            SidingVariableCoverageQuantity: Math.ceil((wallLength16 * wallHeightLi) / wallHeight),
            StarterFriezeTrim12ftQuantity: Math.ceil(wallLength / 12),
            StarterFriezeTrimVariableQuantity: Math.ceil(wallLength / Math.ceil(wallLength / 10)),
            ...this.corners({ wallHeight, Q: 2, U: 10 })
        };
    }

    static getExteriorSiding({ length:wallLength, height:wallHeight, length12:cornerQuantity }: { length: number; height: number; length12: number }) {
        const calculateCorners = (U: number) => this.corners({ wallHeight, Q: cornerQuantity, U });
        const getSidingValues = (sidingName: string, sidingCalculation: any, cornerUnit: number) => {
            return {
                name: sidingName,
                values: {
                    ...sidingCalculation,
                    ...calculateCorners(cornerUnit)
                }
            };
        };
        const basicValues = this.getBasicExteriorVariables({ wallLength, wallHeight });
        const wallArea = basicValues.wallArea;
        return {
            basicValues,
            calculators: [
                getSidingValues("Sheet Siding", this.calculateSheetSiding(wallArea), 8),
                { name: "Home Wrap", values: this.calculateHomeWrap(wallArea) },
                getSidingValues("Plank Siding", this.plankSiding({ wallLength, wallHeight }), 12),
                getSidingValues("Brick Wall Covering", this.brickWallCovering(basicValues), 2),
                getSidingValues("Stucco Wall Covering", this.stuccoWallCovering({ wallArea }), 10),
                getSidingValues("Vinyl Siding", this.vinylSiding({ wallLength, wallHeight }), 10),
                { name: "Exterior Paint", values: this.calculateExteriorPaint(basicValues) }
            ]
        };
    }
}