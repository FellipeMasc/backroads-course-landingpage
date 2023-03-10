import tour1 from "./images/tour-1.jpeg";
import tour2 from "./images/tour-2.jpeg";
import tour3 from "./images/tour-3.jpeg";
import tour4 from "./images/tour-4.jpeg";

const pageLinks = [
    { id: 1, href: "#home", text: "home" },
    { id: 2, href: "#about", text: "about" },
    { id: 3, href: "#services", text: "services" },
    { id: 4, href: "#tours", text: "tours" },
];

const footerLinks = [
    { id: 5, href: "#home", text: "home" },
    { id: 6, href: "#about", text: "about" },
    { id: 7, href: "#services", text: "services" },
    { id: 8, href: "#featured", text: "featured" },
];

const socialLinks = [
    { id: 9, href: "https://www.facebook.com", text: "facebook" },
    { id: 10, href: "https://www.twitter.com", text: "twitter" },
    { id: 11, href: "https://www.twitter.com", text: "squarespace" },
];

const tours = [
    {
        id: 1,
        image: tour1,
        date: "august 26th, 2020",
        title: "Tibet Adventure",
        info: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.`,
        location: "china",
        duration: 6,
        cost: 2100,
    },
    {
        id: 2,
        image: tour2,
        date: "october 1th, 2020",
        title: "best of java",
        info: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.`,
        location: "indonesia",
        duration: 11,
        cost: 1400,
    },
    {
        id: 3,
        image: tour3,
        date: "september 15th, 2020",
        title: "explore hong kong",
        info: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.`,
        location: "hong kong",
        duration: 8,
        cost: 5000,
    },
    {
        id: 4,
        image: tour4,
        date: "december 5th, 2019",
        title: "kenya highlights",
        info: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.`,
        location: "kenya",
        duration: 20,
        cost: 3300,
    },
];

export { pageLinks, socialLinks, footerLinks, tours };
