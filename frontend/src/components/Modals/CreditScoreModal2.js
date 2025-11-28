import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { validateMobile } from "../../utils/helpers";

const CreditScoreModal2 = ({ isOpen, onClose }) => {
  const [otpSent, setOtpSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
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

  const handleSendOtp = () => {
    if (!validateMobile(mobile)) {
      toast.error("Enter a valid mobile number before requesting OTP");
      return;
    }
    setOtpSent(true);
    toast.success("OTP sent successfully!");
  };

  const onSubmit = () => {
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
    }, 1000);
  };

  const handleClose = () => {
    reset();
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
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      >
        <motion.div
          initial={{ scale: 0.9, y: 50, opacity: 0 }}
          animate={{
            scale: 1,
            y: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: 300, damping: 20 },
          }}
          exit={{ opacity: 0, scale: 0.9, y: 50 }}
          className="relative w-full max-w-lg bg-gradient-to-br from-indigo-50 via-white to-purple-50 rounded-3xl shadow-2xl overflow-hidden border border-indigo-100"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold">Instant Credit Check</h2>
            <button onClick={handleClose} className="p-2 hover:bg-white/10 rounded-lg">
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>

          {/* Body */}
          <div className="p-6 max-h-[75vh] overflow-y-auto">
            {!mockScore ? (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Full Name */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name (as per PAN) *
                  </label>
                  <input
                    {...register("name", { required: "Name is required" })}
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500"
                    placeholder="Enter full name"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                  )}
                </div>

                {/* Mobile */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Mobile Number *
                  </label>
                  <div className="flex space-x-2">
                    <input
                      {...register("mobile", {
                        required: "Mobile is required",
                        validate: (v) => validateMobile(v) || "Enter valid 10-digit number",
                      })}
                      className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500"
                      placeholder="Enter mobile"
                      maxLength={10}
                    />
                    <button
                      type="button"
                      onClick={handleSendOtp}
                      className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
                    >
                      {otpSent ? "Resend" : "Send OTP"}
                    </button>
                  </div>
                  {errors.mobile && (
                    <p className="text-red-500 text-sm mt-1">{errors.mobile.message}</p>
                  )}
                </div>

                {/* OTP */}
                {otpSent && (
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Enter OTP
                    </label>
                    <input
                      {...register("otp", { required: "OTP required" })}
                      className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500"
                      placeholder="Enter 1234"
                      maxLength={4}
                    />
                  </div>
                )}

                {/* Profession */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Profession *
                  </label>
                  <select
                    {...register("profession", { required: "Select profession" })}
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500"
                  >
                    <option value="">Select</option>
                    <option value="salaried">Salaried</option>
                    <option value="self-employed">Self-Employed</option>
                  </select>
                  {errors.profession && (
                    <p className="text-red-500 text-sm mt-1">{errors.profession.message}</p>
                  )}
                </div>

                {/* City */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    City *
                  </label>
                  <input
                    {...register("city", { required: "City required" })}
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500"
                    placeholder="Enter city"
                  />
                </div>

                {/* State */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    State *
                  </label>
                  <select
                    {...register("state", { required: "State required" })}
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500"
                  >
                    <option value="">Select</option>
                    <option value="Tamil Nadu">Tamil Nadu</option>
                    <option value="Karnataka">Karnataka</option>
                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                    <option value="Telangana">Telangana</option>
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg hover:opacity-95 transition-all"
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>
              </form>
            ) : (
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full mx-auto flex items-center justify-center">
                  ✅
                </div>
                <h3 className="text-2xl font-bold text-gray-800">
                  Thank You for Enquiring!
                </h3>
                <p className="text-gray-600">
                  Your credit score will be shared to your WhatsApp soon.
                </p>
                <button
                  onClick={handleClose}
                  className="mt-6 w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg"
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CreditScoreModal2;
