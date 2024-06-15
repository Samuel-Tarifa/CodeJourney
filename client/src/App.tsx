import "./App.css";

import UserInfo from "./components/UserInfo";

function App() {
  return (
    <>
      <main className="bg-black w-full text-white min-h-svh flex flex-col p-6">
        <UserInfo />
      </main>
    </>
  );
}

export default App;
