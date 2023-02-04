import React from 'react'

import { auth, db } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Router, { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Message from './Message';
import Link from "next/link";
import {
    addDoc,
    collection,
    doc,
    serverTimestamp,
    updateDoc,
    orderBy, 
    query,
    onSnapshot
} from "firebase/firestore";
import { toast } from "react-toastify";

const Forum = ({currentCountry,currentCity}) => {
    const [allPosts, setAllPosts] = useState([]);

    const getPosts = async () => {
        const collectionRef = collection(db, "posts");
        const q = query(collectionRef, orderBy("timestamp", "desc"));
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const temp = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
            const filtered = temp.filter(el=>el.city == currentCity)
            // setAllPosts(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
            setAllPosts(filtered);
        });
        return unsubscribe;
    };

    useEffect(() => {
        getPosts();
    }, [currentCity]);
    //Form state
    const [post, setPost] = useState({ description: "" });
    const [user, loading] = useAuthState(auth);
    const route = useRouter();
    const routeData = route.query;

    //Submit Post
    const submitPost = async (e) => {
        e.preventDefault();
        //Run checks for description
        if (!post.description) {
            toast.error("Description Field empty 😅", {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 1500,
            });
            return;
        }
        if (post.description.length > 300) {
            toast.error("Description too long 😅", {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 1500,
            });
            return;
        }

        if (post?.hasOwnProperty("id")) {
            const docRef = doc(db, "posts", post.id);
            const updatedPost = { ...post, timestamp: serverTimestamp() };
            await updateDoc(docRef, updatedPost);
            return route.push("/");
        } else {
            //Make a new post
            const collectionRef = collection(db, "posts");
            await addDoc(collectionRef, {
                ...post,
                timestamp: serverTimestamp(),
                user: user.uid,
                avatar: user.photoURL,
                username: user.displayName,
                city:currentCity
            });
            setPost({ description: "" });
            toast.success("Post has been made 🚀", {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 1500,
            });
            return route.push("/");
        }
    };

    //Check our user
    const checkUser = async () => {
        if (loading) return;
        if (!user) route.push("/auth/login");
        if (routeData.id) {
            setPost({ description: routeData.description, id: routeData.id });
        }
    };

    useEffect(() => {
        checkUser();
    }, [user, loading]);
    return (
        <div className="my-10 p-12 shadow-lg rounded-lg  mx-auto">
            <form onSubmit={submitPost}>
                <h1 className="text-2xl font-bold">
                    {post.hasOwnProperty("id") ? "Edit your post" : `Talk to fellow nomads in ${currentCity} `}
                </h1>
                <div className="py-2">
                    <h3 className="text-lg font-medium py-2">Write a message</h3>
                    <textarea
                        value={post.description}
                        onChange={(e) => setPost({ ...post, description: e.target.value })}
                        className="bg-gray-800 h-48 w-full text-white rounded-lg p-2 text-sm"
                    ></textarea>
                    <p
                        className={`text-cyan-600 font-medium text-sm ${post.description.length > 300 ? "text-red-600" : ""
                            }`}
                    >
                        {post.description.length}/300
                    </p>
                </div>
                <button
                    type="submit"
                    className="w-full bg-cyan-600 text-white font-medium p-2 my-2 rounded-lg text-sm"
                >
                    Comment
                </button>
            </form>

            <div className="my-12 text-lg font-medium">
        <h2>See what other people are saying</h2>
        {allPosts.map((post) => (
          <Message key={post.id} {...post}>
          </Message>
        ))}
      </div>
        </div>
    )
}

export default Forum