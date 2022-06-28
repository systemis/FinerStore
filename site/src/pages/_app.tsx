import '../../styles/globals.css'
import "../../styles/profile.css";
import 'swiper/css';
import type { AppProps } from 'next/app'
import Head from 'next/head';
import { AppProvider } from "../hooks/app.hook";


import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <AppProvider>
        <Head>
          <link rel="shortcut icon" href="/favicon.ico" />
          <script src="https://cdn.tailwindcss.com" />
          <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200&display=swap" rel="stylesheet" />
          <link href='https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css' rel='stylesheet' />
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css" />
          <link
            crossOrigin="anonymous "
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200;400&display=swap" rel="stylesheet" />

        </Head>
        <Component {...pageProps} />
        <ToastContainer />
      </AppProvider>
    </div>
  )
}

export default MyApp
