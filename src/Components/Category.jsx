import React, { useEffect, useState } from 'react';
import '../index.css';
import 'D:/visual S/web dev/reactPRactice/netflix-clone/node_modules/bootstrap/dist/css/bootstrap.min.css';
import axios from './axios';



const Category = ({ title, fetchUrl, isLargeRow = false }) => {
    const [movie, setMovie] = useState([]);

    const base_url = "https://image.tmdb.org/t/p/original/";
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovie(
                request.data.results
            );
            return request;
        }
        fetchData();
    }, [fetchUrl]);


    // console.log(movie);

    return (
        <>
            <div className='category '>
                <h2>{title}</h2>
                <div className="posters">
                    {movie.map((val) => {
                        return (
                            (isLargeRow && val.poster_path) ?
                                (<img
                                    className={`poster ${isLargeRow && "posterLarge"}`}
                                    key={val.id}
                                    src={`${base_url}${isLargeRow ? val.poster_path : val.backdrop_path
                                        }`} alt={val.name} />) : <></>||
                            (!isLargeRow && val.backdrop_path) ?
                                    (<img
                                        className={`poster ${isLargeRow && "posterLarge"}`}
                                        key={val.id}
                                        src={`${base_url}${isLargeRow ? val.poster_path : val.backdrop_path
                                            }`} alt={val.name} />) : <></>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Category;

