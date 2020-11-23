import React, { ReactNode } from 'react';
import Link from 'next/link';
import Head from 'next/head';

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>{' '}
        <Link href="/about">
          <a>About</a>
        </Link>{' '}
        <Link href="/contenido">
          <a>Contenido</a>
        </Link>{' '}
        <Link href="/Proyectos">
          <a>Proyectos</a>
        </Link>{' '}
        <Link href="/afiliados">
          <a>Afiliados</a>
        </Link>{' '}
        <Link href="/social">
          <a>Social</a>
        </Link>{' '}
        <Link href="/contacto">
          <a>Contacto</a>
        </Link>
      </nav>
    </header>
    {children}
    <footer>
      <hr />
      <span>I'm here to stay (Footer)</span>
    </footer>
  </div>
);

export default Layout;
