import React from 'react';

export const LoanApplication: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-6">Loan Risk Assessment</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <span className="inline-flex h-5 w-5 rounded-full bg-blue-600" /> Loan Application
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-gray-600 mb-1">Full Name</label>
            <input className="w-full border rounded-md px-3 py-2" placeholder="" />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">Age</label>
            <input type="number" className="w-full border rounded-md px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">Annual Income</label>
            <div className="flex items-center border rounded-md px-3">
              <span className="text-gray-400 mr-2">$</span>
              <input className="w-full py-2 outline-none" />
            </div>
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">Employment Status</label>
            <select className="w-full border rounded-md px-3 py-2">
              <option>Select employment status</option>
              <option>Employed</option>
              <option>Self-employed</option>
              <option>Unemployed</option>
              <option>Student</option>
            </select>
          </div>
        </div>

        <div className="h-px bg-gray-200 my-6" />

        <h3 className="text-lg font-semibold mb-3">Loan Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm text-gray-600 mb-1">Loan Amount</label>
            <div className="flex items-center border rounded-md px-3">
              <span className="text-gray-400 mr-2">$</span>
              <input className="w-full py-2 outline-none" />
            </div>
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">Loan Purpose</label>
            <select className="w-full border rounded-md px-3 py-2">
              <option>Select purpose</option>
              <option>Home</option>
              <option>Auto</option>
              <option>Education</option>
              <option>Debt Consolidation</option>
            </select>
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">Term (years)</label>
            <select className="w-full border rounded-md px-3 py-2">
              <option>Select term</option>
              <option>3</option>
              <option>5</option>
              <option>10</option>
              <option>15</option>
            </select>
          </div>
        </div>

        <div className="h-px bg-gray-200 my-6" />

        <h3 className="text-lg font-semibold mb-3">Financial Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-gray-600 mb-1">Credit Score</label>
            <input className="w-full border rounded-md px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">Debt-to-Income Ratio (%)</label>
            <input className="w-full border rounded-md px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">Total Assets</label>
            <div className="flex items-center border rounded-md px-3">
              <span className="text-gray-400 mr-2">$</span>
              <input className="w-full py-2 outline-none" />
            </div>
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">Monthly Debt Payments</label>
            <div className="flex items-center border rounded-md px-3">
              <span className="text-gray-400 mr-2">$</span>
              <input className="w-full py-2 outline-none" />
            </div>
          </div>
        </div>

        <div className="h-px bg-gray-200 my-6" />

        <h3 className="text-lg font-semibold mb-3">Additional Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-gray-600 mb-1">ZIP Code</label>
            <div className="flex items-center border rounded-md px-3">
              <span className="text-gray-400 mr-2">📍</span>
              <input className="w-full py-2 outline-none" />
            </div>
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">Home Ownership</label>
            <select className="w-full border rounded-md px-3 py-2">
              <option>Select ownership status</option>
              <option>Rent</option>
              <option>Own</option>
              <option>Mortgage</option>
            </select>
          </div>
        </div>

        <div className="mt-6">
          <button className="w-full md:w-auto px-6 py-3 bg-blue-600 text-white rounded-md">Assess Risk</button>
        </div>
      </div>
    </div>
  );
};
