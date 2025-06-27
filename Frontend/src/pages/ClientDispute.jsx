import { useState, useEffect, useRef } from 'react'
import GlobalCard from '../components/ui/GlobalCard'

const DisputeResolution = () => {
  // State management
  const [disputeDetailsOpen, setDisputeDetailsOpen] = useState(false)
  const [files, setFiles] = useState([])
  const [showEvidenceModal, setShowEvidenceModal] = useState(false)
  const [showCancelModal, setShowCancelModal] = useState(false)
  const [showSubmitModal, setShowSubmitModal] = useState(false)
  const [showNotification, setShowNotification] = useState(false)
  const [notification, setNotification] = useState({ message: '', type: 'success' })
  const [progress, setProgress] = useState(30)
  const [status, setStatus] = useState('Under Review')
  const [chatMessages, setChatMessages] = useState([
    {
      id: 1,
      sender: 'system',
      name: 'FraudSecure System',
      content: 'Your dispute has been received and assigned case #FD-2023-04567. A specialist will review your case within 3 business days.',
      time: 'May 15, 2023 - 10:15 AM'
    },
    {
      id: 2,
      sender: 'user',
      name: 'You',
      content: "I've uploaded additional bank statements showing I was traveling when this purchase was made.",
      time: 'May 16, 2023 - 2:30 PM'
    },
    {
      id: 3,
      sender: 'agent',
      name: 'Sarah Johnson',
      role: 'Fraud Specialist',
      content: 'Thank you for the additional documents. We\'re verifying these with your bank and will update you by May 19.',
      time: 'May 17, 2023 - 9:45 AM'
    }
  ])

  // Refs
  const fileInputRef = useRef(null)
  const fileUploadRef = useRef(null)

  // Handle file upload
  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setFiles(Array.from(e.target.files))
      showNotify(`${e.target.files.length} file(s) selected for upload`)
    }
  }

  // Handle drag and drop
  const handleDragOver = (e) => {
    e.preventDefault()
    fileUploadRef.current.classList.add('dragover')
  }

  const handleDragLeave = () => {
    fileUploadRef.current.classList.remove('dragover')
  }

  const handleDrop = (e) => {
    e.preventDefault()
    fileUploadRef.current.classList.remove('dragover')
    if (e.dataTransfer.files.length > 0) {
      setFiles(Array.from(e.dataTransfer.files))
      showNotify(`${e.dataTransfer.files.length} file(s) selected for upload`)
    }
  }

  // Notification system
  const showNotify = (message, type = 'success') => {
    setNotification({ message, type })
    setShowNotification(true)
    setTimeout(() => {
      setShowNotification(false)
    }, 5000)
  }

  // Simulate progress updates
  useEffect(() => {
    const timer1 = setTimeout(() => {
      setProgress(65)
      showNotify('Your dispute status has been updated')
    }, 3000)

    const timer2 = setTimeout(() => {
      setChatMessages(prev => [...prev, {
        id: 4,
        sender: 'agent',
        name: 'Sarah Johnson',
        role: 'Fraud Specialist',
        content: 'We\'ve completed our initial review and have issued a temporary credit of $249.99 while we complete our investigation with the merchant.',
        time: 'Just now'
      }])
      showNotify('New message from your fraud specialist')

      const timer3 = setTimeout(() => {
        setProgress(100)
        setStatus('Resolved')
        showNotify('Your dispute has been resolved!', 'success')
      }, 2000)

      return () => clearTimeout(timer3)
    }, 5000)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
    }
  }, [])

  return (
    <div className="font-sans antialiased">
      {/* Notification Banner */}
      {showNotification && (
        <div className={`fixed top-4 right-4 p-4 rounded shadow-lg z-50 animate__animated animate__fadeInRight ${
          notification.type === 'success' ? 'bg-green-100 border-l-4 border-green-500 text-green-700' :
          notification.type === 'warning' ? 'bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700' :
          'bg-red-100 border-l-4 border-red-500 text-red-700'
        }`}>
          <div className="flex items-center">
            <i className={`fas ${
              notification.type === 'success' ? 'fa-check-circle' :
              notification.type === 'warning' ? 'fa-exclamation-triangle' :
              'fa-times-circle'
            } mr-2`}></i>
            <span>{notification.message}</span>
            <button onClick={() => setShowNotification(false)} className="ml-4">
              <i className="fas fa-times"></i>
            </button>
          </div>
        </div>
      )}

      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Header with User Info */}
        <GlobalCard className="mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h1 className="text-3xl font-bold">Dispute Resolution Center</h1>
              <p>Challenge transactions you believe are fraudulent</p>
            </div>
            <div className="mt-4 md:mt-0 flex items-center">
              <div className="mr-4">
                <div className="text-sm">Account Status</div>
                <div className="flex items-center">
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full mr-2">Verified</span>
                  <span className="text-sm">High Trust Score</span>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="https://ui-avatars.com/api/?name=John+Doe&background=4361ee&color=fff" 
                  alt="User" 
                  className="w-10 h-10 rounded-full cursor-pointer" 
                />
              </div>
            </div>
          </div>
        </GlobalCard>

        {/* Main Dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Dispute Status Card */}
            <GlobalCard 
              title="Dispute #FD-2023-04567"
            >
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center">
                  <span className={`${
                    status === 'Under Review' ? 'bg-yellow-100 text-yellow-800' :
                    status === 'Resolved' ? 'bg-green-100 text-green-800' :
                    'bg-red-100 text-red-800'
                  } text-xs px-2 py-1 rounded-full mr-2`}>
                    {status}
                  </span>
                </div>
                <button 
                  onClick={() => setDisputeDetailsOpen(!disputeDetailsOpen)}
                  className="text-blue-600 hover:text-blue-800 flex items-center"
                >
                  <span className="mr-1">Details</span>
                  <i className={`fas fa-chevron-${disputeDetailsOpen ? 'up' : 'down'} text-sm transition-transform`}></i>
                </button>
              </div>

              <div className="mb-4">
                <div className="flex justify-between text-sm text-gray-600 mb-1">
                  <span>Amazon Purchase - $249.99</span>
                  <span>May 15, 2023</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full rounded-full transition-all duration-500"
                    style={{
                      width: `${progress}%`,
                      backgroundColor: progress < 50 ? '#4361ee' : progress < 100 ? '#3a86ff' : '#2ecc71'
                    }}
                  ></div>
                </div>
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>Submitted</span>
                  <span>Under Review</span>
                  <span>Resolution</span>
                </div>
              </div>

              {/* Dispute Details */}
              {disputeDetailsOpen && (
                <div className="border-t pt-4 animate__animated animate__fadeIn">
                  <h4 className="font-medium mb-2 flex items-center">
                    <i className="fas fa-info-circle text-blue-500 mr-2"></i>
                    Dispute Details
                  </h4>
                  <p className="text-gray-700 mb-4 bg-gray-50 p-3 rounded">
                    I didn't authorize this purchase on my account. The transaction appears to be fraudulent as I haven't made any Amazon purchases this month.
                  </p>
                  
                  <h4 className="font-medium mb-2 flex items-center">
                    <i className="fas fa-paperclip text-blue-500 mr-2"></i>
                    Evidence Submitted
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-4">
                    <div 
                      className="border rounded-lg p-3 flex flex-col items-center cursor-pointer hover:shadow-md transition"
                      onClick={() => setShowEvidenceModal(true)}
                    >
                      <i className="fas fa-file-pdf text-red-500 text-3xl mb-2"></i>
                      <p className="text-sm font-medium text-center">Bank Statement</p>
                      <p className="text-xs text-gray-500">PDF, 245KB</p>
                    </div>
                    <div 
                      className="border rounded-lg p-3 flex flex-col items-center cursor-pointer hover:shadow-md transition"
                      onClick={() => setShowEvidenceModal(true)}
                    >
                      <i className="fas fa-envelope text-blue-500 text-3xl mb-2"></i>
                      <p className="text-sm font-medium text-center">Email Proof</p>
                      <p className="text-xs text-gray-500">JPG, 1.2MB</p>
                    </div>
                    <div 
                      className="border rounded-lg p-3 flex flex-col items-center cursor-pointer hover:shadow-md transition"
                      onClick={() => setShowEvidenceModal(true)}
                    >
                      <i className="fas fa-file-word text-blue-600 text-3xl mb-2"></i>
                      <p className="text-sm font-medium text-center">Explanation</p>
                      <p className="text-xs text-gray-500">DOCX, 45KB</p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
                    <button 
                      onClick={() => fileInputRef.current.click()}
                      className="flex-1 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 flex items-center justify-center"
                    >
                      <i className="fas fa-plus mr-2"></i>Add Evidence
                    </button>
                    <button 
                      onClick={() => setShowCancelModal(true)}
                      className="flex-1 px-4 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 flex items-center justify-center"
                    >
                      <i className="fas fa-times mr-2"></i>Cancel Dispute
                    </button>
                    <button className="flex-1 px-4 py-2 bg-purple-50 text-purple-600 rounded-lg hover:bg-purple-100 flex items-center justify-center relative group">
                      <i className="fas fa-exclamation-triangle mr-2"></i>Escalate
                      <span className="absolute bottom-full mb-2 hidden group-hover:block w-48 bg-gray-800 text-white text-xs rounded p-2">
                        Request urgent review by senior fraud analyst
                      </span>
                    </button>
                  </div>
                </div>
              )}
            </GlobalCard>

            {/* Communication Timeline */}
            <GlobalCard 
              title="Case Communication"
              icon="comments"
            >
              <div className="space-y-4">
                {chatMessages.map((message) => (
                  <div 
                    key={message.id}
                    className={`flex ${message.sender === 'user' ? 'justify-end' : ''}`}
                  >
                    {message.sender !== 'user' && (
                      <div className="flex-shrink-0 mr-3">
                        {message.sender === 'agent' ? (
                          <img 
                            src="https://randomuser.me/api/portraits/women/43.jpg" 
                            alt="Agent" 
                            className="w-8 h-8 rounded-full"
                          />
                        ) : (
                          <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                            <i className="fas fa-robot text-blue-500"></i>
                          </div>
                        )}
                      </div>
                    )}
                    <div className={`max-w-[70%] ${
                      message.sender === 'user' ? 'bg-blue-100' :
                      message.sender === 'agent' ? 'bg-gray-100' : 'bg-blue-50'
                    } text-gray-800 p-3 rounded-lg`}>
                      <div className={`font-medium ${
                        message.sender === 'system' ? 'text-blue-600' : ''
                      }`}>
                        {message.name}
                        {message.role && (
                          <span className="text-xs bg-blue-500 text-white px-2 py-0.5 rounded-full ml-1">
                            {message.role}
                          </span>
                        )}
                      </div>
                      <div className="text-sm">{message.content}</div>
                      <div className="text-xs text-gray-500 mt-1">{message.time}</div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-4 border-t pt-4">
                <div className="flex">
                  <input 
                    type="text" 
                    placeholder="Type your message..." 
                    className="flex-1 border rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700">
                    <i className="fas fa-paper-plane"></i>
                  </button>
                </div>
                <div className="flex justify-between text-xs text-gray-500 mt-2">
                  <span>Case updates are also sent to your email</span>
                  <span>Agent typically responds within 24 hours</span>
                </div>
              </div>
            </GlobalCard>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* New Dispute Form */}
            <GlobalCard 
              title="File New Dispute"
              icon="plus-circle"
            >
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-700 mb-1 font-medium">Select Transaction</label>
                  <select className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                    <option>Select a transaction...</option>
                    <option>Amazon Purchase - $249.99 (May 15)</option>
                    <option>Netflix Subscription - $14.99 (May 10)</option>
                    <option>Uber Ride - $32.50 (May 8)</option>
                    <option>Apple Store - $1,099.00 (May 5)</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-1 font-medium">Dispute Reason</label>
                  <select className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                    <option>Select a reason...</option>
                    <option>Unauthorized transaction</option>
                    <option>Duplicate charge</option>
                    <option>Incorrect amount</option>
                    <option>Service not provided</option>
                    <option>Product not received</option>
                    <option>Merchant error</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-1 font-medium">Additional Details</label>
                  <textarea 
                    className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                    rows="4" 
                    placeholder="Explain why you're disputing this transaction..."
                  ></textarea>
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-1 font-medium">Upload Evidence (Optional)</label>
                  <div 
                    ref={fileUploadRef}
                    className="rounded-lg p-6 text-center cursor-pointer bg-blue-50 border-2 border-dashed border-blue-200 hover:border-blue-400 hover:bg-blue-100 transition"
                    onClick={() => fileInputRef.current.click()}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                  >
                    <i className="fas fa-cloud-upload-alt text-blue-500 text-4xl mb-3"></i>
                    <p className="text-gray-600 font-medium">Drag & drop files here</p>
                    <p className="text-gray-500 text-sm mt-1">or click to browse (PDF, JPG, PNG up to 10MB)</p>
                    <input 
                      type="file" 
                      ref={fileInputRef}
                      className="hidden" 
                      multiple 
                      onChange={handleFileChange}
                    />
                  </div>
                  {files.length > 0 && (
                    <div className="mt-2 space-y-2">
                      {files.map((file, index) => (
                        <div key={index} className="flex items-center justify-between bg-gray-50 p-2 rounded">
                          <div className="flex items-center">
                            <i className={`fas ${
                              file.type.includes('pdf') ? 'fa-file-pdf text-red-500' :
                              file.type.includes('image') ? 'fa-file-image text-blue-500' :
                              'fa-file text-gray-500'
                            } mr-2`}></i>
                            <span className="text-sm">{file.name}</span>
                          </div>
                          <button 
                            onClick={() => setFiles(files.filter((_, i) => i !== index))}
                            className="text-red-500 hover:text-red-700"
                          >
                            <i className="fas fa-times"></i>
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                
                <div className="pt-2">
                  <button 
                    onClick={() => setShowSubmitModal(true)}
                    className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition flex items-center justify-center"
                  >
                    <i className="fas fa-paper-plane mr-2"></i>
                    Submit Dispute
                  </button>
                </div>
              </div>
            </GlobalCard>

            {/* Dispute Tips */}
            <GlobalCard 
              title="Dispute Tips"
              icon="lightbulb"
            >
              <ul className="space-y-3">
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                  <span className="text-sm">Provide detailed explanations with dates and amounts</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                  <span className="text-sm">Upload supporting documents like bank statements</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                  <span className="text-sm">Check your email regularly for case updates</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                  <span className="text-sm">Respond promptly to any requests for information</span>
                </li>
              </ul>
              <div className="mt-4 pt-4 border-t">
                <a href="#" className="text-blue-600 hover:text-blue-800 text-sm flex items-center">
                  <i className="fas fa-book mr-2"></i>
                  View Dispute Resolution Guide
                </a>
              </div>
            </GlobalCard>
          </div>
        </div>

        {/* Dispute History Section */}
        <GlobalCard title="Dispute History" className="mt-8">
          <div className="flex justify-between items-center mb-4">
            {/* Remove the h2, use the card title */}
            <div className="flex space-x-2">
              <select className="border rounded-lg px-3 py-1 text-sm focus:ring-2 focus:ring-blue-500">
                <option>Last 6 months</option>
                <option>Last year</option>
                <option>All time</option>
              </select>
              <button className="bg-blue-600 text-white px-3 py-1 rounded-lg text-sm hover:bg-blue-700">
                <i className="fas fa-download mr-1"></i> Export
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 bg-transparent">
              <thead className="bg-transparent">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Dispute ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Transaction</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-transparent divide-y divide-gray-200">
                <tr className="hover:bg-gray-50 transition bg-transparent">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 bg-transparent">FD-2023-04567</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Amazon Purchase</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$249.99</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full hover:scale-105 transition">
                      Under Review
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">May 15, 2023</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <a href="#" className="text-blue-600 hover:text-blue-900 mr-3">View</a>
                    <a href="#" className="text-gray-600 hover:text-gray-900">Message</a>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 transition bg-transparent">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">FD-2023-03421</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Spotify Subscription</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$9.99</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full hover:scale-105 transition">
                      Resolved
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Apr 28, 2023</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <a href="#" className="text-blue-600 hover:text-blue-900 mr-3">View</a>
                    <a href="#" className="text-gray-600 hover:text-gray-900">Receipt</a>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 transition bg-transparent">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">FD-2023-02876</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Uber Eats</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$45.30</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full hover:scale-105 transition">
                      Denied
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Mar 15, 2023</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <a href="#" className="text-blue-600 hover:text-blue-900 mr-3">View</a>
                    <a href="#" className="text-gray-600 hover:text-gray-900">Appeal</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-gray-50 px-6 py-3 flex items-center justify-between border-t border-gray-200">
            <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
              <div>
                <p className="text-sm text-gray-700"> Showing <span className="font-medium">1</span> to <span className="font-medium">3</span> of <span className="font-medium">12</span> disputes </p>
              </div>
              <div>
                <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                  <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                    <span className="sr-only">Previous</span>
                    <i className="fas fa-chevron-left"></i>
                  </a>
                  <a href="#" aria-current="page" className="z-10 bg-blue-50 border-blue-500 text-blue-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium"> 1 </a>
                  <a href="#" className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"> 2 </a>
                  <a href="#" className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"> 3 </a>
                  <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                    <span className="sr-only">Next</span>
                    <i className="fas fa-chevron-right"></i>
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </GlobalCard>
      </div>

      {/* Evidence Modal */}
      {showEvidenceModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 animate__animated animate__fadeIn">
          <div className="bg-white rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold">Bank Statement - May 2023</h3>
                <button 
                  onClick={() => setShowEvidenceModal(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <i className="fas fa-times"></i>
                </button>
              </div>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/2">
                  <div className="bg-gray-100 rounded-lg p-4 flex items-center justify-center h-64">
                    <i className="fas fa-file-pdf text-red-500 text-6xl"></i>
                  </div>
                  <div className="mt-4 text-center">
                    <a href="#" className="text-blue-600 hover:text-blue-800">
                      <i className="fas fa-download mr-2"></i>Download File
                    </a>
                  </div>
                </div>
                <div className="md:w-1/2">
                  <h4 className="font-medium mb-2">Details</h4>
                  <div className="space-y-3">
                    <div>
                      <div className="text-sm text-gray-500">File Type</div>
                      <div className="font-medium">PDF, 245KB</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Upload Date</div>
                      <div className="font-medium">May 16, 2023 - 2:15 PM</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Description</div>
                      <div className="font-medium">Bank statement showing no authorization for this transaction</div>
                    </div>
                  </div>
                  <div className="mt-6">
                    <h4 className="font-medium mb-2">Notes from Fraud Team</h4>
                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 rounded">
                      <p className="text-sm">This document has been verified with your bank. We're currently investigating the merchant.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-6 py-3 flex justify-end border-t">
              <button 
                onClick={() => setShowEvidenceModal(false)}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Cancel Dispute Modal */}
      {showCancelModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 animate__animated animate__fadeIn">
          <div className="bg-white rounded-xl shadow-xl max-w-md w-full">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold">Cancel Dispute?</h3>
                <button 
                  onClick={() => setShowCancelModal(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <i className="fas fa-times"></i>
                </button>
              </div>
              <p className="text-gray-600 mb-6">Are you sure you want to cancel this dispute? Any pending refunds or investigations will be stopped immediately.</p>
              <div className="flex flex-col sm:flex-row justify-end space-y-3 sm:space-y-0 sm:space-x-3">
                <button 
                  onClick={() => setShowCancelModal(false)}
                  className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                >
                  No, Keep Dispute
                </button>
                <button 
                  onClick={() => {
                    setShowCancelModal(false)
                    setStatus('Cancelled')
                    showNotify('Dispute has been cancelled', 'warning')
                  }}
                  className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                >
                  Yes, Cancel Dispute
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Submit Dispute Modal */}
      {showSubmitModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 animate__animated animate__fadeIn">
          <div className="bg-white rounded-xl shadow-xl max-w-md w-full">
            <div className="p-6 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-check text-green-500 text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">Dispute Submitted!</h3>
              <p className="text-gray-600 mb-6">Your dispute has been received. We'll review it and get back to you within 3-5 business days. A confirmation has been sent to your email.</p>
              <div className="flex justify-center">
                <button 
                  onClick={() => setShowSubmitModal(false)}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  View Dispute Details
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default DisputeResolution