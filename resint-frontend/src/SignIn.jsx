// import React from 'react';
// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';


// const SignIn = () => {
//     //signin function that is called when the log in with google button is clicked
//     const SignInWithFirebase = () => {
//         var google_provider = new firebase.auth.GoogleAuthProvider();
//         firebase.auth().signInWithPopup(google_provider)
//             .then((re) => {
//                 console.log(re);
//             })
//             .catch((err) => {
//                 console.log(err);
//             })
//     }
//     return (
//         <button onClick={SignInWithFirebase}>Sign in with Google</button>
//     )
// }

// export default SignIn