import useGenres from './useGenres';


// this hook is used to get the genre by id
const useGenre = (id?: number) => {
  const { data: genres } = useGenres();
  return genres?.results.find((g) => g.id === id);
};

export default useGenre;
