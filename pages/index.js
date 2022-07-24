import Head from 'next/head'
import characters from '../api/characters'
import clientPromise from '../lib/mongodb'
import CharacterPanels from './characterPanels.js'

export default function Home({ characters, isConnected }) {

  
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

      <CharacterPanels characters={characters} />
      
      </main>



      {/* <footer>
      TODO: <Footer />
      </footer> */}

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
