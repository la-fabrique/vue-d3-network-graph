import { ref as V, reactive as Gt, toValue as J, computed as R, defineComponent as Ut, useCssVars as Vt, unref as p, toRef as K, openBlock as P, createElementBlock as L, createElementVNode as Q, Fragment as X, renderList as Z, mergeProps as Wt, normalizeStyle as bt, normalizeClass as zt, withModifiers as G, toDisplayString as qt } from "vue";
import { watchDebounced as Ct, useResizeObserver as $t } from "@vueuse/core";
function Kt(t, n) {
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
      f.fx = null, f.fy = null, u();
    }
  }, u = () => {
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
function Qt(t) {
  const n = (s) => s.size || t.value.size, e = (s) => s.width || t.value.size, r = (s) => s.height || s.size || t.value.size, o = (s) => s.color ? "fill: " + s.color : "", i = (s, u = []) => {
    const g = s.cssClass ? s.cssClass : [];
    return g.push("node"), u.forEach((f) => g.push(f)), (s.fx || s.fy) && g.push("pinned"), g;
  };
  return { label: R(() => ({
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
      var l, s, u, g;
      if (typeof i.source != "number" && typeof i.source != "string" && typeof i.target != "number" && typeof i.target != "string") {
        const f = {
          M: [((l = i == null ? void 0 : i.source) == null ? void 0 : l.x) || 0, ((s = i == null ? void 0 : i.source) == null ? void 0 : s.y) || 0],
          X: [((u = i == null ? void 0 : i.target) == null ? void 0 : u.x) || 0, ((g = i == null ? void 0 : i.target) == null ? void 0 : g.y) || 0]
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
function Jt(t) {
  const n = +this._x.call(null, t), e = +this._y.call(null, t);
  return Ft(this.cover(n, e), n, e, t);
}
function Ft(t, n, e, r) {
  if (isNaN(n) || isNaN(e))
    return t;
  var o, i = t._root, l = { data: r }, s = t._x0, u = t._y0, g = t._x1, f = t._y1, y, x, c, m, h, a, v, d;
  if (!i)
    return t._root = l, t;
  for (; i.length; )
    if ((h = n >= (y = (s + g) / 2)) ? s = y : g = y, (a = e >= (x = (u + f) / 2)) ? u = x : f = x, o = i, !(i = i[v = a << 1 | h]))
      return o[v] = l, t;
  if (c = +t._x.call(null, i.data), m = +t._y.call(null, i.data), n === c && e === m)
    return l.next = i, o ? o[v] = l : t._root = l, t;
  do
    o = o ? o[v] = new Array(4) : t._root = new Array(4), (h = n >= (y = (s + g) / 2)) ? s = y : g = y, (a = e >= (x = (u + f) / 2)) ? u = x : f = x;
  while ((v = a << 1 | h) === (d = (m >= x) << 1 | c >= y));
  return o[d] = i, o[v] = l, t;
}
function te(t) {
  var n, e, r = t.length, o, i, l = new Array(r), s = new Array(r), u = 1 / 0, g = 1 / 0, f = -1 / 0, y = -1 / 0;
  for (e = 0; e < r; ++e)
    isNaN(o = +this._x.call(null, n = t[e])) || isNaN(i = +this._y.call(null, n)) || (l[e] = o, s[e] = i, o < u && (u = o), o > f && (f = o), i < g && (g = i), i > y && (y = i));
  if (u > f || g > y)
    return this;
  for (this.cover(u, g).cover(f, y), e = 0; e < r; ++e)
    Ft(this, l[e], s[e], t[e]);
  return this;
}
function ee(t, n) {
  if (isNaN(t = +t) || isNaN(n = +n))
    return this;
  var e = this._x0, r = this._y0, o = this._x1, i = this._y1;
  if (isNaN(e))
    o = (e = Math.floor(t)) + 1, i = (r = Math.floor(n)) + 1;
  else {
    for (var l = o - e || 1, s = this._root, u, g; e > t || t >= o || r > n || n >= i; )
      switch (g = (n < r) << 1 | t < e, u = new Array(4), u[g] = s, s = u, l *= 2, g) {
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
  var r, o = this._x0, i = this._y0, l, s, u, g, f = this._x1, y = this._y1, x = [], c = this._root, m, h;
  for (c && x.push(new C(c, o, i, f, y)), e == null ? e = 1 / 0 : (o = t - e, i = n - e, f = t + e, y = n + e, e *= e); m = x.pop(); )
    if (!(!(c = m.node) || (l = m.x0) > f || (s = m.y0) > y || (u = m.x1) < o || (g = m.y1) < i))
      if (c.length) {
        var a = (l + u) / 2, v = (s + g) / 2;
        x.push(
          new C(c[3], a, v, u, g),
          new C(c[2], l, v, a, g),
          new C(c[1], a, s, u, v),
          new C(c[0], l, s, a, v)
        ), (h = (n >= v) << 1 | t >= a) && (m = x[x.length - 1], x[x.length - 1] = x[x.length - 1 - h], x[x.length - 1 - h] = m);
      } else {
        var d = t - +this._x.call(null, c.data), N = n - +this._y.call(null, c.data), w = d * d + N * N;
        if (w < e) {
          var k = Math.sqrt(e = w);
          o = t - k, i = n - k, f = t + k, y = n + k, r = c.data;
        }
      }
  return r;
}
function se(t) {
  if (isNaN(f = +this._x.call(null, t)) || isNaN(y = +this._y.call(null, t)))
    return this;
  var n, e = this._root, r, o, i, l = this._x0, s = this._y0, u = this._x1, g = this._y1, f, y, x, c, m, h, a, v;
  if (!e)
    return this;
  if (e.length)
    for (; ; ) {
      if ((m = f >= (x = (l + u) / 2)) ? l = x : u = x, (h = y >= (c = (s + g) / 2)) ? s = c : g = c, n = e, !(e = e[a = h << 1 | m]))
        return this;
      if (!e.length)
        break;
      (n[a + 1 & 3] || n[a + 2 & 3] || n[a + 3 & 3]) && (r = n, v = a);
    }
  for (; e.data !== t; )
    if (o = e, !(e = e.next))
      return this;
  return (i = e.next) && delete e.next, o ? (i ? o.next = i : delete o.next, this) : n ? (i ? n[a] = i : delete n[a], (e = n[0] || n[1] || n[2] || n[3]) && e === (n[3] || n[2] || n[1] || n[0]) && !e.length && (r ? r[v] = e : this._root = e), this) : (this._root = i, this);
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
  var n = [], e, r = this._root, o, i, l, s, u;
  for (r && n.push(new C(r, this._x0, this._y0, this._x1, this._y1)); e = n.pop(); )
    if (!t(r = e.node, i = e.x0, l = e.y0, s = e.x1, u = e.y1) && r.length) {
      var g = (i + s) / 2, f = (l + u) / 2;
      (o = r[3]) && n.push(new C(o, g, f, s, u)), (o = r[2]) && n.push(new C(o, i, f, g, u)), (o = r[1]) && n.push(new C(o, g, l, s, f)), (o = r[0]) && n.push(new C(o, i, l, g, f));
    }
  return this;
}
function fe(t) {
  var n = [], e = [], r;
  for (this._root && n.push(new C(this._root, this._x0, this._y0, this._x1, this._y1)); r = n.pop(); ) {
    var o = r.node;
    if (o.length) {
      var i, l = r.x0, s = r.y0, u = r.x1, g = r.y1, f = (l + u) / 2, y = (s + g) / 2;
      (i = o[0]) && n.push(new C(i, l, s, f, y)), (i = o[1]) && n.push(new C(i, f, s, u, y)), (i = o[2]) && n.push(new C(i, l, y, f, g)), (i = o[3]) && n.push(new C(i, f, y, u, g));
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
function It(t, n, e) {
  var r = new nt(n ?? ce, e ?? ve, NaN, NaN, NaN, NaN);
  return t == null ? r : r.addAll(t);
}
function nt(t, n, e, r, o, i) {
  this._x = t, this._y = n, this._x0 = e, this._y0 = r, this._x1 = o, this._y1 = i, this._root = void 0;
}
function Tt(t) {
  for (var n = { data: t.data }, e = n; t = t.next; )
    e = e.next = { data: t.data };
  return n;
}
var T = It.prototype = nt.prototype;
T.copy = function() {
  var t = new nt(this._x, this._y, this._x0, this._y0, this._x1, this._y1), n = this._root, e, r;
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
function D(t) {
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
  var n = ye, e = y, r, o = D(30), i, l, s, u, g, f = 1;
  t == null && (t = []);
  function y(a) {
    return 1 / Math.min(s[a.source.index], s[a.target.index]);
  }
  function x(a) {
    for (var v = 0, d = t.length; v < f; ++v)
      for (var N = 0, w, k, M, z, E, A, _; N < d; ++N)
        w = t[N], k = w.source, M = w.target, z = M.x + M.vx - k.x - k.vx || I(g), E = M.y + M.vy - k.y - k.vy || I(g), A = Math.sqrt(z * z + E * E), A = (A - i[N]) / A * a * r[N], z *= A, E *= A, M.vx -= z * (_ = u[N]), M.vy -= E * _, k.vx += z * (_ = 1 - _), k.vy += E * _;
  }
  function c() {
    if (l) {
      var a, v = l.length, d = t.length, N = new Map(l.map((k, M) => [n(k, M, l), k])), w;
      for (a = 0, s = new Array(v); a < d; ++a)
        w = t[a], w.index = a, typeof w.source != "object" && (w.source = Dt(N, w.source)), typeof w.target != "object" && (w.target = Dt(N, w.target)), s[w.source.index] = (s[w.source.index] || 0) + 1, s[w.target.index] = (s[w.target.index] || 0) + 1;
      for (a = 0, u = new Array(d); a < d; ++a)
        w = t[a], u[a] = s[w.source.index] / (s[w.source.index] + s[w.target.index]);
      r = new Array(d), m(), i = new Array(d), h();
    }
  }
  function m() {
    if (l)
      for (var a = 0, v = t.length; a < v; ++a)
        r[a] = +e(t[a], a, t);
  }
  function h() {
    if (l)
      for (var a = 0, v = t.length; a < v; ++a)
        i[a] = +o(t[a], a, t);
  }
  return x.initialize = function(a, v) {
    l = a, g = v, c();
  }, x.links = function(a) {
    return arguments.length ? (t = a, c(), x) : t;
  }, x.id = function(a) {
    return arguments.length ? (n = a, x) : n;
  }, x.iterations = function(a) {
    return arguments.length ? (f = +a, x) : f;
  }, x.strength = function(a) {
    return arguments.length ? (e = typeof a == "function" ? a : D(+a), m(), x) : e;
  }, x.distance = function(a) {
    return arguments.length ? (o = typeof a == "function" ? a : D(+a), h(), x) : o;
  }, x;
}
var xe = { value: () => {
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
function we(t, n) {
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
    var e = this._, r = we(t + "", e), o, i = -1, l = r.length;
    if (arguments.length < 2) {
      for (; ++i < l; )
        if ((o = (t = r[i]).type) && (o = _e(e[o], t.name)))
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
var O = 0, H = 0, B = 0, Bt = 1e3, W, Y, q = 0, F = 0, $ = 0, j = typeof performance == "object" && performance.now ? performance : Date, Rt = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function Ht() {
  return F || (Rt(pe), F = j.now() + $);
}
function pe() {
  F = 0;
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
function me() {
  Ht(), ++O;
  for (var t = W, n; t; )
    (n = F - t._time) >= 0 && t._call.call(void 0, n), t = t._next;
  --O;
}
function Pt() {
  F = (q = j.now()) + $, O = H = 0;
  try {
    me();
  } finally {
    O = 0, ke(), F = 0;
  }
}
function Ne() {
  var t = j.now(), n = t - q;
  n > Bt && ($ -= n, q = t);
}
function ke() {
  for (var t, n = W, e, r = 1 / 0; n; )
    n._call ? (r > n._time && (r = n._time), t = n, n = n._next) : (e = n._next, n._next = null, n = t ? t._next = e : W = e);
  Y = t, et(r);
}
function et(t) {
  if (!O) {
    H && (H = clearTimeout(H));
    var n = t - F;
    n > 24 ? (t < 1 / 0 && (H = setTimeout(Pt, t - j.now() - $)), B && (B = clearInterval(B))) : (B || (q = j.now(), B = setInterval(Ne, Bt)), O = 1, Rt(Pt));
  }
}
const Ae = 1664525, Me = 1013904223, Lt = 4294967296;
function Ee() {
  let t = 1;
  return () => (t = (Ae * t + Me) % Lt) / Lt;
}
function be(t) {
  return t.x;
}
function ze(t) {
  return t.y;
}
var Ce = 10, Te = Math.PI * (3 - Math.sqrt(5));
function De(t) {
  var n, e = 1, r = 1e-3, o = 1 - Math.pow(r, 1 / 300), i = 0, l = 0.6, s = /* @__PURE__ */ new Map(), u = Yt(y), g = Ot("tick", "end"), f = Ee();
  t == null && (t = []);
  function y() {
    x(), g.call("tick", n), e < r && (u.stop(), g.call("end", n));
  }
  function x(h) {
    var a, v = t.length, d;
    h === void 0 && (h = 1);
    for (var N = 0; N < h; ++N)
      for (e += (i - e) * o, s.forEach(function(w) {
        w(e);
      }), a = 0; a < v; ++a)
        d = t[a], d.fx == null ? d.x += d.vx *= l : (d.x = d.fx, d.vx = 0), d.fy == null ? d.y += d.vy *= l : (d.y = d.fy, d.vy = 0);
    return n;
  }
  function c() {
    for (var h = 0, a = t.length, v; h < a; ++h) {
      if (v = t[h], v.index = h, v.fx != null && (v.x = v.fx), v.fy != null && (v.y = v.fy), isNaN(v.x) || isNaN(v.y)) {
        var d = Ce * Math.sqrt(0.5 + h), N = h * Te;
        v.x = d * Math.cos(N), v.y = d * Math.sin(N);
      }
      (isNaN(v.vx) || isNaN(v.vy)) && (v.vx = v.vy = 0);
    }
  }
  function m(h) {
    return h.initialize && h.initialize(t, f), h;
  }
  return c(), n = {
    tick: x,
    restart: function() {
      return u.restart(y), n;
    },
    stop: function() {
      return u.stop(), n;
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
    force: function(h, a) {
      return arguments.length > 1 ? (a == null ? s.delete(h) : s.set(h, m(a)), n) : s.get(h);
    },
    find: function(h, a, v) {
      var d = 0, N = t.length, w, k, M, z, E;
      for (v == null ? v = 1 / 0 : v *= v, d = 0; d < N; ++d)
        z = t[d], w = h - z.x, k = a - z.y, M = w * w + k * k, M < v && (E = z, v = M);
      return E;
    },
    on: function(h, a) {
      return arguments.length > 1 ? (g.on(h, a), n) : g.on(h);
    }
  };
}
function Se() {
  var t, n, e, r, o = D(-30), i, l = 1, s = 1 / 0, u = 0.81;
  function g(c) {
    var m, h = t.length, a = It(t, be, ze).visitAfter(y);
    for (r = c, m = 0; m < h; ++m)
      n = t[m], a.visit(x);
  }
  function f() {
    if (t) {
      var c, m = t.length, h;
      for (i = new Array(m), c = 0; c < m; ++c)
        h = t[c], i[h.index] = +o(h, c, t);
    }
  }
  function y(c) {
    var m = 0, h, a, v = 0, d, N, w;
    if (c.length) {
      for (d = N = w = 0; w < 4; ++w)
        (h = c[w]) && (a = Math.abs(h.value)) && (m += h.value, v += a, d += a * h.x, N += a * h.y);
      c.x = d / v, c.y = N / v;
    } else {
      h = c, h.x = h.data.x, h.y = h.data.y;
      do
        m += i[h.data.index];
      while (h = h.next);
    }
    c.value = m;
  }
  function x(c, m, h, a) {
    if (!c.value)
      return !0;
    var v = c.x - n.x, d = c.y - n.y, N = a - m, w = v * v + d * d;
    if (N * N / u < w)
      return w < s && (v === 0 && (v = I(e), w += v * v), d === 0 && (d = I(e), w += d * d), w < l && (w = Math.sqrt(l * w)), n.vx += v * c.value * r / w, n.vy += d * c.value * r / w), !0;
    if (c.length || w >= s)
      return;
    (c.data !== n || c.next) && (v === 0 && (v = I(e), w += v * v), d === 0 && (d = I(e), w += d * d), w < l && (w = Math.sqrt(l * w)));
    do
      c.data !== n && (N = i[c.data.index] * r / w, n.vx += v * N, n.vy += d * N);
    while (c = c.next);
  }
  return g.initialize = function(c, m) {
    t = c, e = m, f();
  }, g.strength = function(c) {
    return arguments.length ? (o = typeof c == "function" ? c : D(+c), f(), g) : o;
  }, g.distanceMin = function(c) {
    return arguments.length ? (l = c * c, g) : Math.sqrt(l);
  }, g.distanceMax = function(c) {
    return arguments.length ? (s = c * c, g) : Math.sqrt(s);
  }, g.theta = function(c) {
    return arguments.length ? (u = c * c, g) : Math.sqrt(u);
  }, g;
}
function Pe(t) {
  var n = D(0.1), e, r, o;
  typeof t != "function" && (t = D(t == null ? 0 : +t));
  function i(s) {
    for (var u = 0, g = e.length, f; u < g; ++u)
      f = e[u], f.vx += (o[u] - f.x) * r[u] * s;
  }
  function l() {
    if (e) {
      var s, u = e.length;
      for (r = new Array(u), o = new Array(u), s = 0; s < u; ++s)
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
    for (var u = 0, g = e.length, f; u < g; ++u)
      f = e[u], f.vy += (o[u] - f.y) * r[u] * s;
  }
  function l() {
    if (e) {
      var s, u = e.length;
      for (r = new Array(u), o = new Array(u), s = 0; s < u; ++s)
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
const Fe = "X", Ie = "Y", Oe = "charge", Be = "link", jt = 0.01, Xt = 0.1, Re = Math.log(jt) / Math.log(1 - Xt);
function He(t, n, e, r) {
  const o = async () => {
    l.value.stop(), l.value = i(), r.value.static ? l.value.tick(Re) : l.value.restart();
  }, i = () => {
    const s = De().stop().alphaMin(jt).alphaDecay(Xt).nodes(t.value);
    return s.force(
      Fe,
      Pe(e.value.width / 2).strength(r.value.force.x)
    ), s.force(
      Ie,
      Le(e.value.height / 2).strength(r.value.force.y)
    ), s.force(
      Oe,
      Se().strength(r.value.charge)
    ), s.force(
      Be,
      de(n.value).id((u) => {
        if (!("id" in u))
          throw new Error("Node id is undefined");
        return u.id;
      })
    ), s;
  }, l = V(i());
  return Ct(
    [() => J(t).length, () => J(n).length, e],
    async () => o(),
    { debounce: 100, maxWait: 1e3 }
  ), Ct(
    () => r.value,
    async () => o(),
    { deep: !0, debounce: 100, maxWait: 1e3 }
  ), {
    simulation: l,
    animate: o
  };
}
const Ye = 0.5, je = 0.5, Xe = -350, Ge = 40, Ue = 10, Ve = 2, We = (t) => {
  const n = R(() => {
    var i, l, s, u, g, f, y, x, c, m, h, a, v, d, N, w, k, M, z, E, A, _, S, b, rt, it, st, ot, lt, at, ut, ft, ct, ht, vt, gt, yt, dt, xt, wt, _t, pt, mt, Nt, kt, At, Mt, Et;
    return {
      node: {
        stroke: ((s = (l = (i = t.value) == null ? void 0 : i.nodes) == null ? void 0 : l.colors) == null ? void 0 : s.stroke) || "#E2EB98",
        fill: ((f = (g = (u = t.value) == null ? void 0 : u.nodes) == null ? void 0 : g.colors) == null ? void 0 : f.fill) || "#93A392",
        selected: {
          stroke: ((m = (c = (x = (y = t.value) == null ? void 0 : y.nodes) == null ? void 0 : x.colors) == null ? void 0 : c.selected) == null ? void 0 : m.stroke) || "#9DC4B5",
          fill: (d = (v = (a = (h = t.value) == null ? void 0 : h.nodes) == null ? void 0 : a.colors) == null ? void 0 : v.selected) == null ? void 0 : d.fill
        },
        hover: {
          stroke: "#9DC4B5",
          fill: (M = (k = (w = (N = t.value) == null ? void 0 : N.nodes) == null ? void 0 : w.colors) == null ? void 0 : k.hover) == null ? void 0 : M.fill
        },
        pinned: {
          stroke: "#9DC4B5",
          fill: (_ = (A = (E = (z = t.value) == null ? void 0 : z.nodes) == null ? void 0 : E.colors) == null ? void 0 : A.pinned) == null ? void 0 : _.fill
        },
        label: {
          fill: ((it = (rt = (b = (S = t.value) == null ? void 0 : S.nodes) == null ? void 0 : b.colors) == null ? void 0 : rt.label) == null ? void 0 : it.fill) || "#93A392"
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
    var i, l, s, u, g, f, y, x;
    return {
      static: ((l = (i = t.value) == null ? void 0 : i.simulation) == null ? void 0 : l.static) || !1,
      force: {
        x: ((u = (s = t.value) == null ? void 0 : s.simulation) == null ? void 0 : u.force.x) || Ye,
        y: ((f = (g = t.value) == null ? void 0 : g.simulation) == null ? void 0 : f.force.y) || je
      },
      charge: ((x = (y = t.value) == null ? void 0 : y.simulation) == null ? void 0 : x.charge) || Xe
    };
  }), r = R(() => {
    var i, l, s, u, g;
    return {
      size: ((l = (i = t.value) == null ? void 0 : i.nodes) == null ? void 0 : l.size) || Ge,
      font: {
        size: ((g = (u = (s = t.value) == null ? void 0 : s.nodes) == null ? void 0 : u.font) == null ? void 0 : g.size) || Ue
      }
    };
  }), o = R(() => {
    var i, l;
    return {
      width: ((l = (i = t.value) == null ? void 0 : i.links) == null ? void 0 : l.width) || Ve
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
    var z;
    const e = t;
    Vt((E) => ({
      "2eeeb8c9": p(r).node.stroke,
      "782aa854": p(r).node.fill,
      "01dadd45": p(r).node.selected.stroke || p(r).node.stroke,
      "9abc1bb6": p(r).node.selected.fill || p(r).node.fill,
      "645c7142": p(r).node.pinned.stroke || p(r).node.stroke,
      "7341e6bc": p(r).node.pinned.fill || p(r).node.fill,
      "0543e464": p(r).node.hover.stroke || p(r).node.stroke,
      "3eb160c4": p(r).node.hover.fill || p(r).node.fill,
      f53fe05e: p(r).link.stroke,
      "08d3bd48": p(r).link.fill,
      "2c863772": p(r).link.selected.stroke,
      "33b3bd3d": p(r).link.selected.fill,
      "549fee0a": p(r).node.hover.stroke,
      "67065d06": p(r).node.hover.fill,
      "74f80d56": p(r).link.label.fill,
      "16cd0b64": p(r).node.label.fill
    }));
    const {
      theme: r,
      simulation: o,
      nodes: i,
      links: l
    } = We(K(() => e.options)), s = V(null), u = V({ width: 100, height: 100 });
    $t(s, (E) => {
      const A = E[0];
      u.value = {
        width: A.contentRect.width,
        height: A.contentRect.height
      };
    });
    const { simulation: g } = He(
      K(() => e.nodes),
      K(() => e.links),
      u,
      o
    ), { dragStart: f, dragEnd: y, move: x } = Kt(
      g,
      (z = e.options) == null ? void 0 : z.draggables
    ), {
      label: c,
      getSize: m,
      getWidth: h,
      getClass: a,
      getHeight: v,
      getStyle: d
    } = Qt(i), {
      getPath: N,
      getAttrs: w,
      getClass: k,
      getStyle: M
    } = Zt(l);
    return (E, A) => (P(), L("svg", {
      ref_key: "svg",
      ref: s,
      xmlns: "http://www.w3.org/2000/svg",
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      preserveAspectRatio: "xMinYMin",
      viewBox: `0 0 ${u.value.width} ${u.value.height}`,
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
      Q("g", $e, [
        (P(!0), L(X, null, Z(t.links, (_) => (P(), L("path", Wt({
          id: _.id,
          key: _.id,
          d: p(N)(_)
        }, p(w)(_), {
          class: p(k)(_.id),
          style: p(M)(_),
          onClick: (S) => n("link-click", S, _),
          onTouchstartPassive: (S) => n("link-click", S, _)
        }), null, 16, Ke))), 128))
      ]),
      Q("g", Qe, [
        (P(!0), L(X, null, Z(t.nodes, (_, S) => (P(), L(X, { key: S }, [
          _.innerSVG ? (P(), L("svg", {
            key: 0,
            viewBox: _.innerSVG.viewBox,
            width: p(h)(_),
            height: p(v)(_),
            x: (_.x || 0) - p(h)(_) / 2,
            y: (_.y || 0) - p(v)(_) / 2,
            style: bt(p(d)(_)),
            title: _.name,
            class: zt(p(a)(_, ["node-svg"])),
            onClick: (b) => n("node-click", b, _),
            onTouchendPassive: (b) => n("node-click", b, _),
            onMousedown: G((b) => p(f)(b, S), ["prevent"]),
            onTouchstartPassive: G((b) => p(f)(b, S), ["prevent"]),
            innerHTML: _.innerSVG.innerHtml
          }, null, 46, Ze)) : (P(), L("circle", {
            key: 1,
            r: p(m)(_) / 2,
            cx: _.x || 0,
            cy: _.y || 0,
            style: bt(p(d)(_)),
            title: _.name,
            class: zt(p(a)(_)),
            onClick: (b) => E.$emit("node-click", b, _),
            onTouchendPassive: (b) => E.$emit("node-click", b, _),
            onMousedown: G((b) => p(f)(b, S), ["prevent"]),
            onTouchstartPassive: G((b) => p(f)(b, S), ["prevent"])
          }, null, 46, Je))
        ], 64))), 128))
      ]),
      Q("g", tn, [
        (P(!0), L(X, null, Z(t.nodes, (_) => (P(), L("text", {
          key: _.id,
          class: "node-label",
          x: (_.x || 0) + p(m)(_) / 2 + p(c).font.size / 2,
          y: (_.y || 0) + p(c).offset.y,
          "font-size": p(c).font.size,
          "stroke-width": p(c).font.size / 8
        }, qt(_.name), 9, en))), 128))
      ])
    ], 40, qe));
  }
});
export {
  sn as D3NetworkGraph
};
