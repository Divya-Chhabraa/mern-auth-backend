import jwt from 'jsonwebtoken';

const userAuth = async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    // Don't throw an error — just return a clean message
    return res.status(200).json({ success: false, isLoggedIn: false });
  }

  try {
    const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);
    if (tokenDecode.id) {
      req.body.userId = tokenDecode.id;
      next(); // Proceed to next step
    } else {
      return res.status(200).json({ success: false, isLoggedIn: false });
    }
  } catch (error) {
    return res.status(200).json({ success: false, isLoggedIn: false, message: error.message });
  }
};

export default userAuth;
