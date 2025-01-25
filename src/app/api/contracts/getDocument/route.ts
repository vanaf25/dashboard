import { createClient } from "@/lib/supabaseServer";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest): Promise<NextResponse> {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get("slug");
    console.log('slug:',slug);
    if (!slug) {
        return NextResponse.json(
            { error: "Slug is required" },
            { status: 400 }
        );
    }

    try {
        // Create the Supabase client
        const supabase = await createClient();

        // Fetch the document from the database
        const { data, error } = await supabase
            .from("documents")
            .select(
                `
        *,
        profiles!created_by (*),
        customers!client_id (*)
      `
            )
            .eq("id", slug)
            .single();

        if (error) {
            console.error("Error fetching document:", error);
            return NextResponse.json(
                { error: "Error fetching document", details: error.message },
                { status: 500 }
            );
        }
        if (!data) {
            return NextResponse.json(
                { error: "Document not found" },
                { status: 404 }
            );
        }

        return NextResponse.json({ data: data }, { status: 200 });
    } catch (err: unknown) {
        console.error("Unexpected error:", err);
        return NextResponse.json(
            { error: "Unexpected error occurred" },
            { status: 500 }
        );
    }
}
