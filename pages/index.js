import Head from 'next/head'
import Image from "next/image";
import fs from "fs";
import {join} from "path";
import styles from "../components/profil.module.css";

function fetchProfiles() {
  return fs.readdirSync(join(process.cwd(), 'pages/profils/data'))
      .map(file => fs.readFileSync('pages/profils/data/' + file, 'utf8'))
      .map(content => JSON.parse(content))
}

export async function getStaticProps() {
  const profiles = fetchProfiles()

  return {props: {profiles}}
}

export default function Home({ profiles }) {
  return (
    <div className="container_xl">
      <Head>
        <title>Lorraine Tech Hub</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div id='logo_main'>
          <Image
              src="/images/lorraine_tech_hub.png"
              height={85}
              width={85}
              alt="logo Lorraine Tech Hub"
          />
          <h1 className="title">Lorraine Tech Hub</h1>
        </div>
        
        <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui. Quisque nec mauris sit amet elit iaculis pretium sit amet quis magna. Aenean velit odio.
        </p>
        
        <div id='socials_main'>
          <div>
            <a href="#" target="_blank" rel="noopener noreferrer" className='social_link'>
              <Image
                  className='social_link_image'
                  src="/images/discord_logo.svg"
                  height={30}
                  width={100}
                  alt="Discord Logo"
              />
            </a>
          </div>

          <div>
            <a href="#" target="_blank" rel="noopener noreferrer" className='social_link'>
              <Image
                  src="/images/github_logo.png"
                  height={29}
                  width={96}
                  alt="Github Logo"
              />
            </a>            
          </div>

        </div>

        <div id='content' className="grid">
          {profiles.map((profile) => (
            <div>
                <Image
                    src='/images/placeholder-image.jpg'
                    height={150}
                    width={200}
                    alt="profile"
                />
                <p>@{profile.pseudo}</p>
              </div>
          ))}
        </div>
      </main>

      <footer>

      </footer>

      <style jsx>{`
        #logo_main {
          display: flex;
          margin-bottom: 80px;
        }
        
        #logo_main h1 {
          margin-left 20px;
        }
  
        #socials_main {
          display:flex;
          align-items: center;
          align-content: center;
          margin-bottom:80px;
        }
        
        #socials_main>div {
          margin-right:20px;
        }
  
        .description {
          max-width: 55%;
        }

        .container_xl {
            background: url('/images/lorraine.png') no-repeat top right;
            background-size: 55%;
            max-width: 84rem;
            padding: 0 1rem;
            margin: 3rem auto 6rem;
            min-height: 800px;
        }
        
        #content {
          display:flex;
          justify-content: flex-start;
          border-top: 1px solid grey;
          padding-top:80px;
          text-align: center
        }
        #content>div {
          margin-right:20px;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
