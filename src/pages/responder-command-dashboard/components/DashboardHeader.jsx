import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const DashboardHeader = ({ user, onProfileClick, onSettingsClick }) => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [notifications, setNotifications] = useState([
    { id: 1, type: 'alert', message: 'New critical incident reported', time: '2 min ago', unread: true },
    { id: 2, type: 'info', message: 'System maintenance scheduled', time: '1 hour ago', unread: true },
    { id: 3, type: 'success', message: 'Incident #1245 resolved', time: '3 hours ago', unread: false }
  ]);
  const [showNotifications, setShowNotifications] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const unreadCount = notifications?.filter(n => n?.unread)?.length;

  const systemStats = {
    activeIncidents: 12,
    responseTime: '2.3m',
    touristsProtected: 2847,
    systemStatus: 'operational'
  };

  const getNotificationIcon = (type) => {
    switch (type) {
      case 'alert': return 'AlertTriangle';
      case 'info': return 'Info';
      case 'success': return 'CheckCircle';
      default: return 'Bell';
    }
  };

  const getNotificationColor = (type) => {
    switch (type) {
      case 'alert': return 'text-error';
      case 'info': return 'text-primary';
      case 'success': return 'text-success';
      default: return 'text-text-secondary';
    }
  };

  return (
    <header className="bg-card border-b border-border shadow-soft">
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Left Section - Title & Time */}
          <div className="flex items-center space-x-6">
            <div>
              <h1 className="text-2xl font-bold text-text-primary">Command Center</h1>
              <p className="text-sm text-text-secondary">
                {currentTime?.toLocaleDateString('en-IN', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })} • {currentTime?.toLocaleTimeString('en-IN')}
              </p>
            </div>

            {/* System Status */}
            <div className="hidden lg:flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className={`w-2 h-2 rounded-full ${
                  systemStats?.systemStatus === 'operational' ? 'bg-success animate-pulse-soft' : 'bg-error'
                }`}></div>
                <span className="text-sm font-medium text-text-primary">
                  System {systemStats?.systemStatus === 'operational' ? 'Operational' : 'Alert'}
                </span>
              </div>
            </div>
          </div>

          {/* Center Section - Quick Stats */}
          <div className="hidden xl:flex items-center space-x-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-error">{systemStats?.activeIncidents}</div>
              <div className="text-xs text-text-secondary">Active Incidents</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-success">{systemStats?.responseTime}</div>
              <div className="text-xs text-text-secondary">Avg Response</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">{systemStats?.touristsProtected?.toLocaleString()}</div>
              <div className="text-xs text-text-secondary">Protected Today</div>
            </div>
          </div>

          {/* Right Section - Actions & Profile */}
          <div className="flex items-center space-x-4">
            {/* Emergency Button */}
            <Button
              variant="destructive"
              size="sm"
              iconName="AlertTriangle"
              iconPosition="left"
              className="hidden md:flex"
            >
              Emergency Alert
            </Button>

            {/* Notifications */}
            <div className="relative">
              <button
                onClick={() => setShowNotifications(!showNotifications)}
                className="relative p-2 text-text-secondary hover:text-text-primary hover:bg-muted rounded-lg transition-smooth"
              >
                <Icon name="Bell" size={20} />
                {unreadCount > 0 && (
                  <div className="absolute -top-1 -right-1 w-5 h-5 bg-error text-white rounded-full flex items-center justify-center text-xs font-bold">
                    {unreadCount}
                  </div>
                )}
              </button>

              {/* Notifications Dropdown */}
              {showNotifications && (
                <div className="absolute top-full right-0 mt-2 w-80 bg-popover border border-border rounded-lg shadow-strong z-50">
                  <div className="p-4 border-b border-border">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-text-primary">Notifications</h3>
                      <button
                        onClick={() => setNotifications(notifications?.map(n => ({ ...n, unread: false })))}
                        className="text-xs text-primary hover:underline"
                      >
                        Mark all read
                      </button>
                    </div>
                  </div>
                  <div className="max-h-64 overflow-y-auto">
                    {notifications?.map((notification) => (
                      <div
                        key={notification?.id}
                        className={`p-4 border-b border-border last:border-b-0 hover:bg-muted/50 transition-smooth ${
                          notification?.unread ? 'bg-primary/5' : ''
                        }`}
                      >
                        <div className="flex items-start space-x-3">
                          <Icon 
                            name={getNotificationIcon(notification?.type)} 
                            size={16} 
                            className={getNotificationColor(notification?.type)}
                          />
                          <div className="flex-1 min-w-0">
                            <p className="text-sm text-text-primary">{notification?.message}</p>
                            <p className="text-xs text-text-secondary mt-1">{notification?.time}</p>
                          </div>
                          {notification?.unread && (
                            <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Settings */}
            <button
              onClick={onSettingsClick}
              className="p-2 text-text-secondary hover:text-text-primary hover:bg-muted rounded-lg transition-smooth"
            >
              <Icon name="Settings" size={20} />
            </button>

            {/* Profile */}
            <div className="flex items-center space-x-3">
              <div className="hidden md:block text-right">
                <p className="text-sm font-medium text-text-primary">{user?.name || 'Officer Sharma'}</p>
                <p className="text-xs text-text-secondary">{user?.role || 'Emergency Responder'}</p>
              </div>
              <button
                onClick={onProfileClick}
                className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-medium hover:shadow-medium transition-smooth"
              >
                {(user?.name || 'Officer Sharma')?.charAt(0)}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Stats */}
        <div className="xl:hidden mt-4 grid grid-cols-3 gap-4">
          <div className="text-center p-3 bg-muted/30 rounded-lg">
            <div className="text-lg font-bold text-error">{systemStats?.activeIncidents}</div>
            <div className="text-xs text-text-secondary">Active</div>
          </div>
          <div className="text-center p-3 bg-muted/30 rounded-lg">
            <div className="text-lg font-bold text-success">{systemStats?.responseTime}</div>
            <div className="text-xs text-text-secondary">Response</div>
          </div>
          <div className="text-center p-3 bg-muted/30 rounded-lg">
            <div className="text-lg font-bold text-primary">2.8K</div>
            <div className="text-xs text-text-secondary">Protected</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;