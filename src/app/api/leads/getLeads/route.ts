import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET(req: NextRequest) {
    const userId = req.nextUrl.searchParams.get('userId'); // Extract userId from query params

    if (!userId) {
        return NextResponse.json({ error: 'User ID is required' }, { status: 400 });
    }

    try {
        const { data, error } = await supabase
            .from('customers')
            .select('*')
            .eq('created_by', userId);

        if (error) {
            throw error;
        }

        return NextResponse.json({ customers: data });
    } catch (error) {
        return NextResponse.json({ error: (error as Error).message }, { status: 500 });
    }
}
