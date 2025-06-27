import React, { useState } from 'react';
import GlobalCard from '../components/ui/GlobalCard';
import GlobalButton from '../components/ui/GlobalButton';
import StatusDisplay from '../components/ui/StatusDisplay';

const CaseView = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [priorityFilter, setPriorityFilter] = useState('all');
  const [actionFilter, setActionFilter] = useState('all');

  const rulesData = [
    {
      id: 'R001',
      name: 'High Value Txn - New Device',
      logic: 'Transaction.Amount > 5000 AND User.IsNewDevice = TRUE AND Transaction.Country != User.HomeCountry',
      action: 'BLOCK',
      priority: 'high',
      status: 'active',
      modified: '2024-05-10'
    },
    {
      id: 'R002',
      name: 'Multiple Failed Logins',
      logic: 'User.FailedLoginAttempts > 5 IN 1h',
      action: 'REVIEW',
      priority: 'medium',
      status: 'active',
      modified: '2024-04-22'
    },
    {
      id: 'R003',
      name: 'Unusual Purchase Category',
      logic: 'Transaction.Category NOT IN User.CommonCategories AND Transaction.Amount > User.AvgTxnAmount * 2',
      action: 'FLAG',
      priority: 'low',
      status: 'inactive',
      modified: '2024-03-15'
    },
    {
      id: 'R004',
      name: 'Velocity Check - High Freq',
      logic: 'COUNT(Transaction.ID WHERE User.ID = self.User.ID) > 10 IN 1h AND SUM(Transaction.Amount) > 1000',
      action: 'BLOCK',
      priority: 'high',
      status: 'active',
      modified: '2024-05-01'
    }
  ];

  const filteredRules = rulesData.filter(rule => {
    const matchesSearch = rule.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         rule.logic.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         rule.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || rule.status === statusFilter;
    const matchesPriority = priorityFilter === 'all' || rule.priority === priorityFilter;
    const matchesAction = actionFilter === 'all' || rule.action === actionFilter;
    
    return matchesSearch && matchesStatus && matchesPriority && matchesAction;
  });

  return (
    <div>
      <GlobalCard icon={<i className="fas fa-gavel"></i>} title="Manage Detection Rules">
        <div className="flex flex-wrap gap-4 mb-5 items-center justify-between w-full">
          <div className="flex flex-wrap gap-4 items-center flex-1 min-w-0">
            <input
              type="text"
              className="flex-grow min-w-[200px] px-4 py-2.5 bg-[var(--bg-color)] border border-[var(--divider-color)] rounded-md text-[var(--text-light)] text-sm focus:outline-none focus:border-[var(--primary-accent)] focus:ring-2 focus:ring-[var(--primary-accent)]/30"
              placeholder="Search rules (ID, Name, Logic...). Press Enter to search."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <select
              className="px-2.5 py-2.5 bg-[var(--bg-color)] border border-[var(--divider-color)] rounded-md text-[var(--text-light)] text-sm min-w-[150px]"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="all">All Statuses</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
            <select
              className="px-2.5 py-2.5 bg-[var(--bg-color)] border border-[var(--divider-color)] rounded-md text-[var(--text-light)] text-sm min-w-[150px]"
              value={priorityFilter}
              onChange={(e) => setPriorityFilter(e.target.value)}
            >
              <option value="all">All Priorities</option>
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
            <select
              className="px-2.5 py-2.5 bg-[var(--bg-color)] border border-[var(--divider-color)] rounded-md text-[var(--text-light)] text-sm min-w-[150px]"
              value={actionFilter}
              onChange={(e) => setActionFilter(e.target.value)}
            >
              <option value="all">All Actions</option>
              <option value="FLAG">Flag</option>
              <option value="REVIEW">Review</option>
              <option value="BLOCK">Block</option>
            </select>
            <GlobalButton 
              icon="filter"
              title="Apply Filters"
              onClick={() => {/* filter logic here */}} 
            />
          </div>
          <GlobalButton 
            icon="plus-circle"
            title="Add New Rule"
            onClick={() => {/* add rule logic here */}} 
          />
        </div>
        {/* Rules Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse mt-5">
            <thead>
              <tr>
                <th className="text-left p-3 text-[var(--text-muted)] font-semibold text-sm border-b border-[var(--divider-color)] w-[8%]">ID</th>
                <th className="text-left p-3 text-[var(--text-muted)] font-semibold text-sm border-b border-[var(--divider-color)] w-[20%]">Rule Name</th>
                <th className="text-left p-3 text-[var(--text-muted)] font-semibold text-sm border-b border-[var(--divider-color)] w-[30%]">Condition Logic</th>
                <th className="text-left p-3 text-[var(--text-muted)] font-semibold text-sm border-b border-[var(--divider-color)] w-[10%]">Action</th>
                <th className="text-left p-3 text-[var(--text-muted)] font-semibold text-sm border-b border-[var(--divider-color)] w-[10%]">Priority</th>
                <th className="text-left p-3 text-[var(--text-muted)] font-semibold text-sm border-b border-[var(--divider-color)] w-[10%]">Status</th>
                <th className="text-left p-3 text-[var(--text-muted)] font-semibold text-sm border-b border-[var(--divider-color)] w-[12%]">Last Modified</th>
                <th className="text-right p-3 text-[var(--text-muted)] font-semibold text-sm border-b border-[var(--divider-color)] w-[10%]">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredRules.map((rule) => (
                <tr key={rule.id} className="hover:bg-white/[0.03] transition-colors">
                  <td className="p-3 text-sm border-b border-[var(--divider-color)]">{rule.id}</td>
                  <td className="p-3 text-sm border-b border-[var(--divider-color)]">{rule.name}</td>
                  <td className="p-3 text-sm border-b border-[var(--divider-color)] break-words">{rule.logic}</td>
                  <td className="p-3 text-sm border-b border-[var(--divider-color)]">{rule.action}</td>
                  <td className="p-3 text-sm border-b border-[var(--divider-color)]">
                    <StatusDisplay status={rule.priority.charAt(0).toUpperCase() + rule.priority.slice(1)} type={rule.priority} />
                  </td>
                  <td className="p-3 text-sm border-b border-[var(--divider-color)]">
                    <StatusDisplay 
                      status={rule.status.charAt(0).toUpperCase() + rule.status.slice(1)} 
                      type={rule.status}
                      icon={rule.status === 'active' ? <i className="fas fa-check-circle"></i> : <i className="fas fa-times-circle"></i>}
                    />
                  </td>
                  <td className="p-3 text-sm border-b border-[var(--divider-color)]">{rule.modified}</td>
                  <td className="p-3 text-sm border-b border-[var(--divider-color)] text-right">
                    <div className="flex justify-end space-x-1">
                      <GlobalButton icon="edit" title="" onClick={() => {/* edit logic */}} width={32} />
                      <GlobalButton icon={rule.status === 'active' ? 'power-off' : 'play-circle'} title="" onClick={() => {/* toggle logic */}} width={32} />
                      <GlobalButton icon="trash-alt" title="" onClick={() => {/* delete logic */}} width={32} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </GlobalCard>
    </div>
  );
};

export default CaseView;

