import type { CertificateType } from '@/types/grid/CertificateType';
import { atom } from 'jotai';
import { atomWithQuery } from 'jotai-tanstack-query';

export const certificatesQueryAtom = atomWithQuery(() => ({
  queryKey: ['certificates'],
  queryFn: async () => {
    const response = await fetch('/api/certificates');
    if (!response.ok) {
      throw new Error('Failed to fetch certificates');
    }
    const data = await response.json();
    return data.results as CertificateType[];
  },
}));

export const certificatesAtom = atom<CertificateType[]>([]);

export const certificatesLoadingAtom = atom<boolean>(true);

export const certificatesErrorAtom = atom<Error | null>(null);
