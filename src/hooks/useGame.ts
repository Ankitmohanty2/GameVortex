import { useQuery } from '@tanstack/react-query';
import Game from '../entities/Game';
import APIClient from '../services/api-client';

// this is a hook that fetches a game by its slug

const apiClient = new APIClient<Game>(`/games`);
const useGame = (slug: string) => {
  return useQuery({
    queryKey: ['games', slug],
    queryFn: () => apiClient.get(slug),
  });
};

export default useGame;
