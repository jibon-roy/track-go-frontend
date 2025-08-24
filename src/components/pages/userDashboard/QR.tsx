"use client";

import React from "react";
import QRCode from "react-qr-code";

const QR = () => {
  const value = "https://example.com";
  return (
    <div>
      <div
        style={{
          height: "auto",
          margin: "0 auto",
          maxWidth: 200,
          width: "100%",
        }}
      >
        <QRCode
          size={256}
          style={{ height: "auto", maxWidth: "100%", width: "100%" }}
          value={value}
          viewBox={`0 0 280 280`}
        />
      </div>

      <div className="text-center text-gray-500 mt-10">
        Scan to track your parcel.
      </div>
    </div>
  );
};

export default QR;
