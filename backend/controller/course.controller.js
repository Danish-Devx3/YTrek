import { User } from "../db.js";
import jwt from "jsonwebtoken";

export const addplaylist = async (req, res) => {
    const userId = req.user.id;
    const { playlist } = req.body;
    try {
        const user = await User.findById(userId);
        if (!user) return res.status(404).json({ message: "User not found" });
        if (!playlist) return res.status(400).json({ message: "Playlist is required" });
        if (user.playlists.some((p) => p.name === playlist.name)) {
            return res.status(400).json({ message: "Playlist already exists" });
        }
        user.playlists.push(playlist);
        await user.save();
        return res.status(201).json({ message: "Playlist added successfully" });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
};


export const getPlaylists = async (req, res) => {
    const userId = req.user.id;
    try {
        const user = await User.findById(userId);
        if (!user) return res.status(404).json({ message: "User not found" });
        return res.json(user.playlists);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
};
