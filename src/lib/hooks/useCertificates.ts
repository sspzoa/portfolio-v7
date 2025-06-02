import type { CertificateType } from '@/types/grid/CertificateType';
import { getCertificates } from '../api/services';
import { createQueryState } from './useQueryState';

const certificatesState = createQueryState<CertificateType[]>({
  queryKey: ['certificates'],
  queryFn: getCertificates,
  initialValue: [],
});

export const useCertificates = () => {
  const { data, isLoading, error, setData } = certificatesState.useQueryState();

  return {
    certificates: data,
    isLoading,
    error,
    setCertificates: setData,
  };
};

export const {
  queryAtom: certificatesQueryAtom,
  dataAtom: certificatesAtom,
  loadingAtom: certificatesLoadingAtom,
  errorAtom: certificatesErrorAtom,
} = certificatesState;
