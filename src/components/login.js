import React, { useState } from "react";

const initState = {
    credentials: {
        username: '',
        password: ''
      }
}

const Login = () => {
    const [state, setState] = useState(initState)

    const handleChange = e => {
        setState({
          credentials: {
            ...state.credentials,
            [e.target.name]: e.target.value
          }
        });
      };

    const login = e => {
        e.preventDefault();
    }

    return (
        <div className="login-frame">
            <section className="login-page">
                <div className="login">
                    <h1>LOGIN</h1>
                </div>
                <div className="form-div">
                <form onSubmit={login}>
                    <label>USERNAME</label>
                    <input
                        type="text"
                        name="username"
                        value={state.credentials.username}
                        onChange={handleChange}
                    />
                    <label>PASSWORD</label>
                    <input
                        type="password"
                        name="password"
                        value={state.credentials.password}
                        onChange={handleChange}
                    />
                    <button>SUBMIT</button>
                </form>
                </div>
            </section>
        </div>
    )
}

export default Login

