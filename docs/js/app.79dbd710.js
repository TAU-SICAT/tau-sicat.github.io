(function (e) {
  function t(t) {
    for (
      var a, n, s = t[0], c = t[1], i = t[2], d = 0, u = [];
      d < s.length;
      d++
    )
      (n = s[d]),
        Object.prototype.hasOwnProperty.call(o, n) && o[n] && u.push(o[n][0]),
        (o[n] = 0);
    for (a in c) Object.prototype.hasOwnProperty.call(c, a) && (e[a] = c[a]);
    g && g(t);
    while (u.length) u.shift()();
    return l.push.apply(l, i || []), r();
  }
  function r() {
    for (var e, t = 0; t < l.length; t++) {
      for (var r = l[t], a = !0, n = 1; n < r.length; n++) {
        var s = r[n];
        0 !== o[s] && (a = !1);
      }
      a && (l.splice(t--, 1), (e = c((c.s = r[0]))));
    }
    return e;
  }
  var a = {},
    n = { app: 0 },
    o = { app: 0 },
    l = [];
  function s(e) {
    return (
      c.p +
      "js/" +
      ({ about: "about" }[e] || e) +
      "." +
      { about: "198bca32" }[e] +
      ".js"
    );
  }
  function c(t) {
    if (a[t]) return a[t].exports;
    var r = (a[t] = { i: t, l: !1, exports: {} });
    return e[t].call(r.exports, r, r.exports, c), (r.l = !0), r.exports;
  }
  (c.e = function (e) {
    var t = [],
      r = { about: 1 };
    n[e]
      ? t.push(n[e])
      : 0 !== n[e] &&
        r[e] &&
        t.push(
          (n[e] = new Promise(function (t, r) {
            for (
              var a =
                  "css/" +
                  ({ about: "about" }[e] || e) +
                  "." +
                  { about: "ae267894" }[e] +
                  ".css",
                o = c.p + a,
                l = document.getElementsByTagName("link"),
                s = 0;
              s < l.length;
              s++
            ) {
              var i = l[s],
                d = i.getAttribute("data-href") || i.getAttribute("href");
              if ("stylesheet" === i.rel && (d === a || d === o)) return t();
            }
            var u = document.getElementsByTagName("style");
            for (s = 0; s < u.length; s++) {
              (i = u[s]), (d = i.getAttribute("data-href"));
              if (d === a || d === o) return t();
            }
            var g = document.createElement("link");
            (g.rel = "stylesheet"),
              (g.type = "text/css"),
              (g.onload = t),
              (g.onerror = function (t) {
                var a = (t && t.target && t.target.src) || o,
                  l = new Error(
                    "Loading CSS chunk " + e + " failed.\n(" + a + ")"
                  );
                (l.code = "CSS_CHUNK_LOAD_FAILED"),
                  (l.request = a),
                  delete n[e],
                  g.parentNode.removeChild(g),
                  r(l);
              }),
              (g.href = o);
            var b = document.getElementsByTagName("head")[0];
            b.appendChild(g);
          }).then(function () {
            n[e] = 0;
          }))
        );
    var a = o[e];
    if (0 !== a)
      if (a) t.push(a[2]);
      else {
        var l = new Promise(function (t, r) {
          a = o[e] = [t, r];
        });
        t.push((a[2] = l));
        var i,
          d = document.createElement("script");
        (d.charset = "utf-8"),
          (d.timeout = 120),
          c.nc && d.setAttribute("nonce", c.nc),
          (d.src = s(e));
        var u = new Error();
        i = function (t) {
          (d.onerror = d.onload = null), clearTimeout(g);
          var r = o[e];
          if (0 !== r) {
            if (r) {
              var a = t && ("load" === t.type ? "missing" : t.type),
                n = t && t.target && t.target.src;
              (u.message =
                "Loading chunk " + e + " failed.\n(" + a + ": " + n + ")"),
                (u.name = "ChunkLoadError"),
                (u.type = a),
                (u.request = n),
                r[1](u);
            }
            o[e] = void 0;
          }
        };
        var g = setTimeout(function () {
          i({ type: "timeout", target: d });
        }, 12e4);
        (d.onerror = d.onload = i), document.head.appendChild(d);
      }
    return Promise.all(t);
  }),
    (c.m = e),
    (c.c = a),
    (c.d = function (e, t, r) {
      c.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
    }),
    (c.r = function (e) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (c.t = function (e, t) {
      if ((1 & t && (e = c(e)), 8 & t)) return e;
      if (4 & t && "object" === typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (
        (c.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var a in e)
          c.d(
            r,
            a,
            function (t) {
              return e[t];
            }.bind(null, a)
          );
      return r;
    }),
    (c.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e["default"];
            }
          : function () {
              return e;
            };
      return c.d(t, "a", t), t;
    }),
    (c.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (c.p = "/"),
    (c.oe = function (e) {
      throw (console.error(e), e);
    });
  var i = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    d = i.push.bind(i);
  (i.push = t), (i = i.slice());
  for (var u = 0; u < i.length; u++) t(i[u]);
  var g = d;
  l.push([0, "chunk-vendors"]), r();
})({
  0: function (e, t, r) {
    e.exports = r("56d7");
  },
  "1f7a": function (e, t, r) {},
  "2bf7": function (e, t, r) {
    e.exports = r.p + "img/rice3.f020eb37.jpg";
  },
  "406f": function (e, t, r) {
    e.exports = r.p + "img/rice.130034ee.jpg";
  },
  "56d7": function (e, t, r) {
    "use strict";
    r.r(t);
    r("e260"), r("e6cf"), r("cca6"), r("a79d");
    var a = r("7a23"),
      n = r("fabc"),
      o = (r("bbf4"), Object(a["g"])("div", { id: "nav" }, null, -1));
    function l(e, t) {
      var r = Object(a["x"])("router-view");
      return (
        Object(a["t"])(),
        Object(a["f"])(a["a"], null, [o, Object(a["j"])(r)], 64)
      );
    }
    var s = r("6b0d"),
      c = r.n(s);
    const i = {},
      d = c()(i, [["render", l]]);
    var u = d,
      g = r("9483");
    Object(g["a"])("".concat("/", "service-worker.js"), {
      ready: function () {
        console.log(
          "App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB"
        );
      },
      registered: function () {
        console.log("Service worker has been registered.");
      },
      cached: function () {
        console.log("Content has been cached for offline use.");
      },
      updatefound: function () {
        console.log("New content is downloading.");
      },
      updated: function () {
        console.log("New content is available; please refresh.");
      },
      offline: function () {
        console.log(
          "No internet connection found. App is running in offline mode."
        );
      },
      error: function (e) {
        console.error("Error during service worker registration:", e);
      },
    });
    r("d3b7"), r("3ca3"), r("ddb0");
    var b = r("6c02"),
      m = r("d1b4"),
      h = r.n(m),
      f = r("406f"),
      p = r.n(f),
      v = r("8e4e"),
      y = r.n(v),
      x = r("2bf7"),
      w = r.n(x),
      j = r("62b0"),
      O = r.n(j),
      k = { class: "home" },
      C = { class: "h-full relative overflow-hidden" },
      L = Object(a["g"])(
        "img",
        {
          class:
            "object-cover h-screen w-screen lg:h-96 lg:object-cover md:object-cover md:h-96",
          src: h.a,
          alt: "img",
        },
        null,
        -1
      ),
      z = {
        class:
          "absolute top-0 left-0 border h-full w-full px-12 py-52 lg:px-40 md:px-32 lg:py-24",
      },
      M = Object(a["g"])(
        "h1",
        { class: "text-5xl lg:text-4xl text-white font-semibold py-1" },
        " Project SICAT ",
        -1
      ),
      A = Object(a["g"])(
        "h1",
        { class: "text-xl lg:text-lg text-white font-semibold py-1" },
        " Satellite-Imagery Crop Monitoring and Forecasting Systems for Agriculture and Technology ",
        -1
      ),
      S = Object(a["g"])(
        "p",
        { class: "text-lg lg:text-normal text-white font-normal py-1" },
        " Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
        -1
      ),
      N = { class: "b bg-blue-500 py-2 px-3 rounded-md text-white m-1" },
      B = Object(a["i"])("About Us"),
      I = Object(a["h"])(
        '<div class="w-full bg-white"><h1 class="text-gray-700 text-3xl mt-10 mb-5 w-full font-semibold mx-auto text-center"> Articles for you </h1><div class="grid grid-flow-row md:grid-cols-3 lg:grid-cols-4 px-24 pb-10"><div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mx-2 my-2 lg:my-5"><a href="#"><img class="rounded-t-lg" src="' +
          p.a +
          '" alt=""></a><div class="p-5"><a href="#"><h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> Noteworthy technology acquisitions 2021 </h5></a><p class="mb-3 font-normal text-gray-700 dark:text-gray-400"> Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p><a href="#" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"> Read more <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></a></div></div><div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mx-2 my-2 lg:my-5"><a href="#"><img class="rounded-t-lg" src="' +
          y.a +
          '" alt=""></a><div class="p-5"><a href="#"><h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> Noteworthy technology acquisitions 2021 </h5></a><p class="mb-3 font-normal text-gray-700 dark:text-gray-400"> Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p><a href="#" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"> Read more <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></a></div></div><div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mx-2 my-2 lg:my-5"><a href="#"><img class="rounded-t-lg" src="' +
          p.a +
          '" alt=""></a><div class="p-5"><a href="#"><h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> Noteworthy technology acquisitions 2021 </h5></a><p class="mb-3 font-normal text-gray-700 dark:text-gray-400"> Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p><a href="#" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"> Read more <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></a></div></div><div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mx-2 my-2 lg:my-5"><a href="#"><img class="rounded-t-lg" src="' +
          w.a +
          '" alt=""></a><div class="p-5"><a href="#"><h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> Noteworthy technology acquisitions 2021 </h5></a><p class="mb-3 font-normal text-gray-700 dark:text-gray-400"> Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p><a href="#" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"> Read more <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></a></div></div><div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mx-2 my-2 lg:my-5"><a href="#"><img class="rounded-t-lg" src="' +
          O.a +
          '" alt=""></a><div class="p-5"><a href="#"><h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> Noteworthy technology acquisitions 2021 </h5></a><p class="mb-3 font-normal text-gray-700 dark:text-gray-400"> Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p><a href="#" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"> Read more <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></a></div></div></div></div>',
        1
      );
    function _(e, t, r, n, o, l) {
      var s = Object(a["x"])("Navigation"),
        c = Object(a["x"])("router-link"),
        i = Object(a["x"])("Footer");
      return (
        Object(a["t"])(),
        Object(a["f"])("div", k, [
          Object(a["j"])(s),
          Object(a["g"])("section", C, [
            L,
            Object(a["g"])("div", z, [
              M,
              A,
              S,
              Object(a["g"])("button", N, [
                Object(a["j"])(
                  c,
                  { to: "/about" },
                  {
                    default: Object(a["C"])(function () {
                      return [B];
                    }),
                    _: 1,
                  }
                ),
              ]),
            ]),
          ]),
          I,
          Object(a["j"])(i),
        ])
      );
    }
    var H = r("f4dd"),
      P = r("fd2d"),
      T = { name: "Home", components: { Navigation: H["a"], Footer: P["a"] } };
    const V = c()(T, [["render", _]]);
    var E = V,
      R = [
        { path: "/", name: "Home", component: E },
        {
          path: "/about",
          name: "About",
          component: function () {
            return r.e("about").then(r.bind(null, "f820"));
          },
        },
        {
          path: "/contact",
          name: "Contact",
          component: function () {
            return r.e("about").then(r.bind(null, "b8fa"));
          },
        },
        {
          path: "/portal",
          name: "Portal",
          component: function () {
            return r.e("about").then(r.bind(null, "7859"));
          },
        },
        {
          path: "/dashboard",
          name: "Dashbord",
          component: function () {
            return r.e("about").then(r.bind(null, "7277"));
          },
        },
      ],
      q = Object(b["a"])({ history: Object(b["b"])("/"), routes: R }),
      F = q,
      U = r("5502"),
      D = Object(U["a"])({
        state: {},
        mutations: {},
        actions: {},
        modules: {},
      }),
      J = (r("1f7a"), Object(a["e"])(u));
    J.use(n["a"]), J.use(D), J.use(F), J.mount("#app");
  },
  "62b0": function (e, t, r) {
    e.exports = r.p + "img/rice5.f6aa6aaf.jpg";
  },
  8908: function (e, t, r) {
    e.exports = r.p + "img/TAU.07011464.png";
  },
  "8e4e": function (e, t, r) {
    e.exports = r.p + "img/rice2.03f57fb7.jpg";
  },
  d1b4: function (e, t, r) {
    e.exports = r.p + "img/bg.2c43fe15.jpg";
  },
  f4dd: function (e, t, r) {
    "use strict";
    var a = r("7a23"),
      n = r("8908"),
      o = r.n(n),
      l = {
        class:
          "bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800",
      },
      s = {
        class: "container flex flex-wrap justify-between items-center mx-auto",
      },
      c = Object(a["g"])(
        "a",
        { href: "#", class: "flex items-center" },
        [
          Object(a["g"])("img", {
            src: o.a,
            class: "mr-3 h-12 sm:h-10",
            alt: "Flowbite Logo",
          }),
          Object(a["g"])(
            "span",
            {
              class:
                "self-center text-xl font-semibold whitespace-nowrap dark:text-white",
            },
            "SICAT"
          ),
        ],
        -1
      ),
      i = Object(a["h"])(
        '<span class="sr-only">Open main menu</span><svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg><svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>',
        3
      ),
      d = [i],
      u = {
        class:
          "flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium",
      };
    function g(e, t, r, n, o, i) {
      var g = Object(a["x"])("router-link");
      return (
        Object(a["t"])(),
        Object(a["f"])("nav", l, [
          Object(a["g"])("div", s, [
            Object(a["j"])(
              g,
              { to: "/" },
              {
                default: Object(a["C"])(function () {
                  return [c];
                }),
                _: 1,
              }
            ),
            Object(a["g"])(
              "button",
              {
                "data-collapse-toggle": "mobile-menu",
                type: "button",
                class:
                  "inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600",
                "aria-controls": "mobile-menu-2",
                "aria-expanded": "false",
                onClick:
                  t[0] ||
                  (t[0] = function (e) {
                    return (o.showNav = !o.showNav);
                  }),
              },
              d
            ),
            Object(a["g"])(
              "div",
              {
                class: Object(a["p"])([
                  "w-full md:block md:w-auto",
                  { hidden: o.showNav },
                ]),
                id: "mobile-menu",
              },
              [
                Object(a["g"])("ul", u, [
                  Object(a["g"])("li", null, [
                    Object(a["j"])(
                      g,
                      { to: "/" },
                      {
                        default: Object(a["C"])(function () {
                          return [
                            Object(a["g"])(
                              "a",
                              {
                                href: "#",
                                class: Object(a["p"])([
                                  "block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700",
                                  { "text-blue-700": "Home" == i.currentRoute },
                                ]),
                                "aria-current": "page",
                              },
                              "Home",
                              2
                            ),
                          ];
                        }),
                        _: 1,
                      }
                    ),
                  ]),
                  Object(a["g"])("li", null, [
                    Object(a["j"])(
                      g,
                      { to: "/about" },
                      {
                        default: Object(a["C"])(function () {
                          return [
                            Object(a["g"])(
                              "a",
                              {
                                href: "#",
                                class: Object(a["p"])([
                                  "block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700",
                                  {
                                    "text-blue-700": "About" == i.currentRoute,
                                  },
                                ]),
                              },
                              "About",
                              2
                            ),
                          ];
                        }),
                        _: 1,
                      }
                    ),
                  ]),
                  Object(a["g"])("li", null, [
                    Object(a["j"])(
                      g,
                      { to: "/portal" },
                      {
                        default: Object(a["C"])(function () {
                          return [
                            Object(a["g"])(
                              "a",
                              {
                                href: "#",
                                class: Object(a["p"])([
                                  "block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700",
                                  {
                                    "text-blue-700": "Portal" == i.currentRoute,
                                  },
                                ]),
                              },
                              "Portal",
                              2
                            ),
                          ];
                        }),
                        _: 1,
                      }
                    ),
                  ]),
                  Object(a["g"])("li", null, [
                    Object(a["j"])(
                      g,
                      { to: "/contact" },
                      {
                        default: Object(a["C"])(function () {
                          return [
                            Object(a["g"])(
                              "a",
                              {
                                href: "#",
                                class: Object(a["p"])([
                                  "block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent",
                                  {
                                    "text-blue-700":
                                      "Contact" == i.currentRoute,
                                  },
                                ]),
                              },
                              "Contact",
                              2
                            ),
                          ];
                        }),
                        _: 1,
                      }
                    ),
                  ]),
                  Object(a["g"])("li", null, [
                    Object(a["g"])(
                      "a",
                      {
                        href: "#",
                        class:
                          "block py-2 pr-4 pl-3 text-gray-700 rounded-md w-14 text-center h-7 hover:bg-blue-700 md:hover:bg-blue-700 md:hover:text-white md:hover:bg-transparent md:border-0 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent",
                        onClick:
                          t[1] ||
                          (t[1] = function (e) {
                            return (o.showLogin = !o.showLogin);
                          }),
                      },
                      "Login"
                    ),
                  ]),
                ]),
              ],
              2
            ),
          ]),
        ])
      );
    }
    r("b0c0");
    var b = {
        name: "Navigation",
        setup: function () {},
        data: function () {
          return { showNav: !0, showLogin: !1 };
        },
        methods: {},
        computed: {
          currentRoute: function () {
            return this.$route.name;
          },
        },
        components: {},
      },
      m = r("6b0d"),
      h = r.n(m);
    const f = h()(b, [["render", g]]);
    t["a"] = f;
  },
  fd2d: function (e, t, r) {
    "use strict";
    var a = r("7a23"),
      n = { class: "text-center lg:text-left bg-gray-100 text-gray-600" },
      o = Object(a["g"])(
        "div",
        {
          class:
            "flex justify-center items-center lg:justify-between p-6 border-b border-gray-300",
        },
        [
          Object(a["g"])("div", { class: "mr-12 hidden lg:block" }, [
            Object(a["g"])(
              "span",
              null,
              "Get connected with us on social networks:"
            ),
          ]),
          Object(a["g"])("div", { class: "flex justify-center" }, [
            Object(a["g"])("a", { href: "#!", class: "mr-6 text-gray-600" }, [
              Object(a["g"])(
                "svg",
                {
                  "aria-hidden": "true",
                  focusable: "false",
                  "data-prefix": "fab",
                  "data-icon": "facebook-f",
                  class: "w-2.5",
                  role: "img",
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 320 512",
                },
                [
                  Object(a["g"])("path", {
                    fill: "currentColor",
                    d: "M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z",
                  }),
                ]
              ),
            ]),
            Object(a["g"])("a", { href: "#!", class: "mr-6 text-gray-600" }, [
              Object(a["g"])(
                "svg",
                {
                  "aria-hidden": "true",
                  focusable: "false",
                  "data-prefix": "fab",
                  "data-icon": "twitter",
                  class: "w-4",
                  role: "img",
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 512 512",
                },
                [
                  Object(a["g"])("path", {
                    fill: "currentColor",
                    d: "M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z",
                  }),
                ]
              ),
            ]),
            Object(a["g"])("a", { href: "#!", class: "mr-6 text-gray-600" }, [
              Object(a["g"])(
                "svg",
                {
                  "aria-hidden": "true",
                  focusable: "false",
                  "data-prefix": "fab",
                  "data-icon": "instagram",
                  class: "w-3.5",
                  role: "img",
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 448 512",
                },
                [
                  Object(a["g"])("path", {
                    fill: "currentColor",
                    d: "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z",
                  }),
                ]
              ),
            ]),
          ]),
        ],
        -1
      ),
      l = { class: "mx-6 py-10 text-center md:text-left" },
      s = { class: "grid grid-1 md:grid-cols-2 lg:grid-cols-4 gap-8" },
      c = Object(a["g"])(
        "div",
        { class: "" },
        [
          Object(a["g"])(
            "h6",
            {
              class:
                "uppercase font-semibold mb-4 flex items-center justify-center md:justify-start",
            },
            [
              Object(a["g"])(
                "svg",
                {
                  "aria-hidden": "true",
                  focusable: "false",
                  "data-prefix": "fas",
                  "data-icon": "cubes",
                  class: "w-4 mr-3",
                  role: "img",
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 512 512",
                },
                [
                  Object(a["g"])("path", {
                    fill: "currentColor",
                    d: "M488.6 250.2L392 214V105.5c0-15-9.3-28.4-23.4-33.7l-100-37.5c-8.1-3.1-17.1-3.1-25.3 0l-100 37.5c-14.1 5.3-23.4 18.7-23.4 33.7V214l-96.6 36.2C9.3 255.5 0 268.9 0 283.9V394c0 13.6 7.7 26.1 19.9 32.2l100 50c10.1 5.1 22.1 5.1 32.2 0l103.9-52 103.9 52c10.1 5.1 22.1 5.1 32.2 0l100-50c12.2-6.1 19.9-18.6 19.9-32.2V283.9c0-15-9.3-28.4-23.4-33.7zM358 214.8l-85 31.9v-68.2l85-37v73.3zM154 104.1l102-38.2 102 38.2v.6l-102 41.4-102-41.4v-.6zm84 291.1l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6zm240 112l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6z",
                  }),
                ]
              ),
              Object(a["i"])(" SICAT "),
            ]
          ),
          Object(a["g"])(
            "p",
            null,
            " Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "
          ),
        ],
        -1
      ),
      i = { class: "" },
      d = Object(a["g"])(
        "h6",
        {
          class:
            "uppercase font-semibold mb-4 flex justify-center md:justify-start",
        },
        " Services ",
        -1
      ),
      u = { class: "mb-4" },
      g = Object(a["g"])(
        "a",
        { href: "#!", class: "text-gray-600" },
        "Portal",
        -1
      ),
      b = Object(a["h"])(
        '<p class="mb-4"><a href="#!" class="text-gray-600">Service 2</a></p><p class="mb-4"><a href="#!" class="text-gray-600">Service 3</a></p><p><a href="#!" class="text-gray-600">Service 4</a></p>',
        3
      ),
      m = { class: "" },
      h = Object(a["g"])(
        "h6",
        {
          class:
            "uppercase font-semibold mb-4 flex justify-center md:justify-start",
        },
        " Useful links ",
        -1
      ),
      f = { class: "mb-4" },
      p = { href: "#!", class: "text-gray-600" },
      v = Object(a["i"])("About"),
      y = { class: "mb-4" },
      x = { href: "#!", class: "text-gray-600" },
      w = Object(a["i"])("Contact"),
      j = Object(a["g"])(
        "p",
        null,
        [Object(a["g"])("a", { href: "#!", class: "text-gray-600" }, "Help")],
        -1
      ),
      O = Object(a["g"])(
        "div",
        { class: "" },
        [
          Object(a["g"])(
            "h6",
            {
              class:
                "uppercase font-semibold mb-4 flex justify-center md:justify-start",
            },
            " Contact "
          ),
          Object(a["g"])(
            "p",
            { class: "flex items-center justify-center md:justify-start mb-4" },
            [
              Object(a["g"])(
                "svg",
                {
                  "aria-hidden": "true",
                  focusable: "false",
                  "data-prefix": "fas",
                  "data-icon": "home",
                  class: "w-4 mr-4",
                  role: "img",
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 576 512",
                },
                [
                  Object(a["g"])("path", {
                    fill: "currentColor",
                    d: "M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z",
                  }),
                ]
              ),
              Object(a["i"])(" Camiling, Tarlac 2306, Philippines "),
            ]
          ),
          Object(a["g"])(
            "p",
            { class: "flex items-center justify-center md:justify-start mb-4" },
            [
              Object(a["g"])(
                "svg",
                {
                  "aria-hidden": "true",
                  focusable: "false",
                  "data-prefix": "fas",
                  "data-icon": "envelope",
                  class: "w-4 mr-4",
                  role: "img",
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 512 512",
                },
                [
                  Object(a["g"])("path", {
                    fill: "currentColor",
                    d: "M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z",
                  }),
                ]
              ),
              Object(a["i"])(" presoffice@tau.edu.ph "),
            ]
          ),
          Object(a["g"])(
            "p",
            { class: "flex items-center justify-center md:justify-start mb-4" },
            [
              Object(a["g"])(
                "svg",
                {
                  "aria-hidden": "true",
                  focusable: "false",
                  "data-prefix": "fas",
                  "data-icon": "phone",
                  class: "w-4 mr-4",
                  role: "img",
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 512 512",
                },
                [
                  Object(a["g"])("path", {
                    fill: "currentColor",
                    d: "M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z",
                  }),
                ]
              ),
              Object(a["i"])(" (+6345) 934-0216 "),
            ]
          ),
        ],
        -1
      ),
      k = Object(a["g"])(
        "div",
        { class: "text-center p-6 bg-gray-300" },
        [Object(a["g"])("span", null, "© 2022 Copyright")],
        -1
      );
    function C(e, t, r, C, L, z) {
      var M = Object(a["x"])("router-link");
      return (
        Object(a["t"])(),
        Object(a["f"])("footer", n, [
          o,
          Object(a["g"])("div", l, [
            Object(a["g"])("div", s, [
              c,
              Object(a["g"])("div", i, [
                d,
                Object(a["g"])("p", u, [
                  Object(a["j"])(
                    M,
                    { to: "/portal" },
                    {
                      default: Object(a["C"])(function () {
                        return [g];
                      }),
                      _: 1,
                    }
                  ),
                ]),
                b,
              ]),
              Object(a["g"])("div", m, [
                h,
                Object(a["g"])("p", f, [
                  Object(a["g"])("a", p, [
                    Object(a["j"])(
                      M,
                      { to: "/about" },
                      {
                        default: Object(a["C"])(function () {
                          return [v];
                        }),
                        _: 1,
                      }
                    ),
                  ]),
                ]),
                Object(a["g"])("p", y, [
                  Object(a["g"])("a", x, [
                    Object(a["j"])(
                      M,
                      { to: "/contact" },
                      {
                        default: Object(a["C"])(function () {
                          return [w];
                        }),
                        _: 1,
                      }
                    ),
                  ]),
                ]),
                j,
              ]),
              O,
            ]),
          ]),
          k,
        ])
      );
    }
    var L = { name: "Footer", setup: function () {} },
      z = r("6b0d"),
      M = r.n(z);
    const A = M()(L, [["render", C]]);
    t["a"] = A;
  },
});
//# sourceMappingURL=app.79dbd710.js.map
