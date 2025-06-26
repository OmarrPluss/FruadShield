import React, { useState } from 'react';
import GlobalCard from '../components/ui/GlobalCard';
import Button from '../components/ui/Button';
import ToggleSwitch from '../components/ui/ToggleSwitch';
import RangeSlider from '../components/ui/RangeSlider';
import { Select } from '../components/ui/select';
import { Input } from '../components/ui/input';
import StatCard from '../components/ui/StatCard';
import { Badge } from '../components/ui/badge';
import Modal from '../components/ui/Modal';
import FeedbackMessage from '../components/ui/FeedbackMessage';

const SystemAdministrationPage = () => {
  const [riskThreshold, setRiskThreshold] = useState(65);
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [modals, setModals] = useState({
    modelRollback: false,
    modelConfig: false,
    bulkReview: false,
    investigation: false,
    password: false,
    purgeLog: false,
    healthCheck: false,
    backup: false,
    update: false,
    api: false,
  });

  const showFeedback = (message) => {
    setFeedbackMessage(message);
    setTimeout(() => setFeedbackMessage(''), 3000);
  };

  const openModal = (modalName) => {
    setModals(prev => ({ ...prev, [modalName]: true }));
  };

  const closeModal = (modalName) => {
    setModals(prev => ({ ...prev, [modalName]: false }));
  };

  const systemOverviewData = [
    {
      title: 'Pending Reviews',
      value: '24',
      change: '+3 since yesterday',
      icon: 'fas fa-flag',
      gradient: 'blue'
    },
    {
      title: 'High Risk Cases',
      value: '8',
      change: '-2 since yesterday',
      icon: 'fas fa-exclamation-triangle',
      gradient: 'purple'
    },
    {
      title: 'System Accuracy',
      value: '92.4%',
      change: '+1.2% this week',
      icon: 'fas fa-bullseye',
      gradient: 'green'
    },
    {
      title: 'Avg. Response Time',
      value: '1.2s',
      title: 'Avg. Response Time',
      value: '1.2s',
      change: 'Stable',
      icon: 'fas fa-stopwatch',
      gradient: 'yellow'
    }
  ];

  const reviewPriorityOptions = [
    'High Risk First',
    'Oldest First',
    'Random Sampling',
    'By Transaction Amount'
  ];

  const autoCloseOptions = [
    '7 Days',
    '14 Days',
    '30 Days',
    'Never (Manual Only)'
  ];

  return (
    <main className="p-6 space-y-8">
      <FeedbackMessage message={feedbackMessage} />

      {/* System Overview */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {systemOverviewData.map((item, index) => (
          <StatCard
            key={index}
            title={item.title}
            value={item.value}
            change={item.change}
            icon={item.icon}
            gradient={item.gradient}
          />
        ))}
      </section>

      {/* System Configuration */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="space-y-6 lg:col-span-2">
          {/* Fraud Detection Settings */}
          <GlobalCard
            title="Fraud Detection Settings"
            icon="fas fa-shield-alt text-blue-400"
            badge={
              <div className="flex items-center space-x-2">
                <Badge variant="primary">LIVE</Badge>
                <Badge variant="success">v3.2.1</Badge>
              </div>
            }
          >
            <div className="space-y-6">
              <RangeSlider
                label="Risk Threshold"
                min={0}
                max={100}
                value={riskThreshold}
                onChange={setRiskThreshold}
                showValue={true}
                unit="%"
              />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ToggleSwitch
                  label="Shadow Deployment"
                  description="Test new models in parallel"
                  className="p-3 bg-gray-750 rounded border border-gray-700"
                />
                
                <ToggleSwitch
                  checked={true}
                  label="Sandbox Mode"
                  description="Safe testing environment"
                  className="p-3 bg-gray-750 rounded border border-gray-700"
                />
                
                <ToggleSwitch
                  checked={true}
                  label="Auto-Escalation"
                  description="Flag high-risk automatically"
                  className="p-3 bg-gray-750 rounded border border-gray-700"
                />
                
                <ToggleSwitch
                  checked={true}
                  label="Behavioral Analysis"
                  description="User pattern detection"
                  className="p-3 bg-gray-750 rounded border border-gray-700"
                />
              </div>
              
              <div className="flex flex-wrap gap-3 pt-2">
                <Button 
                  icon="fas fa-sync-alt"
                  onClick={() => showFeedback('Model retraining initiated. This may take several minutes.')}
                >
                  Retrain Model
                </Button>
                <Button 
                  variant="warning"
                  icon="fas fa-history"
                  onClick={() => openModal('modelRollback')}
                >
                  Rollback Model
                </Button>
                <Button 
                  variant="purple"
                  icon="fas fa-sliders-h"
                  onClick={() => openModal('modelConfig')}
                >
                  Advanced Config
                </Button>
              </div>
            </div>
          </GlobalCard>

          {/* Case Management */}
          <GlobalCard
            title="Case Management"
            icon="fas fa-flag text-red-400"
          >
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Select
                  label="Default Review Priority"
                  options={reviewPriorityOptions}
                  value="High Risk First"
                />
                <Select
                  label="Auto-Close After"
                  options={autoCloseOptions}
                  value="7 Days"
                />
              </div>
              
              <ToggleSwitch
                checked={true}
                label="Auto-Assignment"
                description="Distribute cases evenly to team"
                className="p-3 bg-gray-750 rounded border border-gray-700"
              />
              
              <div className="flex flex-wrap gap-3 pt-2">
                <Button 
                  variant="success"
                  icon="fas fa-tasks"
                  onClick={() => openModal('bulkReview')}
                >
                  Bulk Review
                </Button>
                <Button 
                  variant="indigo"
                  icon="fas fa-search"
                  onClick={() => openModal('investigation')}
                >
                  Manual Investigation
                </Button>
                <Button 
                  variant="secondary"
                  icon="fas fa-file-export"
                  onClick={() => showFeedback('Case export started. You will receive an email when ready.')}
                >
                  Export Cases
                </Button>
              </div>
            </div>
          </GlobalCard>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* User & Security */}
          <GlobalCard
            title="User & Security"
            icon="fas fa-user-shield text-green-400"
          >
            <div className="space-y-4">
              <Input
                label="Display Name"
                value="Admin User"
              />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  label="Role"
                  value="System Administrator"
                  disabled={true}
                />
                <Input
                  label="Last Login"
                  value="Today, 09:42"
                  disabled={true}
                />
              </div>
              
              <div className="p-3 bg-gray-750 rounded border border-gray-700">
                <ToggleSwitch
                  checked={true}
                  label="Two-Factor Authentication"
                />
                <div className="text-xs text-gray-400 mt-2">
                  Status: <span className="text-green-400">Enabled</span> (Last used: Today, 09:42)
                </div>
              </div>
              
              <div className="flex flex-wrap gap-3 pt-2">
                <Button 
                  icon="fas fa-key"
                  onClick={() => openModal('password')}
                >
                  Change Password
                </Button>
                <Button 
                  variant="danger"
                  icon="fas fa-sign-out-alt"
                  onClick={() => showFeedback('All active sessions invalidated.')}
                >
                  Invalidate Sessions
                </Button>
              </div>
            </div>
          </GlobalCard>

          {/* Notifications & Alerts */}
          <GlobalCard
            title="Notifications"
            icon="fas fa-bell text-yellow-400"
          >
            <div className="space-y-4">
              <ToggleSwitch
                checked={true}
                label="Email Alerts"
                description="Receive alerts for high priority cases"
                className="p-3 bg-gray-750 rounded border border-gray-700"
              />
              
              <ToggleSwitch
                checked={true}
                label="System Notifications"
                description="Critical system updates and outages"
                className="p-3 bg-gray-750 rounded border border-gray-700"
              />
              
              <ToggleSwitch
                checked={true}
                label="PII Scrubbing"
                description="Automatically redact sensitive information"
                className="p-3 bg-gray-750 rounded border border-gray-700"
              />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <Button 
                  variant="success"
                  icon="fas fa-file-export"
                  onClick={() => showFeedback('Logs exported successfully.')}
                >
                  Export Logs
                </Button>
                <Button 
                  variant="danger"
                  icon="fas fa-trash-alt"
                  onClick={() => openModal('purgeLog')}
                >
                  Purge Logs
                </Button>
              </div>
            </div>
          </GlobalCard>
        </div>
      </div>

      {/* System Tools */}
      <GlobalCard
        title="System Tools"
        icon="fas fa-tools text-orange-400"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Button
            variant="primary"
            className="p-4 h-auto flex-col"
            onClick={() => openModal('healthCheck')}
          >
            <i className="fas fa-heartbeat text-2xl mb-2"></i>
            <span className="font-medium">System Health</span>
            <span className="text-xs text-blue-200 mt-1">Run diagnostics</span>
          </Button>
          
          <Button
            variant="purple"
            className="p-4 h-auto flex-col"
            onClick={() => openModal('backup')}
          >
            <i className="fas fa-database text-2xl mb-2"></i>
            <span className="font-medium">Backup</span>
            <span className="text-xs text-purple-200 mt-1">Create system backup</span>
          </Button>
          
          <Button
            variant="success"
            className="p-4 h-auto flex-col"
            onClick={() => openModal('update')}
          >
            <i className="fas fa-cloud-download-alt text-2xl mb-2"></i>
            <span className="font-medium">Updates</span>
            <span className="text-xs text-green-200 mt-1">Check for updates</span>
          </Button>
          
          <Button
            variant="warning"
            className="p-4 h-auto flex-col"
            onClick={() => openModal('api')}
          >
            <i className="fas fa-plug text-2xl mb-2"></i>
            <span className="font-medium">API Console</span>
            <span className="text-xs text-yellow-200 mt-1">Test endpoints</span>
          </Button>
        </div>
      </GlobalCard>

      {/* Save Settings */}
      <div className="flex justify-between items-center">
        <div className="text-sm text-gray-400">
          <i className="fas fa-info-circle mr-1"></i> Changes are automatically saved where indicated
        </div>
        <Button 
          icon="fas fa-save"
          onClick={() => showFeedback('All settings saved successfully.')}
        >
          Save All Settings
        </Button>
      </div>

      {/* Modals */}
      <Modal
        isOpen={modals.modelRollback}
        onClose={() => closeModal('modelRollback')}
        title={<><i className="fas fa-history mr-2 text-yellow-400"></i> Model Rollback</>}
      >
        <p className="text-gray-300 mb-4">Select a previous model version to rollback to:</p>
        <Select
          options={['v3.2.0 (Previous)', 'v3.1.5 (Stable)', 'v3.1.0 (Legacy)']}
          placeholder="Select version"
        />
        <div className="flex gap-3 mt-6">
          <Button variant="warning">Rollback</Button>
          <Button variant="outline" onClick={() => closeModal('modelRollback')}>Cancel</Button>
        </div>
      </Modal>

      <Modal
        isOpen={modals.investigation}
        onClose={() => closeModal('investigation')}
        title={<><i className="fas fa-search mr-2 text-indigo-400"></i> Manual Investigation</>}
      >
        <div className="space-y-4">
          <Input label="Transaction ID" placeholder="Enter transaction ID" />
          <Input label="User ID" placeholder="Enter user ID" />
          <Select
            label="Investigation Type"
            options={['Fraud Review', 'False Positive', 'Pattern Analysis']}
            placeholder="Select type"
          />
        </div>
        <div className="flex gap-3 mt-6">
          <Button>Start Investigation</Button>
          <Button variant="outline" onClick={() => closeModal('investigation')}>Cancel</Button>
        </div>
      </Modal>

      {/* Add more modals as needed */}
    </main>
  );
};

export default SystemAdministrationPage;

