import React, { useState } from 'react';
import GlobalCard from '../components/ui/GlobalCard';
import Button from '../components/ui/Button';
import StatusDisplay from '../components/ui/StatusDisplay';

const CaseOverview = () => {
  const [justificationNotes, setJustificationNotes] = useState('');
  const [overruleReason, setOverruleReason] = useState('');
  const [analystNotes, setAnalystNotes] = useState(`Customer called in, claims it was a legitimate purchase for a gift. Provided order confirmation matching merchant system.
IP mismatch might be due to VPN use, which customer confirmed they sometimes use for privacy.
Device ID is known. Previous purchases from this merchant were also high value around holidays.
Checking transaction patterns for similar amounts/merchants for this customer.
No other suspicious activity on the account recently.
Model flagged high due to amount and IP.`);

  const transactionData = {
    id: 'TXN-12345-FRD',
    amount: '1250.75 USD',
    timestamp: '2024-05-14 10:32:15 UTC',
    merchant: 'GlobalMegaMart Inc.',
    customerId: 'CUST-A9876',
    paymentMethod: 'Visa **** **** **** 5678',
    ipAddress: '123.45.67.89 (Country: Unknown)',
    deviceId: 'DEV-XYZ123-ABC',
    riskScore: '65 (Medium)'
  };

  const modelData = {
    prediction: 'FRAUD',
    confidence: '70',
    version: 'v2.1.5 (XGBoost)'
  };

  const contributingFactors = [
    { type: 'negative', icon: 'fas fa-arrow-up', text: 'High Transaction Amount ($1250.75)' },
    { type: 'negative', icon: 'fas fa-arrow-up', text: 'IP Address Mismatch (Transaction Country vs. User Profile)' },
    { type: 'positive', icon: 'fas fa-arrow-down', text: 'Historical Purchase from Merchant (2 previous)' },
    { type: 'negative', icon: 'fas fa-arrow-up', text: 'Time Since Last Transaction (Very short: < 1 min)' }
  ];

  const investigationSteps = [
    { label: 'Checked customer transaction history', checked: true },
    { label: 'Reviewed linked accounts/profiles', checked: false },
    { label: 'Contacted customer (or attempted)', checked: true },
    { label: 'Verified with merchant system', checked: true },
    { label: 'Checked against known fraud patterns', checked: false }
  ];

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Transaction Details */}
        <GlobalCard icon={<i className="fas fa-receipt"></i>} title="Transaction Details">
          <ul className="space-y-0">
            <li className="flex justify-between py-2.5 border-b border-[var(--divider-color)]/50 text-sm last:border-b-0">
              <span className="text-[var(--text-muted)] flex-[0_0_40%]">Transaction ID:</span>
              <span className="text-[var(--text-light)] font-medium text-right flex-[0_0_60%] break-all">{transactionData.id}</span>
            </li>
            <li className="flex justify-between py-2.5 border-b border-[var(--divider-color)]/50 text-sm last:border-b-0">
              <span className="text-[var(--text-muted)] flex-[0_0_40%]">Amount:</span>
              <span className="text-[var(--text-light)] font-medium text-right flex-[0_0_60%] break-all">{transactionData.amount}</span>
            </li>
            <li className="flex justify-between py-2.5 border-b border-[var(--divider-color)]/50 text-sm last:border-b-0">
              <span className="text-[var(--text-muted)] flex-[0_0_40%]">Timestamp:</span>
              <span className="text-[var(--text-light)] font-medium text-right flex-[0_0_60%] break-all">{transactionData.timestamp}</span>
            </li>
            <li className="flex justify-between py-2.5 border-b border-[var(--divider-color)]/50 text-sm last:border-b-0">
              <span className="text-[var(--text-muted)] flex-[0_0_40%]">Merchant:</span>
              <span className="text-[var(--text-light)] font-medium text-right flex-[0_0_60%] break-all">{transactionData.merchant}</span>
            </li>
            <li className="flex justify-between py-2.5 border-b border-[var(--divider-color)]/50 text-sm last:border-b-0">
              <span className="text-[var(--text-muted)] flex-[0_0_40%]">Customer ID:</span>
              <span className="text-[var(--text-light)] font-medium text-right flex-[0_0_60%] break-all">{transactionData.customerId}</span>
            </li>
            <li className="flex justify-between py-2.5 border-b border-[var(--divider-color)]/50 text-sm last:border-b-0">
              <span className="text-[var(--text-muted)] flex-[0_0_40%]">Payment Method:</span>
              <span className="text-[var(--text-light)] font-medium text-right flex-[0_0_60%] break-all">{transactionData.paymentMethod}</span>
            </li>
            <li className="flex justify-between py-2.5 border-b border-[var(--divider-color)]/50 text-sm last:border-b-0">
              <span className="text-[var(--text-muted)] flex-[0_0_40%]">IP Address:</span>
              <span className="text-[var(--text-light)] font-medium text-right flex-[0_0_60%] break-all">{transactionData.ipAddress}</span>
            </li>
            <li className="flex justify-between py-2.5 border-b border-[var(--divider-color)]/50 text-sm last:border-b-0">
              <span className="text-[var(--text-muted)] flex-[0_0_40%]">Device ID:</span>
              <span className="text-[var(--text-light)] font-medium text-right flex-[0_0_60%] break-all">{transactionData.deviceId}</span>
            </li>
            <li className="flex justify-between py-2.5 border-b border-[var(--divider-color)]/50 text-sm last:border-b-0">
              <span className="text-[var(--text-muted)] flex-[0_0_40%]">Transaction Risk Score:</span>
              <span className="text-[var(--warning)] font-medium text-right flex-[0_0_60%] break-all">{transactionData.riskScore}</span>
            </li>
          </ul>
        </GlobalCard>

        {/* Model Prediction */}
        <GlobalCard icon={<i className="fas fa-brain"></i>} title="Model Prediction & Reasoning">
          <ul className="space-y-0 mb-4">
            <li className="flex justify-between py-2.5 border-b border-[var(--divider-color)]/50 text-sm">
              <span className="text-[var(--text-muted)] flex-[0_0_40%]">Model Prediction:</span>
              <StatusDisplay status={modelData.prediction} type="negative" className="text-right flex-[0_0_60%]" />
            </li>
            <li className="flex justify-between py-2.5 border-b border-[var(--divider-color)]/50 text-sm">
              <span className="text-[var(--text-muted)] flex-[0_0_40%]">Confidence Score:</span>
              <StatusDisplay percent={Number(modelData.confidence)} type="negative" className="text-right flex-[0_0_60%]" />
            </li>
            <li className="flex justify-between py-2.5 text-sm">
              <span className="text-[var(--text-muted)] flex-[0_0_40%]">Model Version:</span>
              <span className="text-[var(--text-light)] font-medium text-right flex-[0_0_60%]">{modelData.version}</span>
            </li>
          </ul>
          
          <div className="mt-4">
            <h4 className="text-[var(--text-muted)] text-base mb-2.5">Top Contributing Factors:</h4>
            <ul className="space-y-1.5">
              {contributingFactors.map((factor, index) => (
                <li key={index} className="bg-white/5 px-3 py-2 rounded flex items-center text-sm">
                  <i className={`${factor.icon} mr-2 ${factor.type === 'positive' ? 'text-[var(--positive)]' : 'text-[var(--negative)]'}`}></i>
                  {factor.text}
                </li>
              ))}
            </ul>
            <a href="#" className="text-sm text-[var(--primary-accent)] mt-2.5 inline-block">
              View Full Model Explanation (SHAP/LIME)
            </a>
          </div>
        </GlobalCard>
      </div>

      {/* Analyst Review - Full Width */}
      <GlobalCard className="mt-6" icon={<i className="fas fa-user-edit"></i>} title="Analyst Initial Review & Notes">
        <ul className="space-y-0 mb-5">
          <li className="flex justify-between py-2.5 border-b border-[var(--divider-color)]/50 text-sm">
            <span className="text-[var(--text-muted)] flex-[0_0_40%]">Analyst:</span>
            <span className="text-[var(--text-light)] font-medium text-right flex-[0_0_60%]">Jane Doe (JD007)</span>
          </li>
          <li className="flex justify-between py-2.5 border-b border-[var(--divider-color)]/50 text-sm">
            <span className="text-[var(--text-muted)] flex-[0_0_40%]">Review Date:</span>
            <span className="text-[var(--text-light)] font-medium text-right flex-[0_0_60%]">2024-05-14 11:15:00 UTC</span>
          </li>
          <li className="flex justify-between py-2.5 text-sm">
            <span className="text-[var(--text-muted)] flex-[0_0_40%]">Initial Assessment:</span>
            <StatusDisplay status="Potentially False Positive" type="warning" className="text-right flex-[0_0_60%]" />
          </li>
        </ul>

        <div className="mb-5">
          <label className="block text-[var(--text-muted)] mb-2 text-sm">Investigation Findings & Notes:</label>
          <textarea
            className="w-full bg-[var(--bg-color)] text-[var(--text-light)] border border-[var(--divider-color)] rounded-md p-3 text-sm min-h-[120px] resize-y font-mono leading-relaxed focus:outline-none focus:border-[var(--primary-accent)] focus:ring-2 focus:ring-[var(--primary-accent)]/30"
            value={analystNotes}
            onChange={(e) => setAnalystNotes(e.target.value)}
            placeholder="Document your investigation steps, findings, communications, and rationale for the initial assessment..."
          />
        </div>

        <div>
          <label className="block text-[var(--text-muted)] mb-2 text-sm">Investigation Steps Taken:</label>
          <div className="space-y-2">
            {investigationSteps.map((step, index) => (
              <label key={index} className="flex items-center text-sm text-[var(--text-light)] cursor-pointer">
                <input
                  type="checkbox"
                  className="mr-2.5 w-4 h-4 accent-[var(--primary-accent)]"
                  checked={step.checked}
                  readOnly
                />
                {step.label}
              </label>
            ))}
          </div>
        </div>
      </GlobalCard>

      {/* Final Ruling - Full Width */}
      <GlobalCard className="mt-6" icon={<i className="fas fa-balance-scale"></i>} title="Overrule Justification & Final Ruling">
        <div className="mb-5">
          <label className="block text-[var(--text-muted)] mb-2 text-sm">Reason for Overrule (if applicable):</label>
          <select
            className="w-full bg-[var(--bg-color)] text-[var(--text-light)] border border-[var(--divider-color)] rounded-md p-3 text-sm focus:outline-none focus:border-[var(--primary-accent)] focus:ring-2 focus:ring-[var(--primary-accent)]/30"
            value={overruleReason}
            onChange={(e) => setOverruleReason(e.target.value)}
          >
            <option value="">Select a reason if overruling model...</option>
            <option value="known_behavior">Known Customer Behavior</option>
            <option value="fp_pattern">Matches Known False Positive Pattern</option>
            <option value="new_info">New Information/Evidence Acquired</option>
            <option value="model_error">Identified Model Error/Limitation</option>
            <option value="verified_legit">Verified Legitimacy with Customer/Merchant</option>
            <option value="other">Other (Specify in notes)</option>
          </select>
        </div>

        <div className="mb-8">
          <label className="block text-[var(--text-muted)] mb-2 text-sm">Final Justification Notes (Mandatory if overruling):</label>
          <textarea
            className="w-full bg-[var(--bg-color)] text-[var(--text-light)] border border-[var(--divider-color)] rounded-md p-3 text-sm min-h-[120px] resize-y font-mono leading-relaxed focus:outline-none focus:border-[var(--primary-accent)] focus:ring-2 focus:ring-[var(--primary-accent)]/30"
            value={justificationNotes}
            onChange={(e) => setJustificationNotes(e.target.value)}
            placeholder="Clearly explain the reason for the final ruling, especially if it differs from the model's prediction or initial assessment. Provide specific evidence."
          />
        </div>

        <div className="pt-5 border-t border-[var(--divider-color)] flex justify-end space-x-4">
          <Button variant="secondary">
            <i className="fas fa-save mr-2"></i>
            Save Draft
          </Button>
          <Button variant="positive">
            <i className="fas fa-shield-check mr-2"></i>
            Confirm as NOT FRAUD
          </Button>
          <Button variant="danger">
            <i className="fas fa-exclamation-triangle mr-2"></i>
            Confirm as FRAUD
          </Button>
        </div>
      </GlobalCard>
    </div>
  );
};

export default CaseOverview;

