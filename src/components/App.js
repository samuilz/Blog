import '../App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App() {
  // let articleInfo = {
  //   author: author,
  //   title: title,
  //   content: content,
  //   sources:sources
  // };

  return (
      <>
        <Header />,
        <Main />,
        {/* <Article>{articleInfo}</Article>, */}
        {/* <Article />, */}
        <Footer />  
      </>
  );
}

export default App;
