import leetCoin from "../assets/LeetCoin.png";
import useUserData from "../hooks/useUserData.ts";

function UserInfo() {
  const { userData } = useUserData({ username: "SamuTarifa33" });
  return (
    <>
      <header
        className={`bg-gray flex flex-col rounded-md items-center p-4 gap-3 ${
          !userData ? "w-60" : "w-fit"
        }`}
      >
        <div className="flex gap-4 w-full">
          <div className="aspect-square w-20 self-start">
            <img
              className="rounded-md w-full h-full"
              src={userData?.avatarUrl}
              alt={userData?.realName}
            />
          </div>
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="text-lg font-semibold">{userData?.realName}</h2>
              <h3 className="text-secondary text-sm">{userData?.username}</h3>
            </div>
            <h2>
              <span className="text-secondary">Rank</span> {userData?.ranking}
            </h2>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <h2>Points: </h2>
          <div className="w-4 aspect-square">
            <img src={leetCoin} alt="imagen de moneda de leetcode" />
          </div>
          <p className="text-orange font-bold text-base">
            {userData?.contributionPoint}
          </p>
        </div>
      </header>
    </>
  );
}

export default UserInfo;
