import express from "express"
import { matchRoutes } from "react-router-config"
import proxy from "express-http-proxy"

import renderer from "./helpers/renderer"
import createStore from "./helpers/createStore"
import Routes from "../Routes"

const app = express()

app.use(
  "/api",
  proxy("http://react-ssr-api.herokuapp.com", {
    proxyReqOptDecorator(opts) {
      opts.headers["x-forwarded-host"] = "localhost:3000"
      return opts
    }
  })
)
app.use(express.static("public"))

app.get("*", (req, res) => {
  const store = createStore(req)

  // Finding out when the data loading is finished
  const promises = matchRoutes(Routes, req.path)
    .map(({ route: { loadData } }) => (loadData ? loadData(store) : null))
    /**
     * wait for all the promises to resolve or reject
     * for that wrap every promise with an outer promise
     * and resolve them regardless they are resolved or rejected internally
     */
    .map(
      promise =>
        promise &&
        new Promise(res => {
          promise.then(res).catch(res)
        })
    )

  Promise.all(promises).then(() => {
    const context = {},
      content = renderer(req, store, context)

    if (context.url) return res.redirect(302, context.url)
    if (context.notFound) res.status(404)

    res.send(content)
  })
})

app.listen(3000, () => {
  console.log("Express app running on port: 3000")
})
