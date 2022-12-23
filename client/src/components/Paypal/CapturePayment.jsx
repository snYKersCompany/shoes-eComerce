import { Link } from "react-router-dom";

export default function CapturePayment() {
  return (
    <div>
      <h1>Thank you for your purchase!</h1>
      <Link to= "/home">
        <button>Back to Snykers Shop</button>
      </Link>
    </div>
  );
}
