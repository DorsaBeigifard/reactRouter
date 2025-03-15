import { useParams } from "react-router-dom";

const posts = [
  {
    id: 1,
    title: "Post 1",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, facere.",
  },
  {
    id: 2,
    title: "Post 21",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, facere.",
  },
  {
    id: 3,
    title: "Post 3",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, facere.",
  },
];

function Post() {
  const { id } = useParams();

  const post = posts.find((p) => p.id === Number(id));

  return (
    <div>
      <h2>
        {post.title} - {post.id}
      </h2>
      <p>{post.desc}</p>
    </div>
  );
}

export default Post;
