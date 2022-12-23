import { Link } from "react-router-dom";

export default function CancelPayment() {
  return (
    <div>
      <h1>The purchase has been canceled</h1>
      <Link to="/home">
        <button>Back to Snykers Shop</button>
      </Link>
    </div>
  );
}
