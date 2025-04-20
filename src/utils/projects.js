import cookbook from "../assets/images/cookbook.webp";
import weather from "../assets/images/Weather forcast website.jpg";
import portfolio from "../assets/images/Portfolio.png";
import qrcode from "../assets/images/2FA modal QR code — Untitled UI.jpg";
import ott from "../assets/images/Streaming.jpg";
import CartManagementSystem from "../assets/images/cart-management-system.webp"
const data = [
    {
        name: "Streamsavy",
        type: "Website",
        url: "https://rasproduction.vercel.app/",
        github: "https://github.com/DevRohit06/videography-website",
        image: ott,
        slug: "ras",
        description: "This is a ott platform made using Reactjs and Tailwind css.",
        tech: ['HTML', 'Javascript', 'Css', 'Tailwind css']
    },
    {
        name: "Recipe app",
        type: "Website",
        url: "https://nagarajyuvz.github.io/Cook-book/",
        github: 'https://github.com/Nagarajyuvz/Cook-book',
        image:cookbook ,
        slug: "recipe",
        description: "A receipe app made using react js and tailwind css.",
        tech: ['HTML', 'Javascript', 'CSS', 'Tailwind css', 'ReactJS']
    },
    {
        name: "Portfolio Website",
        type: "Website",
        url: "https://personal-portfolio-one-gules.vercel.app/",
        github: "https://github.com/Nagarajyuvz/Personal-portfolio",
        image: portfolio,
        slug: "portfolio",
        description: "This is my Portfolio website made using Astro, Reactjs and Tailwind css. ",
        tech: ['HTML', 'Javascript', 'Css', 'Tailwind css', 'Astro', 'Reactjs']
    },
    {
        name: "Cart Management System",
        type: "WebApp",
        url: "https://cart-system-sveltekit.vercel.app/",
        github: "",
        image: CartManagementSystem,
        slug: "cart-management-system",
        description: "This is a Cart Management System made using SvelteKit and Tailwind css with the help of FakeStoreAPI. it has two versions one with sveltekit and another with NextJS.",
        tech: ['HTML', 'Javascript', 'Css', 'Tailwind css', 'SvelteKit', 'NextJS']
        
    },
    {
        name: "Weather forecast",
        type: "Website",
        url: "https://weather-app-phi-two-62.vercel.app/",
        github: "https://github.com/DevRohit06/insurance-website",
        image: weather ,
        slug: "weather",
        description: "This is a weather forecast app with 7 days weather forecast and current weather. It uses OpenWeatherMap API.",
        tech: ['HTML', 'Javascript', 'Css', 'Tailwind css', 'Astro', 'Reactjs']

    },
    
   
    {
        name: "Qr code generator",
        type: "WebApp",
        url: "https://portfolio-chi-nine-51.vercel.app/qrindex.html",
        github: "https://github.com/Nagarajyuvz/Portfolio/tree/main/QR%20generator/QR-CODE-GENERATOR",
        image: qrcode,
        slug: "devblogs",
        description: "This is a Qr code generator made using HTML, CSS, and JavaScript.",
        tech: ['HTML', 'Javascript', 'Css', 'Tailwind css', 'Astro', 'Markdown']
    },
    
    
]

export function getData(){
    return data;
}