import { useState, useEffect } from "react";

import getUserData from "../services/getUserData.ts";
import { UserData } from "../schema/userData.ts";

export default function useUserData({ username }: { username: string }) {
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    getUserData(username).then((data) => setUserData(data));
  }, [username]);

  return { userData };
}
