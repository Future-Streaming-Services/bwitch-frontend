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
} from 'react-icons/fa'; // Import relevant icons

interface NavItem {
  label: string;
  link?: string;
  items?: DropdownColumn[];
}

interface DropdownColumn {
  title?: string;
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
          title: 'Video',
          items: [
            { label: 'Overview', subtitle: 'Simplified video hosting', icon: FaPlayCircle, link: '/products/video/overview' },
            { label: 'Video Library', subtitle: 'Easy video management', icon: FaPlayCircle, link: '/products/video/library' },
            { label: 'Video Protection', subtitle: 'Secure video streaming', icon: FaShieldAlt, link: '/products/video/protection' },
            { label: 'Video Player', subtitle: 'Customization and branding', icon: FaPlay, link: '/products/video/player' },
            { label: 'Video Marketing', subtitle: 'Thumbnails & CTAs', icon: FaChartLine, link: '/products/video/marketing' },
            { label: 'Auto Subtitles', subtitle: 'AI-powered transcripts', icon: FaVimeoV, link: '/products/video/subtitles' },
            { label: 'Video Publishing', subtitle: 'Embed and share videos', icon: FaShareAlt, link: '/products/video/publishing' },
            { label: 'Video Settings', subtitle: 'Set up your videos', icon: FaCog, link: '/products/video/settings' },
            { label: 'RTMP Live Streaming', subtitle: 'Live in seconds', icon: FaBroadcastTower, link: '/products/video/live' },
          ],
        },
        {
          title: 'Image',
          items: [
            { label: 'Overview', subtitle: 'Image optimization', icon: FaImage, link: '/products/image/overview' },
            { label: 'Image Compression', subtitle: 'Compress image size', icon: FaCompress, link: '/products/image/compression' },
            { label: 'Responsive Resize', subtitle: 'Resize for devices', icon: FaArrowsAltH, link: '/products/image/resize' },
            { label: 'Format Conversion', subtitle: 'Latest image formats', icon: FaFileImage, link: '/products/image/conversion' },
            { label: 'Image Operations', subtitle: 'Auto image editing', icon: FaMagic, link: '/products/image/operations' },
            { label: 'Easy Integration', subtitle: 'Setup in no time', icon: FaPuzzlePiece, link: '/products/image/integration' },
          ],
        },
        {
          title: 'Video API',
          items: [
            { label: 'Overview', icon: FaCode, link: '/products/api/overview' },
            { label: 'Dual DRM', icon: FaLock, link: '/products/api/drm' },
            { label: 'Video Transcoding', icon: FaExchangeAlt, link: '/products/api/transcoding' },
            { label: 'Video Streaming', icon: FaVideo, link: '/products/api/streaming' },
            { label: 'Video Analytics', icon: FaChartBar, link: '/products/api/analytics' },
          ],
        },
        {
          title: 'MORE',
          isMoreColumn: true,
          items: [
            { label: 'WordPress', icon: FaWordpress, link: '/more/wordpress' },
            { label: 'API', icon: FaLink, link: '/more/api' },
            { label: 'Vimeo Alternative', icon: FaVimeoV, link: '/more/vimeo-alternative' },
            { label: 'Cloudinary Alternative', icon: FaVimeoV, link: '/more/cloudinary-alternative' },
          ],
        },
      ],
    },
    {
      label: 'Solutions',
      items: [
        {
          title: 'PROSUMER',
          items: [
            { label: 'SMB & Startups', icon: FaUsers, link: '/solutions/smb' },
            { label: 'Fitness Creators', icon: FaRunning, link: '/solutions/fitness' },
            { label: 'Course Creators', icon: FaGraduationCap, link: '/solutions/courses' },
          ],
        },
        {
          title: 'ENTERPRISE',
          items: [
            { label: 'Online Retail', icon: FaStore, link: '/solutions/retail' },
            { label: 'News & Media', icon: FaNewspaper, link: '/solutions/media' },
            { label: 'Consumer Apps', icon: FaMobileAlt, link: '/solutions/apps' },
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
            <div className="nav-item-capsule">
              {item.link ? (
                <a href={item.link}>{item.label}</a>
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
                    {column.title && <h3>{column.title}</h3>}
                    <ul>
                      {column.items.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          {subItem.icon && <subItem.icon/>}
                          <a href={subItem.link}>
                            {subItem.label}
                            {subItem.subtitle && <span className="dropdown-subtitle">{subItem.subtitle}</span>}
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
        <Link to="/sign-in" className="login-button">Log In</Link> {/* Use Link */}
        <Link to="/sign-up" className="signup-button">Sign Up</Link> {/* Use Link */}
      </div>
    </nav>
  );
};

export default Navbar;