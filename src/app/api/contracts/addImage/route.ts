import {createClient} from "@/lib/supabaseServer";
import {NextRequest} from "next/server";

export async function POST(req:NextRequest) {
    try {
        const supabase=await createClient()
        const { src, document_id } = await req.json();
        if (!src || !document_id) {
            return new Response(JSON.stringify({ error: 'src and document_id are required' }), {
                status: 400,
            });
        }
        const { data, error } = await supabase.from('document_images').insert([{ src, document_id }]);
        if (error) {
            throw error;
        }

        return new Response(JSON.stringify({ data }), { status: 201 });
    } catch (error:any) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
}
