import '../Home.css';

function Home(articleInfo) {
    return (
        <section className="article-div">
            <h1 className="article-title">
                Post here
                {/* {articleInfo.title} */}
            </h1>

            <h5 className="article-author">
                {/* {articleInfo.author} */}
                Author: Samuil Zahariev
            </h5>
            <div className="article-content">
                {/* {articleInfo.content} */}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et possimus sint impedit quis facere harum fugit assumenda quo debitis voluptatum eligendi nisi magnam nesciunt vel, ratione dolore. Facere veniam asperiores reiciendis neque nesciunt optio doloribus at libero distinctio. Tempora, ex! Adipisci vel quia unde tempora? Officia, sunt. Minus inventore atque eligendi fuga eum vel dolorum, ea quos ducimus, magnam sed enim harum quod et quidem autem voluptatibus! Praesentium nam consectetur impedit magni eum natus tempora quidem nostrum inventore tempore necessitatibus neque culpa voluptatum iusto, vel repellat enim non! Doloremque in beatae dignissimos quibusdam harum ratione corporis cumque omnis vel quo?
            </div>
        </section>
    )
};

export default Home;