// Navbar.js or Navbar.tsx (Corrected - Merging previous content with Link)
import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom'; // Import Link
import {
  FaPlayCircle,
  FaImage,
  FaCode,
  FaUsers,
  FaStore,
  FaNewspaper,
  FaMobileAlt,
  FaRunning,
  FaGraduationCap,
  FaWordpress,
  FaLink,
  FaVimeoV,
  FaShieldAlt,
  FaPlay,
  FaChartLine,
  FaShareAlt,
  FaCog,
  FaBroadcastTower,
  FaCompress,
  FaArrowsAltH,
  FaFileImage,
  FaMagic,
  FaPuzzlePiece,
  FaLock,
  FaExchangeAlt,
  FaVideo,
  FaChartBar,
  FaCloud,
} from 'react-icons/fa'; // Import relevant icons

interface NavItem {
  label: string;
  link?: string;
  items?: DropdownColumn[];
}

interface DropdownColumn {
  items: DropdownItem[];
  isMoreColumn?: boolean;
}

interface DropdownItem {
  label: string;
  link?: string;
  subtitle?: string;
  icon?: React.ComponentType;
}

const Navbar: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number | null>(null);

  const navItems: NavItem[] = [
    {
      label: 'Products',
      items: [
        {
          items: [
            { label: 'Video', subtitle: 'Simplified video hosting', icon: FaPlayCircle, link: '/products/video' },
            { label: 'Image', subtitle: 'Image optimization', icon: FaImage, link: '/products/image' },
            { label: 'API', subtitle: 'Developer tools', icon: FaCode, link: '/products/api' },
            { label: 'WordPress', subtitle: 'WordPress integration', icon: FaWordpress, link: '/products/wordpress' },
            { label: 'Vimeo Alternative', subtitle: 'Better video hosting', icon: FaVimeoV, link: '/products/vimeo-alternative' },
            { label: 'Cloudinary Alternative', subtitle: 'Better image hosting', icon: FaCloud, link: '/products/cloudinary-alternative' },
          ],
        },
      ],
    },
    {
      label: 'Solutions',
      items: [
        {
          items: [
            { label: 'SMB & Startups', subtitle: 'For growing businesses', icon: FaUsers, link: '/solutions/smb' },
            { label: 'Fitness Creators', subtitle: 'For fitness professionals', icon: FaRunning, link: '/solutions/fitness' },
            { label: 'Course Creators', subtitle: 'For educators', icon: FaGraduationCap, link: '/solutions/courses' },
            { label: 'Online Retail', subtitle: 'For e-commerce', icon: FaStore, link: '/solutions/retail' },
            { label: 'News & Media', subtitle: 'For publishers', icon: FaNewspaper, link: '/solutions/media' },
            { label: 'Consumer Apps', subtitle: 'For mobile apps', icon: FaMobileAlt, link: '/solutions/apps' },
          ],
        },
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
        <Link to="/" className="logo">
          <img src="/src/assets/icon/icon-long.png" alt="Logo" className="nav-logo" />
        </Link>
      </div>
      <ul className="navbar-center">
        {navItems.map((item, index) => (
          <li
            key={index}
            className={`nav-item ${activeTab === index ? 'active' : ''}`}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="nav-item-capsule">
              {item.link ? (
                <Link to={item.link}>{item.label}</Link>
              ) : (
                <span>{item.label}</span>
              )}
            </div>
            {item.items && activeTab === index && (
              <div className="dropdown-sheet products-solutions-dropdown">
                {item.items.map((column, columnIndex) => (
                  <div
                    key={columnIndex}
                    className={`dropdown-column ${column.isMoreColumn ? 'more-column' : ''}`}
                  >
                    <ul>
                      {column.items.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <a href={subItem.link}>
                            {subItem.icon && <subItem.icon />}
                            <div>
                              {subItem.label}
                              {subItem.subtitle && <span className="dropdown-subtitle">{subItem.subtitle}</span>}
                            </div>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>
      <div className="navbar-right">
        <Link to="/sign-in" className="nav-item-capsule">Log In</Link>
        <Link to="/sign-up" className="nav-item-capsule">Sign Up</Link>
      </div>
    </nav>
  );
};

export default Navbar;