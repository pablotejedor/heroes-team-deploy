import React from 'react';

export const HeroCard = ({ hero, heroTeam, setHeroTeam }) => {
  const goodGuysCount = heroTeam.filter(selectedHero => selectedHero.biography.alignment === 'good').length;
  const badGuysCount = heroTeam.filter(selectedHero => selectedHero.biography.alignment === 'bad').length;

  const colors = {
    good: '#236494',
    bad: '#b61617',
  };
  const backgroundImage = {
    backgroundColor: colors[hero.biography.alignment],
    width: '13rem',
  };
  return (
    <div
      className="card m-1 text-center animate__animated animate__fadeIn border"
      style={backgroundImage}
    >
      <img className="card-img-top col-5" src={hero.image.url} alt={hero.id} />
      <div className="card-body">
        <h5 className="card-title">{hero.name}</h5>
        <button
          onClick={() => {
            if (heroTeam.some(selectedHero => selectedHero.id === hero.id)) {
              alert('This hero already exist in your team');
            } else if (heroTeam.length > 5) {
              alert('Your team must have six members');
            } else if (goodGuysCount === 3 && hero.biography.alignment === 'good') {
              alert('Maximum three good guys');
            } else if (badGuysCount === 3 && hero.biography.alignment === 'bad') {
              alert('Maximum three bad guys');
            } else if (
              hero.biography.alignment === 'neutral' ||
              hero.biography.alignment === '-'
            ) {
              alert('No neutral heroes allowed');
            } else {
              setHeroTeam(heroTeam => [...heroTeam, hero]);
            }
          }}
          type="button"
          className="btn btn-light border"
        >
          Add to my team
        </button>
      </div>
    </div>
  );
};
