import React from 'react';

export const Dashboard: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-6">Financial Risk Analysis Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-5 rounded-lg shadow">
          <div className="text-sm text-gray-500">Average Risk Score</div>
          <div className="text-3xl font-semibold">0.23</div>
          <div className="text-green-600 text-sm">-5.2% from last month</div>
        </div>
        <div className="bg-white p-5 rounded-lg shadow">
          <div className="text-sm text-gray-500">Applications Today</div>
          <div className="text-3xl font-semibold">847</div>
          <div className="text-green-600 text-sm">+12.3% from last month</div>
        </div>
        <div className="bg-white p-5 rounded-lg shadow">
          <div className="text-sm text-gray-500">High Risk Applications</div>
          <div className="text-3xl font-semibold">94</div>
          <div className="text-red-600 text-sm">+2.1% from last month</div>
        </div>
        <div className="bg-white p-5 rounded-lg shadow">
          <div className="text-sm text-gray-500">Portfolio Value</div>
          <div className="text-3xl font-semibold">$2.4M</div>
          <div className="text-green-600 text-sm">+8.7% from last month</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-5">
          <h2 className="text-lg font-semibold mb-4">Recent Risk Assessments</h2>
          <div className="divide-y">
            {[
              { name: 'John Smith', id: 'LA-2024-001', amount: '$45,000', risk: '12%', tone: 'green', time: '2 min ago' },
              { name: 'Sarah Johnson', id: 'LA-2024-002', amount: '$120,000', risk: '78%', tone: 'red', time: '8 min ago' },
              { name: 'Mike Davis', id: 'LA-2024-003', amount: '$75,000', risk: '45%', tone: 'yellow', time: '15 min ago' },
              { name: 'Emma Wilson', id: 'LA-2024-004', amount: '$32,000', risk: '19%', tone: 'green', time: '23 min ago' },
              { name: 'David Brown', id: 'LA-2024-005', amount: '$95,000', risk: '89%', tone: 'red', time: '31 min ago' },
            ].map((r, idx) => (
              <div key={idx} className="py-3 flex items-center justify-between">
                <div>
                  <div className="font-medium">{r.name}</div>
                  <div className="text-xs text-gray-500">{r.id} • {r.amount}</div>
                </div>
                <div className={`px-2 py-1 rounded text-sm ${
                  r.tone === 'green' ? 'text-green-700 bg-green-100' : r.tone === 'red' ? 'text-red-700 bg-red-100' : 'text-yellow-700 bg-yellow-100'
                }`}>Risk: {r.risk}</div>
                <div className="text-xs text-gray-500 w-24 text-right">{r.time}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-5">
          <h2 className="text-lg font-semibold mb-4">Model Performance Metrics</h2>
          <div className="space-y-3">
            {[
              { name: 'Gradient Boosting', accuracy: '94.2%', details: 'Precision 91.8% • Recall 89.5% • F1 90.6%', badge: 'Active', badgeClass: 'bg-green-100 text-green-700' },
              { name: 'Random Forest', accuracy: '92.7%', details: 'Precision 89.3% • Recall 91.2% • F1 90.2%', badge: 'Backup', badgeClass: 'bg-blue-100 text-blue-700' },
              { name: 'Logistic Regression', accuracy: '88.9%', details: 'Precision 86.7% • Recall 88.1% • F1 87.4%', badge: 'Baseline', badgeClass: 'bg-gray-100 text-gray-700' },
            ].map((m, idx) => (
              <div key={idx} className="p-3 rounded-md border hover:shadow-sm transition flex items-center justify-between">
                <div>
                  <div className="font-medium flex items-center gap-2">{m.name} <span className={`text-xs px-2 py-0.5 rounded ${m.badgeClass}`}>{m.badge}</span></div>
                  <div className="text-xs text-gray-500">Accuracy</div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="text-right">
                    <div className="text-xl font-semibold">{m.accuracy}</div>
                    <div className="text-xs text-gray-500">{m.details}</div>
                  </div>
                  <div className="hidden md:flex items-center gap-2 text-xs text-gray-600">
                    <span className="inline-flex h-2 w-2 rounded-full bg-green-500 animate-pulse" /> Stable
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};


