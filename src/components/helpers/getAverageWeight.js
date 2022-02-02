export const getAverageWeight = heroTeam => {
  let totalWeight = 0;
  heroTeam.map(hero => (totalWeight += parseInt(hero.appearance.weight[1])));
  let averageWeight = totalWeight / heroTeam.length;
  return Math.floor(averageWeight);
};
