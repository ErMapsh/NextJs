import Nav from '../components/Nav'
import '../styles/globals.css'
import '../styles/style.css'// so we want global css, so we need to import file like this

function MyApp({ Component, pageProps }) {
  return(
    <>
    <Nav />
    <Component {...pageProps} />
    </>
  )
}

export default MyApp
