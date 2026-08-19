import { NavLink, Outlet } from 'react-router-dom';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/modules/00-start-here', label: 'Course' },
  { to: '/reference', label: 'Reference' },
  { to: '/settings', label: 'Settings' },
];

export function AppLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b bg-card">
        <div className="mx-auto max-w-4xl px-4 py-3 flex items-center justify-between">
          <NavLink to="/" className="font-semibold text-primary">
            Budget 101
          </NavLink>
          <nav className="flex gap-1 text-sm">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `px-3 py-1.5 rounded-md ${
                    isActive
                      ? 'bg-accent text-accent-foreground'
                      : 'text-muted-foreground hover:bg-secondary'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>
      <main className="flex-1 mx-auto w-full max-w-4xl px-4 py-8">
        <Outlet />
      </main>
      <footer className="border-t bg-card">
        <div className="mx-auto max-w-4xl px-4 py-4 text-xs text-muted-foreground">
          Budget 101 — Philippine Public Financial Management. A self-paced course.
          Progress is stored on this device; export it from Settings.
        </div>
      </footer>
    </div>
  );
}
