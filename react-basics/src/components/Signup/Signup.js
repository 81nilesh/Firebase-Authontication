import React, { useState } from 'react'
import styles from "./Signup.module.css";
import InputControl from '../InputControl/InputControl';
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../Firebase';

const Signup = () => {
    const [values, setValues] = useState({
        name: "",
        email: "",
        pass: "",
    })

    const [errorMsg, setErrorMsg] = useState("");

    const handleSubmission = () => {
        if (!values.name || !values.email || !values.pass) {
            setErrorMsg("Fill all fields");
            return;
        }
        setErrorMsg("")

        createUserWithEmailAndPassword(auth, values.email, values.pass)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => console.log("Error-", err));
    }
    return (
        <div className={styles.container}>
            <div className={styles.innerBox}>
                <h1 className={styles.heading}>Signup</h1>

                <InputControl label="Name"
                    placeholder="Enter Your name"
                    onChange={(event) =>
                        setValues((prev) => ({ ...prev, name: event.target.value }))
                    }
                />
                <InputControl label="Email"
                    placeholder="Enter email address"
                    onChange={(event) =>
                        setValues((prev) => ({ ...prev, email: event.target.value }))
                    }
                />
                <InputControl label="Password"
                    placeholder="Enter Password"
                    onChange={(event) =>
                        setValues((prev) => ({ ...prev, pass: event.target.value }))
                    }
                />

                <div className={styles.footer}>
                    <b className={styles.error}>{errorMsg}</b>
                    <button onClick={handleSubmission}>Signup</button>
                    <p>
                        Already have an Account?{" "}
                        <span>
                            <Link to="/login">Login</Link>
                        </span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Signup
