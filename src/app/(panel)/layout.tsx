import Link from 'next/link'

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="flex flex-col gap-3 min-h-screen">
      {/* Include shared UI here e.g. a header or sidebar */}
      <nav className="bg-black p-2 text-white flex justify-end gap-3 font-bold text-xs">
        <Link href={'/'}>Home</Link>
        <Link href={'/posts'}>Posts</Link>
        <Link href={'/settings'}>Settings</Link>
      </nav>

      {children}
    </section>
  )
}

export default DashboardLayout
