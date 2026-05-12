import { Link } from "react-router-dom";
export default function NotFound() {
  return (
    <div className="min-h-screen grid place-items-center text-center px-4">
      <div>
        <div className="font-display text-7xl gradient-gold-text">404</div>
        <p className="mt-4 text-muted-foreground">The page you're looking for has moved.</p>
        <Link to="/" className="mt-8 inline-flex bg-gradient-gold text-ink px-6 py-3 rounded-full font-medium">Return Home</Link>
      </div>
    </div>
  );
}
