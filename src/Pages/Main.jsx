import React from "react";
import NavMenu from "../components/NavMenu/NavMenu";
import TrackList from "../components/TrackList/TrackList";
import Sidebar from "../components/Sidebar/Sidebar";
import AudioPlayer from "../components/AudioPlayer/AudioPlayer";
import Footer from "../components/Footer/Footer";


const Main = () => {
    return (
        <div className="wrapper">
            <div className="container">
                <main className="main">
                    <NavMenu />
                    <TrackList />
                    <Sidebar />
                    <AudioPlayer />
                    <Footer />
                </main>
            </div>
        </div>
    );
}
 
export default Main;