import { ref as V, reactive as It, computed as O, toRaw as Et, defineComponent as Ut, useCssVars as Wt, unref as x, toRef as $, openBlock as L, createElementBlock as F, createElementVNode as H, createCommentVNode as Vt, Fragment as Z, renderList as zt, mergeProps as qt, normalizeStyle as Ct, normalizeClass as Tt, withModifiers as U, toDisplayString as Kt } from "vue";
import { watchDebounced as bt, useResizeObserver as Qt } from "@vueuse/core";
function Zt(t, n) {
  const e = V(void 0), r = It({
    x: 0,
    y: 0
  }), s = (v) => {
    let y, d = 0;
    return v instanceof MouseEvent ? (y = v.clientX, d = v.clientY) : v instanceof TouchEvent && (y = v.touches[0].clientX, d = v.touches[0].clientY), { x: y || 0, y: d || 0 };
  }, o = (v, y) => n.value ? (() => {
    e.value = y, l(v, t.value.nodes()[y]);
  })() : void 0, l = (v, y) => {
    let d = 0, c = 0;
    if (v && y && (y != null && y.x) && (y != null && y.y)) {
      const p = s(v);
      d = p.x ? p.x - y.x : y.x, c = p.y ? p.y - y.y : y.y;
    }
    r.x = d, r.y = c;
  }, i = () => {
    if (e.value !== void 0) {
      const v = t.value.nodes()[e.value];
      v.fx = null, v.fy = null, a();
    }
  }, a = () => {
    e.value = void 0, t.value.alpha(0.1), t.value.restart(), l();
  };
  return {
    dragStart: o,
    dragEnd: i,
    move: (v) => {
      const y = s(v);
      e.value != null && t.value.nodes()[e.value] && (t.value.restart(), t.value.alpha(0.5), t.value.nodes()[e.value].fx = y.x - r.x, t.value.nodes()[e.value].fy = y.y - r.y);
    }
  };
}
function Jt(t) {
  const n = (i) => i.size || t.value.size, e = (i) => i.width || t.value.size, r = (i) => i.height || i.size || t.value.size, s = (i) => i.color ? "fill: " + i.color : "", o = (i, a = []) => {
    const f = i.cssClass ? i.cssClass : [];
    return f.push("node"), a.forEach((v) => f.push(v)), (i.fx || i.fy) && f.push("pinned"), f;
  };
  return { label: O(() => ({
    font: { size: t.value.font.size },
    offset: {
      x: t.value.size / 2 + t.value.font.size / 2,
      y: t.value.font.size / 2
    }
  })), getSize: n, getWidth: e, getHeight: r, getStyle: s, getClass: o };
}
function te(t) {
  return {
    getPath: (o) => {
      if (typeof o.source != "number" && typeof o.source != "string" && typeof o.target != "number" && typeof o.target != "string")
        return `M${o.source.x},${o.source.y}A0,0 0 0,1 ${o.target.x},${o.target.y}`;
    },
    getAttrs: (o) => ({ "stroke-width": t.value.width }),
    getClass: (o) => ["link"],
    getStyle: (o) => o.color ? {
      stroke: o.color
    } : {}
  };
}
function ee(t) {
  const n = +this._x.call(null, t), e = +this._y.call(null, t);
  return Ot(this.cover(n, e), n, e, t);
}
function Ot(t, n, e, r) {
  if (isNaN(n) || isNaN(e))
    return t;
  var s, o = t._root, l = { data: r }, i = t._x0, a = t._y0, f = t._x1, v = t._y1, y, d, c, p, h, u, g, _;
  if (!o)
    return t._root = l, t;
  for (; o.length; )
    if ((h = n >= (y = (i + f) / 2)) ? i = y : f = y, (u = e >= (d = (a + v) / 2)) ? a = d : v = d, s = o, !(o = o[g = u << 1 | h]))
      return s[g] = l, t;
  if (c = +t._x.call(null, o.data), p = +t._y.call(null, o.data), n === c && e === p)
    return l.next = o, s ? s[g] = l : t._root = l, t;
  do
    s = s ? s[g] = new Array(4) : t._root = new Array(4), (h = n >= (y = (i + f) / 2)) ? i = y : f = y, (u = e >= (d = (a + v) / 2)) ? a = d : v = d;
  while ((g = u << 1 | h) === (_ = (p >= d) << 1 | c >= y));
  return s[_] = o, s[g] = l, t;
}
function ne(t) {
  var n, e, r = t.length, s, o, l = new Array(r), i = new Array(r), a = 1 / 0, f = 1 / 0, v = -1 / 0, y = -1 / 0;
  for (e = 0; e < r; ++e)
    isNaN(s = +this._x.call(null, n = t[e])) || isNaN(o = +this._y.call(null, n)) || (l[e] = s, i[e] = o, s < a && (a = s), s > v && (v = s), o < f && (f = o), o > y && (y = o));
  if (a > v || f > y)
    return this;
  for (this.cover(a, f).cover(v, y), e = 0; e < r; ++e)
    Ot(this, l[e], i[e], t[e]);
  return this;
}
function re(t, n) {
  if (isNaN(t = +t) || isNaN(n = +n))
    return this;
  var e = this._x0, r = this._y0, s = this._x1, o = this._y1;
  if (isNaN(e))
    s = (e = Math.floor(t)) + 1, o = (r = Math.floor(n)) + 1;
  else {
    for (var l = s - e || 1, i = this._root, a, f; e > t || t >= s || r > n || n >= o; )
      switch (f = (n < r) << 1 | t < e, a = new Array(4), a[f] = i, i = a, l *= 2, f) {
        case 0:
          s = e + l, o = r + l;
          break;
        case 1:
          e = s - l, o = r + l;
          break;
        case 2:
          s = e + l, r = o - l;
          break;
        case 3:
          e = s - l, r = o - l;
          break;
      }
    this._root && this._root.length && (this._root = i);
  }
  return this._x0 = e, this._y0 = r, this._x1 = s, this._y1 = o, this;
}
function ie() {
  var t = [];
  return this.visit(function(n) {
    if (!n.length)
      do
        t.push(n.data);
      while (n = n.next);
  }), t;
}
function se(t) {
  return arguments.length ? this.cover(+t[0][0], +t[0][1]).cover(+t[1][0], +t[1][1]) : isNaN(this._x0) ? void 0 : [[this._x0, this._y0], [this._x1, this._y1]];
}
function T(t, n, e, r, s) {
  this.node = t, this.x0 = n, this.y0 = e, this.x1 = r, this.y1 = s;
}
function oe(t, n, e) {
  var r, s = this._x0, o = this._y0, l, i, a, f, v = this._x1, y = this._y1, d = [], c = this._root, p, h;
  for (c && d.push(new T(c, s, o, v, y)), e == null ? e = 1 / 0 : (s = t - e, o = n - e, v = t + e, y = n + e, e *= e); p = d.pop(); )
    if (!(!(c = p.node) || (l = p.x0) > v || (i = p.y0) > y || (a = p.x1) < s || (f = p.y1) < o))
      if (c.length) {
        var u = (l + a) / 2, g = (i + f) / 2;
        d.push(
          new T(c[3], u, g, a, f),
          new T(c[2], l, g, u, f),
          new T(c[1], u, i, a, g),
          new T(c[0], l, i, u, g)
        ), (h = (n >= g) << 1 | t >= u) && (p = d[d.length - 1], d[d.length - 1] = d[d.length - 1 - h], d[d.length - 1 - h] = p);
      } else {
        var _ = t - +this._x.call(null, c.data), k = n - +this._y.call(null, c.data), w = _ * _ + k * k;
        if (w < e) {
          var N = Math.sqrt(e = w);
          s = t - N, o = n - N, v = t + N, y = n + N, r = c.data;
        }
      }
  return r;
}
function le(t) {
  if (isNaN(v = +this._x.call(null, t)) || isNaN(y = +this._y.call(null, t)))
    return this;
  var n, e = this._root, r, s, o, l = this._x0, i = this._y0, a = this._x1, f = this._y1, v, y, d, c, p, h, u, g;
  if (!e)
    return this;
  if (e.length)
    for (; ; ) {
      if ((p = v >= (d = (l + a) / 2)) ? l = d : a = d, (h = y >= (c = (i + f) / 2)) ? i = c : f = c, n = e, !(e = e[u = h << 1 | p]))
        return this;
      if (!e.length)
        break;
      (n[u + 1 & 3] || n[u + 2 & 3] || n[u + 3 & 3]) && (r = n, g = u);
    }
  for (; e.data !== t; )
    if (s = e, !(e = e.next))
      return this;
  return (o = e.next) && delete e.next, s ? (o ? s.next = o : delete s.next, this) : n ? (o ? n[u] = o : delete n[u], (e = n[0] || n[1] || n[2] || n[3]) && e === (n[3] || n[2] || n[1] || n[0]) && !e.length && (r ? r[g] = e : this._root = e), this) : (this._root = o, this);
}
function ae(t) {
  for (var n = 0, e = t.length; n < e; ++n)
    this.remove(t[n]);
  return this;
}
function ue() {
  return this._root;
}
function fe() {
  var t = 0;
  return this.visit(function(n) {
    if (!n.length)
      do
        ++t;
      while (n = n.next);
  }), t;
}
function ce(t) {
  var n = [], e, r = this._root, s, o, l, i, a;
  for (r && n.push(new T(r, this._x0, this._y0, this._x1, this._y1)); e = n.pop(); )
    if (!t(r = e.node, o = e.x0, l = e.y0, i = e.x1, a = e.y1) && r.length) {
      var f = (o + i) / 2, v = (l + a) / 2;
      (s = r[3]) && n.push(new T(s, f, v, i, a)), (s = r[2]) && n.push(new T(s, o, v, f, a)), (s = r[1]) && n.push(new T(s, f, l, i, v)), (s = r[0]) && n.push(new T(s, o, l, f, v));
    }
  return this;
}
function he(t) {
  var n = [], e = [], r;
  for (this._root && n.push(new T(this._root, this._x0, this._y0, this._x1, this._y1)); r = n.pop(); ) {
    var s = r.node;
    if (s.length) {
      var o, l = r.x0, i = r.y0, a = r.x1, f = r.y1, v = (l + a) / 2, y = (i + f) / 2;
      (o = s[0]) && n.push(new T(o, l, i, v, y)), (o = s[1]) && n.push(new T(o, v, i, a, y)), (o = s[2]) && n.push(new T(o, l, y, v, f)), (o = s[3]) && n.push(new T(o, v, y, a, f));
    }
    e.push(r);
  }
  for (; r = e.pop(); )
    t(r.node, r.x0, r.y0, r.x1, r.y1);
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
function Bt(t, n, e) {
  var r = new et(n ?? ve, e ?? ye, NaN, NaN, NaN, NaN);
  return t == null ? r : r.addAll(t);
}
function et(t, n, e, r, s, o) {
  this._x = t, this._y = n, this._x0 = e, this._y0 = r, this._x1 = s, this._y1 = o, this._root = void 0;
}
function Dt(t) {
  for (var n = { data: t.data }, e = n; t = t.next; )
    e = e.next = { data: t.data };
  return n;
}
var b = Bt.prototype = et.prototype;
b.copy = function() {
  var t = new et(this._x, this._y, this._x0, this._y0, this._x1, this._y1), n = this._root, e, r;
  if (!n)
    return t;
  if (!n.length)
    return t._root = Dt(n), t;
  for (e = [{ source: n, target: t._root = new Array(4) }]; n = e.pop(); )
    for (var s = 0; s < 4; ++s)
      (r = n.source[s]) && (r.length ? e.push({ source: r, target: n.target[s] = new Array(4) }) : n.target[s] = Dt(r));
  return t;
};
b.add = ee;
b.addAll = ne;
b.cover = re;
b.data = ie;
b.extent = se;
b.find = oe;
b.remove = le;
b.removeAll = ae;
b.root = ue;
b.size = fe;
b.visit = ce;
b.visitAfter = he;
b.x = ge;
b.y = de;
function S(t) {
  return function() {
    return t;
  };
}
function B(t) {
  return (t() - 0.5) * 1e-6;
}
function _e(t) {
  return t.index;
}
function St(t, n) {
  var e = t.get(n);
  if (!e)
    throw new Error("node not found: " + n);
  return e;
}
function we(t) {
  var n = _e, e = y, r, s = S(30), o, l, i, a, f, v = 1;
  t == null && (t = []);
  function y(u) {
    return 1 / Math.min(i[u.source.index], i[u.target.index]);
  }
  function d(u) {
    for (var g = 0, _ = t.length; g < v; ++g)
      for (var k = 0, w, N, M, z, D, C, A; k < _; ++k)
        w = t[k], N = w.source, M = w.target, z = M.x + M.vx - N.x - N.vx || B(f), D = M.y + M.vy - N.y - N.vy || B(f), C = Math.sqrt(z * z + D * D), C = (C - o[k]) / C * u * r[k], z *= C, D *= C, M.vx -= z * (A = a[k]), M.vy -= D * A, N.vx += z * (A = 1 - A), N.vy += D * A;
  }
  function c() {
    if (l) {
      var u, g = l.length, _ = t.length, k = new Map(l.map((N, M) => [n(N, M, l), N])), w;
      for (u = 0, i = new Array(g); u < _; ++u)
        w = t[u], w.index = u, typeof w.source != "object" && (w.source = St(k, w.source)), typeof w.target != "object" && (w.target = St(k, w.target)), i[w.source.index] = (i[w.source.index] || 0) + 1, i[w.target.index] = (i[w.target.index] || 0) + 1;
      for (u = 0, a = new Array(_); u < _; ++u)
        w = t[u], a[u] = i[w.source.index] / (i[w.source.index] + i[w.target.index]);
      r = new Array(_), p(), o = new Array(_), h();
    }
  }
  function p() {
    if (l)
      for (var u = 0, g = t.length; u < g; ++u)
        r[u] = +e(t[u], u, t);
  }
  function h() {
    if (l)
      for (var u = 0, g = t.length; u < g; ++u)
        o[u] = +s(t[u], u, t);
  }
  return d.initialize = function(u, g) {
    l = u, f = g, c();
  }, d.links = function(u) {
    return arguments.length ? (t = u, c(), d) : t;
  }, d.id = function(u) {
    return arguments.length ? (n = u, d) : n;
  }, d.iterations = function(u) {
    return arguments.length ? (v = +u, d) : v;
  }, d.strength = function(u) {
    return arguments.length ? (e = typeof u == "function" ? u : S(+u), p(), d) : e;
  }, d.distance = function(u) {
    return arguments.length ? (s = typeof u == "function" ? u : S(+u), h(), d) : s;
  }, d;
}
var xe = { value: () => {
} };
function Rt() {
  for (var t = 0, n = arguments.length, e = {}, r; t < n; ++t) {
    if (!(r = arguments[t] + "") || r in e || /[\s.]/.test(r))
      throw new Error("illegal type: " + r);
    e[r] = [];
  }
  return new W(e);
}
function W(t) {
  this._ = t;
}
function pe(t, n) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var r = "", s = e.indexOf(".");
    if (s >= 0 && (r = e.slice(s + 1), e = e.slice(0, s)), e && !n.hasOwnProperty(e))
      throw new Error("unknown type: " + e);
    return { type: e, name: r };
  });
}
W.prototype = Rt.prototype = {
  constructor: W,
  on: function(t, n) {
    var e = this._, r = pe(t + "", e), s, o = -1, l = r.length;
    if (arguments.length < 2) {
      for (; ++o < l; )
        if ((s = (t = r[o]).type) && (s = me(e[s], t.name)))
          return s;
      return;
    }
    if (n != null && typeof n != "function")
      throw new Error("invalid callback: " + n);
    for (; ++o < l; )
      if (s = (t = r[o]).type)
        e[s] = Pt(e[s], t.name, n);
      else if (n == null)
        for (s in e)
          e[s] = Pt(e[s], t.name, null);
    return this;
  },
  copy: function() {
    var t = {}, n = this._;
    for (var e in n)
      t[e] = n[e].slice();
    return new W(t);
  },
  call: function(t, n) {
    if ((s = arguments.length - 2) > 0)
      for (var e = new Array(s), r = 0, s, o; r < s; ++r)
        e[r] = arguments[r + 2];
    if (!this._.hasOwnProperty(t))
      throw new Error("unknown type: " + t);
    for (o = this._[t], r = 0, s = o.length; r < s; ++r)
      o[r].value.apply(n, e);
  },
  apply: function(t, n, e) {
    if (!this._.hasOwnProperty(t))
      throw new Error("unknown type: " + t);
    for (var r = this._[t], s = 0, o = r.length; s < o; ++s)
      r[s].value.apply(n, e);
  }
};
function me(t, n) {
  for (var e = 0, r = t.length, s; e < r; ++e)
    if ((s = t[e]).name === n)
      return s.value;
}
function Pt(t, n, e) {
  for (var r = 0, s = t.length; r < s; ++r)
    if (t[r].name === n) {
      t[r] = xe, t = t.slice(0, r).concat(t.slice(r + 1));
      break;
    }
  return e != null && t.push({ name: n, value: e }), t;
}
var R = 0, X = 0, Y = 0, Ht = 1e3, q, j, K = 0, I = 0, Q = 0, G = typeof performance == "object" && performance.now ? performance : Date, Yt = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function Xt() {
  return I || (Yt(ke), I = G.now() + Q);
}
function ke() {
  I = 0;
}
function J() {
  this._call = this._time = this._next = null;
}
J.prototype = jt.prototype = {
  constructor: J,
  restart: function(t, n, e) {
    if (typeof t != "function")
      throw new TypeError("callback is not a function");
    e = (e == null ? Xt() : +e) + (n == null ? 0 : +n), !this._next && j !== this && (j ? j._next = this : q = this, j = this), this._call = t, this._time = e, tt();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, tt());
  }
};
function jt(t, n, e) {
  var r = new J();
  return r.restart(t, n, e), r;
}
function Ne() {
  Xt(), ++R;
  for (var t = q, n; t; )
    (n = I - t._time) >= 0 && t._call.call(void 0, n), t = t._next;
  --R;
}
function Lt() {
  I = (K = G.now()) + Q, R = X = 0;
  try {
    Ne();
  } finally {
    R = 0, Me(), I = 0;
  }
}
function Ae() {
  var t = G.now(), n = t - K;
  n > Ht && (Q -= n, K = t);
}
function Me() {
  for (var t, n = q, e, r = 1 / 0; n; )
    n._call ? (r > n._time && (r = n._time), t = n, n = n._next) : (e = n._next, n._next = null, n = t ? t._next = e : q = e);
  j = t, tt(r);
}
function tt(t) {
  if (!R) {
    X && (X = clearTimeout(X));
    var n = t - I;
    n > 24 ? (t < 1 / 0 && (X = setTimeout(Lt, t - G.now() - Q)), Y && (Y = clearInterval(Y))) : (Y || (K = G.now(), Y = setInterval(Ae, Ht)), R = 1, Yt(Lt));
  }
}
const Ee = 1664525, ze = 1013904223, Ft = 4294967296;
function Ce() {
  let t = 1;
  return () => (t = (Ee * t + ze) % Ft) / Ft;
}
function Te(t) {
  return t.x;
}
function be(t) {
  return t.y;
}
var De = 10, Se = Math.PI * (3 - Math.sqrt(5));
function Pe(t) {
  var n, e = 1, r = 1e-3, s = 1 - Math.pow(r, 1 / 300), o = 0, l = 0.6, i = /* @__PURE__ */ new Map(), a = jt(y), f = Rt("tick", "end"), v = Ce();
  t == null && (t = []);
  function y() {
    d(), f.call("tick", n), e < r && (a.stop(), f.call("end", n));
  }
  function d(h) {
    var u, g = t.length, _;
    h === void 0 && (h = 1);
    for (var k = 0; k < h; ++k)
      for (e += (o - e) * s, i.forEach(function(w) {
        w(e);
      }), u = 0; u < g; ++u)
        _ = t[u], _.fx == null ? _.x += _.vx *= l : (_.x = _.fx, _.vx = 0), _.fy == null ? _.y += _.vy *= l : (_.y = _.fy, _.vy = 0);
    return n;
  }
  function c() {
    for (var h = 0, u = t.length, g; h < u; ++h) {
      if (g = t[h], g.index = h, g.fx != null && (g.x = g.fx), g.fy != null && (g.y = g.fy), isNaN(g.x) || isNaN(g.y)) {
        var _ = De * Math.sqrt(0.5 + h), k = h * Se;
        g.x = _ * Math.cos(k), g.y = _ * Math.sin(k);
      }
      (isNaN(g.vx) || isNaN(g.vy)) && (g.vx = g.vy = 0);
    }
  }
  function p(h) {
    return h.initialize && h.initialize(t, v), h;
  }
  return c(), n = {
    tick: d,
    restart: function() {
      return a.restart(y), n;
    },
    stop: function() {
      return a.stop(), n;
    },
    nodes: function(h) {
      return arguments.length ? (t = h, c(), i.forEach(p), n) : t;
    },
    alpha: function(h) {
      return arguments.length ? (e = +h, n) : e;
    },
    alphaMin: function(h) {
      return arguments.length ? (r = +h, n) : r;
    },
    alphaDecay: function(h) {
      return arguments.length ? (s = +h, n) : +s;
    },
    alphaTarget: function(h) {
      return arguments.length ? (o = +h, n) : o;
    },
    velocityDecay: function(h) {
      return arguments.length ? (l = 1 - h, n) : 1 - l;
    },
    randomSource: function(h) {
      return arguments.length ? (v = h, i.forEach(p), n) : v;
    },
    force: function(h, u) {
      return arguments.length > 1 ? (u == null ? i.delete(h) : i.set(h, p(u)), n) : i.get(h);
    },
    find: function(h, u, g) {
      var _ = 0, k = t.length, w, N, M, z, D;
      for (g == null ? g = 1 / 0 : g *= g, _ = 0; _ < k; ++_)
        z = t[_], w = h - z.x, N = u - z.y, M = w * w + N * N, M < g && (D = z, g = M);
      return D;
    },
    on: function(h, u) {
      return arguments.length > 1 ? (f.on(h, u), n) : f.on(h);
    }
  };
}
function Le() {
  var t, n, e, r, s = S(-30), o, l = 1, i = 1 / 0, a = 0.81;
  function f(c) {
    var p, h = t.length, u = Bt(t, Te, be).visitAfter(y);
    for (r = c, p = 0; p < h; ++p)
      n = t[p], u.visit(d);
  }
  function v() {
    if (t) {
      var c, p = t.length, h;
      for (o = new Array(p), c = 0; c < p; ++c)
        h = t[c], o[h.index] = +s(h, c, t);
    }
  }
  function y(c) {
    var p = 0, h, u, g = 0, _, k, w;
    if (c.length) {
      for (_ = k = w = 0; w < 4; ++w)
        (h = c[w]) && (u = Math.abs(h.value)) && (p += h.value, g += u, _ += u * h.x, k += u * h.y);
      c.x = _ / g, c.y = k / g;
    } else {
      h = c, h.x = h.data.x, h.y = h.data.y;
      do
        p += o[h.data.index];
      while (h = h.next);
    }
    c.value = p;
  }
  function d(c, p, h, u) {
    if (!c.value)
      return !0;
    var g = c.x - n.x, _ = c.y - n.y, k = u - p, w = g * g + _ * _;
    if (k * k / a < w)
      return w < i && (g === 0 && (g = B(e), w += g * g), _ === 0 && (_ = B(e), w += _ * _), w < l && (w = Math.sqrt(l * w)), n.vx += g * c.value * r / w, n.vy += _ * c.value * r / w), !0;
    if (c.length || w >= i)
      return;
    (c.data !== n || c.next) && (g === 0 && (g = B(e), w += g * g), _ === 0 && (_ = B(e), w += _ * _), w < l && (w = Math.sqrt(l * w)));
    do
      c.data !== n && (k = o[c.data.index] * r / w, n.vx += g * k, n.vy += _ * k);
    while (c = c.next);
  }
  return f.initialize = function(c, p) {
    t = c, e = p, v();
  }, f.strength = function(c) {
    return arguments.length ? (s = typeof c == "function" ? c : S(+c), v(), f) : s;
  }, f.distanceMin = function(c) {
    return arguments.length ? (l = c * c, f) : Math.sqrt(l);
  }, f.distanceMax = function(c) {
    return arguments.length ? (i = c * c, f) : Math.sqrt(i);
  }, f.theta = function(c) {
    return arguments.length ? (a = c * c, f) : Math.sqrt(a);
  }, f;
}
function Fe(t) {
  var n = S(0.1), e, r, s;
  typeof t != "function" && (t = S(t == null ? 0 : +t));
  function o(i) {
    for (var a = 0, f = e.length, v; a < f; ++a)
      v = e[a], v.vx += (s[a] - v.x) * r[a] * i;
  }
  function l() {
    if (e) {
      var i, a = e.length;
      for (r = new Array(a), s = new Array(a), i = 0; i < a; ++i)
        r[i] = isNaN(s[i] = +t(e[i], i, e)) ? 0 : +n(e[i], i, e);
    }
  }
  return o.initialize = function(i) {
    e = i, l();
  }, o.strength = function(i) {
    return arguments.length ? (n = typeof i == "function" ? i : S(+i), l(), o) : n;
  }, o.x = function(i) {
    return arguments.length ? (t = typeof i == "function" ? i : S(+i), l(), o) : t;
  }, o;
}
function Ie(t) {
  var n = S(0.1), e, r, s;
  typeof t != "function" && (t = S(t == null ? 0 : +t));
  function o(i) {
    for (var a = 0, f = e.length, v; a < f; ++a)
      v = e[a], v.vy += (s[a] - v.y) * r[a] * i;
  }
  function l() {
    if (e) {
      var i, a = e.length;
      for (r = new Array(a), s = new Array(a), i = 0; i < a; ++i)
        r[i] = isNaN(s[i] = +t(e[i], i, e)) ? 0 : +n(e[i], i, e);
    }
  }
  return o.initialize = function(i) {
    e = i, l();
  }, o.strength = function(i) {
    return arguments.length ? (n = typeof i == "function" ? i : S(+i), l(), o) : n;
  }, o.y = function(i) {
    return arguments.length ? (t = typeof i == "function" ? i : S(+i), l(), o) : t;
  }, o;
}
const Oe = "X", Be = "Y", Re = "charge", He = "link", Gt = 0.01, $t = 0.1, Ye = Math.log(Gt) / Math.log(1 - $t);
function Xe(t, n, e, r) {
  const s = It({
    nodes: [],
    links: []
  }), o = async () => {
    i.value.stop(), s.nodes = t.value.map((a) => Et(a)), s.links = n.value.map((a) => Et(a)), i.value = l(), r.value.static ? i.value.tick(Ye) : i.value.restart();
  }, l = () => {
    const a = Pe().stop().alphaMin(Gt).alphaDecay($t).nodes(s.nodes);
    return a.force(
      Oe,
      Fe(e.value.width / 2).strength(r.value.force.x)
    ), a.force(
      Be,
      Ie(e.value.height / 2).strength(r.value.force.y)
    ), a.force(
      Re,
      Le().strength(r.value.force.charge)
    ), a.force(
      He,
      we(s.links).id((f) => {
        if (!("id" in f))
          throw new Error("Node id is undefined");
        return f.id;
      })
    ), a;
  }, i = V(l());
  return bt(
    [() => t.value.length, () => n.value.length, e],
    async () => o(),
    { debounce: 100, maxWait: 1e3 }
  ), bt(
    () => r.value,
    async () => o(),
    { deep: !0, debounce: 100, maxWait: 1e3 }
  ), {
    simulation: i,
    refresh: o,
    graph: s
  };
}
const je = 0.5, Ge = 0.5, $e = -350, Ue = 40, We = 10, Ve = 2, qe = (t) => {
  const n = O(() => {
    var l, i, a, f, v, y, d, c, p, h, u, g, _, k, w, N, M, z, D, C, A, m, P, E, nt, rt, it, st, ot, lt, at, ut, ft, ct, ht, vt, gt, yt, dt, _t, wt, xt, pt, mt, kt, Nt, At, Mt;
    return {
      node: {
        stroke: ((a = (i = (l = t.value) == null ? void 0 : l.nodes) == null ? void 0 : i.colors) == null ? void 0 : a.stroke) || "#E2EB98",
        fill: ((y = (v = (f = t.value) == null ? void 0 : f.nodes) == null ? void 0 : v.colors) == null ? void 0 : y.fill) || "#93A392",
        selected: {
          stroke: ((h = (p = (c = (d = t.value) == null ? void 0 : d.nodes) == null ? void 0 : c.colors) == null ? void 0 : p.selected) == null ? void 0 : h.stroke) || "#9DC4B5",
          fill: (k = (_ = (g = (u = t.value) == null ? void 0 : u.nodes) == null ? void 0 : g.colors) == null ? void 0 : _.selected) == null ? void 0 : k.fill
        },
        hover: {
          stroke: "#9DC4B5",
          fill: (z = (M = (N = (w = t.value) == null ? void 0 : w.nodes) == null ? void 0 : N.colors) == null ? void 0 : M.hover) == null ? void 0 : z.fill
        },
        pinned: {
          stroke: "#9DC4B5",
          fill: (m = (A = (C = (D = t.value) == null ? void 0 : D.nodes) == null ? void 0 : C.colors) == null ? void 0 : A.pinned) == null ? void 0 : m.fill
        },
        label: {
          fill: ((rt = (nt = (E = (P = t.value) == null ? void 0 : P.nodes) == null ? void 0 : E.colors) == null ? void 0 : nt.label) == null ? void 0 : rt.fill) || "#93A392"
        }
      },
      link: {
        stroke: ((ot = (st = (it = t.value) == null ? void 0 : it.links) == null ? void 0 : st.colors) == null ? void 0 : ot.stroke) || "#BAD9A2",
        fill: (ut = (at = (lt = t.value) == null ? void 0 : lt.links) == null ? void 0 : at.colors) == null ? void 0 : ut.fill,
        selected: {
          stroke: ((vt = (ht = (ct = (ft = t.value) == null ? void 0 : ft.links) == null ? void 0 : ct.colors) == null ? void 0 : ht.selected) == null ? void 0 : vt.stroke) || "#9DC4B5",
          fill: (_t = (dt = (yt = (gt = t.value) == null ? void 0 : gt.links) == null ? void 0 : yt.colors) == null ? void 0 : dt.selected) == null ? void 0 : _t.fill
        },
        hover: {
          stroke: "#9DC4B5",
          fill: (mt = (pt = (xt = (wt = t.value) == null ? void 0 : wt.links) == null ? void 0 : xt.colors) == null ? void 0 : pt.hover) == null ? void 0 : mt.fill
        },
        label: {
          fill: ((Mt = (At = (Nt = (kt = t.value) == null ? void 0 : kt.links) == null ? void 0 : Nt.colors) == null ? void 0 : At.label) == null ? void 0 : Mt.fill) || "#93A392"
        }
      }
    };
  }), e = O(() => {
    var l, i, a, f, v, y, d, c;
    return {
      static: ((i = (l = t.value) == null ? void 0 : l.simulation) == null ? void 0 : i.static) || !1,
      force: {
        x: ((f = (a = t.value) == null ? void 0 : a.simulation) == null ? void 0 : f.force.x) || je,
        y: ((y = (v = t.value) == null ? void 0 : v.simulation) == null ? void 0 : y.force.y) || Ge,
        charge: ((c = (d = t.value) == null ? void 0 : d.simulation) == null ? void 0 : c.force.charge) || $e
      }
    };
  }), r = O(() => {
    var l, i, a, f, v;
    return {
      size: ((i = (l = t.value) == null ? void 0 : l.nodes) == null ? void 0 : i.size) || Ue,
      font: {
        size: ((v = (f = (a = t.value) == null ? void 0 : a.nodes) == null ? void 0 : f.font) == null ? void 0 : v.size) || We
      }
    };
  }), s = O(() => {
    var l, i;
    return {
      width: ((i = (l = t.value) == null ? void 0 : l.links) == null ? void 0 : i.width) || Ve
    };
  }), o = O(() => {
    var l, i, a, f;
    return {
      draggables: ((i = (l = t.value) == null ? void 0 : l.layout) == null ? void 0 : i.draggables) || !1,
      directed: ((f = (a = t.value) == null ? void 0 : a.layout) == null ? void 0 : f.directed) || !1
    };
  });
  return {
    simulation: e,
    theme: n,
    nodes: r,
    links: s,
    layout: o
  };
}, Ke = ["viewBox"], Qe = { key: 0 }, Ze = ["refX"], Je = ["fill"], tn = {
  id: "l-links",
  class: "links"
}, en = ["id", "d", "marker-end", "onClick", "onTouchstartPassive"], nn = {
  id: "l-nodes",
  class: "nodes"
}, rn = ["viewBox", "width", "height", "x", "y", "title", "onClick", "onTouchendPassive", "onMousedown", "onTouchstartPassive", "innerHTML"], sn = ["r", "cx", "cy", "title", "onClick", "onTouchendPassive", "onMousedown", "onTouchstartPassive"], on = ["x", "y", "font-size", "stroke-width"], un = /* @__PURE__ */ Ut({
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
    const e = t;
    Wt((C) => ({
      dad63638: x(r).node.stroke,
      "34131f2f": x(r).node.fill,
      "35f92820": x(r).node.selected.stroke || x(r).node.stroke,
      "2d35e280": x(r).node.selected.fill || x(r).node.fill,
      ec949246: x(r).node.pinned.stroke || x(r).node.stroke,
      "565957bd": x(r).node.pinned.fill || x(r).node.fill,
      "45a4012e": x(r).node.hover.stroke || x(r).node.stroke,
      "0df8736e": x(r).node.hover.fill || x(r).node.fill,
      "2df38828": x(r).link.stroke,
      "9102cf92": x(r).link.fill,
      "325f0c92": x(r).link.selected.stroke,
      "31c3ccc2": x(r).link.selected.fill,
      e9651654: x(r).node.hover.stroke,
      "1599f8be": x(r).node.hover.fill,
      "0324b3f1": x(r).link.label.fill,
      fa73be2e: x(r).node.label.fill
    }));
    const {
      theme: r,
      simulation: s,
      nodes: o,
      links: l,
      layout: i
    } = qe($(() => e.options)), a = V(null), f = V({ width: 100, height: 100 });
    Qt(a, (C) => {
      const A = C[0];
      A.contentRect.width === f.value.width && A.contentRect.height === f.value.height || (f.value = {
        width: A.contentRect.width,
        height: A.contentRect.height
      });
    });
    const { simulation: v, graph: y } = Xe(
      $(() => e.nodes),
      $(() => e.links),
      f,
      s
    ), { dragStart: d, dragEnd: c, move: p } = Zt(
      v,
      $(() => i.value.draggables)
    ), {
      label: h,
      getSize: u,
      getWidth: g,
      getClass: _,
      getHeight: k,
      getStyle: w
    } = Jt(o), {
      getPath: N,
      getAttrs: M,
      getClass: z,
      getStyle: D
    } = te(l);
    return (C, A) => (L(), F("svg", {
      ref_key: "svg",
      ref: a,
      xmlns: "http://www.w3.org/2000/svg",
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      preserveAspectRatio: "xMinYMin",
      viewBox: `0 0 ${f.value.width} ${f.value.height}`,
      class: "svg-container",
      onMouseup: A[0] || (A[0] = //@ts-ignore
      (...m) => x(c) && x(c)(...m)),
      onTouchendPassive: A[1] || (A[1] = //@ts-ignore
      (...m) => x(c) && x(c)(...m)),
      onTouchstartPassive: A[2] || (A[2] = async () => {
      }),
      onMousemove: A[3] || (A[3] = //@ts-ignore
      (...m) => x(p) && x(p)(...m))
    }, [
      x(i).directed ? (L(), F("defs", Qe, [
        H("marker", {
          id: "arrow",
          viewBox: "0 -5 10 10",
          refX: x(o).size / 2 + 10,
          refY: "0",
          markerWidth: "10",
          markerHeight: "10",
          orient: "auto"
        }, [
          H("path", {
            fill: x(r).link.stroke,
            d: "M0,-5L10,0L0,5"
          }, null, 8, Je)
        ], 8, Ze)
      ])) : Vt("", !0),
      H("g", tn, [
        (L(!0), F(Z, null, zt(x(y).links, (m) => (L(), F("path", qt({
          id: m.id,
          key: m.id,
          d: x(N)(m)
        }, x(M)(m), {
          class: x(z)(m.id),
          style: x(D)(m),
          "marker-end": x(i).directed ? "url(#arrow)" : void 0,
          onClick: (P) => n("link-click", P, m),
          onTouchstartPassive: (P) => n("link-click", P, m)
        }), null, 16, en))), 128))
      ]),
      H("g", nn, [
        (L(!0), F(Z, null, zt(x(y).nodes, (m, P) => (L(), F(Z, { key: P }, [
          m.innerSVG ? (L(), F("svg", {
            key: 0,
            viewBox: m.innerSVG.viewBox,
            width: x(g)(m),
            height: x(k)(m),
            x: (m.x || 0) - x(g)(m) / 2,
            y: (m.y || 0) - x(k)(m) / 2,
            style: Ct(x(w)(m)),
            title: m.name,
            class: Tt(x(_)(m, ["node-svg"])),
            onClick: (E) => n("node-click", E, m),
            onTouchendPassive: (E) => n("node-click", E, m),
            onMousedown: U((E) => x(d)(E, P), ["prevent"]),
            onTouchstartPassive: U((E) => x(d)(E, P), ["prevent"]),
            innerHTML: m.innerSVG.innerHtml
          }, null, 46, rn)) : (L(), F("circle", {
            key: 1,
            r: x(u)(m) / 2,
            cx: m.x || 0,
            cy: m.y || 0,
            style: Ct(x(w)(m)),
            title: m.name,
            class: Tt(x(_)(m)),
            onClick: (E) => C.$emit("node-click", E, m),
            onTouchendPassive: (E) => C.$emit("node-click", E, m),
            onMousedown: U((E) => x(d)(E, P), ["prevent"]),
            onTouchstartPassive: U((E) => x(d)(E, P), ["prevent"])
          }, null, 46, sn)),
          H("text", {
            class: "node-label",
            x: (m.x || 0) + x(u)(m) / 2 + x(h).font.size / 2,
            y: (m.y || 0) + x(h).offset.y,
            "font-size": x(h).font.size,
            "stroke-width": x(h).font.size / 8
          }, Kt(m.name), 9, on)
        ], 64))), 128))
      ])
    ], 40, Ke));
  }
});
export {
  un as D3NetworkGraph,
  Xe as useSimulation
};
