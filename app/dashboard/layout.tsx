function LayoutDashboard ({ children } : { children: React.ReactNode }) {
  return (
    <section>
      <h1>Esto es el layout de Dashboard</h1>
      {children}
    </section>
  )
}

export default LayoutDashboard;