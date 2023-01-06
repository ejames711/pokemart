import { Auth, ThemeSupa } from '@supabase/auth-ui-react'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import Account from '../components/Account/Account'

export default function User() {
    const session = useSession()
    const supabase = useSupabaseClient()


    return (
        <div className='flex items-center justify-center w-full h-screen bg-dark_mart'>
            <div className="container absolute" style={{ padding: '50px 0 100px 0' }}>
            {!session ? (
            <Auth supabaseClient={supabase} appearance={{ 
                theme: ThemeSupa,
                className: {
                    button: 'signup-button',
                    input: 'signup-input'
                }
            }}  theme="dark" />
            ) : (
            <Account session={session} />
            )}
            </div>
        </div>
    )
}