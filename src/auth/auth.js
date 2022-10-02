import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
export const loginWithGoogle = async() => {
    try {
        const googleProvider = new GoogleAuthProvider();
        const auth = getAuth();
        const googleCredentials = await signInWithPopup(auth, googleProvider);
        if (googleCredentials) {
            return googleCredentials
        }


    } catch (e) {
        console.log(e.message);
    }
}
export const logOut = () => {
    getAuth().signOut()
}