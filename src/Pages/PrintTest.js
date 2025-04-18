import React from "react";

function PrintTest() {
  const invoiceHTML = `
    <html>
      <head>
        <title>Invoice</title>
        <style>
          body { font-family: sans-serif; padding: 20px; }
          table { border-collapse: collapse; margin-top: 20px; width: 100%; }
          table, th, td { border: 1px solid black; padding: 10px; }
        </style>
      </head>
      <body>
        <h2>🧾 Invoice</h2>
        <p><strong>Order ID:</strong> #123456</p>
        <p><strong>Customer:</strong> Rahul Sharma</p>
        <p><strong>Date:</strong> April 17, 2025</p>
        <table>
          <thead>
            <tr><th>Item</th><th>Qty</th><th>Price</th></tr>
          </thead>
          <tbody>
            <tr><td>Tomatoes</td><td>2 Kg</td><td>₹40</td></tr>
            <tr><td>Potatoes</td><td>1 Kg</td><td>₹20</td></tr>
          </tbody>
        </table>
        <h3>Total: ₹60</h3>
      </body>
    </html>
  `;

  const handlePrint = () => {
    console.log("🖱️ clicked print");

    if (window.electronAPI && typeof window.electronAPI.triggerPrint === "function") {
      console.log("📤 triggerPrint is a function");
      window.electronAPI.triggerPrint(invoiceHTML);
    } else {
      console.warn("⚠️ window.electronAPI not available, fallback to window.print()");
      const newWindow = window.open('', '_blank');
      newWindow.document.write(invoiceHTML);
      newWindow.document.close();
      newWindow.print();
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      {/* <h1 className="text-white">🛍️ Infinity Invoice Tester</h1> */}
      <button onClick={handlePrint} className="text-white p-1 px-2 rounded-lg border-white border-2 hover:scale-105">
        🖨️ Print Invoice
      </button>
    </div>
  );
}

export default PrintTest;
