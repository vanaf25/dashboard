// app/api/updateDocument/route.ts

import { NextResponse } from 'next/server';
import {createClient} from "@/lib/supabaseServer";

// Define the expected shape of the request body
interface UpdateDocumentRequest {
    id: number;
    updateData: {
        description: string;
        price: string;
    };
}

export async function PATCH(request: Request) {
    try {
        // Parse the JSON body of the request
        const { id, updateData }: UpdateDocumentRequest = await request.json();

        // Validate incoming data
        if (!id || !updateData) {
            return NextResponse.json(
                { message: 'Invalid input data' },
                { status: 400 }
            );
        }
        const supabase=await createClient();
        // Update the document in Supabase
        const { data, error } = await supabase
            .from('documents')
            .update(updateData)
            .eq('id', id)
            .single();

        if (error) {
            console.error('Error updating document:', error);
            return NextResponse.json(
                { message: 'Error updating document', error: error.message },
                { status: 500 }
            );
        }

        // Return success response
        return NextResponse.json(
            { message: 'Document updated successfully', data },
            { status: 200 }
        );
    } catch (error) {
        console.error('Server Error:', error);
        return NextResponse.json(
            { message: 'Server Error', error: error instanceof Error ? error.message : 'Unknown error' },
            { status: 500 }
        );
    }
}
