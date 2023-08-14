import Link from 'next/link';
import LogoSquare from '@/components/logo-square';
const { SITE_NAME } = process.env;

export default async function Navbar() {

  return (
    <nav className="relative flex items-center justify-start p-4 lg:px-6 header">
      <div className="flex w-full md:w-1/3">
        <Link
          href="/"
          aria-label="Go back home"
          className="mr-2 flex w-full items-center justify-center md:w-auto lg:mr-6"
        >
          <LogoSquare />
          <div className="ml-2 flex-none text-sm font-medium uppercase md:hidden lg:block">
            GURUFIN Wallet
          </div>
        </Link>
        <ul className="hidden gap-6 text-sm md:flex md:items-center">
          {/* <li>
            <Link
              href="/policy"
              className="text-neutral-500 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300"
            >
              Privacy Policy
            </Link>
          </li> */}
          <li>
            <Link
              href="/outUser"
              className="text-neutral-500 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300"
            >
              Delete Account
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
