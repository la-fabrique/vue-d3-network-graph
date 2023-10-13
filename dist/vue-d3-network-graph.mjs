import { ref as K, reactive as Pt, computed as q, toRef as $, defineComponent as Vt, useCssVars as Qt, unref as M, openBlock as X, createElementBlock as W, withModifiers as U, createElementVNode as P, normalizeProps as Et, guardReactiveProps as Tt, createCommentVNode as Zt, Fragment as nt, renderList as bt, normalizeClass as st, normalizeStyle as lt, toDisplayString as Ct } from "vue";
import { watchDebounced as zt, useResizeObserver as Jt } from "@vueuse/core";
function qt(t, n) {
  const r = K(void 0), e = Pt({
    x: 0,
    y: 0
  }), o = (u) => {
    let h, d = 0;
    return u instanceof MouseEvent ? (h = u.clientX, d = u.clientY) : u instanceof TouchEvent && (h = u.touches[0].clientX, d = u.touches[0].clientY), { x: h || 0, y: d || 0 };
  }, a = (u, h) => n.value ? (() => {
    r.value = h, l(u, t.value.nodes()[h]);
  })() : void 0, l = (u, h) => {
    let d = 0, g = 0;
    if (u && h && (h != null && h.x) && (h != null && h.y)) {
      const x = o(u);
      d = x.x ? x.x - h.x : h.x, g = x.y ? x.y - h.y : h.y;
    }
    e.x = d, e.y = g;
  }, s = () => {
    if (r.value !== void 0) {
      const u = t.value.nodes()[r.value];
      u.fx = null, u.fy = null, f();
    }
  }, f = () => {
    r.value = void 0, t.value.alpha(0.1), t.value.restart(), l();
  };
  return {
    dragStart: a,
    dragEnd: s,
    dragMove: (u) => {
      const h = o(u);
      r.value != null && t.value.nodes()[r.value] && (t.value.restart(), t.value.alpha(0.5), t.value.nodes()[r.value].fx = h.x - e.x, t.value.nodes()[r.value].fy = h.y - e.y);
    }
  };
}
const Dt = "arrow-start", Rt = "arrow-end";
function te(t, n, r) {
  const e = (l) => r.value && l.twoWay ? `url(#${Dt})` : void 0, o = (l) => r.value ? `url(#${Rt})` : void 0, a = q(() => ({
    arrowStart: {
      id: Dt,
      refX: -(n.value / 2 - t.value),
      refY: 0,
      viewBox: `0 -${5 * t.value} ${10 * t.value} ${10 * t.value}`,
      orient: "auto",
      markerWidth: 10 + t.value,
      markerHeight: 10 + t.value,
      "stroke-width": "1",
      "marker-units": "userSpaceOnUse"
    },
    arrowEnd: {
      id: Rt,
      refX: n.value / 2 + (10 - t.value),
      refY: 0,
      viewBox: `0 -${5 * t.value} ${10 * t.value} ${10 * t.value}`,
      orient: "auto",
      markerWidth: 10 + t.value,
      markerHeight: 10 + t.value,
      "marker-units": "userSpaceOnUse"
    }
  }));
  return {
    getMarkerEnd: o,
    getMarkerStart: e,
    markers: a
  };
}
function ee(t) {
  const n = +this._x.call(null, t), r = +this._y.call(null, t);
  return Xt(this.cover(n, r), n, r, t);
}
function Xt(t, n, r, e) {
  if (isNaN(n) || isNaN(r))
    return t;
  var o, a = t._root, l = { data: e }, s = t._x0, f = t._y0, i = t._x1, u = t._y1, h, d, g, x, v, c, y, _;
  if (!a)
    return t._root = l, t;
  for (; a.length; )
    if ((v = n >= (h = (s + i) / 2)) ? s = h : i = h, (c = r >= (d = (f + u) / 2)) ? f = d : u = d, o = a, !(a = a[y = c << 1 | v]))
      return o[y] = l, t;
  if (g = +t._x.call(null, a.data), x = +t._y.call(null, a.data), n === g && r === x)
    return l.next = a, o ? o[y] = l : t._root = l, t;
  do
    o = o ? o[y] = new Array(4) : t._root = new Array(4), (v = n >= (h = (s + i) / 2)) ? s = h : i = h, (c = r >= (d = (f + u) / 2)) ? f = d : u = d;
  while ((y = c << 1 | v) === (_ = (x >= d) << 1 | g >= h));
  return o[_] = a, o[y] = l, t;
}
function ne(t) {
  var n, r, e = t.length, o, a, l = new Array(e), s = new Array(e), f = 1 / 0, i = 1 / 0, u = -1 / 0, h = -1 / 0;
  for (r = 0; r < e; ++r)
    isNaN(o = +this._x.call(null, n = t[r])) || isNaN(a = +this._y.call(null, n)) || (l[r] = o, s[r] = a, o < f && (f = o), o > u && (u = o), a < i && (i = a), a > h && (h = a));
  if (f > u || i > h)
    return this;
  for (this.cover(f, i).cover(u, h), r = 0; r < e; ++r)
    Xt(this, l[r], s[r], t[r]);
  return this;
}
function re(t, n) {
  if (isNaN(t = +t) || isNaN(n = +n))
    return this;
  var r = this._x0, e = this._y0, o = this._x1, a = this._y1;
  if (isNaN(r))
    o = (r = Math.floor(t)) + 1, a = (e = Math.floor(n)) + 1;
  else {
    for (var l = o - r || 1, s = this._root, f, i; r > t || t >= o || e > n || n >= a; )
      switch (i = (n < e) << 1 | t < r, f = new Array(4), f[i] = s, s = f, l *= 2, i) {
        case 0:
          o = r + l, a = e + l;
          break;
        case 1:
          r = o - l, a = e + l;
          break;
        case 2:
          o = r + l, e = a - l;
          break;
        case 3:
          r = o - l, e = a - l;
          break;
      }
    this._root && this._root.length && (this._root = s);
  }
  return this._x0 = r, this._y0 = e, this._x1 = o, this._y1 = a, this;
}
function oe() {
  var t = [];
  return this.visit(function(n) {
    if (!n.length)
      do
        t.push(n.data);
      while (n = n.next);
  }), t;
}
function ie(t) {
  return arguments.length ? this.cover(+t[0][0], +t[0][1]).cover(+t[1][0], +t[1][1]) : isNaN(this._x0) ? void 0 : [[this._x0, this._y0], [this._x1, this._y1]];
}
function L(t, n, r, e, o) {
  this.node = t, this.x0 = n, this.y0 = r, this.x1 = e, this.y1 = o;
}
function ae(t, n, r) {
  var e, o = this._x0, a = this._y0, l, s, f, i, u = this._x1, h = this._y1, d = [], g = this._root, x, v;
  for (g && d.push(new L(g, o, a, u, h)), r == null ? r = 1 / 0 : (o = t - r, a = n - r, u = t + r, h = n + r, r *= r); x = d.pop(); )
    if (!(!(g = x.node) || (l = x.x0) > u || (s = x.y0) > h || (f = x.x1) < o || (i = x.y1) < a))
      if (g.length) {
        var c = (l + f) / 2, y = (s + i) / 2;
        d.push(
          new L(g[3], c, y, f, i),
          new L(g[2], l, y, c, i),
          new L(g[1], c, s, f, y),
          new L(g[0], l, s, c, y)
        ), (v = (n >= y) << 1 | t >= c) && (x = d[d.length - 1], d[d.length - 1] = d[d.length - 1 - v], d[d.length - 1 - v] = x);
      } else {
        var _ = t - +this._x.call(null, g.data), m = n - +this._y.call(null, g.data), w = _ * _ + m * m;
        if (w < r) {
          var N = Math.sqrt(r = w);
          o = t - N, a = n - N, u = t + N, h = n + N, e = g.data;
        }
      }
  return e;
}
function se(t) {
  if (isNaN(u = +this._x.call(null, t)) || isNaN(h = +this._y.call(null, t)))
    return this;
  var n, r = this._root, e, o, a, l = this._x0, s = this._y0, f = this._x1, i = this._y1, u, h, d, g, x, v, c, y;
  if (!r)
    return this;
  if (r.length)
    for (; ; ) {
      if ((x = u >= (d = (l + f) / 2)) ? l = d : f = d, (v = h >= (g = (s + i) / 2)) ? s = g : i = g, n = r, !(r = r[c = v << 1 | x]))
        return this;
      if (!r.length)
        break;
      (n[c + 1 & 3] || n[c + 2 & 3] || n[c + 3 & 3]) && (e = n, y = c);
    }
  for (; r.data !== t; )
    if (o = r, !(r = r.next))
      return this;
  return (a = r.next) && delete r.next, o ? (a ? o.next = a : delete o.next, this) : n ? (a ? n[c] = a : delete n[c], (r = n[0] || n[1] || n[2] || n[3]) && r === (n[3] || n[2] || n[1] || n[0]) && !r.length && (e ? e[y] = r : this._root = r), this) : (this._root = a, this);
}
function le(t) {
  for (var n = 0, r = t.length; n < r; ++n)
    this.remove(t[n]);
  return this;
}
function ue() {
  return this._root;
}
function ce() {
  var t = 0;
  return this.visit(function(n) {
    if (!n.length)
      do
        ++t;
      while (n = n.next);
  }), t;
}
function fe(t) {
  var n = [], r, e = this._root, o, a, l, s, f;
  for (e && n.push(new L(e, this._x0, this._y0, this._x1, this._y1)); r = n.pop(); )
    if (!t(e = r.node, a = r.x0, l = r.y0, s = r.x1, f = r.y1) && e.length) {
      var i = (a + s) / 2, u = (l + f) / 2;
      (o = e[3]) && n.push(new L(o, i, u, s, f)), (o = e[2]) && n.push(new L(o, a, u, i, f)), (o = e[1]) && n.push(new L(o, i, l, s, u)), (o = e[0]) && n.push(new L(o, a, l, i, u));
    }
  return this;
}
function he(t) {
  var n = [], r = [], e;
  for (this._root && n.push(new L(this._root, this._x0, this._y0, this._x1, this._y1)); e = n.pop(); ) {
    var o = e.node;
    if (o.length) {
      var a, l = e.x0, s = e.y0, f = e.x1, i = e.y1, u = (l + f) / 2, h = (s + i) / 2;
      (a = o[0]) && n.push(new L(a, l, s, u, h)), (a = o[1]) && n.push(new L(a, u, s, f, h)), (a = o[2]) && n.push(new L(a, l, h, u, i)), (a = o[3]) && n.push(new L(a, u, h, f, i));
    }
    r.push(e);
  }
  for (; e = r.pop(); )
    t(e.node, e.x0, e.y0, e.x1, e.y1);
  return this;
}
function ve(t) {
  return t[0];
}
function ge(t) {
  return arguments.length ? (this._x = t, this) : this._x;
}
function ye(t) {
  return t[1];
}
function de(t) {
  return arguments.length ? (this._y = t, this) : this._y;
}
function ft(t, n, r) {
  var e = new ht(n ?? ve, r ?? ye, NaN, NaN, NaN, NaN);
  return t == null ? e : e.addAll(t);
}
function ht(t, n, r, e, o, a) {
  this._x = t, this._y = n, this._x0 = r, this._y0 = e, this._x1 = o, this._y1 = a, this._root = void 0;
}
function Lt(t) {
  for (var n = { data: t.data }, r = n; t = t.next; )
    r = r.next = { data: t.data };
  return n;
}
var I = ft.prototype = ht.prototype;
I.copy = function() {
  var t = new ht(this._x, this._y, this._x0, this._y0, this._x1, this._y1), n = this._root, r, e;
  if (!n)
    return t;
  if (!n.length)
    return t._root = Lt(n), t;
  for (r = [{ source: n, target: t._root = new Array(4) }]; n = r.pop(); )
    for (var o = 0; o < 4; ++o)
      (e = n.source[o]) && (e.length ? r.push({ source: e, target: n.target[o] = new Array(4) }) : n.target[o] = Lt(e));
  return t;
};
I.add = ee;
I.addAll = ne;
I.cover = re;
I.data = oe;
I.extent = ie;
I.find = ae;
I.remove = se;
I.removeAll = le;
I.root = ue;
I.size = ce;
I.visit = fe;
I.visitAfter = he;
I.x = ge;
I.y = de;
function F(t) {
  return function() {
    return t;
  };
}
function H(t) {
  return (t() - 0.5) * 1e-6;
}
function xe(t) {
  return t.x + t.vx;
}
function _e(t) {
  return t.y + t.vy;
}
function we(t) {
  var n, r, e, o = 1, a = 1;
  typeof t != "function" && (t = F(t == null ? 1 : +t));
  function l() {
    for (var i, u = n.length, h, d, g, x, v, c, y = 0; y < a; ++y)
      for (h = ft(n, xe, _e).visitAfter(s), i = 0; i < u; ++i)
        d = n[i], v = r[d.index], c = v * v, g = d.x + d.vx, x = d.y + d.vy, h.visit(_);
    function _(m, w, N, T, b) {
      var A = m.data, D = m.r, S = v + D;
      if (A) {
        if (A.index > d.index) {
          var B = g - A.x - A.vx, Y = x - A.y - A.vy, R = B * B + Y * Y;
          R < S * S && (B === 0 && (B = H(e), R += B * B), Y === 0 && (Y = H(e), R += Y * Y), R = (S - (R = Math.sqrt(R))) / R * o, d.vx += (B *= R) * (S = (D *= D) / (c + D)), d.vy += (Y *= R) * S, A.vx -= B * (S = 1 - S), A.vy -= Y * S);
        }
        return;
      }
      return w > g + S || T < g - S || N > x + S || b < x - S;
    }
  }
  function s(i) {
    if (i.data)
      return i.r = r[i.data.index];
    for (var u = i.r = 0; u < 4; ++u)
      i[u] && i[u].r > i.r && (i.r = i[u].r);
  }
  function f() {
    if (n) {
      var i, u = n.length, h;
      for (r = new Array(u), i = 0; i < u; ++i)
        h = n[i], r[h.index] = +t(h, i, n);
    }
  }
  return l.initialize = function(i, u) {
    n = i, e = u, f();
  }, l.iterations = function(i) {
    return arguments.length ? (a = +i, l) : a;
  }, l.strength = function(i) {
    return arguments.length ? (o = +i, l) : o;
  }, l.radius = function(i) {
    return arguments.length ? (t = typeof i == "function" ? i : F(+i), f(), l) : t;
  }, l;
}
function pe(t) {
  return t.index;
}
function Ft(t, n) {
  var r = t.get(n);
  if (!r)
    throw new Error("node not found: " + n);
  return r;
}
function me(t) {
  var n = pe, r = h, e, o = F(30), a, l, s, f, i, u = 1;
  t == null && (t = []);
  function h(c) {
    return 1 / Math.min(s[c.source.index], s[c.target.index]);
  }
  function d(c) {
    for (var y = 0, _ = t.length; y < u; ++y)
      for (var m = 0, w, N, T, b, A, D, S; m < _; ++m)
        w = t[m], N = w.source, T = w.target, b = T.x + T.vx - N.x - N.vx || H(i), A = T.y + T.vy - N.y - N.vy || H(i), D = Math.sqrt(b * b + A * A), D = (D - a[m]) / D * c * e[m], b *= D, A *= D, T.vx -= b * (S = f[m]), T.vy -= A * S, N.vx += b * (S = 1 - S), N.vy += A * S;
  }
  function g() {
    if (l) {
      var c, y = l.length, _ = t.length, m = new Map(l.map((N, T) => [n(N, T, l), N])), w;
      for (c = 0, s = new Array(y); c < _; ++c)
        w = t[c], w.index = c, typeof w.source != "object" && (w.source = Ft(m, w.source)), typeof w.target != "object" && (w.target = Ft(m, w.target)), s[w.source.index] = (s[w.source.index] || 0) + 1, s[w.target.index] = (s[w.target.index] || 0) + 1;
      for (c = 0, f = new Array(_); c < _; ++c)
        w = t[c], f[c] = s[w.source.index] / (s[w.source.index] + s[w.target.index]);
      e = new Array(_), x(), a = new Array(_), v();
    }
  }
  function x() {
    if (l)
      for (var c = 0, y = t.length; c < y; ++c)
        e[c] = +r(t[c], c, t);
  }
  function v() {
    if (l)
      for (var c = 0, y = t.length; c < y; ++c)
        a[c] = +o(t[c], c, t);
  }
  return d.initialize = function(c, y) {
    l = c, i = y, g();
  }, d.links = function(c) {
    return arguments.length ? (t = c, g(), d) : t;
  }, d.id = function(c) {
    return arguments.length ? (n = c, d) : n;
  }, d.iterations = function(c) {
    return arguments.length ? (u = +c, d) : u;
  }, d.strength = function(c) {
    return arguments.length ? (r = typeof c == "function" ? c : F(+c), x(), d) : r;
  }, d.distance = function(c) {
    return arguments.length ? (o = typeof c == "function" ? c : F(+c), v(), d) : o;
  }, d;
}
var Me = { value: () => {
} };
function Wt() {
  for (var t = 0, n = arguments.length, r = {}, e; t < n; ++t) {
    if (!(e = arguments[t] + "") || e in r || /[\s.]/.test(e))
      throw new Error("illegal type: " + e);
    r[e] = [];
  }
  return new rt(r);
}
function rt(t) {
  this._ = t;
}
function ke(t, n) {
  return t.trim().split(/^|\s+/).map(function(r) {
    var e = "", o = r.indexOf(".");
    if (o >= 0 && (e = r.slice(o + 1), r = r.slice(0, o)), r && !n.hasOwnProperty(r))
      throw new Error("unknown type: " + r);
    return { type: r, name: e };
  });
}
rt.prototype = Wt.prototype = {
  constructor: rt,
  on: function(t, n) {
    var r = this._, e = ke(t + "", r), o, a = -1, l = e.length;
    if (arguments.length < 2) {
      for (; ++a < l; )
        if ((o = (t = e[a]).type) && (o = Ne(r[o], t.name)))
          return o;
      return;
    }
    if (n != null && typeof n != "function")
      throw new Error("invalid callback: " + n);
    for (; ++a < l; )
      if (o = (t = e[a]).type)
        r[o] = It(r[o], t.name, n);
      else if (n == null)
        for (o in r)
          r[o] = It(r[o], t.name, null);
    return this;
  },
  copy: function() {
    var t = {}, n = this._;
    for (var r in n)
      t[r] = n[r].slice();
    return new rt(t);
  },
  call: function(t, n) {
    if ((o = arguments.length - 2) > 0)
      for (var r = new Array(o), e = 0, o, a; e < o; ++e)
        r[e] = arguments[e + 2];
    if (!this._.hasOwnProperty(t))
      throw new Error("unknown type: " + t);
    for (a = this._[t], e = 0, o = a.length; e < o; ++e)
      a[e].value.apply(n, r);
  },
  apply: function(t, n, r) {
    if (!this._.hasOwnProperty(t))
      throw new Error("unknown type: " + t);
    for (var e = this._[t], o = 0, a = e.length; o < a; ++o)
      e[o].value.apply(n, r);
  }
};
function Ne(t, n) {
  for (var r = 0, e = t.length, o; r < e; ++r)
    if ((o = t[r]).name === n)
      return o.value;
}
function It(t, n, r) {
  for (var e = 0, o = t.length; e < o; ++e)
    if (t[e].name === n) {
      t[e] = Me, t = t.slice(0, e).concat(t.slice(e + 1));
      break;
    }
  return r != null && t.push({ name: n, value: r }), t;
}
var O = 0, Q = 0, V = 0, Ht = 1e3, ot, Z, it = 0, G = 0, at = 0, J = typeof performance == "object" && performance.now ? performance : Date, Gt = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function Ut() {
  return G || (Gt(Ae), G = J.now() + at);
}
function Ae() {
  G = 0;
}
function ut() {
  this._call = this._time = this._next = null;
}
ut.prototype = jt.prototype = {
  constructor: ut,
  restart: function(t, n, r) {
    if (typeof t != "function")
      throw new TypeError("callback is not a function");
    r = (r == null ? Ut() : +r) + (n == null ? 0 : +n), !this._next && Z !== this && (Z ? Z._next = this : ot = this, Z = this), this._call = t, this._time = r, ct();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, ct());
  }
};
function jt(t, n, r) {
  var e = new ut();
  return e.restart(t, n, r), e;
}
function Se() {
  Ut(), ++O;
  for (var t = ot, n; t; )
    (n = G - t._time) >= 0 && t._call.call(void 0, n), t = t._next;
  --O;
}
function $t() {
  G = (it = J.now()) + at, O = Q = 0;
  try {
    Se();
  } finally {
    O = 0, Te(), G = 0;
  }
}
function Ee() {
  var t = J.now(), n = t - it;
  n > Ht && (at -= n, it = t);
}
function Te() {
  for (var t, n = ot, r, e = 1 / 0; n; )
    n._call ? (e > n._time && (e = n._time), t = n, n = n._next) : (r = n._next, n._next = null, n = t ? t._next = r : ot = r);
  Z = t, ct(e);
}
function ct(t) {
  if (!O) {
    Q && (Q = clearTimeout(Q));
    var n = t - G;
    n > 24 ? (t < 1 / 0 && (Q = setTimeout($t, t - J.now() - at)), V && (V = clearInterval(V))) : (V || (it = J.now(), V = setInterval(Ee, Ht)), O = 1, Gt($t));
  }
}
const be = 1664525, Ce = 1013904223, Bt = 4294967296;
function ze() {
  let t = 1;
  return () => (t = (be * t + Ce) % Bt) / Bt;
}
function De(t) {
  return t.x;
}
function Re(t) {
  return t.y;
}
var Le = 10, Fe = Math.PI * (3 - Math.sqrt(5));
function Yt(t) {
  var n, r = 1, e = 1e-3, o = 1 - Math.pow(e, 1 / 300), a = 0, l = 0.6, s = /* @__PURE__ */ new Map(), f = jt(h), i = Wt("tick", "end"), u = ze();
  t == null && (t = []);
  function h() {
    d(), i.call("tick", n), r < e && (f.stop(), i.call("end", n));
  }
  function d(v) {
    var c, y = t.length, _;
    v === void 0 && (v = 1);
    for (var m = 0; m < v; ++m)
      for (r += (a - r) * o, s.forEach(function(w) {
        w(r);
      }), c = 0; c < y; ++c)
        _ = t[c], _.fx == null ? _.x += _.vx *= l : (_.x = _.fx, _.vx = 0), _.fy == null ? _.y += _.vy *= l : (_.y = _.fy, _.vy = 0);
    return n;
  }
  function g() {
    for (var v = 0, c = t.length, y; v < c; ++v) {
      if (y = t[v], y.index = v, y.fx != null && (y.x = y.fx), y.fy != null && (y.y = y.fy), isNaN(y.x) || isNaN(y.y)) {
        var _ = Le * Math.sqrt(0.5 + v), m = v * Fe;
        y.x = _ * Math.cos(m), y.y = _ * Math.sin(m);
      }
      (isNaN(y.vx) || isNaN(y.vy)) && (y.vx = y.vy = 0);
    }
  }
  function x(v) {
    return v.initialize && v.initialize(t, u), v;
  }
  return g(), n = {
    tick: d,
    restart: function() {
      return f.restart(h), n;
    },
    stop: function() {
      return f.stop(), n;
    },
    nodes: function(v) {
      return arguments.length ? (t = v, g(), s.forEach(x), n) : t;
    },
    alpha: function(v) {
      return arguments.length ? (r = +v, n) : r;
    },
    alphaMin: function(v) {
      return arguments.length ? (e = +v, n) : e;
    },
    alphaDecay: function(v) {
      return arguments.length ? (o = +v, n) : +o;
    },
    alphaTarget: function(v) {
      return arguments.length ? (a = +v, n) : a;
    },
    velocityDecay: function(v) {
      return arguments.length ? (l = 1 - v, n) : 1 - l;
    },
    randomSource: function(v) {
      return arguments.length ? (u = v, s.forEach(x), n) : u;
    },
    force: function(v, c) {
      return arguments.length > 1 ? (c == null ? s.delete(v) : s.set(v, x(c)), n) : s.get(v);
    },
    find: function(v, c, y) {
      var _ = 0, m = t.length, w, N, T, b, A;
      for (y == null ? y = 1 / 0 : y *= y, _ = 0; _ < m; ++_)
        b = t[_], w = v - b.x, N = c - b.y, T = w * w + N * N, T < y && (A = b, y = T);
      return A;
    },
    on: function(v, c) {
      return arguments.length > 1 ? (i.on(v, c), n) : i.on(v);
    }
  };
}
function Ie() {
  var t, n, r, e, o = F(-30), a, l = 1, s = 1 / 0, f = 0.81;
  function i(g) {
    var x, v = t.length, c = ft(t, De, Re).visitAfter(h);
    for (e = g, x = 0; x < v; ++x)
      n = t[x], c.visit(d);
  }
  function u() {
    if (t) {
      var g, x = t.length, v;
      for (a = new Array(x), g = 0; g < x; ++g)
        v = t[g], a[v.index] = +o(v, g, t);
    }
  }
  function h(g) {
    var x = 0, v, c, y = 0, _, m, w;
    if (g.length) {
      for (_ = m = w = 0; w < 4; ++w)
        (v = g[w]) && (c = Math.abs(v.value)) && (x += v.value, y += c, _ += c * v.x, m += c * v.y);
      g.x = _ / y, g.y = m / y;
    } else {
      v = g, v.x = v.data.x, v.y = v.data.y;
      do
        x += a[v.data.index];
      while (v = v.next);
    }
    g.value = x;
  }
  function d(g, x, v, c) {
    if (!g.value)
      return !0;
    var y = g.x - n.x, _ = g.y - n.y, m = c - x, w = y * y + _ * _;
    if (m * m / f < w)
      return w < s && (y === 0 && (y = H(r), w += y * y), _ === 0 && (_ = H(r), w += _ * _), w < l && (w = Math.sqrt(l * w)), n.vx += y * g.value * e / w, n.vy += _ * g.value * e / w), !0;
    if (g.length || w >= s)
      return;
    (g.data !== n || g.next) && (y === 0 && (y = H(r), w += y * y), _ === 0 && (_ = H(r), w += _ * _), w < l && (w = Math.sqrt(l * w)));
    do
      g.data !== n && (m = a[g.data.index] * e / w, n.vx += y * m, n.vy += _ * m);
    while (g = g.next);
  }
  return i.initialize = function(g, x) {
    t = g, r = x, u();
  }, i.strength = function(g) {
    return arguments.length ? (o = typeof g == "function" ? g : F(+g), u(), i) : o;
  }, i.distanceMin = function(g) {
    return arguments.length ? (l = g * g, i) : Math.sqrt(l);
  }, i.distanceMax = function(g) {
    return arguments.length ? (s = g * g, i) : Math.sqrt(s);
  }, i.theta = function(g) {
    return arguments.length ? (f = g * g, i) : Math.sqrt(f);
  }, i;
}
function $e(t) {
  var n = F(0.1), r, e, o;
  typeof t != "function" && (t = F(t == null ? 0 : +t));
  function a(s) {
    for (var f = 0, i = r.length, u; f < i; ++f)
      u = r[f], u.vx += (o[f] - u.x) * e[f] * s;
  }
  function l() {
    if (r) {
      var s, f = r.length;
      for (e = new Array(f), o = new Array(f), s = 0; s < f; ++s)
        e[s] = isNaN(o[s] = +t(r[s], s, r)) ? 0 : +n(r[s], s, r);
    }
  }
  return a.initialize = function(s) {
    r = s, l();
  }, a.strength = function(s) {
    return arguments.length ? (n = typeof s == "function" ? s : F(+s), l(), a) : n;
  }, a.x = function(s) {
    return arguments.length ? (t = typeof s == "function" ? s : F(+s), l(), a) : t;
  }, a;
}
function Be(t) {
  var n = F(0.1), r, e, o;
  typeof t != "function" && (t = F(t == null ? 0 : +t));
  function a(s) {
    for (var f = 0, i = r.length, u; f < i; ++f)
      u = r[f], u.vy += (o[f] - u.y) * e[f] * s;
  }
  function l() {
    if (r) {
      var s, f = r.length;
      for (e = new Array(f), o = new Array(f), s = 0; s < f; ++s)
        e[s] = isNaN(o[s] = +t(r[s], s, r)) ? 0 : +n(r[s], s, r);
    }
  }
  return a.initialize = function(s) {
    r = s, l();
  }, a.strength = function(s) {
    return arguments.length ? (n = typeof s == "function" ? s : F(+s), l(), a) : n;
  }, a.y = function(s) {
    return arguments.length ? (t = typeof s == "function" ? s : F(+s), l(), a) : t;
  }, a;
}
function Ye(t) {
  const n = (i) => i || t.value, r = (i) => i.width || t.value, e = (i) => i.height || i.size || t.value, o = (i) => i.color ? "fill: " + i.color : "", a = (i, u) => i || u ? ["node", "pinned"] : ["node"];
  return {
    getNode: (i, u, h) => ({
      id: i.id,
      key: i.id,
      /*  vx: defaultX,
      vy: defaultY, */
      x: u,
      y: h,
      viewBox: i.innerSVG,
      width: r(i),
      height: e(i),
      name: i.name,
      style: o(i),
      title: i.name,
      cssClass: a(),
      r: i.innerSVG ? void 0 : n(i.size) / 2
    }),
    getClass: a,
    getSize: n,
    getX: (i, u) => (i || 0) - (u || 0) / 2,
    getY: (i, u) => (i || 0) - (u || 0) / 2
  };
}
const Pe = "arrow-start", Xe = "arrow-end";
function We(t, n, r) {
  const e = (f) => f.color ? {
    stroke: f.color
  } : void 0, o = (f) => ["link"], a = (f) => r.value && f.twoWay ? `url(#${Pe})` : void 0, l = (f) => r.value ? `url(#${Xe})` : void 0;
  return {
    getClass: o,
    getStyle: e,
    getMarkerEnd: l,
    getMarkerStart: a,
    getSimulationLink: (f) => ({
      source: f.source,
      target: f.target,
      name: f.name,
      class: o(f.id),
      style: e(f),
      "stroke-width": t.value,
      "marker-end": l(),
      "marker-start": a(f)
    })
  };
}
const He = "X", Ge = "Y", Ue = "charge", je = "link", Ke = "collide", Kt = 0.01, Ot = 0.1, Oe = Math.log(Kt) / Math.log(1 - Ot);
function Ve(t, n, r, e) {
  const { getNode: o } = Ye(e.nodeSize), { getSimulationLink: a } = We(
    e.linkWidth,
    e.nodeSize,
    e.directed
  ), l = Pt({
    nodes: [],
    links: []
  }), s = () => {
    l.nodes = t.value.map((h) => o(h)), l.links = n.value.map((h) => a(h)), f();
  }, f = async () => {
    u.value.stop(), u.value = i(), e.static.value ? u.value.tick(Oe) : u.value.restart();
  }, i = () => {
    const h = Yt().alphaMin(Kt).alphaDecay(Ot).nodes(l.nodes);
    return h.force(
      He,
      $e(r.value.width / 2).strength(e.forceXStrength.value)
    ), h.force(
      Ge,
      Be(r.value.height / 2).strength(e.forceYStrength.value)
    ), h.force(
      Ue,
      Ie().strength(e.forcManyBodyStrength.value)
    ), h.force(
      Ke,
      we(e.forceCollideStrength.value)
    ), h.force(
      je,
      me(l.links).id((d) => {
        if (!("id" in d))
          throw new Error("Node id is undefined");
        return d.id;
      })
    ), h;
  }, u = K(
    Yt()
  );
  return zt(
    [
      () => t.value.length,
      () => n.value.length,
      r,
      e.nodeSize,
      e.linkWidth,
      e.forcManyBodyStrength,
      e.forceXStrength,
      e.forceYStrength,
      e.forceCollideStrength,
      e.directed
    ],
    async () => s(),
    { debounce: 100, maxWait: 1e3 }
  ), zt(e.static, async () => f(), {
    deep: !0,
    debounce: 100,
    maxWait: 1e3
  }), {
    simulation: u,
    graph: l
  };
}
const Qe = 0.1, Ze = 0.1, Je = -300, qe = 25, tn = 12, en = 2, nn = 45, rn = (t) => {
  const n = q(() => {
    var e, o, a, l, s, f, i, u, h, d, g, x, v, c, y, _, m, w, N, T, b, A, D, S, B, Y, R, tt, et, k, z, p, C, E, vt, gt, yt, dt, xt, _t, wt, pt, mt, Mt, kt, Nt, At, St;
    return {
      node: {
        stroke: ((a = (o = (e = t.value) == null ? void 0 : e.nodes) == null ? void 0 : o.colors) == null ? void 0 : a.stroke) || "#E2EB98",
        fill: ((f = (s = (l = t.value) == null ? void 0 : l.nodes) == null ? void 0 : s.colors) == null ? void 0 : f.fill) || "#93A392",
        selected: {
          stroke: ((d = (h = (u = (i = t.value) == null ? void 0 : i.nodes) == null ? void 0 : u.colors) == null ? void 0 : h.selected) == null ? void 0 : d.stroke) || "#9DC4B5",
          fill: (c = (v = (x = (g = t.value) == null ? void 0 : g.nodes) == null ? void 0 : x.colors) == null ? void 0 : v.selected) == null ? void 0 : c.fill
        },
        hover: {
          stroke: "#9DC4B5",
          fill: (w = (m = (_ = (y = t.value) == null ? void 0 : y.nodes) == null ? void 0 : _.colors) == null ? void 0 : m.hover) == null ? void 0 : w.fill
        },
        pinned: {
          stroke: "#9DC4B5",
          fill: (A = (b = (T = (N = t.value) == null ? void 0 : N.nodes) == null ? void 0 : T.colors) == null ? void 0 : b.pinned) == null ? void 0 : A.fill
        },
        label: {
          fill: ((Y = (B = (S = (D = t.value) == null ? void 0 : D.nodes) == null ? void 0 : S.colors) == null ? void 0 : B.label) == null ? void 0 : Y.fill) || "#93A392"
        }
      },
      link: {
        stroke: ((et = (tt = (R = t.value) == null ? void 0 : R.links) == null ? void 0 : tt.colors) == null ? void 0 : et.stroke) || "#BAD9A2",
        fill: (p = (z = (k = t.value) == null ? void 0 : k.links) == null ? void 0 : z.colors) == null ? void 0 : p.fill,
        selected: {
          stroke: ((gt = (vt = (E = (C = t.value) == null ? void 0 : C.links) == null ? void 0 : E.colors) == null ? void 0 : vt.selected) == null ? void 0 : gt.stroke) || "#9DC4B5",
          fill: (_t = (xt = (dt = (yt = t.value) == null ? void 0 : yt.links) == null ? void 0 : dt.colors) == null ? void 0 : xt.selected) == null ? void 0 : _t.fill
        },
        hover: {
          stroke: "#9DC4B5",
          fill: (Mt = (mt = (pt = (wt = t.value) == null ? void 0 : wt.links) == null ? void 0 : pt.colors) == null ? void 0 : mt.hover) == null ? void 0 : Mt.fill
        },
        label: {
          fill: ((St = (At = (Nt = (kt = t.value) == null ? void 0 : kt.links) == null ? void 0 : Nt.colors) == null ? void 0 : At.label) == null ? void 0 : St.fill) || "#93A392"
        }
      }
    };
  });
  return {
    options: {
      static: $(() => {
        var e, o;
        return ((o = (e = t.value) == null ? void 0 : e.simulation) == null ? void 0 : o.static) || !1;
      }),
      forceXStrength: $(
        () => {
          var e, o;
          return ((o = (e = t.value) == null ? void 0 : e.simulation) == null ? void 0 : o.force.x) || Qe;
        }
      ),
      forceYStrength: $(
        () => {
          var e, o;
          return ((o = (e = t.value) == null ? void 0 : e.simulation) == null ? void 0 : o.force.y) || Ze;
        }
      ),
      forcManyBodyStrength: $(
        () => {
          var e, o;
          return ((o = (e = t.value) == null ? void 0 : e.simulation) == null ? void 0 : o.force.charge) || Je;
        }
      ),
      forceCollideStrength: $(
        () => {
          var e, o;
          return ((o = (e = t.value) == null ? void 0 : e.simulation) == null ? void 0 : o.force.collide) || nn;
        }
      ),
      nodeSize: $(() => {
        var e, o;
        return ((o = (e = t.value) == null ? void 0 : e.nodes) == null ? void 0 : o.size) || qe;
      }),
      nodeFontSize: $(
        () => {
          var e, o, a;
          return ((a = (o = (e = t.value) == null ? void 0 : e.nodes) == null ? void 0 : o.font) == null ? void 0 : a.size) || tn;
        }
      ),
      linkWidth: $(() => {
        var e, o;
        return ((o = (e = t.value) == null ? void 0 : e.links) == null ? void 0 : o.width) || en;
      }),
      linkFontSize: $(() => {
        var e, o, a;
        return ((a = (o = (e = t.value) == null ? void 0 : e.links) == null ? void 0 : o.font) == null ? void 0 : a.size) || 12;
      }),
      draggables: $(() => {
        var e, o;
        return ((o = (e = t.value) == null ? void 0 : e.layout) == null ? void 0 : o.draggables) || !1;
      }),
      directed: $(() => {
        var e, o;
        return ((o = (e = t.value) == null ? void 0 : e.layout) == null ? void 0 : o.directed) || !1;
      })
    },
    theme: n
  };
}, on = (t, n) => ({
  label: q(() => ({
    font: { size: t.value },
    offset: {
      x: n.value / 2 + t.value / 2,
      y: t.value / 2
    }
  }))
}), j = (t) => !!t && typeof t != "number" && typeof t != "string", an = (t) => ({
  label: q(() => ({
    font: { size: t.value }
  })),
  getX: (o) => j(o.source) && j(o.target) && o.source.x && o.target.x ? o.target.x > o.source.x ? o.source.x + (o.target.x - o.source.x) / 2 : o.target.x + (o.source.x - o.target.x) / 2 : void 0,
  getY: (o) => j(o.source) && j(o.target) && o.source.y && o.target.y ? o.target.y > o.source.y ? o.source.y + (o.target.y - o.source.y) / 2 : o.target.y + (o.source.y - o.target.y) / 2 : void 0
}), sn = (t) => {
  const n = K({
    Sx: 1,
    Qx: 0,
    Qy: 0,
    Sy: 1,
    Tx: 0,
    Ty: 0
  }), r = q(
    () => `matrix(${n.value.Sx},${n.value.Qx},${n.value.Qy},${n.value.Sy},${n.value.Tx},${n.value.Ty})`
  ), e = { x: 0, y: 0 }, o = (h) => h >= 0.5 && h <= 4, a = () => e.x !== 0 && e.y !== 0, l = (h, d, g, x) => ({ x: h - x, y: d - g });
  return { transform: r, zoom: (h, d, g) => {
    const x = n.value.Sx + g;
    if (!o(x))
      return;
    const v = l(
      h,
      d,
      t.value.top,
      t.value.left
    );
    n.value.Tx = x / n.value.Sx * (n.value.Tx - v.x) + v.x, n.value.Ty = x / n.value.Sx * (n.value.Ty - v.y) + v.y, n.value.Sx = x, n.value.Sy = x;
  }, panMove: (h, d) => {
    if (!a())
      return;
    const g = h - e.x, x = d - e.y;
    n.value.Tx += g, n.value.Ty += x, e.x = h, e.y = d;
  }, panStart: (h, d) => {
    e.x = h, e.y = d;
  }, panEnd: () => {
    e.x = 0, e.y = 0;
  } };
}, ln = ["viewBox", "onMousedown", "onWheel"], un = { key: 0 }, cn = ["fill"], fn = ["fill"], hn = ["transform"], vn = { class: "links" }, gn = ["id", "d", "stroke-width", "marker-end", "marker-start", "onClick", "onTouchstartPassive"], yn = ["font-size", "x", "y"], dn = {
  id: "l-nodes",
  class: "nodes"
}, xn = ["viewBox", "width", "height", "x", "y", "title", "onClick", "onTouchendPassive", "onMousedown", "onTouchstartPassive", "innerHTML"], _n = ["cx", "cy", "r", "title", "onClick", "onTouchendPassive", "onMousedown", "onTouchstartPassive"], wn = ["x", "y", "font-size"], Mn = /* @__PURE__ */ Vt({
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
  setup(t, { emit: n }) {
    const r = t;
    Qt((k) => ({
      "1a59dbe0": M(e).node.stroke,
      "553cb5aa": M(e).node.fill,
      "1450be1c": M(e).node.selected.stroke || M(e).node.stroke,
      "19dfd67c": M(e).node.selected.fill || M(e).node.fill,
      "189ac84e": M(e).node.pinned.stroke || M(e).node.stroke,
      "5ba81ab9": M(e).node.pinned.fill || M(e).node.fill,
      f47aea26: M(e).node.hover.stroke || M(e).node.stroke,
      f4da9866: M(e).node.hover.fill || M(e).node.fill,
      "70cb32e8": M(e).link.stroke,
      "58cd1e33": M(e).link.fill,
      "32e8c38a": M(e).link.selected.stroke,
      "6f737b74": M(e).link.selected.fill,
      "7fa43ed2": M(e).node.hover.stroke,
      d927c6c6: M(e).node.hover.fill,
      bd446626: M(e).link.label.fill,
      "20ff39e5": M(e).node.label.fill
    }));
    const { theme: e, options: o } = rn($(() => r.options)), a = K(null), l = K(null), s = K({ width: 100, height: 100, top: 0, left: 0 }), { transform: f, zoom: i, panMove: u, panStart: h, panEnd: d } = sn(s);
    Jt(a, (k) => {
      const z = k[0];
      if (z.contentRect.width === s.value.width && z.contentRect.height === s.value.height)
        return;
      const p = z.target.getBoundingClientRect();
      s.value = {
        top: p.top,
        left: p.left,
        width: z.contentRect.width,
        height: z.contentRect.height
      };
    });
    const g = (k) => j(k.source) && j(k.target) ? `M${k.source.x} ${k.source.y} L${k.target.x} ${k.target.y}` : void 0, { simulation: x, graph: v } = Ve(
      $(() => r.nodes),
      $(() => r.links),
      s,
      o
    ), { dragStart: c, dragEnd: y, dragMove: _ } = qt(
      x,
      o.draggables
    ), { label: m } = on(
      o.nodeFontSize,
      o.nodeSize
    ), {
      label: w,
      getX: N,
      getY: T
    } = an(o.linkFontSize), { markers: b } = te(
      o.linkWidth,
      o.nodeSize,
      o.directed
    ), A = (k, z, p) => {
      n("node-click", k, r.nodes[p]);
    }, D = (k, z, p) => {
      n("link-click", k, r.links[p]);
    }, S = async (k) => {
      if (!k.ctrlKey || !l.value)
        return;
      const z = k.deltaY || k.deltaX, p = Math.abs(z) < 50 ? 0.05 : 0.25, C = z < 0 ? p : -p;
      i(k.clientX, k.clientY, C);
    }, B = (k) => {
      _(k), u(k.clientX, k.clientY);
    }, Y = (k) => {
      h(k.clientX, k.clientY);
    }, R = (k, z) => c(k, z), tt = () => {
      y(), d();
    }, et = () => y();
    return (k, z) => (X(), W("svg", {
      ref_key: "svg",
      ref: a,
      xmlns: "http://www.w3.org/2000/svg",
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      preserveAspectRatio: "xMinYMin",
      viewBox: `0 0 ${s.value.width} ${s.value.height}`,
      class: "svg-container",
      onMousedown: U(Y, ["self", "prevent"]),
      onMouseup: tt,
      onTouchendPassive: et,
      onTouchstartPassive: z[0] || (z[0] = async () => {
      }),
      onMousemove: B,
      onWheel: U(S, ["prevent"])
    }, [
      M(o).directed ? (X(), W("defs", un, [
        P("marker", Et(Tt(M(b).arrowEnd)), [
          P("path", {
            fill: M(e).link.stroke,
            d: "M0 -5 L 10 0 L 0 5"
          }, null, 8, cn)
        ], 16),
        P("marker", Et(Tt(M(b).arrowStart)), [
          P("path", {
            fill: M(e).link.stroke,
            d: "M 10 5 L 0 0 L 10 -5"
          }, null, 8, fn)
        ], 16)
      ])) : Zt("", !0),
      P("g", {
        ref_key: "canvas",
        ref: l,
        class: "svg-canvas",
        transform: M(f)
      }, [
        P("g", vn, [
          (X(!0), W(nt, null, bt(M(v).links, (p, C) => (X(), W(nt, { key: C }, [
            P("path", {
              id: `${C}`,
              d: g(p),
              "stroke-width": p["stroke-width"],
              class: st(p.class),
              style: lt(p.style),
              "marker-end": p["marker-end"],
              "marker-start": p["marker-start"],
              onClick: (E) => D(E, p, C),
              onTouchstartPassive: (E) => D(E, p, C)
            }, null, 46, gn),
            P("text", {
              class: "link-label",
              "font-size": M(w).font.size,
              x: M(N)(p),
              y: M(T)(p)
            }, Ct(p.name), 9, yn)
          ], 64))), 128))
        ]),
        P("g", dn, [
          (X(!0), W(nt, null, bt(M(v).nodes, (p, C) => (X(), W(nt, { key: C }, [
            p.innerSVG ? (X(), W("svg", {
              key: 0,
              viewBox: p.innerSVG.viewBox,
              width: p.width,
              height: p.height,
              x: (p.x || 0) - (p.width || 0) / 2,
              y: (p.y || 0) - (p.height || 0) / 2,
              style: lt(p.style),
              title: p.name,
              class: st(p.cssClass),
              onClick: (E) => A(E, p, C),
              onTouchendPassive: (E) => A(E, p, C),
              onMousedown: U((E) => R(E, C), ["prevent"]),
              onTouchstartPassive: U((E) => R(E, C), ["prevent"]),
              innerHTML: p.innerSVG.innerHtml
            }, null, 46, xn)) : (X(), W("circle", {
              key: 1,
              cx: p.x,
              cy: p.y,
              r: p.r,
              style: lt(p.style),
              title: p.name,
              class: st(p.cssClass),
              onClick: (E) => A(E, p, C),
              onTouchendPassive: (E) => A(E, p, C),
              onMousedown: U((E) => R(E, C), ["prevent"]),
              onTouchstartPassive: U((E) => R(E, C), ["prevent"])
            }, null, 46, _n)),
            P("text", {
              class: "node-label",
              x: (p.x || 0) + (p.width || 0) / 2 + M(m).font.size / 2,
              y: (p.y || 0) + M(m).offset.y,
              "font-size": M(m).font.size
            }, Ct(p.name), 9, wn)
          ], 64))), 128))
        ])
      ], 8, hn)
    ], 40, ln));
  }
});
export {
  Mn as D3NetworkGraph,
  Ve as useSimulation
};
