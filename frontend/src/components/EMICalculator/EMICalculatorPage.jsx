// src/components/EMICalculator/EMICalculatorPage.jsx

import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { Calculator, IndianRupee, Percent, CalendarDays, Home, Shield, Clock, Users } from 'lucide-react';

const EMICalculatorPage = () => {
  const [loanAmount, setLoanAmount] = useState(9900000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [tenureYears, setTenureYears] = useState(20);
  const [tenureMonths, setTenureMonths] = useState(0);

  const [emi, setEmi] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);

  const maxLoan = 20000000;
  const maxRate = 20;
  const maxYears = 30;

  useEffect(() => {
    calculateEMI();
  }, [loanAmount, interestRate, tenureYears, tenureMonths]);

  const calculateEMI = () => {
    const P = loanAmount;
    const R = interestRate / 12 / 100;
    const N = tenureYears * 12 + tenureMonths;

    if (N === 0) return;

    if (R === 0) {
      const emiCalc = P / N;
      setEmi(emiCalc);
      setTotalInterest(0);
      setTotalPayment(P);
    } else {
      const emiCalc = P * R * Math.pow(1 + R, N) / (Math.pow(1 + R, N) - 1);
      const totalPayable = emiCalc * N;
      const interest = totalPayable - P;

      setEmi(emiCalc);
      setTotalInterest(interest);
      setTotalPayment(totalPayable);
    }
  };

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(value);
  };

  const pieData = [
    { name: 'Principal', value: loanAmount, color: '#3B82F6' },
    { name: 'Interest', value: totalInterest, color: '#F59E0B' },
  ];

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 rounded-lg shadow-md border">
          <p className="text-sm font-medium text-gray-900">
            {payload[0].name}: {formatCurrency(payload[0].value)}
          </p>
          <p className="text-xs text-gray-600">
            {((payload[0].value / totalPayment) * 100).toFixed(1)}%
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="min-h-screen bg-gray-50 font-inter">
      {/* === BANNER SECTION === */}
      <section
        className="relative h-96 md:h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center text-center text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1973&q=80')`,
        }}
      >
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Plan Your Home Loan with Confidence
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Calculate your EMI instantly and make informed decisions about your dream home.
          </p>
          <a
            href="#calculator"
            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition transform hover:scale-105"
          >
            <Calculator className="w-5 h-5 mr-2" />
            Calculate EMI Now
          </a>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </section>

      {/* === MAIN CALCULATOR SECTION === */}
      <div id="calculator" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 -mt-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Inputs Section */}
          <div className="space-y-6">
            {/* Loan Amount */}
            <div className="bg-white p-6 rounded-xl shadow-md border">
              <label className="flex items-center mb-4 text-sm font-medium text-gray-700">
                <IndianRupee className="w-4 h-4 mr-2 text-blue-600" />
                Loan Amount
              </label>
              <input
                type="range"
                min="100000"
                max={maxLoan}
                value={loanAmount}
                onChange={(e) => setLoanAmount(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-2">
                <span>₹1 Lakh</span>
                <span>₹2 Crore</span>
              </div>
              <div className="mt-4 text-center">
                <input
                  type="text"
                  value={formatCurrency(loanAmount)}
                  onChange={(e) => {
                    const val = e.target.value.replace(/[^0-9]/g, '');
                    if (val && Number(val) <= maxLoan) setLoanAmount(Number(val));
                  }}
                  className="w-full text-3xl font-bold text-center bg-transparent border-0 focus:ring-0 text-gray-900"
                />
              </div>
            </div>

            {/* Interest Rate */}
<div className="bg-white p-6 rounded-xl shadow-md border">
  <label className="flex items-center mb-4 text-sm font-medium text-gray-700">
    <Percent className="w-4 h-4 mr-2 text-blue-600" />
    Interest Rate (% p.a.)
  </label>
  <input
    type="range"
    min="1"
    max={maxRate}
    step="0.1"
    value={interestRate}
    onChange={(e) => setInterestRate(Number(e.target.value))}
    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
  />
  <div className="flex justify-between text-xs text-gray-500 mt-2">
    <span>1%</span>
    <span>20%</span>
  </div>
  <div className="mt-6 text-center">
    <span className="text-4xl font-bold text-black-600">
      {interestRate.toFixed(1)}
    </span>
    <span className="text-lg font-medium text-gray-600 ml-2">%</span>
    <p className="text-sm text-gray-500 mt-1">per annum</p>
  </div>
</div>

            {/* Loan Tenure */}
            <div className="bg-white p-6 rounded-xl shadow-md border">
              <label className="flex items-center mb-4 text-sm font-medium text-gray-700">
                <CalendarDays className="w-4 h-4 mr-2 text-blue-600" />
                Loan Tenure
              </label>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="range"
                    min="0"
                    max={maxYears}
                    value={tenureYears}
                    onChange={(e) => setTenureYears(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-2">
                    <span>0 Yrs</span>
                    <span>30 Yrs</span>
                  </div>
                  <div className="mt-2 text-center">
                    <span className="text-xl font-bold text-gray-900">{tenureYears}</span>
                    <span className="text-sm text-gray-500 ml-1">Years</span>
                  </div>
                </div>
                <div>
                  <input
                    type="range"
                    min="0"
                    max="11"
                    value={tenureMonths}
                    onChange={(e) => setTenureMonths(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-2">
                    <span>0 Mo</span>
                    <span>11 Mo</span>
                  </div>
                  <div className="mt-2 text-center">
                    <span className="text-xl font-bold text-gray-900">{tenureMonths}</span>
                    <span className="text-sm text-gray-500 ml-1">Months</span>
                  </div>
                </div>
              </div>
              <div className="mt-4 text-center text-sm text-gray-600">
                Total: {tenureYears} Years {tenureMonths} Months
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div className="space-y-6">
            {/* EMI Card */}
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-xl shadow-lg">
              <div className="text-center">
                <h3 className="text-sm font-medium uppercase tracking-wide opacity-90">Monthly EMI</h3>
                <div className="mt-2">
                  <span className="text-4xl md:text-5xl font-bold">
                    {formatCurrency(Math.round(emi))}
                  </span>
                </div>
              </div>
            </div>

            {/* Breakdown Cards */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-blue-50 p-5 rounded-xl border border-blue-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Principal Amount</p>
                    <p className="text-lg font-bold text-gray-900">
                      {formatCurrency(loanAmount)}
                    </p>
                  </div>
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <IndianRupee className="w-5 h-5 text-blue-600" />
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 p-5 rounded-xl border border-amber-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Total Interest</p>
                    <p className="text-lg font-bold text-gray-900">
                      {formatCurrency(Math.round(totalInterest))}
                    </p>
                  </div>
                  <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                    <Percent className="w-5 h-5 text-amber-600" />
                  </div>
                </div>
              </div>
            </div>

            {/* Total Payment */}
            <div className="bg-white p-6 rounded-xl shadow-md border">
              <div className="text-center">
                <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide">Total Payment</h3>
                <div className="mt-2">
                  <span className="text-3xl font-bold text-gray-900">
                    {formatCurrency(Math.round(totalPayment))}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mt-1">
                  Over {tenureYears}Y {tenureMonths}M
                </p>
              </div>
            </div>

            {/* Pie Chart */}
            <div className="bg-white p-6 rounded-xl shadow-md border">
              <h3 className="text-sm font-medium text-gray-700 mb-4">Payment Breakdown</h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      innerRadius={50}
                      outerRadius={90}
                      paddingAngle={3}
                      dataKey="value"
                    >
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip content={<CustomTooltip />} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* === EXTRA SECTION 1: How EMI Works === */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">How EMI Works</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Equated Monthly Installment (EMI) is a fixed payment amount made by a borrower to a lender at a specified date each calendar month.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Loan Amount</h3>
              <p className="text-gray-600">Principal borrowed from the bank</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Interest Rate</h3>
              <p className="text-gray-600">Cost of borrowing, applied monthly</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Tenure</h3>
              <p className="text-gray-600">Duration to repay the loan</p>
            </div>
          </div>
        </div>
      </section>

      {/* === EXTRA SECTION 2: Why Choose AHAM === */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Why Choose AHAM Housing?</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Trusted by thousands of happy homeowners across India.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900">Secure & Transparent</h3>
              <p className="text-sm text-gray-600 mt-2">No hidden charges</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900">Quick Approval</h3>
              <p className="text-sm text-gray-600 mt-2">Get funds in 48 hours</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Home className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="font-semibold text-gray-900">Flexible Tenures</h3>
              <p className="text-sm text-gray-600 mt-2">Up to 30 years</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900">Expert Support</h3>
              <p className="text-sm text-gray-600 mt-2">24/7 assistance</p>
            </div>
          </div>
        </div>
      </section>

      {/* === FOOTER === */}
      {/* <footer className="bg-white border-t mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-center text-sm text-gray-500">
            © 2025 AHAM Housing Finance Ltd. EMI calculations are indicative. 
            Actual rates may vary based on credit profile, property type, and market conditions.
          </p>
        </div>
      </footer> */}

      {/* === CUSTOM STYLES === */}
      <style jsx>{`
        .font-inter {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }
        .slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: #3b82f6;
          cursor: pointer;
          box-shadow: 0 2px 6px rgba(0,0,0,0.2);
        }
        .slider::-moz-range-thumb {
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: #3b82f6;
          cursor: pointer;
          border: none;
          box-shadow: 0 2px 6px rgba(0,0,0,0.2);
        }
      `}</style>
    </div>
  );
};

export default EMICalculatorPage;