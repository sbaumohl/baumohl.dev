import Head from "next/head";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { skills, resumeProjects, headerLinks } from "./../lib/resume";
import TitleHeader from "../components/Title/Title";

const header = (
  <head>
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    <meta name="description" content="Sam Baumohl" />
    <title>SamBaumohl.com</title>
    <base href="/" />
    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href="/favicons/apple-touch-icon.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="/favicons/favicon-32x32.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href="/favicons/favicon-16x16.png"
    />
    <link rel="manifest" href="/favicons/site.webmanifest" />
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.14.0/devicon.min.css"
    />
  </head>
);

export default function Home() {
  return (
    <>
      {header}
      <TitleHeader></TitleHeader>
    </>
  );
}
