import { useEffect, useState } from 'react'
import FooterPlayPanel from '../../modules/FooterPlayPanel'
import NavMenu from '../../modules/NavMenu'
// import NavMenu from '../components/NavMenu/NavMenu'
// import TrackList from '../components/TrackList/TrackList'
// import Sidebar from '../components/Sidebar/Sidebar'
// import AudioPlayer from '../components/AudioPlayer/AudioPlayer'
// import Footer from '../components/Footer/Footer'

const MainPage = () => {
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
      <main className="container main">
        <NavMenu />
        {/* /* <NavMenu />
        <TrackList isLoading={isLoading} />
        <Sidebar isLoading={isLoading} />
        <AudioPlayer isLoading={isLoading} /> */}
        <FooterPlayPanel />
      </main>
    </div>
  )
}

export default MainPage
