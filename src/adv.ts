// TYPE PREDICATES

export type FinalInvoice = {
    _typename: 'FinalInvoice'
};

export type DraftInvoice = {
    _typename: 'DraftInvoice'
}

export type Invoice = FinalInvoice | DraftInvoice;

export const isFinalInvoice = (invoice: Invoice): invoice is FinalInvoice => {
    return invoice._typename === 'FinalInvoice';
}

export const isDraftInvoice = (invoice: Invoice): invoice is DraftInvoice => {
    return invoice._typename === 'DraftInvoice';
}