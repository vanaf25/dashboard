import {NextRequest, NextResponse} from "next/server";
import {createClient} from "@/lib/supabaseServer";

export async function GET(req:NextRequest) {
    const supabase = await createClient()
    const { data:user, error:authError } = await supabase.auth.getUser()
    if (authError || !user?.user) {
        return NextResponse.redirect(new URL("/login", req.url));
    }
    const userId = user?.user?.id;
    if (!userId) {
        return NextResponse.json({ error: 'User ID is required' }, { status: 400 });
    }

    const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("id",userId)
        .single();
    if (error) {
        return Response.json({ error: error.message }, { status: 400 });
    }

    return Response.json(data);
}
