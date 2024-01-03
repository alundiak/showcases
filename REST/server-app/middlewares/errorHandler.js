const errorHandler = (err, req, res, next) => {
  console.log('\n errorHandler() => ');
  console.error(err.stack);

  // Check for specific error types and set the appropriate status code
  if (err.name === 'DatabaseError') {
    res.status(500).json({ error: 'Database error' });
  } else {
    res.status(500).json({ error: 'Internal Server Error' });
  }

  return next();
};

module.exports = errorHandler;
