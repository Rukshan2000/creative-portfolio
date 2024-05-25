import React, { useState } from 'react';

function InvoiceForm({ onGenerateInvoice }) {
    const [formState, setFormState] = useState({
        logo: null,
        businessName: '',
        invoiceNumber: '',
        invoiceTo: '',
        billTo: '',
        date: '',
        paymentMethod: '',
        currency: 'LKR',
        items: [{ description: '', price: '', quantity: '', vat: '', total: '' }],
        discount: '',
        shipping: '',
        advance: '',
        amountPaid: '',
        importantNote: '',
        signatureImage: null,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormState({ ...formState, [name]: value });
    };

    const handleFileChange = (e) => {
        const { name, files } = e.target;
        setFormState({ ...formState, [name]: files[0] });
    };

    const handleItemChange = (index, e) => {
        const { name, value } = e.target;
        const items = [...formState.items];
        items[index] = { ...items[index], [name]: value };

        const price = parseFloat(items[index].price || 0);
        const quantity = parseInt(items[index].quantity || 0);
        const vat = parseFloat(items[index].vat || 0);
        
        if (!isNaN(price) && !isNaN(quantity) && !isNaN(vat)) {
            const totalWithoutVat = price * quantity;
            const totalWithVat = totalWithoutVat + (totalWithoutVat * vat / 100);
            items[index].total = totalWithVat.toFixed(2);
        } else {
            items[index].total = '';
        }

        setFormState({ ...formState, items });
    };

    const addItem = () => {
        setFormState({
            ...formState,
            items: [...formState.items, { description: '', price: '', quantity: '', vat: '', total: '' }]
        });
    };

    const removeItem = (index) => {
        const items = [...formState.items];
        items.splice(index, 1);
        setFormState({ ...formState, items });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onGenerateInvoice(formState);
    };

    return (
        <form className="p-6 bg-white rounded shadow-md" onSubmit={handleSubmit}>
            <h2 className="mb-4 text-2xl font-bold">Invoice Form</h2>
            <div className="mb-4">
                <label className="block mb-2 font-bold">Logo</label>
                <input type="file" name="logo" accept="image/png, image/jpeg" onChange={handleFileChange} className="w-full p-2 border" />
            </div>
            <div className="mb-4">
                <label className="block mb-2 font-bold">Business Name</label>
                <input type="text" name="businessName" value={formState.businessName} onChange={handleChange} className="w-full p-2 border" />
            </div>
            <div className="mb-4">
                <label className="block mb-2 font-bold">Invoice Number</label>
                <input type="text" name="invoiceNumber" value={formState.invoiceNumber} onChange={handleChange} className="w-full p-2 border" />
            </div>
            <div className="mb-4">
                <label className="block mb-2 font-bold">Invoice To</label>
                <input type="text" name="invoiceTo" value={formState.invoiceTo} onChange={handleChange} className="w-full p-2 border" />
            </div>
            <div className="mb-4">
                <label className="block mb-2 font-bold">Bill To</label>
                <input type="text" name="billTo" value={formState.billTo} onChange={handleChange} className="w-full p-2 border" />
            </div>
            <div className="mb-4">
                <label className="block mb-2 font-bold">Date</label>
                <input type="date" name="date" value={formState.date} onChange={handleChange} className="w-full p-2 border" />
            </div>
            <div className="mb-4">
                <label className="block mb-2 font-bold">Payment Method</label>
                <input type="text" name="paymentMethod" value={formState.paymentMethod} onChange={handleChange} className="w-full p-2 border" />
            </div>
            <div className="mb-4">
                <label className="block mb-2 font-bold">Currency</label>
                <select name="currency" value={formState.currency} onChange={handleChange} className="w-full p-2 border">
                    <option value="LKR">LKR</option>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="GBP">GBP</option>
                    <option value="JPY">JPY</option>
                    <option value="AUD">AUD</option>
                    <option value="CAD">CAD</option>
                    <option value="CHF">CHF</option>
                    <option value="CNY">CNY</option>
                    <option value="INR">INR</option>
                    <option value="RUB">RUB</option>
                </select>
            </div>
            <h3 className="mb-2 text-xl font-bold">Items</h3>
            {formState.items.map((item, index) => (
                <div key={index} className="grid gap-4 mb-4 sm:grid-cols-1 lg:grid-cols-6">
                    <input type="text" name="description" placeholder="Description" value={item.description} onChange={(e) => handleItemChange(index, e)} className="p-2 border" />
                    <input type="number" name="price" placeholder="Price" value={item.price} onChange={(e) => handleItemChange(index, e)} className="p-2 border" />
                    <input type="number" name="quantity" placeholder="Quantity" value={item.quantity} onChange={(e) => handleItemChange(index, e)} className="p-2 border" />
                    <input type="number" name="vat" placeholder="VAT (%)" value={item.vat} onChange={(e) => handleItemChange(index, e)} className="p-2 border" />
                    <input type="number" name="total" placeholder="Total" value={item.total} readOnly className="p-2 bg-gray-100 border" />
                    <button type="button" onClick={() => removeItem(index)} className="px-4 py-2 text-white bg-red-500 rounded">Remove</button>
                </div>
            ))}
            <button type="button" onClick={addItem} className="px-4 py-2 mb-4 text-white bg-blue-500 rounded">Add Item</button>
            <div className="mb-4">
                <label className="block mb-2 font-bold">Discount</label>
                <input type="number" name="discount" value={formState.discount} onChange={handleChange} className="w-full p-2 border" />
            </div>
            <div className="mb-4">
                <label className="block mb-2 font-bold">Shipping</label>
                <input type="number" name="shipping" value={formState.shipping} onChange={handleChange} className="w-full p-2 border" />
            </div>
            <div className="mb-4">
                <label className="block mb-2 font-bold">Advance</label>
                <input type="number" name="advance" value={formState.advance} onChange={handleChange} className="w-full p-2 border" />
            </div>
            <div className="mb-4">
                <label className="block mb-2 font-bold">Amount Paid</label>
                <input type="number" name="amountPaid" value={formState.amountPaid} onChange={handleChange} className="w-full p-2 border" />
            </div>
            <div className="mb-4">
                <label className="block mb-2 font-bold">Important Note</label>
                <textarea name="importantNote" value={formState.importantNote} onChange={handleChange} className="w-full p-2 border"></textarea>
            </div>

            <button type="submit" className="px-4 py-2 text-white bg-green-500 rounded">Generate Invoice</button>
        </form>
    );
}

export default InvoiceForm;
