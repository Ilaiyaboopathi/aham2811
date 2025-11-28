import React, { useState, useEffect } from 'react';

const RiskClassification = () => {
  // Sample data for the risk classification
  const riskData = [
    { category: 'High Risk', closedUnits: 2, closedPercentage: '1%', liveUnits: 32, livePercentage: '3%', riskPoolUnits: 34, riskPoolPercentage: '2%' },
    { category: 'Low Risk', closedUnits: 13, closedPercentage: '4%', liveUnits: 24, livePercentage: '2%', riskPoolUnits: 37, riskPoolPercentage: '3%' },
    { category: 'Medium Risk', closedUnits: 355, closedPercentage: '96%', liveUnits: 979, livePercentage: '95%', riskPoolUnits: 1334, riskPoolPercentage: '95%' },
    { category: 'Grand Total', closedUnits: 370, closedPercentage: '100%', liveUnits: 1035, livePercentage: '100%', riskPoolUnits: 1405, riskPoolPercentage: '100%' },
  ];

  const [activeTab, setActiveTab] = useState('overview');

  // Chart data for pie chart
  const chartData = {
    labels: ['High Risk', 'Low Risk', 'Medium Risk'],
    datasets: [
      {
        label: 'Risk Distribution (%)',
        data: [3, 2, 95],
        backgroundColor: ['#EF4444', '#10B981', '#6366F1'],
        borderColor: ['#ffffff', '#ffffff', '#ffffff'],
        borderWidth: 2,
      },
    ],
  };

  // Hover states for cards
  const [hoveredCard, setHoveredCard] = useState(null);

  // Update time dynamically
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 60000); // Update every minute
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{
        fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
        backgroundImage: "url('https://images.unsplash.com/photo-1506784924381-29e4936f7e5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80')",
      }}
    >
      {/* Banner Section with Overlay */}
      <header className="relative w-full h-80 bg-gradient-to-r from-primary-600/80 to-accent-600/80 animate-pulse-slow overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center text-white px-6 py-12 transform hover:scale-105 transition-transform duration-700">
          <h1 className="text-6xl font-extrabold mb-4 text-shadow-lg animate-fade-in">Risk Classification Hub</h1>
          <p className="text-2xl mb-6 animate-pulse">Real-Time Insights - September 2025</p>
          <button className="bg-white/90 text-primary-600 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-200 hover:text-accent-600 transition-all duration-300 transform hover:-translate-y-1">
            Download Full Report (PDF)
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-12 py-12 bg-white/90 backdrop-blur-sm rounded-lg shadow-2xl">
        {/* Tabs Navigation with Glow */}
        <div className="flex space-x-8 mb-12 border-b-2 border-gray-200">
          {['overview', 'details', 'summary', 'trends'].map((tab) => (
            <button
              key={tab}
              className={`px-8 py-4 font-semibold text-lg ${activeTab === tab ? 'text-primary-600 border-b-4 border-primary-600 glow' : 'text-gray-600 hover:text-primary-600 hover:glow'} transition-all duration-300`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Tab Content with Effects */}
        <div className="bg-white shadow-inner rounded-2xl p-8">
          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {riskData.map((item, index) => (
                <div
                  key={index}
                  className={`bg-white p-6 rounded-xl border-2 border-gray-200 transform hover:scale-105 hover:bg-gray-50 transition-all duration-500 ${hoveredCard === index ? 'ring-4 ring-primary-300' : ''}`}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{item.category}</h3>
                  <div className="space-y-3 text-sm">
                    <p className="text-gray-600">Closed: <span className="text-gray-900 font-semibold">{item.closedUnits} ({item.closedPercentage})</span></p>
                    <p className="text-gray-600">Live: <span className="text-gray-900 font-semibold">{item.liveUnits} ({item.livePercentage})</span></p>
                    <p className="text-gray-600">Risk Pool: <span className="text-gray-900 font-semibold">{item.riskPoolUnits} ({item.riskPoolPercentage})</span></p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'details' && (
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">In-Depth Risk Analysis</h3>
                <div className="space-y-6">
                  <div className="collapse collapse-arrow bg-gray-50 p-5 rounded-lg">
                    <input type="checkbox" />
                    <div className="collapse-title text-lg font-medium text-gray-700">High Risk (3% Live)</div>
                    <div className="collapse-content text-gray-600">
                      <p>High Risk units, comprising 3% of live assets, indicate critical vulnerabilities that demand immediate action. Our team recommends deploying cutting-edge monitoring tools, such as AI-driven risk analytics, and conducting urgent risk reassessments to safeguard assets. Historical data from the past quarter shows a slight uptick in this category, likely due to market fluctuations, warranting proactive measures to prevent escalation...</p>
                    </div>
                  </div>
                  <div className="collapse collapse-arrow bg-gray-50 p-5 rounded-lg">
                    <input type="checkbox" />
                    <div className="collapse-title text-lg font-medium text-gray-700">Low Risk (2% Live)</div>
                    <div className="collapse-content text-gray-600">
                      <p>Low Risk units, stable at 2% of live assets, showcase the strength of our current risk management framework. To capitalize on this stability, consider integrating these units into expansion strategies or using them as benchmarks for other portfolios. Regular audits and minor adjustments, such as quarterly reviews, will ensure this category remains a cornerstone of reliability amid evolving market conditions...</p>
                    </div>
                  </div>
                  <div className="collapse collapse-arrow bg-gray-50 p-5 rounded-lg">
                    <input type="checkbox" />
                    <div className="collapse-title text-lg font-medium text-gray-700">Medium Risk (95% Live)</div>
                    <div className="collapse-content text-gray-600">
                      <p>Medium Risk units dominate with 95% of live assets, presenting both opportunities and challenges. This significant proportion requires a multi-layered approach, including advanced analytics for trend prediction, regular stakeholder reviews every 60 days, and tailored risk mitigation plans. Long-term stability hinges on transforming this category into a managed growth engine, potentially through diversified investments...</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'summary' && (
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Executive Summary</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors">
                    <p className="text-gray-500">Total Units</p>
                    <p className="text-2xl font-bold text-gray-800">1405</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors">
                    <p className="text-gray-500">Avg. Risk</p>
                    <p className="text-2xl font-bold text-gray-800">95%</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors">
                    <p className="text-gray-500">Critical Threshold</p>
                    <p className="text-2xl font-bold text-gray-800">5% (High Risk)</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors">
                    <p className="text-gray-500">Last Updated</p>
                    <p className="text-2xl font-bold text-gray-800">{currentTime.toLocaleString('en-US', { timeZone: 'Asia/Kolkata', hour12: true })}</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'trends' && (
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Risk Evolution Trends</h3>
                <p className="text-gray-600 mb-4">Explore the dynamic shifts in risk distribution and their implications over the past quarter.</p>
                <div className="w-full h-72">
                  {/* Pie Chart */}
                  <div className="chartjs" style={{ width: '100%', height: '100%' }}>
                    {JSON.stringify({
                      type: 'pie',
                      data: chartData,
                      options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                          legend: { position: 'top', labels: { color: '#333333' } },
                          tooltip: { bodyColor: '#333333', backgroundColor: '#ffffff' },
                        },
                        hover: { mode: 'nearest', intersect: true },
                      },
                    })}
                  </div>
                </div>
                <div className="mt-6 text-gray-600">
                  <p><strong>Trend Insights:</strong> Over the last 90 days, High Risk has remained stable at 3%, reflecting controlled exposure, while Medium Risk has surged to 95% due to increased market volatility and investment shifts. Low Risk units have slightly declined from 3% to 2%, indicating a strategic pivot towards medium-risk opportunities. This trend suggests a need for recalibrating risk strategies to balance growth and stability, potentially by diversifying into low-risk assets...</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Footer with Glow */}
      <footer className="bg-gradient-to-r from-gray-100 to-white text-gray-800 py-8">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <p className="text-lg font-medium glow-text">© 2025 AHAM. Pioneering Risk Excellence.</p>
          <p className="text-md mt-2">Support: <a href="mailto:support@aham.mbwhost.in" className="text-primary-600 hover:text-accent-600 transition-colors">support@aham.mbwhost.in</a> | Reviewed: {currentTime.toLocaleString('en-US', { timeZone: 'Asia/Kolkata', hour12: true })}</p>
        </div>
      </footer>
    </div>
  );
};

export default RiskClassification;