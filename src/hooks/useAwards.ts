import type { Award } from '@/types/Award';
import { useEffect, useState } from 'react';

export function useAwards() {
  const [awards, setAwards] = useState<Award[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchAwards() {
      try {
        const response = await fetch('/api/awards');
        if (!response.ok) {
          throw new Error('Failed to fetch awards');
        }
        const data = await response.json();
        setAwards(data.results);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('An error occurred'));
      } finally {
        setLoading(false);
      }
    }

    fetchAwards();
  }, []);

  return { awards, loading, error };
}
