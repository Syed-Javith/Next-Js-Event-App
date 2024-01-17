export default function AuthLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <div className="flex text-center justify-center items-center">
        {children}
      </div>
    )
  }
  