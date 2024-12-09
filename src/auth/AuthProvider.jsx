import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";
import axios from 'axios';

export const authContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    // user state 
    const [user, setUser] = useState();
    const [loader, setLoader] = useState(true);
    const provider = new GoogleAuthProvider();

    // user register 
    const handleUserRegister = (email, password) => {
        setLoader(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // user login 
    const handleUserLogin = (email, password) => {
        setLoader(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // user google login 
    const handleUserGoogleLogin = () => {
        setLoader(true);
        return signInWithPopup(auth, provider);
    }

    // update profile 
    const handleUpdateProfile = (displayName, photoURL) => {
        setLoader(true);
        return updateProfile(auth.currentUser, {
            displayName,
            photoURL
        })
    }

    // user logout 
    const handleUserLogout = () => {
        setLoader(true);
        return signOut(auth);
    }

    // onAuthStateChanged 
    useEffect(() => {
        const unsubscrib = onAuthStateChanged(auth, (currentUser) => {
            console.log('onAuthStateChanged', currentUser);

            const userLogged = currentUser?.email || user?.email
            const loggedUser = { email: userLogged }

            setUser(currentUser);
            setLoader(false);

            if (currentUser) {
                axios.post('https://online-job-bd-server-site.vercel.app/jwt', loggedUser, { withCredentials: true })
                    .then(res => {
                        console.log('token respons', res.data);
                    })
            }
            else {
                axios.post('https://online-job-bd-server-site.vercel.app/logout', loggedUser, { withCredentials: true })
                    .then(res => {
                        console.log(res.data);
                    })
            }

        })
        return () => {
            unsubscrib();
        }
    }, [])

    const authInfo = {
        handleUserRegister,
        handleUserLogin,
        handleUserGoogleLogin,
        handleUpdateProfile,
        handleUserLogout,
        user,
        loader
    }
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;