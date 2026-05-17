import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* SEO Meta */}
        <meta name="description" content="Shroyash Shrestha — Java Backend Developer & Full Stack Engineer from Nepal. Specializing in Spring Boot, microservices, React, and scalable distributed systems." />
        <meta name="keywords" content="Shroyash Shrestha, Java Developer, Spring Boot, Backend Engineer, Nepal, Microservices, React, Next.js, Full Stack" />
        <meta name="author" content="Shroyash Shrestha" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta property="og:title" content="Shroyash Shrestha — Java Backend Engineer" />
        <meta property="og:description" content="Full Stack Developer specializing in Spring Boot, microservices, and scalable backend systems." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://shroyash.dev" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Shroyash Shrestha — Java Backend Engineer" />
        <meta name="twitter:description" content="Full Stack Developer | Spring Boot | Microservices | React | Nepal" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />

        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
