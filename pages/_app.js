import '../styles/globals.css'
import { Provider } from 'react-redux'
import {store} from '../redux/store'
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider } from '@supabase/auth-helpers-react'
import { useState } from 'react'

function MyApp({ Component, pageProps }) {

  const [supabase] = useState(() => createBrowserSupabaseClient())

  return (
  <Provider store={store}>
  <SessionContextProvider supabaseClient={supabase} initialSession={pageProps.initialSession}>
    <Component {...pageProps} />
  </SessionContextProvider>
  </Provider>
  )
}

export default MyApp
