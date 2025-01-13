import { supabase } from '@/lib/supabase';
import {NextRequest, NextResponse} from 'next/server';
export async function GET(request: NextRequest) {
    const client_id =   request.nextUrl.searchParams.get('client_id')

    if (!client_id) {
        return NextResponse.json({ error: 'client_id query parameter is required' }, { status: 400 });
    }

    try {
        const { data, error } = await supabase
            .from('documents')
            .select('id,service, instructions, totalPrice, customers(name)')
            .eq('created_by', client_id)
            .eq('type', 'contract');
        if (error) {
            throw error;
        }

        return NextResponse.json({ documents: data }, { status: 200 });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
