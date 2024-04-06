import React, { useEffect, useState } from "react";
import Skeleton from "./Skeleton";
import { Location } from "./Location";
import NoData from "./NoData";
import { fetchData } from "../utils/apiUtils";

export default function Layout(props) {
  const [userDetails, setUserDetails] = useState(null);

  const userId = localStorage.getItem("userId");

  useEffect(() => {
    fetchData(`http://localhost:8080/user/${userId}/profile`)
      .then((data) => {
        setUserDetails(data);
      })
      .catch((error) => {
        console.log("Error", error);
      });
    setUserDetails(userDetails);
  }, []);

  if (!userDetails) {
    return (
      <div className="flex p-7 w-full gap-3">
        <div className="w-1/4">
          <Skeleton />
        </div>
        <div className="w-3/4 flex justify-center items-center text-white border-slate-400 rounded-md border">
          <NoData />
        </div>
      </div>
    );
  }
  return (
    <>
      <h1>Profile</h1>
      <div className="flex p-7 w-full gap-3">
        <div className="w-1/4 flex flex-col justify-center items-center gap-4">
          <img
            src="images/photo.jpg"
            alt="Game"
            className="rounded-full h-32 w-32 mx-auto"
          />
          <div>
            <p className="font-semibold text-xl text-white">
              {userDetails?.username}
            </p>
            <div className="flex text-xs gap-1 items-center">
              <Location className="w-4 h-4" />
              <p className="text-xs text-white">{userDetails?.city}</p>
            </div>
          </div>
        </div>
        <div className="w-3/4 text-white border-slate-400 rounded-md border p-2">
          <div className="flex flex-col gap-2 font-semibold text-xl text-white p-4">
            Games Played
            {userDetails?.gameInfoList.map((gameInfo) => (
              <div className="flex gap-3 px-4">
                <div>
                  <img
                    src="images/monkey.png"
                    alt="Game"
                    className="rounded-full h-10 w-10 mx-auto"
                  />
                </div>
                <div className="flex flex-col">
                  <p className="font-semibold text-l text-red-300">
                    {gameInfo?.game?.gameName}
                  </p>
                  <p className="text-xs text-white">
                    Highest Score: {gameInfo?.score}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
