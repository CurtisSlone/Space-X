import '../style/Home.scss'

const Home = () => {
    return (
        <div className="content">
            <div className="title__box">
            <h1> Choose Flight Number </h1>
            <br/>
            <h2> Out of 157 Flights </h2>
        </div>
        <input
        type="text"
        placeHolder="000"
        />

        </div>
    )
}

export default Home