import React from 'react';
import { HeroCardTeam } from './HeroCardTeam';
import { getOverallStats } from './helpers/getOverallStats';
import { getAverageHeight } from './helpers/getAverageHeight';
import { getAverageWeight } from './helpers/getAverageWeight';
export const MyTeam = ({ heroTeam, setHeroTeam }) => {
  let overallStats = getOverallStats(heroTeam);
  let averageHeight = getAverageHeight(heroTeam);
  let averageWeight = getAverageWeight(heroTeam);

  return (
    <div className="m-2">
      <h1>My team</h1>
      <div className="d-flex text-center align-items-center">
        <div className="m-2 p-2 border rounded">
          <h4>Overall Stats:</h4>
          <div className="d-flex flex-wrap">
            {overallStats.map(stat => (
              <h5
                className={`m-1 p-2 border rounded ${stat.color} align-items-center`}
                key={stat.stat}
                style={{width: '6em'}}
              >
                {stat.stat}: {stat.value || '---'}
              </h5>
            ))}
          </div>
        </div>

        <div className="m-2 p-2 border rounded">
          <div className="d-flex flex-column">
            <h5 className="m-1 p-1 border rounded bg-secondary">
             Avg Height: {averageHeight || '---'} cm
            </h5>
            <h5 className="m-1 p-1 border rounded bg-secondary">
             Avg Weight: {averageWeight || '---'} kg
            </h5>
          </div>
        </div>
      </div>

      {!heroTeam.length ? (
        <p className="text-danger">
          Your team will be shown here. At this moment, your team does not contain any hero. Please use the search feature to
          get you a hero for your team.
        </p>
      ) : null}

      <div className="d-flex flex-wrap">
        {heroTeam.map(hero => (
          <HeroCardTeam
            hero={hero}
            heroTeam={heroTeam}
            setHeroTeam={setHeroTeam}
            key={hero.id}
          />
        ))}
      </div>
    </div>
  );
};
