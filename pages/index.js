import Head from 'next/head'
import characters from '../api/characters'
import clientPromise from '../lib/mongodb'


class Character {
  constructor(blob) {
    this.character = blob['character'][0]

    this.name = this.character['character_name']
    this.race = this.character['race']
    this.class = this.character['classes']

    console.log(this.class)
    this.ac = this.character['ac']
    this.hp = this.character['hp']
  }

  sayHi() {
    return (<li key={`${this.name}`}>{`hi ${this.name}`}</li>)
  }

}

export default function Home({ characters, isConnected }) {

  let characterPanels = []

  characters = JSON.parse(characters)
  characters.forEach(character => {
    characterPanels.push(new Character(character))
  })

  return (
    <div className="container">
      <Head>
        <title>Roll Quest</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Welcome to ROLL QUEST
        </h1>

        {isConnected ? (
          <h2 className="subtitle">You are connected to the realm.</h2>
        ) : (
          <h2 className="subtitle">
            You are NOT connected! Check the <code>README.md</code>{' '}
            for instructions.
          </h2>
        )}

      <ul className="list-none flex flex-wrap justify-evenly">
        {characterPanels.map(character => {
          return(<div className="m-10 w-1/2 border-solid border-green-500 bg-green-900 border-4 p-16">
                  <li className="list-" key={`${character.name}`}>
                    <p className="block">{`${character.character['race']} ${character.character['classes']}`}</p>
                    <h2 className="text-3xl">{`${character.name}`}</h2>
                    <p className="block font-bold text-blue-300">{`AC: ${character.ac}`}</p>
                    <p className="block text-red-500">{`HP: ${character.hp[0].hp_max}`}</p>

                  </li>
                </div>)
        })}
      </ul>
      </main>



      <footer>FOOT CLAN</footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .subtitle {
          font-size: 2rem;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
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

export async function getServerSideProps(context) {
  try {
    const client = await clientPromise
    const db = client.db('rollquest')
    let characters = await db.collection('characters').find({}).toArray()
    characters = JSON.stringify(characters)

    return {
      props: { characters: characters,
              isConnected: true },
    }
  } catch (e) {
    console.error(e)
    return {
      props: { isConnected: false },
    }
  }
}
