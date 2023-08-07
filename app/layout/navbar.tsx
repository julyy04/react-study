import Link from 'next/link';
import clsx from 'clsx';

export default async function Navbar() {
  return (
    <nav className="relative flex items-center justify-start p-4 lg:px-4">
      <h1 className="bg-white text-black p-5">
        <Link href="/">LOGO</Link>
      </h1>
      <ul className="flex justify-start ml-5 bg-blue-500">
        <li className="mr-5"><Link href="/">Menu01</Link></li>
        <li className="mr-5"><Link href="/">Menu01</Link></li>
        <li><Link href="/">Menu01</Link></li>
      </ul>
    </nav>
  )
}