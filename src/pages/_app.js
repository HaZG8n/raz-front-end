import "src/commons/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Script from "next/script";
import { Provider } from "react-redux";
import store from "src/redux/store";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous" />
        <Component {...pageProps} />;
      </Provider>
    </>
  );
}

export default MyApp;
