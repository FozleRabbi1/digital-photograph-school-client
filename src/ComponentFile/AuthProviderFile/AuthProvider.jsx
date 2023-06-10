import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase.config";
// import app from "../../../firebase.config";
// import app from "../../../firebase.config"
// import axios from "axios";

export const AuthContext = createContext(null)
const auth = getAuth(app)


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    const provider = new GoogleAuthProvider();

    const googleSignUp = () => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    const createUser = (email, password) => {
        // setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const updateUserProfile = (name, photoUrl) => {
        const updateUser = { ...user }
        updateUser.displayName = name;
        updateUser.photoURL = photoUrl
        setUser(updateUser)

        const auth = getAuth();
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photoUrl
        })
    }
    const signInUser = (email, password) => {
        // setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            // console.log(currentUser)

            // if (currentUser) {
            //     axios.post("http://localhost:5000/jwt", { email: currentUser.email })
            //         .then(data => {
            //             const token = data.data.token;
            //             console.log(token)
            //             localStorage.setItem("access-token", token)
            //             setLoading(false)
            //         })
            // }
            // else {
            //     localStorage.removeItem("access-token")
            // }

            setLoading(false)
        });
        return () => {
            return unsubscribe();
        }
    }, [])

    const loginOut = () => {
        setUser(null)
        signOut(auth)
    }

    const authUser = {
        user: user,
        googleSignUp,
        createUser,
        updateUserProfile,
        signInUser,
        loading: loading,
        loginOut

    }

    return (
        <AuthContext.Provider value={authUser}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;