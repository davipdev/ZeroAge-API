import "dotenv/config"
import Fastify from "fastify"
import fastifyCors from "@fastify/cors"
import userRoutes from "../routes/user.js"
import { app } from "../routes/app.js"

export function criarApp() {
    const fastify = Fastify({
        logger: true
    })

    fastify.register(fastifyCors, {
        origin: process.env.FRONTEND_URL || "http://localhost:3000",
        methods: ["GET", "POST", "PUT", "DELETE"]
    })

    fastify.get("/teste", async (request, reply) => {
        return ({ status: "on" })
    })

    fastify.register(userRoutes)
    fastify.register(app)

    return fastify
}
