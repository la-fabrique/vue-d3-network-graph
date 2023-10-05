import { ref as K, reactive as We, computed as j, toRef as D, defineComponent as Ze, useCssVars as Je, unref as p, openBlock as $, createElementBlock as B, createElementVNode as F, normalizeProps as Se, guardReactiveProps as be, createCommentVNode as qe, Fragment as q, renderList as Te, normalizeClass as ee, normalizeStyle as te, toDisplayString as Ce, withModifiers as O } from "vue";
import { watchDebounced as De, useResizeObserver as et } from "@vueuse/core";
const P = (e) => !!e && typeof e != "number" && typeof e != "string";
function tt(e, n) {
  const r = K(void 0), t = We({
    x: 0,
    y: 0
  }), i = (c) => {
    let g, _ = 0;
    return c instanceof MouseEvent ? (g = c.clientX, _ = c.clientY) : c instanceof TouchEvent && (g = c.touches[0].clientX, _ = c.touches[0].clientY), { x: g || 0, y: _ || 0 };
  }, a = (c, g) => n.value ? (() => {
    r.value = g, l(c, e.value.nodes()[g]);
  })() : void 0, l = (c, g) => {
    let _ = 0, h = 0;
    if (c && g && (g != null && g.x) && (g != null && g.y)) {
      const w = i(c);
      _ = w.x ? w.x - g.x : g.x, h = w.y ? w.y - g.y : g.y;
    }
    t.x = _, t.y = h;
  }, s = () => {
    if (r.value !== void 0) {
      const c = e.value.nodes()[r.value];
      c.fx = null, c.fy = null, d();
    }
  }, d = () => {
    r.value = void 0, e.value.alpha(0.1), e.value.restart(), l();
  };
  return {
    dragStart: a,
    dragEnd: s,
    move: (c) => {
      const g = i(c);
      r.value != null && e.value.nodes()[r.value] && (e.value.restart(), e.value.alpha(0.5), e.value.nodes()[r.value].fx = g.x - t.x, e.value.nodes()[r.value].fy = g.y - t.y);
    }
  };
}
const Re = "arrow-start", ze = "arrow-end";
function nt(e, n, r) {
  const t = (l) => r.value && l.twoWay ? `url(#${Re})` : void 0, i = (l) => r.value ? `url(#${ze})` : void 0, a = j(() => ({
    arrowStart: {
      id: Re,
      refX: -(n.value / 2 - e.value),
      refY: 0,
      viewBox: `0 -${5 * e.value} ${10 * e.value} ${10 * e.value}`,
      orient: "auto",
      markerWidth: 10 + e.value,
      markerHeight: 10 + e.value,
      "stroke-width": "1",
      "marker-units": "userSpaceOnUse"
    },
    arrowEnd: {
      id: ze,
      refX: n.value / 2 + (10 - e.value),
      refY: 0,
      viewBox: `0 -${5 * e.value} ${10 * e.value} ${10 * e.value}`,
      orient: "auto",
      markerWidth: 10 + e.value,
      markerHeight: 10 + e.value,
      "marker-units": "userSpaceOnUse"
    }
  }));
  return {
    getMarkerEnd: i,
    getMarkerStart: t,
    markers: a
  };
}
function rt(e) {
  const n = +this._x.call(null, e), r = +this._y.call(null, e);
  return He(this.cover(n, r), n, r, e);
}
function He(e, n, r, t) {
  if (isNaN(n) || isNaN(r))
    return e;
  var i, a = e._root, l = { data: t }, s = e._x0, d = e._y0, o = e._x1, c = e._y1, g, _, h, w, v, f, y, x;
  if (!a)
    return e._root = l, e;
  for (; a.length; )
    if ((v = n >= (g = (s + o) / 2)) ? s = g : o = g, (f = r >= (_ = (d + c) / 2)) ? d = _ : c = _, i = a, !(a = a[y = f << 1 | v]))
      return i[y] = l, e;
  if (h = +e._x.call(null, a.data), w = +e._y.call(null, a.data), n === h && r === w)
    return l.next = a, i ? i[y] = l : e._root = l, e;
  do
    i = i ? i[y] = new Array(4) : e._root = new Array(4), (v = n >= (g = (s + o) / 2)) ? s = g : o = g, (f = r >= (_ = (d + c) / 2)) ? d = _ : c = _;
  while ((y = f << 1 | v) === (x = (w >= _) << 1 | h >= g));
  return i[x] = a, i[y] = l, e;
}
function it(e) {
  var n, r, t = e.length, i, a, l = new Array(t), s = new Array(t), d = 1 / 0, o = 1 / 0, c = -1 / 0, g = -1 / 0;
  for (r = 0; r < t; ++r)
    isNaN(i = +this._x.call(null, n = e[r])) || isNaN(a = +this._y.call(null, n)) || (l[r] = i, s[r] = a, i < d && (d = i), i > c && (c = i), a < o && (o = a), a > g && (g = a));
  if (d > c || o > g)
    return this;
  for (this.cover(d, o).cover(c, g), r = 0; r < t; ++r)
    He(this, l[r], s[r], e[r]);
  return this;
}
function ot(e, n) {
  if (isNaN(e = +e) || isNaN(n = +n))
    return this;
  var r = this._x0, t = this._y0, i = this._x1, a = this._y1;
  if (isNaN(r))
    i = (r = Math.floor(e)) + 1, a = (t = Math.floor(n)) + 1;
  else {
    for (var l = i - r || 1, s = this._root, d, o; r > e || e >= i || t > n || n >= a; )
      switch (o = (n < t) << 1 | e < r, d = new Array(4), d[o] = s, s = d, l *= 2, o) {
        case 0:
          i = r + l, a = t + l;
          break;
        case 1:
          r = i - l, a = t + l;
          break;
        case 2:
          i = r + l, t = a - l;
          break;
        case 3:
          r = i - l, t = a - l;
          break;
      }
    this._root && this._root.length && (this._root = s);
  }
  return this._x0 = r, this._y0 = t, this._x1 = i, this._y1 = a, this;
}
function at() {
  var e = [];
  return this.visit(function(n) {
    if (!n.length)
      do
        e.push(n.data);
      while (n = n.next);
  }), e;
}
function st(e) {
  return arguments.length ? this.cover(+e[0][0], +e[0][1]).cover(+e[1][0], +e[1][1]) : isNaN(this._x0) ? void 0 : [[this._x0, this._y0], [this._x1, this._y1]];
}
function S(e, n, r, t, i) {
  this.node = e, this.x0 = n, this.y0 = r, this.x1 = t, this.y1 = i;
}
function lt(e, n, r) {
  var t, i = this._x0, a = this._y0, l, s, d, o, c = this._x1, g = this._y1, _ = [], h = this._root, w, v;
  for (h && _.push(new S(h, i, a, c, g)), r == null ? r = 1 / 0 : (i = e - r, a = n - r, c = e + r, g = n + r, r *= r); w = _.pop(); )
    if (!(!(h = w.node) || (l = w.x0) > c || (s = w.y0) > g || (d = w.x1) < i || (o = w.y1) < a))
      if (h.length) {
        var f = (l + d) / 2, y = (s + o) / 2;
        _.push(
          new S(h[3], f, y, d, o),
          new S(h[2], l, y, f, o),
          new S(h[1], f, s, d, y),
          new S(h[0], l, s, f, y)
        ), (v = (n >= y) << 1 | e >= f) && (w = _[_.length - 1], _[_.length - 1] = _[_.length - 1 - v], _[_.length - 1 - v] = w);
      } else {
        var x = e - +this._x.call(null, h.data), m = n - +this._y.call(null, h.data), u = x * x + m * m;
        if (u < r) {
          var N = Math.sqrt(r = u);
          i = e - N, a = n - N, c = e + N, g = n + N, t = h.data;
        }
      }
  return t;
}
function ut(e) {
  if (isNaN(c = +this._x.call(null, e)) || isNaN(g = +this._y.call(null, e)))
    return this;
  var n, r = this._root, t, i, a, l = this._x0, s = this._y0, d = this._x1, o = this._y1, c, g, _, h, w, v, f, y;
  if (!r)
    return this;
  if (r.length)
    for (; ; ) {
      if ((w = c >= (_ = (l + d) / 2)) ? l = _ : d = _, (v = g >= (h = (s + o) / 2)) ? s = h : o = h, n = r, !(r = r[f = v << 1 | w]))
        return this;
      if (!r.length)
        break;
      (n[f + 1 & 3] || n[f + 2 & 3] || n[f + 3 & 3]) && (t = n, y = f);
    }
  for (; r.data !== e; )
    if (i = r, !(r = r.next))
      return this;
  return (a = r.next) && delete r.next, i ? (a ? i.next = a : delete i.next, this) : n ? (a ? n[f] = a : delete n[f], (r = n[0] || n[1] || n[2] || n[3]) && r === (n[3] || n[2] || n[1] || n[0]) && !r.length && (t ? t[y] = r : this._root = r), this) : (this._root = a, this);
}
function ct(e) {
  for (var n = 0, r = e.length; n < r; ++n)
    this.remove(e[n]);
  return this;
}
function ft() {
  return this._root;
}
function ht() {
  var e = 0;
  return this.visit(function(n) {
    if (!n.length)
      do
        ++e;
      while (n = n.next);
  }), e;
}
function vt(e) {
  var n = [], r, t = this._root, i, a, l, s, d;
  for (t && n.push(new S(t, this._x0, this._y0, this._x1, this._y1)); r = n.pop(); )
    if (!e(t = r.node, a = r.x0, l = r.y0, s = r.x1, d = r.y1) && t.length) {
      var o = (a + s) / 2, c = (l + d) / 2;
      (i = t[3]) && n.push(new S(i, o, c, s, d)), (i = t[2]) && n.push(new S(i, a, c, o, d)), (i = t[1]) && n.push(new S(i, o, l, s, c)), (i = t[0]) && n.push(new S(i, a, l, o, c));
    }
  return this;
}
function gt(e) {
  var n = [], r = [], t;
  for (this._root && n.push(new S(this._root, this._x0, this._y0, this._x1, this._y1)); t = n.pop(); ) {
    var i = t.node;
    if (i.length) {
      var a, l = t.x0, s = t.y0, d = t.x1, o = t.y1, c = (l + d) / 2, g = (s + o) / 2;
      (a = i[0]) && n.push(new S(a, l, s, c, g)), (a = i[1]) && n.push(new S(a, c, s, d, g)), (a = i[2]) && n.push(new S(a, l, g, c, o)), (a = i[3]) && n.push(new S(a, c, g, d, o));
    }
    r.push(t);
  }
  for (; t = r.pop(); )
    e(t.node, t.x0, t.y0, t.x1, t.y1);
  return this;
}
function yt(e) {
  return e[0];
}
function dt(e) {
  return arguments.length ? (this._x = e, this) : this._x;
}
function xt(e) {
  return e[1];
}
function _t(e) {
  return arguments.length ? (this._y = e, this) : this._y;
}
function ie(e, n, r) {
  var t = new oe(n ?? yt, r ?? xt, NaN, NaN, NaN, NaN);
  return e == null ? t : t.addAll(e);
}
function oe(e, n, r, t, i, a) {
  this._x = e, this._y = n, this._x0 = r, this._y0 = t, this._x1 = i, this._y1 = a, this._root = void 0;
}
function Le(e) {
  for (var n = { data: e.data }, r = n; e = e.next; )
    r = r.next = { data: e.data };
  return n;
}
var T = ie.prototype = oe.prototype;
T.copy = function() {
  var e = new oe(this._x, this._y, this._x0, this._y0, this._x1, this._y1), n = this._root, r, t;
  if (!n)
    return e;
  if (!n.length)
    return e._root = Le(n), e;
  for (r = [{ source: n, target: e._root = new Array(4) }]; n = r.pop(); )
    for (var i = 0; i < 4; ++i)
      (t = n.source[i]) && (t.length ? r.push({ source: t, target: n.target[i] = new Array(4) }) : n.target[i] = Le(t));
  return e;
};
T.add = rt;
T.addAll = it;
T.cover = ot;
T.data = at;
T.extent = st;
T.find = lt;
T.remove = ut;
T.removeAll = ct;
T.root = ft;
T.size = ht;
T.visit = vt;
T.visitAfter = gt;
T.x = dt;
T.y = _t;
function b(e) {
  return function() {
    return e;
  };
}
function I(e) {
  return (e() - 0.5) * 1e-6;
}
function wt(e) {
  return e.x + e.vx;
}
function mt(e) {
  return e.y + e.vy;
}
function pt(e) {
  var n, r, t, i = 1, a = 1;
  typeof e != "function" && (e = b(e == null ? 1 : +e));
  function l() {
    for (var o, c = n.length, g, _, h, w, v, f, y = 0; y < a; ++y)
      for (g = ie(n, wt, mt).visitAfter(s), o = 0; o < c; ++o)
        _ = n[o], v = r[_.index], f = v * v, h = _.x + _.vx, w = _.y + _.vy, g.visit(x);
    function x(m, u, N, k, E) {
      var A = m.data, C = m.r, M = v + C;
      if (A) {
        if (A.index > _.index) {
          var z = h - A.x - A.vx, L = w - A.y - A.vy, R = z * z + L * L;
          R < M * M && (z === 0 && (z = I(t), R += z * z), L === 0 && (L = I(t), R += L * L), R = (M - (R = Math.sqrt(R))) / R * i, _.vx += (z *= R) * (M = (C *= C) / (f + C)), _.vy += (L *= R) * M, A.vx -= z * (M = 1 - M), A.vy -= L * M);
        }
        return;
      }
      return u > h + M || k < h - M || N > w + M || E < w - M;
    }
  }
  function s(o) {
    if (o.data)
      return o.r = r[o.data.index];
    for (var c = o.r = 0; c < 4; ++c)
      o[c] && o[c].r > o.r && (o.r = o[c].r);
  }
  function d() {
    if (n) {
      var o, c = n.length, g;
      for (r = new Array(c), o = 0; o < c; ++o)
        g = n[o], r[g.index] = +e(g, o, n);
    }
  }
  return l.initialize = function(o, c) {
    n = o, t = c, d();
  }, l.iterations = function(o) {
    return arguments.length ? (a = +o, l) : a;
  }, l.strength = function(o) {
    return arguments.length ? (i = +o, l) : i;
  }, l.radius = function(o) {
    return arguments.length ? (e = typeof o == "function" ? o : b(+o), d(), l) : e;
  }, l;
}
function kt(e) {
  return e.index;
}
function $e(e, n) {
  var r = e.get(n);
  if (!r)
    throw new Error("node not found: " + n);
  return r;
}
function Nt(e) {
  var n = kt, r = g, t, i = b(30), a, l, s, d, o, c = 1;
  e == null && (e = []);
  function g(f) {
    return 1 / Math.min(s[f.source.index], s[f.target.index]);
  }
  function _(f) {
    for (var y = 0, x = e.length; y < c; ++y)
      for (var m = 0, u, N, k, E, A, C, M; m < x; ++m)
        u = e[m], N = u.source, k = u.target, E = k.x + k.vx - N.x - N.vx || I(o), A = k.y + k.vy - N.y - N.vy || I(o), C = Math.sqrt(E * E + A * A), C = (C - a[m]) / C * f * t[m], E *= C, A *= C, k.vx -= E * (M = d[m]), k.vy -= A * M, N.vx += E * (M = 1 - M), N.vy += A * M;
  }
  function h() {
    if (l) {
      var f, y = l.length, x = e.length, m = new Map(l.map((N, k) => [n(N, k, l), N])), u;
      for (f = 0, s = new Array(y); f < x; ++f)
        u = e[f], u.index = f, typeof u.source != "object" && (u.source = $e(m, u.source)), typeof u.target != "object" && (u.target = $e(m, u.target)), s[u.source.index] = (s[u.source.index] || 0) + 1, s[u.target.index] = (s[u.target.index] || 0) + 1;
      for (f = 0, d = new Array(x); f < x; ++f)
        u = e[f], d[f] = s[u.source.index] / (s[u.source.index] + s[u.target.index]);
      t = new Array(x), w(), a = new Array(x), v();
    }
  }
  function w() {
    if (l)
      for (var f = 0, y = e.length; f < y; ++f)
        t[f] = +r(e[f], f, e);
  }
  function v() {
    if (l)
      for (var f = 0, y = e.length; f < y; ++f)
        a[f] = +i(e[f], f, e);
  }
  return _.initialize = function(f, y) {
    l = f, o = y, h();
  }, _.links = function(f) {
    return arguments.length ? (e = f, h(), _) : e;
  }, _.id = function(f) {
    return arguments.length ? (n = f, _) : n;
  }, _.iterations = function(f) {
    return arguments.length ? (c = +f, _) : c;
  }, _.strength = function(f) {
    return arguments.length ? (r = typeof f == "function" ? f : b(+f), w(), _) : r;
  }, _.distance = function(f) {
    return arguments.length ? (i = typeof f == "function" ? f : b(+f), v(), _) : i;
  }, _;
}
var At = { value: () => {
} };
function Ue() {
  for (var e = 0, n = arguments.length, r = {}, t; e < n; ++e) {
    if (!(t = arguments[e] + "") || t in r || /[\s.]/.test(t))
      throw new Error("illegal type: " + t);
    r[t] = [];
  }
  return new V(r);
}
function V(e) {
  this._ = e;
}
function Mt(e, n) {
  return e.trim().split(/^|\s+/).map(function(r) {
    var t = "", i = r.indexOf(".");
    if (i >= 0 && (t = r.slice(i + 1), r = r.slice(0, i)), r && !n.hasOwnProperty(r))
      throw new Error("unknown type: " + r);
    return { type: r, name: t };
  });
}
V.prototype = Ue.prototype = {
  constructor: V,
  on: function(e, n) {
    var r = this._, t = Mt(e + "", r), i, a = -1, l = t.length;
    if (arguments.length < 2) {
      for (; ++a < l; )
        if ((i = (e = t[a]).type) && (i = Et(r[i], e.name)))
          return i;
      return;
    }
    if (n != null && typeof n != "function")
      throw new Error("invalid callback: " + n);
    for (; ++a < l; )
      if (i = (e = t[a]).type)
        r[i] = Be(r[i], e.name, n);
      else if (n == null)
        for (i in r)
          r[i] = Be(r[i], e.name, null);
    return this;
  },
  copy: function() {
    var e = {}, n = this._;
    for (var r in n)
      e[r] = n[r].slice();
    return new V(e);
  },
  call: function(e, n) {
    if ((i = arguments.length - 2) > 0)
      for (var r = new Array(i), t = 0, i, a; t < i; ++t)
        r[t] = arguments[t + 2];
    if (!this._.hasOwnProperty(e))
      throw new Error("unknown type: " + e);
    for (a = this._[e], t = 0, i = a.length; t < i; ++t)
      a[t].value.apply(n, r);
  },
  apply: function(e, n, r) {
    if (!this._.hasOwnProperty(e))
      throw new Error("unknown type: " + e);
    for (var t = this._[e], i = 0, a = t.length; i < a; ++i)
      t[i].value.apply(n, r);
  }
};
function Et(e, n) {
  for (var r = 0, t = e.length, i; r < t; ++r)
    if ((i = e[r]).name === n)
      return i.value;
}
function Be(e, n, r) {
  for (var t = 0, i = e.length; t < i; ++t)
    if (e[t].name === n) {
      e[t] = At, e = e.slice(0, t).concat(e.slice(t + 1));
      break;
    }
  return r != null && e.push({ name: n, value: r }), e;
}
var X = 0, H = 0, W = 0, Ge = 1e3, Q, U, Z = 0, Y = 0, J = 0, G = typeof performance == "object" && performance.now ? performance : Date, je = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function Oe() {
  return Y || (je(St), Y = G.now() + J);
}
function St() {
  Y = 0;
}
function ne() {
  this._call = this._time = this._next = null;
}
ne.prototype = Ve.prototype = {
  constructor: ne,
  restart: function(e, n, r) {
    if (typeof e != "function")
      throw new TypeError("callback is not a function");
    r = (r == null ? Oe() : +r) + (n == null ? 0 : +n), !this._next && U !== this && (U ? U._next = this : Q = this, U = this), this._call = e, this._time = r, re();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, re());
  }
};
function Ve(e, n, r) {
  var t = new ne();
  return t.restart(e, n, r), t;
}
function bt() {
  Oe(), ++X;
  for (var e = Q, n; e; )
    (n = Y - e._time) >= 0 && e._call.call(void 0, n), e = e._next;
  --X;
}
function Fe() {
  Y = (Z = G.now()) + J, X = H = 0;
  try {
    bt();
  } finally {
    X = 0, Ct(), Y = 0;
  }
}
function Tt() {
  var e = G.now(), n = e - Z;
  n > Ge && (J -= n, Z = e);
}
function Ct() {
  for (var e, n = Q, r, t = 1 / 0; n; )
    n._call ? (t > n._time && (t = n._time), e = n, n = n._next) : (r = n._next, n._next = null, n = e ? e._next = r : Q = r);
  U = e, re(t);
}
function re(e) {
  if (!X) {
    H && (H = clearTimeout(H));
    var n = e - Y;
    n > 24 ? (e < 1 / 0 && (H = setTimeout(Fe, e - G.now() - J)), W && (W = clearInterval(W))) : (W || (Z = G.now(), W = setInterval(Tt, Ge)), X = 1, je(Fe));
  }
}
const Dt = 1664525, Rt = 1013904223, Ie = 4294967296;
function zt() {
  let e = 1;
  return () => (e = (Dt * e + Rt) % Ie) / Ie;
}
function Lt(e) {
  return e.x;
}
function $t(e) {
  return e.y;
}
var Bt = 10, Ft = Math.PI * (3 - Math.sqrt(5));
function Ye(e) {
  var n, r = 1, t = 1e-3, i = 1 - Math.pow(t, 1 / 300), a = 0, l = 0.6, s = /* @__PURE__ */ new Map(), d = Ve(g), o = Ue("tick", "end"), c = zt();
  e == null && (e = []);
  function g() {
    _(), o.call("tick", n), r < t && (d.stop(), o.call("end", n));
  }
  function _(v) {
    var f, y = e.length, x;
    v === void 0 && (v = 1);
    for (var m = 0; m < v; ++m)
      for (r += (a - r) * i, s.forEach(function(u) {
        u(r);
      }), f = 0; f < y; ++f)
        x = e[f], x.fx == null ? x.x += x.vx *= l : (x.x = x.fx, x.vx = 0), x.fy == null ? x.y += x.vy *= l : (x.y = x.fy, x.vy = 0);
    return n;
  }
  function h() {
    for (var v = 0, f = e.length, y; v < f; ++v) {
      if (y = e[v], y.index = v, y.fx != null && (y.x = y.fx), y.fy != null && (y.y = y.fy), isNaN(y.x) || isNaN(y.y)) {
        var x = Bt * Math.sqrt(0.5 + v), m = v * Ft;
        y.x = x * Math.cos(m), y.y = x * Math.sin(m);
      }
      (isNaN(y.vx) || isNaN(y.vy)) && (y.vx = y.vy = 0);
    }
  }
  function w(v) {
    return v.initialize && v.initialize(e, c), v;
  }
  return h(), n = {
    tick: _,
    restart: function() {
      return d.restart(g), n;
    },
    stop: function() {
      return d.stop(), n;
    },
    nodes: function(v) {
      return arguments.length ? (e = v, h(), s.forEach(w), n) : e;
    },
    alpha: function(v) {
      return arguments.length ? (r = +v, n) : r;
    },
    alphaMin: function(v) {
      return arguments.length ? (t = +v, n) : t;
    },
    alphaDecay: function(v) {
      return arguments.length ? (i = +v, n) : +i;
    },
    alphaTarget: function(v) {
      return arguments.length ? (a = +v, n) : a;
    },
    velocityDecay: function(v) {
      return arguments.length ? (l = 1 - v, n) : 1 - l;
    },
    randomSource: function(v) {
      return arguments.length ? (c = v, s.forEach(w), n) : c;
    },
    force: function(v, f) {
      return arguments.length > 1 ? (f == null ? s.delete(v) : s.set(v, w(f)), n) : s.get(v);
    },
    find: function(v, f, y) {
      var x = 0, m = e.length, u, N, k, E, A;
      for (y == null ? y = 1 / 0 : y *= y, x = 0; x < m; ++x)
        E = e[x], u = v - E.x, N = f - E.y, k = u * u + N * N, k < y && (A = E, y = k);
      return A;
    },
    on: function(v, f) {
      return arguments.length > 1 ? (o.on(v, f), n) : o.on(v);
    }
  };
}
function It() {
  var e, n, r, t, i = b(-30), a, l = 1, s = 1 / 0, d = 0.81;
  function o(h) {
    var w, v = e.length, f = ie(e, Lt, $t).visitAfter(g);
    for (t = h, w = 0; w < v; ++w)
      n = e[w], f.visit(_);
  }
  function c() {
    if (e) {
      var h, w = e.length, v;
      for (a = new Array(w), h = 0; h < w; ++h)
        v = e[h], a[v.index] = +i(v, h, e);
    }
  }
  function g(h) {
    var w = 0, v, f, y = 0, x, m, u;
    if (h.length) {
      for (x = m = u = 0; u < 4; ++u)
        (v = h[u]) && (f = Math.abs(v.value)) && (w += v.value, y += f, x += f * v.x, m += f * v.y);
      h.x = x / y, h.y = m / y;
    } else {
      v = h, v.x = v.data.x, v.y = v.data.y;
      do
        w += a[v.data.index];
      while (v = v.next);
    }
    h.value = w;
  }
  function _(h, w, v, f) {
    if (!h.value)
      return !0;
    var y = h.x - n.x, x = h.y - n.y, m = f - w, u = y * y + x * x;
    if (m * m / d < u)
      return u < s && (y === 0 && (y = I(r), u += y * y), x === 0 && (x = I(r), u += x * x), u < l && (u = Math.sqrt(l * u)), n.vx += y * h.value * t / u, n.vy += x * h.value * t / u), !0;
    if (h.length || u >= s)
      return;
    (h.data !== n || h.next) && (y === 0 && (y = I(r), u += y * y), x === 0 && (x = I(r), u += x * x), u < l && (u = Math.sqrt(l * u)));
    do
      h.data !== n && (m = a[h.data.index] * t / u, n.vx += y * m, n.vy += x * m);
    while (h = h.next);
  }
  return o.initialize = function(h, w) {
    e = h, r = w, c();
  }, o.strength = function(h) {
    return arguments.length ? (i = typeof h == "function" ? h : b(+h), c(), o) : i;
  }, o.distanceMin = function(h) {
    return arguments.length ? (l = h * h, o) : Math.sqrt(l);
  }, o.distanceMax = function(h) {
    return arguments.length ? (s = h * h, o) : Math.sqrt(s);
  }, o.theta = function(h) {
    return arguments.length ? (d = h * h, o) : Math.sqrt(d);
  }, o;
}
function Yt(e) {
  var n = b(0.1), r, t, i;
  typeof e != "function" && (e = b(e == null ? 0 : +e));
  function a(s) {
    for (var d = 0, o = r.length, c; d < o; ++d)
      c = r[d], c.vx += (i[d] - c.x) * t[d] * s;
  }
  function l() {
    if (r) {
      var s, d = r.length;
      for (t = new Array(d), i = new Array(d), s = 0; s < d; ++s)
        t[s] = isNaN(i[s] = +e(r[s], s, r)) ? 0 : +n(r[s], s, r);
    }
  }
  return a.initialize = function(s) {
    r = s, l();
  }, a.strength = function(s) {
    return arguments.length ? (n = typeof s == "function" ? s : b(+s), l(), a) : n;
  }, a.x = function(s) {
    return arguments.length ? (e = typeof s == "function" ? s : b(+s), l(), a) : e;
  }, a;
}
function Pt(e) {
  var n = b(0.1), r, t, i;
  typeof e != "function" && (e = b(e == null ? 0 : +e));
  function a(s) {
    for (var d = 0, o = r.length, c; d < o; ++d)
      c = r[d], c.vy += (i[d] - c.y) * t[d] * s;
  }
  function l() {
    if (r) {
      var s, d = r.length;
      for (t = new Array(d), i = new Array(d), s = 0; s < d; ++s)
        t[s] = isNaN(i[s] = +e(r[s], s, r)) ? 0 : +n(r[s], s, r);
    }
  }
  return a.initialize = function(s) {
    r = s, l();
  }, a.strength = function(s) {
    return arguments.length ? (n = typeof s == "function" ? s : b(+s), l(), a) : n;
  }, a.y = function(s) {
    return arguments.length ? (e = typeof s == "function" ? s : b(+s), l(), a) : e;
  }, a;
}
function Xt(e) {
  const n = (o) => o || e.value, r = (o) => o.width || e.value, t = (o) => o.height || o.size || e.value, i = (o) => o.color ? "fill: " + o.color : "", a = (o, c, g) => c || g ? ["node", "pinned"] : ["node"];
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
      cssClass: a(o.cssClass, void 0, void 0),
      r: o.innerSVG ? void 0 : n(o.size) / 2
    }),
    getClass: a,
    getSize: n,
    getX: (o, c) => (o || 0) - (c || 0) / 2,
    getY: (o, c) => (o || 0) - (c || 0) / 2
  };
}
const Pe = "arrow-start", Xe = "arrow-end";
function Wt(e, n, r) {
  const t = (o) => o.color ? {
    stroke: o.color
  } : {}, i = (o) => ["link"], a = (o) => r.value && o.twoWay ? `url(#${Pe})` : void 0, l = (o) => r.value ? `url(#${Xe})` : void 0, s = j(() => ({
    arrowStart: {
      id: Pe,
      refX: -(n.value / 2 - e.value),
      refY: 0,
      viewBox: `0 -${5 * e.value} ${10 * e.value} ${10 * e.value}`,
      orient: "auto",
      markerWidth: 10 + e.value,
      markerHeight: 10 + e.value,
      "stroke-width": "1",
      "marker-units": "userSpaceOnUse"
    },
    arrowEnd: {
      id: Xe,
      refX: n.value / 2 + (10 - e.value),
      refY: 0,
      viewBox: `0 -${5 * e.value} ${10 * e.value} ${10 * e.value}`,
      orient: "auto",
      markerWidth: 10 + e.value,
      markerHeight: 10 + e.value,
      "marker-units": "userSpaceOnUse"
    }
  }));
  return {
    getClass: i,
    getStyle: t,
    getMarkerEnd: l,
    getMarkerStart: a,
    getSimulationLink: (o) => ({
      source: o.source,
      target: o.target,
      id: o.id,
      key: o.id,
      name: o.name,
      class: i(o.id),
      style: t(o),
      "stroke-width": e.value,
      "marker-end": l(),
      "marker-start": a(o)
    }),
    markers: s
  };
}
const Ht = "X", Ut = "Y", Gt = "charge", jt = "link", Ot = "collide", Ke = 0.01, Qe = 0.1, Vt = Math.log(Ke) / Math.log(1 - Qe);
function Kt(e, n, r, t) {
  const { getNode: i } = Xt(t.nodeSize), { getSimulationLink: a } = Wt(
    t.linkWidth,
    t.nodeSize,
    t.directed
  ), l = We({
    nodes: [],
    links: []
  }), s = () => {
    console.debug("useSimulation.init"), l.nodes = e.value.map((g) => i(g)), l.links = n.value.map((g) => a(g)), d();
  }, d = async () => {
    console.debug("useSimulation.refresh"), c.value.stop(), c.value = o(), t.static.value ? c.value.tick(Vt) : c.value.restart();
  }, o = () => {
    const g = Ye().alphaMin(Ke).alphaDecay(Qe).nodes(l.nodes);
    return g.force(
      Ht,
      Yt(r.value.width / 2).strength(t.forceXStrength.value)
    ), g.force(
      Ut,
      Pt(r.value.height / 2).strength(t.forceYStrength.value)
    ), g.force(
      Gt,
      It().strength(t.forcManyBodyStrength.value)
    ), g.force(
      Ot,
      pt(t.forceCollideStrength.value)
    ), g.force(
      jt,
      Nt(l.links).id((_) => {
        if (!("id" in _))
          throw new Error("Node id is undefined");
        return _.id;
      })
    ), g;
  }, c = K(
    Ye()
  );
  return De(
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
      t.directed
    ],
    async () => s(),
    { debounce: 100, maxWait: 1e3 }
  ), De(t.static, async () => d(), {
    deep: !0,
    debounce: 100,
    maxWait: 1e3
  }), {
    simulation: c,
    graph: l
  };
}
const Qt = 0.1, Zt = 0.1, Jt = -300, qt = 25, en = 12, tn = 2, nn = 45, rn = (e) => {
  const n = j(() => {
    var t, i, a, l, s, d, o, c, g, _, h, w, v, f, y, x, m, u, N, k, E, A, C, M, z, L, R, ae, se, le, ue, ce, fe, he, ve, ge, ye, de, xe, _e, we, me, pe, ke, Ne, Ae, Me, Ee;
    return {
      node: {
        stroke: ((a = (i = (t = e.value) == null ? void 0 : t.nodes) == null ? void 0 : i.colors) == null ? void 0 : a.stroke) || "#E2EB98",
        fill: ((d = (s = (l = e.value) == null ? void 0 : l.nodes) == null ? void 0 : s.colors) == null ? void 0 : d.fill) || "#93A392",
        selected: {
          stroke: ((_ = (g = (c = (o = e.value) == null ? void 0 : o.nodes) == null ? void 0 : c.colors) == null ? void 0 : g.selected) == null ? void 0 : _.stroke) || "#9DC4B5",
          fill: (f = (v = (w = (h = e.value) == null ? void 0 : h.nodes) == null ? void 0 : w.colors) == null ? void 0 : v.selected) == null ? void 0 : f.fill
        },
        hover: {
          stroke: "#9DC4B5",
          fill: (u = (m = (x = (y = e.value) == null ? void 0 : y.nodes) == null ? void 0 : x.colors) == null ? void 0 : m.hover) == null ? void 0 : u.fill
        },
        pinned: {
          stroke: "#9DC4B5",
          fill: (A = (E = (k = (N = e.value) == null ? void 0 : N.nodes) == null ? void 0 : k.colors) == null ? void 0 : E.pinned) == null ? void 0 : A.fill
        },
        label: {
          fill: ((L = (z = (M = (C = e.value) == null ? void 0 : C.nodes) == null ? void 0 : M.colors) == null ? void 0 : z.label) == null ? void 0 : L.fill) || "#93A392"
        }
      },
      link: {
        stroke: ((se = (ae = (R = e.value) == null ? void 0 : R.links) == null ? void 0 : ae.colors) == null ? void 0 : se.stroke) || "#BAD9A2",
        fill: (ce = (ue = (le = e.value) == null ? void 0 : le.links) == null ? void 0 : ue.colors) == null ? void 0 : ce.fill,
        selected: {
          stroke: ((ge = (ve = (he = (fe = e.value) == null ? void 0 : fe.links) == null ? void 0 : he.colors) == null ? void 0 : ve.selected) == null ? void 0 : ge.stroke) || "#9DC4B5",
          fill: (_e = (xe = (de = (ye = e.value) == null ? void 0 : ye.links) == null ? void 0 : de.colors) == null ? void 0 : xe.selected) == null ? void 0 : _e.fill
        },
        hover: {
          stroke: "#9DC4B5",
          fill: (ke = (pe = (me = (we = e.value) == null ? void 0 : we.links) == null ? void 0 : me.colors) == null ? void 0 : pe.hover) == null ? void 0 : ke.fill
        },
        label: {
          fill: ((Ee = (Me = (Ae = (Ne = e.value) == null ? void 0 : Ne.links) == null ? void 0 : Ae.colors) == null ? void 0 : Me.label) == null ? void 0 : Ee.fill) || "#93A392"
        }
      }
    };
  });
  return {
    options: {
      static: D(() => {
        var t, i;
        return ((i = (t = e.value) == null ? void 0 : t.simulation) == null ? void 0 : i.static) || !1;
      }),
      forceXStrength: D(
        () => {
          var t, i;
          return ((i = (t = e.value) == null ? void 0 : t.simulation) == null ? void 0 : i.force.x) || Qt;
        }
      ),
      forceYStrength: D(
        () => {
          var t, i;
          return ((i = (t = e.value) == null ? void 0 : t.simulation) == null ? void 0 : i.force.y) || Zt;
        }
      ),
      forcManyBodyStrength: D(
        () => {
          var t, i;
          return ((i = (t = e.value) == null ? void 0 : t.simulation) == null ? void 0 : i.force.charge) || Jt;
        }
      ),
      forceCollideStrength: D(
        () => {
          var t, i;
          return ((i = (t = e.value) == null ? void 0 : t.simulation) == null ? void 0 : i.force.collide) || nn;
        }
      ),
      nodeSize: D(() => {
        var t, i;
        return ((i = (t = e.value) == null ? void 0 : t.nodes) == null ? void 0 : i.size) || qt;
      }),
      nodeFontSize: D(
        () => {
          var t, i, a;
          return ((a = (i = (t = e.value) == null ? void 0 : t.nodes) == null ? void 0 : i.font) == null ? void 0 : a.size) || en;
        }
      ),
      linkWidth: D(() => {
        var t, i;
        return ((i = (t = e.value) == null ? void 0 : t.links) == null ? void 0 : i.width) || tn;
      }),
      linkFontSize: D(() => {
        var t, i, a;
        return ((a = (i = (t = e.value) == null ? void 0 : t.links) == null ? void 0 : i.font) == null ? void 0 : a.size) || 12;
      }),
      draggables: D(() => {
        var t, i;
        return ((i = (t = e.value) == null ? void 0 : t.layout) == null ? void 0 : i.draggables) || !1;
      }),
      directed: D(() => {
        var t, i;
        return ((i = (t = e.value) == null ? void 0 : t.layout) == null ? void 0 : i.directed) || !1;
      })
    },
    theme: n
  };
}, on = (e, n) => ({
  label: j(() => ({
    font: { size: e.value },
    offset: {
      x: n.value / 2 + e.value / 2,
      y: e.value / 2
    }
  }))
}), an = (e) => ({
  label: j(() => ({
    font: { size: e.value }
  })),
  getX: (i) => P(i.source) && P(i.target) && i.source.x && i.target.x ? i.target.x > i.source.x ? i.source.x + (i.target.x - i.source.x) / 2 : i.target.x + (i.source.x - i.target.x) / 2 : void 0,
  getY: (i) => P(i.source) && P(i.target) && i.source.y && i.target.y ? i.target.y > i.source.y ? i.source.y + (i.target.y - i.source.y) / 2 : i.target.y + (i.source.y - i.target.y) / 2 : void 0
}), sn = ["viewBox"], ln = { key: 0 }, un = ["fill"], cn = ["fill"], fn = ["id", "d", "stroke-width", "marker-end", "marker-start", "onClick", "onTouchstartPassive"], hn = ["font-size", "x", "y"], vn = {
  id: "l-nodes",
  class: "nodes"
}, gn = ["viewBox", "width", "height", "x", "y", "title", "onClick", "onTouchendPassive", "onMousedown", "onTouchstartPassive", "innerHTML"], yn = ["cx", "cy", "r", "title", "onClick", "onTouchendPassive", "onMousedown", "onTouchstartPassive"], dn = ["x", "y", "font-size", "stroke-width"], wn = /* @__PURE__ */ Ze({
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
      default: void 0
    }
  },
  emits: ["node-click", "link-click"],
  setup(e, { emit: n }) {
    const r = e;
    Je((x) => ({
      "56dc464e": p(t).node.stroke,
      "0eb7d319": p(t).node.fill,
      "6043b40a": p(t).node.selected.stroke || p(t).node.stroke,
      "09a6f36a": p(t).node.selected.fill || p(t).node.fill,
      "0e263547": p(t).node.pinned.stroke || p(t).node.stroke,
      "7ecd9b27": p(t).node.pinned.fill || p(t).node.fill,
      e241e882: p(t).node.hover.stroke || p(t).node.stroke,
      "44a46d9f": p(t).node.hover.fill || p(t).node.fill,
      a564c554: p(t).link.stroke,
      dbb967be: p(t).link.fill,
      "06a1e0e6": p(t).link.selected.stroke,
      "964c3fd0": p(t).link.selected.fill,
      "3bc6c280": p(t).node.hover.stroke,
      ca90bfea: p(t).node.hover.fill,
      aead5f4a: p(t).link.label.fill,
      "284abd53": p(t).node.label.fill
    }));
    const { theme: t, options: i } = rn(D(() => r.options)), a = K(null), l = K({ width: 100, height: 100 });
    et(a, (x) => {
      const m = x[0];
      m.contentRect.width === l.value.width && m.contentRect.height === l.value.height || (l.value = {
        width: m.contentRect.width,
        height: m.contentRect.height
      });
    });
    const s = (x) => P(x.source) && P(x.target) ? `M${x.source.x} ${x.source.y} L${x.target.x} ${x.target.y}` : void 0, { simulation: d, graph: o } = Kt(
      D(() => r.nodes),
      D(() => r.links),
      l,
      i
    ), { dragStart: c, dragEnd: g, move: _ } = tt(
      d,
      i.draggables
    ), { label: h } = on(
      i.nodeFontSize,
      i.nodeSize
    ), {
      label: w,
      getX: v,
      getY: f
    } = an(i.linkFontSize), { markers: y } = nt(
      i.linkWidth,
      i.nodeSize,
      i.directed
    );
    return (x, m) => ($(), B("svg", {
      ref_key: "svg",
      ref: a,
      xmlns: "http://www.w3.org/2000/svg",
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      preserveAspectRatio: "xMinYMin",
      viewBox: `0 0 ${l.value.width} ${l.value.height}`,
      class: "svg-container",
      onMouseup: m[0] || (m[0] = //@ts-ignore
      (...u) => p(g) && p(g)(...u)),
      onTouchendPassive: m[1] || (m[1] = //@ts-ignore
      (...u) => p(g) && p(g)(...u)),
      onTouchstartPassive: m[2] || (m[2] = async () => {
      }),
      onMousemove: m[3] || (m[3] = //@ts-ignore
      (...u) => p(_) && p(_)(...u))
    }, [
      p(i).directed ? ($(), B("defs", ln, [
        F("marker", Se(be(p(y).arrowEnd)), [
          F("path", {
            fill: p(t).link.stroke,
            d: "M0 -5 L 10 0 L 0 5"
          }, null, 8, un)
        ], 16),
        F("marker", Se(be(p(y).arrowStart)), [
          F("path", {
            fill: p(t).link.stroke,
            d: "M 10 5 L 0 0 L 10 -5"
          }, null, 8, cn)
        ], 16)
      ])) : qe("", !0),
      ($(!0), B(q, null, Te(p(o).links, (u, N) => ($(), B("g", {
        key: N,
        id: "l-links",
        class: "links"
      }, [
        F("path", {
          id: `${N}`,
          d: s(u),
          "stroke-width": u["stroke-width"],
          class: ee(u.class),
          style: te(u.style),
          "marker-end": u["marker-end"],
          "marker-start": u["marker-start"],
          onClick: (k) => n("link-click", k, u),
          onTouchstartPassive: (k) => n("link-click", k, u)
        }, null, 46, fn),
        F("text", {
          class: "link-label",
          "font-size": p(w).font.size,
          x: p(v)(u),
          y: p(f)(u)
        }, Ce(u.name) + " ", 9, hn)
      ]))), 128)),
      F("g", vn, [
        ($(!0), B(q, null, Te(p(o).nodes, (u, N) => ($(), B(q, { key: N }, [
          u.innerSVG ? ($(), B("svg", {
            key: 0,
            viewBox: u.innerSVG.viewBox,
            width: u.width,
            height: u.height,
            x: (u.x || 0) - (u.width || 0) / 2,
            y: (u.y || 0) - (u.height || 0) / 2,
            style: te(u.style),
            title: u.name,
            class: ee(u.cssClass),
            onClick: (k) => n("node-click", k, u),
            onTouchendPassive: (k) => n("node-click", k, u),
            onMousedown: O((k) => p(c)(k, N), ["prevent"]),
            onTouchstartPassive: O((k) => p(c)(k, N), ["prevent"]),
            innerHTML: u.innerSVG.innerHtml
          }, null, 46, gn)) : ($(), B("circle", {
            key: 1,
            cx: u.x,
            cy: u.y,
            r: u.r,
            style: te(u.style),
            title: u.name,
            class: ee(u.cssClass),
            onClick: (k) => x.$emit("node-click", k, u),
            onTouchendPassive: (k) => x.$emit("node-click", k, u),
            onMousedown: O((k) => p(c)(k, N), ["prevent"]),
            onTouchstartPassive: O((k) => p(c)(k, N), ["prevent"])
          }, null, 46, yn)),
          F("text", {
            class: "node-label",
            x: (u.x || 0) + (u.width || 0) / 2 + p(h).font.size / 2,
            y: (u.y || 0) + p(h).offset.y,
            "font-size": p(h).font.size,
            "stroke-width": p(h).font.size / 8
          }, Ce(u.name), 9, dn)
        ], 64))), 128))
      ])
    ], 40, sn));
  }
});
export {
  wn as D3NetworkGraph,
  P as isNode,
  Kt as useSimulation
};
