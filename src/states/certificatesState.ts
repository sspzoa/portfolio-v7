import type { Certificate } from '@/types/Certificate';
import { atom, atomFamily, selector } from 'recoil';

export const certificatesQuery = atomFamily({
  key: 'CertificatesQuery',
  default: async () => {
    const response = await fetch('/api/certificates');
    if (!response.ok) {
      throw new Error('Failed to fetch certificates');
    }
    const data = await response.json();
    return data.results;
  },
});

export const certificatesState = atom<Certificate[]>({
  key: 'certificatesState',
  default: [],
});

export const certificatesLoadingState = atom<boolean>({
  key: 'certificatesLoadingState',
  default: true,
});

export const certificatesErrorState = atom<Error | null>({
  key: 'certificatesErrorState',
  default: null,
});

export const certificatesSelector = selector({
  key: 'certificatesSelector',
  get: async ({ get }) => {
    return get(certificatesQuery('default'));
  },
});
