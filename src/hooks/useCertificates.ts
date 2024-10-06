import type { Certificate } from '@/types/Certificate';
import { useEffect, useState } from 'react';

export function useCertificates() {
  const [certificates, setCertificates] = useState<Certificate[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchCertificates() {
      try {
        const response = await fetch('/api/certificates');
        if (!response.ok) {
          throw new Error('Failed to fetch certificates');
        }
        const data = await response.json();
        setCertificates(data.results);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('An error occurred'));
      } finally {
        setLoading(false);
      }
    }

    fetchCertificates();
  }, []);

  return { certificates, loading, error };
}
