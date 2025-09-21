export default function Footer() {
  return (
    <footer className="bg-gray-200 text-center p-2">
      <p>© {new Date().getFullYear()} CivicApp</p>
    </footer>
  );
}