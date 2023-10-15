import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
// import axios from "axios";

const auth = getAuth(app)
export const AuthContext = createContext()
const AuthProviders = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const userLogin = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const userUpdateProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })
    }

    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    const githubSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, githubProvider)
    }

    const logOut = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
            // if (currentUser) {
            //     setLoading(false)
            //     axios.post("http://localhost:8000/jwt", { email: currentUser?.email })
            //         .then(data => {
            //             if (data.data) {
            //                 localStorage.setItem("access-token", data?.data.token);
            //                 setLoading(false)
            //             }
            //         })
            // }
            // else {
            //     localStorage.removeItem("access-token");
            //     setLoading(false);
            // }

        })
        return () => {
            return unsubscribe();
        }
    }, [])

    const authInfo = {
        loading,
        user,
        createUser,
        userLogin,
        googleSignIn,
        githubSignIn,
        userUpdateProfile,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;
