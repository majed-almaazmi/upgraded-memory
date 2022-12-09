import '../styles/globals.css'

import type { AppProps } from 'next/app'
import {Noto_Naskh_Arabic } from '@next/font/google'

const inter = Noto_Naskh_Arabic({  })
export default function App({ Component, pageProps }: AppProps) {
  return     <main className={inter.className}>
  <Component {...pageProps} />
</main>
}
