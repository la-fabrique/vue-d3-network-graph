import { ref as Z, reactive as Ht, computed as H, toRaw as zt, defineComponent as Qt, useCssVars as Zt, unref as x, toRef as W, openBlock as I, createElementBlock as F, createElementVNode as $, normalizeProps as Ct, guardReactiveProps as Tt, createCommentVNode as Jt, Fragment as et, renderList as bt, mergeProps as qt, normalizeStyle as Dt, normalizeClass as St, withModifiers as K, toDisplayString as te } from "vue";
import { watchDebounced as Lt, useResizeObserver as ee } from "@vueuse/core";
function ne(t, n) {
  const e = Z(void 0), r = Ht({
    x: 0,
    y: 0
  }), o = (a) => {
    let y, d = 0;
    return a instanceof MouseEvent ? (y = a.clientX, d = a.clientY) : a instanceof TouchEvent && (y = a.touches[0].clientX, d = a.touches[0].clientY), { x: y || 0, y: d || 0 };
  }, l = (a, y) => n.value ? (() => {
    e.value = y, u(a, t.value.nodes()[y]);
  })() : void 0, u = (a, y) => {
    let d = 0, v = 0;
    if (a && y && (y != null && y.x) && (y != null && y.y)) {
      const p = o(a);
      d = p.x ? p.x - y.x : y.x, v = p.y ? p.y - y.y : y.y;
    }
    r.x = d, r.y = v;
  }, i = () => {
    if (e.value !== void 0) {
      const a = t.value.nodes()[e.value];
      a.fx = null, a.fy = null, f();
    }
  }, f = () => {
    e.value = void 0, t.value.alpha(0.1), t.value.restart(), u();
  };
  return {
    dragStart: l,
    dragEnd: i,
    move: (a) => {
      const y = o(a);
      e.value != null && t.value.nodes()[e.value] && (t.value.restart(), t.value.alpha(0.5), t.value.nodes()[e.value].fx = y.x - r.x, t.value.nodes()[e.value].fy = y.y - r.y);
    }
  };
}
function re(t) {
  const n = (i) => i.size || t.value.size, e = (i) => i.width || t.value.size, r = (i) => i.height || i.size || t.value.size, o = (i) => i.color ? "fill: " + i.color : "", l = (i, f = []) => {
    const s = i.cssClass ? i.cssClass : [];
    return s.push("node"), f.forEach((a) => s.push(a)), (i.fx || i.fy) && s.push("pinned"), s;
  };
  return { label: H(() => ({
    font: { size: t.value.font.size },
    offset: {
      x: t.value.size / 2 + t.value.font.size / 2,
      y: t.value.font.size / 2
    }
  })), getSize: n, getWidth: e, getHeight: r, getStyle: o, getClass: l };
}
const Rt = "arrow-start", Ot = "arrow-end";
function ie(t, n, e) {
  const r = (a) => typeof a.source != "number" && typeof a.source != "string" && typeof a.target != "number" && typeof a.target != "string" ? `M${a.source.x} ${a.source.y} L${a.target.x} ${a.target.y}` : void 0, o = (a) => a.color ? {
    stroke: a.color
  } : {}, l = (a) => ({ "stroke-width": t.value.width }), u = (a) => ["link"], i = (a) => e.value && a.twoWay ? `url(#${Rt})` : void 0, f = (a) => e.value ? `url(#${Ot})` : void 0, s = H(() => ({
    arrowStart: {
      id: Rt,
      refX: -(n.value / 2 - t.value.width),
      refY: 0,
      viewBox: `0 -${5 * t.value.width} ${10 * t.value.width} ${10 * t.value.width}`,
      orient: "auto",
      markerWidth: 10 + t.value.width,
      markerHeight: 10 + t.value.width,
      "stroke-width": "1",
      "marker-units": "userSpaceOnUse"
    },
    arrowEnd: {
      id: Ot,
      refX: n.value / 2 + (10 - t.value.width),
      refY: 0,
      viewBox: `0 -${5 * t.value.width} ${10 * t.value.width} ${10 * t.value.width}`,
      orient: "auto",
      markerWidth: 10 + t.value.width,
      markerHeight: 10 + t.value.width,
      "stroke-width": "1",
      "marker-units": "userSpaceOnUse"
    }
  }));
  return {
    getPath: r,
    getAttrs: l,
    getClass: u,
    getStyle: o,
    getMarkerEnd: f,
    getMarkerStart: i,
    markers: s
  };
}
function oe(t) {
  const n = +this._x.call(null, t), e = +this._y.call(null, t);
  return Yt(this.cover(n, e), n, e, t);
}
function Yt(t, n, e, r) {
  if (isNaN(n) || isNaN(e))
    return t;
  var o, l = t._root, u = { data: r }, i = t._x0, f = t._y0, s = t._x1, a = t._y1, y, d, v, p, h, c, g, w;
  if (!l)
    return t._root = u, t;
  for (; l.length; )
    if ((h = n >= (y = (i + s) / 2)) ? i = y : s = y, (c = e >= (d = (f + a) / 2)) ? f = d : a = d, o = l, !(l = l[g = c << 1 | h]))
      return o[g] = u, t;
  if (v = +t._x.call(null, l.data), p = +t._y.call(null, l.data), n === v && e === p)
    return u.next = l, o ? o[g] = u : t._root = u, t;
  do
    o = o ? o[g] = new Array(4) : t._root = new Array(4), (h = n >= (y = (i + s) / 2)) ? i = y : s = y, (c = e >= (d = (f + a) / 2)) ? f = d : a = d;
  while ((g = c << 1 | h) === (w = (p >= d) << 1 | v >= y));
  return o[w] = l, o[g] = u, t;
}
function se(t) {
  var n, e, r = t.length, o, l, u = new Array(r), i = new Array(r), f = 1 / 0, s = 1 / 0, a = -1 / 0, y = -1 / 0;
  for (e = 0; e < r; ++e)
    isNaN(o = +this._x.call(null, n = t[e])) || isNaN(l = +this._y.call(null, n)) || (u[e] = o, i[e] = l, o < f && (f = o), o > a && (a = o), l < s && (s = l), l > y && (y = l));
  if (f > a || s > y)
    return this;
  for (this.cover(f, s).cover(a, y), e = 0; e < r; ++e)
    Yt(this, u[e], i[e], t[e]);
  return this;
}
function le(t, n) {
  if (isNaN(t = +t) || isNaN(n = +n))
    return this;
  var e = this._x0, r = this._y0, o = this._x1, l = this._y1;
  if (isNaN(e))
    o = (e = Math.floor(t)) + 1, l = (r = Math.floor(n)) + 1;
  else {
    for (var u = o - e || 1, i = this._root, f, s; e > t || t >= o || r > n || n >= l; )
      switch (s = (n < r) << 1 | t < e, f = new Array(4), f[s] = i, i = f, u *= 2, s) {
        case 0:
          o = e + u, l = r + u;
          break;
        case 1:
          e = o - u, l = r + u;
          break;
        case 2:
          o = e + u, r = l - u;
          break;
        case 3:
          e = o - u, r = l - u;
          break;
      }
    this._root && this._root.length && (this._root = i);
  }
  return this._x0 = e, this._y0 = r, this._x1 = o, this._y1 = l, this;
}
function ae() {
  var t = [];
  return this.visit(function(n) {
    if (!n.length)
      do
        t.push(n.data);
      while (n = n.next);
  }), t;
}
function ue(t) {
  return arguments.length ? this.cover(+t[0][0], +t[0][1]).cover(+t[1][0], +t[1][1]) : isNaN(this._x0) ? void 0 : [[this._x0, this._y0], [this._x1, this._y1]];
}
function S(t, n, e, r, o) {
  this.node = t, this.x0 = n, this.y0 = e, this.x1 = r, this.y1 = o;
}
function fe(t, n, e) {
  var r, o = this._x0, l = this._y0, u, i, f, s, a = this._x1, y = this._y1, d = [], v = this._root, p, h;
  for (v && d.push(new S(v, o, l, a, y)), e == null ? e = 1 / 0 : (o = t - e, l = n - e, a = t + e, y = n + e, e *= e); p = d.pop(); )
    if (!(!(v = p.node) || (u = p.x0) > a || (i = p.y0) > y || (f = p.x1) < o || (s = p.y1) < l))
      if (v.length) {
        var c = (u + f) / 2, g = (i + s) / 2;
        d.push(
          new S(v[3], c, g, f, s),
          new S(v[2], u, g, c, s),
          new S(v[1], c, i, f, g),
          new S(v[0], u, i, c, g)
        ), (h = (n >= g) << 1 | t >= c) && (p = d[d.length - 1], d[d.length - 1] = d[d.length - 1 - h], d[d.length - 1 - h] = p);
      } else {
        var w = t - +this._x.call(null, v.data), k = n - +this._y.call(null, v.data), _ = w * w + k * k;
        if (_ < e) {
          var N = Math.sqrt(e = _);
          o = t - N, l = n - N, a = t + N, y = n + N, r = v.data;
        }
      }
  return r;
}
function ce(t) {
  if (isNaN(a = +this._x.call(null, t)) || isNaN(y = +this._y.call(null, t)))
    return this;
  var n, e = this._root, r, o, l, u = this._x0, i = this._y0, f = this._x1, s = this._y1, a, y, d, v, p, h, c, g;
  if (!e)
    return this;
  if (e.length)
    for (; ; ) {
      if ((p = a >= (d = (u + f) / 2)) ? u = d : f = d, (h = y >= (v = (i + s) / 2)) ? i = v : s = v, n = e, !(e = e[c = h << 1 | p]))
        return this;
      if (!e.length)
        break;
      (n[c + 1 & 3] || n[c + 2 & 3] || n[c + 3 & 3]) && (r = n, g = c);
    }
  for (; e.data !== t; )
    if (o = e, !(e = e.next))
      return this;
  return (l = e.next) && delete e.next, o ? (l ? o.next = l : delete o.next, this) : n ? (l ? n[c] = l : delete n[c], (e = n[0] || n[1] || n[2] || n[3]) && e === (n[3] || n[2] || n[1] || n[0]) && !e.length && (r ? r[g] = e : this._root = e), this) : (this._root = l, this);
}
function he(t) {
  for (var n = 0, e = t.length; n < e; ++n)
    this.remove(t[n]);
  return this;
}
function ve() {
  return this._root;
}
function ge() {
  var t = 0;
  return this.visit(function(n) {
    if (!n.length)
      do
        ++t;
      while (n = n.next);
  }), t;
}
function ye(t) {
  var n = [], e, r = this._root, o, l, u, i, f;
  for (r && n.push(new S(r, this._x0, this._y0, this._x1, this._y1)); e = n.pop(); )
    if (!t(r = e.node, l = e.x0, u = e.y0, i = e.x1, f = e.y1) && r.length) {
      var s = (l + i) / 2, a = (u + f) / 2;
      (o = r[3]) && n.push(new S(o, s, a, i, f)), (o = r[2]) && n.push(new S(o, l, a, s, f)), (o = r[1]) && n.push(new S(o, s, u, i, a)), (o = r[0]) && n.push(new S(o, l, u, s, a));
    }
  return this;
}
function de(t) {
  var n = [], e = [], r;
  for (this._root && n.push(new S(this._root, this._x0, this._y0, this._x1, this._y1)); r = n.pop(); ) {
    var o = r.node;
    if (o.length) {
      var l, u = r.x0, i = r.y0, f = r.x1, s = r.y1, a = (u + f) / 2, y = (i + s) / 2;
      (l = o[0]) && n.push(new S(l, u, i, a, y)), (l = o[1]) && n.push(new S(l, a, i, f, y)), (l = o[2]) && n.push(new S(l, u, y, a, s)), (l = o[3]) && n.push(new S(l, a, y, f, s));
    }
    e.push(r);
  }
  for (; r = e.pop(); )
    t(r.node, r.x0, r.y0, r.x1, r.y1);
  return this;
}
function we(t) {
  return t[0];
}
function _e(t) {
  return arguments.length ? (this._x = t, this) : this._x;
}
function xe(t) {
  return t[1];
}
function pe(t) {
  return arguments.length ? (this._y = t, this) : this._y;
}
function it(t, n, e) {
  var r = new ot(n ?? we, e ?? xe, NaN, NaN, NaN, NaN);
  return t == null ? r : r.addAll(t);
}
function ot(t, n, e, r, o, l) {
  this._x = t, this._y = n, this._x0 = e, this._y0 = r, this._x1 = o, this._y1 = l, this._root = void 0;
}
function Pt(t) {
  for (var n = { data: t.data }, e = n; t = t.next; )
    e = e.next = { data: t.data };
  return n;
}
var R = it.prototype = ot.prototype;
R.copy = function() {
  var t = new ot(this._x, this._y, this._x0, this._y0, this._x1, this._y1), n = this._root, e, r;
  if (!n)
    return t;
  if (!n.length)
    return t._root = Pt(n), t;
  for (e = [{ source: n, target: t._root = new Array(4) }]; n = e.pop(); )
    for (var o = 0; o < 4; ++o)
      (r = n.source[o]) && (r.length ? e.push({ source: r, target: n.target[o] = new Array(4) }) : n.target[o] = Pt(r));
  return t;
};
R.add = oe;
R.addAll = se;
R.cover = le;
R.data = ae;
R.extent = ue;
R.find = fe;
R.remove = ce;
R.removeAll = he;
R.root = ve;
R.size = ge;
R.visit = ye;
R.visitAfter = de;
R.x = _e;
R.y = pe;
function L(t) {
  return function() {
    return t;
  };
}
function B(t) {
  return (t() - 0.5) * 1e-6;
}
function me(t) {
  return t.x + t.vx;
}
function ke(t) {
  return t.y + t.vy;
}
function Ne(t) {
  var n, e, r, o = 1, l = 1;
  typeof t != "function" && (t = L(t == null ? 1 : +t));
  function u() {
    for (var s, a = n.length, y, d, v, p, h, c, g = 0; g < l; ++g)
      for (y = it(n, me, ke).visitAfter(i), s = 0; s < a; ++s)
        d = n[s], h = e[d.index], c = h * h, v = d.x + d.vx, p = d.y + d.vy, y.visit(w);
    function w(k, _, N, z, C) {
      var M = k.data, D = k.r, E = h + D;
      if (M) {
        if (M.index > d.index) {
          var O = v - M.x - M.vx, b = p - M.y - M.vy, A = O * O + b * b;
          A < E * E && (O === 0 && (O = B(r), A += O * O), b === 0 && (b = B(r), A += b * b), A = (E - (A = Math.sqrt(A))) / A * o, d.vx += (O *= A) * (E = (D *= D) / (c + D)), d.vy += (b *= A) * E, M.vx -= O * (E = 1 - E), M.vy -= b * E);
        }
        return;
      }
      return _ > v + E || z < v - E || N > p + E || C < p - E;
    }
  }
  function i(s) {
    if (s.data)
      return s.r = e[s.data.index];
    for (var a = s.r = 0; a < 4; ++a)
      s[a] && s[a].r > s.r && (s.r = s[a].r);
  }
  function f() {
    if (n) {
      var s, a = n.length, y;
      for (e = new Array(a), s = 0; s < a; ++s)
        y = n[s], e[y.index] = +t(y, s, n);
    }
  }
  return u.initialize = function(s, a) {
    n = s, r = a, f();
  }, u.iterations = function(s) {
    return arguments.length ? (l = +s, u) : l;
  }, u.strength = function(s) {
    return arguments.length ? (o = +s, u) : o;
  }, u.radius = function(s) {
    return arguments.length ? (t = typeof s == "function" ? s : L(+s), f(), u) : t;
  }, u;
}
function Ae(t) {
  return t.index;
}
function It(t, n) {
  var e = t.get(n);
  if (!e)
    throw new Error("node not found: " + n);
  return e;
}
function Me(t) {
  var n = Ae, e = y, r, o = L(30), l, u, i, f, s, a = 1;
  t == null && (t = []);
  function y(c) {
    return 1 / Math.min(i[c.source.index], i[c.target.index]);
  }
  function d(c) {
    for (var g = 0, w = t.length; g < a; ++g)
      for (var k = 0, _, N, z, C, M, D, E; k < w; ++k)
        _ = t[k], N = _.source, z = _.target, C = z.x + z.vx - N.x - N.vx || B(s), M = z.y + z.vy - N.y - N.vy || B(s), D = Math.sqrt(C * C + M * M), D = (D - l[k]) / D * c * r[k], C *= D, M *= D, z.vx -= C * (E = f[k]), z.vy -= M * E, N.vx += C * (E = 1 - E), N.vy += M * E;
  }
  function v() {
    if (u) {
      var c, g = u.length, w = t.length, k = new Map(u.map((N, z) => [n(N, z, u), N])), _;
      for (c = 0, i = new Array(g); c < w; ++c)
        _ = t[c], _.index = c, typeof _.source != "object" && (_.source = It(k, _.source)), typeof _.target != "object" && (_.target = It(k, _.target)), i[_.source.index] = (i[_.source.index] || 0) + 1, i[_.target.index] = (i[_.target.index] || 0) + 1;
      for (c = 0, f = new Array(w); c < w; ++c)
        _ = t[c], f[c] = i[_.source.index] / (i[_.source.index] + i[_.target.index]);
      r = new Array(w), p(), l = new Array(w), h();
    }
  }
  function p() {
    if (u)
      for (var c = 0, g = t.length; c < g; ++c)
        r[c] = +e(t[c], c, t);
  }
  function h() {
    if (u)
      for (var c = 0, g = t.length; c < g; ++c)
        l[c] = +o(t[c], c, t);
  }
  return d.initialize = function(c, g) {
    u = c, s = g, v();
  }, d.links = function(c) {
    return arguments.length ? (t = c, v(), d) : t;
  }, d.id = function(c) {
    return arguments.length ? (n = c, d) : n;
  }, d.iterations = function(c) {
    return arguments.length ? (a = +c, d) : a;
  }, d.strength = function(c) {
    return arguments.length ? (e = typeof c == "function" ? c : L(+c), p(), d) : e;
  }, d.distance = function(c) {
    return arguments.length ? (o = typeof c == "function" ? c : L(+c), h(), d) : o;
  }, d;
}
var Ee = { value: () => {
} };
function Wt() {
  for (var t = 0, n = arguments.length, e = {}, r; t < n; ++t) {
    if (!(r = arguments[t] + "") || r in e || /[\s.]/.test(r))
      throw new Error("illegal type: " + r);
    e[r] = [];
  }
  return new Q(e);
}
function Q(t) {
  this._ = t;
}
function ze(t, n) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var r = "", o = e.indexOf(".");
    if (o >= 0 && (r = e.slice(o + 1), e = e.slice(0, o)), e && !n.hasOwnProperty(e))
      throw new Error("unknown type: " + e);
    return { type: e, name: r };
  });
}
Q.prototype = Wt.prototype = {
  constructor: Q,
  on: function(t, n) {
    var e = this._, r = ze(t + "", e), o, l = -1, u = r.length;
    if (arguments.length < 2) {
      for (; ++l < u; )
        if ((o = (t = r[l]).type) && (o = Ce(e[o], t.name)))
          return o;
      return;
    }
    if (n != null && typeof n != "function")
      throw new Error("invalid callback: " + n);
    for (; ++l < u; )
      if (o = (t = r[l]).type)
        e[o] = Ft(e[o], t.name, n);
      else if (n == null)
        for (o in e)
          e[o] = Ft(e[o], t.name, null);
    return this;
  },
  copy: function() {
    var t = {}, n = this._;
    for (var e in n)
      t[e] = n[e].slice();
    return new Q(t);
  },
  call: function(t, n) {
    if ((o = arguments.length - 2) > 0)
      for (var e = new Array(o), r = 0, o, l; r < o; ++r)
        e[r] = arguments[r + 2];
    if (!this._.hasOwnProperty(t))
      throw new Error("unknown type: " + t);
    for (l = this._[t], r = 0, o = l.length; r < o; ++r)
      l[r].value.apply(n, e);
  },
  apply: function(t, n, e) {
    if (!this._.hasOwnProperty(t))
      throw new Error("unknown type: " + t);
    for (var r = this._[t], o = 0, l = r.length; o < l; ++o)
      r[o].value.apply(n, e);
  }
};
function Ce(t, n) {
  for (var e = 0, r = t.length, o; e < r; ++e)
    if ((o = t[e]).name === n)
      return o.value;
}
function Ft(t, n, e) {
  for (var r = 0, o = t.length; r < o; ++r)
    if (t[r].name === n) {
      t[r] = Ee, t = t.slice(0, r).concat(t.slice(r + 1));
      break;
    }
  return e != null && t.push({ name: n, value: e }), t;
}
var U = 0, G = 0, j = 0, Ut = 1e3, J, X, q = 0, Y = 0, tt = 0, V = typeof performance == "object" && performance.now ? performance : Date, jt = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function Gt() {
  return Y || (jt(Te), Y = V.now() + tt);
}
function Te() {
  Y = 0;
}
function nt() {
  this._call = this._time = this._next = null;
}
nt.prototype = Xt.prototype = {
  constructor: nt,
  restart: function(t, n, e) {
    if (typeof t != "function")
      throw new TypeError("callback is not a function");
    e = (e == null ? Gt() : +e) + (n == null ? 0 : +n), !this._next && X !== this && (X ? X._next = this : J = this, X = this), this._call = t, this._time = e, rt();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, rt());
  }
};
function Xt(t, n, e) {
  var r = new nt();
  return r.restart(t, n, e), r;
}
function be() {
  Gt(), ++U;
  for (var t = J, n; t; )
    (n = Y - t._time) >= 0 && t._call.call(void 0, n), t = t._next;
  --U;
}
function Bt() {
  Y = (q = V.now()) + tt, U = G = 0;
  try {
    be();
  } finally {
    U = 0, Se(), Y = 0;
  }
}
function De() {
  var t = V.now(), n = t - q;
  n > Ut && (tt -= n, q = t);
}
function Se() {
  for (var t, n = J, e, r = 1 / 0; n; )
    n._call ? (r > n._time && (r = n._time), t = n, n = n._next) : (e = n._next, n._next = null, n = t ? t._next = e : J = e);
  X = t, rt(r);
}
function rt(t) {
  if (!U) {
    G && (G = clearTimeout(G));
    var n = t - Y;
    n > 24 ? (t < 1 / 0 && (G = setTimeout(Bt, t - V.now() - tt)), j && (j = clearInterval(j))) : (j || (q = V.now(), j = setInterval(De, Ut)), U = 1, jt(Bt));
  }
}
const Le = 1664525, Re = 1013904223, $t = 4294967296;
function Oe() {
  let t = 1;
  return () => (t = (Le * t + Re) % $t) / $t;
}
function Pe(t) {
  return t.x;
}
function Ie(t) {
  return t.y;
}
var Fe = 10, Be = Math.PI * (3 - Math.sqrt(5));
function $e(t) {
  var n, e = 1, r = 1e-3, o = 1 - Math.pow(r, 1 / 300), l = 0, u = 0.6, i = /* @__PURE__ */ new Map(), f = Xt(y), s = Wt("tick", "end"), a = Oe();
  t == null && (t = []);
  function y() {
    d(), s.call("tick", n), e < r && (f.stop(), s.call("end", n));
  }
  function d(h) {
    var c, g = t.length, w;
    h === void 0 && (h = 1);
    for (var k = 0; k < h; ++k)
      for (e += (l - e) * o, i.forEach(function(_) {
        _(e);
      }), c = 0; c < g; ++c)
        w = t[c], w.fx == null ? w.x += w.vx *= u : (w.x = w.fx, w.vx = 0), w.fy == null ? w.y += w.vy *= u : (w.y = w.fy, w.vy = 0);
    return n;
  }
  function v() {
    for (var h = 0, c = t.length, g; h < c; ++h) {
      if (g = t[h], g.index = h, g.fx != null && (g.x = g.fx), g.fy != null && (g.y = g.fy), isNaN(g.x) || isNaN(g.y)) {
        var w = Fe * Math.sqrt(0.5 + h), k = h * Be;
        g.x = w * Math.cos(k), g.y = w * Math.sin(k);
      }
      (isNaN(g.vx) || isNaN(g.vy)) && (g.vx = g.vy = 0);
    }
  }
  function p(h) {
    return h.initialize && h.initialize(t, a), h;
  }
  return v(), n = {
    tick: d,
    restart: function() {
      return f.restart(y), n;
    },
    stop: function() {
      return f.stop(), n;
    },
    nodes: function(h) {
      return arguments.length ? (t = h, v(), i.forEach(p), n) : t;
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
      return arguments.length ? (l = +h, n) : l;
    },
    velocityDecay: function(h) {
      return arguments.length ? (u = 1 - h, n) : 1 - u;
    },
    randomSource: function(h) {
      return arguments.length ? (a = h, i.forEach(p), n) : a;
    },
    force: function(h, c) {
      return arguments.length > 1 ? (c == null ? i.delete(h) : i.set(h, p(c)), n) : i.get(h);
    },
    find: function(h, c, g) {
      var w = 0, k = t.length, _, N, z, C, M;
      for (g == null ? g = 1 / 0 : g *= g, w = 0; w < k; ++w)
        C = t[w], _ = h - C.x, N = c - C.y, z = _ * _ + N * N, z < g && (M = C, g = z);
      return M;
    },
    on: function(h, c) {
      return arguments.length > 1 ? (s.on(h, c), n) : s.on(h);
    }
  };
}
function He() {
  var t, n, e, r, o = L(-30), l, u = 1, i = 1 / 0, f = 0.81;
  function s(v) {
    var p, h = t.length, c = it(t, Pe, Ie).visitAfter(y);
    for (r = v, p = 0; p < h; ++p)
      n = t[p], c.visit(d);
  }
  function a() {
    if (t) {
      var v, p = t.length, h;
      for (l = new Array(p), v = 0; v < p; ++v)
        h = t[v], l[h.index] = +o(h, v, t);
    }
  }
  function y(v) {
    var p = 0, h, c, g = 0, w, k, _;
    if (v.length) {
      for (w = k = _ = 0; _ < 4; ++_)
        (h = v[_]) && (c = Math.abs(h.value)) && (p += h.value, g += c, w += c * h.x, k += c * h.y);
      v.x = w / g, v.y = k / g;
    } else {
      h = v, h.x = h.data.x, h.y = h.data.y;
      do
        p += l[h.data.index];
      while (h = h.next);
    }
    v.value = p;
  }
  function d(v, p, h, c) {
    if (!v.value)
      return !0;
    var g = v.x - n.x, w = v.y - n.y, k = c - p, _ = g * g + w * w;
    if (k * k / f < _)
      return _ < i && (g === 0 && (g = B(e), _ += g * g), w === 0 && (w = B(e), _ += w * w), _ < u && (_ = Math.sqrt(u * _)), n.vx += g * v.value * r / _, n.vy += w * v.value * r / _), !0;
    if (v.length || _ >= i)
      return;
    (v.data !== n || v.next) && (g === 0 && (g = B(e), _ += g * g), w === 0 && (w = B(e), _ += w * w), _ < u && (_ = Math.sqrt(u * _)));
    do
      v.data !== n && (k = l[v.data.index] * r / _, n.vx += g * k, n.vy += w * k);
    while (v = v.next);
  }
  return s.initialize = function(v, p) {
    t = v, e = p, a();
  }, s.strength = function(v) {
    return arguments.length ? (o = typeof v == "function" ? v : L(+v), a(), s) : o;
  }, s.distanceMin = function(v) {
    return arguments.length ? (u = v * v, s) : Math.sqrt(u);
  }, s.distanceMax = function(v) {
    return arguments.length ? (i = v * v, s) : Math.sqrt(i);
  }, s.theta = function(v) {
    return arguments.length ? (f = v * v, s) : Math.sqrt(f);
  }, s;
}
function Ye(t) {
  var n = L(0.1), e, r, o;
  typeof t != "function" && (t = L(t == null ? 0 : +t));
  function l(i) {
    for (var f = 0, s = e.length, a; f < s; ++f)
      a = e[f], a.vx += (o[f] - a.x) * r[f] * i;
  }
  function u() {
    if (e) {
      var i, f = e.length;
      for (r = new Array(f), o = new Array(f), i = 0; i < f; ++i)
        r[i] = isNaN(o[i] = +t(e[i], i, e)) ? 0 : +n(e[i], i, e);
    }
  }
  return l.initialize = function(i) {
    e = i, u();
  }, l.strength = function(i) {
    return arguments.length ? (n = typeof i == "function" ? i : L(+i), u(), l) : n;
  }, l.x = function(i) {
    return arguments.length ? (t = typeof i == "function" ? i : L(+i), u(), l) : t;
  }, l;
}
function We(t) {
  var n = L(0.1), e, r, o;
  typeof t != "function" && (t = L(t == null ? 0 : +t));
  function l(i) {
    for (var f = 0, s = e.length, a; f < s; ++f)
      a = e[f], a.vy += (o[f] - a.y) * r[f] * i;
  }
  function u() {
    if (e) {
      var i, f = e.length;
      for (r = new Array(f), o = new Array(f), i = 0; i < f; ++i)
        r[i] = isNaN(o[i] = +t(e[i], i, e)) ? 0 : +n(e[i], i, e);
    }
  }
  return l.initialize = function(i) {
    e = i, u();
  }, l.strength = function(i) {
    return arguments.length ? (n = typeof i == "function" ? i : L(+i), u(), l) : n;
  }, l.y = function(i) {
    return arguments.length ? (t = typeof i == "function" ? i : L(+i), u(), l) : t;
  }, l;
}
const Ue = "X", je = "Y", Ge = "charge", Xe = "link", Ve = "collide", Vt = 0.01, Kt = 0.1, Ke = Math.log(Vt) / Math.log(1 - Kt);
function Qe(t, n, e, r) {
  const o = Ht({
    nodes: [],
    links: []
  }), l = async () => {
    i.value.stop(), o.nodes = t.value.map((f) => zt(f)), o.links = n.value.map((f) => zt(f)), i.value = u(), r.value.static ? i.value.tick(Ke) : i.value.restart();
  }, u = () => {
    const f = $e().stop().alphaMin(Vt).alphaDecay(Kt).nodes(o.nodes);
    return f.force(
      Ue,
      Ye(e.value.width / 2).strength(r.value.force.x)
    ), f.force(
      je,
      We(e.value.height / 2).strength(r.value.force.y)
    ), f.force(
      Ge,
      He().strength(r.value.force.charge)
    ), f.force(Ve, Ne(r.value.force.collide)), f.force(
      Xe,
      Me(o.links).id((s) => {
        if (!("id" in s))
          throw new Error("Node id is undefined");
        return s.id;
      })
    ), f;
  }, i = Z(u());
  return Lt(
    [() => t.value.length, () => n.value.length, e],
    async () => l(),
    { debounce: 100, maxWait: 1e3 }
  ), Lt(
    () => r.value,
    async () => l(),
    { deep: !0, debounce: 100, maxWait: 1e3 }
  ), {
    simulation: i,
    refresh: l,
    graph: o
  };
}
const Ze = 0.5, Je = 0.5, qe = -300, tn = 40, en = 10, nn = 2, rn = 45, on = (t) => {
  const n = H(() => {
    var u, i, f, s, a, y, d, v, p, h, c, g, w, k, _, N, z, C, M, D, E, O, b, A, m, P, T, st, lt, at, ut, ft, ct, ht, vt, gt, yt, dt, wt, _t, xt, pt, mt, kt, Nt, At, Mt, Et;
    return {
      node: {
        stroke: ((f = (i = (u = t.value) == null ? void 0 : u.nodes) == null ? void 0 : i.colors) == null ? void 0 : f.stroke) || "#E2EB98",
        fill: ((y = (a = (s = t.value) == null ? void 0 : s.nodes) == null ? void 0 : a.colors) == null ? void 0 : y.fill) || "#93A392",
        selected: {
          stroke: ((h = (p = (v = (d = t.value) == null ? void 0 : d.nodes) == null ? void 0 : v.colors) == null ? void 0 : p.selected) == null ? void 0 : h.stroke) || "#9DC4B5",
          fill: (k = (w = (g = (c = t.value) == null ? void 0 : c.nodes) == null ? void 0 : g.colors) == null ? void 0 : w.selected) == null ? void 0 : k.fill
        },
        hover: {
          stroke: "#9DC4B5",
          fill: (C = (z = (N = (_ = t.value) == null ? void 0 : _.nodes) == null ? void 0 : N.colors) == null ? void 0 : z.hover) == null ? void 0 : C.fill
        },
        pinned: {
          stroke: "#9DC4B5",
          fill: (O = (E = (D = (M = t.value) == null ? void 0 : M.nodes) == null ? void 0 : D.colors) == null ? void 0 : E.pinned) == null ? void 0 : O.fill
        },
        label: {
          fill: ((P = (m = (A = (b = t.value) == null ? void 0 : b.nodes) == null ? void 0 : A.colors) == null ? void 0 : m.label) == null ? void 0 : P.fill) || "#93A392"
        }
      },
      link: {
        stroke: ((lt = (st = (T = t.value) == null ? void 0 : T.links) == null ? void 0 : st.colors) == null ? void 0 : lt.stroke) || "#BAD9A2",
        fill: (ft = (ut = (at = t.value) == null ? void 0 : at.links) == null ? void 0 : ut.colors) == null ? void 0 : ft.fill,
        selected: {
          stroke: ((gt = (vt = (ht = (ct = t.value) == null ? void 0 : ct.links) == null ? void 0 : ht.colors) == null ? void 0 : vt.selected) == null ? void 0 : gt.stroke) || "#9DC4B5",
          fill: (_t = (wt = (dt = (yt = t.value) == null ? void 0 : yt.links) == null ? void 0 : dt.colors) == null ? void 0 : wt.selected) == null ? void 0 : _t.fill
        },
        hover: {
          stroke: "#9DC4B5",
          fill: (kt = (mt = (pt = (xt = t.value) == null ? void 0 : xt.links) == null ? void 0 : pt.colors) == null ? void 0 : mt.hover) == null ? void 0 : kt.fill
        },
        label: {
          fill: ((Et = (Mt = (At = (Nt = t.value) == null ? void 0 : Nt.links) == null ? void 0 : At.colors) == null ? void 0 : Mt.label) == null ? void 0 : Et.fill) || "#93A392"
        }
      }
    };
  }), e = H(() => {
    var u, i, f, s, a, y, d, v, p, h;
    return {
      static: ((i = (u = t.value) == null ? void 0 : u.simulation) == null ? void 0 : i.static) || !1,
      force: {
        x: ((s = (f = t.value) == null ? void 0 : f.simulation) == null ? void 0 : s.force.x) || Ze,
        y: ((y = (a = t.value) == null ? void 0 : a.simulation) == null ? void 0 : y.force.y) || Je,
        charge: ((v = (d = t.value) == null ? void 0 : d.simulation) == null ? void 0 : v.force.charge) || qe,
        collide: ((h = (p = t.value) == null ? void 0 : p.simulation) == null ? void 0 : h.force.collide) || rn
      }
    };
  }), r = H(() => {
    var u, i, f, s, a;
    return {
      size: ((i = (u = t.value) == null ? void 0 : u.nodes) == null ? void 0 : i.size) || tn,
      font: {
        size: ((a = (s = (f = t.value) == null ? void 0 : f.nodes) == null ? void 0 : s.font) == null ? void 0 : a.size) || en
      }
    };
  }), o = H(() => {
    var u, i;
    return {
      width: ((i = (u = t.value) == null ? void 0 : u.links) == null ? void 0 : i.width) || nn
    };
  }), l = H(() => {
    var u, i, f, s;
    return {
      draggables: ((i = (u = t.value) == null ? void 0 : u.layout) == null ? void 0 : i.draggables) || !1,
      directed: ((s = (f = t.value) == null ? void 0 : f.layout) == null ? void 0 : s.directed) || !1
    };
  });
  return {
    simulation: e,
    theme: n,
    nodes: r,
    links: o,
    layout: l
  };
}, sn = ["viewBox"], ln = { key: 0 }, an = ["fill"], un = ["fill"], fn = {
  id: "l-links",
  class: "links"
}, cn = ["id", "d", "marker-end", "marker-start", "onClick", "onTouchstartPassive"], hn = {
  id: "l-nodes",
  class: "nodes"
}, vn = ["viewBox", "width", "height", "x", "y", "title", "onClick", "onTouchendPassive", "onMousedown", "onTouchstartPassive", "innerHTML"], gn = ["r", "cx", "cy", "title", "onClick", "onTouchendPassive", "onMousedown", "onTouchstartPassive"], yn = ["x", "y", "font-size", "stroke-width"], _n = /* @__PURE__ */ Qt({
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
    Zt((b) => ({
      b1bf8fc8: x(r).node.stroke,
      "3b49e067": x(r).node.fill,
      "111d0958": x(r).node.selected.stroke || x(r).node.stroke,
      "2c2b1fb8": x(r).node.selected.fill || x(r).node.fill,
      bf5ef3d6: x(r).node.pinned.stroke || x(r).node.stroke,
      "6526fa16": x(r).node.pinned.fill || x(r).node.fill,
      "863f2d9e": x(r).node.hover.stroke || x(r).node.stroke,
      cc7b57de: x(r).node.hover.fill || x(r).node.fill,
      "04dce1b8": x(r).link.stroke,
      "82954d22": x(r).link.fill,
      "03397502": x(r).link.selected.stroke,
      "94b22aec": x(r).link.selected.fill,
      "032b7e0e": x(r).node.hover.stroke,
      "60f1fad9": x(r).node.hover.fill,
      "6ee3ab29": x(r).link.label.fill,
      "22f5cfbe": x(r).node.label.fill
    }));
    const {
      theme: r,
      simulation: o,
      nodes: l,
      links: u,
      layout: i
    } = on(W(() => e.options)), f = Z(null), s = Z({ width: 100, height: 100 });
    ee(f, (b) => {
      const A = b[0];
      A.contentRect.width === s.value.width && A.contentRect.height === s.value.height || (s.value = {
        width: A.contentRect.width,
        height: A.contentRect.height
      });
    });
    const { simulation: a, graph: y } = Qe(
      W(() => e.nodes),
      W(() => e.links),
      s,
      o
    ), { dragStart: d, dragEnd: v, move: p } = ne(
      a,
      W(() => i.value.draggables)
    ), {
      label: h,
      getSize: c,
      getWidth: g,
      getClass: w,
      getHeight: k,
      getStyle: _
    } = re(l), {
      getPath: N,
      getAttrs: z,
      getClass: C,
      getStyle: M,
      getMarkerEnd: D,
      getMarkerStart: E,
      markers: O
    } = ie(
      u,
      W(() => l.value.size),
      W(() => i.value.directed)
    );
    return (b, A) => (I(), F("svg", {
      ref_key: "svg",
      ref: f,
      xmlns: "http://www.w3.org/2000/svg",
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      preserveAspectRatio: "xMinYMin",
      viewBox: `0 0 ${s.value.width} ${s.value.height}`,
      class: "svg-container",
      onMouseup: A[0] || (A[0] = //@ts-ignore
      (...m) => x(v) && x(v)(...m)),
      onTouchendPassive: A[1] || (A[1] = //@ts-ignore
      (...m) => x(v) && x(v)(...m)),
      onTouchstartPassive: A[2] || (A[2] = async () => {
      }),
      onMousemove: A[3] || (A[3] = //@ts-ignore
      (...m) => x(p) && x(p)(...m))
    }, [
      x(i).directed ? (I(), F("defs", ln, [
        $("marker", Ct(Tt(x(O).arrowEnd)), [
          $("path", {
            fill: x(r).link.stroke,
            d: "M0 -5 L 10 0 L 0 5"
          }, null, 8, an)
        ], 16),
        $("marker", Ct(Tt(x(O).arrowStart)), [
          $("path", {
            fill: x(r).link.stroke,
            d: "M 10 5 L 0 0 L 10 -5"
          }, null, 8, un)
        ], 16)
      ])) : Jt("", !0),
      $("g", fn, [
        (I(!0), F(et, null, bt(x(y).links, (m) => (I(), F("path", qt({
          id: m.id,
          key: m.id,
          d: x(N)(m)
        }, x(z)(m), {
          class: x(C)(m.id),
          style: x(M)(m),
          "marker-end": x(D)(m),
          "marker-start": x(E)(m),
          onClick: (P) => n("link-click", P, m),
          onTouchstartPassive: (P) => n("link-click", P, m)
        }), null, 16, cn))), 128))
      ]),
      $("g", hn, [
        (I(!0), F(et, null, bt(x(y).nodes, (m, P) => (I(), F(et, { key: P }, [
          m.innerSVG ? (I(), F("svg", {
            key: 0,
            viewBox: m.innerSVG.viewBox,
            width: x(g)(m),
            height: x(k)(m),
            x: (m.x || 0) - x(g)(m) / 2,
            y: (m.y || 0) - x(k)(m) / 2,
            style: Dt(x(_)(m)),
            title: m.name,
            class: St(x(w)(m, ["node-svg"])),
            onClick: (T) => n("node-click", T, m),
            onTouchendPassive: (T) => n("node-click", T, m),
            onMousedown: K((T) => x(d)(T, P), ["prevent"]),
            onTouchstartPassive: K((T) => x(d)(T, P), ["prevent"]),
            innerHTML: m.innerSVG.innerHtml
          }, null, 46, vn)) : (I(), F("circle", {
            key: 1,
            r: x(c)(m) / 2,
            cx: m.x || 0,
            cy: m.y || 0,
            style: Dt(x(_)(m)),
            title: m.name,
            class: St(x(w)(m)),
            onClick: (T) => b.$emit("node-click", T, m),
            onTouchendPassive: (T) => b.$emit("node-click", T, m),
            onMousedown: K((T) => x(d)(T, P), ["prevent"]),
            onTouchstartPassive: K((T) => x(d)(T, P), ["prevent"])
          }, null, 46, gn)),
          $("text", {
            class: "node-label",
            x: (m.x || 0) + x(c)(m) / 2 + x(h).font.size / 2,
            y: (m.y || 0) + x(h).offset.y,
            "font-size": x(h).font.size,
            "stroke-width": x(h).font.size / 8
          }, te(m.name), 9, yn)
        ], 64))), 128))
      ])
    ], 40, sn));
  }
});
export {
  _n as D3NetworkGraph,
  Qe as useSimulation
};
