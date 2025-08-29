import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SideBar = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

    return ( 
        <nav className="sidebar-nav">
              <ul>
                <li className={activeTab === 'dashboard' ? 'active' : ''}>
                  <Link to="/admin/" onClick={() => setActiveTab('dashboard')}>
                    📊 Dashboard
                  </Link>
                </li>
                <li className={activeTab === 'projects' ? 'active' : ''}>
                  <Link to="/admin/projects" onClick={() => setActiveTab('projects')}>
                    🎨 Projects
                  </Link>
                </li>
                <li className={activeTab === 'analytics' ? 'active' : ''}>
                  <Link to="/admin/analytics" onClick={() => setActiveTab('analytics')}>
                    📈 Analytics
                  </Link>
                </li>
                <li className={activeTab === 'messages' ? 'active' : ''}>
                  <Link to="/admin/messages" onClick={() => setActiveTab('messages')}>
                    ✉️ Messages
                  </Link>
                </li>
                <li className={activeTab === 'settings' ? 'active' : ''}>
                  <Link to="/admin/settings" onClick={() => setActiveTab('settings')}>
                    ⚙️ Settings
                  </Link>
                </li>
              </ul>
        </nav>
     );
}
 
export default SideBar;