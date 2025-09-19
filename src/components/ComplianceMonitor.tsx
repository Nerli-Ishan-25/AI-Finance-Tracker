import React from 'react';

export const ComplianceMonitor: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-6">Regulatory Compliance Monitor</h1>
      <div className="text-right text-sm text-gray-500 mb-4">Last compliance check: 9/19/2025, 2:11:29 PM</div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-start justify-between">
            <div>
              <div className="text-lg font-semibold">Fair Credit Reporting Act (FCRA)</div>
              <span className="inline-flex bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded mt-1">Compliant</span>
            </div>
            <div className="text-2xl font-bold">98.2%</div>
          </div>
          <ul className="mt-4 space-y-2 text-sm text-gray-700">
            <li>Adverse action notices sent within 30 days</li>
            <li>Credit report accuracy maintained</li>
            <li>Consumer dispute resolution process active</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-start justify-between">
            <div>
              <div className="text-lg font-semibold">Equal Credit Opportunity Act (ECOA)</div>
              <span className="inline-flex bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded mt-1">Compliant</span>
            </div>
            <div className="text-2xl font-bold">96.8%</div>
          </div>
          <ul className="mt-4 space-y-2 text-sm text-gray-700">
            <li>No discrimination based on protected classes</li>
            <li>Adverse action reasons provided</li>
            <li>Bias monitoring systems operational</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-start justify-between">
            <div>
              <div className="text-lg font-semibold">General Data Protection Regulation (GDPR)</div>
              <span className="inline-flex bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded mt-1">Compliant</span>
            </div>
            <div className="text-2xl font-bold">94.5%</div>
          </div>
          <ul className="mt-4 space-y-2 text-sm text-gray-700">
            <li>Right to explanation implemented</li>
            <li>Data minimization principles followed</li>
            <li>Consent management system active</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-start justify-between">
            <div>
              <div className="text-lg font-semibold">Model Risk Management (SR 11-7)</div>
              <span className="inline-flex bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded mt-1">Compliant</span>
            </div>
            <div className="text-2xl font-bold">97.1%</div>
          </div>
          <ul className="mt-4 space-y-2 text-sm text-gray-700">
            <li>Model validation framework established</li>
            <li>Independent model review conducted</li>
            <li>Model performance monitoring active</li>
          </ul>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6 mt-6">
        <h2 className="text-lg font-semibold mb-4">Regulatory Compliance Status</h2>
        <div className="space-y-3">
          {[
            { name: 'Fair Lending Compliance', desc: 'Model shows no discriminatory bias across protected classes', score: '98.5%' },
            { name: 'Model Explainability', desc: 'All predictions include SHAP explanations meeting regulatory requirements', score: '95.2%' },
            { name: 'Data Privacy', desc: 'Minor data retention policy updates needed for full compliance', score: '87.3%' },
            { name: 'Audit Trail', desc: 'Complete audit logs maintained for all risk assessments', score: '99.1%' },
          ].map((s, i) => (
            <div key={i} className="flex items-start justify-between border rounded-md p-4 hover:shadow-sm transition">
              <div>
                <div className="font-medium">{s.name}</div>
                <div className="text-sm text-gray-600">{s.desc}</div>
              </div>
              <div className="text-sm bg-green-100 text-green-700 px-2 py-0.5 rounded self-start">{s.score}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6 mt-6">
        <h2 className="text-lg font-semibold mb-4">Audit Trail</h2>
        <div className="space-y-3">
          {[
            { actor: 'system', title: 'Model Prediction', text: 'Risk assessment completed for application LA-2024-001', time: '2024-01-15 14:32:15', badge: 'info' },
            { actor: 'john.officer@bank.com', title: 'Manual Override', text: 'Risk score manually adjusted for application LA-2024-002 due to additional collateral', time: '2024-01-15 14:30:22', badge: 'warning' },
            { actor: 'system', title: 'Compliance Check', text: 'ECOA bias monitoring passed for batch processing', time: '2024-01-15 14:25:10', badge: 'info' },
            { actor: 'system', title: 'Data Access', text: 'Credit bureau data retrieved for customer verification', time: '2024-01-15 14:20:05', badge: 'info' },
            { actor: 'admin@bank.com', title: 'Model Update', text: 'Gradient Boosting model retrained with new data batch', time: '2024-01-15 14:15:33', badge: 'critical' },
          ].map((e, i) => (
            <div key={i} className="border rounded-md p-4 hover:shadow-sm transition">
              <div className="flex items-center justify-between mb-1">
                <div className="font-medium">{e.title}</div>
                <span className={`text-xs px-2 py-0.5 rounded ${e.badge === 'warning' ? 'bg-yellow-100 text-yellow-700' : e.badge === 'critical' ? 'bg-red-100 text-red-700' : 'bg-blue-100 text-blue-700'}`}>{e.badge}</span>
              </div>
              <div className="text-sm text-gray-600">{e.text}</div>
              <div className="text-xs text-gray-500 mt-1">{e.time} • {e.actor}</div>
            </div>
          ))}
        </div>
        <div className="mt-4 p-4 rounded-md bg-blue-50 text-sm text-gray-700">
          <div className="font-medium mb-1">Retention Policy</div>
          Audit logs are retained for 7 years as required by banking regulations. All system actions and user interactions are logged with cryptographic integrity protection.
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6 mt-6">
        <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <span className="inline-flex h-5 w-5 rounded bg-blue-600" /> Data Governance
        </h2>
        <div className="space-y-3">
          <div className="flex items-center justify-between border rounded-md p-4">
            <div>
              <div className="font-medium">Data Quality</div>
              <div className="text-sm text-gray-600">Missing values &lt; 2%, outliers identified and handled</div>
            </div>
            <div className="text-sm bg-green-100 text-green-700 px-2 py-0.5 rounded self-start">96.2%</div>
          </div>
          <div className="flex items-center justify-between border rounded-md p-4">
            <div>
              <div className="font-medium">Data Security</div>
              <div className="text-sm text-gray-600">Encryption at rest and in transit, access controls active</div>
            </div>
            <div className="text-sm bg-green-100 text-green-700 px-2 py-0.5 rounded self-start">98.7%</div>
          </div>
          <div className="flex items-center justify-between border rounded-md p-4">
            <div>
              <div className="font-medium">Data Privacy</div>
              <div className="text-sm text-gray-600">PII anonymization implemented, consent tracking active</div>
            </div>
            <div className="text-sm bg-blue-100 text-blue-700 px-2 py-0.5 rounded self-start">94.3%</div>
          </div>
          <div className="flex items-center justify-between border rounded-md p-4">
            <div>
              <div className="font-medium">Data Lineage</div>
              <div className="text-sm text-gray-600">Complete data flow documentation, source tracking enabled</div>
            </div>
            <div className="text-sm bg-blue-100 text-blue-700 px-2 py-0.5 rounded self-start">91.8%</div>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div className="p-4 rounded-md bg-green-50">
            <div className="font-medium mb-1">Data Protection Measures</div>
            <ul className="list-disc ml-5 space-y-1">
              <li>AES-256 encryption for data at rest</li>
              <li>TLS 1.3 for data in transit</li>
              <li>Role-based access control (RBAC)</li>
              <li>Data masking in non-production environments</li>
            </ul>
          </div>
          <div className="p-4 rounded-md bg-blue-50">
            <div className="font-medium mb-1">Privacy Controls</div>
            <ul className="list-disc ml-5 space-y-1">
              <li>Customer consent management system</li>
              <li>Right to be forgotten implementation</li>
              <li>Data minimization principles enforced</li>
              <li>Regular privacy impact assessments</li>
            </ul>
          </div>
        </div>
      </div>
  </div>
  );
};
