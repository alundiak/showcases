const users = [
  { id: 1, username: 'admin', role: 'admin' },
  { id: 2, username: 'user', role: 'user' },
];

function findUserByUsername(username) {
  return users.find(user => user.username === username);
}

// Middleware to check user role
function checkUserRole(role) {
  return (req, res, next) => {
    const username = req.headers['x-username']; // Assuming username is sent in headers

    const user = findUserByUsername(username);

    if (!user) {
      // User is not authenticated
      return res.status(401).json({ error: 'Unauthorized - Missing credentials' });
    }

    if (user.role !== role) {
      // User is authenticated but lacks necessary permissions
      return res.status(403).json({ error: 'Forbidden - Insufficient permissions' });
    }

    req.user = user; // Make user information available to subsequent handlers
    next();
  };
}

module.exports = checkUserRole;
