import jwt from 'jsonwebtoken';

const isAuthenticated = async (req, res, next) => {
    try {
        const token = req.cookies.token; // Access cookies correctly
        if (!token) {
            return res.status(401).json({
                message: "User not authenticated",
                success: false
            });
        }

        const decoded = await jwt.verify(token, process.env.SECRET_KEY);
        req.id = decoded.userId; // Assign the decoded userId to req.id
        next();
    } catch (error) {
        console.error(error);
        return res.status(401).json({
            message: "Invalid token",
            success: false
        });
    }
};

export default isAuthenticated;
