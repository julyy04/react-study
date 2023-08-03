import Link from 'next/link'
export default async function Navbar() {
  return (
    <nav className="relative flex items-center justify-between p-4 lg:px-6">
       <h1 className="w-full bg-white text-black p-5"><Link href="/dashboard">Dashboard</Link></h1>
    </nav>
  )
}