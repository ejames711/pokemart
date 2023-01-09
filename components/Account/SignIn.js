
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { toast, Toaster } from 'react-hot-toast'
import { motion } from 'framer-motion'

export default function SignIn() {
    const supabase = useSupabaseClient()
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [mode,setMode] = useState("signIn")
    const [loading,setLoading] = useState(false)

    async function signInWithEmail(email,password) {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      return {data,error}
    }

    async function signUpWithEmail() {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      });
      return {data,error}
    }

    async function attemptSignInOrSignUp() {
      setLoading(true);
      if(email && password) {
        const {data,error} =
        mode === "signIn" 
        ? await signInWithEmail(
          email,
          password,
        )
        : await signUpWithEmail(
          email,
          password,
        )
        if(error) {
          toast.error(error.message);
          setLoading(false);
        }
      }
    }

    return(
      <>
      <Toaster />
      <Link href={'/'}>
        <Image width={150} height={150} src={"/assets/svg/pokeball-white.svg"} alt="pokeball"  className='mx-auto'/>
      </Link>
      <div className="flex flex-col gap-2 p-6 m-auto text-center rounded bg-light_haze w-full md:w-96 h-[450px] border-2 border-light_blue shadow-lg mt-4">
      <div className='account-line'>
        <label htmlFor="email" className='text-xl font-semibold text-white '>Email</label>
        <input 
        id="email" 
        type="text" 
        className="h-10 font-medium text-center text-gray-700 border-2 border-gray-500 rounded-sm focus:outline-gray-400"
        onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className='account-line'>
        <label htmlFor="password" className='text-xl font-semibold text-white'>Password</label>
        <input
          id="password"
          type="password"
          className="h-10 font-medium text-center border-2 border-gray-500 rounded-sm focus:outline-gray-400 text-dark_mart"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div>
        <motion.button
        whileHover={{
          scale:1.05,
          transition: { duration: 0.1}
        }}
        whileTap={{ scale: 0.8 }}
          disabled = {loading || email === "" || password === ""}
          className={email === "" || password === "" ? "p-2 m-auto mt-10 text-lg font-semibold rounded w-80 button primary bg-haze_blue text-dark_mart" : "p-2 m-auto mt-10 text-lg font-semibold rounded w-80 button primary bg-light_blue text-dark_mart hover:shadow-lg"}
          onClick={() => attemptSignInOrSignUp()}
        >
          {loading ? "Loading..." : mode === "signIn" ? "Sign In" : "Sign Up"}
        </motion.button>
      </div>

      <div className='mt-6 text-dark_mart'>
      {mode === "signUp" ? "Already a member?" : "Not a member?"} 
        <motion.button 
        whileHover={{
          scale:1.1,
          transition: { duration: 0.2}
        }}
        whileTap={{ scale: 0.8 }}
        className="w-64 p-1 m-auto font-semibold text-md text-dark_mart hover:text-white" 
        onClick={() => mode === "signIn" ? setMode("signUp") : setMode("signIn")} >
         {mode === "signUp" ? "Sign In" : "Sign Up"}
        </motion.button>
      </div>
      <Link href={'/'}>
        <Image src={'/assets/home-white.svg'} width={50} height={50} className='mx-auto mt-2'/>
      </Link>
    </div>
    </>
    )
}