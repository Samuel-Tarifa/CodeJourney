export default function getUserData(username: string) {
  return fetch(`${import.meta.env.VITE_API}/${username}`).then((res) =>
    res.json()
  );
}
