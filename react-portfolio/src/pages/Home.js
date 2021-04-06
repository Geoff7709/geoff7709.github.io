import React from 'react'
import Project from '../components/project'
import jeopardyTrivia from '../images/jeopardyTrivia.gif'
import eatDaBurger from '../images/eatDaBurger.gif'
import corona_showdown from '../images/corona_showdown.gif'
import weather_dash from '../images/weather_dash.png'
import day_planner from '../images/day_planner.png'
import budgetTracker from '../images/budgetTracker.gif'
const projects = [
    {
        id: 1,
        title: 'Jeopardy Challenge',
        image: {
            src: jeopardyTrivia ,
            alt: 'Jeopardy GIF'
        },
        description: 'Jeopardy Trivia is a full stack application utilizing Passport for user authentication, Sequelize with MySQL, Express, Express-Handlebars, and JAWSDB with Heroku.',
        gitHub: 'https://github.com/Geoff7709/jeopardy_trivia_game',
        deployed: 'https://shielded-fjord-19309.herokuapp.com/'
    },
    {
        id: 2,
        title: 'Eat Da Burger',
        image: {
            src: eatDaBurger,
            alt: 'Eat Da Burger GIF'
        },
        description: 'Eat Da Burger is a full stack application utilizing MySQL, Express, Express-Handlebars, and JAWSDB with Heroku.',
        gitHub: 'https://github.com/Geoff7709/eat-da-burger',
        deployed: 'https://nameless-peak-45503.herokuapp.com/'
    },
    {
        id: 3,
        title: 'Corona Showdown',
        image: {
            src: corona_showdown,
            alt: 'Corona Shodown GIF'
        },
        description: 'Corona Showdown is a team project to present covid information and data in an accessible format. Could also be used to research travel conditions.',
        gitHub: 'https://github.com/n1flight/Corona_Showdown',
        deployed: 'https://n1flight.github.io/Corona_Showdown/'
    },
    {
        id: 4,
        title: 'Budget Tracker',
        image: {
            src: budgetTracker,
            alt: 'Budget Tracker GIF'
        },
        description: 'This is a budget tracking application that can save submitted transactions while offline to be stored and downloaded when the application regains connectivity.',
        gitHub: 'https://github.com/Geoff7709/indexedDb_budget_trkr',
        deployed: 'https://warm-depths-45507.herokuapp.com/'
    },
    {
        id: 5,
        title: 'Weather Dashboard',
        image: {
            src: weather_dash,
            alt: 'Weather Dashboard App'
        },
        description: 'Weather Dashboard is a travel weather forecaster using openWeather api.',
        gitHub: 'https://github.com/Geoff7709/weather-dashboard',
        deployed: 'https://geoff7709.github.io/weather-dashboard/'
    },
    {
        id: 6,
        title: 'Day Planner',
        image: {
            src: day_planner,
            alt: 'Day Planner App'
        },
        description: 'Day Planner is a scheduling app to record planned todos and appointments for a given workday utilizing moment.js and local storage.',
        gitHub: 'https://github.com/Geoff7709/day-planner',
        deployed: 'https://geoff7709.github.io/day-planner/'
    },

]
function Home() {
    return (
        
        <div className='container'>
            <div className='row'>
                <div className='col text-center'>
                    <h2>Projects</h2>
                </div>
            </div>
            <div className='row'>
                {projects.map(project => (
                    <div className='col-md-6 d-flex align-items-stretch' key={project.id}>
                        <Project {...project} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Home