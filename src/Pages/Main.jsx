import React, { useEffect, useState } from "react";
import NavMenu from "../components/NavMenu/NavMenu";
import TrackList from "../components/TrackList/TrackList";
import Sidebar from "../components/Sidebar/Sidebar";
import AudioPlayer from "../components/AudioPlayer/AudioPlayer";
import Footer from "../components/Footer/Footer";

const Main = () => {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setIsLoading(false)
        }, 2000)

        return () => {
            clearTimeout(timeoutId)
        }
    }, [isLoading])

    return (
        <div className="wrapper">
            <div className="container">
                <main className="main">
                    <NavMenu />
                    <TrackList isLoading={isLoading} />
                    <Sidebar isLoading={isLoading} />
                    <AudioPlayer isLoading={isLoading} />
                    <Footer />
                </main>
            </div>
        </div>
    )
}
 
export default Main;