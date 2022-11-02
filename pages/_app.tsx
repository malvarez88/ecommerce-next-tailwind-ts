import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../state/store";
import { Toaster } from "react-hot-toast";
import { SessionProvider } from "next-auth/react"

function MyApp({ Component, pageProps: { session, ...pageProps} }: AppProps) {
  return (
    <SessionProvider session={session}>
    <Provider store={store}>
      <Toaster />
      <Component {...pageProps} />
    </Provider>
    </SessionProvider>
  );
}

export default MyApp;


// Configure Shared session state
// To be able to use useSession first you'll need to expose the session context, <SessionProvider />, at the top level of your application:

// import { SessionProvider } from "next-auth/react"
// export default function App({
//   Component,
//   pageProps: { session, ...pageProps },
// }) {
//   return (
//     <SessionProvider session={session}>
//       <Component {...pageProps} />
//     </SessionProvider>
//   )
// }