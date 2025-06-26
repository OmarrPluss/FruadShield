import React from 'react';

const DataTable = ({ headers, data, sortable = false }) => {
  const [sortColumn, setSortColumn] = React.useState(null);
  const [sortDirection, setSortDirection] = React.useState('asc');
  
  const handleSort = (column) => {
    if (!sortable) return;
    
    if (sortColumn === column) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortDirection('asc');
    }
  };
  
  const sortedData = React.useMemo(() => {
    if (!sortColumn) return data;
    
    return [...data].sort((a, b) => {
      if (a[sortColumn] < b[sortColumn]) {
        return sortDirection === 'asc' ? -1 : 1;
      }
      if (a[sortColumn] > b[sortColumn]) {
        return sortDirection === 'asc' ? 1 : -1;
      }
      return 0;
    });
  }, [data, sortColumn, sortDirection]);
  
  return (
    <table className="w-full border-collapse border-spacing-0 my-4">
      <thead>
        <tr>
          {headers.map((header) => (
            <th 
              key={header.id}
              className={`text-left py-3 px-4 bg-white bg-opacity-5 text-text-muted font-medium sticky top-0 ${sortable ? 'cursor-pointer' : ''}`}
              onClick={() => handleSort(header.id)}
            >
              <div className="flex items-center gap-1">
                {header.label}
                {sortable && sortColumn === header.id && (
                  <span className="ml-1">
                    {sortDirection === 'asc' ? '↑' : '↓'}
                  </span>
                )}
              </div>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {sortedData.map((row, rowIndex) => (
          <tr 
            key={rowIndex}
            className="hover:bg-highlight"
          >
            {headers.map((header) => (
              <td 
                key={`${rowIndex}-${header.id}`}
                className="py-3 px-4 border-b border-divider-color"
              >
                {header.type === 'trend' ? (
                  <div className={`flex items-center gap-1 ${row.trend === 'up' ? 'trend-up' : row.trend === 'down' ? 'trend-down' : 'trend-neutral'}`}>
                    <i className={`fas fa-caret-${row.trend === 'up' ? 'up' : row.trend === 'down' ? 'down' : 'minus'}`}></i>
                    {row[header.id]}
                  </div>
                ) : (
                  row[header.id]
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
