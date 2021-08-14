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
        </div>
    )
}