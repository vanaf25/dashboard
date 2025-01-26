import { createClient } from "@/lib/supabaseServer";
import {NextRequest, NextResponse} from "next/server";


export async function PATCH(req: NextRequest,
                            { params }: { params: { id: string } }
) {
    try {
        const {id}=params
        const supabase =await createClient();
        const body = await req.json();
        const {  fields, custom_fields, line_items, notes, terms } = body;
        if (!id) {
            return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
        }
        const { error } = await supabase
            .from("documents")
            .update({
                fields,
                custom_fields: custom_fields || [],
                line_items,
                terms,
                notes: notes || "",
            })
            .eq("id", id);
        if (error) {
            throw error;
        }
        return NextResponse.json({...body});
    } catch (error: any) {
        console.error("Error updating document:", error.message);
        return NextResponse.json({ message: "Error updating document", error: error.message }, { status: 500 });
    }
}
