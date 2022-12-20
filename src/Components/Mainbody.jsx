import React, { useEffect, useState } from 'react';
import '../index.css';
import 'D:/visual S/web dev/reactPRactice/netflix-clone/node_modules/bootstrap/dist/css/bootstrap.min.css';
import axios from './axios';
import requests from './request';


const Mainbody = () => {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
                ]
            );
            return request;
        }
        fetchData();
    }, []);
    // console.log(movie);

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }
    return (
        <>

            <div className='mainbody   d-flex align-items-center' style={{

                backgroundSize: "cover",
                backgroundImage: `url(
                     ' https://image.tmdb.org/t/p/original/${movie?.backdrop_path}'
                )`,
                backgroundPosition: "center center",
            }}>
                <div className='gradient '>
                    <div className='text-white display-flex align-items-center ms-3'>
                        <h1>{movie?.title || movie?.name || movie?.original_name} </h1>
                        <button className='button me-4'>Play</button>
                        <button className='button'>My List</button>
                        <div style={{ width: "40%" }}>{truncate(movie?.overview, 150)}</div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Mainbody;

//   "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"