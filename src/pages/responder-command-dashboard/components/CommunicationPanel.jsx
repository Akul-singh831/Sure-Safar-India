import React, { useState, useEffect } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const CommunicationPanel = ({ isOpen, onToggle }) => {
  const [activeChannel, setActiveChannel] = useState('dispatch');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [unreadCounts, setUnreadCounts] = useState({
    dispatch: 2,
    medical: 0,
    embassy: 1,
    tourists: 3
  });

  // API key is now securely accessed from environment variables
  const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

  useEffect(() => {
    // Initialize with mock messages
    setMessages({
        dispatch: [
          { id: 1, sender: 'Control Room', message: 'Unit 23, respond to incident #1247', time: '14:32', type: 'received' },
          { id: 2, sender: 'You', message: 'En route to location, ETA 5 minutes', time: '14:33', type: 'sent' },
          { id: 3, sender: 'Control Room', message: 'Copy that. Medical backup requested.', time: '14:34', type: 'received' }
        ],
        medical: [
          { id: 1, sender: 'Dr. Patel', message: 'Medical team on standby', time: '14:30', type: 'received' },
          { id: 2, sender: 'You', message: 'Tourist appears stable, minor injuries only', time: '14:35', type: 'sent' }
        ],
        embassy: [
          { id: 1, sender: 'US Embassy', message: 'Citizen welfare check requested for John Smith', time: '14:25', type: 'received' },
          { id: 2, sender: 'You', message: 'Citizen located and safe. Providing assistance.', time: '14:36', type: 'sent' }
        ],
        tourists: [
          { id: 1, sender: 'Sarah Johnson', message: 'Thank you for the quick response!', time: '14:37', type: 'received' },
          { id: 2, sender: 'Mike Chen', message: 'Is it safe to continue to Red Fort?', time: '14:35', type: 'received' },
          { id: 3, sender: 'You', message: 'Yes, area is secure. Enjoy your visit!', time: '14:36', type: 'sent' }
        ]
      });
  }, []);

  const channels = [
    { id: 'dispatch', label: 'Dispatch', icon: 'Radio', color: 'primary' },
    { id: 'medical', label: 'Medical', icon: 'Heart', color: 'error' },
    { id: 'embassy', label: 'Embassy', icon: 'Building', color: 'secondary' },
    { id: 'tourists', label: 'Tourists', icon: 'Users', color: 'accent' }
  ];

  const quickResponses = [
    'En route to location',
    'Situation under control',
    'Medical assistance required',
    'Tourist is safe',
    'Incident resolved',
    'Requesting backup'
  ];

  const handleSendMessage = async () => {
    if (message.trim()) {
      const userMessage = {
        id: Date.now(),
        sender: 'You',
        message,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        type: 'sent'
      };

      setMessages(prev => ({
        ...prev,
        [activeChannel]: [...(prev[activeChannel] || []), userMessage]
      }));
      setMessage('');
      setLoading(true);
      setError(null);

      try {
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const prompt = `You are a helpful assistant for emergency responders. The current channel is "${activeChannel}". The user's message is: "${message}". The previous messages in this channel are: ${JSON.stringify(messages[activeChannel] || [])}. Please provide a concise and relevant response.`;
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();

        const aiMessage = {
          id: Date.now() + 1,
          sender: 'Gemini AI',
          message: text,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          type: 'received'
        };

        setMessages(prev => ({
          ...prev,
          [activeChannel]: [...prev[activeChannel], aiMessage]
        }));

      } catch (err) {
        setError('Failed to get response from Gemini. Please try again.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
  };

  const handleQuickResponse = (response) => {
    setMessage(response);
  };

  if (!isOpen) {
    return (
      <button
        onClick={onToggle}
        className="fixed bottom-6 right-6 w-14 h-14 bg-primary text-primary-foreground rounded-full shadow-strong hover:shadow-lg transition-all duration-300 flex items-center justify-center z-40"
      >
        <Icon name="MessageSquare" size={24} />
        {Object.values(unreadCounts).reduce((a, b) => a + b, 0) > 0 && (
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-error text-white rounded-full flex items-center justify-center text-xs font-bold">
            {Object.values(unreadCounts).reduce((a, b) => a + b, 0)}
          </div>
        )}
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 w-96 h-[500px] bg-card rounded-lg shadow-strong border border-border flex flex-col z-40">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-border">
        <h3 className="text-lg font-semibold text-text-primary">Communications</h3>
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-success rounded-full animate-pulse-soft"></div>
          <span className="text-xs text-text-secondary">Online</span>
          <Button variant="ghost" size="sm" onClick={onToggle} iconName="X" />
        </div>
      </div>
      {/* Channel Tabs */}
      <div className="flex border-b border-border overflow-x-auto">
        {channels.map((channel) => (
          <button
            key={channel.id}
            onClick={() => setActiveChannel(channel.id)}
            className={`flex items-center space-x-2 px-4 py-3 text-sm font-medium whitespace-nowrap transition-smooth relative ${
              activeChannel === channel.id
                ? 'border-b-2 border-primary text-primary bg-primary/5'
                : 'text-text-secondary hover:text-text-primary hover:bg-muted/50'
            }`}
          >
            <Icon name={channel.icon} size={16} />
            <span>{channel.label}</span>
            {unreadCounts[channel.id] > 0 && (
              <div className="w-5 h-5 bg-error text-white rounded-full flex items-center justify-center text-xs font-bold">
                {unreadCounts[channel.id]}
              </div>
            )}
          </button>
        ))}
      </div>
      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {(messages[activeChannel] || []).map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.type === 'sent' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`max-w-xs rounded-lg px-3 py-2 ${
              msg.type === 'sent'
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted text-text-primary'
            }`}>
              {msg.type === 'received' && (
                <p className="text-xs font-medium mb-1 opacity-75">{msg.sender}</p>
              )}
              <p className="text-sm">{msg.message}</p>
              <p className={`text-xs mt-1 ${
                msg.type === 'sent' ? 'text-primary-foreground/75' : 'text-text-secondary'
              }`}>
                {msg.time}
              </p>
            </div>
          </div>
        ))}
        {loading && <div className="text-center text-text-secondary">Gemini is thinking...</div>}
        {error && <div className="text-center text-error">{error}</div>}
      </div>
      {/* Quick Responses */}
      <div className="p-2 border-t border-border">
        <div className="flex flex-wrap gap-1 mb-2">
          {quickResponses.slice(0, 3).map((response, index) => (
            <button
              key={index}
              onClick={() => handleQuickResponse(response)}
              className="px-2 py-1 bg-muted text-text-secondary text-xs rounded hover:bg-muted/80 transition-smooth"
            >
              {response}
            </button>
          ))}
        </div>
      </div>
      {/* Message Input */}
      <div className="p-4 border-t border-border">
        <div className="flex space-x-2">
          <Input
            placeholder={`Message ${channels.find(c => c.id === activeChannel)?.label}...`}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            className="flex-1"
          />
          <Button
            onClick={handleSendMessage}
            disabled={!message.trim() || loading}
            iconName="Send"
            size="sm"
          />
        </div>
      </div>
    </div>
  );
};

export default CommunicationPanel;