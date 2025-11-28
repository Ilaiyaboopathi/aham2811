// ===== Imports =====
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import axios from 'axios';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import routes from './routes/index.js';

// ===== Configuration =====
dotenv.config();
const app = express();
const PORT = process.env.PORT || 8001;

// ===== Temporary in-memory storage =====
global.storage = {
  leads: [],
  emiCalculations: [],
  eligibilityScores: [],
  newsletterSubscriptions: []
};

// ===== Middleware =====
app.set('trust proxy', true); // for proxies / load balancers
app.use(helmet());

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests
});
app.use(limiter);

app.use(cors({ origin: true, credentials: true }));
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: true }));

// ===== Routes =====
app.use('/api', routes);

// ===== EMI Calculation Endpoint =====
app.post('/api/emi/calculate', (req, res) => {
  const { loan_amount, interest_rate, tenure_months } = req.body;
  console.log('Received EMI request:', { loan_amount, interest_rate, tenure_months });

  if (!loan_amount || !interest_rate || !tenure_months || loan_amount <= 0 || interest_rate <= 0 || tenure_months <= 0) {
    return res.status(400).json({ success: false, message: 'Invalid input parameters' });
  }

  try {
    const monthlyRate = interest_rate / 12 / 100;
    const emi = (loan_amount * monthlyRate * Math.pow(1 + monthlyRate, tenure_months)) / (Math.pow(1 + monthlyRate, tenure_months) - 1);
    const total_amount = emi * tenure_months;
    const total_interest = total_amount - loan_amount;

    const result = {
      monthly_emi: Math.round(emi),
      total_amount: Math.round(total_amount),
      total_interest: Math.round(total_interest)
    };

    global.storage.emiCalculations.push({
      ...result,
      loan_amount,
      interest_rate,
      tenure_months,
      timestamp: new Date().toISOString()
    });

    res.json({ success: true, data: result });
  } catch (error) {
    console.error('EMI Calculation Error:', error.message);
    res.status(500).json({ success: false, message: 'Failed to calculate EMI', error: error.message });
  }
});

// ===== Health Check =====
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    service: 'AHAM Housing Finance API'
  });
});

// ===== Error Handling =====
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: 'Something went wrong!',
    error: process.env.NODE_ENV === 'development' ? err.message : {}
  });
});

// ===== 404 Handler =====
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found'
  });
});

// ===== Start Server =====
const startServer = async () => {
  try {
    console.log('📦 Using in-memory storage (temporary)');
    app.listen(PORT, '0.0.0.0', () => {
      console.log(`🚀 AHAM Housing Finance API running on port ${PORT}`);
      console.log(`📊 Environment: ${process.env.NODE_ENV || 'development'}`);
    });
  } catch (error) {
    console.error('❌ Failed to start server:', error);
    process.exit(1);
  }
};

startServer();

// ===== Axios API client (export for frontend services) =====
const api = axios.create({
  baseURL: '/api', // relative URL for live proxy
});

export const emiAPI = {
  calculate: (data) => api.post('/emi/calculate', data),
};

export default app;
