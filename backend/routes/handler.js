const express = require('express');
const router = express.Router();

router.get('/search', (req, res) => {
    const data = [
        {"id":1, "name": "Netflix", "plans":[{"Basic":9.99, "Standard":15.49, "Premium":19.99}]},
        {"id":2, "name": "Hulu", "plans":[{"Basic":6.99, "No Ads":12.99, "LiveTV + Disney + ESPN":69.99, "No Ads + LiveTV + Disney + ESPN":75.99}]},
        {"id":3, "name": "Disney+", "plans":[{"Basic":8.00, "Hulu + ESPN":14.00}]},
        {"id":4, "name": "Amazon Prime", "plans":[{"Basic":14.99, "Student":7.49}]},
        {"id":5, "name": "HBO Max", "plans":[{"Basic":9.99, "Ad-Free":14.99}]},
        {"id":6, "name": "Paramount+", "plans":[{"Basic":4.99, "Premium":9.99, "Essential + Showtime":9.99, "Premium + Showtime":12.99}]}
    ];

    res.end(JSON.stringify(data));
});

module.exports = router;