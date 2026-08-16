import { criarApp } from "./criarApp.js"

const fastify = criarApp()

fastify.listen({ port: Number(process.env.PORT) || 3500, host: "0.0.0.0" }, function (err, address) {
    if (err) {
        fastify.log.error(err)
        process.exit(1)
    }
})
