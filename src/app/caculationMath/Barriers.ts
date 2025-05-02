type LatticeInput = { L: number; H: number };
type BushesInput = { L: number; H: number; SP: number; PP: number };
type RetainingWallInput = { L: number; DW: number; H: number; SS: number; SB: number; RA: number; VL: number };
type FencingInput = { L: number; H: number; G: number; C: number };
type DeckInput = { L: number; H: number; Y: number; PS: number; NL: number };

export class Barriers {
    static getBasicVariables(structureLength: number, structureHeight: number): { A: number; B: number } {
        return {
            A: structureLength * 12,
            B: structureHeight * 12
        };
    }

    static lattice({ L, H }: LatticeInput): {
        panelQuantity: number;
        panelTrimQuantity: number;
        panelScrewQuantity: number;
    } {
        const NQ = Math.ceil((L * H) / 32);
        return {
            panelQuantity: NQ,
            panelTrimQuantity: NQ * 4,
            panelScrewQuantity: NQ * 16
        };
    }

    static bushes({ L, H, SP, PP }: BushesInput): {
        plantsLinearQuantity: number;
        plantsRandomQuantity: number;
        holeExcavationSize: number;
    } {
        const { A, B } = this.getBasicVariables(L, H);
        return {
            plantsLinearQuantity: Math.ceil(A / SP),
            plantsRandomQuantity: Math.ceil((A * B) / SP),
            holeExcavationSize: PP * 2
        };
    }

    static retainingWall({ L, DW, H, SS, SB, RA, VL }: RetainingWallInput): Record<string, number> {
        const { A, B } = this.getBasicVariables(L, H);
        return {
            cinderBlockQuantity: Math.ceil((A * B) / 128),
            chopBlockQuantity: Math.ceil((A * B) / SS),
            brickQuantity: Math.ceil((A * B) / SB),
            retainingBlockQuantity: Math.ceil((A * B) / RA),
            concreteWallQuantity: Math.ceil(((L * DW) * H) / 27),
            singleLineQuantity: Math.ceil(A / VL)
        };
    }

    static fencing({ L, H, G, C }: FencingInput): Record<string, any> {
        const { A, B } = this.getBasicVariables(L, H);
        const L8 = L / 8;
        const ceilL8 = Math.ceil(L8);
        const ceilL8Plus1 = ceilL8 + 1;
        const Vp = Math.ceil(A / 5.5);
        const TQ = C * 6;

        return {
            "Cement 80lbs Bags(ea)": ceilL8Plus1,
            standardPanel: {
                PanelQuantity: ceilL8,
                postQuantity: ceilL8Plus1,
                fastenerQuantity: ceilL8Plus1 * 12,
            },
            picket: {
                verticalPicketQuantity: Vp,
                railHorizontalQuantity: Math.ceil((L / 16) * 3),
                halfPostQuantity: ceilL8Plus1,
                postAdapterQuantity: ceilL8Plus1 * 3,
                postAdapterScrewsQuantity: ceilL8Plus1 * 24,
                metalPostCapsQuantity: ceilL8Plus1,
                fastenerQuantity: (Vp * 6) + (ceilL8 * 12)
            },
            horizontal: {
                horizontalPicketQuantity: Math.ceil((L / 16) * (B / 5.5)),
                railVerticalQuantity: ceilL8,
                postQuantity: ceilL8,
                postAdapterQuantity: ceilL8Plus1 * 3,
                postAdapterScrewsQuantity: ceilL8Plus1 * 24,
                metalPostCapsQuantity: ceilL8Plus1,
                fastenerQuantity: ceilL8 * Math.ceil(B / 5.5) * 6
            },
            chainLink: {
                tensionBandQuantity: C * 6,
                bolts3InchQuantity: G * 2,
                linePostQuantity: L8,
                fabricRollQuantity: Math.ceil(L / 72),
                braceBandQuantity: C * 2,
                gateClipQuantity: G * 6,
                gatePostHingeQuantity: G * 2,
                gateFrameHingeQuantity: G * 2,
                gateForkLatchKitQuantity: G,
                bolt1_25InchQuantity: TQ,
                fenceTieQuantity: (L / 2) + (C * 6) + (L8 * 6),
                linePostEyeTopQuantity: L / 8,
                panelClampQuantity: Math.ceil(L / 6),
                hogRingQuantity: Math.ceil(L / 2),
                topRailSleeveConnectorQuantity: Math.ceil(L / 10),
                railEndQuantity: (C * 4) + 4,
                cornerPostPlugCapQuantity: C,
                cornerEndPostQuantity: C + 2,
                topRailQuantity: Math.ceil(L / 10),
                fabricBarQuantity: C + 2
            }
        };
    }

    static deck({ L, H, Y, PS, NL }: DeckInput): Record<string, any> {
        const { A } = this.getBasicVariables(L, H);
        const NP = Math.ceil(A / Y);
        const R = NP;
        const PQ = Math.ceil(L / PS) + 1;
        const SV = Math.ceil((PQ * 3.5) / 4);
        const SQ = Math.ceil((A - SV) / 4);

        return {
            railingFortress: {
                fortressRailPartQuantity: NP,
                fortressRailConnectorsQuantity: NP * 4,
                fortressRailPostQuantity: R,
                fortressRailBoltQuantity: R * 4
            },
            railingWood: {
                woodPostQuantity: PQ,
                woodSpindleVoid: SV,
                woodSpindleQuantity: SQ,
                woodRailQuantity: Math.ceil(L / PS) * 2,
                woodTopCapQuantity: PQ,
                woodSpindleFastenerQuantity: SQ * 4
            },
            railingPlastic: {
                plasticRailPartQuantity: Math.ceil(A / NL),
                plasticRailBracketQuantity: Math.ceil(A / NL) * 4,
                plasticRailPostQuantity: Math.ceil(A / NL) + 1
            }
        };
    }
    static main({ length, height, corners, gateQuantity, gateSize }: any) {
        const basicValues = this.getBasicVariables(length, height);

        return {
            basicValues: {
                "Structure Height (Width) li": basicValues.B,
                "Structure Length li": basicValues.A
            },
            calculators: [
                {
                    name: "Fence",
                    values: this.fencing({
                        L: length,
                        H: height,
                        C: corners,
                        G: gateQuantity
                    })
                },
                {
                    name: "Lattice",
                    values: this.lattice({
                        L: length,
                        H: height
                    })
                },
                {
                    name: "Bushes",
                    values: this.bushes({
                        L: length,
                        H: height,
                        SP: 36, // Spacing per plant in inches (default = 3 ft)
                        PP: 10  // Pot size in inches (default = 10")
                    })
                },
                {
                    name: "Retaining Wall",
                    values: this.retainingWall({
                        L: length,
                        H: height,
                        DW: 0.5,  // Wall Depth in ft (default = 6 inches)
                        SS: 24,   // Dry Stack Size in in² (default = 2 sq ft)
                        SB: 18,   // Brick Size in in² (default = 1.5 sq ft)
                        RA: 48,   // Retaining Block Face Area in in² (default = 4 sq ft)
                        VL: 16    // Any Block Length in inches (default = 16")
                    })
                },
                {
                    name: "Deck",
                    values: this.deck({
                        L: length,
                        H: height,
                        Y: 96,  // Rail Part Length in inches (default = 8 ft)
                        PS: 72, // Post Span in inches (default = 6 ft)
                        NL: 72  // Plastic Rail Length in inches (default = 6 ft)
                    })
                }
            ]
        };
    }

}
