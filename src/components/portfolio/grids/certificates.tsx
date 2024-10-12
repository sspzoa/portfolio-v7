'use client';

import { DefaultSkeleton } from '@/components/portfolio/skeleton';
import {
  certificatesErrorState,
  certificatesLoadingState,
  certificatesSelector,
  certificatesState,
} from '@/states/certificatesState';
import type { Certificate } from '@/types/Certificate';
import Link from 'next/link';
import { useEffect } from 'react';
import { useRecoilValue, useRecoilValueLoadable, useSetRecoilState } from 'recoil';

export default function Certificates() {
  const setCertificates = useSetRecoilState(certificatesState);
  const setLoading = useSetRecoilState(certificatesLoadingState);
  const setError = useSetRecoilState(certificatesErrorState);
  const certificatesLoadable = useRecoilValueLoadable(certificatesSelector);

  useEffect(() => {
    switch (certificatesLoadable.state) {
      case 'hasValue':
        setCertificates(certificatesLoadable.contents);
        setLoading(false);
        setError(null);
        break;
      case 'loading':
        setLoading(true);
        break;
      case 'hasError':
        setError(certificatesLoadable.contents);
        setLoading(false);
        break;
    }
  }, [certificatesLoadable, setCertificates, setLoading, setError]);

  const certificates = useRecoilValue(certificatesState);
  const loading = useRecoilValue(certificatesLoadingState);
  const error = useRecoilValue(certificatesErrorState);

  const renderSkeletons = () => (
    <>
      {[...Array(6)].map((_, index) => (
        <DefaultSkeleton key={index} />
      ))}
    </>
  );

  if (error) return <div>Error loading certificates: {error.message}</div>;

  return (
    <div className="flex flex-col gap-spacing-300">
      <strong className="text-label text-content-standard-tertiary">Certificates</strong>
      <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-spacing-400">
        {loading
          ? renderSkeletons()
          : certificates.map((certificate: Certificate) => {
              const name = certificate?.properties?.name?.title[0]?.plain_text;
              const kind = certificate?.properties?.kind?.rich_text[0]?.plain_text;
              const institution = certificate?.properties?.institution?.rich_text[0]?.plain_text;
              const date = certificate?.properties?.date?.date?.start;
              const formattedDate = date ? new Date(date).toISOString().slice(0, 7).replace(/-/g, '.') : null;
              const public_url = certificate?.public_url;

              return (
                <Link
                  key={certificate.id}
                  href={public_url || '#'}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex flex-row items-center bg-components-fill-standard-primary rounded-radius-600 border border-line-outline p-spacing-400 ease-in-out duration-300 hover:opacity-50">
                  <span className="text-label text-content-standard-tertiary w-[65px] flex-shrink-0">
                    {formattedDate || 'Not Available'}
                  </span>
                  <div className="flex flex-col gap-spacing-100">
                    <span className="text-label">{name || 'Not Available'}</span>
                    <span className="text-footnote text-content-standard-secondary">
                      {kind || 'Not Available'} / {institution || 'Not Available'}
                    </span>
                  </div>
                </Link>
              );
            })}
      </div>
    </div>
  );
}
