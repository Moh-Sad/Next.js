export default async function getAllUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!res.ok) {
    undefined;
  }

  const data = await res.json();
  return data;
}
