import { getPosts } from "@/actions/post";
import Link from "next/link";
import React from "react";

const Posts = async () => {
  const user = await getPosts();
  return (
    <div className="text-center pt-32 px-5">
      <h1 className="text-3xl font-bold text-gray-800">
        All Posts <span className="text-gray-500">({user?.posts.length})</span>
      </h1>
      <Link href="/posts/create-post" className="bg-blue-500 text-white px-4 py-2 rounded-md">
        Create Post
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
        {user && user.posts.map((post) => (
          <div key={post.id} className="bg-white p-5 rounded-lg shadow-md">
            <Link href={`/posts/${post.id}`}>
              <h2 className="text-gray-600">{post.title}</h2>
            </Link>
            <Link href={`/posts/${post.id}/edit-post`} className="bg-blue-500 text-white px-4 py-2 rounded-md">
              Edit
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
