export default async function Home() {
  const data = await (await fetch("http://localhost:3000/api/user")).json();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {data.username}
    </main>
  );
}
