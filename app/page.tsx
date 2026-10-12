import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import styles from '@/app/ui/home.module.css';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-4 sm:p-6">
      <div className={styles.shape} />
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
        <AcmeLogo />
      </div>

      <div className="mt-4 flex grow flex-col gap-4 md:flex-row md:items-start">
        <div className="flex min-w-0 flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-8 lg:px-12">
          <div className="relative h-0 w-0 border-b-[26px] border-l-[15px] border-r-[15px] border-b-black border-l-transparent border-r-transparent" />

          <div className={`${lusitana.className} flex flex-col gap-6 text-xl text-gray-800 md:text-3xl md:leading-normal`}>
            <p>
              <strong>Welcome to Acme clinic.</strong> This is a example for a{' '}
              <a href="https://nextjs.org/learn/" className="text-blue-500">
                Next.js production for a clinic service, with a dashboard for the admin and a client interface for the patients.
              </a>
              , brought to you by Vercel.
            </p>
          </div>

          <Link
            href="/book"
            className="flex items-center gap-5 self-start rounded-lg bg-green-700 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-green-600 md:text-base"
          >
            <span>Book an appointment</span>
            <ArrowRightIcon className="w-5 md:w-6" />
          </Link>

          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>

        <div className="grid min-w-0 grid-cols-1 items-start gap-4 md:w-3/5 xl:grid-cols-2">
          <Image
            src="/admin-desktop.png"
            width={500}
            height={760}
            sizes="(min-width: 1280px) 30vw, (min-width: 768px) 60vw, 100vw"
            className="hidden h-auto w-full max-w-full rounded-lg object-contain md:block"
            alt="Screenshots of the dashboard project showing desktop version"
          />
          <Image
            src="/client-desktop.png"
            width={500}
            height={760}
            sizes="(min-width: 1280px) 30vw, (min-width: 768px) 60vw, 100vw"
            className="hidden h-auto w-full max-w-full rounded-lg object-contain md:block"
            alt="Screenshots of the client project showing desktop version"
          />
          <Image
            src="/client-mobile.png"
            width={560}
            height={620}
            sizes="(min-width: 768px) 60vw, 100vw"
            className="block h-auto w-full max-w-full rounded-lg object-contain md:hidden"
            alt="Screenshot of the client project showing mobile version"
          />
          <Image
            src="/admin-mobile.png"
            width={560}
            height={620}
            sizes="(min-width: 768px) 60vw, 100vw"
            className="block h-auto w-full max-w-full rounded-lg object-contain md:hidden"
            alt="Screenshot of the dashboard project showing mobile version"
          />
        </div>
      </div>
    </main>
  );
}
