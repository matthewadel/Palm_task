import { useEffect } from 'react';

import { getMoods, useApiQuery } from '@/api';
import { IMood } from '@/types';

export function useGetMoods() {
  const { data, error, isLoading, refetch } = useApiQuery(
    ['moods'],
    async () => {
      const res = await fetch(getMoods);
      if (!res.ok) throw new Error('Failed to fetch moods');
      return res.json();
    },
  );

  useEffect(() => {
    refetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    moods: data?.data as IMood[] | undefined,
    error,
    loading: isLoading,
  };
}
