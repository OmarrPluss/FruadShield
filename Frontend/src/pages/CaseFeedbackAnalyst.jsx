import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import GlobalCard from '../components/ui/GlobalCard';

const CaseFeedbackAnalyst = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sentimentFilter, setSentimentFilter] = useState('all');
  const [analystFilter, setAnalystFilter] = useState('all');
  const [timeFilter, setTimeFilter] = useState('Last 30 days');
  const [activeTab, setActiveTab] = useState('client-info');
  const [selectedCase, setSelectedCase] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filteredData, setFilteredData] = useState([]);
  const navigate = useNavigate();

  // Sample data for feedback items
  const feedbackData = [
    {
      id: "FD-2023-00428",
      type: "Credit Card Fraud",
      priority: "High",
      sentiment: "positive",
      date: "2 days ago",
      client: {
        name: "Sarah Johnson",
        type: "Premium Client",
        rating: 5.0
      },
      feedback: "The analyst was extremely thorough in investigating my case. They provided clear explanations and followed up promptly with updates. Very satisfied with the resolution.",
      assignedTo: "You",
      resolvedDate: "15 Nov 2023"
    },
    {
      id: "FD-2023-00512",
      type: "Account Takeover",
      priority: "Medium",
      sentiment: "neutral",
      date: "1 week ago",
      client: {
        name: "Michael Chen",
        type: "Business Client",
        rating: 4.0
      },
      feedback: "The issue was resolved eventually, but it took longer than I expected. The communication was clear though I would have appreciated more frequent updates during the process.",
      assignedTo: "Jane Smith",
      resolvedDate: "8 Nov 2023"
    },
    {
      id: "FD-2023-00495",
      type: "Payment Fraud",
      priority: "High",
      sentiment: "negative",
      date: "2 weeks ago",
      client: {
        name: "Robert Williams",
        type: "Enterprise Client",
        rating: 2.0
      },
      feedback: "I'm disappointed with how my case was handled. The resolution took too long and I wasn't kept informed about the progress. The final explanation was unclear and didn't address all my concerns.",
      assignedTo: "John Doe",
      resolvedDate: "1 Nov 2023"
    }
  ];

  // Initialize filtered data
  useEffect(() => {
    setFilteredData(feedbackData);
  }, []);

  // Filter feedback items
  useEffect(() => {
    const filtered = feedbackData.filter(item => {
      const matchesSearch = item.id.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            item.client.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            item.type.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            item.feedback.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesSentiment = sentimentFilter === 'all' || item.sentiment === sentimentFilter;
      const matchesAnalyst = analystFilter === 'all' || 
                           (analystFilter === 'you' && item.assignedTo === 'You') || 
                           (analystFilter === 'john' && item.assignedTo === 'John Doe') || 
                           (analystFilter === 'jane' && item.assignedTo === 'Jane Smith');
      
      return matchesSearch && matchesSentiment && matchesAnalyst;
    });
    
    setFilteredData(filtered);
  }, [searchTerm, sentimentFilter, analystFilter]);

  // Open modal with case details
  const openModal = (item) => {
    setSelectedCase(item);
    setActiveTab('client-info');
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCase(null);
    document.body.style.overflow = '';
  };

  // Handle export
  const handleExport = () => {
    alert('Export functionality would be implemented here');
  };

  // Render star rating
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - Math.ceil(rating);

    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={`full-${i}`} className="fas fa-star text-yellow-400"></i>);
    }
    
    if (hasHalfStar) {
      stars.push(<i key="half" className="fas fa-star-half-alt text-yellow-400"></i>);
    }
    
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<i key={`empty-${i}`} className="far fa-star text-yellow-400"></i>);
    }

    return stars;
  };

  // Get sentiment classes and icons
  const getSentimentInfo = (sentiment) => {
    const sentimentConfig = {
      positive: {
        classes: 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200',
        icon: '👍'
      },
      neutral: {
        classes: 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200',
        icon: '😐'
      },
      negative: {
        classes: 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200',
        icon: '👎'
      }
    };
    return sentimentConfig[sentiment] || sentimentConfig.neutral;
  };

  return (
    <div className="min-h-screen bg-transparent text-[#F0F0FF] font-inter">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-1 text-black dark:text-white">Case Feedback Dashboard</h1>
            <p className="text-base text-[#A0A0C0]">Client feedback on resolved fraud cases</p>
          </div>
          <div className="flex space-x-4">
            <div className="relative">
              <select 
                value={timeFilter}
                onChange={(e) => setTimeFilter(e.target.value)}
                className="appearance-none bg-white/5 border border-[#3A3D5A] rounded-lg py-2 pl-4 pr-8 text-[#F0F0FF] focus:outline-none focus:ring-2 focus:ring-[#5D8EFF]"
              >
                <option>Last 30 days</option>
                <option>Last 90 days</option>
                <option>This year</option>
                <option>All time</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[#A0A0C0]">
                <i className="fas fa-chevron-down"></i>
              </div>
            </div>
            <button 
              onClick={handleExport}
              className="flex items-center space-x-2 bg-[#5D8EFF] hover:bg-[#4D7EFF] text-white px-4 py-2 rounded-lg transition-colors"
            >
              <i className="fas fa-download"></i>
              <span>Export</span>
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <GlobalCard>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[#A0A0C0] text-sm">Total Cases</p>
                <h3 className="text-2xl font-bold">142</h3>
              </div>
              <div className="p-3 rounded-full bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300">
                <i className="fas fa-folder-open text-xl"></i>
              </div>
            </div>
          </GlobalCard>
          <GlobalCard>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[#A0A0C0] text-sm">With Feedback</p>
                <h3 className="text-2xl font-bold">87</h3>
              </div>
              <div className="p-3 rounded-full bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300">
                <i className="fas fa-comment text-xl"></i>
              </div>
            </div>
          </GlobalCard>
          <GlobalCard>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[#A0A0C0] text-sm">Positive</p>
                <h3 className="text-2xl font-bold">63</h3>
              </div>
              <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300">
                <i className="fas fa-thumbs-up text-xl"></i>
              </div>
            </div>
          </GlobalCard>
          <GlobalCard>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[#A0A0C0] text-sm">Response Rate</p>
                <h3 className="text-2xl font-bold">61%</h3>
              </div>
              <div className="p-3 rounded-full bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300">
                <i className="fas fa-chart-line text-xl"></i>
              </div>
            </div>
          </GlobalCard>
        </div>

        {/* Search and Filter */}
        <GlobalCard className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-2">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <i className="fas fa-search text-[#A0A0C0]"></i>
                </div>
                <input 
                  type="text" 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="block w-full pl-10 pr-3 py-2 border border-[#3A3D5A] rounded-lg bg-white/5 placeholder-[#A0A0C0] text-[#F0F0FF] focus:outline-none focus:ring-2 focus:ring-[#5D8EFF]" 
                  placeholder="Search cases..."
                />
              </div>
            </div>
            <div>
              <select 
                value={sentimentFilter}
                onChange={(e) => setSentimentFilter(e.target.value)}
                className="block w-full px-3 py-2 border border-[#3A3D5A] rounded-lg bg-white/5 text-[#F0F0FF] focus:outline-none focus:ring-2 focus:ring-[#5D8EFF]"
              >
                <option value="all">All Sentiments</option>
                <option value="positive">Positive</option>
                <option value="neutral">Neutral</option>
                <option value="negative">Negative</option>
              </select>
            </div>
            <div>
              <select 
                value={analystFilter}
                onChange={(e) => setAnalystFilter(e.target.value)}
                className="block w-full px-3 py-2 border border-[#3A3D5A] rounded-lg bg-white/5 text-[#F0F0FF] focus:outline-none focus:ring-2 focus:ring-[#5D8EFF]"
              >
                <option value="all">All Analysts</option>
                <option value="john">John Doe</option>
                <option value="jane">Jane Smith</option>
                <option value="you">Your Cases</option>
              </select>
            </div>
          </div>
        </GlobalCard>

        {/* Feedback List */}
        <div className="space-y-4">
          {filteredData.map((item) => {
            const sentimentInfo = getSentimentInfo(item.sentiment);
            return (
              <GlobalCard 
                key={item.id}
                className="cursor-pointer hover:bg-white/10 transition-colors"
                onClick={() => navigate('/case-review')}
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-bold text-lg">Case #{item.id}</h3>
                    <p className="text-[#A0A0C0]">{item.type} | {item.priority} Priority</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${sentimentInfo.classes}`}>
                      {sentimentInfo.icon} {item.sentiment.charAt(0).toUpperCase() + item.sentiment.slice(1)}
                    </span>
                    <span className="text-[#A0A0C0] text-sm">{item.date}</span>
                  </div>
                </div>
                <div className="mb-4">
                  <p>"{item.feedback}"</p>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center text-indigo-600 dark:text-indigo-300">
                        <i className="fas fa-user"></i>
                      </div>
                      <div className="ml-2">
                        <p className="text-sm font-medium">{item.client.name}</p>
                        <p className="text-xs text-[#A0A0C0]">{item.client.type}</p>
                      </div>
                    </div>
                    <div className="flex items-center text-yellow-400">
                      {renderStars(item.client.rating)}
                      <span className="ml-1 text-[#A0A0C0]">{item.client.rating.toFixed(1)}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-[#A0A0C0]">Assigned to: <span className="font-medium">{item.assignedTo}</span></p>
                    <p className="text-xs text-[#A0A0C0]">Resolved on: {item.resolvedDate}</p>
                  </div>
                </div>
              </GlobalCard>
            );
          })}
        </div>

        {/* Pagination */}
        <div className="mt-8 flex justify-between items-center">
          <div className="text-sm text-[#A0A0C0]">
            Showing <span className="font-medium">1</span> to <span className="font-medium">{filteredData.length}</span> of <span className="font-medium">{filteredData.length}</span> results
          </div>
          <div className="flex space-x-2">
            <button className="px-3 py-1 rounded bg-white/5 text-[#A0A0C0] hover:bg-white/10 transition-colors">
              Previous
            </button>
            <button className="px-3 py-1 rounded bg-[#5D8EFF] text-white">
              1
            </button>
            <button className="px-3 py-1 rounded bg-white/5 text-[#A0A0C0] hover:bg-white/10 transition-colors">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseFeedbackAnalyst;

