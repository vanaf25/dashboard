import { NextRequest, NextResponse } from 'next/server';
import {redirect} from "next/navigation";
import {createClient} from "@/lib/supabaseServer";

export async function GET(req: NextRequest) {
    try {
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
            .from('customers')
            .select('*, documents (id, service)')
            .eq('created_by', userId)
            .filter('documents.type', 'eq', 'quote');

        if (error) {
            throw error;
        }

        return NextResponse.json({ customers: data });

    } catch (error) {
        console.log('err:',(error as Error).message)
        return NextResponse.json({ error: (error as Error).message }, { status: 500 });
    }
}
