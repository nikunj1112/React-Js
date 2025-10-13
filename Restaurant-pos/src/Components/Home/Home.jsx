import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resmenu,resuser } from '../../slices/resslice';
import "./Home.css";

export default function Home() {
    const dispatch = useDispatch();
    const { res, isLoading, error } = useSelector((state) => state.menu);

    useEffect(() => {
        dispatch(resmenu());
        dispatch(resuser());
    }, [dispatch]);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className='menu-container'>
            {res.map((r, index) => (
                <div key={index} className="menu-item">
                
                    <img src={r.image1} alt="" />
                        <h1>{r.food_name}</h1>
                        <p>{r.description}</p>
                        <h3>{r.price}</h3>
                </div>
            ))}
        </div>
    );
}
