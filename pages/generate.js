import Head from "next/head";

export default function FirstPost() {
    return (
        <div className="container">
            <Head>
                <title>mypass.space</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <h1 className="title">
                    Generate a password
                </h1>

                <p className="description">
                    A tool to generate long and secure passwords.
                </p>

                <div className="container">
                    <div className="form-group">
                        <label htmlFor="final_password"><b>Generated Password:</b></label>
                        <input type="text" className="form-control" id="final_password" disabled/>
                    </div>
                    <button type="button" className="btn btn-info float-right" onClick="generate()">Generate!</button>
                    <button type="button" className="btn btn-info float-right mr-1"
                            onClick="navigator.clipboard.writeText(document.getElementById('final_password').value); alert('Password was copied to clipboard!');">
                        <i className="fas fa-clipboard"></i></button>
                    <p id="points"><b>Password strength:</b> 0</p>
                </div>
            </main>

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
          color: #d4f4ca;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          color: #FFFFFF;
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
          color: #FFFFFF;
        }
        
        p {
          line-height: 1.5;
          font-size: 1.5rem;
          color: #FFFFFF;
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
          border: 1px solid #d6d6d6;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #d4f4ca;
          border-color: #d4f4ca;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          color: #FFFFFF;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          color: #FFFFFF;
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
          background-color: #000000;
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