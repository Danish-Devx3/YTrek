import { User } from "../db.js";
import jwt from "jsonwebtoken";

export const addplaylist = async (req,res) => {
    const playlist = req.body.playlist;
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    try {
        const user = await User.findById(decodedToken.user_id);
        if (!user) return res.status(404).json({ message: 'User not found' });
        if (user.playlists.includes(playlistId)) {
            return res.status(400).json({ message: 'Playlist already exists' });
        }
        user.playlists.push(playlistId);
        await user.save();
        return res.json(user);
        } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
}