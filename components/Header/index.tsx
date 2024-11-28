import Image from 'next/image';
import Link from 'next/link';
import styles from './index.module.css';
import Script from 'next/script';

export default function Header() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID || '';

  return (
    <header className={styles.header}>
      <meta name="google-site-verification" content="wSCNpuNC8sPyhxob_txIEIFbPxOYl4PHNN9d8rTobZ4" />
      <Link href="/">
        <Image
          src="/logo.png"
          alt="FUJI-NOTE"
          className={styles.logo}
          width={348}
          height={133}
          priority
        />
      </Link>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
        async
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaId}');
          `}
      </Script>
    </header>
  );
}
