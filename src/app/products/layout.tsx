export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {children}
      <div>
        <h1>Featured Products</h1>
      </div>
    </div>
  );
}
