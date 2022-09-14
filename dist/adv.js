"use strict";
// TYPE PREDICATES
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDraftInvoice = exports.isFinalInvoice = void 0;
const isFinalInvoice = (invoice) => {
    return invoice._typename === 'FinalInvoice';
};
exports.isFinalInvoice = isFinalInvoice;
const isDraftInvoice = (invoice) => {
    return invoice._typename === 'DraftInvoice';
};
exports.isDraftInvoice = isDraftInvoice;
