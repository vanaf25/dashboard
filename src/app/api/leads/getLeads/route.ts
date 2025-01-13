import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET(req: NextRequest) {
    const userId = req.nextUrl.searchParams.get('userId'); // Extract userId from query params
    const type=req.nextUrl.searchParams.get('type')
    if (!userId) {
        return NextResponse.json({ error: 'User ID is required' }, { status: 400 });
    }

    try {
        if(type==="project"){
            const { data, error } = await supabase
                .from('customers')
                .select('*,documents (id)')
                .eq('created_by', userId)
                .eq('status', 'project');
            if (error) {
                throw error;
            }
            return NextResponse.json({ customers: data});
        }
        else {
            const { data, error } = await supabase
                .from('customers')
                .select('*,documents (id,service)')
                .eq('created_by', userId)
                .filter('documents.type', 'eq', 'quote');
            if (error) {
                throw error;
            }
            return NextResponse.json({ customers: data });
        }

    } catch (error) {
        return NextResponse.json({ error: (error as Error).message }, { status: 500 });
    }
}
