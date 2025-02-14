import { NextResponse } from 'next/server';
import {createClient} from "@/lib/supabaseServer";


export async function GET(req: Request, { params }: { params: { id: string } }) {
    const { id } = params;
    const supabase=await createClient()
    const { data, error } = await supabase
        .from('workers')
        .select('*')
        .eq('id', id)
        .single();
    if (error) {
        return NextResponse.json({ error: error.message }, { status: 400 });
    }
    return NextResponse.json(data, { status: 200 });
}
