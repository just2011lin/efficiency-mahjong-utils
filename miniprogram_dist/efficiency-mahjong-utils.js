function St(e, t) {
  const r = e.length, n = e.replace(new RegExp(t, "g"), "");
  if (r - n.length > 1)
    return [t.repeat(2), n.padStart(r - 2, t)];
}
function At(e, t) {
  const r = e.length, n = e.replace(new RegExp(t, "g"), "");
  if (r - n.length >= 3)
    return [t.repeat(3), n.padStart(r - 3, t)];
}
function Ot(e, t, r) {
  if (r === "z" || t === "8" || t === "9")
    return;
  const n = String(Number(t) + 1), a = String(Number(t) + 2);
  if (e.includes(n) && e.includes(a)) {
    const s = e.replace(t, "").replace(n, "").replace(a, "");
    return [t + n + a, s];
  }
}
function jt(e, t, r) {
  if (t === "1" || t === "8" || t === "9" || r === "z")
    return;
  const n = String(Number(t) + 1);
  if (e.includes(n))
    return [t + n, e.replace(t, "").replace(n, "")];
}
function Ct(e, t, r) {
  if (t !== "8" && t !== "1" || r === "z")
    return;
  const n = String(Number(t) + 1);
  if (e.includes(n))
    return [t + n, e.replace(t, "").replace(n, "")];
}
function It(e, t, r) {
  if (t === "8" || t === "9" || r === "z")
    return;
  const n = String(Number(t) + 2);
  if (e.includes(n))
    return [t + n, e.replace(t, "").replace(n, "")];
}
function fh(e, t) {
  let r = 0;
  for (const n of t)
    e === n && r++;
  return r;
}
function X(e, t) {
  return e.length === t && new Set(e.split("")).size === 1;
}
function y(e) {
  return e.split("").map(Number).sort((t, r) => t - r);
}
function v(e) {
  const t = e.slice(-1);
  return [e.slice(0, -1), t];
}
function wt(e) {
  const t = [];
  let r = [];
  for (const n of e)
    Number.isNaN(Number(n)) ? (t.push(...r.map((a) => a + n)), r = []) : r.push(n);
  return t;
}
function Z(e) {
  const t = ["s", "m", "p", "z"], r = {
    s: "",
    m: "",
    p: "",
    z: ""
  };
  let n = "";
  for (const a of e)
    t.includes(a) ? (r[a] += n, n = "") : n += a;
  return r;
}
function Q(e) {
  return Object.entries(e).map(([t, r]) => r ? r + t : "").join("");
}
function lh(e) {
  const t = Z(e);
  for (const r in t) {
    const n = t[r];
    t[r] = y(n).join("");
  }
  return Q(t);
}
function hh(e, t, r) {
  const n = Z(e);
  let [a, s] = v(t);
  return n[s] = n[s].replace(a, ""), [a, s] = v(r), n[s] = n[s] + a, n[s] = y(n[s]).join(""), Q(n);
}
function Pt(e) {
  return (t, r) => {
    const n = [], a = /* @__PURE__ */ new Set();
    for (const s of t) {
      if (a.has(s))
        continue;
      a.add(s);
      const i = e(t, s, r);
      i && n.push(i);
    }
    return n;
  };
}
function ee(e) {
  return (t) => {
    const r = [], n = Z(t);
    return e.forEach((a) => {
      const s = Pt(a);
      Object.entries(n).map(([i, o]) => {
        s(o, i).forEach(([u, g]) => {
          r.push([
            u + i,
            Q({ ...n, [i]: g })
          ]);
        });
      });
    }), r;
  };
}
const xt = ee([
  At,
  Ot
]), Et = ee([St]), Mt = ee([
  jt,
  It,
  Ct
]);
var E = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function te(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Nt = typeof E == "object" && E && E.Object === Object && E, qe = Nt, Ft = qe, Dt = typeof self == "object" && self && self.Object === Object && self, Lt = Ft || Dt || Function("return this")(), p = Lt, Rt = p, Bt = Rt.Symbol, re = Bt, ye = re, We = Object.prototype, Gt = We.hasOwnProperty, Ut = We.toString, w = ye ? ye.toStringTag : void 0;
function zt(e) {
  var t = Gt.call(e, w), r = e[w];
  try {
    e[w] = void 0;
    var n = !0;
  } catch {
  }
  var a = Ut.call(e);
  return n && (t ? e[w] = r : delete e[w]), a;
}
var Kt = zt, Ht = Object.prototype, kt = Ht.toString;
function Vt(e) {
  return kt.call(e);
}
var qt = Vt, $e = re, Wt = Kt, Yt = qt, Jt = "[object Null]", Xt = "[object Undefined]", _e = $e ? $e.toStringTag : void 0;
function Zt(e) {
  return e == null ? e === void 0 ? Xt : Jt : _e && _e in Object(e) ? Wt(e) : Yt(e);
}
var P = Zt;
function Qt(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var T = Qt, er = P, tr = T, rr = "[object AsyncFunction]", nr = "[object Function]", ar = "[object GeneratorFunction]", sr = "[object Proxy]";
function ir(e) {
  if (!tr(e))
    return !1;
  var t = er(e);
  return t == nr || t == ar || t == rr || t == sr;
}
var Ye = ir, or = p, cr = or["__core-js_shared__"], ur = cr, H = ur, Te = function() {
  var e = /[^.]+$/.exec(H && H.keys && H.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function fr(e) {
  return !!Te && Te in e;
}
var lr = fr, hr = Function.prototype, gr = hr.toString;
function vr(e) {
  if (e != null) {
    try {
      return gr.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Je = vr, pr = Ye, dr = lr, br = T, yr = Je, $r = /[\\^$.*+?()[\]{}|]/g, _r = /^\[object .+?Constructor\]$/, Tr = Function.prototype, mr = Object.prototype, Sr = Tr.toString, Ar = mr.hasOwnProperty, Or = RegExp(
  "^" + Sr.call(Ar).replace($r, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function jr(e) {
  if (!br(e) || dr(e))
    return !1;
  var t = pr(e) ? Or : _r;
  return t.test(yr(e));
}
var Cr = jr;
function Ir(e, t) {
  return e == null ? void 0 : e[t];
}
var wr = Ir, Pr = Cr, xr = wr;
function Er(e, t) {
  var r = xr(e, t);
  return Pr(r) ? r : void 0;
}
var m = Er, Mr = m, Nr = Mr(Object, "create"), R = Nr, me = R;
function Fr() {
  this.__data__ = me ? me(null) : {}, this.size = 0;
}
var Dr = Fr;
function Lr(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Rr = Lr, Br = R, Gr = "__lodash_hash_undefined__", Ur = Object.prototype, zr = Ur.hasOwnProperty;
function Kr(e) {
  var t = this.__data__;
  if (Br) {
    var r = t[e];
    return r === Gr ? void 0 : r;
  }
  return zr.call(t, e) ? t[e] : void 0;
}
var Hr = Kr, kr = R, Vr = Object.prototype, qr = Vr.hasOwnProperty;
function Wr(e) {
  var t = this.__data__;
  return kr ? t[e] !== void 0 : qr.call(t, e);
}
var Yr = Wr, Jr = R, Xr = "__lodash_hash_undefined__";
function Zr(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = Jr && t === void 0 ? Xr : t, this;
}
var Qr = Zr, en = Dr, tn = Rr, rn = Hr, nn = Yr, an = Qr;
function S(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
S.prototype.clear = en;
S.prototype.delete = tn;
S.prototype.get = rn;
S.prototype.has = nn;
S.prototype.set = an;
var sn = S;
function on() {
  this.__data__ = [], this.size = 0;
}
var cn = on;
function un(e, t) {
  return e === t || e !== e && t !== t;
}
var ne = un, fn = ne;
function ln(e, t) {
  for (var r = e.length; r--; )
    if (fn(e[r][0], t))
      return r;
  return -1;
}
var B = ln, hn = B, gn = Array.prototype, vn = gn.splice;
function pn(e) {
  var t = this.__data__, r = hn(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : vn.call(t, r, 1), --this.size, !0;
}
var dn = pn, bn = B;
function yn(e) {
  var t = this.__data__, r = bn(t, e);
  return r < 0 ? void 0 : t[r][1];
}
var $n = yn, _n = B;
function Tn(e) {
  return _n(this.__data__, e) > -1;
}
var mn = Tn, Sn = B;
function An(e, t) {
  var r = this.__data__, n = Sn(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
}
var On = An, jn = cn, Cn = dn, In = $n, wn = mn, Pn = On;
function A(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
A.prototype.clear = jn;
A.prototype.delete = Cn;
A.prototype.get = In;
A.prototype.has = wn;
A.prototype.set = Pn;
var G = A, xn = m, En = p, Mn = xn(En, "Map"), ae = Mn, Se = sn, Nn = G, Fn = ae;
function Dn() {
  this.size = 0, this.__data__ = {
    hash: new Se(),
    map: new (Fn || Nn)(),
    string: new Se()
  };
}
var Ln = Dn;
function Rn(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
var Bn = Rn, Gn = Bn;
function Un(e, t) {
  var r = e.__data__;
  return Gn(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
var U = Un, zn = U;
function Kn(e) {
  var t = zn(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
var Hn = Kn, kn = U;
function Vn(e) {
  return kn(this, e).get(e);
}
var qn = Vn, Wn = U;
function Yn(e) {
  return Wn(this, e).has(e);
}
var Jn = Yn, Xn = U;
function Zn(e, t) {
  var r = Xn(this, e), n = r.size;
  return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
}
var Qn = Zn, ea = Ln, ta = Hn, ra = qn, na = Jn, aa = Qn;
function O(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
O.prototype.clear = ea;
O.prototype.delete = ta;
O.prototype.get = ra;
O.prototype.has = na;
O.prototype.set = aa;
var Xe = O, sa = "__lodash_hash_undefined__";
function ia(e) {
  return this.__data__.set(e, sa), this;
}
var oa = ia;
function ca(e) {
  return this.__data__.has(e);
}
var ua = ca, fa = Xe, la = oa, ha = ua;
function N(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.__data__ = new fa(); ++t < r; )
    this.add(e[t]);
}
N.prototype.add = N.prototype.push = la;
N.prototype.has = ha;
var ga = N;
function va(e, t, r, n) {
  for (var a = e.length, s = r + (n ? 1 : -1); n ? s-- : ++s < a; )
    if (t(e[s], s, e))
      return s;
  return -1;
}
var pa = va;
function da(e) {
  return e !== e;
}
var ba = da;
function ya(e, t, r) {
  for (var n = r - 1, a = e.length; ++n < a; )
    if (e[n] === t)
      return n;
  return -1;
}
var $a = ya, _a = pa, Ta = ba, ma = $a;
function Sa(e, t, r) {
  return t === t ? ma(e, t, r) : _a(e, Ta, r);
}
var Aa = Sa, Oa = Aa;
function ja(e, t) {
  var r = e == null ? 0 : e.length;
  return !!r && Oa(e, t, 0) > -1;
}
var Ca = ja;
function Ia(e, t, r) {
  for (var n = -1, a = e == null ? 0 : e.length; ++n < a; )
    if (r(t, e[n]))
      return !0;
  return !1;
}
var wa = Ia;
function Pa(e, t) {
  return e.has(t);
}
var xa = Pa, Ea = m, Ma = p, Na = Ea(Ma, "Set"), Ze = Na;
function Fa() {
}
var Da = Fa;
function La(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n) {
    r[++t] = n;
  }), r;
}
var Qe = La, k = Ze, Ra = Da, Ba = Qe, Ga = 1 / 0, Ua = k && 1 / Ba(new k([, -0]))[1] == Ga ? function(e) {
  return new k(e);
} : Ra, za = Ua, Ka = ga, Ha = Ca, ka = wa, Va = xa, qa = za, Wa = Qe, Ya = 200;
function Ja(e, t, r) {
  var n = -1, a = Ha, s = e.length, i = !0, o = [], c = o;
  if (r)
    i = !1, a = ka;
  else if (s >= Ya) {
    var u = t ? null : qa(e);
    if (u)
      return Wa(u);
    i = !1, a = Va, c = new Ka();
  } else
    c = t ? [] : o;
  e:
    for (; ++n < s; ) {
      var g = e[n], h = t ? t(g) : g;
      if (g = r || g !== 0 ? g : 0, i && h === h) {
        for (var d = c.length; d--; )
          if (c[d] === h)
            continue e;
        t && c.push(h), o.push(g);
      } else
        a(c, h, r) || (c !== o && c.push(h), o.push(g));
    }
  return o;
}
var Xa = Ja, Za = Xa;
function Qa(e, t) {
  return t = typeof t == "function" ? t : void 0, e && e.length ? Za(e, void 0, t) : [];
}
var es = Qa;
const ts = /* @__PURE__ */ te(es);
var rs = G;
function ns() {
  this.__data__ = new rs(), this.size = 0;
}
var as = ns;
function ss(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
var is = ss;
function os(e) {
  return this.__data__.get(e);
}
var cs = os;
function us(e) {
  return this.__data__.has(e);
}
var fs = us, ls = G, hs = ae, gs = Xe, vs = 200;
function ps(e, t) {
  var r = this.__data__;
  if (r instanceof ls) {
    var n = r.__data__;
    if (!hs || n.length < vs - 1)
      return n.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new gs(n);
  }
  return r.set(e, t), this.size = r.size, this;
}
var ds = ps, bs = G, ys = as, $s = is, _s = cs, Ts = fs, ms = ds;
function j(e) {
  var t = this.__data__ = new bs(e);
  this.size = t.size;
}
j.prototype.clear = ys;
j.prototype.delete = $s;
j.prototype.get = _s;
j.prototype.has = Ts;
j.prototype.set = ms;
var Ss = j;
function As(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1; )
    ;
  return e;
}
var Os = As, js = m, Cs = function() {
  try {
    var e = js(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), Is = Cs, Ae = Is;
function ws(e, t, r) {
  t == "__proto__" && Ae ? Ae(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
var et = ws, Ps = et, xs = ne, Es = Object.prototype, Ms = Es.hasOwnProperty;
function Ns(e, t, r) {
  var n = e[t];
  (!(Ms.call(e, t) && xs(n, r)) || r === void 0 && !(t in e)) && Ps(e, t, r);
}
var tt = Ns, Fs = tt, Ds = et;
function Ls(e, t, r, n) {
  var a = !r;
  r || (r = {});
  for (var s = -1, i = t.length; ++s < i; ) {
    var o = t[s], c = n ? n(r[o], e[o], o, r, e) : void 0;
    c === void 0 && (c = e[o]), a ? Ds(r, o, c) : Fs(r, o, c);
  }
  return r;
}
var z = Ls;
function Rs(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
var Bs = Rs;
function Gs(e) {
  return e != null && typeof e == "object";
}
var C = Gs, Us = P, zs = C, Ks = "[object Arguments]";
function Hs(e) {
  return zs(e) && Us(e) == Ks;
}
var ks = Hs, Oe = ks, Vs = C, rt = Object.prototype, qs = rt.hasOwnProperty, Ws = rt.propertyIsEnumerable, Ys = Oe(function() {
  return arguments;
}()) ? Oe : function(e) {
  return Vs(e) && qs.call(e, "callee") && !Ws.call(e, "callee");
}, Js = Ys, Xs = Array.isArray, se = Xs, F = { exports: {} };
function Zs() {
  return !1;
}
var Qs = Zs;
F.exports;
(function(e, t) {
  var r = p, n = Qs, a = t && !t.nodeType && t, s = a && !0 && e && !e.nodeType && e, i = s && s.exports === a, o = i ? r.Buffer : void 0, c = o ? o.isBuffer : void 0, u = c || n;
  e.exports = u;
})(F, F.exports);
var nt = F.exports, ei = 9007199254740991, ti = /^(?:0|[1-9]\d*)$/;
function ri(e, t) {
  var r = typeof e;
  return t = t ?? ei, !!t && (r == "number" || r != "symbol" && ti.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var at = ri, ni = 9007199254740991;
function ai(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= ni;
}
var st = ai, si = P, ii = st, oi = C, ci = "[object Arguments]", ui = "[object Array]", fi = "[object Boolean]", li = "[object Date]", hi = "[object Error]", gi = "[object Function]", vi = "[object Map]", pi = "[object Number]", di = "[object Object]", bi = "[object RegExp]", yi = "[object Set]", $i = "[object String]", _i = "[object WeakMap]", Ti = "[object ArrayBuffer]", mi = "[object DataView]", Si = "[object Float32Array]", Ai = "[object Float64Array]", Oi = "[object Int8Array]", ji = "[object Int16Array]", Ci = "[object Int32Array]", Ii = "[object Uint8Array]", wi = "[object Uint8ClampedArray]", Pi = "[object Uint16Array]", xi = "[object Uint32Array]", l = {};
l[Si] = l[Ai] = l[Oi] = l[ji] = l[Ci] = l[Ii] = l[wi] = l[Pi] = l[xi] = !0;
l[ci] = l[ui] = l[Ti] = l[fi] = l[mi] = l[li] = l[hi] = l[gi] = l[vi] = l[pi] = l[di] = l[bi] = l[yi] = l[$i] = l[_i] = !1;
function Ei(e) {
  return oi(e) && ii(e.length) && !!l[si(e)];
}
var Mi = Ei;
function Ni(e) {
  return function(t) {
    return e(t);
  };
}
var ie = Ni, D = { exports: {} };
D.exports;
(function(e, t) {
  var r = qe, n = t && !t.nodeType && t, a = n && !0 && e && !e.nodeType && e, s = a && a.exports === n, i = s && r.process, o = function() {
    try {
      var c = a && a.require && a.require("util").types;
      return c || i && i.binding && i.binding("util");
    } catch {
    }
  }();
  e.exports = o;
})(D, D.exports);
var oe = D.exports, Fi = Mi, Di = ie, je = oe, Ce = je && je.isTypedArray, Li = Ce ? Di(Ce) : Fi, Ri = Li, Bi = Bs, Gi = Js, Ui = se, zi = nt, Ki = at, Hi = Ri, ki = Object.prototype, Vi = ki.hasOwnProperty;
function qi(e, t) {
  var r = Ui(e), n = !r && Gi(e), a = !r && !n && zi(e), s = !r && !n && !a && Hi(e), i = r || n || a || s, o = i ? Bi(e.length, String) : [], c = o.length;
  for (var u in e)
    (t || Vi.call(e, u)) && !(i && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    a && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    s && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    Ki(u, c))) && o.push(u);
  return o;
}
var it = qi, Wi = Object.prototype;
function Yi(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || Wi;
  return e === r;
}
var ce = Yi;
function Ji(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var ot = Ji, Xi = ot, Zi = Xi(Object.keys, Object), Qi = Zi, eo = ce, to = Qi, ro = Object.prototype, no = ro.hasOwnProperty;
function ao(e) {
  if (!eo(e))
    return to(e);
  var t = [];
  for (var r in Object(e))
    no.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
var so = ao, io = Ye, oo = st;
function co(e) {
  return e != null && oo(e.length) && !io(e);
}
var ue = co, uo = it, fo = so, lo = ue;
function ho(e) {
  return lo(e) ? uo(e) : fo(e);
}
var fe = ho, go = z, vo = fe;
function po(e, t) {
  return e && go(t, vo(t), e);
}
var bo = po;
function yo(e) {
  var t = [];
  if (e != null)
    for (var r in Object(e))
      t.push(r);
  return t;
}
var $o = yo, _o = T, To = ce, mo = $o, So = Object.prototype, Ao = So.hasOwnProperty;
function Oo(e) {
  if (!_o(e))
    return mo(e);
  var t = To(e), r = [];
  for (var n in e)
    n == "constructor" && (t || !Ao.call(e, n)) || r.push(n);
  return r;
}
var jo = Oo, Co = it, Io = jo, wo = ue;
function Po(e) {
  return wo(e) ? Co(e, !0) : Io(e);
}
var le = Po, xo = z, Eo = le;
function Mo(e, t) {
  return e && xo(t, Eo(t), e);
}
var No = Mo, L = { exports: {} };
L.exports;
(function(e, t) {
  var r = p, n = t && !t.nodeType && t, a = n && !0 && e && !e.nodeType && e, s = a && a.exports === n, i = s ? r.Buffer : void 0, o = i ? i.allocUnsafe : void 0;
  function c(u, g) {
    if (g)
      return u.slice();
    var h = u.length, d = o ? o(h) : new u.constructor(h);
    return u.copy(d), d;
  }
  e.exports = c;
})(L, L.exports);
var Fo = L.exports;
function Do(e, t) {
  var r = -1, n = e.length;
  for (t || (t = Array(n)); ++r < n; )
    t[r] = e[r];
  return t;
}
var Lo = Do;
function Ro(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, a = 0, s = []; ++r < n; ) {
    var i = e[r];
    t(i, r, e) && (s[a++] = i);
  }
  return s;
}
var Bo = Ro;
function Go() {
  return [];
}
var ct = Go, Uo = Bo, zo = ct, Ko = Object.prototype, Ho = Ko.propertyIsEnumerable, Ie = Object.getOwnPropertySymbols, ko = Ie ? function(e) {
  return e == null ? [] : (e = Object(e), Uo(Ie(e), function(t) {
    return Ho.call(e, t);
  }));
} : zo, he = ko, Vo = z, qo = he;
function Wo(e, t) {
  return Vo(e, qo(e), t);
}
var Yo = Wo;
function Jo(e, t) {
  for (var r = -1, n = t.length, a = e.length; ++r < n; )
    e[a + r] = t[r];
  return e;
}
var ut = Jo, Xo = ot, Zo = Xo(Object.getPrototypeOf, Object), ft = Zo, Qo = ut, ec = ft, tc = he, rc = ct, nc = Object.getOwnPropertySymbols, ac = nc ? function(e) {
  for (var t = []; e; )
    Qo(t, tc(e)), e = ec(e);
  return t;
} : rc, lt = ac, sc = z, ic = lt;
function oc(e, t) {
  return sc(e, ic(e), t);
}
var cc = oc, uc = ut, fc = se;
function lc(e, t, r) {
  var n = t(e);
  return fc(e) ? n : uc(n, r(e));
}
var ht = lc, hc = ht, gc = he, vc = fe;
function pc(e) {
  return hc(e, vc, gc);
}
var dc = pc, bc = ht, yc = lt, $c = le;
function _c(e) {
  return bc(e, $c, yc);
}
var Tc = _c, mc = m, Sc = p, Ac = mc(Sc, "DataView"), Oc = Ac, jc = m, Cc = p, Ic = jc(Cc, "Promise"), wc = Ic, Pc = m, xc = p, Ec = Pc(xc, "WeakMap"), Mc = Ec, V = Oc, q = ae, W = wc, Y = Ze, J = Mc, gt = P, I = Je, we = "[object Map]", Nc = "[object Object]", Pe = "[object Promise]", xe = "[object Set]", Ee = "[object WeakMap]", Me = "[object DataView]", Fc = I(V), Dc = I(q), Lc = I(W), Rc = I(Y), Bc = I(J), _ = gt;
(V && _(new V(new ArrayBuffer(1))) != Me || q && _(new q()) != we || W && _(W.resolve()) != Pe || Y && _(new Y()) != xe || J && _(new J()) != Ee) && (_ = function(e) {
  var t = gt(e), r = t == Nc ? e.constructor : void 0, n = r ? I(r) : "";
  if (n)
    switch (n) {
      case Fc:
        return Me;
      case Dc:
        return we;
      case Lc:
        return Pe;
      case Rc:
        return xe;
      case Bc:
        return Ee;
    }
  return t;
});
var ge = _, Gc = Object.prototype, Uc = Gc.hasOwnProperty;
function zc(e) {
  var t = e.length, r = new e.constructor(t);
  return t && typeof e[0] == "string" && Uc.call(e, "index") && (r.index = e.index, r.input = e.input), r;
}
var Kc = zc, Hc = p, kc = Hc.Uint8Array, Vc = kc, Ne = Vc;
function qc(e) {
  var t = new e.constructor(e.byteLength);
  return new Ne(t).set(new Ne(e)), t;
}
var ve = qc, Wc = ve;
function Yc(e, t) {
  var r = t ? Wc(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.byteLength);
}
var Jc = Yc, Xc = /\w*$/;
function Zc(e) {
  var t = new e.constructor(e.source, Xc.exec(e));
  return t.lastIndex = e.lastIndex, t;
}
var Qc = Zc, Fe = re, De = Fe ? Fe.prototype : void 0, Le = De ? De.valueOf : void 0;
function eu(e) {
  return Le ? Object(Le.call(e)) : {};
}
var tu = eu, ru = ve;
function nu(e, t) {
  var r = t ? ru(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.length);
}
var au = nu, su = ve, iu = Jc, ou = Qc, cu = tu, uu = au, fu = "[object Boolean]", lu = "[object Date]", hu = "[object Map]", gu = "[object Number]", vu = "[object RegExp]", pu = "[object Set]", du = "[object String]", bu = "[object Symbol]", yu = "[object ArrayBuffer]", $u = "[object DataView]", _u = "[object Float32Array]", Tu = "[object Float64Array]", mu = "[object Int8Array]", Su = "[object Int16Array]", Au = "[object Int32Array]", Ou = "[object Uint8Array]", ju = "[object Uint8ClampedArray]", Cu = "[object Uint16Array]", Iu = "[object Uint32Array]";
function wu(e, t, r) {
  var n = e.constructor;
  switch (t) {
    case yu:
      return su(e);
    case fu:
    case lu:
      return new n(+e);
    case $u:
      return iu(e, r);
    case _u:
    case Tu:
    case mu:
    case Su:
    case Au:
    case Ou:
    case ju:
    case Cu:
    case Iu:
      return uu(e, r);
    case hu:
      return new n();
    case gu:
    case du:
      return new n(e);
    case vu:
      return ou(e);
    case pu:
      return new n();
    case bu:
      return cu(e);
  }
}
var Pu = wu, xu = T, Re = Object.create, Eu = function() {
  function e() {
  }
  return function(t) {
    if (!xu(t))
      return {};
    if (Re)
      return Re(t);
    e.prototype = t;
    var r = new e();
    return e.prototype = void 0, r;
  };
}(), Mu = Eu, Nu = Mu, Fu = ft, Du = ce;
function Lu(e) {
  return typeof e.constructor == "function" && !Du(e) ? Nu(Fu(e)) : {};
}
var Ru = Lu, Bu = ge, Gu = C, Uu = "[object Map]";
function zu(e) {
  return Gu(e) && Bu(e) == Uu;
}
var Ku = zu, Hu = Ku, ku = ie, Be = oe, Ge = Be && Be.isMap, Vu = Ge ? ku(Ge) : Hu, qu = Vu, Wu = ge, Yu = C, Ju = "[object Set]";
function Xu(e) {
  return Yu(e) && Wu(e) == Ju;
}
var Zu = Xu, Qu = Zu, ef = ie, Ue = oe, ze = Ue && Ue.isSet, tf = ze ? ef(ze) : Qu, rf = tf, nf = Ss, af = Os, sf = tt, of = bo, cf = No, uf = Fo, ff = Lo, lf = Yo, hf = cc, gf = dc, vf = Tc, pf = ge, df = Kc, bf = Pu, yf = Ru, $f = se, _f = nt, Tf = qu, mf = T, Sf = rf, Af = fe, Of = le, jf = 1, Cf = 2, If = 4, vt = "[object Arguments]", wf = "[object Array]", Pf = "[object Boolean]", xf = "[object Date]", Ef = "[object Error]", pt = "[object Function]", Mf = "[object GeneratorFunction]", Nf = "[object Map]", Ff = "[object Number]", dt = "[object Object]", Df = "[object RegExp]", Lf = "[object Set]", Rf = "[object String]", Bf = "[object Symbol]", Gf = "[object WeakMap]", Uf = "[object ArrayBuffer]", zf = "[object DataView]", Kf = "[object Float32Array]", Hf = "[object Float64Array]", kf = "[object Int8Array]", Vf = "[object Int16Array]", qf = "[object Int32Array]", Wf = "[object Uint8Array]", Yf = "[object Uint8ClampedArray]", Jf = "[object Uint16Array]", Xf = "[object Uint32Array]", f = {};
f[vt] = f[wf] = f[Uf] = f[zf] = f[Pf] = f[xf] = f[Kf] = f[Hf] = f[kf] = f[Vf] = f[qf] = f[Nf] = f[Ff] = f[dt] = f[Df] = f[Lf] = f[Rf] = f[Bf] = f[Wf] = f[Yf] = f[Jf] = f[Xf] = !0;
f[Ef] = f[pt] = f[Gf] = !1;
function M(e, t, r, n, a, s) {
  var i, o = t & jf, c = t & Cf, u = t & If;
  if (r && (i = a ? r(e, n, a, s) : r(e)), i !== void 0)
    return i;
  if (!mf(e))
    return e;
  var g = $f(e);
  if (g) {
    if (i = df(e), !o)
      return ff(e, i);
  } else {
    var h = pf(e), d = h == pt || h == Mf;
    if (_f(e))
      return uf(e, o);
    if (h == dt || h == vt || d && !a) {
      if (i = c || d ? {} : yf(e), !o)
        return c ? hf(e, cf(i, e)) : lf(e, of(i, e));
    } else {
      if (!f[h])
        return a ? e : {};
      i = bf(e, h, o);
    }
  }
  s || (s = new nf());
  var de = s.get(e);
  if (de)
    return de;
  s.set(e, i), Sf(e) ? e.forEach(function(b) {
    i.add(M(b, t, r, b, e, s));
  }) : Tf(e) && e.forEach(function(b, $) {
    i.set($, M(b, t, r, $, e, s));
  });
  var mt = u ? c ? vf : gf : c ? Of : Af, be = g ? void 0 : mt(e);
  return af(be || e, function(b, $) {
    be && ($ = b, b = e[$]), sf(i, $, M(b, t, r, $, e, s));
  }), i;
}
var Zf = M, Qf = Zf, el = 1, tl = 4;
function rl(e) {
  return Qf(e, el | tl);
}
var nl = rl;
const al = /* @__PURE__ */ te(nl);
function bt(e, t, r) {
  const n = r(e.left), a = [];
  return n.forEach(([s, i]) => {
    const o = al(e);
    o.left = i;
    const c = o[t];
    Array.isArray(c) && c.push(s), bt(o, t, r), a.push(o);
  }), e.children = a, e;
}
function yt(e, t = []) {
  if (e.children.length === 0)
    t.push(e);
  else
    for (const r of e.children)
      yt(r, t);
  return t;
}
function sl(e, t) {
  if (e.left !== t.left)
    return !1;
  const r = e.faces, n = t.faces;
  return !(r.length !== n.length || (/* @__PURE__ */ new Set([...r, ...n])).size !== r.length);
}
function K(e) {
  let t = [new pl(e)];
  const r = [
    ["faces", xt],
    ["doubles", Et],
    ["partners", Mt]
  ];
  for (const [a, s] of r) {
    const i = [];
    t.forEach((o) => {
      const c = bt(o, a, s), u = yt(c);
      i.push(...u);
    }), t = i;
  }
  const n = ts(t, sl);
  return n.forEach((a) => {
    a.singles = wt(a.left), a.left = "";
  }), n;
}
const il = ["m", "p", "s", "z"], ol = ["m", "p", "s"], cl = "z";
function pe(e) {
  return il.includes(e);
}
function x(e) {
  return ol.includes(e);
}
function gh(e) {
  return cl === e;
}
function vh(e) {
  return ul(e) || fl(e);
}
function ul(e) {
  const [t, r] = v(e);
  if (!x(r) || t.length !== 3)
    return !1;
  const [n, a, s] = y(t);
  return n + 1 === a && a + 1 === s;
}
function fl(e) {
  const [t, r] = v(e);
  return pe(r) && X(t, 3);
}
function ph(e) {
  const [t, r] = v(e);
  return pe(r) && X(t, 2);
}
function dh(e) {
  const [t, r] = v(e);
  return pe(r) && X(t, 4);
}
function $t(e) {
  const [t, r] = v(e);
  if (t.length !== 2 || !x(r))
    return !1;
  const [n, a] = y(t);
  return n + 1 === a && n !== 1 && n !== 8;
}
function _t(e) {
  const [t, r] = v(e);
  if (t.length !== 2 || !x(r))
    return !1;
  const [n, a] = y(t);
  return n + 2 === a;
}
function Tt(e) {
  const [t, r] = v(e);
  return t.length !== 2 || !x(r) ? !1 : ["12", "21", "89", "98"].includes(t);
}
function bh(e) {
  const [t, r] = v(e);
  if (t.length !== 2 || !x(r))
    return !1;
  const [n, a] = y(t);
  return n + 1 === a || n + 2 === a;
}
function yh(e) {
  return K(e).some((t) => t.isReady());
}
function $h(e) {
  return K(e).some((t) => t.isSucess());
}
function ll(e) {
  if (!$t(e))
    return [];
  const [t, r] = v(e), [n, a] = y(t);
  return [n - 1 + r, a + 1 + r];
}
function hl(e) {
  if (!_t(e))
    return [];
  const [t, r] = v(e), [n] = y(t);
  return [n + 1 + r];
}
function gl(e) {
  if (!Tt(e))
    return [];
  const [t, r] = v(e);
  return t === "12" || t === "21" ? ["3" + r] : t === "89" || t === "98" ? ["7" + r] : [];
}
function vl(e) {
  return Tt(e) ? gl(e) : _t(e) ? hl(e) : $t(e) ? ll(e) : [];
}
function _h(e) {
  const t = /* @__PURE__ */ new Set();
  return K(e).forEach((n) => {
    n.getMatchesOfSuccess().forEach((a) => t.add(a));
  }), Array.from(t);
}
function Th(e) {
  const t = K(e);
  let r = 8;
  return t.forEach((n) => {
    const a = n.getMatchNumOfReady();
    a < r && (r = a);
  }), r;
}
class pl {
  constructor(t) {
    this.full = "", this.size = 0, this.left = "", this.faces = [], this.doubles = [], this.partners = [], this.singles = [], this.children = [], t && (this.full = t, this.left = t, this.size = t.replace(/\D/g, "").length);
  }
  /**
   * 是否听牌了
   * */
  isReady() {
    const {
      left: t,
      faces: r,
      partners: n,
      singles: a,
      doubles: s
    } = this;
    if (t !== "")
      return;
    const i = a.length, o = s.length, c = r.length, u = n.length;
    return i === 0 && o === 1 && u === 1 || c > 0 && o === 0 && u === 0 && i === 1 || o === 2 && u === 0 && i === 0;
  }
  /**
   * 是否胡了(暂时只考虑一般型)
   * */
  isSucess() {
    const {
      left: t,
      faces: r,
      partners: n,
      singles: a,
      doubles: s
    } = this;
    return t === "" && n.length === 0 && a.length === 0 && s.length === 1 && r.length > 0;
  }
  /**
   * 在完全分解之后，获取这副牌所有可胡的牌
   * @returns 可以胡的牌数组
   */
  getMatchesOfSuccess() {
    const t = [];
    if (this.isReady()) {
      const { singles: r, doubles: n, partners: a } = this;
      if (r[0])
        t.push(r[0]);
      else if (n.length === 2) {
        const [s, i] = n;
        t.push(s.slice(1)), t.push(i.slice(1));
      } else
        a[0] && t.push(...vl(a[0]));
    }
    return t;
  }
  /**
   * 在完全分解之后，计算这副牌的向听数(暂只考虑一般型)
   * 计算公式：基数-2*面子数-对子数-搭子数
   * @returns 这副牌进入听牌最少需要的进张数
   */
  getMatchNumOfReady() {
    const { faces: t, doubles: r, partners: n } = this, a = Math.floor(this.size / 3), s = t.length + n.length - a;
    return a * 2 - t.length * 2 - r.length - n.length + (s > 0 ? s : 0);
  }
}
var dl = Math.floor, bl = Math.random;
function yl(e, t) {
  return e + dl(bl() * (t - e + 1));
}
var $l = yl, _l = ne, Tl = ue, ml = at, Sl = T;
function Al(e, t, r) {
  if (!Sl(r))
    return !1;
  var n = typeof t;
  return (n == "number" ? Tl(r) && ml(t, r.length) : n == "string" && t in r) ? _l(r[t], e) : !1;
}
var Ol = Al, jl = /\s/;
function Cl(e) {
  for (var t = e.length; t-- && jl.test(e.charAt(t)); )
    ;
  return t;
}
var Il = Cl, wl = Il, Pl = /^\s+/;
function xl(e) {
  return e && e.slice(0, wl(e) + 1).replace(Pl, "");
}
var El = xl, Ml = P, Nl = C, Fl = "[object Symbol]";
function Dl(e) {
  return typeof e == "symbol" || Nl(e) && Ml(e) == Fl;
}
var Ll = Dl, Rl = El, Ke = T, Bl = Ll, He = 0 / 0, Gl = /^[-+]0x[0-9a-f]+$/i, Ul = /^0b[01]+$/i, zl = /^0o[0-7]+$/i, Kl = parseInt;
function Hl(e) {
  if (typeof e == "number")
    return e;
  if (Bl(e))
    return He;
  if (Ke(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = Ke(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = Rl(e);
  var r = Ul.test(e);
  return r || zl.test(e) ? Kl(e.slice(2), r ? 2 : 8) : Gl.test(e) ? He : +e;
}
var kl = Hl, Vl = kl, ke = 1 / 0, ql = 17976931348623157e292;
function Wl(e) {
  if (!e)
    return e === 0 ? e : 0;
  if (e = Vl(e), e === ke || e === -ke) {
    var t = e < 0 ? -1 : 1;
    return t * ql;
  }
  return e === e ? e : 0;
}
var Yl = Wl, Jl = $l, Xl = Ol, Ve = Yl, Zl = parseFloat, Ql = Math.min, eh = Math.random;
function th(e, t, r) {
  if (r && typeof r != "boolean" && Xl(e, t, r) && (t = r = void 0), r === void 0 && (typeof t == "boolean" ? (r = t, t = void 0) : typeof e == "boolean" && (r = e, e = void 0)), e === void 0 && t === void 0 ? (e = 0, t = 1) : (e = Ve(e), t === void 0 ? (t = e, e = 0) : t = Ve(t)), e > t) {
    var n = e;
    e = t, t = n;
  }
  if (r || e % 1 || t % 1) {
    var a = eh();
    return Ql(e + a * (t - e + Zl("1e-" + ((a + "").length - 1))), t);
  }
  return Jl(e, t);
}
var rh = th;
const nh = /* @__PURE__ */ te(rh);
function ah(e) {
  const t = e.split("").map((n) => n.charCodeAt(0));
  let r = 0;
  return t.forEach((n) => {
    r += n % 10;
  }), r = r % 10 + 1, t.map((n) => n * r).join("");
}
function sh(e, t) {
  let r = ah(e);
  const n = [];
  for (let a = 0; a < t; a++) {
    const s = r.slice(0, 3), i = Number(s) % (t - a);
    n.push(i), r = r.slice(3) + i * t;
  }
  return n;
}
function ih() {
  const e = ["m", "p", "s"], t = [];
  for (const r of e)
    for (let n = 1; n < 10; n++)
      t.push(n + r, n + r, n + r, n + r);
  for (let r = 1; r < 8; r++)
    t.push(r + "z", r + "z", r + "z", r + "z");
  return t;
}
function oh(e) {
  const t = sh(e, 136), r = ih();
  return t.map((a) => r.splice(a, 1)[0]);
}
function ch() {
  const e = "0".charCodeAt(0), t = "z".charCodeAt(0);
  let r = "";
  for (; !/\d/.test(r) && !/[A-Za-z]/.test(r); )
    r = String.fromCharCode(nh(e, t));
  return r;
}
function uh(e) {
  let t = "";
  for (let r = 0; r < e; r++)
    t += ch();
  return t;
}
function mh() {
  const e = uh(10);
  return { key: e, mahJongs: oh(e) };
}
export {
  ol as NUM_TYPES,
  pl as PairNode,
  il as TYPES,
  cl as WORD_TYPE,
  lh as autoSortingTiles,
  mh as createRandomMahjongs,
  K as getAnalyseResult,
  fh as getCharNumOfString,
  Th as getMatchNumOfReady,
  ll as getMatchesOfBoth,
  gl as getMatchesOfEdge,
  vl as getMatchesOfPartner,
  _h as getMatchesOfSuccess,
  hl as getMatchesOfThreshold,
  oh as getOneMatchMahjongs,
  y as getSrotedNumArray,
  Z as groupByType,
  $t as isBoth,
  ph as isDouble,
  Tt as isEdge,
  vh as isFace,
  dh as isFourfold,
  x as isNumType,
  bh as isPartner,
  yh as isReady,
  ul as isSequence,
  X as isSizeDigits,
  $h as isSuceess,
  _t as isThreshold,
  fl as isTriplet,
  pe as isType,
  gh as isWordType,
  Q as mergeWithType,
  jt as partitionBothPartner,
  St as partitionDouble,
  Ct as partitionEdgePartner,
  Ot as partitionSequence,
  It as partitionThresholdPartner,
  At as partitionTriplet,
  hh as replaceTile,
  Et as splitOutDoubleOfPair,
  xt as splitOutFaceOfPair,
  Mt as splitOutPartnerOfPair,
  wt as splitSingles,
  v as splitTiles
};
