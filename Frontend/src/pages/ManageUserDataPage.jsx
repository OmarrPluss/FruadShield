import React, { useState } from 'react';
import GlobalTab from '../components/ui/GlobalTab';
import GlobalCard from '../components/ui/GlobalCard';
import GlobalButton from '../components/ui/GlobalButton';
import RiskBadge from '../components/ui/RiskBadge';
import FraudVolumeChart from '../components/charts/FraudVolumeChart';
import InteractiveMap from '../components/ui/InteractiveMap';
import '../App.css';

const UserManagement = () => {
  const [selectedUser, setSelectedUser] = useState(0);
  const [activeTab, setActiveTab] = useState('Overview');
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [saveStatus, setSaveStatus] = useState('');
  const [creditCardVisible, setCreditCardVisible] = useState({});
  const [searchTerm, setSearchTerm] = useState('');

  // Sample user data
  const users = [
    {
      id: 'ACC-78945',
      name: 'John Doe',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      risk: 'medium',
      firstName: 'John',
      lastName: 'Doe',
      dateOfBirth: '15/03/1985',
      gender: 'Male',
      email: 'john.doe@example.com',
      phone: '+1 (555) 123-4567',
      jobTitle: 'Software Engineer',
      city: 'San Francisco',
      accountBalance: '$12,450.75',
      creditCard: '•••• •••• •••• 7890',
      fullCreditCard: '4532 1234 5678 7890',
      riskScore: 62,
      loginId: 'johndoe_85',
      lastLogin: 'Today, 09:42 AM',
      accountStatus: 'Active',
      primaryLocation: 'San Francisco, CA',
      mostTransactionsFrom: 'San Francisco (78%)'
    },
    {
      id: 'ACC-78231',
      name: 'Jane Smith',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      risk: 'low',
      firstName: 'Jane',
      lastName: 'Smith',
      dateOfBirth: '22/07/1990',
      gender: 'Female',
      email: 'jane.smith@example.com',
      phone: '+1 (555) 987-6543',
      jobTitle: 'Marketing Manager',
      city: 'New York',
      accountBalance: '$8,230.50',
      creditCard: '•••• •••• •••• 1234',
      fullCreditCard: '5678 9012 3456 1234',
      riskScore: 25,
      loginId: 'janesmith_90',
      lastLogin: 'Yesterday, 03:15 PM',
      accountStatus: 'Active',
      primaryLocation: 'New York, NY',
      mostTransactionsFrom: 'New York (85%)'
    },
    {
      id: 'ACC-77652',
      name: 'Robert Johnson',
      avatar: 'https://randomuser.me/api/portraits/men/67.jpg',
      risk: 'high',
      firstName: 'Robert',
      lastName: 'Johnson',
      dateOfBirth: '10/12/1978',
      gender: 'Male',
      email: 'robert.johnson@example.com',
      phone: '+1 (555) 456-7890',
      jobTitle: 'Financial Analyst',
      city: 'Chicago',
      accountBalance: '$25,890.25',
      creditCard: '•••• •••• •••• 5678',
      fullCreditCard: '9876 5432 1098 5678',
      riskScore: 87,
      loginId: 'robertj_78',
      lastLogin: '2 days ago, 11:30 AM',
      accountStatus: 'Under Review',
      primaryLocation: 'Chicago, IL',
      mostTransactionsFrom: 'Chicago (65%)'
    }
  ];

  // Delete confirmation modal
  const DeleteModal = () => {
    if (!showDeleteModal) return null;

    return (
      <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
        <div className="bg-card p-6 rounded-lg max-w-md w-full mx-4">
          <div className="text-xl font-semibold mb-4 text-white flex justify-between items-center">
            <span>Confirm Delete</span>
            <i 
              className="fas fa-times cursor-pointer text-muted-foreground hover:text-white"
              onClick={() => setShowDeleteModal(false)}
            ></i>
          </div>
          <div className="mb-6">
            <p className="text-foreground">
              Are you sure you want to delete user <strong>{currentUser.name}</strong>? 
              This action cannot be undone.
            </p>
          </div>
          <div className="flex justify-end gap-3">
            <GlobalButton icon="times" title="Cancel" onClick={() => setShowDeleteModal(false)} />
            <GlobalButton icon="trash-alt" title="Delete User" onClick={confirmDeleteUser} />
          </div>
        </div>
      </div>
    );
  };

  const currentUser = users[selectedUser];

  // Button handlers
  const handleSaveChanges = () => {
    setSaveStatus('Saved');
    setTimeout(() => setSaveStatus(''), 2000);
  };

  const handleResetPassword = () => {
    alert('Redirecting to Reset Password page...');
  };

  const handleDeleteUser = () => {
    setShowDeleteModal(true);
  };

  const confirmDeleteUser = () => {
    alert(`User ${currentUser.name} has been deleted.`);
    setShowDeleteModal(false);
  };

  const handleMoreOptions = () => {
    alert('More options menu would appear here');
  };

  const handleFilterSettings = () => {
    alert('Filter settings panel would open here');
  };

  const toggleCreditCardVisibility = (userId) => {
    setCreditCardVisible(prev => ({
      ...prev,
      [userId]: !prev[userId]
    }));
  };

  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const UserListSidebar = () => (
    <GlobalCard icon={<i className="fas fa-search" />} title="Users" className="h-[calc(100vh-100px)] sticky top-20 overflow-y-auto mb-6">
      {/* Divider directly under Users header */}
      <div className="mb-5 relative">
        <input 
          type="text" 
          placeholder="Search users..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2.5 rounded-lg border border-primary/40 focus:border-primary focus:ring-2 focus:ring-primary bg-muted/10 text-foreground outline-none transition-all shadow-sm"
        />
        <i className="fas fa-search absolute right-4 top-3 text-muted-foreground"></i>
      </div>
      <ul className="list-none p-0 m-0">
        {filteredUsers.map((user, index) => (
          <li 
            key={user.id}
            className={`p-3 mb-0 rounded-md cursor-pointer transition-all duration-300 flex items-center ${
              selectedUser === users.findIndex(u => u.id === user.id)
                ? 'bg-primary text-white' 
                : 'hover:bg-muted/20'
            }`}
            onClick={() => setSelectedUser(users.findIndex(u => u.id === user.id))}
          >
            <img src={user.avatar} className="w-9 h-9 rounded-full object-cover mr-2.5" alt={user.name} />
            <div className="flex-1">
              <div className="font-medium mb-1">{user.name}</div>
              <div className="text-xs text-muted-foreground">{user.id}</div>
            </div>
            <div className={`w-2.5 h-2.5 rounded-full ml-2.5 risk-${user.risk}`}></div>
          </li>
        ))}
      </ul>
    </GlobalCard>
  );

  const UserProfileCard = () => (
    <GlobalCard title="User Profile" span={2} headerAction onHeaderAction={handleMoreOptions}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="mb-2.5">
          <div className="text-sm text-muted-foreground mb-1">First Name</div>
          <div className="text-base font-medium border-b border-dashed border-primary cursor-pointer">{currentUser.firstName}</div>
        </div>
        <div className="mb-2.5">
          <div className="text-sm text-muted-foreground mb-1">Last Name</div>
          <div className="text-base font-medium border-b border-dashed border-primary cursor-pointer">{currentUser.lastName}</div>
        </div>
        <div className="mb-2.5">
          <div className="text-sm text-muted-foreground mb-1">Date of Birth</div>
          <div className="text-base font-medium">{currentUser.dateOfBirth}</div>
        </div>
        <div className="mb-2.5">
          <div className="text-sm text-muted-foreground mb-1">Gender</div>
          <div className="text-base font-medium">{currentUser.gender}</div>
        </div>
        <div className="mb-2.5">
          <div className="text-sm text-muted-foreground mb-1">Email</div>
          <div className="text-base font-medium border-b border-dashed border-primary cursor-pointer">{currentUser.email}</div>
        </div>
        <div className="mb-2.5">
          <div className="text-sm text-muted-foreground mb-1">Phone</div>
          <div className="text-base font-medium border-b border-dashed border-primary cursor-pointer">{currentUser.phone}</div>
        </div>
        <div className="mb-2.5">
          <div className="text-sm text-muted-foreground mb-1">Job Title</div>
          <div className="text-base font-medium">{currentUser.jobTitle}</div>
        </div>
        <div className="mb-2.5">
          <div className="text-sm text-muted-foreground mb-1">City</div>
          <div className="text-base font-medium">{currentUser.city}</div>
        </div>
      </div>
      
      <div className="flex gap-2.5 mt-5">
        <GlobalButton icon="save" title={saveStatus || 'Save Changes'} onClick={handleSaveChanges} />
        <GlobalButton icon="lock" title="Reset Password" onClick={handleResetPassword} />
        <GlobalButton icon="trash-alt" title="Delete User" onClick={handleDeleteUser} />
      </div>
      <div className="border-b border-border/50 mt-6" />
    </GlobalCard>
  );

  const AccountDataCard = () => (
    <GlobalCard title="Account Data" headerAction onHeaderAction={handleMoreOptions}>
      <div className="space-y-4">
        <div>
          <div className="text-sm text-muted-foreground mb-1">Account Balance</div>
          <div className="text-base font-medium">{currentUser.accountBalance}</div>
        </div>
        <div>
          <div className="text-sm text-muted-foreground mb-1">Credit Card</div>
          <div className="text-base font-medium flex items-center gap-2">
            {creditCardVisible[currentUser.id] ? currentUser.fullCreditCard : currentUser.creditCard}
            <i 
              className={`fas ${creditCardVisible[currentUser.id] ? 'fa-eye' : 'fa-eye-slash'} cursor-pointer hover:text-primary`}
              onClick={() => toggleCreditCardVisibility(currentUser.id)}
            ></i>
          </div>
        </div>
        <div>
          <div className="text-sm text-muted-foreground mb-1">Risk Score</div>
          <div className="text-base font-medium">
            <RiskBadge level={currentUser.risk} score={currentUser.riskScore} />
          </div>
        </div>
        <div>
          <div className="text-sm text-muted-foreground mb-1">Login ID</div>
          <div className="text-base font-medium">{currentUser.loginId}</div>
        </div>
        <div>
          <div className="text-sm text-muted-foreground mb-1">Last Login</div>
          <div className="text-base font-medium">{currentUser.lastLogin}</div>
        </div>
        <div>
          <div className="text-sm text-muted-foreground mb-1">Account Status</div>
          <div className="text-base font-medium flex items-center gap-2">
            <i className="fas fa-check-circle text-green-500"></i>
            {currentUser.accountStatus}
          </div>
        </div>
      </div>
      <div className="border-b border-border/50 mt-6" />
    </GlobalCard>
  );

  const LocationInsightsCard = () => {
    // Create location data for the current user
    const userLocations = [
      {
        id: 1,
        name: currentUser.primaryLocation,
        lat: 37.7749 + (selectedUser * 0.5), // Simulate different locations
        lng: -122.4194 + (selectedUser * 0.3),
        type: 'user',
        risk: currentUser.risk
      },
      {
        id: 2,
        name: currentUser.city + ' Transaction Hub',
        lat: 37.7749 + (selectedUser * 0.3),
        lng: -122.4194 + (selectedUser * 0.5),
        type: 'transaction',
        risk: 'low'
      }
    ];

    return (
      <GlobalCard title="Location Insights" headerAction onHeaderAction={handleMoreOptions}>
        <div className="space-y-4">
          <div>
            <div className="text-sm text-muted-foreground mb-1">Primary Location</div>
            <div className="text-base font-medium">{currentUser.primaryLocation}</div>
          </div>
          <div>
            <div className="text-sm text-muted-foreground mb-1">Most Transactions From</div>
            <div className="text-base font-medium">{currentUser.mostTransactionsFrom}</div>
          </div>
          <div className="mt-4">
            <InteractiveMap 
              locations={userLocations}
              height="300px"
              showControls={true}
              showSearch={false}
              onLocationClick={(location) => {
                console.log('Location clicked:', location);
              }}
            />
          </div>
        </div>
        <div className="border-b border-border/50 mt-6" />
      </GlobalCard>
    );
  };

  const TransactionHistoryCard = () => (
    <GlobalCard title="Transaction History" span={3} headerAction onHeaderAction={handleMoreOptions}>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-border">
              <th className="p-3 text-left text-muted-foreground font-medium">Date</th>
              <th className="p-3 text-left text-muted-foreground font-medium">Description</th>
              <th className="p-3 text-left text-muted-foreground font-medium">Amount</th>
              <th className="p-3 text-left text-muted-foreground font-medium">Status</th>
              <th className="p-3 text-left text-muted-foreground font-medium">Risk</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-border hover:bg-muted/10">
              <td className="p-3">2024-06-12</td>
              <td className="p-3">Online Purchase - Amazon</td>
              <td className="p-3">$89.99</td>
              <td className="p-3"><span className="text-green-500">Completed</span></td>
              <td className="p-3"><span className="risk-low-bg px-2 py-1 rounded text-xs">Low</span></td>
            </tr>
            <tr className="border-b border-border hover:bg-muted/10">
              <td className="p-3">2024-06-11</td>
              <td className="p-3">ATM Withdrawal</td>
              <td className="p-3">$200.00</td>
              <td className="p-3"><span className="text-green-500">Completed</span></td>
              <td className="p-3"><span className="risk-low-bg px-2 py-1 rounded text-xs">Low</span></td>
            </tr>
            <tr className="border-b border-border hover:bg-muted/10">
              <td className="p-3">2024-06-10</td>
              <td className="p-3">International Transfer</td>
              <td className="p-3">$1,500.00</td>
              <td className="p-3"><span className="text-yellow-500">Pending</span></td>
              <td className="p-3"><span className="risk-medium-bg px-2 py-1 rounded text-xs">Medium</span></td>
            </tr>
            <tr className="border-b border-border hover:bg-muted/10">
              <td className="p-3">2024-06-09</td>
              <td className="p-3">Gas Station - Shell</td>
              <td className="p-3">$45.67</td>
              <td className="p-3"><span className="text-green-500">Completed</span></td>
              <td className="p-3"><span className="risk-low-bg px-2 py-1 rounded text-xs">Low</span></td>
            </tr>
            <tr className="border-b border-border hover:bg-muted/10">
              <td className="p-3">2024-06-08</td>
              <td className="p-3">Unusual Location Purchase</td>
              <td className="p-3">$2,300.00</td>
              <td className="p-3"><span className="text-red-500">Flagged</span></td>
              <td className="p-3"><span className="risk-high-bg px-2 py-1 rounded text-xs">High</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </GlobalCard>
  );

  const AdvancedRiskAnalysisCard = () => (
    <GlobalCard title="Advanced Risk Analysis" span={2} headerAction onHeaderAction={handleMoreOptions}>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center p-3 bg-muted/20 rounded-lg">
            <div className="text-2xl font-bold text-primary">87%</div>
            <div className="text-xs text-muted-foreground">Behavior Score</div>
          </div>
          <div className="text-center p-3 bg-muted/20 rounded-lg">
            <div className="text-2xl font-bold text-warning">23</div>
            <div className="text-xs text-muted-foreground">Anomalies</div>
          </div>
          <div className="text-center p-3 bg-muted/20 rounded-lg">
            <div className="text-2xl font-bold text-positive">95%</div>
            <div className="text-xs text-muted-foreground">Identity Confidence</div>
          </div>
          <div className="text-center p-3 bg-muted/20 rounded-lg">
            <div className="text-2xl font-bold text-negative">12</div>
            <div className="text-xs text-muted-foreground">Red Flags</div>
          </div>
        </div>
        
        <div className="mt-4">
          <h4 className="text-sm font-medium mb-2">Risk Factors</h4>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm">Location Variance</span>
              <span className="risk-medium-bg px-2 py-1 rounded text-xs">Medium</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Transaction Patterns</span>
              <span className="risk-low-bg px-2 py-1 rounded text-xs">Low</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Device Fingerprint</span>
              <span className="risk-high-bg px-2 py-1 rounded text-xs">High</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Velocity Checks</span>
              <span className="risk-medium-bg px-2 py-1 rounded text-xs">Medium</span>
            </div>
          </div>
        </div>
      </div>
    </GlobalCard>
  );

  const ActivityPatternsCard = () => (
    <GlobalCard title="Activity Patterns & Behavior" icon='filter' span={3} headerAction onHeaderAction={handleMoreOptions}>
      <GlobalTab
        tabs={[
          { id: 'daily', name: 'Daily', content: <FraudVolumeChart /> },
          { id: 'weekly', name: 'Weekly', content: <FraudVolumeChart /> },
          { id: 'monthly', name: 'Monthly', content: <FraudVolumeChart /> },
        ]}
        activeTab={'daily'}
        onTabChange={() => {}}
        variant="classic"
      />
    </GlobalCard>
  );

  const OverviewTab = () => (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 auto-rows-start">
      <UserProfileCard />
      <AccountDataCard />
      <LocationInsightsCard />
      <AdvancedRiskAnalysisCard />
      <TransactionHistoryCard />
      <ActivityPatternsCard />
    </div>
  );

  const CaseViewTab = () => (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
      <GlobalCard title="Case Information" span={2} headerAction onHeaderAction={handleMoreOptions}>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="text-sm text-muted-foreground mb-1">Case ID</div>
              <div className="text-base font-medium">CASE-2024-{currentUser.id.split('-')[1]}</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground mb-1">Case Status</div>
              <div className="text-base font-medium">
                <span className="risk-medium-bg px-2 py-1 rounded text-xs">Under Investigation</span>
              </div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground mb-1">Priority</div>
              <div className="text-base font-medium">
                <span className="risk-high-bg px-2 py-1 rounded text-xs">High</span>
              </div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground mb-1">Assigned Agent</div>
              <div className="text-base font-medium">Agent Smith</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground mb-1">Created Date</div>
              <div className="text-base font-medium">2024-06-08</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground mb-1">Last Updated</div>
              <div className="text-base font-medium">2024-06-12</div>
            </div>
          </div>
          
          <div className="mt-6">
            <div className="text-sm text-muted-foreground mb-2">Case Description</div>
            <div className="text-base bg-muted/20 p-3 rounded">
              Suspicious transaction pattern detected for user {currentUser.name}. 
              Multiple high-value transactions from unusual locations within a short timeframe. 
              Requires immediate investigation and potential account freeze.
            </div>
          </div>

          <div className="mt-6">
            <div className="text-sm text-muted-foreground mb-2">Evidence</div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 p-2 bg-muted/10 rounded">
                <i className="fas fa-file-alt text-primary"></i>
                <span>Transaction_Log_2024-06-08.pdf</span>
              </div>
              <div className="flex items-center gap-2 p-2 bg-muted/10 rounded">
                <i className="fas fa-image text-primary"></i>
                <span>Location_Screenshots.zip</span>
              </div>
              <div className="flex items-center gap-2 p-2 bg-muted/10 rounded">
                <i className="fas fa-chart-line text-primary"></i>
                <span>Behavior_Analysis_Report.xlsx</span>
              </div>
            </div>
          </div>

          <div className="flex gap-2 mt-6">
            <GlobalButton icon="edit" title="Update Case" />
            <GlobalButton icon="download" title="Export Report" />
            <GlobalButton icon="ban" title="Close Case" />
          </div>
        </div>
      </GlobalCard>
      
      <GlobalCard title="Case Timeline" headerAction onHeaderAction={handleMoreOptions}>
        <div className="space-y-4">
          <div className="relative pl-6">
            <div className="absolute left-0 top-1 w-3 h-3 bg-primary rounded-full"></div>
            <div className="absolute left-1.5 top-4 w-0.5 h-full bg-border"></div>
            <div className="text-xs text-muted-foreground">2024-06-12 14:30</div>
            <div className="text-sm font-medium">Case Updated</div>
            <div className="text-xs text-muted-foreground mt-1">
              Additional evidence collected and analyzed
            </div>
          </div>
          
          <div className="relative pl-6">
            <div className="absolute left-0 top-1 w-3 h-3 bg-warning rounded-full"></div>
            <div className="absolute left-1.5 top-4 w-0.5 h-full bg-border"></div>
            <div className="text-xs text-muted-foreground">2024-06-10 09:15</div>
            <div className="text-sm font-medium">Investigation Started</div>
            <div className="text-xs text-muted-foreground mt-1">
              Assigned to Agent Smith for detailed review
            </div>
          </div>
          
          <div className="relative pl-6">
            <div className="absolute left-0 top-1 w-3 h-3 bg-negative rounded-full"></div>
            <div className="absolute left-1.5 top-4 w-0.5 h-full bg-border"></div>
            <div className="text-xs text-muted-foreground">2024-06-08 16:45</div>
            <div className="text-sm font-medium">Alert Triggered</div>
            <div className="text-xs text-muted-foreground mt-1">
              Suspicious activity detected by fraud detection system
            </div>
          </div>
          
          <div className="relative pl-6">
            <div className="absolute left-0 top-1 w-3 h-3 bg-positive rounded-full"></div>
            <div className="text-xs text-muted-foreground">2024-06-08 16:42</div>
            <div className="text-sm font-medium">Case Created</div>
            <div className="text-xs text-muted-foreground mt-1">
              Automatic case generation from fraud alert
            </div>
          </div>
        </div>
      </GlobalCard>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <div className="p-5">
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-5">
          <UserListSidebar />
          <div>
            <GlobalTab
              tabs={[
                { id: 'Overview', name: 'Overview', content: <OverviewTab /> },
                { id: 'CaseView', name: 'Case View', content: <CaseViewTab /> },
              ]}
              activeTab={activeTab}
              onTabChange={setActiveTab}
              variant="classic"
            />
          </div>
        </div>
      </div>
      <DeleteModal />
    </div>
  );
};

export default UserManagement;

