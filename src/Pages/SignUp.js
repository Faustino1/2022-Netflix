import { makeStyles, Typography } from '@material-ui/core';
import { useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { auth } from "../firebase";
import { NetflixButton, NetflixInput } from '../styled/styledcomponents';

const SignUp = () => {
    const classes = useStyles();
    const [email, setEmail] = useState("");
    const [password, setPasword] = useState("");
    const history = useHistory();

    
    const signIn = (e) =>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
          .then(authUser => history.push("/"))
        .catch(err=> alert(err.message))
     }
    const register = (e) =>{
        e.preventDefault();
         auth.createUserWithEmailAndPassword(email, password)
          .then(authUser => history.push("/"))
        .catch(err=> alert(err.message))
     }
     
     
    return (
        <div className={classes.root}>
            <Typography variant="h5" align='left'>
                Sign In
            </Typography>
            <form className={classes.form}>
                <NetflixInput
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type='email'
                    placeholder='Email' className={classes.email} />

                <NetflixInput
                    value={password}
                    onChange={(e) => setPasword(e.target.value)}
                    type='password'
                    placeholder='Password' className={classes.password} />
                
                <NetflixButton onClick={signIn} type='submit' wide="medium" radius>Sign In</NetflixButton>
                
                <Typography variant='subtitle2' >
                    New to Netflix ?{"."}
                    <span className={classes.SignUpLink} onClick={register}>
                        Sign Up now.{"."}
                    </span>
                </Typography>
            </form>

        </div>
    )
}
const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: "350px",
        width: "20rem",
        height: "25rem",
        backgroundColor: "rgba(0,0,0,0.65)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
    },
    form: {
        width: "80%",
    },
    email: {
        marginBottom: theme.spacing(2)
    },
    password: {
        marginBottom: theme.spacing(4)
    },
    SignUpLink: {
        color: "#fff",
        cursor: "pointer",
        "&:hover": {
            textDecoration: "underline",
        },
    },
}));

export default SignUp
