export const metadata = {
  title: "Taskify",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-screen-sm w-full mx-auto">
      {children}
    </div>
  );
}
