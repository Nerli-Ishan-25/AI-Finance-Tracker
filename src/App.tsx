import React, { useState } from 'react';
import { Dashboard } from './components/Dashboard';
import { LoanApplication } from './components/LoanApplication';
import { ModelComparison } from './components/ModelComparison';
import { ComplianceMonitor } from './components/ComplianceMonitor';
import { Navigation } from './components/Navigation';
// Removed RiskAnalysis per request

export default function App() {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'application' | 'models' | 'compliance'>('dashboard');

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="container mx-auto px-4 py-6">
        {activeTab === 'dashboard' && <Dashboard />}
        {activeTab === 'application' && <LoanApplication />}
        {activeTab === 'models' && <ModelComparison />}
        {activeTab === 'compliance' && <ComplianceMonitor />}
      </main>
    </div>
  );
}