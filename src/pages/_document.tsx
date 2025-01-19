import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    return await Document.getInitialProps(ctx)
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Standard meta. */}
          <meta name="author" content="Brian Lai" />
          <meta name="title" content="Brian Lai" />
          <meta
            name="description"
            content="Software Engineer, Full-stack Web Developer, and Unity hobbyist from San Francisco Bay Area, CA."
          />
          <meta
            name="keywords"
            content="React, NextJS, Angular, Tailwind, HTML, CSS, JavaScript, TypeScript, PWA, JetBrains, Adobe, Portfolio, Brian, Lai, Software, Engineer, Web, Developer, Unity, Hobbyist, San, Francisco, State, University, Computer, Science, Bachelor, of, Science, Bay, Area, Discord, Bot, C#, Java, .NET, MySQL, FPS, Gamer, Anime, gaming, Bootstrap, Python, AWS, Docker, Google, Amazon, Apple, Cloud, Node, Figma, Sketch, C++, LinkedIn, GitHub, Resume, Dark, Light, Mode, Full, Stack, Front, Back, End, VR, Virtual, Reality"
          />
          <meta name="theme-color" content="#E11D48" />

          {/* Open Graph. */}
          <meta property="og:title" content="Brian Lai" />
          <meta
            property="og:description"
            content="Software Engineer, Developer, and Godot hobbyist from San Francisco Bay Area, CA."
          />
          <meta property="og:site_name" content="Brian Lai" />
          <meta property="og:url" content="https://www.brianlai.dev/" />
          <meta property="og:image" content="/favicon.png" />
          <meta property="og:type" content="website" />

          {/* Twitter meta. */}
          <meta name="twitter:card" content="summary" />
          <meta property="twitter:title" content="Brian Lai" />
          <meta
            property="twitter:description"
            content="Software Engineer, Developer, and Godot hobbyist from San Francisco Bay Area, CA."
          />
          <meta property="twitter:url" content="https://www.brianlai.dev/" />
          <meta property="twitter:image" content="/favicon.png" />
          <meta property="twitter:creator" content="@blai30" />

          {/* Apple meta. */}
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black" />
          <meta name="apple-mobile-web-app-title" content="Brian Lai" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/icons/icon-180x180.png"
          />

          <link rel="canonical" href="https://www.brianlai.dev/" />
          <link rel="icon" href="/favicon.ico" sizes="any" />
          <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
          <link rel="manifest" href="/manifest.webmanifest" />

          {/* Styles. */}
          <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        </Head>
        <body className="bg-white antialiased transition-colors ease-in-out dark:bg-zinc-900">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
