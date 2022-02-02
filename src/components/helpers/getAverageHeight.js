export const getAverageHeight = heroTeam => {
  let totalHeight = 0;
  heroTeam.map(hero => (totalHeight += parseInt(hero.appearance.height[1])));
  let averageHeight = totalHeight / heroTeam.length;
  return Math.floor(averageHeight);
};
