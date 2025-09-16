import React, { useEffect, useState } from "react";
import { Card, Button, Spinner, Modal, Form } from "react-bootstrap";
import { GetAllPostsApi, LikePostApi, AddPostApi } from "../Services/allAPI";
import { toast } from "react-toastify";

function Feed() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Modal state
  const [showModal, setShowModal] = useState(false);
  const [caption, setCaption] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  // 🔹 Fetch posts
  const fetchPosts = async () => {
    try {
      setLoading(true);
      const token = sessionStorage.getItem("token");
      const reqHeader = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      };
      const result = await GetAllPostsApi(reqHeader);

      if (result.status === 200) {
        setPosts(result.data);
      } else {
        toast.error("Failed to fetch posts");
      }
    } catch (err) {
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  // 🔹 Like / Unlike
  const handleLike = async (postId) => {
    try {
      const userId = sessionStorage.getItem("userId") // replace with logged-in userId
      const token = sessionStorage.getItem("token");
      const reqHeader = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      };

      const res = await LikePostApi(postId, { userId }, reqHeader);
      if (res.status === 200) {
        setPosts(posts.map((p) => (p._id === postId ? res.data : p)));
      }
    } catch (err) {
      toast.error("Failed to like post");
    }
  };

//   // 🔹 Add Post
//   const handleAddPost = async () => {
//     try {
//       if (!caption || !imageUrl) {
//         toast.warning("Please fill all fields");
//         return;
//       }

//       const userId = "currentUserId"; // replace with logged-in user
//       const token = sessionStorage.getItem("token");
//       const reqHeader = {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`,
//       };
//       const reqBody = { caption, imageUrl };

//       const res = await AddPostApi(userId, reqBody, reqHeader);

//       if (res.status === 201) {
//         toast.success("Post added successfully!");
//         setShowModal(false);
//         setCaption("");
//         setImageUrl("");
//         fetchPosts();
//       }
//     } catch (err) {
//       toast.error("Failed to add post");
//     }
//   };

// Add Post
const handleAddPost = async () => {
  try {
    if (!caption || !imageUrl) {
      toast.warning("Please fill all fields");
      return;
    }

    const userId = sessionStorage.getItem("userId"); 
    const token = sessionStorage.getItem("token");
    const reqHeader = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    const reqBody = { caption, imageUrl };

    const res = await AddPostApi(userId, reqBody, reqHeader);

    if (res.status === 201) {
      toast.success("Post added successfully!");
      setShowModal(false);
      setCaption("");
      setImageUrl("");
      fetchPosts();
    }
  } catch (err) {
    toast.error("Failed to add post");
  }
};

  return (
    <div>
      <div className="mb-3 text-end">
        <Button onClick={() => setShowModal(true)}>➕ Add Post</Button>
      </div>

      {loading ? (
        <Spinner animation="border" />
      ) : (
        posts.map((post) => (
          <Card key={post._id} className="mb-3">
            <Card.Header>{post.userId?.username}</Card.Header>
            <Card.Img variant="top" src={post.imageUrl} />
            <Card.Body>
              <Card.Text>{post.caption}</Card.Text>
              <Button onClick={() => handleLike(post._id)}>
                ❤️ {post.likes.length}
              </Button>
            </Card.Body>
          </Card>
        ))
      )}

      {/* 🔹 Add Post Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Caption</Form.Label>
              <Form.Control
                type="text"
                value={caption}
                onChange={(e) => setCaption(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mt-2">
              <Form.Label>Image URL</Form.Label>
              <Form.Control
                type="text"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleAddPost}>
            Save Post
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Feed;
