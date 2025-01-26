import { NextResponse } from "next/server";
import {createClient} from "@/lib/supabaseServer";


export async function POST(req: Request) {
    try {
        const supabase=await createClient();
        const { data:user, error:authError } = await supabase.auth.getUser()
        const userId = user?.user?.id;
        const body = await req.json();
        const { fields, type,service, customFields, lineItems, notes, clientId } = body;
        if (!userId ||  !fields || !type || !lineItems || !clientId || !service) {
            return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
        }
        console.log('body:',body);
        const { data, error } = await supabase
            .from("documents")
            .insert([
                {
                    created_by: userId,
                    fields,
                    service,
                    company: "",
                    type: "quote",
                    custom_fields: customFields || [],
                    line_items: lineItems,
                    notes: notes || "",
                    client_id: clientId,
                },
            ])
            .select()
            .single();

        if (error) {
            throw error;
        }

        return NextResponse.json({ data });
    } catch (error: any) {
        console.error("Error adding document:", error.message);
        return NextResponse.json({ message: "Error adding document", error: error.message }, { status: 500 });
    }
}
