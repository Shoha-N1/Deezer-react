import { createBrowserRouter } from "react-router-dom";
import ArtistPage from "../pages/artist_page/ArtistPage";
import PlaylistPage from "../pages/playlist/PlaylistPage";
import PodcastPage from "../pages/podcast/PodcastPage";
import TrackPage from "../pages/track/TrackPage";
import Home from "../pages/home/Home";
import App from "../App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
        {
            path: "/",
            index: true,
            element: <Home />,
        },
        {
            path: "/artist_page/:artistId",
            element: <ArtistPage />,
        },
        {
            path: "/playlist",
            element: <PlaylistPage />,
        },
        {
            path: "/podcast",
            element: <PodcastPage />,
        },
        {
            path: "/track",
            element: <TrackPage />,
        },
    ]
  }
]);

export default router

