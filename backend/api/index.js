import { criarApp } from "../src/criarApp.js"

const fastify = criarApp()
const pronto = fastify.ready()

export default async function handler(request, reply) {
    await pronto
    fastify.server.emit("request", request, reply)
}
