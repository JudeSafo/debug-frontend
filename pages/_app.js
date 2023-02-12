import '@/styles/globals.css'
import Amplify from 'aws-amplify';
import config from '../src/aws-exports'

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
