
import Link from 'next/link'

export default function Home() {
  return (
    <main className='py-4 px-40'>
      <Link className='bg-slate-500 text-black font-medium px-2 py-2 rounded-md' href="/dashboard">Dashboard</Link>
    </main>
  )
}
