import { ref as et, reactive as ut, toValue as D, computed as xt, watch as _t, defineComponent as dt, useCssVars as mt, unref as d, openBlock as B, createElementBlock as I, createElementVNode as Z, Fragment as U, renderList as K, mergeProps as Nt, normalizeStyle as rt, normalizeClass as it, withModifiers as V, toDisplayString as At } from "vue";
import { useResizeObserver as Mt } from "@vueuse/core";
function Et(t, e) {
  const n = et(void 0), r = ut({
    x: 0,
    y: 0
  }), i = (c) => {
    let y, p = 0;
    return c instanceof MouseEvent ? (y = c.clientX, p = c.clientY) : c instanceof TouchEvent && (y = c.touches[0].clientX, p = c.touches[0].clientY), { x: y || 0, y: p || 0 };
  }, s = (c, y) => D(e) ? (() => {
    n.value = y, l(c, t.value.nodes()[y]);
  })() : void 0, l = (c, y) => {
    let p = 0, a = 0;
    if (c && y && (y != null && y.x) && (y != null && y.y)) {
      const _ = i(c);
      p = _.x ? _.x - y.x : y.x, a = _.y ? _.y - y.y : y.y;
    }
    r.x = p, r.y = a;
  }, o = () => {
    if (n.value !== void 0) {
      const c = t.value.nodes()[n.value];
      c.fx = null, c.fy = null, g();
    }
  }, g = () => {
    n.value = void 0, t.value.alpha(0.1), t.value.restart(), l();
  };
  return {
    dragStart: s,
    dragEnd: o,
    move: (c) => {
      const y = i(c);
      n.value != null && t.value.nodes()[n.value] && (t.value.restart(), t.value.alpha(0.5), t.value.nodes()[n.value].fx = y.x - r.x, t.value.nodes()[n.value].fy = y.y - r.y);
    }
  };
}
const Ct = 20, Tt = 10;
function bt(t) {
  const e = () => {
    var u;
    return ((u = D(t)) == null ? void 0 : u.size) || Ct;
  }, n = () => {
    var u, c;
    return ((c = (u = D(t)) == null ? void 0 : u.font) == null ? void 0 : c.size) || Tt;
  }, r = (u) => u.size || e(), i = (u) => u.width || e(), s = (u) => u.height || u.size || e(), l = (u) => u.color ? "fill: " + u.color : "", o = (u, c = []) => {
    const y = u.cssClass ? u.cssClass : [];
    return y.push("node"), c.forEach((p) => y.push(p)), (u.fx || u.fy) && y.push("pinned"), y;
  };
  return { label: xt(() => ({
    font: { size: n() },
    offset: {
      x: e() / 2 + n() / 2,
      y: n() / 2
    }
  })), getSize: r, getWidth: i, getHeight: s, getStyle: l, getClass: o };
}
const zt = 2;
function St(t) {
  const e = () => {
    var l;
    return ((l = D(t)) == null ? void 0 : l.width) || zt;
  };
  return {
    getPath: (l) => {
      var o, g, u, c;
      if (typeof l.source != "number" && typeof l.source != "string" && typeof l.target != "number" && typeof l.target != "string") {
        const y = {
          M: [((o = l == null ? void 0 : l.source) == null ? void 0 : o.x) || 0, ((g = l == null ? void 0 : l.source) == null ? void 0 : g.y) || 0],
          X: [((u = l == null ? void 0 : l.target) == null ? void 0 : u.x) || 0, ((c = l == null ? void 0 : l.target) == null ? void 0 : c.y) || 0]
        };
        return "M " + y.M.join(" ") + " L" + y.X.join(" ");
      }
    },
    getAttrs: (l) => ({ "stroke-width": e() }),
    getClass: (l) => ["link"],
    getStyle: (l) => l.color ? {
      stroke: l.color
    } : {}
  };
}
function Dt(t) {
  const e = +this._x.call(null, t), n = +this._y.call(null, t);
  return ct(this.cover(e, n), e, n, t);
}
function ct(t, e, n, r) {
  if (isNaN(e) || isNaN(n))
    return t;
  var i, s = t._root, l = { data: r }, o = t._x0, g = t._y0, u = t._x1, c = t._y1, y, p, a, _, h, f, v, w;
  if (!s)
    return t._root = l, t;
  for (; s.length; )
    if ((h = e >= (y = (o + u) / 2)) ? o = y : u = y, (f = n >= (p = (g + c) / 2)) ? g = p : c = p, i = s, !(s = s[v = f << 1 | h]))
      return i[v] = l, t;
  if (a = +t._x.call(null, s.data), _ = +t._y.call(null, s.data), e === a && n === _)
    return l.next = s, i ? i[v] = l : t._root = l, t;
  do
    i = i ? i[v] = new Array(4) : t._root = new Array(4), (h = e >= (y = (o + u) / 2)) ? o = y : u = y, (f = n >= (p = (g + c) / 2)) ? g = p : c = p;
  while ((v = f << 1 | h) === (w = (_ >= p) << 1 | a >= y));
  return i[w] = s, i[v] = l, t;
}
function kt(t) {
  var e, n, r = t.length, i, s, l = new Array(r), o = new Array(r), g = 1 / 0, u = 1 / 0, c = -1 / 0, y = -1 / 0;
  for (n = 0; n < r; ++n)
    isNaN(i = +this._x.call(null, e = t[n])) || isNaN(s = +this._y.call(null, e)) || (l[n] = i, o[n] = s, i < g && (g = i), i > c && (c = i), s < u && (u = s), s > y && (y = s));
  if (g > c || u > y)
    return this;
  for (this.cover(g, u).cover(c, y), n = 0; n < r; ++n)
    ct(this, l[n], o[n], t[n]);
  return this;
}
function Ft(t, e) {
  if (isNaN(t = +t) || isNaN(e = +e))
    return this;
  var n = this._x0, r = this._y0, i = this._x1, s = this._y1;
  if (isNaN(n))
    i = (n = Math.floor(t)) + 1, s = (r = Math.floor(e)) + 1;
  else {
    for (var l = i - n || 1, o = this._root, g, u; n > t || t >= i || r > e || e >= s; )
      switch (u = (e < r) << 1 | t < n, g = new Array(4), g[u] = o, o = g, l *= 2, u) {
        case 0:
          i = n + l, s = r + l;
          break;
        case 1:
          n = i - l, s = r + l;
          break;
        case 2:
          i = n + l, r = s - l;
          break;
        case 3:
          n = i - l, r = s - l;
          break;
      }
    this._root && this._root.length && (this._root = o);
  }
  return this._x0 = n, this._y0 = r, this._x1 = i, this._y1 = s, this;
}
function Lt() {
  var t = [];
  return this.visit(function(e) {
    if (!e.length)
      do
        t.push(e.data);
      while (e = e.next);
  }), t;
}
function Pt(t) {
  return arguments.length ? this.cover(+t[0][0], +t[0][1]).cover(+t[1][0], +t[1][1]) : isNaN(this._x0) ? void 0 : [[this._x0, this._y0], [this._x1, this._y1]];
}
function b(t, e, n, r, i) {
  this.node = t, this.x0 = e, this.y0 = n, this.x1 = r, this.y1 = i;
}
function Bt(t, e, n) {
  var r, i = this._x0, s = this._y0, l, o, g, u, c = this._x1, y = this._y1, p = [], a = this._root, _, h;
  for (a && p.push(new b(a, i, s, c, y)), n == null ? n = 1 / 0 : (i = t - n, s = e - n, c = t + n, y = e + n, n *= n); _ = p.pop(); )
    if (!(!(a = _.node) || (l = _.x0) > c || (o = _.y0) > y || (g = _.x1) < i || (u = _.y1) < s))
      if (a.length) {
        var f = (l + g) / 2, v = (o + u) / 2;
        p.push(
          new b(a[3], f, v, g, u),
          new b(a[2], l, v, f, u),
          new b(a[1], f, o, g, v),
          new b(a[0], l, o, f, v)
        ), (h = (e >= v) << 1 | t >= f) && (_ = p[p.length - 1], p[p.length - 1] = p[p.length - 1 - h], p[p.length - 1 - h] = _);
      } else {
        var w = t - +this._x.call(null, a.data), N = e - +this._y.call(null, a.data), x = w * w + N * N;
        if (x < n) {
          var A = Math.sqrt(n = x);
          i = t - A, s = e - A, c = t + A, y = e + A, r = a.data;
        }
      }
  return r;
}
function It(t) {
  if (isNaN(c = +this._x.call(null, t)) || isNaN(y = +this._y.call(null, t)))
    return this;
  var e, n = this._root, r, i, s, l = this._x0, o = this._y0, g = this._x1, u = this._y1, c, y, p, a, _, h, f, v;
  if (!n)
    return this;
  if (n.length)
    for (; ; ) {
      if ((_ = c >= (p = (l + g) / 2)) ? l = p : g = p, (h = y >= (a = (o + u) / 2)) ? o = a : u = a, e = n, !(n = n[f = h << 1 | _]))
        return this;
      if (!n.length)
        break;
      (e[f + 1 & 3] || e[f + 2 & 3] || e[f + 3 & 3]) && (r = e, v = f);
    }
  for (; n.data !== t; )
    if (i = n, !(n = n.next))
      return this;
  return (s = n.next) && delete n.next, i ? (s ? i.next = s : delete i.next, this) : e ? (s ? e[f] = s : delete e[f], (n = e[0] || e[1] || e[2] || e[3]) && n === (e[3] || e[2] || e[1] || e[0]) && !n.length && (r ? r[v] = n : this._root = n), this) : (this._root = s, this);
}
function Ot(t) {
  for (var e = 0, n = t.length; e < n; ++e)
    this.remove(t[e]);
  return this;
}
function Rt() {
  return this._root;
}
function Yt() {
  var t = 0;
  return this.visit(function(e) {
    if (!e.length)
      do
        ++t;
      while (e = e.next);
  }), t;
}
function jt(t) {
  var e = [], n, r = this._root, i, s, l, o, g;
  for (r && e.push(new b(r, this._x0, this._y0, this._x1, this._y1)); n = e.pop(); )
    if (!t(r = n.node, s = n.x0, l = n.y0, o = n.x1, g = n.y1) && r.length) {
      var u = (s + o) / 2, c = (l + g) / 2;
      (i = r[3]) && e.push(new b(i, u, c, o, g)), (i = r[2]) && e.push(new b(i, s, c, u, g)), (i = r[1]) && e.push(new b(i, u, l, o, c)), (i = r[0]) && e.push(new b(i, s, l, u, c));
    }
  return this;
}
function Ht(t) {
  var e = [], n = [], r;
  for (this._root && e.push(new b(this._root, this._x0, this._y0, this._x1, this._y1)); r = e.pop(); ) {
    var i = r.node;
    if (i.length) {
      var s, l = r.x0, o = r.y0, g = r.x1, u = r.y1, c = (l + g) / 2, y = (o + u) / 2;
      (s = i[0]) && e.push(new b(s, l, o, c, y)), (s = i[1]) && e.push(new b(s, c, o, g, y)), (s = i[2]) && e.push(new b(s, l, y, c, u)), (s = i[3]) && e.push(new b(s, c, y, g, u));
    }
    n.push(r);
  }
  for (; r = n.pop(); )
    t(r.node, r.x0, r.y0, r.x1, r.y1);
  return this;
}
function Xt(t) {
  return t[0];
}
function Gt(t) {
  return arguments.length ? (this._x = t, this) : this._x;
}
function Ut(t) {
  return t[1];
}
function Vt(t) {
  return arguments.length ? (this._y = t, this) : this._y;
}
function ht(t, e, n) {
  var r = new nt(e ?? Xt, n ?? Ut, NaN, NaN, NaN, NaN);
  return t == null ? r : r.addAll(t);
}
function nt(t, e, n, r, i, s) {
  this._x = t, this._y = e, this._x0 = n, this._y0 = r, this._x1 = i, this._y1 = s, this._root = void 0;
}
function ot(t) {
  for (var e = { data: t.data }, n = e; t = t.next; )
    n = n.next = { data: t.data };
  return e;
}
var z = ht.prototype = nt.prototype;
z.copy = function() {
  var t = new nt(this._x, this._y, this._x0, this._y0, this._x1, this._y1), e = this._root, n, r;
  if (!e)
    return t;
  if (!e.length)
    return t._root = ot(e), t;
  for (n = [{ source: e, target: t._root = new Array(4) }]; e = n.pop(); )
    for (var i = 0; i < 4; ++i)
      (r = e.source[i]) && (r.length ? n.push({ source: r, target: e.target[i] = new Array(4) }) : e.target[i] = ot(r));
  return t;
};
z.add = Dt;
z.addAll = kt;
z.cover = Ft;
z.data = Lt;
z.extent = Pt;
z.find = Bt;
z.remove = It;
z.removeAll = Ot;
z.root = Rt;
z.size = Yt;
z.visit = jt;
z.visitAfter = Ht;
z.x = Gt;
z.y = Vt;
function S(t) {
  return function() {
    return t;
  };
}
function R(t) {
  return (t() - 0.5) * 1e-6;
}
function qt(t) {
  return t.index;
}
function st(t, e) {
  var n = t.get(e);
  if (!n)
    throw new Error("node not found: " + e);
  return n;
}
function Wt(t) {
  var e = qt, n = y, r, i = S(30), s, l, o, g, u, c = 1;
  t == null && (t = []);
  function y(f) {
    return 1 / Math.min(o[f.source.index], o[f.target.index]);
  }
  function p(f) {
    for (var v = 0, w = t.length; v < c; ++v)
      for (var N = 0, x, A, M, E, C, F, k; N < w; ++N)
        x = t[N], A = x.source, M = x.target, E = M.x + M.vx - A.x - A.vx || R(u), C = M.y + M.vy - A.y - A.vy || R(u), F = Math.sqrt(E * E + C * C), F = (F - s[N]) / F * f * r[N], E *= F, C *= F, M.vx -= E * (k = g[N]), M.vy -= C * k, A.vx += E * (k = 1 - k), A.vy += C * k;
  }
  function a() {
    if (l) {
      var f, v = l.length, w = t.length, N = new Map(l.map((A, M) => [e(A, M, l), A])), x;
      for (f = 0, o = new Array(v); f < w; ++f)
        x = t[f], x.index = f, typeof x.source != "object" && (x.source = st(N, x.source)), typeof x.target != "object" && (x.target = st(N, x.target)), o[x.source.index] = (o[x.source.index] || 0) + 1, o[x.target.index] = (o[x.target.index] || 0) + 1;
      for (f = 0, g = new Array(w); f < w; ++f)
        x = t[f], g[f] = o[x.source.index] / (o[x.source.index] + o[x.target.index]);
      r = new Array(w), _(), s = new Array(w), h();
    }
  }
  function _() {
    if (l)
      for (var f = 0, v = t.length; f < v; ++f)
        r[f] = +n(t[f], f, t);
  }
  function h() {
    if (l)
      for (var f = 0, v = t.length; f < v; ++f)
        s[f] = +i(t[f], f, t);
  }
  return p.initialize = function(f, v) {
    l = f, u = v, a();
  }, p.links = function(f) {
    return arguments.length ? (t = f, a(), p) : t;
  }, p.id = function(f) {
    return arguments.length ? (e = f, p) : e;
  }, p.iterations = function(f) {
    return arguments.length ? (c = +f, p) : c;
  }, p.strength = function(f) {
    return arguments.length ? (n = typeof f == "function" ? f : S(+f), _(), p) : n;
  }, p.distance = function(f) {
    return arguments.length ? (i = typeof f == "function" ? f : S(+f), h(), p) : i;
  }, p;
}
var $t = { value: () => {
} };
function gt() {
  for (var t = 0, e = arguments.length, n = {}, r; t < e; ++t) {
    if (!(r = arguments[t] + "") || r in n || /[\s.]/.test(r))
      throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new q(n);
}
function q(t) {
  this._ = t;
}
function Qt(t, e) {
  return t.trim().split(/^|\s+/).map(function(n) {
    var r = "", i = n.indexOf(".");
    if (i >= 0 && (r = n.slice(i + 1), n = n.slice(0, i)), n && !e.hasOwnProperty(n))
      throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
q.prototype = gt.prototype = {
  constructor: q,
  on: function(t, e) {
    var n = this._, r = Qt(t + "", n), i, s = -1, l = r.length;
    if (arguments.length < 2) {
      for (; ++s < l; )
        if ((i = (t = r[s]).type) && (i = Zt(n[i], t.name)))
          return i;
      return;
    }
    if (e != null && typeof e != "function")
      throw new Error("invalid callback: " + e);
    for (; ++s < l; )
      if (i = (t = r[s]).type)
        n[i] = lt(n[i], t.name, e);
      else if (e == null)
        for (i in n)
          n[i] = lt(n[i], t.name, null);
    return this;
  },
  copy: function() {
    var t = {}, e = this._;
    for (var n in e)
      t[n] = e[n].slice();
    return new q(t);
  },
  call: function(t, e) {
    if ((i = arguments.length - 2) > 0)
      for (var n = new Array(i), r = 0, i, s; r < i; ++r)
        n[r] = arguments[r + 2];
    if (!this._.hasOwnProperty(t))
      throw new Error("unknown type: " + t);
    for (s = this._[t], r = 0, i = s.length; r < i; ++r)
      s[r].value.apply(e, n);
  },
  apply: function(t, e, n) {
    if (!this._.hasOwnProperty(t))
      throw new Error("unknown type: " + t);
    for (var r = this._[t], i = 0, s = r.length; i < s; ++i)
      r[i].value.apply(e, n);
  }
};
function Zt(t, e) {
  for (var n = 0, r = t.length, i; n < r; ++n)
    if ((i = t[n]).name === e)
      return i.value;
}
function lt(t, e, n) {
  for (var r = 0, i = t.length; r < i; ++r)
    if (t[r].name === e) {
      t[r] = $t, t = t.slice(0, r).concat(t.slice(r + 1));
      break;
    }
  return n != null && t.push({ name: e, value: n }), t;
}
var Y = 0, H = 0, j = 0, vt = 1e3, W, X, $ = 0, O = 0, Q = 0, G = typeof performance == "object" && performance.now ? performance : Date, yt = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function pt() {
  return O || (yt(Kt), O = G.now() + Q);
}
function Kt() {
  O = 0;
}
function J() {
  this._call = this._time = this._next = null;
}
J.prototype = wt.prototype = {
  constructor: J,
  restart: function(t, e, n) {
    if (typeof t != "function")
      throw new TypeError("callback is not a function");
    n = (n == null ? pt() : +n) + (e == null ? 0 : +e), !this._next && X !== this && (X ? X._next = this : W = this, X = this), this._call = t, this._time = n, tt();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, tt());
  }
};
function wt(t, e, n) {
  var r = new J();
  return r.restart(t, e, n), r;
}
function Jt() {
  pt(), ++Y;
  for (var t = W, e; t; )
    (e = O - t._time) >= 0 && t._call.call(void 0, e), t = t._next;
  --Y;
}
function at() {
  O = ($ = G.now()) + Q, Y = H = 0;
  try {
    Jt();
  } finally {
    Y = 0, ee(), O = 0;
  }
}
function te() {
  var t = G.now(), e = t - $;
  e > vt && (Q -= e, $ = t);
}
function ee() {
  for (var t, e = W, n, r = 1 / 0; e; )
    e._call ? (r > e._time && (r = e._time), t = e, e = e._next) : (n = e._next, e._next = null, e = t ? t._next = n : W = n);
  X = t, tt(r);
}
function tt(t) {
  if (!Y) {
    H && (H = clearTimeout(H));
    var e = t - O;
    e > 24 ? (t < 1 / 0 && (H = setTimeout(at, t - G.now() - Q)), j && (j = clearInterval(j))) : (j || ($ = G.now(), j = setInterval(te, vt)), Y = 1, yt(at));
  }
}
const ne = 1664525, re = 1013904223, ft = 4294967296;
function ie() {
  let t = 1;
  return () => (t = (ne * t + re) % ft) / ft;
}
function oe(t) {
  return t.x;
}
function se(t) {
  return t.y;
}
var le = 10, ae = Math.PI * (3 - Math.sqrt(5));
function fe(t) {
  var e, n = 1, r = 1e-3, i = 1 - Math.pow(r, 1 / 300), s = 0, l = 0.6, o = /* @__PURE__ */ new Map(), g = wt(y), u = gt("tick", "end"), c = ie();
  t == null && (t = []);
  function y() {
    p(), u.call("tick", e), n < r && (g.stop(), u.call("end", e));
  }
  function p(h) {
    var f, v = t.length, w;
    h === void 0 && (h = 1);
    for (var N = 0; N < h; ++N)
      for (n += (s - n) * i, o.forEach(function(x) {
        x(n);
      }), f = 0; f < v; ++f)
        w = t[f], w.fx == null ? w.x += w.vx *= l : (w.x = w.fx, w.vx = 0), w.fy == null ? w.y += w.vy *= l : (w.y = w.fy, w.vy = 0);
    return e;
  }
  function a() {
    for (var h = 0, f = t.length, v; h < f; ++h) {
      if (v = t[h], v.index = h, v.fx != null && (v.x = v.fx), v.fy != null && (v.y = v.fy), isNaN(v.x) || isNaN(v.y)) {
        var w = le * Math.sqrt(0.5 + h), N = h * ae;
        v.x = w * Math.cos(N), v.y = w * Math.sin(N);
      }
      (isNaN(v.vx) || isNaN(v.vy)) && (v.vx = v.vy = 0);
    }
  }
  function _(h) {
    return h.initialize && h.initialize(t, c), h;
  }
  return a(), e = {
    tick: p,
    restart: function() {
      return g.restart(y), e;
    },
    stop: function() {
      return g.stop(), e;
    },
    nodes: function(h) {
      return arguments.length ? (t = h, a(), o.forEach(_), e) : t;
    },
    alpha: function(h) {
      return arguments.length ? (n = +h, e) : n;
    },
    alphaMin: function(h) {
      return arguments.length ? (r = +h, e) : r;
    },
    alphaDecay: function(h) {
      return arguments.length ? (i = +h, e) : +i;
    },
    alphaTarget: function(h) {
      return arguments.length ? (s = +h, e) : s;
    },
    velocityDecay: function(h) {
      return arguments.length ? (l = 1 - h, e) : 1 - l;
    },
    randomSource: function(h) {
      return arguments.length ? (c = h, o.forEach(_), e) : c;
    },
    force: function(h, f) {
      return arguments.length > 1 ? (f == null ? o.delete(h) : o.set(h, _(f)), e) : o.get(h);
    },
    find: function(h, f, v) {
      var w = 0, N = t.length, x, A, M, E, C;
      for (v == null ? v = 1 / 0 : v *= v, w = 0; w < N; ++w)
        E = t[w], x = h - E.x, A = f - E.y, M = x * x + A * A, M < v && (C = E, v = M);
      return C;
    },
    on: function(h, f) {
      return arguments.length > 1 ? (u.on(h, f), e) : u.on(h);
    }
  };
}
function ue() {
  var t, e, n, r, i = S(-30), s, l = 1, o = 1 / 0, g = 0.81;
  function u(a) {
    var _, h = t.length, f = ht(t, oe, se).visitAfter(y);
    for (r = a, _ = 0; _ < h; ++_)
      e = t[_], f.visit(p);
  }
  function c() {
    if (t) {
      var a, _ = t.length, h;
      for (s = new Array(_), a = 0; a < _; ++a)
        h = t[a], s[h.index] = +i(h, a, t);
    }
  }
  function y(a) {
    var _ = 0, h, f, v = 0, w, N, x;
    if (a.length) {
      for (w = N = x = 0; x < 4; ++x)
        (h = a[x]) && (f = Math.abs(h.value)) && (_ += h.value, v += f, w += f * h.x, N += f * h.y);
      a.x = w / v, a.y = N / v;
    } else {
      h = a, h.x = h.data.x, h.y = h.data.y;
      do
        _ += s[h.data.index];
      while (h = h.next);
    }
    a.value = _;
  }
  function p(a, _, h, f) {
    if (!a.value)
      return !0;
    var v = a.x - e.x, w = a.y - e.y, N = f - _, x = v * v + w * w;
    if (N * N / g < x)
      return x < o && (v === 0 && (v = R(n), x += v * v), w === 0 && (w = R(n), x += w * w), x < l && (x = Math.sqrt(l * x)), e.vx += v * a.value * r / x, e.vy += w * a.value * r / x), !0;
    if (a.length || x >= o)
      return;
    (a.data !== e || a.next) && (v === 0 && (v = R(n), x += v * v), w === 0 && (w = R(n), x += w * w), x < l && (x = Math.sqrt(l * x)));
    do
      a.data !== e && (N = s[a.data.index] * r / x, e.vx += v * N, e.vy += w * N);
    while (a = a.next);
  }
  return u.initialize = function(a, _) {
    t = a, n = _, c();
  }, u.strength = function(a) {
    return arguments.length ? (i = typeof a == "function" ? a : S(+a), c(), u) : i;
  }, u.distanceMin = function(a) {
    return arguments.length ? (l = a * a, u) : Math.sqrt(l);
  }, u.distanceMax = function(a) {
    return arguments.length ? (o = a * a, u) : Math.sqrt(o);
  }, u.theta = function(a) {
    return arguments.length ? (g = a * a, u) : Math.sqrt(g);
  }, u;
}
function ce(t) {
  var e = S(0.1), n, r, i;
  typeof t != "function" && (t = S(t == null ? 0 : +t));
  function s(o) {
    for (var g = 0, u = n.length, c; g < u; ++g)
      c = n[g], c.vx += (i[g] - c.x) * r[g] * o;
  }
  function l() {
    if (n) {
      var o, g = n.length;
      for (r = new Array(g), i = new Array(g), o = 0; o < g; ++o)
        r[o] = isNaN(i[o] = +t(n[o], o, n)) ? 0 : +e(n[o], o, n);
    }
  }
  return s.initialize = function(o) {
    n = o, l();
  }, s.strength = function(o) {
    return arguments.length ? (e = typeof o == "function" ? o : S(+o), l(), s) : e;
  }, s.x = function(o) {
    return arguments.length ? (t = typeof o == "function" ? o : S(+o), l(), s) : t;
  }, s;
}
function he(t) {
  var e = S(0.1), n, r, i;
  typeof t != "function" && (t = S(t == null ? 0 : +t));
  function s(o) {
    for (var g = 0, u = n.length, c; g < u; ++g)
      c = n[g], c.vy += (i[g] - c.y) * r[g] * o;
  }
  function l() {
    if (n) {
      var o, g = n.length;
      for (r = new Array(g), i = new Array(g), o = 0; o < g; ++o)
        r[o] = isNaN(i[o] = +t(n[o], o, n)) ? 0 : +e(n[o], o, n);
    }
  }
  return s.initialize = function(o) {
    n = o, l();
  }, s.strength = function(o) {
    return arguments.length ? (e = typeof o == "function" ? o : S(+o), l(), s) : e;
  }, s.y = function(o) {
    return arguments.length ? (t = typeof o == "function" ? o : S(+o), l(), s) : t;
  }, s;
}
const ge = 0.5, ve = 0.5, ye = -1e3, pe = "X", we = "Y", xe = "charge", _e = "link";
function de(t, e, n, r) {
  const i = () => {
    var a;
    return ((a = D(r)) == null ? void 0 : a.force.x) || ge;
  }, s = () => {
    var a;
    return ((a = D(r)) == null ? void 0 : a.force.y) || ve;
  }, l = () => {
    var a;
    return ((a = D(r)) == null ? void 0 : a.charge) || ye;
  }, o = () => [...D(t)], g = () => [...D(e)], u = () => D(n) || { width: 0, height: 0 }, c = () => {
    p.value.stop(), p.value = y(), p.value.restart();
  }, y = () => {
    const a = fe().stop().alpha(0.5).nodes(o());
    return a.force(pe, ce(u().width / 2).strength(i())), a.force(we, he(u().height / 2).strength(s())), a.force(
      xe,
      ue().strength(l())
    ), a.force(
      _e,
      Wt(g()).id((_) => {
        if (!_.id)
          throw new Error("Node id is undefined");
        return _.id;
      })
    ), a;
  }, p = et(y());
  return _t(
    [() => D(t).length, () => D(e).length, n],
    () => {
      c();
    }
  ), {
    simulation: p,
    animate: c
  };
}
const me = (t, e) => {
  var r, i, s, l, o, g, u, c, y, p, a, _, h, f, v, w, N, x, A, M, E, C;
  return {
    css: {
      node: {
        stroke: ((r = t == null ? void 0 : t.colors) == null ? void 0 : r.stroke) || "#E2EB98",
        fill: ((i = t == null ? void 0 : t.colors) == null ? void 0 : i.fill) || "#93A392",
        selected: {
          stroke: ((l = (s = t == null ? void 0 : t.colors) == null ? void 0 : s.selected) == null ? void 0 : l.stroke) || "#9DC4B5",
          fill: (g = (o = t == null ? void 0 : t.colors) == null ? void 0 : o.selected) == null ? void 0 : g.fill
        },
        hover: {
          stroke: "#9DC4B5",
          fill: (c = (u = t == null ? void 0 : t.colors) == null ? void 0 : u.hover) == null ? void 0 : c.fill
        },
        pinned: {
          stroke: "#9DC4B5",
          fill: (p = (y = t == null ? void 0 : t.colors) == null ? void 0 : y.pinned) == null ? void 0 : p.fill
        },
        label: {
          fill: ((_ = (a = t == null ? void 0 : t.colors) == null ? void 0 : a.label) == null ? void 0 : _.fill) || "#93A392"
        }
      },
      link: {
        stroke: ((h = e == null ? void 0 : e.colors) == null ? void 0 : h.stroke) || "#BAD9A2",
        fill: (f = e == null ? void 0 : e.colors) == null ? void 0 : f.fill,
        selected: {
          stroke: ((w = (v = e == null ? void 0 : e.colors) == null ? void 0 : v.selected) == null ? void 0 : w.stroke) || "#9DC4B5",
          fill: (x = (N = e == null ? void 0 : e.colors) == null ? void 0 : N.selected) == null ? void 0 : x.fill
        },
        hover: {
          stroke: "#9DC4B5",
          fill: (M = (A = e == null ? void 0 : e.colors) == null ? void 0 : A.hover) == null ? void 0 : M.fill
        },
        label: {
          fill: ((C = (E = e == null ? void 0 : e.colors) == null ? void 0 : E.label) == null ? void 0 : C.fill) || "#93A392"
        }
      }
    }
  };
}, Ne = ["viewBox"], Ae = {
  id: "l-links",
  class: "links"
}, Me = ["id", "d", "onClick", "onTouchstartPassive"], Ee = {
  id: "l-nodes",
  class: "nodes"
}, Ce = ["viewBox", "width", "height", "x", "y", "title", "onClick", "onTouchendPassive", "onMousedown", "onTouchstart", "innerHTML"], Te = ["r", "cx", "cy", "title", "onClick", "onTouchendPassive", "onMousedown", "onTouchstart"], be = {
  id: "node-labels",
  class: "labels"
}, ze = ["x", "y", "font-size", "stroke-width"], ke = /* @__PURE__ */ dt({
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
  setup(t, { emit: e }) {
    var x, A, M, E, C, F;
    const n = t;
    mt((k) => ({
      "5dd494eb": d(r).node.stroke,
      "7c85b614": d(r).node.fill,
      dc7d1dbe: d(r).node.selected.stroke || d(r).node.stroke,
      "7dd7427e": d(r).node.selected.fill || d(r).node.fill,
      "3bde7e44": d(r).node.pinned.stroke || d(r).node.stroke,
      "4f59d604": d(r).node.pinned.fill || d(r).node.fill,
      e753a608: d(r).node.hover.stroke || d(r).node.stroke,
      "58ff401c": d(r).node.hover.fill || d(r).node.fill,
      "9774281a": d(r).link.stroke,
      "45289dfe": d(r).link.fill,
      "7e38e190": d(r).link.selected.stroke,
      "90b3524a": d(r).link.selected.fill,
      "6654c39d": d(r).node.hover.stroke,
      "8d054fb0": d(r).node.hover.fill,
      "7121ef10": d(r).link.label.fill,
      47107570: d(r).node.label.fill
    }));
    const { css: r } = me((x = n.options) == null ? void 0 : x.nodes, (A = n.options) == null ? void 0 : A.links), i = et(null), s = ut({ width: 100, height: 100 });
    Mt(i, (k) => {
      const L = k[0];
      s.width = L.contentRect.width, s.height = L.contentRect.height;
    });
    const { simulation: l } = de(
      n.nodes,
      n.links,
      s,
      (M = n.options) == null ? void 0 : M.simulation
    ), { dragStart: o, dragEnd: g, move: u } = Et(
      l,
      (E = n.options) == null ? void 0 : E.draggables
    ), {
      label: c,
      getSize: y,
      getWidth: p,
      getClass: a,
      getHeight: _,
      getStyle: h
    } = bt((C = n.options) == null ? void 0 : C.nodes), {
      getPath: f,
      getAttrs: v,
      getClass: w,
      getStyle: N
    } = St((F = n.options) == null ? void 0 : F.links);
    return (k, L) => (B(), I("svg", {
      ref_key: "svg",
      ref: i,
      xmlns: "http://www.w3.org/2000/svg",
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      preserveAspectRatio: "xMinYMin",
      viewBox: `0 0 ${s.width} ${s.height}`,
      style: { display: "block", fill: "none", stroke: "none", width: "100%", overflow: "hidden" },
      onMouseup: L[0] || (L[0] = //@ts-ignore
      (...m) => d(g) && d(g)(...m)),
      onTouchendPassive: L[1] || (L[1] = //@ts-ignore
      (...m) => d(g) && d(g)(...m)),
      onTouchstartPassive: () => {
      },
      onMousemove: L[2] || (L[2] = //@ts-ignore
      (...m) => d(u) && d(u)(...m))
    }, [
      Z("g", Ae, [
        (B(!0), I(U, null, K(t.links, (m) => (B(), I("path", Nt({
          id: m.id,
          key: m.id,
          d: d(f)(m)
        }, d(v)(m), {
          class: d(w)(m.id),
          style: d(N)(m),
          onClick: (P) => e("link-click", P, m),
          onTouchstartPassive: (P) => e("link-click", P, m)
        }), null, 16, Me))), 128))
      ]),
      Z("g", Ee, [
        (B(!0), I(U, null, K(t.nodes, (m, P) => (B(), I(U, { key: P }, [
          m.innerSVG ? (B(), I("svg", {
            key: 0,
            viewBox: m.innerSVG.viewBox,
            width: d(p)(m),
            height: d(_)(m),
            x: (m.x || 0) - d(p)(m) / 2,
            y: (m.y || 0) - d(_)(m) / 2,
            style: rt(d(h)(m)),
            title: m.name,
            class: it(d(a)(m, ["node-svg"])),
            onClick: (T) => e("node-click", T, m),
            onTouchendPassive: (T) => e("node-click", T, m),
            onMousedown: V((T) => d(o)(T, P), ["prevent"]),
            onTouchstart: V((T) => d(o)(T, P), ["prevent"]),
            innerHTML: m.innerSVG.innerHtml
          }, null, 46, Ce)) : (B(), I("circle", {
            key: 1,
            r: d(y)(m) / 2,
            cx: m.x || 0,
            cy: m.y || 0,
            style: rt(d(h)(m)),
            title: m.name,
            class: it(d(a)(m)),
            onClick: (T) => k.$emit("node-click", T, m),
            onTouchendPassive: (T) => k.$emit("node-click", T, m),
            onMousedown: V((T) => d(o)(T, P), ["prevent"]),
            onTouchstart: V((T) => d(o)(T, P), ["prevent"])
          }, null, 46, Te))
        ], 64))), 128))
      ]),
      Z("g", be, [
        (B(!0), I(U, null, K(t.nodes, (m) => (B(), I("text", {
          key: m.id,
          class: "node-label",
          x: (m.x || 0) + d(y)(m) / 2 + d(c).font.size / 2,
          y: (m.y || 0) + d(c).offset.y,
          "font-size": d(c).font.size,
          "stroke-width": d(c).font.size / 8
        }, At(m.name), 9, ze))), 128))
      ])
    ], 40, Ne));
  }
});
export {
  ke as D3NetworkGraph
};
