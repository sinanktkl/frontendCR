import React, { useEffect, useState } from "react";
import "../componentsStyles/Instagraming.css";

function Instagraming() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const fetchInstagramPosts = async () => {
  //     try {
  //       const token = sessionStorage.getItem("token"); // ⚡ replace with your token
  //       const url = `https://graph.instagram.com/me/media?fields=id,media_url,permalink,caption&access_token=${token}`;

  //       const response = await fetch(url);
  //       const data = await response.json();

  //       if (data && data.data) {
  //         setPosts(data.data);
  //       } else {
  //         console.error("No posts found", data);
  //       }
  //     } catch (error) {
  //       console.error("Error fetching Instagram posts:", error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchInstagramPosts();
  // }, []);

  return (
    <section className="instagram-feed-section">
      <div className="container">
        <div className="instagram-feed-header">
          <h2 className="instagram-title">
            Our Instagram{" "}
            <span className="feed-text">Feed</span>{" "}
           <i id="iinf" className="fa-brands fa-instagram"></i>
          </h2>
          <p className="instagram-description">
            Follow us on{" "}
            <a
              href="https://www.instagram.com/customrodz/"
              target="_blank"
              rel="noopener noreferrer"
              className="instagram-link"
            >
              Instagram
            </a>{" "}
            for the latest updates and behind-the-scenes content. Stay connected with us and explore our latest posts.
          </p>
        </div>

        <div className="instagram-feed-content">
          {loading ? (
            <p className="loading-text">Instagram feed is loading...</p>
          ) : (
            <div className="instagram-feed-track">
              <p className="loading-text">Instagram feed is loading...</p>
              {posts?.map((post) => (
                <a
                  key={post?.id}
                  href={post?.permalink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="insta-post"
                >
                  <img src={post?.media_url} alt={post?.caption || "Instagram post"} />
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Instagraming;