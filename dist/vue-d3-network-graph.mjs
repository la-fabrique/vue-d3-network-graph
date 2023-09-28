import { ref as J, reactive as ht, computed as gt, defineComponent as vt, onMounted as yt, watch as xt, openBlock as O, createElementBlock as C, createElementVNode as V, unref as M, Fragment as B, renderList as $, mergeProps as wt, normalizeStyle as U, normalizeClass as Z, withModifiers as R, toDisplayString as pt, createCommentVNode as _t } from "vue";
function dt(t) {
  const e = J(void 0), n = ht({
    x: 0,
    y: 0
  }), r = (a) => {
    let l, _ = 0;
    return a instanceof MouseEvent ? (l = a.clientX, _ = a.clientY) : a instanceof TouchEvent && (l = a.touches[0].clientX, _ = a.touches[0].clientY), { x: l || 0, y: _ || 0 };
  }, o = (a, l) => {
    var _;
    e.value = l, s(a, (_ = t.value) == null ? void 0 : _.nodes()[l]);
  }, s = (a, l) => {
    let _ = 0, p = 0;
    if (a && l && (l != null && l.x) && (l != null && l.y)) {
      const c = r(a);
      _ = c.x ? c.x - l.x : l.x, p = c.y ? c.y - l.y : l.y;
    }
    n.x = _, n.y = p;
  }, f = () => {
    if (t.value && e.value !== void 0) {
      const a = t.value.nodes()[e.value];
      a.fx = null, a.fy = null;
    }
    i();
  }, i = () => {
    var a, l;
    e.value = void 0, (a = t.value) == null || a.alpha(0.1), (l = t.value) == null || l.restart(), s();
  };
  return {
    dragStart: o,
    dragEnd: f,
    move: (a) => {
      var _, p;
      const l = r(a);
      t.value && e.value != null && t.value.nodes()[e.value] && ((_ = t.value) == null || _.restart(), (p = t.value) == null || p.alpha(0.5), t.value.nodes()[e.value].fx = l.x - n.x, t.value.nodes()[e.value].fy = l.y - n.y);
    }
  };
}
function mt(t) {
  const e = (i) => i.size || t.size, n = (i) => i.width || i.size || t.size, r = (i) => i.height || i.size || t.size, o = (i) => i.color ? "fill: " + i.color : "", s = (i, h = []) => {
    const a = i.cssClass ? i.cssClass : [];
    return a.push("node"), h.forEach((l) => a.push(l)), (i.fx || i.fy) && a.push("pinned"), a;
  };
  return { labelOffset: gt(() => ({
    x: t.size / 2 + t.fontSize / 2,
    y: t.fontSize / 2
  })), getSize: e, getWidth: n, getHeight: r, getStyle: o, getClass: s };
}
function Nt(t) {
  return {
    getPath: (s) => {
      var f, i, h, a;
      if (typeof s.source != "number" && typeof s.source != "string" && typeof s.target != "number" && typeof s.target != "string") {
        const l = {
          M: [((f = s == null ? void 0 : s.source) == null ? void 0 : f.x) || 0, ((i = s == null ? void 0 : s.source) == null ? void 0 : i.y) || 0],
          X: [((h = s == null ? void 0 : s.target) == null ? void 0 : h.x) || 0, ((a = s == null ? void 0 : s.target) == null ? void 0 : a.y) || 0]
        };
        return "M " + l.M.join(" ") + " L" + l.X.join(" ");
      }
    },
    getAttrs: (s) => ({ "stroke-width": t.width }),
    getClass: (s) => ["link"],
    getStyle: (s) => s.color ? {
      stroke: s.color
    } : {}
  };
}
function Mt(t) {
  const e = +this._x.call(null, t), n = +this._y.call(null, t);
  return ot(this.cover(e, n), e, n, t);
}
function ot(t, e, n, r) {
  if (isNaN(e) || isNaN(n))
    return t;
  var o, s = t._root, f = { data: r }, i = t._x0, h = t._y0, a = t._x1, l = t._y1, _, p, c, d, g, u, v, w;
  if (!s)
    return t._root = f, t;
  for (; s.length; )
    if ((g = e >= (_ = (i + a) / 2)) ? i = _ : a = _, (u = n >= (p = (h + l) / 2)) ? h = p : l = p, o = s, !(s = s[v = u << 1 | g]))
      return o[v] = f, t;
  if (c = +t._x.call(null, s.data), d = +t._y.call(null, s.data), e === c && n === d)
    return f.next = s, o ? o[v] = f : t._root = f, t;
  do
    o = o ? o[v] = new Array(4) : t._root = new Array(4), (g = e >= (_ = (i + a) / 2)) ? i = _ : a = _, (u = n >= (p = (h + l) / 2)) ? h = p : l = p;
  while ((v = u << 1 | g) === (w = (d >= p) << 1 | c >= _));
  return o[w] = s, o[v] = f, t;
}
function zt(t) {
  var e, n, r = t.length, o, s, f = new Array(r), i = new Array(r), h = 1 / 0, a = 1 / 0, l = -1 / 0, _ = -1 / 0;
  for (n = 0; n < r; ++n)
    isNaN(o = +this._x.call(null, e = t[n])) || isNaN(s = +this._y.call(null, e)) || (f[n] = o, i[n] = s, o < h && (h = o), o > l && (l = o), s < a && (a = s), s > _ && (_ = s));
  if (h > l || a > _)
    return this;
  for (this.cover(h, a).cover(l, _), n = 0; n < r; ++n)
    ot(this, f[n], i[n], t[n]);
  return this;
}
function At(t, e) {
  if (isNaN(t = +t) || isNaN(e = +e))
    return this;
  var n = this._x0, r = this._y0, o = this._x1, s = this._y1;
  if (isNaN(n))
    o = (n = Math.floor(t)) + 1, s = (r = Math.floor(e)) + 1;
  else {
    for (var f = o - n || 1, i = this._root, h, a; n > t || t >= o || r > e || e >= s; )
      switch (a = (e < r) << 1 | t < n, h = new Array(4), h[a] = i, i = h, f *= 2, a) {
        case 0:
          o = n + f, s = r + f;
          break;
        case 1:
          n = o - f, s = r + f;
          break;
        case 2:
          o = n + f, r = s - f;
          break;
        case 3:
          n = o - f, r = s - f;
          break;
      }
    this._root && this._root.length && (this._root = i);
  }
  return this._x0 = n, this._y0 = r, this._x1 = o, this._y1 = s, this;
}
function St() {
  var t = [];
  return this.visit(function(e) {
    if (!e.length)
      do
        t.push(e.data);
      while (e = e.next);
  }), t;
}
function Tt(t) {
  return arguments.length ? this.cover(+t[0][0], +t[0][1]).cover(+t[1][0], +t[1][1]) : isNaN(this._x0) ? void 0 : [[this._x0, this._y0], [this._x1, this._y1]];
}
function A(t, e, n, r, o) {
  this.node = t, this.x0 = e, this.y0 = n, this.x1 = r, this.y1 = o;
}
function Ot(t, e, n) {
  var r, o = this._x0, s = this._y0, f, i, h, a, l = this._x1, _ = this._y1, p = [], c = this._root, d, g;
  for (c && p.push(new A(c, o, s, l, _)), n == null ? n = 1 / 0 : (o = t - n, s = e - n, l = t + n, _ = e + n, n *= n); d = p.pop(); )
    if (!(!(c = d.node) || (f = d.x0) > l || (i = d.y0) > _ || (h = d.x1) < o || (a = d.y1) < s))
      if (c.length) {
        var u = (f + h) / 2, v = (i + a) / 2;
        p.push(
          new A(c[3], u, v, h, a),
          new A(c[2], f, v, u, a),
          new A(c[1], u, i, h, v),
          new A(c[0], f, i, u, v)
        ), (g = (e >= v) << 1 | t >= u) && (d = p[p.length - 1], p[p.length - 1] = p[p.length - 1 - g], p[p.length - 1 - g] = d);
      } else {
        var w = t - +this._x.call(null, c.data), m = e - +this._y.call(null, c.data), x = w * w + m * m;
        if (x < n) {
          var y = Math.sqrt(n = x);
          o = t - y, s = e - y, l = t + y, _ = e + y, r = c.data;
        }
      }
  return r;
}
function Ct(t) {
  if (isNaN(l = +this._x.call(null, t)) || isNaN(_ = +this._y.call(null, t)))
    return this;
  var e, n = this._root, r, o, s, f = this._x0, i = this._y0, h = this._x1, a = this._y1, l, _, p, c, d, g, u, v;
  if (!n)
    return this;
  if (n.length)
    for (; ; ) {
      if ((d = l >= (p = (f + h) / 2)) ? f = p : h = p, (g = _ >= (c = (i + a) / 2)) ? i = c : a = c, e = n, !(n = n[u = g << 1 | d]))
        return this;
      if (!n.length)
        break;
      (e[u + 1 & 3] || e[u + 2 & 3] || e[u + 3 & 3]) && (r = e, v = u);
    }
  for (; n.data !== t; )
    if (o = n, !(n = n.next))
      return this;
  return (s = n.next) && delete n.next, o ? (s ? o.next = s : delete o.next, this) : e ? (s ? e[u] = s : delete e[u], (n = e[0] || e[1] || e[2] || e[3]) && n === (e[3] || e[2] || e[1] || e[0]) && !n.length && (r ? r[v] = n : this._root = n), this) : (this._root = s, this);
}
function Et(t) {
  for (var e = 0, n = t.length; e < n; ++e)
    this.remove(t[e]);
  return this;
}
function kt() {
  return this._root;
}
function bt() {
  var t = 0;
  return this.visit(function(e) {
    if (!e.length)
      do
        ++t;
      while (e = e.next);
  }), t;
}
function Pt(t) {
  var e = [], n, r = this._root, o, s, f, i, h;
  for (r && e.push(new A(r, this._x0, this._y0, this._x1, this._y1)); n = e.pop(); )
    if (!t(r = n.node, s = n.x0, f = n.y0, i = n.x1, h = n.y1) && r.length) {
      var a = (s + i) / 2, l = (f + h) / 2;
      (o = r[3]) && e.push(new A(o, a, l, i, h)), (o = r[2]) && e.push(new A(o, s, l, a, h)), (o = r[1]) && e.push(new A(o, a, f, i, l)), (o = r[0]) && e.push(new A(o, s, f, a, l));
    }
  return this;
}
function Dt(t) {
  var e = [], n = [], r;
  for (this._root && e.push(new A(this._root, this._x0, this._y0, this._x1, this._y1)); r = e.pop(); ) {
    var o = r.node;
    if (o.length) {
      var s, f = r.x0, i = r.y0, h = r.x1, a = r.y1, l = (f + h) / 2, _ = (i + a) / 2;
      (s = o[0]) && e.push(new A(s, f, i, l, _)), (s = o[1]) && e.push(new A(s, l, i, h, _)), (s = o[2]) && e.push(new A(s, f, _, l, a)), (s = o[3]) && e.push(new A(s, l, _, h, a));
    }
    n.push(r);
  }
  for (; r = n.pop(); )
    t(r.node, r.x0, r.y0, r.x1, r.y1);
  return this;
}
function It(t) {
  return t[0];
}
function Lt(t) {
  return arguments.length ? (this._x = t, this) : this._x;
}
function jt(t) {
  return t[1];
}
function Ft(t) {
  return arguments.length ? (this._y = t, this) : this._y;
}
function st(t, e, n) {
  var r = new K(e ?? It, n ?? jt, NaN, NaN, NaN, NaN);
  return t == null ? r : r.addAll(t);
}
function K(t, e, n, r, o, s) {
  this._x = t, this._y = e, this._x0 = n, this._y0 = r, this._x1 = o, this._y1 = s, this._root = void 0;
}
function tt(t) {
  for (var e = { data: t.data }, n = e; t = t.next; )
    n = n.next = { data: t.data };
  return e;
}
var S = st.prototype = K.prototype;
S.copy = function() {
  var t = new K(this._x, this._y, this._x0, this._y0, this._x1, this._y1), e = this._root, n, r;
  if (!e)
    return t;
  if (!e.length)
    return t._root = tt(e), t;
  for (n = [{ source: e, target: t._root = new Array(4) }]; e = n.pop(); )
    for (var o = 0; o < 4; ++o)
      (r = e.source[o]) && (r.length ? n.push({ source: r, target: e.target[o] = new Array(4) }) : e.target[o] = tt(r));
  return t;
};
S.add = Mt;
S.addAll = zt;
S.cover = At;
S.data = St;
S.extent = Tt;
S.find = Ot;
S.remove = Ct;
S.removeAll = Et;
S.root = kt;
S.size = bt;
S.visit = Pt;
S.visitAfter = Dt;
S.x = Lt;
S.y = Ft;
function T(t) {
  return function() {
    return t;
  };
}
function P(t) {
  return (t() - 0.5) * 1e-6;
}
function Yt(t) {
  return t.index;
}
function et(t, e) {
  var n = t.get(e);
  if (!n)
    throw new Error("node not found: " + e);
  return n;
}
function Bt(t) {
  var e = Yt, n = _, r, o = T(30), s, f, i, h, a, l = 1;
  t == null && (t = []);
  function _(u) {
    return 1 / Math.min(i[u.source.index], i[u.target.index]);
  }
  function p(u) {
    for (var v = 0, w = t.length; v < l; ++v)
      for (var m = 0, x, y, z, N, E, b, I; m < w; ++m)
        x = t[m], y = x.source, z = x.target, N = z.x + z.vx - y.x - y.vx || P(a), E = z.y + z.vy - y.y - y.vy || P(a), b = Math.sqrt(N * N + E * E), b = (b - s[m]) / b * u * r[m], N *= b, E *= b, z.vx -= N * (I = h[m]), z.vy -= E * I, y.vx += N * (I = 1 - I), y.vy += E * I;
  }
  function c() {
    if (f) {
      var u, v = f.length, w = t.length, m = new Map(f.map((y, z) => [e(y, z, f), y])), x;
      for (u = 0, i = new Array(v); u < w; ++u)
        x = t[u], x.index = u, typeof x.source != "object" && (x.source = et(m, x.source)), typeof x.target != "object" && (x.target = et(m, x.target)), i[x.source.index] = (i[x.source.index] || 0) + 1, i[x.target.index] = (i[x.target.index] || 0) + 1;
      for (u = 0, h = new Array(w); u < w; ++u)
        x = t[u], h[u] = i[x.source.index] / (i[x.source.index] + i[x.target.index]);
      r = new Array(w), d(), s = new Array(w), g();
    }
  }
  function d() {
    if (f)
      for (var u = 0, v = t.length; u < v; ++u)
        r[u] = +n(t[u], u, t);
  }
  function g() {
    if (f)
      for (var u = 0, v = t.length; u < v; ++u)
        s[u] = +o(t[u], u, t);
  }
  return p.initialize = function(u, v) {
    f = u, a = v, c();
  }, p.links = function(u) {
    return arguments.length ? (t = u, c(), p) : t;
  }, p.id = function(u) {
    return arguments.length ? (e = u, p) : e;
  }, p.iterations = function(u) {
    return arguments.length ? (l = +u, p) : l;
  }, p.strength = function(u) {
    return arguments.length ? (n = typeof u == "function" ? u : T(+u), d(), p) : n;
  }, p.distance = function(u) {
    return arguments.length ? (o = typeof u == "function" ? u : T(+u), g(), p) : o;
  }, p;
}
var Rt = { value: () => {
} };
function at() {
  for (var t = 0, e = arguments.length, n = {}, r; t < e; ++t) {
    if (!(r = arguments[t] + "") || r in n || /[\s.]/.test(r))
      throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new H(n);
}
function H(t) {
  this._ = t;
}
function Ht(t, e) {
  return t.trim().split(/^|\s+/).map(function(n) {
    var r = "", o = n.indexOf(".");
    if (o >= 0 && (r = n.slice(o + 1), n = n.slice(0, o)), n && !e.hasOwnProperty(n))
      throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
H.prototype = at.prototype = {
  constructor: H,
  on: function(t, e) {
    var n = this._, r = Ht(t + "", n), o, s = -1, f = r.length;
    if (arguments.length < 2) {
      for (; ++s < f; )
        if ((o = (t = r[s]).type) && (o = Xt(n[o], t.name)))
          return o;
      return;
    }
    if (e != null && typeof e != "function")
      throw new Error("invalid callback: " + e);
    for (; ++s < f; )
      if (o = (t = r[s]).type)
        n[o] = nt(n[o], t.name, e);
      else if (e == null)
        for (o in n)
          n[o] = nt(n[o], t.name, null);
    return this;
  },
  copy: function() {
    var t = {}, e = this._;
    for (var n in e)
      t[n] = e[n].slice();
    return new H(t);
  },
  call: function(t, e) {
    if ((o = arguments.length - 2) > 0)
      for (var n = new Array(o), r = 0, o, s; r < o; ++r)
        n[r] = arguments[r + 2];
    if (!this._.hasOwnProperty(t))
      throw new Error("unknown type: " + t);
    for (s = this._[t], r = 0, o = s.length; r < o; ++r)
      s[r].value.apply(e, n);
  },
  apply: function(t, e, n) {
    if (!this._.hasOwnProperty(t))
      throw new Error("unknown type: " + t);
    for (var r = this._[t], o = 0, s = r.length; o < s; ++o)
      r[o].value.apply(e, n);
  }
};
function Xt(t, e) {
  for (var n = 0, r = t.length, o; n < r; ++n)
    if ((o = t[n]).name === e)
      return o.value;
}
function nt(t, e, n) {
  for (var r = 0, o = t.length; r < o; ++r)
    if (t[r].name === e) {
      t[r] = Rt, t = t.slice(0, r).concat(t.slice(r + 1));
      break;
    }
  return n != null && t.push({ name: e, value: n }), t;
}
var D = 0, j = 0, L = 0, ut = 1e3, X, F, G = 0, k = 0, q = 0, Y = typeof performance == "object" && performance.now ? performance : Date, lt = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function ft() {
  return k || (lt(Gt), k = Y.now() + q);
}
function Gt() {
  k = 0;
}
function W() {
  this._call = this._time = this._next = null;
}
W.prototype = ct.prototype = {
  constructor: W,
  restart: function(t, e, n) {
    if (typeof t != "function")
      throw new TypeError("callback is not a function");
    n = (n == null ? ft() : +n) + (e == null ? 0 : +e), !this._next && F !== this && (F ? F._next = this : X = this, F = this), this._call = t, this._time = n, Q();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Q());
  }
};
function ct(t, e, n) {
  var r = new W();
  return r.restart(t, e, n), r;
}
function qt() {
  ft(), ++D;
  for (var t = X, e; t; )
    (e = k - t._time) >= 0 && t._call.call(void 0, e), t = t._next;
  --D;
}
function rt() {
  k = (G = Y.now()) + q, D = j = 0;
  try {
    qt();
  } finally {
    D = 0, $t(), k = 0;
  }
}
function Vt() {
  var t = Y.now(), e = t - G;
  e > ut && (q -= e, G = t);
}
function $t() {
  for (var t, e = X, n, r = 1 / 0; e; )
    e._call ? (r > e._time && (r = e._time), t = e, e = e._next) : (n = e._next, e._next = null, e = t ? t._next = n : X = n);
  F = t, Q(r);
}
function Q(t) {
  if (!D) {
    j && (j = clearTimeout(j));
    var e = t - k;
    e > 24 ? (t < 1 / 0 && (j = setTimeout(rt, t - Y.now() - q)), L && (L = clearInterval(L))) : (L || (G = Y.now(), L = setInterval(Vt, ut)), D = 1, lt(rt));
  }
}
const Wt = 1664525, Qt = 1013904223, it = 4294967296;
function Jt() {
  let t = 1;
  return () => (t = (Wt * t + Qt) % it) / it;
}
function Kt(t) {
  return t.x;
}
function Ut(t) {
  return t.y;
}
var Zt = 10, te = Math.PI * (3 - Math.sqrt(5));
function ee(t) {
  var e, n = 1, r = 1e-3, o = 1 - Math.pow(r, 1 / 300), s = 0, f = 0.6, i = /* @__PURE__ */ new Map(), h = ct(_), a = at("tick", "end"), l = Jt();
  t == null && (t = []);
  function _() {
    p(), a.call("tick", e), n < r && (h.stop(), a.call("end", e));
  }
  function p(g) {
    var u, v = t.length, w;
    g === void 0 && (g = 1);
    for (var m = 0; m < g; ++m)
      for (n += (s - n) * o, i.forEach(function(x) {
        x(n);
      }), u = 0; u < v; ++u)
        w = t[u], w.fx == null ? w.x += w.vx *= f : (w.x = w.fx, w.vx = 0), w.fy == null ? w.y += w.vy *= f : (w.y = w.fy, w.vy = 0);
    return e;
  }
  function c() {
    for (var g = 0, u = t.length, v; g < u; ++g) {
      if (v = t[g], v.index = g, v.fx != null && (v.x = v.fx), v.fy != null && (v.y = v.fy), isNaN(v.x) || isNaN(v.y)) {
        var w = Zt * Math.sqrt(0.5 + g), m = g * te;
        v.x = w * Math.cos(m), v.y = w * Math.sin(m);
      }
      (isNaN(v.vx) || isNaN(v.vy)) && (v.vx = v.vy = 0);
    }
  }
  function d(g) {
    return g.initialize && g.initialize(t, l), g;
  }
  return c(), e = {
    tick: p,
    restart: function() {
      return h.restart(_), e;
    },
    stop: function() {
      return h.stop(), e;
    },
    nodes: function(g) {
      return arguments.length ? (t = g, c(), i.forEach(d), e) : t;
    },
    alpha: function(g) {
      return arguments.length ? (n = +g, e) : n;
    },
    alphaMin: function(g) {
      return arguments.length ? (r = +g, e) : r;
    },
    alphaDecay: function(g) {
      return arguments.length ? (o = +g, e) : +o;
    },
    alphaTarget: function(g) {
      return arguments.length ? (s = +g, e) : s;
    },
    velocityDecay: function(g) {
      return arguments.length ? (f = 1 - g, e) : 1 - f;
    },
    randomSource: function(g) {
      return arguments.length ? (l = g, i.forEach(d), e) : l;
    },
    force: function(g, u) {
      return arguments.length > 1 ? (u == null ? i.delete(g) : i.set(g, d(u)), e) : i.get(g);
    },
    find: function(g, u, v) {
      var w = 0, m = t.length, x, y, z, N, E;
      for (v == null ? v = 1 / 0 : v *= v, w = 0; w < m; ++w)
        N = t[w], x = g - N.x, y = u - N.y, z = x * x + y * y, z < v && (E = N, v = z);
      return E;
    },
    on: function(g, u) {
      return arguments.length > 1 ? (a.on(g, u), e) : a.on(g);
    }
  };
}
function ne() {
  var t, e, n, r, o = T(-30), s, f = 1, i = 1 / 0, h = 0.81;
  function a(c) {
    var d, g = t.length, u = st(t, Kt, Ut).visitAfter(_);
    for (r = c, d = 0; d < g; ++d)
      e = t[d], u.visit(p);
  }
  function l() {
    if (t) {
      var c, d = t.length, g;
      for (s = new Array(d), c = 0; c < d; ++c)
        g = t[c], s[g.index] = +o(g, c, t);
    }
  }
  function _(c) {
    var d = 0, g, u, v = 0, w, m, x;
    if (c.length) {
      for (w = m = x = 0; x < 4; ++x)
        (g = c[x]) && (u = Math.abs(g.value)) && (d += g.value, v += u, w += u * g.x, m += u * g.y);
      c.x = w / v, c.y = m / v;
    } else {
      g = c, g.x = g.data.x, g.y = g.data.y;
      do
        d += s[g.data.index];
      while (g = g.next);
    }
    c.value = d;
  }
  function p(c, d, g, u) {
    if (!c.value)
      return !0;
    var v = c.x - e.x, w = c.y - e.y, m = u - d, x = v * v + w * w;
    if (m * m / h < x)
      return x < i && (v === 0 && (v = P(n), x += v * v), w === 0 && (w = P(n), x += w * w), x < f && (x = Math.sqrt(f * x)), e.vx += v * c.value * r / x, e.vy += w * c.value * r / x), !0;
    if (c.length || x >= i)
      return;
    (c.data !== e || c.next) && (v === 0 && (v = P(n), x += v * v), w === 0 && (w = P(n), x += w * w), x < f && (x = Math.sqrt(f * x)));
    do
      c.data !== e && (m = s[c.data.index] * r / x, e.vx += v * m, e.vy += w * m);
    while (c = c.next);
  }
  return a.initialize = function(c, d) {
    t = c, n = d, l();
  }, a.strength = function(c) {
    return arguments.length ? (o = typeof c == "function" ? c : T(+c), l(), a) : o;
  }, a.distanceMin = function(c) {
    return arguments.length ? (f = c * c, a) : Math.sqrt(f);
  }, a.distanceMax = function(c) {
    return arguments.length ? (i = c * c, a) : Math.sqrt(i);
  }, a.theta = function(c) {
    return arguments.length ? (h = c * c, a) : Math.sqrt(h);
  }, a;
}
function re(t) {
  var e = T(0.1), n, r, o;
  typeof t != "function" && (t = T(t == null ? 0 : +t));
  function s(i) {
    for (var h = 0, a = n.length, l; h < a; ++h)
      l = n[h], l.vx += (o[h] - l.x) * r[h] * i;
  }
  function f() {
    if (n) {
      var i, h = n.length;
      for (r = new Array(h), o = new Array(h), i = 0; i < h; ++i)
        r[i] = isNaN(o[i] = +t(n[i], i, n)) ? 0 : +e(n[i], i, n);
    }
  }
  return s.initialize = function(i) {
    n = i, f();
  }, s.strength = function(i) {
    return arguments.length ? (e = typeof i == "function" ? i : T(+i), f(), s) : e;
  }, s.x = function(i) {
    return arguments.length ? (t = typeof i == "function" ? i : T(+i), f(), s) : t;
  }, s;
}
function ie(t) {
  var e = T(0.1), n, r, o;
  typeof t != "function" && (t = T(t == null ? 0 : +t));
  function s(i) {
    for (var h = 0, a = n.length, l; h < a; ++h)
      l = n[h], l.vy += (o[h] - l.y) * r[h] * i;
  }
  function f() {
    if (n) {
      var i, h = n.length;
      for (r = new Array(h), o = new Array(h), i = 0; i < h; ++i)
        r[i] = isNaN(o[i] = +t(n[i], i, n)) ? 0 : +e(n[i], i, n);
    }
  }
  return s.initialize = function(i) {
    n = i, f();
  }, s.strength = function(i) {
    return arguments.length ? (e = typeof i == "function" ? i : T(+i), f(), s) : e;
  }, s.y = function(i) {
    return arguments.length ? (t = typeof i == "function" ? i : T(+i), f(), s) : t;
  }, s;
}
function oe(t) {
  const o = J(void 0), s = (i, h) => {
    console.log("animate"), o.value && o.value.stop(), o.value = f(i, h), o.value.restart();
  }, f = (i, h) => {
    const a = ee().stop().alpha(0.5).nodes(i);
    return a.force("X", re(t.size.width / 2).strength(0.5)), a.force("Y", ie(t.size.height / 2).strength(0.5)), a.force("charge", ne().strength(-1e3)), a.force(
      "link",
      Bt(h).id((l) => {
        if (!l.id)
          throw new Error("Node id is undefined");
        return l.id;
      })
    ), a;
  };
  return {
    simulation: o,
    animate: s
  };
}
const se = { class: "svg-container" }, ae = ["viewBox"], ue = {
  id: "l-links",
  class: "links"
}, le = ["id", "d", "onClick", "onTouchstartPassive"], fe = {
  id: "l-nodes",
  class: "nodes"
}, ce = ["viewBox", "width", "height", "x", "y", "title", "onClick", "onTouchendPassive", "onMousedown", "onTouchstart", "innerHTML"], he = ["r", "cx", "cy", "title", "onClick", "onTouchendPassive", "onMousedown", "onTouchstart"], ge = {
  key: 0,
  id: "node-labels",
  class: "labels"
}, ve = ["x", "y", "font-size", "stroke-width"], xe = /* @__PURE__ */ vt({
  __name: "D3NetworkGraph",
  props: {
    nodes: {
      type: Array,
      required: !0
    },
    links: {
      type: Array,
      required: !0
    },
    options: {
      type: Object,
      default: () => ({
        size: { width: 600, height: 400 }
      })
    },
    nodeOptions: {
      type: Object,
      default: () => ({
        hasLabel: !0,
        size: 20,
        fontSize: 10
      })
    },
    linkOptions: {
      type: Object,
      default: () => ({
        width: 2
      })
    }
  },
  emits: ["node-click", "link-click"],
  setup(t, { emit: e }) {
    const n = t, r = J(null), { animate: o, simulation: s } = oe(n.options), { dragStart: f, dragEnd: i, move: h } = dt(s), {
      labelOffset: a,
      getSize: l,
      getWidth: _,
      getClass: p,
      getHeight: c,
      getStyle: d
    } = mt(n.nodeOptions), {
      getPath: g,
      getAttrs: u,
      getClass: v,
      getStyle: w
    } = Nt(n.linkOptions);
    return yt(() => o(n.nodes, n.links)), xt(
      [() => n.nodes.length, () => n.links.length],
      () => o(n.nodes, n.links)
    ), (m, x) => (O(), C("div", {
      ref_key: "svg",
      ref: r
    }, [
      V("div", se, [
        (O(), C("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          "xmlns:xlink": "http://www.w3.org/1999/xlink",
          preserveAspectRatio: "xMinYMin",
          viewBox: `0 0 ${t.options.size.width} ${t.options.size.height}`,
          class: "svg-content-responsive",
          onMouseup: x[0] || (x[0] = //@ts-ignore
          (...y) => M(i) && M(i)(...y)),
          onTouchendPassive: x[1] || (x[1] = //@ts-ignore
          (...y) => M(i) && M(i)(...y)),
          onTouchstartPassive: () => {
          },
          onMousemove: x[2] || (x[2] = //@ts-ignore
          (...y) => M(h) && M(h)(...y))
        }, [
          V("g", ue, [
            (O(!0), C(B, null, $(t.links, (y) => (O(), C("path", wt({
              id: y.id,
              key: y.id,
              d: M(g)(y)
            }, M(u)(y), {
              class: M(v)(y.id),
              style: M(w)(y),
              onClick: (z) => e("link-click", z, y),
              onTouchstartPassive: (z) => e("link-click", z, y)
            }), null, 16, le))), 128))
          ]),
          V("g", fe, [
            (O(!0), C(B, null, $(t.nodes, (y, z) => (O(), C(B, { key: z }, [
              y.innerSVG ? (O(), C("svg", {
                key: 0,
                viewBox: y.innerSVG.viewBox,
                width: M(_)(y),
                height: M(c)(y),
                x: (y.x || 0) - M(_)(y) / 2,
                y: (y.y || 0) - M(c)(y) / 2,
                style: U(M(d)(y)),
                title: y.name,
                class: Z(M(p)(y, ["node-svg"])),
                onClick: (N) => e("node-click", N, y),
                onTouchendPassive: (N) => e("node-click", N, y),
                onMousedown: R((N) => M(f)(N, z), ["prevent"]),
                onTouchstart: R((N) => M(f)(N, z), ["prevent"]),
                innerHTML: y.innerSVG.innerHtml
              }, null, 46, ce)) : (O(), C("circle", {
                key: 1,
                r: M(l)(y) / 2,
                cx: y.x || 0,
                cy: y.y || 0,
                style: U(M(d)(y)),
                title: y.name,
                class: Z(M(p)(y)),
                onClick: (N) => m.$emit("node-click", N, y),
                onTouchendPassive: (N) => m.$emit("node-click", N, y),
                onMousedown: R((N) => M(f)(N, z), ["prevent"]),
                onTouchstart: R((N) => M(f)(N, z), ["prevent"])
              }, null, 46, he))
            ], 64))), 128))
          ]),
          t.nodeOptions.hasLabel ? (O(), C("g", ge, [
            (O(!0), C(B, null, $(t.nodes, (y) => (O(), C("text", {
              key: y.id,
              class: "node-label",
              x: (y.x || 0) + M(l)(y) / 2 + t.nodeOptions.fontSize / 2,
              y: (y.y || 0) + M(a).y,
              "font-size": t.nodeOptions.fontSize,
              "stroke-width": t.nodeOptions.fontSize / 8
            }, pt(y.name), 9, ve))), 128))
          ])) : _t("", !0)
        ], 40, ae))
      ])
    ], 512));
  }
});
export {
  xe as D3NetworkGraph
};
