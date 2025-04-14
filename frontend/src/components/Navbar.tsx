import React, { useState } from 'react';
import './Navbar.css';

interface NavItem {
  label: string;
  link?: string;
  items?: SubNavItem[];
}

interface SubNavItem {
  label: string;
  link: string;
}

const Navbar: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number | null>(null);

  const navItems: NavItem[] = [
    {
      label: 'Products',
      items: [
        { label: 'Compute', link: '/compute' },
        { label: 'Containers', link: '/containers' },
        { label: 'Storage', link: '/storage' },
        // ... more product items
      ],
    },
    {
      label: 'Solutions',
      items: [
        { label: 'Websites & Apps', link: '/solutions/web' },
        { label: 'Big Data & AI', link: '/solutions/ai' },
        // ... more solution items
      ],
    },
    {
      label: 'Pricing',
      link: '/pricing',
    },
    {
      label: 'Docs',
      link: '/docs',
    },
    {
      label: 'Community',
      link: '/community',
    },
  ];

  const handleMouseEnter = (index: number) => {
    setActiveTab(index);
  };

  const handleMouseLeave = () => {
    setActiveTab(null);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="logo">Your Logo</div>
      </div>
      <ul className="navbar-center">
        {navItems.map((item, index) => (
          <li
            key={index}
            className={`nav-item ${activeTab === index ? 'active' : ''}`}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="nav-item-capsule"> {/* Added capsule wrapper */}
              {item.link ? (
                <a href={item.link}>{item.label}</a>
              ) : (
                <span>{item.label}</span>
              )}
            </div>
            {item.items && activeTab === index && (
              <div className="dropdown-sheet">
                <ul>
                  {item.items.map((subItem, subIndex) => (
                    <li key={subIndex}>
                      <a href={subItem.link}>{subItem.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        ))}
      </ul>
      <div className="navbar-right">
        <button className="login-button">Log In</button>
        <button className="signup-button">Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;