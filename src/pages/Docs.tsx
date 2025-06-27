import React, { useRef } from 'react';
import './Docs.css';
import Navbar from '../components/Navbar';

const sections = [
  {
    id: 'getting-started',
    title: 'Getting Started',
    intro: 'Learn how to get started with our API and platform.',
    content: [
      {
        type: 'text',
        value: 'This section introduces the basics of authentication, setup, and your first API call.'
      },
      {
        type: 'image',
        value: '/src/assets/landing/analytics.jpg',
        alt: 'Getting Started Documentation Illustration'
      },
      {
        type: 'note',
        value: 'Tip: Use your API key to authenticate all requests.'
      }
    ]
  },
  {
    id: 'authentication',
    title: 'Authentication',
    intro: 'How to authenticate with our API.',
    content: [
      {
        type: 'text',
        value: 'All endpoints require authentication using your API key in the Authorization header.'
      },
      {
        type: 'note',
        value: 'Never share your API key publicly.'
      }
    ]
  },
  {
    id: 'video-upload',
    title: 'Video Upload',
    intro: 'Upload videos using our REST API.',
    content: [
      {
        type: 'text',
        value: 'You can upload videos via a simple POST request. See the example below.'
      },
      {
        type: 'image',
        value: '/src/assets/landing/player.jpg',
        alt: 'Video Upload Example'
      }
    ]
  }
];

const Docs = () => {
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const handleQuickLinkClick = (id: string) => {
    const ref = sectionRefs.current[id];
    if (ref) {
      ref.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <Navbar />
      <div className="docs-root">
        <h1 className="docs-main-title">Developer Documentation</h1>
        <div className="docs-body">
          {/* Left: Link Tree */}
          <nav className="docs-nav">
            <ul>
              <li><a href="#getting-started">Getting Started</a></li>
              <li>
                <a href="#authentication">Authentication</a>
                <ul>
                  <li><a href="#video-upload">Video Upload</a></li>
                </ul>
              </li>
            </ul>
          </nav>
          {/* Center: Main Content */}
          <main className="docs-content">
            {sections.map(section => (
              <div
                key={section.id}
                id={section.id}
                ref={el => { sectionRefs.current[section.id] = el; }}
                className="docs-section"
              >
                <h2>{section.title}</h2>
                <p className="docs-section-intro">{section.intro}</p>
                {section.content.map((item, idx) => {
                  if (item.type === 'text') return <p key={idx}>{item.value}</p>;
                  if (item.type === 'image') return <img key={idx} src={item.value} alt={item.alt} className="docs-section-image" />;
                  if (item.type === 'note') return <div key={idx} className="docs-note">{item.value}</div>;
                  return null;
                })}
              </div>
            ))}
          </main>
          {/* Right: Quick Links */}
          <aside className="docs-quicklinks">
            <h4>Quick Links</h4>
            <ul>
              {sections.map(section => (
                <li key={section.id}>
                  <button onClick={() => handleQuickLinkClick(section.id)}>{section.title}</button>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </>
  );
};

export default Docs;
