import React, { useState } from "react";
import { Search } from "./Search";
import { MyTeam } from "./MyTeam";
export const Home = () => {
  const [heroTeam, setHeroTeam] = useState([]);
  return (
    <div className="d-flex flex-column align-items-center">
      <div>
        <MyTeam heroTeam={heroTeam} setHeroTeam={setHeroTeam} />
        <Search setHeroTeam={setHeroTeam} heroTeam={heroTeam} />
      </div>
    </div>
  );
};
