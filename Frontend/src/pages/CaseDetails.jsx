import React from 'react';
import GlobalCard from '../components/ui/GlobalCard';
import InteractiveMap from '../components/ui/InteractiveMap';
import { useParams, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFolderOpen,
  faUserShield,
  faMapMarkedAlt,
  faTasks,
  faPaperclip,
  faGavel,
  faPrint,
  faFileExport,
  faFilePdf,
  faFileImage,
  faFileWord,
  faMapMarkerAlt,
  faArrowLeft
} from '@fortawesome/free-solid-svg-icons';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

// Demo case data (should be replaced with API or context in real app)
const caseData = {
  'CASE00123': {
    id: 'CASE00123',
    dateOpened: '2025-05-12',
    lastUpdated: '2025-05-13 10:30 UTC',
    dateSolved: '-',
    status: 'Investigating',
    statusClass: 'status-investigating',
    priority: 'Medium',
    priorityClass: 'priority-medium',
    assignedAnalyst: 'John Doe',
    relatedTxnId: 'TXN7890124',
    txnAmount: '$350.00 USD',
    complaintDescription: 'Client reported an unrecognized charge on their statement for SkyHigh Airlines. Client states they did not authorize this flight booking.',
    caseTxnLocationText: 'San Francisco, CA (Online)',
    caseTxnLocationMapData: 'San Francisco, CA',
    caseMerchantLocationText: 'Dallas, TX',
    caseMerchantLocationMapData: 'Dallas, TX',
    actionTaken: 'Initial contact made with merchant (SkyHigh Airlines) to verify transaction details. Awaiting response. Transaction temporarily flagged.',
    timeline: [
      { time: '2025-05-13 10:30 UTC - John Doe', content: 'Followed up with merchant via email. No response yet.' },
      { time: '2025-05-12 15:00 UTC - John Doe', content: 'Contacted merchant (SkyHigh Airlines) support line. Reference: MREF123. Requested transaction verification.' },
      { time: '2025-05-12 14:05 UTC - System', content: 'Case created based on client report. Transaction TXN7890124 flagged for review.' }
    ],
    attachments: [
      { name: 'client_statement_may.pdf', type: 'pdf', link: '#' },
      { name: 'transaction_screenshot.png', type: 'image', link: '#' }
    ],
    resolutionSummary: 'Case is currently under investigation. Resolution pending.'
  },
  'CASE00124': {
    id: 'CASE00124',
    dateOpened: '2025-05-10',
    lastUpdated: '2025-05-11 09:00 UTC',
    dateSolved: '2025-05-11',
    status: 'Resolved',
    statusClass: 'status-resolved',
    priority: 'High',
    priorityClass: 'priority-high',
    assignedAnalyst: 'Jane Smith',
    relatedTxnId: 'TXN7890126',
    txnAmount: '$899.99 USD',
    complaintDescription: 'Automated system flagged transaction TXN7890126 due to high risk score. Merchant and transaction patterns unusual for client.',
    caseTxnLocationText: 'Miami, FL (Online)',
    caseTxnLocationMapData: 'Miami, FL',
    caseMerchantLocationText: 'Geneva, CH',
    caseMerchantLocationMapData: 'Geneva, CH',
    actionTaken: 'Transaction was automatically blocked by the system. Client was notified. Confirmed as unauthorized by client.',
    timeline: [
      { time: '2025-05-11 09:00 UTC - Jane Smith', content: 'Client confirmed transaction was unauthorized. Case closed as resolved fraud.' },
      { time: '2025-05-10 22:30 UTC - Jane Smith', content: 'Contacted client to verify transaction. Awaiting client response.' },
      { time: '2025-05-10 22:16 UTC - System', content: 'Case created. Transaction TXN7890126 blocked due to high fraud risk score.' }
    ],
    attachments: [],
    resolutionSummary: 'Transaction confirmed as fraudulent by client. Funds secured. Case closed.'
  }
};

const statusClassMap = {
  'Investigating': 'text-blue-400 font-bold',
  'Open': 'text-yellow-400 font-bold',
  'Resolved': 'text-green-400 font-bold',
  'Closed': 'text-gray-400 font-bold',
};
const priorityClassMap = {
  'High': 'text-pink-400 font-bold',
  'Medium': 'text-yellow-400 font-bold',
  'Low': 'text-green-400 font-bold',
};

const iconMap = {
  pdf: faFilePdf,
  image: faFileImage,
  doc: faFileWord,
};

const CaseDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const data = caseData[id] || caseData['CASE00123'];
  const detailsRef = React.useRef();

  const handleExportPDF = async () => {
    if (!detailsRef.current) return;
    const element = detailsRef.current;
    const canvas = await html2canvas(element, { backgroundColor: '#25253A', scale: 2 });
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF({ orientation: 'p', unit: 'pt', format: 'a4' });
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pageWidth;
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save(`${data.id}_details.pdf`);
  };

  return (
    <div className="px-4 py-6 animate-fadeIn">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-white">Case Details</h1>
          <p className="text-sm text-slate-400 mt-1">Detailed view of Case ID: <span className="font-semibold text-white">{data.id}</span>.</p>
        </div>
        <div className="flex gap-2 flex-wrap">
          <button
            className="btn btn-outline border border-blue-400 text-blue-400 hover:bg-blue-900/20 rounded-lg px-4 py-2 flex items-center gap-2"
            onClick={() => navigate('/client-history')}
          >
            <FontAwesomeIcon icon={faArrowLeft} /> Back to Cases
          </button>
          <button
            className="btn btn-outline border border-blue-400 text-blue-400 hover:bg-blue-900/20 rounded-lg px-4 py-2 flex items-center gap-2"
            onClick={() => window.print()}
          >
            <FontAwesomeIcon icon={faPrint} /> Print Case
          </button>
          <button
            className="btn btn-outline border border-blue-400 text-blue-400 hover:bg-blue-900/20 rounded-lg px-4 py-2 flex items-center gap-2"
            onClick={handleExportPDF}
          >
            <FontAwesomeIcon icon={faFileExport} /> Export Case
          </button>
        </div>
      </div>
      <div ref={detailsRef}>
        {/* Case Summary */}
        <GlobalCard className="mb-6">
          <div className="border-b border-slate-700 pb-3 mb-4 flex items-center gap-2">
            <FontAwesomeIcon icon={faFolderOpen} className="text-blue-400" />
            <h3 className="text-lg font-semibold text-white">Case Summary</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white/5 rounded p-3"><strong className="text-slate-400">Case ID:</strong> <span>{data.id}</span></div>
            <div className="bg-white/5 rounded p-3"><strong className="text-slate-400">Date Case Opened:</strong> <span>{data.dateOpened}</span></div>
            <div className="bg-white/5 rounded p-3"><strong className="text-slate-400">Last Updated Date:</strong> <span>{data.lastUpdated}</span></div>
            <div className="bg-white/5 rounded p-3"><strong className="text-slate-400">Date Case Solved/Closed:</strong> <span>{data.dateSolved}</span></div>
            <div className="bg-white/5 rounded p-3"><strong className="text-slate-400">Current Case Status:</strong> <span className={statusClassMap[data.status] || ''}>{data.status}</span></div>
            <div className="bg-white/5 rounded p-3"><strong className="text-slate-400">Case Priority:</strong> <span className={priorityClassMap[data.priority] || ''}>{data.priority}</span></div>
            <div className="bg-white/5 rounded p-3"><strong className="text-slate-400">Assigned Analyst:</strong> <span>{data.assignedAnalyst}</span></div>
          </div>
        </GlobalCard>

        {/* Complaint & Transaction Info */}
        <GlobalCard className="mb-6">
          <div className="border-b border-slate-700 pb-3 mb-4 flex items-center gap-2">
            <FontAwesomeIcon icon={faUserShield} className="text-blue-400" />
            <h3 className="text-lg font-semibold text-white">Complaint & Transaction Information</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white/5 rounded p-3">
              <strong className="text-slate-400">Related Transaction ID(s):</strong> {data.relatedTxnId ? (
                <a href="#" className="text-blue-400 hover:underline">{data.relatedTxnId}</a>
              ) : 'N/A'}
            </div>
            <div className="bg-white/5 rounded p-3"><strong className="text-slate-400">Transaction Amount:</strong> <span>{data.txnAmount}</span></div>
            <div className="bg-white/5 rounded p-3 col-span-2">
              <strong className="text-slate-400">Complaint/Issue Description:</strong>
              <p className="mt-1 text-white/90">{data.complaintDescription}</p>
            </div>
          </div>
        </GlobalCard>

        {/* Associated Locations */}
        <GlobalCard className="mb-6">
          <div className="border-b border-slate-700 pb-3 mb-4 flex items-center gap-2">
            <FontAwesomeIcon icon={faMapMarkedAlt} className="text-blue-400" />
            <h3 className="text-lg font-semibold text-white">Associated Locations</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white/5 rounded p-3">
              <strong className="text-slate-400">Transaction Location:</strong> <span>{data.caseTxnLocationText}</span>
              <div className="mt-2">
                <InteractiveMap 
                  locations={[
                    {
                      id: 1,
                      name: data.caseTxnLocationMapData,
                      lat: 37.7749,
                      lng: -122.4194,
                      type: 'transaction',
                      risk: 'medium'
                    }
                  ]}
                  height="200px"
                  showControls={true}
                  showSearch={false}
                  onLocationClick={(location) => {
                    console.log('Transaction location clicked:', location);
                  }}
                />
              </div>
            </div>
            <div className="bg-white/5 rounded p-3">
              <strong className="text-slate-400">Merchant Location:</strong> <span>{data.caseMerchantLocationText}</span>
              <div className="mt-2">
                <InteractiveMap 
                  locations={[
                    {
                      id: 1,
                      name: data.caseMerchantLocationMapData,
                      lat: 46.2044,
                      lng: 6.1432,
                      type: 'merchant',
                      risk: 'high'
                    }
                  ]}
                  height="200px"
                  showControls={true}
                  showSearch={false}
                  onLocationClick={(location) => {
                    console.log('Merchant location clicked:', location);
                  }}
                />
              </div>
            </div>
          </div>
        </GlobalCard>

        {/* Investigation & Actions */}
        <GlobalCard className="mb-6">
          <div className="border-b border-slate-700 pb-3 mb-4 flex items-center gap-2">
            <FontAwesomeIcon icon={faTasks} className="text-blue-400" />
            <h3 className="text-lg font-semibold text-white">Investigation & Actions</h3>
          </div>
          <div className="mb-4 bg-white/5 rounded p-3">
            <strong className="text-slate-400">Action Taken by Team:</strong>
            <p className="mt-1 text-white/90">{data.actionTaken}</p>
          </div>
          <div className="bg-white/5 rounded p-3">
            <strong className="text-slate-400">Investigation Notes/Timeline:</strong>
            <ul className="mt-2 space-y-3">
              {data.timeline.map((item, idx) => (
                <li key={idx} className="relative pl-8 border-l-2 border-slate-700">
                  <span className="absolute left-[-14px] top-1 w-3 h-3 rounded-full bg-blue-400 border-2 border-slate-800"></span>
                  <span className="block text-xs text-slate-400 mb-1">{item.time}</span>
                  <p className="text-white/90 text-sm">{item.content}</p>
                </li>
              ))}
            </ul>
          </div>
        </GlobalCard>

        {/* Attachments */}
        <GlobalCard className="mb-6">
          <div className="border-b border-slate-700 pb-3 mb-4 flex items-center gap-2">
            <FontAwesomeIcon icon={faPaperclip} className="text-blue-400" />
            <h3 className="text-lg font-semibold text-white">Attachments</h3>
          </div>
          <div className="bg-white/5 rounded p-3">
            <ul className="space-y-2">
              {data.attachments.length > 0 ? (
                data.attachments.map((att, idx) => (
                  <li key={idx}>
                    <a href={att.link} download className="flex items-center gap-2 text-blue-400 hover:underline">
                      <FontAwesomeIcon icon={iconMap[att.type] || faFilePdf} /> {att.name}
                    </a>
                  </li>
                ))
              ) : (
                <li className="text-slate-400">No attachments uploaded yet.</li>
              )}
            </ul>
          </div>
        </GlobalCard>

        {/* Resolution Summary */}
        <GlobalCard className="mb-6">
          <div className="border-b border-slate-700 pb-3 mb-4 flex items-center gap-2">
            <FontAwesomeIcon icon={faGavel} className="text-blue-400" />
            <h3 className="text-lg font-semibold text-white">Resolution Summary</h3>
          </div>
          <div className="bg-white/5 rounded p-3">
            <p className="text-white/90">{data.resolutionSummary}</p>
          </div>
        </GlobalCard>
      </div>
    </div>
  );
};

export default CaseDetails;
