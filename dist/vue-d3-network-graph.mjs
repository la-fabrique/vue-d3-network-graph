import { Fragment as e, computed as t, createCommentVNode as n, createElementBlock as r, createElementVNode as i, defineComponent as a, guardReactiveProps as o, normalizeClass as s, normalizeProps as c, normalizeStyle as l, onMounted as u, openBlock as d, reactive as f, ref as p, renderList as m, shallowRef as h, toDisplayString as g, toRef as _, unref as v, withModifiers as y } from "vue";
import { isDefined as b, useResizeObserver as x, watchDebounced as S } from "@vueuse/core";
// src/useDraggable.ts
function C(e, t) {
	let n = p(void 0), r = f({
		x: 0,
		y: 0
	}), i = (e) => {
		let t, n = 0;
		return e instanceof MouseEvent ? (t = e.clientX, n = e.clientY) : e instanceof TouchEvent && (t = e.touches[0].clientX, n = e.touches[0].clientY), {
			x: t || 0,
			y: n || 0
		};
	}, a = (r, i) => (t.value && (n.value = i, o(r, e.value.nodes()[i])), void 0), o = (e, t) => {
		let n = 0, a = 0;
		if (e && t && t?.x && t?.y) {
			let r = i(e);
			n = r.x ? r.x - t.x : t.x, a = r.y ? r.y - t.y : t.y;
		}
		r.x = n, r.y = a;
	}, s = () => {
		n.value !== void 0 && c();
	}, c = () => {
		n.value = void 0, e.value.alpha(.1), e.value.restart(), o();
	};
	return {
		dragStart: a,
		dragEnd: s,
		dragMove: (t) => {
			let a = i(t);
			n.value != null && e.value.nodes()[n.value] && (e.value.restart(), e.value.alpha(.5), e.value.nodes()[n.value].fx = a.x - r.x, e.value.nodes()[n.value].fy = a.y - r.y);
		}
	};
}
// src/useLinkMarkers.ts
var w = "arrow-start", T = "arrow-end";
function E(e, n, r) {
	return {
		getMarkerEnd: (e) => r.value ? `url(#${T})` : void 0,
		getMarkerStart: (e) => r.value && e.twoWay ? `url(#${w})` : void 0,
		markers: t(() => ({
			arrowStart: {
				id: w,
				refX: 0,
				refY: 0,
				viewBox: "0 -5 10 10",
				orient: "auto",
				markerWidth: 10,
				markerHeight: 10
			},
			arrowEnd: {
				id: T,
				refX: 10,
				refY: 0,
				viewBox: "0 -5 10 10",
				orient: "auto",
				markerWidth: 10,
				markerHeight: 10
			}
		}))
	};
}
function D(e, t, n, r) {
	if (isNaN(t) || isNaN(n)) return e;
	var i, a = e._root, o = { data: r }, s = e._x0, c = e._y0, l = e._x1, u = e._y1, d, f, p, m, h, g, _, v;
	if (!a) return e._root = o, e;
	for (; a.length;) if ((h = t >= (d = (s + l) / 2)) ? s = d : l = d, (g = n >= (f = (c + u) / 2)) ? c = f : u = f, i = a, !(a = a[_ = g << 1 | h])) return i[_] = o, e;
	if (p = +e._x.call(null, a.data), m = +e._y.call(null, a.data), t === p && n === m) return o.next = a, i ? i[_] = o : e._root = o, e;
	do
		i = i ? i[_] = [
			,
			,
			,
			,
		] : e._root = [
			,
			,
			,
			,
		], (h = t >= (d = (s + l) / 2)) ? s = d : l = d, (g = n >= (f = (c + u) / 2)) ? c = f : u = f;
	while ((_ = g << 1 | h) == (v = (m >= f) << 1 | p >= d));
	return i[v] = a, i[_] = o, e;
}
function O(e, t, n, r, i) {
	this.node = e, this.x0 = t, this.y0 = n, this.x1 = r, this.y1 = i;
}
function k(e) {
	return e[0];
}
function ee(e) {
	return e[1];
}
function A(e, t, n) {
	var r = new j(t ?? k, n ?? ee, NaN, NaN, NaN, NaN);
	return e == null ? r : r.addAll(e);
}
function j(e, t, n, r, i, a) {
	this._x = e, this._y = t, this._x0 = n, this._y0 = r, this._x1 = i, this._y1 = a, this._root = void 0;
}
function te(e) {
	for (var t = { data: e.data }, n = t; e = e.next;) n = n.next = { data: e.data };
	return t;
}
var M = A.prototype = j.prototype;
M.copy = function() {
	var e = new j(this._x, this._y, this._x0, this._y0, this._x1, this._y1), t = this._root, n, r;
	if (!t) return e;
	if (!t.length) return e._root = te(t), e;
	for (n = [{
		source: t,
		target: e._root = [
			,
			,
			,
			,
		]
	}]; t = n.pop();) for (var i = 0; i < 4; ++i) (r = t.source[i]) && (r.length ? n.push({
		source: r,
		target: t.target[i] = [
			,
			,
			,
			,
		]
	}) : t.target[i] = te(r));
	return e;
}, M.add = function(e) {
	let t = +this._x.call(null, e), n = +this._y.call(null, e);
	return D(this.cover(t, n), t, n, e);
}, M.addAll = function(e) {
	Array.isArray(e) || (e = Array.from(e));
	let t = e.length, n = new Float64Array(t), r = new Float64Array(t), i = 1e400, a = i, o = -i, s = o;
	for (let c = 0, l, u, d; c < t; ++c) isNaN(u = +this._x.call(null, l = e[c])) || isNaN(d = +this._y.call(null, l)) ? n[c] = NaN : (n[c] = u, r[c] = d, u < i && (i = u), u > o && (o = u), d < a && (a = d), d > s && (s = d));
	if (i > o || a > s) return this;
	this.cover(i, a).cover(o, s);
	for (let i = 0; i < t; ++i) D(this, n[i], r[i], e[i]);
	return this;
}, M.cover = function(e, t) {
	if (isNaN(e = +e) || isNaN(t = +t)) return this;
	var n = this._x0, r = this._y0, i = this._x1, a = this._y1;
	if (isNaN(n)) i = (n = Math.floor(e)) + 1, a = (r = Math.floor(t)) + 1;
	else {
		for (var o = i - n || 1, s = this._root, c, l; n > e || e >= i || r > t || t >= a;) switch (l = (t < r) << 1 | e < n, c = [
			,
			,
			,
			,
		], c[l] = s, s = c, o *= 2, l) {
			case 0:
				i = n + o, a = r + o;
				break;
			case 1:
				n = i - o, a = r + o;
				break;
			case 2:
				i = n + o, r = a - o;
				break;
			case 3: n = i - o, r = a - o;
		}
		this._root && this._root.length && (this._root = s);
	}
	return this._x0 = n, this._y0 = r, this._x1 = i, this._y1 = a, this;
}, M.data = function() {
	var e = [];
	return this.visit(function(t) {
		if (!t.length) do
			e.push(t.data);
		while (t = t.next);
	}), e;
}, M.extent = function(e) {
	return arguments.length ? this.cover(+e[0][0], +e[0][1]).cover(+e[1][0], +e[1][1]) : isNaN(this._x0) ? void 0 : [[this._x0, this._y0], [this._x1, this._y1]];
}, M.find = function(e, t, n) {
	var r, i = this._x0, a = this._y0, o, s, c, l, u = this._x1, d = this._y1, f = [], p = this._root, m, h;
	for (p && f.push(new O(p, i, a, u, d)), n == null ? n = 1e400 : (i = e - n, a = t - n, u = e + n, d = t + n, n *= n); m = f.pop();) if (!(!(p = m.node) || (o = m.x0) > u || (s = m.y0) > d || (c = m.x1) < i || (l = m.y1) < a)) {
		if (p.length) {
			var g = (o + c) / 2, _ = (s + l) / 2;
			f.push(new O(p[3], g, _, c, l), new O(p[2], o, _, g, l), new O(p[1], g, s, c, _), new O(p[0], o, s, g, _)), (h = (t >= _) << 1 | e >= g) && (m = f[f.length - 1], f[f.length - 1] = f[f.length - 1 - h], f[f.length - 1 - h] = m);
		} else {
			var v = e - +this._x.call(null, p.data), y = t - +this._y.call(null, p.data), b = v * v + y * y;
			if (b < n) {
				var x = Math.sqrt(n = b);
				i = e - x, a = t - x, u = e + x, d = t + x, r = p.data;
			}
		}
	}
	return r;
}, M.remove = function(e) {
	if (isNaN(u = +this._x.call(null, e)) || isNaN(d = +this._y.call(null, e))) return this;
	var t, n = this._root, r, i, a, o = this._x0, s = this._y0, c = this._x1, l = this._y1, u, d, f, p, m, h, g, _;
	if (!n) return this;
	if (n.length) for (;;) {
		if ((m = u >= (f = (o + c) / 2)) ? o = f : c = f, (h = d >= (p = (s + l) / 2)) ? s = p : l = p, t = n, !(n = n[g = h << 1 | m])) return this;
		if (!n.length) break;
		(t[g + 1 & 3] || t[g + 2 & 3] || t[g + 3 & 3]) && (r = t, _ = g);
	}
	for (; n.data !== e;) if (i = n, !(n = n.next)) return this;
	return (a = n.next) && delete n.next, i ? (a ? i.next = a : delete i.next, this) : t ? (a ? t[g] = a : delete t[g], (n = t[0] || t[1] || t[2] || t[3]) && n === (t[3] || t[2] || t[1] || t[0]) && !n.length && (r ? r[_] = n : this._root = n), this) : (this._root = a, this);
}, M.removeAll = function(e) {
	for (var t = 0, n = e.length; t < n; ++t) this.remove(e[t]);
	return this;
}, M.root = function() {
	return this._root;
}, M.size = function() {
	var e = 0;
	return this.visit(function(t) {
		if (!t.length) do
			++e;
		while (t = t.next);
	}), e;
}, M.visit = function(e) {
	var t = [], n, r = this._root, i, a, o, s, c;
	for (r && t.push(new O(r, this._x0, this._y0, this._x1, this._y1)); n = t.pop();) if (!e(r = n.node, a = n.x0, o = n.y0, s = n.x1, c = n.y1) && r.length) {
		var l = (a + s) / 2, u = (o + c) / 2;
		(i = r[3]) && t.push(new O(i, l, u, s, c)), (i = r[2]) && t.push(new O(i, a, u, l, c)), (i = r[1]) && t.push(new O(i, l, o, s, u)), (i = r[0]) && t.push(new O(i, a, o, l, u));
	}
	return this;
}, M.visitAfter = function(e) {
	var t = [], n = [], r;
	for (this._root && t.push(new O(this._root, this._x0, this._y0, this._x1, this._y1)); r = t.pop();) {
		var i = r.node;
		if (i.length) {
			var a, o = r.x0, s = r.y0, c = r.x1, l = r.y1, u = (o + c) / 2, d = (s + l) / 2;
			(a = i[0]) && t.push(new O(a, o, s, u, d)), (a = i[1]) && t.push(new O(a, u, s, c, d)), (a = i[2]) && t.push(new O(a, o, d, u, l)), (a = i[3]) && t.push(new O(a, u, d, c, l));
		}
		n.push(r);
	}
	for (; r = n.pop();) e(r.node, r.x0, r.y0, r.x1, r.y1);
	return this;
}, M.x = function(e) {
	return arguments.length ? (this._x = e, this) : this._x;
}, M.y = function(e) {
	return arguments.length ? (this._y = e, this) : this._y;
};
// node_modules/d3-dispatch/dist/d3-dispatch.mjs
var N = { value: () => {} };
function ne() {
	for (var e = 0, t = arguments.length, n = {}, r; e < t; ++e) {
		if (!(r = arguments[e] + "") || r in n || /[\s.]/.test(r)) throw Error("illegal type: " + r);
		n[r] = [];
	}
	return new P(n);
}
function P(e) {
	this._ = e;
}
function re(e, t) {
	return e.trim().split(/^|\s+/).map(function(e) {
		var n = "", r = e.indexOf(".");
		if (r >= 0 && (n = e.slice(r + 1), e = e.slice(0, r)), e && !t.hasOwnProperty(e)) throw Error("unknown type: " + e);
		return {
			type: e,
			name: n
		};
	});
}
P.prototype = ne.prototype = {
	constructor: P,
	on: function(e, t) {
		var n = this._, r = re(e + "", n), i, a = -1, o = r.length;
		if (arguments.length < 2) {
			for (; ++a < o;) if ((i = (e = r[a]).type) && (i = ie(n[i], e.name))) return i;
		} else {
			if (t != null && typeof t != "function") throw Error("invalid callback: " + t);
			for (; ++a < o;) if (i = (e = r[a]).type) n[i] = ae(n[i], e.name, t);
			else if (t == null) for (i in n) n[i] = ae(n[i], e.name, null);
			return this;
		}
	},
	copy: function() {
		var e = {}, t = this._;
		for (var n in t) e[n] = t[n].slice();
		return new P(e);
	},
	call: function(e, t) {
		if ((i = arguments.length - 2) > 0) for (var n = Array(i), r = 0, i, a; r < i; ++r) n[r] = arguments[r + 2];
		if (!this._.hasOwnProperty(e)) throw Error("unknown type: " + e);
		for (a = this._[e], r = 0, i = a.length; r < i; ++r) a[r].value.apply(t, n);
	},
	apply: function(e, t, n) {
		if (!this._.hasOwnProperty(e)) throw Error("unknown type: " + e);
		for (var r = this._[e], i = 0, a = r.length; i < a; ++i) r[i].value.apply(t, n);
	}
};
function ie(e, t) {
	for (var n = 0, r = e.length, i; n < r; ++n) if ((i = e[n]).name === t) return i.value;
}
function ae(e, t, n) {
	for (var r = 0, i = e.length; r < i; ++r) if (e[r].name === t) {
		e[r] = N, e = e.slice(0, r).concat(e.slice(r + 1));
		break;
	}
	return n != null && e.push({
		name: t,
		value: n
	}), e;
}
// node_modules/d3-timer/dist/d3-timer.mjs
var F = 0, I = 0, L = 0, oe = 1e3, R, z, B = 0, V = 0, H = 0, U = typeof performance == "object" && performance.now ? performance : Date, W = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
	setTimeout(e, 17);
};
function se() {
	return V ||= (W(G), U.now() + H);
}
function G() {
	V = 0;
}
function K() {
	this._call = this._time = this._next = null;
}
K.prototype = ce.prototype = {
	constructor: K,
	restart: function(e, t, n) {
		if (typeof e != "function") throw TypeError("callback is not a function");
		n = (n == null ? se() : +n) + (t == null ? 0 : +t), !this._next && z !== this && (z ? z._next = this : R = this, z = this), this._call = e, this._time = n, pe();
	},
	stop: function() {
		this._call && (this._call = null, this._time = 1e400, pe());
	}
};
function ce(e, t, n) {
	var r = new K();
	return r.restart(e, t, n), r;
}
function le() {
	se(), ++F;
	for (var e = R, t; e;) (t = V - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
	--F;
}
function ue() {
	V = (B = U.now()) + H, F = I = 0;
	try {
		le();
	} finally {
		F = 0, fe(), V = 0;
	}
}
function de() {
	var e = U.now(), t = e - B;
	t > oe && (H -= t, B = e);
}
function fe() {
	for (var e, t = R, n, r = 1e400; t;) t._call ? (r > t._time && (r = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : R = n);
	z = e, pe(r);
}
function pe(e) {
	F || (I &&= clearTimeout(I), e - V > 24 ? (e < 1e400 && (I = setTimeout(ue, Math.ceil(e - U.now() - H) + 1)), L &&= clearInterval(L)) : (L ||= (B = U.now(), setInterval(de, oe)), F = 1, W(ue)));
}
// node_modules/d3-force/dist/d3-force.mjs
function q(e) {
	return function() {
		return e;
	};
}
function J(e) {
	return (e() - .5) * 1e-6;
}
function me(e) {
	return e.x + e.vx;
}
function he(e) {
	return e.y + e.vy;
}
function ge(e) {
	var t, n, r, i = 1, a = 1;
	typeof e != "function" && (e = q(e == null ? 1 : +e));
	function o() {
		for (var e, o = t.length, c, l, u, d, f, p, m = 0; m < a; ++m) for (c = A(t, me, he).visitAfter(s), e = 0; e < o; ++e) l = t[e], f = n[l.index], p = f * f, u = l.x + l.vx, d = l.y + l.vy, c.visit(h);
		function h(e, t, n, a, o) {
			var s = e.data, c = e.r, m = f + c;
			if (s) {
				if (s.index > l.index) {
					var h = u - s.x - s.vx, g = d - s.y - s.vy, _ = h * h + g * g;
					_ < m * m && (h === 0 && (h = J(r), _ += h * h), g === 0 && (g = J(r), _ += g * g), _ = (m - (_ = Math.sqrt(_))) / _ * i, l.vx += (h *= _) * (m = (c *= c) / (p + c)), l.vy += (g *= _) * m, s.vx -= h * (m = 1 - m), s.vy -= g * m);
				}
			} else return t > u + m || a < u - m || n > d + m || o < d - m;
		}
	}
	function s(e) {
		if (e.data) return e.r = n[e.data.index];
		for (var t = e.r = 0; t < 4; ++t) e[t] && e[t].r > e.r && (e.r = e[t].r);
	}
	function c() {
		if (t) {
			var r, i = t.length, a;
			for (n = Array(i), r = 0; r < i; ++r) a = t[r], n[a.index] = +e(a, r, t);
		}
	}
	return o.initialize = function(e, n) {
		t = e, r = n, c();
	}, o.iterations = function(e) {
		return arguments.length ? (a = +e, o) : a;
	}, o.strength = function(e) {
		return arguments.length ? (i = +e, o) : i;
	}, o.radius = function(t) {
		return arguments.length ? (e = typeof t == "function" ? t : q(+t), c(), o) : e;
	}, o;
}
function _e(e) {
	return e.index;
}
function ve(e, t) {
	var n = e.get(t);
	if (!n) throw Error("node not found: " + t);
	return n;
}
function ye(e) {
	var t = _e, n = d, r, i = q(30), a, o, s, c, l, u = 1;
	e ??= [];
	function d(e) {
		return 1 / Math.min(s[e.source.index], s[e.target.index]);
	}
	function f(t) {
		for (var n = 0, i = e.length; n < u; ++n) for (var o = 0, s, d, f, p, m, h, g; o < i; ++o) s = e[o], d = s.source, f = s.target, p = f.x + f.vx - d.x - d.vx || J(l), m = f.y + f.vy - d.y - d.vy || J(l), h = Math.sqrt(p * p + m * m), h = (h - a[o]) / h * t * r[o], p *= h, m *= h, f.vx -= p * (g = c[o]), f.vy -= m * g, d.vx += p * (g = 1 - g), d.vy += m * g;
	}
	function p() {
		if (o) {
			var n, i = o.length, l = e.length, u = new Map(o.map((e, n) => [t(e, n, o), e])), d;
			for (n = 0, s = Array(i); n < l; ++n) d = e[n], d.index = n, typeof d.source != "object" && (d.source = ve(u, d.source)), typeof d.target != "object" && (d.target = ve(u, d.target)), s[d.source.index] = (s[d.source.index] || 0) + 1, s[d.target.index] = (s[d.target.index] || 0) + 1;
			for (n = 0, c = Array(l); n < l; ++n) d = e[n], c[n] = s[d.source.index] / (s[d.source.index] + s[d.target.index]);
			r = Array(l), m(), a = Array(l), h();
		}
	}
	function m() {
		if (o) for (var t = 0, i = e.length; t < i; ++t) r[t] = +n(e[t], t, e);
	}
	function h() {
		if (o) for (var t = 0, n = e.length; t < n; ++t) a[t] = +i(e[t], t, e);
	}
	return f.initialize = function(e, t) {
		o = e, l = t, p();
	}, f.links = function(t) {
		return arguments.length ? (e = t, p(), f) : e;
	}, f.id = function(e) {
		return arguments.length ? (t = e, f) : t;
	}, f.iterations = function(e) {
		return arguments.length ? (u = +e, f) : u;
	}, f.strength = function(e) {
		return arguments.length ? (n = typeof e == "function" ? e : q(+e), m(), f) : n;
	}, f.distance = function(e) {
		return arguments.length ? (i = typeof e == "function" ? e : q(+e), h(), f) : i;
	}, f;
}
var be = 1664525, xe = 0x3c6ef35f, Se = 4294967296;
function Ce() {
	let e = 1;
	return () => (e = (be * e + xe) % Se) / Se;
}
function we(e) {
	return e.x;
}
function Te(e) {
	return e.y;
}
var Ee = 10, De = Math.PI * (3 - Math.sqrt(5));
function Oe(e) {
	var t, n = 1, r = .001, i = 1 - r ** (1 / 300), a = 0, o = .6, s = /* @__PURE__ */ new Map(), c = ce(d), l = ne("tick", "end"), u = Ce();
	e ??= [];
	function d() {
		f(), l.call("tick", t), n < r && (c.stop(), l.call("end", t));
	}
	function f(r) {
		var c, l = e.length, u;
		r === void 0 && (r = 1);
		for (var d = 0; d < r; ++d) for (n += (a - n) * i, s.forEach(function(e) {
			e(n);
		}), c = 0; c < l; ++c) u = e[c], u.fx == null ? u.x += u.vx *= o : (u.x = u.fx, u.vx = 0), u.fy == null ? u.y += u.vy *= o : (u.y = u.fy, u.vy = 0);
		return t;
	}
	function p() {
		for (var t = 0, n = e.length, r; t < n; ++t) {
			if (r = e[t], r.index = t, r.fx != null && (r.x = r.fx), r.fy != null && (r.y = r.fy), isNaN(r.x) || isNaN(r.y)) {
				var i = Ee * Math.sqrt(.5 + t), a = t * De;
				r.x = i * Math.cos(a), r.y = i * Math.sin(a);
			}
			(isNaN(r.vx) || isNaN(r.vy)) && (r.vx = r.vy = 0);
		}
	}
	function m(t) {
		return t.initialize && t.initialize(e, u), t;
	}
	return p(), t = {
		tick: f,
		restart: function() {
			return c.restart(d), t;
		},
		stop: function() {
			return c.stop(), t;
		},
		nodes: function(n) {
			return arguments.length ? (e = n, p(), s.forEach(m), t) : e;
		},
		alpha: function(e) {
			return arguments.length ? (n = +e, t) : n;
		},
		alphaMin: function(e) {
			return arguments.length ? (r = +e, t) : r;
		},
		alphaDecay: function(e) {
			return arguments.length ? (i = +e, t) : +i;
		},
		alphaTarget: function(e) {
			return arguments.length ? (a = +e, t) : a;
		},
		velocityDecay: function(e) {
			return arguments.length ? (o = 1 - e, t) : 1 - o;
		},
		randomSource: function(e) {
			return arguments.length ? (u = e, s.forEach(m), t) : u;
		},
		force: function(e, n) {
			return arguments.length > 1 ? (n == null ? s.delete(e) : s.set(e, m(n)), t) : s.get(e);
		},
		find: function(t, n, r) {
			var i = 0, a = e.length, o, s, c, l, u;
			for (r == null ? r = 1e400 : r *= r, i = 0; i < a; ++i) l = e[i], o = t - l.x, s = n - l.y, c = o * o + s * s, c < r && (u = l, r = c);
			return u;
		},
		on: function(e, n) {
			return arguments.length > 1 ? (l.on(e, n), t) : l.on(e);
		}
	};
}
function ke() {
	var e, t, n, r, i = q(-30), a, o = 1, s = 1e400, c = .81;
	function l(n) {
		var i, a = e.length, o = A(e, we, Te).visitAfter(d);
		for (r = n, i = 0; i < a; ++i) t = e[i], o.visit(f);
	}
	function u() {
		if (e) {
			var t, n = e.length, r;
			for (a = Array(n), t = 0; t < n; ++t) r = e[t], a[r.index] = +i(r, t, e);
		}
	}
	function d(e) {
		var t = 0, n, r, i = 0, o, s, c;
		if (e.length) {
			for (o = s = c = 0; c < 4; ++c) (n = e[c]) && (r = Math.abs(n.value)) && (t += n.value, i += r, o += r * n.x, s += r * n.y);
			e.x = o / i, e.y = s / i;
		} else {
			n = e, n.x = n.data.x, n.y = n.data.y;
			do
				t += a[n.data.index];
			while (n = n.next);
		}
		e.value = t;
	}
	function f(e, i, l, u) {
		if (!e.value) return !0;
		var d = e.x - t.x, f = e.y - t.y, p = u - i, m = d * d + f * f;
		if (p * p / c < m) return m < s && (d === 0 && (d = J(n), m += d * d), f === 0 && (f = J(n), m += f * f), m < o && (m = Math.sqrt(o * m)), t.vx += d * e.value * r / m, t.vy += f * e.value * r / m), !0;
		if (!(e.length || m >= s)) {
			(e.data !== t || e.next) && (d === 0 && (d = J(n), m += d * d), f === 0 && (f = J(n), m += f * f), m < o && (m = Math.sqrt(o * m)));
			do
				e.data !== t && (p = a[e.data.index] * r / m, t.vx += d * p, t.vy += f * p);
			while (e = e.next);
		}
	}
	return l.initialize = function(t, r) {
		e = t, n = r, u();
	}, l.strength = function(e) {
		return arguments.length ? (i = typeof e == "function" ? e : q(+e), u(), l) : i;
	}, l.distanceMin = function(e) {
		return arguments.length ? (o = e * e, l) : Math.sqrt(o);
	}, l.distanceMax = function(e) {
		return arguments.length ? (s = e * e, l) : Math.sqrt(s);
	}, l.theta = function(e) {
		return arguments.length ? (c = e * e, l) : Math.sqrt(c);
	}, l;
}
function Ae(e) {
	var t = q(.1), n, r, i;
	typeof e != "function" && (e = q(e == null ? 0 : +e));
	function a(e) {
		for (var t = 0, a = n.length, o; t < a; ++t) o = n[t], o.vx += (i[t] - o.x) * r[t] * e;
	}
	function o() {
		if (n) {
			var a, o = n.length;
			for (r = Array(o), i = Array(o), a = 0; a < o; ++a) r[a] = isNaN(i[a] = +e(n[a], a, n)) ? 0 : +t(n[a], a, n);
		}
	}
	return a.initialize = function(e) {
		n = e, o();
	}, a.strength = function(e) {
		return arguments.length ? (t = typeof e == "function" ? e : q(+e), o(), a) : t;
	}, a.x = function(t) {
		return arguments.length ? (e = typeof t == "function" ? t : q(+t), o(), a) : e;
	}, a;
}
function je(e) {
	var t = q(.1), n, r, i;
	typeof e != "function" && (e = q(e == null ? 0 : +e));
	function a(e) {
		for (var t = 0, a = n.length, o; t < a; ++t) o = n[t], o.vy += (i[t] - o.y) * r[t] * e;
	}
	function o() {
		if (n) {
			var a, o = n.length;
			for (r = Array(o), i = Array(o), a = 0; a < o; ++a) r[a] = isNaN(i[a] = +e(n[a], a, n)) ? 0 : +t(n[a], a, n);
		}
	}
	return a.initialize = function(e) {
		n = e, o();
	}, a.strength = function(e) {
		return arguments.length ? (t = typeof e == "function" ? e : q(+e), o(), a) : t;
	}, a.y = function(t) {
		return arguments.length ? (e = typeof t == "function" ? t : q(+t), o(), a) : e;
	}, a;
}
// src/utils.ts
var Y = (e) => !!e && typeof e != "number" && typeof e != "string", Me = (e, t) => t === void 0 ? e : typeof t == "number" ? t : t.width > t.height ? t.width : t.height, Ne = (e, t) => Me(e, t) / 2, Pe = (e, t) => t === void 0 ? e : typeof t == "number" ? t : t.width, Fe = (e, t) => t === void 0 ? e : typeof t == "number" ? t : t.height, Ie = (e, t, n, r, i) => {
	let a = Math.sqrt((r - e) * (r - e) + (i - t) * (i - t));
	return {
		x: e + n * (r - e) / a,
		y: t + n * (i - t) / a
	};
}, Le = (e, t) => e ? [e, ...t || []] : t || [];
// node_modules/d3-hierarchy/dist/d3-hierarchy.mjs
function Re(e) {
	var t = 0, n = e.children, r = n && n.length;
	if (!r) t = 1;
	else for (; --r >= 0;) t += n[r].value;
	e.value = t;
}
function ze() {
	return this.eachAfter(Re);
}
function Be(e, t) {
	let n = -1;
	for (let r of this) e.call(t, r, ++n, this);
	return this;
}
function Ve(e, t) {
	for (var n = this, r = [n], i, a, o = -1; n = r.pop();) if (e.call(t, n, ++o, this), i = n.children) for (a = i.length - 1; a >= 0; --a) r.push(i[a]);
	return this;
}
function He(e, t) {
	for (var n = this, r = [n], i = [], a, o, s, c = -1; n = r.pop();) if (i.push(n), a = n.children) for (o = 0, s = a.length; o < s; ++o) r.push(a[o]);
	for (; n = i.pop();) e.call(t, n, ++c, this);
	return this;
}
function Ue(e, t) {
	let n = -1;
	for (let r of this) if (e.call(t, r, ++n, this)) return r;
}
function We(e) {
	return this.eachAfter(function(t) {
		for (var n = +e(t.data) || 0, r = t.children, i = r && r.length; --i >= 0;) n += r[i].value;
		t.value = n;
	});
}
function Ge(e) {
	return this.eachBefore(function(t) {
		t.children && t.children.sort(e);
	});
}
function Ke(e) {
	for (var t = this, n = qe(t, e), r = [t]; t !== n;) t = t.parent, r.push(t);
	for (var i = r.length; e !== n;) r.splice(i, 0, e), e = e.parent;
	return r;
}
function qe(e, t) {
	if (e === t) return e;
	var n = e.ancestors(), r = t.ancestors(), i = null;
	for (e = n.pop(), t = r.pop(); e === t;) i = e, e = n.pop(), t = r.pop();
	return i;
}
function Je() {
	for (var e = this, t = [e]; e = e.parent;) t.push(e);
	return t;
}
function Ye() {
	return Array.from(this);
}
function Xe() {
	var e = [];
	return this.eachBefore(function(t) {
		t.children || e.push(t);
	}), e;
}
function Ze() {
	var e = this, t = [];
	return e.each(function(n) {
		n !== e && t.push({
			source: n.parent,
			target: n
		});
	}), t;
}
function* Qe() {
	var e = this, t, n = [e], r, i, a;
	do
		for (t = n.reverse(), n = []; e = t.pop();) if (yield e, r = e.children) for (i = 0, a = r.length; i < a; ++i) n.push(r[i]);
	while (n.length);
}
function $e(e, t) {
	e instanceof Map ? (e = [void 0, e], t === void 0 && (t = nt)) : t === void 0 && (t = tt);
	for (var n = new X(e), r, i = [n], a, o, s, c; r = i.pop();) if ((o = t(r.data)) && (c = (o = Array.from(o)).length)) for (r.children = o, s = c - 1; s >= 0; --s) i.push(a = o[s] = new X(o[s])), a.parent = r, a.depth = r.depth + 1;
	return n.eachBefore(it);
}
function et() {
	return $e(this).eachBefore(rt);
}
function tt(e) {
	return e.children;
}
function nt(e) {
	return Array.isArray(e) ? e[1] : null;
}
function rt(e) {
	e.data.value !== void 0 && (e.value = e.data.value), e.data = e.data.data;
}
function it(e) {
	var t = 0;
	do
		e.height = t;
	while ((e = e.parent) && e.height < ++t);
}
function X(e) {
	this.data = e, this.depth = this.height = 0, this.parent = null;
}
X.prototype = $e.prototype = {
	constructor: X,
	count: ze,
	each: Be,
	eachAfter: He,
	eachBefore: Ve,
	find: Ue,
	sum: We,
	sort: Ge,
	path: Ke,
	ancestors: Je,
	descendants: Ye,
	leaves: Xe,
	links: Ze,
	copy: et,
	[Symbol.iterator]: Qe
};
var at = 1664525, ot = 0x3c6ef35f, st = 4294967296;
function ct() {
	let e = 1;
	return () => (e = (at * e + ot) % st) / st;
}
function lt(e) {
	return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function ut(e, t) {
	let n = e.length, r, i;
	for (; n;) i = t() * n-- | 0, r = e[n], e[n] = e[i], e[i] = r;
	return e;
}
function dt(e) {
	return ft(e, ct());
}
function ft(e, t) {
	for (var n = 0, r = (e = ut(Array.from(e), t)).length, i = [], a, o; n < r;) a = e[n], o && mt(o, a) ? ++n : (o = gt(i = pt(i, a)), n = 0);
	return o;
}
function pt(e, t) {
	var n, r;
	if (ht(t, e)) return [t];
	for (n = 0; n < e.length; ++n) if (Z(t, e[n]) && ht(Q(e[n], t), e)) return [e[n], t];
	for (n = 0; n < e.length - 1; ++n) for (r = n + 1; r < e.length; ++r) if (Z(Q(e[n], e[r]), t) && Z(Q(e[n], t), e[r]) && Z(Q(e[r], t), e[n]) && ht(vt(e[n], e[r], t), e)) return [
		e[n],
		e[r],
		t
	];
	throw Error();
}
function Z(e, t) {
	var n = e.r - t.r, r = t.x - e.x, i = t.y - e.y;
	return n < 0 || n * n < r * r + i * i;
}
function mt(e, t) {
	var n = e.r - t.r + Math.max(e.r, t.r, 1) * 1e-9, r = t.x - e.x, i = t.y - e.y;
	return n > 0 && n * n > r * r + i * i;
}
function ht(e, t) {
	for (var n = 0; n < t.length; ++n) if (!mt(e, t[n])) return !1;
	return !0;
}
function gt(e) {
	switch (e.length) {
		case 1: return _t(e[0]);
		case 2: return Q(e[0], e[1]);
		case 3: return vt(e[0], e[1], e[2]);
	}
}
function _t(e) {
	return {
		x: e.x,
		y: e.y,
		r: e.r
	};
}
function Q(e, t) {
	var n = e.x, r = e.y, i = e.r, a = t.x, o = t.y, s = t.r, c = a - n, l = o - r, u = s - i, d = Math.sqrt(c * c + l * l);
	return {
		x: (n + a + c / d * u) / 2,
		y: (r + o + l / d * u) / 2,
		r: (d + i + s) / 2
	};
}
function vt(e, t, n) {
	var r = e.x, i = e.y, a = e.r, o = t.x, s = t.y, c = t.r, l = n.x, u = n.y, d = n.r, f = r - o, p = r - l, m = i - s, h = i - u, g = c - a, _ = d - a, v = r * r + i * i - a * a, y = v - o * o - s * s + c * c, b = v - l * l - u * u + d * d, x = p * m - f * h, S = (m * b - h * y) / (x * 2) - r, C = (h * g - m * _) / x, w = (p * y - f * b) / (x * 2) - i, T = (f * _ - p * g) / x, E = C * C + T * T - 1, D = 2 * (a + S * C + w * T), O = S * S + w * w - a * a, k = -(Math.abs(E) > 1e-6 ? (D + Math.sqrt(D * D - 4 * E * O)) / (2 * E) : O / D);
	return {
		x: r + S + C * k,
		y: i + w + T * k,
		r: k
	};
}
function yt(e, t, n) {
	var r = e.x - t.x, i, a, o = e.y - t.y, s, c, l = r * r + o * o;
	l ? (a = t.r + n.r, a *= a, c = e.r + n.r, c *= c, a > c ? (i = (l + c - a) / (2 * l), s = Math.sqrt(Math.max(0, c / l - i * i)), n.x = e.x - i * r - s * o, n.y = e.y - i * o + s * r) : (i = (l + a - c) / (2 * l), s = Math.sqrt(Math.max(0, a / l - i * i)), n.x = t.x + i * r - s * o, n.y = t.y + i * o + s * r)) : (n.x = t.x + n.r, n.y = t.y);
}
function bt(e, t) {
	var n = e.r + t.r - 1e-6, r = t.x - e.x, i = t.y - e.y;
	return n > 0 && n * n > r * r + i * i;
}
function xt(e) {
	var t = e._, n = e.next._, r = t.r + n.r, i = (t.x * n.r + n.x * t.r) / r, a = (t.y * n.r + n.y * t.r) / r;
	return i * i + a * a;
}
function $(e) {
	this._ = e, this.next = null, this.previous = null;
}
function St(e, t) {
	if (!(a = (e = lt(e)).length)) return 0;
	var n = e[0], r, i, a, o, s, c, l, u, d, f;
	if (n.x = 0, n.y = 0, !(a > 1)) return n.r;
	if (r = e[1], n.x = -r.r, r.x = n.r, r.y = 0, !(a > 2)) return n.r + r.r;
	yt(r, n, i = e[2]), n = new $(n), r = new $(r), i = new $(i), n.next = i.previous = r, r.next = n.previous = i, i.next = r.previous = n;
	e: for (c = 3; c < a; ++c) {
		yt(n._, r._, i = e[c]), i = new $(i), l = r.next, u = n.previous, d = r._.r, f = n._.r;
		do
			if (d <= f) {
				if (bt(l._, i._)) {
					r = l, n.next = r, r.previous = n, --c;
					continue e;
				}
				d += l._.r, l = l.next;
			} else {
				if (bt(u._, i._)) {
					n = u, n.next = r, r.previous = n, --c;
					continue e;
				}
				f += u._.r, u = u.previous;
			}
		while (l !== u.next);
		for (i.previous = n, i.next = r, n.next = r.previous = r = i, o = xt(n); (i = i.next) !== r;) (s = xt(i)) < o && (n = i, o = s);
		r = n.next;
	}
	for (n = [r._], i = r; (i = i.next) !== r;) n.push(i._);
	for (i = ft(n, t), c = 0; c < a; ++c) n = e[c], n.x -= i.x, n.y -= i.y;
	return i.r;
}
function Ct(e) {
	return St(e, ct()), e;
}
function wt(e, t, n, r, i) {
	for (var a = e.children, o, s = -1, c = a.length, l = e.value && (r - t) / e.value; ++s < c;) o = a[s], o.y0 = n, o.y1 = i, o.x0 = t, o.x1 = t += o.value * l;
}
Object.create(X.prototype);
function Tt(e, t, n, r, i) {
	for (var a = e.children, o, s = -1, c = a.length, l = e.value && (i - n) / e.value; ++s < c;) o = a[s], o.x0 = t, o.x1 = r, o.y0 = n, o.y1 = n += o.value * l;
}
var Et = (1 + Math.sqrt(5)) / 2;
function Dt(e, t, n, r, i, a) {
	for (var o = [], s = t.children, c, l, u = 0, d = 0, f = s.length, p, m, h = t.value, g, _, v, y, b, x, S; u < f;) {
		p = i - n, m = a - r;
		do
			g = s[d++].value;
		while (!g && d < f);
		for (_ = v = g, x = Math.max(m / p, p / m) / (h * e), S = g * g * x, b = Math.max(v / S, S / _); d < f; ++d) {
			if (g += l = s[d].value, l < _ && (_ = l), l > v && (v = l), S = g * g * x, y = Math.max(v / S, S / _), y > b) {
				g -= l;
				break;
			}
			b = y;
		}
		o.push(c = {
			value: g,
			dice: p < m,
			children: s.slice(u, d)
		}), c.dice ? wt(c, n, r, i, h ? r += m * g / h : a) : Tt(c, n, r, h ? n += p * g / h : i, a), h -= g, u = d;
	}
	return o;
}
(function e(t) {
	function n(e, n, r, i, a) {
		Dt(t, e, n, r, i, a);
	}
	return n.ratio = function(t) {
		return e((t = +t) > 1 ? t : 1);
	}, n;
})(Et), (function e(t) {
	function n(e, n, r, i, a) {
		if ((o = e._squarify) && o.ratio === t) for (var o, s, c, l, u = -1, d, f = o.length, p = e.value; ++u < f;) {
			for (s = o[u], c = s.children, l = s.value = 0, d = c.length; l < d; ++l) s.value += c[l].value;
			s.dice ? wt(s, n, r, i, p ? r += (a - r) * s.value / p : a) : Tt(s, n, r, p ? n += (i - n) * s.value / p : i, a), p -= s.value;
		}
		else e._squarify = o = Dt(t, e, n, r, i, a), o.ratio = t;
	}
	return n.ratio = function(t) {
		return e((t = +t) > 1 ? t : 1);
	}, n;
})(Et);
// src/useNode.ts
function Ot(e) {
	let t = (t) => t || e.value, n = (t) => Pe(e.value, t.size), r = (t) => Fe(e.value, t.size), i = (e, t) => (e || 0) - (t || 0) / 2, a = (e, t) => (e || 0) - (t || 0) / 2, o = (e, t) => `<circle cx="${e.x}" cy="${e.y}" r="${e.r + 1}" class="node-group" />` + t.map((e) => `<circle cx="${e.x}" cy="${e.y}" r="${e.r}" class="${e.class}" >
              <title>${e.labels?.join(",")}</title>
          </circle>`).join(""), s = (t, n, r, i) => {
		let a = Ct(n.map((t) => ({
			...c(t),
			r: Ne(e.value, t.size)
		}))), s = dt(a);
		return {
			id: t.id,
			key: t.id,
			x: r,
			y: i,
			innerSVG: {
				viewBox: `-${s.r + 2} -${s.r + 2} ${s.r * 2 + 4} ${s.r * 2 + 4}`,
				innerHtml: o(s, a)
			},
			width: s.r * 2,
			height: s.r * 2,
			labels: Le(t.name, t.labels),
			title: t.name,
			class: ["node-group"],
			r: s.r
		};
	}, c = (t, i, a, o) => i && i.length > 0 ? s(t, i, a, o) : {
		id: t.id,
		key: t.id,
		x: a,
		y: o,
		fx: t.position?.x,
		fy: t.position?.y,
		innerSVG: t.innerSVG,
		width: n(t),
		height: r(t),
		labels: Le(t.name, t.labels),
		title: t.name,
		class: t.class ? ["node", ...t.class || []] : ["node"],
		r: Ne(e.value, t.size)
	};
	return {
		getNode: c,
		getSize: t,
		getX: i,
		getY: a
	};
}
// src/useLink.ts
var kt = "arrow-start", At = "arrow-end";
function jt(e, t) {
	let n = (e) => t.value && e.twoWay ? `url(#${kt})` : void 0, r = (e) => t.value ? `url(#${At})` : void 0;
	return {
		getMarkerEnd: r,
		getMarkerStart: n,
		getLink: (t) => ({
			source: t.source,
			target: t.target,
			labels: Le(t.name, t.labels),
			class: t.class ? ["link", t.class] : ["link"],
			"stroke-width": e.value,
			"marker-end": r(t),
			"marker-start": n(t)
		})
	};
}
// src/useNodes.ts
var Mt = (e, t, n) => {
	let { getNode: r } = Ot(e), { getLink: i } = jt(t, n), a = (e, t, n) => e.source === t && e.target === n || e.source === n && e.target === t;
	return { reduce: (e, t) => {
		let n = e.reduce((e, t) => {
			if (t.group === void 0) return e.push(t), e;
			let n = e.find((e) => e.id === `g-${t.group}`);
			return n && n.children ? (n.children.push(t), e) : (e.push({
				id: `g-${t.group}`,
				children: [t]
			}), e);
		}, []).map((e) => r(e, e.children));
		return {
			nodes: n,
			links: t.reduce((t, r) => {
				let i = n.find((e) => e.id === r.source), o = n.find((e) => e.id === r.target);
				if (i && o) return t.push(r), t;
				let s = e.find((e) => e.id === r.source), c = e.find((e) => e.id === r.target);
				if (b(s?.group) && b(c?.group)) {
					if (s?.group === c?.group) return t;
					let e = t.find((e) => a(e, `g-${s.group}`, `g-${c.group}`));
					return e ? !e.twoWay && e.source !== `g-${s.group}` && (e.twoWay = !0) : t.push({
						...r,
						source: `g-${s.group}`,
						target: `g-${c.group}`,
						name: r.name || `g-${s.group}-${c.group}`
					}), t;
				}
				return b(s?.group) && c && !b(c?.group) ? (t.push({
					...r,
					source: `g-${s.group}`,
					name: r.name || `g-${s.group}-${c.id}`
				}), t) : (s && !b(s?.group) && b(c?.group) && t.push({
					...r,
					target: `g-${c.group}`,
					name: r.name || `${s.id}-${c.group}`
				}), t);
			}, []).map((e) => i(e))
		};
	} };
}, Nt = "X", Pt = "Y", Ft = "charge", It = "link", Lt = "collide", Rt = .01, zt = .1, Bt = Math.log(Rt) / Math.log(.9);
function Vt(e, n, r, i) {
	let { reduce: a } = Mt(i.nodeSize, i.linkWidth, i.directed), o = h([]), s = p([]), c = t(() => o.value.map((e) => {
		if (Y(e.target) && Y(e.source)) {
			let t = Ie(e.target.x, e.target.y, e.target.r, e.source.x, e.source.y), n = Ie(e.source.x, e.source.y, e.source.r, e.target.x, e.target.y);
			e.xS = n.x, e.yS = n.y, e.xT = t.x, e.yT = t.y;
		}
		return e;
	})), l = () => {
		let t = a(e.value, n.value);
		s.value = t.nodes, o.value = t.links, u();
	}, u = async () => {
		f.value.stop(), f.value = d(), i.static.value ? f.value.tick(Bt) : f.value.restart();
	}, d = () => {
		let e = Oe().alphaMin(Rt).alphaDecay(zt).nodes(s.value);
		return e.force(Nt, Ae(r.value.width / 2).strength(i.forceXStrength.value)), e.force(Pt, je(r.value.height / 2).strength(i.forceYStrength.value)), e.force(Ft, ke().strength(i.forcManyBodyStrength.value)), e.force(Lt, ge(i.forceCollideStrength.value)), e.force(It, ye(o.value).id((e) => {
			if (!("id" in e)) throw Error("Node id is undefined");
			return e.id;
		})), e;
	}, f = p(Oe());
	return S([
		() => e.value.length,
		() => n.value.length,
		r,
		i.nodeSize,
		i.linkWidth,
		i.forcManyBodyStrength,
		i.forceXStrength,
		i.forceYStrength,
		i.forceCollideStrength,
		i.directed
	], async () => l(), {
		debounce: 100,
		maxWait: 1e3
	}), S(i.static, async () => u(), {
		deep: !0,
		debounce: 100,
		maxWait: 1e3
	}), {
		simulation: f,
		nodes: s,
		links: c
	};
}
var Ht = 25, Ut = 12, Wt = 1, Gt = 45, Kt = (e) => ({ options: {
	static: _(() => e.value?.layout?.static || !1),
	forceXStrength: _(() => e.value?.simulation?.force.x || .1),
	forceYStrength: _(() => e.value?.simulation?.force.y || .1),
	forcManyBodyStrength: _(() => e.value?.simulation?.force.charge || -300),
	forceCollideStrength: _(() => e.value?.simulation?.force.collide || Gt),
	nodeSize: _(() => e.value?.nodes?.size || Ht),
	nodeFontSize: _(() => e.value?.nodes?.font?.size || Ut),
	linkWidth: _(() => e.value?.links?.width || Wt),
	linkFontSize: _(() => e.value?.links?.font?.size || 12),
	draggable: _(() => e.value?.layout?.draggable || !1),
	directed: _(() => e.value?.layout?.directed || !1),
	themeClass: _(() => e.value?.layout?.theme ? `theme-${e.value?.layout?.theme}` : "theme-teal"),
	dark: _(() => e.value?.layout?.dark || !1)
} }), qt = (e, n) => ({ label: t(() => ({
	font: { size: e.value },
	offset: {
		x: n.value / 2 + e.value / 2,
		y: e.value / 2
	}
})) }), Jt = (e) => ({
	label: t(() => ({ font: { size: e.value } })),
	getX: (e) => Y(e.source) && Y(e.target) && e.source.x && e.target.x ? e.target.x > e.source.x ? e.source.x + (e.target.x - e.source.x) / 2 : e.target.x + (e.source.x - e.target.x) / 2 : void 0,
	getY: (e) => Y(e.source) && Y(e.target) && e.source.y && e.target.y ? e.target.y > e.source.y ? e.source.y + (e.target.y - e.source.y) / 2 : e.target.y + (e.source.y - e.target.y) / 2 : void 0
}), Yt = (e) => {
	let n = p({
		Sx: 1,
		Qx: 0,
		Qy: 0,
		Sy: 1,
		Tx: 0,
		Ty: 0
	}), r = t(() => `matrix(${n.value.Sx},${n.value.Qx},${n.value.Qy},${n.value.Sy},${n.value.Tx},${n.value.Ty})`), i = {
		x: 0,
		y: 0
	}, a = (e) => e >= .5 && e <= 4, o = () => i.x !== 0 && i.y !== 0, s = (e, t, n, r) => ({
		x: e - r,
		y: t - n
	});
	return {
		transform: r,
		zoom: (t, r, i) => {
			let o = n.value.Sx + i;
			if (!a(o)) return;
			let c = s(t, r, e.value.top, e.value.left);
			n.value.Tx = o / n.value.Sx * (n.value.Tx - c.x) + c.x, n.value.Ty = o / n.value.Sx * (n.value.Ty - c.y) + c.y, n.value.Sx = o, n.value.Sy = o;
		},
		panMove: (e, t) => {
			if (!o()) return;
			let r = e - i.x, a = t - i.y;
			n.value.Tx += r, n.value.Ty += a, i.x = e, i.y = t;
		},
		panStart: (e, t) => {
			i.x = e, i.y = t;
		},
		panEnd: () => {
			i.x = 0, i.y = 0;
		}
	};
}, Xt = ["viewBox"], Zt = { key: 0 }, Qt = ["transform"], $t = { class: "links" }, en = [
	"id",
	"d",
	"stroke-width",
	"marker-end",
	"marker-start",
	"onClick",
	"onTouchstartPassive"
], tn = ["font-size", "y"], nn = ["dy", "x"], rn = { class: "nodes" }, an = [
	"viewBox",
	"width",
	"height",
	"x",
	"y",
	"title",
	"onClick",
	"onTouchendPassive",
	"onMousedown",
	"onTouchstartPassive",
	"innerHTML"
], on = [
	"cx",
	"cy",
	"r",
	"title",
	"onClick",
	"onTouchendPassive",
	"onMousedown",
	"onTouchstartPassive"
], sn = ["y", "font-size"], cn = ["dy", "x"], ln = /* @__PURE__ */ a({
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
	setup(a, { emit: f }) {
		let h = a, S = f, { options: w } = Kt(_(() => h.options)), T = p(null), D = p(null), O = p({
			width: 100,
			height: 100,
			top: 0,
			left: 0
		}), { transform: k, zoom: ee, panMove: A, panStart: j, panEnd: te } = Yt(O), M = t(() => ["svg-container", `${w.themeClass.value}${w.dark.value ? "--dark" : ""}`]), N = (e) => {
			(e.width !== O.value.width || e.height !== O.value.height) && (O.value = {
				top: e.top,
				left: e.left,
				width: e.width,
				height: e.height
			});
		};
		x(T, (e) => {
			let t = e[0].target.getBoundingClientRect();
			N(t);
		});
		let ne = (e) => b(e.xS) && b(e.yS) && b(e.xT) && b(e.yT) ? `M${e.xS} ${e.yS} L${e.xT} ${e.yT}` : void 0, { simulation: P, nodes: re, links: ie } = Vt(_(() => h.nodes), _(() => h.links), O, w), { dragStart: ae, dragEnd: F, dragMove: I } = C(P, w.draggable), { label: L } = qt(w.nodeFontSize, w.nodeSize), { label: oe, getX: R, getY: z } = Jt(w.linkFontSize), { markers: B } = E(w.linkWidth, w.nodeSize, w.directed), V = (e, t, n) => {
			S("node-click", e, h.nodes[n]);
		}, H = (e, t, n) => {
			S("link-click", e, h.links[n]);
		}, U = async (e) => {
			if (!e.ctrlKey || !D.value) return;
			let t = e.deltaY || e.deltaX, n = Math.abs(t) < 50 ? .05 : .25, r = t < 0 ? n : -n;
			ee(e.clientX, e.clientY, r);
		}, W = (e) => {
			I(e), A(e.clientX, e.clientY);
		}, se = (e) => {
			j(e.clientX, e.clientY);
		}, G = (e, t) => ae(e, t), K = () => {
			F(), te();
		}, ce = () => F();
		return u(() => {
			if (T.value) {
				let e = T.value.getBoundingClientRect();
				N(e);
			}
		}), (t, a) => (d(), r("svg", {
			ref_key: "svg",
			ref: T,
			xmlns: "http://www.w3.org/2000/svg",
			"xmlns:xlink": "http://www.w3.org/1999/xlink",
			preserveAspectRatio: "xMinYMin",
			viewBox: `0 0 ${O.value.width} ${O.value.height}`,
			class: s(M.value),
			onMousedown: y(se, ["self", "prevent"]),
			onMouseup: K,
			onTouchendPassive: ce,
			onTouchstartPassive: async () => {},
			onMousemove: W,
			onWheel: y(U, ["prevent"])
		}, [v(w).directed ? (d(), r("defs", Zt, [i("marker", c(o(v(B).arrowEnd)), [...a[0] ||= [i("path", {
			class: "link",
			d: "M 0 5 L 0 -5 L 10 0 L 0 5"
		}, null, -1)]], 16), i("marker", c(o(v(B).arrowStart)), [...a[1] ||= [i("path", {
			class: "link",
			d: "M 10 5 L 0 0 L 10 -5 L 10 5"
		}, null, -1)]], 16)])) : n("", !0), i("g", {
			ref_key: "canvas",
			ref: D,
			class: "svg-canvas",
			transform: v(k)
		}, [i("g", $t, [(d(!0), r(e, null, m(v(ie), (t, n) => (d(), r(e, { key: n }, [i("path", {
			id: `${n}`,
			d: ne(t),
			"stroke-width": t["stroke-width"],
			class: s(t.class),
			style: l(t.style),
			"marker-end": t["marker-end"],
			"marker-start": t["marker-start"],
			onClick: (e) => H(e, t, n),
			onTouchstartPassive: (e) => H(e, t, n)
		}, null, 46, en), i("text", {
			class: "link-label",
			"font-size": v(oe).font.size,
			y: v(z)(t)
		}, [(d(!0), r(e, null, m(t.labels, (e, n) => (d(), r("tspan", {
			key: n,
			dy: n > 0 ? "1.1em" : "0",
			x: v(R)(t)
		}, g(e), 9, nn))), 128))], 8, tn)], 64))), 128))]), i("g", rn, [(d(!0), r(e, null, m(v(re), (t, n) => (d(), r(e, { key: n }, [t.innerSVG ? (d(), r("svg", {
			key: 0,
			viewBox: t.innerSVG.viewBox,
			width: t.width,
			height: t.height,
			x: (t.x || 0) - (t.width || 0) / 2,
			y: (t.y || 0) - (t.height || 0) / 2,
			title: t.title,
			class: s(t.class),
			onClick: (e) => V(e, t, n),
			onTouchendPassive: (e) => V(e, t, n),
			onMousedown: y((e) => G(e, n), ["prevent"]),
			onTouchstartPassive: y((e) => G(e, n), ["prevent"]),
			innerHTML: t.innerSVG.innerHtml
		}, null, 42, an)) : (d(), r("circle", {
			key: 1,
			cx: t.x,
			cy: t.y,
			r: t.r,
			title: t.title,
			class: s(t.class),
			onClick: (e) => V(e, t, n),
			onTouchendPassive: (e) => V(e, t, n),
			onMousedown: y((e) => G(e, n), ["prevent"]),
			onTouchstartPassive: y((e) => G(e, n), ["prevent"])
		}, null, 42, on)), i("text", {
			class: "node-label",
			y: (t.y || 0) + v(L).offset.y,
			"font-size": v(L).font.size
		}, [(d(!0), r(e, null, m(t.labels, (e, n) => (d(), r("tspan", {
			key: n,
			dy: n > 0 ? "1.1em" : "0",
			x: (t.x || 0) + (t.width || 0)
		}, g(e), 9, cn))), 128))], 8, sn)], 64))), 128))])], 8, Qt)], 42, Xt));
	}
}), un = { install(e) {
	e.component("D3NetworkGraph", ln);
} };
export { ln as D3NetworkGraph, un as default };
