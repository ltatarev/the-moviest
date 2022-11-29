import Head from 'next/head';
import { HomeLayout } from '@modules/layout';

export default function Home() {
  return (
    <div>
      <Head>
        <title>The Moviest</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <HomeLayout>
          <div>test</div>
        </HomeLayout>
      </main>
    </div>
  );
}
