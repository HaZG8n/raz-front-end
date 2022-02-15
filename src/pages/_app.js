import 'src/commons/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous" />
  return <Component {...pageProps} />;
}

export default MyApp;
