import React, { useState } from 'react';
import GaugeChart from 'react-gauge-chart';
import { motion } from 'framer-motion';
import { ArrowRightIcon, ArrowLeftIcon, CheckCircleIcon, ClipboardDocumentCheckIcon } from '@heroicons/react/24/outline';
import CreditScoreModal from "../Modals/CreditScoreModal";
import CreditScoreModal2 from "../Modals/CreditScoreModal2";

const EligibilityScorecardSection = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [responses, setResponses] = useState({});
  const [score, setScore] = useState(0);
  const [result, setResult] = useState(null);
  const [showCreditScoreModal, setShowCreditScoreModal] = useState(false);
  const [showCreditScoreModal2, setShowCreditScoreModal2] = useState(false);

  // ✅ 8 Questions (includes one manual input type)
 const questions = [
    {
      id: 'age',
      question: 'Select your loan type',
      options: [
        { label: 'Purchase of new property', value: 'Purchase of new property', points: 5 },
        { label: 'Purchase of an under-construction property', value: 'Purchase of an under-construction property', points: -5 },
        { label: 'Purchase of an existing property', value: 'Purchase of an existing property', points: 5 },
        { label: 'Self-construction on an existing plot', value: 'Self-construction on an existing plot', points: 4 },
        { label: 'Purchase of a Plot & Construction (Composite loan)', value: 'Purchase of a Plot & Construction (Composite loan)', points: -2.5 },
        { label: 'Repair', value: 'Repair', points: 2.5 },
        { label: 'Renovation/Extension ', value: 'Renovation/Extension ', points: 2 },
        { label: 'Take over', value: 'Take over', points: -2.5 },
        { label: 'Refinance ', value: 'Refinance ', points: 3 },
        { label: 'Loan against property (LAP)', value: 'Loan against property (LAP)', points: -3.5 },
        { label: 'Loan against property (LAP) - Rented/Vacent/Letout', value: 'Loan against property (LAP) - Rented/Vacent/Letout', points: -50 },
      ],
    },
    {
      id: 'income',
      question: 'How will you use the property?',
      options: [
        { label: 'Self-occupied', value: 'Self-occupied', points: 10 },
        { label: 'Partly self-occupied & commercial', value: 'Partly self-occupied & commercial', points: 5 },
        { label: 'Rented', value: 'Rented', points: 2.5 },
        { label: 'Unoccupied/Vacant property', value: 'Unoccupied/Vacant property', points: -10 },
        
      ],
    },
    {
      id: 'employment',
      question: 'Does your property have plan approval?',
      options: [
        { label: 'Available', value: 'Available', points: 5 },
        { label: 'Applied for', value: 'Applied for', points: 3.5 },
        { label: 'Deemed approval/Low demolition risk', value: 'Deemed approval/Low demolition risk', points: -2 },
        { label: 'High demolition risk', value: 'High demolition risk', points:  -50},
      ],
    },

    {
      id: 'manual',
      type: 'text',
      question: 'Enter your required loan amount (in INR)',
      pointsLogic: (value) => {
        const num = parseFloat(value);
        if (isNaN(num)) return 0;
        if (num >= 10000000) return 0;
        if (num >= 5000000) return 0;
        if (num >= 1000000) return 0;
        return 0;
      },
    },
    {
      id: 'manual',
      type: 'text',
      question: 'Enter the estimated market value of your property (in INR)',
      pointsLogic: (value) => {
        const num = parseFloat(value);
        if (isNaN(num)) return 0;
        if (num >= 10000000) return 0;
        if (num >= 5000000) return 0;
        if (num >= 1000000) return 0;
        return 0;
      },
    },
 {
      id: 'manual',
      type: 'text',
      question: 'How far is your property from our nearest branch (in KM)',
      pointsLogic: (value) => {
        const num = parseFloat(value);
        if (isNaN(num)) return 0;
        if (num >= 10000000) return 0;
        if (num >= 5000000) return 0;
        if (num >= 1000000) return 0;
        return 0;
      },
    },
    
    {
      id: 'credit',
      question: 'Where is your property located?',
      options: [
        { label: 'Within city/Town limits/5 KM', value: 'Within city/Town limits/5 KM', points: 15 },
        { label: 'Within 15 KMs from City/Town', value: 'Within 15 KMs from City/Town', points: 11.25 },
        { label: 'Above 15 KMs from City/Town', value: 'Above 15 KMs from City/Town', points: 7.5 },
        { label: 'Above 50 KMs from Branch/Village/Rural', value: 'Above 50 KMs from Branch/Village/Rural', points: -3.75 },
        { label: 'Slum dwelling', value: 'Slum dwelling', points: -150 },
      ],
    },
    {
      id: 'repayment',
      question: 'What is your CIBIL score?',
      options: [
        { label: 'Above 700', value: 'Above 700', points: 5 },
        { label: 'Between 600 to 700', value: 'Between 600 to 700', points: 2.5 },
        { label: 'Less than 600', value: 'Less than 600', points: -50 },
  
      ],
    },
    {
      id: 'loan',
      question: 'Do you currently pay any EMIs (like personal, vehicle, or housing loans) with a good repayment history?',
      options: [
        { label: 'Good repayment track record over 24 months', value: 'Good repayment track record over 24 months', points: 10 },
        { label: 'Good repayment track record over 12 months and below 24 months', value: 'Good repayment track record over 12 months and below 24 months', points: 7.5 },
        { label: 'Good repayment track record below 12 months', value: 'Good repayment track record below 12 months', points: 5 },
        { label: 'NIL Repayment track/ Repayment track record prior to 5 years', value: 'NIL Repayment track/ Repayment track record prior to 5 years', points: 0 },
      ],
    },
    {
      id: 'property',
      question: 'What is your average monthly income (in INR)?',
      options: [
        { label: 'More than Or Equal to 75000', value: 'More than Or Equal to 75000', points: 15 },
        { label: 'More than 50000 and less than 75000', value: 'More than 50000 and less than 75000', points: 10.5 },
        { label: 'More than 25000 and less than 50000', value: 'More than 25000 and less than 50000', points: 9 },
        { label: 'Less than Or Equal to 25000', value: 'Less than Or Equal to 25000', points: 6 },
      ],
    },
    {
      id: 'city',
      question: 'Approximately what percentage of your income goes toward monthly expenses and commitments?',
      options: [
        { label: 'Expenses/Commitments less than 40% of total income', value: 'Expenses/Commitments less than 40% of total income', points: 15 },
        { label: 'Expenses/Commitments between 41% to 50% of total income', value: 'Expenses/Commitments between 41% to 50% of total income', points: 10.5},
        { label: 'Expenses/Commitments between 51% to 60% of total income', value: 'Expenses/Commitments between 51% to 60% of total income', points: 9 },
       { label: 'Expenses/Commitments more than 60% of total income', value: 'Expenses/Commitments more than 60% of total income', points: 6 },

      ],
    },
    {
      id: 'city',
      question: 'Who contributes to your family’s income?',
      options: [
        { label: 'Both Husband and Wife ', value: 'Both Husband and Wife ', points: 5 },
        { label: 'Husband or Wife', value: 'Husband or Wife', points: 3.25 },
        { label: 'Both Husband and Wife along with other family members(Parent or unmarried siblings)', value: 'Both Husband and Wife along with other family members(Parent or unmarried siblings)', points: -2.5 },
       
      ],
    },
      {
      id: 'city',
      question: 'What is your age group?',
      options: [
        { label: 'Less than 30  ', value: 'Less than 30 ', points: 3 },
        { label: 'More than 30 but less than 40', value: 'More than 30 but less than 40', points: 2.1 },
        { label: 'More than 40 but less than 50', value: 'More than 40 but less than 50', points: 1.8 },
         { label: 'More than 50', value: 'More than 50', points: 0.9 },
      ],
    },
        {
      id: 'city',
      question: 'How many years of experience do you have in your current job or business?',
      options: [
        { label: 'More than 2 years', value: 'More than 2 years', points: 2 },
        { label: 'Less than 2 years', value: 'Less than 2 years', points: 1 },
        { label: 'No evidence', value: 'No evidence', points: -0.2 },
        
      ],
    },
        {
      id: 'city',
      question: 'Please select your employment type or income source',
      options: [
        { label: 'Salaried-PSU/Govt / Public limited', value: 'Salaried-PSU/Govt / Public limited', points: 10 },
        { label: 'Business-As per IT returns', value: 'Business-As per IT returns', points: 10 },
        { label: 'Assessed Income - PD Based', value: 'Assessed Income - PD Based', points: 7.5 },
         { label: 'Salaried-Private company', value: 'Salaried-Private company', points: 7.5 },
         { label: 'Cash Salary', value: 'Cash Salary', points: 1 },
         { label: 'Assessed Income with no proof', value: 'Assessed Income with no proof', points: -5 },
      ],
    },
  ];

    // Section groups
  const sectionTitles = [
    { range: [0, 9], title: "Property Assessment" },
    { range: [10, 12], title: "Income Assessment" },
    { range: [13, 14], title: "Demographic Assessment" },
  ];


  const currentSection =
  sectionTitles.find((s) => currentStep >= s.range[0] && currentStep <= s.range[1])?.title || "";


  // ✅ maxScore (avoid crash if options missing)
  const maxScore = questions.reduce((sum, q) => {
    if (q.options && q.options.length > 0) {
      return sum + Math.max(...q.options.map((o) => o.points));
    }
    return sum ; // default max for text type
  }, 0);

  const handleSelect = (id, option) => {
    setResponses((prev) => ({ ...prev, [id]: option }));
    const otherScores = Object.entries(responses)
      .filter(([key]) => key !== id)
      .reduce((sum, [, opt]) => sum + (opt?.points || 0), 0);
    setScore(otherScores + option.points);
  };

  const handleManualInput = (id, value, logicFn) => {
    const points = logicFn(value);
    const updated = { value, points };
    setResponses((prev) => ({ ...prev, [id]: updated }));
    const total = Object.entries({ ...responses, [id]: updated }).reduce(
      (sum, [, opt]) => sum + (opt?.points || 0),
      0
    );
    setScore(total);
  };

  const nextStep = () => {
    if (currentStep < questions.length - 1) setCurrentStep(currentStep + 1);
    else setResult(true);
  };

  const prevStep = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  const gaugePercent = Math.min(score / maxScore, 1);

  return (
    <section id = "scorecard" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div className="text-center mb-10">
          <div className="flex justify-center mb-6">
            <div className="bg-purple-100 p-4 rounded-2xl">
              <ClipboardDocumentCheckIcon className="h-12 w-12 text-purple-600" />
            </div>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Your Journey to Home Ownership Starts Here</h2>
          <p className="text-gray-600 text-lg">Take our quick eligibility test and see how close you are to your dream home.</p>
        </motion.div>

     <div className="flex justify-center mb-10">
        <div style={{ width: "500px", position: 'relative' }}> 
            {/* Gauge */}
            <GaugeChart
              id="score-meter"
              nrOfLevels={20}
              colors={['#FF4E42', '#FFA500', '#F8D03E', '#00C49F']}
              arcsLength={[0.25, 0.25, 0.25, 0.25]}
              percent={gaugePercent}
              arcPadding={0.02}
              textColor="#111"
              needleColor="#111"
              hideText={true}
            />

            {/* Center custom display (keeps your logic intact but shows a nice number) */}
            <div style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              pointerEvents: 'none'
            }}>
              {/* <div className="text-4xl font-extrabold text-[#283079]">{Math.round(gaugePercent * 100)}</div> */}
              <div className="text-sm text-gray-600">Eligibility Score</div>
            </div>

            {/* Static scale labels & ticks (0,25,50,75,100) */}
            <div style={{ marginTop: 12 }}>
              <div className="flex items-center justify-between w-full text-xs text-gray-700 font-medium px-2">
                {/* We use equal-width segments to visually match the arcs */}
                <div className="flex-1 flex flex-col items-center">
                  <div className="w-full h-3 rounded-t-md" style={{ background: '#FF4E42', opacity: 0.9 }} />
                  <div className="mt-2">0</div>
                </div>
                <div className="flex-1 flex flex-col items-center px-2">
                  <div className="w-full h-3 rounded-t-md" style={{ background: '#FFA500', opacity: 0.9 }} />
                  <div className="mt-2">25</div>
                </div>
                <div className="flex-1 flex flex-col items-center px-2">
                  <div className="w-full h-3 rounded-t-md" style={{ background: '#F8D03E', opacity: 0.9 }} />
                  <div className="mt-2">50</div>
                </div>
                <div className="flex-1 flex flex-col items-center pl-2">
                  <div className="w-full h-3 rounded-t-md" style={{ background: '#00C49F', opacity: 0.9 }} />
                  <div className="mt-2">75</div>
                </div>
                <div style={{ width: 0 }} /> {/* keep spacing consistent */}
              </div>
            </div>
          </div>
     </div>

      {/* ✅ Modern Progress Bar Section */}
            <div className="mb-8">
              <div className="flex justify-between text-sm font-medium text-gray-700 mb-2">
                <span>Question {currentStep + 1} of {questions.length}</span>
                <span className="text-indigo-700">
                  {Math.round(((currentStep + 1) / questions.length) * 100)}% Complete
                </span>
              </div>

              <div className="w-full bg-gray-200 rounded-full h-2.5 shadow-inner">
                <div
                  className="h-2.5 rounded-full bg-indigo-700 transition-all duration-500 ease-out"
                  style={{
                    width: `${((currentStep + 1) / questions.length) * 100}%`,
                  }}
                ></div>
              </div>
            </div>

             {/* 👇 Section title below progress bar (right side) */}
            {currentSection && (
              <div className="text-right">
                <span className="inline-block bg-indigo-100 text-indigo-800 px-6 py-3 rounded-full text-lg font-bold shadow-sm">
                  {currentSection}
                </span>
              </div>
            )}

        {!result ? (
          <div className="bg-white shadow-lg rounded-3xl p-8">

            
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              {questions[currentStep].question}
            </h3>

            {/* ✅ Conditionally render multiple choice or manual input */}
            {questions[currentStep].options ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {questions[currentStep].options.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => handleSelect(questions[currentStep].id, option)}
                    className={`p-4 border-2 rounded-xl text-left transition-all ${
                      responses[questions[currentStep].id]?.value === option.value
                        ? 'border-primary-600 bg-primary-50 text-primary-700'
                        : 'border-gray-200 hover:border-primary-300 hover:bg-primary-50'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            ) : (
              <div className="mt-6">
                <input
                  type="text"
                  placeholder="Type your answer..."
                  className="w-full border-2 border-gray-200 rounded-xl p-3 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  onChange={(e) =>
                    handleManualInput(
                      questions[currentStep].id,
                      e.target.value,
                      questions[currentStep].pointsLogic
                    )
                  }
                />
              </div>
            )}

            <div className="flex justify-between items-center mt-8">
              <button
                onClick={prevStep}
                disabled={currentStep === 0}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold ${
                  currentStep === 0
                    ? 'text-gray-400 cursor-not-allowed'
                    : 'text-gray-700 hover:text-primary-600'
                }`}
              >
                <ArrowLeftIcon className="h-5 w-5" />
                <span>Previous</span>
              </button>

              <button
                onClick={nextStep}
                disabled={!responses[questions[currentStep].id]}
                className={`flex items-center space-x-2 px-8 py-3 rounded-lg font-semibold ${
                  !responses[questions[currentStep].id]
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-[#ed2636] hover:bg-primary-700 text-white'
                }`}
              >
                <span>{currentStep === questions.length - 1 ? 'Get Result' : 'Next'}</span>
                <ArrowRightIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
        ) : (
          <div className="bg-gradient-to-br from-primary-50 to-purple-50 rounded-3xl p-10 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-600 rounded-full mb-6">
              <CheckCircleIcon className="h-10 w-10 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Assessment Complete!</h2>
            <div className="text-6xl font-bold text-primary-600 mb-4">
              {/* {Math.round(score)} / {maxScore} */}
            </div>

            {/* 🆕 New Button (different modal style) */}
            <div className="flex justify-center mb-4">
              <button
                onClick={() => setShowCreditScoreModal2(true)}
                className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-6 py-3 rounded-full shadow transition-transform hover:scale-105"
              >
                Check Credit Score
              </button>
            </div>

            <p className="text-lg text-gray-700">Your eligibility score is based on your inputs.</p>
          </div>
        )}

        {/* ✅ Free credit score model */}
         <CreditScoreModal
            isOpen={showCreditScoreModal}
            onClose={() => setShowCreditScoreModal(false)}
          />
           <CreditScoreModal2
        isOpen={showCreditScoreModal2}
        onClose={() => setShowCreditScoreModal2(false)}
      />

      </div>
          
    </section>
    
  );
  
};

export default EligibilityScorecardSection;
