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
        image: "https://private-user-images.githubusercontent.com/168473293/350074375-9bc93a56-3d75-42c4-a47c-52c691ca478d.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjI2NDYxMzcsIm5iZiI6MTcyMjY0NTgzNywicGF0aCI6Ii8xNjg0NzMyOTMvMzUwMDc0Mzc1LTliYzkzYTU2LTNkNzUtNDJjNC1hNDdjLTUyYzY5MWNhNDc4ZC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwODAzJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDgwM1QwMDQzNTdaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT04ZGJkNTEwNzMzYTIxOTg1NjJmYTNlM2U5NGZlMGY0YmZiMTM4N2FjYmYwZWIzNDI0MDdjNjIxNWZlZWNmOWFhJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.IDvt1BELzHzVkJcrlzCo5iALLRn6tMS4Ob-NH9mzWoo",
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
        image: "https://imgs.search.brave.com/GjPREwK6tC3HPhZ6coZQ1Hn7A_SLJ8z0fMFkV4dzlIY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9yYXcu/Z2l0aHVidXNlcmNv/bnRlbnQuY29tL2p1/ZXJnZW53ZWIvSmtJ/bWFnZVBsYWNlaG9s/ZGVyL21hc3Rlci9p/bWFnZXMvcGxhY2Vo/b2xkZXJpbWFnZS5q/cGc_cmF3PXRydWU",
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
