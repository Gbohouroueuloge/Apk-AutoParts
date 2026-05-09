import { useEffect, useState } from 'react';
import { CheckCircle2, Clock, XCircle, Truck, FileText, RefreshCw, Trash2, X, Star, CheckCircle, MessageSquare, Ban, Shield, UserCog, Save } from 'lucide-react';
import Modal from "./Modals";


const FormField = ({ label, type = "text", placeholder, value, onChange, required = false }) => (
  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-700 dark:text-slate-300 mb-2">
      {label}
      {required && <span className="text-red-500 pl-0.5">*</span>}
    </label>
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      className="w-full px-4 py-2.5 bg-gray-50 dark:bg-slate-900 border border-gray-300 dark:border-slate-600 rounded-lg text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
    />
  </div>
);