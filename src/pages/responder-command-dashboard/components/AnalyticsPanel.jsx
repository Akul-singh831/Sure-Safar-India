import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';

const AnalyticsPanel = ({ isMinimized, onToggle }) => {
  const [activeMetric, setActiveMetric] = useState('response');
  const [timeRange, setTimeRange] = useState('today');

  const metrics = [
    { id: 'response', label: 'Response Times', icon: 'Clock', color: 'primary' },
    { id: 'incidents', label: 'Incident Types', icon: 'AlertTriangle', color: 'error' },
    { id: 'satisfaction', label: 'Satisfaction', icon: 'Star', color: 'success' },
    { id: 'coverage', label: 'Coverage Areas', icon: 'Map', color: 'secondary' }
  ];

  const timeRanges = [
    { value: 'today', label: 'Today' },
    { value: 'week', label: 'This Week' },
    { value: 'month', label: 'This Month' }
  ];

  const responseTimeData = [
    { hour: '00:00', avgTime: 2.1, incidents: 3 },
    { hour: '04:00', avgTime: 1.8, incidents: 1 },
    { hour: '08:00', avgTime: 2.5, incidents: 8 },
    { hour: '12:00', avgTime: 3.2, incidents: 12 },
    { hour: '16:00', avgTime: 2.8, incidents: 15 },
    { hour: '20:00', avgTime: 2.3, incidents: 9 }
  ];

  const incidentTypeData = [
    { type: 'Medical', count: 45, color: '#dc2626' },
    { type: 'Safety', count: 32, color: '#f59e0b' },
    { type: 'Lost Tourist', count: 28, color: '#1e40af' },
    { type: 'Theft', count: 15, color: '#7c3aed' },
    { type: 'Other', count: 12, color: '#6b7280' }
  ];

  const satisfactionData = [
    { day: 'Mon', score: 4.8 },
    { day: 'Tue', score: 4.6 },
    { day: 'Wed', score: 4.9 },
    { day: 'Thu', score: 4.7 },
    { day: 'Fri', score: 4.8 },
    { day: 'Sat', score: 4.9 },
    { day: 'Sun', score: 4.7 }
  ];

  const keyStats = {
    totalIncidents: 132,
    avgResponseTime: '2.3m',
    satisfactionScore: 4.8,
    activeResponders: 24,
    touristsHelped: 89,
    systemUptime: '99.9%'
  };

  if (isMinimized) {
    return (
      <div className="fixed bottom-6 left-6 bg-card rounded-lg shadow-strong border border-border p-4 z-30">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="text-center">
              <div className="text-lg font-bold text-primary">{keyStats?.totalIncidents}</div>
              <div className="text-xs text-text-secondary">Incidents</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-success">{keyStats?.avgResponseTime}</div>
              <div className="text-xs text-text-secondary">Avg Time</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-secondary">{keyStats?.satisfactionScore}</div>
              <div className="text-xs text-text-secondary">Rating</div>
            </div>
          </div>
          <button
            onClick={onToggle}
            className="p-2 text-text-secondary hover:text-text-primary hover:bg-muted rounded-lg transition-smooth"
          >
            <Icon name="Maximize2" size={16} />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 left-6 w-96 h-[600px] bg-card rounded-lg shadow-strong border border-border flex flex-col z-30">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-border">
        <div className="flex items-center space-x-2">
          <Icon name="BarChart3" size={20} className="text-primary" />
          <h3 className="text-lg font-semibold text-text-primary">Analytics</h3>
        </div>
        <div className="flex items-center space-x-2">
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e?.target?.value)}
            className="px-2 py-1 bg-background border border-border rounded text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          >
            {timeRanges?.map((range) => (
              <option key={range?.value} value={range?.value}>
                {range?.label}
              </option>
            ))}
          </select>
          <button
            onClick={onToggle}
            className="p-1 text-text-secondary hover:text-text-primary hover:bg-muted rounded transition-smooth"
          >
            <Icon name="Minimize2" size={16} />
          </button>
        </div>
      </div>
      {/* Key Stats Grid */}
      <div className="p-4 border-b border-border">
        <div className="grid grid-cols-3 gap-3">
          <div className="text-center p-2 bg-muted/30 rounded-lg">
            <div className="text-lg font-bold text-primary">{keyStats?.totalIncidents}</div>
            <div className="text-xs text-text-secondary">Total Incidents</div>
          </div>
          <div className="text-center p-2 bg-muted/30 rounded-lg">
            <div className="text-lg font-bold text-success">{keyStats?.avgResponseTime}</div>
            <div className="text-xs text-text-secondary">Avg Response</div>
          </div>
          <div className="text-center p-2 bg-muted/30 rounded-lg">
            <div className="text-lg font-bold text-secondary">{keyStats?.satisfactionScore}</div>
            <div className="text-xs text-text-secondary">Satisfaction</div>
          </div>
        </div>
      </div>
      {/* Metric Tabs */}
      <div className="flex border-b border-border overflow-x-auto">
        {metrics?.map((metric) => (
          <button
            key={metric?.id}
            onClick={() => setActiveMetric(metric?.id)}
            className={`flex items-center space-x-2 px-4 py-3 text-sm font-medium whitespace-nowrap transition-smooth ${
              activeMetric === metric?.id
                ? 'border-b-2 border-primary text-primary bg-primary/5' :'text-text-secondary hover:text-text-primary hover:bg-muted/50'
            }`}
          >
            <Icon name={metric?.icon} size={14} />
            <span className="hidden sm:inline">{metric?.label}</span>
          </button>
        ))}
      </div>
      {/* Chart Content */}
      <div className="flex-1 p-4 overflow-y-auto">
        {activeMetric === 'response' && (
          <div className="space-y-4">
            <h4 className="font-medium text-text-primary">Response Time Trends</h4>
            <div className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={responseTimeData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
                  <XAxis dataKey="hour" tick={{ fontSize: 12 }} />
                  <YAxis tick={{ fontSize: 12 }} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'var(--color-card)', 
                      border: '1px solid var(--color-border)',
                      borderRadius: '8px'
                    }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="avgTime" 
                    stroke="var(--color-primary)" 
                    strokeWidth={2}
                    dot={{ fill: 'var(--color-primary)', strokeWidth: 2 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-text-secondary">Best Time:</span>
                <span className="ml-2 font-medium text-success">1.8m</span>
              </div>
              <div>
                <span className="text-text-secondary">Peak Hour:</span>
                <span className="ml-2 font-medium text-warning">12:00</span>
              </div>
            </div>
          </div>
        )}

        {activeMetric === 'incidents' && (
          <div className="space-y-4">
            <h4 className="font-medium text-text-primary">Incident Distribution</h4>
            <div className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={incidentTypeData}
                    cx="50%"
                    cy="50%"
                    innerRadius={40}
                    outerRadius={80}
                    dataKey="count"
                  >
                    {incidentTypeData?.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry?.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="space-y-2">
              {incidentTypeData?.map((item) => (
                <div key={item?.type} className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-2">
                    <div 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: item?.color }}
                    ></div>
                    <span className="text-text-primary">{item?.type}</span>
                  </div>
                  <span className="font-medium text-text-primary">{item?.count}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeMetric === 'satisfaction' && (
          <div className="space-y-4">
            <h4 className="font-medium text-text-primary">Tourist Satisfaction</h4>
            <div className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={satisfactionData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
                  <XAxis dataKey="day" tick={{ fontSize: 12 }} />
                  <YAxis domain={[4.0, 5.0]} tick={{ fontSize: 12 }} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'var(--color-card)', 
                      border: '1px solid var(--color-border)',
                      borderRadius: '8px'
                    }}
                  />
                  <Bar dataKey="score" fill="var(--color-success)" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-text-secondary">Average:</span>
                <span className="ml-2 font-medium text-success">4.8/5.0</span>
              </div>
              <div>
                <span className="text-text-secondary">Reviews:</span>
                <span className="ml-2 font-medium text-primary">247</span>
              </div>
            </div>
          </div>
        )}

        {activeMetric === 'coverage' && (
          <div className="space-y-4">
            <h4 className="font-medium text-text-primary">Coverage Statistics</h4>
            <div className="space-y-3">
              <div className="p-3 bg-muted/30 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-text-secondary">Active Responders</span>
                  <span className="font-medium text-text-primary">{keyStats?.activeResponders}</span>
                </div>
                <div className="w-full bg-background rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: '80%' }}></div>
                </div>
              </div>
              <div className="p-3 bg-muted/30 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-text-secondary">Tourists Helped</span>
                  <span className="font-medium text-text-primary">{keyStats?.touristsHelped}</span>
                </div>
                <div className="w-full bg-background rounded-full h-2">
                  <div className="bg-success h-2 rounded-full" style={{ width: '65%' }}></div>
                </div>
              </div>
              <div className="p-3 bg-muted/30 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-text-secondary">System Uptime</span>
                  <span className="font-medium text-text-primary">{keyStats?.systemUptime}</span>
                </div>
                <div className="w-full bg-background rounded-full h-2">
                  <div className="bg-accent h-2 rounded-full" style={{ width: '99%' }}></div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AnalyticsPanel;