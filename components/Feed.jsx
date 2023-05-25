"use client";

import { useState, useEffect } from "react";
import PromptCard from "./PromptCard";

// const PromptCardList = ({ data, handleTagClick }) => {
//   return (
//     <div className="mt-16 prompt_layout">
//       {data.map((post) => (
//         <PromptCard
//           key={post._id}
//           post={post}
//           handleTagClick={handleTagClick}
//         />
//       ))}
//     </div>
//   );
// };

const Feed = () => {
  const [searchText, setSearchText] = useState("");
  const [allPosts, setAllPosts] = useState([]);

  const fetchPosts = async () => {
    const response = await fetch("/api/prompt", { cache: "no-store" });
    const data = await response.json();
    setAllPosts(data);
  };

  useEffect(() => {
    fetchPosts();
  }, [allPosts]);

  const handleSearchChange = (e) => {
    e.preventDefault();
  };

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Search for a tag or a username"
          value={searchText}
          onChange={handleSearchChange}
          required
          className="search_input peer"
        />
      </form>

      <div className="mt-16 prompt_layout">
        {allPosts.map((post) => (
          <PromptCard key={post._id} post={post} handleTagClick={() => {}} />
        ))}
      </div>
    </section>
  );
};

export default Feed;
