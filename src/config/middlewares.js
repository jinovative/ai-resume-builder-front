module.exports = [
    // other middlewares
    {
        name: "strapi::cors",
        config: {
            origin: ["https://ai-resume-builder-front.vercel.app"], // Add your frontend URL here
            methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
            allowedHeaders: ["Content-Type", "Authorization"],
            credentials: true,
        },
    },
    // other middlewares
];
