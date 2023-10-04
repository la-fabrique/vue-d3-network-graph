import { ref as j, reactive as Ye, computed as Q, toRef as R, defineComponent as Ke, useCssVars as Qe, unref as m, openBlock as $, createElementBlock as I, createElementVNode as F, normalizeProps as Ee, guardReactiveProps as Se, createCommentVNode as Ze, Fragment as J, renderList as Te, normalizeClass as q, normalizeStyle as ee, withModifiers as G, toDisplayString as Je } from "vue";
import { watchDebounced as Ce, useResizeObserver as qe } from "@vueuse/core";
function et(e, n) {
  const r = j(void 0), t = Ye({
    x: 0,
    y: 0
  }), i = (c) => {
    let g, d = 0;
    return c instanceof MouseEvent ? (g = c.clientX, d = c.clientY) : c instanceof TouchEvent && (g = c.touches[0].clientX, d = c.touches[0].clientY), { x: g || 0, y: d || 0 };
  }, l = (c, g) => n.value ? (() => {
    r.value = g, f(c, e.value.nodes()[g]);
  })() : void 0, f = (c, g) => {
    let d = 0, v = 0;
    if (c && g && (g != null && g.x) && (g != null && g.y)) {
      const w = i(c);
      d = w.x ? w.x - g.x : g.x, v = w.y ? w.y - g.y : g.y;
    }
    t.x = d, t.y = v;
  }, s = () => {
    if (r.value !== void 0) {
      const c = e.value.nodes()[r.value];
      c.fx = null, c.fy = null, y();
    }
  }, y = () => {
    r.value = void 0, e.value.alpha(0.1), e.value.restart(), f();
  };
  return {
    dragStart: l,
    dragEnd: s,
    move: (c) => {
      const g = i(c);
      r.value != null && e.value.nodes()[r.value] && (e.value.restart(), e.value.alpha(0.5), e.value.nodes()[r.value].fx = g.x - t.x, e.value.nodes()[r.value].fy = g.y - t.y);
    }
  };
}
const De = "arrow-start", Re = "arrow-end";
function tt(e, n, r) {
  const t = (f) => r.value && f.twoWay ? `url(#${De})` : void 0, i = (f) => r.value ? `url(#${Re})` : void 0, l = Q(() => ({
    arrowStart: {
      id: De,
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
      id: Re,
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
    markers: l
  };
}
function nt(e) {
  const n = +this._x.call(null, e), r = +this._y.call(null, e);
  return We(this.cover(n, r), n, r, e);
}
function We(e, n, r, t) {
  if (isNaN(n) || isNaN(r))
    return e;
  var i, l = e._root, f = { data: t }, s = e._x0, y = e._y0, o = e._x1, c = e._y1, g, d, v, w, h, u, a, _;
  if (!l)
    return e._root = f, e;
  for (; l.length; )
    if ((h = n >= (g = (s + o) / 2)) ? s = g : o = g, (u = r >= (d = (y + c) / 2)) ? y = d : c = d, i = l, !(l = l[a = u << 1 | h]))
      return i[a] = f, e;
  if (v = +e._x.call(null, l.data), w = +e._y.call(null, l.data), n === v && r === w)
    return f.next = l, i ? i[a] = f : e._root = f, e;
  do
    i = i ? i[a] = new Array(4) : e._root = new Array(4), (h = n >= (g = (s + o) / 2)) ? s = g : o = g, (u = r >= (d = (y + c) / 2)) ? y = d : c = d;
  while ((a = u << 1 | h) === (_ = (w >= d) << 1 | v >= g));
  return i[_] = l, i[a] = f, e;
}
function rt(e) {
  var n, r, t = e.length, i, l, f = new Array(t), s = new Array(t), y = 1 / 0, o = 1 / 0, c = -1 / 0, g = -1 / 0;
  for (r = 0; r < t; ++r)
    isNaN(i = +this._x.call(null, n = e[r])) || isNaN(l = +this._y.call(null, n)) || (f[r] = i, s[r] = l, i < y && (y = i), i > c && (c = i), l < o && (o = l), l > g && (g = l));
  if (y > c || o > g)
    return this;
  for (this.cover(y, o).cover(c, g), r = 0; r < t; ++r)
    We(this, f[r], s[r], e[r]);
  return this;
}
function it(e, n) {
  if (isNaN(e = +e) || isNaN(n = +n))
    return this;
  var r = this._x0, t = this._y0, i = this._x1, l = this._y1;
  if (isNaN(r))
    i = (r = Math.floor(e)) + 1, l = (t = Math.floor(n)) + 1;
  else {
    for (var f = i - r || 1, s = this._root, y, o; r > e || e >= i || t > n || n >= l; )
      switch (o = (n < t) << 1 | e < r, y = new Array(4), y[o] = s, s = y, f *= 2, o) {
        case 0:
          i = r + f, l = t + f;
          break;
        case 1:
          r = i - f, l = t + f;
          break;
        case 2:
          i = r + f, t = l - f;
          break;
        case 3:
          r = i - f, t = l - f;
          break;
      }
    this._root && this._root.length && (this._root = s);
  }
  return this._x0 = r, this._y0 = t, this._x1 = i, this._y1 = l, this;
}
function ot() {
  var e = [];
  return this.visit(function(n) {
    if (!n.length)
      do
        e.push(n.data);
      while (n = n.next);
  }), e;
}
function at(e) {
  return arguments.length ? this.cover(+e[0][0], +e[0][1]).cover(+e[1][0], +e[1][1]) : isNaN(this._x0) ? void 0 : [[this._x0, this._y0], [this._x1, this._y1]];
}
function S(e, n, r, t, i) {
  this.node = e, this.x0 = n, this.y0 = r, this.x1 = t, this.y1 = i;
}
function lt(e, n, r) {
  var t, i = this._x0, l = this._y0, f, s, y, o, c = this._x1, g = this._y1, d = [], v = this._root, w, h;
  for (v && d.push(new S(v, i, l, c, g)), r == null ? r = 1 / 0 : (i = e - r, l = n - r, c = e + r, g = n + r, r *= r); w = d.pop(); )
    if (!(!(v = w.node) || (f = w.x0) > c || (s = w.y0) > g || (y = w.x1) < i || (o = w.y1) < l))
      if (v.length) {
        var u = (f + y) / 2, a = (s + o) / 2;
        d.push(
          new S(v[3], u, a, y, o),
          new S(v[2], f, a, u, o),
          new S(v[1], u, s, y, a),
          new S(v[0], f, s, u, a)
        ), (h = (n >= a) << 1 | e >= u) && (w = d[d.length - 1], d[d.length - 1] = d[d.length - 1 - h], d[d.length - 1 - h] = w);
      } else {
        var _ = e - +this._x.call(null, v.data), p = n - +this._y.call(null, v.data), x = _ * _ + p * p;
        if (x < r) {
          var k = Math.sqrt(r = x);
          i = e - k, l = n - k, c = e + k, g = n + k, t = v.data;
        }
      }
  return t;
}
function st(e) {
  if (isNaN(c = +this._x.call(null, e)) || isNaN(g = +this._y.call(null, e)))
    return this;
  var n, r = this._root, t, i, l, f = this._x0, s = this._y0, y = this._x1, o = this._y1, c, g, d, v, w, h, u, a;
  if (!r)
    return this;
  if (r.length)
    for (; ; ) {
      if ((w = c >= (d = (f + y) / 2)) ? f = d : y = d, (h = g >= (v = (s + o) / 2)) ? s = v : o = v, n = r, !(r = r[u = h << 1 | w]))
        return this;
      if (!r.length)
        break;
      (n[u + 1 & 3] || n[u + 2 & 3] || n[u + 3 & 3]) && (t = n, a = u);
    }
  for (; r.data !== e; )
    if (i = r, !(r = r.next))
      return this;
  return (l = r.next) && delete r.next, i ? (l ? i.next = l : delete i.next, this) : n ? (l ? n[u] = l : delete n[u], (r = n[0] || n[1] || n[2] || n[3]) && r === (n[3] || n[2] || n[1] || n[0]) && !r.length && (t ? t[a] = r : this._root = r), this) : (this._root = l, this);
}
function ut(e) {
  for (var n = 0, r = e.length; n < r; ++n)
    this.remove(e[n]);
  return this;
}
function ft() {
  return this._root;
}
function ct() {
  var e = 0;
  return this.visit(function(n) {
    if (!n.length)
      do
        ++e;
      while (n = n.next);
  }), e;
}
function ht(e) {
  var n = [], r, t = this._root, i, l, f, s, y;
  for (t && n.push(new S(t, this._x0, this._y0, this._x1, this._y1)); r = n.pop(); )
    if (!e(t = r.node, l = r.x0, f = r.y0, s = r.x1, y = r.y1) && t.length) {
      var o = (l + s) / 2, c = (f + y) / 2;
      (i = t[3]) && n.push(new S(i, o, c, s, y)), (i = t[2]) && n.push(new S(i, l, c, o, y)), (i = t[1]) && n.push(new S(i, o, f, s, c)), (i = t[0]) && n.push(new S(i, l, f, o, c));
    }
  return this;
}
function vt(e) {
  var n = [], r = [], t;
  for (this._root && n.push(new S(this._root, this._x0, this._y0, this._x1, this._y1)); t = n.pop(); ) {
    var i = t.node;
    if (i.length) {
      var l, f = t.x0, s = t.y0, y = t.x1, o = t.y1, c = (f + y) / 2, g = (s + o) / 2;
      (l = i[0]) && n.push(new S(l, f, s, c, g)), (l = i[1]) && n.push(new S(l, c, s, y, g)), (l = i[2]) && n.push(new S(l, f, g, c, o)), (l = i[3]) && n.push(new S(l, c, g, y, o));
    }
    r.push(t);
  }
  for (; t = r.pop(); )
    e(t.node, t.x0, t.y0, t.x1, t.y1);
  return this;
}
function gt(e) {
  return e[0];
}
function yt(e) {
  return arguments.length ? (this._x = e, this) : this._x;
}
function dt(e) {
  return e[1];
}
function _t(e) {
  return arguments.length ? (this._y = e, this) : this._y;
}
function re(e, n, r) {
  var t = new ie(n ?? gt, r ?? dt, NaN, NaN, NaN, NaN);
  return e == null ? t : t.addAll(e);
}
function ie(e, n, r, t, i, l) {
  this._x = e, this._y = n, this._x0 = r, this._y0 = t, this._x1 = i, this._y1 = l, this._root = void 0;
}
function be(e) {
  for (var n = { data: e.data }, r = n; e = e.next; )
    r = r.next = { data: e.data };
  return n;
}
var C = re.prototype = ie.prototype;
C.copy = function() {
  var e = new ie(this._x, this._y, this._x0, this._y0, this._x1, this._y1), n = this._root, r, t;
  if (!n)
    return e;
  if (!n.length)
    return e._root = be(n), e;
  for (r = [{ source: n, target: e._root = new Array(4) }]; n = r.pop(); )
    for (var i = 0; i < 4; ++i)
      (t = n.source[i]) && (t.length ? r.push({ source: t, target: n.target[i] = new Array(4) }) : n.target[i] = be(t));
  return e;
};
C.add = nt;
C.addAll = rt;
C.cover = it;
C.data = ot;
C.extent = at;
C.find = lt;
C.remove = st;
C.removeAll = ut;
C.root = ft;
C.size = ct;
C.visit = ht;
C.visitAfter = vt;
C.x = yt;
C.y = _t;
function T(e) {
  return function() {
    return e;
  };
}
function B(e) {
  return (e() - 0.5) * 1e-6;
}
function xt(e) {
  return e.x + e.vx;
}
function wt(e) {
  return e.y + e.vy;
}
function pt(e) {
  var n, r, t, i = 1, l = 1;
  typeof e != "function" && (e = T(e == null ? 1 : +e));
  function f() {
    for (var o, c = n.length, g, d, v, w, h, u, a = 0; a < l; ++a)
      for (g = re(n, xt, wt).visitAfter(s), o = 0; o < c; ++o)
        d = n[o], h = r[d.index], u = h * h, v = d.x + d.vx, w = d.y + d.vy, g.visit(_);
    function _(p, x, k, M, E) {
      var N = p.data, D = p.r, A = h + D;
      if (N) {
        if (N.index > d.index) {
          var z = v - N.x - N.vx, L = w - N.y - N.vy, b = z * z + L * L;
          b < A * A && (z === 0 && (z = B(t), b += z * z), L === 0 && (L = B(t), b += L * L), b = (A - (b = Math.sqrt(b))) / b * i, d.vx += (z *= b) * (A = (D *= D) / (u + D)), d.vy += (L *= b) * A, N.vx -= z * (A = 1 - A), N.vy -= L * A);
        }
        return;
      }
      return x > v + A || M < v - A || k > w + A || E < w - A;
    }
  }
  function s(o) {
    if (o.data)
      return o.r = r[o.data.index];
    for (var c = o.r = 0; c < 4; ++c)
      o[c] && o[c].r > o.r && (o.r = o[c].r);
  }
  function y() {
    if (n) {
      var o, c = n.length, g;
      for (r = new Array(c), o = 0; o < c; ++o)
        g = n[o], r[g.index] = +e(g, o, n);
    }
  }
  return f.initialize = function(o, c) {
    n = o, t = c, y();
  }, f.iterations = function(o) {
    return arguments.length ? (l = +o, f) : l;
  }, f.strength = function(o) {
    return arguments.length ? (i = +o, f) : i;
  }, f.radius = function(o) {
    return arguments.length ? (e = typeof o == "function" ? o : T(+o), y(), f) : e;
  }, f;
}
function mt(e) {
  return e.index;
}
function ze(e, n) {
  var r = e.get(n);
  if (!r)
    throw new Error("node not found: " + n);
  return r;
}
function kt(e) {
  var n = mt, r = g, t, i = T(30), l, f, s, y, o, c = 1;
  e == null && (e = []);
  function g(u) {
    return 1 / Math.min(s[u.source.index], s[u.target.index]);
  }
  function d(u) {
    for (var a = 0, _ = e.length; a < c; ++a)
      for (var p = 0, x, k, M, E, N, D, A; p < _; ++p)
        x = e[p], k = x.source, M = x.target, E = M.x + M.vx - k.x - k.vx || B(o), N = M.y + M.vy - k.y - k.vy || B(o), D = Math.sqrt(E * E + N * N), D = (D - l[p]) / D * u * t[p], E *= D, N *= D, M.vx -= E * (A = y[p]), M.vy -= N * A, k.vx += E * (A = 1 - A), k.vy += N * A;
  }
  function v() {
    if (f) {
      var u, a = f.length, _ = e.length, p = new Map(f.map((k, M) => [n(k, M, f), k])), x;
      for (u = 0, s = new Array(a); u < _; ++u)
        x = e[u], x.index = u, typeof x.source != "object" && (x.source = ze(p, x.source)), typeof x.target != "object" && (x.target = ze(p, x.target)), s[x.source.index] = (s[x.source.index] || 0) + 1, s[x.target.index] = (s[x.target.index] || 0) + 1;
      for (u = 0, y = new Array(_); u < _; ++u)
        x = e[u], y[u] = s[x.source.index] / (s[x.source.index] + s[x.target.index]);
      t = new Array(_), w(), l = new Array(_), h();
    }
  }
  function w() {
    if (f)
      for (var u = 0, a = e.length; u < a; ++u)
        t[u] = +r(e[u], u, e);
  }
  function h() {
    if (f)
      for (var u = 0, a = e.length; u < a; ++u)
        l[u] = +i(e[u], u, e);
  }
  return d.initialize = function(u, a) {
    f = u, o = a, v();
  }, d.links = function(u) {
    return arguments.length ? (e = u, v(), d) : e;
  }, d.id = function(u) {
    return arguments.length ? (n = u, d) : n;
  }, d.iterations = function(u) {
    return arguments.length ? (c = +u, d) : c;
  }, d.strength = function(u) {
    return arguments.length ? (r = typeof u == "function" ? u : T(+u), w(), d) : r;
  }, d.distance = function(u) {
    return arguments.length ? (i = typeof u == "function" ? u : T(+u), h(), d) : i;
  }, d;
}
var Nt = { value: () => {
} };
function Xe() {
  for (var e = 0, n = arguments.length, r = {}, t; e < n; ++e) {
    if (!(t = arguments[e] + "") || t in r || /[\s.]/.test(t))
      throw new Error("illegal type: " + t);
    r[t] = [];
  }
  return new O(r);
}
function O(e) {
  this._ = e;
}
function At(e, n) {
  return e.trim().split(/^|\s+/).map(function(r) {
    var t = "", i = r.indexOf(".");
    if (i >= 0 && (t = r.slice(i + 1), r = r.slice(0, i)), r && !n.hasOwnProperty(r))
      throw new Error("unknown type: " + r);
    return { type: r, name: t };
  });
}
O.prototype = Xe.prototype = {
  constructor: O,
  on: function(e, n) {
    var r = this._, t = At(e + "", r), i, l = -1, f = t.length;
    if (arguments.length < 2) {
      for (; ++l < f; )
        if ((i = (e = t[l]).type) && (i = Mt(r[i], e.name)))
          return i;
      return;
    }
    if (n != null && typeof n != "function")
      throw new Error("invalid callback: " + n);
    for (; ++l < f; )
      if (i = (e = t[l]).type)
        r[i] = Le(r[i], e.name, n);
      else if (n == null)
        for (i in r)
          r[i] = Le(r[i], e.name, null);
    return this;
  },
  copy: function() {
    var e = {}, n = this._;
    for (var r in n)
      e[r] = n[r].slice();
    return new O(e);
  },
  call: function(e, n) {
    if ((i = arguments.length - 2) > 0)
      for (var r = new Array(i), t = 0, i, l; t < i; ++t)
        r[t] = arguments[t + 2];
    if (!this._.hasOwnProperty(e))
      throw new Error("unknown type: " + e);
    for (l = this._[e], t = 0, i = l.length; t < i; ++t)
      l[t].value.apply(n, r);
  },
  apply: function(e, n, r) {
    if (!this._.hasOwnProperty(e))
      throw new Error("unknown type: " + e);
    for (var t = this._[e], i = 0, l = t.length; i < l; ++i)
      t[i].value.apply(n, r);
  }
};
function Mt(e, n) {
  for (var r = 0, t = e.length, i; r < t; ++r)
    if ((i = e[r]).name === n)
      return i.value;
}
function Le(e, n, r) {
  for (var t = 0, i = e.length; t < i; ++t)
    if (e[t].name === n) {
      e[t] = Nt, e = e.slice(0, t).concat(e.slice(t + 1));
      break;
    }
  return r != null && e.push({ name: n, value: r }), e;
}
var Y = 0, X = 0, W = 0, He = 1e3, V, H, K = 0, P = 0, Z = 0, U = typeof performance == "object" && performance.now ? performance : Date, Ue = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function Ge() {
  return P || (Ue(Et), P = U.now() + Z);
}
function Et() {
  P = 0;
}
function te() {
  this._call = this._time = this._next = null;
}
te.prototype = Oe.prototype = {
  constructor: te,
  restart: function(e, n, r) {
    if (typeof e != "function")
      throw new TypeError("callback is not a function");
    r = (r == null ? Ge() : +r) + (n == null ? 0 : +n), !this._next && H !== this && (H ? H._next = this : V = this, H = this), this._call = e, this._time = r, ne();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, ne());
  }
};
function Oe(e, n, r) {
  var t = new te();
  return t.restart(e, n, r), t;
}
function St() {
  Ge(), ++Y;
  for (var e = V, n; e; )
    (n = P - e._time) >= 0 && e._call.call(void 0, n), e = e._next;
  --Y;
}
function $e() {
  P = (K = U.now()) + Z, Y = X = 0;
  try {
    St();
  } finally {
    Y = 0, Ct(), P = 0;
  }
}
function Tt() {
  var e = U.now(), n = e - K;
  n > He && (Z -= n, K = e);
}
function Ct() {
  for (var e, n = V, r, t = 1 / 0; n; )
    n._call ? (t > n._time && (t = n._time), e = n, n = n._next) : (r = n._next, n._next = null, n = e ? e._next = r : V = r);
  H = e, ne(t);
}
function ne(e) {
  if (!Y) {
    X && (X = clearTimeout(X));
    var n = e - P;
    n > 24 ? (e < 1 / 0 && (X = setTimeout($e, e - U.now() - Z)), W && (W = clearInterval(W))) : (W || (K = U.now(), W = setInterval(Tt, He)), Y = 1, Ue($e));
  }
}
const Dt = 1664525, Rt = 1013904223, Ie = 4294967296;
function bt() {
  let e = 1;
  return () => (e = (Dt * e + Rt) % Ie) / Ie;
}
function zt(e) {
  return e.x;
}
function Lt(e) {
  return e.y;
}
var $t = 10, It = Math.PI * (3 - Math.sqrt(5));
function Be(e) {
  var n, r = 1, t = 1e-3, i = 1 - Math.pow(t, 1 / 300), l = 0, f = 0.6, s = /* @__PURE__ */ new Map(), y = Oe(g), o = Xe("tick", "end"), c = bt();
  e == null && (e = []);
  function g() {
    d(), o.call("tick", n), r < t && (y.stop(), o.call("end", n));
  }
  function d(h) {
    var u, a = e.length, _;
    h === void 0 && (h = 1);
    for (var p = 0; p < h; ++p)
      for (r += (l - r) * i, s.forEach(function(x) {
        x(r);
      }), u = 0; u < a; ++u)
        _ = e[u], _.fx == null ? _.x += _.vx *= f : (_.x = _.fx, _.vx = 0), _.fy == null ? _.y += _.vy *= f : (_.y = _.fy, _.vy = 0);
    return n;
  }
  function v() {
    for (var h = 0, u = e.length, a; h < u; ++h) {
      if (a = e[h], a.index = h, a.fx != null && (a.x = a.fx), a.fy != null && (a.y = a.fy), isNaN(a.x) || isNaN(a.y)) {
        var _ = $t * Math.sqrt(0.5 + h), p = h * It;
        a.x = _ * Math.cos(p), a.y = _ * Math.sin(p);
      }
      (isNaN(a.vx) || isNaN(a.vy)) && (a.vx = a.vy = 0);
    }
  }
  function w(h) {
    return h.initialize && h.initialize(e, c), h;
  }
  return v(), n = {
    tick: d,
    restart: function() {
      return y.restart(g), n;
    },
    stop: function() {
      return y.stop(), n;
    },
    nodes: function(h) {
      return arguments.length ? (e = h, v(), s.forEach(w), n) : e;
    },
    alpha: function(h) {
      return arguments.length ? (r = +h, n) : r;
    },
    alphaMin: function(h) {
      return arguments.length ? (t = +h, n) : t;
    },
    alphaDecay: function(h) {
      return arguments.length ? (i = +h, n) : +i;
    },
    alphaTarget: function(h) {
      return arguments.length ? (l = +h, n) : l;
    },
    velocityDecay: function(h) {
      return arguments.length ? (f = 1 - h, n) : 1 - f;
    },
    randomSource: function(h) {
      return arguments.length ? (c = h, s.forEach(w), n) : c;
    },
    force: function(h, u) {
      return arguments.length > 1 ? (u == null ? s.delete(h) : s.set(h, w(u)), n) : s.get(h);
    },
    find: function(h, u, a) {
      var _ = 0, p = e.length, x, k, M, E, N;
      for (a == null ? a = 1 / 0 : a *= a, _ = 0; _ < p; ++_)
        E = e[_], x = h - E.x, k = u - E.y, M = x * x + k * k, M < a && (N = E, a = M);
      return N;
    },
    on: function(h, u) {
      return arguments.length > 1 ? (o.on(h, u), n) : o.on(h);
    }
  };
}
function Bt() {
  var e, n, r, t, i = T(-30), l, f = 1, s = 1 / 0, y = 0.81;
  function o(v) {
    var w, h = e.length, u = re(e, zt, Lt).visitAfter(g);
    for (t = v, w = 0; w < h; ++w)
      n = e[w], u.visit(d);
  }
  function c() {
    if (e) {
      var v, w = e.length, h;
      for (l = new Array(w), v = 0; v < w; ++v)
        h = e[v], l[h.index] = +i(h, v, e);
    }
  }
  function g(v) {
    var w = 0, h, u, a = 0, _, p, x;
    if (v.length) {
      for (_ = p = x = 0; x < 4; ++x)
        (h = v[x]) && (u = Math.abs(h.value)) && (w += h.value, a += u, _ += u * h.x, p += u * h.y);
      v.x = _ / a, v.y = p / a;
    } else {
      h = v, h.x = h.data.x, h.y = h.data.y;
      do
        w += l[h.data.index];
      while (h = h.next);
    }
    v.value = w;
  }
  function d(v, w, h, u) {
    if (!v.value)
      return !0;
    var a = v.x - n.x, _ = v.y - n.y, p = u - w, x = a * a + _ * _;
    if (p * p / y < x)
      return x < s && (a === 0 && (a = B(r), x += a * a), _ === 0 && (_ = B(r), x += _ * _), x < f && (x = Math.sqrt(f * x)), n.vx += a * v.value * t / x, n.vy += _ * v.value * t / x), !0;
    if (v.length || x >= s)
      return;
    (v.data !== n || v.next) && (a === 0 && (a = B(r), x += a * a), _ === 0 && (_ = B(r), x += _ * _), x < f && (x = Math.sqrt(f * x)));
    do
      v.data !== n && (p = l[v.data.index] * t / x, n.vx += a * p, n.vy += _ * p);
    while (v = v.next);
  }
  return o.initialize = function(v, w) {
    e = v, r = w, c();
  }, o.strength = function(v) {
    return arguments.length ? (i = typeof v == "function" ? v : T(+v), c(), o) : i;
  }, o.distanceMin = function(v) {
    return arguments.length ? (f = v * v, o) : Math.sqrt(f);
  }, o.distanceMax = function(v) {
    return arguments.length ? (s = v * v, o) : Math.sqrt(s);
  }, o.theta = function(v) {
    return arguments.length ? (y = v * v, o) : Math.sqrt(y);
  }, o;
}
function Ft(e) {
  var n = T(0.1), r, t, i;
  typeof e != "function" && (e = T(e == null ? 0 : +e));
  function l(s) {
    for (var y = 0, o = r.length, c; y < o; ++y)
      c = r[y], c.vx += (i[y] - c.x) * t[y] * s;
  }
  function f() {
    if (r) {
      var s, y = r.length;
      for (t = new Array(y), i = new Array(y), s = 0; s < y; ++s)
        t[s] = isNaN(i[s] = +e(r[s], s, r)) ? 0 : +n(r[s], s, r);
    }
  }
  return l.initialize = function(s) {
    r = s, f();
  }, l.strength = function(s) {
    return arguments.length ? (n = typeof s == "function" ? s : T(+s), f(), l) : n;
  }, l.x = function(s) {
    return arguments.length ? (e = typeof s == "function" ? s : T(+s), f(), l) : e;
  }, l;
}
function Pt(e) {
  var n = T(0.1), r, t, i;
  typeof e != "function" && (e = T(e == null ? 0 : +e));
  function l(s) {
    for (var y = 0, o = r.length, c; y < o; ++y)
      c = r[y], c.vy += (i[y] - c.y) * t[y] * s;
  }
  function f() {
    if (r) {
      var s, y = r.length;
      for (t = new Array(y), i = new Array(y), s = 0; s < y; ++s)
        t[s] = isNaN(i[s] = +e(r[s], s, r)) ? 0 : +n(r[s], s, r);
    }
  }
  return l.initialize = function(s) {
    r = s, f();
  }, l.strength = function(s) {
    return arguments.length ? (n = typeof s == "function" ? s : T(+s), f(), l) : n;
  }, l.y = function(s) {
    return arguments.length ? (e = typeof s == "function" ? s : T(+s), f(), l) : e;
  }, l;
}
function Yt(e) {
  const n = (o) => o || e.value, r = (o) => o.width || e.value, t = (o) => o.height || o.size || e.value, i = (o) => o.color ? "fill: " + o.color : "", l = (o, c, g) => c || g ? ["node", "pinned"] : ["node"];
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
      cssClass: l(o.cssClass, void 0, void 0),
      r: o.innerSVG ? void 0 : n(o.size) / 2
    }),
    getClass: l,
    getSize: n,
    getX: (o, c) => (o || 0) - (c || 0) / 2,
    getY: (o, c) => (o || 0) - (c || 0) / 2
  };
}
const Fe = "arrow-start", Pe = "arrow-end";
function Wt(e, n, r) {
  const t = (o) => o.color ? {
    stroke: o.color
  } : {}, i = (o) => ["link"], l = (o) => r.value && o.twoWay ? `url(#${Fe})` : void 0, f = (o) => r.value ? `url(#${Pe})` : void 0, s = Q(() => ({
    arrowStart: {
      id: Fe,
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
      id: Pe,
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
    getMarkerEnd: f,
    getMarkerStart: l,
    getSimulationLink: (o) => ({
      source: o.source,
      target: o.target,
      id: o.id,
      key: o.id,
      class: i(o.id),
      style: t(o),
      "stroke-width": e.value,
      "marker-end": f(),
      "marker-start": l(o)
    }),
    markers: s
  };
}
const Xt = "X", Ht = "Y", Ut = "charge", Gt = "link", Ot = "collide", je = 0.01, Ve = 0.1, jt = Math.log(je) / Math.log(1 - Ve);
function Vt(e, n, r, t) {
  const { getNode: i } = Yt(t.nodeSize), { getSimulationLink: l } = Wt(
    t.linkWidth,
    t.nodeSize,
    t.directed
  ), f = Ye({
    nodes: [],
    links: []
  }), s = () => {
    console.debug("useSimulation.init"), f.nodes = e.value.map((g) => i(g)), f.links = n.value.map((g) => l(g)), y();
  }, y = async () => {
    console.debug("useSimulation.refresh"), c.value.stop(), c.value = o(), t.static.value ? c.value.tick(jt) : c.value.restart();
  }, o = () => {
    const g = Be().alphaMin(je).alphaDecay(Ve).nodes(f.nodes);
    return g.force(
      Xt,
      Ft(r.value.width / 2).strength(t.forceXStrength.value)
    ), g.force(
      Ht,
      Pt(r.value.height / 2).strength(t.forceYStrength.value)
    ), g.force(
      Ut,
      Bt().strength(t.forcManyBodyStrength.value)
    ), g.force(
      Ot,
      pt(t.forceCollideStrength.value)
    ), g.force(
      Gt,
      kt(f.links).id((d) => {
        if (!("id" in d))
          throw new Error("Node id is undefined");
        return d.id;
      })
    ), g;
  }, c = j(
    Be()
  );
  return Ce(
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
  ), Ce(t.static, async () => y(), {
    deep: !0,
    debounce: 100,
    maxWait: 1e3
  }), {
    simulation: c,
    graph: f
  };
}
const Kt = 0.1, Qt = 0.1, Zt = -300, Jt = 25, qt = 12, en = 2, tn = 45, nn = (e) => {
  const n = Q(() => {
    var t, i, l, f, s, y, o, c, g, d, v, w, h, u, a, _, p, x, k, M, E, N, D, A, z, L, b, oe, ae, le, se, ue, fe, ce, he, ve, ge, ye, de, _e, xe, we, pe, me, ke, Ne, Ae, Me;
    return {
      node: {
        stroke: ((l = (i = (t = e.value) == null ? void 0 : t.nodes) == null ? void 0 : i.colors) == null ? void 0 : l.stroke) || "#E2EB98",
        fill: ((y = (s = (f = e.value) == null ? void 0 : f.nodes) == null ? void 0 : s.colors) == null ? void 0 : y.fill) || "#93A392",
        selected: {
          stroke: ((d = (g = (c = (o = e.value) == null ? void 0 : o.nodes) == null ? void 0 : c.colors) == null ? void 0 : g.selected) == null ? void 0 : d.stroke) || "#9DC4B5",
          fill: (u = (h = (w = (v = e.value) == null ? void 0 : v.nodes) == null ? void 0 : w.colors) == null ? void 0 : h.selected) == null ? void 0 : u.fill
        },
        hover: {
          stroke: "#9DC4B5",
          fill: (x = (p = (_ = (a = e.value) == null ? void 0 : a.nodes) == null ? void 0 : _.colors) == null ? void 0 : p.hover) == null ? void 0 : x.fill
        },
        pinned: {
          stroke: "#9DC4B5",
          fill: (N = (E = (M = (k = e.value) == null ? void 0 : k.nodes) == null ? void 0 : M.colors) == null ? void 0 : E.pinned) == null ? void 0 : N.fill
        },
        label: {
          fill: ((L = (z = (A = (D = e.value) == null ? void 0 : D.nodes) == null ? void 0 : A.colors) == null ? void 0 : z.label) == null ? void 0 : L.fill) || "#93A392"
        }
      },
      link: {
        stroke: ((ae = (oe = (b = e.value) == null ? void 0 : b.links) == null ? void 0 : oe.colors) == null ? void 0 : ae.stroke) || "#BAD9A2",
        fill: (ue = (se = (le = e.value) == null ? void 0 : le.links) == null ? void 0 : se.colors) == null ? void 0 : ue.fill,
        selected: {
          stroke: ((ve = (he = (ce = (fe = e.value) == null ? void 0 : fe.links) == null ? void 0 : ce.colors) == null ? void 0 : he.selected) == null ? void 0 : ve.stroke) || "#9DC4B5",
          fill: (_e = (de = (ye = (ge = e.value) == null ? void 0 : ge.links) == null ? void 0 : ye.colors) == null ? void 0 : de.selected) == null ? void 0 : _e.fill
        },
        hover: {
          stroke: "#9DC4B5",
          fill: (me = (pe = (we = (xe = e.value) == null ? void 0 : xe.links) == null ? void 0 : we.colors) == null ? void 0 : pe.hover) == null ? void 0 : me.fill
        },
        label: {
          fill: ((Me = (Ae = (Ne = (ke = e.value) == null ? void 0 : ke.links) == null ? void 0 : Ne.colors) == null ? void 0 : Ae.label) == null ? void 0 : Me.fill) || "#93A392"
        }
      }
    };
  });
  return {
    options: {
      static: R(() => {
        var t, i;
        return ((i = (t = e.value) == null ? void 0 : t.simulation) == null ? void 0 : i.static) || !1;
      }),
      forceXStrength: R(
        () => {
          var t, i;
          return ((i = (t = e.value) == null ? void 0 : t.simulation) == null ? void 0 : i.force.x) || Kt;
        }
      ),
      forceYStrength: R(
        () => {
          var t, i;
          return ((i = (t = e.value) == null ? void 0 : t.simulation) == null ? void 0 : i.force.y) || Qt;
        }
      ),
      forcManyBodyStrength: R(
        () => {
          var t, i;
          return ((i = (t = e.value) == null ? void 0 : t.simulation) == null ? void 0 : i.force.charge) || Zt;
        }
      ),
      forceCollideStrength: R(
        () => {
          var t, i;
          return ((i = (t = e.value) == null ? void 0 : t.simulation) == null ? void 0 : i.force.collide) || tn;
        }
      ),
      nodeSize: R(() => {
        var t, i;
        return ((i = (t = e.value) == null ? void 0 : t.nodes) == null ? void 0 : i.size) || Jt;
      }),
      nodeFontSize: R(
        () => {
          var t, i, l;
          return ((l = (i = (t = e.value) == null ? void 0 : t.nodes) == null ? void 0 : i.font) == null ? void 0 : l.size) || qt;
        }
      ),
      linkWidth: R(() => {
        var t, i;
        return ((i = (t = e.value) == null ? void 0 : t.links) == null ? void 0 : i.width) || en;
      }),
      draggables: R(() => {
        var t, i;
        return ((i = (t = e.value) == null ? void 0 : t.layout) == null ? void 0 : i.draggables) || !1;
      }),
      directed: R(() => {
        var t, i;
        return ((i = (t = e.value) == null ? void 0 : t.layout) == null ? void 0 : i.directed) || !1;
      })
    },
    theme: n
  };
}, rn = (e, n) => ({
  label: Q(() => ({
    font: { size: e.value },
    offset: {
      x: n.value / 2 + e.value / 2,
      y: e.value / 2
    }
  }))
}), on = ["viewBox"], an = { key: 0 }, ln = ["fill"], sn = ["fill"], un = {
  id: "l-links",
  class: "links"
}, fn = ["id", "d", "stroke-width", "marker-end", "marker-start", "onClick", "onTouchstartPassive"], cn = {
  id: "l-nodes",
  class: "nodes"
}, hn = ["viewBox", "width", "height", "x", "y", "title", "onClick", "onTouchendPassive", "onMousedown", "onTouchstartPassive", "innerHTML"], vn = ["cx", "cy", "r", "title", "onClick", "onTouchendPassive", "onMousedown", "onTouchstartPassive"], gn = ["x", "y", "font-size", "stroke-width"], _n = /* @__PURE__ */ Ke({
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
    Qe((h) => ({
      "047c58d8": m(t).node.stroke,
      e521ffba: m(t).node.fill,
      19743914: m(t).node.selected.stroke || m(t).node.stroke,
      efb0e518: m(t).node.selected.fill || m(t).node.fill,
      "222f165e": m(t).node.pinned.stroke || m(t).node.stroke,
      "183da09e": m(t).node.pinned.fill || m(t).node.fill,
      "3f1c9a16": m(t).node.hover.stroke || m(t).node.stroke,
      "37e71fd5": m(t).node.hover.fill || m(t).node.fill,
      "5aedafe0": m(t).link.stroke,
      "10da792b": m(t).link.fill,
      "7c9a3843": m(t).link.selected.stroke,
      "47c3be4e": m(t).link.selected.fill,
      e7f9bc6c: m(t).node.hover.stroke,
      "7d975d95": m(t).node.hover.fill,
      e8ede436: m(t).link.label.fill,
      "0b2a7add": m(t).node.label.fill
    }));
    const { theme: t, options: i } = nn(R(() => r.options)), l = j(null), f = j({ width: 100, height: 100 });
    qe(l, (h) => {
      const u = h[0];
      u.contentRect.width === f.value.width && u.contentRect.height === f.value.height || (f.value = {
        width: u.contentRect.width,
        height: u.contentRect.height
      });
    });
    const s = (h) => typeof h.source != "number" && typeof h.source != "string" && typeof h.target != "number" && typeof h.target != "string" ? `M${h.source.x} ${h.source.y} L${h.target.x} ${h.target.y}` : void 0, { simulation: y, graph: o } = Vt(
      R(() => r.nodes),
      R(() => r.links),
      f,
      i
    ), { dragStart: c, dragEnd: g, move: d } = et(
      y,
      i.draggables
    ), { label: v } = rn(i.nodeFontSize, i.nodeSize), { markers: w } = tt(
      i.linkWidth,
      i.nodeSize,
      i.directed
    );
    return (h, u) => ($(), I("svg", {
      ref_key: "svg",
      ref: l,
      xmlns: "http://www.w3.org/2000/svg",
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      preserveAspectRatio: "xMinYMin",
      viewBox: `0 0 ${f.value.width} ${f.value.height}`,
      class: "svg-container",
      onMouseup: u[0] || (u[0] = //@ts-ignore
      (...a) => m(g) && m(g)(...a)),
      onTouchendPassive: u[1] || (u[1] = //@ts-ignore
      (...a) => m(g) && m(g)(...a)),
      onTouchstartPassive: u[2] || (u[2] = async () => {
      }),
      onMousemove: u[3] || (u[3] = //@ts-ignore
      (...a) => m(d) && m(d)(...a))
    }, [
      m(i).directed ? ($(), I("defs", an, [
        F("marker", Ee(Se(m(w).arrowEnd)), [
          F("path", {
            fill: m(t).link.stroke,
            d: "M0 -5 L 10 0 L 0 5"
          }, null, 8, ln)
        ], 16),
        F("marker", Ee(Se(m(w).arrowStart)), [
          F("path", {
            fill: m(t).link.stroke,
            d: "M 10 5 L 0 0 L 10 -5"
          }, null, 8, sn)
        ], 16)
      ])) : Ze("", !0),
      F("g", un, [
        ($(!0), I(J, null, Te(m(o).links, (a) => ($(), I("path", {
          id: a.id,
          key: a.id,
          d: s(a),
          "stroke-width": a["stroke-width"],
          class: q(a.class),
          style: ee(a.style),
          "marker-end": a["marker-end"],
          "marker-start": a["marker-start"],
          onClick: (_) => n("link-click", _, a),
          onTouchstartPassive: (_) => n("link-click", _, a)
        }, null, 46, fn))), 128))
      ]),
      F("g", cn, [
        ($(!0), I(J, null, Te(m(o).nodes, (a, _) => ($(), I(J, { key: _ }, [
          a.innerSVG ? ($(), I("svg", {
            key: 0,
            viewBox: a.innerSVG.viewBox,
            width: a.width,
            height: a.height,
            x: (a.x || 0) - (a.width || 0) / 2,
            y: (a.y || 0) - (a.height || 0) / 2,
            style: ee(a.style),
            title: a.name,
            class: q(a.cssClass),
            onClick: (p) => n("node-click", p, a),
            onTouchendPassive: (p) => n("node-click", p, a),
            onMousedown: G((p) => m(c)(p, _), ["prevent"]),
            onTouchstartPassive: G((p) => m(c)(p, _), ["prevent"]),
            innerHTML: a.innerSVG.innerHtml
          }, null, 46, hn)) : ($(), I("circle", {
            key: 1,
            cx: a.x,
            cy: a.y,
            r: a.r,
            style: ee(a.style),
            title: a.name,
            class: q(a.cssClass),
            onClick: (p) => h.$emit("node-click", p, a),
            onTouchendPassive: (p) => h.$emit("node-click", p, a),
            onMousedown: G((p) => m(c)(p, _), ["prevent"]),
            onTouchstartPassive: G((p) => m(c)(p, _), ["prevent"])
          }, null, 46, vn)),
          F("text", {
            class: "node-label",
            x: (a.x || 0) + (a.width || 0) / 2 + m(v).font.size / 2,
            y: (a.y || 0) + m(v).offset.y,
            "font-size": m(v).font.size,
            "stroke-width": m(v).font.size / 8
          }, Je(a.name), 9, gn)
        ], 64))), 128))
      ])
    ], 40, on));
  }
});
export {
  _n as D3NetworkGraph,
  Vt as useSimulation
};
