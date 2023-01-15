import Head from "next/head";
import { useEffect, useState } from "react";

var docInit;

export default function Home() {
  const [doc, setdoc] = useState();

  // useEffect(() => {
  //   document.location.replace("https://go.hotmart.com/D78475892K");
  // });

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
    </div>
  );
}
