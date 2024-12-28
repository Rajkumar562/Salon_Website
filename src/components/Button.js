export default function Button({ children, href, className = "" }) {
  return (
    <button href={href} className={`${className}`}>
      {children}
    </button>
  );
}
