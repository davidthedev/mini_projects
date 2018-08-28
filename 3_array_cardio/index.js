const tracks = [
  { artist: 'Michael Jackson', title: 'Thriller', year: '1982' },
  { artist: 'Madonna', title: 'Like A Prayer', year: '1989' },
  { artist: 'Prince', title: 'When Doves Cry', year: '1984' },
  { artist: 'Whitney Houston', title: 'I Wanna Dance With Somebody', year: '1987' },
  { artist: 'Britney Spears', title: '...Baby One More Time', year: '1998' },
  { artist: 'NSYNC', title: 'It\'s Gonna Be Me', year: '2000' },
  { artist: 'Backstreet Boys', title: 'Everybody', year: '1997' },
  { artist: 'Adele', title: 'Rolling In The Deep', year: '2011' },
  { artist: 'Journey', title: 'Don\'t Stop Believing', year: '1981' },
  { artist: 'Michale Jackson', title: 'Billie Jean', year: '1982' }
];

// filter the tracks that were released in the 80s
const eightiesTracks = tracks.filter(track => track.year > 1979 && track.year < 1990);
console.log('80s tracks', eightiesTracks);

// map (loop) through the tracks and return full track titles
const fullTrackTitles = tracks.map(track => `${track.artist} - ${track.title}`);
console.log('full track titles', fullTrackTitles);

// sort tracks by year (oldest first) - 1 (meaning place x after y), -1 (meaning place x before y)
const tracksSortedByYear = tracks.sort((x, y) => x.year > y.year ? 1 : -1);
console.log('tracks sorted by year', tracksSortedByYear);

// sort tracks by artist name (shortest first)
const trackArtistNameLength = tracks.sort((x, y) => x.artist.length > y.artist.length ? 1 : -1);
console.log('tracks sorted by artist name length', trackArtistNameLength);

// TODO
// tracks.reduce() - total track length - convert minutes and seconds to seconds and then divide by 60
// const totalTracksLength = tracks.reduce((accumulator, track) => accumulator + track.length);

// filter by names that contain 'it'
const itInNames = tracks.filter((track) => {
  return track.artist.includes('it');
});
console.log('artists that contain "it" in name', itInNames);

// count number of times each value appears in array
const arr  = [ 'a', 'b', 'a', 'c', 'd', 'b', 'd' ];
const trans = arr.reduce((acc, ar) => {
  if (!acc[ar]) {
    acc[ar] = 0;
  }
  acc[ar]++;
  return acc;
}, {});
console.log(trans);
