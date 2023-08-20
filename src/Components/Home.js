import React, { useEffect, useState } from "react";
import Card from "./Card";

const Home = () => {
    const [movie, setMovie] = useState([]);
    const [search, setSearch] = useState("");

    const fetchAPI = () => {
        let url = "https://api.themoviedb.org/3/movie/upcoming?api_key=265b2af6676da7d8b7252166f4c49da5";

        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                const sortedMovies = data.results.sort((a, b) =>
                    new Date(b.release_date) - new Date(a.release_date)
                );
                setMovie(sortedMovies);
            })
            .catch((error) => console.error("Error fetching movies:", error));
    };

    useEffect(() => {
        fetchAPI();
    }, []);


    const searchMovie = () => {
        let url = `https://api.themoviedb.org/3/search/movie?query=${search}&api_key=265b2af6676da7d8b7252166f4c49da5`;

        fetch(url)
            .then((res) => res.json())
            .then((data) => setMovie(data.results))
            .catch((error) => console.error("Error searching movies:", error));
    };

    useEffect(() => {
        searchMovie();
    },[search]);

    return (
        <>
            <div className="header">
                <div>
                    <form>
                        <div className="search-btn">
                            <div className="search-div">
                                <i className="fa-solid fa-magnifying-glass" style={{ color: "#b1b8c4" }}></i>
                                <input
                                    type="text"
                                    placeholder="Search"
                                    className="inputText"
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter") {
                                            e.preventDefault();
                                            searchMovie();
                                        }
                                    }}
                                /></div>
                            <div className="home-icon">
                                <button>
                                    <i className="fa-solid fa-house"></i>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="container" >
                {movie.length === 0 ? (
                    <p className="not found"> Not Found </p>
                ) : (
                    movie.map((res) => {
                        return (<div className="main-div" >
                            <Card info={res} key={res.id} />
                        </div>)
                    })
                )}
            </div>
        </>
    );
};

export default Home;
