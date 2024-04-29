import { Link } from "react-router-dom";

export default function GoBack({ to, style, children }) {
  return (
    <Link to={to} style={style}>
      {children}
    </Link>
  );
}
