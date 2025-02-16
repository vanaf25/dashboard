import {createClient} from "@/lib/supabaseServer";
import {NextRequest} from "next/server";

export async function POST(req:NextRequest) {
    const supabase=await createClient();
    const { data:user, error:authError } = await supabase.auth.getUser()
    const userId = user?.user?.id;
    const { fullName, email, phone, address,...rest } = await req.json();


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

    // Insert the worker
    const { data, error } = await supabase.from("workers").insert([
        {
            fullName,
            email,
            phone,
            address,
            company_id: profile.id,
            ...rest,
        },
    ]).select().single();

    if (error) {
        return Response.json({ error: error.message }, { status: 400 });
    }

    return Response.json({ message: "Worker created", worker: data }, { status: 201 });
}
