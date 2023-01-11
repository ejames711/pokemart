import { useState, useEffect } from 'react'
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'
import { toast, Toaster } from 'react-hot-toast'
import {motion} from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function Account({ session }) {
  const supabase = useSupabaseClient()
  const user = useUser()
  const [loading, setLoading] = useState(true)
  const [username, setUsername] = useState(null)
  const [favorite_item, setFavoriteItem] = useState(null)

  useEffect(() => {
    getProfile()
  }, [session])

  async function getProfile() {
    try {
      setLoading(true)

      let { data, error, status } = await supabase
        .from('profiles')
        .select(`username, favorite_item`)
        .eq('id', user.id)
        .single()

      if (error && status !== 406) {
        throw error
      }

      if (data) {
        setUsername(data.username)
        setFavoriteItem(data.favorite_item)
      }
    } catch (error) {
      toast.error('Error loading user data!')
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  async function updateProfile({ username, favorite_item }) {
    try {
      setLoading(true)

      const updates = {
        id: user.id,
        username,
        favorite_item,
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
    <div className="flex flex-col gap-2 p-4 m-auto text-center rounded bg-light_haze w-96 h-full md:h-[550px] border-2 border-light_blue">
    <Image src={'/assets/profile-white.svg'} width={60} height={60} className="mx-auto" alt="profile" />
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
        <label htmlFor="favorite_item" className='text-xl font-semibold text-white'>Favorite Item</label>
        <input
          id="favorite_item"
          type="favorite_item"
          value={favorite_item || ''}
          onChange={(e) => setFavoriteItem(e.target.value)}
          className="h-10 font-medium text-center rounded-sm focus:outline-gray-400 text-dark_mart"
        />
      </div>

      <div>
        <motion.button
          className="w-full p-1 mx-auto mt-4 text-lg font-semibold rounded bg-light_blue text-dark_mart"
          onClick={() => updateProfile({ username, favorite_item})}
          disabled={loading}
          whileHover={{
            scale:1.05,
            transition: { duration: 0.2}
          }}
          whileTap={{ scale: 0.8 }}
        >
          {loading ? 'Loading ...' : 'Update'}
        </motion.button>
      </div>

      <div>
        <motion.button 
        className="w-full p-1 mx-auto mt-2 text-lg font-semibold rounded bg-light_blue text-dark_mart" 
        onClick={() => supabase.auth.signOut()}
        whileHover={{
          scale:1.05,
          transition: { duration: 0.2}
        }}
        whileTap={{ scale: 0.8 }}
        >
          Sign Out
        </motion.button>
      </div>

      <Link href={'/'}>
        <Image src={'/assets/home-white.svg'} height={50} width={50}  className="mx-auto mt-4" />
      </Link>
    </div>
    </>
  )
}