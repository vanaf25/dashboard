import { createClient } from "@/lib/supabaseServer";
import {NextRequest, NextResponse} from "next/server";


export async function PATCH(req: NextRequest,
                            { params }: { params: { id: string } }
) {
    try {
        const {id}=params
        const supabase =await createClient();
        const body = await req.json();
/*
        const {  fields, custom_fields, line_items, notes, terms } = body;
*/
        if (!id) {
            return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
        }
        const { error,data } = await supabase
            .from("documents")
            .update(body)
            .eq("id", id).select().single();
        if (error) {
            throw error;
        }
        return NextResponse.json({...data});
    } catch (error: any) {
        console.error("Error updating document:", error.message);
        return NextResponse.json({ message: "Error updating document", error: error.message }, { status: 500 });
    }
}
