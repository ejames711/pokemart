import { useState, useEffect } from 'react'
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'
import { toast, Toaster } from 'react-hot-toast'

export default function Account({ session }) {
  const supabase = useSupabaseClient()
  const user = useUser()
  const [loading, setLoading] = useState(true)
  const [username, setUsername] = useState(null)
  const [website, setWebsite] = useState(null)

  useEffect(() => {
    getProfile()
  }, [session])

  async function getProfile() {
    try {
      setLoading(true)

      let { data, error, status } = await supabase
        .from('profiles')
        .select(`username, website`)
        .eq('id', user.id)
        .single()

      if (error && status !== 406) {
        throw error
      }

      if (data) {
        setUsername(data.username)
        setWebsite(data.website)
      }
    } catch (error) {
      alert('Error loading user data!')
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  async function updateProfile({ username, website }) {
    try {
      setLoading(true)

      const updates = {
        id: user.id,
        username,
        website,
        updated_at: new Date().toISOString(),
      }

      let { error } = await supabase.from('profiles').upsert(updates)
      if (error) throw error
      toast.success('Profile updated!')
    } catch (error) {
      toast.error('Error updating the data!')
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
    <Toaster />
    <div className="flex flex-col gap-2 p-6 m-auto text-center rounded bg-light_haze w-96 h-[450px] border-2 border-light_blue">
      <div className='account-line'>
        <label htmlFor="email" className='text-xl font-semibold text-white'>Email</label>
        <input id="email" type="text" value={session.user.email} className="h-10 font-medium text-center text-gray-700 rounded-sm" disabled />
      </div>
      <div className='account-line'>
        <label htmlFor="username" className='text-xl font-semibold text-white'>Username</label>
        <input
          id="username"
          type="text"
          value={username || ''}
          onChange={(e) => setUsername(e.target.value)}
          className="h-10 font-medium text-center rounded-sm focus:outline-gray-400 text-dark_mart"
        />
      </div>
      <div className='account-line'>
        <label htmlFor="website" className='text-xl font-semibold text-white'>Website</label>
        <input
          id="website"
          type="website"
          value={website || ''}
          onChange={(e) => setWebsite(e.target.value)}
          className="h-10 font-medium text-center rounded-sm focus:outline-gray-400 text-dark_mart"
        />
      </div>

      <div>
        <button
          className="w-24 p-1 mx-auto mt-10 text-lg font-semibold rounded bg-light_blue text-dark_mart"
          onClick={() => updateProfile({ username, website})}
          disabled={loading}
        >
          {loading ? 'Loading ...' : 'Update'}
        </button>
      </div>

      <div>
        <button className="w-24 p-1 mx-auto mt-2 text-lg font-semibold rounded bg-light_blue text-dark_mart" onClick={() => supabase.auth.signOut()}>
          Sign Out
        </button>
      </div>
    </div>
    </>
  )
}