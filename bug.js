```javascript
// Incorrect aggregation pipeline stage
aggregate([{
  $match: { /* some condition */ }
}, {
  $group: {
    _id: "$fieldName",
    count: { $sum: 1 }
  }
}, {
  $sort: { count: -1 }
}, {
  $limit: 10
}])
```