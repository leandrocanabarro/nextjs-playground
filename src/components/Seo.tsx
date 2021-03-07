import Head from 'next/head'

interface SeoProps {
    title: string
    description?: string
    image?: string
    shouldExcludeTitleSuffix?: boolean
    shouldIndexPage?: boolean
}

export default function Seo({
    title,
    description,
    image,
    shouldExcludeTitleSuffix = false, 
    shouldIndexPage = true
}: SeoProps) {
  const pageTitle = `${title} ${!shouldExcludeTitleSuffix ? '|  Next.js' : null}`
  const pageImage = image ? `${process.env.NEXT_PUBLIC_SITE_URL}/${image}`: null

  return (
    <Head>
      <title>{pageTitle}</title>
      
      {description ? <meta name="description" content={description}/> : null}
      
      {image ? <meta name="image" content={pageImage}/> : null}

      {!shouldIndexPage ? <meta name="robots" content="noindex,nofollow"/> : null}

      <meta httpEquiv="x-ua-compatible" content="IE=edge,chrome=1" />
      <meta name="MobileOptimized" content="320" />
      <meta name="HandheldFriendly" content="True" />
      <meta name="theme-color" content="#121214" />
      <meta name="msapplication-TileColor" content="#121214" />
      <meta name="referrer" content="no-referrer-when-downgrade" />
      <meta name="google" content="notranslate" />

      {title ? <meta property="og:title" content={pageTitle} /> : null}
      {description ? <meta property="og:description" content={description} /> : null}
      {title ? <meta property="og:locale" content="pt_BR" /> : null}
      {title ? <meta property="og:type" content="website" /> : null}
      {title ? <meta property="og:site_name" content={pageTitle} /> : null}
      {image ? <meta property="og:image" content={pageImage} /> : null}
      {image ? <meta property="og:image:secure_url" content={pageImage} /> : null}
      {image ? <meta property="og:image:alt" content="Thumbnail" /> : null}
      {image ? <meta property="og:image:type" content="image/png" /> : null}
      {image ? <meta property="og:image:width" content="1200" /> : null}
      {image ? <meta property="og:image:height" content="630" /> : null}
    </Head>
  )
}
