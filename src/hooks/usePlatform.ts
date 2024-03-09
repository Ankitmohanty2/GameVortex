import usePlatforms from './usePlatforms';


// this hook will return the platform with the given id
const usePlatform = (id?: number) => {
  const { data: platforms } = usePlatforms();
  return platforms?.results.find((p) => p.id === id);
};

export default usePlatform;
