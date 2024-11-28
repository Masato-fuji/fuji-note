import { getTagList } from '@/libs/microcms';
import { LIMIT } from '@/constants';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Nav from '@/components/Nav';
import './globals.css';
import styles from './layout.module.css';

export const metadata = {
  metadataBase: new URL(process.env.BASE_URL || 'http://localhost:3000'),
  title: 'FUJI-NOTE',
  description: 'A simple blog presented by microCMS',
  openGraph: {
    title: 'FUJI-NOTE',
    description: 'A simple blog presented by microCMS',
    images: '/ogp.png',
  },
  alternates: {
    canonical: '/',
  },
  // Google Search Console用のメタタグを追加
  verification: {
    google: 'wSCNpuNC8sPyhxob_txIEIFbPxOYl4PHNN9d8rTobZ',
  },
};

type Props = {
  children: React.ReactNode;
};

export default async function RootLayout({ children }: Props) {
  const tags = await getTagList({
    limit: LIMIT,
  });
  return (
    <html lang="ja">
      <body>
        <Header />
        <Nav tags={tags.contents} />
        <main className={styles.main}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
