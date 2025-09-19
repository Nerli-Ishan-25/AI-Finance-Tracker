import React from 'react';

type Tab = 'dashboard' | 'application' | 'models' | 'compliance';

type NavigationProps = {
  activeTab: Tab;
  setActiveTab: (tab: Tab) => void;
};

export const Navigation: React.FC<NavigationProps> = ({ activeTab, setActiveTab }) => {
  const tabs: { id: Tab; name: string }[] = [
    { id: 'dashboard', name: 'Risk Dashboard' },
    { id: 'application', name: 'Loan Assessment' },
    { id: 'models', name: 'Model Analysis' },
    { id: 'compliance', name: 'Compliance Monitor' },
  ];

  return (
    <header className="bg-white border-b">
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-md bg-blue-600" />
            <span className="font-semibold text-gray-900">FinRisk AI</span>
          </div>
          <div className="flex items-center gap-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {tab.name}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};
