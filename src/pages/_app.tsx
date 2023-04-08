import { loginAtom } from '@/atoms/loginAtoms'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { RecoilRoot } from 'recoil'
export default function App({ Component, pageProps }: AppProps) {
  return <RecoilRoot>
  <Component {...pageProps} />
  </RecoilRoot>
}
