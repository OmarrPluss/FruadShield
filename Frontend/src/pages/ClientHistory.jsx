import React, { useState } from 'react';
import GlobalCard from '../components/ui/GlobalCard';
import { useNavigate } from 'react-router-dom';

const transactionHistory = [
	{
		id: 'TXN7890123',
		date: '2025-05-13 14:35:10',
		amount: '$125.50',
		location: 'New York, NY',
		category: 'Electronics',
		store: 'Tech Galaxy',
		desc: 'Online Purchase - Headphones',
		status: 'Approved',
		risk: 'Low',
		merchant: 'Global Electronics Inc.',
		merchantLoc: 'Wilmington, DE',
		details: '#',
		statusClass: 'status-approved',
		riskClass: 'risk-low',
	},
	{
		id: 'TXN7890124',
		date: '2025-05-12 09:12:45',
		amount: '$350.00',
		location: 'San Francisco, CA',
		category: 'Travel',
		store: 'SkyHigh Airlines',
		desc: 'Flight Booking',
		status: 'Pending Review',
		risk: 'Medium',
		merchant: 'SkyHigh Airlines LLC',
		merchantLoc: 'Dallas, TX',
		details: '#',
		statusClass: 'status-pending',
		riskClass: 'risk-medium',
	},
	{
		id: 'TXN7890125',
		date: '2025-05-11 18:02:00',
		amount: '$15.75',
		location: 'Chicago, IL',
		category: 'Food & Dining',
		store: 'Quick Bites Cafe',
		desc: 'Lunch',
		status: 'Approved',
		risk: 'Low',
		merchant: 'Quick Bites Franchise',
		merchantLoc: 'Chicago, IL',
		details: '#',
		statusClass: 'status-approved',
		riskClass: 'risk-low',
	},
	{
		id: 'TXN7890126',
		date: '2025-05-10 22:15:30',
		amount: '$899.99',
		location: 'Miami, FL',
		category: 'Luxury Goods',
		store: 'Prestige Watches',
		desc: 'Watch Purchase',
		status: 'Declined',
		risk: 'High',
		merchant: 'Prestige Imports',
		merchantLoc: 'Geneva, CH',
		details: '#',
		statusClass: 'status-declined',
		riskClass: 'risk-high',
	},
];

const caseHistory = [
	{
		id: 'CASE00123',
		txnId: 'TXN7890124',
		amount: '$350.00',
		reason: 'Unrecognized charge',
		action: 'Contacted merchant',
		opened: '2025-05-12',
		solved: '-',
		status: 'Investigating',
		type: 'Fraud Claim',
		analyst: 'John Doe',
		details: '#',
		statusClass: 'status-investigating',
	},
	{
		id: 'CASE00124',
		txnId: 'TXN7890126',
		amount: '$899.99',
		reason: 'Suspicious activity',
		action: 'Transaction blocked',
		opened: '2025-05-10',
		solved: '2025-05-11',
		status: 'Resolved',
		type: 'High Risk Alert',
		analyst: 'Jane Smith',
		details: '#',
		statusClass: 'status-resolved',
	},
];

const tabList = [
	{ id: 'transaction', label: 'Transaction History', icon: 'exchange-alt' },
	{ id: 'case', label: 'Case History', icon: 'folder-open' },
];

const statusClassMap = {
	Approved: 'text-[#2ECC71] font-semibold',
	'Pending Review': 'text-[#F39C12] font-semibold',
	Declined: 'text-[#FF5E7D] font-semibold',
	Investigating: 'text-[#5D8EFF] font-semibold',
	Resolved: 'text-[#2ECC71] font-semibold',
};
const riskClassMap = {
	Low: 'text-[#2ECC71] font-bold',
	Medium: 'text-[#F39C12] font-bold',
	High: 'text-[#FF5E7D] font-bold',
};

const ClientHistory = () => {
	const [activeTab, setActiveTab] = useState('transaction');
	const navigate = useNavigate();
	return (
		<div className="min-h-screen bg-transparent text-[#F0F0FF] font-inter">
			<div>
				<div className="mb-8">
					<h1 className="text-3xl font-bold mb-1">Client History</h1>
					<p className="text-base text-[#A0A0C0]">
						Review your past transactions and support cases.
					</p>
				</div>
				<div className="flex border-b border-[#3A3D5A] mb-6">
					{tabList.map((tab) => (
						<button
							key={tab.id}
							className={`tab px-5 py-3 font-medium flex items-center gap-2 focus:outline-none transition text-base relative ${
								activeTab === tab.id
									? 'text-[#5D8EFF] active'
									: 'text-[#A0A0C0]'
							} ${
								activeTab === tab.id
									? 'border-b-2 border-[#5D8EFF]'
									: ''
							}`}
							onClick={() => setActiveTab(tab.id)}
						>
							<i className={`fas fa-${tab.icon}`}></i> {tab.label}
						</button>
					))}
				</div>
				{/* Transaction History Tab */}
				{activeTab === 'transaction' && (
					<div className="flex justify-center">
						<GlobalCard className="w-full max-w-8xl">
							<div className="mb-4 flex gap-1 items-center">
								<input
									type="text"
									placeholder="Search Transactions (e.g., ID, Merchant, Status)..."
									className="flex-grow p-3 rounded-md bg-white/5 border border-[#3A3D5A] text-[#F0F0FF] text-base focus:outline-none focus:border-[#5D8EFF]"
								/>
								<button className="btn btn-primary flex items-center gap-2 bg-[#5D8EFF] hover:bg-[#4D7EFF] text-white font-semibold py-2 px-5 rounded-lg transition">
									<i className="fas fa-search"></i> Search
								</button>
							</div>
							<div className="overflow-x-auto">
								<table className="data-table w-full text-sm">
									<thead>
										<tr className="bg-white/5">
											<th>Transaction ID</th>
											<th>Date & Time</th>
											<th>Amount</th>
											<th>Location</th>
											<th>Store Category</th>
											<th>Store Name</th>
											<th>Description</th>
											<th>Status</th>
											<th>Risk Level</th>
											<th>Merchant</th>
											<th>Merchant Location</th>
											<th>Details</th>
										</tr>
									</thead>
									<tbody>
										{transactionHistory.map((txn) => (
											<tr key={txn.id} className="hover:bg-[#23234a]">
												<td>{txn.id}</td>
												<td>{txn.date}</td>
												<td>{txn.amount}</td>
												<td>{txn.location}</td>
												<td>{txn.category}</td>
												<td>{txn.store}</td>
												<td>{txn.desc}</td>
												<td className={statusClassMap[txn.status] || ''}>
													{txn.status}
												</td>
												<td className={riskClassMap[txn.risk] || ''}>
													{txn.risk}
												</td>
												<td>{txn.merchant}</td>
												<td>{txn.merchantLoc}</td>
												<td>
													<a
														href={txn.details}
														className="text-[#5D8EFF] hover:underline"
													>
														View
													</a>
												</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>
						</GlobalCard>
					</div>
				)}
				{/* Case History Tab */}
				{activeTab === 'case' && (
					<div className="flex justify-center">
						<GlobalCard className="w-full max-w-8xl">
							<div className="mb-4 flex gap-3 items-center">
								<input
									type="text"
									placeholder="Search Cases (e.g., ID, Status, Type)..."
									className="flex-grow p-3 rounded-md bg-white/5 border border-[#3A3D5A] text-[#F0F0FF] text-base focus:outline-none focus:border-[#5D8EFF]"
								/>
								<button className="btn btn-primary flex items-center gap-2 bg-[#5D8EFF] hover:bg-[#4D7EFF] text-white font-semibold py-2 px-5 rounded-lg transition">
									<i className="fas fa-search"></i> Search
								</button>
							</div>
							<div className="overflow-x-auto">
								<table className="data-table w-full text-sm">
									<thead>
										<tr className="bg-white/5">
											<th>Case ID</th>
											<th>Related Txn ID</th>
											<th>Txn Amount</th>
											<th>Complaint/Reason</th>
											<th>Action Taken</th>
											<th>Date Opened</th>
											<th>Date Solved</th>
											<th>Case Status</th>
											<th>Case Type</th>
											<th>Assigned Analyst</th>
											<th>Details</th>
										</tr>
									</thead>
									<tbody>
										{caseHistory.map((cs) => (
											<tr key={cs.id} className="hover:bg-[#23234a]">
												<td>{cs.id}</td>
												<td>{cs.txnId}</td>
												<td>{cs.amount}</td>
												<td>{cs.reason}</td>
												<td>{cs.action}</td>
												<td>{cs.opened}</td>
												<td>{cs.solved}</td>
												<td className={statusClassMap[cs.status] || ''}>
													{cs.status}
												</td>
												<td>{cs.type}</td>
												<td>{cs.analyst}</td>
												<td>
													<button
														onClick={() => navigate(`/case-details/${cs.id}`)}
														className="text-[#5D8EFF] hover:underline focus:outline-none"
													>
														View
													</button>
												</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>
						</GlobalCard>
					</div>
				)}
			</div>
		</div>
	);
};

export default ClientHistory;
