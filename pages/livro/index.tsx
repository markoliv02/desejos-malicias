import Head from "next/head";
import Script from "next/script";
import { useEffect, useState } from "react";

var docInit;

export default function Livro() {
  const [doc, setdoc] = useState();

  return (
    <div>
      <Head>
        <title>EBOOK DESEJOS E MACILICIAS</title>
        <meta
          name="description"
          content="Página de vendas do livro desejos e malicias"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Marcos Oliveira " />
      </Head>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-EB5Y4T1K8C"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-EB5Y4T1K8C');
          
          `}
      </Script>
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 w-[1000px] shadow shadow-lg rounded-3xl">
          <div className="md:hidden">
            <img src="/ebookfrente.png" alt="" />
          </div>
          <div className=" p-10">
            <h1 className="text-4xl my-5 font-semibold">Desejos & Malícias</h1>
            <p className="text-xl my-5">
              Descubra o segredo para deixar qualquer homem louco por você,
              torne-se a mulher mais atraente, aumente sua autoestima e faça ele
              comer na sua mão utilizando as técnicas e segredos do livro
              Desejos & Malícias.
            </p>

            <h2 className="text-2xl font-semibold my-5">
              Adquira já o seu e-book!
            </h2>

            <a
              href="https://go.hotmart.com/D78475892K"
              className="flex justify-center items-center bg-green-800 text-white text-3xl p-4 font-semibold rounded-3xl w-56 hover:bg-green-600"
            >
              EU QUERO
            </a>
          </div>
          <div className="md:block hidden">
            <img src="/ebookfrente.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
