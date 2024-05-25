import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

function InvoiceTemplate({ data }) {
    const invoiceRef = useRef();

    const calculateBalanceDue = () => {
        const total = data.items.reduce((sum, item) => sum + parseFloat(item.total), 0);
        const balanceDue = total - parseFloat(data.discount || 0) - parseFloat(data.advance || 0) - parseFloat(data.amountPaid || 0) + parseFloat(data.shipping || 0);
        return balanceDue.toFixed(2);
    };

    const logoUrl = data.logo ? URL.createObjectURL(data.logo) : null;

    const handlePrint = useReactToPrint({
        content: () => invoiceRef.current,
    });

    return (
        <div>
            <div ref={invoiceRef} className="max-w-4xl p-6 mx-auto bg-gray-100 rounded-lg shadow-md">
                <div className="flex items-center justify-between pb-4 mb-4 border-b">
                    {logoUrl && <img src={logoUrl} alt="Logo" className="h-16" />}
                    <div>
                        <h2 className="text-xl font-bold">{data.businessName}</h2>
                        <p className="text-lg">INVOICE NO: #{data.invoiceNumber}</p>
                    </div>
                </div>
                <div className="flex justify-between mb-6">
                    <div>
                        <h3 className="text-lg font-bold">Invoice To</h3>
                        <p className="text-gray-700">{data.invoiceTo}</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold">Bill To</h3>
                        <p className="text-gray-700">{data.billTo}</p>
                    </div>
                </div>
                <table className="w-full mb-6 border-collapse">
                    <thead>
                        <tr>
                            <th className="px-4 py-2 bg-gray-200 border">Description</th>
                            <th className="px-4 py-2 bg-gray-200 border">Price ({data.currency})</th>
                            <th className="px-4 py-2 bg-gray-200 border">Quantity</th>
                            <th className="px-4 py-2 bg-gray-200 border">VAT (%)</th>
                            <th className="px-4 py-2 bg-gray-200 border">Total ({data.currency})</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.items.map((item, index) => (
                            <tr key={index}>
                                <td className="px-4 py-2 border">{item.description}</td>
                                <td className="px-4 py-2 border">{item.price} {data.currency}</td>
                                <td className="px-4 py-2 border">{item.quantity}</td>
                                <td className="px-4 py-2 border">{item.vat}</td>
                                <td className="px-4 py-2 border">{item.total} {data.currency}</td>
                            </tr>
                        ))}
                        <tr>
                            <td colSpan="4" className="px-4 py-2 font-semibold text-right border">Discount</td>
                            <td className="px-4 py-2 border">{data.discount || 0} {data.currency}</td>
                        </tr>
                        <tr>
                            <td colSpan="4" className="px-4 py-2 font-semibold text-right border">Shipping</td>
                            <td className="px-4 py-2 border">{data.shipping || 0} {data.currency}</td>
                        </tr>
                        <tr>
                            <td colSpan="4" className="px-4 py-2 font-semibold text-right border">Advance</td>
                            <td className="px-4 py-2 border">{data.advance || 0} {data.currency}</td>
                        </tr>
                        <tr>
                            <td colSpan="4" className="px-4 py-2 font-semibold text-right border">Amount Paid</td>
                            <td className="px-4 py-2 border">{data.amountPaid || 0} {data.currency}</td>
                        </tr>
                        <tr>
                            <td colSpan="4" className="px-4 py-2 font-bold text-right border">Total Due</td>
                            <td className="px-4 py-2 font-bold border">{calculateBalanceDue()} {data.currency}</td>
                        </tr>
                    </tbody>
                </table>
                <div className="flex justify-between">
                    <div>
                        <h3 className="text-lg font-bold">Important Note</h3>
                        <p className="text-gray-700">{data.importantNote}</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold">Payment Info</h3>
                        <p className="text-gray-700">
                        This payment made by {data.paymentMethod}</p>
                    </div>
                </div>
            </div>
            <button onClick={handlePrint} className="px-4 py-2 mt-4 text-white bg-blue-500 rounded">Download Invoice</button>
        </div>
    );
}

export default InvoiceTemplate;
