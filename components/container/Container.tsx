import Head from 'next/head';
import MetaData from '../../data/metadata';
import NavBar from '../nav/Nav';

export default function Container(props) {
  const meta = {
    title: MetaData.title,
    description: MetaData.description,
    author: MetaData.author,
  };
  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta
          content={meta.description}
          name='description'
        />
        <meta
          property='og:site_name'
          content={meta.author}
        />
      </Head>
      <NavBar />
      <main>{props.children}</main>
    </>
  );
}
