import '../styles/globals.css'
import type { AppProps } from 'next/app'
// import NProgress from "nprogress";
import dynamic from 'next/dynamic';
import "nprogress/nprogress.css";
import '../styles/topProgressBar.css';


const TopProgressBar = dynamic(
  () => {
    return import("../components/TopProgressBar");
  },
  { ssr: false },
);

function MyApp({ Component, pageProps }: AppProps) {

  return  <div>
    <TopProgressBar/>
    <Component {...pageProps} />
  </div> 

}

export default MyApp
