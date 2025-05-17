import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import userRouter from "./routes/userRouter.js";
import courseRouter from "./routes/courseRoute.js";
import connectDB from "./db.js";

dotenv.config(); 

const app = express();
app.use(cors()); 

app.use(express.json());

connectDB();

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use("/api/user",userRouter);

app.use("/course", courseRouter )

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server is running on port ${process.env.PORT || 5000}`);
});


// async function fetchPlaylistVideos(playlistId) {
//   const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&maxResults=50&key=${API_KEY}`;
  
//   try {
//     const response = await fetch(url);
//     const data = await response.json();

//     if (data.error) {
//       console.error("YouTube API Error:", data.error.message);
//       return null;
//     }

//     return data.items.map((item) => ({
//       videoId: item.snippet.resourceId.videoId,
//       title: item.snippet.title,
//       thumbnail: item.snippet.thumbnails.medium.url,
//     }));
//   } catch (error) {
//     console.error("Error fetching playlist:", error);
//     return null;
//   }
// }

// // Example Usage
// fetchPlaylistVideos("PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP&si=rGx2eMIbvZCDgABS").then((videos) => console.log(videos));
