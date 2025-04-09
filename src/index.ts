import { Hono } from "hono";
import { adminCitiesRoute } from "./modules/admin-city/route";
import { citiesRoute } from "./modules/city/route";
import { commonRoute } from "./modules/common/route";
import { placesRoute } from "./modules/place/route";
import { searchRoute } from "./modules/search/route";
import { OpenAPIHono } from "@hono/zod-openapi";
import { Scalar } from "@scalar/hono-api-reference";

// const app = new Hono();
const app = new OpenAPIHono();

app.route("/", commonRoute);
app.route("/cities", citiesRoute);
app.route("/places", placesRoute);
app.route("/search", searchRoute);
app.route("/admin/cities", adminCitiesRoute);

// The OpenAPI documentation
app.doc("/openapi.json", {
  openapi: "3.0.0",
  info: {
    version: "1.0.0",
    title: "Urbanesia API",
  },
});

app.get(
  "/",
  Scalar({
    url: "/openapi.json",
    theme: "dark blue",
    pageTitle: "Urbanesia API",
  })
);

export default app;
