/** @type {import("snowpack").SnowpackUserConfig } */
import httpProxy from "http-proxy";
const proxy = httpProxy.createServer({
  target: "http://localhost:5000",
});

export default {
  mount: {
    public: "/",
    src: "/dist",
  },
  plugins: ["@snowpack/plugin-vue"],
  routes: [
    { match: "all", src: "/api/.*", dest: (req, res) => proxy.web(req, res) },
    { match: "routes", src: ".*", dest: "/index.html" },
  ],
  optimize: {
    /* Example: Bundle your final build: */
    // "bundle": true,
  },
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
};
