(function (B, l) {
  typeof exports == "object" && typeof module < "u"
    ? l(exports, require("vue"), require("@vueuse/core"))
    : typeof define == "function" && define.amd
    ? define(["exports", "vue", "@vueuse/core"], l)
    : ((B = typeof globalThis < "u" ? globalThis : B || self),
      l((B["vue-d3-network-graph"] = {}), B.Vue, B.VueUseCore));
})(this, function (B, l, O) {
  "use strict";
  function Fe(e, n) {
    const r = l.ref(void 0),
      t = l.reactive({ x: 0, y: 0 }),
      i = (h) => {
        let d,
          _ = 0;
        return (
          h instanceof MouseEvent
            ? ((d = h.clientX), (_ = h.clientY))
            : h instanceof TouchEvent &&
              ((d = h.touches[0].clientX), (_ = h.touches[0].clientY)),
          { x: d || 0, y: _ || 0 }
        );
      },
      s = (h, d) =>
        n.value
          ? (() => {
              (r.value = d), u(h, e.value.nodes()[d]);
            })()
          : void 0,
      u = (h, d) => {
        let _ = 0,
          y = 0;
        if (h && d && d != null && d.x && d != null && d.y) {
          const p = i(h);
          (_ = p.x ? p.x - d.x : d.x), (y = p.y ? p.y - d.y : d.y);
        }
        (t.x = _), (t.y = y);
      },
      f = () => {
        if (r.value !== void 0) {
          const h = e.value.nodes()[r.value];
          (h.fx = null), (h.fy = null), v();
        }
      },
      v = () => {
        (r.value = void 0), e.value.alpha(0.1), e.value.restart(), u();
      };
    return {
      dragStart: s,
      dragEnd: f,
      move: (h) => {
        const d = i(h);
        r.value != null &&
          e.value.nodes()[r.value] &&
          (e.value.restart(),
          e.value.alpha(0.5),
          (e.value.nodes()[r.value].fx = d.x - t.x),
          (e.value.nodes()[r.value].fy = d.y - t.y));
      },
    };
  }
  const Z = "arrow-start",
    J = "arrow-end";
  function Ie(e, n, r) {
    const t = (u) => (r.value && u.twoWay ? `url(#${Z})` : void 0),
      i = (u) => (r.value ? `url(#${J})` : void 0),
      s = l.computed(() => ({
        arrowStart: {
          id: Z,
          refX: -(n.value / 2 - e.value),
          refY: 0,
          viewBox: `0 -${5 * e.value} ${10 * e.value} ${10 * e.value}`,
          orient: "auto",
          markerWidth: 10 + e.value,
          markerHeight: 10 + e.value,
          "stroke-width": "1",
          "marker-units": "userSpaceOnUse",
        },
        arrowEnd: {
          id: J,
          refX: n.value / 2 + (10 - e.value),
          refY: 0,
          viewBox: `0 -${5 * e.value} ${10 * e.value} ${10 * e.value}`,
          orient: "auto",
          markerWidth: 10 + e.value,
          markerHeight: 10 + e.value,
          "marker-units": "userSpaceOnUse",
        },
      }));
    return { getMarkerEnd: i, getMarkerStart: t, markers: s };
  }
  function Pe(e) {
    const n = +this._x.call(null, e),
      r = +this._y.call(null, e);
    return q(this.cover(n, r), n, r, e);
  }
  function q(e, n, r, t) {
    if (isNaN(n) || isNaN(r)) return e;
    var i,
      s = e._root,
      u = { data: t },
      f = e._x0,
      v = e._y0,
      o = e._x1,
      h = e._y1,
      d,
      _,
      y,
      p,
      g,
      c,
      a,
      x;
    if (!s) return (e._root = u), e;
    for (; s.length; )
      if (
        ((g = n >= (d = (f + o) / 2)) ? (f = d) : (o = d),
        (c = r >= (_ = (v + h) / 2)) ? (v = _) : (h = _),
        (i = s),
        !(s = s[(a = (c << 1) | g)]))
      )
        return (i[a] = u), e;
    if (
      ((y = +e._x.call(null, s.data)),
      (p = +e._y.call(null, s.data)),
      n === y && r === p)
    )
      return (u.next = s), i ? (i[a] = u) : (e._root = u), e;
    do
      (i = i ? (i[a] = new Array(4)) : (e._root = new Array(4))),
        (g = n >= (d = (f + o) / 2)) ? (f = d) : (o = d),
        (c = r >= (_ = (v + h) / 2)) ? (v = _) : (h = _);
    while ((a = (c << 1) | g) === (x = ((p >= _) << 1) | (y >= d)));
    return (i[x] = s), (i[a] = u), e;
  }
  function Ye(e) {
    var n,
      r,
      t = e.length,
      i,
      s,
      u = new Array(t),
      f = new Array(t),
      v = 1 / 0,
      o = 1 / 0,
      h = -1 / 0,
      d = -1 / 0;
    for (r = 0; r < t; ++r)
      isNaN((i = +this._x.call(null, (n = e[r])))) ||
        isNaN((s = +this._y.call(null, n))) ||
        ((u[r] = i),
        (f[r] = s),
        i < v && (v = i),
        i > h && (h = i),
        s < o && (o = s),
        s > d && (d = s));
    if (v > h || o > d) return this;
    for (this.cover(v, o).cover(h, d), r = 0; r < t; ++r)
      q(this, u[r], f[r], e[r]);
    return this;
  }
  function Ve(e, n) {
    if (isNaN((e = +e)) || isNaN((n = +n))) return this;
    var r = this._x0,
      t = this._y0,
      i = this._x1,
      s = this._y1;
    if (isNaN(r)) (i = (r = Math.floor(e)) + 1), (s = (t = Math.floor(n)) + 1);
    else {
      for (
        var u = i - r || 1, f = this._root, v, o;
        r > e || e >= i || t > n || n >= s;

      )
        switch (
          ((o = ((n < t) << 1) | (e < r)),
          (v = new Array(4)),
          (v[o] = f),
          (f = v),
          (u *= 2),
          o)
        ) {
          case 0:
            (i = r + u), (s = t + u);
            break;
          case 1:
            (r = i - u), (s = t + u);
            break;
          case 2:
            (i = r + u), (t = s - u);
            break;
          case 3:
            (r = i - u), (t = s - u);
            break;
        }
      this._root && this._root.length && (this._root = f);
    }
    return (this._x0 = r), (this._y0 = t), (this._x1 = i), (this._y1 = s), this;
  }
  function We() {
    var e = [];
    return (
      this.visit(function (n) {
        if (!n.length)
          do e.push(n.data);
          while ((n = n.next));
      }),
      e
    );
  }
  function Xe(e) {
    return arguments.length
      ? this.cover(+e[0][0], +e[0][1]).cover(+e[1][0], +e[1][1])
      : isNaN(this._x0)
      ? void 0
      : [
          [this._x0, this._y0],
          [this._x1, this._y1],
        ];
  }
  function S(e, n, r, t, i) {
    (this.node = e), (this.x0 = n), (this.y0 = r), (this.x1 = t), (this.y1 = i);
  }
  function He(e, n, r) {
    var t,
      i = this._x0,
      s = this._y0,
      u,
      f,
      v,
      o,
      h = this._x1,
      d = this._y1,
      _ = [],
      y = this._root,
      p,
      g;
    for (
      y && _.push(new S(y, i, s, h, d)),
        r == null
          ? (r = 1 / 0)
          : ((i = e - r), (s = n - r), (h = e + r), (d = n + r), (r *= r));
      (p = _.pop());

    )
      if (
        !(
          !(y = p.node) ||
          (u = p.x0) > h ||
          (f = p.y0) > d ||
          (v = p.x1) < i ||
          (o = p.y1) < s
        )
      )
        if (y.length) {
          var c = (u + v) / 2,
            a = (f + o) / 2;
          _.push(
            new S(y[3], c, a, v, o),
            new S(y[2], u, a, c, o),
            new S(y[1], c, f, v, a),
            new S(y[0], u, f, c, a)
          ),
            (g = ((n >= a) << 1) | (e >= c)) &&
              ((p = _[_.length - 1]),
              (_[_.length - 1] = _[_.length - 1 - g]),
              (_[_.length - 1 - g] = p));
        } else {
          var x = e - +this._x.call(null, y.data),
            m = n - +this._y.call(null, y.data),
            w = x * x + m * m;
          if (w < r) {
            var k = Math.sqrt((r = w));
            (i = e - k), (s = n - k), (h = e + k), (d = n + k), (t = y.data);
          }
        }
    return t;
  }
  function Ue(e) {
    if (
      isNaN((h = +this._x.call(null, e))) ||
      isNaN((d = +this._y.call(null, e)))
    )
      return this;
    var n,
      r = this._root,
      t,
      i,
      s,
      u = this._x0,
      f = this._y0,
      v = this._x1,
      o = this._y1,
      h,
      d,
      _,
      y,
      p,
      g,
      c,
      a;
    if (!r) return this;
    if (r.length)
      for (;;) {
        if (
          ((p = h >= (_ = (u + v) / 2)) ? (u = _) : (v = _),
          (g = d >= (y = (f + o) / 2)) ? (f = y) : (o = y),
          (n = r),
          !(r = r[(c = (g << 1) | p)]))
        )
          return this;
        if (!r.length) break;
        (n[(c + 1) & 3] || n[(c + 2) & 3] || n[(c + 3) & 3]) &&
          ((t = n), (a = c));
      }
    for (; r.data !== e; ) if (((i = r), !(r = r.next))) return this;
    return (
      (s = r.next) && delete r.next,
      i
        ? (s ? (i.next = s) : delete i.next, this)
        : n
        ? (s ? (n[c] = s) : delete n[c],
          (r = n[0] || n[1] || n[2] || n[3]) &&
            r === (n[3] || n[2] || n[1] || n[0]) &&
            !r.length &&
            (t ? (t[a] = r) : (this._root = r)),
          this)
        : ((this._root = s), this)
    );
  }
  function Oe(e) {
    for (var n = 0, r = e.length; n < r; ++n) this.remove(e[n]);
    return this;
  }
  function je() {
    return this._root;
  }
  function Ge() {
    var e = 0;
    return (
      this.visit(function (n) {
        if (!n.length)
          do ++e;
          while ((n = n.next));
      }),
      e
    );
  }
  function Ke(e) {
    var n = [],
      r,
      t = this._root,
      i,
      s,
      u,
      f,
      v;
    for (
      t && n.push(new S(t, this._x0, this._y0, this._x1, this._y1));
      (r = n.pop());

    )
      if (
        !e((t = r.node), (s = r.x0), (u = r.y0), (f = r.x1), (v = r.y1)) &&
        t.length
      ) {
        var o = (s + f) / 2,
          h = (u + v) / 2;
        (i = t[3]) && n.push(new S(i, o, h, f, v)),
          (i = t[2]) && n.push(new S(i, s, h, o, v)),
          (i = t[1]) && n.push(new S(i, o, u, f, h)),
          (i = t[0]) && n.push(new S(i, s, u, o, h));
      }
    return this;
  }
  function Qe(e) {
    var n = [],
      r = [],
      t;
    for (
      this._root &&
      n.push(new S(this._root, this._x0, this._y0, this._x1, this._y1));
      (t = n.pop());

    ) {
      var i = t.node;
      if (i.length) {
        var s,
          u = t.x0,
          f = t.y0,
          v = t.x1,
          o = t.y1,
          h = (u + v) / 2,
          d = (f + o) / 2;
        (s = i[0]) && n.push(new S(s, u, f, h, d)),
          (s = i[1]) && n.push(new S(s, h, f, v, d)),
          (s = i[2]) && n.push(new S(s, u, d, h, o)),
          (s = i[3]) && n.push(new S(s, h, d, v, o));
      }
      r.push(t);
    }
    for (; (t = r.pop()); ) e(t.node, t.x0, t.y0, t.x1, t.y1);
    return this;
  }
  function Ze(e) {
    return e[0];
  }
  function Je(e) {
    return arguments.length ? ((this._x = e), this) : this._x;
  }
  function qe(e) {
    return e[1];
  }
  function et(e) {
    return arguments.length ? ((this._y = e), this) : this._y;
  }
  function j(e, n, r) {
    var t = new G(n ?? Ze, r ?? qe, NaN, NaN, NaN, NaN);
    return e == null ? t : t.addAll(e);
  }
  function G(e, n, r, t, i, s) {
    (this._x = e),
      (this._y = n),
      (this._x0 = r),
      (this._y0 = t),
      (this._x1 = i),
      (this._y1 = s),
      (this._root = void 0);
  }
  function ee(e) {
    for (var n = { data: e.data }, r = n; (e = e.next); )
      r = r.next = { data: e.data };
    return n;
  }
  var R = (j.prototype = G.prototype);
  (R.copy = function () {
    var e = new G(this._x, this._y, this._x0, this._y0, this._x1, this._y1),
      n = this._root,
      r,
      t;
    if (!n) return e;
    if (!n.length) return (e._root = ee(n)), e;
    for (r = [{ source: n, target: (e._root = new Array(4)) }]; (n = r.pop()); )
      for (var i = 0; i < 4; ++i)
        (t = n.source[i]) &&
          (t.length
            ? r.push({ source: t, target: (n.target[i] = new Array(4)) })
            : (n.target[i] = ee(t)));
    return e;
  }),
    (R.add = Pe),
    (R.addAll = Ye),
    (R.cover = Ve),
    (R.data = We),
    (R.extent = Xe),
    (R.find = He),
    (R.remove = Ue),
    (R.removeAll = Oe),
    (R.root = je),
    (R.size = Ge),
    (R.visit = Ke),
    (R.visitAfter = Qe),
    (R.x = Je),
    (R.y = et);
  function T(e) {
    return function () {
      return e;
    };
  }
  function L(e) {
    return (e() - 0.5) * 1e-6;
  }
  function tt(e) {
    return e.x + e.vx;
  }
  function nt(e) {
    return e.y + e.vy;
  }
  function rt(e) {
    var n,
      r,
      t,
      i = 1,
      s = 1;
    typeof e != "function" && (e = T(e == null ? 1 : +e));
    function u() {
      for (var o, h = n.length, d, _, y, p, g, c, a = 0; a < s; ++a)
        for (d = j(n, tt, nt).visitAfter(f), o = 0; o < h; ++o)
          (_ = n[o]),
            (g = r[_.index]),
            (c = g * g),
            (y = _.x + _.vx),
            (p = _.y + _.vy),
            d.visit(x);
      function x(m, w, k, M, A) {
        var N = m.data,
          C = m.r,
          E = g + C;
        if (N) {
          if (N.index > _.index) {
            var b = y - N.x - N.vx,
              z = p - N.y - N.vy,
              D = b * b + z * z;
            D < E * E &&
              (b === 0 && ((b = L(t)), (D += b * b)),
              z === 0 && ((z = L(t)), (D += z * z)),
              (D = ((E - (D = Math.sqrt(D))) / D) * i),
              (_.vx += (b *= D) * (E = (C *= C) / (c + C))),
              (_.vy += (z *= D) * E),
              (N.vx -= b * (E = 1 - E)),
              (N.vy -= z * E));
          }
          return;
        }
        return w > y + E || M < y - E || k > p + E || A < p - E;
      }
    }
    function f(o) {
      if (o.data) return (o.r = r[o.data.index]);
      for (var h = (o.r = 0); h < 4; ++h)
        o[h] && o[h].r > o.r && (o.r = o[h].r);
    }
    function v() {
      if (n) {
        var o,
          h = n.length,
          d;
        for (r = new Array(h), o = 0; o < h; ++o)
          (d = n[o]), (r[d.index] = +e(d, o, n));
      }
    }
    return (
      (u.initialize = function (o, h) {
        (n = o), (t = h), v();
      }),
      (u.iterations = function (o) {
        return arguments.length ? ((s = +o), u) : s;
      }),
      (u.strength = function (o) {
        return arguments.length ? ((i = +o), u) : i;
      }),
      (u.radius = function (o) {
        return arguments.length
          ? ((e = typeof o == "function" ? o : T(+o)), v(), u)
          : e;
      }),
      u
    );
  }
  function it(e) {
    return e.index;
  }
  function te(e, n) {
    var r = e.get(n);
    if (!r) throw new Error("node not found: " + n);
    return r;
  }
  function ot(e) {
    var n = it,
      r = d,
      t,
      i = T(30),
      s,
      u,
      f,
      v,
      o,
      h = 1;
    e == null && (e = []);
    function d(c) {
      return 1 / Math.min(f[c.source.index], f[c.target.index]);
    }
    function _(c) {
      for (var a = 0, x = e.length; a < h; ++a)
        for (var m = 0, w, k, M, A, N, C, E; m < x; ++m)
          (w = e[m]),
            (k = w.source),
            (M = w.target),
            (A = M.x + M.vx - k.x - k.vx || L(o)),
            (N = M.y + M.vy - k.y - k.vy || L(o)),
            (C = Math.sqrt(A * A + N * N)),
            (C = ((C - s[m]) / C) * c * t[m]),
            (A *= C),
            (N *= C),
            (M.vx -= A * (E = v[m])),
            (M.vy -= N * E),
            (k.vx += A * (E = 1 - E)),
            (k.vy += N * E);
    }
    function y() {
      if (u) {
        var c,
          a = u.length,
          x = e.length,
          m = new Map(u.map((k, M) => [n(k, M, u), k])),
          w;
        for (c = 0, f = new Array(a); c < x; ++c)
          (w = e[c]),
            (w.index = c),
            typeof w.source != "object" && (w.source = te(m, w.source)),
            typeof w.target != "object" && (w.target = te(m, w.target)),
            (f[w.source.index] = (f[w.source.index] || 0) + 1),
            (f[w.target.index] = (f[w.target.index] || 0) + 1);
        for (c = 0, v = new Array(x); c < x; ++c)
          (w = e[c]),
            (v[c] =
              f[w.source.index] / (f[w.source.index] + f[w.target.index]));
        (t = new Array(x)), p(), (s = new Array(x)), g();
      }
    }
    function p() {
      if (u) for (var c = 0, a = e.length; c < a; ++c) t[c] = +r(e[c], c, e);
    }
    function g() {
      if (u) for (var c = 0, a = e.length; c < a; ++c) s[c] = +i(e[c], c, e);
    }
    return (
      (_.initialize = function (c, a) {
        (u = c), (o = a), y();
      }),
      (_.links = function (c) {
        return arguments.length ? ((e = c), y(), _) : e;
      }),
      (_.id = function (c) {
        return arguments.length ? ((n = c), _) : n;
      }),
      (_.iterations = function (c) {
        return arguments.length ? ((h = +c), _) : h;
      }),
      (_.strength = function (c) {
        return arguments.length
          ? ((r = typeof c == "function" ? c : T(+c)), p(), _)
          : r;
      }),
      (_.distance = function (c) {
        return arguments.length
          ? ((i = typeof c == "function" ? c : T(+c)), g(), _)
          : i;
      }),
      _
    );
  }
  var lt = { value: () => {} };
  function ne() {
    for (var e = 0, n = arguments.length, r = {}, t; e < n; ++e) {
      if (!(t = arguments[e] + "") || t in r || /[\s.]/.test(t))
        throw new Error("illegal type: " + t);
      r[t] = [];
    }
    return new W(r);
  }
  function W(e) {
    this._ = e;
  }
  function at(e, n) {
    return e
      .trim()
      .split(/^|\s+/)
      .map(function (r) {
        var t = "",
          i = r.indexOf(".");
        if (
          (i >= 0 && ((t = r.slice(i + 1)), (r = r.slice(0, i))),
          r && !n.hasOwnProperty(r))
        )
          throw new Error("unknown type: " + r);
        return { type: r, name: t };
      });
  }
  W.prototype = ne.prototype = {
    constructor: W,
    on: function (e, n) {
      var r = this._,
        t = at(e + "", r),
        i,
        s = -1,
        u = t.length;
      if (arguments.length < 2) {
        for (; ++s < u; )
          if ((i = (e = t[s]).type) && (i = st(r[i], e.name))) return i;
        return;
      }
      if (n != null && typeof n != "function")
        throw new Error("invalid callback: " + n);
      for (; ++s < u; )
        if ((i = (e = t[s]).type)) r[i] = re(r[i], e.name, n);
        else if (n == null) for (i in r) r[i] = re(r[i], e.name, null);
      return this;
    },
    copy: function () {
      var e = {},
        n = this._;
      for (var r in n) e[r] = n[r].slice();
      return new W(e);
    },
    call: function (e, n) {
      if ((i = arguments.length - 2) > 0)
        for (var r = new Array(i), t = 0, i, s; t < i; ++t)
          r[t] = arguments[t + 2];
      if (!this._.hasOwnProperty(e)) throw new Error("unknown type: " + e);
      for (s = this._[e], t = 0, i = s.length; t < i; ++t)
        s[t].value.apply(n, r);
    },
    apply: function (e, n, r) {
      if (!this._.hasOwnProperty(e)) throw new Error("unknown type: " + e);
      for (var t = this._[e], i = 0, s = t.length; i < s; ++i)
        t[i].value.apply(n, r);
    },
  };
  function st(e, n) {
    for (var r = 0, t = e.length, i; r < t; ++r)
      if ((i = e[r]).name === n) return i.value;
  }
  function re(e, n, r) {
    for (var t = 0, i = e.length; t < i; ++t)
      if (e[t].name === n) {
        (e[t] = lt), (e = e.slice(0, t).concat(e.slice(t + 1)));
        break;
      }
    return r != null && e.push({ name: n, value: r }), e;
  }
  var F = 0,
    I = 0,
    P = 0,
    ie = 1e3,
    X,
    Y,
    H = 0,
    $ = 0,
    U = 0,
    V = typeof performance == "object" && performance.now ? performance : Date,
    oe =
      typeof window == "object" && window.requestAnimationFrame
        ? window.requestAnimationFrame.bind(window)
        : function (e) {
            setTimeout(e, 17);
          };
  function le() {
    return $ || (oe(ft), ($ = V.now() + U));
  }
  function ft() {
    $ = 0;
  }
  function K() {
    this._call = this._time = this._next = null;
  }
  K.prototype = ae.prototype = {
    constructor: K,
    restart: function (e, n, r) {
      if (typeof e != "function")
        throw new TypeError("callback is not a function");
      (r = (r == null ? le() : +r) + (n == null ? 0 : +n)),
        !this._next &&
          Y !== this &&
          (Y ? (Y._next = this) : (X = this), (Y = this)),
        (this._call = e),
        (this._time = r),
        Q();
    },
    stop: function () {
      this._call && ((this._call = null), (this._time = 1 / 0), Q());
    },
  };
  function ae(e, n, r) {
    var t = new K();
    return t.restart(e, n, r), t;
  }
  function ct() {
    le(), ++F;
    for (var e = X, n; e; )
      (n = $ - e._time) >= 0 && e._call.call(void 0, n), (e = e._next);
    --F;
  }
  function se() {
    ($ = (H = V.now()) + U), (F = I = 0);
    try {
      ct();
    } finally {
      (F = 0), ht(), ($ = 0);
    }
  }
  function ut() {
    var e = V.now(),
      n = e - H;
    n > ie && ((U -= n), (H = e));
  }
  function ht() {
    for (var e, n = X, r, t = 1 / 0; n; )
      n._call
        ? (t > n._time && (t = n._time), (e = n), (n = n._next))
        : ((r = n._next), (n._next = null), (n = e ? (e._next = r) : (X = r)));
    (Y = e), Q(t);
  }
  function Q(e) {
    if (!F) {
      I && (I = clearTimeout(I));
      var n = e - $;
      n > 24
        ? (e < 1 / 0 && (I = setTimeout(se, e - V.now() - U)),
          P && (P = clearInterval(P)))
        : (P || ((H = V.now()), (P = setInterval(ut, ie))), (F = 1), oe(se));
    }
  }
  const gt = 1664525,
    yt = 1013904223,
    fe = 4294967296;
  function dt() {
    let e = 1;
    return () => (e = (gt * e + yt) % fe) / fe;
  }
  function vt(e) {
    return e.x;
  }
  function _t(e) {
    return e.y;
  }
  var xt = 10,
    mt = Math.PI * (3 - Math.sqrt(5));
  function ce(e) {
    var n,
      r = 1,
      t = 0.001,
      i = 1 - Math.pow(t, 1 / 300),
      s = 0,
      u = 0.6,
      f = new Map(),
      v = ae(d),
      o = ne("tick", "end"),
      h = dt();
    e == null && (e = []);
    function d() {
      _(), o.call("tick", n), r < t && (v.stop(), o.call("end", n));
    }
    function _(g) {
      var c,
        a = e.length,
        x;
      g === void 0 && (g = 1);
      for (var m = 0; m < g; ++m)
        for (
          r += (s - r) * i,
            f.forEach(function (w) {
              w(r);
            }),
            c = 0;
          c < a;
          ++c
        )
          (x = e[c]),
            x.fx == null ? (x.x += x.vx *= u) : ((x.x = x.fx), (x.vx = 0)),
            x.fy == null ? (x.y += x.vy *= u) : ((x.y = x.fy), (x.vy = 0));
      return n;
    }
    function y() {
      for (var g = 0, c = e.length, a; g < c; ++g) {
        if (
          ((a = e[g]),
          (a.index = g),
          a.fx != null && (a.x = a.fx),
          a.fy != null && (a.y = a.fy),
          isNaN(a.x) || isNaN(a.y))
        ) {
          var x = xt * Math.sqrt(0.5 + g),
            m = g * mt;
          (a.x = x * Math.cos(m)), (a.y = x * Math.sin(m));
        }
        (isNaN(a.vx) || isNaN(a.vy)) && (a.vx = a.vy = 0);
      }
    }
    function p(g) {
      return g.initialize && g.initialize(e, h), g;
    }
    return (
      y(),
      (n = {
        tick: _,
        restart: function () {
          return v.restart(d), n;
        },
        stop: function () {
          return v.stop(), n;
        },
        nodes: function (g) {
          return arguments.length ? ((e = g), y(), f.forEach(p), n) : e;
        },
        alpha: function (g) {
          return arguments.length ? ((r = +g), n) : r;
        },
        alphaMin: function (g) {
          return arguments.length ? ((t = +g), n) : t;
        },
        alphaDecay: function (g) {
          return arguments.length ? ((i = +g), n) : +i;
        },
        alphaTarget: function (g) {
          return arguments.length ? ((s = +g), n) : s;
        },
        velocityDecay: function (g) {
          return arguments.length ? ((u = 1 - g), n) : 1 - u;
        },
        randomSource: function (g) {
          return arguments.length ? ((h = g), f.forEach(p), n) : h;
        },
        force: function (g, c) {
          return arguments.length > 1
            ? (c == null ? f.delete(g) : f.set(g, p(c)), n)
            : f.get(g);
        },
        find: function (g, c, a) {
          var x = 0,
            m = e.length,
            w,
            k,
            M,
            A,
            N;
          for (a == null ? (a = 1 / 0) : (a *= a), x = 0; x < m; ++x)
            (A = e[x]),
              (w = g - A.x),
              (k = c - A.y),
              (M = w * w + k * k),
              M < a && ((N = A), (a = M));
          return N;
        },
        on: function (g, c) {
          return arguments.length > 1 ? (o.on(g, c), n) : o.on(g);
        },
      })
    );
  }
  function wt() {
    var e,
      n,
      r,
      t,
      i = T(-30),
      s,
      u = 1,
      f = 1 / 0,
      v = 0.81;
    function o(y) {
      var p,
        g = e.length,
        c = j(e, vt, _t).visitAfter(d);
      for (t = y, p = 0; p < g; ++p) (n = e[p]), c.visit(_);
    }
    function h() {
      if (e) {
        var y,
          p = e.length,
          g;
        for (s = new Array(p), y = 0; y < p; ++y)
          (g = e[y]), (s[g.index] = +i(g, y, e));
      }
    }
    function d(y) {
      var p = 0,
        g,
        c,
        a = 0,
        x,
        m,
        w;
      if (y.length) {
        for (x = m = w = 0; w < 4; ++w)
          (g = y[w]) &&
            (c = Math.abs(g.value)) &&
            ((p += g.value), (a += c), (x += c * g.x), (m += c * g.y));
        (y.x = x / a), (y.y = m / a);
      } else {
        (g = y), (g.x = g.data.x), (g.y = g.data.y);
        do p += s[g.data.index];
        while ((g = g.next));
      }
      y.value = p;
    }
    function _(y, p, g, c) {
      if (!y.value) return !0;
      var a = y.x - n.x,
        x = y.y - n.y,
        m = c - p,
        w = a * a + x * x;
      if ((m * m) / v < w)
        return (
          w < f &&
            (a === 0 && ((a = L(r)), (w += a * a)),
            x === 0 && ((x = L(r)), (w += x * x)),
            w < u && (w = Math.sqrt(u * w)),
            (n.vx += (a * y.value * t) / w),
            (n.vy += (x * y.value * t) / w)),
          !0
        );
      if (y.length || w >= f) return;
      (y.data !== n || y.next) &&
        (a === 0 && ((a = L(r)), (w += a * a)),
        x === 0 && ((x = L(r)), (w += x * x)),
        w < u && (w = Math.sqrt(u * w)));
      do
        y.data !== n &&
          ((m = (s[y.data.index] * t) / w), (n.vx += a * m), (n.vy += x * m));
      while ((y = y.next));
    }
    return (
      (o.initialize = function (y, p) {
        (e = y), (r = p), h();
      }),
      (o.strength = function (y) {
        return arguments.length
          ? ((i = typeof y == "function" ? y : T(+y)), h(), o)
          : i;
      }),
      (o.distanceMin = function (y) {
        return arguments.length ? ((u = y * y), o) : Math.sqrt(u);
      }),
      (o.distanceMax = function (y) {
        return arguments.length ? ((f = y * y), o) : Math.sqrt(f);
      }),
      (o.theta = function (y) {
        return arguments.length ? ((v = y * y), o) : Math.sqrt(v);
      }),
      o
    );
  }
  function pt(e) {
    var n = T(0.1),
      r,
      t,
      i;
    typeof e != "function" && (e = T(e == null ? 0 : +e));
    function s(f) {
      for (var v = 0, o = r.length, h; v < o; ++v)
        (h = r[v]), (h.vx += (i[v] - h.x) * t[v] * f);
    }
    function u() {
      if (r) {
        var f,
          v = r.length;
        for (t = new Array(v), i = new Array(v), f = 0; f < v; ++f)
          t[f] = isNaN((i[f] = +e(r[f], f, r))) ? 0 : +n(r[f], f, r);
      }
    }
    return (
      (s.initialize = function (f) {
        (r = f), u();
      }),
      (s.strength = function (f) {
        return arguments.length
          ? ((n = typeof f == "function" ? f : T(+f)), u(), s)
          : n;
      }),
      (s.x = function (f) {
        return arguments.length
          ? ((e = typeof f == "function" ? f : T(+f)), u(), s)
          : e;
      }),
      s
    );
  }
  function kt(e) {
    var n = T(0.1),
      r,
      t,
      i;
    typeof e != "function" && (e = T(e == null ? 0 : +e));
    function s(f) {
      for (var v = 0, o = r.length, h; v < o; ++v)
        (h = r[v]), (h.vy += (i[v] - h.y) * t[v] * f);
    }
    function u() {
      if (r) {
        var f,
          v = r.length;
        for (t = new Array(v), i = new Array(v), f = 0; f < v; ++f)
          t[f] = isNaN((i[f] = +e(r[f], f, r))) ? 0 : +n(r[f], f, r);
      }
    }
    return (
      (s.initialize = function (f) {
        (r = f), u();
      }),
      (s.strength = function (f) {
        return arguments.length
          ? ((n = typeof f == "function" ? f : T(+f)), u(), s)
          : n;
      }),
      (s.y = function (f) {
        return arguments.length
          ? ((e = typeof f == "function" ? f : T(+f)), u(), s)
          : e;
      }),
      s
    );
  }
  function Nt(e) {
    const n = (o) => o || e.value,
      r = (o) => o.width || e.value,
      t = (o) => o.height || o.size || e.value,
      i = (o) => (o.color ? "fill: " + o.color : ""),
      s = (o, h, d) => (h || d ? ["node", "pinned"] : ["node"]);
    return {
      getNode: (o) => ({
        id: o.id,
        key: o.id,
        viewBox: o.innerSVG,
        width: r(o),
        height: t(o),
        name: o.name,
        style: i(o),
        title: o.name,
        cssClass: s(o.cssClass, void 0, void 0),
        r: o.innerSVG ? void 0 : n(o.size) / 2,
      }),
      getClass: s,
      getSize: n,
      getX: (o, h) => (o || 0) - (h || 0) / 2,
      getY: (o, h) => (o || 0) - (h || 0) / 2,
    };
  }
  const ue = "arrow-start",
    he = "arrow-end";
  function Et(e, n, r) {
    const t = (o) => (o.color ? { stroke: o.color } : {}),
      i = (o) => ["link"],
      s = (o) => (r.value && o.twoWay ? `url(#${ue})` : void 0),
      u = (o) => (r.value ? `url(#${he})` : void 0),
      f = l.computed(() => ({
        arrowStart: {
          id: ue,
          refX: -(n.value / 2 - e.value),
          refY: 0,
          viewBox: `0 -${5 * e.value} ${10 * e.value} ${10 * e.value}`,
          orient: "auto",
          markerWidth: 10 + e.value,
          markerHeight: 10 + e.value,
          "stroke-width": "1",
          "marker-units": "userSpaceOnUse",
        },
        arrowEnd: {
          id: he,
          refX: n.value / 2 + (10 - e.value),
          refY: 0,
          viewBox: `0 -${5 * e.value} ${10 * e.value} ${10 * e.value}`,
          orient: "auto",
          markerWidth: 10 + e.value,
          markerHeight: 10 + e.value,
          "marker-units": "userSpaceOnUse",
        },
      }));
    return {
      getClass: i,
      getStyle: t,
      getMarkerEnd: u,
      getMarkerStart: s,
      getSimulationLink: (o) => ({
        source: o.source,
        target: o.target,
        id: o.id,
        key: o.id,
        name: o.name,
        class: i(o.id),
        style: t(o),
        "stroke-width": e.value,
        "marker-end": u(),
        "marker-start": s(o),
      }),
      markers: f,
    };
  }
  const Mt = "X",
    At = "Y",
    St = "charge",
    Rt = "link",
    Tt = "collide",
    ge = 0.01,
    ye = 0.1,
    Ct = Math.log(ge) / Math.log(1 - ye);
  function de(e, n, r, t) {
    const { getNode: i } = Nt(t.nodeSize),
      { getSimulationLink: s } = Et(t.linkWidth, t.nodeSize, t.directed),
      u = l.reactive({ nodes: [], links: [] }),
      f = () => {
        console.debug("useSimulation.init"),
          (u.nodes = e.value.map((d) => i(d))),
          (u.links = n.value.map((d) => s(d))),
          v();
      },
      v = async () => {
        console.debug("useSimulation.refresh"),
          h.value.stop(),
          (h.value = o()),
          t.static.value ? h.value.tick(Ct) : h.value.restart();
      },
      o = () => {
        const d = ce().alphaMin(ge).alphaDecay(ye).nodes(u.nodes);
        return (
          d.force(Mt, pt(r.value.width / 2).strength(t.forceXStrength.value)),
          d.force(At, kt(r.value.height / 2).strength(t.forceYStrength.value)),
          d.force(St, wt().strength(t.forcManyBodyStrength.value)),
          d.force(Tt, rt(t.forceCollideStrength.value)),
          d.force(
            Rt,
            ot(u.links).id((_) => {
              if (!("id" in _)) throw new Error("Node id is undefined");
              return _.id;
            })
          ),
          d
        );
      },
      h = l.ref(ce());
    return (
      O.watchDebounced(
        [
          () => e.value.length,
          () => n.value.length,
          r,
          t.nodeSize,
          t.linkWidth,
          t.forcManyBodyStrength,
          t.forceXStrength,
          t.forceYStrength,
          t.forceCollideStrength,
          t.directed,
        ],
        async () => f(),
        { debounce: 100, maxWait: 1e3 }
      ),
      O.watchDebounced(t.static, async () => v(), {
        deep: !0,
        debounce: 100,
        maxWait: 1e3,
      }),
      { simulation: h, graph: u }
    );
  }
  const Dt = 0.1,
    bt = 0.1,
    zt = -300,
    Bt = 25,
    Lt = 12,
    $t = 2,
    Ft = 45,
    It = (e) => {
      const n = l.computed(() => {
        var t,
          i,
          s,
          u,
          f,
          v,
          o,
          h,
          d,
          _,
          y,
          p,
          g,
          c,
          a,
          x,
          m,
          w,
          k,
          M,
          A,
          N,
          C,
          E,
          b,
          z,
          D,
          ve,
          _e,
          xe,
          me,
          we,
          pe,
          ke,
          Ne,
          Ee,
          Me,
          Ae,
          Se,
          Re,
          Te,
          Ce,
          De,
          be,
          ze,
          Be,
          Le,
          $e;
        return {
          node: {
            stroke:
              ((s =
                (i = (t = e.value) == null ? void 0 : t.nodes) == null
                  ? void 0
                  : i.colors) == null
                ? void 0
                : s.stroke) || "#E2EB98",
            fill:
              ((v =
                (f = (u = e.value) == null ? void 0 : u.nodes) == null
                  ? void 0
                  : f.colors) == null
                ? void 0
                : v.fill) || "#93A392",
            selected: {
              stroke:
                ((_ =
                  (d =
                    (h = (o = e.value) == null ? void 0 : o.nodes) == null
                      ? void 0
                      : h.colors) == null
                    ? void 0
                    : d.selected) == null
                  ? void 0
                  : _.stroke) || "#9DC4B5",
              fill:
                (c =
                  (g =
                    (p = (y = e.value) == null ? void 0 : y.nodes) == null
                      ? void 0
                      : p.colors) == null
                    ? void 0
                    : g.selected) == null
                  ? void 0
                  : c.fill,
            },
            hover: {
              stroke: "#9DC4B5",
              fill:
                (w =
                  (m =
                    (x = (a = e.value) == null ? void 0 : a.nodes) == null
                      ? void 0
                      : x.colors) == null
                    ? void 0
                    : m.hover) == null
                  ? void 0
                  : w.fill,
            },
            pinned: {
              stroke: "#9DC4B5",
              fill:
                (N =
                  (A =
                    (M = (k = e.value) == null ? void 0 : k.nodes) == null
                      ? void 0
                      : M.colors) == null
                    ? void 0
                    : A.pinned) == null
                  ? void 0
                  : N.fill,
            },
            label: {
              fill:
                ((z =
                  (b =
                    (E = (C = e.value) == null ? void 0 : C.nodes) == null
                      ? void 0
                      : E.colors) == null
                    ? void 0
                    : b.label) == null
                  ? void 0
                  : z.fill) || "#93A392",
            },
          },
          link: {
            stroke:
              ((_e =
                (ve = (D = e.value) == null ? void 0 : D.links) == null
                  ? void 0
                  : ve.colors) == null
                ? void 0
                : _e.stroke) || "#BAD9A2",
            fill:
              (we =
                (me = (xe = e.value) == null ? void 0 : xe.links) == null
                  ? void 0
                  : me.colors) == null
                ? void 0
                : we.fill,
            selected: {
              stroke:
                ((Ee =
                  (Ne =
                    (ke = (pe = e.value) == null ? void 0 : pe.links) == null
                      ? void 0
                      : ke.colors) == null
                    ? void 0
                    : Ne.selected) == null
                  ? void 0
                  : Ee.stroke) || "#9DC4B5",
              fill:
                (Re =
                  (Se =
                    (Ae = (Me = e.value) == null ? void 0 : Me.links) == null
                      ? void 0
                      : Ae.colors) == null
                    ? void 0
                    : Se.selected) == null
                  ? void 0
                  : Re.fill,
            },
            hover: {
              stroke: "#9DC4B5",
              fill:
                (be =
                  (De =
                    (Ce = (Te = e.value) == null ? void 0 : Te.links) == null
                      ? void 0
                      : Ce.colors) == null
                    ? void 0
                    : De.hover) == null
                  ? void 0
                  : be.fill,
            },
            label: {
              fill:
                (($e =
                  (Le =
                    (Be = (ze = e.value) == null ? void 0 : ze.links) == null
                      ? void 0
                      : Be.colors) == null
                    ? void 0
                    : Le.label) == null
                  ? void 0
                  : $e.fill) || "#93A392",
            },
          },
        };
      });
      return {
        options: {
          static: l.toRef(() => {
            var t, i;
            return (
              ((i = (t = e.value) == null ? void 0 : t.simulation) == null
                ? void 0
                : i.static) || !1
            );
          }),
          forceXStrength: l.toRef(() => {
            var t, i;
            return (
              ((i = (t = e.value) == null ? void 0 : t.simulation) == null
                ? void 0
                : i.force.x) || Dt
            );
          }),
          forceYStrength: l.toRef(() => {
            var t, i;
            return (
              ((i = (t = e.value) == null ? void 0 : t.simulation) == null
                ? void 0
                : i.force.y) || bt
            );
          }),
          forcManyBodyStrength: l.toRef(() => {
            var t, i;
            return (
              ((i = (t = e.value) == null ? void 0 : t.simulation) == null
                ? void 0
                : i.force.charge) || zt
            );
          }),
          forceCollideStrength: l.toRef(() => {
            var t, i;
            return (
              ((i = (t = e.value) == null ? void 0 : t.simulation) == null
                ? void 0
                : i.force.collide) || Ft
            );
          }),
          nodeSize: l.toRef(() => {
            var t, i;
            return (
              ((i = (t = e.value) == null ? void 0 : t.nodes) == null
                ? void 0
                : i.size) || Bt
            );
          }),
          nodeFontSize: l.toRef(() => {
            var t, i, s;
            return (
              ((s =
                (i = (t = e.value) == null ? void 0 : t.nodes) == null
                  ? void 0
                  : i.font) == null
                ? void 0
                : s.size) || Lt
            );
          }),
          linkWidth: l.toRef(() => {
            var t, i;
            return (
              ((i = (t = e.value) == null ? void 0 : t.links) == null
                ? void 0
                : i.width) || $t
            );
          }),
          draggables: l.toRef(() => {
            var t, i;
            return (
              ((i = (t = e.value) == null ? void 0 : t.layout) == null
                ? void 0
                : i.draggables) || !1
            );
          }),
          directed: l.toRef(() => {
            var t, i;
            return (
              ((i = (t = e.value) == null ? void 0 : t.layout) == null
                ? void 0
                : i.directed) || !1
            );
          }),
        },
        theme: n,
      };
    },
    Pt = (e, n) => ({
      label: l.computed(() => ({
        font: { size: e.value },
        offset: { x: n.value / 2 + e.value / 2, y: e.value / 2 },
      })),
    }),
    Yt = ["viewBox"],
    Vt = { key: 0 },
    Wt = ["fill"],
    Xt = ["fill"],
    Ht = { id: "l-links", class: "links" },
    Ut = [
      "id",
      "d",
      "stroke-width",
      "marker-end",
      "marker-start",
      "onClick",
      "onTouchstartPassive",
    ],
    Ot = ["font-size"],
    jt = ["xlink:href"],
    Gt = { id: "l-nodes", class: "nodes" },
    Kt = [
      "viewBox",
      "width",
      "height",
      "x",
      "y",
      "title",
      "onClick",
      "onTouchendPassive",
      "onMousedown",
      "onTouchstartPassive",
      "innerHTML",
    ],
    Qt = [
      "cx",
      "cy",
      "r",
      "title",
      "onClick",
      "onTouchendPassive",
      "onMousedown",
      "onTouchstartPassive",
    ],
    Zt = ["x", "y", "font-size", "stroke-width"],
    Jt = l.defineComponent({
      __name: "D3NetworkGraph",
      props: {
        nodes: { type: Array, required: !0 },
        links: { type: Array, required: !0 },
        options: { type: Object, default: void 0 },
      },
      emits: ["node-click", "link-click"],
      setup(e, { emit: n }) {
        const r = e;
        l.useCssVars((g) => ({
          "636e5519": l.unref(t).node.stroke,
          ccf5ceb8: l.unref(t).node.fill,
          "1e3fe4d6": l.unref(t).node.selected.stroke || l.unref(t).node.stroke,
          f4286b16: l.unref(t).node.selected.fill || l.unref(t).node.fill,
          e6dd14dc: l.unref(t).node.pinned.stroke || l.unref(t).node.stroke,
          "283a8e1c": l.unref(t).node.pinned.fill || l.unref(t).node.fill,
          c995d3d8: l.unref(t).node.hover.stroke || l.unref(t).node.stroke,
          "1edeea74": l.unref(t).node.hover.fill || l.unref(t).node.fill,
          "8c40a7be": l.unref(t).link.stroke,
          "1cf091ac": l.unref(t).link.fill,
          a26d15bc: l.unref(t).link.selected.stroke,
          "700aa6ed": l.unref(t).link.selected.fill,
          "42fd294b": l.unref(t).node.hover.stroke,
          "42815d54": l.unref(t).node.hover.fill,
          "269dfcb4": l.unref(t).link.label.fill,
          "6c526e9e": l.unref(t).node.label.fill,
        }));
        const { theme: t, options: i } = It(l.toRef(() => r.options)),
          s = l.ref(null),
          u = l.ref({ width: 100, height: 100 });
        O.useResizeObserver(s, (g) => {
          const c = g[0];
          (c.contentRect.width === u.value.width &&
            c.contentRect.height === u.value.height) ||
            (u.value = {
              width: c.contentRect.width,
              height: c.contentRect.height,
            });
        });
        const f = (g) =>
            typeof g.source != "number" &&
            typeof g.source != "string" &&
            typeof g.target != "number" &&
            typeof g.target != "string"
              ? `M${g.source.x} ${g.source.y} L${g.target.x} ${g.target.y}`
              : void 0,
          { simulation: v, graph: o } = de(
            l.toRef(() => r.nodes),
            l.toRef(() => r.links),
            u,
            i
          ),
          { dragStart: h, dragEnd: d, move: _ } = Fe(v, i.draggables),
          { label: y } = Pt(i.nodeFontSize, i.nodeSize),
          { markers: p } = Ie(i.linkWidth, i.nodeSize, i.directed);
        return (g, c) => (
          l.openBlock(),
          l.createElementBlock(
            "svg",
            {
              ref_key: "svg",
              ref: s,
              xmlns: "http://www.w3.org/2000/svg",
              "xmlns:xlink": "http://www.w3.org/1999/xlink",
              preserveAspectRatio: "xMinYMin",
              viewBox: `0 0 ${u.value.width} ${u.value.height}`,
              class: "svg-container",
              onMouseup:
                c[0] || (c[0] = (...a) => l.unref(d) && l.unref(d)(...a)),
              onTouchendPassive:
                c[1] || (c[1] = (...a) => l.unref(d) && l.unref(d)(...a)),
              onTouchstartPassive: c[2] || (c[2] = async () => {}),
              onMousemove:
                c[3] || (c[3] = (...a) => l.unref(_) && l.unref(_)(...a)),
            },
            [
              l.unref(i).directed
                ? (l.openBlock(),
                  l.createElementBlock("defs", Vt, [
                    l.createElementVNode(
                      "marker",
                      l.normalizeProps(
                        l.guardReactiveProps(l.unref(p).arrowEnd)
                      ),
                      [
                        l.createElementVNode(
                          "path",
                          {
                            fill: l.unref(t).link.stroke,
                            d: "M0 -5 L 10 0 L 0 5",
                          },
                          null,
                          8,
                          Wt
                        ),
                      ],
                      16
                    ),
                    l.createElementVNode(
                      "marker",
                      l.normalizeProps(
                        l.guardReactiveProps(l.unref(p).arrowStart)
                      ),
                      [
                        l.createElementVNode(
                          "path",
                          {
                            fill: l.unref(t).link.stroke,
                            d: "M 10 5 L 0 0 L 10 -5",
                          },
                          null,
                          8,
                          Xt
                        ),
                      ],
                      16
                    ),
                  ]))
                : l.createCommentVNode("", !0),
              l.createElementVNode("g", Ht, [
                (l.openBlock(!0),
                l.createElementBlock(
                  l.Fragment,
                  null,
                  l.renderList(
                    l.unref(o).links,
                    (a, x) => (
                      l.openBlock(),
                      l.createElementBlock(
                        l.Fragment,
                        { key: x },
                        [
                          l.createElementVNode(
                            "path",
                            {
                              id: `${x}`,
                              d: f(a),
                              "stroke-width": a["stroke-width"],
                              class: l.normalizeClass(a.class),
                              style: l.normalizeStyle(a.style),
                              "marker-end": a["marker-end"],
                              "marker-start": a["marker-start"],
                              onClick: (m) => n("link-click", m, a),
                              onTouchstartPassive: (m) => n("link-click", m, a),
                            },
                            null,
                            46,
                            Ut
                          ),
                          l.createElementVNode(
                            "text",
                            {
                              class: "link-label",
                              "font-size": l.unref(y).font.size,
                            },
                            [
                              l.createElementVNode(
                                "textPath",
                                { "xlink:href": "#" + x, startOffset: "50%" },
                                l.toDisplayString(a.name),
                                9,
                                jt
                              ),
                            ],
                            8,
                            Ot
                          ),
                        ],
                        64
                      )
                    )
                  ),
                  128
                )),
              ]),
              l.createElementVNode("g", Gt, [
                (l.openBlock(!0),
                l.createElementBlock(
                  l.Fragment,
                  null,
                  l.renderList(
                    l.unref(o).nodes,
                    (a, x) => (
                      l.openBlock(),
                      l.createElementBlock(
                        l.Fragment,
                        { key: x },
                        [
                          a.innerSVG
                            ? (l.openBlock(),
                              l.createElementBlock(
                                "svg",
                                {
                                  key: 0,
                                  viewBox: a.innerSVG.viewBox,
                                  width: a.width,
                                  height: a.height,
                                  x: (a.x || 0) - (a.width || 0) / 2,
                                  y: (a.y || 0) - (a.height || 0) / 2,
                                  style: l.normalizeStyle(a.style),
                                  title: a.name,
                                  class: l.normalizeClass(a.cssClass),
                                  onClick: (m) => n("node-click", m, a),
                                  onTouchendPassive: (m) =>
                                    n("node-click", m, a),
                                  onMousedown: l.withModifiers(
                                    (m) => l.unref(h)(m, x),
                                    ["prevent"]
                                  ),
                                  onTouchstartPassive: l.withModifiers(
                                    (m) => l.unref(h)(m, x),
                                    ["prevent"]
                                  ),
                                  innerHTML: a.innerSVG.innerHtml,
                                },
                                null,
                                46,
                                Kt
                              ))
                            : (l.openBlock(),
                              l.createElementBlock(
                                "circle",
                                {
                                  key: 1,
                                  cx: a.x,
                                  cy: a.y,
                                  r: a.r,
                                  style: l.normalizeStyle(a.style),
                                  title: a.name,
                                  class: l.normalizeClass(a.cssClass),
                                  onClick: (m) => g.$emit("node-click", m, a),
                                  onTouchendPassive: (m) =>
                                    g.$emit("node-click", m, a),
                                  onMousedown: l.withModifiers(
                                    (m) => l.unref(h)(m, x),
                                    ["prevent"]
                                  ),
                                  onTouchstartPassive: l.withModifiers(
                                    (m) => l.unref(h)(m, x),
                                    ["prevent"]
                                  ),
                                },
                                null,
                                46,
                                Qt
                              )),
                          l.createElementVNode(
                            "text",
                            {
                              class: "node-label",
                              x:
                                (a.x || 0) +
                                (a.width || 0) / 2 +
                                l.unref(y).font.size / 2,
                              y: (a.y || 0) + l.unref(y).offset.y,
                              "font-size": l.unref(y).font.size,
                              "stroke-width": l.unref(y).font.size / 8,
                            },
                            l.toDisplayString(a.name),
                            9,
                            Zt
                          ),
                        ],
                        64
                      )
                    )
                  ),
                  128
                )),
              ]),
            ],
            40,
            Yt
          )
        );
      },
    }),
    qt = "";
  (B.D3NetworkGraph = Jt),
    (B.useSimulation = de),
    Object.defineProperty(B, Symbol.toStringTag, { value: "Module" });
});
