import React, { useState } from "react";
import "../scss/css/investment.css";
const InvestmentCalculator = () => {
  const [principal, setPrincipal] = useState(""); 
  const [rate, setRate] = useState("");
  const [time, setTime] = useState("");
  const [result, setResult] = useState(null);

  const calculateInvestment = () => {
    const P = parseFloat(principal);
    const R = parseFloat(rate) / 100;
    const T = parseFloat(time);
    if (!P || !R || !T) return;
  
    let amount = P;
    for (let i = 0; i < T; i++) {
        amount = amount + amount * R;
    }
    
    setResult(amount.toFixed(2));
  };

  return (
    <div className="investment-container">
      <h2>Investment Calculator</h2>

      <div style={{ marginBottom: "10px" }}>
        <input
          type="number"
          placeholder="Principal Amount (₹)"
          value={principal}
          onChange={(e) => setPrincipal(e.target.value)}
          style={{ width: "100%", padding: "8px" }}
        />
      </div>

      <div style={{ marginBottom: "10px" }}>
        <input
          type="number"
          placeholder="Annual Interest Rate (%)"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
          style={{ width: "100%", padding: "8px" }}
        />
      </div>

      <div style={{ marginBottom: "10px" }}>
        <input
          type="number"
          placeholder="Time (years)"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          style={{ width: "100%", padding: "8px" }}
        />
      </div>

      <button 
        onClick={calculateInvestment} 
        style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
      >
        Calculate
      </button>

      {result && (
        <h3>Future Value: ₹{parseFloat(result).toLocaleString("en-IN")}</h3>
      )}

      <div style={{ marginTop: "20px", fontSize: "14px", color: "#555" }}>
        <strong>Example:</strong>  
            Principal: ₹1,00,000 | Rate: 7% | Time: 5 years
      </div>
    </div>
  );
};

export default InvestmentCalculator;