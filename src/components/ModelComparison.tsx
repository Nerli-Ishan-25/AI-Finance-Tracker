import React from 'react';

export const ModelComparison: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-6">Model Analysis & Comparison</h1>

      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex gap-2">
            <button className="px-3 py-2 rounded-md text-sm font-medium bg-gray-100">Performance Metrics</button>
            <button className="px-3 py-2 rounded-md text-sm font-medium">Model Comparison</button>
            <button className="px-3 py-2 rounded-md text-sm font-medium">Bias Analysis</button>
          </div>
        </div>

        <div className="space-y-6">
          <div className="border rounded-lg p-5">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-lg font-semibold">Gradient Boosting</div>
                <span className="inline-flex text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded">Production</span>
              </div>
              <div className="text-right text-2xl font-bold">94.2%</div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 text-sm">
              <div><div className="text-gray-500">Precision</div><div className="font-medium">91.8%</div></div>
              <div><div className="text-gray-500">Recall</div><div className="font-medium">89.5%</div></div>
              <div><div className="text-gray-500">F1-Score</div><div className="font-medium">90.6%</div></div>
              <div><div className="text-gray-500">AUC-ROC</div><div className="font-medium">0.946</div></div>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4 text-sm text-gray-600">
              <div className="flex items-center gap-2"><span className="inline-flex h-4 w-4 rounded-full bg-gray-300" /> Training Time: <span className="text-gray-900">2.3 hours</span></div>
              <div className="flex items-center gap-2"><span className="inline-flex h-4 w-4 rounded-sm bg-yellow-400" /> Prediction Time: <span className="text-gray-900">12ms</span></div>
            </div>
          </div>

          <div className="border rounded-lg p-5">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-lg font-semibold">Random Forest</div>
                <span className="inline-flex text-xs bg-gray-100 text-gray-700 px-2 py-0.5 rounded">Backup</span>
              </div>
              <div className="text-right text-2xl font-bold">92.7%</div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 text-sm">
              <div><div className="text-gray-500">Precision</div><div className="font-medium">89.3%</div></div>
              <div><div className="text-gray-500">Recall</div><div className="font-medium">91.2%</div></div>
              <div><div className="text-gray-500">F1-Score</div><div className="font-medium">90.2%</div></div>
              <div><div className="text-gray-500">AUC-ROC</div><div className="font-medium">0.928</div></div>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4 text-sm text-gray-600">
              <div className="flex items-center gap-2"><span className="inline-flex h-4 w-4 rounded-full bg-gray-300" /> Training Time: <span className="text-gray-900">45 minutes</span></div>
              <div className="flex items-center gap-2"><span className="inline-flex h-4 w-4 rounded-sm bg-yellow-400" /> Prediction Time: <span className="text-gray-900">8ms</span></div>
            </div>
          </div>

          <div className="border rounded-lg p-5">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-lg font-semibold">Logistic Regression</div>
                <span className="inline-flex text-xs bg-gray-100 text-gray-700 px-2 py-0.5 rounded">Baseline</span>
              </div>
              <div className="text-right text-2xl font-bold">88.9%</div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 text-sm">
              <div><div className="text-gray-500">Precision</div><div className="font-medium">86.7%</div></div>
              <div><div className="text-gray-500">Recall</div><div className="font-medium">88.1%</div></div>
              <div><div className="text-gray-500">F1-Score</div><div className="font-medium">87.4%</div></div>
              <div><div className="text-gray-500">AUC-ROC</div><div className="font-medium">0.891</div></div>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4 text-sm text-gray-600">
              <div className="flex items-center gap-2"><span className="inline-flex h-4 w-4 rounded-full bg-gray-300" /> Training Time: <span className="text-gray-900">5 minutes</span></div>
              <div className="flex items-center gap-2"><span className="inline-flex h-4 w-4 rounded-sm bg-yellow-400" /> Prediction Time: <span className="text-gray-900">2ms</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
