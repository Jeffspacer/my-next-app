import Head from 'next/head'
import { useRouter } from 'next/router'

function Home() {
  const router = useRouter()

  const handleClick = (e) => {
    e.preventDefault()
    router.push('/pokemon')
  }
  return (
    <>
      <Head>
        <title>Jamstack espoorts</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
   <div>Welcome, Exlorer!</div>
   <button onClick={handleClick}>Click me!</button>
  </>
  )
}

export default Home