const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="flex flex-col justify-center items-center  gap-3 min-h-screen p-5">
      {children}
    </section>
  )
}

export default AuthLayout
