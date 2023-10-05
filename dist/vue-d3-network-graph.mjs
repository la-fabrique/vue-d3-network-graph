import { ref as V, reactive as We, computed as Z, toRef as R, defineComponent as Qe, useCssVars as Ze, unref as m, openBlock as I, createElementBlock as B, createElementVNode as $, normalizeProps as Ee, guardReactiveProps as Se, createCommentVNode as Je, Fragment as G, renderList as Te, normalizeClass as q, normalizeStyle as ee, toDisplayString as Ce, withModifiers as O } from "vue";
import { watchDebounced as De, useResizeObserver as qe } from "@vueuse/core";
function et(e, n) {
  const r = V(void 0), t = We({
    x: 0,
    y: 0
  }), i = (f) => {
    let g, d = 0;
    return f instanceof MouseEvent ? (g = f.clientX, d = f.clientY) : f instanceof TouchEvent && (g = f.touches[0].clientX, d = f.touches[0].clientY), { x: g || 0, y: d || 0 };
  }, l = (f, g) => n.value ? (() => {
    r.value = g, c(f, e.value.nodes()[g]);
  })() : void 0, c = (f, g) => {
    let d = 0, v = 0;
    if (f && g && (g != null && g.x) && (g != null && g.y)) {
      const p = i(f);
      d = p.x ? p.x - g.x : g.x, v = p.y ? p.y - g.y : g.y;
    }
    t.x = d, t.y = v;
  }, s = () => {
    if (r.value !== void 0) {
<<<<<<< HEAD
      const f = e.value.nodes()[r.value];
      f.fx = null, f.fy = null, y();
    }
  }, y = () => {
    r.value = void 0, e.value.alpha(0.1), e.value.restart(), c();
=======
      const c = e.value.nodes()[r.value];
      c.fx = null, c.fy = null, y();
    }
  }, y = () => {
    r.value = void 0, e.value.alpha(0.1), e.value.restart(), f();
>>>>>>> 06cb53327020040a2c0de7e2f77c22fa9ca998d5
  };
  return {
    dragStart: l,
    dragEnd: s,
<<<<<<< HEAD
    move: (f) => {
      const g = i(f);
=======
    move: (c) => {
      const g = i(c);
>>>>>>> 06cb53327020040a2c0de7e2f77c22fa9ca998d5
      r.value != null && e.value.nodes()[r.value] && (e.value.restart(), e.value.alpha(0.5), e.value.nodes()[r.value].fx = g.x - t.x, e.value.nodes()[r.value].fy = g.y - t.y);
    }
  };
}
<<<<<<< HEAD
const Re = "arrow-start", be = "arrow-end";
function tt(e, n, r) {
  const t = (c) => r.value && c.twoWay ? `url(#${Re})` : void 0, i = (c) => r.value ? `url(#${be})` : void 0, l = Z(() => ({
    arrowStart: {
      id: Re,
=======
const De = "arrow-start", Re = "arrow-end";
function tt(e, n, r) {
  const t = (f) => r.value && f.twoWay ? `url(#${De})` : void 0, i = (f) => r.value ? `url(#${Re})` : void 0, l = Q(() => ({
    arrowStart: {
      id: De,
>>>>>>> 06cb53327020040a2c0de7e2f77c22fa9ca998d5
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
<<<<<<< HEAD
      id: be,
=======
      id: Re,
>>>>>>> 06cb53327020040a2c0de7e2f77c22fa9ca998d5
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
<<<<<<< HEAD
  return Xe(this.cover(n, r), n, r, e);
}
function Xe(e, n, r, t) {
  if (isNaN(n) || isNaN(r))
    return e;
  var i, l = e._root, c = { data: t }, s = e._x0, y = e._y0, o = e._x1, f = e._y1, g, d, v, p, h, u, a, _;
  if (!l)
    return e._root = c, e;
  for (; l.length; )
    if ((h = n >= (g = (s + o) / 2)) ? s = g : o = g, (u = r >= (d = (y + f) / 2)) ? y = d : f = d, i = l, !(l = l[a = u << 1 | h]))
      return i[a] = c, e;
  if (v = +e._x.call(null, l.data), p = +e._y.call(null, l.data), n === v && r === p)
    return c.next = l, i ? i[a] = c : e._root = c, e;
  do
    i = i ? i[a] = new Array(4) : e._root = new Array(4), (h = n >= (g = (s + o) / 2)) ? s = g : o = g, (u = r >= (d = (y + f) / 2)) ? y = d : f = d;
  while ((a = u << 1 | h) === (_ = (p >= d) << 1 | v >= g));
  return i[_] = l, i[a] = c, e;
}
function rt(e) {
  var n, r, t = e.length, i, l, c = new Array(t), s = new Array(t), y = 1 / 0, o = 1 / 0, f = -1 / 0, g = -1 / 0;
  for (r = 0; r < t; ++r)
    isNaN(i = +this._x.call(null, n = e[r])) || isNaN(l = +this._y.call(null, n)) || (c[r] = i, s[r] = l, i < y && (y = i), i > f && (f = i), l < o && (o = l), l > g && (g = l));
  if (y > f || o > g)
    return this;
  for (this.cover(y, o).cover(f, g), r = 0; r < t; ++r)
    Xe(this, c[r], s[r], e[r]);
=======
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
>>>>>>> 06cb53327020040a2c0de7e2f77c22fa9ca998d5
  return this;
}
function it(e, n) {
  if (isNaN(e = +e) || isNaN(n = +n))
    return this;
  var r = this._x0, t = this._y0, i = this._x1, l = this._y1;
  if (isNaN(r))
    i = (r = Math.floor(e)) + 1, l = (t = Math.floor(n)) + 1;
  else {
<<<<<<< HEAD
    for (var c = i - r || 1, s = this._root, y, o; r > e || e >= i || t > n || n >= l; )
      switch (o = (n < t) << 1 | e < r, y = new Array(4), y[o] = s, s = y, c *= 2, o) {
        case 0:
          i = r + c, l = t + c;
          break;
        case 1:
          r = i - c, l = t + c;
          break;
        case 2:
          i = r + c, t = l - c;
          break;
        case 3:
          r = i - c, t = l - c;
=======
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
>>>>>>> 06cb53327020040a2c0de7e2f77c22fa9ca998d5
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
<<<<<<< HEAD
  var t, i = this._x0, l = this._y0, c, s, y, o, f = this._x1, g = this._y1, d = [], v = this._root, p, h;
  for (v && d.push(new S(v, i, l, f, g)), r == null ? r = 1 / 0 : (i = e - r, l = n - r, f = e + r, g = n + r, r *= r); p = d.pop(); )
    if (!(!(v = p.node) || (c = p.x0) > f || (s = p.y0) > g || (y = p.x1) < i || (o = p.y1) < l))
      if (v.length) {
        var u = (c + y) / 2, a = (s + o) / 2;
        d.push(
          new S(v[3], u, a, y, o),
          new S(v[2], c, a, u, o),
          new S(v[1], u, s, y, a),
          new S(v[0], c, s, u, a)
        ), (h = (n >= a) << 1 | e >= u) && (p = d[d.length - 1], d[d.length - 1] = d[d.length - 1 - h], d[d.length - 1 - h] = p);
      } else {
        var _ = e - +this._x.call(null, v.data), x = n - +this._y.call(null, v.data), w = _ * _ + x * x;
        if (w < r) {
          var k = Math.sqrt(r = w);
          i = e - k, l = n - k, f = e + k, g = n + k, t = v.data;
=======
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
>>>>>>> 06cb53327020040a2c0de7e2f77c22fa9ca998d5
        }
      }
  return t;
}
function st(e) {
<<<<<<< HEAD
  if (isNaN(f = +this._x.call(null, e)) || isNaN(g = +this._y.call(null, e)))
    return this;
  var n, r = this._root, t, i, l, c = this._x0, s = this._y0, y = this._x1, o = this._y1, f, g, d, v, p, h, u, a;
=======
  if (isNaN(c = +this._x.call(null, e)) || isNaN(g = +this._y.call(null, e)))
    return this;
  var n, r = this._root, t, i, l, f = this._x0, s = this._y0, y = this._x1, o = this._y1, c, g, d, v, w, h, u, a;
>>>>>>> 06cb53327020040a2c0de7e2f77c22fa9ca998d5
  if (!r)
    return this;
  if (r.length)
    for (; ; ) {
<<<<<<< HEAD
      if ((p = f >= (d = (c + y) / 2)) ? c = d : y = d, (h = g >= (v = (s + o) / 2)) ? s = v : o = v, n = r, !(r = r[u = h << 1 | p]))
=======
      if ((w = c >= (d = (f + y) / 2)) ? f = d : y = d, (h = g >= (v = (s + o) / 2)) ? s = v : o = v, n = r, !(r = r[u = h << 1 | w]))
>>>>>>> 06cb53327020040a2c0de7e2f77c22fa9ca998d5
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
<<<<<<< HEAD
function ct() {
  return this._root;
}
function ft() {
=======
function ft() {
  return this._root;
}
function ct() {
>>>>>>> 06cb53327020040a2c0de7e2f77c22fa9ca998d5
  var e = 0;
  return this.visit(function(n) {
    if (!n.length)
      do
        ++e;
      while (n = n.next);
  }), e;
}
function ht(e) {
<<<<<<< HEAD
  var n = [], r, t = this._root, i, l, c, s, y;
  for (t && n.push(new S(t, this._x0, this._y0, this._x1, this._y1)); r = n.pop(); )
    if (!e(t = r.node, l = r.x0, c = r.y0, s = r.x1, y = r.y1) && t.length) {
      var o = (l + s) / 2, f = (c + y) / 2;
      (i = t[3]) && n.push(new S(i, o, f, s, y)), (i = t[2]) && n.push(new S(i, l, f, o, y)), (i = t[1]) && n.push(new S(i, o, c, s, f)), (i = t[0]) && n.push(new S(i, l, c, o, f));
=======
  var n = [], r, t = this._root, i, l, f, s, y;
  for (t && n.push(new S(t, this._x0, this._y0, this._x1, this._y1)); r = n.pop(); )
    if (!e(t = r.node, l = r.x0, f = r.y0, s = r.x1, y = r.y1) && t.length) {
      var o = (l + s) / 2, c = (f + y) / 2;
      (i = t[3]) && n.push(new S(i, o, c, s, y)), (i = t[2]) && n.push(new S(i, l, c, o, y)), (i = t[1]) && n.push(new S(i, o, f, s, c)), (i = t[0]) && n.push(new S(i, l, f, o, c));
>>>>>>> 06cb53327020040a2c0de7e2f77c22fa9ca998d5
    }
  return this;
}
function vt(e) {
  var n = [], r = [], t;
  for (this._root && n.push(new S(this._root, this._x0, this._y0, this._x1, this._y1)); t = n.pop(); ) {
    var i = t.node;
    if (i.length) {
<<<<<<< HEAD
      var l, c = t.x0, s = t.y0, y = t.x1, o = t.y1, f = (c + y) / 2, g = (s + o) / 2;
      (l = i[0]) && n.push(new S(l, c, s, f, g)), (l = i[1]) && n.push(new S(l, f, s, y, g)), (l = i[2]) && n.push(new S(l, c, g, f, o)), (l = i[3]) && n.push(new S(l, f, g, y, o));
=======
      var l, f = t.x0, s = t.y0, y = t.x1, o = t.y1, c = (f + y) / 2, g = (s + o) / 2;
      (l = i[0]) && n.push(new S(l, f, s, c, g)), (l = i[1]) && n.push(new S(l, c, s, y, g)), (l = i[2]) && n.push(new S(l, f, g, c, o)), (l = i[3]) && n.push(new S(l, c, g, y, o));
>>>>>>> 06cb53327020040a2c0de7e2f77c22fa9ca998d5
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
<<<<<<< HEAD
function ze(e) {
=======
function be(e) {
>>>>>>> 06cb53327020040a2c0de7e2f77c22fa9ca998d5
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
<<<<<<< HEAD
    return e._root = ze(n), e;
  for (r = [{ source: n, target: e._root = new Array(4) }]; n = r.pop(); )
    for (var i = 0; i < 4; ++i)
      (t = n.source[i]) && (t.length ? r.push({ source: t, target: n.target[i] = new Array(4) }) : n.target[i] = ze(t));
=======
    return e._root = be(n), e;
  for (r = [{ source: n, target: e._root = new Array(4) }]; n = r.pop(); )
    for (var i = 0; i < 4; ++i)
      (t = n.source[i]) && (t.length ? r.push({ source: t, target: n.target[i] = new Array(4) }) : n.target[i] = be(t));
>>>>>>> 06cb53327020040a2c0de7e2f77c22fa9ca998d5
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
<<<<<<< HEAD
C.root = ct;
C.size = ft;
=======
C.root = ft;
C.size = ct;
>>>>>>> 06cb53327020040a2c0de7e2f77c22fa9ca998d5
C.visit = ht;
C.visitAfter = vt;
C.x = yt;
C.y = _t;
function T(e) {
  return function() {
    return e;
  };
}
<<<<<<< HEAD
function F(e) {
=======
function B(e) {
>>>>>>> 06cb53327020040a2c0de7e2f77c22fa9ca998d5
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
<<<<<<< HEAD
  function c() {
    for (var o, f = n.length, g, d, v, p, h, u, a = 0; a < l; ++a)
      for (g = re(n, xt, wt).visitAfter(s), o = 0; o < f; ++o)
        d = n[o], h = r[d.index], u = h * h, v = d.x + d.vx, p = d.y + d.vy, g.visit(_);
    function _(x, w, k, M, E) {
      var N = x.data, D = x.r, A = h + D;
      if (N) {
        if (N.index > d.index) {
          var z = v - N.x - N.vx, L = p - N.y - N.vy, b = z * z + L * L;
          b < A * A && (z === 0 && (z = F(t), b += z * z), L === 0 && (L = F(t), b += L * L), b = (A - (b = Math.sqrt(b))) / b * i, d.vx += (z *= b) * (A = (D *= D) / (u + D)), d.vy += (L *= b) * A, N.vx -= z * (A = 1 - A), N.vy -= L * A);
        }
        return;
      }
      return w > v + A || M < v - A || k > p + A || E < p - A;
=======
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
>>>>>>> 06cb53327020040a2c0de7e2f77c22fa9ca998d5
    }
  }
  function s(o) {
    if (o.data)
      return o.r = r[o.data.index];
<<<<<<< HEAD
    for (var f = o.r = 0; f < 4; ++f)
      o[f] && o[f].r > o.r && (o.r = o[f].r);
  }
  function y() {
    if (n) {
      var o, f = n.length, g;
      for (r = new Array(f), o = 0; o < f; ++o)
        g = n[o], r[g.index] = +e(g, o, n);
    }
  }
  return c.initialize = function(o, f) {
    n = o, t = f, y();
  }, c.iterations = function(o) {
    return arguments.length ? (l = +o, c) : l;
  }, c.strength = function(o) {
    return arguments.length ? (i = +o, c) : i;
  }, c.radius = function(o) {
    return arguments.length ? (e = typeof o == "function" ? o : T(+o), y(), c) : e;
  }, c;
=======
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
>>>>>>> 06cb53327020040a2c0de7e2f77c22fa9ca998d5
}
function mt(e) {
  return e.index;
}
<<<<<<< HEAD
function Le(e, n) {
=======
function ze(e, n) {
>>>>>>> 06cb53327020040a2c0de7e2f77c22fa9ca998d5
  var r = e.get(n);
  if (!r)
    throw new Error("node not found: " + n);
  return r;
}
function kt(e) {
<<<<<<< HEAD
  var n = mt, r = g, t, i = T(30), l, c, s, y, o, f = 1;
=======
  var n = mt, r = g, t, i = T(30), l, f, s, y, o, c = 1;
>>>>>>> 06cb53327020040a2c0de7e2f77c22fa9ca998d5
  e == null && (e = []);
  function g(u) {
    return 1 / Math.min(s[u.source.index], s[u.target.index]);
  }
  function d(u) {
<<<<<<< HEAD
    for (var a = 0, _ = e.length; a < f; ++a)
      for (var x = 0, w, k, M, E, N, D, A; x < _; ++x)
        w = e[x], k = w.source, M = w.target, E = M.x + M.vx - k.x - k.vx || F(o), N = M.y + M.vy - k.y - k.vy || F(o), D = Math.sqrt(E * E + N * N), D = (D - l[x]) / D * u * t[x], E *= D, N *= D, M.vx -= E * (A = y[x]), M.vy -= N * A, k.vx += E * (A = 1 - A), k.vy += N * A;
  }
  function v() {
    if (c) {
      var u, a = c.length, _ = e.length, x = new Map(c.map((k, M) => [n(k, M, c), k])), w;
      for (u = 0, s = new Array(a); u < _; ++u)
        w = e[u], w.index = u, typeof w.source != "object" && (w.source = Le(x, w.source)), typeof w.target != "object" && (w.target = Le(x, w.target)), s[w.source.index] = (s[w.source.index] || 0) + 1, s[w.target.index] = (s[w.target.index] || 0) + 1;
      for (u = 0, y = new Array(_); u < _; ++u)
        w = e[u], y[u] = s[w.source.index] / (s[w.source.index] + s[w.target.index]);
      t = new Array(_), p(), l = new Array(_), h();
    }
  }
  function p() {
    if (c)
=======
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
>>>>>>> 06cb53327020040a2c0de7e2f77c22fa9ca998d5
      for (var u = 0, a = e.length; u < a; ++u)
        t[u] = +r(e[u], u, e);
  }
  function h() {
<<<<<<< HEAD
    if (c)
=======
    if (f)
>>>>>>> 06cb53327020040a2c0de7e2f77c22fa9ca998d5
      for (var u = 0, a = e.length; u < a; ++u)
        l[u] = +i(e[u], u, e);
  }
  return d.initialize = function(u, a) {
<<<<<<< HEAD
    c = u, o = a, v();
=======
    f = u, o = a, v();
>>>>>>> 06cb53327020040a2c0de7e2f77c22fa9ca998d5
  }, d.links = function(u) {
    return arguments.length ? (e = u, v(), d) : e;
  }, d.id = function(u) {
    return arguments.length ? (n = u, d) : n;
  }, d.iterations = function(u) {
<<<<<<< HEAD
    return arguments.length ? (f = +u, d) : f;
  }, d.strength = function(u) {
    return arguments.length ? (r = typeof u == "function" ? u : T(+u), p(), d) : r;
=======
    return arguments.length ? (c = +u, d) : c;
  }, d.strength = function(u) {
    return arguments.length ? (r = typeof u == "function" ? u : T(+u), w(), d) : r;
>>>>>>> 06cb53327020040a2c0de7e2f77c22fa9ca998d5
  }, d.distance = function(u) {
    return arguments.length ? (i = typeof u == "function" ? u : T(+u), h(), d) : i;
  }, d;
}
var Nt = { value: () => {
} };
<<<<<<< HEAD
function He() {
=======
function Xe() {
>>>>>>> 06cb53327020040a2c0de7e2f77c22fa9ca998d5
  for (var e = 0, n = arguments.length, r = {}, t; e < n; ++e) {
    if (!(t = arguments[e] + "") || t in r || /[\s.]/.test(t))
      throw new Error("illegal type: " + t);
    r[t] = [];
  }
<<<<<<< HEAD
  return new j(r);
}
function j(e) {
=======
  return new O(r);
}
function O(e) {
>>>>>>> 06cb53327020040a2c0de7e2f77c22fa9ca998d5
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
<<<<<<< HEAD
j.prototype = He.prototype = {
  constructor: j,
  on: function(e, n) {
    var r = this._, t = At(e + "", r), i, l = -1, c = t.length;
    if (arguments.length < 2) {
      for (; ++l < c; )
=======
O.prototype = Xe.prototype = {
  constructor: O,
  on: function(e, n) {
    var r = this._, t = At(e + "", r), i, l = -1, f = t.length;
    if (arguments.length < 2) {
      for (; ++l < f; )
>>>>>>> 06cb53327020040a2c0de7e2f77c22fa9ca998d5
        if ((i = (e = t[l]).type) && (i = Mt(r[i], e.name)))
          return i;
      return;
    }
    if (n != null && typeof n != "function")
      throw new Error("invalid callback: " + n);
<<<<<<< HEAD
    for (; ++l < c; )
      if (i = (e = t[l]).type)
        r[i] = $e(r[i], e.name, n);
      else if (n == null)
        for (i in r)
          r[i] = $e(r[i], e.name, null);
=======
    for (; ++l < f; )
      if (i = (e = t[l]).type)
        r[i] = Le(r[i], e.name, n);
      else if (n == null)
        for (i in r)
          r[i] = Le(r[i], e.name, null);
>>>>>>> 06cb53327020040a2c0de7e2f77c22fa9ca998d5
    return this;
  },
  copy: function() {
    var e = {}, n = this._;
    for (var r in n)
      e[r] = n[r].slice();
<<<<<<< HEAD
    return new j(e);
=======
    return new O(e);
>>>>>>> 06cb53327020040a2c0de7e2f77c22fa9ca998d5
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
<<<<<<< HEAD
function $e(e, n, r) {
=======
function Le(e, n, r) {
>>>>>>> 06cb53327020040a2c0de7e2f77c22fa9ca998d5
  for (var t = 0, i = e.length; t < i; ++t)
    if (e[t].name === n) {
      e[t] = Nt, e = e.slice(0, t).concat(e.slice(t + 1));
      break;
    }
  return r != null && e.push({ name: n, value: r }), e;
}
<<<<<<< HEAD
var Y = 0, X = 0, W = 0, Ue = 1e3, K, H, Q = 0, P = 0, J = 0, U = typeof performance == "object" && performance.now ? performance : Date, Ge = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function Oe() {
  return P || (Ge(Et), P = U.now() + J);
=======
var Y = 0, X = 0, W = 0, He = 1e3, V, H, K = 0, P = 0, Z = 0, U = typeof performance == "object" && performance.now ? performance : Date, Ue = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function Ge() {
  return P || (Ue(Et), P = U.now() + Z);
>>>>>>> 06cb53327020040a2c0de7e2f77c22fa9ca998d5
}
function Et() {
  P = 0;
}
function te() {
  this._call = this._time = this._next = null;
}
<<<<<<< HEAD
te.prototype = je.prototype = {
=======
te.prototype = Oe.prototype = {
>>>>>>> 06cb53327020040a2c0de7e2f77c22fa9ca998d5
  constructor: te,
  restart: function(e, n, r) {
    if (typeof e != "function")
      throw new TypeError("callback is not a function");
<<<<<<< HEAD
    r = (r == null ? Oe() : +r) + (n == null ? 0 : +n), !this._next && H !== this && (H ? H._next = this : K = this, H = this), this._call = e, this._time = r, ne();
=======
    r = (r == null ? Ge() : +r) + (n == null ? 0 : +n), !this._next && H !== this && (H ? H._next = this : V = this, H = this), this._call = e, this._time = r, ne();
>>>>>>> 06cb53327020040a2c0de7e2f77c22fa9ca998d5
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, ne());
  }
};
<<<<<<< HEAD
function je(e, n, r) {
=======
function Oe(e, n, r) {
>>>>>>> 06cb53327020040a2c0de7e2f77c22fa9ca998d5
  var t = new te();
  return t.restart(e, n, r), t;
}
function St() {
<<<<<<< HEAD
  Oe(), ++Y;
  for (var e = K, n; e; )
    (n = P - e._time) >= 0 && e._call.call(void 0, n), e = e._next;
  --Y;
}
function Ie() {
  P = (Q = U.now()) + J, Y = X = 0;
=======
  Ge(), ++Y;
  for (var e = V, n; e; )
    (n = P - e._time) >= 0 && e._call.call(void 0, n), e = e._next;
  --Y;
}
function $e() {
  P = (K = U.now()) + Z, Y = X = 0;
>>>>>>> 06cb53327020040a2c0de7e2f77c22fa9ca998d5
  try {
    St();
  } finally {
    Y = 0, Ct(), P = 0;
  }
}
function Tt() {
<<<<<<< HEAD
  var e = U.now(), n = e - Q;
  n > Ue && (J -= n, Q = e);
}
function Ct() {
  for (var e, n = K, r, t = 1 / 0; n; )
    n._call ? (t > n._time && (t = n._time), e = n, n = n._next) : (r = n._next, n._next = null, n = e ? e._next = r : K = r);
=======
  var e = U.now(), n = e - K;
  n > He && (Z -= n, K = e);
}
function Ct() {
  for (var e, n = V, r, t = 1 / 0; n; )
    n._call ? (t > n._time && (t = n._time), e = n, n = n._next) : (r = n._next, n._next = null, n = e ? e._next = r : V = r);
>>>>>>> 06cb53327020040a2c0de7e2f77c22fa9ca998d5
  H = e, ne(t);
}
function ne(e) {
  if (!Y) {
    X && (X = clearTimeout(X));
    var n = e - P;
<<<<<<< HEAD
    n > 24 ? (e < 1 / 0 && (X = setTimeout(Ie, e - U.now() - J)), W && (W = clearInterval(W))) : (W || (Q = U.now(), W = setInterval(Tt, Ue)), Y = 1, Ge(Ie));
  }
}
const Dt = 1664525, Rt = 1013904223, Be = 4294967296;
function bt() {
  let e = 1;
  return () => (e = (Dt * e + Rt) % Be) / Be;
=======
    n > 24 ? (e < 1 / 0 && (X = setTimeout($e, e - U.now() - Z)), W && (W = clearInterval(W))) : (W || (K = U.now(), W = setInterval(Tt, He)), Y = 1, Ue($e));
  }
}
const Dt = 1664525, Rt = 1013904223, Ie = 4294967296;
function bt() {
  let e = 1;
  return () => (e = (Dt * e + Rt) % Ie) / Ie;
>>>>>>> 06cb53327020040a2c0de7e2f77c22fa9ca998d5
}
function zt(e) {
  return e.x;
}
function Lt(e) {
  return e.y;
}
var $t = 10, It = Math.PI * (3 - Math.sqrt(5));
<<<<<<< HEAD
function Fe(e) {
  var n, r = 1, t = 1e-3, i = 1 - Math.pow(t, 1 / 300), l = 0, c = 0.6, s = /* @__PURE__ */ new Map(), y = je(g), o = He("tick", "end"), f = bt();
=======
function Be(e) {
  var n, r = 1, t = 1e-3, i = 1 - Math.pow(t, 1 / 300), l = 0, f = 0.6, s = /* @__PURE__ */ new Map(), y = Oe(g), o = Xe("tick", "end"), c = bt();
>>>>>>> 06cb53327020040a2c0de7e2f77c22fa9ca998d5
  e == null && (e = []);
  function g() {
    d(), o.call("tick", n), r < t && (y.stop(), o.call("end", n));
  }
  function d(h) {
    var u, a = e.length, _;
    h === void 0 && (h = 1);
<<<<<<< HEAD
    for (var x = 0; x < h; ++x)
      for (r += (l - r) * i, s.forEach(function(w) {
        w(r);
      }), u = 0; u < a; ++u)
        _ = e[u], _.fx == null ? _.x += _.vx *= c : (_.x = _.fx, _.vx = 0), _.fy == null ? _.y += _.vy *= c : (_.y = _.fy, _.vy = 0);
=======
    for (var p = 0; p < h; ++p)
      for (r += (l - r) * i, s.forEach(function(x) {
        x(r);
      }), u = 0; u < a; ++u)
        _ = e[u], _.fx == null ? _.x += _.vx *= f : (_.x = _.fx, _.vx = 0), _.fy == null ? _.y += _.vy *= f : (_.y = _.fy, _.vy = 0);
>>>>>>> 06cb53327020040a2c0de7e2f77c22fa9ca998d5
    return n;
  }
  function v() {
    for (var h = 0, u = e.length, a; h < u; ++h) {
      if (a = e[h], a.index = h, a.fx != null && (a.x = a.fx), a.fy != null && (a.y = a.fy), isNaN(a.x) || isNaN(a.y)) {
<<<<<<< HEAD
        var _ = $t * Math.sqrt(0.5 + h), x = h * It;
        a.x = _ * Math.cos(x), a.y = _ * Math.sin(x);
=======
        var _ = $t * Math.sqrt(0.5 + h), p = h * It;
        a.x = _ * Math.cos(p), a.y = _ * Math.sin(p);
>>>>>>> 06cb53327020040a2c0de7e2f77c22fa9ca998d5
      }
      (isNaN(a.vx) || isNaN(a.vy)) && (a.vx = a.vy = 0);
    }
  }
<<<<<<< HEAD
  function p(h) {
    return h.initialize && h.initialize(e, f), h;
=======
  function w(h) {
    return h.initialize && h.initialize(e, c), h;
>>>>>>> 06cb53327020040a2c0de7e2f77c22fa9ca998d5
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
<<<<<<< HEAD
      return arguments.length ? (e = h, v(), s.forEach(p), n) : e;
=======
      return arguments.length ? (e = h, v(), s.forEach(w), n) : e;
>>>>>>> 06cb53327020040a2c0de7e2f77c22fa9ca998d5
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
<<<<<<< HEAD
      return arguments.length ? (c = 1 - h, n) : 1 - c;
    },
    randomSource: function(h) {
      return arguments.length ? (f = h, s.forEach(p), n) : f;
    },
    force: function(h, u) {
      return arguments.length > 1 ? (u == null ? s.delete(h) : s.set(h, p(u)), n) : s.get(h);
    },
    find: function(h, u, a) {
      var _ = 0, x = e.length, w, k, M, E, N;
      for (a == null ? a = 1 / 0 : a *= a, _ = 0; _ < x; ++_)
        E = e[_], w = h - E.x, k = u - E.y, M = w * w + k * k, M < a && (N = E, a = M);
=======
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
>>>>>>> 06cb53327020040a2c0de7e2f77c22fa9ca998d5
      return N;
    },
    on: function(h, u) {
      return arguments.length > 1 ? (o.on(h, u), n) : o.on(h);
    }
  };
}
function Bt() {
<<<<<<< HEAD
  var e, n, r, t, i = T(-30), l, c = 1, s = 1 / 0, y = 0.81;
  function o(v) {
    var p, h = e.length, u = re(e, zt, Lt).visitAfter(g);
    for (t = v, p = 0; p < h; ++p)
      n = e[p], u.visit(d);
  }
  function f() {
    if (e) {
      var v, p = e.length, h;
      for (l = new Array(p), v = 0; v < p; ++v)
=======
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
>>>>>>> 06cb53327020040a2c0de7e2f77c22fa9ca998d5
        h = e[v], l[h.index] = +i(h, v, e);
    }
  }
  function g(v) {
<<<<<<< HEAD
    var p = 0, h, u, a = 0, _, x, w;
    if (v.length) {
      for (_ = x = w = 0; w < 4; ++w)
        (h = v[w]) && (u = Math.abs(h.value)) && (p += h.value, a += u, _ += u * h.x, x += u * h.y);
      v.x = _ / a, v.y = x / a;
=======
    var w = 0, h, u, a = 0, _, p, x;
    if (v.length) {
      for (_ = p = x = 0; x < 4; ++x)
        (h = v[x]) && (u = Math.abs(h.value)) && (w += h.value, a += u, _ += u * h.x, p += u * h.y);
      v.x = _ / a, v.y = p / a;
>>>>>>> 06cb53327020040a2c0de7e2f77c22fa9ca998d5
    } else {
      h = v, h.x = h.data.x, h.y = h.data.y;
      do
        w += l[h.data.index];
      while (h = h.next);
    }
    v.value = w;
  }
<<<<<<< HEAD
  function d(v, p, h, u) {
    if (!v.value)
      return !0;
    var a = v.x - n.x, _ = v.y - n.y, x = u - p, w = a * a + _ * _;
    if (x * x / y < w)
      return w < s && (a === 0 && (a = F(r), w += a * a), _ === 0 && (_ = F(r), w += _ * _), w < c && (w = Math.sqrt(c * w)), n.vx += a * v.value * t / w, n.vy += _ * v.value * t / w), !0;
    if (v.length || w >= s)
      return;
    (v.data !== n || v.next) && (a === 0 && (a = F(r), w += a * a), _ === 0 && (_ = F(r), w += _ * _), w < c && (w = Math.sqrt(c * w)));
    do
      v.data !== n && (x = l[v.data.index] * t / w, n.vx += a * x, n.vy += _ * x);
    while (v = v.next);
  }
  return o.initialize = function(v, p) {
    e = v, r = p, f();
  }, o.strength = function(v) {
    return arguments.length ? (i = typeof v == "function" ? v : T(+v), f(), o) : i;
  }, o.distanceMin = function(v) {
    return arguments.length ? (c = v * v, o) : Math.sqrt(c);
=======
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
>>>>>>> 06cb53327020040a2c0de7e2f77c22fa9ca998d5
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
<<<<<<< HEAD
    for (var y = 0, o = r.length, f; y < o; ++y)
      f = r[y], f.vx += (i[y] - f.x) * t[y] * s;
  }
  function c() {
=======
    for (var y = 0, o = r.length, c; y < o; ++y)
      c = r[y], c.vx += (i[y] - c.x) * t[y] * s;
  }
  function f() {
>>>>>>> 06cb53327020040a2c0de7e2f77c22fa9ca998d5
    if (r) {
      var s, y = r.length;
      for (t = new Array(y), i = new Array(y), s = 0; s < y; ++s)
        t[s] = isNaN(i[s] = +e(r[s], s, r)) ? 0 : +n(r[s], s, r);
    }
  }
  return l.initialize = function(s) {
<<<<<<< HEAD
    r = s, c();
  }, l.strength = function(s) {
    return arguments.length ? (n = typeof s == "function" ? s : T(+s), c(), l) : n;
  }, l.x = function(s) {
    return arguments.length ? (e = typeof s == "function" ? s : T(+s), c(), l) : e;
=======
    r = s, f();
  }, l.strength = function(s) {
    return arguments.length ? (n = typeof s == "function" ? s : T(+s), f(), l) : n;
  }, l.x = function(s) {
    return arguments.length ? (e = typeof s == "function" ? s : T(+s), f(), l) : e;
>>>>>>> 06cb53327020040a2c0de7e2f77c22fa9ca998d5
  }, l;
}
function Pt(e) {
  var n = T(0.1), r, t, i;
  typeof e != "function" && (e = T(e == null ? 0 : +e));
  function l(s) {
<<<<<<< HEAD
    for (var y = 0, o = r.length, f; y < o; ++y)
      f = r[y], f.vy += (i[y] - f.y) * t[y] * s;
  }
  function c() {
=======
    for (var y = 0, o = r.length, c; y < o; ++y)
      c = r[y], c.vy += (i[y] - c.y) * t[y] * s;
  }
  function f() {
>>>>>>> 06cb53327020040a2c0de7e2f77c22fa9ca998d5
    if (r) {
      var s, y = r.length;
      for (t = new Array(y), i = new Array(y), s = 0; s < y; ++s)
        t[s] = isNaN(i[s] = +e(r[s], s, r)) ? 0 : +n(r[s], s, r);
    }
  }
  return l.initialize = function(s) {
<<<<<<< HEAD
    r = s, c();
  }, l.strength = function(s) {
    return arguments.length ? (n = typeof s == "function" ? s : T(+s), c(), l) : n;
  }, l.y = function(s) {
    return arguments.length ? (e = typeof s == "function" ? s : T(+s), c(), l) : e;
  }, l;
}
function Yt(e) {
  const n = (o) => o || e.value, r = (o) => o.width || e.value, t = (o) => o.height || o.size || e.value, i = (o) => o.color ? "fill: " + o.color : "", l = (o, f, g) => f || g ? ["node", "pinned"] : ["node"];
=======
    r = s, f();
  }, l.strength = function(s) {
    return arguments.length ? (n = typeof s == "function" ? s : T(+s), f(), l) : n;
  }, l.y = function(s) {
    return arguments.length ? (e = typeof s == "function" ? s : T(+s), f(), l) : e;
  }, l;
}
function Yt(e) {
  const n = (o) => o || e.value, r = (o) => o.width || e.value, t = (o) => o.height || o.size || e.value, i = (o) => o.color ? "fill: " + o.color : "", l = (o, c, g) => c || g ? ["node", "pinned"] : ["node"];
>>>>>>> 06cb53327020040a2c0de7e2f77c22fa9ca998d5
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
<<<<<<< HEAD
    getX: (o, f) => (o || 0) - (f || 0) / 2,
    getY: (o, f) => (o || 0) - (f || 0) / 2
  };
}
const Pe = "arrow-start", Ye = "arrow-end";
function Wt(e, n, r) {
  const t = (o) => o.color ? {
    stroke: o.color
  } : {}, i = (o) => ["link"], l = (o) => r.value && o.twoWay ? `url(#${Pe})` : void 0, c = (o) => r.value ? `url(#${Ye})` : void 0, s = Z(() => ({
    arrowStart: {
      id: Pe,
=======
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
>>>>>>> 06cb53327020040a2c0de7e2f77c22fa9ca998d5
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
<<<<<<< HEAD
      id: Ye,
=======
      id: Pe,
>>>>>>> 06cb53327020040a2c0de7e2f77c22fa9ca998d5
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
<<<<<<< HEAD
    getMarkerEnd: c,
=======
    getMarkerEnd: f,
>>>>>>> 06cb53327020040a2c0de7e2f77c22fa9ca998d5
    getMarkerStart: l,
    getSimulationLink: (o) => ({
      source: o.source,
      target: o.target,
      id: o.id,
      key: o.id,
<<<<<<< HEAD
      name: o.name,
      class: i(o.id),
      style: t(o),
      "stroke-width": e.value,
      "marker-end": c(),
=======
      class: i(o.id),
      style: t(o),
      "stroke-width": e.value,
      "marker-end": f(),
>>>>>>> 06cb53327020040a2c0de7e2f77c22fa9ca998d5
      "marker-start": l(o)
    }),
    markers: s
  };
}
<<<<<<< HEAD
const Xt = "X", Ht = "Y", Ut = "charge", Gt = "link", Ot = "collide", Ve = 0.01, Ke = 0.1, jt = Math.log(Ve) / Math.log(1 - Ke);
=======
const Xt = "X", Ht = "Y", Ut = "charge", Gt = "link", Ot = "collide", je = 0.01, Ve = 0.1, jt = Math.log(je) / Math.log(1 - Ve);
>>>>>>> 06cb53327020040a2c0de7e2f77c22fa9ca998d5
function Vt(e, n, r, t) {
  const { getNode: i } = Yt(t.nodeSize), { getSimulationLink: l } = Wt(
    t.linkWidth,
    t.nodeSize,
    t.directed
<<<<<<< HEAD
  ), c = We({
    nodes: [],
    links: []
  }), s = () => {
    console.debug("useSimulation.init"), c.nodes = e.value.map((g) => i(g)), c.links = n.value.map((g) => l(g)), y();
  }, y = async () => {
    console.debug("useSimulation.refresh"), f.value.stop(), f.value = o(), t.static.value ? f.value.tick(jt) : f.value.restart();
  }, o = () => {
    const g = Fe().alphaMin(Ve).alphaDecay(Ke).nodes(c.nodes);
=======
  ), f = Ye({
    nodes: [],
    links: []
  }), s = () => {
    console.debug("useSimulation.init"), f.nodes = e.value.map((g) => i(g)), f.links = n.value.map((g) => l(g)), y();
  }, y = async () => {
    console.debug("useSimulation.refresh"), c.value.stop(), c.value = o(), t.static.value ? c.value.tick(jt) : c.value.restart();
  }, o = () => {
    const g = Be().alphaMin(je).alphaDecay(Ve).nodes(f.nodes);
>>>>>>> 06cb53327020040a2c0de7e2f77c22fa9ca998d5
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
<<<<<<< HEAD
      kt(c.links).id((d) => {
=======
      kt(f.links).id((d) => {
>>>>>>> 06cb53327020040a2c0de7e2f77c22fa9ca998d5
        if (!("id" in d))
          throw new Error("Node id is undefined");
        return d.id;
      })
    ), g;
<<<<<<< HEAD
  }, f = V(
    Fe()
  );
  return De(
=======
  }, c = j(
    Be()
  );
  return Ce(
>>>>>>> 06cb53327020040a2c0de7e2f77c22fa9ca998d5
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
<<<<<<< HEAD
  ), De(t.static, async () => y(), {
=======
  ), Ce(t.static, async () => y(), {
>>>>>>> 06cb53327020040a2c0de7e2f77c22fa9ca998d5
    deep: !0,
    debounce: 100,
    maxWait: 1e3
  }), {
<<<<<<< HEAD
    simulation: f,
    graph: c
  };
}
const Kt = 0.1, Qt = 0.1, Zt = -300, Jt = 25, qt = 12, en = 2, tn = 45, nn = (e) => {
  const n = Z(() => {
    var t, i, l, c, s, y, o, f, g, d, v, p, h, u, a, _, x, w, k, M, E, N, D, A, z, L, b, oe, ae, le, se, ue, ce, fe, he, ve, ge, ye, de, _e, xe, we, pe, me, ke, Ne, Ae, Me;
    return {
      node: {
        stroke: ((l = (i = (t = e.value) == null ? void 0 : t.nodes) == null ? void 0 : i.colors) == null ? void 0 : l.stroke) || "#E2EB98",
        fill: ((y = (s = (c = e.value) == null ? void 0 : c.nodes) == null ? void 0 : s.colors) == null ? void 0 : y.fill) || "#93A392",
        selected: {
          stroke: ((d = (g = (f = (o = e.value) == null ? void 0 : o.nodes) == null ? void 0 : f.colors) == null ? void 0 : g.selected) == null ? void 0 : d.stroke) || "#9DC4B5",
          fill: (u = (h = (p = (v = e.value) == null ? void 0 : v.nodes) == null ? void 0 : p.colors) == null ? void 0 : h.selected) == null ? void 0 : u.fill
        },
        hover: {
          stroke: "#9DC4B5",
          fill: (w = (x = (_ = (a = e.value) == null ? void 0 : a.nodes) == null ? void 0 : _.colors) == null ? void 0 : x.hover) == null ? void 0 : w.fill
=======
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
>>>>>>> 06cb53327020040a2c0de7e2f77c22fa9ca998d5
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
<<<<<<< HEAD
          stroke: ((ve = (he = (fe = (ce = e.value) == null ? void 0 : ce.links) == null ? void 0 : fe.colors) == null ? void 0 : he.selected) == null ? void 0 : ve.stroke) || "#9DC4B5",
=======
          stroke: ((ve = (he = (ce = (fe = e.value) == null ? void 0 : fe.links) == null ? void 0 : ce.colors) == null ? void 0 : he.selected) == null ? void 0 : ve.stroke) || "#9DC4B5",
>>>>>>> 06cb53327020040a2c0de7e2f77c22fa9ca998d5
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
<<<<<<< HEAD
  label: Z(() => ({
=======
  label: Q(() => ({
>>>>>>> 06cb53327020040a2c0de7e2f77c22fa9ca998d5
    font: { size: e.value },
    offset: {
      x: n.value / 2 + e.value / 2,
      y: e.value / 2
    }
  }))
}), on = ["viewBox"], an = { key: 0 }, ln = ["fill"], sn = ["fill"], un = {
  id: "l-links",
  class: "links"
<<<<<<< HEAD
}, cn = ["id", "d", "stroke-width", "marker-end", "marker-start", "onClick", "onTouchstartPassive"], fn = ["font-size"], hn = ["xlink:href"], vn = {
  id: "l-nodes",
  class: "nodes"
}, gn = ["viewBox", "width", "height", "x", "y", "title", "onClick", "onTouchendPassive", "onMousedown", "onTouchstartPassive", "innerHTML"], yn = ["cx", "cy", "r", "title", "onClick", "onTouchendPassive", "onMousedown", "onTouchstartPassive"], dn = ["x", "y", "font-size", "stroke-width"], wn = /* @__PURE__ */ Qe({
=======
}, fn = ["id", "d", "stroke-width", "marker-end", "marker-start", "onClick", "onTouchstartPassive"], cn = {
  id: "l-nodes",
  class: "nodes"
}, hn = ["viewBox", "width", "height", "x", "y", "title", "onClick", "onTouchendPassive", "onMousedown", "onTouchstartPassive", "innerHTML"], vn = ["cx", "cy", "r", "title", "onClick", "onTouchendPassive", "onMousedown", "onTouchstartPassive"], gn = ["x", "y", "font-size", "stroke-width"], _n = /* @__PURE__ */ Ke({
>>>>>>> 06cb53327020040a2c0de7e2f77c22fa9ca998d5
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
<<<<<<< HEAD
    Ze((h) => ({
      "636e5519": m(t).node.stroke,
      ccf5ceb8: m(t).node.fill,
      "1e3fe4d6": m(t).node.selected.stroke || m(t).node.stroke,
      f4286b16: m(t).node.selected.fill || m(t).node.fill,
      e6dd14dc: m(t).node.pinned.stroke || m(t).node.stroke,
      "283a8e1c": m(t).node.pinned.fill || m(t).node.fill,
      c995d3d8: m(t).node.hover.stroke || m(t).node.stroke,
      "1edeea74": m(t).node.hover.fill || m(t).node.fill,
      "8c40a7be": m(t).link.stroke,
      "1cf091ac": m(t).link.fill,
      a26d15bc: m(t).link.selected.stroke,
      "700aa6ed": m(t).link.selected.fill,
      "42fd294b": m(t).node.hover.stroke,
      "42815d54": m(t).node.hover.fill,
      "269dfcb4": m(t).link.label.fill,
      "6c526e9e": m(t).node.label.fill
    }));
    const { theme: t, options: i } = nn(R(() => r.options)), l = V(null), c = V({ width: 100, height: 100 });
    qe(l, (h) => {
      const u = h[0];
      u.contentRect.width === c.value.width && u.contentRect.height === c.value.height || (c.value = {
=======
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
>>>>>>> 06cb53327020040a2c0de7e2f77c22fa9ca998d5
        width: u.contentRect.width,
        height: u.contentRect.height
      });
    });
    const s = (h) => typeof h.source != "number" && typeof h.source != "string" && typeof h.target != "number" && typeof h.target != "string" ? `M${h.source.x} ${h.source.y} L${h.target.x} ${h.target.y}` : void 0, { simulation: y, graph: o } = Vt(
      R(() => r.nodes),
      R(() => r.links),
<<<<<<< HEAD
      c,
      i
    ), { dragStart: f, dragEnd: g, move: d } = et(
      y,
      i.draggables
    ), { label: v } = rn(i.nodeFontSize, i.nodeSize), { markers: p } = tt(
=======
      f,
      i
    ), { dragStart: c, dragEnd: g, move: d } = et(
      y,
      i.draggables
    ), { label: v } = rn(i.nodeFontSize, i.nodeSize), { markers: w } = tt(
>>>>>>> 06cb53327020040a2c0de7e2f77c22fa9ca998d5
      i.linkWidth,
      i.nodeSize,
      i.directed
    );
<<<<<<< HEAD
    return (h, u) => (I(), B("svg", {
=======
    return (h, u) => ($(), I("svg", {
>>>>>>> 06cb53327020040a2c0de7e2f77c22fa9ca998d5
      ref_key: "svg",
      ref: l,
      xmlns: "http://www.w3.org/2000/svg",
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      preserveAspectRatio: "xMinYMin",
<<<<<<< HEAD
      viewBox: `0 0 ${c.value.width} ${c.value.height}`,
=======
      viewBox: `0 0 ${f.value.width} ${f.value.height}`,
>>>>>>> 06cb53327020040a2c0de7e2f77c22fa9ca998d5
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
<<<<<<< HEAD
      m(i).directed ? (I(), B("defs", an, [
        $("marker", Ee(Se(m(p).arrowEnd)), [
          $("path", {
=======
      m(i).directed ? ($(), I("defs", an, [
        F("marker", Ee(Se(m(w).arrowEnd)), [
          F("path", {
>>>>>>> 06cb53327020040a2c0de7e2f77c22fa9ca998d5
            fill: m(t).link.stroke,
            d: "M0 -5 L 10 0 L 0 5"
          }, null, 8, ln)
        ], 16),
<<<<<<< HEAD
        $("marker", Ee(Se(m(p).arrowStart)), [
          $("path", {
=======
        F("marker", Ee(Se(m(w).arrowStart)), [
          F("path", {
>>>>>>> 06cb53327020040a2c0de7e2f77c22fa9ca998d5
            fill: m(t).link.stroke,
            d: "M 10 5 L 0 0 L 10 -5"
          }, null, 8, sn)
        ], 16)
<<<<<<< HEAD
      ])) : Je("", !0),
      $("g", un, [
        (I(!0), B(G, null, Te(m(o).links, (a, _) => (I(), B(G, { key: _ }, [
          $("path", {
            id: `${_}`,
            d: s(a),
            "stroke-width": a["stroke-width"],
            class: q(a.class),
            style: ee(a.style),
            "marker-end": a["marker-end"],
            "marker-start": a["marker-start"],
            onClick: (x) => n("link-click", x, a),
            onTouchstartPassive: (x) => n("link-click", x, a)
          }, null, 46, cn),
          $("text", {
            class: "link-label",
            "font-size": m(v).font.size
          }, [
            $("textPath", {
              "xlink:href": "#" + _,
              startOffset: "50%"
            }, Ce(a.name), 9, hn)
          ], 8, fn)
        ], 64))), 128))
      ]),
      $("g", vn, [
        (I(!0), B(G, null, Te(m(o).nodes, (a, _) => (I(), B(G, { key: _ }, [
          a.innerSVG ? (I(), B("svg", {
=======
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
>>>>>>> 06cb53327020040a2c0de7e2f77c22fa9ca998d5
            key: 0,
            viewBox: a.innerSVG.viewBox,
            width: a.width,
            height: a.height,
            x: (a.x || 0) - (a.width || 0) / 2,
            y: (a.y || 0) - (a.height || 0) / 2,
            style: ee(a.style),
            title: a.name,
            class: q(a.cssClass),
<<<<<<< HEAD
            onClick: (x) => n("node-click", x, a),
            onTouchendPassive: (x) => n("node-click", x, a),
            onMousedown: O((x) => m(f)(x, _), ["prevent"]),
            onTouchstartPassive: O((x) => m(f)(x, _), ["prevent"]),
            innerHTML: a.innerSVG.innerHtml
          }, null, 46, gn)) : (I(), B("circle", {
=======
            onClick: (p) => n("node-click", p, a),
            onTouchendPassive: (p) => n("node-click", p, a),
            onMousedown: G((p) => m(c)(p, _), ["prevent"]),
            onTouchstartPassive: G((p) => m(c)(p, _), ["prevent"]),
            innerHTML: a.innerSVG.innerHtml
          }, null, 46, hn)) : ($(), I("circle", {
>>>>>>> 06cb53327020040a2c0de7e2f77c22fa9ca998d5
            key: 1,
            cx: a.x,
            cy: a.y,
            r: a.r,
            style: ee(a.style),
            title: a.name,
            class: q(a.cssClass),
<<<<<<< HEAD
            onClick: (x) => h.$emit("node-click", x, a),
            onTouchendPassive: (x) => h.$emit("node-click", x, a),
            onMousedown: O((x) => m(f)(x, _), ["prevent"]),
            onTouchstartPassive: O((x) => m(f)(x, _), ["prevent"])
          }, null, 46, yn)),
          $("text", {
=======
            onClick: (p) => h.$emit("node-click", p, a),
            onTouchendPassive: (p) => h.$emit("node-click", p, a),
            onMousedown: G((p) => m(c)(p, _), ["prevent"]),
            onTouchstartPassive: G((p) => m(c)(p, _), ["prevent"])
          }, null, 46, vn)),
          F("text", {
>>>>>>> 06cb53327020040a2c0de7e2f77c22fa9ca998d5
            class: "node-label",
            x: (a.x || 0) + (a.width || 0) / 2 + m(v).font.size / 2,
            y: (a.y || 0) + m(v).offset.y,
            "font-size": m(v).font.size,
            "stroke-width": m(v).font.size / 8
<<<<<<< HEAD
          }, Ce(a.name), 9, dn)
=======
          }, Je(a.name), 9, gn)
>>>>>>> 06cb53327020040a2c0de7e2f77c22fa9ca998d5
        ], 64))), 128))
      ])
    ], 40, on));
  }
});
export {
<<<<<<< HEAD
  wn as D3NetworkGraph,
=======
  _n as D3NetworkGraph,
>>>>>>> 06cb53327020040a2c0de7e2f77c22fa9ca998d5
  Vt as useSimulation
};
