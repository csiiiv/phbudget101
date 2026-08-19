import { Link, NavLink, Outlet } from 'react-router-dom';
import { TooltipProvider } from '@/components/ui/tooltip';

const navItems = [
  { to: '/', label: 'Home', end: true },
  { to: '/modules/00-start-here', label: 'Course' },
  { to: '/reference', label: 'Reference' },
  { to: '/settings', label: 'Settings' },
];

export function AppLayout() {
  return (
    <TooltipProvider delayDuration={300}>
      <div className="min-h-screen flex flex-col">
        <header className="app-header sticky top-0 z-40">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 py-3 flex items-center justify-between">
            <NavLink to="/" className="flex items-center gap-2 font-semibold text-primary">
              <span className="grid size-7 place-items-center rounded-md bg-primary text-sm text-primary-foreground">
                ₱
              </span>
              PH Budget 101
            </NavLink>
            <nav className="flex gap-1 text-sm">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.end}
                  className={({ isActive }) =>
                    `px-3 py-1.5 rounded-md transition-colors ${
                      isActive
                        ? 'bg-accent text-accent-foreground font-medium'
                        : 'text-muted-foreground hover:bg-secondary hover:text-foreground'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
          </div>
        </header>
        <main className="flex-1 mx-auto w-full max-w-3xl px-4 sm:px-6 py-10">
          <Outlet />
        </main>
        <footer className="app-footer">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 py-6 flex flex-wrap items-center justify-between gap-3 text-xs text-muted-foreground">
            <p>
              PH Budget 101 — Philippine Public Financial Management. Progress
              is stored on this device; export it from Settings.
            </p>
            <Link to="/about" className="hover:text-foreground hover:underline">
              About
            </Link>
          </div>
        </footer>
      </div>
    </TooltipProvider>
  );
}
