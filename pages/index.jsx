import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Profile from "../components/parts/Profile";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Heri Setyawan | Portofolio</title>
        <meta name="keywords" content="heri setyawan, herisetyawan, @herisetyawan, #herisetyawan, unej, universitas jember, fullstack, backend engineering, frontend, informatika, portofolio, sutipan" />
        <meta name="description" content="Perkenalkan namaku Heri setyawan umurku 21 tahun, saya adalah seorang fullstack developer dan backend engineering. Saya sangat menyukai programming, sekarang saya sedang menempuh pendidikan di salah satu universitas negeri di jawa timur." />

        <meta property="og:title" content="Heri Setyawan | Portofolio" />
        <meta property="og:description" content="Perkenalkan namaku Heri setyawan umurku 21 tahun, saya adalah seorang fullstack developer dan backend engineering. Saya sangat menyukai programming, sekarang saya sedang menempuh pendidikan di salah satu universitas negeri di jawa timur." />
        <meta property="og:image" content="/home.png" />     

        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=7" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="http://buildandservice.my.id" />
        <link rel="canonical" href="http://heri.buildandservice.my.id" />

        {/* <meta property="og:image" content="http://www.example.com/image01.jpg"></meta> */}
        <link rel="icon" type="image/png" sizes="192x192"  href="/ico/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/ico/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/ico/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/ico/favicon-16x16.png" />
        <link rel="manifest" href="/ico/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff"></meta>
      </Head>
      <Navbar />
      <main>
        <Profile />
      </main>
    </div>
  );
}
