import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Leah Livingston Full Stack Software Engineer</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>{`Leah Livingston's Portfolio`}</h1>
      <div>
        <div>
            I'm passionate about people and improving the daily lives of others. A Full Stack Software Engineer, driven by a curiosity for learning, the opportunity to innovate, and a fervent desire to streamline inefficiencies. Past roles include project management, customer success, sales, and marketing, which opened the door to design, architecture, and organization. The mission is to clear obstacles and improve resource distribution to create premium user experiences. Reach out!
        </div>
        <ul>
            <li>Languages / Frameworks: HTML, CSS, JavaScript, Canvas, JSON, EJS, Typescript, React, SQL, Python, Mongo, DTL, Bootstrap, Express.js, React (class based and hooks), Django, Jquery, RESTful Routing, JSON api, German</li>
            <li>Utilities: Visual Studio Code, CLI, Git, GitHub, MongoDB, Mongoose, PostgreSQL, Salesforce, HubSpot, Microsoft Office, GoToMeeting, Zoom, CompTIA Security+ Certification</li>
            <li>Interests: Cybersecurity, Identity and Access Management, Data, & Artificial Intelligence (AI)</li>
        </ul>
      </div>
    </>
  )
}
