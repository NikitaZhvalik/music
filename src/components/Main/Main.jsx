import React, { useState } from "react";

import useFetch from "../../hooks/useFetch";

import NavMenu from "../NavMenu/NavMenu";
import TrackList from "../TrackList/TrackList";
import Sidebar from "../Sidebar/Sidebar";
import AudioPlayer from "../AudioPlayer/AudioPlayer";
import Footer from "../Footer/Footer";

const Main = () => {
    const [trackPlay, setTrackPlay] = useState(null)
    const url = `https://skypro-music-api.skyeng.tech/catalog/track/all/`
    const {data, isLoading, error} = useFetch(url)

    return (
        <div className="wrapper">
            <div className="container">
                <main className="main">
                    <NavMenu />
                    <TrackList trackPlay={trackPlay} setTrackPlay={setTrackPlay} data={data} isLoading={isLoading} error={error} />
                    <Sidebar isLoading={isLoading} />
                    {trackPlay && <AudioPlayer isLoading={isLoading} />}
                    <Footer />
                </main>
            </div>
        </div>
    )
}
 
export default Main;