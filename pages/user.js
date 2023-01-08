import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import Account from '../components/Account/Account'
import SignIn from '../components/Account/SignIn'

export default function User() {
    const session = useSession()


    return (
        <div className='flex items-center justify-center w-full h-screen bg-dark_mart'>
            <div className="container absolute" style={{ padding: '50px 0 100px 0' }}>
            {!session ? (
            <SignIn />
            ) : (
            <Account session={session} />
            )}
            </div>
        </div>
    )
}