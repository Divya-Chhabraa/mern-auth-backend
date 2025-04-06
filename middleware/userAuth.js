import jwt from 'jsonwebtoken';

const userAuth = async (req, res, next) => {
    const { token } = req.cookies;

    if (!token) {
        return res.status(401).json({ success: false, message: "Not authorized." });
    }

    try {
        const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);
        if (tokenDecode.id) {
            req.body.userId = tokenDecode.id;
            next();
        } else {
            return res.status(401).json({ success: false, message: "Not authorized." });
        }
    } catch (error) {
        return res.status(401).json({ success: false, message: error.message });
    }
};

export default userAuth;
