import { ref as V, reactive as Gt, toValue as J, computed as R, getCurrentInstance as Ut, defineComponent as Vt, useCssVars as Wt, unref as p, toRef as K, openBlock as P, createElementBlock as I, createElementVNode as Q, Fragment as X, renderList as Z, mergeProps as qt, normalizeStyle as zt, normalizeClass as Ct, withModifiers as G, toDisplayString as $t } from "vue";
import { watchDebounced as Tt, useResizeObserver as Kt } from "@vueuse/core";
function Qt(t, n) {
  const e = V(void 0), r = Gt({
    x: 0,
    y: 0
  }), o = (f) => {
    let y, x = 0;
    return f instanceof MouseEvent ? (y = f.clientX, x = f.clientY) : f instanceof TouchEvent && (y = f.touches[0].clientX, x = f.touches[0].clientY), { x: y || 0, y: x || 0 };
  }, i = (f, y) => J(n) ? (() => {
    e.value = y, l(f, t.value.nodes()[y]);
  })() : void 0, l = (f, y) => {
    let x = 0, c = 0;
    if (f && y && (y != null && y.x) && (y != null && y.y)) {
      const m = o(f);
      x = m.x ? m.x - y.x : y.x, c = m.y ? m.y - y.y : y.y;
    }
    r.x = x, r.y = c;
  }, s = () => {
    if (e.value !== void 0) {
      const f = t.value.nodes()[e.value];
      f.fx = null, f.fy = null, a();
    }
  }, a = () => {
    e.value = void 0, t.value.alpha(0.1), t.value.restart(), l();
  };
  return {
    dragStart: i,
    dragEnd: s,
    move: (f) => {
      const y = o(f);
      e.value != null && t.value.nodes()[e.value] && (t.value.restart(), t.value.alpha(0.5), t.value.nodes()[e.value].fx = y.x - r.x, t.value.nodes()[e.value].fy = y.y - r.y);
    }
  };
}
function Zt(t) {
  const n = (s) => s.size || t.value.size, e = (s) => s.width || t.value.size, r = (s) => s.height || s.size || t.value.size, o = (s) => s.color ? "fill: " + s.color : "", i = (s, a = []) => {
    const v = s.cssClass ? s.cssClass : [];
    return v.push("node"), a.forEach((f) => v.push(f)), (s.fx || s.fy) && v.push("pinned"), v;
  };
  return { label: R(() => ({
    font: { size: t.value.font.size },
    offset: {
      x: t.value.size / 2 + t.value.font.size / 2,
      y: t.value.font.size / 2
    }
  })), getSize: n, getWidth: e, getHeight: r, getStyle: o, getClass: i };
}
function Jt(t) {
  return {
    getPath: (i) => {
      var l, s, a, v;
      if (typeof i.source != "number" && typeof i.source != "string" && typeof i.target != "number" && typeof i.target != "string") {
        const f = {
          M: [((l = i == null ? void 0 : i.source) == null ? void 0 : l.x) || 0, ((s = i == null ? void 0 : i.source) == null ? void 0 : s.y) || 0],
          X: [((a = i == null ? void 0 : i.target) == null ? void 0 : a.x) || 0, ((v = i == null ? void 0 : i.target) == null ? void 0 : v.y) || 0]
        };
        return "M " + f.M.join(" ") + " L" + f.X.join(" ");
      }
    },
    getAttrs: (i) => ({ "stroke-width": t.value.width }),
    getClass: (i) => ["link"],
    getStyle: (i) => i.color ? {
      stroke: i.color
    } : {}
  };
}
function te(t) {
  const n = +this._x.call(null, t), e = +this._y.call(null, t);
  return Lt(this.cover(n, e), n, e, t);
}
function Lt(t, n, e, r) {
  if (isNaN(n) || isNaN(e))
    return t;
  var o, i = t._root, l = { data: r }, s = t._x0, a = t._y0, v = t._x1, f = t._y1, y, x, c, m, h, u, g, d;
  if (!i)
    return t._root = l, t;
  for (; i.length; )
    if ((h = n >= (y = (s + v) / 2)) ? s = y : v = y, (u = e >= (x = (a + f) / 2)) ? a = x : f = x, o = i, !(i = i[g = u << 1 | h]))
      return o[g] = l, t;
  if (c = +t._x.call(null, i.data), m = +t._y.call(null, i.data), n === c && e === m)
    return l.next = i, o ? o[g] = l : t._root = l, t;
  do
    o = o ? o[g] = new Array(4) : t._root = new Array(4), (h = n >= (y = (s + v) / 2)) ? s = y : v = y, (u = e >= (x = (a + f) / 2)) ? a = x : f = x;
  while ((g = u << 1 | h) === (d = (m >= x) << 1 | c >= y));
  return o[d] = i, o[g] = l, t;
}
function ee(t) {
  var n, e, r = t.length, o, i, l = new Array(r), s = new Array(r), a = 1 / 0, v = 1 / 0, f = -1 / 0, y = -1 / 0;
  for (e = 0; e < r; ++e)
    isNaN(o = +this._x.call(null, n = t[e])) || isNaN(i = +this._y.call(null, n)) || (l[e] = o, s[e] = i, o < a && (a = o), o > f && (f = o), i < v && (v = i), i > y && (y = i));
  if (a > f || v > y)
    return this;
  for (this.cover(a, v).cover(f, y), e = 0; e < r; ++e)
    Lt(this, l[e], s[e], t[e]);
  return this;
}
function ne(t, n) {
  if (isNaN(t = +t) || isNaN(n = +n))
    return this;
  var e = this._x0, r = this._y0, o = this._x1, i = this._y1;
  if (isNaN(e))
    o = (e = Math.floor(t)) + 1, i = (r = Math.floor(n)) + 1;
  else {
    for (var l = o - e || 1, s = this._root, a, v; e > t || t >= o || r > n || n >= i; )
      switch (v = (n < r) << 1 | t < e, a = new Array(4), a[v] = s, s = a, l *= 2, v) {
        case 0:
          o = e + l, i = r + l;
          break;
        case 1:
          e = o - l, i = r + l;
          break;
        case 2:
          o = e + l, r = i - l;
          break;
        case 3:
          e = o - l, r = i - l;
          break;
      }
    this._root && this._root.length && (this._root = s);
  }
  return this._x0 = e, this._y0 = r, this._x1 = o, this._y1 = i, this;
}
function re() {
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
function T(t, n, e, r, o) {
  this.node = t, this.x0 = n, this.y0 = e, this.x1 = r, this.y1 = o;
}
function se(t, n, e) {
  var r, o = this._x0, i = this._y0, l, s, a, v, f = this._x1, y = this._y1, x = [], c = this._root, m, h;
  for (c && x.push(new T(c, o, i, f, y)), e == null ? e = 1 / 0 : (o = t - e, i = n - e, f = t + e, y = n + e, e *= e); m = x.pop(); )
    if (!(!(c = m.node) || (l = m.x0) > f || (s = m.y0) > y || (a = m.x1) < o || (v = m.y1) < i))
      if (c.length) {
        var u = (l + a) / 2, g = (s + v) / 2;
        x.push(
          new T(c[3], u, g, a, v),
          new T(c[2], l, g, u, v),
          new T(c[1], u, s, a, g),
          new T(c[0], l, s, u, g)
        ), (h = (n >= g) << 1 | t >= u) && (m = x[x.length - 1], x[x.length - 1] = x[x.length - 1 - h], x[x.length - 1 - h] = m);
      } else {
        var d = t - +this._x.call(null, c.data), N = n - +this._y.call(null, c.data), w = d * d + N * N;
        if (w < e) {
          var k = Math.sqrt(e = w);
          o = t - k, i = n - k, f = t + k, y = n + k, r = c.data;
        }
      }
  return r;
}
function oe(t) {
  if (isNaN(f = +this._x.call(null, t)) || isNaN(y = +this._y.call(null, t)))
    return this;
  var n, e = this._root, r, o, i, l = this._x0, s = this._y0, a = this._x1, v = this._y1, f, y, x, c, m, h, u, g;
  if (!e)
    return this;
  if (e.length)
    for (; ; ) {
      if ((m = f >= (x = (l + a) / 2)) ? l = x : a = x, (h = y >= (c = (s + v) / 2)) ? s = c : v = c, n = e, !(e = e[u = h << 1 | m]))
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
function le(t) {
  for (var n = 0, e = t.length; n < e; ++n)
    this.remove(t[n]);
  return this;
}
function ae() {
  return this._root;
}
function ue() {
  var t = 0;
  return this.visit(function(n) {
    if (!n.length)
      do
        ++t;
      while (n = n.next);
  }), t;
}
function fe(t) {
  var n = [], e, r = this._root, o, i, l, s, a;
  for (r && n.push(new T(r, this._x0, this._y0, this._x1, this._y1)); e = n.pop(); )
    if (!t(r = e.node, i = e.x0, l = e.y0, s = e.x1, a = e.y1) && r.length) {
      var v = (i + s) / 2, f = (l + a) / 2;
      (o = r[3]) && n.push(new T(o, v, f, s, a)), (o = r[2]) && n.push(new T(o, i, f, v, a)), (o = r[1]) && n.push(new T(o, v, l, s, f)), (o = r[0]) && n.push(new T(o, i, l, v, f));
    }
  return this;
}
function ce(t) {
  var n = [], e = [], r;
  for (this._root && n.push(new T(this._root, this._x0, this._y0, this._x1, this._y1)); r = n.pop(); ) {
    var o = r.node;
    if (o.length) {
      var i, l = r.x0, s = r.y0, a = r.x1, v = r.y1, f = (l + a) / 2, y = (s + v) / 2;
      (i = o[0]) && n.push(new T(i, l, s, f, y)), (i = o[1]) && n.push(new T(i, f, s, a, y)), (i = o[2]) && n.push(new T(i, l, y, f, v)), (i = o[3]) && n.push(new T(i, f, y, a, v));
    }
    e.push(r);
  }
  for (; r = e.pop(); )
    t(r.node, r.x0, r.y0, r.x1, r.y1);
  return this;
}
function he(t) {
  return t[0];
}
function ve(t) {
  return arguments.length ? (this._x = t, this) : this._x;
}
function ge(t) {
  return t[1];
}
function ye(t) {
  return arguments.length ? (this._y = t, this) : this._y;
}
function Ft(t, n, e) {
  var r = new nt(n ?? he, e ?? ge, NaN, NaN, NaN, NaN);
  return t == null ? r : r.addAll(t);
}
function nt(t, n, e, r, o, i) {
  this._x = t, this._y = n, this._x0 = e, this._y0 = r, this._x1 = o, this._y1 = i, this._root = void 0;
}
function bt(t) {
  for (var n = { data: t.data }, e = n; t = t.next; )
    e = e.next = { data: t.data };
  return n;
}
var b = Ft.prototype = nt.prototype;
b.copy = function() {
  var t = new nt(this._x, this._y, this._x0, this._y0, this._x1, this._y1), n = this._root, e, r;
  if (!n)
    return t;
  if (!n.length)
    return t._root = bt(n), t;
  for (e = [{ source: n, target: t._root = new Array(4) }]; n = e.pop(); )
    for (var o = 0; o < 4; ++o)
      (r = n.source[o]) && (r.length ? e.push({ source: r, target: n.target[o] = new Array(4) }) : n.target[o] = bt(r));
  return t;
};
b.add = te;
b.addAll = ee;
b.cover = ne;
b.data = re;
b.extent = ie;
b.find = se;
b.remove = oe;
b.removeAll = le;
b.root = ae;
b.size = ue;
b.visit = fe;
b.visitAfter = ce;
b.x = ve;
b.y = ye;
function D(t) {
  return function() {
    return t;
  };
}
function F(t) {
  return (t() - 0.5) * 1e-6;
}
function de(t) {
  return t.index;
}
function Dt(t, n) {
  var e = t.get(n);
  if (!e)
    throw new Error("node not found: " + n);
  return e;
}
function xe(t) {
  var n = de, e = y, r, o = D(30), i, l, s, a, v, f = 1;
  t == null && (t = []);
  function y(u) {
    return 1 / Math.min(s[u.source.index], s[u.target.index]);
  }
  function x(u) {
    for (var g = 0, d = t.length; g < f; ++g)
      for (var N = 0, w, k, M, C, E, A, _; N < d; ++N)
        w = t[N], k = w.source, M = w.target, C = M.x + M.vx - k.x - k.vx || F(v), E = M.y + M.vy - k.y - k.vy || F(v), A = Math.sqrt(C * C + E * E), A = (A - i[N]) / A * u * r[N], C *= A, E *= A, M.vx -= C * (_ = a[N]), M.vy -= E * _, k.vx += C * (_ = 1 - _), k.vy += E * _;
  }
  function c() {
    if (l) {
      var u, g = l.length, d = t.length, N = new Map(l.map((k, M) => [n(k, M, l), k])), w;
      for (u = 0, s = new Array(g); u < d; ++u)
        w = t[u], w.index = u, typeof w.source != "object" && (w.source = Dt(N, w.source)), typeof w.target != "object" && (w.target = Dt(N, w.target)), s[w.source.index] = (s[w.source.index] || 0) + 1, s[w.target.index] = (s[w.target.index] || 0) + 1;
      for (u = 0, a = new Array(d); u < d; ++u)
        w = t[u], a[u] = s[w.source.index] / (s[w.source.index] + s[w.target.index]);
      r = new Array(d), m(), i = new Array(d), h();
    }
  }
  function m() {
    if (l)
      for (var u = 0, g = t.length; u < g; ++u)
        r[u] = +e(t[u], u, t);
  }
  function h() {
    if (l)
      for (var u = 0, g = t.length; u < g; ++u)
        i[u] = +o(t[u], u, t);
  }
  return x.initialize = function(u, g) {
    l = u, v = g, c();
  }, x.links = function(u) {
    return arguments.length ? (t = u, c(), x) : t;
  }, x.id = function(u) {
    return arguments.length ? (n = u, x) : n;
  }, x.iterations = function(u) {
    return arguments.length ? (f = +u, x) : f;
  }, x.strength = function(u) {
    return arguments.length ? (e = typeof u == "function" ? u : D(+u), m(), x) : e;
  }, x.distance = function(u) {
    return arguments.length ? (o = typeof u == "function" ? u : D(+u), h(), x) : o;
  }, x;
}
var we = { value: () => {
} };
function Ot() {
  for (var t = 0, n = arguments.length, e = {}, r; t < n; ++t) {
    if (!(r = arguments[t] + "") || r in e || /[\s.]/.test(r))
      throw new Error("illegal type: " + r);
    e[r] = [];
  }
  return new U(e);
}
function U(t) {
  this._ = t;
}
function _e(t, n) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var r = "", o = e.indexOf(".");
    if (o >= 0 && (r = e.slice(o + 1), e = e.slice(0, o)), e && !n.hasOwnProperty(e))
      throw new Error("unknown type: " + e);
    return { type: e, name: r };
  });
}
U.prototype = Ot.prototype = {
  constructor: U,
  on: function(t, n) {
    var e = this._, r = _e(t + "", e), o, i = -1, l = r.length;
    if (arguments.length < 2) {
      for (; ++i < l; )
        if ((o = (t = r[i]).type) && (o = pe(e[o], t.name)))
          return o;
      return;
    }
    if (n != null && typeof n != "function")
      throw new Error("invalid callback: " + n);
    for (; ++i < l; )
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
    return new U(t);
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
function pe(t, n) {
  for (var e = 0, r = t.length, o; e < r; ++e)
    if ((o = t[e]).name === n)
      return o.value;
}
function St(t, n, e) {
  for (var r = 0, o = t.length; r < o; ++r)
    if (t[r].name === n) {
      t[r] = we, t = t.slice(0, r).concat(t.slice(r + 1));
      break;
    }
  return e != null && t.push({ name: n, value: e }), t;
}
var O = 0, H = 0, B = 0, Bt = 1e3, W, Y, q = 0, L = 0, $ = 0, j = typeof performance == "object" && performance.now ? performance : Date, Rt = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function Ht() {
  return L || (Rt(me), L = j.now() + $);
}
function me() {
  L = 0;
}
function tt() {
  this._call = this._time = this._next = null;
}
tt.prototype = Yt.prototype = {
  constructor: tt,
  restart: function(t, n, e) {
    if (typeof t != "function")
      throw new TypeError("callback is not a function");
    e = (e == null ? Ht() : +e) + (n == null ? 0 : +n), !this._next && Y !== this && (Y ? Y._next = this : W = this, Y = this), this._call = t, this._time = e, et();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, et());
  }
};
function Yt(t, n, e) {
  var r = new tt();
  return r.restart(t, n, e), r;
}
function Ne() {
  Ht(), ++O;
  for (var t = W, n; t; )
    (n = L - t._time) >= 0 && t._call.call(void 0, n), t = t._next;
  --O;
}
function Pt() {
  L = (q = j.now()) + $, O = H = 0;
  try {
    Ne();
  } finally {
    O = 0, Ae(), L = 0;
  }
}
function ke() {
  var t = j.now(), n = t - q;
  n > Bt && ($ -= n, q = t);
}
function Ae() {
  for (var t, n = W, e, r = 1 / 0; n; )
    n._call ? (r > n._time && (r = n._time), t = n, n = n._next) : (e = n._next, n._next = null, n = t ? t._next = e : W = e);
  Y = t, et(r);
}
function et(t) {
  if (!O) {
    H && (H = clearTimeout(H));
    var n = t - L;
    n > 24 ? (t < 1 / 0 && (H = setTimeout(Pt, t - j.now() - $)), B && (B = clearInterval(B))) : (B || (q = j.now(), B = setInterval(ke, Bt)), O = 1, Rt(Pt));
  }
}
const Me = 1664525, Ee = 1013904223, It = 4294967296;
function ze() {
  let t = 1;
  return () => (t = (Me * t + Ee) % It) / It;
}
function Ce(t) {
  return t.x;
}
function Te(t) {
  return t.y;
}
var be = 10, De = Math.PI * (3 - Math.sqrt(5));
function Se(t) {
  var n, e = 1, r = 1e-3, o = 1 - Math.pow(r, 1 / 300), i = 0, l = 0.6, s = /* @__PURE__ */ new Map(), a = Yt(y), v = Ot("tick", "end"), f = ze();
  t == null && (t = []);
  function y() {
    x(), v.call("tick", n), e < r && (a.stop(), v.call("end", n));
  }
  function x(h) {
    var u, g = t.length, d;
    h === void 0 && (h = 1);
    for (var N = 0; N < h; ++N)
      for (e += (i - e) * o, s.forEach(function(w) {
        w(e);
      }), u = 0; u < g; ++u)
        d = t[u], d.fx == null ? d.x += d.vx *= l : (d.x = d.fx, d.vx = 0), d.fy == null ? d.y += d.vy *= l : (d.y = d.fy, d.vy = 0);
    return n;
  }
  function c() {
    for (var h = 0, u = t.length, g; h < u; ++h) {
      if (g = t[h], g.index = h, g.fx != null && (g.x = g.fx), g.fy != null && (g.y = g.fy), isNaN(g.x) || isNaN(g.y)) {
        var d = be * Math.sqrt(0.5 + h), N = h * De;
        g.x = d * Math.cos(N), g.y = d * Math.sin(N);
      }
      (isNaN(g.vx) || isNaN(g.vy)) && (g.vx = g.vy = 0);
    }
  }
  function m(h) {
    return h.initialize && h.initialize(t, f), h;
  }
  return c(), n = {
    tick: x,
    restart: function() {
      return a.restart(y), n;
    },
    stop: function() {
      return a.stop(), n;
    },
    nodes: function(h) {
      return arguments.length ? (t = h, c(), s.forEach(m), n) : t;
    },
    alpha: function(h) {
      return arguments.length ? (e = +h, n) : e;
    },
    alphaMin: function(h) {
      return arguments.length ? (r = +h, n) : r;
    },
    alphaDecay: function(h) {
      return arguments.length ? (o = +h, n) : +o;
    },
    alphaTarget: function(h) {
      return arguments.length ? (i = +h, n) : i;
    },
    velocityDecay: function(h) {
      return arguments.length ? (l = 1 - h, n) : 1 - l;
    },
    randomSource: function(h) {
      return arguments.length ? (f = h, s.forEach(m), n) : f;
    },
    force: function(h, u) {
      return arguments.length > 1 ? (u == null ? s.delete(h) : s.set(h, m(u)), n) : s.get(h);
    },
    find: function(h, u, g) {
      var d = 0, N = t.length, w, k, M, C, E;
      for (g == null ? g = 1 / 0 : g *= g, d = 0; d < N; ++d)
        C = t[d], w = h - C.x, k = u - C.y, M = w * w + k * k, M < g && (E = C, g = M);
      return E;
    },
    on: function(h, u) {
      return arguments.length > 1 ? (v.on(h, u), n) : v.on(h);
    }
  };
}
function Pe() {
  var t, n, e, r, o = D(-30), i, l = 1, s = 1 / 0, a = 0.81;
  function v(c) {
    var m, h = t.length, u = Ft(t, Ce, Te).visitAfter(y);
    for (r = c, m = 0; m < h; ++m)
      n = t[m], u.visit(x);
  }
  function f() {
    if (t) {
      var c, m = t.length, h;
      for (i = new Array(m), c = 0; c < m; ++c)
        h = t[c], i[h.index] = +o(h, c, t);
    }
  }
  function y(c) {
    var m = 0, h, u, g = 0, d, N, w;
    if (c.length) {
      for (d = N = w = 0; w < 4; ++w)
        (h = c[w]) && (u = Math.abs(h.value)) && (m += h.value, g += u, d += u * h.x, N += u * h.y);
      c.x = d / g, c.y = N / g;
    } else {
      h = c, h.x = h.data.x, h.y = h.data.y;
      do
        m += i[h.data.index];
      while (h = h.next);
    }
    c.value = m;
  }
  function x(c, m, h, u) {
    if (!c.value)
      return !0;
    var g = c.x - n.x, d = c.y - n.y, N = u - m, w = g * g + d * d;
    if (N * N / a < w)
      return w < s && (g === 0 && (g = F(e), w += g * g), d === 0 && (d = F(e), w += d * d), w < l && (w = Math.sqrt(l * w)), n.vx += g * c.value * r / w, n.vy += d * c.value * r / w), !0;
    if (c.length || w >= s)
      return;
    (c.data !== n || c.next) && (g === 0 && (g = F(e), w += g * g), d === 0 && (d = F(e), w += d * d), w < l && (w = Math.sqrt(l * w)));
    do
      c.data !== n && (N = i[c.data.index] * r / w, n.vx += g * N, n.vy += d * N);
    while (c = c.next);
  }
  return v.initialize = function(c, m) {
    t = c, e = m, f();
  }, v.strength = function(c) {
    return arguments.length ? (o = typeof c == "function" ? c : D(+c), f(), v) : o;
  }, v.distanceMin = function(c) {
    return arguments.length ? (l = c * c, v) : Math.sqrt(l);
  }, v.distanceMax = function(c) {
    return arguments.length ? (s = c * c, v) : Math.sqrt(s);
  }, v.theta = function(c) {
    return arguments.length ? (a = c * c, v) : Math.sqrt(a);
  }, v;
}
function Ie(t) {
  var n = D(0.1), e, r, o;
  typeof t != "function" && (t = D(t == null ? 0 : +t));
  function i(s) {
    for (var a = 0, v = e.length, f; a < v; ++a)
      f = e[a], f.vx += (o[a] - f.x) * r[a] * s;
  }
  function l() {
    if (e) {
      var s, a = e.length;
      for (r = new Array(a), o = new Array(a), s = 0; s < a; ++s)
        r[s] = isNaN(o[s] = +t(e[s], s, e)) ? 0 : +n(e[s], s, e);
    }
  }
  return i.initialize = function(s) {
    e = s, l();
  }, i.strength = function(s) {
    return arguments.length ? (n = typeof s == "function" ? s : D(+s), l(), i) : n;
  }, i.x = function(s) {
    return arguments.length ? (t = typeof s == "function" ? s : D(+s), l(), i) : t;
  }, i;
}
function Le(t) {
  var n = D(0.1), e, r, o;
  typeof t != "function" && (t = D(t == null ? 0 : +t));
  function i(s) {
    for (var a = 0, v = e.length, f; a < v; ++a)
      f = e[a], f.vy += (o[a] - f.y) * r[a] * s;
  }
  function l() {
    if (e) {
      var s, a = e.length;
      for (r = new Array(a), o = new Array(a), s = 0; s < a; ++s)
        r[s] = isNaN(o[s] = +t(e[s], s, e)) ? 0 : +n(e[s], s, e);
    }
  }
  return i.initialize = function(s) {
    e = s, l();
  }, i.strength = function(s) {
    return arguments.length ? (n = typeof s == "function" ? s : D(+s), l(), i) : n;
  }, i.y = function(s) {
    return arguments.length ? (t = typeof s == "function" ? s : D(+s), l(), i) : t;
  }, i;
}
const Fe = "X", Oe = "Y", Be = "charge", Re = "link", jt = 0.01, Xt = 0.1, He = Math.log(jt) / Math.log(1 - Xt);
function Ye(t, n, e, r) {
  const o = Ut(), i = async () => {
    var a;
    s.value.stop(), s.value = l(), r.value.static ? s.value.tick(He) : s.value.restart(), (a = o == null ? void 0 : o.proxy) == null || a.$forceUpdate();
  }, l = () => {
    const a = Se().stop().alphaMin(jt).alphaDecay(Xt).nodes(t.value);
    return a.force(
      Fe,
      Ie(e.value.width / 2).strength(r.value.force.x)
    ), a.force(
      Oe,
      Le(e.value.height / 2).strength(r.value.force.y)
    ), a.force(
      Be,
      Pe().strength(r.value.force.charge)
    ), a.force(
      Re,
      xe(n.value).id((v) => {
        if (!("id" in v))
          throw new Error("Node id is undefined");
        return v.id;
      })
    ), a;
  }, s = V(l());
  return Tt(
    [() => J(t).length, () => J(n).length, e],
    async () => i(),
    { debounce: 100, maxWait: 1e3 }
  ), Tt(
    () => r.value,
    async () => i(),
    { deep: !0, debounce: 100, maxWait: 1e3 }
  ), {
    simulation: s,
    refresh: i
  };
}
const je = 0.5, Xe = 0.5, Ge = -350, Ue = 40, Ve = 10, We = 2, qe = (t) => {
  const n = R(() => {
    var i, l, s, a, v, f, y, x, c, m, h, u, g, d, N, w, k, M, C, E, A, _, S, z, rt, it, st, ot, lt, at, ut, ft, ct, ht, vt, gt, yt, dt, xt, wt, _t, pt, mt, Nt, kt, At, Mt, Et;
    return {
      node: {
        stroke: ((s = (l = (i = t.value) == null ? void 0 : i.nodes) == null ? void 0 : l.colors) == null ? void 0 : s.stroke) || "#E2EB98",
        fill: ((f = (v = (a = t.value) == null ? void 0 : a.nodes) == null ? void 0 : v.colors) == null ? void 0 : f.fill) || "#93A392",
        selected: {
          stroke: ((m = (c = (x = (y = t.value) == null ? void 0 : y.nodes) == null ? void 0 : x.colors) == null ? void 0 : c.selected) == null ? void 0 : m.stroke) || "#9DC4B5",
          fill: (d = (g = (u = (h = t.value) == null ? void 0 : h.nodes) == null ? void 0 : u.colors) == null ? void 0 : g.selected) == null ? void 0 : d.fill
        },
        hover: {
          stroke: "#9DC4B5",
          fill: (M = (k = (w = (N = t.value) == null ? void 0 : N.nodes) == null ? void 0 : w.colors) == null ? void 0 : k.hover) == null ? void 0 : M.fill
        },
        pinned: {
          stroke: "#9DC4B5",
          fill: (_ = (A = (E = (C = t.value) == null ? void 0 : C.nodes) == null ? void 0 : E.colors) == null ? void 0 : A.pinned) == null ? void 0 : _.fill
        },
        label: {
          fill: ((it = (rt = (z = (S = t.value) == null ? void 0 : S.nodes) == null ? void 0 : z.colors) == null ? void 0 : rt.label) == null ? void 0 : it.fill) || "#93A392"
        }
      },
      link: {
        stroke: ((lt = (ot = (st = t.value) == null ? void 0 : st.links) == null ? void 0 : ot.colors) == null ? void 0 : lt.stroke) || "#BAD9A2",
        fill: (ft = (ut = (at = t.value) == null ? void 0 : at.links) == null ? void 0 : ut.colors) == null ? void 0 : ft.fill,
        selected: {
          stroke: ((gt = (vt = (ht = (ct = t.value) == null ? void 0 : ct.links) == null ? void 0 : ht.colors) == null ? void 0 : vt.selected) == null ? void 0 : gt.stroke) || "#9DC4B5",
          fill: (wt = (xt = (dt = (yt = t.value) == null ? void 0 : yt.links) == null ? void 0 : dt.colors) == null ? void 0 : xt.selected) == null ? void 0 : wt.fill
        },
        hover: {
          stroke: "#9DC4B5",
          fill: (Nt = (mt = (pt = (_t = t.value) == null ? void 0 : _t.links) == null ? void 0 : pt.colors) == null ? void 0 : mt.hover) == null ? void 0 : Nt.fill
        },
        label: {
          fill: ((Et = (Mt = (At = (kt = t.value) == null ? void 0 : kt.links) == null ? void 0 : At.colors) == null ? void 0 : Mt.label) == null ? void 0 : Et.fill) || "#93A392"
        }
      }
    };
  }), e = R(() => {
    var i, l, s, a, v, f, y, x;
    return {
      static: ((l = (i = t.value) == null ? void 0 : i.simulation) == null ? void 0 : l.static) || !1,
      force: {
        x: ((a = (s = t.value) == null ? void 0 : s.simulation) == null ? void 0 : a.force.x) || je,
        y: ((f = (v = t.value) == null ? void 0 : v.simulation) == null ? void 0 : f.force.y) || Xe,
        charge: ((x = (y = t.value) == null ? void 0 : y.simulation) == null ? void 0 : x.force.charge) || Ge
      }
    };
  }), r = R(() => {
    var i, l, s, a, v;
    return {
      size: ((l = (i = t.value) == null ? void 0 : i.nodes) == null ? void 0 : l.size) || Ue,
      font: {
        size: ((v = (a = (s = t.value) == null ? void 0 : s.nodes) == null ? void 0 : a.font) == null ? void 0 : v.size) || Ve
      }
    };
  }), o = R(() => {
    var i, l;
    return {
      width: ((l = (i = t.value) == null ? void 0 : i.links) == null ? void 0 : l.width) || We
    };
  });
  return {
    simulation: e,
    theme: n,
    nodes: r,
    links: o
  };
}, $e = ["viewBox"], Ke = {
  id: "l-links",
  class: "links"
}, Qe = ["id", "d", "onClick", "onTouchstartPassive"], Ze = {
  id: "l-nodes",
  class: "nodes"
}, Je = ["viewBox", "width", "height", "x", "y", "title", "onClick", "onTouchendPassive", "onMousedown", "onTouchstartPassive", "innerHTML"], tn = ["r", "cx", "cy", "title", "onClick", "onTouchendPassive", "onMousedown", "onTouchstartPassive"], en = {
  id: "node-labels",
  class: "labels"
}, nn = ["x", "y", "font-size", "stroke-width"], on = /* @__PURE__ */ Vt({
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
    var C;
    const e = t;
    Wt((E) => ({
      "0d0649ae": p(r).node.stroke,
      "129de2b4": p(r).node.fill,
      "21cc97a5": p(r).node.selected.stroke || p(r).node.stroke,
      eb6046f6: p(r).node.selected.fill || p(r).node.fill,
      "083943a2": p(r).node.pinned.stroke || p(r).node.stroke,
      "43440f02": p(r).node.pinned.fill || p(r).node.fill,
      23534604: p(r).node.hover.stroke || p(r).node.stroke,
      "29f29264": p(r).node.hover.fill || p(r).node.fill,
      "4fee3231": p(r).link.stroke,
      d3ed4888: p(r).link.fill,
      "836e7ddc": p(r).link.selected.stroke,
      "2c67a246": p(r).link.selected.fill,
      "67f2e35b": p(r).node.hover.stroke,
      "1efc4f66": p(r).node.hover.fill,
      "2cedffb6": p(r).link.label.fill,
      a6e126a4: p(r).node.label.fill
    }));
    const {
      theme: r,
      simulation: o,
      nodes: i,
      links: l
    } = qe(K(() => e.options)), s = V(null), a = V({ width: 100, height: 100 });
    Kt(s, (E) => {
      const A = E[0];
      a.value = {
        width: A.contentRect.width,
        height: A.contentRect.height
      };
    });
    const { simulation: v } = Ye(
      K(() => e.nodes),
      K(() => e.links),
      a,
      o
    ), { dragStart: f, dragEnd: y, move: x } = Qt(
      v,
      (C = e.options) == null ? void 0 : C.draggables
    ), {
      label: c,
      getSize: m,
      getWidth: h,
      getClass: u,
      getHeight: g,
      getStyle: d
    } = Zt(i), {
      getPath: N,
      getAttrs: w,
      getClass: k,
      getStyle: M
    } = Jt(l);
    return (E, A) => (P(), I("svg", {
      ref_key: "svg",
      ref: s,
      xmlns: "http://www.w3.org/2000/svg",
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      preserveAspectRatio: "xMinYMin",
      viewBox: `0 0 ${a.value.width} ${a.value.height}`,
      class: "svg-container",
      onMouseup: A[0] || (A[0] = //@ts-ignore
      (..._) => p(y) && p(y)(..._)),
      onTouchendPassive: A[1] || (A[1] = //@ts-ignore
      (..._) => p(y) && p(y)(..._)),
      onTouchstartPassive: A[2] || (A[2] = async () => {
      }),
      onMousemove: A[3] || (A[3] = //@ts-ignore
      (..._) => p(x) && p(x)(..._))
    }, [
      Q("g", Ke, [
        (P(!0), I(X, null, Z(t.links, (_) => (P(), I("path", qt({
          id: _.id,
          key: _.id,
          d: p(N)(_)
        }, p(w)(_), {
          class: p(k)(_.id),
          style: p(M)(_),
          onClick: (S) => n("link-click", S, _),
          onTouchstartPassive: (S) => n("link-click", S, _)
        }), null, 16, Qe))), 128))
      ]),
      Q("g", Ze, [
        (P(!0), I(X, null, Z(t.nodes, (_, S) => (P(), I(X, { key: S }, [
          _.innerSVG ? (P(), I("svg", {
            key: 0,
            viewBox: _.innerSVG.viewBox,
            width: p(h)(_),
            height: p(g)(_),
            x: (_.x || 0) - p(h)(_) / 2,
            y: (_.y || 0) - p(g)(_) / 2,
            style: zt(p(d)(_)),
            title: _.name,
            class: Ct(p(u)(_, ["node-svg"])),
            onClick: (z) => n("node-click", z, _),
            onTouchendPassive: (z) => n("node-click", z, _),
            onMousedown: G((z) => p(f)(z, S), ["prevent"]),
            onTouchstartPassive: G((z) => p(f)(z, S), ["prevent"]),
            innerHTML: _.innerSVG.innerHtml
          }, null, 46, Je)) : (P(), I("circle", {
            key: 1,
            r: p(m)(_) / 2,
            cx: _.x || 0,
            cy: _.y || 0,
            style: zt(p(d)(_)),
            title: _.name,
            class: Ct(p(u)(_)),
            onClick: (z) => E.$emit("node-click", z, _),
            onTouchendPassive: (z) => E.$emit("node-click", z, _),
            onMousedown: G((z) => p(f)(z, S), ["prevent"]),
            onTouchstartPassive: G((z) => p(f)(z, S), ["prevent"])
          }, null, 46, tn))
        ], 64))), 128))
      ]),
      Q("g", en, [
        (P(!0), I(X, null, Z(t.nodes, (_) => (P(), I("text", {
          key: _.id,
          class: "node-label",
          x: (_.x || 0) + p(m)(_) / 2 + p(c).font.size / 2,
          y: (_.y || 0) + p(c).offset.y,
          "font-size": p(c).font.size,
          "stroke-width": p(c).font.size / 8
        }, $t(_.name), 9, nn))), 128))
      ])
    ], 40, $e));
  }
});
export {
  on as D3NetworkGraph,
  Ye as useSimulation
};
