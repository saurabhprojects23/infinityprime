// import React from "react";

// function PrintTest() {
//   const invoiceHTML = `
//     <div style="font-family: sans-serif; padding: 20px;">
//       <h2>🧾 Invoice</h2>
//       <p><strong>Order ID:</strong> #123456</p>
//       <p><strong>Customer:</strong> Rahul Sharma</p>
//       <p><strong>Date:</strong> April 17, 2025</p>
//       <table border="1" cellPadding="10" cellSpacing="0" style="margin-top: 20px;">
//         <thead>
//           <tr><th>Item</th><th>Qty</th><th>Price</th></tr>
//         </thead>
//         <tbody>
//           <tr><td>Tomatoes</td><td>2 Kg</td><td>₹40</td></tr>
//           <tr><td>Potatoes</td><td>1 Kg</td><td>₹20</td></tr>
//         </tbody>
//       </table>
//       <h3>Total: ₹60</h3>
//     </div>
//   `;

//   const handlePrint = () => {
//     if (window.electronAPI) {
//       window.electronAPI.triggerPrint(invoiceHTML);
//     } else {
//       const printWindow = window.open('', '_blank');
//       printWindow.document.write(invoiceHTML);
//       printWindow.document.close();
//       printWindow.print();
//     }
//   };

//   return (
//     <div className="App" style={{ padding: '20px' }}>
//       <h1 className="text-white">🛍️ Infinity Invoice Tester</h1>
//       <button onClick={handlePrint} className="text-white border p-1 px-2 rounded-lg border-green-400">
//         🖨️ Print Invoice
//       </button>
//     </div>
//   );
// }

// export default PrintTest;
