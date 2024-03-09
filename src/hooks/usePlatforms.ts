import { useQuery } from '@tanstack/react-query';
import ms from 'ms';
import platforms from '../data/platforms';
import Platform from '../entities/Platform';
import APIClient from '../services/api-client';


// this is a hook that fetches platforms
const apiClient = new APIClient<Platform>('/platforms/lists/parents');
const usePlatforms = () =>
  useQuery({
    queryKey: ['platforms'],
    queryFn: apiClient.getAll,
    staleTime: ms('24h'), //24h,
    initialData: platforms,
  });

export default usePlatforms;
