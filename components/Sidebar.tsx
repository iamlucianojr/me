import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, FileText, User, Home, Github, Twitter, Linkedin, Mail } from 'lucide-react';
import { SOCIAL_LINKS } from '../data';
import ThemeToggle from './ThemeToggle';

const Sidebar: React.FC = () => {
  const navItems = [
    { label: 'Home', path: '/', icon: Home },
    { label: 'Blog', path: '/blog', icon: LayoutDashboard },
    { label: 'Resume', path: '/resume', icon: FileText },
  ];

  const getIcon = (iconName: string) => {
    switch (iconName.toLowerCase()) {
        case 'github': return <Github size={18} />;
        case 'twitter': return <Twitter size={18} />;
        case 'linkedin': return <Linkedin size={18} />;
        case 'mail': return <Mail size={18} />;
        default: return <User size={18} />;
    }
  };

  return (
    <aside className="w-full md:w-64 md:h-screen sticky top-0 md:fixed md:left-0 bg-background border-b md:border-b-0 md:border-r border-border flex flex-col justify-between z-50">
      <div className="p-6">
        <div className="mb-8 flex justify-between items-start">
          <NavLink to="/" className="block">
            <h1 className="text-2xl font-bold tracking-tight text-primary">Alex Dev</h1>
            <p className="text-sm text-muted-foreground mt-1">Frontend Engineer & Minimalist</p>
          </NavLink>
          <ThemeToggle />
        </div>

        <nav className="space-y-1 hidden md:block">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  isActive
                    ? 'bg-secondary text-secondary-foreground'
                    : 'text-muted-foreground hover:text-primary hover:bg-accent'
                }`
              }
            >
              <item.icon size={18} />
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Mobile Nav (Horizontal Scroll) - Visible only on small screens */}
      <nav className="md:hidden flex overflow-x-auto px-4 pb-4 gap-4 no-scrollbar border-t border-border pt-4 bg-background">
         {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-2 px-3 py-2 text-sm font-medium whitespace-nowrap rounded-md transition-colors ${
                  isActive
                    ? 'bg-secondary text-secondary-foreground'
                    : 'text-muted-foreground hover:text-primary'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
      </nav>

      <div className="p-6 hidden md:block">
        <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">
          Connect
        </div>
        <div className="flex gap-4">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label={link.platform}
            >
              {getIcon(link.icon)}
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;