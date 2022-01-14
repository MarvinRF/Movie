import axios from "axios";
import MovieCard from "components/MovieCard";
import Pagination from "components/Pagination";
import { useEffect, useState } from "react";
import { MoviePage } from "types/movie";
import { BASE_URL } from "utils/requests";


function Listing() {

const [pageNumber, setPagenumber] = useState(0);
useEffect(() =>{
    axios.get(`${BASE_URL}/movies?size=12&page=0`)
    .then(response => {
    const data = response.data as MoviePage;
    setPagenumber(data.number);
    });
}, []);
    



    return (
        <>
            <p>{pageNumber}</p>
            <Pagination />

            <div className="Container">
                <div className="row">
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                    
                </div>

            </div>



        </>
    );
}

export default Listing;