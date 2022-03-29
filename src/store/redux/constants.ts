export const byGenreURL = `https://api.themoviedb.org/3/discover/movie?api_key=15c32b97f897fcdcf60aac8f6e0746f4&with_genres=`;
export const byQueryURL = `https://api.themoviedb.org/3/search/movie?api_key=d62e1adb9803081c0be5a74ca826bdbd&query=`;
export const topRatedURL = `https://api.themoviedb.org/3/movie/top_rated?api_key=15c32b97f897fcdcf60aac8f6e0746f4&language=en-US&page=1`;
export const upcomingURL = `https://api.themoviedb.org/3/movie/upcoming?api_key=15c32b97f897fcdcf60aac8f6e0746f4&language=en-US&page=1`;

export const videoURL = (movieID: string | null | undefined) => {
  return `https://api.themoviedb.org/3/movie/${movieID}/videos?api_key=15c32b97f897fcdcf60aac8f6e0746f4&language=en-US`;
};
