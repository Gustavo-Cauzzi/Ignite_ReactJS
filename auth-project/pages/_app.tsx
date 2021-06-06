import { AuthProider } from "../contexts/AuthContext"

function MyApp({ Component, pageProps }) {
  return (
    <AuthProider>
      <Component {...pageProps} />
    </AuthProider>
  )
}

export default MyApp
