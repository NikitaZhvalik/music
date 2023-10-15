import React, { useEffect, useState } from "react";
import NavMenu from "../NavMenu/NavMenu";
import TrackList from "../TrackList/TrackList";
import Sidebar from "../Sidebar/Sidebar";
import AudioPlayer from "../AudioPlayer/AudioPlayer";
import Footer from "../Footer/Footer";

const Main = () => {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setIsLoading(false)
        }, 500)

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