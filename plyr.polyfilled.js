"object" == typeof navigator &&
  (function (e, t) {
    "object" == typeof exports && "undefined" != typeof module
      ? (module.exports = t())
      : "function" == typeof define && define.amd
      ? define("Plyr", t)
      : ((e = "undefined" != typeof globalThis ? globalThis : e || self).Plyr =
          t());
  })(this, function () {
    "use strict";
    !(function () {
      if ("undefined" != typeof window)
        try {
          var e = new window.CustomEvent("test", { cancelable: !0 });
          if ((e.preventDefault(), !0 !== e.defaultPrevented))
            throw new Error("Could not prevent default");
        } catch (e) {
          var t = function (e, t) {
            var i, s;
            return (
              ((t = t || {}).bubbles = !!t.bubbles),
              (t.cancelable = !!t.cancelable),
              (i = document.createEvent("CustomEvent")).initCustomEvent(
                e,
                t.bubbles,
                t.cancelable,
                t.detail
              ),
              (s = i.preventDefault),
              (i.preventDefault = function () {
                s.call(this);
                try {
                  Object.defineProperty(this, "defaultPrevented", {
                    get: function () {
                      return !0;
                    },
                  });
                } catch (e) {
                  this.defaultPrevented = !0;
                }
              }),
              i
            );
          };
          (t.prototype = window.Event.prototype), (window.CustomEvent = t);
        }
    })();
    var e =
      "undefined" != typeof globalThis
        ? globalThis
        : "undefined" != typeof window
        ? window
        : "undefined" != typeof global
        ? global
        : "undefined" != typeof self
        ? self
        : {};
    function t(e, t, i) {
      return (
        (t = (function (e) {
          var t = (function (e, t) {
            if ("object" != typeof e || null === e) return e;
            var i = e[Symbol.toPrimitive];
            if (void 0 !== i) {
              var s = i.call(e, t || "default");
              if ("object" != typeof s) return s;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return ("string" === t ? String : Number)(e);
          })(e, "string");
          return "symbol" == typeof t ? t : String(t);
        })(t)) in e
          ? Object.defineProperty(e, t, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = i),
        e
      );
    }
    function i(e, t) {
      for (var i = 0; i < t.length; i++) {
        var s = t[i];
        (s.enumerable = s.enumerable || !1),
          (s.configurable = !0),
          "value" in s && (s.writable = !0),
          Object.defineProperty(e, s.key, s);
      }
    }
    function s(e, t, i) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = i),
        e
      );
    }
    function n(e, t) {
      var i = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        t &&
          (s = s.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          i.push.apply(i, s);
      }
      return i;
    }
    function a(e) {
      for (var t = 1; t < arguments.length; t++) {
        var i = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? n(Object(i), !0).forEach(function (t) {
              s(e, t, i[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
          : n(Object(i)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(i, t)
              );
            });
      }
      return e;
    }
    !(function (e) {
      var t = (function () {
          try {
            return !!Symbol.iterator;
          } catch (e) {
            return !1;
          }
        })(),
        i = function (e) {
          var i = {
            next: function () {
              var t = e.shift();
              return { done: void 0 === t, value: t };
            },
          };
          return (
            t &&
              (i[Symbol.iterator] = function () {
                return i;
              }),
            i
          );
        },
        s = function (e) {
          return encodeURIComponent(e).replace(/%20/g, "+");
        },
        n = function (e) {
          return decodeURIComponent(String(e).replace(/\+/g, " "));
        };
      (function () {
        try {
          var t = e.URLSearchParams;
          return (
            "a=1" === new t("?a=1").toString() &&
            "function" == typeof t.prototype.set &&
            "function" == typeof t.prototype.entries
          );
        } catch (e) {
          return !1;
        }
      })() ||
        (function () {
          var n = function (e) {
              Object.defineProperty(this, "_entries", {
                writable: !0,
                value: {},
              });
              var t = typeof e;
              if ("undefined" === t);
              else if ("string" === t) "" !== e && this._fromString(e);
              else if (e instanceof n) {
                var i = this;
                e.forEach(function (e, t) {
                  i.append(t, e);
                });
              } else {
                if (null === e || "object" !== t)
                  throw new TypeError(
                    "Unsupported input's type for URLSearchParams"
                  );
                if ("[object Array]" === Object.prototype.toString.call(e))
                  for (var s = 0; s < e.length; s++) {
                    var a = e[s];
                    if (
                      "[object Array]" !== Object.prototype.toString.call(a) &&
                      2 === a.length
                    )
                      throw new TypeError(
                        "Expected [string, any] as entry at index " +
                          s +
                          " of URLSearchParams's input"
                      );
                    this.append(a[0], a[1]);
                  }
                else
                  for (var r in e) e.hasOwnProperty(r) && this.append(r, e[r]);
              }
            },
            a = n.prototype;
          (a.append = function (e, t) {
            e in this._entries
              ? this._entries[e].push(String(t))
              : (this._entries[e] = [String(t)]);
          }),
            (a.delete = function (e) {
              delete this._entries[e];
            }),
            (a.get = function (e) {
              return e in this._entries ? this._entries[e][0] : null;
            }),
            (a.getAll = function (e) {
              return e in this._entries ? this._entries[e].slice(0) : [];
            }),
            (a.has = function (e) {
              return e in this._entries;
            }),
            (a.set = function (e, t) {
              this._entries[e] = [String(t)];
            }),
            (a.forEach = function (e, t) {
              var i;
              for (var s in this._entries)
                if (this._entries.hasOwnProperty(s)) {
                  i = this._entries[s];
                  for (var n = 0; n < i.length; n++) e.call(t, i[n], s, this);
                }
            }),
            (a.keys = function () {
              var e = [];
              return (
                this.forEach(function (t, i) {
                  e.push(i);
                }),
                i(e)
              );
            }),
            (a.values = function () {
              var e = [];
              return (
                this.forEach(function (t) {
                  e.push(t);
                }),
                i(e)
              );
            }),
            (a.entries = function () {
              var e = [];
              return (
                this.forEach(function (t, i) {
                  e.push([i, t]);
                }),
                i(e)
              );
            }),
            t && (a[Symbol.iterator] = a.entries),
            (a.toString = function () {
              var e = [];
              return (
                this.forEach(function (t, i) {
                  e.push(s(i) + "=" + s(t));
                }),
                e.join("&")
              );
            }),
            (e.URLSearchParams = n);
        })();
      var a = e.URLSearchParams.prototype;
      "function" != typeof a.sort &&
        (a.sort = function () {
          var e = this,
            t = [];
          this.forEach(function (i, s) {
            t.push([s, i]), e._entries || e.delete(s);
          }),
            t.sort(function (e, t) {
              return e[0] < t[0] ? -1 : e[0] > t[0] ? 1 : 0;
            }),
            e._entries && (e._entries = {});
          for (var i = 0; i < t.length; i++) this.append(t[i][0], t[i][1]);
        }),
        "function" != typeof a._fromString &&
          Object.defineProperty(a, "_fromString", {
            enumerable: !1,
            configurable: !1,
            writable: !1,
            value: function (e) {
              if (this._entries) this._entries = {};
              else {
                var t = [];
                this.forEach(function (e, i) {
                  t.push(i);
                });
                for (var i = 0; i < t.length; i++) this.delete(t[i]);
              }
              var s,
                a = (e = e.replace(/^\?/, "")).split("&");
              for (i = 0; i < a.length; i++)
                (s = a[i].split("=")),
                  this.append(n(s[0]), s.length > 1 ? n(s[1]) : "");
            },
          });
    })(
      void 0 !== e
        ? e
        : "undefined" != typeof window
        ? window
        : "undefined" != typeof self
        ? self
        : e
    ),
      (function (e) {
        if (
          ((function () {
            try {
              var t = new e.URL("b", "http://a");
              return (
                (t.pathname = "c d"),
                "http://a/c%20d" === t.href && t.searchParams
              );
            } catch (e) {
              return !1;
            }
          })() ||
            (function () {
              var t = e.URL,
                i = function (t, i) {
                  "string" != typeof t && (t = String(t)),
                    i && "string" != typeof i && (i = String(i));
                  var s,
                    n = document;
                  if (i && (void 0 === e.location || i !== e.location.href)) {
                    (i = i.toLowerCase()),
                      ((s = (n =
                        document.implementation.createHTMLDocument(
                          ""
                        )).createElement("base")).href = i),
                      n.head.appendChild(s);
                    try {
                      if (0 !== s.href.indexOf(i)) throw new Error(s.href);
                    } catch (e) {
                      throw new Error(
                        "URL unable to set base " + i + " due to " + e
                      );
                    }
                  }
                  var a = n.createElement("a");
                  (a.href = t), s && (n.body.appendChild(a), (a.href = a.href));
                  var r = n.createElement("input");
                  if (
                    ((r.type = "url"),
                    (r.value = t),
                    ":" === a.protocol ||
                      !/:/.test(a.href) ||
                      (!r.checkValidity() && !i))
                  )
                    throw new TypeError("Invalid URL");
                  Object.defineProperty(this, "_anchorElement", { value: a });
                  var o = new e.URLSearchParams(this.search),
                    l = !0,
                    c = !0,
                    u = this;
                  ["append", "delete", "set"].forEach(function (e) {
                    var t = o[e];
                    o[e] = function () {
                      t.apply(o, arguments),
                        l && ((c = !1), (u.search = o.toString()), (c = !0));
                    };
                  }),
                    Object.defineProperty(this, "searchParams", {
                      value: o,
                      enumerable: !0,
                    });
                  var h = void 0;
                  Object.defineProperty(this, "_updateSearchParams", {
                    enumerable: !1,
                    configurable: !1,
                    writable: !1,
                    value: function () {
                      this.search !== h &&
                        ((h = this.search),
                        c &&
                          ((l = !1),
                          this.searchParams._fromString(this.search),
                          (l = !0)));
                    },
                  });
                },
                s = i.prototype;
              ["hash", "host", "hostname", "port", "protocol"].forEach(
                function (e) {
                  !(function (e) {
                    Object.defineProperty(s, e, {
                      get: function () {
                        return this._anchorElement[e];
                      },
                      set: function (t) {
                        this._anchorElement[e] = t;
                      },
                      enumerable: !0,
                    });
                  })(e);
                }
              ),
                Object.defineProperty(s, "search", {
                  get: function () {
                    return this._anchorElement.search;
                  },
                  set: function (e) {
                    (this._anchorElement.search = e),
                      this._updateSearchParams();
                  },
                  enumerable: !0,
                }),
                Object.defineProperties(s, {
                  toString: {
                    get: function () {
                      var e = this;
                      return function () {
                        return e.href;
                      };
                    },
                  },
                  href: {
                    get: function () {
                      return this._anchorElement.href.replace(/\?$/, "");
                    },
                    set: function (e) {
                      (this._anchorElement.href = e),
                        this._updateSearchParams();
                    },
                    enumerable: !0,
                  },
                  pathname: {
                    get: function () {
                      return this._anchorElement.pathname.replace(
                        /(^\/?)/,
                        "/"
                      );
                    },
                    set: function (e) {
                      this._anchorElement.pathname = e;
                    },
                    enumerable: !0,
                  },
                  origin: {
                    get: function () {
                      var e = { "http:": 80, "https:": 443, "ftp:": 21 }[
                          this._anchorElement.protocol
                        ],
                        t =
                          this._anchorElement.port != e &&
                          "" !== this._anchorElement.port;
                      return (
                        this._anchorElement.protocol +
                        "//" +
                        this._anchorElement.hostname +
                        (t ? ":" + this._anchorElement.port : "")
                      );
                    },
                    enumerable: !0,
                  },
                  password: {
                    get: function () {
                      return "";
                    },
                    set: function (e) {},
                    enumerable: !0,
                  },
                  username: {
                    get: function () {
                      return "";
                    },
                    set: function (e) {},
                    enumerable: !0,
                  },
                }),
                (i.createObjectURL = function (e) {
                  return t.createObjectURL.apply(t, arguments);
                }),
                (i.revokeObjectURL = function (e) {
                  return t.revokeObjectURL.apply(t, arguments);
                }),
                (e.URL = i);
            })(),
          void 0 !== e.location && !("origin" in e.location))
        ) {
          var t = function () {
            return (
              e.location.protocol +
              "//" +
              e.location.hostname +
              (e.location.port ? ":" + e.location.port : "")
            );
          };
          try {
            Object.defineProperty(e.location, "origin", {
              get: t,
              enumerable: !0,
            });
          } catch (i) {
            setInterval(function () {
              e.location.origin = t();
            }, 100);
          }
        }
      })(
        void 0 !== e
          ? e
          : "undefined" != typeof window
          ? window
          : "undefined" != typeof self
          ? self
          : e
      );
    var r = { addCSS: !0, thumbWidth: 15, watch: !0 };
    var o = function (e) {
        return null != e ? e.constructor : null;
      },
      l = function (e, t) {
        return !!(e && t && e instanceof t);
      },
      c = function (e) {
        return null == e;
      },
      u = function (e) {
        return o(e) === Object;
      },
      h = function (e) {
        return o(e) === String;
      },
      d = function (e) {
        return Array.isArray(e);
      },
      m = function (e) {
        return l(e, NodeList);
      },
      p = {
        nullOrUndefined: c,
        object: u,
        number: function (e) {
          return o(e) === Number && !Number.isNaN(e);
        },
        string: h,
        boolean: function (e) {
          return o(e) === Boolean;
        },
        function: function (e) {
          return o(e) === Function;
        },
        array: d,
        nodeList: m,
        element: function (e) {
          return l(e, Element);
        },
        event: function (e) {
          return l(e, Event);
        },
        empty: function (e) {
          return (
            c(e) ||
            ((h(e) || d(e) || m(e)) && !e.length) ||
            (u(e) && !Object.keys(e).length)
          );
        },
      };
    function g(e, t) {
      if (1 > t) {
        var i = (function (e) {
          var t = "".concat(e).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
          return t
            ? Math.max(0, (t[1] ? t[1].length : 0) - (t[2] ? +t[2] : 0))
            : 0;
        })(t);
        return parseFloat(e.toFixed(i));
      }
      return Math.round(e / t) * t;
    }
    var f = (function () {
      function e(t, i) {
        (function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, e),
          p.element(t)
            ? (this.element = t)
            : p.string(t) && (this.element = document.querySelector(t)),
          p.element(this.element) &&
            p.empty(this.element.rangeTouch) &&
            ((this.config = a({}, r, {}, i)), this.init());
      }
      return (
        (function (e, t, s) {
          t && i(e.prototype, t), s && i(e, s);
        })(
          e,
          [
            {
              key: "init",
              value: function () {
                e.enabled &&
                  (this.config.addCSS &&
                    ((this.element.style.userSelect = "none"),
                    (this.element.style.webKitUserSelect = "none"),
                    (this.element.style.touchAction = "manipulation")),
                  this.listeners(!0),
                  (this.element.rangeTouch = this));
              },
            },
            {
              key: "destroy",
              value: function () {
                e.enabled &&
                  (this.config.addCSS &&
                    ((this.element.style.userSelect = ""),
                    (this.element.style.webKitUserSelect = ""),
                    (this.element.style.touchAction = "")),
                  this.listeners(!1),
                  (this.element.rangeTouch = null));
              },
            },
            {
              key: "listeners",
              value: function (e) {
                var t = this,
                  i = e ? "addEventListener" : "removeEventListener";
                ["touchstart", "touchmove", "touchend"].forEach(function (e) {
                  t.element[i](
                    e,
                    function (e) {
                      return t.set(e);
                    },
                    !1
                  );
                });
              },
            },
            {
              key: "get",
              value: function (t) {
                if (!e.enabled || !p.event(t)) return null;
                var i,
                  s = t.target,
                  n = t.changedTouches[0],
                  a = parseFloat(s.getAttribute("min")) || 0,
                  r = parseFloat(s.getAttribute("max")) || 100,
                  o = parseFloat(s.getAttribute("step")) || 1,
                  l = s.getBoundingClientRect(),
                  c = ((100 / l.width) * (this.config.thumbWidth / 2)) / 100;
                return (
                  0 > (i = (100 / l.width) * (n.clientX - l.left))
                    ? (i = 0)
                    : 100 < i && (i = 100),
                  50 > i
                    ? (i -= (100 - 2 * i) * c)
                    : 50 < i && (i += 2 * (i - 50) * c),
                  a + g((i / 100) * (r - a), o)
                );
              },
            },
            {
              key: "set",
              value: function (t) {
                e.enabled &&
                  p.event(t) &&
                  !t.target.disabled &&
                  (t.preventDefault(),
                  (t.target.value = this.get(t)),
                  (function (e, t) {
                    if (e && t) {
                      var i = new Event(t, { bubbles: !0 });
                      e.dispatchEvent(i);
                    }
                  })(t.target, "touchend" === t.type ? "change" : "input"));
              },
            },
          ],
          [
            {
              key: "setup",
              value: function (t) {
                var i =
                    1 < arguments.length && void 0 !== arguments[1]
                      ? arguments[1]
                      : {},
                  s = null;
                if (
                  (p.empty(t) || p.string(t)
                    ? (s = Array.from(
                        document.querySelectorAll(
                          p.string(t) ? t : 'input[type="range"]'
                        )
                      ))
                    : p.element(t)
                    ? (s = [t])
                    : p.nodeList(t)
                    ? (s = Array.from(t))
                    : p.array(t) && (s = t.filter(p.element)),
                  p.empty(s))
                )
                  return null;
                var n = a({}, r, {}, i);
                if (p.string(t) && n.watch) {
                  var o = new MutationObserver(function (i) {
                    Array.from(i).forEach(function (i) {
                      Array.from(i.addedNodes).forEach(function (i) {
                        p.element(i) &&
                          (function (e, t) {
                            return function () {
                              return Array.from(
                                document.querySelectorAll(t)
                              ).includes(this);
                            }.call(e, t);
                          })(i, t) &&
                          new e(i, n);
                      });
                    });
                  });
                  o.observe(document.body, { childList: !0, subtree: !0 });
                }
                return s.map(function (t) {
                  return new e(t, i);
                });
              },
            },
            {
              key: "enabled",
              get: function () {
                return "ontouchstart" in document.documentElement;
              },
            },
          ]
        ),
        e
      );
    })();
    const y = (e) => (null != e ? e.constructor : null),
      b = (e, t) => Boolean(e && t && e instanceof t),
      v = (e) => null == e,
      w = (e) => y(e) === Object,
      T = (e) => y(e) === String,
      k = (e) => "function" == typeof e,
      E = (e) => Array.isArray(e),
      C = (e) => b(e, NodeList),
      S = (e) =>
        v(e) ||
        ((T(e) || E(e) || C(e)) && !e.length) ||
        (w(e) && !Object.keys(e).length);
    var A = {
      nullOrUndefined: v,
      object: w,
      number: (e) => y(e) === Number && !Number.isNaN(e),
      string: T,
      boolean: (e) => y(e) === Boolean,
      function: k,
      array: E,
      weakMap: (e) => b(e, WeakMap),
      nodeList: C,
      element: (e) =>
        null !== e &&
        "object" == typeof e &&
        1 === e.nodeType &&
        "object" == typeof e.style &&
        "object" == typeof e.ownerDocument,
      textNode: (e) => y(e) === Text,
      event: (e) => b(e, Event),
      keyboardEvent: (e) => b(e, KeyboardEvent),
      cue: (e) => b(e, window.TextTrackCue) || b(e, window.VTTCue),
      track: (e) => b(e, TextTrack) || (!v(e) && T(e.kind)),
      promise: (e) => b(e, Promise) && k(e.then),
      url: (e) => {
        if (b(e, window.URL)) return !0;
        if (!T(e)) return !1;
        let t = e;
        (e.startsWith("http://") && e.startsWith("https://")) ||
          (t = `http://${e}`);
        try {
          return !S(new URL(t).hostname);
        } catch (e) {
          return !1;
        }
      },
      empty: S,
    };
    const P = (() => {
      const e = document.createElement("span"),
        t = {
          WebkitTransition: "webkitTransitionEnd",
          MozTransition: "transitionend",
          OTransition: "oTransitionEnd otransitionend",
          transition: "transitionend",
        },
        i = Object.keys(t).find((t) => void 0 !== e.style[t]);
      return !!A.string(i) && t[i];
    })();
    function M(e, t) {
      setTimeout(() => {
        try {
          (e.hidden = !0), e.offsetHeight, (e.hidden = !1);
        } catch (e) {}
      }, t);
    }
    var x = {
      isIE: Boolean(window.document.documentMode),
      isEdge: /Edge/g.test(navigator.userAgent),
      isWebKit:
        "WebkitAppearance" in document.documentElement.style &&
        !/Edge/g.test(navigator.userAgent),
      isIPhone:
        /iPhone|iPod/gi.test(navigator.userAgent) &&
        navigator.maxTouchPoints > 1,
      isIPadOS:
        "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1,
      isIos:
        /iPad|iPhone|iPod/gi.test(navigator.userAgent) &&
        navigator.maxTouchPoints > 1,
    };
    function L(e, t) {
      return t.split(".").reduce((e, t) => e && e[t], e);
    }
    function N(e = {}, ...t) {
      if (!t.length) return e;
      const i = t.shift();
      return A.object(i)
        ? (Object.keys(i).forEach((t) => {
            A.object(i[t])
              ? (Object.keys(e).includes(t) || Object.assign(e, { [t]: {} }),
                N(e[t], i[t]))
              : Object.assign(e, { [t]: i[t] });
          }),
          N(e, ...t))
        : e;
    }
    function _(e, t) {
      const i = e.length ? e : [e];
      Array.from(i)
        .reverse()
        .forEach((e, i) => {
          const s = i > 0 ? t.cloneNode(!0) : t,
            n = e.parentNode,
            a = e.nextSibling;
          s.appendChild(e), a ? n.insertBefore(s, a) : n.appendChild(s);
        });
    }
    function I(e, t) {
      A.element(e) &&
        !A.empty(t) &&
        Object.entries(t)
          .filter(([, e]) => !A.nullOrUndefined(e))
          .forEach(([t, i]) => e.setAttribute(t, i));
    }
    function O(e, t, i) {
      const s = document.createElement(e);
      return A.object(t) && I(s, t), A.string(i) && (s.innerText = i), s;
    }
    function $(e, t, i, s) {
      A.element(t) && t.appendChild(O(e, i, s));
    }
    function j(e) {
      A.nodeList(e) || A.array(e)
        ? Array.from(e).forEach(j)
        : A.element(e) &&
          A.element(e.parentNode) &&
          e.parentNode.removeChild(e);
    }
    function R(e) {
      if (!A.element(e)) return;
      let { length: t } = e.childNodes;
      for (; t > 0; ) e.removeChild(e.lastChild), (t -= 1);
    }
    function D(e, t) {
      return A.element(t) && A.element(t.parentNode) && A.element(e)
        ? (t.parentNode.replaceChild(e, t), e)
        : null;
    }
    function q(e, t) {
      if (!A.string(e) || A.empty(e)) return {};
      const i = {},
        s = N({}, t);
      return (
        e.split(",").forEach((e) => {
          const t = e.trim(),
            n = t.replace(".", ""),
            a = t.replace(/[[\]]/g, "").split("="),
            [r] = a,
            o = a.length > 1 ? a[1].replace(/["']/g, "") : "";
          switch (t.charAt(0)) {
            case ".":
              A.string(s.class) ? (i.class = `${s.class} ${n}`) : (i.class = n);
              break;
            case "#":
              i.id = t.replace("#", "");
              break;
            case "[":
              i[r] = o;
          }
        }),
        N(s, i)
      );
    }
    function H(e, t) {
      if (!A.element(e)) return;
      let i = t;
      A.boolean(i) || (i = !e.hidden), (e.hidden = i);
    }
    function F(e, t, i) {
      if (A.nodeList(e)) return Array.from(e).map((e) => F(e, t, i));
      if (A.element(e)) {
        let s = "toggle";
        return (
          void 0 !== i && (s = i ? "add" : "remove"),
          e.classList[s](t),
          e.classList.contains(t)
        );
      }
      return !1;
    }
    function U(e, t) {
      return A.element(e) && e.classList.contains(t);
    }
    function V(e, t) {
      const { prototype: i } = Element;
      return (
        i.matches ||
        i.webkitMatchesSelector ||
        i.mozMatchesSelector ||
        i.msMatchesSelector ||
        function () {
          return Array.from(document.querySelectorAll(t)).includes(this);
        }
      ).call(e, t);
    }
    function B(e) {
      return this.elements.container.querySelectorAll(e);
    }
    function W(e) {
      return this.elements.container.querySelector(e);
    }
    function z(e = null, t = !1) {
      A.element(e) && e.focus({ preventScroll: !0, focusVisible: t });
    }
    const K = {
        "audio/ogg": "vorbis",
        "audio/wav": "1",
        "video/webm": "vp8, vorbis",
        "video/mp4": "avc1.42E01E, mp4a.40.2",
        "video/ogg": "theora",
      },
      Y = {
        audio: "canPlayType" in document.createElement("audio"),
        video: "canPlayType" in document.createElement("video"),
        check(e, t) {
          const i = Y[e] || "html5" !== t;
          return { api: i, ui: i && Y.rangeInput };
        },
        pip: !(
          x.isIPhone ||
          (!A.function(O("video").webkitSetPresentationMode) &&
            (!document.pictureInPictureEnabled ||
              O("video").disablePictureInPicture))
        ),
        airplay: A.function(window.WebKitPlaybackTargetAvailabilityEvent),
        playsinline: "playsInline" in document.createElement("video"),
        mime(e) {
          if (A.empty(e)) return !1;
          const [t] = e.split("/");
          let i = e;
          if (!this.isHTML5 || t !== this.type) return !1;
          Object.keys(K).includes(i) && (i += `; codecs="${K[e]}"`);
          try {
            return Boolean(i && this.media.canPlayType(i).replace(/no/, ""));
          } catch (e) {
            return !1;
          }
        },
        textTracks: "textTracks" in document.createElement("video"),
        rangeInput: (() => {
          const e = document.createElement("input");
          return (e.type = "range"), "range" === e.type;
        })(),
        touch: "ontouchstart" in document.documentElement,
        transitions: !1 !== P,
        reducedMotion:
          "matchMedia" in window &&
          window.matchMedia("(prefers-reduced-motion)").matches,
      },
      Q = (() => {
        let e = !1;
        try {
          const t = Object.defineProperty({}, "passive", {
            get: () => ((e = !0), null),
          });
          window.addEventListener("test", null, t),
            window.removeEventListener("test", null, t);
        } catch (e) {}
        return e;
      })();
    function X(e, t, i, s = !1, n = !0, a = !1) {
      if (!e || !("addEventListener" in e) || A.empty(t) || !A.function(i))
        return;
      const r = t.split(" ");
      let o = a;
      Q && (o = { passive: n, capture: a }),
        r.forEach((t) => {
          this &&
            this.eventListeners &&
            s &&
            this.eventListeners.push({
              element: e,
              type: t,
              callback: i,
              options: o,
            }),
            e[s ? "addEventListener" : "removeEventListener"](t, i, o);
        });
    }
    function J(e, t = "", i, s = !0, n = !1) {
      X.call(this, e, t, i, !0, s, n);
    }
    function G(e, t = "", i, s = !0, n = !1) {
      X.call(this, e, t, i, !1, s, n);
    }
    function Z(e, t = "", i, s = !0, n = !1) {
      const a = (...r) => {
        G(e, t, a, s, n), i.apply(this, r);
      };
      X.call(this, e, t, a, !0, s, n);
    }
    function ee(e, t = "", i = !1, s = {}) {
      if (!A.element(e) || A.empty(t)) return;
      const n = new CustomEvent(t, {
        bubbles: i,
        detail: { ...s, plyr: this },
      });
      e.dispatchEvent(n);
    }
    function te() {
      this &&
        this.eventListeners &&
        (this.eventListeners.forEach((e) => {
          const { element: t, type: i, callback: s, options: n } = e;
          t.removeEventListener(i, s, n);
        }),
        (this.eventListeners = []));
    }
    function ie() {
      return new Promise((e) =>
        this.ready
          ? setTimeout(e, 0)
          : J.call(this, this.elements.container, "ready", e)
      ).then(() => {});
    }
    function se(e) {
      A.promise(e) && e.then(null, () => {});
    }
    function ne(e) {
      return A.array(e) ? e.filter((t, i) => e.indexOf(t) === i) : e;
    }
    function ae(e, t) {
      return A.array(e) && e.length
        ? e.reduce((e, i) => (Math.abs(i - t) < Math.abs(e - t) ? i : e))
        : null;
    }
    function re(e) {
      return !(!window || !window.CSS) && window.CSS.supports(e);
    }
    const oe = [
      [1, 1],
      [4, 3],
      [3, 4],
      [5, 4],
      [4, 5],
      [3, 2],
      [2, 3],
      [16, 10],
      [10, 16],
      [16, 9],
      [9, 16],
      [21, 9],
      [9, 21],
      [32, 9],
      [9, 32],
    ].reduce((e, [t, i]) => ({ ...e, [t / i]: [t, i] }), {});
    function le(e) {
      if (!(A.array(e) || (A.string(e) && e.includes(":")))) return !1;
      return (A.array(e) ? e : e.split(":")).map(Number).every(A.number);
    }
    function ce(e) {
      if (!A.array(e) || !e.every(A.number)) return null;
      const [t, i] = e,
        s = (e, t) => (0 === t ? e : s(t, e % t)),
        n = s(t, i);
      return [t / n, i / n];
    }
    function ue(e) {
      const t = (e) => (le(e) ? e.split(":").map(Number) : null);
      let i = t(e);
      if (
        (null === i && (i = t(this.config.ratio)),
        null === i &&
          !A.empty(this.embed) &&
          A.array(this.embed.ratio) &&
          ({ ratio: i } = this.embed),
        null === i && this.isHTML5)
      ) {
        const { videoWidth: e, videoHeight: t } = this.media;
        i = [e, t];
      }
      return ce(i);
    }
    function he(e) {
      if (!this.isVideo) return {};
      const { wrapper: t } = this.elements,
        i = ue.call(this, e);
      if (!A.array(i)) return {};
      const [s, n] = ce(i),
        a = (100 / s) * n;
      if (
        (re(`aspect-ratio: ${s}/${n}`)
          ? (t.style.aspectRatio = `${s}/${n}`)
          : (t.style.paddingBottom = `${a}%`),
        this.isVimeo && !this.config.vimeo.premium && this.supported.ui)
      ) {
        const e =
            (100 / this.media.offsetWidth) *
            parseInt(window.getComputedStyle(this.media).paddingBottom, 10),
          i = (e - a) / (e / 50);
        this.fullscreen.active
          ? (t.style.paddingBottom = null)
          : (this.media.style.transform = `translateY(-${i}%)`);
      } else this.isHTML5 && t.classList.add(this.config.classNames.videoFixedRatio);
      return { padding: a, ratio: i };
    }
    function de(e, t, i = 0.05) {
      const s = e / t,
        n = ae(Object.keys(oe), s);
      return Math.abs(n - s) <= i ? oe[n] : [e, t];
    }
    const me = {
      getSources() {
        if (!this.isHTML5) return [];
        return Array.from(this.media.querySelectorAll("source")).filter((e) => {
          const t = e.getAttribute("type");
          return !!A.empty(t) || Y.mime.call(this, t);
        });
      },
      getQualityOptions() {
        return this.config.quality.forced
          ? this.config.quality.options
          : me.getSources
              .call(this)
              .map((e) => Number(e.getAttribute("size")))
              .filter(Boolean);
      },
      setup() {
        if (!this.isHTML5) return;
        const e = this;
        (e.options.speed = e.config.speed.options),
          A.empty(this.config.ratio) || he.call(e),
          Object.defineProperty(e.media, "quality", {
            get() {
              const t = me.getSources
                .call(e)
                .find((t) => t.getAttribute("src") === e.source);
              return t && Number(t.getAttribute("size"));
            },
            set(t) {
              if (e.quality !== t) {
                if (
                  e.config.quality.forced &&
                  A.function(e.config.quality.onChange)
                )
                  e.config.quality.onChange(t);
                else {
                  const i = me.getSources
                    .call(e)
                    .find((e) => Number(e.getAttribute("size")) === t);
                  if (!i) return;
                  const {
                    currentTime: s,
                    paused: n,
                    preload: a,
                    readyState: r,
                    playbackRate: o,
                  } = e.media;
                  (e.media.src = i.getAttribute("src")),
                    ("none" !== a || r) &&
                      (e.once("loadedmetadata", () => {
                        (e.speed = o), (e.currentTime = s), n || se(e.play());
                      }),
                      e.media.load());
                }
                ee.call(e, e.media, "qualitychange", !1, { quality: t });
              }
            },
          });
      },
      cancelRequests() {
        this.isHTML5 &&
          (j(me.getSources.call(this)),
          this.media.setAttribute("src", this.config.blankVideo),
          this.media.load(),
          this.debug.log("Cancelled network requests"));
      },
    };
    function pe(e, ...t) {
      return A.empty(e)
        ? e
        : e.toString().replace(/{(\d+)}/g, (e, i) => t[i].toString());
    }
    const ge = (e = "", t = "", i = "") =>
        e.replace(
          new RegExp(
            t.toString().replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$1"),
            "g"
          ),
          i.toString()
        ),
      fe = (e = "") =>
        e
          .toString()
          .replace(
            /\w\S*/g,
            (e) => e.charAt(0).toUpperCase() + e.slice(1).toLowerCase()
          );
    function ye(e = "") {
      let t = e.toString();
      return (
        (t = (function (e = "") {
          let t = e.toString();
          return (
            (t = ge(t, "-", " ")),
            (t = ge(t, "_", " ")),
            (t = fe(t)),
            ge(t, " ", "")
          );
        })(t)),
        t.charAt(0).toLowerCase() + t.slice(1)
      );
    }
    function be(e) {
      const t = document.createElement("div");
      return t.appendChild(e), t.innerHTML;
    }
    const ve = {
        pip: "PIP",
        airplay: "AirPlay",
        html5: "HTML5",
        vimeo: "Vimeo",
        youtube: "YouTube",
      },
      we = {
        get(e = "", t = {}) {
          if (A.empty(e) || A.empty(t)) return "";
          let i = L(t.i18n, e);
          if (A.empty(i)) return Object.keys(ve).includes(e) ? ve[e] : "";
          const s = { "{seektime}": t.seekTime, "{title}": t.title };
          return (
            Object.entries(s).forEach(([e, t]) => {
              i = ge(i, e, t);
            }),
            i
          );
        },
      };
    class Te {
      constructor(e) {
        t(this, "get", (e) => {
          if (!Te.supported || !this.enabled) return null;
          const t = window.localStorage.getItem(this.key);
          if (A.empty(t)) return null;
          const i = JSON.parse(t);
          return A.string(e) && e.length ? i[e] : i;
        }),
          t(this, "set", (e) => {
            if (!Te.supported || !this.enabled) return;
            if (!A.object(e)) return;
            let t = this.get();
            A.empty(t) && (t = {}), N(t, e);
            try {
              window.localStorage.setItem(this.key, JSON.stringify(t));
            } catch (e) {}
          }),
          (this.enabled = e.config.storage.enabled),
          (this.key = e.config.storage.key);
      }
      static get supported() {
        try {
          if (!("localStorage" in window)) return !1;
          const e = "___test";
          return (
            window.localStorage.setItem(e, e),
            window.localStorage.removeItem(e),
            !0
          );
        } catch (e) {
          return !1;
        }
      }
    }
    function ke(e, t = "text") {
      return new Promise((i, s) => {
        try {
          const s = new XMLHttpRequest();
          if (!("withCredentials" in s)) return;
          s.addEventListener("load", () => {
            if ("text" === t)
              try {
                i(JSON.parse(s.responseText));
              } catch (e) {
                i(s.responseText);
              }
            else i(s.response);
          }),
            s.addEventListener("error", () => {
              throw new Error(s.status);
            }),
            s.open("GET", e, !0),
            (s.responseType = t),
            s.send();
        } catch (e) {
          s(e);
        }
      });
    }
    function Ee(e, t) {
      if (!A.string(e)) return;
      const i = "cache",
        s = A.string(t);
      let n = !1;
      const a = () => null !== document.getElementById(t),
        r = (e, t) => {
          (e.innerHTML = t),
            (s && a()) || document.body.insertAdjacentElement("afterbegin", e);
        };
      if (!s || !a()) {
        const a = Te.supported,
          o = document.createElement("div");
        if ((o.setAttribute("hidden", ""), s && o.setAttribute("id", t), a)) {
          const e = window.localStorage.getItem(`${i}-${t}`);
          if (((n = null !== e), n)) {
            const t = JSON.parse(e);
            r(o, t.content);
          }
        }
        ke(e)
          .then((e) => {
            if (!A.empty(e)) {
              if (a)
                try {
                  window.localStorage.setItem(
                    `${i}-${t}`,
                    JSON.stringify({ content: e })
                  );
                } catch (e) {}
              r(o, e);
            }
          })
          .catch(() => {});
      }
    }
    const Ce = (e) => Math.trunc((e / 60 / 60) % 60, 10),
      Se = (e) => Math.trunc((e / 60) % 60, 10),
      Ae = (e) => Math.trunc(e % 60, 10);
    function Pe(e = 0, t = !1, i = !1) {
      if (!A.number(e)) return Pe(void 0, t, i);
      const s = (e) => `0${e}`.slice(-2);
      let n = Ce(e);
      const a = Se(e),
        r = Ae(e);
      return (
        (n = t || n > 0 ? `${n}:` : ""),
        `${i && e > 0 ? "-" : ""}${n}${s(a)}:${s(r)}`
      );
    }
    const Me = {
      getIconUrl() {
        const e = new URL(this.config.iconUrl, window.location),
          t = window.location.host
            ? window.location.host
            : window.top.location.host,
          i = e.host !== t || (x.isIE && !window.svg4everybody);
        return { url: this.config.iconUrl, cors: i };
      },
      findElements() {
        try {
          return (
            (this.elements.controls = W.call(
              this,
              this.config.selectors.controls.wrapper
            )),
            (this.elements.buttons = {
              play: B.call(this, this.config.selectors.buttons.play),
              pause: W.call(this, this.config.selectors.buttons.pause),
              restart: W.call(this, this.config.selectors.buttons.restart),
              rewind: W.call(this, this.config.selectors.buttons.rewind),
              fastForward: W.call(
                this,
                this.config.selectors.buttons.fastForward
              ),
              mute: W.call(this, this.config.selectors.buttons.mute),
              pip: W.call(this, this.config.selectors.buttons.pip),
              airplay: W.call(this, this.config.selectors.buttons.airplay),
              settings: W.call(this, this.config.selectors.buttons.settings),
              captions: W.call(this, this.config.selectors.buttons.captions),
              fullscreen: W.call(
                this,
                this.config.selectors.buttons.fullscreen
              ),
            }),
            (this.elements.progress = W.call(
              this,
              this.config.selectors.progress
            )),
            (this.elements.inputs = {
              seek: W.call(this, this.config.selectors.inputs.seek),
              volume: W.call(this, this.config.selectors.inputs.volume),
            }),
            (this.elements.display = {
              buffer: W.call(this, this.config.selectors.display.buffer),
              currentTime: W.call(
                this,
                this.config.selectors.display.currentTime
              ),
              duration: W.call(this, this.config.selectors.display.duration),
            }),
            A.element(this.elements.progress) &&
              (this.elements.display.seekTooltip =
                this.elements.progress.querySelector(
                  `.${this.config.classNames.tooltip}`
                )),
            !0
          );
        } catch (e) {
          return (
            this.debug.warn(
              "It looks like there is a problem with your custom controls HTML",
              e
            ),
            this.toggleNativeControls(!0),
            !1
          );
        }
      },
      createIcon(e, t) {
        const i = "http://www.w3.org/2000/svg",
          s = Me.getIconUrl.call(this),
          n = `${s.cors ? "" : s.url}#${this.config.iconPrefix}`,
          a = document.createElementNS(i, "svg");
        I(a, N(t, { "aria-hidden": "true", focusable: "false" }));
        const r = document.createElementNS(i, "use"),
          o = `${n}-${e}`;
        return (
          "href" in r &&
            r.setAttributeNS("http://www.w3.org/1999/xlink", "href", o),
          r.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", o),
          a.appendChild(r),
          a
        );
      },
      createLabel(e, t = {}) {
        const i = we.get(e, this.config);
        return O(
          "span",
          {
            ...t,
            class: [t.class, this.config.classNames.hidden]
              .filter(Boolean)
              .join(" "),
          },
          i
        );
      },
      createBadge(e) {
        if (A.empty(e)) return null;
        const t = O("span", { class: this.config.classNames.menu.value });
        return (
          t.appendChild(
            O("span", { class: this.config.classNames.menu.badge }, e)
          ),
          t
        );
      },
      createButton(e, t) {
        const i = N({}, t);
        let s = ye(e);
        const n = {
          element: "button",
          toggle: !1,
          label: null,
          icon: null,
          labelPressed: null,
          iconPressed: null,
        };
        switch (
          (["element", "icon", "label"].forEach((e) => {
            Object.keys(i).includes(e) && ((n[e] = i[e]), delete i[e]);
          }),
          "button" !== n.element ||
            Object.keys(i).includes("type") ||
            (i.type = "button"),
          Object.keys(i).includes("class")
            ? i.class
                .split(" ")
                .some((e) => e === this.config.classNames.control) ||
              N(i, { class: `${i.class} ${this.config.classNames.control}` })
            : (i.class = this.config.classNames.control),
          e)
        ) {
          case "play":
            (n.toggle = !0),
              (n.label = "play"),
              (n.labelPressed = "pause"),
              (n.icon = "play"),
              (n.iconPressed = "pause");
            break;
          case "mute":
            (n.toggle = !0),
              (n.label = "mute"),
              (n.labelPressed = "unmute"),
              (n.icon = "volume"),
              (n.iconPressed = "muted");
            break;
          case "captions":
            (n.toggle = !0),
              (n.label = "enableCaptions"),
              (n.labelPressed = "disableCaptions"),
              (n.icon = "captions-off"),
              (n.iconPressed = "captions-on");
            break;
          case "fullscreen":
            (n.toggle = !0),
              (n.label = "enterFullscreen"),
              (n.labelPressed = "exitFullscreen"),
              (n.icon = "enter-fullscreen"),
              (n.iconPressed = "exit-fullscreen");
            break;
          case "play-large":
            (i.class += ` ${this.config.classNames.control}--overlaid`),
              (s = "play"),
              (n.label = "play"),
              (n.icon = "play");
            break;
          default:
            A.empty(n.label) && (n.label = s), A.empty(n.icon) && (n.icon = e);
        }
        const a = O(n.element);
        return (
          n.toggle
            ? (a.appendChild(
                Me.createIcon.call(this, n.iconPressed, {
                  class: "icon--pressed",
                })
              ),
              a.appendChild(
                Me.createIcon.call(this, n.icon, { class: "icon--not-pressed" })
              ),
              a.appendChild(
                Me.createLabel.call(this, n.labelPressed, {
                  class: "label--pressed",
                })
              ),
              a.appendChild(
                Me.createLabel.call(this, n.label, {
                  class: "label--not-pressed",
                })
              ))
            : (a.appendChild(Me.createIcon.call(this, n.icon)),
              a.appendChild(Me.createLabel.call(this, n.label))),
          N(i, q(this.config.selectors.buttons[s], i)),
          I(a, i),
          "play" === s
            ? (A.array(this.elements.buttons[s]) ||
                (this.elements.buttons[s] = []),
              this.elements.buttons[s].push(a))
            : (this.elements.buttons[s] = a),
          a
        );
      },
      createRange(e, t) {
        const i = O(
          "input",
          N(
            q(this.config.selectors.inputs[e]),
            {
              type: "range",
              min: 0,
              max: 100,
              step: 0.01,
              value: 0,
              autocomplete: "off",
              role: "slider",
              "aria-label": we.get(e, this.config),
              "aria-valuemin": 0,
              "aria-valuemax": 100,
              "aria-valuenow": 0,
            },
            t
          )
        );
        return (
          (this.elements.inputs[e] = i),
          Me.updateRangeFill.call(this, i),
          f.setup(i),
          i
        );
      },
      createProgress(e, t) {
        const i = O(
          "progress",
          N(
            q(this.config.selectors.display[e]),
            {
              min: 0,
              max: 100,
              value: 0,
              role: "progressbar",
              "aria-hidden": !0,
            },
            t
          )
        );
        if ("volume" !== e) {
          i.appendChild(O("span", null, "0"));
          const t = { played: "played", buffer: "buffered" }[e],
            s = t ? we.get(t, this.config) : "";
          i.innerText = `% ${s.toLowerCase()}`;
        }
        return (this.elements.display[e] = i), i;
      },
      createTime(e, t) {
        const i = q(this.config.selectors.display[e], t),
          s = O(
            "div",
            N(i, {
              class: `${i.class ? i.class : ""} ${
                this.config.classNames.display.time
              } `.trim(),
              "aria-label": we.get(e, this.config),
              role: "timer",
            }),
            "00:00"
          );
        return (this.elements.display[e] = s), s;
      },
      bindMenuItemShortcuts(e, t) {
        J.call(
          this,
          e,
          "keydown keyup",
          (i) => {
            if (![" ", "ArrowUp", "ArrowDown", "ArrowRight"].includes(i.key))
              return;
            if ((i.preventDefault(), i.stopPropagation(), "keydown" === i.type))
              return;
            const s = V(e, '[role="menuitemradio"]');
            if (!s && [" ", "ArrowRight"].includes(i.key))
              Me.showMenuPanel.call(this, t, !0);
            else {
              let t;
              " " !== i.key &&
                ("ArrowDown" === i.key || (s && "ArrowRight" === i.key)
                  ? ((t = e.nextElementSibling),
                    A.element(t) || (t = e.parentNode.firstElementChild))
                  : ((t = e.previousElementSibling),
                    A.element(t) || (t = e.parentNode.lastElementChild)),
                z.call(this, t, !0));
            }
          },
          !1
        ),
          J.call(this, e, "keyup", (e) => {
            "Return" === e.key && Me.focusFirstMenuItem.call(this, null, !0);
          });
      },
      createMenuItem({
        value: e,
        list: t,
        type: i,
        title: s,
        badge: n = null,
        checked: a = !1,
      }) {
        const r = q(this.config.selectors.inputs[i]),
          o = O(
            "button",
            N(r, {
              type: "button",
              role: "menuitemradio",
              class: `${this.config.classNames.control} ${
                r.class ? r.class : ""
              }`.trim(),
              "aria-checked": a,
              value: e,
            })
          ),
          l = O("span");
        (l.innerHTML = s),
          A.element(n) && l.appendChild(n),
          o.appendChild(l),
          Object.defineProperty(o, "checked", {
            enumerable: !0,
            get: () => "true" === o.getAttribute("aria-checked"),
            set(e) {
              e &&
                Array.from(o.parentNode.children)
                  .filter((e) => V(e, '[role="menuitemradio"]'))
                  .forEach((e) => e.setAttribute("aria-checked", "false")),
                o.setAttribute("aria-checked", e ? "true" : "false");
            },
          }),
          this.listeners.bind(
            o,
            "click keyup",
            (t) => {
              if (!A.keyboardEvent(t) || " " === t.key) {
                switch (
                  (t.preventDefault(), t.stopPropagation(), (o.checked = !0), i)
                ) {
                  case "language":
                    this.currentTrack = Number(e);
                    break;
                  case "quality":
                    this.quality = e;
                    break;
                  case "speed":
                    this.speed = parseFloat(e);
                }
                Me.showMenuPanel.call(this, "home", A.keyboardEvent(t));
              }
            },
            i,
            !1
          ),
          Me.bindMenuItemShortcuts.call(this, o, i),
          t.appendChild(o);
      },
      formatTime(e = 0, t = !1) {
        if (!A.number(e)) return e;
        return Pe(e, Ce(this.duration) > 0, t);
      },
      updateTimeDisplay(e = null, t = 0, i = !1) {
        A.element(e) && A.number(t) && (e.innerText = Me.formatTime(t, i));
      },
      updateVolume() {
        this.supported.ui &&
          (A.element(this.elements.inputs.volume) &&
            Me.setRange.call(
              this,
              this.elements.inputs.volume,
              this.muted ? 0 : this.volume
            ),
          A.element(this.elements.buttons.mute) &&
            (this.elements.buttons.mute.pressed =
              this.muted || 0 === this.volume));
      },
      setRange(e, t = 0) {
        A.element(e) && ((e.value = t), Me.updateRangeFill.call(this, e));
      },
      updateProgress(e) {
        if (!this.supported.ui || !A.event(e)) return;
        let t = 0;
        const i = (e, t) => {
          const i = A.number(t) ? t : 0,
            s = A.element(e) ? e : this.elements.display.buffer;
          if (A.element(s)) {
            s.value = i;
            const e = s.getElementsByTagName("span")[0];
            A.element(e) && (e.childNodes[0].nodeValue = i);
          }
        };
        if (e)
          switch (e.type) {
            case "timeupdate":
            case "seeking":
            case "seeked":
              (s = this.currentTime),
                (n = this.duration),
                (t =
                  0 === s || 0 === n || Number.isNaN(s) || Number.isNaN(n)
                    ? 0
                    : ((s / n) * 100).toFixed(2)),
                "timeupdate" === e.type &&
                  Me.setRange.call(this, this.elements.inputs.seek, t);
              break;
            case "playing":
            case "progress":
              i(this.elements.display.buffer, 100 * this.buffered);
          }
        var s, n;
      },
      updateRangeFill(e) {
        const t = A.event(e) ? e.target : e;
        if (A.element(t) && "range" === t.getAttribute("type")) {
          if (V(t, this.config.selectors.inputs.seek)) {
            t.setAttribute("aria-valuenow", this.currentTime);
            const e = Me.formatTime(this.currentTime),
              i = Me.formatTime(this.duration),
              s = we.get("seekLabel", this.config);
            t.setAttribute(
              "aria-valuetext",
              s.replace("{currentTime}", e).replace("{duration}", i)
            );
          } else if (V(t, this.config.selectors.inputs.volume)) {
            const e = 100 * t.value;
            t.setAttribute("aria-valuenow", e),
              t.setAttribute("aria-valuetext", `${e.toFixed(1)}%`);
          } else t.setAttribute("aria-valuenow", t.value);
          (x.isWebKit || x.isIPadOS) &&
            t.style.setProperty("--value", (t.value / t.max) * 100 + "%");
        }
      },
      updateSeekTooltip(e) {
        var t, i;
        if (
          !this.config.tooltips.seek ||
          !A.element(this.elements.inputs.seek) ||
          !A.element(this.elements.display.seekTooltip) ||
          0 === this.duration
        )
          return;
        const s = this.elements.display.seekTooltip,
          n = `${this.config.classNames.tooltip}--visible`,
          a = (e) => F(s, n, e);
        if (this.touch) return void a(!1);
        let r = 0;
        const o = this.elements.progress.getBoundingClientRect();
        if (A.event(e)) r = (100 / o.width) * (e.pageX - o.left);
        else {
          if (!U(s, n)) return;
          r = parseFloat(s.style.left, 10);
        }
        r < 0 ? (r = 0) : r > 100 && (r = 100);
        const l = (this.duration / 100) * r;
        s.innerText = Me.formatTime(l);
        const c =
          null === (t = this.config.markers) ||
          void 0 === t ||
          null === (i = t.points) ||
          void 0 === i
            ? void 0
            : i.find(({ time: e }) => e === Math.round(l));
        c && s.insertAdjacentHTML("afterbegin", `${c.label}<br>`),
          (s.style.left = `${r}%`),
          A.event(e) &&
            ["mouseenter", "mouseleave"].includes(e.type) &&
            a("mouseenter" === e.type);
      },
      timeUpdate(e) {
        const t =
          !A.element(this.elements.display.duration) && this.config.invertTime;
        Me.updateTimeDisplay.call(
          this,
          this.elements.display.currentTime,
          t ? this.duration - this.currentTime : this.currentTime,
          t
        ),
          (e && "timeupdate" === e.type && this.media.seeking) ||
            Me.updateProgress.call(this, e);
      },
      durationUpdate() {
        if (!this.supported.ui || (!this.config.invertTime && this.currentTime))
          return;
        if (this.duration >= 2 ** 32)
          return (
            H(this.elements.display.currentTime, !0),
            void H(this.elements.progress, !0)
          );
        A.element(this.elements.inputs.seek) &&
          this.elements.inputs.seek.setAttribute(
            "aria-valuemax",
            this.duration
          );
        const e = A.element(this.elements.display.duration);
        !e &&
          this.config.displayDuration &&
          this.paused &&
          Me.updateTimeDisplay.call(
            this,
            this.elements.display.currentTime,
            this.duration
          ),
          e &&
            Me.updateTimeDisplay.call(
              this,
              this.elements.display.duration,
              this.duration
            ),
          this.config.markers.enabled && Me.setMarkers.call(this),
          Me.updateSeekTooltip.call(this);
      },
      toggleMenuButton(e, t) {
        H(this.elements.settings.buttons[e], !t);
      },
      updateSetting(e, t, i) {
        const s = this.elements.settings.panels[e];
        let n = null,
          a = t;
        if ("captions" === e) n = this.currentTrack;
        else {
          if (
            ((n = A.empty(i) ? this[e] : i),
            A.empty(n) && (n = this.config[e].default),
            !A.empty(this.options[e]) && !this.options[e].includes(n))
          )
            return void this.debug.warn(`Unsupported value of '${n}' for ${e}`);
          if (!this.config[e].options.includes(n))
            return void this.debug.warn(`Disabled value of '${n}' for ${e}`);
        }
        if (
          (A.element(a) || (a = s && s.querySelector('[role="menu"]')),
          !A.element(a))
        )
          return;
        this.elements.settings.buttons[e].querySelector(
          `.${this.config.classNames.menu.value}`
        ).innerHTML = Me.getLabel.call(this, e, n);
        const r = a && a.querySelector(`[value="${n}"]`);
        A.element(r) && (r.checked = !0);
      },
      getLabel(e, t) {
        switch (e) {
          case "speed":
            return 1 === t ? we.get("normal", this.config) : `${t}&times;`;
          case "quality":
            if (A.number(t)) {
              const e = we.get(`qualityLabel.${t}`, this.config);
              return e.length ? e : `${t}p`;
            }
            return fe(t);
          case "captions":
            return Ne.getLabel.call(this);
          default:
            return null;
        }
      },
      setQualityMenu(e) {
        if (!A.element(this.elements.settings.panels.quality)) return;
        const t = "quality",
          i =
            this.elements.settings.panels.quality.querySelector(
              '[role="menu"]'
            );
        A.array(e) &&
          (this.options.quality = ne(e).filter((e) =>
            this.config.quality.options.includes(e)
          ));
        const s =
          !A.empty(this.options.quality) && this.options.quality.length > 1;
        if (
          (Me.toggleMenuButton.call(this, t, s),
          R(i),
          Me.checkMenu.call(this),
          !s)
        )
          return;
        const n = (e) => {
          const t = we.get(`qualityBadge.${e}`, this.config);
          return t.length ? Me.createBadge.call(this, t) : null;
        };
        this.options.quality
          .sort((e, t) => {
            const i = this.config.quality.options;
            return i.indexOf(e) > i.indexOf(t) ? 1 : -1;
          })
          .forEach((e) => {
            Me.createMenuItem.call(this, {
              value: e,
              list: i,
              type: t,
              title: Me.getLabel.call(this, "quality", e),
              badge: n(e),
            });
          }),
          Me.updateSetting.call(this, t, i);
      },
      setCaptionsMenu() {
        if (!A.element(this.elements.settings.panels.captions)) return;
        const e = "captions",
          t =
            this.elements.settings.panels.captions.querySelector(
              '[role="menu"]'
            ),
          i = Ne.getTracks.call(this),
          s = Boolean(i.length);
        if (
          (Me.toggleMenuButton.call(this, e, s),
          R(t),
          Me.checkMenu.call(this),
          !s)
        )
          return;
        const n = i.map((e, i) => ({
          value: i,
          checked: this.captions.toggled && this.currentTrack === i,
          title: Ne.getLabel.call(this, e),
          badge:
            e.language && Me.createBadge.call(this, e.language.toUpperCase()),
          list: t,
          type: "language",
        }));
        n.unshift({
          value: -1,
          checked: !this.captions.toggled,
          title: we.get("disabled", this.config),
          list: t,
          type: "language",
        }),
          n.forEach(Me.createMenuItem.bind(this)),
          Me.updateSetting.call(this, e, t);
      },
      setSpeedMenu() {
        if (!A.element(this.elements.settings.panels.speed)) return;
        const e = "speed",
          t =
            this.elements.settings.panels.speed.querySelector('[role="menu"]');
        this.options.speed = this.options.speed.filter(
          (e) => e >= this.minimumSpeed && e <= this.maximumSpeed
        );
        const i = !A.empty(this.options.speed) && this.options.speed.length > 1;
        Me.toggleMenuButton.call(this, e, i),
          R(t),
          Me.checkMenu.call(this),
          i &&
            (this.options.speed.forEach((i) => {
              Me.createMenuItem.call(this, {
                value: i,
                list: t,
                type: e,
                title: Me.getLabel.call(this, "speed", i),
              });
            }),
            Me.updateSetting.call(this, e, t));
      },
      checkMenu() {
        const { buttons: e } = this.elements.settings,
          t = !A.empty(e) && Object.values(e).some((e) => !e.hidden);
        H(this.elements.settings.menu, !t);
      },
      focusFirstMenuItem(e, t = !1) {
        if (this.elements.settings.popup.hidden) return;
        let i = e;
        A.element(i) ||
          (i = Object.values(this.elements.settings.panels).find(
            (e) => !e.hidden
          ));
        const s = i.querySelector('[role^="menuitem"]');
        z.call(this, s, t);
      },
      toggleMenu(e) {
        const { popup: t } = this.elements.settings,
          i = this.elements.buttons.settings;
        if (!A.element(t) || !A.element(i)) return;
        const { hidden: s } = t;
        let n = s;
        if (A.boolean(e)) n = e;
        else if (A.keyboardEvent(e) && "Escape" === e.key) n = !1;
        else if (A.event(e)) {
          const s = A.function(e.composedPath) ? e.composedPath()[0] : e.target,
            a = t.contains(s);
          if (a || (!a && e.target !== i && n)) return;
        }
        i.setAttribute("aria-expanded", n),
          H(t, !n),
          F(this.elements.container, this.config.classNames.menu.open, n),
          n && A.keyboardEvent(e)
            ? Me.focusFirstMenuItem.call(this, null, !0)
            : n || s || z.call(this, i, A.keyboardEvent(e));
      },
      getMenuSize(e) {
        const t = e.cloneNode(!0);
        (t.style.position = "absolute"),
          (t.style.opacity = 0),
          t.removeAttribute("hidden"),
          e.parentNode.appendChild(t);
        const i = t.scrollWidth,
          s = t.scrollHeight;
        return j(t), { width: i, height: s };
      },
      showMenuPanel(e = "", t = !1) {
        const i = this.elements.container.querySelector(
          `#plyr-settings-${this.id}-${e}`
        );
        if (!A.element(i)) return;
        const s = i.parentNode,
          n = Array.from(s.children).find((e) => !e.hidden);
        if (Y.transitions && !Y.reducedMotion) {
          (s.style.width = `${n.scrollWidth}px`),
            (s.style.height = `${n.scrollHeight}px`);
          const e = Me.getMenuSize.call(this, i),
            t = (e) => {
              e.target === s &&
                ["width", "height"].includes(e.propertyName) &&
                ((s.style.width = ""),
                (s.style.height = ""),
                G.call(this, s, P, t));
            };
          J.call(this, s, P, t),
            (s.style.width = `${e.width}px`),
            (s.style.height = `${e.height}px`);
        }
        H(n, !0), H(i, !1), Me.focusFirstMenuItem.call(this, i, t);
      },
      setDownloadUrl() {
        const e = this.elements.buttons.download;
        A.element(e) && e.setAttribute("href", this.download);
      },
      create(e) {
        const {
          bindMenuItemShortcuts: t,
          createButton: i,
          createProgress: s,
          createRange: n,
          createTime: a,
          setQualityMenu: r,
          setSpeedMenu: o,
          showMenuPanel: l,
        } = Me;
        (this.elements.controls = null),
          A.array(this.config.controls) &&
            this.config.controls.includes("play-large") &&
            this.elements.container.appendChild(i.call(this, "play-large"));
        const c = O("div", q(this.config.selectors.controls.wrapper));
        this.elements.controls = c;
        const u = { class: "plyr__controls__item" };
        return (
          ne(A.array(this.config.controls) ? this.config.controls : []).forEach(
            (r) => {
              if (
                ("restart" === r && c.appendChild(i.call(this, "restart", u)),
                "rewind" === r && c.appendChild(i.call(this, "rewind", u)),
                "play" === r && c.appendChild(i.call(this, "play", u)),
                "fast-forward" === r &&
                  c.appendChild(i.call(this, "fast-forward", u)),
                "progress" === r)
              ) {
                const t = O("div", {
                    class: `${u.class} plyr__progress__container`,
                  }),
                  i = O("div", q(this.config.selectors.progress));
                if (
                  (i.appendChild(
                    n.call(this, "seek", { id: `plyr-seek-${e.id}` })
                  ),
                  i.appendChild(s.call(this, "buffer")),
                  this.config.tooltips.seek)
                ) {
                  const e = O(
                    "span",
                    { class: this.config.classNames.tooltip },
                    "00:00"
                  );
                  i.appendChild(e), (this.elements.display.seekTooltip = e);
                }
                (this.elements.progress = i),
                  t.appendChild(this.elements.progress),
                  c.appendChild(t);
              }
              if (
                ("current-time" === r &&
                  c.appendChild(a.call(this, "currentTime", u)),
                "duration" === r && c.appendChild(a.call(this, "duration", u)),
                "mute" === r || "volume" === r)
              ) {
                let { volume: t } = this.elements;
                if (
                  ((A.element(t) && c.contains(t)) ||
                    ((t = O(
                      "div",
                      N({}, u, { class: `${u.class} plyr__volume`.trim() })
                    )),
                    (this.elements.volume = t),
                    c.appendChild(t)),
                  "mute" === r && t.appendChild(i.call(this, "mute")),
                  "volume" === r && !x.isIos && !x.isIPadOS)
                ) {
                  const i = { max: 1, step: 0.05, value: this.config.volume };
                  t.appendChild(
                    n.call(this, "volume", N(i, { id: `plyr-volume-${e.id}` }))
                  );
                }
              }
              if (
                ("captions" === r && c.appendChild(i.call(this, "captions", u)),
                "settings" === r && !A.empty(this.config.settings))
              ) {
                const s = O(
                  "div",
                  N({}, u, {
                    class: `${u.class} plyr__menu`.trim(),
                    hidden: "",
                  })
                );
                s.appendChild(
                  i.call(this, "settings", {
                    "aria-haspopup": !0,
                    "aria-controls": `plyr-settings-${e.id}`,
                    "aria-expanded": !1,
                  })
                );
                const n = O("div", {
                    class: "plyr__menu__container",
                    id: `plyr-settings-${e.id}`,
                    hidden: "",
                  }),
                  a = O("div"),
                  r = O("div", { id: `plyr-settings-${e.id}-home` }),
                  o = O("div", { role: "menu" });
                r.appendChild(o),
                  a.appendChild(r),
                  (this.elements.settings.panels.home = r),
                  this.config.settings.forEach((i) => {
                    const s = O(
                      "button",
                      N(q(this.config.selectors.buttons.settings), {
                        type: "button",
                        class: `${this.config.classNames.control} ${this.config.classNames.control}--forward`,
                        role: "menuitem",
                        "aria-haspopup": !0,
                        hidden: "",
                      })
                    );
                    t.call(this, s, i),
                      J.call(this, s, "click", () => {
                        l.call(this, i, !1);
                      });
                    const n = O("span", null, we.get(i, this.config)),
                      r = O("span", {
                        class: this.config.classNames.menu.value,
                      });
                    (r.innerHTML = e[i]),
                      n.appendChild(r),
                      s.appendChild(n),
                      o.appendChild(s);
                    const c = O("div", {
                        id: `plyr-settings-${e.id}-${i}`,
                        hidden: "",
                      }),
                      u = O("button", {
                        type: "button",
                        class: `${this.config.classNames.control} ${this.config.classNames.control}--back`,
                      });
                    u.appendChild(
                      O("span", { "aria-hidden": !0 }, we.get(i, this.config))
                    ),
                      u.appendChild(
                        O(
                          "span",
                          { class: this.config.classNames.hidden },
                          we.get("menuBack", this.config)
                        )
                      ),
                      J.call(
                        this,
                        c,
                        "keydown",
                        (e) => {
                          "ArrowLeft" === e.key &&
                            (e.preventDefault(),
                            e.stopPropagation(),
                            l.call(this, "home", !0));
                        },
                        !1
                      ),
                      J.call(this, u, "click", () => {
                        l.call(this, "home", !1);
                      }),
                      c.appendChild(u),
                      c.appendChild(O("div", { role: "menu" })),
                      a.appendChild(c),
                      (this.elements.settings.buttons[i] = s),
                      (this.elements.settings.panels[i] = c);
                  }),
                  n.appendChild(a),
                  s.appendChild(n),
                  c.appendChild(s),
                  (this.elements.settings.popup = n),
                  (this.elements.settings.menu = s);
              }
              if (
                ("pip" === r && Y.pip && c.appendChild(i.call(this, "pip", u)),
                "airplay" === r &&
                  Y.airplay &&
                  c.appendChild(i.call(this, "airplay", u)),
                "download" === r)
              ) {
                const e = N({}, u, {
                  element: "a",
                  href: this.download,
                  target: "_blank",
                });
                this.isHTML5 && (e.download = "");
                const { download: t } = this.config.urls;
                !A.url(t) &&
                  this.isEmbed &&
                  N(e, { icon: `logo-${this.provider}`, label: this.provider }),
                  c.appendChild(i.call(this, "download", e));
              }
              "fullscreen" === r &&
                c.appendChild(i.call(this, "fullscreen", u));
            }
          ),
          this.isHTML5 && r.call(this, me.getQualityOptions.call(this)),
          o.call(this),
          c
        );
      },
      inject() {
        if (this.config.loadSprite) {
          const e = Me.getIconUrl.call(this);
          e.cors && Ee(e.url, "sprite-plyr");
        }
        this.id = Math.floor(1e4 * Math.random());
        let e = null;
        this.elements.controls = null;
        const t = {
          id: this.id,
          seektime: this.config.seekTime,
          title: this.config.title,
        };
        let i = !0;
        A.function(this.config.controls) &&
          (this.config.controls = this.config.controls.call(this, t)),
          this.config.controls || (this.config.controls = []),
          A.element(this.config.controls) || A.string(this.config.controls)
            ? (e = this.config.controls)
            : ((e = Me.create.call(this, {
                id: this.id,
                seektime: this.config.seekTime,
                speed: this.speed,
                quality: this.quality,
                captions: Ne.getLabel.call(this),
              })),
              (i = !1));
        let s;
        i &&
          A.string(this.config.controls) &&
          (e = ((e) => {
            let i = e;
            return (
              Object.entries(t).forEach(([e, t]) => {
                i = ge(i, `{${e}}`, t);
              }),
              i
            );
          })(e)),
          A.string(this.config.selectors.controls.container) &&
            (s = document.querySelector(
              this.config.selectors.controls.container
            )),
          A.element(s) || (s = this.elements.container);
        if (
          (s[A.element(e) ? "insertAdjacentElement" : "insertAdjacentHTML"](
            "afterbegin",
            e
          ),
          A.element(this.elements.controls) || Me.findElements.call(this),
          !A.empty(this.elements.buttons))
        ) {
          const e = (e) => {
            const t = this.config.classNames.controlPressed;
            e.setAttribute("aria-pressed", "false"),
              Object.defineProperty(e, "pressed", {
                configurable: !0,
                enumerable: !0,
                get: () => U(e, t),
                set(i = !1) {
                  F(e, t, i),
                    e.setAttribute("aria-pressed", i ? "true" : "false");
                },
              });
          };
          Object.values(this.elements.buttons)
            .filter(Boolean)
            .forEach((t) => {
              A.array(t) || A.nodeList(t)
                ? Array.from(t).filter(Boolean).forEach(e)
                : e(t);
            });
        }
        if ((x.isEdge && M(s), this.config.tooltips.controls)) {
          const { classNames: e, selectors: t } = this.config,
            i = `${t.controls.wrapper} ${t.labels} .${e.hidden}`,
            s = B.call(this, i);
          Array.from(s).forEach((e) => {
            F(e, this.config.classNames.hidden, !1),
              F(e, this.config.classNames.tooltip, !0);
          });
        }
      },
      setMediaMetadata() {
        try {
          "mediaSession" in navigator &&
            (navigator.mediaSession.metadata = new window.MediaMetadata({
              title: this.config.mediaMetadata.title,
              artist: this.config.mediaMetadata.artist,
              album: this.config.mediaMetadata.album,
              artwork: this.config.mediaMetadata.artwork,
            }));
        } catch (e) {}
      },
      setMarkers() {
        var e, t;
        if (!this.duration || this.elements.markers) return;
        const i =
          null === (e = this.config.markers) ||
          void 0 === e ||
          null === (t = e.points) ||
          void 0 === t
            ? void 0
            : t.filter(({ time: e }) => e > 0 && e < this.duration);
        if (null == i || !i.length) return;
        const s = document.createDocumentFragment(),
          n = document.createDocumentFragment();
        let a = null;
        const r = `${this.config.classNames.tooltip}--visible`,
          o = (e) => F(a, r, e);
        i.forEach((e) => {
          const t = O("span", { class: this.config.classNames.marker }, ""),
            i = (e.time / this.duration) * 100 + "%";
          a &&
            (t.addEventListener("mouseenter", () => {
              e.label || ((a.style.left = i), (a.innerHTML = e.label), o(!0));
            }),
            t.addEventListener("mouseleave", () => {
              o(!1);
            })),
            t.addEventListener("click", () => {
              this.currentTime = e.time;
            }),
            (t.style.left = i),
            n.appendChild(t);
        }),
          s.appendChild(n),
          this.config.tooltips.seek ||
            ((a = O("span", { class: this.config.classNames.tooltip }, "")),
            s.appendChild(a)),
          (this.elements.markers = { points: n, tip: a }),
          this.elements.progress.appendChild(s);
      },
    };
    function xe(e, t = !0) {
      let i = e;
      if (t) {
        const e = document.createElement("a");
        (e.href = i), (i = e.href);
      }
      try {
        return new URL(i);
      } catch (e) {
        return null;
      }
    }
    function Le(e) {
      const t = new URLSearchParams();
      return (
        A.object(e) &&
          Object.entries(e).forEach(([e, i]) => {
            t.set(e, i);
          }),
        t
      );
    }
    const Ne = {
        setup() {
          if (!this.supported.ui) return;
          if (
            !this.isVideo ||
            this.isYouTube ||
            (this.isHTML5 && !Y.textTracks)
          )
            return void (
              A.array(this.config.controls) &&
              this.config.controls.includes("settings") &&
              this.config.settings.includes("captions") &&
              Me.setCaptionsMenu.call(this)
            );
          var e, t;
          if (
            (A.element(this.elements.captions) ||
              ((this.elements.captions = O(
                "div",
                q(this.config.selectors.captions)
              )),
              this.elements.captions.setAttribute("dir", "auto"),
              (e = this.elements.captions),
              (t = this.elements.wrapper),
              A.element(e) &&
                A.element(t) &&
                t.parentNode.insertBefore(e, t.nextSibling)),
            x.isIE && window.URL)
          ) {
            const e = this.media.querySelectorAll("track");
            Array.from(e).forEach((e) => {
              const t = e.getAttribute("src"),
                i = xe(t);
              null !== i &&
                i.hostname !== window.location.href.hostname &&
                ["http:", "https:"].includes(i.protocol) &&
                ke(t, "blob")
                  .then((t) => {
                    e.setAttribute("src", window.URL.createObjectURL(t));
                  })
                  .catch(() => {
                    j(e);
                  });
            });
          }
          const i = ne(
            (
              navigator.languages || [
                navigator.language || navigator.userLanguage || "en",
              ]
            ).map((e) => e.split("-")[0])
          );
          let s = (
            this.storage.get("language") ||
            this.config.captions.language ||
            "auto"
          ).toLowerCase();
          "auto" === s && ([s] = i);
          let n = this.storage.get("captions");
          if (
            (A.boolean(n) || ({ active: n } = this.config.captions),
            Object.assign(this.captions, {
              toggled: !1,
              active: n,
              language: s,
              languages: i,
            }),
            this.isHTML5)
          ) {
            const e = this.config.captions.update
              ? "addtrack removetrack"
              : "removetrack";
            J.call(this, this.media.textTracks, e, Ne.update.bind(this));
          }
          setTimeout(Ne.update.bind(this), 0);
        },
        update() {
          const e = Ne.getTracks.call(this, !0),
            {
              active: t,
              language: i,
              meta: s,
              currentTrackNode: n,
            } = this.captions,
            a = Boolean(e.find((e) => e.language === i));
          this.isHTML5 &&
            this.isVideo &&
            e
              .filter((e) => !s.get(e))
              .forEach((e) => {
                this.debug.log("Track added", e),
                  s.set(e, { default: "showing" === e.mode }),
                  "showing" === e.mode && (e.mode = "hidden"),
                  J.call(this, e, "cuechange", () => Ne.updateCues.call(this));
              }),
            ((a && this.language !== i) || !e.includes(n)) &&
              (Ne.setLanguage.call(this, i), Ne.toggle.call(this, t && a)),
            this.elements &&
              F(
                this.elements.container,
                this.config.classNames.captions.enabled,
                !A.empty(e)
              ),
            A.array(this.config.controls) &&
              this.config.controls.includes("settings") &&
              this.config.settings.includes("captions") &&
              Me.setCaptionsMenu.call(this);
        },
        toggle(e, t = !0) {
          if (!this.supported.ui) return;
          const { toggled: i } = this.captions,
            s = this.config.classNames.captions.active,
            n = A.nullOrUndefined(e) ? !i : e;
          if (n !== i) {
            if (
              (t ||
                ((this.captions.active = n), this.storage.set({ captions: n })),
              !this.language && n && !t)
            ) {
              const e = Ne.getTracks.call(this),
                t = Ne.findTrack.call(
                  this,
                  [this.captions.language, ...this.captions.languages],
                  !0
                );
              return (
                (this.captions.language = t.language),
                void Ne.set.call(this, e.indexOf(t))
              );
            }
            this.elements.buttons.captions &&
              (this.elements.buttons.captions.pressed = n),
              F(this.elements.container, s, n),
              (this.captions.toggled = n),
              Me.updateSetting.call(this, "captions"),
              ee.call(
                this,
                this.media,
                n ? "captionsenabled" : "captionsdisabled"
              );
          }
          setTimeout(() => {
            n &&
              this.captions.toggled &&
              (this.captions.currentTrackNode.mode = "hidden");
          });
        },
        set(e, t = !0) {
          const i = Ne.getTracks.call(this);
          if (-1 !== e)
            if (A.number(e))
              if (e in i) {
                if (this.captions.currentTrack !== e) {
                  this.captions.currentTrack = e;
                  const s = i[e],
                    { language: n } = s || {};
                  (this.captions.currentTrackNode = s),
                    Me.updateSetting.call(this, "captions"),
                    t ||
                      ((this.captions.language = n),
                      this.storage.set({ language: n })),
                    this.isVimeo && this.embed.enableTextTrack(n),
                    ee.call(this, this.media, "languagechange");
                }
                Ne.toggle.call(this, !0, t),
                  this.isHTML5 && this.isVideo && Ne.updateCues.call(this);
              } else this.debug.warn("Track not found", e);
            else this.debug.warn("Invalid caption argument", e);
          else Ne.toggle.call(this, !1, t);
        },
        setLanguage(e, t = !0) {
          if (!A.string(e))
            return void this.debug.warn("Invalid language argument", e);
          const i = e.toLowerCase();
          this.captions.language = i;
          const s = Ne.getTracks.call(this),
            n = Ne.findTrack.call(this, [i]);
          Ne.set.call(this, s.indexOf(n), t);
        },
        getTracks(e = !1) {
          return Array.from((this.media || {}).textTracks || [])
            .filter((t) => !this.isHTML5 || e || this.captions.meta.has(t))
            .filter((e) => ["captions", "subtitles"].includes(e.kind));
        },
        findTrack(e, t = !1) {
          const i = Ne.getTracks.call(this),
            s = (e) => Number((this.captions.meta.get(e) || {}).default),
            n = Array.from(i).sort((e, t) => s(t) - s(e));
          let a;
          return (
            e.every((e) => ((a = n.find((t) => t.language === e)), !a)),
            a || (t ? n[0] : void 0)
          );
        },
        getCurrentTrack() {
          return Ne.getTracks.call(this)[this.currentTrack];
        },
        getLabel(e) {
          let t = e;
          return (
            !A.track(t) &&
              Y.textTracks &&
              this.captions.toggled &&
              (t = Ne.getCurrentTrack.call(this)),
            A.track(t)
              ? A.empty(t.label)
                ? A.empty(t.language)
                  ? we.get("enabled", this.config)
                  : e.language.toUpperCase()
                : t.label
              : we.get("disabled", this.config)
          );
        },
        updateCues(e) {
          if (!this.supported.ui) return;
          if (!A.element(this.elements.captions))
            return void this.debug.warn("No captions element to render to");
          if (!A.nullOrUndefined(e) && !Array.isArray(e))
            return void this.debug.warn("updateCues: Invalid input", e);
          let t = e;
          if (!t) {
            const e = Ne.getCurrentTrack.call(this);
            t = Array.from((e || {}).activeCues || [])
              .map((e) => e.getCueAsHTML())
              .map(be);
          }
          const i = t.map((e) => e.trim()).join("\n");
          if (i !== this.elements.captions.innerHTML) {
            R(this.elements.captions);
            const e = O("span", q(this.config.selectors.caption));
            (e.innerHTML = i),
              this.elements.captions.appendChild(e),
              ee.call(this, this.media, "cuechange");
          }
        },
      },
      _e = {
        enabled: !0,
        title: "",
        debug: !1,
        autoplay: !1,
        autopause: !0,
        playsinline: !0,
        seekTime: 10,
        volume: 1,
        muted: !1,
        duration: null,
        displayDuration: !0,
        invertTime: !0,
        toggleInvert: !0,
        ratio: null,
        clickToPlay: !0,
        hideControls: !0,
        resetOnEnd: !1,
        disableContextMenu: !0,
        loadSprite: !0,
        iconPrefix: "plyr",
        iconUrl: "https://cdn.plyr.io/3.7.8/plyr.svg",
        blankVideo: "https://cdn.plyr.io/static/blank.mp4",
        quality: {
          default: 576,
          options: [4320, 2880, 2160, 1440, 1080, 720, 576, 480, 360, 240],
          forced: !1,
          onChange: null,
        },
        loop: { active: !1 },
        speed: { selected: 1, options: [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2, 4] },
        keyboard: { focused: !0, global: !1 },
        tooltips: { controls: !1, seek: !0 },
        captions: { active: !1, language: "auto", update: !1 },
        fullscreen: { enabled: !0, fallback: !0, iosNative: !1 },
        storage: { enabled: !0, key: "plyr" },
        controls: [
          "play-large",
          "play",
          "progress",
          "current-time",
          "mute",
          "volume",
          "captions",
          "settings",
          "pip",
          "airplay",
          "fullscreen",
        ],
        settings: ["captions", "quality", "speed"],
        i18n: {
          restart: "Restart",
          rewind: "Mundur {seektime} Detik",
          play: "Putar",
          pause: "Jeda",
          fastForward: "Maju {seektime} Detik",
          seek: "Seek",
          seekLabel: "{currentTime} of {duration}",
          played: "Played",
          buffered: "Buffered",
          currentTime: "Current time",
          duration: "Duration",
          volume: "Volume",
          mute: "Matikan Suara",
          unmute: "Hidupkan Suara",
          enableCaptions: "Enable captions",
          disableCaptions: "Disable captions",
          download: "Download",
          enterFullscreen: "Masuk Layar Penuh",
          exitFullscreen: "Keluar Layar Penuh",
          frameTitle: "Player for {title}",
          captions: "Captions",
          settings: "Pengaturan",
          pip: "PIP",
          menuBack: "Go back to previous menu",
          speed: "Kecepatan",
          normal: "Normal",
          quality: "Kualitas",
          loop: "Loop",
          start: "Start",
          end: "End",
          all: "All",
          reset: "Reset",
          disabled: "Disabled",
          enabled: "Enabled",
          advertisement: "Ad",
          qualityBadge: {
            2160: "4K",
            1440: "HD",
            1080: "HD",
            720: "HD",
            480: "SD",
            360: "SD",
          },
        },
        urls: {
          download: null,
          vimeo: {
            sdk: "https://player.vimeo.com/api/player.js",
            iframe: "https://player.vimeo.com/video/{0}?{1}",
            api: "https://vimeo.com/api/oembed.json?url={0}",
          },
          youtube: {
            sdk: "https://www.youtube.com/iframe_api",
            api: "https://noembed.com/embed?url=https://www.youtube.com/watch?v={0}",
          },
          googleIMA: {
            sdk: "https://imasdk.googleapis.com/js/sdkloader/ima3.js",
          },
        },
        listeners: {
          seek: null,
          play: null,
          pause: null,
          restart: null,
          rewind: null,
          fastForward: null,
          mute: null,
          volume: null,
          captions: null,
          download: null,
          fullscreen: null,
          pip: null,
          airplay: null,
          speed: null,
          quality: null,
          loop: null,
          language: null,
        },
        events: [
          "ended",
          "progress",
          "stalled",
          "playing",
          "waiting",
          "canplay",
          "canplaythrough",
          "loadstart",
          "loadeddata",
          "loadedmetadata",
          "timeupdate",
          "volumechange",
          "play",
          "pause",
          "error",
          "seeking",
          "seeked",
          "emptied",
          "ratechange",
          "cuechange",
          "download",
          "enterfullscreen",
          "exitfullscreen",
          "captionsenabled",
          "captionsdisabled",
          "languagechange",
          "controlshidden",
          "controlsshown",
          "ready",
          "statechange",
          "qualitychange",
          "adsloaded",
          "adscontentpause",
          "adscontentresume",
          "adstarted",
          "adsmidpoint",
          "adscomplete",
          "adsallcomplete",
          "adsimpression",
          "adsclick",
        ],
        selectors: {
          editable: "input, textarea, select, [contenteditable]",
          container: ".plyr",
          controls: { container: null, wrapper: ".plyr__controls" },
          labels: "[data-plyr]",
          buttons: {
            play: '[data-plyr="play"]',
            pause: '[data-plyr="pause"]',
            restart: '[data-plyr="restart"]',
            rewind: '[data-plyr="rewind"]',
            fastForward: '[data-plyr="fast-forward"]',
            mute: '[data-plyr="mute"]',
            captions: '[data-plyr="captions"]',
            download: '[data-plyr="download"]',
            fullscreen: '[data-plyr="fullscreen"]',
            pip: '[data-plyr="pip"]',
            airplay: '[data-plyr="airplay"]',
            settings: '[data-plyr="settings"]',
            loop: '[data-plyr="loop"]',
          },
          inputs: {
            seek: '[data-plyr="seek"]',
            volume: '[data-plyr="volume"]',
            speed: '[data-plyr="speed"]',
            language: '[data-plyr="language"]',
            quality: '[data-plyr="quality"]',
          },
          display: {
            currentTime: ".plyr__time--current",
            duration: ".plyr__time--duration",
            buffer: ".plyr__progress__buffer",
            loop: ".plyr__progress__loop",
            volume: ".plyr__volume--display",
          },
          progress: ".plyr__progress",
          captions: ".plyr__captions",
          caption: ".plyr__caption",
        },
        classNames: {
          type: "plyr--{0}",
          provider: "plyr--{0}",
          video: "plyr__video-wrapper",
          embed: "plyr__video-embed",
          videoFixedRatio: "plyr__video-wrapper--fixed-ratio",
          embedContainer: "plyr__video-embed__container",
          poster: "plyr__poster",
          posterEnabled: "plyr__poster-enabled",
          ads: "plyr__ads",
          control: "plyr__control",
          controlPressed: "plyr__control--pressed",
          playing: "plyr--playing",
          paused: "plyr--paused",
          stopped: "plyr--stopped",
          loading: "plyr--loading",
          hover: "plyr--hover",
          tooltip: "plyr__tooltip",
          cues: "plyr__cues",
          marker: "plyr__progress__marker",
          hidden: "plyr__sr-only",
          hideControls: "plyr--hide-controls",
          isTouch: "plyr--is-touch",
          uiSupported: "plyr--full-ui",
          noTransition: "plyr--no-transition",
          display: { time: "plyr__time" },
          menu: {
            value: "plyr__menu__value",
            badge: "plyr__badge",
            open: "plyr--menu-open",
          },
          captions: {
            enabled: "plyr--captions-enabled",
            active: "plyr--captions-active",
          },
          fullscreen: {
            enabled: "plyr--fullscreen-enabled",
            fallback: "plyr--fullscreen-fallback",
          },
          pip: { supported: "plyr--pip-supported", active: "plyr--pip-active" },
          airplay: {
            supported: "plyr--airplay-supported",
            active: "plyr--airplay-active",
          },
          previewThumbnails: {
            thumbContainer: "plyr__preview-thumb",
            thumbContainerShown: "plyr__preview-thumb--is-shown",
            imageContainer: "plyr__preview-thumb__image-container",
            timeContainer: "plyr__preview-thumb__time-container",
            scrubbingContainer: "plyr__preview-scrubbing",
            scrubbingContainerShown: "plyr__preview-scrubbing--is-shown",
          },
        },
        attributes: {
          embed: {
            provider: "data-plyr-provider",
            id: "data-plyr-embed-id",
            hash: "data-plyr-embed-hash",
          },
        },
        ads: { enabled: !1, publisherId: "", tagUrl: "" },
        previewThumbnails: { enabled: !1, src: "" },
        vimeo: {
          byline: !1,
          portrait: !1,
          title: !1,
          speed: !0,
          transparent: !1,
          customControls: !0,
          referrerPolicy: null,
          premium: !1,
        },
        youtube: {
          rel: 0,
          showinfo: 0,
          iv_load_policy: 3,
          modestbranding: 1,
          customControls: !0,
          noCookie: !1,
        },
        mediaMetadata: { title: "", artist: "", album: "", artwork: [] },
        markers: { enabled: !1, points: [] },
      },
      Ie = "picture-in-picture",
      Oe = "inline",
      $e = { html5: "html5", youtube: "youtube", vimeo: "vimeo" },
      je = "audio",
      Re = "video";
    const De = () => {};
    class qe {
      constructor(e = !1) {
        (this.enabled = window.console && e),
          this.enabled && this.log("Debugging enabled");
      }
      get log() {
        return this.enabled
          ? Function.prototype.bind.call(console.log, console)
          : De;
      }
      get warn() {
        return this.enabled
          ? Function.prototype.bind.call(console.warn, console)
          : De;
      }
      get error() {
        return this.enabled
          ? Function.prototype.bind.call(console.error, console)
          : De;
      }
    }
    class He {
      constructor(e) {
        t(this, "onChange", () => {
          if (!this.supported) return;
          const e = this.player.elements.buttons.fullscreen;
          A.element(e) && (e.pressed = this.active);
          const t =
            this.target === this.player.media
              ? this.target
              : this.player.elements.container;
          ee.call(
            this.player,
            t,
            this.active ? "enterfullscreen" : "exitfullscreen",
            !0
          );
        }),
          t(this, "toggleFallback", (e = !1) => {
            if (
              (e
                ? (this.scrollPosition = {
                    x: window.scrollX ?? 0,
                    y: window.scrollY ?? 0,
                  })
                : window.scrollTo(this.scrollPosition.x, this.scrollPosition.y),
              (document.body.style.overflow = e ? "hidden" : ""),
              F(
                this.target,
                this.player.config.classNames.fullscreen.fallback,
                e
              ),
              x.isIos)
            ) {
              let t = document.head.querySelector('meta[name="viewport"]');
              const i = "viewport-fit=cover";
              t ||
                ((t = document.createElement("meta")),
                t.setAttribute("name", "viewport"));
              const s = A.string(t.content) && t.content.includes(i);
              e
                ? ((this.cleanupViewport = !s), s || (t.content += `,${i}`))
                : this.cleanupViewport &&
                  (t.content = t.content
                    .split(",")
                    .filter((e) => e.trim() !== i)
                    .join(","));
            }
            this.onChange();
          }),
          t(this, "trapFocus", (e) => {
            if (x.isIos || x.isIPadOS || !this.active || "Tab" !== e.key)
              return;
            const t = document.activeElement,
              i = B.call(
                this.player,
                "a[href], button:not(:disabled), input:not(:disabled), [tabindex]"
              ),
              [s] = i,
              n = i[i.length - 1];
            t !== n || e.shiftKey
              ? t === s && e.shiftKey && (n.focus(), e.preventDefault())
              : (s.focus(), e.preventDefault());
          }),
          t(this, "update", () => {
            if (this.supported) {
              let e;
              (e = this.forceFallback
                ? "Fallback (forced)"
                : He.nativeSupported
                ? "Native"
                : "Fallback"),
                this.player.debug.log(`${e} fullscreen enabled`);
            } else
              this.player.debug.log(
                "Fullscreen not supported and fallback disabled"
              );
            F(
              this.player.elements.container,
              this.player.config.classNames.fullscreen.enabled,
              this.supported
            );
          }),
          t(this, "enter", () => {
            this.supported &&
              (x.isIos && this.player.config.fullscreen.iosNative
                ? this.player.isVimeo
                  ? this.player.embed.requestFullscreen()
                  : this.target.webkitEnterFullscreen()
                : !He.nativeSupported || this.forceFallback
                ? this.toggleFallback(!0)
                : this.prefix
                ? A.empty(this.prefix) ||
                  this.target[`${this.prefix}Request${this.property}`]()
                : this.target.requestFullscreen({ navigationUI: "hide" }));
          }),
          t(this, "exit", () => {
            if (this.supported)
              if (x.isIos && this.player.config.fullscreen.iosNative)
                this.player.isVimeo
                  ? this.player.embed.exitFullscreen()
                  : this.target.webkitEnterFullscreen(),
                  se(this.player.play());
              else if (!He.nativeSupported || this.forceFallback)
                this.toggleFallback(!1);
              else if (this.prefix) {
                if (!A.empty(this.prefix)) {
                  const e = "moz" === this.prefix ? "Cancel" : "Exit";
                  document[`${this.prefix}${e}${this.property}`]();
                }
              } else
                (document.cancelFullScreen || document.exitFullscreen).call(
                  document
                );
          }),
          t(this, "toggle", () => {
            this.active ? this.exit() : this.enter();
          }),
          (this.player = e),
          (this.prefix = He.prefix),
          (this.property = He.property),
          (this.scrollPosition = { x: 0, y: 0 }),
          (this.forceFallback = "force" === e.config.fullscreen.fallback),
          (this.player.elements.fullscreen =
            e.config.fullscreen.container &&
            (function (e, t) {
              const { prototype: i } = Element;
              return (
                i.closest ||
                function () {
                  let e = this;
                  do {
                    if (V.matches(e, t)) return e;
                    e = e.parentElement || e.parentNode;
                  } while (null !== e && 1 === e.nodeType);
                  return null;
                }
              ).call(e, t);
            })(this.player.elements.container, e.config.fullscreen.container)),
          J.call(
            this.player,
            document,
            "ms" === this.prefix
              ? "MSFullscreenChange"
              : `${this.prefix}fullscreenchange`,
            () => {
              this.onChange();
            }
          ),
          J.call(
            this.player,
            this.player.elements.container,
            "dblclick",
            (e) => {
              (A.element(this.player.elements.controls) &&
                this.player.elements.controls.contains(e.target)) ||
                this.player.listeners.proxy(e, this.toggle, "fullscreen");
            }
          ),
          J.call(this, this.player.elements.container, "keydown", (e) =>
            this.trapFocus(e)
          ),
          this.update();
      }
      static get nativeSupported() {
        return !!(
          document.fullscreenEnabled ||
          document.webkitFullscreenEnabled ||
          document.mozFullScreenEnabled ||
          document.msFullscreenEnabled
        );
      }
      get useNative() {
        return He.nativeSupported && !this.forceFallback;
      }
      static get prefix() {
        if (A.function(document.exitFullscreen)) return "";
        let e = "";
        return (
          ["webkit", "moz", "ms"].some(
            (t) =>
              !(
                !A.function(document[`${t}ExitFullscreen`]) &&
                !A.function(document[`${t}CancelFullScreen`])
              ) && ((e = t), !0)
          ),
          e
        );
      }
      static get property() {
        return "moz" === this.prefix ? "FullScreen" : "Fullscreen";
      }
      get supported() {
        return [
          this.player.config.fullscreen.enabled,
          this.player.isVideo,
          He.nativeSupported || this.player.config.fullscreen.fallback,
          !this.player.isYouTube ||
            He.nativeSupported ||
            !x.isIos ||
            (this.player.config.playsinline &&
              !this.player.config.fullscreen.iosNative),
        ].every(Boolean);
      }
      get active() {
        if (!this.supported) return !1;
        if (!He.nativeSupported || this.forceFallback)
          return U(
            this.target,
            this.player.config.classNames.fullscreen.fallback
          );
        const e = this.prefix
          ? this.target.getRootNode()[`${this.prefix}${this.property}Element`]
          : this.target.getRootNode().fullscreenElement;
        return e && e.shadowRoot
          ? e === this.target.getRootNode().host
          : e === this.target;
      }
      get target() {
        return x.isIos && this.player.config.fullscreen.iosNative
          ? this.player.media
          : this.player.elements.fullscreen ?? this.player.elements.container;
      }
    }
    function Fe(e, t = 1) {
      return new Promise((i, s) => {
        const n = new Image(),
          a = () => {
            delete n.onload, delete n.onerror, (n.naturalWidth >= t ? i : s)(n);
          };
        Object.assign(n, { onload: a, onerror: a, src: e });
      });
    }
    const Ue = {
      addStyleHook() {
        F(
          this.elements.container,
          this.config.selectors.container.replace(".", ""),
          !0
        ),
          F(
            this.elements.container,
            this.config.classNames.uiSupported,
            this.supported.ui
          );
      },
      toggleNativeControls(e = !1) {
        e && this.isHTML5
          ? this.media.setAttribute("controls", "")
          : this.media.removeAttribute("controls");
      },
      build() {
        if ((this.listeners.media(), !this.supported.ui))
          return (
            this.debug.warn(
              `Basic support only for ${this.provider} ${this.type}`
            ),
            void Ue.toggleNativeControls.call(this, !0)
          );
        A.element(this.elements.controls) ||
          (Me.inject.call(this), this.listeners.controls()),
          Ue.toggleNativeControls.call(this),
          this.isHTML5 && Ne.setup.call(this),
          (this.volume = null),
          (this.muted = null),
          (this.loop = null),
          (this.quality = null),
          (this.speed = null),
          Me.updateVolume.call(this),
          Me.timeUpdate.call(this),
          Me.durationUpdate.call(this),
          Ue.checkPlaying.call(this),
          F(
            this.elements.container,
            this.config.classNames.pip.supported,
            Y.pip && this.isHTML5 && this.isVideo
          ),
          F(
            this.elements.container,
            this.config.classNames.airplay.supported,
            Y.airplay && this.isHTML5
          ),
          F(
            this.elements.container,
            this.config.classNames.isTouch,
            this.touch
          ),
          (this.ready = !0),
          setTimeout(() => {
            ee.call(this, this.media, "ready");
          }, 0),
          Ue.setTitle.call(this),
          this.poster &&
            Ue.setPoster.call(this, this.poster, !1).catch(() => {}),
          this.config.duration && Me.durationUpdate.call(this),
          this.config.mediaMetadata && Me.setMediaMetadata.call(this);
      },
      setTitle() {
        let e = we.get("play", this.config);
        if (
          (A.string(this.config.title) &&
            !A.empty(this.config.title) &&
            (e += `, ${this.config.title}`),
          Array.from(this.elements.buttons.play || []).forEach((t) => {
            t.setAttribute("aria-label", e);
          }),
          this.isEmbed)
        ) {
          const e = W.call(this, "iframe");
          if (!A.element(e)) return;
          const t = A.empty(this.config.title) ? "video" : this.config.title,
            i = we.get("frameTitle", this.config);
          e.setAttribute("title", i.replace("{title}", t));
        }
      },
      togglePoster(e) {
        F(this.elements.container, this.config.classNames.posterEnabled, e);
      },
      setPoster(e, t = !0) {
        return t && this.poster
          ? Promise.reject(new Error("Poster already set"))
          : (this.media.setAttribute("data-poster", e),
            this.elements.poster.removeAttribute("hidden"),
            ie
              .call(this)
              .then(() => Fe(e))
              .catch((t) => {
                throw (e === this.poster && Ue.togglePoster.call(this, !1), t);
              })
              .then(() => {
                if (e !== this.poster)
                  throw new Error(
                    "setPoster cancelled by later call to setPoster"
                  );
              })
              .then(
                () => (
                  Object.assign(this.elements.poster.style, {
                    backgroundImage: `url('${e}')`,
                    backgroundSize: "",
                  }),
                  Ue.togglePoster.call(this, !0),
                  e
                )
              ));
      },
      checkPlaying(e) {
        F(
          this.elements.container,
          this.config.classNames.playing,
          this.playing
        ),
          F(
            this.elements.container,
            this.config.classNames.paused,
            this.paused
          ),
          F(
            this.elements.container,
            this.config.classNames.stopped,
            this.stopped
          ),
          Array.from(this.elements.buttons.play || []).forEach((e) => {
            Object.assign(e, { pressed: this.playing }),
              e.setAttribute(
                "aria-label",
                we.get(this.playing ? "pause" : "play", this.config)
              );
          }),
          (A.event(e) && "timeupdate" === e.type) ||
            Ue.toggleControls.call(this);
      },
      checkLoading(e) {
        (this.loading = ["stalled", "waiting"].includes(e.type)),
          clearTimeout(this.timers.loading),
          (this.timers.loading = setTimeout(
            () => {
              F(
                this.elements.container,
                this.config.classNames.loading,
                this.loading
              ),
                Ue.toggleControls.call(this);
            },
            this.loading ? 250 : 0
          ));
      },
      toggleControls(e) {
        const { controls: t } = this.elements;
        if (t && this.config.hideControls) {
          const i = this.touch && this.lastSeekTime + 2e3 > Date.now();
          this.toggleControls(
            Boolean(
              e || this.loading || this.paused || t.pressed || t.hover || i
            )
          );
        }
      },
      migrateStyles() {
        Object.values({ ...this.media.style })
          .filter((e) => !A.empty(e) && A.string(e) && e.startsWith("--plyr"))
          .forEach((e) => {
            this.elements.container.style.setProperty(
              e,
              this.media.style.getPropertyValue(e)
            ),
              this.media.style.removeProperty(e);
          }),
          A.empty(this.media.style) && this.media.removeAttribute("style");
      },
    };
    class Ve {
      constructor(e) {
        t(this, "firstTouch", () => {
          const { player: e } = this,
            { elements: t } = e;
          (e.touch = !0), F(t.container, e.config.classNames.isTouch, !0);
        }),
          t(this, "global", (e = !0) => {
            const { player: t } = this;
            t.config.keyboard.global &&
              X.call(t, window, "keydown keyup", this.handleKey, e, !1),
              X.call(t, document.body, "click", this.toggleMenu, e),
              Z.call(t, document.body, "touchstart", this.firstTouch);
          }),
          t(this, "container", () => {
            const { player: e } = this,
              { config: t, elements: i, timers: s } = e;
            !t.keyboard.global &&
              t.keyboard.focused &&
              J.call(e, i.container, "keydown keyup", this.handleKey, !1),
              J.call(
                e,
                i.container,
                "mousemove mouseleave touchstart touchmove enterfullscreen exitfullscreen",
                (t) => {
                  const { controls: n } = i;
                  n &&
                    "enterfullscreen" === t.type &&
                    ((n.pressed = !1), (n.hover = !1));
                  let a = 0;
                  ["touchstart", "touchmove", "mousemove"].includes(t.type) &&
                    (Ue.toggleControls.call(e, !0), (a = e.touch ? 3e3 : 2e3)),
                    clearTimeout(s.controls),
                    (s.controls = setTimeout(
                      () => Ue.toggleControls.call(e, !1),
                      a
                    ));
                }
              );
            const n = () => {
                if (!e.isVimeo || e.config.vimeo.premium) return;
                const t = i.wrapper,
                  { active: s } = e.fullscreen,
                  [n, a] = ue.call(e),
                  r = re(`aspect-ratio: ${n} / ${a}`);
                if (!s)
                  return void (r
                    ? ((t.style.width = null), (t.style.height = null))
                    : ((t.style.maxWidth = null), (t.style.margin = null)));
                const [o, l] = [
                    Math.max(
                      document.documentElement.clientWidth || 0,
                      window.innerWidth || 0
                    ),
                    Math.max(
                      document.documentElement.clientHeight || 0,
                      window.innerHeight || 0
                    ),
                  ],
                  c = o / l > n / a;
                r
                  ? ((t.style.width = c ? "auto" : "100%"),
                    (t.style.height = c ? "100%" : "auto"))
                  : ((t.style.maxWidth = c ? (l / a) * n + "px" : null),
                    (t.style.margin = c ? "0 auto" : null));
              },
              a = () => {
                clearTimeout(s.resized), (s.resized = setTimeout(n, 50));
              };
            J.call(e, i.container, "enterfullscreen exitfullscreen", (t) => {
              const { target: s } = e.fullscreen;
              if (s !== i.container) return;
              if (!e.isEmbed && A.empty(e.config.ratio)) return;
              n();
              ("enterfullscreen" === t.type ? J : G).call(
                e,
                window,
                "resize",
                a
              );
            });
          }),
          t(this, "media", () => {
            const { player: e } = this,
              { elements: t } = e;
            if (
              (J.call(e, e.media, "timeupdate seeking seeked", (t) =>
                Me.timeUpdate.call(e, t)
              ),
              J.call(
                e,
                e.media,
                "durationchange loadeddata loadedmetadata",
                (t) => Me.durationUpdate.call(e, t)
              ),
              J.call(e, e.media, "ended", () => {
                e.isHTML5 &&
                  e.isVideo &&
                  e.config.resetOnEnd &&
                  (e.restart(), e.pause());
              }),
              J.call(e, e.media, "progress playing seeking seeked", (t) =>
                Me.updateProgress.call(e, t)
              ),
              J.call(e, e.media, "volumechange", (t) =>
                Me.updateVolume.call(e, t)
              ),
              J.call(
                e,
                e.media,
                "playing play pause ended emptied timeupdate",
                (t) => Ue.checkPlaying.call(e, t)
              ),
              J.call(e, e.media, "waiting canplay seeked playing", (t) =>
                Ue.checkLoading.call(e, t)
              ),
              e.supported.ui && e.config.clickToPlay && !e.isAudio)
            ) {
              const i = W.call(e, `.${e.config.classNames.video}`);
              if (!A.element(i)) return;
              J.call(e, t.container, "click", (s) => {
                ([t.container, i].includes(s.target) || i.contains(s.target)) &&
                  ((e.touch && e.config.hideControls) ||
                    (e.ended
                      ? (this.proxy(s, e.restart, "restart"),
                        this.proxy(
                          s,
                          () => {
                            se(e.play());
                          },
                          "play"
                        ))
                      : this.proxy(
                          s,
                          () => {
                            se(e.togglePlay());
                          },
                          "play"
                        )));
              });
            }
            e.supported.ui &&
              e.config.disableContextMenu &&
              J.call(
                e,
                t.wrapper,
                "contextmenu",
                (e) => {
                  e.preventDefault();
                },
                !1
              ),
              J.call(e, e.media, "volumechange", () => {
                e.storage.set({ volume: e.volume, muted: e.muted });
              }),
              J.call(e, e.media, "ratechange", () => {
                Me.updateSetting.call(e, "speed"),
                  e.storage.set({ speed: e.speed });
              }),
              J.call(e, e.media, "qualitychange", (t) => {
                Me.updateSetting.call(e, "quality", null, t.detail.quality);
              }),
              J.call(e, e.media, "ready qualitychange", () => {
                Me.setDownloadUrl.call(e);
              });
            const i = e.config.events.concat(["keyup", "keydown"]).join(" ");
            J.call(e, e.media, i, (i) => {
              let { detail: s = {} } = i;
              "error" === i.type && (s = e.media.error),
                ee.call(e, t.container, i.type, !0, s);
            });
          }),
          t(this, "proxy", (e, t, i) => {
            const { player: s } = this,
              n = s.config.listeners[i];
            let a = !0;
            A.function(n) && (a = n.call(s, e)),
              !1 !== a && A.function(t) && t.call(s, e);
          }),
          t(this, "bind", (e, t, i, s, n = !0) => {
            const { player: a } = this,
              r = a.config.listeners[s],
              o = A.function(r);
            J.call(a, e, t, (e) => this.proxy(e, i, s), n && !o);
          }),
          t(this, "controls", () => {
            const { player: e } = this,
              { elements: t } = e,
              i = x.isIE ? "change" : "input";
            if (
              (t.buttons.play &&
                Array.from(t.buttons.play).forEach((t) => {
                  this.bind(
                    t,
                    "click",
                    () => {
                      se(e.togglePlay());
                    },
                    "play"
                  );
                }),
              this.bind(t.buttons.restart, "click", e.restart, "restart"),
              this.bind(
                t.buttons.rewind,
                "click",
                () => {
                  (e.lastSeekTime = Date.now()), e.rewind();
                },
                "rewind"
              ),
              this.bind(
                t.buttons.fastForward,
                "click",
                () => {
                  (e.lastSeekTime = Date.now()), e.forward();
                },
                "fastForward"
              ),
              this.bind(
                t.buttons.mute,
                "click",
                () => {
                  e.muted = !e.muted;
                },
                "mute"
              ),
              this.bind(t.buttons.captions, "click", () => e.toggleCaptions()),
              this.bind(
                t.buttons.download,
                "click",
                () => {
                  ee.call(e, e.media, "download");
                },
                "download"
              ),
              this.bind(
                t.buttons.fullscreen,
                "click",
                () => {
                  e.fullscreen.toggle();
                },
                "fullscreen"
              ),
              this.bind(
                t.buttons.pip,
                "click",
                () => {
                  e.pip = "toggle";
                },
                "pip"
              ),
              this.bind(t.buttons.airplay, "click", e.airplay, "airplay"),
              this.bind(
                t.buttons.settings,
                "click",
                (t) => {
                  t.stopPropagation(),
                    t.preventDefault(),
                    Me.toggleMenu.call(e, t);
                },
                null,
                !1
              ),
              this.bind(
                t.buttons.settings,
                "keyup",
                (t) => {
                  [" ", "Enter"].includes(t.key) &&
                    ("Enter" !== t.key
                      ? (t.preventDefault(),
                        t.stopPropagation(),
                        Me.toggleMenu.call(e, t))
                      : Me.focusFirstMenuItem.call(e, null, !0));
                },
                null,
                !1
              ),
              this.bind(t.settings.menu, "keydown", (t) => {
                "Escape" === t.key && Me.toggleMenu.call(e, t);
              }),
              this.bind(t.inputs.seek, "mousedown mousemove", (e) => {
                const i = t.progress.getBoundingClientRect(),
                  s = (100 / i.width) * (e.pageX - i.left);
                e.currentTarget.setAttribute("seek-value", s);
              }),
              this.bind(
                t.inputs.seek,
                "mousedown mouseup keydown keyup touchstart touchend",
                (t) => {
                  const i = t.currentTarget,
                    s = "play-on-seeked";
                  if (
                    A.keyboardEvent(t) &&
                    !["ArrowLeft", "ArrowRight"].includes(t.key)
                  )
                    return;
                  e.lastSeekTime = Date.now();
                  const n = i.hasAttribute(s),
                    a = ["mouseup", "touchend", "keyup"].includes(t.type);
                  n && a
                    ? (i.removeAttribute(s), se(e.play()))
                    : !a && e.playing && (i.setAttribute(s, ""), e.pause());
                }
              ),
              x.isIos)
            ) {
              const t = B.call(e, 'input[type="range"]');
              Array.from(t).forEach((e) => this.bind(e, i, (e) => M(e.target)));
            }
            this.bind(
              t.inputs.seek,
              i,
              (t) => {
                const i = t.currentTarget;
                let s = i.getAttribute("seek-value");
                A.empty(s) && (s = i.value),
                  i.removeAttribute("seek-value"),
                  (e.currentTime = (s / i.max) * e.duration);
              },
              "seek"
            ),
              this.bind(t.progress, "mouseenter mouseleave mousemove", (t) =>
                Me.updateSeekTooltip.call(e, t)
              ),
              this.bind(t.progress, "mousemove touchmove", (t) => {
                const { previewThumbnails: i } = e;
                i && i.loaded && i.startMove(t);
              }),
              this.bind(t.progress, "mouseleave touchend click", () => {
                const { previewThumbnails: t } = e;
                t && t.loaded && t.endMove(!1, !0);
              }),
              this.bind(t.progress, "mousedown touchstart", (t) => {
                const { previewThumbnails: i } = e;
                i && i.loaded && i.startScrubbing(t);
              }),
              this.bind(t.progress, "mouseup touchend", (t) => {
                const { previewThumbnails: i } = e;
                i && i.loaded && i.endScrubbing(t);
              }),
              x.isWebKit &&
                Array.from(B.call(e, 'input[type="range"]')).forEach((t) => {
                  this.bind(t, "input", (t) =>
                    Me.updateRangeFill.call(e, t.target)
                  );
                }),
              e.config.toggleInvert &&
                !A.element(t.display.duration) &&
                this.bind(t.display.currentTime, "click", () => {
                  0 !== e.currentTime &&
                    ((e.config.invertTime = !e.config.invertTime),
                    Me.timeUpdate.call(e));
                }),
              this.bind(
                t.inputs.volume,
                i,
                (t) => {
                  e.volume = t.target.value;
                },
                "volume"
              ),
              this.bind(t.controls, "mouseenter mouseleave", (i) => {
                t.controls.hover = !e.touch && "mouseenter" === i.type;
              }),
              t.fullscreen &&
                Array.from(t.fullscreen.children)
                  .filter((e) => !e.contains(t.container))
                  .forEach((i) => {
                    this.bind(i, "mouseenter mouseleave", (i) => {
                      t.controls &&
                        (t.controls.hover =
                          !e.touch && "mouseenter" === i.type);
                    });
                  }),
              this.bind(
                t.controls,
                "mousedown mouseup touchstart touchend touchcancel",
                (e) => {
                  t.controls.pressed = ["mousedown", "touchstart"].includes(
                    e.type
                  );
                }
              ),
              this.bind(t.controls, "focusin", () => {
                const { config: i, timers: s } = e;
                F(t.controls, i.classNames.noTransition, !0),
                  Ue.toggleControls.call(e, !0),
                  setTimeout(() => {
                    F(t.controls, i.classNames.noTransition, !1);
                  }, 0);
                const n = this.touch ? 3e3 : 4e3;
                clearTimeout(s.controls),
                  (s.controls = setTimeout(
                    () => Ue.toggleControls.call(e, !1),
                    n
                  ));
              }),
              this.bind(
                t.inputs.volume,
                "wheel",
                (t) => {
                  const i = t.webkitDirectionInvertedFromDevice,
                    [s, n] = [t.deltaX, -t.deltaY].map((e) => (i ? -e : e)),
                    a = Math.sign(Math.abs(s) > Math.abs(n) ? s : n);
                  e.increaseVolume(a / 50);
                  const { volume: r } = e.media;
                  ((1 === a && r < 1) || (-1 === a && r > 0)) &&
                    t.preventDefault();
                },
                "volume",
                !1
              );
          }),
          (this.player = e),
          (this.lastKey = null),
          (this.focusTimer = null),
          (this.lastKeyDown = null),
          (this.handleKey = this.handleKey.bind(this)),
          (this.toggleMenu = this.toggleMenu.bind(this)),
          (this.firstTouch = this.firstTouch.bind(this));
      }
      handleKey(e) {
        const { player: t } = this,
          { elements: i } = t,
          {
            key: s,
            type: n,
            altKey: a,
            ctrlKey: r,
            metaKey: o,
            shiftKey: l,
          } = e,
          c = "keydown" === n,
          u = c && s === this.lastKey;
        if (a || r || o || l) return;
        if (!s) return;
        if (c) {
          const n = document.activeElement;
          if (A.element(n)) {
            const { editable: s } = t.config.selectors,
              { seek: a } = i.inputs;
            if (n !== a && V(n, s)) return;
            if (" " === e.key && V(n, 'button, [role^="menuitem"]')) return;
          }
          switch (
            ([
              " ",
              "ArrowLeft",
              "ArrowUp",
              "ArrowRight",
              "ArrowDown",
              "0",
              "1",
              "2",
              "3",
              "4",
              "5",
              "6",
              "7",
              "8",
              "9",
              "c",
              "f",
              "k",
              "l",
              "m",
            ].includes(s) && (e.preventDefault(), e.stopPropagation()),
            s)
          ) {
            case "0":
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
              u ||
                ((h = parseInt(s, 10)),
                (t.currentTime = (t.duration / 10) * h));
              break;
            case " ":
            case "k":
              u || se(t.togglePlay());
              break;
            case "ArrowUp":
              t.increaseVolume(0.1);
              break;
            case "ArrowDown":
              t.decreaseVolume(0.1);
              break;
            case "m":
              u || (t.muted = !t.muted);
              break;
            case "ArrowRight":
              t.forward();
              break;
            case "ArrowLeft":
              t.rewind();
              break;
            case "f":
              t.fullscreen.toggle();
              break;
            case "c":
              u || t.toggleCaptions();
              break;
            case "l":
              t.loop = !t.loop;
          }
          "Escape" === s &&
            !t.fullscreen.usingNative &&
            t.fullscreen.active &&
            t.fullscreen.toggle(),
            (this.lastKey = s);
        } else this.lastKey = null;
        var h;
      }
      toggleMenu(e) {
        Me.toggleMenu.call(this.player, e);
      }
    }
    var Be = (function (e, t) {
      return e((t = { exports: {} }), t.exports), t.exports;
    })(function (e, t) {
      e.exports = (function () {
        var e = function () {},
          t = {},
          i = {},
          s = {};
        function n(e, t) {
          e = e.push ? e : [e];
          var n,
            a,
            r,
            o = [],
            l = e.length,
            c = l;
          for (
            n = function (e, i) {
              i.length && o.push(e), --c || t(o);
            };
            l--;

          )
            (a = e[l]), (r = i[a]) ? n(a, r) : (s[a] = s[a] || []).push(n);
        }
        function a(e, t) {
          if (e) {
            var n = s[e];
            if (((i[e] = t), n)) for (; n.length; ) n[0](e, t), n.splice(0, 1);
          }
        }
        function r(t, i) {
          t.call && (t = { success: t }),
            i.length ? (t.error || e)(i) : (t.success || e)(t);
        }
        function o(t, i, s, n) {
          var a,
            r,
            l = document,
            c = s.async,
            u = (s.numRetries || 0) + 1,
            h = s.before || e,
            d = t.replace(/[\?|#].*$/, ""),
            m = t.replace(/^(css|img)!/, "");
          (n = n || 0),
            /(^css!|\.css$)/.test(d)
              ? (((r = l.createElement("link")).rel = "stylesheet"),
                (r.href = m),
                (a = "hideFocus" in r) &&
                  r.relList &&
                  ((a = 0), (r.rel = "preload"), (r.as = "style")))
              : /(^img!|\.(png|gif|jpg|svg|webp)$)/.test(d)
              ? ((r = l.createElement("img")).src = m)
              : (((r = l.createElement("script")).src = t),
                (r.async = void 0 === c || c)),
            (r.onload =
              r.onerror =
              r.onbeforeload =
                function (e) {
                  var l = e.type[0];
                  if (a)
                    try {
                      r.sheet.cssText.length || (l = "e");
                    } catch (e) {
                      18 != e.code && (l = "e");
                    }
                  if ("e" == l) {
                    if ((n += 1) < u) return o(t, i, s, n);
                  } else if ("preload" == r.rel && "style" == r.as)
                    return (r.rel = "stylesheet");
                  i(t, l, e.defaultPrevented);
                }),
            !1 !== h(t, r) && l.head.appendChild(r);
        }
        function l(e, t, i) {
          var s,
            n,
            a = (e = e.push ? e : [e]).length,
            r = a,
            l = [];
          for (
            s = function (e, i, s) {
              if (("e" == i && l.push(e), "b" == i)) {
                if (!s) return;
                l.push(e);
              }
              --a || t(l);
            },
              n = 0;
            n < r;
            n++
          )
            o(e[n], s, i);
        }
        function c(e, i, s) {
          var n, o;
          if ((i && i.trim && (n = i), (o = (n ? s : i) || {}), n)) {
            if (n in t) throw "LoadJS";
            t[n] = !0;
          }
          function c(t, i) {
            l(
              e,
              function (e) {
                r(o, e), t && r({ success: t, error: i }, e), a(n, e);
              },
              o
            );
          }
          if (o.returnPromise) return new Promise(c);
          c();
        }
        return (
          (c.ready = function (e, t) {
            return (
              n(e, function (e) {
                r(t, e);
              }),
              c
            );
          }),
          (c.done = function (e) {
            a(e, []);
          }),
          (c.reset = function () {
            (t = {}), (i = {}), (s = {});
          }),
          (c.isDefined = function (e) {
            return e in t;
          }),
          c
        );
      })();
    });
    function We(e) {
      return new Promise((t, i) => {
        Be(e, { success: t, error: i });
      });
    }
    function ze(e) {
      e && !this.embed.hasPlayed && (this.embed.hasPlayed = !0),
        this.media.paused === e &&
          ((this.media.paused = !e),
          ee.call(this, this.media, e ? "play" : "pause"));
    }
    const Ke = {
      setup() {
        const e = this;
        F(e.elements.wrapper, e.config.classNames.embed, !0),
          (e.options.speed = e.config.speed.options),
          he.call(e),
          A.object(window.Vimeo)
            ? Ke.ready.call(e)
            : We(e.config.urls.vimeo.sdk)
                .then(() => {
                  Ke.ready.call(e);
                })
                .catch((t) => {
                  e.debug.warn("Vimeo SDK (player.js) failed to load", t);
                });
      },
      ready() {
        const e = this,
          t = e.config.vimeo,
          { premium: i, referrerPolicy: s, ...n } = t;
        let a = e.media.getAttribute("src"),
          r = "";
        A.empty(a)
          ? ((a = e.media.getAttribute(e.config.attributes.embed.id)),
            (r = e.media.getAttribute(e.config.attributes.embed.hash)))
          : (r = (function (e) {
              const t = e.match(
                /^.*(vimeo.com\/|video\/)(\d+)(\?.*&*h=|\/)+([\d,a-f]+)/
              );
              return t && 5 === t.length ? t[4] : null;
            })(a));
        const o = r ? { h: r } : {};
        i && Object.assign(n, { controls: !1, sidedock: !1 });
        const l = Le({
            loop: e.config.loop.active,
            autoplay: e.autoplay,
            muted: e.muted,
            gesture: "media",
            playsinline: e.config.playsinline,
            ...o,
            ...n,
          }),
          c =
            ((u = a),
            A.empty(u)
              ? null
              : A.number(Number(u))
              ? u
              : u.match(/^.*(vimeo.com\/|video\/)(\d+).*/)
              ? RegExp.$2
              : u);
        var u;
        const h = O("iframe"),
          d = pe(e.config.urls.vimeo.iframe, c, l);
        if (
          (h.setAttribute("src", d),
          h.setAttribute("allowfullscreen", ""),
          h.setAttribute(
            "allow",
            [
              "autoplay",
              "fullscreen",
              "picture-in-picture",
              "encrypted-media",
              "accelerometer",
              "gyroscope",
            ].join("; ")
          ),
          A.empty(s) || h.setAttribute("referrerPolicy", s),
          i || !t.customControls)
        )
          h.setAttribute("data-poster", e.poster), (e.media = D(h, e.media));
        else {
          const t = O("div", {
            class: e.config.classNames.embedContainer,
            "data-poster": e.poster,
          });
          t.appendChild(h), (e.media = D(t, e.media));
        }
        t.customControls ||
          ke(pe(e.config.urls.vimeo.api, d)).then((t) => {
            !A.empty(t) &&
              t.thumbnail_url &&
              Ue.setPoster.call(e, t.thumbnail_url).catch(() => {});
          }),
          (e.embed = new window.Vimeo.Player(h, {
            autopause: e.config.autopause,
            muted: e.muted,
          })),
          (e.media.paused = !0),
          (e.media.currentTime = 0),
          e.supported.ui && e.embed.disableTextTrack(),
          (e.media.play = () => (ze.call(e, !0), e.embed.play())),
          (e.media.pause = () => (ze.call(e, !1), e.embed.pause())),
          (e.media.stop = () => {
            e.pause(), (e.currentTime = 0);
          });
        let { currentTime: m } = e.media;
        Object.defineProperty(e.media, "currentTime", {
          get: () => m,
          set(t) {
            const { embed: i, media: s, paused: n, volume: a } = e,
              r = n && !i.hasPlayed;
            (s.seeking = !0),
              ee.call(e, s, "seeking"),
              Promise.resolve(r && i.setVolume(0))
                .then(() => i.setCurrentTime(t))
                .then(() => r && i.pause())
                .then(() => r && i.setVolume(a))
                .catch(() => {});
          },
        });
        let p = e.config.speed.selected;
        Object.defineProperty(e.media, "playbackRate", {
          get: () => p,
          set(t) {
            e.embed
              .setPlaybackRate(t)
              .then(() => {
                (p = t), ee.call(e, e.media, "ratechange");
              })
              .catch(() => {
                e.options.speed = [1];
              });
          },
        });
        let { volume: g } = e.config;
        Object.defineProperty(e.media, "volume", {
          get: () => g,
          set(t) {
            e.embed.setVolume(t).then(() => {
              (g = t), ee.call(e, e.media, "volumechange");
            });
          },
        });
        let { muted: f } = e.config;
        Object.defineProperty(e.media, "muted", {
          get: () => f,
          set(t) {
            const i = !!A.boolean(t) && t;
            e.embed.setMuted(!!i || e.config.muted).then(() => {
              (f = i), ee.call(e, e.media, "volumechange");
            });
          },
        });
        let y,
          { loop: b } = e.config;
        Object.defineProperty(e.media, "loop", {
          get: () => b,
          set(t) {
            const i = A.boolean(t) ? t : e.config.loop.active;
            e.embed.setLoop(i).then(() => {
              b = i;
            });
          },
        }),
          e.embed
            .getVideoUrl()
            .then((t) => {
              (y = t), Me.setDownloadUrl.call(e);
            })
            .catch((e) => {
              this.debug.warn(e);
            }),
          Object.defineProperty(e.media, "currentSrc", { get: () => y }),
          Object.defineProperty(e.media, "ended", {
            get: () => e.currentTime === e.duration,
          }),
          Promise.all([e.embed.getVideoWidth(), e.embed.getVideoHeight()]).then(
            (t) => {
              const [i, s] = t;
              (e.embed.ratio = de(i, s)), he.call(this);
            }
          ),
          e.embed.setAutopause(e.config.autopause).then((t) => {
            e.config.autopause = t;
          }),
          e.embed.getVideoTitle().then((t) => {
            (e.config.title = t), Ue.setTitle.call(this);
          }),
          e.embed.getCurrentTime().then((t) => {
            (m = t), ee.call(e, e.media, "timeupdate");
          }),
          e.embed.getDuration().then((t) => {
            (e.media.duration = t), ee.call(e, e.media, "durationchange");
          }),
          e.embed.getTextTracks().then((t) => {
            (e.media.textTracks = t), Ne.setup.call(e);
          }),
          e.embed.on("cuechange", ({ cues: t = [] }) => {
            const i = t.map((e) =>
              (function (e) {
                const t = document.createDocumentFragment(),
                  i = document.createElement("div");
                return (
                  t.appendChild(i), (i.innerHTML = e), t.firstChild.innerText
                );
              })(e.text)
            );
            Ne.updateCues.call(e, i);
          }),
          e.embed.on("loaded", () => {
            if (
              (e.embed.getPaused().then((t) => {
                ze.call(e, !t), t || ee.call(e, e.media, "playing");
              }),
              A.element(e.embed.element) && e.supported.ui)
            ) {
              e.embed.element.setAttribute("tabindex", -1);
            }
          }),
          e.embed.on("bufferstart", () => {
            ee.call(e, e.media, "waiting");
          }),
          e.embed.on("bufferend", () => {
            ee.call(e, e.media, "playing");
          }),
          e.embed.on("play", () => {
            ze.call(e, !0), ee.call(e, e.media, "playing");
          }),
          e.embed.on("pause", () => {
            ze.call(e, !1);
          }),
          e.embed.on("timeupdate", (t) => {
            (e.media.seeking = !1),
              (m = t.seconds),
              ee.call(e, e.media, "timeupdate");
          }),
          e.embed.on("progress", (t) => {
            (e.media.buffered = t.percent),
              ee.call(e, e.media, "progress"),
              1 === parseInt(t.percent, 10) &&
                ee.call(e, e.media, "canplaythrough"),
              e.embed.getDuration().then((t) => {
                t !== e.media.duration &&
                  ((e.media.duration = t),
                  ee.call(e, e.media, "durationchange"));
              });
          }),
          e.embed.on("seeked", () => {
            (e.media.seeking = !1), ee.call(e, e.media, "seeked");
          }),
          e.embed.on("ended", () => {
            (e.media.paused = !0), ee.call(e, e.media, "ended");
          }),
          e.embed.on("error", (t) => {
            (e.media.error = t), ee.call(e, e.media, "error");
          }),
          t.customControls && setTimeout(() => Ue.build.call(e), 0);
      },
    };
    function Ye(e) {
      e && !this.embed.hasPlayed && (this.embed.hasPlayed = !0),
        this.media.paused === e &&
          ((this.media.paused = !e),
          ee.call(this, this.media, e ? "play" : "pause"));
    }
    function Qe(e) {
      return e.noCookie
        ? "https://www.youtube-nocookie.com"
        : "http:" === window.location.protocol
        ? "http://www.youtube.com"
        : void 0;
    }
    const Xe = {
        setup() {
          if (
            (F(this.elements.wrapper, this.config.classNames.embed, !0),
            A.object(window.YT) && A.function(window.YT.Player))
          )
            Xe.ready.call(this);
          else {
            const e = window.onYouTubeIframeAPIReady;
            (window.onYouTubeIframeAPIReady = () => {
              A.function(e) && e(), Xe.ready.call(this);
            }),
              We(this.config.urls.youtube.sdk).catch((e) => {
                this.debug.warn("YouTube API failed to load", e);
              });
          }
        },
        getTitle(e) {
          ke(pe(this.config.urls.youtube.api, e))
            .then((e) => {
              if (A.object(e)) {
                const { title: t, height: i, width: s } = e;
                (this.config.title = t),
                  Ue.setTitle.call(this),
                  (this.embed.ratio = de(s, i));
              }
              he.call(this);
            })
            .catch(() => {
              he.call(this);
            });
        },
        ready() {
          const e = this,
            t = e.config.youtube,
            i = e.media && e.media.getAttribute("id");
          if (!A.empty(i) && i.startsWith("youtube-")) return;
          let s = e.media.getAttribute("src");
          A.empty(s) &&
            (s = e.media.getAttribute(this.config.attributes.embed.id));
          const n =
            ((a = s),
            A.empty(a)
              ? null
              : a.match(
                  /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
                )
              ? RegExp.$2
              : a);
          var a;
          const r = O("div", {
            id: `${e.provider}-${Math.floor(1e4 * Math.random())}`,
            "data-poster": t.customControls ? e.poster : void 0,
          });
          if (((e.media = D(r, e.media)), t.customControls)) {
            const t = (e) => `https://i.ytimg.com/vi/${n}/${e}default.jpg`;
            Fe(t("maxres"), 121)
              .catch(() => Fe(t("sd"), 121))
              .catch(() => Fe(t("hq")))
              .then((t) => Ue.setPoster.call(e, t.src))
              .then((t) => {
                t.includes("maxres") ||
                  (e.elements.poster.style.backgroundSize = "cover");
              })
              .catch(() => {});
          }
          e.embed = new window.YT.Player(e.media, {
            videoId: n,
            host: Qe(t),
            playerVars: N(
              {},
              {
                autoplay: e.config.autoplay ? 1 : 0,
                hl: e.config.hl,
                controls: e.supported.ui && t.customControls ? 0 : 1,
                disablekb: 1,
                playsinline:
                  e.config.playsinline && !e.config.fullscreen.iosNative
                    ? 1
                    : 0,
                cc_load_policy: e.captions.active ? 1 : 0,
                cc_lang_pref: e.config.captions.language,
                widget_referrer: window ? window.location.href : null,
              },
              t
            ),
            events: {
              onError(t) {
                if (!e.media.error) {
                  const i = t.data,
                    s =
                      {
                        2: "The request contains an invalid parameter value. For example, this error occurs if you specify a video ID that does not have 11 characters, or if the video ID contains invalid characters, such as exclamation points or asterisks.",
                        5: "The requested content cannot be played in an HTML5 player or another error related to the HTML5 player has occurred.",
                        100: "The video requested was not found. This error occurs when a video has been removed (for any reason) or has been marked as private.",
                        101: "The owner of the requested video does not allow it to be played in embedded players.",
                        150: "The owner of the requested video does not allow it to be played in embedded players.",
                      }[i] || "An unknown error occurred";
                  (e.media.error = { code: i, message: s }),
                    ee.call(e, e.media, "error");
                }
              },
              onPlaybackRateChange(t) {
                const i = t.target;
                (e.media.playbackRate = i.getPlaybackRate()),
                  ee.call(e, e.media, "ratechange");
              },
              onReady(i) {
                if (A.function(e.media.play)) return;
                const s = i.target;
                Xe.getTitle.call(e, n),
                  (e.media.play = () => {
                    Ye.call(e, !0), s.playVideo();
                  }),
                  (e.media.pause = () => {
                    Ye.call(e, !1), s.pauseVideo();
                  }),
                  (e.media.stop = () => {
                    s.stopVideo();
                  }),
                  (e.media.duration = s.getDuration()),
                  (e.media.paused = !0),
                  (e.media.currentTime = 0),
                  Object.defineProperty(e.media, "currentTime", {
                    get: () => Number(s.getCurrentTime()),
                    set(t) {
                      e.paused && !e.embed.hasPlayed && e.embed.mute(),
                        (e.media.seeking = !0),
                        ee.call(e, e.media, "seeking"),
                        s.seekTo(t);
                    },
                  }),
                  Object.defineProperty(e.media, "playbackRate", {
                    get: () => s.getPlaybackRate(),
                    set(e) {
                      s.setPlaybackRate(e);
                    },
                  });
                let { volume: a } = e.config;
                Object.defineProperty(e.media, "volume", {
                  get: () => a,
                  set(t) {
                    (a = t),
                      s.setVolume(100 * a),
                      ee.call(e, e.media, "volumechange");
                  },
                });
                let { muted: r } = e.config;
                Object.defineProperty(e.media, "muted", {
                  get: () => r,
                  set(t) {
                    const i = A.boolean(t) ? t : r;
                    (r = i),
                      s[i ? "mute" : "unMute"](),
                      s.setVolume(100 * a),
                      ee.call(e, e.media, "volumechange");
                  },
                }),
                  Object.defineProperty(e.media, "currentSrc", {
                    get: () => s.getVideoUrl(),
                  }),
                  Object.defineProperty(e.media, "ended", {
                    get: () => e.currentTime === e.duration,
                  });
                const o = s.getAvailablePlaybackRates();
                (e.options.speed = o.filter((t) =>
                  e.config.speed.options.includes(t)
                )),
                  e.supported.ui &&
                    t.customControls &&
                    e.media.setAttribute("tabindex", -1),
                  ee.call(e, e.media, "timeupdate"),
                  ee.call(e, e.media, "durationchange"),
                  clearInterval(e.timers.buffering),
                  (e.timers.buffering = setInterval(() => {
                    (e.media.buffered = s.getVideoLoadedFraction()),
                      (null === e.media.lastBuffered ||
                        e.media.lastBuffered < e.media.buffered) &&
                        ee.call(e, e.media, "progress"),
                      (e.media.lastBuffered = e.media.buffered),
                      1 === e.media.buffered &&
                        (clearInterval(e.timers.buffering),
                        ee.call(e, e.media, "canplaythrough"));
                  }, 200)),
                  t.customControls && setTimeout(() => Ue.build.call(e), 50);
              },
              onStateChange(i) {
                const s = i.target;
                clearInterval(e.timers.playing);
                switch (
                  (e.media.seeking &&
                    [1, 2].includes(i.data) &&
                    ((e.media.seeking = !1), ee.call(e, e.media, "seeked")),
                  i.data)
                ) {
                  case -1:
                    ee.call(e, e.media, "timeupdate"),
                      (e.media.buffered = s.getVideoLoadedFraction()),
                      ee.call(e, e.media, "progress");
                    break;
                  case 0:
                    Ye.call(e, !1),
                      e.media.loop
                        ? (s.stopVideo(), s.playVideo())
                        : ee.call(e, e.media, "ended");
                    break;
                  case 1:
                    t.customControls &&
                    !e.config.autoplay &&
                    e.media.paused &&
                    !e.embed.hasPlayed
                      ? e.media.pause()
                      : (Ye.call(e, !0),
                        ee.call(e, e.media, "playing"),
                        (e.timers.playing = setInterval(() => {
                          ee.call(e, e.media, "timeupdate");
                        }, 50)),
                        e.media.duration !== s.getDuration() &&
                          ((e.media.duration = s.getDuration()),
                          ee.call(e, e.media, "durationchange")));
                    break;
                  case 2:
                    e.muted || e.embed.unMute(), Ye.call(e, !1);
                    break;
                  case 3:
                    ee.call(e, e.media, "waiting");
                }
                ee.call(e, e.elements.container, "statechange", !1, {
                  code: i.data,
                });
              },
            },
          });
        },
      },
      Je = {
        setup() {
          this.media
            ? (F(
                this.elements.container,
                this.config.classNames.type.replace("{0}", this.type),
                !0
              ),
              F(
                this.elements.container,
                this.config.classNames.provider.replace("{0}", this.provider),
                !0
              ),
              this.isEmbed &&
                F(
                  this.elements.container,
                  this.config.classNames.type.replace("{0}", "video"),
                  !0
                ),
              this.isVideo &&
                ((this.elements.wrapper = O("div", {
                  class: this.config.classNames.video,
                })),
                _(this.media, this.elements.wrapper),
                (this.elements.poster = O("div", {
                  class: this.config.classNames.poster,
                })),
                this.elements.wrapper.appendChild(this.elements.poster)),
              this.isHTML5
                ? me.setup.call(this)
                : this.isYouTube
                ? Xe.setup.call(this)
                : this.isVimeo && Ke.setup.call(this))
            : this.debug.warn("No media element found!");
        },
      };
    class Ge {
      constructor(e) {
        t(this, "load", () => {
          this.enabled &&
            (A.object(window.google) && A.object(window.google.ima)
              ? this.ready()
              : We(this.player.config.urls.googleIMA.sdk)
                  .then(() => {
                    this.ready();
                  })
                  .catch(() => {
                    this.trigger(
                      "error",
                      new Error("Google IMA SDK failed to load")
                    );
                  }));
        }),
          t(this, "ready", () => {
            var e;
            this.enabled ||
              ((e = this).manager && e.manager.destroy(),
              e.elements.displayContainer &&
                e.elements.displayContainer.destroy(),
              e.elements.container.remove()),
              this.startSafetyTimer(12e3, "ready()"),
              this.managerPromise.then(() => {
                this.clearSafetyTimer("onAdsManagerLoaded()");
              }),
              this.listeners(),
              this.setupIMA();
          }),
          t(this, "setupIMA", () => {
            (this.elements.container = O("div", {
              class: this.player.config.classNames.ads,
            })),
              this.player.elements.container.appendChild(
                this.elements.container
              ),
              google.ima.settings.setVpaidMode(
                google.ima.ImaSdkSettings.VpaidMode.ENABLED
              ),
              google.ima.settings.setLocale(this.player.config.ads.language),
              google.ima.settings.setDisableCustomPlaybackForIOS10Plus(
                this.player.config.playsinline
              ),
              (this.elements.displayContainer =
                new google.ima.AdDisplayContainer(
                  this.elements.container,
                  this.player.media
                )),
              (this.loader = new google.ima.AdsLoader(
                this.elements.displayContainer
              )),
              this.loader.addEventListener(
                google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED,
                (e) => this.onAdsManagerLoaded(e),
                !1
              ),
              this.loader.addEventListener(
                google.ima.AdErrorEvent.Type.AD_ERROR,
                (e) => this.onAdError(e),
                !1
              ),
              this.requestAds();
          }),
          t(this, "requestAds", () => {
            const { container: e } = this.player.elements;
            try {
              const t = new google.ima.AdsRequest();
              (t.adTagUrl = this.tagUrl),
                (t.linearAdSlotWidth = e.offsetWidth),
                (t.linearAdSlotHeight = e.offsetHeight),
                (t.nonLinearAdSlotWidth = e.offsetWidth),
                (t.nonLinearAdSlotHeight = e.offsetHeight),
                (t.forceNonLinearFullSlot = !1),
                t.setAdWillPlayMuted(!this.player.muted),
                this.loader.requestAds(t);
            } catch (e) {
              this.onAdError(e);
            }
          }),
          t(this, "pollCountdown", (e = !1) => {
            if (!e)
              return (
                clearInterval(this.countdownTimer),
                void this.elements.container.removeAttribute("data-badge-text")
              );
            this.countdownTimer = setInterval(() => {
              const e = Pe(Math.max(this.manager.getRemainingTime(), 0)),
                t = `${we.get("advertisement", this.player.config)} - ${e}`;
              this.elements.container.setAttribute("data-badge-text", t);
            }, 100);
          }),
          t(this, "onAdsManagerLoaded", (e) => {
            if (!this.enabled) return;
            const t = new google.ima.AdsRenderingSettings();
            (t.restoreCustomPlaybackStateOnAdBreakComplete = !0),
              (t.enablePreloading = !0),
              (this.manager = e.getAdsManager(this.player, t)),
              (this.cuePoints = this.manager.getCuePoints()),
              this.manager.addEventListener(
                google.ima.AdErrorEvent.Type.AD_ERROR,
                (e) => this.onAdError(e)
              ),
              Object.keys(google.ima.AdEvent.Type).forEach((e) => {
                this.manager.addEventListener(google.ima.AdEvent.Type[e], (e) =>
                  this.onAdEvent(e)
                );
              }),
              this.trigger("loaded");
          }),
          t(this, "addCuePoints", () => {
            A.empty(this.cuePoints) ||
              this.cuePoints.forEach((e) => {
                if (0 !== e && -1 !== e && e < this.player.duration) {
                  const t = this.player.elements.progress;
                  if (A.element(t)) {
                    const i = (100 / this.player.duration) * e,
                      s = O("span", {
                        class: this.player.config.classNames.cues,
                      });
                    (s.style.left = `${i.toString()}%`), t.appendChild(s);
                  }
                }
              });
          }),
          t(this, "onAdEvent", (e) => {
            const { container: t } = this.player.elements,
              i = e.getAd(),
              s = e.getAdData();
            switch (
              (((e) => {
                ee.call(
                  this.player,
                  this.player.media,
                  `ads${e.replace(/_/g, "").toLowerCase()}`
                );
              })(e.type),
              e.type)
            ) {
              case google.ima.AdEvent.Type.LOADED:
                this.trigger("loaded"),
                  this.pollCountdown(!0),
                  i.isLinear() ||
                    ((i.width = t.offsetWidth), (i.height = t.offsetHeight));
                break;
              case google.ima.AdEvent.Type.STARTED:
                this.manager.setVolume(this.player.volume);
                break;
              case google.ima.AdEvent.Type.ALL_ADS_COMPLETED:
                this.player.ended
                  ? this.loadAds()
                  : this.loader.contentComplete();
                break;
              case google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED:
                this.pauseContent();
                break;
              case google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED:
                this.pollCountdown(), this.resumeContent();
                break;
              case google.ima.AdEvent.Type.LOG:
                s.adError &&
                  this.player.debug.warn(
                    `Non-fatal ad error: ${s.adError.getMessage()}`
                  );
            }
          }),
          t(this, "onAdError", (e) => {
            this.cancel(), this.player.debug.warn("Ads error", e);
          }),
          t(this, "listeners", () => {
            const { container: e } = this.player.elements;
            let t;
            this.player.on("canplay", () => {
              this.addCuePoints();
            }),
              this.player.on("ended", () => {
                this.loader.contentComplete();
              }),
              this.player.on("timeupdate", () => {
                t = this.player.currentTime;
              }),
              this.player.on("seeked", () => {
                const e = this.player.currentTime;
                A.empty(this.cuePoints) ||
                  this.cuePoints.forEach((i, s) => {
                    t < i &&
                      i < e &&
                      (this.manager.discardAdBreak(),
                      this.cuePoints.splice(s, 1));
                  });
              }),
              window.addEventListener("resize", () => {
                this.manager &&
                  this.manager.resize(
                    e.offsetWidth,
                    e.offsetHeight,
                    google.ima.ViewMode.NORMAL
                  );
              });
          }),
          t(this, "play", () => {
            const { container: e } = this.player.elements;
            this.managerPromise || this.resumeContent(),
              this.managerPromise
                .then(() => {
                  this.manager.setVolume(this.player.volume),
                    this.elements.displayContainer.initialize();
                  try {
                    this.initialized ||
                      (this.manager.init(
                        e.offsetWidth,
                        e.offsetHeight,
                        google.ima.ViewMode.NORMAL
                      ),
                      this.manager.start()),
                      (this.initialized = !0);
                  } catch (e) {
                    this.onAdError(e);
                  }
                })
                .catch(() => {});
          }),
          t(this, "resumeContent", () => {
            (this.elements.container.style.zIndex = ""),
              (this.playing = !1),
              se(this.player.media.play());
          }),
          t(this, "pauseContent", () => {
            (this.elements.container.style.zIndex = 3),
              (this.playing = !0),
              this.player.media.pause();
          }),
          t(this, "cancel", () => {
            this.initialized && this.resumeContent(),
              this.trigger("error"),
              this.loadAds();
          }),
          t(this, "loadAds", () => {
            this.managerPromise
              .then(() => {
                this.manager && this.manager.destroy(),
                  (this.managerPromise = new Promise((e) => {
                    this.on("loaded", e), this.player.debug.log(this.manager);
                  })),
                  (this.initialized = !1),
                  this.requestAds();
              })
              .catch(() => {});
          }),
          t(this, "trigger", (e, ...t) => {
            const i = this.events[e];
            A.array(i) &&
              i.forEach((e) => {
                A.function(e) && e.apply(this, t);
              });
          }),
          t(
            this,
            "on",
            (e, t) => (
              A.array(this.events[e]) || (this.events[e] = []),
              this.events[e].push(t),
              this
            )
          ),
          t(this, "startSafetyTimer", (e, t) => {
            this.player.debug.log(`Safety timer invoked from: ${t}`),
              (this.safetyTimer = setTimeout(() => {
                this.cancel(), this.clearSafetyTimer("startSafetyTimer()");
              }, e));
          }),
          t(this, "clearSafetyTimer", (e) => {
            A.nullOrUndefined(this.safetyTimer) ||
              (this.player.debug.log(`Safety timer cleared from: ${e}`),
              clearTimeout(this.safetyTimer),
              (this.safetyTimer = null));
          }),
          (this.player = e),
          (this.config = e.config.ads),
          (this.playing = !1),
          (this.initialized = !1),
          (this.elements = { container: null, displayContainer: null }),
          (this.manager = null),
          (this.loader = null),
          (this.cuePoints = null),
          (this.events = {}),
          (this.safetyTimer = null),
          (this.countdownTimer = null),
          (this.managerPromise = new Promise((e, t) => {
            this.on("loaded", e), this.on("error", t);
          })),
          this.load();
      }
      get enabled() {
        const { config: e } = this;
        return (
          this.player.isHTML5 &&
          this.player.isVideo &&
          e.enabled &&
          (!A.empty(e.publisherId) || A.url(e.tagUrl))
        );
      }
      get tagUrl() {
        const { config: e } = this;
        if (A.url(e.tagUrl)) return e.tagUrl;
        return `https://go.aniview.com/api/adserver6/vast/?${Le({
          AV_PUBLISHERID: "58c25bb0073ef448b1087ad6",
          AV_CHANNELID: "5a0458dc28a06145e4519d21",
          AV_URL: window.location.hostname,
          cb: Date.now(),
          AV_WIDTH: 640,
          AV_HEIGHT: 480,
          AV_CDIM2: e.publisherId,
        })}`;
      }
    }
    function Ze(e = 0, t = 0, i = 255) {
      return Math.min(Math.max(e, t), i);
    }
    const et = (e) => {
        const t = [];
        return (
          e.split(/\r\n\r\n|\n\n|\r\r/).forEach((e) => {
            const i = {};
            e.split(/\r\n|\n|\r/).forEach((e) => {
              if (A.number(i.startTime)) {
                if (!A.empty(e.trim()) && A.empty(i.text)) {
                  const t = e.trim().split("#xywh=");
                  ([i.text] = t),
                    t[1] && ([i.x, i.y, i.w, i.h] = t[1].split(","));
                }
              } else {
                const t = e.match(
                  /([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})( ?--> ?)([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})/
                );
                t &&
                  ((i.startTime =
                    60 * Number(t[1] || 0) * 60 +
                    60 * Number(t[2]) +
                    Number(t[3]) +
                    Number(`0.${t[4]}`)),
                  (i.endTime =
                    60 * Number(t[6] || 0) * 60 +
                    60 * Number(t[7]) +
                    Number(t[8]) +
                    Number(`0.${t[9]}`)));
              }
            }),
              i.text && t.push(i);
          }),
          t
        );
      },
      tt = (e, t) => {
        const i = {};
        return (
          e > t.width / t.height
            ? ((i.width = t.width), (i.height = (1 / e) * t.width))
            : ((i.height = t.height), (i.width = e * t.height)),
          i
        );
      };
    class it {
      constructor(e) {
        t(this, "load", () => {
          this.player.elements.display.seekTooltip &&
            (this.player.elements.display.seekTooltip.hidden = this.enabled),
            this.enabled &&
              this.getThumbnails().then(() => {
                this.enabled &&
                  (this.render(),
                  this.determineContainerAutoSizing(),
                  this.listeners(),
                  (this.loaded = !0));
              });
        }),
          t(
            this,
            "getThumbnails",
            () =>
              new Promise((e) => {
                const { src: t } = this.player.config.previewThumbnails;
                if (A.empty(t))
                  throw new Error(
                    "Missing previewThumbnails.src config attribute"
                  );
                const i = () => {
                  this.thumbnails.sort((e, t) => e.height - t.height),
                    this.player.debug.log(
                      "Preview thumbnails",
                      this.thumbnails
                    ),
                    e();
                };
                if (A.function(t))
                  t((e) => {
                    (this.thumbnails = e), i();
                  });
                else {
                  const e = (A.string(t) ? [t] : t).map((e) =>
                    this.getThumbnail(e)
                  );
                  Promise.all(e).then(i);
                }
              })
          ),
          t(
            this,
            "getThumbnail",
            (e) =>
              new Promise((t) => {
                ke(e).then((i) => {
                  const s = { frames: et(i), height: null, urlPrefix: "" };
                  s.frames[0].text.startsWith("/") ||
                    s.frames[0].text.startsWith("http://") ||
                    s.frames[0].text.startsWith("https://") ||
                    (s.urlPrefix = e.substring(0, e.lastIndexOf("/") + 1));
                  const n = new Image();
                  (n.onload = () => {
                    (s.height = n.naturalHeight),
                      (s.width = n.naturalWidth),
                      this.thumbnails.push(s),
                      t();
                  }),
                    (n.src = s.urlPrefix + s.frames[0].text);
                });
              })
          ),
          t(this, "startMove", (e) => {
            if (
              this.loaded &&
              A.event(e) &&
              ["touchmove", "mousemove"].includes(e.type) &&
              this.player.media.duration
            ) {
              if ("touchmove" === e.type)
                this.seekTime =
                  this.player.media.duration *
                  (this.player.elements.inputs.seek.value / 100);
              else {
                var t, i;
                const s = this.player.elements.progress.getBoundingClientRect(),
                  n = (100 / s.width) * (e.pageX - s.left);
                (this.seekTime = this.player.media.duration * (n / 100)),
                  this.seekTime < 0 && (this.seekTime = 0),
                  this.seekTime > this.player.media.duration - 1 &&
                    (this.seekTime = this.player.media.duration - 1),
                  (this.mousePosX = e.pageX),
                  (this.elements.thumb.time.innerText = Pe(this.seekTime));
                const a =
                  null === (t = this.player.config.markers) ||
                  void 0 === t ||
                  null === (i = t.points) ||
                  void 0 === i
                    ? void 0
                    : i.find(({ time: e }) => e === Math.round(this.seekTime));
                a &&
                  this.elements.thumb.time.insertAdjacentHTML(
                    "afterbegin",
                    `${a.label}<br>`
                  );
              }
              this.showImageAtCurrentTime();
            }
          }),
          t(this, "endMove", () => {
            this.toggleThumbContainer(!1, !0);
          }),
          t(this, "startScrubbing", (e) => {
            (A.nullOrUndefined(e.button) ||
              !1 === e.button ||
              0 === e.button) &&
              ((this.mouseDown = !0),
              this.player.media.duration &&
                (this.toggleScrubbingContainer(!0),
                this.toggleThumbContainer(!1, !0),
                this.showImageAtCurrentTime()));
          }),
          t(this, "endScrubbing", () => {
            (this.mouseDown = !1),
              Math.ceil(this.lastTime) ===
              Math.ceil(this.player.media.currentTime)
                ? this.toggleScrubbingContainer(!1)
                : Z.call(this.player, this.player.media, "timeupdate", () => {
                    this.mouseDown || this.toggleScrubbingContainer(!1);
                  });
          }),
          t(this, "listeners", () => {
            this.player.on("play", () => {
              this.toggleThumbContainer(!1, !0);
            }),
              this.player.on("seeked", () => {
                this.toggleThumbContainer(!1);
              }),
              this.player.on("timeupdate", () => {
                this.lastTime = this.player.media.currentTime;
              });
          }),
          t(this, "render", () => {
            (this.elements.thumb.container = O("div", {
              class:
                this.player.config.classNames.previewThumbnails.thumbContainer,
            })),
              (this.elements.thumb.imageContainer = O("div", {
                class:
                  this.player.config.classNames.previewThumbnails
                    .imageContainer,
              })),
              this.elements.thumb.container.appendChild(
                this.elements.thumb.imageContainer
              );
            const e = O("div", {
              class:
                this.player.config.classNames.previewThumbnails.timeContainer,
            });
            (this.elements.thumb.time = O("span", {}, "00:00")),
              e.appendChild(this.elements.thumb.time),
              this.elements.thumb.imageContainer.appendChild(e),
              A.element(this.player.elements.progress) &&
                this.player.elements.progress.appendChild(
                  this.elements.thumb.container
                ),
              (this.elements.scrubbing.container = O("div", {
                class:
                  this.player.config.classNames.previewThumbnails
                    .scrubbingContainer,
              })),
              this.player.elements.wrapper.appendChild(
                this.elements.scrubbing.container
              );
          }),
          t(this, "destroy", () => {
            this.elements.thumb.container &&
              this.elements.thumb.container.remove(),
              this.elements.scrubbing.container &&
                this.elements.scrubbing.container.remove();
          }),
          t(this, "showImageAtCurrentTime", () => {
            this.mouseDown
              ? this.setScrubbingContainerSize()
              : this.setThumbContainerSizeAndPos();
            const e = this.thumbnails[0].frames.findIndex(
                (e) =>
                  this.seekTime >= e.startTime && this.seekTime <= e.endTime
              ),
              t = e >= 0;
            let i = 0;
            this.mouseDown || this.toggleThumbContainer(t),
              t &&
                (this.thumbnails.forEach((t, s) => {
                  this.loadedImages.includes(t.frames[e].text) && (i = s);
                }),
                e !== this.showingThumb &&
                  ((this.showingThumb = e), this.loadImage(i)));
          }),
          t(this, "loadImage", (e = 0) => {
            const t = this.showingThumb,
              i = this.thumbnails[e],
              { urlPrefix: s } = i,
              n = i.frames[t],
              a = i.frames[t].text,
              r = s + a;
            if (
              this.currentImageElement &&
              this.currentImageElement.dataset.filename === a
            )
              this.showImage(this.currentImageElement, n, e, t, a, !1),
                (this.currentImageElement.dataset.index = t),
                this.removeOldImages(this.currentImageElement);
            else {
              this.loadingImage &&
                this.usingSprites &&
                (this.loadingImage.onload = null);
              const i = new Image();
              (i.src = r),
                (i.dataset.index = t),
                (i.dataset.filename = a),
                (this.showingThumbFilename = a),
                this.player.debug.log(`Loading image: ${r}`),
                (i.onload = () => this.showImage(i, n, e, t, a, !0)),
                (this.loadingImage = i),
                this.removeOldImages(i);
            }
          }),
          t(this, "showImage", (e, t, i, s, n, a = !0) => {
            this.player.debug.log(
              `Showing thumb: ${n}. num: ${s}. qual: ${i}. newimg: ${a}`
            ),
              this.setImageSizeAndOffset(e, t),
              a &&
                (this.currentImageContainer.appendChild(e),
                (this.currentImageElement = e),
                this.loadedImages.includes(n) || this.loadedImages.push(n)),
              this.preloadNearby(s, !0)
                .then(this.preloadNearby(s, !1))
                .then(this.getHigherQuality(i, e, t, n));
          }),
          t(this, "removeOldImages", (e) => {
            Array.from(this.currentImageContainer.children).forEach((t) => {
              if ("img" !== t.tagName.toLowerCase()) return;
              const i = this.usingSprites ? 500 : 1e3;
              if (t.dataset.index !== e.dataset.index && !t.dataset.deleting) {
                t.dataset.deleting = !0;
                const { currentImageContainer: e } = this;
                setTimeout(() => {
                  e.removeChild(t),
                    this.player.debug.log(
                      `Removing thumb: ${t.dataset.filename}`
                    );
                }, i);
              }
            });
          }),
          t(
            this,
            "preloadNearby",
            (e, t = !0) =>
              new Promise((i) => {
                setTimeout(() => {
                  const s = this.thumbnails[0].frames[e].text;
                  if (this.showingThumbFilename === s) {
                    let n;
                    n = t
                      ? this.thumbnails[0].frames.slice(e)
                      : this.thumbnails[0].frames.slice(0, e).reverse();
                    let a = !1;
                    n.forEach((e) => {
                      const t = e.text;
                      if (t !== s && !this.loadedImages.includes(t)) {
                        (a = !0),
                          this.player.debug.log(
                            `Preloading thumb filename: ${t}`
                          );
                        const { urlPrefix: e } = this.thumbnails[0],
                          s = e + t,
                          n = new Image();
                        (n.src = s),
                          (n.onload = () => {
                            this.player.debug.log(
                              `Preloaded thumb filename: ${t}`
                            ),
                              this.loadedImages.includes(t) ||
                                this.loadedImages.push(t),
                              i();
                          });
                      }
                    }),
                      a || i();
                  }
                }, 300);
              })
          ),
          t(this, "getHigherQuality", (e, t, i, s) => {
            if (e < this.thumbnails.length - 1) {
              let n = t.naturalHeight;
              this.usingSprites && (n = i.h),
                n < this.thumbContainerHeight &&
                  setTimeout(() => {
                    this.showingThumbFilename === s &&
                      (this.player.debug.log(
                        `Showing higher quality thumb for: ${s}`
                      ),
                      this.loadImage(e + 1));
                  }, 300);
            }
          }),
          t(this, "toggleThumbContainer", (e = !1, t = !1) => {
            const i =
              this.player.config.classNames.previewThumbnails
                .thumbContainerShown;
            this.elements.thumb.container.classList.toggle(i, e),
              !e &&
                t &&
                ((this.showingThumb = null),
                (this.showingThumbFilename = null));
          }),
          t(this, "toggleScrubbingContainer", (e = !1) => {
            const t =
              this.player.config.classNames.previewThumbnails
                .scrubbingContainerShown;
            this.elements.scrubbing.container.classList.toggle(t, e),
              e ||
                ((this.showingThumb = null),
                (this.showingThumbFilename = null));
          }),
          t(this, "determineContainerAutoSizing", () => {
            (this.elements.thumb.imageContainer.clientHeight > 20 ||
              this.elements.thumb.imageContainer.clientWidth > 20) &&
              (this.sizeSpecifiedInCSS = !0);
          }),
          t(this, "setThumbContainerSizeAndPos", () => {
            const { imageContainer: e } = this.elements.thumb;
            if (this.sizeSpecifiedInCSS) {
              if (e.clientHeight > 20 && e.clientWidth < 20) {
                const t = Math.floor(e.clientHeight * this.thumbAspectRatio);
                e.style.width = `${t}px`;
              } else if (e.clientHeight < 20 && e.clientWidth > 20) {
                const t = Math.floor(e.clientWidth / this.thumbAspectRatio);
                e.style.height = `${t}px`;
              }
            } else {
              const t = Math.floor(
                this.thumbContainerHeight * this.thumbAspectRatio
              );
              (e.style.height = `${this.thumbContainerHeight}px`),
                (e.style.width = `${t}px`);
            }
            this.setThumbContainerPos();
          }),
          t(this, "setThumbContainerPos", () => {
            const e = this.player.elements.progress.getBoundingClientRect(),
              t = this.player.elements.container.getBoundingClientRect(),
              { container: i } = this.elements.thumb,
              s = t.left - e.left + 10,
              n = t.right - e.left - i.clientWidth - 10,
              a = this.mousePosX - e.left - i.clientWidth / 2,
              r = Ze(a, s, n);
            (i.style.left = `${r}px`),
              i.style.setProperty("--preview-arrow-offset", a - r + "px");
          }),
          t(this, "setScrubbingContainerSize", () => {
            const { width: e, height: t } = tt(this.thumbAspectRatio, {
              width: this.player.media.clientWidth,
              height: this.player.media.clientHeight,
            });
            (this.elements.scrubbing.container.style.width = `${e}px`),
              (this.elements.scrubbing.container.style.height = `${t}px`);
          }),
          t(this, "setImageSizeAndOffset", (e, t) => {
            if (!this.usingSprites) return;
            const i = this.thumbContainerHeight / t.h;
            (e.style.height = e.naturalHeight * i + "px"),
              (e.style.width = e.naturalWidth * i + "px"),
              (e.style.left = `-${t.x * i}px`),
              (e.style.top = `-${t.y * i}px`);
          }),
          (this.player = e),
          (this.thumbnails = []),
          (this.loaded = !1),
          (this.lastMouseMoveTime = Date.now()),
          (this.mouseDown = !1),
          (this.loadedImages = []),
          (this.elements = { thumb: {}, scrubbing: {} }),
          this.load();
      }
      get enabled() {
        return (
          this.player.isHTML5 &&
          this.player.isVideo &&
          this.player.config.previewThumbnails.enabled
        );
      }
      get currentImageContainer() {
        return this.mouseDown
          ? this.elements.scrubbing.container
          : this.elements.thumb.imageContainer;
      }
      get usingSprites() {
        return Object.keys(this.thumbnails[0].frames[0]).includes("w");
      }
      get thumbAspectRatio() {
        return this.usingSprites
          ? this.thumbnails[0].frames[0].w / this.thumbnails[0].frames[0].h
          : this.thumbnails[0].width / this.thumbnails[0].height;
      }
      get thumbContainerHeight() {
        if (this.mouseDown) {
          const { height: e } = tt(this.thumbAspectRatio, {
            width: this.player.media.clientWidth,
            height: this.player.media.clientHeight,
          });
          return e;
        }
        return this.sizeSpecifiedInCSS
          ? this.elements.thumb.imageContainer.clientHeight
          : Math.floor(
              this.player.media.clientWidth / this.thumbAspectRatio / 4
            );
      }
      get currentImageElement() {
        return this.mouseDown
          ? this.currentScrubbingImageElement
          : this.currentThumbnailImageElement;
      }
      set currentImageElement(e) {
        this.mouseDown
          ? (this.currentScrubbingImageElement = e)
          : (this.currentThumbnailImageElement = e);
      }
    }
    const st = {
      insertElements(e, t) {
        A.string(t)
          ? $(e, this.media, { src: t })
          : A.array(t) &&
            t.forEach((t) => {
              $(e, this.media, t);
            });
      },
      change(e) {
        L(e, "sources.length")
          ? (me.cancelRequests.call(this),
            this.destroy.call(
              this,
              () => {
                (this.options.quality = []),
                  j(this.media),
                  (this.media = null),
                  A.element(this.elements.container) &&
                    this.elements.container.removeAttribute("class");
                const { sources: t, type: i } = e,
                  [{ provider: s = $e.html5, src: n }] = t,
                  a = "html5" === s ? i : "div",
                  r = "html5" === s ? {} : { src: n };
                Object.assign(this, {
                  provider: s,
                  type: i,
                  supported: Y.check(i, s, this.config.playsinline),
                  media: O(a, r),
                }),
                  this.elements.container.appendChild(this.media),
                  A.boolean(e.autoplay) && (this.config.autoplay = e.autoplay),
                  this.isHTML5 &&
                    (this.config.crossorigin &&
                      this.media.setAttribute("crossorigin", ""),
                    this.config.autoplay &&
                      this.media.setAttribute("autoplay", ""),
                    A.empty(e.poster) || (this.poster = e.poster),
                    this.config.loop.active &&
                      this.media.setAttribute("loop", ""),
                    this.config.muted && this.media.setAttribute("muted", ""),
                    this.config.playsinline &&
                      this.media.setAttribute("playsinline", "")),
                  Ue.addStyleHook.call(this),
                  this.isHTML5 && st.insertElements.call(this, "source", t),
                  (this.config.title = e.title),
                  Je.setup.call(this),
                  this.isHTML5 &&
                    Object.keys(e).includes("tracks") &&
                    st.insertElements.call(this, "track", e.tracks),
                  (this.isHTML5 || (this.isEmbed && !this.supported.ui)) &&
                    Ue.build.call(this),
                  this.isHTML5 && this.media.load(),
                  A.empty(e.previewThumbnails) ||
                    (Object.assign(
                      this.config.previewThumbnails,
                      e.previewThumbnails
                    ),
                    this.previewThumbnails &&
                      this.previewThumbnails.loaded &&
                      (this.previewThumbnails.destroy(),
                      (this.previewThumbnails = null)),
                    this.config.previewThumbnails.enabled &&
                      (this.previewThumbnails = new it(this))),
                  this.fullscreen.update();
              },
              !0
            ))
          : this.debug.warn("Invalid source format");
      },
    };
    class nt {
      constructor(e, i) {
        if (
          (t(this, "play", () =>
            A.function(this.media.play)
              ? (this.ads &&
                  this.ads.enabled &&
                  this.ads.managerPromise
                    .then(() => this.ads.play())
                    .catch(() => se(this.media.play())),
                this.media.play())
              : null
          ),
          t(this, "pause", () =>
            this.playing && A.function(this.media.pause)
              ? this.media.pause()
              : null
          ),
          t(this, "togglePlay", (e) =>
            (A.boolean(e) ? e : !this.playing) ? this.play() : this.pause()
          ),
          t(this, "stop", () => {
            this.isHTML5
              ? (this.pause(), this.restart())
              : A.function(this.media.stop) && this.media.stop();
          }),
          t(this, "restart", () => {
            this.currentTime = 0;
          }),
          t(this, "rewind", (e) => {
            this.currentTime -= A.number(e) ? e : this.config.seekTime;
          }),
          t(this, "forward", (e) => {
            this.currentTime += A.number(e) ? e : this.config.seekTime;
          }),
          t(this, "increaseVolume", (e) => {
            const t = this.media.muted ? 0 : this.volume;
            this.volume = t + (A.number(e) ? e : 0);
          }),
          t(this, "decreaseVolume", (e) => {
            this.increaseVolume(-e);
          }),
          t(this, "airplay", () => {
            Y.airplay && this.media.webkitShowPlaybackTargetPicker();
          }),
          t(this, "toggleControls", (e) => {
            if (this.supported.ui && !this.isAudio) {
              const t = U(
                  this.elements.container,
                  this.config.classNames.hideControls
                ),
                i = void 0 === e ? void 0 : !e,
                s = F(
                  this.elements.container,
                  this.config.classNames.hideControls,
                  i
                );
              if (
                (s &&
                  A.array(this.config.controls) &&
                  this.config.controls.includes("settings") &&
                  !A.empty(this.config.settings) &&
                  Me.toggleMenu.call(this, !1),
                s !== t)
              ) {
                const e = s ? "controlshidden" : "controlsshown";
                ee.call(this, this.media, e);
              }
              return !s;
            }
            return !1;
          }),
          t(this, "on", (e, t) => {
            J.call(this, this.elements.container, e, t);
          }),
          t(this, "once", (e, t) => {
            Z.call(this, this.elements.container, e, t);
          }),
          t(this, "off", (e, t) => {
            G(this.elements.container, e, t);
          }),
          t(this, "destroy", (e, t = !1) => {
            if (!this.ready) return;
            const i = () => {
              (document.body.style.overflow = ""),
                (this.embed = null),
                t
                  ? (Object.keys(this.elements).length &&
                      (j(this.elements.buttons.play),
                      j(this.elements.captions),
                      j(this.elements.controls),
                      j(this.elements.wrapper),
                      (this.elements.buttons.play = null),
                      (this.elements.captions = null),
                      (this.elements.controls = null),
                      (this.elements.wrapper = null)),
                    A.function(e) && e())
                  : (te.call(this),
                    me.cancelRequests.call(this),
                    D(this.elements.original, this.elements.container),
                    ee.call(this, this.elements.original, "destroyed", !0),
                    A.function(e) && e.call(this.elements.original),
                    (this.ready = !1),
                    setTimeout(() => {
                      (this.elements = null), (this.media = null);
                    }, 200));
            };
            this.stop(),
              clearTimeout(this.timers.loading),
              clearTimeout(this.timers.controls),
              clearTimeout(this.timers.resized),
              this.isHTML5
                ? (Ue.toggleNativeControls.call(this, !0), i())
                : this.isYouTube
                ? (clearInterval(this.timers.buffering),
                  clearInterval(this.timers.playing),
                  null !== this.embed &&
                    A.function(this.embed.destroy) &&
                    this.embed.destroy(),
                  i())
                : this.isVimeo &&
                  (null !== this.embed && this.embed.unload().then(i),
                  setTimeout(i, 200));
          }),
          t(this, "supports", (e) => Y.mime.call(this, e)),
          (this.timers = {}),
          (this.ready = !1),
          (this.loading = !1),
          (this.failed = !1),
          (this.touch = Y.touch),
          (this.media = e),
          A.string(this.media) &&
            (this.media = document.querySelectorAll(this.media)),
          ((window.jQuery && this.media instanceof jQuery) ||
            A.nodeList(this.media) ||
            A.array(this.media)) &&
            (this.media = this.media[0]),
          (this.config = N(
            {},
            _e,
            nt.defaults,
            i || {},
            (() => {
              try {
                return JSON.parse(this.media.getAttribute("data-plyr-config"));
              } catch (e) {
                return {};
              }
            })()
          )),
          (this.elements = {
            container: null,
            fullscreen: null,
            captions: null,
            buttons: {},
            display: {},
            progress: {},
            inputs: {},
            settings: { popup: null, menu: null, panels: {}, buttons: {} },
          }),
          (this.captions = {
            active: null,
            currentTrack: -1,
            meta: new WeakMap(),
          }),
          (this.fullscreen = { active: !1 }),
          (this.options = { speed: [], quality: [] }),
          (this.debug = new qe(this.config.debug)),
          this.debug.log("Config", this.config),
          this.debug.log("Support", Y),
          A.nullOrUndefined(this.media) || !A.element(this.media))
        )
          return void this.debug.error(
            "Setup failed: no suitable element passed"
          );
        if (this.media.plyr)
          return void this.debug.warn("Target already setup");
        if (!this.config.enabled)
          return void this.debug.error("Setup failed: disabled by config");
        if (!Y.check().api)
          return void this.debug.error("Setup failed: no support");
        const s = this.media.cloneNode(!0);
        (s.autoplay = !1), (this.elements.original = s);
        const n = this.media.tagName.toLowerCase();
        let a = null,
          r = null;
        switch (n) {
          case "div":
            if (((a = this.media.querySelector("iframe")), A.element(a))) {
              if (
                ((r = xe(a.getAttribute("src"))),
                (this.provider = (function (e) {
                  return /^(https?:\/\/)?(www\.)?(youtube\.com|youtube-nocookie\.com|youtu\.?be)\/.+$/.test(
                    e
                  )
                    ? $e.youtube
                    : /^https?:\/\/player.vimeo.com\/video\/\d{0,9}(?=\b|\/)/.test(
                        e
                      )
                    ? $e.vimeo
                    : null;
                })(r.toString())),
                (this.elements.container = this.media),
                (this.media = a),
                (this.elements.container.className = ""),
                r.search.length)
              ) {
                const e = ["1", "true"];
                e.includes(r.searchParams.get("autoplay")) &&
                  (this.config.autoplay = !0),
                  e.includes(r.searchParams.get("loop")) &&
                    (this.config.loop.active = !0),
                  this.isYouTube
                    ? ((this.config.playsinline = e.includes(
                        r.searchParams.get("playsinline")
                      )),
                      (this.config.youtube.hl = r.searchParams.get("hl")))
                    : (this.config.playsinline = !0);
              }
            } else (this.provider = this.media.getAttribute(this.config.attributes.embed.provider)), this.media.removeAttribute(this.config.attributes.embed.provider);
            if (
              A.empty(this.provider) ||
              !Object.values($e).includes(this.provider)
            )
              return void this.debug.error("Setup failed: Invalid provider");
            this.type = Re;
            break;
          case "video":
          case "audio":
            (this.type = n),
              (this.provider = $e.html5),
              this.media.hasAttribute("crossorigin") &&
                (this.config.crossorigin = !0),
              this.media.hasAttribute("autoplay") &&
                (this.config.autoplay = !0),
              (this.media.hasAttribute("playsinline") ||
                this.media.hasAttribute("webkit-playsinline")) &&
                (this.config.playsinline = !0),
              this.media.hasAttribute("muted") && (this.config.muted = !0),
              this.media.hasAttribute("loop") && (this.config.loop.active = !0);
            break;
          default:
            return void this.debug.error("Setup failed: unsupported type");
        }
        (this.supported = Y.check(this.type, this.provider)),
          this.supported.api
            ? ((this.eventListeners = []),
              (this.listeners = new Ve(this)),
              (this.storage = new Te(this)),
              (this.media.plyr = this),
              A.element(this.elements.container) ||
                ((this.elements.container = O("div")),
                _(this.media, this.elements.container)),
              Ue.migrateStyles.call(this),
              Ue.addStyleHook.call(this),
              Je.setup.call(this),
              this.config.debug &&
                J.call(
                  this,
                  this.elements.container,
                  this.config.events.join(" "),
                  (e) => {
                    this.debug.log(`event: ${e.type}`);
                  }
                ),
              (this.fullscreen = new He(this)),
              (this.isHTML5 || (this.isEmbed && !this.supported.ui)) &&
                Ue.build.call(this),
              this.listeners.container(),
              this.listeners.global(),
              this.config.ads.enabled && (this.ads = new Ge(this)),
              this.isHTML5 &&
                this.config.autoplay &&
                this.once("canplay", () => se(this.play())),
              (this.lastSeekTime = 0),
              this.config.previewThumbnails.enabled &&
                (this.previewThumbnails = new it(this)))
            : this.debug.error("Setup failed: no support");
      }
      get isHTML5() {
        return this.provider === $e.html5;
      }
      get isEmbed() {
        return this.isYouTube || this.isVimeo;
      }
      get isYouTube() {
        return this.provider === $e.youtube;
      }
      get isVimeo() {
        return this.provider === $e.vimeo;
      }
      get isVideo() {
        return this.type === Re;
      }
      get isAudio() {
        return this.type === je;
      }
      get playing() {
        return Boolean(this.ready && !this.paused && !this.ended);
      }
      get paused() {
        return Boolean(this.media.paused);
      }
      get stopped() {
        return Boolean(this.paused && 0 === this.currentTime);
      }
      get ended() {
        return Boolean(this.media.ended);
      }
      set currentTime(e) {
        if (!this.duration) return;
        const t = A.number(e) && e > 0;
        (this.media.currentTime = t ? Math.min(e, this.duration) : 0),
          this.debug.log(`Seeking to ${this.currentTime} seconds`);
      }
      get currentTime() {
        return Number(this.media.currentTime);
      }
      get buffered() {
        const { buffered: e } = this.media;
        return A.number(e)
          ? e
          : e && e.length && this.duration > 0
          ? e.end(0) / this.duration
          : 0;
      }
      get seeking() {
        return Boolean(this.media.seeking);
      }
      get duration() {
        const e = parseFloat(this.config.duration),
          t = (this.media || {}).duration,
          i = A.number(t) && t !== 1 / 0 ? t : 0;
        return e || i;
      }
      set volume(e) {
        let t = e;
        A.string(t) && (t = Number(t)),
          A.number(t) || (t = this.storage.get("volume")),
          A.number(t) || ({ volume: t } = this.config),
          t > 1 && (t = 1),
          t < 0 && (t = 0),
          (this.config.volume = t),
          (this.media.volume = t),
          !A.empty(e) && this.muted && t > 0 && (this.muted = !1);
      }
      get volume() {
        return Number(this.media.volume);
      }
      set muted(e) {
        let t = e;
        A.boolean(t) || (t = this.storage.get("muted")),
          A.boolean(t) || (t = this.config.muted),
          (this.config.muted = t),
          (this.media.muted = t);
      }
      get muted() {
        return Boolean(this.media.muted);
      }
      get hasAudio() {
        return (
          !this.isHTML5 ||
          !!this.isAudio ||
          Boolean(this.media.mozHasAudio) ||
          Boolean(this.media.webkitAudioDecodedByteCount) ||
          Boolean(this.media.audioTracks && this.media.audioTracks.length)
        );
      }
      set speed(e) {
        let t = null;
        A.number(e) && (t = e),
          A.number(t) || (t = this.storage.get("speed")),
          A.number(t) || (t = this.config.speed.selected);
        const { minimumSpeed: i, maximumSpeed: s } = this;
        (t = Ze(t, i, s)),
          (this.config.speed.selected = t),
          setTimeout(() => {
            this.media && (this.media.playbackRate = t);
          }, 0);
      }
      get speed() {
        return Number(this.media.playbackRate);
      }
      get minimumSpeed() {
        return this.isYouTube
          ? Math.min(...this.options.speed)
          : this.isVimeo
          ? 0.5
          : 0.0625;
      }
      get maximumSpeed() {
        return this.isYouTube
          ? Math.max(...this.options.speed)
          : this.isVimeo
          ? 2
          : 16;
      }
      set quality(e) {
        const t = this.config.quality,
          i = this.options.quality;
        if (!i.length) return;
        let s = [
            !A.empty(e) && Number(e),
            this.storage.get("quality"),
            t.selected,
            t.default,
          ].find(A.number),
          n = !0;
        if (!i.includes(s)) {
          const e = ae(i, s);
          this.debug.warn(
            `Unsupported quality option: ${s}, using ${e} instead`
          ),
            (s = e),
            (n = !1);
        }
        (t.selected = s),
          (this.media.quality = s),
          n && this.storage.set({ quality: s });
      }
      get quality() {
        return this.media.quality;
      }
      set loop(e) {
        const t = A.boolean(e) ? e : this.config.loop.active;
        (this.config.loop.active = t), (this.media.loop = t);
      }
      get loop() {
        return Boolean(this.media.loop);
      }
      set source(e) {
        st.change.call(this, e);
      }
      get source() {
        return this.media.currentSrc;
      }
      get download() {
        const { download: e } = this.config.urls;
        return A.url(e) ? e : this.source;
      }
      set download(e) {
        A.url(e) &&
          ((this.config.urls.download = e), Me.setDownloadUrl.call(this));
      }
      set poster(e) {
        this.isVideo
          ? Ue.setPoster.call(this, e, !1).catch(() => {})
          : this.debug.warn("Poster can only be set for video");
      }
      get poster() {
        return this.isVideo
          ? this.media.getAttribute("poster") ||
              this.media.getAttribute("data-poster")
          : null;
      }
      get ratio() {
        if (!this.isVideo) return null;
        const e = ce(ue.call(this));
        return A.array(e) ? e.join(":") : e;
      }
      set ratio(e) {
        this.isVideo
          ? A.string(e) && le(e)
            ? ((this.config.ratio = ce(e)), he.call(this))
            : this.debug.error(`Invalid aspect ratio specified (${e})`)
          : this.debug.warn("Aspect ratio can only be set for video");
      }
      set autoplay(e) {
        this.config.autoplay = A.boolean(e) ? e : this.config.autoplay;
      }
      get autoplay() {
        return Boolean(this.config.autoplay);
      }
      toggleCaptions(e) {
        Ne.toggle.call(this, e, !1);
      }
      set currentTrack(e) {
        Ne.set.call(this, e, !1), Ne.setup.call(this);
      }
      get currentTrack() {
        const { toggled: e, currentTrack: t } = this.captions;
        return e ? t : -1;
      }
      set language(e) {
        Ne.setLanguage.call(this, e, !1);
      }
      get language() {
        return (Ne.getCurrentTrack.call(this) || {}).language;
      }
      set pip(e) {
        if (!Y.pip) return;
        const t = A.boolean(e) ? e : !this.pip;
        A.function(this.media.webkitSetPresentationMode) &&
          this.media.webkitSetPresentationMode(t ? Ie : Oe),
          A.function(this.media.requestPictureInPicture) &&
            (!this.pip && t
              ? this.media.requestPictureInPicture()
              : this.pip && !t && document.exitPictureInPicture());
      }
      get pip() {
        return Y.pip
          ? A.empty(this.media.webkitPresentationMode)
            ? this.media === document.pictureInPictureElement
            : this.media.webkitPresentationMode === Ie
          : null;
      }
      setPreviewThumbnails(e) {
        this.previewThumbnails &&
          this.previewThumbnails.loaded &&
          (this.previewThumbnails.destroy(), (this.previewThumbnails = null)),
          Object.assign(this.config.previewThumbnails, e),
          this.config.previewThumbnails.enabled &&
            (this.previewThumbnails = new it(this));
      }
      static supported(e, t) {
        return Y.check(e, t);
      }
      static loadSprite(e, t) {
        return Ee(e, t);
      }
      static setup(e, t = {}) {
        let i = null;
        return (
          A.string(e)
            ? (i = Array.from(document.querySelectorAll(e)))
            : A.nodeList(e)
            ? (i = Array.from(e))
            : A.array(e) && (i = e.filter(A.element)),
          A.empty(i) ? null : i.map((e) => new nt(e, t))
        );
      }
    }
    var at;
    return (nt.defaults = ((at = _e), JSON.parse(JSON.stringify(at)))), nt;
  });
