// https://unpkg.com/external-svg-loader@0.0.1/svg-loader.min.js
(function() {
    function t(e, r, n) {
        function o(a, i) {
            if (!r[a]) {
                if (!e[a]) {
                    var u = "function" == typeof require && require;
                    if (!i && u) return u(a, !0);
                    if (s) return s(a, !0);
                    var c = new Error("Cannot find module '" + a + "'");
                    throw c.code = "MODULE_NOT_FOUND", c
                }
                var d = r[a] = {
                    exports: {}
                };
                e[a][0].call(d.exports, (function(t) {
                    var r = e[a][1][t];
                    return o(r || t)
                }), d, d.exports, t, e, r, n)
            }
            return r[a].exports
        }
        for (var s = "function" == typeof require && require, a = 0; a < n.length; a++) o(n[a]);
        return o
    }
    return t
})()({
    1: [function(t, e, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: true
        });
        class n {
            constructor(t = "keyval-store", e = "keyval") {
                this.storeName = e;
                this._dbp = new Promise(((r, n) => {
                    const o = indexedDB.open(t, 1);
                    o.onerror = () => n(o.error);
                    o.onsuccess = () => r(o.result);
                    o.onupgradeneeded = () => {
                        o.result.createObjectStore(e)
                    }
                }))
            }
            _withIDBStore(t, e) {
                return this._dbp.then((r => new Promise(((n, o) => {
                    const s = r.transaction(this.storeName, t);
                    s.oncomplete = () => n();
                    s.onabort = s.onerror = () => o(s.error);
                    e(s.objectStore(this.storeName))
                }))))
            }
        }
        let o;

        function s() {
            if (!o) o = new n;
            return o
        }

        function a(t, e = s()) {
            let r;
            return e._withIDBStore("readonly", (e => {
                r = e.get(t)
            })).then((() => r.result))
        }

        function i(t, e, r = s()) {
            return r._withIDBStore("readwrite", (r => {
                r.put(e, t)
            }))
        }

        function u(t, e = s()) {
            return e._withIDBStore("readwrite", (e => {
                e.delete(t)
            }))
        }

        function c(t = s()) {
            return t._withIDBStore("readwrite", (t => {
                t.clear()
            }))
        }

        function d(t = s()) {
            const e = [];
            return t._withIDBStore("readonly", (t => {
                (t.openKeyCursor || t.openCursor).call(t).onsuccess = function() {
                    if (!this.result) return;
                    e.push(this.result.key);
                    this.result.continue()
                }
            })).then((() => e))
        }
        r.Store = n;
        r.get = a;
        r.set = i;
        r.del = u;
        r.clear = c;
        r.keys = d
    }, {}],
    2: [function(t, e, r) {
        "use strict";
        const {
            get: n,
            set: o,
            del: s
        } = t("idb-keyval");
        const a = async t => {
            try {
                let e = await n(`loader_${t}`);
                if (!e) {
                    return
                }
                e = JSON.parse(e);
                if (Date.now() < e.expiry) {
                    return e.data
                } else {
                    s(`loader_${t}`);
                    return
                }
            } catch (t) {
                return
            }
        };
        const i = (t, e, r) => {
            const n = parseInt(r, 10);
            try {
                o(`loader_${t}`, JSON.stringify({
                    data: e,
                    expiry: Date.now() + (Number.isNaN(n) ? 60 * 60 * 1e3 * 24 : n)
                }))
            } catch (t) {
                return
            }
        };
        const u = (t, e) => {
            const r = new DOMParser;
            const n = r.parseFromString(e, "text/html");
            const o = n.querySelector("svg");
            const s = t.getAttribute("data-attributes-set");
            const a = s ? new Set(s.split(",")) : new Set;
            for (let e = 0; e < o.attributes.length; e++) {
                const {
                    name: r,
                    value: n
                } = o.attributes[e];
                if (!t.getAttribute(r) || a.has(r)) {
                    a.add(r);
                    t.setAttribute(r, n)
                }
            }
            t.setAttribute("data-attributes-set", Array.from(a).join(","));
            t.setAttribute("data-rendered", true);
            t.innerHTML = o.innerHTML
        };
        const c = {};
        const d = {};
        const l = async t => {
            const e = t.getAttribute("data-src");
            const r = t.getAttribute("data-cache");
            const n = await a(e);
            const o = r !== "disabled";
            if (d[e] || o && n) {
                const r = d[e] || n;
                u(t, r)
            } else {
                if (c[e]) {
                    setTimeout((() => l(t)), 20);
                    return
                }
                c[e] = true;
                fetch(e).then((t => t.text())).then((n => {
                    if (o) {
                        i(e, n, r)
                    }
                    d[e] = n;
                    u(t, n)
                })).finally((() => {
                    delete c[e]
                }))
            }
        };
        const f = new IntersectionObserver((t => {
            t.forEach((t => {
                if (t.isIntersecting) {
                    l(t.target);
                    f.unobserve(t.target)
                }
            }))
        }), {
            rootMargin: "1200px"
        });
        const h = [];

        function b() {
            Array.from(document.querySelectorAll("svg[data-src]:not([data-rendered])")).forEach((t => {
                if (h.indexOf(t) !== -1) {
                    return
                }
                h.push(t);
                if (t.getAttribute("data-loading") === "lazy") {
                    f.observe(t)
                } else {
                    l(t)
                }
            }))
        }
        let y = false;
        const p = () => {
            if (y) {
                return
            }
            y = true;
            const t = new MutationObserver((t => {
                const e = t.some((t => Array.from(t.addedNodes).some((t => t.nodeType === Node.ELEMENT_NODE && (t.getAttribute("data-src") && !t.getAttribute("data-rendered") || t.querySelector("svg[data-src]:not([data-rendered])"))))));
                if (e) {
                    b()
                }
                t.forEach((t => {
                    if (t.type === "attributes") {
                        l(t.target)
                    }
                }))
            }));
            t.observe(document.documentElement, {
                attributeFilter: ["data-src"],
                attributes: true,
                childList: true,
                subtree: true
            })
        };
        const w = setInterval((() => {
            b()
        }), 100);
        window.addEventListener("DOMContentLoaded", (() => {
            clearInterval(w);
            b();
            p()
        }))
    }, {
        "idb-keyval": 1
    }]
}, {}, [2]);