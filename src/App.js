import './styles/App.css';
import './styles/vars.css';
import './component/header/header.css';
import './component/sidebar/sidebar.css';
import './component/footer/footer.css';
import './component/playlist/playlist.css';
import './styles/media-queries.css';
import Sidebar from './component/sidebar/sidebar';
import Header from './component/header/header';
import Footer from './component/footer/footer';
import Playlist from './component/playlist/playlist';




function App() {
  return (
    <>
      <Header />
      <Sidebar />
      <Playlist />
      <Footer />
    </>
  );
}

export default App;