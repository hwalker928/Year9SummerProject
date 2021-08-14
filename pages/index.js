import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>mypass.space</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          mypass.space
        </h1>

        <p className="description">
          An easy-to-use password checker and generator.
        </p>

        <div className="grid">
          <a href="/generate" className="card">
            <h3>Generate &rarr;</h3>
            <p>Generate a super secure password!</p>
          </a>

          <a href="/check" className="card">
            <h3>Check &rarr;</h3>
            <p>Check an existing password!</p>
          </a>

          <a
            href="https://github.com/hwalker928/mypass.space"
            className="card"
          >
            <h3>Source &rarr;</h3>
            <p>View the source code!</p>
          </a>

          <a
            href="https://github.com/hwalker928/mypass.space/issues/new"
            className="card">
            <h3>Suggest &rarr;</h3>
            <p>Have a suggestion?</p>
          </a>
        </div>
      </main>
    </div>
  )
}
