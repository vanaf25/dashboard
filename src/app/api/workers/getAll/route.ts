import { createClient } from "@/lib/supabaseServer";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
    const supabase = await createClient();
    const { data: user, error: authError } = await supabase.auth.getUser();
    const userId = user?.user?.id;

    if (authError || !userId) {
        return Response.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Get the company_id from profiles
    const { data: profile, error: profileError } = await supabase
        .from("profiles")
        .select("id")
        .eq("id", userId)
        .single();

    if (profileError || !profile) {
        return Response.json({ error: "Profile not found" }, { status: 404 });
    }

    // Fetch all workers associated with this company_id
    const { data: workers, error: workersError } = await supabase
        .from("workers")
        .select("*")
        .eq("company_id", profile.id);

    if (workersError) {
        return Response.json({ error: workersError.message }, { status: 400 });
    }

    return Response.json({ workers }, { status: 200 });
}
