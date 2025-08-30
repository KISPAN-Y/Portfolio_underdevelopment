import React, { useState } from 'react';
import {
  BarChart, Bar, LineChart, Line, PieChart, Pie,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

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
  { name: 'Web Development', value: 45, color: '#0c0c' },
  { name: 'UI/UX Design', value: 30, color: '#6565b1ff' },
  { name: 'Mobile Apps', value: 15, color: '#0202' },
  { name: 'Consulting', value: 10, color: '#798ac1ff' },
];



const Dashboard = () => {
    return ( 
        <main className="dashboard-main">
              {/* Stats Overview */}
            <div className="stats-grid">
            <div className="stat-card">
                <div className="stat-icon" style={{background: '#ffefef'}}>👁️</div>
                <div className="stat-info">
                <h3>12,856</h3>
                <p>Total Visits</p>
                </div>
            </div>
            <div className="stat-card">
                <div className="stat-icon" style={{background: '#eff6ff'}}>📂</div>
                <div className="stat-info">
                <h3>24</h3>
                <p>Projects</p>
                </div>
            </div>
            <div className="stat-card">
                <div className="stat-icon" style={{background: '#f0f9f4'}}>👍</div>
                <div className="stat-info">
                <h3>89%</h3>
                <p>Engagement Rate</p>
                </div>
            </div>
            <div className="stat-card">
                <div className="stat-icon" style={{background: '#fef6e6'}}>✉️</div>
                <div className="stat-info">
                <h3>42</h3>
                <p>New Messages</p>
                </div>
            </div>
            </div>

            {/* Charts Section */}
            <div className="charts-row">
            <div className="chart-container">
                <h3>Monthly Performance</h3>
                <ResponsiveContainer width="100%" height={300}>
                <BarChart data={monthlyStats}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="visits" fill="#8884d8" />
                    <Bar dataKey="projects" fill="#82ca9d" />
                </BarChart>
                </ResponsiveContainer>
            </div>

            <div className="chart-container">
                <h3>Project Distribution</h3>
                <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                    <Pie
                    data={projectTypes}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="blue, black, #020204"
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    />
                    <Tooltip />
                </PieChart>
                </ResponsiveContainer>
            </div>
            </div>

            {/* Recent Activity */}
            <div className="recent-activity">
            <h3>Recent Messages</h3>
            <table className="activity-table">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Message</th>
                    <th>Date</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>John Smith</td>
                    <td>john@example.com</td>
                    <td>Interested in collaboration</td>
                    <td>2 hours ago</td>
                </tr>
                <tr>
                    <td>Acme Corp</td>
                    <td>hr@acme.com</td>
                    <td>Project inquiry</td>
                    <td>1 day ago</td>
                </tr>
                <tr>
                    <td>Sarah Johnson</td>
                    <td>sarah@mail.com</td>
                    <td>Feedback on portfolio</td>
                    <td>2 days ago</td>
                </tr>
                </tbody>
            </table>
            </div>
        </main>
    );
}
 
export default Dashboard;