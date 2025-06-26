import PropTypes from 'prop-types';

export default function StatusDisplay({ status, percent = null }) {
  if (percent !== null && !isNaN(Number(percent))) {
    percent = Number(percent);
  }

  let textColor = 'text-gray-500';

  if (percent !== null) {
    if (percent < 50) textColor = 'text-green-500';      // Safe
    else if (percent < 80) textColor = 'text-yellow-500'; // Warning
    else textColor = 'text-red-500';                     // Danger
  } else {
    const s = status.toLowerCase();

    if (['fraud', 'high', 'true positive'].includes(s)) {
      textColor = 'text-red-500';
    } else if (['medium', 'potentially false positive'].includes(s)) {
      textColor = 'text-yellow-500';
    } else if (['low', 'active', 'non fraud', 'false positive'].includes(s)) {
      textColor = 'text-green-500';
    } else if (s === 'inactive') {
      textColor = 'text-gray-500';
    }
  }

  return (
    <div className={`px-4 py-2 rounded font-semibold ${textColor}`}>
      {percent !== null ? `${percent}%` : status}
    </div>
  );
}

StatusDisplay.propTypes = {
  status: PropTypes.string,
  percent: PropTypes.number,
};