const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="flex flex-col justify-center items-center  gap-3 min-h-screen p-5">
      <div className="bg-white shadow-md w-full md:w-100 p-6 rounded-md">{children}</div>
    </section>
  )
}

export default AuthLayout
