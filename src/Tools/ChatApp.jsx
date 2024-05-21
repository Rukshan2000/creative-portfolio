import React, { useRef, useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, query, orderBy, limit, addDoc, serverTimestamp } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCP0WGP0Crk1cD-Z7sIh2nWaZdb2JxnHhg",
  authDomain: "chatapp-6b176.firebaseapp.com",
  projectId: "chatapp-6b176",
  storageBucket: "chatapp-6b176.appspot.com",
  messagingSenderId: "1071260581234",
  appId: "1:1071260581234:web:2c3388e66f61468f9031eb",
  measurementId: "G-6XPR6XB0T8"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

function ChatApp() {
  const [user] = useAuthState(auth);

  return (
    <div className="flex flex-col max-w-screen-lg min-h-screen mx-auto bg-blue-50">
      <header className="bg-gray-900 h-20 min-h-[50px] text-white flex items-center justify-between p-2">
        <h1 className="pl-4 text-2xl">Rukshan's Community</h1>
        {user && (
          <button className="px-4 py-2 mr-4 font-bold text-white bg-red-600 rounded hover:bg-red-800" onClick={() => signOut(auth)}>Sign Out</button>
        )}
      </header>
      <section className="flex flex-1">
        {user ? <ChatRoom user={user} /> : <SignIn />}
      </section>
    </div>
  );
}

function SignIn() {
  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      // Access the user's profile information
      const user = result.user;
      // Get the photo URL and display name from the user's profile
      const photoURL = user.photoURL;
      const displayName = user.displayName;
      // Use the photoURL and displayName as needed
      console.log(photoURL, displayName);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center flex-1">
      <button className="px-6 py-3 font-bold text-white bg-green-500 rounded-lg hover:bg-green-600" onClick={signInWithGoogle}>Sign in with Google</button>
    </div>
  );
}


function ChatRoom({ user }) {
  const dummy = useRef();
  const messagesRef = collection(firestore, 'messages');
  const messagesQuery = query(messagesRef, orderBy('createdAt'), limit(25));
  
  const [messages] = useCollectionData(messagesQuery, { idField: 'id' });

  const [formValue, setFormValue] = useState('');

  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    await addDoc(messagesRef, {
      text: formValue,
      createdAt: serverTimestamp(),
      uid,
      photoURL
    });

    setFormValue('');
    dummy.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div className="flex flex-col flex-1">
      <main className="flex-1 px-6 py-4 overflow-y-auto">
        {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} user={user} />)}
        <span ref={dummy}></span>
      </main>
      <form className="flex items-center p-4 bg-gray-200" onSubmit={sendMessage}>
        <input className="flex-grow p-3 mr-4 border-none rounded-full focus:outline-none" value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="Type a message" />
        <button className="px-4 py-2 font-bold text-white bg-green-500 rounded-full hover:bg-green-600" type="submit" disabled={!formValue}>Send</button>
      </form>
    </div>
  );
}

function ChatMessage({ message, user }) {
  const { text, uid, photoURL } = message;
  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';
  const isCurrentUser = user.uid === uid;

  return (
    <div className={`flex items-start mb-4 ${messageClass === 'sent' ? 'justify-end' : 'justify-start'}`}>
      <div className={`max-w-[75%] p-4 rounded-lg ${messageClass === 'sent' ? 'bg-green-500 text-white self-end' : 'bg-gray-300 text-gray-700 self-start'}`}>
        <div className="flex items-center mb-2">
          <img src={photoURL} alt="Profile" className="w-8 h-8 mr-2 rounded-full" />
          {isCurrentUser ? <span className="font-bold">You</span> : <span className="font-bold">{user.displayName}</span>}
        </div>
        {text}
      </div>
    </div>
  );
}

export default ChatApp;
