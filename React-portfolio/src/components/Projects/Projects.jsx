import React from 'react'
import "./Projects.css";



export default function Project(props) {

 
    const reposList = props.repos;
    return (
        <>
            <section className='project-section'>
                <p className='title1'>some of my recent works</p>
                <h3 className='title'>Our Projects</h3>
                <div className='grid'>
                    {reposList.map((repo, index) => {
                        const { name, html_url, language } = repo;

                        return (

                           

                            <div key={index} className='box'>
                                <h2>{name}</h2>
                                <div className='btn-row'>
                                    <button>{language ?? "README"} </button>
                                    <button>
                                        <a href={html_url}>Link</a>
                                    </button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </section>
        </>
    )
}