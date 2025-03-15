import { Link } from "react-router-dom";

function Posts() {
  return (
    <>
      <h1>Posts</h1>
      <ul>
        <li>
          <Link to="1">Post 1</Link>
        </li>
        <li>
          <Link to="2">Post 2</Link>
        </li>
        <li>
          <Link to="3">Post 3</Link>
        </li>
      </ul>
    </>
  );
}

export default Posts;
