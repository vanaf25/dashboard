import {NextRequest, NextResponse} from 'next/server';
import {createClient} from "@/lib/supabaseServer";
export async function GET(request: NextRequest) {
    const supabase = await createClient()
    const { data:user, error:authError } = await supabase.auth.getUser()
    if (authError || !user?.user) {
        return NextResponse.redirect(new URL("/login", request.url));
    }
    const userId = user?.user?.id; // Access the userId from session
    if (!userId) {
        return NextResponse.json({ error: 'User ID is required' }, { status: 400 });
    }


    try {
        const { data, error } = await supabase
            .from('documents')
            .select('id,service, instructions, totalPrice, customers(name)')
            .eq('created_by', userId)
            .eq('type', 'contract');
        if (error) {
            throw error;
        }

        return NextResponse.json({ documents: data }, { status: 200 });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
