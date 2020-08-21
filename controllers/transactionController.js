// @desc    Get all transactions
// @route   GET /api/v1/transactions
// @access  Public
exports.getTransactions = (req, res, next) => {
    res.send('GET transaction');
}

// @desc    Add all transactions
// @route   POST /api/v1/transactions
// @access  Public
exports.addTransactions = (req, res, next) => {
    res.send('POST transaction');
}

// @desc    Delete all transactions
// @route   DELETE /api/v1/transactions/:id
// @access  Public
exports.deleteTransactions = (req, res, next) => {
    res.send('DELETE transaction');
}