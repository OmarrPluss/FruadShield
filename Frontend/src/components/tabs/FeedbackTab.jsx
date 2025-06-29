import React, { useState } from 'react';
import { CheckCircle, ThumbsUp, ThumbsDown, MessageSquare, Send, User, Clock } from 'lucide-react';

const FeedbackTab = () => {
  const [feedbackForm, setFeedbackForm] = useState({
    title: '',
    category: 'general',
    priority: 'medium',
    description: ''
  });
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  const existingFeedback = [
    {
      id: 1,
      title: 'Model accuracy seems lower for edge cases',
      category: 'Performance',
      priority: 'High',
      author: 'Sarah Chen',
      date: '2 hours ago',
      content: 'I\'ve noticed that the model\'s accuracy drops significantly when dealing with edge cases in our dataset. This is particularly noticeable in scenarios with unusual input patterns.',
      likes: 5,
      dislikes: 1,
      replies: 3
    },
    {
      id: 2,
      title: 'Great improvement in response time',
      category: 'Performance',
      priority: 'Low',
      author: 'Mike Johnson',
      date: '1 day ago',
      content: 'The latest model update has significantly improved response times. Our API calls are now 30% faster on average.',
      likes: 12,
      dislikes: 0,
      replies: 1
    },
    {
      id: 3,
      title: 'Feature request: Batch prediction endpoint',
      category: 'Feature Request',
      priority: 'Medium',
      author: 'Alex Rodriguez',
      date: '3 days ago',
      content: 'It would be great to have a dedicated batch prediction endpoint that can handle multiple inputs efficiently.',
      likes: 8,
      dislikes: 2,
      replies: 5
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFeedbackForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setShowSuccessAlert(true);
    setFeedbackForm({
      title: '',
      category: 'general',
      priority: 'medium',
      description: ''
    });
    
    // Hide success alert after 3 seconds
    setTimeout(() => {
      setShowSuccessAlert(false);
    }, 3000);
  };

  const getPriorityColor = (priority) => {
    switch (priority.toLowerCase()) {
      case 'high': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'low': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  return (
    <div className="animate-fadeIn">
      {/* Success Alert */}
      {showSuccessAlert && (
        <div className="bg-green-50 dark:bg-green-900 border-l-4 border-green-500 p-4 mb-6 rounded-lg animate-slideIn">
          <div className="flex items-center">
            <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
            <p className="text-green-700 dark:text-green-200 font-medium">
              Thank you for your feedback! Your submission has been received and will be reviewed by our team.
            </p>
          </div>
        </div>
      )}

      {/* Feedback Form */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700 mb-8">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
          Submit Feedback
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
          Help us improve the model performance dashboard by sharing your thoughts and suggestions.
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Title
            </label>
            <input
              type="text"
              name="title"
              value={feedbackForm.title}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-200"
              placeholder="Brief description of your feedback"
              required
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Category
              </label>
              <select
                name="category"
                value={feedbackForm.category}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-200"
              >
                <option value="general">General</option>
                <option value="performance">Performance</option>
                <option value="feature">Feature Request</option>
                <option value="bug">Bug Report</option>
                <option value="ui">User Interface</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Priority
              </label>
              <select
                name="priority"
                value={feedbackForm.priority}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-200"
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Description
            </label>
            <textarea
              name="description"
              value={feedbackForm.description}
              onChange={handleInputChange}
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-200 resize-vertical"
              placeholder="Please provide detailed feedback..."
              required
            />
          </div>
          
          <div className="flex gap-3">
            <button
              type="submit"
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
            >
              <Send className="w-4 h-4" />
              Submit Feedback
            </button>
            <button
              type="button"
              className="bg-gray-200 dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-gray-500 text-gray-700 dark:text-gray-300 px-6 py-2 rounded-lg font-medium transition-colors"
              onClick={() => setFeedbackForm({ title: '', category: 'general', priority: 'medium', description: '' })}
            >
              Clear
            </button>
          </div>
        </form>
      </div>

      {/* Existing Feedback */}
      <div>
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
          Recent Feedback
        </h2>
        
        <div className="space-y-4">
          {existingFeedback.map((feedback) => (
            <div
              key={feedback.id}
              className="bg-white dark:bg-gray-800 rounded-lg p-5 shadow-sm border border-gray-200 dark:border-gray-700 hover:transform hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-semibold text-gray-800 dark:text-gray-200 text-lg">
                  {feedback.title}
                </h3>
                <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getPriorityColor(feedback.priority)}`}>
                  {feedback.priority}
                </span>
              </div>
              
              <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
                <div className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  {feedback.author}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {feedback.date}
                </div>
                <span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-2 py-1 rounded text-xs">
                  {feedback.category}
                </span>
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {feedback.content}
              </p>
              
              <div className="flex items-center gap-4">
                <button className="flex items-center gap-1 text-gray-500 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors">
                  <ThumbsUp className="w-4 h-4" />
                  {feedback.likes}
                </button>
                <button className="flex items-center gap-1 text-gray-500 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors">
                  <ThumbsDown className="w-4 h-4" />
                  {feedback.dislikes}
                </button>
                <button className="flex items-center gap-1 text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  <MessageSquare className="w-4 h-4" />
                  {feedback.replies} replies
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeedbackTab;

