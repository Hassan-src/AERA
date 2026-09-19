import { Link } from "react-router-dom";

function Button({ children, className, to, onClick }) {
  if (to)
    return (
      <Link className={className} to={to}>
        {children}
      </Link>
    );
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
