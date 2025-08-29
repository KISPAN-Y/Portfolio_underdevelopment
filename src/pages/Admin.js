import React, { useState } from 'react';
import {
  BarChart, Bar, LineChart, Line, PieChart, Pie,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from '../components/admin/Dashboard';
import SideBar from '../components/admin/SideBar';
import HeaderAdmin from '../components/admin/HeaderAdmin';
import ProjectsAdmin from '../components/admin/ProjectsAdmin';
import MessagesAdmin from '../components/admin/Messages';
import Settings from '../components/admin/Settings';
import Analytics from '../components/admin/Analytics';

// Sample data for charts
const monthlyStats = [
  { name: 'Jan', visits: 4000, projects: 2400, contacts: 1200 },
  { name: 'Feb', visits: 3000, projects: 1398, contacts: 1800 },
  { name: 'Mar', visits: 2000, projects: 9800, contacts: 2000 },
  { name: 'Apr', visits: 2780, projects: 3908, contacts: 1500 },
  { name: 'May', visits: 1890, projects: 4800, contacts: 1700 },
  { name: 'Jun', visits: 2390, projects: 3800, contacts: 1900 },
];

const projectTypes = [
  { name: 'Web Development', value: 45 },
  { name: 'UI/UX Design', value: 30 },
  { name: 'Mobile Apps', value: 15 },
  { name: 'Consulting', value: 10 },
];

// Main Dashboard Component
const AdminDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <Router>
      <div className="admin-dashboard">
        <HeaderAdmin />
        <div className="dashboard-content">
          {sidebarOpen && (
            <aside className="dashboard-sidebar">
              <SideBar />
            </aside>
          )}
          <Switch>
            <Route exact path="/admin/" component={Dashboard} />
            <Route path="/admin/analytics" component={Analytics} />
            <Route path="/admin/projects" component={ProjectsAdmin} />
            <Route path="/admin/messages" component={MessagesAdmin} />
            <Route path="/admin/settings" component={Settings} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default AdminDashboard;