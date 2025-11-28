import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import {
  XMarkIcon,
  StarIcon,
  CheckCircleIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";
import { validateMobile } from "../../utils/helpers";

const CreditScoreModal = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [mockScore, setMockScore] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm();

  const mobile = watch("mobile");
  const otp = watch("otp");

  // Handle fake OTP sending
  const handleSendOtp = () => {
    if (!validateMobile(mobile)) {
      toast.error("Please enter a valid mobile number before requesting OTP");
      return;
    }
    setOtpSent(true);
    toast.success("OTP sent successfully!");
  };

  // Handle form submit
  const onSubmit = (data) => {
    if (!otpSent) {
      toast.error("Please verify your mobile number with OTP");
      return;
    }
    if (otp !== "1234") {
      toast.error("Invalid OTP. Try again with 1234 (demo)");
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setMockScore(true);
      setIsSubmitting(false);
      toast.success("Form submitted successfully!");
    }, 1500);
  };

  const handleClose = () => {
    reset();
    setStep(1);
    setOtpSent(false);
    setMockScore(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[9999] overflow-y-auto"
      >
        <div className="flex min-h-screen items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={handleClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
              transition: { type: "spring", stiffness: 300, damping: 25 },
            }}
            exit={{ opacity: 0, scale: 0.9, y: 50, transition: { duration: 0.2 } }}
            className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-yellow-500 to-orange-600 text-white p-6 relative">
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-white/80 hover:text-white p-2 rounded-lg hover:bg-white/10"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
              <div className="flex items-center space-x-3">
                <div className="bg-white/20 p-3 rounded-xl">
                  <StarIcon className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Check Your Credit Score</h3>
                  <p className="text-white/90">
                    Obtain the basic details and receive the CIBIL score on your mobile
                  </p>
                </div>
              </div>
            </div>

            {/* Body */}
            <div className="p-6">
              <AnimatePresence mode="wait">
                {!mockScore ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    className="space-y-6"
                  >
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Profession */}
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Your Profession *
                          </label>
                          <select
                            {...register("profession", { required: "Select your profession" })}
                            className="input-primary"
                          >
                            <option value="">Select</option>
                            <option value="salaried">Salaried</option>
                            <option value="self-employed">Self Employed</option>
                          </select>
                          {errors.profession && (
                            <p className="text-red-500 text-sm mt-1">
                              {errors.profession.message}
                            </p>
                          )}
                        </div>

                        {/* Purpose */}
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Purpose to know your Credit Score *
                          </label>
                          <select
                            {...register("purpose", { required: "Select purpose" })}
                            className="input-primary"
                          >
                            <option value="">Select</option>
                            <option>Purchase of new property</option>
                            <option>Purchase of an under-construction property</option>
                            <option>Purchase of an existing property</option>
                            <option>Self-construction on an existing plot</option>
                            <option>Purchase of a Plot & Construction (Composite loan)</option>
                            <option>Repair/Renovation/Extension</option>
                            <option>Take over Loan</option>
                            <option>Refinance</option>
                            <option>Loan against property (LAP)</option>
                          </select>
                          {errors.purpose && (
                            <p className="text-red-500 text-sm mt-1">
                              {errors.purpose.message}
                            </p>
                          )}
                        </div>

                        {/* Full Name */}
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Full Name (as per PAN card) *
                          </label>
                          <input
                            {...register("name", { required: "Name is required" })}
                            className={`input-primary ${errors.name ? "border-red-500" : ""}`}
                            placeholder="Enter full name"
                          />
                          {errors.name && (
                            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                          )}
                        </div>

                        {/* Mobile + OTP */}
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Mobile Number *
                          </label>
                          <div className="flex space-x-2">
                            <input
                              {...register("mobile", {
                                required: "Mobile number is required",
                                validate: (value) =>
                                  validateMobile(value) || "Enter valid 10-digit number",
                              })}
                              className={`input-primary flex-1 ${
                                errors.mobile ? "border-red-500" : ""
                              }`}
                              placeholder="Enter mobile"
                              maxLength={10}
                            />
                            <button
                              type="button"
                              onClick={handleSendOtp}
                              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                            >
                              {otpSent ? "Resend" : "Send OTP"}
                            </button>
                          </div>
                          {errors.mobile && (
                            <p className="text-red-500 text-sm mt-1">
                              {errors.mobile.message}
                            </p>
                          )}
                        </div>

                        {otpSent && (
                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                              Enter OTP
                            </label>
                            <input
                              {...register("otp", { required: "Enter the OTP" })}
                              className="input-primary"
                              placeholder="Enter 1234"
                              maxLength={4}
                            />
                          </div>
                        )}

                        {/* City */}
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            City *
                          </label>
                          <input
                            {...register("city", { required: "City is required" })}
                            className={`input-primary ${errors.city ? "border-red-500" : ""}`}
                            placeholder="Enter your city"
                          />
                          {errors.city && (
                            <p className="text-red-500 text-sm mt-1">{errors.city.message}</p>
                          )}
                        </div>

                        {/* State */}
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            State *
                          </label>
                          <select
                            {...register("state", { required: "Select state" })}
                            className="input-primary"
                          >
                            <option value="">Select State</option>
                            <option value="Tamil Nadu">Tamil Nadu</option>
                            <option value="Karnataka">Karnataka</option>
                            <option value="Andhra Pradesh">Andhra Pradesh</option>
                            <option value="Telangana">Telangana</option>
                          </select>
                          {errors.state && (
                            <p className="text-red-500 text-sm mt-1">{errors.state.message}</p>
                          )}
                        </div>
                      </div>

                      <div className="bg-blue-50 rounded-lg p-4">
                        <div className="flex items-start space-x-3">
                          <InformationCircleIcon className="h-5 w-5 text-blue-600 mt-0.5" />
                          <div className="text-sm text-blue-800">
                            <p className="font-medium">Your information is secure</p>
                            <p>
                              We use bank-grade encryption. This check will not impact your credit
                              score.
                            </p>
                          </div>
                        </div>
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full btn-primary"
                      >
                        {isSubmitting ? "Submitting..." : "Submit"}
                      </button>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div
                    key="thankyou"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center"
                  >
                    <div className="mb-8">
                      <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
                        <CheckCircleIcon className="h-10 w-10 text-green-600" />
                      </div>
                      <h4 className="text-2xl font-bold text-gray-900 mb-4">
                        Thank You for Enquiring Aham Housing Finance!
                      </h4>
                      <p className="text-gray-700 text-lg">
                        We will update your Credit score to your WhatsApp soon.
                      </p>
                      <p className="text-sm text-gray-500 mt-2">
                        (Tracking through Google Tag Manager)
                      </p>
                    </div>
                    <button onClick={handleClose} className="btn-primary w-full">
                      Close
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CreditScoreModal;
