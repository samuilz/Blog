import '../App.css';
import Header from './Header';
import Article from './Article';
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
        {/* <Article>{articleInfo}</Article>, */}
        <Article />,
        <Footer />  
      </>
  );
}

export default App;
