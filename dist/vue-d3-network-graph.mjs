import { ref as O, reactive as Bt, computed as q, shallowRef as Jt, toRef as R, defineComponent as te, onMounted as ee, openBlock as I, createElementBlock as W, normalizeClass as it, withModifiers as K, unref as Y, createElementVNode as j, normalizeProps as _t, guardReactiveProps as wt, createCommentVNode as ne, Fragment as V, renderList as st, normalizeStyle as re, toDisplayString as mt } from "vue";
import { isDefined as H, watchDebounced as Mt, useResizeObserver as oe } from "@vueuse/core";
function ie(t, n) {
  const e = O(void 0), r = Bt({
    x: 0,
    y: 0
  }), o = (v) => {
    let l, u = 0;
    return v instanceof MouseEvent ? (l = v.clientX, u = v.clientY) : v instanceof TouchEvent && (l = v.touches[0].clientX, u = v.touches[0].clientY), { x: l || 0, y: u || 0 };
  }, i = (v, l) => n.value ? (() => {
    e.value = l, c(v, t.value.nodes()[l]);
  })() : void 0, c = (v, l) => {
    let u = 0, y = 0;
    if (v && l && (l != null && l.x) && (l != null && l.y)) {
      const d = o(v);
      u = d.x ? d.x - l.x : l.x, y = d.y ? d.y - l.y : l.y;
    }
    r.x = u, r.y = y;
  }, a = () => {
    e.value !== void 0 && g();
  }, g = () => {
    e.value = void 0, t.value.alpha(0.1), t.value.restart(), c();
  };
  return {
    dragStart: i,
    dragEnd: a,
    dragMove: (v) => {
      const l = o(v);
      e.value != null && t.value.nodes()[e.value] && (t.value.restart(), t.value.alpha(0.5), t.value.nodes()[e.value].fx = l.x - r.x, t.value.nodes()[e.value].fy = l.y - r.y);
    }
  };
}
const Nt = "arrow-start", St = "arrow-end";
function se(t, n, e) {
  const r = (c) => e.value && c.twoWay ? `url(#${Nt})` : void 0, o = (c) => e.value ? `url(#${St})` : void 0, i = q(() => ({
    arrowStart: {
      id: Nt,
      refX: 0,
      refY: 0,
      viewBox: "0 -5 10 10",
      orient: "auto",
      markerWidth: 10,
      markerHeight: 10
    },
    arrowEnd: {
      id: St,
      refX: 10,
      refY: 0,
      viewBox: "0 -5 10 10",
      orient: "auto",
      markerWidth: 10,
      markerHeight: 10
    }
  }));
  return {
    getMarkerEnd: o,
    getMarkerStart: r,
    markers: i
  };
}
function ae(t) {
  const n = +this._x.call(null, t), e = +this._y.call(null, t);
  return Ft(this.cover(n, e), n, e, t);
}
function Ft(t, n, e, r) {
  if (isNaN(n) || isNaN(e))
    return t;
  var o, i = t._root, c = { data: r }, a = t._x0, g = t._y0, s = t._x1, v = t._y1, l, u, y, d, f, h, x, p;
  if (!i)
    return t._root = c, t;
  for (; i.length; )
    if ((f = n >= (l = (a + s) / 2)) ? a = l : s = l, (h = e >= (u = (g + v) / 2)) ? g = u : v = u, o = i, !(i = i[x = h << 1 | f]))
      return o[x] = c, t;
  if (y = +t._x.call(null, i.data), d = +t._y.call(null, i.data), n === y && e === d)
    return c.next = i, o ? o[x] = c : t._root = c, t;
  do
    o = o ? o[x] = new Array(4) : t._root = new Array(4), (f = n >= (l = (a + s) / 2)) ? a = l : s = l, (h = e >= (u = (g + v) / 2)) ? g = u : v = u;
  while ((x = h << 1 | f) === (p = (d >= u) << 1 | y >= l));
  return o[p] = i, o[x] = c, t;
}
function ue(t) {
  var n, e, r = t.length, o, i, c = new Array(r), a = new Array(r), g = 1 / 0, s = 1 / 0, v = -1 / 0, l = -1 / 0;
  for (e = 0; e < r; ++e)
    isNaN(o = +this._x.call(null, n = t[e])) || isNaN(i = +this._y.call(null, n)) || (c[e] = o, a[e] = i, o < g && (g = o), o > v && (v = o), i < s && (s = i), i > l && (l = i));
  if (g > v || s > l)
    return this;
  for (this.cover(g, s).cover(v, l), e = 0; e < r; ++e)
    Ft(this, c[e], a[e], t[e]);
  return this;
}
function le(t, n) {
  if (isNaN(t = +t) || isNaN(n = +n))
    return this;
  var e = this._x0, r = this._y0, o = this._x1, i = this._y1;
  if (isNaN(e))
    o = (e = Math.floor(t)) + 1, i = (r = Math.floor(n)) + 1;
  else {
    for (var c = o - e || 1, a = this._root, g, s; e > t || t >= o || r > n || n >= i; )
      switch (s = (n < r) << 1 | t < e, g = new Array(4), g[s] = a, a = g, c *= 2, s) {
        case 0:
          o = e + c, i = r + c;
          break;
        case 1:
          e = o - c, i = r + c;
          break;
        case 2:
          o = e + c, r = i - c;
          break;
        case 3:
          e = o - c, r = i - c;
          break;
      }
    this._root && this._root.length && (this._root = a);
  }
  return this._x0 = e, this._y0 = r, this._x1 = o, this._y1 = i, this;
}
function ce() {
  var t = [];
  return this.visit(function(n) {
    if (!n.length)
      do
        t.push(n.data);
      while (n = n.next);
  }), t;
}
function fe(t) {
  return arguments.length ? this.cover(+t[0][0], +t[0][1]).cover(+t[1][0], +t[1][1]) : isNaN(this._x0) ? void 0 : [[this._x0, this._y0], [this._x1, this._y1]];
}
function C(t, n, e, r, o) {
  this.node = t, this.x0 = n, this.y0 = e, this.x1 = r, this.y1 = o;
}
function he(t, n, e) {
  var r, o = this._x0, i = this._y0, c, a, g, s, v = this._x1, l = this._y1, u = [], y = this._root, d, f;
  for (y && u.push(new C(y, o, i, v, l)), e == null ? e = 1 / 0 : (o = t - e, i = n - e, v = t + e, l = n + e, e *= e); d = u.pop(); )
    if (!(!(y = d.node) || (c = d.x0) > v || (a = d.y0) > l || (g = d.x1) < o || (s = d.y1) < i))
      if (y.length) {
        var h = (c + g) / 2, x = (a + s) / 2;
        u.push(
          new C(y[3], h, x, g, s),
          new C(y[2], c, x, h, s),
          new C(y[1], h, a, g, x),
          new C(y[0], c, a, h, x)
        ), (f = (n >= x) << 1 | t >= h) && (d = u[u.length - 1], u[u.length - 1] = u[u.length - 1 - f], u[u.length - 1 - f] = d);
      } else {
        var p = t - +this._x.call(null, y.data), m = n - +this._y.call(null, y.data), _ = p * p + m * m;
        if (_ < e) {
          var N = Math.sqrt(e = _);
          o = t - N, i = n - N, v = t + N, l = n + N, r = y.data;
        }
      }
  return r;
}
function ge(t) {
  if (isNaN(v = +this._x.call(null, t)) || isNaN(l = +this._y.call(null, t)))
    return this;
  var n, e = this._root, r, o, i, c = this._x0, a = this._y0, g = this._x1, s = this._y1, v, l, u, y, d, f, h, x;
  if (!e)
    return this;
  if (e.length)
    for (; ; ) {
      if ((d = v >= (u = (c + g) / 2)) ? c = u : g = u, (f = l >= (y = (a + s) / 2)) ? a = y : s = y, n = e, !(e = e[h = f << 1 | d]))
        return this;
      if (!e.length)
        break;
      (n[h + 1 & 3] || n[h + 2 & 3] || n[h + 3 & 3]) && (r = n, x = h);
    }
  for (; e.data !== t; )
    if (o = e, !(e = e.next))
      return this;
  return (i = e.next) && delete e.next, o ? (i ? o.next = i : delete o.next, this) : n ? (i ? n[h] = i : delete n[h], (e = n[0] || n[1] || n[2] || n[3]) && e === (n[3] || n[2] || n[1] || n[0]) && !e.length && (r ? r[x] = e : this._root = e), this) : (this._root = i, this);
}
function ve(t) {
  for (var n = 0, e = t.length; n < e; ++n)
    this.remove(t[n]);
  return this;
}
function ye() {
  return this._root;
}
function xe() {
  var t = 0;
  return this.visit(function(n) {
    if (!n.length)
      do
        ++t;
      while (n = n.next);
  }), t;
}
function de(t) {
  var n = [], e, r = this._root, o, i, c, a, g;
  for (r && n.push(new C(r, this._x0, this._y0, this._x1, this._y1)); e = n.pop(); )
    if (!t(r = e.node, i = e.x0, c = e.y0, a = e.x1, g = e.y1) && r.length) {
      var s = (i + a) / 2, v = (c + g) / 2;
      (o = r[3]) && n.push(new C(o, s, v, a, g)), (o = r[2]) && n.push(new C(o, i, v, s, g)), (o = r[1]) && n.push(new C(o, s, c, a, v)), (o = r[0]) && n.push(new C(o, i, c, s, v));
    }
  return this;
}
function pe(t) {
  var n = [], e = [], r;
  for (this._root && n.push(new C(this._root, this._x0, this._y0, this._x1, this._y1)); r = n.pop(); ) {
    var o = r.node;
    if (o.length) {
      var i, c = r.x0, a = r.y0, g = r.x1, s = r.y1, v = (c + g) / 2, l = (a + s) / 2;
      (i = o[0]) && n.push(new C(i, c, a, v, l)), (i = o[1]) && n.push(new C(i, v, a, g, l)), (i = o[2]) && n.push(new C(i, c, l, v, s)), (i = o[3]) && n.push(new C(i, v, l, g, s));
    }
    e.push(r);
  }
  for (; r = e.pop(); )
    t(r.node, r.x0, r.y0, r.x1, r.y1);
  return this;
}
function _e(t) {
  return t[0];
}
function we(t) {
  return arguments.length ? (this._x = t, this) : this._x;
}
function me(t) {
  return t[1];
}
function Me(t) {
  return arguments.length ? (this._y = t, this) : this._y;
}
function dt(t, n, e) {
  var r = new pt(n ?? _e, e ?? me, NaN, NaN, NaN, NaN);
  return t == null ? r : r.addAll(t);
}
function pt(t, n, e, r, o, i) {
  this._x = t, this._y = n, this._x0 = e, this._y0 = r, this._x1 = o, this._y1 = i, this._root = void 0;
}
function Et(t) {
  for (var n = { data: t.data }, e = n; t = t.next; )
    e = e.next = { data: t.data };
  return n;
}
var P = dt.prototype = pt.prototype;
P.copy = function() {
  var t = new pt(this._x, this._y, this._x0, this._y0, this._x1, this._y1), n = this._root, e, r;
  if (!n)
    return t;
  if (!n.length)
    return t._root = Et(n), t;
  for (e = [{ source: n, target: t._root = new Array(4) }]; n = e.pop(); )
    for (var o = 0; o < 4; ++o)
      (r = n.source[o]) && (r.length ? e.push({ source: r, target: n.target[o] = new Array(4) }) : n.target[o] = Et(r));
  return t;
};
P.add = ae;
P.addAll = ue;
P.cover = le;
P.data = ce;
P.extent = fe;
P.find = he;
P.remove = ge;
P.removeAll = ve;
P.root = ye;
P.size = xe;
P.visit = de;
P.visitAfter = pe;
P.x = we;
P.y = Me;
function z(t) {
  return function() {
    return t;
  };
}
function G(t) {
  return (t() - 0.5) * 1e-6;
}
function Ne(t) {
  return t.x + t.vx;
}
function Se(t) {
  return t.y + t.vy;
}
function Ee(t) {
  var n, e, r, o = 1, i = 1;
  typeof t != "function" && (t = z(t == null ? 1 : +t));
  function c() {
    for (var s, v = n.length, l, u, y, d, f, h, x = 0; x < i; ++x)
      for (l = dt(n, Ne, Se).visitAfter(a), s = 0; s < v; ++s)
        u = n[s], f = e[u.index], h = f * f, y = u.x + u.vx, d = u.y + u.vy, l.visit(p);
    function p(m, _, N, T, $) {
      var E = m.data, k = m.r, S = f + k;
      if (E) {
        if (E.index > u.index) {
          var L = y - E.x - E.vx, F = d - E.y - E.vy, D = L * L + F * F;
          D < S * S && (L === 0 && (L = G(r), D += L * L), F === 0 && (F = G(r), D += F * F), D = (S - (D = Math.sqrt(D))) / D * o, u.vx += (L *= D) * (S = (k *= k) / (h + k)), u.vy += (F *= D) * S, E.vx -= L * (S = 1 - S), E.vy -= F * S);
        }
        return;
      }
      return _ > y + S || T < y - S || N > d + S || $ < d - S;
    }
  }
  function a(s) {
    if (s.data)
      return s.r = e[s.data.index];
    for (var v = s.r = 0; v < 4; ++v)
      s[v] && s[v].r > s.r && (s.r = s[v].r);
  }
  function g() {
    if (n) {
      var s, v = n.length, l;
      for (e = new Array(v), s = 0; s < v; ++s)
        l = n[s], e[l.index] = +t(l, s, n);
    }
  }
  return c.initialize = function(s, v) {
    n = s, r = v, g();
  }, c.iterations = function(s) {
    return arguments.length ? (i = +s, c) : i;
  }, c.strength = function(s) {
    return arguments.length ? (o = +s, c) : o;
  }, c.radius = function(s) {
    return arguments.length ? (t = typeof s == "function" ? s : z(+s), g(), c) : t;
  }, c;
}
function Ae(t) {
  return t.index;
}
function At(t, n) {
  var e = t.get(n);
  if (!e)
    throw new Error("node not found: " + n);
  return e;
}
function Te(t) {
  var n = Ae, e = l, r, o = z(30), i, c, a, g, s, v = 1;
  t == null && (t = []);
  function l(h) {
    return 1 / Math.min(a[h.source.index], a[h.target.index]);
  }
  function u(h) {
    for (var x = 0, p = t.length; x < v; ++x)
      for (var m = 0, _, N, T, $, E, k, S; m < p; ++m)
        _ = t[m], N = _.source, T = _.target, $ = T.x + T.vx - N.x - N.vx || G(s), E = T.y + T.vy - N.y - N.vy || G(s), k = Math.sqrt($ * $ + E * E), k = (k - i[m]) / k * h * r[m], $ *= k, E *= k, T.vx -= $ * (S = g[m]), T.vy -= E * S, N.vx += $ * (S = 1 - S), N.vy += E * S;
  }
  function y() {
    if (c) {
      var h, x = c.length, p = t.length, m = new Map(c.map((N, T) => [n(N, T, c), N])), _;
      for (h = 0, a = new Array(x); h < p; ++h)
        _ = t[h], _.index = h, typeof _.source != "object" && (_.source = At(m, _.source)), typeof _.target != "object" && (_.target = At(m, _.target)), a[_.source.index] = (a[_.source.index] || 0) + 1, a[_.target.index] = (a[_.target.index] || 0) + 1;
      for (h = 0, g = new Array(p); h < p; ++h)
        _ = t[h], g[h] = a[_.source.index] / (a[_.source.index] + a[_.target.index]);
      r = new Array(p), d(), i = new Array(p), f();
    }
  }
  function d() {
    if (c)
      for (var h = 0, x = t.length; h < x; ++h)
        r[h] = +e(t[h], h, t);
  }
  function f() {
    if (c)
      for (var h = 0, x = t.length; h < x; ++h)
        i[h] = +o(t[h], h, t);
  }
  return u.initialize = function(h, x) {
    c = h, s = x, y();
  }, u.links = function(h) {
    return arguments.length ? (t = h, y(), u) : t;
  }, u.id = function(h) {
    return arguments.length ? (n = h, u) : n;
  }, u.iterations = function(h) {
    return arguments.length ? (v = +h, u) : v;
  }, u.strength = function(h) {
    return arguments.length ? (e = typeof h == "function" ? h : z(+h), d(), u) : e;
  }, u.distance = function(h) {
    return arguments.length ? (o = typeof h == "function" ? h : z(+h), f(), u) : o;
  }, u;
}
var $e = { value: () => {
} };
function It() {
  for (var t = 0, n = arguments.length, e = {}, r; t < n; ++t) {
    if (!(r = arguments[t] + "") || r in e || /[\s.]/.test(r))
      throw new Error("illegal type: " + r);
    e[r] = [];
  }
  return new lt(e);
}
function lt(t) {
  this._ = t;
}
function ke(t, n) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var r = "", o = e.indexOf(".");
    if (o >= 0 && (r = e.slice(o + 1), e = e.slice(0, o)), e && !n.hasOwnProperty(e))
      throw new Error("unknown type: " + e);
    return { type: e, name: r };
  });
}
lt.prototype = It.prototype = {
  constructor: lt,
  on: function(t, n) {
    var e = this._, r = ke(t + "", e), o, i = -1, c = r.length;
    if (arguments.length < 2) {
      for (; ++i < c; )
        if ((o = (t = r[i]).type) && (o = Le(e[o], t.name)))
          return o;
      return;
    }
    if (n != null && typeof n != "function")
      throw new Error("invalid callback: " + n);
    for (; ++i < c; )
      if (o = (t = r[i]).type)
        e[o] = Tt(e[o], t.name, n);
      else if (n == null)
        for (o in e)
          e[o] = Tt(e[o], t.name, null);
    return this;
  },
  copy: function() {
    var t = {}, n = this._;
    for (var e in n)
      t[e] = n[e].slice();
    return new lt(t);
  },
  call: function(t, n) {
    if ((o = arguments.length - 2) > 0)
      for (var e = new Array(o), r = 0, o, i; r < o; ++r)
        e[r] = arguments[r + 2];
    if (!this._.hasOwnProperty(t))
      throw new Error("unknown type: " + t);
    for (i = this._[t], r = 0, o = i.length; r < o; ++r)
      i[r].value.apply(n, e);
  },
  apply: function(t, n, e) {
    if (!this._.hasOwnProperty(t))
      throw new Error("unknown type: " + t);
    for (var r = this._[t], o = 0, i = r.length; o < i; ++o)
      r[o].value.apply(n, e);
  }
};
function Le(t, n) {
  for (var e = 0, r = t.length, o; e < r; ++e)
    if ((o = t[e]).name === n)
      return o.value;
}
function Tt(t, n, e) {
  for (var r = 0, o = t.length; r < o; ++r)
    if (t[r].name === n) {
      t[r] = $e, t = t.slice(0, r).concat(t.slice(r + 1));
      break;
    }
  return e != null && t.push({ name: n, value: e }), t;
}
var Z = 0, tt = 0, J = 0, Wt = 1e3, ct, et, ft = 0, U = 0, ht = 0, rt = typeof performance == "object" && performance.now ? performance : Date, Yt = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function Xt() {
  return U || (Yt(be), U = rt.now() + ht);
}
function be() {
  U = 0;
}
function vt() {
  this._call = this._time = this._next = null;
}
vt.prototype = jt.prototype = {
  constructor: vt,
  restart: function(t, n, e) {
    if (typeof t != "function")
      throw new TypeError("callback is not a function");
    e = (e == null ? Xt() : +e) + (n == null ? 0 : +n), !this._next && et !== this && (et ? et._next = this : ct = this, et = this), this._call = t, this._time = e, yt();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, yt());
  }
};
function jt(t, n, e) {
  var r = new vt();
  return r.restart(t, n, e), r;
}
function Re() {
  Xt(), ++Z;
  for (var t = ct, n; t; )
    (n = U - t._time) >= 0 && t._call.call(void 0, n), t = t._next;
  --Z;
}
function $t() {
  U = (ft = rt.now()) + ht, Z = tt = 0;
  try {
    Re();
  } finally {
    Z = 0, Ce(), U = 0;
  }
}
function De() {
  var t = rt.now(), n = t - ft;
  n > Wt && (ht -= n, ft = t);
}
function Ce() {
  for (var t, n = ct, e, r = 1 / 0; n; )
    n._call ? (r > n._time && (r = n._time), t = n, n = n._next) : (e = n._next, n._next = null, n = t ? t._next = e : ct = e);
  et = t, yt(r);
}
function yt(t) {
  if (!Z) {
    tt && (tt = clearTimeout(tt));
    var n = t - U;
    n > 24 ? (t < 1 / 0 && (tt = setTimeout($t, t - rt.now() - ht)), J && (J = clearInterval(J))) : (J || (ft = rt.now(), J = setInterval(De, Wt)), Z = 1, Yt($t));
  }
}
const ze = 1664525, Pe = 1013904223, kt = 4294967296;
function Fe() {
  let t = 1;
  return () => (t = (ze * t + Pe) % kt) / kt;
}
function Ie(t) {
  return t.x;
}
function We(t) {
  return t.y;
}
var Ye = 10, Xe = Math.PI * (3 - Math.sqrt(5));
function Lt(t) {
  var n, e = 1, r = 1e-3, o = 1 - Math.pow(r, 1 / 300), i = 0, c = 0.6, a = /* @__PURE__ */ new Map(), g = jt(l), s = It("tick", "end"), v = Fe();
  t == null && (t = []);
  function l() {
    u(), s.call("tick", n), e < r && (g.stop(), s.call("end", n));
  }
  function u(f) {
    var h, x = t.length, p;
    f === void 0 && (f = 1);
    for (var m = 0; m < f; ++m)
      for (e += (i - e) * o, a.forEach(function(_) {
        _(e);
      }), h = 0; h < x; ++h)
        p = t[h], p.fx == null ? p.x += p.vx *= c : (p.x = p.fx, p.vx = 0), p.fy == null ? p.y += p.vy *= c : (p.y = p.fy, p.vy = 0);
    return n;
  }
  function y() {
    for (var f = 0, h = t.length, x; f < h; ++f) {
      if (x = t[f], x.index = f, x.fx != null && (x.x = x.fx), x.fy != null && (x.y = x.fy), isNaN(x.x) || isNaN(x.y)) {
        var p = Ye * Math.sqrt(0.5 + f), m = f * Xe;
        x.x = p * Math.cos(m), x.y = p * Math.sin(m);
      }
      (isNaN(x.vx) || isNaN(x.vy)) && (x.vx = x.vy = 0);
    }
  }
  function d(f) {
    return f.initialize && f.initialize(t, v), f;
  }
  return y(), n = {
    tick: u,
    restart: function() {
      return g.restart(l), n;
    },
    stop: function() {
      return g.stop(), n;
    },
    nodes: function(f) {
      return arguments.length ? (t = f, y(), a.forEach(d), n) : t;
    },
    alpha: function(f) {
      return arguments.length ? (e = +f, n) : e;
    },
    alphaMin: function(f) {
      return arguments.length ? (r = +f, n) : r;
    },
    alphaDecay: function(f) {
      return arguments.length ? (o = +f, n) : +o;
    },
    alphaTarget: function(f) {
      return arguments.length ? (i = +f, n) : i;
    },
    velocityDecay: function(f) {
      return arguments.length ? (c = 1 - f, n) : 1 - c;
    },
    randomSource: function(f) {
      return arguments.length ? (v = f, a.forEach(d), n) : v;
    },
    force: function(f, h) {
      return arguments.length > 1 ? (h == null ? a.delete(f) : a.set(f, d(h)), n) : a.get(f);
    },
    find: function(f, h, x) {
      var p = 0, m = t.length, _, N, T, $, E;
      for (x == null ? x = 1 / 0 : x *= x, p = 0; p < m; ++p)
        $ = t[p], _ = f - $.x, N = h - $.y, T = _ * _ + N * N, T < x && (E = $, x = T);
      return E;
    },
    on: function(f, h) {
      return arguments.length > 1 ? (s.on(f, h), n) : s.on(f);
    }
  };
}
function je() {
  var t, n, e, r, o = z(-30), i, c = 1, a = 1 / 0, g = 0.81;
  function s(y) {
    var d, f = t.length, h = dt(t, Ie, We).visitAfter(l);
    for (r = y, d = 0; d < f; ++d)
      n = t[d], h.visit(u);
  }
  function v() {
    if (t) {
      var y, d = t.length, f;
      for (i = new Array(d), y = 0; y < d; ++y)
        f = t[y], i[f.index] = +o(f, y, t);
    }
  }
  function l(y) {
    var d = 0, f, h, x = 0, p, m, _;
    if (y.length) {
      for (p = m = _ = 0; _ < 4; ++_)
        (f = y[_]) && (h = Math.abs(f.value)) && (d += f.value, x += h, p += h * f.x, m += h * f.y);
      y.x = p / x, y.y = m / x;
    } else {
      f = y, f.x = f.data.x, f.y = f.data.y;
      do
        d += i[f.data.index];
      while (f = f.next);
    }
    y.value = d;
  }
  function u(y, d, f, h) {
    if (!y.value)
      return !0;
    var x = y.x - n.x, p = y.y - n.y, m = h - d, _ = x * x + p * p;
    if (m * m / g < _)
      return _ < a && (x === 0 && (x = G(e), _ += x * x), p === 0 && (p = G(e), _ += p * p), _ < c && (_ = Math.sqrt(c * _)), n.vx += x * y.value * r / _, n.vy += p * y.value * r / _), !0;
    if (y.length || _ >= a)
      return;
    (y.data !== n || y.next) && (x === 0 && (x = G(e), _ += x * x), p === 0 && (p = G(e), _ += p * p), _ < c && (_ = Math.sqrt(c * _)));
    do
      y.data !== n && (m = i[y.data.index] * r / _, n.vx += x * m, n.vy += p * m);
    while (y = y.next);
  }
  return s.initialize = function(y, d) {
    t = y, e = d, v();
  }, s.strength = function(y) {
    return arguments.length ? (o = typeof y == "function" ? y : z(+y), v(), s) : o;
  }, s.distanceMin = function(y) {
    return arguments.length ? (c = y * y, s) : Math.sqrt(c);
  }, s.distanceMax = function(y) {
    return arguments.length ? (a = y * y, s) : Math.sqrt(a);
  }, s.theta = function(y) {
    return arguments.length ? (g = y * y, s) : Math.sqrt(g);
  }, s;
}
function He(t) {
  var n = z(0.1), e, r, o;
  typeof t != "function" && (t = z(t == null ? 0 : +t));
  function i(a) {
    for (var g = 0, s = e.length, v; g < s; ++g)
      v = e[g], v.vx += (o[g] - v.x) * r[g] * a;
  }
  function c() {
    if (e) {
      var a, g = e.length;
      for (r = new Array(g), o = new Array(g), a = 0; a < g; ++a)
        r[a] = isNaN(o[a] = +t(e[a], a, e)) ? 0 : +n(e[a], a, e);
    }
  }
  return i.initialize = function(a) {
    e = a, c();
  }, i.strength = function(a) {
    return arguments.length ? (n = typeof a == "function" ? a : z(+a), c(), i) : n;
  }, i.x = function(a) {
    return arguments.length ? (t = typeof a == "function" ? a : z(+a), c(), i) : t;
  }, i;
}
function Ge(t) {
  var n = z(0.1), e, r, o;
  typeof t != "function" && (t = z(t == null ? 0 : +t));
  function i(a) {
    for (var g = 0, s = e.length, v; g < s; ++g)
      v = e[g], v.vy += (o[g] - v.y) * r[g] * a;
  }
  function c() {
    if (e) {
      var a, g = e.length;
      for (r = new Array(g), o = new Array(g), a = 0; a < g; ++a)
        r[a] = isNaN(o[a] = +t(e[a], a, e)) ? 0 : +n(e[a], a, e);
    }
  }
  return i.initialize = function(a) {
    e = a, c();
  }, i.strength = function(a) {
    return arguments.length ? (n = typeof a == "function" ? a : z(+a), c(), i) : n;
  }, i.y = function(a) {
    return arguments.length ? (t = typeof a == "function" ? a : z(+a), c(), i) : t;
  }, i;
}
const Q = (t) => !!t && typeof t != "number" && typeof t != "string", Oe = (t, n) => n === void 0 ? t : typeof n == "number" ? n : n.width > n.height ? n.width : n.height, bt = (t, n) => Oe(t, n) / 2, Ue = (t, n) => n === void 0 ? t : typeof n == "number" ? n : n.width, Ke = (t, n) => n === void 0 ? t : typeof n == "number" ? n : n.height, Rt = (t, n, e, r, o) => {
  const i = Math.sqrt((r - t) * (r - t) + (o - n) * (o - n));
  return { x: t + e * (r - t) / i, y: n + e * (o - n) / i };
}, xt = (t, n) => t ? [t, ...n || []] : n || [], Ve = 1664525, Qe = 1013904223, Dt = 4294967296;
function Ht() {
  let t = 1;
  return () => (t = (Ve * t + Qe) % Dt) / Dt;
}
function Ze(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function qe(t, n) {
  let e = t.length, r, o;
  for (; e; )
    o = n() * e-- | 0, r = t[e], t[e] = t[o], t[o] = r;
  return t;
}
function Be(t) {
  return Gt(t, Ht());
}
function Gt(t, n) {
  for (var e = 0, r = (t = qe(Array.from(t), n)).length, o = [], i, c; e < r; )
    i = t[e], c && Ot(c, i) ? ++e : (c = tn(o = Je(o, i)), e = 0);
  return c;
}
function Je(t, n) {
  var e, r;
  if (gt(n, t))
    return [n];
  for (e = 0; e < t.length; ++e)
    if (at(n, t[e]) && gt(nt(t[e], n), t))
      return [t[e], n];
  for (e = 0; e < t.length - 1; ++e)
    for (r = e + 1; r < t.length; ++r)
      if (at(nt(t[e], t[r]), n) && at(nt(t[e], n), t[r]) && at(nt(t[r], n), t[e]) && gt(Ut(t[e], t[r], n), t))
        return [t[e], t[r], n];
  throw new Error();
}
function at(t, n) {
  var e = t.r - n.r, r = n.x - t.x, o = n.y - t.y;
  return e < 0 || e * e < r * r + o * o;
}
function Ot(t, n) {
  var e = t.r - n.r + Math.max(t.r, n.r, 1) * 1e-9, r = n.x - t.x, o = n.y - t.y;
  return e > 0 && e * e > r * r + o * o;
}
function gt(t, n) {
  for (var e = 0; e < n.length; ++e)
    if (!Ot(t, n[e]))
      return !1;
  return !0;
}
function tn(t) {
  switch (t.length) {
    case 1:
      return en(t[0]);
    case 2:
      return nt(t[0], t[1]);
    case 3:
      return Ut(t[0], t[1], t[2]);
  }
}
function en(t) {
  return {
    x: t.x,
    y: t.y,
    r: t.r
  };
}
function nt(t, n) {
  var e = t.x, r = t.y, o = t.r, i = n.x, c = n.y, a = n.r, g = i - e, s = c - r, v = a - o, l = Math.sqrt(g * g + s * s);
  return {
    x: (e + i + g / l * v) / 2,
    y: (r + c + s / l * v) / 2,
    r: (l + o + a) / 2
  };
}
function Ut(t, n, e) {
  var r = t.x, o = t.y, i = t.r, c = n.x, a = n.y, g = n.r, s = e.x, v = e.y, l = e.r, u = r - c, y = r - s, d = o - a, f = o - v, h = g - i, x = l - i, p = r * r + o * o - i * i, m = p - c * c - a * a + g * g, _ = p - s * s - v * v + l * l, N = y * d - u * f, T = (d * _ - f * m) / (N * 2) - r, $ = (f * h - d * x) / N, E = (y * m - u * _) / (N * 2) - o, k = (u * x - y * h) / N, S = $ * $ + k * k - 1, L = 2 * (i + T * $ + E * k), F = T * T + E * E - i * i, D = -(Math.abs(S) > 1e-6 ? (L + Math.sqrt(L * L - 4 * S * F)) / (2 * S) : F / L);
  return {
    x: r + T + $ * D,
    y: o + E + k * D,
    r: D
  };
}
function Ct(t, n, e) {
  var r = t.x - n.x, o, i, c = t.y - n.y, a, g, s = r * r + c * c;
  s ? (i = n.r + e.r, i *= i, g = t.r + e.r, g *= g, i > g ? (o = (s + g - i) / (2 * s), a = Math.sqrt(Math.max(0, g / s - o * o)), e.x = t.x - o * r - a * c, e.y = t.y - o * c + a * r) : (o = (s + i - g) / (2 * s), a = Math.sqrt(Math.max(0, i / s - o * o)), e.x = n.x + o * r - a * c, e.y = n.y + o * c + a * r)) : (e.x = n.x + e.r, e.y = n.y);
}
function zt(t, n) {
  var e = t.r + n.r - 1e-6, r = n.x - t.x, o = n.y - t.y;
  return e > 0 && e * e > r * r + o * o;
}
function Pt(t) {
  var n = t._, e = t.next._, r = n.r + e.r, o = (n.x * e.r + e.x * n.r) / r, i = (n.y * e.r + e.y * n.r) / r;
  return o * o + i * i;
}
function ut(t) {
  this._ = t, this.next = null, this.previous = null;
}
function nn(t, n) {
  if (!(i = (t = Ze(t)).length))
    return 0;
  var e, r, o, i, c, a, g, s, v, l, u;
  if (e = t[0], e.x = 0, e.y = 0, !(i > 1))
    return e.r;
  if (r = t[1], e.x = -r.r, r.x = e.r, r.y = 0, !(i > 2))
    return e.r + r.r;
  Ct(r, e, o = t[2]), e = new ut(e), r = new ut(r), o = new ut(o), e.next = o.previous = r, r.next = e.previous = o, o.next = r.previous = e;
  t:
    for (g = 3; g < i; ++g) {
      Ct(e._, r._, o = t[g]), o = new ut(o), s = r.next, v = e.previous, l = r._.r, u = e._.r;
      do
        if (l <= u) {
          if (zt(s._, o._)) {
            r = s, e.next = r, r.previous = e, --g;
            continue t;
          }
          l += s._.r, s = s.next;
        } else {
          if (zt(v._, o._)) {
            e = v, e.next = r, r.previous = e, --g;
            continue t;
          }
          u += v._.r, v = v.previous;
        }
      while (s !== v.next);
      for (o.previous = e, o.next = r, e.next = r.previous = r = o, c = Pt(e); (o = o.next) !== r; )
        (a = Pt(o)) < c && (e = o, c = a);
      r = e.next;
    }
  for (e = [r._], o = r; (o = o.next) !== r; )
    e.push(o._);
  for (o = Gt(e, n), g = 0; g < i; ++g)
    e = t[g], e.x -= o.x, e.y -= o.y;
  return o.r;
}
function rn(t) {
  return nn(t, Ht()), t;
}
function on(t) {
  const n = (s) => s || t.value, e = (s) => Ue(t.value, s.size), r = (s) => Ke(t.value, s.size), o = (s, v) => (s || 0) - (v || 0) / 2, i = (s, v) => (s || 0) - (v || 0) / 2, c = (s, v) => `<circle cx="${s.x}" cy="${s.y}" r="${s.r + 1}" class="node-group" />` + v.map(
    (l) => {
      var u;
      return `<circle cx="${l.x}" cy="${l.y}" r="${l.r}" class="${l.class}" >
              <title>${(u = l.labels) == null ? void 0 : u.join(",")}</title>
          </circle>`;
    }
  ).join(""), a = (s, v, l, u) => {
    const y = rn(
      v.map(
        (f) => ({
          ...g(f),
          r: bt(t.value, f.size)
        })
      )
    ), d = Be(y);
    return {
      id: s.id,
      key: s.id,
      x: l,
      y: u,
      innerSVG: {
        viewBox: `-${d.r + 2} -${d.r + 2} ${d.r * 2 + 4} ${d.r * 2 + 4}`,
        innerHtml: c(d, y)
      },
      width: d.r * 2,
      height: d.r * 2,
      labels: xt(s.name, s.labels),
      title: s.name,
      class: ["node-group"],
      r: d.r
    };
  }, g = (s, v, l, u) => {
    var y, d;
    return v && v.length > 0 ? a(s, v, l, u) : {
      id: s.id,
      key: s.id,
      x: l,
      y: u,
      fx: (y = s.position) == null ? void 0 : y.x,
      fy: (d = s.position) == null ? void 0 : d.y,
      innerSVG: s.innerSVG,
      width: e(s),
      height: r(s),
      labels: xt(s.name, s.labels),
      title: s.name,
      class: s.class ? ["node", ...s.class || []] : ["node"],
      r: bt(t.value, s.size)
    };
  };
  return {
    getNode: g,
    getSize: n,
    getX: o,
    getY: i
  };
}
const sn = "arrow-start", an = "arrow-end";
function un(t, n) {
  const e = (i) => n.value && i.twoWay ? `url(#${sn})` : void 0, r = (i) => n.value ? `url(#${an})` : void 0;
  return {
    getMarkerEnd: r,
    getMarkerStart: e,
    getLink: (i) => ({
      source: i.source,
      target: i.target,
      labels: xt(i.name, i.labels),
      class: i.class ? ["link", i.class] : ["link"],
      "stroke-width": t.value,
      "marker-end": r(),
      "marker-start": e(i)
    })
  };
}
const ln = (t, n, e) => {
  const { getNode: r } = on(t), { getLink: o } = un(n, e), i = (a, g, s) => a.source === g && a.target === s || a.source === s && a.target === g;
  return { reduce: (a, g) => {
    const s = a.reduce(
      (l, u) => {
        if (u.group === void 0)
          return l.push(u), l;
        const y = l.find((d) => d.id === `g-${u.group}`);
        return y && y.children ? (y.children.push(u), l) : (l.push({ id: `g-${u.group}`, children: [u] }), l);
      },
      []
    ).map((l) => r(l, l.children)), v = g.reduce((l, u) => {
      const y = s.find(
        (x) => x.id === u.source
      ), d = s.find(
        (x) => x.id === u.target
      );
      if (y && d)
        return l.push(u), l;
      const f = a.find((x) => x.id === u.source), h = a.find((x) => x.id === u.target);
      if (H(f == null ? void 0 : f.group) && H(h == null ? void 0 : h.group)) {
        if ((f == null ? void 0 : f.group) === (h == null ? void 0 : h.group))
          return l;
        const x = l.find(
          (p) => i(p, `g-${f.group}`, `g-${h.group}`)
        );
        return x ? !x.twoWay && x.source !== `g-${f.group}` && (x.twoWay = !0) : l.push({
          ...u,
          source: `g-${f.group}`,
          target: `g-${h.group}`,
          name: u.name || `g-${f.group}-${h.group}`
        }), l;
      }
      return H(f == null ? void 0 : f.group) && h && !H(h == null ? void 0 : h.group) ? (l.push({
        ...u,
        source: `g-${f.group}`,
        name: u.name || `g-${f.group}-${h.id}`
        // nullable target !
      }), l) : (f && !H(f == null ? void 0 : f.group) && H(h == null ? void 0 : h.group) && l.push({
        ...u,
        target: `g-${h.group}`,
        name: u.name || `${f.id}-${h.group}`
      }), l);
    }, []).map((l) => o(l));
    return {
      nodes: s,
      links: v
    };
  } };
}, cn = "X", fn = "Y", hn = "charge", gn = "link", vn = "collide", Kt = 0.01, Vt = 0.1, yn = Math.log(Kt) / Math.log(1 - Vt);
function xn(t, n, e, r) {
  const { reduce: o } = ln(
    r.nodeSize,
    r.linkWidth,
    r.directed
  ), i = Jt([]), c = O([]), a = q(
    () => i.value.map((u) => {
      if (Q(u.target) && Q(u.source)) {
        const y = Rt(
          u.target.x,
          u.target.y,
          u.target.r,
          u.source.x,
          u.source.y
        ), d = Rt(
          u.source.x,
          u.source.y,
          u.source.r,
          u.target.x,
          u.target.y
        );
        u.xS = d.x, u.yS = d.y, u.xT = y.x, u.yT = y.y;
      }
      return u;
    })
  ), g = () => {
    const u = o(t.value, n.value);
    c.value = u.nodes, i.value = u.links, s();
  }, s = async () => {
    l.value.stop(), l.value = v(), r.static.value ? l.value.tick(yn) : l.value.restart();
  }, v = () => {
    const u = Lt().alphaMin(Kt).alphaDecay(Vt).nodes(c.value);
    return u.force(
      cn,
      He(e.value.width / 2).strength(r.forceXStrength.value)
    ), u.force(
      fn,
      Ge(e.value.height / 2).strength(r.forceYStrength.value)
    ), u.force(
      hn,
      je().strength(r.forcManyBodyStrength.value)
    ), u.force(
      vn,
      Ee(r.forceCollideStrength.value)
    ), u.force(
      gn,
      Te(i.value).id((y) => {
        if (!("id" in y))
          throw new Error("Node id is undefined");
        return y.id;
      })
    ), u;
  }, l = O(
    Lt()
  );
  return Mt(
    [
      () => t.value.length,
      () => n.value.length,
      e,
      r.nodeSize,
      r.linkWidth,
      r.forcManyBodyStrength,
      r.forceXStrength,
      r.forceYStrength,
      r.forceCollideStrength,
      r.directed
    ],
    async () => g(),
    { debounce: 100, maxWait: 1e3 }
  ), Mt(r.static, async () => s(), {
    deep: !0,
    debounce: 100,
    maxWait: 1e3
  }), {
    simulation: l,
    nodes: c,
    links: a
  };
}
const dn = 0.1, pn = 0.1, _n = -300, wn = 25, mn = 12, Mn = 1, Nn = 45, Sn = (t) => ({
  options: {
    static: R(() => {
      var e, r;
      return ((r = (e = t.value) == null ? void 0 : e.layout) == null ? void 0 : r.static) || !1;
    }),
    forceXStrength: R(
      () => {
        var e, r;
        return ((r = (e = t.value) == null ? void 0 : e.simulation) == null ? void 0 : r.force.x) || dn;
      }
    ),
    forceYStrength: R(
      () => {
        var e, r;
        return ((r = (e = t.value) == null ? void 0 : e.simulation) == null ? void 0 : r.force.y) || pn;
      }
    ),
    forcManyBodyStrength: R(
      () => {
        var e, r;
        return ((r = (e = t.value) == null ? void 0 : e.simulation) == null ? void 0 : r.force.charge) || _n;
      }
    ),
    forceCollideStrength: R(
      () => {
        var e, r;
        return ((r = (e = t.value) == null ? void 0 : e.simulation) == null ? void 0 : r.force.collide) || Nn;
      }
    ),
    nodeSize: R(() => {
      var e, r;
      return ((r = (e = t.value) == null ? void 0 : e.nodes) == null ? void 0 : r.size) || wn;
    }),
    nodeFontSize: R(
      () => {
        var e, r, o;
        return ((o = (r = (e = t.value) == null ? void 0 : e.nodes) == null ? void 0 : r.font) == null ? void 0 : o.size) || mn;
      }
    ),
    linkWidth: R(() => {
      var e, r;
      return ((r = (e = t.value) == null ? void 0 : e.links) == null ? void 0 : r.width) || Mn;
    }),
    linkFontSize: R(() => {
      var e, r, o;
      return ((o = (r = (e = t.value) == null ? void 0 : e.links) == null ? void 0 : r.font) == null ? void 0 : o.size) || 12;
    }),
    draggable: R(() => {
      var e, r;
      return ((r = (e = t.value) == null ? void 0 : e.layout) == null ? void 0 : r.draggable) || !1;
    }),
    directed: R(() => {
      var e, r;
      return ((r = (e = t.value) == null ? void 0 : e.layout) == null ? void 0 : r.directed) || !1;
    }),
    themeClass: R(
      () => {
        var e, r, o, i;
        return (r = (e = t.value) == null ? void 0 : e.layout) != null && r.theme ? `theme-${(i = (o = t.value) == null ? void 0 : o.layout) == null ? void 0 : i.theme}` : "theme-teal";
      }
    ),
    dark: R(() => {
      var e, r;
      return ((r = (e = t.value) == null ? void 0 : e.layout) == null ? void 0 : r.dark) || !1;
    })
  }
}), En = (t, n) => ({
  label: q(() => ({
    font: { size: t.value },
    offset: {
      x: n.value / 2 + t.value / 2,
      y: t.value / 2
    }
  }))
}), An = (t) => ({
  label: q(() => ({
    font: { size: t.value }
  })),
  getX: (o) => Q(o.source) && Q(o.target) && o.source.x && o.target.x ? o.target.x > o.source.x ? o.source.x + (o.target.x - o.source.x) / 2 : o.target.x + (o.source.x - o.target.x) / 2 : void 0,
  getY: (o) => Q(o.source) && Q(o.target) && o.source.y && o.target.y ? o.target.y > o.source.y ? o.source.y + (o.target.y - o.source.y) / 2 : o.target.y + (o.source.y - o.target.y) / 2 : void 0
}), Tn = (t) => {
  const n = O({
    Sx: 1,
    Qx: 0,
    Qy: 0,
    Sy: 1,
    Tx: 0,
    Ty: 0
  }), e = q(
    () => `matrix(${n.value.Sx},${n.value.Qx},${n.value.Qy},${n.value.Sy},${n.value.Tx},${n.value.Ty})`
  ), r = { x: 0, y: 0 }, o = (l) => l >= 0.5 && l <= 4, i = () => r.x !== 0 && r.y !== 0, c = (l, u, y, d) => ({ x: l - d, y: u - y });
  return { transform: e, zoom: (l, u, y) => {
    const d = n.value.Sx + y;
    if (!o(d))
      return;
    const f = c(
      l,
      u,
      t.value.top,
      t.value.left
    );
    n.value.Tx = d / n.value.Sx * (n.value.Tx - f.x) + f.x, n.value.Ty = d / n.value.Sx * (n.value.Ty - f.y) + f.y, n.value.Sx = d, n.value.Sy = d;
  }, panMove: (l, u) => {
    if (!i())
      return;
    const y = l - r.x, d = u - r.y;
    n.value.Tx += y, n.value.Ty += d, r.x = l, r.y = u;
  }, panStart: (l, u) => {
    r.x = l, r.y = u;
  }, panEnd: () => {
    r.x = 0, r.y = 0;
  } };
}, $n = ["viewBox", "onMousedown", "onWheel"], kn = { key: 0 }, Ln = /* @__PURE__ */ j("path", {
  class: "link",
  d: "M 0 5 L 0 -5 L 10 0 L 0 5"
}, null, -1), bn = [
  Ln
], Rn = /* @__PURE__ */ j("path", {
  class: "link",
  d: "M 10 5 L 0 0 L 10 -5 L 10 5"
}, null, -1), Dn = [
  Rn
], Cn = ["transform"], zn = { class: "links" }, Pn = ["id", "d", "stroke-width", "marker-end", "marker-start", "onClick", "onTouchstartPassive"], Fn = ["font-size", "y"], In = ["dy", "x"], Wn = { class: "nodes" }, Yn = ["viewBox", "width", "height", "x", "y", "title", "onClick", "onTouchendPassive", "onMousedown", "onTouchstartPassive", "innerHTML"], Xn = ["cx", "cy", "r", "title", "onClick", "onTouchendPassive", "onMousedown", "onTouchstartPassive"], jn = ["y", "font-size"], Hn = ["dy", "x"], Gn = /* @__PURE__ */ te({
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
    const e = t, { options: r } = Sn(R(() => e.options)), o = O(null), i = O(null), c = O({ width: 100, height: 100, top: 0, left: 0 }), { transform: a, zoom: g, panMove: s, panStart: v, panEnd: l } = Tn(c), u = q(() => [
      "svg-container",
      `${r.themeClass.value}${r.dark.value ? "--dark" : ""}`
    ]), y = (M) => {
      M.width === c.value.width && M.height === c.value.height || (c.value = {
        top: M.top,
        left: M.left,
        width: M.width,
        height: M.height
      });
    };
    oe(o, (M) => {
      const w = M[0].target.getBoundingClientRect();
      y(w);
    });
    const d = (M) => H(M.xS) && H(M.yS) && H(M.xT) && H(M.yT) ? `M${M.xS} ${M.yS} L${M.xT} ${M.yT}` : void 0, { simulation: f, nodes: h, links: x } = xn(
      R(() => e.nodes),
      R(() => e.links),
      c,
      r
    ), { dragStart: p, dragEnd: m, dragMove: _ } = ie(
      f,
      r.draggable
    ), { label: N } = En(
      r.nodeFontSize,
      r.nodeSize
    ), {
      label: T,
      getX: $,
      getY: E
    } = An(r.linkFontSize), { markers: k } = se(
      r.linkWidth,
      r.nodeSize,
      r.directed
    ), S = (M, X, w) => {
      n("node-click", M, e.nodes[w]);
    }, L = (M, X, w) => {
      n("link-click", M, e.links[w]);
    }, F = async (M) => {
      if (!M.ctrlKey || !i.value)
        return;
      const X = M.deltaY || M.deltaX, w = Math.abs(X) < 50 ? 0.05 : 0.25, b = X < 0 ? w : -w;
      g(M.clientX, M.clientY, b);
    }, D = (M) => {
      _(M), s(M.clientX, M.clientY);
    }, Qt = (M) => {
      v(M.clientX, M.clientY);
    }, ot = (M, X) => p(M, X), Zt = () => {
      m(), l();
    }, qt = () => m();
    return ee(() => {
      if (o.value) {
        const M = o.value.getBoundingClientRect();
        y(M);
      }
    }), (M, X) => (I(), W("svg", {
      ref_key: "svg",
      ref: o,
      xmlns: "http://www.w3.org/2000/svg",
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      preserveAspectRatio: "xMinYMin",
      viewBox: `0 0 ${c.value.width} ${c.value.height}`,
      class: it(u.value),
      onMousedown: K(Qt, ["self", "prevent"]),
      onMouseup: Zt,
      onTouchendPassive: qt,
      onTouchstartPassive: X[0] || (X[0] = async () => {
      }),
      onMousemove: D,
      onWheel: K(F, ["prevent"])
    }, [
      Y(r).directed ? (I(), W("defs", kn, [
        j("marker", _t(wt(Y(k).arrowEnd)), bn, 16),
        j("marker", _t(wt(Y(k).arrowStart)), Dn, 16)
      ])) : ne("", !0),
      j("g", {
        ref_key: "canvas",
        ref: i,
        class: "svg-canvas",
        transform: Y(a)
      }, [
        j("g", zn, [
          (I(!0), W(V, null, st(Y(x), (w, b) => (I(), W(V, { key: b }, [
            j("path", {
              id: `${b}`,
              d: d(w),
              "stroke-width": w["stroke-width"],
              class: it(w.class),
              style: re(w.style),
              "marker-end": w["marker-end"],
              "marker-start": w["marker-start"],
              onClick: (A) => L(A, w, b),
              onTouchstartPassive: (A) => L(A, w, b)
            }, null, 46, Pn),
            j("text", {
              class: "link-label",
              "font-size": Y(T).font.size,
              y: Y(E)(w)
            }, [
              (I(!0), W(V, null, st(w.labels, (A, B) => (I(), W("tspan", {
                key: B,
                dy: B > 0 ? "1.1em" : "0",
                x: Y($)(w)
              }, mt(A), 9, In))), 128))
            ], 8, Fn)
          ], 64))), 128))
        ]),
        j("g", Wn, [
          (I(!0), W(V, null, st(Y(h), (w, b) => (I(), W(V, { key: b }, [
            w.innerSVG ? (I(), W("svg", {
              key: 0,
              viewBox: w.innerSVG.viewBox,
              width: w.width,
              height: w.height,
              x: (w.x || 0) - (w.width || 0) / 2,
              y: (w.y || 0) - (w.height || 0) / 2,
              title: w.name,
              class: it(w.class),
              onClick: (A) => S(A, w, b),
              onTouchendPassive: (A) => S(A, w, b),
              onMousedown: K((A) => ot(A, b), ["prevent"]),
              onTouchstartPassive: K((A) => ot(A, b), ["prevent"]),
              innerHTML: w.innerSVG.innerHtml
            }, null, 42, Yn)) : (I(), W("circle", {
              key: 1,
              cx: w.x,
              cy: w.y,
              r: w.r,
              title: w.name,
              class: it(w.class),
              onClick: (A) => S(A, w, b),
              onTouchendPassive: (A) => S(A, w, b),
              onMousedown: K((A) => ot(A, b), ["prevent"]),
              onTouchstartPassive: K((A) => ot(A, b), ["prevent"])
            }, null, 42, Xn)),
            j("text", {
              class: "node-label",
              y: (w.y || 0) + Y(N).offset.y,
              "font-size": Y(N).font.size
            }, [
              (I(!0), W(V, null, st(w.labels, (A, B) => (I(), W("tspan", {
                key: B,
                dy: B > 0 ? "1.1em" : "0",
                x: (w.x || 0) + (w.width || 0)
              }, mt(A), 9, Hn))), 128))
            ], 8, jn)
          ], 64))), 128))
        ])
      ], 8, Cn)
    ], 42, $n));
  }
});
const Kn = {
  install(t) {
    t.component("D3NetworkGraph", Gn);
  }
};
export {
  Gn as D3NetworkGraph,
  Kn as default
};
