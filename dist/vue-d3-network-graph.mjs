import { ref as q, reactive as Ft, computed as B, toRaw as Et, defineComponent as Ut, useCssVars as Vt, unref as p, toRef as G, openBlock as P, createElementBlock as L, createElementVNode as Z, Fragment as X, renderList as U, mergeProps as Wt, normalizeStyle as zt, normalizeClass as bt, withModifiers as V, toDisplayString as qt } from "vue";
import { watchDebounced as Ct, useResizeObserver as $t } from "@vueuse/core";
function Kt(t, n) {
  const e = q(void 0), r = Ft({
    x: 0,
    y: 0
  }), o = (c) => {
    let y, d = 0;
    return c instanceof MouseEvent ? (y = c.clientX, d = c.clientY) : c instanceof TouchEvent && (y = c.touches[0].clientX, d = c.touches[0].clientY), { x: y || 0, y: d || 0 };
  }, i = (c, y) => n.value ? (() => {
    e.value = y, a(c, t.value.nodes()[y]);
  })() : void 0, a = (c, y) => {
    let d = 0, v = 0;
    if (c && y && (y != null && y.x) && (y != null && y.y)) {
      const m = o(c);
      d = m.x ? m.x - y.x : y.x, v = m.y ? m.y - y.y : y.y;
    }
    r.x = d, r.y = v;
  }, s = () => {
    if (e.value !== void 0) {
      const c = t.value.nodes()[e.value];
      c.fx = null, c.fy = null, l();
    }
  }, l = () => {
    e.value = void 0, t.value.alpha(0.1), t.value.restart(), a();
  };
  return {
    dragStart: i,
    dragEnd: s,
    move: (c) => {
      const y = o(c);
      e.value != null && t.value.nodes()[e.value] && (t.value.restart(), t.value.alpha(0.5), t.value.nodes()[e.value].fx = y.x - r.x, t.value.nodes()[e.value].fy = y.y - r.y);
    }
  };
}
function Qt(t) {
  const n = (s) => s.size || t.value.size, e = (s) => s.width || t.value.size, r = (s) => s.height || s.size || t.value.size, o = (s) => s.color ? "fill: " + s.color : "", i = (s, l = []) => {
    const h = s.cssClass ? s.cssClass : [];
    return h.push("node"), l.forEach((c) => h.push(c)), (s.fx || s.fy) && h.push("pinned"), h;
  };
  return { label: B(() => ({
    font: { size: t.value.font.size },
    offset: {
      x: t.value.size / 2 + t.value.font.size / 2,
      y: t.value.font.size / 2
    }
  })), getSize: n, getWidth: e, getHeight: r, getStyle: o, getClass: i };
}
function Zt(t) {
  return {
    getPath: (i) => {
      var a, s, l, h;
      if (typeof i.source != "number" && typeof i.source != "string" && typeof i.target != "number" && typeof i.target != "string") {
        const c = {
          M: [((a = i == null ? void 0 : i.source) == null ? void 0 : a.x) || 0, ((s = i == null ? void 0 : i.source) == null ? void 0 : s.y) || 0],
          X: [((l = i == null ? void 0 : i.target) == null ? void 0 : l.x) || 0, ((h = i == null ? void 0 : i.target) == null ? void 0 : h.y) || 0]
        };
        return "M " + c.M.join(" ") + " L" + c.X.join(" ");
      }
    },
    getAttrs: (i) => ({ "stroke-width": t.value.width }),
    getClass: (i) => ["link"],
    getStyle: (i) => i.color ? {
      stroke: i.color
    } : {}
  };
}
function Jt(t) {
  const n = +this._x.call(null, t), e = +this._y.call(null, t);
  return It(this.cover(n, e), n, e, t);
}
function It(t, n, e, r) {
  if (isNaN(n) || isNaN(e))
    return t;
  var o, i = t._root, a = { data: r }, s = t._x0, l = t._y0, h = t._x1, c = t._y1, y, d, v, m, f, u, g, x;
  if (!i)
    return t._root = a, t;
  for (; i.length; )
    if ((f = n >= (y = (s + h) / 2)) ? s = y : h = y, (u = e >= (d = (l + c) / 2)) ? l = d : c = d, o = i, !(i = i[g = u << 1 | f]))
      return o[g] = a, t;
  if (v = +t._x.call(null, i.data), m = +t._y.call(null, i.data), n === v && e === m)
    return a.next = i, o ? o[g] = a : t._root = a, t;
  do
    o = o ? o[g] = new Array(4) : t._root = new Array(4), (f = n >= (y = (s + h) / 2)) ? s = y : h = y, (u = e >= (d = (l + c) / 2)) ? l = d : c = d;
  while ((g = u << 1 | f) === (x = (m >= d) << 1 | v >= y));
  return o[x] = i, o[g] = a, t;
}
function te(t) {
  var n, e, r = t.length, o, i, a = new Array(r), s = new Array(r), l = 1 / 0, h = 1 / 0, c = -1 / 0, y = -1 / 0;
  for (e = 0; e < r; ++e)
    isNaN(o = +this._x.call(null, n = t[e])) || isNaN(i = +this._y.call(null, n)) || (a[e] = o, s[e] = i, o < l && (l = o), o > c && (c = o), i < h && (h = i), i > y && (y = i));
  if (l > c || h > y)
    return this;
  for (this.cover(l, h).cover(c, y), e = 0; e < r; ++e)
    It(this, a[e], s[e], t[e]);
  return this;
}
function ee(t, n) {
  if (isNaN(t = +t) || isNaN(n = +n))
    return this;
  var e = this._x0, r = this._y0, o = this._x1, i = this._y1;
  if (isNaN(e))
    o = (e = Math.floor(t)) + 1, i = (r = Math.floor(n)) + 1;
  else {
    for (var a = o - e || 1, s = this._root, l, h; e > t || t >= o || r > n || n >= i; )
      switch (h = (n < r) << 1 | t < e, l = new Array(4), l[h] = s, s = l, a *= 2, h) {
        case 0:
          o = e + a, i = r + a;
          break;
        case 1:
          e = o - a, i = r + a;
          break;
        case 2:
          o = e + a, r = i - a;
          break;
        case 3:
          e = o - a, r = i - a;
          break;
      }
    this._root && this._root.length && (this._root = s);
  }
  return this._x0 = e, this._y0 = r, this._x1 = o, this._y1 = i, this;
}
function ne() {
  var t = [];
  return this.visit(function(n) {
    if (!n.length)
      do
        t.push(n.data);
      while (n = n.next);
  }), t;
}
function re(t) {
  return arguments.length ? this.cover(+t[0][0], +t[0][1]).cover(+t[1][0], +t[1][1]) : isNaN(this._x0) ? void 0 : [[this._x0, this._y0], [this._x1, this._y1]];
}
function C(t, n, e, r, o) {
  this.node = t, this.x0 = n, this.y0 = e, this.x1 = r, this.y1 = o;
}
function ie(t, n, e) {
  var r, o = this._x0, i = this._y0, a, s, l, h, c = this._x1, y = this._y1, d = [], v = this._root, m, f;
  for (v && d.push(new C(v, o, i, c, y)), e == null ? e = 1 / 0 : (o = t - e, i = n - e, c = t + e, y = n + e, e *= e); m = d.pop(); )
    if (!(!(v = m.node) || (a = m.x0) > c || (s = m.y0) > y || (l = m.x1) < o || (h = m.y1) < i))
      if (v.length) {
        var u = (a + l) / 2, g = (s + h) / 2;
        d.push(
          new C(v[3], u, g, l, h),
          new C(v[2], a, g, u, h),
          new C(v[1], u, s, l, g),
          new C(v[0], a, s, u, g)
        ), (f = (n >= g) << 1 | t >= u) && (m = d[d.length - 1], d[d.length - 1] = d[d.length - 1 - f], d[d.length - 1 - f] = m);
      } else {
        var x = t - +this._x.call(null, v.data), N = n - +this._y.call(null, v.data), w = x * x + N * N;
        if (w < e) {
          var k = Math.sqrt(e = w);
          o = t - k, i = n - k, c = t + k, y = n + k, r = v.data;
        }
      }
  return r;
}
function se(t) {
  if (isNaN(c = +this._x.call(null, t)) || isNaN(y = +this._y.call(null, t)))
    return this;
  var n, e = this._root, r, o, i, a = this._x0, s = this._y0, l = this._x1, h = this._y1, c, y, d, v, m, f, u, g;
  if (!e)
    return this;
  if (e.length)
    for (; ; ) {
      if ((m = c >= (d = (a + l) / 2)) ? a = d : l = d, (f = y >= (v = (s + h) / 2)) ? s = v : h = v, n = e, !(e = e[u = f << 1 | m]))
        return this;
      if (!e.length)
        break;
      (n[u + 1 & 3] || n[u + 2 & 3] || n[u + 3 & 3]) && (r = n, g = u);
    }
  for (; e.data !== t; )
    if (o = e, !(e = e.next))
      return this;
  return (i = e.next) && delete e.next, o ? (i ? o.next = i : delete o.next, this) : n ? (i ? n[u] = i : delete n[u], (e = n[0] || n[1] || n[2] || n[3]) && e === (n[3] || n[2] || n[1] || n[0]) && !e.length && (r ? r[g] = e : this._root = e), this) : (this._root = i, this);
}
function oe(t) {
  for (var n = 0, e = t.length; n < e; ++n)
    this.remove(t[n]);
  return this;
}
function le() {
  return this._root;
}
function ae() {
  var t = 0;
  return this.visit(function(n) {
    if (!n.length)
      do
        ++t;
      while (n = n.next);
  }), t;
}
function ue(t) {
  var n = [], e, r = this._root, o, i, a, s, l;
  for (r && n.push(new C(r, this._x0, this._y0, this._x1, this._y1)); e = n.pop(); )
    if (!t(r = e.node, i = e.x0, a = e.y0, s = e.x1, l = e.y1) && r.length) {
      var h = (i + s) / 2, c = (a + l) / 2;
      (o = r[3]) && n.push(new C(o, h, c, s, l)), (o = r[2]) && n.push(new C(o, i, c, h, l)), (o = r[1]) && n.push(new C(o, h, a, s, c)), (o = r[0]) && n.push(new C(o, i, a, h, c));
    }
  return this;
}
function fe(t) {
  var n = [], e = [], r;
  for (this._root && n.push(new C(this._root, this._x0, this._y0, this._x1, this._y1)); r = n.pop(); ) {
    var o = r.node;
    if (o.length) {
      var i, a = r.x0, s = r.y0, l = r.x1, h = r.y1, c = (a + l) / 2, y = (s + h) / 2;
      (i = o[0]) && n.push(new C(i, a, s, c, y)), (i = o[1]) && n.push(new C(i, c, s, l, y)), (i = o[2]) && n.push(new C(i, a, y, c, h)), (i = o[3]) && n.push(new C(i, c, y, l, h));
    }
    e.push(r);
  }
  for (; r = e.pop(); )
    t(r.node, r.x0, r.y0, r.x1, r.y1);
  return this;
}
function ce(t) {
  return t[0];
}
function he(t) {
  return arguments.length ? (this._x = t, this) : this._x;
}
function ve(t) {
  return t[1];
}
function ge(t) {
  return arguments.length ? (this._y = t, this) : this._y;
}
function Ot(t, n, e) {
  var r = new et(n ?? ce, e ?? ve, NaN, NaN, NaN, NaN);
  return t == null ? r : r.addAll(t);
}
function et(t, n, e, r, o, i) {
  this._x = t, this._y = n, this._x0 = e, this._y0 = r, this._x1 = o, this._y1 = i, this._root = void 0;
}
function Tt(t) {
  for (var n = { data: t.data }, e = n; t = t.next; )
    e = e.next = { data: t.data };
  return n;
}
var T = Ot.prototype = et.prototype;
T.copy = function() {
  var t = new et(this._x, this._y, this._x0, this._y0, this._x1, this._y1), n = this._root, e, r;
  if (!n)
    return t;
  if (!n.length)
    return t._root = Tt(n), t;
  for (e = [{ source: n, target: t._root = new Array(4) }]; n = e.pop(); )
    for (var o = 0; o < 4; ++o)
      (r = n.source[o]) && (r.length ? e.push({ source: r, target: n.target[o] = new Array(4) }) : n.target[o] = Tt(r));
  return t;
};
T.add = Jt;
T.addAll = te;
T.cover = ee;
T.data = ne;
T.extent = re;
T.find = ie;
T.remove = se;
T.removeAll = oe;
T.root = le;
T.size = ae;
T.visit = ue;
T.visitAfter = fe;
T.x = he;
T.y = ge;
function S(t) {
  return function() {
    return t;
  };
}
function I(t) {
  return (t() - 0.5) * 1e-6;
}
function ye(t) {
  return t.index;
}
function Dt(t, n) {
  var e = t.get(n);
  if (!e)
    throw new Error("node not found: " + n);
  return e;
}
function de(t) {
  var n = ye, e = y, r, o = S(30), i, a, s, l, h, c = 1;
  t == null && (t = []);
  function y(u) {
    return 1 / Math.min(s[u.source.index], s[u.target.index]);
  }
  function d(u) {
    for (var g = 0, x = t.length; g < c; ++g)
      for (var N = 0, w, k, E, b, M, A, _; N < x; ++N)
        w = t[N], k = w.source, E = w.target, b = E.x + E.vx - k.x - k.vx || I(h), M = E.y + E.vy - k.y - k.vy || I(h), A = Math.sqrt(b * b + M * M), A = (A - i[N]) / A * u * r[N], b *= A, M *= A, E.vx -= b * (_ = l[N]), E.vy -= M * _, k.vx += b * (_ = 1 - _), k.vy += M * _;
  }
  function v() {
    if (a) {
      var u, g = a.length, x = t.length, N = new Map(a.map((k, E) => [n(k, E, a), k])), w;
      for (u = 0, s = new Array(g); u < x; ++u)
        w = t[u], w.index = u, typeof w.source != "object" && (w.source = Dt(N, w.source)), typeof w.target != "object" && (w.target = Dt(N, w.target)), s[w.source.index] = (s[w.source.index] || 0) + 1, s[w.target.index] = (s[w.target.index] || 0) + 1;
      for (u = 0, l = new Array(x); u < x; ++u)
        w = t[u], l[u] = s[w.source.index] / (s[w.source.index] + s[w.target.index]);
      r = new Array(x), m(), i = new Array(x), f();
    }
  }
  function m() {
    if (a)
      for (var u = 0, g = t.length; u < g; ++u)
        r[u] = +e(t[u], u, t);
  }
  function f() {
    if (a)
      for (var u = 0, g = t.length; u < g; ++u)
        i[u] = +o(t[u], u, t);
  }
  return d.initialize = function(u, g) {
    a = u, h = g, v();
  }, d.links = function(u) {
    return arguments.length ? (t = u, v(), d) : t;
  }, d.id = function(u) {
    return arguments.length ? (n = u, d) : n;
  }, d.iterations = function(u) {
    return arguments.length ? (c = +u, d) : c;
  }, d.strength = function(u) {
    return arguments.length ? (e = typeof u == "function" ? u : S(+u), m(), d) : e;
  }, d.distance = function(u) {
    return arguments.length ? (o = typeof u == "function" ? u : S(+u), f(), d) : o;
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
function we(t, n) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var r = "", o = e.indexOf(".");
    if (o >= 0 && (r = e.slice(o + 1), e = e.slice(0, o)), e && !n.hasOwnProperty(e))
      throw new Error("unknown type: " + e);
    return { type: e, name: r };
  });
}
W.prototype = Rt.prototype = {
  constructor: W,
  on: function(t, n) {
    var e = this._, r = we(t + "", e), o, i = -1, a = r.length;
    if (arguments.length < 2) {
      for (; ++i < a; )
        if ((o = (t = r[i]).type) && (o = _e(e[o], t.name)))
          return o;
      return;
    }
    if (n != null && typeof n != "function")
      throw new Error("invalid callback: " + n);
    for (; ++i < a; )
      if (o = (t = r[i]).type)
        e[o] = St(e[o], t.name, n);
      else if (n == null)
        for (o in e)
          e[o] = St(e[o], t.name, null);
    return this;
  },
  copy: function() {
    var t = {}, n = this._;
    for (var e in n)
      t[e] = n[e].slice();
    return new W(t);
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
function _e(t, n) {
  for (var e = 0, r = t.length, o; e < r; ++e)
    if ((o = t[e]).name === n)
      return o.value;
}
function St(t, n, e) {
  for (var r = 0, o = t.length; r < o; ++r)
    if (t[r].name === n) {
      t[r] = xe, t = t.slice(0, r).concat(t.slice(r + 1));
      break;
    }
  return e != null && t.push({ name: n, value: e }), t;
}
var O = 0, H = 0, R = 0, Bt = 1e3, $, Y, K = 0, F = 0, Q = 0, j = typeof performance == "object" && performance.now ? performance : Date, Ht = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function Yt() {
  return F || (Ht(pe), F = j.now() + Q);
}
function pe() {
  F = 0;
}
function J() {
  this._call = this._time = this._next = null;
}
J.prototype = jt.prototype = {
  constructor: J,
  restart: function(t, n, e) {
    if (typeof t != "function")
      throw new TypeError("callback is not a function");
    e = (e == null ? Yt() : +e) + (n == null ? 0 : +n), !this._next && Y !== this && (Y ? Y._next = this : $ = this, Y = this), this._call = t, this._time = e, tt();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, tt());
  }
};
function jt(t, n, e) {
  var r = new J();
  return r.restart(t, n, e), r;
}
function me() {
  Yt(), ++O;
  for (var t = $, n; t; )
    (n = F - t._time) >= 0 && t._call.call(void 0, n), t = t._next;
  --O;
}
function Pt() {
  F = (K = j.now()) + Q, O = H = 0;
  try {
    me();
  } finally {
    O = 0, ke(), F = 0;
  }
}
function Ne() {
  var t = j.now(), n = t - K;
  n > Bt && (Q -= n, K = t);
}
function ke() {
  for (var t, n = $, e, r = 1 / 0; n; )
    n._call ? (r > n._time && (r = n._time), t = n, n = n._next) : (e = n._next, n._next = null, n = t ? t._next = e : $ = e);
  Y = t, tt(r);
}
function tt(t) {
  if (!O) {
    H && (H = clearTimeout(H));
    var n = t - F;
    n > 24 ? (t < 1 / 0 && (H = setTimeout(Pt, t - j.now() - Q)), R && (R = clearInterval(R))) : (R || (K = j.now(), R = setInterval(Ne, Bt)), O = 1, Ht(Pt));
  }
}
const Ae = 1664525, Me = 1013904223, Lt = 4294967296;
function Ee() {
  let t = 1;
  return () => (t = (Ae * t + Me) % Lt) / Lt;
}
function ze(t) {
  return t.x;
}
function be(t) {
  return t.y;
}
var Ce = 10, Te = Math.PI * (3 - Math.sqrt(5));
function De(t) {
  var n, e = 1, r = 1e-3, o = 1 - Math.pow(r, 1 / 300), i = 0, a = 0.6, s = /* @__PURE__ */ new Map(), l = jt(y), h = Rt("tick", "end"), c = Ee();
  t == null && (t = []);
  function y() {
    d(), h.call("tick", n), e < r && (l.stop(), h.call("end", n));
  }
  function d(f) {
    var u, g = t.length, x;
    f === void 0 && (f = 1);
    for (var N = 0; N < f; ++N)
      for (e += (i - e) * o, s.forEach(function(w) {
        w(e);
      }), u = 0; u < g; ++u)
        x = t[u], x.fx == null ? x.x += x.vx *= a : (x.x = x.fx, x.vx = 0), x.fy == null ? x.y += x.vy *= a : (x.y = x.fy, x.vy = 0);
    return n;
  }
  function v() {
    for (var f = 0, u = t.length, g; f < u; ++f) {
      if (g = t[f], g.index = f, g.fx != null && (g.x = g.fx), g.fy != null && (g.y = g.fy), isNaN(g.x) || isNaN(g.y)) {
        var x = Ce * Math.sqrt(0.5 + f), N = f * Te;
        g.x = x * Math.cos(N), g.y = x * Math.sin(N);
      }
      (isNaN(g.vx) || isNaN(g.vy)) && (g.vx = g.vy = 0);
    }
  }
  function m(f) {
    return f.initialize && f.initialize(t, c), f;
  }
  return v(), n = {
    tick: d,
    restart: function() {
      return l.restart(y), n;
    },
    stop: function() {
      return l.stop(), n;
    },
    nodes: function(f) {
      return arguments.length ? (t = f, v(), s.forEach(m), n) : t;
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
      return arguments.length ? (a = 1 - f, n) : 1 - a;
    },
    randomSource: function(f) {
      return arguments.length ? (c = f, s.forEach(m), n) : c;
    },
    force: function(f, u) {
      return arguments.length > 1 ? (u == null ? s.delete(f) : s.set(f, m(u)), n) : s.get(f);
    },
    find: function(f, u, g) {
      var x = 0, N = t.length, w, k, E, b, M;
      for (g == null ? g = 1 / 0 : g *= g, x = 0; x < N; ++x)
        b = t[x], w = f - b.x, k = u - b.y, E = w * w + k * k, E < g && (M = b, g = E);
      return M;
    },
    on: function(f, u) {
      return arguments.length > 1 ? (h.on(f, u), n) : h.on(f);
    }
  };
}
function Se() {
  var t, n, e, r, o = S(-30), i, a = 1, s = 1 / 0, l = 0.81;
  function h(v) {
    var m, f = t.length, u = Ot(t, ze, be).visitAfter(y);
    for (r = v, m = 0; m < f; ++m)
      n = t[m], u.visit(d);
  }
  function c() {
    if (t) {
      var v, m = t.length, f;
      for (i = new Array(m), v = 0; v < m; ++v)
        f = t[v], i[f.index] = +o(f, v, t);
    }
  }
  function y(v) {
    var m = 0, f, u, g = 0, x, N, w;
    if (v.length) {
      for (x = N = w = 0; w < 4; ++w)
        (f = v[w]) && (u = Math.abs(f.value)) && (m += f.value, g += u, x += u * f.x, N += u * f.y);
      v.x = x / g, v.y = N / g;
    } else {
      f = v, f.x = f.data.x, f.y = f.data.y;
      do
        m += i[f.data.index];
      while (f = f.next);
    }
    v.value = m;
  }
  function d(v, m, f, u) {
    if (!v.value)
      return !0;
    var g = v.x - n.x, x = v.y - n.y, N = u - m, w = g * g + x * x;
    if (N * N / l < w)
      return w < s && (g === 0 && (g = I(e), w += g * g), x === 0 && (x = I(e), w += x * x), w < a && (w = Math.sqrt(a * w)), n.vx += g * v.value * r / w, n.vy += x * v.value * r / w), !0;
    if (v.length || w >= s)
      return;
    (v.data !== n || v.next) && (g === 0 && (g = I(e), w += g * g), x === 0 && (x = I(e), w += x * x), w < a && (w = Math.sqrt(a * w)));
    do
      v.data !== n && (N = i[v.data.index] * r / w, n.vx += g * N, n.vy += x * N);
    while (v = v.next);
  }
  return h.initialize = function(v, m) {
    t = v, e = m, c();
  }, h.strength = function(v) {
    return arguments.length ? (o = typeof v == "function" ? v : S(+v), c(), h) : o;
  }, h.distanceMin = function(v) {
    return arguments.length ? (a = v * v, h) : Math.sqrt(a);
  }, h.distanceMax = function(v) {
    return arguments.length ? (s = v * v, h) : Math.sqrt(s);
  }, h.theta = function(v) {
    return arguments.length ? (l = v * v, h) : Math.sqrt(l);
  }, h;
}
function Pe(t) {
  var n = S(0.1), e, r, o;
  typeof t != "function" && (t = S(t == null ? 0 : +t));
  function i(s) {
    for (var l = 0, h = e.length, c; l < h; ++l)
      c = e[l], c.vx += (o[l] - c.x) * r[l] * s;
  }
  function a() {
    if (e) {
      var s, l = e.length;
      for (r = new Array(l), o = new Array(l), s = 0; s < l; ++s)
        r[s] = isNaN(o[s] = +t(e[s], s, e)) ? 0 : +n(e[s], s, e);
    }
  }
  return i.initialize = function(s) {
    e = s, a();
  }, i.strength = function(s) {
    return arguments.length ? (n = typeof s == "function" ? s : S(+s), a(), i) : n;
  }, i.x = function(s) {
    return arguments.length ? (t = typeof s == "function" ? s : S(+s), a(), i) : t;
  }, i;
}
function Le(t) {
  var n = S(0.1), e, r, o;
  typeof t != "function" && (t = S(t == null ? 0 : +t));
  function i(s) {
    for (var l = 0, h = e.length, c; l < h; ++l)
      c = e[l], c.vy += (o[l] - c.y) * r[l] * s;
  }
  function a() {
    if (e) {
      var s, l = e.length;
      for (r = new Array(l), o = new Array(l), s = 0; s < l; ++s)
        r[s] = isNaN(o[s] = +t(e[s], s, e)) ? 0 : +n(e[s], s, e);
    }
  }
  return i.initialize = function(s) {
    e = s, a();
  }, i.strength = function(s) {
    return arguments.length ? (n = typeof s == "function" ? s : S(+s), a(), i) : n;
  }, i.y = function(s) {
    return arguments.length ? (t = typeof s == "function" ? s : S(+s), a(), i) : t;
  }, i;
}
const Fe = "X", Ie = "Y", Oe = "charge", Re = "link", Gt = 0.01, Xt = 0.1, Be = Math.log(Gt) / Math.log(1 - Xt);
function He(t, n, e, r) {
  const o = Ft({
    nodes: [],
    links: []
  }), i = async () => {
    s.value.stop(), o.nodes = t.value.map((l) => Et(l)), o.links = n.value.map((l) => Et(l)), s.value = a(), r.value.static ? s.value.tick(Be) : s.value.restart();
  }, a = () => {
    const l = De().stop().alphaMin(Gt).alphaDecay(Xt).nodes(o.nodes);
    return l.force(
      Fe,
      Pe(e.value.width / 2).strength(r.value.force.x)
    ), l.force(
      Ie,
      Le(e.value.height / 2).strength(r.value.force.y)
    ), l.force(
      Oe,
      Se().strength(r.value.force.charge)
    ), l.force(
      Re,
      de(o.links).id((h) => {
        if (!("id" in h))
          throw new Error("Node id is undefined");
        return h.id;
      })
    ), l;
  }, s = q(a());
  return Ct(
    [() => t.value.length, () => n.value.length, e],
    async () => i(),
    { debounce: 100, maxWait: 1e3 }
  ), Ct(
    () => r.value,
    async () => i(),
    { deep: !0, debounce: 100, maxWait: 1e3 }
  ), {
    simulation: s,
    refresh: i,
    graph: o
  };
}
const Ye = 0.5, je = 0.5, Ge = -350, Xe = 40, Ue = 10, Ve = 2, We = (t) => {
  const n = B(() => {
    var i, a, s, l, h, c, y, d, v, m, f, u, g, x, N, w, k, E, b, M, A, _, D, z, nt, rt, it, st, ot, lt, at, ut, ft, ct, ht, vt, gt, yt, dt, xt, wt, _t, pt, mt, Nt, kt, At, Mt;
    return {
      node: {
        stroke: ((s = (a = (i = t.value) == null ? void 0 : i.nodes) == null ? void 0 : a.colors) == null ? void 0 : s.stroke) || "#E2EB98",
        fill: ((c = (h = (l = t.value) == null ? void 0 : l.nodes) == null ? void 0 : h.colors) == null ? void 0 : c.fill) || "#93A392",
        selected: {
          stroke: ((m = (v = (d = (y = t.value) == null ? void 0 : y.nodes) == null ? void 0 : d.colors) == null ? void 0 : v.selected) == null ? void 0 : m.stroke) || "#9DC4B5",
          fill: (x = (g = (u = (f = t.value) == null ? void 0 : f.nodes) == null ? void 0 : u.colors) == null ? void 0 : g.selected) == null ? void 0 : x.fill
        },
        hover: {
          stroke: "#9DC4B5",
          fill: (E = (k = (w = (N = t.value) == null ? void 0 : N.nodes) == null ? void 0 : w.colors) == null ? void 0 : k.hover) == null ? void 0 : E.fill
        },
        pinned: {
          stroke: "#9DC4B5",
          fill: (_ = (A = (M = (b = t.value) == null ? void 0 : b.nodes) == null ? void 0 : M.colors) == null ? void 0 : A.pinned) == null ? void 0 : _.fill
        },
        label: {
          fill: ((rt = (nt = (z = (D = t.value) == null ? void 0 : D.nodes) == null ? void 0 : z.colors) == null ? void 0 : nt.label) == null ? void 0 : rt.fill) || "#93A392"
        }
      },
      link: {
        stroke: ((ot = (st = (it = t.value) == null ? void 0 : it.links) == null ? void 0 : st.colors) == null ? void 0 : ot.stroke) || "#BAD9A2",
        fill: (ut = (at = (lt = t.value) == null ? void 0 : lt.links) == null ? void 0 : at.colors) == null ? void 0 : ut.fill,
        selected: {
          stroke: ((vt = (ht = (ct = (ft = t.value) == null ? void 0 : ft.links) == null ? void 0 : ct.colors) == null ? void 0 : ht.selected) == null ? void 0 : vt.stroke) || "#9DC4B5",
          fill: (xt = (dt = (yt = (gt = t.value) == null ? void 0 : gt.links) == null ? void 0 : yt.colors) == null ? void 0 : dt.selected) == null ? void 0 : xt.fill
        },
        hover: {
          stroke: "#9DC4B5",
          fill: (mt = (pt = (_t = (wt = t.value) == null ? void 0 : wt.links) == null ? void 0 : _t.colors) == null ? void 0 : pt.hover) == null ? void 0 : mt.fill
        },
        label: {
          fill: ((Mt = (At = (kt = (Nt = t.value) == null ? void 0 : Nt.links) == null ? void 0 : kt.colors) == null ? void 0 : At.label) == null ? void 0 : Mt.fill) || "#93A392"
        }
      }
    };
  }), e = B(() => {
    var i, a, s, l, h, c, y, d;
    return {
      static: ((a = (i = t.value) == null ? void 0 : i.simulation) == null ? void 0 : a.static) || !1,
      force: {
        x: ((l = (s = t.value) == null ? void 0 : s.simulation) == null ? void 0 : l.force.x) || Ye,
        y: ((c = (h = t.value) == null ? void 0 : h.simulation) == null ? void 0 : c.force.y) || je,
        charge: ((d = (y = t.value) == null ? void 0 : y.simulation) == null ? void 0 : d.force.charge) || Ge
      }
    };
  }), r = B(() => {
    var i, a, s, l, h;
    return {
      size: ((a = (i = t.value) == null ? void 0 : i.nodes) == null ? void 0 : a.size) || Xe,
      font: {
        size: ((h = (l = (s = t.value) == null ? void 0 : s.nodes) == null ? void 0 : l.font) == null ? void 0 : h.size) || Ue
      }
    };
  }), o = B(() => {
    var i, a;
    return {
      width: ((a = (i = t.value) == null ? void 0 : i.links) == null ? void 0 : a.width) || Ve
    };
  });
  return {
    simulation: e,
    theme: n,
    nodes: r,
    links: o
  };
}, qe = ["viewBox"], $e = {
  id: "l-links",
  class: "links"
}, Ke = ["id", "d", "onClick", "onTouchstartPassive"], Qe = {
  id: "l-nodes",
  class: "nodes"
}, Ze = ["viewBox", "width", "height", "x", "y", "title", "onClick", "onTouchendPassive", "onMousedown", "onTouchstartPassive", "innerHTML"], Je = ["r", "cx", "cy", "title", "onClick", "onTouchendPassive", "onMousedown", "onTouchstartPassive"], tn = {
  id: "node-labels",
  class: "labels"
}, en = ["x", "y", "font-size", "stroke-width"], sn = /* @__PURE__ */ Ut({
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
    Vt((M) => ({
      "27e19e93": p(r).node.stroke,
      b95f0ec4: p(r).node.fill,
      "021d058f": p(r).node.selected.stroke || p(r).node.stroke,
      "3f07cf6f": p(r).node.selected.fill || p(r).node.fill,
      "6ec0240c": p(r).node.pinned.stroke || p(r).node.stroke,
      "0c4fb46c": p(r).node.pinned.fill || p(r).node.fill,
      "0599b05a": p(r).node.hover.stroke || p(r).node.stroke,
      d8f0d08c: p(r).node.hover.fill || p(r).node.fill,
      "7e52f59b": p(r).link.stroke,
      "26bbf1a6": p(r).link.fill,
      d00f9630: p(r).link.selected.stroke,
      "0b52a033": p(r).link.selected.fill,
      fc642176: p(r).node.hover.stroke,
      "3d1d4dd0": p(r).node.hover.fill,
      "4b0efe20": p(r).link.label.fill,
      "6a9f29d0": p(r).node.label.fill
    }));
    const {
      theme: r,
      simulation: o,
      nodes: i,
      links: a
    } = We(G(() => e.options)), s = q(null), l = q({ width: 100, height: 100 });
    $t(s, (M) => {
      const A = M[0];
      A.contentRect.width === l.value.width && A.contentRect.height === l.value.height || (l.value = {
        width: A.contentRect.width,
        height: A.contentRect.height
      });
    });
    const { simulation: h, graph: c } = He(
      G(() => e.nodes),
      G(() => e.links),
      l,
      o
    ), { dragStart: y, dragEnd: d, move: v } = Kt(
      h,
      G(() => {
        var M;
        return ((M = e.options) == null ? void 0 : M.draggables) || !1;
      })
    ), {
      label: m,
      getSize: f,
      getWidth: u,
      getClass: g,
      getHeight: x,
      getStyle: N
    } = Qt(i), {
      getPath: w,
      getAttrs: k,
      getClass: E,
      getStyle: b
    } = Zt(a);
    return (M, A) => (P(), L("svg", {
      ref_key: "svg",
      ref: s,
      xmlns: "http://www.w3.org/2000/svg",
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      preserveAspectRatio: "xMinYMin",
      viewBox: `0 0 ${l.value.width} ${l.value.height}`,
      class: "svg-container",
      onMouseup: A[0] || (A[0] = //@ts-ignore
      (..._) => p(d) && p(d)(..._)),
      onTouchendPassive: A[1] || (A[1] = //@ts-ignore
      (..._) => p(d) && p(d)(..._)),
      onTouchstartPassive: A[2] || (A[2] = async () => {
      }),
      onMousemove: A[3] || (A[3] = //@ts-ignore
      (..._) => p(v) && p(v)(..._))
    }, [
      Z("g", $e, [
        (P(!0), L(X, null, U(p(c).links, (_) => (P(), L("path", Wt({
          id: _.id,
          key: _.id,
          d: p(w)(_)
        }, p(k)(_), {
          class: p(E)(_.id),
          style: p(b)(_),
          onClick: (D) => n("link-click", D, _),
          onTouchstartPassive: (D) => n("link-click", D, _)
        }), null, 16, Ke))), 128))
      ]),
      Z("g", Qe, [
        (P(!0), L(X, null, U(p(c).nodes.filter((_) => _.innerSVG), (_, D) => (P(), L("svg", {
          key: D,
          viewBox: _.innerSVG.viewBox,
          width: p(u)(_),
          height: p(x)(_),
          x: (_.x || 0) - p(u)(_) / 2,
          y: (_.y || 0) - p(x)(_) / 2,
          style: zt(p(N)(_)),
          title: _.name,
          class: bt(p(g)(_, ["node-svg"])),
          onClick: (z) => n("node-click", z, _),
          onTouchendPassive: (z) => n("node-click", z, _),
          onMousedown: V((z) => p(y)(z, D), ["prevent"]),
          onTouchstartPassive: V((z) => p(y)(z, D), ["prevent"]),
          innerHTML: _.innerSVG.innerHtml
        }, null, 46, Ze))), 128)),
        (P(!0), L(X, null, U(p(c).nodes.filter((_) => !_.innerSVG), (_, D) => (P(), L("circle", {
          key: D,
          r: p(f)(_) / 2,
          cx: _.x || 0,
          cy: _.y || 0,
          style: zt(p(N)(_)),
          title: _.name,
          class: bt(p(g)(_)),
          onClick: (z) => M.$emit("node-click", z, _),
          onTouchendPassive: (z) => M.$emit("node-click", z, _),
          onMousedown: V((z) => p(y)(z, D), ["prevent"]),
          onTouchstartPassive: V((z) => p(y)(z, D), ["prevent"])
        }, null, 46, Je))), 128))
      ]),
      Z("g", tn, [
        (P(!0), L(X, null, U(t.nodes, (_) => (P(), L("text", {
          key: _.id,
          class: "node-label",
          x: (_.x || 0) + p(f)(_) / 2 + p(m).font.size / 2,
          y: (_.y || 0) + p(m).offset.y,
          "font-size": p(m).font.size,
          "stroke-width": p(m).font.size / 8
        }, qt(_.name), 9, en))), 128))
      ])
    ], 40, qe));
  }
});
export {
  sn as D3NetworkGraph,
  He as useSimulation
};
