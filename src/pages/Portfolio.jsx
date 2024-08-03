import Project from "../components/Project";

// Sample project data
const projects = [
    {
        title: "GamerLore",
        description:
            "GamerLore is a web application designed to provide fun and random facts about your favorite game characters. Whether you are a casual gamer or a hardcore fan, GamerLore offers a unique way to learn more about the characters you love from various games.",
        image: "https://raw.githubusercontent.com/BrianTib/game-lore/main/assets/images/screenshots/GamerLore-Valorant.gif",
        link: "https://briantib.github.io/game-lore/",
        githubLink: "https://github.com/BrianTib/game-lore",
    },
    {
        title: "AppTrack",
        description:
            "This application was created for busy job-hunters who want a centralized place to track what jobs they've applied to, the ongoing status of those applications, and when any interviews are scheduled.",
        image: "./apptrack.png",
        link: "https://job-app-tracker-boic.onrender.com/",
        githubLink: "https://github.com/bluethreadmade/job-app-tracker",
    },
    {
        title: "Weather Dashboard",
        description:
            "This is a weather dashboard application. It allows users to search for weather information by city name. It also provides a list of common cities for quick access. The weather information includes current weather and a 5-day forecast.",
        image: "https://raw.githubusercontent.com/BrianTib/weather-dashboard/main/assets/images/desktop-view2.png",
        link: "https://briantib.github.io/weather-dashboard/",
        githubLink: "https://github.com/BrianTib/weather-dashboard",
    },
    {
        title: "Simple Blog",
        description:
            "This project allows users to create multiple blog posts and displays them nicely across a well-structured interface. The project showcases the uses of localStorage and how loading and saving complex data-types should be handled.",
        image: "https://raw.githubusercontent.com/BrianTib/columbia-bootcamp-challenge-4/main/assets/screenshots/index-dark.png",
        link: "https://briantib.github.io/columbia-bootcamp-challenge-4/",
        githubLink: "https://github.com/BrianTib/columbia-bootcamp-challenge-4",
    },
    {
        title: "Discord-RS (Rust Library)",
        description:
            "discord-rs aims to be a blazingly fast Rust library for interacting with the Discord API. It provides a simple and efficient way to build Discord bots, webhooks, create rich embeds, send messages, create slash commands, manage channels, and much more, all in the Rust programming language.",
        image: "https://raw.githubusercontent.com/BrianTib/discord-rs/dev/assets/discord-rs-icon.png",
        githubLink: "https://github.com/BrianTib/discord-rs",
    },
    {
        title: "Readme Generator",
        description:
            "This project allows users to quickly generate README.md files for their projects using a series of prompts to generate high-quality content",
        image: "./readme.webp",
        githubLink: "https://github.com/BrianTib/readme-generator",
    },
];

export default function Page() {
    return (
        <div className="container py-5">
            <h1 className="text-center mb-5">My Portfolio</h1>
            <div className="row">
                {projects.map((project, index) => (
                    <Project key={index} {...project} />
                ))}
            </div>
        </div>
    );
}
