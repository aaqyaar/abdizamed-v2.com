import React from "react";

type MetaTypes = {
  title?: string;
  description?: string;
  author?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
};

export default function Meta({
  title,
  description,
  author,
  keywords,
  image,
  url,
  type,
}: MetaTypes) {
  const meta: MetaTypes = {
    title: title || "Full Stack Developer based in Somalia",
    description:
      description ||
      "I'm a Full Stack Developer based in Somalia. I have been working with React, Next.js, Node.js, Express, MongoDB, and MySQL for the past 3 years.",
    author: author || "Abdi Zamed Mohamed",
    keywords:
      keywords ||
      "Abdi Zamed Mohamed, Full Stack Developer, React, Next.js, Node.js, Express, MongoDB, MySQL, Portfolio, Somalia, Somali Programmer",
    image: image || "/images/abdizamed.svg",
    url: url || "https://abdizamedmo.com",
    type: type || "website",
  };

  return (
    <>
      <meta charSet="utf-8" />

      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="title" content={meta.title} />
      <meta name="description" content={meta.description} />
      <meta name="author" content={meta.author} />
      <meta name="keywords" content={meta.keywords} />
      <meta name="image" content={meta.image} />
      <meta name="url" content={meta.url} />
      <meta name="type" content={meta.type} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:image" content={meta.image} />
      <meta property="og:url" content={meta.url} />
      <meta property="og:type" content={meta.type} />
      {/* google ads */}
      <meta name="rating" content="General" />
      <meta name="distribution" content="Global" />
      <meta name="google" content="notranslate" />
      <meta
        name="google-site-verification"
        content="google-site-verification=0"
      />
    </>
  );
}
