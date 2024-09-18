import { useCertificates } from '@/hooks/useCertificates';
import type { Certificate } from '@/types/Certificate';
import Link from 'next/link';

export default function Certificates() {
  const data = useCertificates();

  return (
    <div className="flex flex-col gap-spacing-300">
      <strong className="text-label text-content-standard-tertiary">Certificates</strong>
      <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-spacing-400">
        {data.results.map((certificate: Certificate) => {
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
              rel="noreferrer"
              className="flex flex-row items-center bg-components-fill-standard-primary rounded-radius-600 border border-line-outline p-spacing-400 ease-in-out duration-500 hover:-translate-y-[8px]">
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
