"use client";

import type React from "react";

import { useState } from "react";

export default function BookParcelPage() {
  const [formData, setFormData] = useState({
    senderName: "",
    senderPhone: "",
    senderEmail: "",
    senderAddress: "",
    receiverName: "",
    receiverPhone: "",
    receiverEmail: "",
    receiverAddress: "",
    parcelType: "",
    weight: "",
    dimensions: "",
    deliveryType: "",
    codAmount: "",
    specialInstructions: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("[v0] Book Parcel Form Data:", formData);
    alert("Parcel booking submitted! Check console for data.");
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Book a Parcel
            </h1>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Schedule your parcel pickup and delivery with just a few clicks
            </p>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Sender Information */}
            <div className="bg-white p-8 rounded-lg shadow-sm border">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Sender Information
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="senderName"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="senderName"
                    name="senderName"
                    required
                    value={formData.senderName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                    placeholder="Enter sender's full name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="senderPhone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="senderPhone"
                    name="senderPhone"
                    required
                    value={formData.senderPhone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                    placeholder="Enter phone number"
                  />
                </div>
                <div>
                  <label
                    htmlFor="senderEmail"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="senderEmail"
                    name="senderEmail"
                    value={formData.senderEmail}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                    placeholder="Enter email address"
                  />
                </div>
                <div>
                  <label
                    htmlFor="senderAddress"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Pickup Address *
                  </label>
                  <input
                    type="text"
                    id="senderAddress"
                    name="senderAddress"
                    required
                    value={formData.senderAddress}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                    placeholder="Enter pickup address"
                  />
                </div>
              </div>
            </div>

            {/* Receiver Information */}
            <div className="bg-white p-8 rounded-lg shadow-sm border">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Receiver Information
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="receiverName"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="receiverName"
                    name="receiverName"
                    required
                    value={formData.receiverName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                    placeholder="Enter receiver's full name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="receiverPhone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="receiverPhone"
                    name="receiverPhone"
                    required
                    value={formData.receiverPhone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                    placeholder="Enter phone number"
                  />
                </div>
                <div>
                  <label
                    htmlFor="receiverEmail"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="receiverEmail"
                    name="receiverEmail"
                    value={formData.receiverEmail}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                    placeholder="Enter email address"
                  />
                </div>
                <div>
                  <label
                    htmlFor="receiverAddress"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Delivery Address *
                  </label>
                  <input
                    type="text"
                    id="receiverAddress"
                    name="receiverAddress"
                    required
                    value={formData.receiverAddress}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                    placeholder="Enter delivery address"
                  />
                </div>
              </div>
            </div>

            {/* Parcel Details */}
            <div className="bg-white p-8 rounded-lg shadow-sm border">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Parcel Details
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="parcelType"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Parcel Type *
                  </label>
                  <select
                    id="parcelType"
                    name="parcelType"
                    required
                    value={formData.parcelType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                  >
                    <option value="">Select parcel type</option>
                    <option value="documents">Documents</option>
                    <option value="electronics">Electronics</option>
                    <option value="clothing">Clothing</option>
                    <option value="food">Food Items</option>
                    <option value="fragile">Fragile Items</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="weight"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Weight (kg) *
                  </label>
                  <input
                    type="number"
                    id="weight"
                    name="weight"
                    required
                    step="0.1"
                    min="0.1"
                    value={formData.weight}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                    placeholder="Enter weight in kg"
                  />
                </div>
                <div>
                  <label
                    htmlFor="dimensions"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Dimensions (L x W x H cm)
                  </label>
                  <input
                    type="text"
                    id="dimensions"
                    name="dimensions"
                    value={formData.dimensions}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                    placeholder="e.g., 30 x 20 x 10"
                  />
                </div>
                <div>
                  <label
                    htmlFor="deliveryType"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Delivery Type *
                  </label>
                  <select
                    id="deliveryType"
                    name="deliveryType"
                    required
                    value={formData.deliveryType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                  >
                    <option value="">Select delivery type</option>
                    <option value="standard">Standard (2-3 days)</option>
                    <option value="express">Express (1-2 days)</option>
                    <option value="same-day">Same Day</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="codAmount"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    COD Amount (BDT)
                  </label>
                  <input
                    type="number"
                    id="codAmount"
                    name="codAmount"
                    min="0"
                    value={formData.codAmount}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                    placeholder="Enter COD amount (optional)"
                  />
                </div>
                <div>
                  <label
                    htmlFor="specialInstructions"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Special Instructions
                  </label>
                  <textarea
                    id="specialInstructions"
                    name="specialInstructions"
                    rows={3}
                    value={formData.specialInstructions}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none resize-none"
                    placeholder="Any special handling instructions..."
                  ></textarea>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-primary text-white py-4 px-12 rounded-lg font-semibold text-lg hover:bg-primary-hover transition duration-200"
              >
                Book Parcel Now
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
