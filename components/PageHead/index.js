import Head from "next/head";

import Analytics from "../Analytics";

export default function PageHead({
  title,
  description,
  keywords,
  url,
  cover,
  creator,
}) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="robots" content="index, follow" />
        <link rel="manifest" href="/manifest.json"></link>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />

        <link rel="canonical" href={url} />

        <meta name="title" content={title} />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />

        <meta property="og:locale" content="pl_PL" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:site_name" content={title} />
        <meta property="og:image" content={cover} />
        <meta property="og:image:secure_url" content={cover} />
        <meta property="og:updated_time" content="" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:site" content={url} />
        <meta name="twitter:image" content={cover} />
        <meta name="twitter:creator" content={creator} />

        <Analytics />
      </Head>
    </>
  );
}
