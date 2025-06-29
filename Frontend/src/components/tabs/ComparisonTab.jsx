import React from 'react';
import ChartContainer from '../../components/ui/ChartContainer';

const ComparisonTab = () => {
  const modelComparison = [
    {
      model: 'Current Model (v3.2.1)',
      accuracy: '94.2%',
      precision: '92.8%',
      recall: '89.3%',
      f1Score: '91.0%',
      responseTime: '127ms',
      throughput: '2,847/min',
      status: 'Production',
      statusType: 'success'
    },
    {
      model: 'Previous Model (v3.1.4)',
      accuracy: '92.1%',
      precision: '91.3%',
      recall: '88.5%',
      f1Score: '89.8%',
      responseTime: '142ms',
      throughput: '2,534/min',
      status: 'Deprecated',
      statusType: 'warning'
    },
    {
      model: 'Baseline Model (v2.5.0)',
      accuracy: '87.8%',
      precision: '86.2%',
      recall: '84.1%',
      f1Score: '85.1%',
      responseTime: '98ms',
      throughput: '3,120/min',
      status: 'Archived',
      statusType: 'info'
    },
    {
      model: 'Experimental (v3.3.0-beta)',
      accuracy: '95.7%',
      precision: '94.1%',
      recall: '91.2%',
      f1Score: '92.6%',
      responseTime: '156ms',
      throughput: '2,245/min',
      status: 'Testing',
      statusType: 'danger'
    }
  ];

  const getBadgeClass = (type) => {
    switch (type) {
      case 'success': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'warning': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'danger': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      case 'info': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  return (
    <div className="animate-fadeIn">
      {/* Model Comparison Table */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden mb-8">
        <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
            Model Performance Comparison
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Comparative analysis of different model versions
          </p>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-800 dark:bg-gray-900">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                  Model Version
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                  Accuracy
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                  Precision
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                  Recall
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                  F1 Score
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                  Response Time
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                  Throughput
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {modelComparison.map((model, index) => (
                <tr 
                  key={index} 
                  className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="font-medium text-gray-900 dark:text-gray-100">
                      {model.model}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-700 dark:text-gray-300">
                    {model.accuracy}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-700 dark:text-gray-300">
                    {model.precision}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-700 dark:text-gray-300">
                    {model.recall}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-700 dark:text-gray-300">
                    {model.f1Score}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-700 dark:text-gray-300">
                    {model.responseTime}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-700 dark:text-gray-300">
                    {model.throughput}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getBadgeClass(model.statusType)}`}>
                      {model.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Comparison Charts */}
      <div className="space-y-6">
        <ChartContainer
          title="Model Performance Comparison"
          type="bar"
          description="Side-by-side comparison of key metrics across model versions"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ChartContainer
            title="Accuracy vs Response Time"
            type="line"
            description="Trade-off analysis between accuracy and performance"
          />
          
          <ChartContainer
            title="Resource Efficiency"
            type="doughnut"
            description="Resource utilization comparison across models"
          />
        </div>

        <ChartContainer
          title="Performance Trends Over Time"
          type="line"
          description="Historical performance comparison of different model versions"
        />
      </div>
    </div>
  );
};

export default ComparisonTab;

