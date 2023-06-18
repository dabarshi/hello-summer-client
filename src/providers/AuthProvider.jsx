import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // create provider for google sign in
    const googleProvider = new GoogleAuthProvider();

    // create a new user function with email and password
    const createNewUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // update users name and photo
    const updateUser = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })
    }

    // Sign in with Email and passWord
    const loginWithEmailAndPassword = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email,password);
    }

    // google sign in with popup function

    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider);
    }

    // sign out 
    const logOut = () => {
        setLoading(true)
        return signOut(auth);
    }

    // Set an authentication state observer

    useEffect( () => {
      const unsubscribe =  onAuthStateChanged( auth, currentUser => {
            setUser(currentUser);

            // get and set token
            if(currentUser){
                axios.post('https://b7a12-summer-camp-server-side-dabarshi.vercel.app/jwt', {email: currentUser.email})
                .then(data =>{
                    // console.log(data.data.token)
                    localStorage.setItem('access-token', data.data.token)
                })
            }
            else{
                localStorage.removeItem('access-token')
            }


            setLoading(false)
        });
        return () => {
            return unsubscribe();
        }
    }, [])

    const authInfo = {
        user,
        loading,
        createNewUser,
        updateUser,
        loginWithEmailAndPassword,
        googleSignIn,
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;