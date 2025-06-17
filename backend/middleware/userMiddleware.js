import jwt from "jsonwebtoken";

export default function userMiddleware(req, res, next) {
  
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ error: "No token provided in header" });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ error: "Invalid token" });
    }
    req.user = user;
    console.log("User:", user);
  });
  next();
}
