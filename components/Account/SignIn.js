
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import Image from 'next/image'
import { useState } from 'react'

export default function SignIn() {
    const supabase = useSupabaseClient()
    const session = useSession()
    const [email,setEmail] = useState(null)
    const [password,setPassword] = useState(null)
    const [mode,setMode] = useState("signIn")

    async function signInWithEmail() {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      })
    }

    async function signUpWithEmail() {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      });
      return {error}
    }

    return(
      <>
      <Image width={150} height={150} src={"/assets/svg/pokeball-white.svg"} alt="pokeball"  className='mx-auto'/>
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
        <button
          className="p-2 m-auto mt-12 text-lg font-semibold rounded w-80 button primary bg-light_blue text-dark_mart"
          onClick={() => mode === "signIn" ? signInWithEmail() : signUpWithEmail()}
        >
          {mode === "signIn" ? "Sign In" : "Sign Up"}
        </button>
      </div>

      <div className='mt-8 text-dark_mart'>
      {mode === "signUp" ? "Already a member?" : "Not a member?"} 
        <button className="w-64 p-1 m-auto font-semibold text-md text-dark_mart" 
        onClick={() => mode === "signIn" ? setMode("signUp") : setMode("signIn")} >
         {mode === "signUp" ? "Sign In" : "Sign Up"}
        </button>
      </div>
    </div>
    </>
    )
}