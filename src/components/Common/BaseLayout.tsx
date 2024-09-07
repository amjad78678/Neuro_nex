export default function BaseLayout({
  children,
  navbar,
  footer,
}: {
  children: React.ReactNode;
  navbar: React.ReactNode;
  footer: React.ReactNode;
}) {
  return (
    <>
      <main className="min-h-screen">
        {navbar}
        {children}
      </main>
      <footer>{footer}</footer>
    </>
  );
}