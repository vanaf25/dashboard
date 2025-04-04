'use client'

import { useEffect, useState } from 'react'
import { Session } from '@supabase/supabase-js'
import { createClient } from '@/lib/supabase'

export function useSupabaseSession() {
    const [session, setSession] = useState<Session | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const supabase = createClient()
        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session)
            setLoading(false)
        })
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session)
            setLoading(false)
        })
        return () => subscription.unsubscribe()
    }, [])

    return { session, loading }
}