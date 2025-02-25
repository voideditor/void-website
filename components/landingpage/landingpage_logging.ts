import { createClient } from '@supabase/supabase-js';

const supabase_url = process.env.NEXT_PUBLIC_SUPABASE_PROJECT!
const supabase_public_key = process.env.NEXT_PUBLIC_SUPABASE_PUBLIC_KEY!;

const supabase = createClient(supabase_url, supabase_public_key);

// log user email for waitlist
// CAN throw an error
export const logWaitlist = async (email: string, reason?: string) => {
    const { data, error } = await supabase
        .from('waitlist_emails')
        .insert({
            email: email,
            reason: reason,
        });
    if (error) {
        console.error('Unexpected error logging user email:', error);
        throw new Error(`Error: ${error}`)
    }
};

