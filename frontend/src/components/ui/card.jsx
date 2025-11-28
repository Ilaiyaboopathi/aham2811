export function Card({ children, className = "" }) {
  return (
    <div className={`rounded-xl border border-gray-200 shadow-sm bg-white p-6 ${className}`}>
      {children}
    </div>
  );
}

export function CardContent({ children }) {
  return <div className="mt-2 text-sm text-gray-600">{children}</div>;
}
