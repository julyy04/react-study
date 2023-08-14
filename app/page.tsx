import Image from 'next/image'
import variables from '@/styles/variables.module.scss'

import { getTerms } from '@/app/api';

export default async function Home() {
  const { data } = await getTerms()
  if (!data) return null

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24"> {variables.primaryColor}
      <h1 style={{ color: variables.primaryColor }}>GURUFIN Wallet Privacy Policy</h1>
      <div className="mb-32 lg:mb-0 lg:grid-cols-1 lg:text-right">
        <a
            href="/outUser"
            className="group rounded-lg border border-transparent px-5 py-0 transition-colors hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-1 text-2xl font-semibold`}>
              Delete Account{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[60ch] text-sm opacity-50`}>
              GURUFIN Wallet member withdrawal and account deletion guide
            </p>
        </a>
      </div>

      <ul className='rounded-lg border border-transparent bg-gray-100 px-4 py-3'>
        {data.map((term) => (
            <li key={term.id} dangerouslySetInnerHTML={{ __html:  term.post }} />
            // <li key={term.id}>{term.post}</li>
          ))}
      </ul>
    </main>
  )
}
