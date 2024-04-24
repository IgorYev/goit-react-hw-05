import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div>
      <p>Oooops! Page not found !</p>
      <p>
        Please visit <Link to="/">Home Page</Link>
      </p>
    </div>
  );
}
