! function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    "use strict";
    var n = [],
        r = e.document,
        i = Object.getPrototypeOf,
        o = n.slice,
        a = n.concat,
        s = n.push,
        u = n.indexOf,
        l = {},
        c = l.toString,
        f = l.hasOwnProperty,
        p = f.toString,
        d = p.call(Object),
        h = {},
        g = function(e) {
            return "function" == typeof e && "number" != typeof e.nodeType
        },
        v = function(e) {
            return null != e && e === e.window
        },
        y = {
            type: !0,
            src: !0,
            noModule: !0
        };

    function m(e, t, n) {
        var i, o = (t = t || r).createElement("script");
        if (o.text = e, n)
            for (i in y) n[i] && (o[i] = n[i]);
        t.head.appendChild(o).parentNode.removeChild(o)
    }

    function x(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? l[c.call(e)] || "object" : typeof e
    }
    var b = function(e, t) {
            return new b.fn.init(e, t)
        },
        w = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

    function T(e) {
        var t = !!e && "length" in e && e.length,
            n = x(e);
        return !g(e) && !v(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }
    b.fn = b.prototype = {
        jquery: "3.3.1",
        constructor: b,
        length: 0,
        toArray: function() {
            return o.call(this)
        },
        get: function(e) {
            return null == e ? o.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = b.merge(this.constructor(), e);
            return t.prevObject = this, t
        },
        each: function(e) {
            return b.each(this, e)
        },
        map: function(e) {
            return this.pushStack(b.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(o.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: s,
        sort: n.sort,
        splice: n.splice
    }, b.extend = b.fn.extend = function() {
        var e, t, n, r, i, o, a = arguments[0] || {},
            s = 1,
            u = arguments.length,
            l = !1;
        for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || g(a) || (a = {}), s === u && (a = this, s--); s < u; s++)
            if (null != (e = arguments[s]))
                for (t in e) n = a[t], a !== (r = e[t]) && (l && r && (b.isPlainObject(r) || (i = Array.isArray(r))) ? (i ? (i = !1, o = n && Array.isArray(n) ? n : []) : o = n && b.isPlainObject(n) ? n : {}, a[t] = b.extend(l, o, r)) : void 0 !== r && (a[t] = r));
        return a
    }, b.extend({
        expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== c.call(e) || (t = i(e)) && ("function" != typeof(n = f.call(t, "constructor") && t.constructor) || p.call(n) !== d))
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        globalEval: function(e) {
            m(e)
        },
        each: function(e, t) {
            var n, r = 0;
            if (T(e))
                for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
            else
                for (r in e)
                    if (!1 === t.call(e[r], r, e[r])) break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(w, "")
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (T(Object(e)) ? b.merge(n, "string" == typeof e ? [e] : e) : s.call(n, e)), n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : u.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
            return e.length = i, e
        },
        grep: function(e, t, n) {
            for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]);
            return r
        },
        map: function(e, t, n) {
            var r, i, o = 0,
                s = [];
            if (T(e))
                for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && s.push(i);
            else
                for (o in e) null != (i = t(e[o], o, n)) && s.push(i);
            return a.apply([], s)
        },
        guid: 1,
        support: h
    }), "function" == typeof Symbol && (b.fn[Symbol.iterator] = n[Symbol.iterator]), b.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        l["[object " + t + "]"] = t.toLowerCase()
    });
    var C = function(e) {
        var t, n, r, i, o, a, s, u, l, c, f, p, d, h, g, v, y, m, x, b = "sizzle" + 1 * new Date,
            w = e.document,
            T = 0,
            C = 0,
            E = ae(),
            k = ae(),
            S = ae(),
            D = function(e, t) {
                return e === t && (f = !0), 0
            },
            N = {}.hasOwnProperty,
            A = [],
            j = A.pop,
            q = A.push,
            L = A.push,
            H = A.slice,
            O = function(e, t) {
                for (var n = 0, r = e.length; n < r; n++)
                    if (e[n] === t) return n;
                return -1
            },
            P = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            M = "[\\x20\\t\\r\\n\\f]",
            R = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            I = "\\[" + M + "*(" + R + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + R + "))|)" + M + "*\\]",
            W = ":(" + R + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + I + ")*)|.*)\\)|)",
            $ = new RegExp(M + "+", "g"),
            B = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
            F = new RegExp("^" + M + "*," + M + "*"),
            _ = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
            z = new RegExp("=" + M + "*([^\\]'\"]*?)" + M + "*\\]", "g"),
            X = new RegExp(W),
            U = new RegExp("^" + R + "$"),
            V = {
                ID: new RegExp("^#(" + R + ")"),
                CLASS: new RegExp("^\\.(" + R + ")"),
                TAG: new RegExp("^(" + R + "|[*])"),
                ATTR: new RegExp("^" + I),
                PSEUDO: new RegExp("^" + W),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + P + ")$", "i"),
                needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
            },
            G = /^(?:input|select|textarea|button)$/i,
            Y = /^h\d$/i,
            Q = /^[^{]+\{\s*\[native \w/,
            J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            K = /[+~]/,
            Z = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"),
            ee = function(e, t, n) {
                var r = "0x" + t - 65536;
                return r != r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
            },
            te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ne = function(e, t) {
                return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            },
            re = function() {
                p()
            },
            ie = me(function(e) {
                return !0 === e.disabled && ("form" in e || "label" in e)
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            L.apply(A = H.call(w.childNodes), w.childNodes), A[w.childNodes.length].nodeType
        } catch (e) {
            L = {
                apply: A.length ? function(e, t) {
                    q.apply(e, H.call(t))
                } : function(e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++];);
                    e.length = n - 1
                }
            }
        }

        function oe(e, t, r, i) {
            var o, s, l, c, f, h, y, m = t && t.ownerDocument,
                T = t ? t.nodeType : 9;
            if (r = r || [], "string" != typeof e || !e || 1 !== T && 9 !== T && 11 !== T) return r;
            if (!i && ((t ? t.ownerDocument || t : w) !== d && p(t), t = t || d, g)) {
                if (11 !== T && (f = J.exec(e)))
                    if (o = f[1]) {
                        if (9 === T) {
                            if (!(l = t.getElementById(o))) return r;
                            if (l.id === o) return r.push(l), r
                        } else if (m && (l = m.getElementById(o)) && x(t, l) && l.id === o) return r.push(l), r
                    } else {
                        if (f[2]) return L.apply(r, t.getElementsByTagName(e)), r;
                        if ((o = f[3]) && n.getElementsByClassName && t.getElementsByClassName) return L.apply(r, t.getElementsByClassName(o)), r
                    } if (n.qsa && !S[e + " "] && (!v || !v.test(e))) {
                    if (1 !== T) m = t, y = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((c = t.getAttribute("id")) ? c = c.replace(te, ne) : t.setAttribute("id", c = b), s = (h = a(e)).length; s--;) h[s] = "#" + c + " " + ye(h[s]);
                        y = h.join(","), m = K.test(e) && ge(t.parentNode) || t
                    }
                    if (y) try {
                        return L.apply(r, m.querySelectorAll(y)), r
                    } catch (e) {} finally {
                        c === b && t.removeAttribute("id")
                    }
                }
            }
            return u(e.replace(B, "$1"), t, r, i)
        }

        function ae() {
            var e = [];
            return function t(n, i) {
                return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = i
            }
        }

        function se(e) {
            return e[b] = !0, e
        }

        function ue(e) {
            var t = d.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function le(e, t) {
            for (var n = e.split("|"), i = n.length; i--;) r.attrHandle[n[i]] = t
        }

        function ce(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function fe(e) {
            return function(t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }

        function pe(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function de(e) {
            return function(t) {
                return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ie(t) === e : t.disabled === e : "label" in t && t.disabled === e
            }
        }

        function he(e) {
            return se(function(t) {
                return t = +t, se(function(n, r) {
                    for (var i, o = e([], n.length, t), a = o.length; a--;) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }

        function ge(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }
        for (t in n = oe.support = {}, o = oe.isXML = function(e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return !!t && "HTML" !== t.nodeName
            }, p = oe.setDocument = function(e) {
                var t, i, a = e ? e.ownerDocument || e : w;
                return a !== d && 9 === a.nodeType && a.documentElement ? (h = (d = a).documentElement, g = !o(d), w !== d && (i = d.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", re, !1) : i.attachEvent && i.attachEvent("onunload", re)), n.attributes = ue(function(e) {
                    return e.className = "i", !e.getAttribute("className")
                }), n.getElementsByTagName = ue(function(e) {
                    return e.appendChild(d.createComment("")), !e.getElementsByTagName("*").length
                }), n.getElementsByClassName = Q.test(d.getElementsByClassName), n.getById = ue(function(e) {
                    return h.appendChild(e).id = b, !d.getElementsByName || !d.getElementsByName(b).length
                }), n.getById ? (r.filter.ID = function(e) {
                    var t = e.replace(Z, ee);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }, r.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && g) {
                        var n = t.getElementById(e);
                        return n ? [n] : []
                    }
                }) : (r.filter.ID = function(e) {
                    var t = e.replace(Z, ee);
                    return function(e) {
                        var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                        return n && n.value === t
                    }
                }, r.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && g) {
                        var n, r, i, o = t.getElementById(e);
                        if (o) {
                            if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                            for (i = t.getElementsByName(e), r = 0; o = i[r++];)
                                if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                        }
                        return []
                    }
                }), r.find.TAG = n.getElementsByTagName ? function(e, t) {
                    return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
                } : function(e, t) {
                    var n, r = [],
                        i = 0,
                        o = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                        return r
                    }
                    return o
                }, r.find.CLASS = n.getElementsByClassName && function(e, t) {
                    if (void 0 !== t.getElementsByClassName && g) return t.getElementsByClassName(e)
                }, y = [], v = [], (n.qsa = Q.test(d.querySelectorAll)) && (ue(function(e) {
                    h.appendChild(e).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || v.push("\\[" + M + "*(?:value|" + P + ")"), e.querySelectorAll("[id~=" + b + "-]").length || v.push("~="), e.querySelectorAll(":checked").length || v.push(":checked"), e.querySelectorAll("a#" + b + "+*").length || v.push(".#.+[+~]")
                }), ue(function(e) {
                    e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = d.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && v.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"), h.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:")
                })), (n.matchesSelector = Q.test(m = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ue(function(e) {
                    n.disconnectedMatch = m.call(e, "*"), m.call(e, "[s!='']:x"), y.push("!=", W)
                }), v = v.length && new RegExp(v.join("|")), y = y.length && new RegExp(y.join("|")), t = Q.test(h.compareDocumentPosition), x = t || Q.test(h.contains) ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        r = t && t.parentNode;
                    return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                } : function(e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1
                }, D = t ? function(e, t) {
                    if (e === t) return f = !0, 0;
                    var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return r || (1 & (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e === d || e.ownerDocument === w && x(w, e) ? -1 : t === d || t.ownerDocument === w && x(w, t) ? 1 : c ? O(c, e) - O(c, t) : 0 : 4 & r ? -1 : 1)
                } : function(e, t) {
                    if (e === t) return f = !0, 0;
                    var n, r = 0,
                        i = e.parentNode,
                        o = t.parentNode,
                        a = [e],
                        s = [t];
                    if (!i || !o) return e === d ? -1 : t === d ? 1 : i ? -1 : o ? 1 : c ? O(c, e) - O(c, t) : 0;
                    if (i === o) return ce(e, t);
                    for (n = e; n = n.parentNode;) a.unshift(n);
                    for (n = t; n = n.parentNode;) s.unshift(n);
                    for (; a[r] === s[r];) r++;
                    return r ? ce(a[r], s[r]) : a[r] === w ? -1 : s[r] === w ? 1 : 0
                }, d) : d
            }, oe.matches = function(e, t) {
                return oe(e, null, null, t)
            }, oe.matchesSelector = function(e, t) {
                if ((e.ownerDocument || e) !== d && p(e), t = t.replace(z, "='$1']"), n.matchesSelector && g && !S[t + " "] && (!y || !y.test(t)) && (!v || !v.test(t))) try {
                    var r = m.call(e, t);
                    if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
                } catch (e) {}
                return oe(t, d, null, [e]).length > 0
            }, oe.contains = function(e, t) {
                return (e.ownerDocument || e) !== d && p(e), x(e, t)
            }, oe.attr = function(e, t) {
                (e.ownerDocument || e) !== d && p(e);
                var i = r.attrHandle[t.toLowerCase()],
                    o = i && N.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !g) : void 0;
                return void 0 !== o ? o : n.attributes || !g ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null
            }, oe.escape = function(e) {
                return (e + "").replace(te, ne)
            }, oe.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, oe.uniqueSort = function(e) {
                var t, r = [],
                    i = 0,
                    o = 0;
                if (f = !n.detectDuplicates, c = !n.sortStable && e.slice(0), e.sort(D), f) {
                    for (; t = e[o++];) t === e[o] && (i = r.push(o));
                    for (; i--;) e.splice(r[i], 1)
                }
                return c = null, e
            }, i = oe.getText = function(e) {
                var t, n = "",
                    r = 0,
                    o = e.nodeType;
                if (o) {
                    if (1 === o || 9 === o || 11 === o) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += i(e)
                    } else if (3 === o || 4 === o) return e.nodeValue
                } else
                    for (; t = e[r++];) n += i(t);
                return n
            }, (r = oe.selectors = {
                cacheLength: 50,
                createPseudo: se,
                match: V,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(Z, ee), e[3] = (e[3] || e[4] || e[5] || "").replace(Z, ee), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || oe.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && oe.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[6] && e[2];
                        return V.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(Z, ee).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = E[e + " "];
                        return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && E(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(e, t, n) {
                        return function(r) {
                            var i = oe.attr(r, e);
                            return null == i ? "!=" === t : !t || (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i.replace($, " ") + " ").indexOf(n) > -1 : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"))
                        }
                    },
                    CHILD: function(e, t, n, r, i) {
                        var o = "nth" !== e.slice(0, 3),
                            a = "last" !== e.slice(-4),
                            s = "of-type" === t;
                        return 1 === r && 0 === i ? function(e) {
                            return !!e.parentNode
                        } : function(t, n, u) {
                            var l, c, f, p, d, h, g = o !== a ? "nextSibling" : "previousSibling",
                                v = t.parentNode,
                                y = s && t.nodeName.toLowerCase(),
                                m = !u && !s,
                                x = !1;
                            if (v) {
                                if (o) {
                                    for (; g;) {
                                        for (p = t; p = p[g];)
                                            if (s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) return !1;
                                        h = g = "only" === e && !h && "nextSibling"
                                    }
                                    return !0
                                }
                                if (h = [a ? v.firstChild : v.lastChild], a && m) {
                                    for (x = (d = (l = (c = (f = (p = v)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]) && l[2], p = d && v.childNodes[d]; p = ++d && p && p[g] || (x = d = 0) || h.pop();)
                                        if (1 === p.nodeType && ++x && p === t) {
                                            c[e] = [T, d, x];
                                            break
                                        }
                                } else if (m && (x = d = (l = (c = (f = (p = t)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]), !1 === x)
                                    for (;
                                        (p = ++d && p && p[g] || (x = d = 0) || h.pop()) && ((s ? p.nodeName.toLowerCase() !== y : 1 !== p.nodeType) || !++x || (m && ((c = (f = p[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] = [T, x]), p !== t)););
                                return (x -= i) === r || x % r == 0 && x / r >= 0
                            }
                        }
                    },
                    PSEUDO: function(e, t) {
                        var n, i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e);
                        return i[b] ? i(t) : i.length > 1 ? (n = [e, e, "", t], r.setFilters.hasOwnProperty(e.toLowerCase()) ? se(function(e, n) {
                            for (var r, o = i(e, t), a = o.length; a--;) e[r = O(e, o[a])] = !(n[r] = o[a])
                        }) : function(e) {
                            return i(e, 0, n)
                        }) : i
                    }
                },
                pseudos: {
                    not: se(function(e) {
                        var t = [],
                            n = [],
                            r = s(e.replace(B, "$1"));
                        return r[b] ? se(function(e, t, n, i) {
                            for (var o, a = r(e, null, i, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
                        }) : function(e, i, o) {
                            return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop()
                        }
                    }),
                    has: se(function(e) {
                        return function(t) {
                            return oe(e, t).length > 0
                        }
                    }),
                    contains: se(function(e) {
                        return e = e.replace(Z, ee),
                            function(t) {
                                return (t.textContent || t.innerText || i(t)).indexOf(e) > -1
                            }
                    }),
                    lang: se(function(e) {
                        return U.test(e || "") || oe.error("unsupported lang: " + e), e = e.replace(Z, ee).toLowerCase(),
                            function(t) {
                                var n;
                                do {
                                    if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                                } while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                    }),
                    target: function(t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id
                    },
                    root: function(e) {
                        return e === h
                    },
                    focus: function(e) {
                        return e === d.activeElement && (!d.hasFocus || d.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: de(!1),
                    disabled: de(!0),
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !r.pseudos.empty(e)
                    },
                    header: function(e) {
                        return Y.test(e.nodeName)
                    },
                    input: function(e) {
                        return G.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: he(function() {
                        return [0]
                    }),
                    last: he(function(e, t) {
                        return [t - 1]
                    }),
                    eq: he(function(e, t, n) {
                        return [n < 0 ? n + t : n]
                    }),
                    even: he(function(e, t) {
                        for (var n = 0; n < t; n += 2) e.push(n);
                        return e
                    }),
                    odd: he(function(e, t) {
                        for (var n = 1; n < t; n += 2) e.push(n);
                        return e
                    }),
                    lt: he(function(e, t, n) {
                        for (var r = n < 0 ? n + t : n; --r >= 0;) e.push(r);
                        return e
                    }),
                    gt: he(function(e, t, n) {
                        for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                        return e
                    })
                }
            }).pseudos.nth = r.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) r.pseudos[t] = fe(t);
        for (t in {
                submit: !0,
                reset: !0
            }) r.pseudos[t] = pe(t);

        function ve() {}

        function ye(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r
        }

        function me(e, t, n) {
            var r = t.dir,
                i = t.next,
                o = i || r,
                a = n && "parentNode" === o,
                s = C++;
            return t.first ? function(t, n, i) {
                for (; t = t[r];)
                    if (1 === t.nodeType || a) return e(t, n, i);
                return !1
            } : function(t, n, u) {
                var l, c, f, p = [T, s];
                if (u) {
                    for (; t = t[r];)
                        if ((1 === t.nodeType || a) && e(t, n, u)) return !0
                } else
                    for (; t = t[r];)
                        if (1 === t.nodeType || a)
                            if (c = (f = t[b] || (t[b] = {}))[t.uniqueID] || (f[t.uniqueID] = {}), i && i === t.nodeName.toLowerCase()) t = t[r] || t;
                            else {
                                if ((l = c[o]) && l[0] === T && l[1] === s) return p[2] = l[2];
                                if (c[o] = p, p[2] = e(t, n, u)) return !0
                            } return !1
            }
        }

        function xe(e) {
            return e.length > 1 ? function(t, n, r) {
                for (var i = e.length; i--;)
                    if (!e[i](t, n, r)) return !1;
                return !0
            } : e[0]
        }

        function be(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
            return a
        }

        function we(e, t, n, r, i, o) {
            return r && !r[b] && (r = we(r)), i && !i[b] && (i = we(i, o)), se(function(o, a, s, u) {
                var l, c, f, p = [],
                    d = [],
                    h = a.length,
                    g = o || function(e, t, n) {
                        for (var r = 0, i = t.length; r < i; r++) oe(e, t[r], n);
                        return n
                    }(t || "*", s.nodeType ? [s] : s, []),
                    v = !e || !o && t ? g : be(g, p, e, s, u),
                    y = n ? i || (o ? e : h || r) ? [] : a : v;
                if (n && n(v, y, s, u), r)
                    for (l = be(y, d), r(l, [], s, u), c = l.length; c--;)(f = l[c]) && (y[d[c]] = !(v[d[c]] = f));
                if (o) {
                    if (i || e) {
                        if (i) {
                            for (l = [], c = y.length; c--;)(f = y[c]) && l.push(v[c] = f);
                            i(null, y = [], l, u)
                        }
                        for (c = y.length; c--;)(f = y[c]) && (l = i ? O(o, f) : p[c]) > -1 && (o[l] = !(a[l] = f))
                    }
                } else y = be(y === a ? y.splice(h, y.length) : y), i ? i(null, a, y, u) : L.apply(a, y)
            })
        }

        function Te(e) {
            for (var t, n, i, o = e.length, a = r.relative[e[0].type], s = a || r.relative[" "], u = a ? 1 : 0, c = me(function(e) {
                    return e === t
                }, s, !0), f = me(function(e) {
                    return O(t, e) > -1
                }, s, !0), p = [function(e, n, r) {
                    var i = !a && (r || n !== l) || ((t = n).nodeType ? c(e, n, r) : f(e, n, r));
                    return t = null, i
                }]; u < o; u++)
                if (n = r.relative[e[u].type]) p = [me(xe(p), n)];
                else {
                    if ((n = r.filter[e[u].type].apply(null, e[u].matches))[b]) {
                        for (i = ++u; i < o && !r.relative[e[i].type]; i++);
                        return we(u > 1 && xe(p), u > 1 && ye(e.slice(0, u - 1).concat({
                            value: " " === e[u - 2].type ? "*" : ""
                        })).replace(B, "$1"), n, u < i && Te(e.slice(u, i)), i < o && Te(e = e.slice(i)), i < o && ye(e))
                    }
                    p.push(n)
                } return xe(p)
        }

        function Ce(e, t) {
            var n = t.length > 0,
                i = e.length > 0,
                o = function(o, a, s, u, c) {
                    var f, h, v, y = 0,
                        m = "0",
                        x = o && [],
                        b = [],
                        w = l,
                        C = o || i && r.find.TAG("*", c),
                        E = T += null == w ? 1 : Math.random() || .1,
                        k = C.length;
                    for (c && (l = a === d || a || c); m !== k && null != (f = C[m]); m++) {
                        if (i && f) {
                            for (h = 0, a || f.ownerDocument === d || (p(f), s = !g); v = e[h++];)
                                if (v(f, a || d, s)) {
                                    u.push(f);
                                    break
                                } c && (T = E)
                        }
                        n && ((f = !v && f) && y--, o && x.push(f))
                    }
                    if (y += m, n && m !== y) {
                        for (h = 0; v = t[h++];) v(x, b, a, s);
                        if (o) {
                            if (y > 0)
                                for (; m--;) x[m] || b[m] || (b[m] = j.call(u));
                            b = be(b)
                        }
                        L.apply(u, b), c && !o && b.length > 0 && y + t.length > 1 && oe.uniqueSort(u)
                    }
                    return c && (T = E, l = w), x
                };
            return n ? se(o) : o
        }
        return ve.prototype = r.filters = r.pseudos, r.setFilters = new ve, a = oe.tokenize = function(e, t) {
            var n, i, o, a, s, u, l, c = k[e + " "];
            if (c) return t ? 0 : c.slice(0);
            for (s = e, u = [], l = r.preFilter; s;) {
                for (a in n && !(i = F.exec(s)) || (i && (s = s.slice(i[0].length) || s), u.push(o = [])), n = !1, (i = _.exec(s)) && (n = i.shift(), o.push({
                        value: n,
                        type: i[0].replace(B, " ")
                    }), s = s.slice(n.length)), r.filter) !(i = V[a].exec(s)) || l[a] && !(i = l[a](i)) || (n = i.shift(), o.push({
                    value: n,
                    type: a,
                    matches: i
                }), s = s.slice(n.length));
                if (!n) break
            }
            return t ? s.length : s ? oe.error(e) : k(e, u).slice(0)
        }, s = oe.compile = function(e, t) {
            var n, r = [],
                i = [],
                o = S[e + " "];
            if (!o) {
                for (t || (t = a(e)), n = t.length; n--;)(o = Te(t[n]))[b] ? r.push(o) : i.push(o);
                (o = S(e, Ce(i, r))).selector = e
            }
            return o
        }, u = oe.select = function(e, t, n, i) {
            var o, u, l, c, f, p = "function" == typeof e && e,
                d = !i && a(e = p.selector || e);
            if (n = n || [], 1 === d.length) {
                if ((u = d[0] = d[0].slice(0)).length > 2 && "ID" === (l = u[0]).type && 9 === t.nodeType && g && r.relative[u[1].type]) {
                    if (!(t = (r.find.ID(l.matches[0].replace(Z, ee), t) || [])[0])) return n;
                    p && (t = t.parentNode), e = e.slice(u.shift().value.length)
                }
                for (o = V.needsContext.test(e) ? 0 : u.length; o-- && (l = u[o], !r.relative[c = l.type]);)
                    if ((f = r.find[c]) && (i = f(l.matches[0].replace(Z, ee), K.test(u[0].type) && ge(t.parentNode) || t))) {
                        if (u.splice(o, 1), !(e = i.length && ye(u))) return L.apply(n, i), n;
                        break
                    }
            }
            return (p || s(e, d))(i, t, !g, n, !t || K.test(e) && ge(t.parentNode) || t), n
        }, n.sortStable = b.split("").sort(D).join("") === b, n.detectDuplicates = !!f, p(), n.sortDetached = ue(function(e) {
            return 1 & e.compareDocumentPosition(d.createElement("fieldset"))
        }), ue(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || le("type|href|height|width", function(e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), n.attributes && ue(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || le("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), ue(function(e) {
            return null == e.getAttribute("disabled")
        }) || le(P, function(e, t, n) {
            var r;
            if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }), oe
    }(e);
    b.find = C, b.expr = C.selectors, b.expr[":"] = b.expr.pseudos, b.uniqueSort = b.unique = C.uniqueSort, b.text = C.getText, b.isXMLDoc = C.isXML, b.contains = C.contains, b.escapeSelector = C.escape;
    var E = function(e, t, n) {
            for (var r = [], i = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (i && b(e).is(n)) break;
                    r.push(e)
                } return r
        },
        k = function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        },
        S = b.expr.match.needsContext;

    function D(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function A(e, t, n) {
        return g(t) ? b.grep(e, function(e, r) {
            return !!t.call(e, r, e) !== n
        }) : t.nodeType ? b.grep(e, function(e) {
            return e === t !== n
        }) : "string" != typeof t ? b.grep(e, function(e) {
            return u.call(t, e) > -1 !== n
        }) : b.filter(t, e, n)
    }
    b.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? b.find.matchesSelector(r, e) ? [r] : [] : b.find.matches(e, b.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, b.fn.extend({
        find: function(e) {
            var t, n, r = this.length,
                i = this;
            if ("string" != typeof e) return this.pushStack(b(e).filter(function() {
                for (t = 0; t < r; t++)
                    if (b.contains(i[t], this)) return !0
            }));
            for (n = this.pushStack([]), t = 0; t < r; t++) b.find(e, i[t], n);
            return r > 1 ? b.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(A(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(A(this, e || [], !0))
        },
        is: function(e) {
            return !!A(this, "string" == typeof e && S.test(e) ? b(e) : e || [], !1).length
        }
    });
    var j, q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (b.fn.init = function(e, t, n) {
        var i, o;
        if (!e) return this;
        if (n = n || j, "string" == typeof e) {
            if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : q.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (i[1]) {
                if (t = t instanceof b ? t[0] : t, b.merge(this, b.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : r, !0)), N.test(i[1]) && b.isPlainObject(t))
                    for (i in t) g(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                return this
            }
            return (o = r.getElementById(i[2])) && (this[0] = o, this.length = 1), this
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : g(e) ? void 0 !== n.ready ? n.ready(e) : e(b) : b.makeArray(e, this)
    }).prototype = b.fn, j = b(r);
    var L = /^(?:parents|prev(?:Until|All))/,
        H = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };

    function O(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }
    b.fn.extend({
        has: function(e) {
            var t = b(e, this),
                n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (b.contains(this, t[e])) return !0
            })
        },
        closest: function(e, t) {
            var n, r = 0,
                i = this.length,
                o = [],
                a = "string" != typeof e && b(e);
            if (!S.test(e))
                for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && b.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        } return this.pushStack(o.length > 1 ? b.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? u.call(b(e), this[0]) : u.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(b.uniqueSort(b.merge(this.get(), b(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), b.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return E(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return E(e, "parentNode", n)
        },
        next: function(e) {
            return O(e, "nextSibling")
        },
        prev: function(e) {
            return O(e, "previousSibling")
        },
        nextAll: function(e) {
            return E(e, "nextSibling")
        },
        prevAll: function(e) {
            return E(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return E(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return E(e, "previousSibling", n)
        },
        siblings: function(e) {
            return k((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return k(e.firstChild)
        },
        contents: function(e) {
            return D(e, "iframe") ? e.contentDocument : (D(e, "template") && (e = e.content || e), b.merge([], e.childNodes))
        }
    }, function(e, t) {
        b.fn[e] = function(n, r) {
            var i = b.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = b.filter(r, i)), this.length > 1 && (H[e] || b.uniqueSort(i), L.test(e) && i.reverse()), this.pushStack(i)
        }
    });
    var P = /[^\x20\t\r\n\f]+/g;

    function M(e) {
        return e
    }

    function R(e) {
        throw e
    }

    function I(e, t, n, r) {
        var i;
        try {
            e && g(i = e.promise) ? i.call(e).done(t).fail(n) : e && g(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    b.Callbacks = function(e) {
        e = "string" == typeof e ? function(e) {
            var t = {};
            return b.each(e.match(P) || [], function(e, n) {
                t[n] = !0
            }), t
        }(e) : b.extend({}, e);
        var t, n, r, i, o = [],
            a = [],
            s = -1,
            u = function() {
                for (i = i || e.once, r = t = !0; a.length; s = -1)
                    for (n = a.shift(); ++s < o.length;) !1 === o[s].apply(n[0], n[1]) && e.stopOnFalse && (s = o.length, n = !1);
                e.memory || (n = !1), t = !1, i && (o = n ? [] : "")
            },
            l = {
                add: function() {
                    return o && (n && !t && (s = o.length - 1, a.push(n)), function t(n) {
                        b.each(n, function(n, r) {
                            g(r) ? e.unique && l.has(r) || o.push(r) : r && r.length && "string" !== x(r) && t(r)
                        })
                    }(arguments), n && !t && u()), this
                },
                remove: function() {
                    return b.each(arguments, function(e, t) {
                        for (var n;
                            (n = b.inArray(t, o, n)) > -1;) o.splice(n, 1), n <= s && s--
                    }), this
                },
                has: function(e) {
                    return e ? b.inArray(e, o) > -1 : o.length > 0
                },
                empty: function() {
                    return o && (o = []), this
                },
                disable: function() {
                    return i = a = [], o = n = "", this
                },
                disabled: function() {
                    return !o
                },
                lock: function() {
                    return i = a = [], n || t || (o = n = ""), this
                },
                locked: function() {
                    return !!i
                },
                fireWith: function(e, n) {
                    return i || (n = [e, (n = n || []).slice ? n.slice() : n], a.push(n), t || u()), this
                },
                fire: function() {
                    return l.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!r
                }
            };
        return l
    }, b.extend({
        Deferred: function(t) {
            var n = [
                    ["notify", "progress", b.Callbacks("memory"), b.Callbacks("memory"), 2],
                    ["resolve", "done", b.Callbacks("once memory"), b.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", b.Callbacks("once memory"), b.Callbacks("once memory"), 1, "rejected"]
                ],
                r = "pending",
                i = {
                    state: function() {
                        return r
                    },
                    always: function() {
                        return o.done(arguments).fail(arguments), this
                    },
                    catch: function(e) {
                        return i.then(null, e)
                    },
                    pipe: function() {
                        var e = arguments;
                        return b.Deferred(function(t) {
                            b.each(n, function(n, r) {
                                var i = g(e[r[4]]) && e[r[4]];
                                o[r[1]](function() {
                                    var e = i && i.apply(this, arguments);
                                    e && g(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this, i ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    then: function(t, r, i) {
                        var o = 0;

                        function a(t, n, r, i) {
                            return function() {
                                var s = this,
                                    u = arguments,
                                    l = function() {
                                        var e, l;
                                        if (!(t < o)) {
                                            if ((e = r.apply(s, u)) === n.promise()) throw new TypeError("Thenable self-resolution");
                                            l = e && ("object" == typeof e || "function" == typeof e) && e.then, g(l) ? i ? l.call(e, a(o, n, M, i), a(o, n, R, i)) : (o++, l.call(e, a(o, n, M, i), a(o, n, R, i), a(o, n, M, n.notifyWith))) : (r !== M && (s = void 0, u = [e]), (i || n.resolveWith)(s, u))
                                        }
                                    },
                                    c = i ? l : function() {
                                        try {
                                            l()
                                        } catch (e) {
                                            b.Deferred.exceptionHook && b.Deferred.exceptionHook(e, c.stackTrace), t + 1 >= o && (r !== R && (s = void 0, u = [e]), n.rejectWith(s, u))
                                        }
                                    };
                                t ? c() : (b.Deferred.getStackHook && (c.stackTrace = b.Deferred.getStackHook()), e.setTimeout(c))
                            }
                        }
                        return b.Deferred(function(e) {
                            n[0][3].add(a(0, e, g(i) ? i : M, e.notifyWith)), n[1][3].add(a(0, e, g(t) ? t : M)), n[2][3].add(a(0, e, g(r) ? r : R))
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? b.extend(e, i) : i
                    }
                },
                o = {};
            return b.each(n, function(e, t) {
                var a = t[2],
                    s = t[5];
                i[t[1]] = a.add, s && a.add(function() {
                    r = s
                }, n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock), a.add(t[3].fire), o[t[0]] = function() {
                    return o[t[0] + "With"](this === o ? void 0 : this, arguments), this
                }, o[t[0] + "With"] = a.fireWith
            }), i.promise(o), t && t.call(o, o), o
        },
        when: function(e) {
            var t = arguments.length,
                n = t,
                r = Array(n),
                i = o.call(arguments),
                a = b.Deferred(),
                s = function(e) {
                    return function(n) {
                        r[e] = this, i[e] = arguments.length > 1 ? o.call(arguments) : n, --t || a.resolveWith(r, i)
                    }
                };
            if (t <= 1 && (I(e, a.done(s(n)).resolve, a.reject, !t), "pending" === a.state() || g(i[n] && i[n].then))) return a.then();
            for (; n--;) I(i[n], s(n), a.reject);
            return a.promise()
        }
    });
    var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    b.Deferred.exceptionHook = function(t, n) {
        e.console && e.console.warn && t && W.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
    }, b.readyException = function(t) {
        e.setTimeout(function() {
            throw t
        })
    };
    var $ = b.Deferred();

    function B() {
        r.removeEventListener("DOMContentLoaded", B), e.removeEventListener("load", B), b.ready()
    }
    b.fn.ready = function(e) {
        return $.then(e).catch(function(e) {
            b.readyException(e)
        }), this
    }, b.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --b.readyWait : b.isReady) || (b.isReady = !0, !0 !== e && --b.readyWait > 0 || $.resolveWith(r, [b]))
        }
    }), b.ready.then = $.then, "complete" === r.readyState || "loading" !== r.readyState && !r.documentElement.doScroll ? e.setTimeout(b.ready) : (r.addEventListener("DOMContentLoaded", B), e.addEventListener("load", B));
    var F = function(e, t, n, r, i, o, a) {
            var s = 0,
                u = e.length,
                l = null == n;
            if ("object" === x(n))
                for (s in i = !0, n) F(e, t, s, n[s], !0, o, a);
            else if (void 0 !== r && (i = !0, g(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function(e, t, n) {
                    return l.call(b(e), n)
                })), t))
                for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
            return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
        },
        _ = /^-ms-/,
        z = /-([a-z])/g;

    function X(e, t) {
        return t.toUpperCase()
    }

    function U(e) {
        return e.replace(_, "ms-").replace(z, X)
    }
    var V = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };

    function G() {
        this.expando = b.expando + G.uid++
    }
    G.uid = 1, G.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {}, V(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function(e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t) i[U(t)] = n;
            else
                for (r in t) i[U(r)] = t[r];
            return i
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][U(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(U) : (t = U(t)) in r ? [t] : t.match(P) || []).length;
                    for (; n--;) delete r[t[n]]
                }(void 0 === t || b.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !b.isEmptyObject(t)
        }
    };
    var Y = new G,
        Q = new G,
        J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        K = /[A-Z]/g;

    function Z(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(K, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) {
                try {
                    n = function(e) {
                        return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : J.test(e) ? JSON.parse(e) : e)
                    }(n)
                } catch (e) {}
                Q.set(e, t, n)
            } else n = void 0;
        return n
    }
    b.extend({
        hasData: function(e) {
            return Q.hasData(e) || Y.hasData(e)
        },
        data: function(e, t, n) {
            return Q.access(e, t, n)
        },
        removeData: function(e, t) {
            Q.remove(e, t)
        },
        _data: function(e, t, n) {
            return Y.access(e, t, n)
        },
        _removeData: function(e, t) {
            Y.remove(e, t)
        }
    }), b.fn.extend({
        data: function(e, t) {
            var n, r, i, o = this[0],
                a = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (i = Q.get(o), 1 === o.nodeType && !Y.get(o, "hasDataAttrs"))) {
                    for (n = a.length; n--;) a[n] && 0 === (r = a[n].name).indexOf("data-") && (r = U(r.slice(5)), Z(o, r, i[r]));
                    Y.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof e ? this.each(function() {
                Q.set(this, e)
            }) : F(this, function(t) {
                var n;
                if (o && void 0 === t) {
                    if (void 0 !== (n = Q.get(o, e))) return n;
                    if (void 0 !== (n = Z(o, e))) return n
                } else this.each(function() {
                    Q.set(this, e, t)
                })
            }, null, t, arguments.length > 1, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                Q.remove(this, e)
            })
        }
    }), b.extend({
        queue: function(e, t, n) {
            var r;
            if (e) return t = (t || "fx") + "queue", r = Y.get(e, t), n && (!r || Array.isArray(n) ? r = Y.access(e, t, b.makeArray(n)) : r.push(n)), r || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = b.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = b._queueHooks(e, t);
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function() {
                b.dequeue(e, t)
            }, o)), !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return Y.get(e, n) || Y.access(e, n, {
                empty: b.Callbacks("once memory").add(function() {
                    Y.remove(e, [t + "queue", n])
                })
            })
        }
    }), b.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? b.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var n = b.queue(this, e, t);
                b._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && b.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                b.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1,
                i = b.Deferred(),
                o = this,
                a = this.length,
                s = function() {
                    --r || i.resolveWith(o, [o])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;)(n = Y.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
            return s(), i.promise(t)
        }
    });
    var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
        ne = ["Top", "Right", "Bottom", "Left"],
        re = function(e, t) {
            return "none" === (e = t || e).style.display || "" === e.style.display && b.contains(e.ownerDocument, e) && "none" === b.css(e, "display")
        },
        ie = function(e, t, n, r) {
            var i, o, a = {};
            for (o in t) a[o] = e.style[o], e.style[o] = t[o];
            for (o in i = n.apply(e, r || []), t) e.style[o] = a[o];
            return i
        };

    function oe(e, t, n, r) {
        var i, o, a = 20,
            s = r ? function() {
                return r.cur()
            } : function() {
                return b.css(e, t, "")
            },
            u = s(),
            l = n && n[3] || (b.cssNumber[t] ? "" : "px"),
            c = (b.cssNumber[t] || "px" !== l && +u) && te.exec(b.css(e, t));
        if (c && c[3] !== l) {
            for (u /= 2, l = l || c[3], c = +u || 1; a--;) b.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
            c *= 2, b.style(e, t, c + l), n = n || []
        }
        return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i
    }
    var ae = {};

    function se(e) {
        var t, n = e.ownerDocument,
            r = e.nodeName,
            i = ae[r];
        return i || (t = n.body.appendChild(n.createElement(r)), i = b.css(t, "display"), t.parentNode.removeChild(t), "none" === i && (i = "block"), ae[r] = i, i)
    }

    function ue(e, t) {
        for (var n, r, i = [], o = 0, a = e.length; o < a; o++)(r = e[o]).style && (n = r.style.display, t ? ("none" === n && (i[o] = Y.get(r, "display") || null, i[o] || (r.style.display = "")), "" === r.style.display && re(r) && (i[o] = se(r))) : "none" !== n && (i[o] = "none", Y.set(r, "display", n)));
        for (o = 0; o < a; o++) null != i[o] && (e[o].style.display = i[o]);
        return e
    }
    b.fn.extend({
        show: function() {
            return ue(this, !0)
        },
        hide: function() {
            return ue(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                re(this) ? b(this).show() : b(this).hide()
            })
        }
    });
    var le = /^(?:checkbox|radio)$/i,
        ce = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        fe = /^$|^module$|\/(?:java|ecma)script/i,
        pe = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };

    function de(e, t) {
        var n;
        return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && D(e, t) ? b.merge([e], n) : n
    }

    function he(e, t) {
        for (var n = 0, r = e.length; n < r; n++) Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval"))
    }
    pe.optgroup = pe.option, pe.tbody = pe.tfoot = pe.colgroup = pe.caption = pe.thead, pe.th = pe.td;
    var ge = /<|&#?\w+;/;

    function ve(e, t, n, r, i) {
        for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
            if ((o = e[d]) || 0 === o)
                if ("object" === x(o)) b.merge(p, o.nodeType ? [o] : o);
                else if (ge.test(o)) {
            for (a = a || f.appendChild(t.createElement("div")), s = (ce.exec(o) || ["", ""])[1].toLowerCase(), u = pe[s] || pe._default, a.innerHTML = u[1] + b.htmlPrefilter(o) + u[2], c = u[0]; c--;) a = a.lastChild;
            b.merge(p, a.childNodes), (a = f.firstChild).textContent = ""
        } else p.push(t.createTextNode(o));
        for (f.textContent = "", d = 0; o = p[d++];)
            if (r && b.inArray(o, r) > -1) i && i.push(o);
            else if (l = b.contains(o.ownerDocument, o), a = de(f.appendChild(o), "script"), l && he(a), n)
            for (c = 0; o = a[c++];) fe.test(o.type || "") && n.push(o);
        return f
    }! function() {
        var e = r.createDocumentFragment().appendChild(r.createElement("div")),
            t = r.createElement("input");
        t.setAttribute("type", "radio"), t.setAttribute("checked", "checked"), t.setAttribute("name", "t"), e.appendChild(t), h.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", h.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
    }();
    var ye = r.documentElement,
        me = /^key/,
        xe = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        be = /^([^.]*)(?:\.(.+)|)/;

    function we() {
        return !0
    }

    function Te() {
        return !1
    }

    function Ce() {
        try {
            return r.activeElement
        } catch (e) {}
    }

    function Ee(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
            for (s in "string" != typeof n && (r = r || n, n = void 0), t) Ee(e, s, n, r, t[s], o);
            return e
        }
        if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = Te;
        else if (!i) return e;
        return 1 === o && (a = i, (i = function(e) {
            return b().off(e), a.apply(this, arguments)
        }).guid = a.guid || (a.guid = b.guid++)), e.each(function() {
            b.event.add(this, t, i, r, n)
        })
    }
    b.event = {
        global: {},
        add: function(e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, v = Y.get(e);
            if (v)
                for (n.handler && (n = (o = n).handler, i = o.selector), i && b.find.matchesSelector(ye, i), n.guid || (n.guid = b.guid++), (u = v.events) || (u = v.events = {}), (a = v.handle) || (a = v.handle = function(t) {
                        return void 0 !== b && b.event.triggered !== t.type ? b.event.dispatch.apply(e, arguments) : void 0
                    }), l = (t = (t || "").match(P) || [""]).length; l--;) d = g = (s = be.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = b.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = b.event.special[d] || {}, c = b.extend({
                    type: d,
                    origType: g,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && b.expr.match.needsContext.test(i),
                    namespace: h.join(".")
                }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(e, r, h, a) || e.addEventListener && e.addEventListener(d, a)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), b.event.global[d] = !0)
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, v = Y.hasData(e) && Y.get(e);
            if (v && (u = v.events)) {
                for (l = (t = (t || "").match(P) || [""]).length; l--;)
                    if (d = g = (s = be.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d) {
                        for (f = b.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length; o--;) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                        a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || b.removeEvent(e, d, v.handle), delete u[d])
                    } else
                        for (d in u) b.event.remove(e, d + t[l], n, r, !0);
                b.isEmptyObject(u) && Y.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, r, i, o, a, s = b.event.fix(e),
                u = new Array(arguments.length),
                l = (Y.get(this, "events") || {})[s.type] || [],
                c = b.event.special[s.type] || {};
            for (u[0] = s, t = 1; t < arguments.length; t++) u[t] = arguments[t];
            if (s.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, s)) {
                for (a = b.event.handlers.call(this, s, l), t = 0;
                    (i = a[t++]) && !s.isPropagationStopped();)
                    for (s.currentTarget = i.elem, n = 0;
                        (o = i.handlers[n++]) && !s.isImmediatePropagationStopped();) s.rnamespace && !s.rnamespace.test(o.namespace) || (s.handleObj = o, s.data = o.data, void 0 !== (r = ((b.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, u)) && !1 === (s.result = r) && (s.preventDefault(), s.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, s), s.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, a, s = [],
                u = t.delegateCount,
                l = e.target;
            if (u && l.nodeType && !("click" === e.type && e.button >= 1))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                        for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? b(i, this).index(l) > -1 : b.find(i, this, null, [l]).length), a[i] && o.push(r);
                        o.length && s.push({
                            elem: l,
                            handlers: o
                        })
                    } return l = this, u < t.length && s.push({
                elem: l,
                handlers: t.slice(u)
            }), s
        },
        addProp: function(e, t) {
            Object.defineProperty(b.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: g(t) ? function() {
                    if (this.originalEvent) return t(this.originalEvent)
                } : function() {
                    if (this.originalEvent) return this.originalEvent[e]
                },
                set: function(t) {
                    Object.defineProperty(this, e, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: t
                    })
                }
            })
        },
        fix: function(e) {
            return e[b.expando] ? e : new b.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== Ce() && this.focus) return this.focus(), !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === Ce() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if ("checkbox" === this.type && this.click && D(this, "input")) return this.click(), !1
                },
                _default: function(e) {
                    return D(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, b.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, b.Event = function(e, t) {
        if (!(this instanceof b.Event)) return new b.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? we : Te, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && b.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[b.expando] = !0
    }, b.Event.prototype = {
        constructor: b.Event,
        isDefaultPrevented: Te,
        isPropagationStopped: Te,
        isImmediatePropagationStopped: Te,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = we, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = we, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = we, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, b.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(e) {
            var t = e.button;
            return null == e.which && me.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && xe.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, b.event.addProp), b.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        b.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = e.relatedTarget,
                    i = e.handleObj;
                return r && (r === this || b.contains(this, r)) || (e.type = i.origType, n = i.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), b.fn.extend({
        on: function(e, t, n, r) {
            return Ee(this, e, t, n, r)
        },
        one: function(e, t, n, r) {
            return Ee(this, e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, b(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for (i in e) this.off(i, t, e[i]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Te), this.each(function() {
                b.event.remove(this, e, n, t)
            })
        }
    });
    var ke = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        Se = /<script|<style|<link/i,
        De = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ne = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function Ae(e, t) {
        return D(e, "table") && D(11 !== t.nodeType ? t : t.firstChild, "tr") && b(e).children("tbody")[0] || e
    }

    function je(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function qe(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
    }

    function Le(e, t) {
        var n, r, i, o, a, s, u, l;
        if (1 === t.nodeType) {
            if (Y.hasData(e) && (o = Y.access(e), a = Y.set(t, o), l = o.events))
                for (i in delete a.handle, a.events = {}, l)
                    for (n = 0, r = l[i].length; n < r; n++) b.event.add(t, i, l[i][n]);
            Q.hasData(e) && (s = Q.access(e), u = b.extend({}, s), Q.set(t, u))
        }
    }

    function He(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && le.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
    }

    function Oe(e, t, n, r) {
        t = a.apply([], t);
        var i, o, s, u, l, c, f = 0,
            p = e.length,
            d = p - 1,
            v = t[0],
            y = g(v);
        if (y || p > 1 && "string" == typeof v && !h.checkClone && De.test(v)) return e.each(function(i) {
            var o = e.eq(i);
            y && (t[0] = v.call(this, i, o.html())), Oe(o, t, n, r)
        });
        if (p && (o = (i = ve(t, e[0].ownerDocument, !1, e, r)).firstChild, 1 === i.childNodes.length && (i = o), o || r)) {
            for (u = (s = b.map(de(i, "script"), je)).length; f < p; f++) l = i, f !== d && (l = b.clone(l, !0, !0), u && b.merge(s, de(l, "script"))), n.call(e[f], l, f);
            if (u)
                for (c = s[s.length - 1].ownerDocument, b.map(s, qe), f = 0; f < u; f++) l = s[f], fe.test(l.type || "") && !Y.access(l, "globalEval") && b.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? b._evalUrl && b._evalUrl(l.src) : m(l.textContent.replace(Ne, ""), c, l))
        }
        return e
    }

    function Pe(e, t, n) {
        for (var r, i = t ? b.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || b.cleanData(de(r)), r.parentNode && (n && b.contains(r.ownerDocument, r) && he(de(r, "script")), r.parentNode.removeChild(r));
        return e
    }
    b.extend({
        htmlPrefilter: function(e) {
            return e.replace(ke, "<$1></$2>")
        },
        clone: function(e, t, n) {
            var r, i, o, a, s = e.cloneNode(!0),
                u = b.contains(e.ownerDocument, e);
            if (!(h.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || b.isXMLDoc(e)))
                for (a = de(s), r = 0, i = (o = de(e)).length; r < i; r++) He(o[r], a[r]);
            if (t)
                if (n)
                    for (o = o || de(e), a = a || de(s), r = 0, i = o.length; r < i; r++) Le(o[r], a[r]);
                else Le(e, s);
            return (a = de(s, "script")).length > 0 && he(a, !u && de(e, "script")), s
        },
        cleanData: function(e) {
            for (var t, n, r, i = b.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (V(n)) {
                    if (t = n[Y.expando]) {
                        if (t.events)
                            for (r in t.events) i[r] ? b.event.remove(n, r) : b.removeEvent(n, r, t.handle);
                        n[Y.expando] = void 0
                    }
                    n[Q.expando] && (n[Q.expando] = void 0)
                }
        }
    }), b.fn.extend({
        detach: function(e) {
            return Pe(this, e, !0)
        },
        remove: function(e) {
            return Pe(this, e)
        },
        text: function(e) {
            return F(this, function(e) {
                return void 0 === e ? b.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return Oe(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Ae(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return Oe(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Ae(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return Oe(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return Oe(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (b.cleanData(de(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return b.clone(this, e, t)
            })
        },
        html: function(e) {
            return F(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !Se.test(e) && !pe[(ce.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = b.htmlPrefilter(e);
                    try {
                        for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (b.cleanData(de(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = [];
            return Oe(this, arguments, function(t) {
                var n = this.parentNode;
                b.inArray(this, e) < 0 && (b.cleanData(de(this)), n && n.replaceChild(t, this))
            }, e)
        }
    }), b.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        b.fn[e] = function(e) {
            for (var n, r = [], i = b(e), o = i.length - 1, a = 0; a <= o; a++) n = a === o ? this : this.clone(!0), b(i[a])[t](n), s.apply(r, n.get());
            return this.pushStack(r)
        }
    });
    var Me = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
        Re = function(t) {
            var n = t.ownerDocument.defaultView;
            return n && n.opener || (n = e), n.getComputedStyle(t)
        },
        Ie = new RegExp(ne.join("|"), "i");

    function We(e, t, n) {
        var r, i, o, a, s = e.style;
        return (n = n || Re(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || b.contains(e.ownerDocument, e) || (a = b.style(e, t)), !h.pixelBoxStyles() && Me.test(a) && Ie.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a
    }

    function $e(e, t) {
        return {
            get: function() {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }! function() {
        function t() {
            if (c) {
                l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", ye.appendChild(l).appendChild(c);
                var t = e.getComputedStyle(c);
                i = "1%" !== t.top, u = 12 === n(t.marginLeft), c.style.right = "60%", s = 36 === n(t.right), o = 36 === n(t.width), c.style.position = "absolute", a = 36 === c.offsetWidth || "absolute", ye.removeChild(l), c = null
            }
        }

        function n(e) {
            return Math.round(parseFloat(e))
        }
        var i, o, a, s, u, l = r.createElement("div"),
            c = r.createElement("div");
        c.style && (c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", h.clearCloneStyle = "content-box" === c.style.backgroundClip, b.extend(h, {
            boxSizingReliable: function() {
                return t(), o
            },
            pixelBoxStyles: function() {
                return t(), s
            },
            pixelPosition: function() {
                return t(), i
            },
            reliableMarginLeft: function() {
                return t(), u
            },
            scrollboxSize: function() {
                return t(), a
            }
        }))
    }();
    var Be = /^(none|table(?!-c[ea]).+)/,
        Fe = /^--/,
        _e = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        ze = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Xe = ["Webkit", "Moz", "ms"],
        Ue = r.createElement("div").style;

    function Ve(e) {
        var t = b.cssProps[e];
        return t || (t = b.cssProps[e] = function(e) {
            if (e in Ue) return e;
            for (var t = e[0].toUpperCase() + e.slice(1), n = Xe.length; n--;)
                if ((e = Xe[n] + t) in Ue) return e
        }(e) || e), t
    }

    function Ge(e, t, n) {
        var r = te.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }

    function Ye(e, t, n, r, i, o) {
        var a = "width" === t ? 1 : 0,
            s = 0,
            u = 0;
        if (n === (r ? "border" : "content")) return 0;
        for (; a < 4; a += 2) "margin" === n && (u += b.css(e, n + ne[a], !0, i)), r ? ("content" === n && (u -= b.css(e, "padding" + ne[a], !0, i)), "margin" !== n && (u -= b.css(e, "border" + ne[a] + "Width", !0, i))) : (u += b.css(e, "padding" + ne[a], !0, i), "padding" !== n ? u += b.css(e, "border" + ne[a] + "Width", !0, i) : s += b.css(e, "border" + ne[a] + "Width", !0, i));
        return !r && o >= 0 && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5))), u
    }

    function Qe(e, t, n) {
        var r = Re(e),
            i = We(e, t, r),
            o = "border-box" === b.css(e, "boxSizing", !1, r),
            a = o;
        if (Me.test(i)) {
            if (!n) return i;
            i = "auto"
        }
        return a = a && (h.boxSizingReliable() || i === e.style[t]), ("auto" === i || !parseFloat(i) && "inline" === b.css(e, "display", !1, r)) && (i = e["offset" + t[0].toUpperCase() + t.slice(1)], a = !0), (i = parseFloat(i) || 0) + Ye(e, t, n || (o ? "border" : "content"), a, r, i) + "px"
    }

    function Je(e, t, n, r, i) {
        return new Je.prototype.init(e, t, n, r, i)
    }
    b.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = We(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = U(t),
                    u = Fe.test(t),
                    l = e.style;
                if (u || (t = Ve(s)), a = b.cssHooks[t] || b.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                "string" == (o = typeof n) && (i = te.exec(n)) && i[1] && (n = oe(e, t, i), o = "number"), null != n && n == n && ("number" === o && (n += i && i[3] || (b.cssNumber[s] ? "" : "px")), h.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
            }
        },
        css: function(e, t, n, r) {
            var i, o, a, s = U(t);
            return Fe.test(t) || (t = Ve(s)), (a = b.cssHooks[t] || b.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = We(e, t, r)), "normal" === i && t in ze && (i = ze[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i
        }
    }), b.each(["height", "width"], function(e, t) {
        b.cssHooks[t] = {
            get: function(e, n, r) {
                if (n) return !Be.test(b.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Qe(e, t, r) : ie(e, _e, function() {
                    return Qe(e, t, r)
                })
            },
            set: function(e, n, r) {
                var i, o = Re(e),
                    a = "border-box" === b.css(e, "boxSizing", !1, o),
                    s = r && Ye(e, t, r, a, o);
                return a && h.scrollboxSize() === o.position && (s -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - Ye(e, t, "border", !1, o) - .5)), s && (i = te.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = b.css(e, t)), Ge(0, n, s)
            }
        }
    }), b.cssHooks.marginLeft = $e(h.reliableMarginLeft, function(e, t) {
        if (t) return (parseFloat(We(e, "marginLeft")) || e.getBoundingClientRect().left - ie(e, {
            marginLeft: 0
        }, function() {
            return e.getBoundingClientRect().left
        })) + "px"
    }), b.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        b.cssHooks[e + t] = {
            expand: function(n) {
                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) i[e + ne[r] + t] = o[r] || o[r - 2] || o[0];
                return i
            }
        }, "margin" !== e && (b.cssHooks[e + t].set = Ge)
    }), b.fn.extend({
        css: function(e, t) {
            return F(this, function(e, t, n) {
                var r, i, o = {},
                    a = 0;
                if (Array.isArray(t)) {
                    for (r = Re(e), i = t.length; a < i; a++) o[t[a]] = b.css(e, t[a], !1, r);
                    return o
                }
                return void 0 !== n ? b.style(e, t, n) : b.css(e, t)
            }, e, t, arguments.length > 1)
        }
    }), b.Tween = Je, Je.prototype = {
        constructor: Je,
        init: function(e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || b.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (b.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = Je.propHooks[this.prop];
            return e && e.get ? e.get(this) : Je.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = Je.propHooks[this.prop];
            return this.options.duration ? this.pos = t = b.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Je.propHooks._default.set(this), this
        }
    }, Je.prototype.init.prototype = Je.prototype, Je.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = b.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(e) {
                b.fx.step[e.prop] ? b.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[b.cssProps[e.prop]] && !b.cssHooks[e.prop] ? e.elem[e.prop] = e.now : b.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }, Je.propHooks.scrollTop = Je.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, b.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, b.fx = Je.prototype.init, b.fx.step = {};
    var Ke, Ze, et = /^(?:toggle|show|hide)$/,
        tt = /queueHooks$/;

    function nt() {
        Ze && (!1 === r.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(nt) : e.setTimeout(nt, b.fx.interval), b.fx.tick())
    }

    function rt() {
        return e.setTimeout(function() {
            Ke = void 0
        }), Ke = Date.now()
    }

    function it(e, t) {
        var n, r = 0,
            i = {
                height: e
            };
        for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = ne[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function ot(e, t, n) {
        for (var r, i = (at.tweeners[t] || []).concat(at.tweeners["*"]), o = 0, a = i.length; o < a; o++)
            if (r = i[o].call(n, t, e)) return r
    }

    function at(e, t, n) {
        var r, i, o = 0,
            a = at.prefilters.length,
            s = b.Deferred().always(function() {
                delete u.elem
            }),
            u = function() {
                if (i) return !1;
                for (var t = Ke || rt(), n = Math.max(0, l.startTime + l.duration - t), r = 1 - (n / l.duration || 0), o = 0, a = l.tweens.length; o < a; o++) l.tweens[o].run(r);
                return s.notifyWith(e, [l, r, n]), r < 1 && a ? n : (a || s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l]), !1)
            },
            l = s.promise({
                elem: e,
                props: b.extend({}, t),
                opts: b.extend(!0, {
                    specialEasing: {},
                    easing: b.easing._default
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: Ke || rt(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var r = b.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                    return l.tweens.push(r), r
                },
                stop: function(t) {
                    var n = 0,
                        r = t ? l.tweens.length : 0;
                    if (i) return this;
                    for (i = !0; n < r; n++) l.tweens[n].run(1);
                    return t ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t])) : s.rejectWith(e, [l, t]), this
                }
            }),
            c = l.props;
        for (function(e, t) {
                var n, r, i, o, a;
                for (n in e)
                    if (i = t[r = U(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = b.cssHooks[r]) && "expand" in a)
                        for (n in o = a.expand(o), delete e[r], o) n in e || (e[n] = o[n], t[n] = i);
                    else t[r] = i
            }(c, l.opts.specialEasing); o < a; o++)
            if (r = at.prefilters[o].call(l, e, c, l.opts)) return g(r.stop) && (b._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)), r;
        return b.map(c, ot, l), g(l.opts.start) && l.opts.start.call(e, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), b.fx.timer(b.extend(u, {
            elem: e,
            anim: l,
            queue: l.opts.queue
        })), l
    }
    b.Animation = b.extend(at, {
            tweeners: {
                "*": [function(e, t) {
                    var n = this.createTween(e, t);
                    return oe(n.elem, e, te.exec(t), n), n
                }]
            },
            tweener: function(e, t) {
                g(e) ? (t = e, e = ["*"]) : e = e.match(P);
                for (var n, r = 0, i = e.length; r < i; r++) n = e[r], at.tweeners[n] = at.tweeners[n] || [], at.tweeners[n].unshift(t)
            },
            prefilters: [function(e, t, n) {
                var r, i, o, a, s, u, l, c, f = "width" in t || "height" in t,
                    p = this,
                    d = {},
                    h = e.style,
                    g = e.nodeType && re(e),
                    v = Y.get(e, "fxshow");
                for (r in n.queue || (null == (a = b._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function() {
                        a.unqueued || s()
                    }), a.unqueued++, p.always(function() {
                        p.always(function() {
                            a.unqueued--, b.queue(e, "fx").length || a.empty.fire()
                        })
                    })), t)
                    if (i = t[r], et.test(i)) {
                        if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
                            if ("show" !== i || !v || void 0 === v[r]) continue;
                            g = !0
                        }
                        d[r] = v && v[r] || b.style(e, r)
                    } if ((u = !b.isEmptyObject(t)) || !b.isEmptyObject(d))
                    for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = v && v.display) && (l = Y.get(e, "display")), "none" === (c = b.css(e, "display")) && (l ? c = l : (ue([e], !0), l = e.style.display || l, c = b.css(e, "display"), ue([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === b.css(e, "float") && (u || (p.done(function() {
                            h.display = l
                        }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function() {
                            h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
                        })), u = !1, d) u || (v ? "hidden" in v && (g = v.hidden) : v = Y.access(e, "fxshow", {
                        display: l
                    }), o && (v.hidden = !g), g && ue([e], !0), p.done(function() {
                        for (r in g || ue([e]), Y.remove(e, "fxshow"), d) b.style(e, r, d[r])
                    })), u = ot(g ? v[r] : 0, r, p), r in v || (v[r] = u.start, g && (u.end = u.start, u.start = 0))
            }],
            prefilter: function(e, t) {
                t ? at.prefilters.unshift(e) : at.prefilters.push(e)
            }
        }), b.speed = function(e, t, n) {
            var r = e && "object" == typeof e ? b.extend({}, e) : {
                complete: n || !n && t || g(e) && e,
                duration: e,
                easing: n && t || t && !g(t) && t
            };
            return b.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in b.fx.speeds ? r.duration = b.fx.speeds[r.duration] : r.duration = b.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
                g(r.old) && r.old.call(this), r.queue && b.dequeue(this, r.queue)
            }, r
        }, b.fn.extend({
            fadeTo: function(e, t, n, r) {
                return this.filter(re).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, r)
            },
            animate: function(e, t, n, r) {
                var i = b.isEmptyObject(e),
                    o = b.speed(t, n, r),
                    a = function() {
                        var t = at(this, b.extend({}, e), o);
                        (i || Y.get(this, "finish")) && t.stop(!0)
                    };
                return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
            },
            stop: function(e, t, n) {
                var r = function(e) {
                    var t = e.stop;
                    delete e.stop, t(n)
                };
                return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function() {
                    var t = !0,
                        i = null != e && e + "queueHooks",
                        o = b.timers,
                        a = Y.get(this);
                    if (i) a[i] && a[i].stop && r(a[i]);
                    else
                        for (i in a) a[i] && a[i].stop && tt.test(i) && r(a[i]);
                    for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
                    !t && n || b.dequeue(this, e)
                })
            },
            finish: function(e) {
                return !1 !== e && (e = e || "fx"), this.each(function() {
                    var t, n = Y.get(this),
                        r = n[e + "queue"],
                        i = n[e + "queueHooks"],
                        o = b.timers,
                        a = r ? r.length : 0;
                    for (n.finish = !0, b.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                    for (t = 0; t < a; t++) r[t] && r[t].finish && r[t].finish.call(this);
                    delete n.finish
                })
            }
        }), b.each(["toggle", "show", "hide"], function(e, t) {
            var n = b.fn[t];
            b.fn[t] = function(e, r, i) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(it(t, !0), e, r, i)
            }
        }), b.each({
            slideDown: it("show"),
            slideUp: it("hide"),
            slideToggle: it("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(e, t) {
            b.fn[e] = function(e, n, r) {
                return this.animate(t, e, n, r)
            }
        }), b.timers = [], b.fx.tick = function() {
            var e, t = 0,
                n = b.timers;
            for (Ke = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
            n.length || b.fx.stop(), Ke = void 0
        }, b.fx.timer = function(e) {
            b.timers.push(e), b.fx.start()
        }, b.fx.interval = 13, b.fx.start = function() {
            Ze || (Ze = !0, nt())
        }, b.fx.stop = function() {
            Ze = null
        }, b.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, b.fn.delay = function(t, n) {
            return t = b.fx && b.fx.speeds[t] || t, n = n || "fx", this.queue(n, function(n, r) {
                var i = e.setTimeout(n, t);
                r.stop = function() {
                    e.clearTimeout(i)
                }
            })
        },
        function() {
            var e = r.createElement("input"),
                t = r.createElement("select").appendChild(r.createElement("option"));
            e.type = "checkbox", h.checkOn = "" !== e.value, h.optSelected = t.selected, (e = r.createElement("input")).value = "t", e.type = "radio", h.radioValue = "t" === e.value
        }();
    var st, ut = b.expr.attrHandle;
    b.fn.extend({
        attr: function(e, t) {
            return F(this, b.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                b.removeAttr(this, e)
            })
        }
    }), b.extend({
        attr: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? b.prop(e, t, n) : (1 === o && b.isXMLDoc(e) || (i = b.attrHooks[t.toLowerCase()] || (b.expr.match.bool.test(t) ? st : void 0)), void 0 !== n ? null === n ? void b.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = b.find.attr(e, t)) ? void 0 : r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!h.radioValue && "radio" === t && D(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, r = 0,
                i = t && t.match(P);
            if (i && 1 === e.nodeType)
                for (; n = i[r++];) e.removeAttribute(n)
        }
    }), st = {
        set: function(e, t, n) {
            return !1 === t ? b.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, b.each(b.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = ut[t] || b.find.attr;
        ut[t] = function(e, t, r) {
            var i, o, a = t.toLowerCase();
            return r || (o = ut[a], ut[a] = i, i = null != n(e, t, r) ? a : null, ut[a] = o), i
        }
    });
    var lt = /^(?:input|select|textarea|button)$/i,
        ct = /^(?:a|area)$/i;

    function ft(e) {
        return (e.match(P) || []).join(" ")
    }

    function pt(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function dt(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(P) || []
    }
    b.fn.extend({
        prop: function(e, t) {
            return F(this, b.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[b.propFix[e] || e]
            })
        }
    }), b.extend({
        prop: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && b.isXMLDoc(e) || (t = b.propFix[t] || t, i = b.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = b.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : lt.test(e.nodeName) || ct.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), h.optSelected || (b.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), b.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        b.propFix[this.toLowerCase()] = this
    }), b.fn.extend({
        addClass: function(e) {
            var t, n, r, i, o, a, s, u = 0;
            if (g(e)) return this.each(function(t) {
                b(this).addClass(e.call(this, t, pt(this)))
            });
            if ((t = dt(e)).length)
                for (; n = this[u++];)
                    if (i = pt(n), r = 1 === n.nodeType && " " + ft(i) + " ") {
                        for (a = 0; o = t[a++];) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        i !== (s = ft(r)) && n.setAttribute("class", s)
                    } return this
        },
        removeClass: function(e) {
            var t, n, r, i, o, a, s, u = 0;
            if (g(e)) return this.each(function(t) {
                b(this).removeClass(e.call(this, t, pt(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ((t = dt(e)).length)
                for (; n = this[u++];)
                    if (i = pt(n), r = 1 === n.nodeType && " " + ft(i) + " ") {
                        for (a = 0; o = t[a++];)
                            for (; r.indexOf(" " + o + " ") > -1;) r = r.replace(" " + o + " ", " ");
                        i !== (s = ft(r)) && n.setAttribute("class", s)
                    } return this
        },
        toggleClass: function(e, t) {
            var n = typeof e,
                r = "string" === n || Array.isArray(e);
            return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : g(e) ? this.each(function(n) {
                b(this).toggleClass(e.call(this, n, pt(this), t), t)
            }) : this.each(function() {
                var t, i, o, a;
                if (r)
                    for (i = 0, o = b(this), a = dt(e); t = a[i++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                else void 0 !== e && "boolean" !== n || ((t = pt(this)) && Y.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : Y.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, r = 0;
            for (t = " " + e + " "; n = this[r++];)
                if (1 === n.nodeType && (" " + ft(pt(n)) + " ").indexOf(t) > -1) return !0;
            return !1
        }
    });
    var ht = /\r/g;
    b.fn.extend({
        val: function(e) {
            var t, n, r, i = this[0];
            return arguments.length ? (r = g(e), this.each(function(n) {
                var i;
                1 === this.nodeType && (null == (i = r ? e.call(this, n, b(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = b.map(i, function(e) {
                    return null == e ? "" : e + ""
                })), (t = b.valHooks[this.type] || b.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
            })) : i ? (t = b.valHooks[i.type] || b.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof(n = i.value) ? n.replace(ht, "") : null == n ? "" : n : void 0
        }
    }), b.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = b.find.attr(e, "value");
                    return null != t ? t : ft(b.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, n, r, i = e.options,
                        o = e.selectedIndex,
                        a = "select-one" === e.type,
                        s = a ? null : [],
                        u = a ? o + 1 : i.length;
                    for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                        if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !D(n.parentNode, "optgroup"))) {
                            if (t = b(n).val(), a) return t;
                            s.push(t)
                        } return s
                },
                set: function(e, t) {
                    for (var n, r, i = e.options, o = b.makeArray(t), a = i.length; a--;)((r = i[a]).selected = b.inArray(b.valHooks.option.get(r), o) > -1) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), b.each(["radio", "checkbox"], function() {
        b.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t)) return e.checked = b.inArray(b(e).val(), t) > -1
            }
        }, h.checkOn || (b.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }), h.focusin = "onfocusin" in e;
    var gt = /^(?:focusinfocus|focusoutblur)$/,
        vt = function(e) {
            e.stopPropagation()
        };
    b.extend(b.event, {
        trigger: function(t, n, i, o) {
            var a, s, u, l, c, p, d, h, y = [i || r],
                m = f.call(t, "type") ? t.type : t,
                x = f.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = h = u = i = i || r, 3 !== i.nodeType && 8 !== i.nodeType && !gt.test(m + b.event.triggered) && (m.indexOf(".") > -1 && (m = (x = m.split(".")).shift(), x.sort()), c = m.indexOf(":") < 0 && "on" + m, (t = t[b.expando] ? t : new b.Event(m, "object" == typeof t && t)).isTrigger = o ? 2 : 3, t.namespace = x.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + x.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : b.makeArray(n, [t]), d = b.event.special[m] || {}, o || !d.trigger || !1 !== d.trigger.apply(i, n))) {
                if (!o && !d.noBubble && !v(i)) {
                    for (l = d.delegateType || m, gt.test(l + m) || (s = s.parentNode); s; s = s.parentNode) y.push(s), u = s;
                    u === (i.ownerDocument || r) && y.push(u.defaultView || u.parentWindow || e)
                }
                for (a = 0;
                    (s = y[a++]) && !t.isPropagationStopped();) h = s, t.type = a > 1 ? l : d.bindType || m, (p = (Y.get(s, "events") || {})[t.type] && Y.get(s, "handle")) && p.apply(s, n), (p = c && s[c]) && p.apply && V(s) && (t.result = p.apply(s, n), !1 === t.result && t.preventDefault());
                return t.type = m, o || t.isDefaultPrevented() || d._default && !1 !== d._default.apply(y.pop(), n) || !V(i) || c && g(i[m]) && !v(i) && ((u = i[c]) && (i[c] = null), b.event.triggered = m, t.isPropagationStopped() && h.addEventListener(m, vt), i[m](), t.isPropagationStopped() && h.removeEventListener(m, vt), b.event.triggered = void 0, u && (i[c] = u)), t.result
            }
        },
        simulate: function(e, t, n) {
            var r = b.extend(new b.Event, n, {
                type: e,
                isSimulated: !0
            });
            b.event.trigger(r, null, t)
        }
    }), b.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                b.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n) return b.event.trigger(e, t, n, !0)
        }
    }), h.focusin || b.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            b.event.simulate(t, e.target, b.event.fix(e))
        };
        b.event.special[t] = {
            setup: function() {
                var r = this.ownerDocument || this,
                    i = Y.access(r, t);
                i || r.addEventListener(e, n, !0), Y.access(r, t, (i || 0) + 1)
            },
            teardown: function() {
                var r = this.ownerDocument || this,
                    i = Y.access(r, t) - 1;
                i ? Y.access(r, t, i) : (r.removeEventListener(e, n, !0), Y.remove(r, t))
            }
        }
    });
    var yt = e.location,
        mt = Date.now(),
        xt = /\?/;
    b.parseXML = function(t) {
        var n;
        if (!t || "string" != typeof t) return null;
        try {
            n = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (e) {
            n = void 0
        }
        return n && !n.getElementsByTagName("parsererror").length || b.error("Invalid XML: " + t), n
    };
    var bt = /\[\]$/,
        wt = /\r?\n/g,
        Tt = /^(?:submit|button|image|reset|file)$/i,
        Ct = /^(?:input|select|textarea|keygen)/i;

    function Et(e, t, n, r) {
        var i;
        if (Array.isArray(t)) b.each(t, function(t, i) {
            n || bt.test(e) ? r(e, i) : Et(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r)
        });
        else if (n || "object" !== x(t)) r(e, t);
        else
            for (i in t) Et(e + "[" + i + "]", t[i], n, r)
    }
    b.param = function(e, t) {
        var n, r = [],
            i = function(e, t) {
                var n = g(t) ? t() : t;
                r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
            };
        if (Array.isArray(e) || e.jquery && !b.isPlainObject(e)) b.each(e, function() {
            i(this.name, this.value)
        });
        else
            for (n in e) Et(n, e[n], t, i);
        return r.join("&")
    }, b.fn.extend({
        serialize: function() {
            return b.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = b.prop(this, "elements");
                return e ? b.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !b(this).is(":disabled") && Ct.test(this.nodeName) && !Tt.test(e) && (this.checked || !le.test(e))
            }).map(function(e, t) {
                var n = b(this).val();
                return null == n ? null : Array.isArray(n) ? b.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(wt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(wt, "\r\n")
                }
            }).get()
        }
    });
    var kt = /%20/g,
        St = /#.*$/,
        Dt = /([?&])_=[^&]*/,
        Nt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        At = /^(?:GET|HEAD)$/,
        jt = /^\/\//,
        qt = {},
        Lt = {},
        Ht = "*/".concat("*"),
        Ot = r.createElement("a");

    function Pt(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0,
                o = t.toLowerCase().match(P) || [];
            if (g(n))
                for (; r = o[i++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }

    function Mt(e, t, n, r) {
        var i = {},
            o = e === Lt;

        function a(s) {
            var u;
            return i[s] = !0, b.each(e[s] || [], function(e, s) {
                var l = s(t, n, r);
                return "string" != typeof l || o || i[l] ? o ? !(u = l) : void 0 : (t.dataTypes.unshift(l), a(l), !1)
            }), u
        }
        return a(t.dataTypes[0]) || !i["*"] && a("*")
    }

    function Rt(e, t) {
        var n, r, i = b.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && b.extend(!0, e, r), e
    }
    Ot.href = yt.href, b.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: yt.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(yt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Ht,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": b.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? Rt(Rt(e, b.ajaxSettings), t) : Rt(b.ajaxSettings, e)
        },
        ajaxPrefilter: Pt(qt),
        ajaxTransport: Pt(Lt),
        ajax: function(t, n) {
            "object" == typeof t && (n = t, t = void 0), n = n || {};
            var i, o, a, s, u, l, c, f, p, d, h = b.ajaxSetup({}, n),
                g = h.context || h,
                v = h.context && (g.nodeType || g.jquery) ? b(g) : b.event,
                y = b.Deferred(),
                m = b.Callbacks("once memory"),
                x = h.statusCode || {},
                w = {},
                T = {},
                C = "canceled",
                E = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (c) {
                            if (!s)
                                for (s = {}; t = Nt.exec(a);) s[t[1].toLowerCase()] = t[2];
                            t = s[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return c ? a : null
                    },
                    setRequestHeader: function(e, t) {
                        return null == c && (e = T[e.toLowerCase()] = T[e.toLowerCase()] || e, w[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return null == c && (h.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (c) E.always(e[E.status]);
                            else
                                for (t in e) x[t] = [x[t], e[t]];
                        return this
                    },
                    abort: function(e) {
                        var t = e || C;
                        return i && i.abort(t), k(0, t), this
                    }
                };
            if (y.promise(E), h.url = ((t || h.url || yt.href) + "").replace(jt, yt.protocol + "//"), h.type = n.method || n.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(P) || [""], null == h.crossDomain) {
                l = r.createElement("a");
                try {
                    l.href = h.url, l.href = l.href, h.crossDomain = Ot.protocol + "//" + Ot.host != l.protocol + "//" + l.host
                } catch (e) {
                    h.crossDomain = !0
                }
            }
            if (h.data && h.processData && "string" != typeof h.data && (h.data = b.param(h.data, h.traditional)), Mt(qt, h, n, E), c) return E;
            for (p in (f = b.event && h.global) && 0 == b.active++ && b.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !At.test(h.type), o = h.url.replace(St, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(kt, "+")) : (d = h.url.slice(o.length), h.data && (h.processData || "string" == typeof h.data) && (o += (xt.test(o) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (o = o.replace(Dt, "$1"), d = (xt.test(o) ? "&" : "?") + "_=" + mt++ + d), h.url = o + d), h.ifModified && (b.lastModified[o] && E.setRequestHeader("If-Modified-Since", b.lastModified[o]), b.etag[o] && E.setRequestHeader("If-None-Match", b.etag[o])), (h.data && h.hasContent && !1 !== h.contentType || n.contentType) && E.setRequestHeader("Content-Type", h.contentType), E.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Ht + "; q=0.01" : "") : h.accepts["*"]), h.headers) E.setRequestHeader(p, h.headers[p]);
            if (h.beforeSend && (!1 === h.beforeSend.call(g, E, h) || c)) return E.abort();
            if (C = "abort", m.add(h.complete), E.done(h.success), E.fail(h.error), i = Mt(Lt, h, n, E)) {
                if (E.readyState = 1, f && v.trigger("ajaxSend", [E, h]), c) return E;
                h.async && h.timeout > 0 && (u = e.setTimeout(function() {
                    E.abort("timeout")
                }, h.timeout));
                try {
                    c = !1, i.send(w, k)
                } catch (e) {
                    if (c) throw e;
                    k(-1, e)
                }
            } else k(-1, "No Transport");

            function k(t, n, r, s) {
                var l, p, d, w, T, C = n;
                c || (c = !0, u && e.clearTimeout(u), i = void 0, a = s || "", E.readyState = t > 0 ? 4 : 0, l = t >= 200 && t < 300 || 304 === t, r && (w = function(e, t, n) {
                    for (var r, i, o, a, s = e.contents, u = e.dataTypes;
                        "*" === u[0];) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (r)
                        for (i in s)
                            if (s[i] && s[i].test(r)) {
                                u.unshift(i);
                                break
                            } if (u[0] in n) o = u[0];
                    else {
                        for (i in n) {
                            if (!u[0] || e.converters[i + " " + u[0]]) {
                                o = i;
                                break
                            }
                            a || (a = i)
                        }
                        o = o || a
                    }
                    if (o) return o !== u[0] && u.unshift(o), n[o]
                }(h, E, r)), w = function(e, t, n, r) {
                    var i, o, a, s, u, l = {},
                        c = e.dataTypes.slice();
                    if (c[1])
                        for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
                    for (o = c.shift(); o;)
                        if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
                            if ("*" === o) o = u;
                            else if ("*" !== u && u !== o) {
                        if (!(a = l[u + " " + o] || l["* " + o]))
                            for (i in l)
                                if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                                    !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
                                    break
                                } if (!0 !== a)
                            if (a && e.throws) t = a(t);
                            else try {
                                t = a(t)
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: a ? e : "No conversion from " + u + " to " + o
                                }
                            }
                    }
                    return {
                        state: "success",
                        data: t
                    }
                }(h, w, E, l), l ? (h.ifModified && ((T = E.getResponseHeader("Last-Modified")) && (b.lastModified[o] = T), (T = E.getResponseHeader("etag")) && (b.etag[o] = T)), 204 === t || "HEAD" === h.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = w.state, p = w.data, l = !(d = w.error))) : (d = C, !t && C || (C = "error", t < 0 && (t = 0))), E.status = t, E.statusText = (n || C) + "", l ? y.resolveWith(g, [p, C, E]) : y.rejectWith(g, [E, C, d]), E.statusCode(x), x = void 0, f && v.trigger(l ? "ajaxSuccess" : "ajaxError", [E, h, l ? p : d]), m.fireWith(g, [E, C]), f && (v.trigger("ajaxComplete", [E, h]), --b.active || b.event.trigger("ajaxStop")))
            }
            return E
        },
        getJSON: function(e, t, n) {
            return b.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return b.get(e, void 0, t, "script")
        }
    }), b.each(["get", "post"], function(e, t) {
        b[t] = function(e, n, r, i) {
            return g(n) && (i = i || r, r = n, n = void 0), b.ajax(b.extend({
                url: e,
                type: t,
                dataType: i,
                data: n,
                success: r
            }, b.isPlainObject(e) && e))
        }
    }), b._evalUrl = function(e) {
        return b.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            throws: !0
        })
    }, b.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (g(e) && (e = e.call(this[0])), t = b(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this
        },
        wrapInner: function(e) {
            return g(e) ? this.each(function(t) {
                b(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = b(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = g(e);
            return this.each(function(n) {
                b(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                b(this).replaceWith(this.childNodes)
            }), this
        }
    }), b.expr.pseudos.hidden = function(e) {
        return !b.expr.pseudos.visible(e)
    }, b.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, b.ajaxSettings.xhr = function() {
        try {
            return new e.XMLHttpRequest
        } catch (e) {}
    };
    var It = {
            0: 200,
            1223: 204
        },
        Wt = b.ajaxSettings.xhr();
    h.cors = !!Wt && "withCredentials" in Wt, h.ajax = Wt = !!Wt, b.ajaxTransport(function(t) {
        var n, r;
        if (h.cors || Wt && !t.crossDomain) return {
            send: function(i, o) {
                var a, s = t.xhr();
                if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                    for (a in t.xhrFields) s[a] = t.xhrFields[a];
                for (a in t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest"), i) s.setRequestHeader(a, i[a]);
                n = function(e) {
                    return function() {
                        n && (n = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(It[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                            binary: s.response
                        } : {
                            text: s.responseText
                        }, s.getAllResponseHeaders()))
                    }
                }, s.onload = n(), r = s.onerror = s.ontimeout = n("error"), void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function() {
                    4 === s.readyState && e.setTimeout(function() {
                        n && r()
                    })
                }, n = n("abort");
                try {
                    s.send(t.hasContent && t.data || null)
                } catch (e) {
                    if (n) throw e
                }
            },
            abort: function() {
                n && n()
            }
        }
    }), b.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }), b.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return b.globalEval(e), e
            }
        }
    }), b.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), b.ajaxTransport("script", function(e) {
        var t, n;
        if (e.crossDomain) return {
            send: function(i, o) {
                t = b("<script>").prop({
                    charset: e.scriptCharset,
                    src: e.url
                }).on("load error", n = function(e) {
                    t.remove(), n = null, e && o("error" === e.type ? 404 : 200, e.type)
                }), r.head.appendChild(t[0])
            },
            abort: function() {
                n && n()
            }
        }
    });
    var $t = [],
        Bt = /(=)\?(?=&|$)|\?\?/;
    b.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = $t.pop() || b.expando + "_" + mt++;
            return this[e] = !0, e
        }
    }), b.ajaxPrefilter("json jsonp", function(t, n, r) {
        var i, o, a, s = !1 !== t.jsonp && (Bt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Bt.test(t.data) && "data");
        if (s || "jsonp" === t.dataTypes[0]) return i = t.jsonpCallback = g(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Bt, "$1" + i) : !1 !== t.jsonp && (t.url += (xt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function() {
            return a || b.error(i + " was not called"), a[0]
        }, t.dataTypes[0] = "json", o = e[i], e[i] = function() {
            a = arguments
        }, r.always(function() {
            void 0 === o ? b(e).removeProp(i) : e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, $t.push(i)), a && g(o) && o(a[0]), a = o = void 0
        }), "script"
    }), h.createHTMLDocument = function() {
        var e = r.implementation.createHTMLDocument("").body;
        return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length
    }(), b.parseHTML = function(e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (h.createHTMLDocument ? ((i = (t = r.implementation.createHTMLDocument("")).createElement("base")).href = r.location.href, t.head.appendChild(i)) : t = r), a = !n && [], (o = N.exec(e)) ? [t.createElement(o[1])] : (o = ve([e], t, a), a && a.length && b(a).remove(), b.merge([], o.childNodes)));
        var i, o, a
    }, b.fn.load = function(e, t, n) {
        var r, i, o, a = this,
            s = e.indexOf(" ");
        return s > -1 && (r = ft(e.slice(s)), e = e.slice(0, s)), g(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), a.length > 0 && b.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments, a.html(r ? b("<div>").append(b.parseHTML(e)).find(r) : e)
        }).always(n && function(e, t) {
            a.each(function() {
                n.apply(this, o || [e.responseText, t, e])
            })
        }), this
    }, b.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        b.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), b.expr.pseudos.animated = function(e) {
        return b.grep(b.timers, function(t) {
            return e === t.elem
        }).length
    }, b.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, a, s, u, l = b.css(e, "position"),
                c = b(e),
                f = {};
            "static" === l && (e.style.position = "relative"), s = c.offset(), o = b.css(e, "top"), u = b.css(e, "left"), ("absolute" === l || "fixed" === l) && (o + u).indexOf("auto") > -1 ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), g(t) && (t = t.call(e, n, b.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : c.css(f)
        }
    }, b.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                b.offset.setOffset(this, e, t)
            });
            var t, n, r = this[0];
            return r ? r.getClientRects().length ? (t = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
                top: t.top + n.pageYOffset,
                left: t.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n, r = this[0],
                    i = {
                        top: 0,
                        left: 0
                    };
                if ("fixed" === b.css(r, "position")) t = r.getBoundingClientRect();
                else {
                    for (t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === b.css(e, "position");) e = e.parentNode;
                    e && e !== r && 1 === e.nodeType && ((i = b(e).offset()).top += b.css(e, "borderTopWidth", !0), i.left += b.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - i.top - b.css(r, "marginTop", !0),
                    left: t.left - i.left - b.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === b.css(e, "position");) e = e.offsetParent;
                return e || ye
            })
        }
    }), b.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var n = "pageYOffset" === t;
        b.fn[e] = function(r) {
            return F(this, function(e, r, i) {
                var o;
                if (v(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === i) return o ? o[t] : e[r];
                o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i
            }, e, r, arguments.length)
        }
    }), b.each(["top", "left"], function(e, t) {
        b.cssHooks[t] = $e(h.pixelPosition, function(e, n) {
            if (n) return n = We(e, t), Me.test(n) ? b(e).position()[t] + "px" : n
        })
    }), b.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        b.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, r) {
            b.fn[r] = function(i, o) {
                var a = arguments.length && (n || "boolean" != typeof i),
                    s = n || (!0 === i || !0 === o ? "margin" : "border");
                return F(this, function(t, n, i) {
                    var o;
                    return v(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? b.css(t, n, s) : b.style(t, n, i, s)
                }, t, a ? i : void 0, a)
            }
        })
    }), b.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
        b.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), b.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), b.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    }), b.proxy = function(e, t) {
        var n, r, i;
        if ("string" == typeof t && (n = e[t], t = e, e = n), g(e)) return r = o.call(arguments, 2), (i = function() {
            return e.apply(t || this, r.concat(o.call(arguments)))
        }).guid = e.guid = e.guid || b.guid++, i
    }, b.holdReady = function(e) {
        e ? b.readyWait++ : b.ready(!0)
    }, b.isArray = Array.isArray, b.parseJSON = JSON.parse, b.nodeName = D, b.isFunction = g, b.isWindow = v, b.camelCase = U, b.type = x, b.now = Date.now, b.isNumeric = function(e) {
        var t = b.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }, "function" == typeof define && define.amd && define("jquery", [], function() {
        return b
    });
    var Ft = e.jQuery,
        _t = e.$;
    return b.noConflict = function(t) {
        return e.$ === b && (e.$ = _t), t && e.jQuery === b && (e.jQuery = Ft), b
    }, t || (e.jQuery = e.$ = b), b
});
! function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.Popper = t()
}(this, function() {
    "use strict";

    function e(e) {
        return e && "[object Function]" === {}.toString.call(e)
    }

    function t(e, t) {
        if (1 !== e.nodeType) return [];
        var n = getComputedStyle(e, null);
        return t ? n[t] : n
    }

    function n(e) {
        return "HTML" === e.nodeName ? e : e.parentNode || e.host
    }

    function r(e) {
        if (!e) return document.body;
        switch (e.nodeName) {
            case "HTML":
            case "BODY":
                return e.ownerDocument.body;
            case "#document":
                return e.body
        }
        var o = t(e),
            i = o.overflow,
            f = o.overflowX,
            s = o.overflowY;
        return /(auto|scroll)/.test(i + s + f) ? e : r(n(e))
    }

    function o(e) {
        var n = e && e.offsetParent,
            r = n && n.nodeName;
        return r && "BODY" !== r && "HTML" !== r ? -1 !== ["TD", "TABLE"].indexOf(n.nodeName) && "static" === t(n, "position") ? o(n) : n : e ? e.ownerDocument.documentElement : document.documentElement
    }

    function i(e) {
        return null === e.parentNode ? e : i(e.parentNode)
    }

    function f(e, t) {
        if (!(e && e.nodeType && t && t.nodeType)) return document.documentElement;
        var n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
            r = n ? e : t,
            s = n ? t : e,
            a = document.createRange();
        a.setStart(r, 0), a.setEnd(s, 0);
        var p = a.commonAncestorContainer;
        if (e !== p && t !== p || r.contains(s)) return function(e) {
            var t = e.nodeName;
            return "BODY" !== t && ("HTML" === t || o(e.firstElementChild) === e)
        }(p) ? p : o(p);
        var l = i(e);
        return l.host ? f(l.host, t) : f(e, i(t).host)
    }

    function s(e) {
        var t = "top" === (1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "top") ? "scrollTop" : "scrollLeft",
            n = e.nodeName;
        if ("BODY" === n || "HTML" === n) {
            var r = e.ownerDocument.documentElement;
            return (e.ownerDocument.scrollingElement || r)[t]
        }
        return e[t]
    }

    function a(e, t) {
        var n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
            r = s(t, "top"),
            o = s(t, "left"),
            i = n ? -1 : 1;
        return e.top += r * i, e.bottom += r * i, e.left += o * i, e.right += o * i, e
    }

    function p(e, t) {
        var n = "x" === t ? "Left" : "Top",
            r = "Left" == n ? "Right" : "Bottom";
        return parseFloat(e["border" + n + "Width"], 10) + parseFloat(e["border" + r + "Width"], 10)
    }

    function l(e, t, n, r) {
        return j(t["offset" + e], t["scroll" + e], n["client" + e], n["offset" + e], n["scroll" + e], z() ? n["offset" + e] + r["margin" + ("Height" === e ? "Top" : "Left")] + r["margin" + ("Height" === e ? "Bottom" : "Right")] : 0)
    }

    function u() {
        var e = document.body,
            t = document.documentElement,
            n = z() && getComputedStyle(t);
        return {
            height: l("Height", e, t, n),
            width: l("Width", e, t, n)
        }
    }

    function c(e) {
        return J({}, e, {
            right: e.left + e.width,
            bottom: e.top + e.height
        })
    }

    function d(e) {
        var n = {};
        if (z()) try {
            n = e.getBoundingClientRect();
            var r = s(e, "top"),
                o = s(e, "left");
            n.top += r, n.left += o, n.bottom += r, n.right += o
        } catch (e) {} else n = e.getBoundingClientRect();
        var i = {
                left: n.left,
                top: n.top,
                width: n.right - n.left,
                height: n.bottom - n.top
            },
            f = "HTML" === e.nodeName ? u() : {},
            a = f.width || e.clientWidth || i.right - i.left,
            l = f.height || e.clientHeight || i.bottom - i.top,
            d = e.offsetWidth - a,
            h = e.offsetHeight - l;
        if (d || h) {
            var m = t(e);
            d -= p(m, "x"), h -= p(m, "y"), i.width -= d, i.height -= h
        }
        return c(i)
    }

    function h(e, n) {
        var o = z(),
            i = "HTML" === n.nodeName,
            f = d(e),
            s = d(n),
            p = r(e),
            l = t(n),
            u = parseFloat(l.borderTopWidth, 10),
            h = parseFloat(l.borderLeftWidth, 10),
            m = c({
                top: f.top - s.top - u,
                left: f.left - s.left - h,
                width: f.width,
                height: f.height
            });
        if (m.marginTop = 0, m.marginLeft = 0, !o && i) {
            var g = parseFloat(l.marginTop, 10),
                v = parseFloat(l.marginLeft, 10);
            m.top -= u - g, m.bottom -= u - g, m.left -= h - v, m.right -= h - v, m.marginTop = g, m.marginLeft = v
        }
        return (o ? n.contains(p) : n === p && "BODY" !== p.nodeName) && (m = a(m, n)), m
    }

    function m(e) {
        var t = e.ownerDocument.documentElement,
            n = h(e, t),
            r = j(t.clientWidth, window.innerWidth || 0),
            o = j(t.clientHeight, window.innerHeight || 0),
            i = s(t),
            f = s(t, "left");
        return c({
            top: i - n.top + n.marginTop,
            left: f - n.left + n.marginLeft,
            width: r,
            height: o
        })
    }

    function g(e) {
        var r = e.nodeName;
        return "BODY" !== r && "HTML" !== r && ("fixed" === t(e, "position") || g(n(e)))
    }

    function v(e, t, o, i) {
        var s = {
                top: 0,
                left: 0
            },
            a = f(e, t);
        if ("viewport" === i) s = m(a);
        else {
            var p;
            "scrollParent" === i ? "BODY" === (p = r(n(t))).nodeName && (p = e.ownerDocument.documentElement) : p = "window" === i ? e.ownerDocument.documentElement : i;
            var l = h(p, a);
            if ("HTML" !== p.nodeName || g(a)) s = l;
            else {
                var c = u(),
                    d = c.height,
                    v = c.width;
                s.top += l.top - l.marginTop, s.bottom = d + l.top, s.left += l.left - l.marginLeft, s.right = v + l.left
            }
        }
        return s.left += o, s.top += o, s.right -= o, s.bottom -= o, s
    }

    function b(e) {
        return e.width * e.height
    }

    function w(e, t, n, r, o) {
        var i = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
        if (-1 === e.indexOf("auto")) return e;
        var f = v(n, r, i, o),
            s = {
                top: {
                    width: f.width,
                    height: t.top - f.top
                },
                right: {
                    width: f.right - t.right,
                    height: f.height
                },
                bottom: {
                    width: f.width,
                    height: f.bottom - t.bottom
                },
                left: {
                    width: t.left - f.left,
                    height: f.height
                }
            },
            a = Object.keys(s).map(function(e) {
                return J({
                    key: e
                }, s[e], {
                    area: b(s[e])
                })
            }).sort(function(e, t) {
                return t.area - e.area
            }),
            p = a.filter(function(e) {
                var t = e.width,
                    r = e.height;
                return t >= n.clientWidth && r >= n.clientHeight
            }),
            l = 0 < p.length ? p[0].key : a[0].key,
            u = e.split("-")[1];
        return l + (u ? "-" + u : "")
    }

    function y(e, t, n) {
        return h(n, f(t, n))
    }

    function E(e) {
        var t = getComputedStyle(e),
            n = parseFloat(t.marginTop) + parseFloat(t.marginBottom),
            r = parseFloat(t.marginLeft) + parseFloat(t.marginRight);
        return {
            width: e.offsetWidth + r,
            height: e.offsetHeight + n
        }
    }

    function O(e) {
        var t = {
            left: "right",
            right: "left",
            bottom: "top",
            top: "bottom"
        };
        return e.replace(/left|right|bottom|top/g, function(e) {
            return t[e]
        })
    }

    function x(e, t, n) {
        n = n.split("-")[0];
        var r = E(e),
            o = {
                width: r.width,
                height: r.height
            },
            i = -1 !== ["right", "left"].indexOf(n),
            f = i ? "top" : "left",
            s = i ? "left" : "top",
            a = i ? "height" : "width",
            p = i ? "width" : "height";
        return o[f] = t[f] + t[a] / 2 - r[a] / 2, o[s] = n === s ? t[s] - r[p] : t[O(s)], o
    }

    function L(e, t) {
        return Array.prototype.find ? e.find(t) : e.filter(t)[0]
    }

    function T(t, n, r) {
        return (void 0 === r ? t : t.slice(0, function(e, t, n) {
            if (Array.prototype.findIndex) return e.findIndex(function(e) {
                return e[t] === n
            });
            var r = L(e, function(e) {
                return e[t] === n
            });
            return e.indexOf(r)
        }(t, "name", r))).forEach(function(t) {
            t.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
            var r = t.function || t.fn;
            t.enabled && e(r) && (n.offsets.popper = c(n.offsets.popper), n.offsets.reference = c(n.offsets.reference), n = r(n, t))
        }), n
    }

    function D(e, t) {
        return e.some(function(e) {
            var n = e.name;
            return e.enabled && n === t
        })
    }

    function N(e) {
        for (var t = [!1, "ms", "Webkit", "Moz", "O"], n = e.charAt(0).toUpperCase() + e.slice(1), r = 0; r < t.length - 1; r++) {
            var o = t[r],
                i = o ? "" + o + n : e;
            if (void 0 !== document.body.style[i]) return i
        }
        return null
    }

    function k(e) {
        var t = e.ownerDocument;
        return t ? t.defaultView : window
    }

    function B(e, t, n, o) {
        n.updateBound = o, k(e).addEventListener("resize", n.updateBound, {
            passive: !0
        });
        var i = r(e);
        return function e(t, n, o, i) {
            var f = "BODY" === t.nodeName,
                s = f ? t.ownerDocument.defaultView : t;
            s.addEventListener(n, o, {
                passive: !0
            }), f || e(r(s.parentNode), n, o, i), i.push(s)
        }(i, "scroll", n.updateBound, n.scrollParents), n.scrollElement = i, n.eventsEnabled = !0, n
    }

    function H() {
        var e, t;
        this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = (e = this.reference, t = this.state, k(e).removeEventListener("resize", t.updateBound), t.scrollParents.forEach(function(e) {
            e.removeEventListener("scroll", t.updateBound)
        }), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t))
    }

    function W(e) {
        return "" !== e && !isNaN(parseFloat(e)) && isFinite(e)
    }

    function A(e, t) {
        Object.keys(t).forEach(function(n) {
            var r = ""; - 1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(n) && W(t[n]) && (r = "px"), e.style[n] = t[n] + r
        })
    }

    function C(e, t, n) {
        var r = L(e, function(e) {
                return e.name === t
            }),
            o = !!r && e.some(function(e) {
                return e.name === n && e.enabled && e.order < r.order
            });
        if (!o) {
            var i = "`" + t + "`";
            console.warn("`" + n + "` modifier is required by " + i + " modifier in order to work, be sure to include it before " + i + "!")
        }
        return o
    }

    function F(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
            n = Q.indexOf(e),
            r = Q.slice(n + 1).concat(Q.slice(0, n));
        return t ? r.reverse() : r
    }

    function P(e, t, n, r) {
        var o = [0, 0],
            i = -1 !== ["right", "left"].indexOf(r),
            f = e.split(/(\+|\-)/).map(function(e) {
                return e.trim()
            }),
            s = f.indexOf(L(f, function(e) {
                return -1 !== e.search(/,|\s/)
            }));
        f[s] && -1 === f[s].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
        var a = /\s*,\s*|\s+/,
            p = -1 === s ? [f] : [f.slice(0, s).concat([f[s].split(a)[0]]), [f[s].split(a)[1]].concat(f.slice(s + 1))];
        return (p = p.map(function(e, r) {
            var o = (1 === r ? !i : i) ? "height" : "width",
                f = !1;
            return e.reduce(function(e, t) {
                return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t) ? (e[e.length - 1] = t, f = !0, e) : f ? (e[e.length - 1] += t, f = !1, e) : e.concat(t)
            }, []).map(function(e) {
                return function(e, t, n, r) {
                    var o = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                        i = +o[1],
                        f = o[2];
                    if (!i) return e;
                    if (0 === f.indexOf("%")) {
                        var s;
                        switch (f) {
                            case "%p":
                                s = n;
                                break;
                            case "%":
                            case "%r":
                            default:
                                s = r
                        }
                        return c(s)[t] / 100 * i
                    }
                    return "vh" === f || "vw" === f ? ("vh" === f ? j(document.documentElement.clientHeight, window.innerHeight || 0) : j(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * i : i
                }(e, o, t, n)
            })
        })).forEach(function(e, t) {
            e.forEach(function(n, r) {
                W(n) && (o[t] += n * ("-" === e[r - 1] ? -1 : 1))
            })
        }), o
    }
    for (var S = Math.min, M = Math.floor, j = Math.max, R = "undefined" != typeof window && "undefined" != typeof document, U = ["Edge", "Trident", "Firefox"], Y = 0, I = 0; I < U.length; I += 1)
        if (R && 0 <= navigator.userAgent.indexOf(U[I])) {
            Y = 1;
            break
        } var q, V = R && window.Promise ? function(e) {
            var t = !1;
            return function() {
                t || (t = !0, window.Promise.resolve().then(function() {
                    t = !1, e()
                }))
            }
        } : function(e) {
            var t = !1;
            return function() {
                t || (t = !0, setTimeout(function() {
                    t = !1, e()
                }, Y))
            }
        },
        z = function() {
            return null == q && (q = -1 !== navigator.appVersion.indexOf("MSIE 10")), q
        },
        G = function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        },
        _ = function() {
            function e(e, t) {
                for (var n, r = 0; r < t.length; r++)(n = t[r]).enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
            return function(t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
        X = function(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        },
        J = Object.assign || function(e) {
            for (var t, n = 1; n < arguments.length; n++)
                for (var r in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            return e
        },
        K = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
        Q = K.slice(3),
        Z = "flip",
        $ = "clockwise",
        ee = "counterclockwise",
        te = function() {
            function t(n, r) {
                var o = this,
                    i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
                G(this, t), this.scheduleUpdate = function() {
                    return requestAnimationFrame(o.update)
                }, this.update = V(this.update.bind(this)), this.options = J({}, t.Defaults, i), this.state = {
                    isDestroyed: !1,
                    isCreated: !1,
                    scrollParents: []
                }, this.reference = n && n.jquery ? n[0] : n, this.popper = r && r.jquery ? r[0] : r, this.options.modifiers = {}, Object.keys(J({}, t.Defaults.modifiers, i.modifiers)).forEach(function(e) {
                    o.options.modifiers[e] = J({}, t.Defaults.modifiers[e] || {}, i.modifiers ? i.modifiers[e] : {})
                }), this.modifiers = Object.keys(this.options.modifiers).map(function(e) {
                    return J({
                        name: e
                    }, o.options.modifiers[e])
                }).sort(function(e, t) {
                    return e.order - t.order
                }), this.modifiers.forEach(function(t) {
                    t.enabled && e(t.onLoad) && t.onLoad(o.reference, o.popper, o.options, t, o.state)
                }), this.update();
                var f = this.options.eventsEnabled;
                f && this.enableEventListeners(), this.state.eventsEnabled = f
            }
            return _(t, [{
                key: "update",
                value: function() {
                    return function() {
                        if (!this.state.isDestroyed) {
                            var e = {
                                instance: this,
                                styles: {},
                                arrowStyles: {},
                                attributes: {},
                                flipped: !1,
                                offsets: {}
                            };
                            e.offsets.reference = y(this.state, this.popper, this.reference), e.placement = w(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.offsets.popper = x(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = "absolute", e = T(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e))
                        }
                    }.call(this)
                }
            }, {
                key: "destroy",
                value: function() {
                    return function() {
                        return this.state.isDestroyed = !0, D(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.left = "", this.popper.style.position = "", this.popper.style.top = "", this.popper.style[N("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this
                    }.call(this)
                }
            }, {
                key: "enableEventListeners",
                value: function() {
                    return function() {
                        this.state.eventsEnabled || (this.state = B(this.reference, this.options, this.state, this.scheduleUpdate))
                    }.call(this)
                }
            }, {
                key: "disableEventListeners",
                value: function() {
                    return H.call(this)
                }
            }]), t
        }();
    return te.Utils = ("undefined" == typeof window ? global : window).PopperUtils, te.placements = K, te.Defaults = {
        placement: "bottom",
        eventsEnabled: !0,
        removeOnDestroy: !1,
        onCreate: function() {},
        onUpdate: function() {},
        modifiers: {
            shift: {
                order: 100,
                enabled: !0,
                fn: function(e) {
                    var t = e.placement,
                        n = t.split("-")[0],
                        r = t.split("-")[1];
                    if (r) {
                        var o = e.offsets,
                            i = o.reference,
                            f = o.popper,
                            s = -1 !== ["bottom", "top"].indexOf(n),
                            a = s ? "left" : "top",
                            p = s ? "width" : "height",
                            l = {
                                start: X({}, a, i[a]),
                                end: X({}, a, i[a] + i[p] - f[p])
                            };
                        e.offsets.popper = J({}, f, l[r])
                    }
                    return e
                }
            },
            offset: {
                order: 200,
                enabled: !0,
                fn: function(e, t) {
                    var n, r = t.offset,
                        o = e.placement,
                        i = e.offsets,
                        f = i.popper,
                        s = i.reference,
                        a = o.split("-")[0];
                    return n = W(+r) ? [+r, 0] : P(r, f, s, a), "left" === a ? (f.top += n[0], f.left -= n[1]) : "right" === a ? (f.top += n[0], f.left += n[1]) : "top" === a ? (f.left += n[0], f.top -= n[1]) : "bottom" === a && (f.left += n[0], f.top += n[1]), e.popper = f, e
                },
                offset: 0
            },
            preventOverflow: {
                order: 300,
                enabled: !0,
                fn: function(e, t) {
                    var n = t.boundariesElement || o(e.instance.popper);
                    e.instance.reference === n && (n = o(n));
                    var r = v(e.instance.popper, e.instance.reference, t.padding, n);
                    t.boundaries = r;
                    var i = t.priority,
                        f = e.offsets.popper,
                        s = {
                            primary: function(e) {
                                var n = f[e];
                                return f[e] < r[e] && !t.escapeWithReference && (n = j(f[e], r[e])), X({}, e, n)
                            },
                            secondary: function(e) {
                                var n = "right" === e ? "left" : "top",
                                    o = f[n];
                                return f[e] > r[e] && !t.escapeWithReference && (o = S(f[n], r[e] - ("right" === e ? f.width : f.height))), X({}, n, o)
                            }
                        };
                    return i.forEach(function(e) {
                        var t = -1 === ["left", "top"].indexOf(e) ? "secondary" : "primary";
                        f = J({}, f, s[t](e))
                    }), e.offsets.popper = f, e
                },
                priority: ["left", "right", "top", "bottom"],
                padding: 5,
                boundariesElement: "scrollParent"
            },
            keepTogether: {
                order: 400,
                enabled: !0,
                fn: function(e) {
                    var t = e.offsets,
                        n = t.popper,
                        r = t.reference,
                        o = e.placement.split("-")[0],
                        i = M,
                        f = -1 !== ["top", "bottom"].indexOf(o),
                        s = f ? "right" : "bottom",
                        a = f ? "left" : "top",
                        p = f ? "width" : "height";
                    return n[s] < i(r[a]) && (e.offsets.popper[a] = i(r[a]) - n[p]), n[a] > i(r[s]) && (e.offsets.popper[a] = i(r[s])), e
                }
            },
            arrow: {
                order: 500,
                enabled: !0,
                fn: function(e, n) {
                    var r;
                    if (!C(e.instance.modifiers, "arrow", "keepTogether")) return e;
                    var o = n.element;
                    if ("string" == typeof o) {
                        if (!(o = e.instance.popper.querySelector(o))) return e
                    } else if (!e.instance.popper.contains(o)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), e;
                    var i = e.placement.split("-")[0],
                        f = e.offsets,
                        s = f.popper,
                        a = f.reference,
                        p = -1 !== ["left", "right"].indexOf(i),
                        l = p ? "height" : "width",
                        u = p ? "Top" : "Left",
                        d = u.toLowerCase(),
                        h = p ? "left" : "top",
                        m = p ? "bottom" : "right",
                        g = E(o)[l];
                    a[m] - g < s[d] && (e.offsets.popper[d] -= s[d] - (a[m] - g)), a[d] + g > s[m] && (e.offsets.popper[d] += a[d] + g - s[m]), e.offsets.popper = c(e.offsets.popper);
                    var v = a[d] + a[l] / 2 - g / 2,
                        b = t(e.instance.popper),
                        w = parseFloat(b["margin" + u], 10),
                        y = parseFloat(b["border" + u + "Width"], 10),
                        O = v - e.offsets.popper[d] - w - y;
                    return O = j(S(s[l] - g, O), 0), e.arrowElement = o, e.offsets.arrow = (X(r = {}, d, Math.round(O)), X(r, h, ""), r), e
                },
                element: "[x-arrow]"
            },
            flip: {
                order: 600,
                enabled: !0,
                fn: function(e, t) {
                    if (D(e.instance.modifiers, "inner")) return e;
                    if (e.flipped && e.placement === e.originalPlacement) return e;
                    var n = v(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement),
                        r = e.placement.split("-")[0],
                        o = O(r),
                        i = e.placement.split("-")[1] || "",
                        f = [];
                    switch (t.behavior) {
                        case Z:
                            f = [r, o];
                            break;
                        case $:
                            f = F(r);
                            break;
                        case ee:
                            f = F(r, !0);
                            break;
                        default:
                            f = t.behavior
                    }
                    return f.forEach(function(s, a) {
                        if (r !== s || f.length === a + 1) return e;
                        r = e.placement.split("-")[0], o = O(r);
                        var p = e.offsets.popper,
                            l = e.offsets.reference,
                            u = M,
                            c = "left" === r && u(p.right) > u(l.left) || "right" === r && u(p.left) < u(l.right) || "top" === r && u(p.bottom) > u(l.top) || "bottom" === r && u(p.top) < u(l.bottom),
                            d = u(p.left) < u(n.left),
                            h = u(p.right) > u(n.right),
                            m = u(p.top) < u(n.top),
                            g = u(p.bottom) > u(n.bottom),
                            v = "left" === r && d || "right" === r && h || "top" === r && m || "bottom" === r && g,
                            b = -1 !== ["top", "bottom"].indexOf(r),
                            w = !!t.flipVariations && (b && "start" === i && d || b && "end" === i && h || !b && "start" === i && m || !b && "end" === i && g);
                        (c || v || w) && (e.flipped = !0, (c || v) && (r = f[a + 1]), w && (i = function(e) {
                            return "end" === e ? "start" : "start" === e ? "end" : e
                        }(i)), e.placement = r + (i ? "-" + i : ""), e.offsets.popper = J({}, e.offsets.popper, x(e.instance.popper, e.offsets.reference, e.placement)), e = T(e.instance.modifiers, e, "flip"))
                    }), e
                },
                behavior: "flip",
                padding: 5,
                boundariesElement: "viewport"
            },
            inner: {
                order: 700,
                enabled: !1,
                fn: function(e) {
                    var t = e.placement,
                        n = t.split("-")[0],
                        r = e.offsets,
                        o = r.popper,
                        i = r.reference,
                        f = -1 !== ["left", "right"].indexOf(n),
                        s = -1 === ["top", "left"].indexOf(n);
                    return o[f ? "left" : "top"] = i[n] - (s ? o[f ? "width" : "height"] : 0), e.placement = O(t), e.offsets.popper = c(o), e
                }
            },
            hide: {
                order: 800,
                enabled: !0,
                fn: function(e) {
                    if (!C(e.instance.modifiers, "hide", "preventOverflow")) return e;
                    var t = e.offsets.reference,
                        n = L(e.instance.modifiers, function(e) {
                            return "preventOverflow" === e.name
                        }).boundaries;
                    if (t.bottom < n.top || t.left > n.right || t.top > n.bottom || t.right < n.left) {
                        if (!0 === e.hide) return e;
                        e.hide = !0, e.attributes["x-out-of-boundaries"] = ""
                    } else {
                        if (!1 === e.hide) return e;
                        e.hide = !1, e.attributes["x-out-of-boundaries"] = !1
                    }
                    return e
                }
            },
            computeStyle: {
                order: 850,
                enabled: !0,
                fn: function(e, t) {
                    var n = t.x,
                        r = t.y,
                        i = e.offsets.popper,
                        f = L(e.instance.modifiers, function(e) {
                            return "applyStyle" === e.name
                        }).gpuAcceleration;
                    void 0 !== f && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                    var s, a, p = void 0 === f ? t.gpuAcceleration : f,
                        l = d(o(e.instance.popper)),
                        u = {
                            position: i.position
                        },
                        c = {
                            left: M(i.left),
                            top: M(i.top),
                            bottom: M(i.bottom),
                            right: M(i.right)
                        },
                        h = "bottom" === n ? "top" : "bottom",
                        m = "right" === r ? "left" : "right",
                        g = N("transform");
                    if (a = "bottom" == h ? -l.height + c.bottom : c.top, s = "right" == m ? -l.width + c.right : c.left, p && g) u[g] = "translate3d(" + s + "px, " + a + "px, 0)", u[h] = 0, u[m] = 0, u.willChange = "transform";
                    else {
                        var v = "bottom" == h ? -1 : 1,
                            b = "right" == m ? -1 : 1;
                        u[h] = a * v, u[m] = s * b, u.willChange = h + ", " + m
                    }
                    var w = {
                        "x-placement": e.placement
                    };
                    return e.attributes = J({}, w, e.attributes), e.styles = J({}, u, e.styles), e.arrowStyles = J({}, e.offsets.arrow, e.arrowStyles), e
                },
                gpuAcceleration: !0,
                x: "bottom",
                y: "right"
            },
            applyStyle: {
                order: 900,
                enabled: !0,
                fn: function(e) {
                    return A(e.instance.popper, e.styles),
                        function(e, t) {
                            Object.keys(t).forEach(function(n) {
                                !1 === t[n] ? e.removeAttribute(n) : e.setAttribute(n, t[n])
                            })
                        }(e.instance.popper, e.attributes), e.arrowElement && Object.keys(e.arrowStyles).length && A(e.arrowElement, e.arrowStyles), e
                },
                onLoad: function(e, t, n, r, o) {
                    var i = y(0, t, e),
                        f = w(n.placement, i, t, e, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
                    return t.setAttribute("x-placement", f), A(t, {
                        position: "absolute"
                    }), n
                },
                gpuAcceleration: void 0
            }
        }
    }, te
});
! function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports, require("jquery"), require("popper.js")) : "function" == typeof define && define.amd ? define(["exports", "jquery", "popper.js"], e) : e(t.bootstrap = {}, t.jQuery, t.Popper)
}(this, function(t, e, n) {
    "use strict";

    function i(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
    }

    function r(t, e, n) {
        return e && i(t.prototype, e), n && i(t, n), t
    }

    function o(t, e, n) {
        return e in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n, t
    }

    function s(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {},
                i = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
                return Object.getOwnPropertyDescriptor(n, t).enumerable
            }))), i.forEach(function(e) {
                o(t, e, n[e])
            })
        }
        return t
    }
    e = e && e.hasOwnProperty("default") ? e.default : e, n = n && n.hasOwnProperty("default") ? n.default : n;
    var a = function(t) {
            var e = "transitionend";

            function n(e) {
                var n = this,
                    r = !1;
                return t(this).one(i.TRANSITION_END, function() {
                    r = !0
                }), setTimeout(function() {
                    r || i.triggerTransitionEnd(n)
                }, e), this
            }
            var i = {
                TRANSITION_END: "bsTransitionEnd",
                getUID: function(t) {
                    do {
                        t += ~~(1e6 * Math.random())
                    } while (document.getElementById(t));
                    return t
                },
                getSelectorFromElement: function(t) {
                    var e = t.getAttribute("data-target");
                    e && "#" !== e || (e = t.getAttribute("href") || "");
                    try {
                        return document.querySelector(e) ? e : null
                    } catch (t) {
                        return null
                    }
                },
                getTransitionDurationFromElement: function(e) {
                    if (!e) return 0;
                    var n = t(e).css("transition-duration");
                    return parseFloat(n) ? (n = n.split(",")[0], 1e3 * parseFloat(n)) : 0
                },
                reflow: function(t) {
                    return t.offsetHeight
                },
                triggerTransitionEnd: function(n) {
                    t(n).trigger(e)
                },
                supportsTransitionEnd: function() {
                    return Boolean(e)
                },
                isElement: function(t) {
                    return (t[0] || t).nodeType
                },
                typeCheckConfig: function(t, e, n) {
                    for (var r in n)
                        if (Object.prototype.hasOwnProperty.call(n, r)) {
                            var o = n[r],
                                s = e[r],
                                a = s && i.isElement(s) ? "element" : (l = s, {}.toString.call(l).match(/\s([a-z]+)/i)[1].toLowerCase());
                            if (!new RegExp(o).test(a)) throw new Error(t.toUpperCase() + ': Option "' + r + '" provided type "' + a + '" but expected type "' + o + '".')
                        } var l
                }
            };
            return t.fn.emulateTransitionEnd = n, t.event.special[i.TRANSITION_END] = {
                bindType: e,
                delegateType: e,
                handle: function(e) {
                    if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
                }
            }, i
        }(e),
        l = function(t) {
            var e = t.fn.alert,
                n = {
                    CLOSE: "close.bs.alert",
                    CLOSED: "closed.bs.alert",
                    CLICK_DATA_API: "click.bs.alert.data-api"
                },
                i = "alert",
                o = "fade",
                s = "show",
                l = function() {
                    function e(t) {
                        this._element = t
                    }
                    var l = e.prototype;
                    return l.close = function(t) {
                        var e = this._element;
                        t && (e = this._getRootElement(t)), this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e)
                    }, l.dispose = function() {
                        t.removeData(this._element, "bs.alert"), this._element = null
                    }, l._getRootElement = function(e) {
                        var n = a.getSelectorFromElement(e),
                            r = !1;
                        return n && (r = document.querySelector(n)), r || (r = t(e).closest("." + i)[0]), r
                    }, l._triggerCloseEvent = function(e) {
                        var i = t.Event(n.CLOSE);
                        return t(e).trigger(i), i
                    }, l._removeElement = function(e) {
                        var n = this;
                        if (t(e).removeClass(s), t(e).hasClass(o)) {
                            var i = a.getTransitionDurationFromElement(e);
                            t(e).one(a.TRANSITION_END, function(t) {
                                return n._destroyElement(e, t)
                            }).emulateTransitionEnd(i)
                        } else this._destroyElement(e)
                    }, l._destroyElement = function(e) {
                        t(e).detach().trigger(n.CLOSED).remove()
                    }, e._jQueryInterface = function(n) {
                        return this.each(function() {
                            var i = t(this),
                                r = i.data("bs.alert");
                            r || (r = new e(this), i.data("bs.alert", r)), "close" === n && r[n](this)
                        })
                    }, e._handleDismiss = function(t) {
                        return function(e) {
                            e && e.preventDefault(), t.close(this)
                        }
                    }, r(e, null, [{
                        key: "VERSION",
                        get: function() {
                            return "4.1.3"
                        }
                    }]), e
                }();
            return t(document).on(n.CLICK_DATA_API, '[data-dismiss="alert"]', l._handleDismiss(new l)), t.fn.alert = l._jQueryInterface, t.fn.alert.Constructor = l, t.fn.alert.noConflict = function() {
                return t.fn.alert = e, l._jQueryInterface
            }, l
        }(e),
        c = function(t) {
            var e = "button",
                n = t.fn[e],
                i = "active",
                o = "btn",
                s = "focus",
                a = '[data-toggle^="button"]',
                l = '[data-toggle="buttons"]',
                c = "input",
                h = ".active",
                u = ".btn",
                d = {
                    CLICK_DATA_API: "click.bs.button.data-api",
                    FOCUS_BLUR_DATA_API: "focus.bs.button.data-api blur.bs.button.data-api"
                },
                f = function() {
                    function e(t) {
                        this._element = t
                    }
                    var n = e.prototype;
                    return n.toggle = function() {
                        var e = !0,
                            n = !0,
                            r = t(this._element).closest(l)[0];
                        if (r) {
                            var o = this._element.querySelector(c);
                            if (o) {
                                if ("radio" === o.type)
                                    if (o.checked && this._element.classList.contains(i)) e = !1;
                                    else {
                                        var s = r.querySelector(h);
                                        s && t(s).removeClass(i)
                                    } if (e) {
                                    if (o.hasAttribute("disabled") || r.hasAttribute("disabled") || o.classList.contains("disabled") || r.classList.contains("disabled")) return;
                                    o.checked = !this._element.classList.contains(i), t(o).trigger("change")
                                }
                                o.focus(), n = !1
                            }
                        }
                        n && this._element.setAttribute("aria-pressed", !this._element.classList.contains(i)), e && t(this._element).toggleClass(i)
                    }, n.dispose = function() {
                        t.removeData(this._element, "bs.button"), this._element = null
                    }, e._jQueryInterface = function(n) {
                        return this.each(function() {
                            var i = t(this).data("bs.button");
                            i || (i = new e(this), t(this).data("bs.button", i)), "toggle" === n && i[n]()
                        })
                    }, r(e, null, [{
                        key: "VERSION",
                        get: function() {
                            return "4.1.3"
                        }
                    }]), e
                }();
            return t(document).on(d.CLICK_DATA_API, a, function(e) {
                e.preventDefault();
                var n = e.target;
                t(n).hasClass(o) || (n = t(n).closest(u)), f._jQueryInterface.call(t(n), "toggle")
            }).on(d.FOCUS_BLUR_DATA_API, a, function(e) {
                var n = t(e.target).closest(u)[0];
                t(n).toggleClass(s, /^focus(in)?$/.test(e.type))
            }), t.fn[e] = f._jQueryInterface, t.fn[e].Constructor = f, t.fn[e].noConflict = function() {
                return t.fn[e] = n, f._jQueryInterface
            }, f
        }(e),
        h = function(t) {
            var e = "carousel",
                n = "bs.carousel",
                i = "." + n,
                o = t.fn[e],
                l = {
                    interval: 5e3,
                    keyboard: !0,
                    slide: !1,
                    pause: "hover",
                    wrap: !0
                },
                c = {
                    interval: "(number|boolean)",
                    keyboard: "boolean",
                    slide: "(boolean|string)",
                    pause: "(string|boolean)",
                    wrap: "boolean"
                },
                h = "next",
                u = "prev",
                d = "left",
                f = "right",
                _ = {
                    SLIDE: "slide" + i,
                    SLID: "slid" + i,
                    KEYDOWN: "keydown" + i,
                    MOUSEENTER: "mouseenter" + i,
                    MOUSELEAVE: "mouseleave" + i,
                    TOUCHEND: "touchend" + i,
                    LOAD_DATA_API: "load.bs.carousel.data-api",
                    CLICK_DATA_API: "click.bs.carousel.data-api"
                },
                g = "carousel",
                m = "active",
                p = "slide",
                v = "carousel-item-right",
                E = "carousel-item-left",
                y = "carousel-item-next",
                T = "carousel-item-prev",
                b = {
                    ACTIVE: ".active",
                    ACTIVE_ITEM: ".active.carousel-item",
                    ITEM: ".carousel-item",
                    NEXT_PREV: ".carousel-item-next, .carousel-item-prev",
                    INDICATORS: ".carousel-indicators",
                    DATA_SLIDE: "[data-slide], [data-slide-to]",
                    DATA_RIDE: '[data-ride="carousel"]'
                },
                C = function() {
                    function o(e, n) {
                        this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this._config = this._getConfig(n), this._element = t(e)[0], this._indicatorsElement = this._element.querySelector(b.INDICATORS), this._addEventListeners()
                    }
                    var C = o.prototype;
                    return C.next = function() {
                        this._isSliding || this._slide(h)
                    }, C.nextWhenVisible = function() {
                        !document.hidden && t(this._element).is(":visible") && "hidden" !== t(this._element).css("visibility") && this.next()
                    }, C.prev = function() {
                        this._isSliding || this._slide(u)
                    }, C.pause = function(t) {
                        t || (this._isPaused = !0), this._element.querySelector(b.NEXT_PREV) && (a.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
                    }, C.cycle = function(t) {
                        t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
                    }, C.to = function(e) {
                        var n = this;
                        this._activeElement = this._element.querySelector(b.ACTIVE_ITEM);
                        var i = this._getItemIndex(this._activeElement);
                        if (!(e > this._items.length - 1 || e < 0))
                            if (this._isSliding) t(this._element).one(_.SLID, function() {
                                return n.to(e)
                            });
                            else {
                                if (i === e) return this.pause(), void this.cycle();
                                var r = e > i ? h : u;
                                this._slide(r, this._items[e])
                            }
                    }, C.dispose = function() {
                        t(this._element).off(i), t.removeData(this._element, n), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
                    }, C._getConfig = function(t) {
                        return t = s({}, l, t), a.typeCheckConfig(e, t, c), t
                    }, C._addEventListeners = function() {
                        var e = this;
                        this._config.keyboard && t(this._element).on(_.KEYDOWN, function(t) {
                            return e._keydown(t)
                        }), "hover" === this._config.pause && (t(this._element).on(_.MOUSEENTER, function(t) {
                            return e.pause(t)
                        }).on(_.MOUSELEAVE, function(t) {
                            return e.cycle(t)
                        }), "ontouchstart" in document.documentElement && t(this._element).on(_.TOUCHEND, function() {
                            e.pause(), e.touchTimeout && clearTimeout(e.touchTimeout), e.touchTimeout = setTimeout(function(t) {
                                return e.cycle(t)
                            }, 500 + e._config.interval)
                        }))
                    }, C._keydown = function(t) {
                        if (!/input|textarea/i.test(t.target.tagName)) switch (t.which) {
                            case 37:
                                t.preventDefault(), this.prev();
                                break;
                            case 39:
                                t.preventDefault(), this.next()
                        }
                    }, C._getItemIndex = function(t) {
                        return this._items = t && t.parentNode ? [].slice.call(t.parentNode.querySelectorAll(b.ITEM)) : [], this._items.indexOf(t)
                    }, C._getItemByDirection = function(t, e) {
                        var n = t === h,
                            i = t === u,
                            r = this._getItemIndex(e),
                            o = this._items.length - 1;
                        if ((i && 0 === r || n && r === o) && !this._config.wrap) return e;
                        var s = (r + (t === u ? -1 : 1)) % this._items.length;
                        return -1 === s ? this._items[this._items.length - 1] : this._items[s]
                    }, C._triggerSlideEvent = function(e, n) {
                        var i = this._getItemIndex(e),
                            r = this._getItemIndex(this._element.querySelector(b.ACTIVE_ITEM)),
                            o = t.Event(_.SLIDE, {
                                relatedTarget: e,
                                direction: n,
                                from: r,
                                to: i
                            });
                        return t(this._element).trigger(o), o
                    }, C._setActiveIndicatorElement = function(e) {
                        if (this._indicatorsElement) {
                            var n = [].slice.call(this._indicatorsElement.querySelectorAll(b.ACTIVE));
                            t(n).removeClass(m);
                            var i = this._indicatorsElement.children[this._getItemIndex(e)];
                            i && t(i).addClass(m)
                        }
                    }, C._slide = function(e, n) {
                        var i, r, o, s = this,
                            l = this._element.querySelector(b.ACTIVE_ITEM),
                            c = this._getItemIndex(l),
                            u = n || l && this._getItemByDirection(e, l),
                            g = this._getItemIndex(u),
                            C = Boolean(this._interval);
                        if (e === h ? (i = E, r = y, o = d) : (i = v, r = T, o = f), u && t(u).hasClass(m)) this._isSliding = !1;
                        else if (!this._triggerSlideEvent(u, o).isDefaultPrevented() && l && u) {
                            this._isSliding = !0, C && this.pause(), this._setActiveIndicatorElement(u);
                            var I = t.Event(_.SLID, {
                                relatedTarget: u,
                                direction: o,
                                from: c,
                                to: g
                            });
                            if (t(this._element).hasClass(p)) {
                                t(u).addClass(r), a.reflow(u), t(l).addClass(i), t(u).addClass(i);
                                var S = a.getTransitionDurationFromElement(l);
                                t(l).one(a.TRANSITION_END, function() {
                                    t(u).removeClass(i + " " + r).addClass(m), t(l).removeClass(m + " " + r + " " + i), s._isSliding = !1, setTimeout(function() {
                                        return t(s._element).trigger(I)
                                    }, 0)
                                }).emulateTransitionEnd(S)
                            } else t(l).removeClass(m), t(u).addClass(m), this._isSliding = !1, t(this._element).trigger(I);
                            C && this.cycle()
                        }
                    }, o._jQueryInterface = function(e) {
                        return this.each(function() {
                            var i = t(this).data(n),
                                r = s({}, l, t(this).data());
                            "object" == typeof e && (r = s({}, r, e));
                            var a = "string" == typeof e ? e : r.slide;
                            if (i || (i = new o(this, r), t(this).data(n, i)), "number" == typeof e) i.to(e);
                            else if ("string" == typeof a) {
                                if (void 0 === i[a]) throw new TypeError('No method named "' + a + '"');
                                i[a]()
                            } else r.interval && (i.pause(), i.cycle())
                        })
                    }, o._dataApiClickHandler = function(e) {
                        var i = a.getSelectorFromElement(this);
                        if (i) {
                            var r = t(i)[0];
                            if (r && t(r).hasClass(g)) {
                                var l = s({}, t(r).data(), t(this).data()),
                                    c = this.getAttribute("data-slide-to");
                                c && (l.interval = !1), o._jQueryInterface.call(t(r), l), c && t(r).data(n).to(c), e.preventDefault()
                            }
                        }
                    }, r(o, null, [{
                        key: "VERSION",
                        get: function() {
                            return "4.1.3"
                        }
                    }, {
                        key: "Default",
                        get: function() {
                            return l
                        }
                    }]), o
                }();
            return t(document).on(_.CLICK_DATA_API, b.DATA_SLIDE, C._dataApiClickHandler), t(window).on(_.LOAD_DATA_API, function() {
                for (var e = [].slice.call(document.querySelectorAll(b.DATA_RIDE)), n = 0, i = e.length; n < i; n++) {
                    var r = t(e[n]);
                    C._jQueryInterface.call(r, r.data())
                }
            }), t.fn[e] = C._jQueryInterface, t.fn[e].Constructor = C, t.fn[e].noConflict = function() {
                return t.fn[e] = o, C._jQueryInterface
            }, C
        }(e),
        u = function(t) {
            var e = "collapse",
                n = "bs.collapse",
                i = t.fn[e],
                o = {
                    toggle: !0,
                    parent: ""
                },
                l = {
                    toggle: "boolean",
                    parent: "(string|element)"
                },
                c = {
                    SHOW: "show.bs.collapse",
                    SHOWN: "shown.bs.collapse",
                    HIDE: "hide.bs.collapse",
                    HIDDEN: "hidden.bs.collapse",
                    CLICK_DATA_API: "click.bs.collapse.data-api"
                },
                h = "show",
                u = "collapse",
                d = "collapsing",
                f = "collapsed",
                _ = "width",
                g = "height",
                m = {
                    ACTIVES: ".show, .collapsing",
                    DATA_TOGGLE: '[data-toggle="collapse"]'
                },
                p = function() {
                    function i(e, n) {
                        this._isTransitioning = !1, this._element = e, this._config = this._getConfig(n), this._triggerArray = t.makeArray(document.querySelectorAll('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'));
                        for (var i = [].slice.call(document.querySelectorAll(m.DATA_TOGGLE)), r = 0, o = i.length; r < o; r++) {
                            var s = i[r],
                                l = a.getSelectorFromElement(s),
                                c = [].slice.call(document.querySelectorAll(l)).filter(function(t) {
                                    return t === e
                                });
                            null !== l && c.length > 0 && (this._selector = l, this._triggerArray.push(s))
                        }
                        this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
                    }
                    var p = i.prototype;
                    return p.toggle = function() {
                        t(this._element).hasClass(h) ? this.hide() : this.show()
                    }, p.show = function() {
                        var e, r, o = this;
                        if (!this._isTransitioning && !t(this._element).hasClass(h) && (this._parent && 0 === (e = [].slice.call(this._parent.querySelectorAll(m.ACTIVES)).filter(function(t) {
                                return t.getAttribute("data-parent") === o._config.parent
                            })).length && (e = null), !(e && (r = t(e).not(this._selector).data(n)) && r._isTransitioning))) {
                            var s = t.Event(c.SHOW);
                            if (t(this._element).trigger(s), !s.isDefaultPrevented()) {
                                e && (i._jQueryInterface.call(t(e).not(this._selector), "hide"), r || t(e).data(n, null));
                                var l = this._getDimension();
                                t(this._element).removeClass(u).addClass(d), this._element.style[l] = 0, this._triggerArray.length && t(this._triggerArray).removeClass(f).attr("aria-expanded", !0), this.setTransitioning(!0);
                                var _ = "scroll" + (l[0].toUpperCase() + l.slice(1)),
                                    g = a.getTransitionDurationFromElement(this._element);
                                t(this._element).one(a.TRANSITION_END, function() {
                                    t(o._element).removeClass(d).addClass(u).addClass(h), o._element.style[l] = "", o.setTransitioning(!1), t(o._element).trigger(c.SHOWN)
                                }).emulateTransitionEnd(g), this._element.style[l] = this._element[_] + "px"
                            }
                        }
                    }, p.hide = function() {
                        var e = this;
                        if (!this._isTransitioning && t(this._element).hasClass(h)) {
                            var n = t.Event(c.HIDE);
                            if (t(this._element).trigger(n), !n.isDefaultPrevented()) {
                                var i = this._getDimension();
                                this._element.style[i] = this._element.getBoundingClientRect()[i] + "px", a.reflow(this._element), t(this._element).addClass(d).removeClass(u).removeClass(h);
                                var r = this._triggerArray.length;
                                if (r > 0)
                                    for (var o = 0; o < r; o++) {
                                        var s = this._triggerArray[o],
                                            l = a.getSelectorFromElement(s);
                                        if (null !== l) t([].slice.call(document.querySelectorAll(l))).hasClass(h) || t(s).addClass(f).attr("aria-expanded", !1)
                                    }
                                this.setTransitioning(!0);
                                this._element.style[i] = "";
                                var _ = a.getTransitionDurationFromElement(this._element);
                                t(this._element).one(a.TRANSITION_END, function() {
                                    e.setTransitioning(!1), t(e._element).removeClass(d).addClass(u).trigger(c.HIDDEN)
                                }).emulateTransitionEnd(_)
                            }
                        }
                    }, p.setTransitioning = function(t) {
                        this._isTransitioning = t
                    }, p.dispose = function() {
                        t.removeData(this._element, n), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
                    }, p._getConfig = function(t) {
                        return (t = s({}, o, t)).toggle = Boolean(t.toggle), a.typeCheckConfig(e, t, l), t
                    }, p._getDimension = function() {
                        return t(this._element).hasClass(_) ? _ : g
                    }, p._getParent = function() {
                        var e = this,
                            n = null;
                        a.isElement(this._config.parent) ? (n = this._config.parent, void 0 !== this._config.parent.jquery && (n = this._config.parent[0])) : n = document.querySelector(this._config.parent);
                        var r = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
                            o = [].slice.call(n.querySelectorAll(r));
                        return t(o).each(function(t, n) {
                            e._addAriaAndCollapsedClass(i._getTargetFromElement(n), [n])
                        }), n
                    }, p._addAriaAndCollapsedClass = function(e, n) {
                        if (e) {
                            var i = t(e).hasClass(h);
                            n.length && t(n).toggleClass(f, !i).attr("aria-expanded", i)
                        }
                    }, i._getTargetFromElement = function(t) {
                        var e = a.getSelectorFromElement(t);
                        return e ? document.querySelector(e) : null
                    }, i._jQueryInterface = function(e) {
                        return this.each(function() {
                            var r = t(this),
                                a = r.data(n),
                                l = s({}, o, r.data(), "object" == typeof e && e ? e : {});
                            if (!a && l.toggle && /show|hide/.test(e) && (l.toggle = !1), a || (a = new i(this, l), r.data(n, a)), "string" == typeof e) {
                                if (void 0 === a[e]) throw new TypeError('No method named "' + e + '"');
                                a[e]()
                            }
                        })
                    }, r(i, null, [{
                        key: "VERSION",
                        get: function() {
                            return "4.1.3"
                        }
                    }, {
                        key: "Default",
                        get: function() {
                            return o
                        }
                    }]), i
                }();
            return t(document).on(c.CLICK_DATA_API, m.DATA_TOGGLE, function(e) {
                "A" === e.currentTarget.tagName && e.preventDefault();
                var i = t(this),
                    r = a.getSelectorFromElement(this),
                    o = [].slice.call(document.querySelectorAll(r));
                t(o).each(function() {
                    var e = t(this),
                        r = e.data(n) ? "toggle" : i.data();
                    p._jQueryInterface.call(e, r)
                })
            }), t.fn[e] = p._jQueryInterface, t.fn[e].Constructor = p, t.fn[e].noConflict = function() {
                return t.fn[e] = i, p._jQueryInterface
            }, p
        }(e),
        d = function(t) {
            var e = "dropdown",
                i = "bs.dropdown",
                o = "." + i,
                l = t.fn[e],
                c = new RegExp("38|40|27"),
                h = {
                    HIDE: "hide" + o,
                    HIDDEN: "hidden" + o,
                    SHOW: "show" + o,
                    SHOWN: "shown" + o,
                    CLICK: "click" + o,
                    CLICK_DATA_API: "click.bs.dropdown.data-api",
                    KEYDOWN_DATA_API: "keydown.bs.dropdown.data-api",
                    KEYUP_DATA_API: "keyup.bs.dropdown.data-api"
                },
                u = "disabled",
                d = "show",
                f = "dropup",
                _ = "dropright",
                g = "dropleft",
                m = "dropdown-menu-right",
                p = "position-static",
                v = '[data-toggle="dropdown"]',
                E = ".dropdown form",
                y = ".dropdown-menu",
                T = ".navbar-nav",
                b = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
                C = "top-start",
                I = "top-end",
                S = "bottom-start",
                A = "bottom-end",
                D = "right-start",
                w = "left-start",
                N = {
                    offset: 0,
                    flip: !0,
                    boundary: "scrollParent",
                    reference: "toggle",
                    display: "dynamic"
                },
                O = {
                    offset: "(number|string|function)",
                    flip: "boolean",
                    boundary: "(string|element)",
                    reference: "(string|element)",
                    display: "string"
                },
                k = function() {
                    function l(t, e) {
                        this._element = t, this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners()
                    }
                    var E = l.prototype;
                    return E.toggle = function() {
                        if (!this._element.disabled && !t(this._element).hasClass(u)) {
                            var e = l._getParentFromElement(this._element),
                                i = t(this._menu).hasClass(d);
                            if (l._clearMenus(), !i) {
                                var r = {
                                        relatedTarget: this._element
                                    },
                                    o = t.Event(h.SHOW, r);
                                if (t(e).trigger(o), !o.isDefaultPrevented()) {
                                    if (!this._inNavbar) {
                                        if (void 0 === n) throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)");
                                        var s = this._element;
                                        "parent" === this._config.reference ? s = e : a.isElement(this._config.reference) && (s = this._config.reference, void 0 !== this._config.reference.jquery && (s = this._config.reference[0])), "scrollParent" !== this._config.boundary && t(e).addClass(p), this._popper = new n(s, this._menu, this._getPopperConfig())
                                    }
                                    "ontouchstart" in document.documentElement && 0 === t(e).closest(T).length && t(document.body).children().on("mouseover", null, t.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), t(this._menu).toggleClass(d), t(e).toggleClass(d).trigger(t.Event(h.SHOWN, r))
                                }
                            }
                        }
                    }, E.dispose = function() {
                        t.removeData(this._element, i), t(this._element).off(o), this._element = null, this._menu = null, null !== this._popper && (this._popper.destroy(), this._popper = null)
                    }, E.update = function() {
                        this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate()
                    }, E._addEventListeners = function() {
                        var e = this;
                        t(this._element).on(h.CLICK, function(t) {
                            t.preventDefault(), t.stopPropagation(), e.toggle()
                        })
                    }, E._getConfig = function(n) {
                        return n = s({}, this.constructor.Default, t(this._element).data(), n), a.typeCheckConfig(e, n, this.constructor.DefaultType), n
                    }, E._getMenuElement = function() {
                        if (!this._menu) {
                            var t = l._getParentFromElement(this._element);
                            t && (this._menu = t.querySelector(y))
                        }
                        return this._menu
                    }, E._getPlacement = function() {
                        var e = t(this._element.parentNode),
                            n = S;
                        return e.hasClass(f) ? (n = C, t(this._menu).hasClass(m) && (n = I)) : e.hasClass(_) ? n = D : e.hasClass(g) ? n = w : t(this._menu).hasClass(m) && (n = A), n
                    }, E._detectNavbar = function() {
                        return t(this._element).closest(".navbar").length > 0
                    }, E._getPopperConfig = function() {
                        var t = this,
                            e = {};
                        "function" == typeof this._config.offset ? e.fn = function(e) {
                            return e.offsets = s({}, e.offsets, t._config.offset(e.offsets) || {}), e
                        } : e.offset = this._config.offset;
                        var n = {
                            placement: this._getPlacement(),
                            modifiers: {
                                offset: e,
                                flip: {
                                    enabled: this._config.flip
                                },
                                preventOverflow: {
                                    boundariesElement: this._config.boundary
                                }
                            }
                        };
                        return "static" === this._config.display && (n.modifiers.applyStyle = {
                            enabled: !1
                        }), n
                    }, l._jQueryInterface = function(e) {
                        return this.each(function() {
                            var n = t(this).data(i);
                            if (n || (n = new l(this, "object" == typeof e ? e : null), t(this).data(i, n)), "string" == typeof e) {
                                if (void 0 === n[e]) throw new TypeError('No method named "' + e + '"');
                                n[e]()
                            }
                        })
                    }, l._clearMenus = function(e) {
                        if (!e || 3 !== e.which && ("keyup" !== e.type || 9 === e.which))
                            for (var n = [].slice.call(document.querySelectorAll(v)), r = 0, o = n.length; r < o; r++) {
                                var s = l._getParentFromElement(n[r]),
                                    a = t(n[r]).data(i),
                                    c = {
                                        relatedTarget: n[r]
                                    };
                                if (e && "click" === e.type && (c.clickEvent = e), a) {
                                    var u = a._menu;
                                    if (t(s).hasClass(d) && !(e && ("click" === e.type && /input|textarea/i.test(e.target.tagName) || "keyup" === e.type && 9 === e.which) && t.contains(s, e.target))) {
                                        var f = t.Event(h.HIDE, c);
                                        t(s).trigger(f), f.isDefaultPrevented() || ("ontouchstart" in document.documentElement && t(document.body).children().off("mouseover", null, t.noop), n[r].setAttribute("aria-expanded", "false"), t(u).removeClass(d), t(s).removeClass(d).trigger(t.Event(h.HIDDEN, c)))
                                    }
                                }
                            }
                    }, l._getParentFromElement = function(t) {
                        var e, n = a.getSelectorFromElement(t);
                        return n && (e = document.querySelector(n)), e || t.parentNode
                    }, l._dataApiKeydownHandler = function(e) {
                        if ((/input|textarea/i.test(e.target.tagName) ? !(32 === e.which || 27 !== e.which && (40 !== e.which && 38 !== e.which || t(e.target).closest(y).length)) : c.test(e.which)) && (e.preventDefault(), e.stopPropagation(), !this.disabled && !t(this).hasClass(u))) {
                            var n = l._getParentFromElement(this),
                                i = t(n).hasClass(d);
                            if ((i || 27 === e.which && 32 === e.which) && (!i || 27 !== e.which && 32 !== e.which)) {
                                var r = [].slice.call(n.querySelectorAll(b));
                                if (0 !== r.length) {
                                    var o = r.indexOf(e.target);
                                    38 === e.which && o > 0 && o--, 40 === e.which && o < r.length - 1 && o++, o < 0 && (o = 0), r[o].focus()
                                }
                            } else {
                                if (27 === e.which) {
                                    var s = n.querySelector(v);
                                    t(s).trigger("focus")
                                }
                                t(this).trigger("click")
                            }
                        }
                    }, r(l, null, [{
                        key: "VERSION",
                        get: function() {
                            return "4.1.3"
                        }
                    }, {
                        key: "Default",
                        get: function() {
                            return N
                        }
                    }, {
                        key: "DefaultType",
                        get: function() {
                            return O
                        }
                    }]), l
                }();
            return t(document).on(h.KEYDOWN_DATA_API, v, k._dataApiKeydownHandler).on(h.KEYDOWN_DATA_API, y, k._dataApiKeydownHandler).on(h.CLICK_DATA_API + " " + h.KEYUP_DATA_API, k._clearMenus).on(h.CLICK_DATA_API, v, function(e) {
                e.preventDefault(), e.stopPropagation(), k._jQueryInterface.call(t(this), "toggle")
            }).on(h.CLICK_DATA_API, E, function(t) {
                t.stopPropagation()
            }), t.fn[e] = k._jQueryInterface, t.fn[e].Constructor = k, t.fn[e].noConflict = function() {
                return t.fn[e] = l, k._jQueryInterface
            }, k
        }(e),
        f = function(t) {
            var e = "modal",
                n = ".bs.modal",
                i = t.fn.modal,
                o = {
                    backdrop: !0,
                    keyboard: !0,
                    focus: !0,
                    show: !0
                },
                l = {
                    backdrop: "(boolean|string)",
                    keyboard: "boolean",
                    focus: "boolean",
                    show: "boolean"
                },
                c = {
                    HIDE: "hide.bs.modal",
                    HIDDEN: "hidden.bs.modal",
                    SHOW: "show.bs.modal",
                    SHOWN: "shown.bs.modal",
                    FOCUSIN: "focusin.bs.modal",
                    RESIZE: "resize.bs.modal",
                    CLICK_DISMISS: "click.dismiss.bs.modal",
                    KEYDOWN_DISMISS: "keydown.dismiss.bs.modal",
                    MOUSEUP_DISMISS: "mouseup.dismiss.bs.modal",
                    MOUSEDOWN_DISMISS: "mousedown.dismiss.bs.modal",
                    CLICK_DATA_API: "click.bs.modal.data-api"
                },
                h = "modal-scrollbar-measure",
                u = "modal-backdrop",
                d = "modal-open",
                f = "fade",
                _ = "show",
                g = {
                    DIALOG: ".modal-dialog",
                    DATA_TOGGLE: '[data-toggle="modal"]',
                    DATA_DISMISS: '[data-dismiss="modal"]',
                    FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
                    STICKY_CONTENT: ".sticky-top"
                },
                m = function() {
                    function i(t, e) {
                        this._config = this._getConfig(e), this._element = t, this._dialog = t.querySelector(g.DIALOG), this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._scrollbarWidth = 0
                    }
                    var m = i.prototype;
                    return m.toggle = function(t) {
                        return this._isShown ? this.hide() : this.show(t)
                    }, m.show = function(e) {
                        var n = this;
                        if (!this._isTransitioning && !this._isShown) {
                            t(this._element).hasClass(f) && (this._isTransitioning = !0);
                            var i = t.Event(c.SHOW, {
                                relatedTarget: e
                            });
                            t(this._element).trigger(i), this._isShown || i.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), t(document.body).addClass(d), this._setEscapeEvent(), this._setResizeEvent(), t(this._element).on(c.CLICK_DISMISS, g.DATA_DISMISS, function(t) {
                                return n.hide(t)
                            }), t(this._dialog).on(c.MOUSEDOWN_DISMISS, function() {
                                t(n._element).one(c.MOUSEUP_DISMISS, function(e) {
                                    t(e.target).is(n._element) && (n._ignoreBackdropClick = !0)
                                })
                            }), this._showBackdrop(function() {
                                return n._showElement(e)
                            }))
                        }
                    }, m.hide = function(e) {
                        var n = this;
                        if (e && e.preventDefault(), !this._isTransitioning && this._isShown) {
                            var i = t.Event(c.HIDE);
                            if (t(this._element).trigger(i), this._isShown && !i.isDefaultPrevented()) {
                                this._isShown = !1;
                                var r = t(this._element).hasClass(f);
                                if (r && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), t(document).off(c.FOCUSIN), t(this._element).removeClass(_), t(this._element).off(c.CLICK_DISMISS), t(this._dialog).off(c.MOUSEDOWN_DISMISS), r) {
                                    var o = a.getTransitionDurationFromElement(this._element);
                                    t(this._element).one(a.TRANSITION_END, function(t) {
                                        return n._hideModal(t)
                                    }).emulateTransitionEnd(o)
                                } else this._hideModal()
                            }
                        }
                    }, m.dispose = function() {
                        t.removeData(this._element, "bs.modal"), t(window, document, this._element, this._backdrop).off(n), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._scrollbarWidth = null
                    }, m.handleUpdate = function() {
                        this._adjustDialog()
                    }, m._getConfig = function(t) {
                        return t = s({}, o, t), a.typeCheckConfig(e, t, l), t
                    }, m._showElement = function(e) {
                        var n = this,
                            i = t(this._element).hasClass(f);
                        this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.scrollTop = 0, i && a.reflow(this._element), t(this._element).addClass(_), this._config.focus && this._enforceFocus();
                        var r = t.Event(c.SHOWN, {
                                relatedTarget: e
                            }),
                            o = function() {
                                n._config.focus && n._element.focus(), n._isTransitioning = !1, t(n._element).trigger(r)
                            };
                        if (i) {
                            var s = a.getTransitionDurationFromElement(this._element);
                            t(this._dialog).one(a.TRANSITION_END, o).emulateTransitionEnd(s)
                        } else o()
                    }, m._enforceFocus = function() {
                        var e = this;
                        t(document).off(c.FOCUSIN).on(c.FOCUSIN, function(n) {
                            document !== n.target && e._element !== n.target && 0 === t(e._element).has(n.target).length && e._element.focus()
                        })
                    }, m._setEscapeEvent = function() {
                        var e = this;
                        this._isShown && this._config.keyboard ? t(this._element).on(c.KEYDOWN_DISMISS, function(t) {
                            27 === t.which && (t.preventDefault(), e.hide())
                        }) : this._isShown || t(this._element).off(c.KEYDOWN_DISMISS)
                    }, m._setResizeEvent = function() {
                        var e = this;
                        this._isShown ? t(window).on(c.RESIZE, function(t) {
                            return e.handleUpdate(t)
                        }) : t(window).off(c.RESIZE)
                    }, m._hideModal = function() {
                        var e = this;
                        this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._isTransitioning = !1, this._showBackdrop(function() {
                            t(document.body).removeClass(d), e._resetAdjustments(), e._resetScrollbar(), t(e._element).trigger(c.HIDDEN)
                        })
                    }, m._removeBackdrop = function() {
                        this._backdrop && (t(this._backdrop).remove(), this._backdrop = null)
                    }, m._showBackdrop = function(e) {
                        var n = this,
                            i = t(this._element).hasClass(f) ? f : "";
                        if (this._isShown && this._config.backdrop) {
                            if (this._backdrop = document.createElement("div"), this._backdrop.className = u, i && this._backdrop.classList.add(i), t(this._backdrop).appendTo(document.body), t(this._element).on(c.CLICK_DISMISS, function(t) {
                                    n._ignoreBackdropClick ? n._ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" === n._config.backdrop ? n._element.focus() : n.hide())
                                }), i && a.reflow(this._backdrop), t(this._backdrop).addClass(_), !e) return;
                            if (!i) return void e();
                            var r = a.getTransitionDurationFromElement(this._backdrop);
                            t(this._backdrop).one(a.TRANSITION_END, e).emulateTransitionEnd(r)
                        } else if (!this._isShown && this._backdrop) {
                            t(this._backdrop).removeClass(_);
                            var o = function() {
                                n._removeBackdrop(), e && e()
                            };
                            if (t(this._element).hasClass(f)) {
                                var s = a.getTransitionDurationFromElement(this._backdrop);
                                t(this._backdrop).one(a.TRANSITION_END, o).emulateTransitionEnd(s)
                            } else o()
                        } else e && e()
                    }, m._adjustDialog = function() {
                        var t = this._element.scrollHeight > document.documentElement.clientHeight;
                        !this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px")
                    }, m._resetAdjustments = function() {
                        this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
                    }, m._checkScrollbar = function() {
                        var t = document.body.getBoundingClientRect();
                        this._isBodyOverflowing = t.left + t.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
                    }, m._setScrollbar = function() {
                        var e = this;
                        if (this._isBodyOverflowing) {
                            var n = [].slice.call(document.querySelectorAll(g.FIXED_CONTENT)),
                                i = [].slice.call(document.querySelectorAll(g.STICKY_CONTENT));
                            t(n).each(function(n, i) {
                                var r = i.style.paddingRight,
                                    o = t(i).css("padding-right");
                                t(i).data("padding-right", r).css("padding-right", parseFloat(o) + e._scrollbarWidth + "px")
                            }), t(i).each(function(n, i) {
                                var r = i.style.marginRight,
                                    o = t(i).css("margin-right");
                                t(i).data("margin-right", r).css("margin-right", parseFloat(o) - e._scrollbarWidth + "px")
                            });
                            var r = document.body.style.paddingRight,
                                o = t(document.body).css("padding-right");
                            t(document.body).data("padding-right", r).css("padding-right", parseFloat(o) + this._scrollbarWidth + "px")
                        }
                    }, m._resetScrollbar = function() {
                        var e = [].slice.call(document.querySelectorAll(g.FIXED_CONTENT));
                        t(e).each(function(e, n) {
                            var i = t(n).data("padding-right");
                            t(n).removeData("padding-right"), n.style.paddingRight = i || ""
                        });
                        var n = [].slice.call(document.querySelectorAll("" + g.STICKY_CONTENT));
                        t(n).each(function(e, n) {
                            var i = t(n).data("margin-right");
                            void 0 !== i && t(n).css("margin-right", i).removeData("margin-right")
                        });
                        var i = t(document.body).data("padding-right");
                        t(document.body).removeData("padding-right"), document.body.style.paddingRight = i || ""
                    }, m._getScrollbarWidth = function() {
                        var t = document.createElement("div");
                        t.className = h, document.body.appendChild(t);
                        var e = t.getBoundingClientRect().width - t.clientWidth;
                        return document.body.removeChild(t), e
                    }, i._jQueryInterface = function(e, n) {
                        return this.each(function() {
                            var r = t(this).data("bs.modal"),
                                a = s({}, o, t(this).data(), "object" == typeof e && e ? e : {});
                            if (r || (r = new i(this, a), t(this).data("bs.modal", r)), "string" == typeof e) {
                                if (void 0 === r[e]) throw new TypeError('No method named "' + e + '"');
                                r[e](n)
                            } else a.show && r.show(n)
                        })
                    }, r(i, null, [{
                        key: "VERSION",
                        get: function() {
                            return "4.1.3"
                        }
                    }, {
                        key: "Default",
                        get: function() {
                            return o
                        }
                    }]), i
                }();
            return t(document).on(c.CLICK_DATA_API, g.DATA_TOGGLE, function(e) {
                var n, i = this,
                    r = a.getSelectorFromElement(this);
                r && (n = document.querySelector(r));
                var o = t(n).data("bs.modal") ? "toggle" : s({}, t(n).data(), t(this).data());
                "A" !== this.tagName && "AREA" !== this.tagName || e.preventDefault();
                var l = t(n).one(c.SHOW, function(e) {
                    e.isDefaultPrevented() || l.one(c.HIDDEN, function() {
                        t(i).is(":visible") && i.focus()
                    })
                });
                m._jQueryInterface.call(t(n), o, this)
            }), t.fn.modal = m._jQueryInterface, t.fn.modal.Constructor = m, t.fn.modal.noConflict = function() {
                return t.fn.modal = i, m._jQueryInterface
            }, m
        }(e),
        _ = function(t) {
            var e = "tooltip",
                i = ".bs.tooltip",
                o = t.fn[e],
                l = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
                c = {
                    animation: "boolean",
                    template: "string",
                    title: "(string|element|function)",
                    trigger: "string",
                    delay: "(number|object)",
                    html: "boolean",
                    selector: "(string|boolean)",
                    placement: "(string|function)",
                    offset: "(number|string)",
                    container: "(string|element|boolean)",
                    fallbackPlacement: "(string|array)",
                    boundary: "(string|element)"
                },
                h = {
                    AUTO: "auto",
                    TOP: "top",
                    RIGHT: "right",
                    BOTTOM: "bottom",
                    LEFT: "left"
                },
                u = {
                    animation: !0,
                    template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
                    trigger: "hover focus",
                    title: "",
                    delay: 0,
                    html: !1,
                    selector: !1,
                    placement: "top",
                    offset: 0,
                    container: !1,
                    fallbackPlacement: "flip",
                    boundary: "scrollParent"
                },
                d = "show",
                f = "out",
                _ = {
                    HIDE: "hide" + i,
                    HIDDEN: "hidden" + i,
                    SHOW: "show" + i,
                    SHOWN: "shown" + i,
                    INSERTED: "inserted" + i,
                    CLICK: "click" + i,
                    FOCUSIN: "focusin" + i,
                    FOCUSOUT: "focusout" + i,
                    MOUSEENTER: "mouseenter" + i,
                    MOUSELEAVE: "mouseleave" + i
                },
                g = "fade",
                m = "show",
                p = ".tooltip-inner",
                v = ".arrow",
                E = "hover",
                y = "focus",
                T = "click",
                b = "manual",
                C = function() {
                    function o(t, e) {
                        if (void 0 === n) throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");
                        this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = t, this.config = this._getConfig(e), this.tip = null, this._setListeners()
                    }
                    var C = o.prototype;
                    return C.enable = function() {
                        this._isEnabled = !0
                    }, C.disable = function() {
                        this._isEnabled = !1
                    }, C.toggleEnabled = function() {
                        this._isEnabled = !this._isEnabled
                    }, C.toggle = function(e) {
                        if (this._isEnabled)
                            if (e) {
                                var n = this.constructor.DATA_KEY,
                                    i = t(e.currentTarget).data(n);
                                i || (i = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(n, i)), i._activeTrigger.click = !i._activeTrigger.click, i._isWithActiveTrigger() ? i._enter(null, i) : i._leave(null, i)
                            } else {
                                if (t(this.getTipElement()).hasClass(m)) return void this._leave(null, this);
                                this._enter(null, this)
                            }
                    }, C.dispose = function() {
                        clearTimeout(this._timeout), t.removeData(this.element, this.constructor.DATA_KEY), t(this.element).off(this.constructor.EVENT_KEY), t(this.element).closest(".modal").off("hide.bs.modal"), this.tip && t(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, null !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null
                    }, C.show = function() {
                        var e = this;
                        if ("none" === t(this.element).css("display")) throw new Error("Please use show on visible elements");
                        var i = t.Event(this.constructor.Event.SHOW);
                        if (this.isWithContent() && this._isEnabled) {
                            t(this.element).trigger(i);
                            var r = t.contains(this.element.ownerDocument.documentElement, this.element);
                            if (i.isDefaultPrevented() || !r) return;
                            var o = this.getTipElement(),
                                s = a.getUID(this.constructor.NAME);
                            o.setAttribute("id", s), this.element.setAttribute("aria-describedby", s), this.setContent(), this.config.animation && t(o).addClass(g);
                            var l = "function" == typeof this.config.placement ? this.config.placement.call(this, o, this.element) : this.config.placement,
                                c = this._getAttachment(l);
                            this.addAttachmentClass(c);
                            var h = !1 === this.config.container ? document.body : t(document).find(this.config.container);
                            t(o).data(this.constructor.DATA_KEY, this), t.contains(this.element.ownerDocument.documentElement, this.tip) || t(o).appendTo(h), t(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new n(this.element, o, {
                                placement: c,
                                modifiers: {
                                    offset: {
                                        offset: this.config.offset
                                    },
                                    flip: {
                                        behavior: this.config.fallbackPlacement
                                    },
                                    arrow: {
                                        element: v
                                    },
                                    preventOverflow: {
                                        boundariesElement: this.config.boundary
                                    }
                                },
                                onCreate: function(t) {
                                    t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t)
                                },
                                onUpdate: function(t) {
                                    e._handlePopperPlacementChange(t)
                                }
                            }), t(o).addClass(m), "ontouchstart" in document.documentElement && t(document.body).children().on("mouseover", null, t.noop);
                            var u = function() {
                                e.config.animation && e._fixTransition();
                                var n = e._hoverState;
                                e._hoverState = null, t(e.element).trigger(e.constructor.Event.SHOWN), n === f && e._leave(null, e)
                            };
                            if (t(this.tip).hasClass(g)) {
                                var d = a.getTransitionDurationFromElement(this.tip);
                                t(this.tip).one(a.TRANSITION_END, u).emulateTransitionEnd(d)
                            } else u()
                        }
                    }, C.hide = function(e) {
                        var n = this,
                            i = this.getTipElement(),
                            r = t.Event(this.constructor.Event.HIDE),
                            o = function() {
                                n._hoverState !== d && i.parentNode && i.parentNode.removeChild(i), n._cleanTipClass(), n.element.removeAttribute("aria-describedby"), t(n.element).trigger(n.constructor.Event.HIDDEN), null !== n._popper && n._popper.destroy(), e && e()
                            };
                        if (t(this.element).trigger(r), !r.isDefaultPrevented()) {
                            if (t(i).removeClass(m), "ontouchstart" in document.documentElement && t(document.body).children().off("mouseover", null, t.noop), this._activeTrigger[T] = !1, this._activeTrigger[y] = !1, this._activeTrigger[E] = !1, t(this.tip).hasClass(g)) {
                                var s = a.getTransitionDurationFromElement(i);
                                t(i).one(a.TRANSITION_END, o).emulateTransitionEnd(s)
                            } else o();
                            this._hoverState = ""
                        }
                    }, C.update = function() {
                        null !== this._popper && this._popper.scheduleUpdate()
                    }, C.isWithContent = function() {
                        return Boolean(this.getTitle())
                    }, C.addAttachmentClass = function(e) {
                        t(this.getTipElement()).addClass("bs-tooltip-" + e)
                    }, C.getTipElement = function() {
                        return this.tip = this.tip || t(this.config.template)[0], this.tip
                    }, C.setContent = function() {
                        var e = this.getTipElement();
                        this.setElementContent(t(e.querySelectorAll(p)), this.getTitle()), t(e).removeClass(g + " " + m)
                    }, C.setElementContent = function(e, n) {
                        var i = this.config.html;
                        "object" == typeof n && (n.nodeType || n.jquery) ? i ? t(n).parent().is(e) || e.empty().append(n) : e.text(t(n).text()) : e[i ? "html" : "text"](n)
                    }, C.getTitle = function() {
                        var t = this.element.getAttribute("data-original-title");
                        return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), t
                    }, C._getAttachment = function(t) {
                        return h[t.toUpperCase()]
                    }, C._setListeners = function() {
                        var e = this;
                        this.config.trigger.split(" ").forEach(function(n) {
                            if ("click" === n) t(e.element).on(e.constructor.Event.CLICK, e.config.selector, function(t) {
                                return e.toggle(t)
                            });
                            else if (n !== b) {
                                var i = n === E ? e.constructor.Event.MOUSEENTER : e.constructor.Event.FOCUSIN,
                                    r = n === E ? e.constructor.Event.MOUSELEAVE : e.constructor.Event.FOCUSOUT;
                                t(e.element).on(i, e.config.selector, function(t) {
                                    return e._enter(t)
                                }).on(r, e.config.selector, function(t) {
                                    return e._leave(t)
                                })
                            }
                            t(e.element).closest(".modal").on("hide.bs.modal", function() {
                                return e.hide()
                            })
                        }), this.config.selector ? this.config = s({}, this.config, {
                            trigger: "manual",
                            selector: ""
                        }) : this._fixTitle()
                    }, C._fixTitle = function() {
                        var t = typeof this.element.getAttribute("data-original-title");
                        (this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
                    }, C._enter = function(e, n) {
                        var i = this.constructor.DATA_KEY;
                        (n = n || t(e.currentTarget).data(i)) || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(i, n)), e && (n._activeTrigger["focusin" === e.type ? y : E] = !0), t(n.getTipElement()).hasClass(m) || n._hoverState === d ? n._hoverState = d : (clearTimeout(n._timeout), n._hoverState = d, n.config.delay && n.config.delay.show ? n._timeout = setTimeout(function() {
                            n._hoverState === d && n.show()
                        }, n.config.delay.show) : n.show())
                    }, C._leave = function(e, n) {
                        var i = this.constructor.DATA_KEY;
                        (n = n || t(e.currentTarget).data(i)) || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(i, n)), e && (n._activeTrigger["focusout" === e.type ? y : E] = !1), n._isWithActiveTrigger() || (clearTimeout(n._timeout), n._hoverState = f, n.config.delay && n.config.delay.hide ? n._timeout = setTimeout(function() {
                            n._hoverState === f && n.hide()
                        }, n.config.delay.hide) : n.hide())
                    }, C._isWithActiveTrigger = function() {
                        for (var t in this._activeTrigger)
                            if (this._activeTrigger[t]) return !0;
                        return !1
                    }, C._getConfig = function(n) {
                        return "number" == typeof(n = s({}, this.constructor.Default, t(this.element).data(), "object" == typeof n && n ? n : {})).delay && (n.delay = {
                            show: n.delay,
                            hide: n.delay
                        }), "number" == typeof n.title && (n.title = n.title.toString()), "number" == typeof n.content && (n.content = n.content.toString()), a.typeCheckConfig(e, n, this.constructor.DefaultType), n
                    }, C._getDelegateConfig = function() {
                        var t = {};
                        if (this.config)
                            for (var e in this.config) this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
                        return t
                    }, C._cleanTipClass = function() {
                        var e = t(this.getTipElement()),
                            n = e.attr("class").match(l);
                        null !== n && n.length && e.removeClass(n.join(""))
                    }, C._handlePopperPlacementChange = function(t) {
                        var e = t.instance;
                        this.tip = e.popper, this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(t.placement))
                    }, C._fixTransition = function() {
                        var e = this.getTipElement(),
                            n = this.config.animation;
                        null === e.getAttribute("x-placement") && (t(e).removeClass(g), this.config.animation = !1, this.hide(), this.show(), this.config.animation = n)
                    }, o._jQueryInterface = function(e) {
                        return this.each(function() {
                            var n = t(this).data("bs.tooltip"),
                                i = "object" == typeof e && e;
                            if ((n || !/dispose|hide/.test(e)) && (n || (n = new o(this, i), t(this).data("bs.tooltip", n)), "string" == typeof e)) {
                                if (void 0 === n[e]) throw new TypeError('No method named "' + e + '"');
                                n[e]()
                            }
                        })
                    }, r(o, null, [{
                        key: "VERSION",
                        get: function() {
                            return "4.1.3"
                        }
                    }, {
                        key: "Default",
                        get: function() {
                            return u
                        }
                    }, {
                        key: "NAME",
                        get: function() {
                            return e
                        }
                    }, {
                        key: "DATA_KEY",
                        get: function() {
                            return "bs.tooltip"
                        }
                    }, {
                        key: "Event",
                        get: function() {
                            return _
                        }
                    }, {
                        key: "EVENT_KEY",
                        get: function() {
                            return i
                        }
                    }, {
                        key: "DefaultType",
                        get: function() {
                            return c
                        }
                    }]), o
                }();
            return t.fn[e] = C._jQueryInterface, t.fn[e].Constructor = C, t.fn[e].noConflict = function() {
                return t.fn[e] = o, C._jQueryInterface
            }, C
        }(e),
        g = function(t) {
            var e = "popover",
                n = ".bs.popover",
                i = t.fn[e],
                o = new RegExp("(^|\\s)bs-popover\\S+", "g"),
                a = s({}, _.Default, {
                    placement: "right",
                    trigger: "click",
                    content: "",
                    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
                }),
                l = s({}, _.DefaultType, {
                    content: "(string|element|function)"
                }),
                c = "fade",
                h = "show",
                u = ".popover-header",
                d = ".popover-body",
                f = {
                    HIDE: "hide" + n,
                    HIDDEN: "hidden" + n,
                    SHOW: "show" + n,
                    SHOWN: "shown" + n,
                    INSERTED: "inserted" + n,
                    CLICK: "click" + n,
                    FOCUSIN: "focusin" + n,
                    FOCUSOUT: "focusout" + n,
                    MOUSEENTER: "mouseenter" + n,
                    MOUSELEAVE: "mouseleave" + n
                },
                g = function(i) {
                    var s, _;

                    function g() {
                        return i.apply(this, arguments) || this
                    }
                    _ = i, (s = g).prototype = Object.create(_.prototype), s.prototype.constructor = s, s.__proto__ = _;
                    var m = g.prototype;
                    return m.isWithContent = function() {
                        return this.getTitle() || this._getContent()
                    }, m.addAttachmentClass = function(e) {
                        t(this.getTipElement()).addClass("bs-popover-" + e)
                    }, m.getTipElement = function() {
                        return this.tip = this.tip || t(this.config.template)[0], this.tip
                    }, m.setContent = function() {
                        var e = t(this.getTipElement());
                        this.setElementContent(e.find(u), this.getTitle());
                        var n = this._getContent();
                        "function" == typeof n && (n = n.call(this.element)), this.setElementContent(e.find(d), n), e.removeClass(c + " " + h)
                    }, m._getContent = function() {
                        return this.element.getAttribute("data-content") || this.config.content
                    }, m._cleanTipClass = function() {
                        var e = t(this.getTipElement()),
                            n = e.attr("class").match(o);
                        null !== n && n.length > 0 && e.removeClass(n.join(""))
                    }, g._jQueryInterface = function(e) {
                        return this.each(function() {
                            var n = t(this).data("bs.popover"),
                                i = "object" == typeof e ? e : null;
                            if ((n || !/destroy|hide/.test(e)) && (n || (n = new g(this, i), t(this).data("bs.popover", n)), "string" == typeof e)) {
                                if (void 0 === n[e]) throw new TypeError('No method named "' + e + '"');
                                n[e]()
                            }
                        })
                    }, r(g, null, [{
                        key: "VERSION",
                        get: function() {
                            return "4.1.3"
                        }
                    }, {
                        key: "Default",
                        get: function() {
                            return a
                        }
                    }, {
                        key: "NAME",
                        get: function() {
                            return e
                        }
                    }, {
                        key: "DATA_KEY",
                        get: function() {
                            return "bs.popover"
                        }
                    }, {
                        key: "Event",
                        get: function() {
                            return f
                        }
                    }, {
                        key: "EVENT_KEY",
                        get: function() {
                            return n
                        }
                    }, {
                        key: "DefaultType",
                        get: function() {
                            return l
                        }
                    }]), g
                }(_);
            return t.fn[e] = g._jQueryInterface, t.fn[e].Constructor = g, t.fn[e].noConflict = function() {
                return t.fn[e] = i, g._jQueryInterface
            }, g
        }(e),
        m = function(t) {
            var e = "scrollspy",
                n = t.fn[e],
                i = {
                    offset: 10,
                    method: "auto",
                    target: ""
                },
                o = {
                    offset: "number",
                    method: "string",
                    target: "(string|element)"
                },
                l = {
                    ACTIVATE: "activate.bs.scrollspy",
                    SCROLL: "scroll.bs.scrollspy",
                    LOAD_DATA_API: "load.bs.scrollspy.data-api"
                },
                c = "dropdown-item",
                h = "active",
                u = {
                    DATA_SPY: '[data-spy="scroll"]',
                    ACTIVE: ".active",
                    NAV_LIST_GROUP: ".nav, .list-group",
                    NAV_LINKS: ".nav-link",
                    NAV_ITEMS: ".nav-item",
                    LIST_ITEMS: ".list-group-item",
                    DROPDOWN: ".dropdown",
                    DROPDOWN_ITEMS: ".dropdown-item",
                    DROPDOWN_TOGGLE: ".dropdown-toggle"
                },
                d = "offset",
                f = "position",
                _ = function() {
                    function n(e, n) {
                        var i = this;
                        this._element = e, this._scrollElement = "BODY" === e.tagName ? window : e, this._config = this._getConfig(n), this._selector = this._config.target + " " + u.NAV_LINKS + "," + this._config.target + " " + u.LIST_ITEMS + "," + this._config.target + " " + u.DROPDOWN_ITEMS, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, t(this._scrollElement).on(l.SCROLL, function(t) {
                            return i._process(t)
                        }), this.refresh(), this._process()
                    }
                    var _ = n.prototype;
                    return _.refresh = function() {
                        var e = this,
                            n = this._scrollElement === this._scrollElement.window ? d : f,
                            i = "auto" === this._config.method ? n : this._config.method,
                            r = i === f ? this._getScrollTop() : 0;
                        this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), [].slice.call(document.querySelectorAll(this._selector)).map(function(e) {
                            var n, o = a.getSelectorFromElement(e);
                            if (o && (n = document.querySelector(o)), n) {
                                var s = n.getBoundingClientRect();
                                if (s.width || s.height) return [t(n)[i]().top + r, o]
                            }
                            return null
                        }).filter(function(t) {
                            return t
                        }).sort(function(t, e) {
                            return t[0] - e[0]
                        }).forEach(function(t) {
                            e._offsets.push(t[0]), e._targets.push(t[1])
                        })
                    }, _.dispose = function() {
                        t.removeData(this._element, "bs.scrollspy"), t(this._scrollElement).off(".bs.scrollspy"), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
                    }, _._getConfig = function(n) {
                        if ("string" != typeof(n = s({}, i, "object" == typeof n && n ? n : {})).target) {
                            var r = t(n.target).attr("id");
                            r || (r = a.getUID(e), t(n.target).attr("id", r)), n.target = "#" + r
                        }
                        return a.typeCheckConfig(e, n, o), n
                    }, _._getScrollTop = function() {
                        return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
                    }, _._getScrollHeight = function() {
                        return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
                    }, _._getOffsetHeight = function() {
                        return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
                    }, _._process = function() {
                        var t = this._getScrollTop() + this._config.offset,
                            e = this._getScrollHeight(),
                            n = this._config.offset + e - this._getOffsetHeight();
                        if (this._scrollHeight !== e && this.refresh(), t >= n) {
                            var i = this._targets[this._targets.length - 1];
                            this._activeTarget !== i && this._activate(i)
                        } else {
                            if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();
                            for (var r = this._offsets.length; r--;) {
                                this._activeTarget !== this._targets[r] && t >= this._offsets[r] && (void 0 === this._offsets[r + 1] || t < this._offsets[r + 1]) && this._activate(this._targets[r])
                            }
                        }
                    }, _._activate = function(e) {
                        this._activeTarget = e, this._clear();
                        var n = this._selector.split(",");
                        n = n.map(function(t) {
                            return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]'
                        });
                        var i = t([].slice.call(document.querySelectorAll(n.join(","))));
                        i.hasClass(c) ? (i.closest(u.DROPDOWN).find(u.DROPDOWN_TOGGLE).addClass(h), i.addClass(h)) : (i.addClass(h), i.parents(u.NAV_LIST_GROUP).prev(u.NAV_LINKS + ", " + u.LIST_ITEMS).addClass(h), i.parents(u.NAV_LIST_GROUP).prev(u.NAV_ITEMS).children(u.NAV_LINKS).addClass(h)), t(this._scrollElement).trigger(l.ACTIVATE, {
                            relatedTarget: e
                        })
                    }, _._clear = function() {
                        var e = [].slice.call(document.querySelectorAll(this._selector));
                        t(e).filter(u.ACTIVE).removeClass(h)
                    }, n._jQueryInterface = function(e) {
                        return this.each(function() {
                            var i = t(this).data("bs.scrollspy");
                            if (i || (i = new n(this, "object" == typeof e && e), t(this).data("bs.scrollspy", i)), "string" == typeof e) {
                                if (void 0 === i[e]) throw new TypeError('No method named "' + e + '"');
                                i[e]()
                            }
                        })
                    }, r(n, null, [{
                        key: "VERSION",
                        get: function() {
                            return "4.1.3"
                        }
                    }, {
                        key: "Default",
                        get: function() {
                            return i
                        }
                    }]), n
                }();
            return t(window).on(l.LOAD_DATA_API, function() {
                for (var e = [].slice.call(document.querySelectorAll(u.DATA_SPY)), n = e.length; n--;) {
                    var i = t(e[n]);
                    _._jQueryInterface.call(i, i.data())
                }
            }), t.fn[e] = _._jQueryInterface, t.fn[e].Constructor = _, t.fn[e].noConflict = function() {
                return t.fn[e] = n, _._jQueryInterface
            }, _
        }(e),
        p = function(t) {
            var e = t.fn.tab,
                n = {
                    HIDE: "hide.bs.tab",
                    HIDDEN: "hidden.bs.tab",
                    SHOW: "show.bs.tab",
                    SHOWN: "shown.bs.tab",
                    CLICK_DATA_API: "click.bs.tab.data-api"
                },
                i = "dropdown-menu",
                o = "active",
                s = "disabled",
                l = "fade",
                c = "show",
                h = ".dropdown",
                u = ".nav, .list-group",
                d = ".active",
                f = "> li > .active",
                _ = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
                g = ".dropdown-toggle",
                m = "> .dropdown-menu .active",
                p = function() {
                    function e(t) {
                        this._element = t
                    }
                    var _ = e.prototype;
                    return _.show = function() {
                        var e = this;
                        if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && t(this._element).hasClass(o) || t(this._element).hasClass(s))) {
                            var i, r, l = t(this._element).closest(u)[0],
                                c = a.getSelectorFromElement(this._element);
                            if (l) {
                                var h = "UL" === l.nodeName ? f : d;
                                r = (r = t.makeArray(t(l).find(h)))[r.length - 1]
                            }
                            var _ = t.Event(n.HIDE, {
                                    relatedTarget: this._element
                                }),
                                g = t.Event(n.SHOW, {
                                    relatedTarget: r
                                });
                            if (r && t(r).trigger(_), t(this._element).trigger(g), !g.isDefaultPrevented() && !_.isDefaultPrevented()) {
                                c && (i = document.querySelector(c)), this._activate(this._element, l);
                                var m = function() {
                                    var i = t.Event(n.HIDDEN, {
                                            relatedTarget: e._element
                                        }),
                                        o = t.Event(n.SHOWN, {
                                            relatedTarget: r
                                        });
                                    t(r).trigger(i), t(e._element).trigger(o)
                                };
                                i ? this._activate(i, i.parentNode, m) : m()
                            }
                        }
                    }, _.dispose = function() {
                        t.removeData(this._element, "bs.tab"), this._element = null
                    }, _._activate = function(e, n, i) {
                        var r = this,
                            o = ("UL" === n.nodeName ? t(n).find(f) : t(n).children(d))[0],
                            s = i && o && t(o).hasClass(l),
                            c = function() {
                                return r._transitionComplete(e, o, i)
                            };
                        if (o && s) {
                            var h = a.getTransitionDurationFromElement(o);
                            t(o).one(a.TRANSITION_END, c).emulateTransitionEnd(h)
                        } else c()
                    }, _._transitionComplete = function(e, n, r) {
                        if (n) {
                            t(n).removeClass(c + " " + o);
                            var s = t(n.parentNode).find(m)[0];
                            s && t(s).removeClass(o), "tab" === n.getAttribute("role") && n.setAttribute("aria-selected", !1)
                        }
                        if (t(e).addClass(o), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0), a.reflow(e), t(e).addClass(c), e.parentNode && t(e.parentNode).hasClass(i)) {
                            var l = t(e).closest(h)[0];
                            if (l) {
                                var u = [].slice.call(l.querySelectorAll(g));
                                t(u).addClass(o)
                            }
                            e.setAttribute("aria-expanded", !0)
                        }
                        r && r()
                    }, e._jQueryInterface = function(n) {
                        return this.each(function() {
                            var i = t(this),
                                r = i.data("bs.tab");
                            if (r || (r = new e(this), i.data("bs.tab", r)), "string" == typeof n) {
                                if (void 0 === r[n]) throw new TypeError('No method named "' + n + '"');
                                r[n]()
                            }
                        })
                    }, r(e, null, [{
                        key: "VERSION",
                        get: function() {
                            return "4.1.3"
                        }
                    }]), e
                }();
            return t(document).on(n.CLICK_DATA_API, _, function(e) {
                e.preventDefault(), p._jQueryInterface.call(t(this), "show")
            }), t.fn.tab = p._jQueryInterface, t.fn.tab.Constructor = p, t.fn.tab.noConflict = function() {
                return t.fn.tab = e, p._jQueryInterface
            }, p
        }(e);
    ! function(t) {
        if (void 0 === t) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
        var e = t.fn.jquery.split(" ")[0].split(".");
        if (e[0] < 2 && e[1] < 9 || 1 === e[0] && 9 === e[1] && e[2] < 1 || e[0] >= 4) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
    }(e), t.Util = a, t.Alert = l, t.Button = c, t.Carousel = h, t.Collapse = u, t.Dropdown = d, t.Modal = f, t.Popover = g, t.Scrollspy = m, t.Tab = p, t.Tooltip = _, Object.defineProperty(t, "__esModule", {
        value: !0
    })
});
(function(t) {
    t.extend(t.fn, {
        validate: function(e) {
            if (this.length) {
                var i = t.data(this[0], "validator");
                return i || (this.attr("novalidate", "novalidate"), i = new t.validator(e, this[0]), t.data(this[0], "validator", i), i.settings.onsubmit && (this.validateDelegate(":submit", "click", function(e) {
                    i.settings.submitHandler && (i.submitButton = e.target), t(e.target).hasClass("cancel") && (i.cancelSubmit = !0)
                }), this.submit(function(e) {
                    function r() {
                        var r;
                        return !i.settings.submitHandler || (i.submitButton && (r = t("<input type='hidden'/>").attr("name", i.submitButton.name).val(i.submitButton.value).appendTo(i.currentForm)), i.settings.submitHandler.call(i, i.currentForm, e), i.submitButton && r.remove(), !1)
                    }
                    return i.settings.debug && e.preventDefault(), i.cancelSubmit ? (i.cancelSubmit = !1, r()) : i.form() ? i.pendingRequest ? (i.formSubmitted = !0, !1) : r() : (i.focusInvalid(), !1)
                })), i)
            }
            e && e.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing.")
        },
        valid: function() {
            if (t(this[0]).is("form")) return this.validate().form();
            var e = !0,
                i = t(this[0].form).validate();
            return this.each(function() {
                e &= i.element(this)
            }), e
        },
        removeAttrs: function(e) {
            var i = {},
                r = this;
            return t.each(e.split(/\s/), function(t, e) {
                i[e] = r.attr(e), r.removeAttr(e)
            }), i
        },
        rules: function(e, i) {
            var r = this[0];
            if (e) {
                var n = t.data(r.form, "validator").settings,
                    s = n.rules,
                    a = t.validator.staticRules(r);
                switch (e) {
                    case "add":
                        t.extend(a, t.validator.normalizeRule(i)), s[r.name] = a, i.messages && (n.messages[r.name] = t.extend(n.messages[r.name], i.messages));
                        break;
                    case "remove":
                        if (!i) return delete s[r.name], a;
                        var u = {};
                        return t.each(i.split(/\s/), function(t, e) {
                            u[e] = a[e], delete a[e]
                        }), u
                }
            }
            var o = t.validator.normalizeRules(t.extend({}, t.validator.classRules(r), t.validator.attributeRules(r), t.validator.dataRules(r), t.validator.staticRules(r)), r);
            if (o.required) {
                var l = o.required;
                delete o.required, o = t.extend({
                    required: l
                }, o)
            }
            return o
        }
    }), t.extend(t.expr[":"], {
        blank: function(e) {
            return !t.trim("" + e.value)
        },
        filled: function(e) {
            return !!t.trim("" + e.value)
        },
        unchecked: function(t) {
            return !t.checked
        }
    }), t.validator = function(e, i) {
        this.settings = t.extend(!0, {}, t.validator.defaults, e), this.currentForm = i, this.init()
    }, t.validator.format = function(e, i) {
        return 1 === arguments.length ? function() {
            var i = t.makeArray(arguments);
            return i.unshift(e), t.validator.format.apply(this, i)
        } : (arguments.length > 2 && i.constructor !== Array && (i = t.makeArray(arguments).slice(1)), i.constructor !== Array && (i = [i]), t.each(i, function(t, i) {
            e = e.replace(new RegExp("\\{" + t + "\\}", "g"), function() {
                return i
            })
        }), e)
    }, t.extend(t.validator, {
        defaults: {
            messages: {},
            groups: {},
            rules: {},
            errorClass: "error",
            validClass: "valid",
            errorElement: "span",
            focusInvalid: !0,
            errorContainer: t([]),
            errorLabelContainer: t([]),
            onsubmit: !0,
            ignore: ":hidden",
            ignoreTitle: !1,
            onfocusin: function(t, e) {
                this.lastActive = t, this.settings.focusCleanup && !this.blockFocusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, t, this.settings.errorClass, this.settings.validClass), this.addWrapper(this.errorsFor(t)).hide())
            },
            onfocusout: function(t, e) {
                !this.checkable(t) && (t.name in this.submitted || !this.optional(t)) && this.element(t)
            },
            onkeyup: function(t, e) {
                9 === e.which && "" === this.elementValue(t) || (t.name in this.submitted || t === this.lastElement) && this.element(t)
            },
            onclick: function(t, e) {
                t.name in this.submitted ? this.element(t) : t.parentNode.name in this.submitted && this.element(t.parentNode)
            },
            highlight: function(e, i, r) {
                "radio" === e.type ? this.findByName(e.name).addClass(i).removeClass(r) : t(e).addClass(i).removeClass(r)
            },
            unhighlight: function(e, i, r) {
                "radio" === e.type ? this.findByName(e.name).removeClass(i).addClass(r) : t(e).removeClass(i).addClass(r)
            }
        },
        setDefaults: function(e) {
            t.extend(t.validator.defaults, e)
        },
        messages: {
            required: "This field is required.",
            remote: "Please fix this field.",
            email: "Please enter a valid email address.",
            url: "Please enter a valid URL.",
            date: "Please enter a valid date.",
            dateISO: "Please enter a valid date (ISO).",
            number: "Please enter a valid number.",
            digits: "Please enter only digits.",
            creditcard: "Please enter a valid credit card number.",
            equalTo: "Please enter the same value again.",
            maxlength: t.validator.format("Please enter no more than {0} characters."),
            minlength: t.validator.format("Please enter at least {0} characters."),
            rangelength: t.validator.format("Please enter a value between {0} and {1} characters long."),
            range: t.validator.format("Please enter a value between {0} and {1}."),
            max: t.validator.format("Please enter a value less than or equal to {0}."),
            min: t.validator.format("Please enter a value greater than or equal to {0}.")
        },
        autoCreateRanges: !1,
        prototype: {
            init: function() {
                function e(e) {
                    var i = t.data(this[0].form, "validator"),
                        r = "on" + e.type.replace(/^validate/, "");
                    i.settings[r] && i.settings[r].call(i, this[0], e)
                }
                this.labelContainer = t(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || t(this.currentForm), this.containers = t(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
                var i = this.groups = {};
                t.each(this.settings.groups, function(e, r) {
                    "string" == typeof r && (r = r.split(/\s/)), t.each(r, function(t, r) {
                        i[r] = e
                    })
                });
                var r = this.settings.rules;
                t.each(r, function(e, i) {
                    r[e] = t.validator.normalizeRule(i)
                }), t(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] ", "focusin focusout keyup", e).validateDelegate("[type='radio'], [type='checkbox'], select, option", "click", e), this.settings.invalidHandler && t(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler)
            },
            form: function() {
                return this.checkForm(), t.extend(this.submitted, this.errorMap), this.invalid = t.extend({}, this.errorMap), this.valid() || t(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
            },
            checkForm: function() {
                this.prepareForm();
                for (var t = 0, e = this.currentElements = this.elements(); e[t]; t++) this.check(e[t]);
                return this.valid()
            },
            element: function(e) {
                e = this.validationTargetFor(this.clean(e)), this.lastElement = e, this.prepareElement(e), this.currentElements = t(e);
                var i = !1 !== this.check(e);
                return i ? delete this.invalid[e.name] : this.invalid[e.name] = !0, this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), i
            },
            showErrors: function(e) {
                if (e) {
                    for (var i in t.extend(this.errorMap, e), this.errorList = [], e) this.errorList.push({
                        message: e[i],
                        element: this.findByName(i)[0]
                    });
                    this.successList = t.grep(this.successList, function(t) {
                        return !(t.name in e)
                    })
                }
                this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
            },
            resetForm: function() {
                t.fn.resetForm && t(this.currentForm).resetForm(), this.submitted = {}, this.lastElement = null, this.prepareForm(), this.hideErrors(), this.elements().removeClass(this.settings.errorClass).removeData("previousValue")
            },
            numberOfInvalids: function() {
                return this.objectLength(this.invalid)
            },
            objectLength: function(t) {
                var e = 0;
                for (var i in t) e++;
                return e
            },
            hideErrors: function() {
                this.addWrapper(this.toHide).hide()
            },
            valid: function() {
                return 0 === this.size()
            },
            size: function() {
                return this.errorList.length
            },
            focusInvalid: function() {
                if (this.settings.focusInvalid) try {
                    t(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
                } catch (t) {}
            },
            findLastActive: function() {
                var e = this.lastActive;
                return e && 1 === t.grep(this.errorList, function(t) {
                    return t.element.name === e.name
                }).length && e
            },
            elements: function() {
                var e = this,
                    i = {};
                return t(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function() {
                    return !this.name && e.settings.debug && window.console && console.error("%o has no name assigned", this), !(this.name in i || !e.objectLength(t(this).rules())) && (i[this.name] = !0, !0)
                })
            },
            clean: function(e) {
                return t(e)[0]
            },
            errors: function() {
                var e = this.settings.errorClass.replace(" ", ".");
                return t(this.settings.errorElement + "." + e, this.errorContext)
            },
            reset: function() {
                this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = t([]), this.toHide = t([]), this.currentElements = t([])
            },
            prepareForm: function() {
                this.reset(), this.toHide = this.errors().add(this.containers)
            },
            prepareElement: function(t) {
                this.reset(), this.toHide = this.errorsFor(t)
            },
            elementValue: function(e) {
                var i = t(e).attr("type"),
                    r = t(e).val();
                return "radio" === i || "checkbox" === i ? t("input[name='" + t(e).attr("name") + "']:checked").val() : "string" == typeof r ? r.replace(/\r/g, "") : r
            },
            check: function(e) {
                e = this.validationTargetFor(this.clean(e));
                var i, r = t(e).rules(),
                    n = !1,
                    s = this.elementValue(e);
                for (var a in r) {
                    var u = {
                        method: a,
                        parameters: r[a]
                    };
                    try {
                        if ("dependency-mismatch" === (i = t.validator.methods[a].call(this, s, e, u.parameters))) {
                            n = !0;
                            continue
                        }
                        if (n = !1, "pending" === i) return void(this.toHide = this.toHide.not(this.errorsFor(e)));
                        if (!i) return this.formatAndAdd(e, u), !1
                    } catch (t) {
                        throw this.settings.debug && window.console && console.log("Exception occured when checking element " + e.id + ", check the '" + u.method + "' method.", t), t
                    }
                }
                if (!n) return this.objectLength(r) && this.successList.push(e), !0
            },
            customDataMessage: function(e, i) {
                return t(e).data("msg-" + i.toLowerCase()) || e.attributes && t(e).attr("data-msg-" + i.toLowerCase())
            },
            customMessage: function(t, e) {
                var i = this.settings.messages[t];
                return i && (i.constructor === String ? i : i[e])
            },
            findDefined: function() {
                for (var t = 0; t < arguments.length; t++)
                    if (void 0 !== arguments[t]) return arguments[t]
            },
            defaultMessage: function(e, i) {
                return this.findDefined(this.customMessage(e.name, i), this.customDataMessage(e, i), !this.settings.ignoreTitle && e.title || void 0, t.validator.messages[i], "<strong>Warning: No message defined for " + e.name + "</strong>")
            },
            formatAndAdd: function(e, i) {
                var r = this.defaultMessage(e, i.method),
                    n = /\$?\{(\d+)\}/g;
                "function" == typeof r ? r = r.call(this, i.parameters, e) : n.test(r) && (r = t.validator.format(r.replace(n, "{$1}"), i.parameters)), this.errorList.push({
                    message: r,
                    element: e
                }), this.errorMap[e.name] = r, this.submitted[e.name] = r
            },
            addWrapper: function(t) {
                return this.settings.wrapper && (t = t.add(t.parent(this.settings.wrapper))), t
            },
            defaultShowErrors: function() {
                var t, e;
                for (t = 0; this.errorList[t]; t++) {
                    var i = this.errorList[t];
                    this.settings.highlight && this.settings.highlight.call(this, i.element, this.settings.errorClass, this.settings.validClass), this.showLabel(i.element, i.message)
                }
                if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)
                    for (t = 0; this.successList[t]; t++) this.showLabel(this.successList[t]);
                if (this.settings.unhighlight)
                    for (t = 0, e = this.validElements(); e[t]; t++) this.settings.unhighlight.call(this, e[t], this.settings.errorClass, this.settings.validClass);
                this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
            },
            validElements: function() {
                return this.currentElements.not(this.invalidElements())
            },
            invalidElements: function() {
                return t(this.errorList).map(function() {
                    return this.element
                })
            },
            showLabel: function(e, i) {
                var r = this.errorsFor(e);
                r.length ? (r.removeClass(this.settings.validClass).addClass(this.settings.errorClass), r.html(i)) : (r = t("<" + this.settings.errorElement + ">").attr("for", this.idOrName(e)).addClass(this.settings.errorClass).html(i || ""), this.settings.wrapper && (r = r.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.append(r).length || (this.settings.errorPlacement ? this.settings.errorPlacement(r, t(e)) : r.insertAfter(e))), !i && this.settings.success && (r.text(""), "string" == typeof this.settings.success ? r.addClass(this.settings.success) : this.settings.success(r, e)), this.toShow = this.toShow.add(r)
            },
            errorsFor: function(e) {
                var i = this.idOrName(e);
                return this.errors().filter(function() {
                    return t(this).attr("for") === i
                })
            },
            idOrName: function(t) {
                return this.groups[t.name] || (this.checkable(t) ? t.name : t.id || t.name)
            },
            validationTargetFor: function(t) {
                return this.checkable(t) && (t = this.findByName(t.name).not(this.settings.ignore)[0]), t
            },
            checkable: function(t) {
                return /radio|checkbox/i.test(t.type)
            },
            findByName: function(e) {
                return t(this.currentForm).find("[name='" + e + "']")
            },
            getLength: function(e, i) {
                switch (i.nodeName.toLowerCase()) {
                    case "select":
                        return t("option:selected", i).length;
                    case "input":
                        if (this.checkable(i)) return this.findByName(i.name).filter(":checked").length
                }
                return e.length
            },
            depend: function(t, e) {
                return !this.dependTypes[typeof t] || this.dependTypes[typeof t](t, e)
            },
            dependTypes: {
                boolean: function(t, e) {
                    return t
                },
                string: function(e, i) {
                    return !!t(e, i.form).length
                },
                function: function(t, e) {
                    return t(e)
                }
            },
            optional: function(e) {
                var i = this.elementValue(e);
                return !t.validator.methods.required.call(this, i, e) && "dependency-mismatch"
            },
            startRequest: function(t) {
                this.pending[t.name] || (this.pendingRequest++, this.pending[t.name] = !0)
            },
            stopRequest: function(e, i) {
                this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[e.name], i && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (t(this.currentForm).submit(), this.formSubmitted = !1) : !i && 0 === this.pendingRequest && this.formSubmitted && (t(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
            },
            previousValue: function(e) {
                return t.data(e, "previousValue") || t.data(e, "previousValue", {
                    old: null,
                    valid: !0,
                    message: this.defaultMessage(e, "remote")
                })
            }
        },
        classRuleSettings: {
            required: {
                required: !0
            },
            email: {
                email: !0
            },
            url: {
                url: !0
            },
            date: {
                date: !0
            },
            dateISO: {
                dateISO: !0
            },
            number: {
                number: !0
            },
            digits: {
                digits: !0
            },
            creditcard: {
                creditcard: !0
            }
        },
        addClassRules: function(e, i) {
            e.constructor === String ? this.classRuleSettings[e] = i : t.extend(this.classRuleSettings, e)
        },
        classRules: function(e) {
            var i = {},
                r = t(e).attr("class");
            return r && t.each(r.split(" "), function() {
                this in t.validator.classRuleSettings && t.extend(i, t.validator.classRuleSettings[this])
            }), i
        },
        attributeRules: function(e) {
            var i = {},
                r = t(e);
            for (var n in t.validator.methods) {
                var s;
                "required" === n ? ("" === (s = r.get(0).getAttribute(n)) && (s = !0), s = !!s) : s = r.attr(n), s ? i[n] = s : r[0].getAttribute("type") === n && (i[n] = !0)
            }
            return i.maxlength && /-1|2147483647|524288/.test(i.maxlength) && delete i.maxlength, i
        },
        dataRules: function(e) {
            var i, r, n = {},
                s = t(e);
            for (i in t.validator.methods) void 0 !== (r = s.data("rule-" + i.toLowerCase())) && (n[i] = r);
            return n
        },
        staticRules: function(e) {
            var i = {},
                r = t.data(e.form, "validator");
            return r.settings.rules && (i = t.validator.normalizeRule(r.settings.rules[e.name]) || {}), i
        },
        normalizeRules: function(e, i) {
            return t.each(e, function(r, n) {
                if (!1 !== n) {
                    if (n.param || n.depends) {
                        var s = !0;
                        switch (typeof n.depends) {
                            case "string":
                                s = !!t(n.depends, i.form).length;
                                break;
                            case "function":
                                s = n.depends.call(i, i)
                        }
                        s ? e[r] = void 0 === n.param || n.param : delete e[r]
                    }
                } else delete e[r]
            }), t.each(e, function(r, n) {
                e[r] = t.isFunction(n) ? n(i) : n
            }), t.each(["minlength", "maxlength"], function() {
                e[this] && (e[this] = Number(e[this]))
            }), t.each(["rangelength"], function() {
                var i;
                e[this] && (t.isArray(e[this]) ? e[this] = [Number(e[this][0]), Number(e[this][1])] : "string" == typeof e[this] && (i = e[this].split(/[\s,]+/), e[this] = [Number(i[0]), Number(i[1])]))
            }), t.validator.autoCreateRanges && (e.min && e.max && (e.range = [e.min, e.max], delete e.min, delete e.max), e.minlength && e.maxlength && (e.rangelength = [e.minlength, e.maxlength], delete e.minlength, delete e.maxlength)), e
        },
        normalizeRule: function(e) {
            if ("string" == typeof e) {
                var i = {};
                t.each(e.split(/\s/), function() {
                    i[this] = !0
                }), e = i
            }
            return e
        },
        addMethod: function(e, i, r) {
            t.validator.methods[e] = i, t.validator.messages[e] = void 0 !== r ? r : t.validator.messages[e], i.length < 3 && t.validator.addClassRules(e, t.validator.normalizeRule(e))
        },
        methods: {
            required: function(e, i, r) {
                if (!this.depend(r, i)) return "dependency-mismatch";
                if ("select" === i.nodeName.toLowerCase()) {
                    var n = t(i).val();
                    return n && n.length > 0
                }
                return this.checkable(i) ? this.getLength(e, i) > 0 : t.trim(e).length > 0
            },
            remote: function(e, i, r) {
                if (this.optional(i)) return "dependency-mismatch";
                var n = this.previousValue(i);
                if (this.settings.messages[i.name] || (this.settings.messages[i.name] = {}), n.originalMessage = this.settings.messages[i.name].remote, this.settings.messages[i.name].remote = n.message, r = "string" == typeof r && {
                        url: r
                    } || r, n.old === e) return n.valid;
                n.old = e;
                var s = this;
                this.startRequest(i);
                var a = {};
                return a[i.name] = e, t.ajax(t.extend(!0, {
                    url: r,
                    mode: "abort",
                    port: "validate" + i.name,
                    dataType: "json",
                    data: a,
                    success: function(r) {
                        s.settings.messages[i.name].remote = n.originalMessage;
                        var a = !0 === r || "true" === r;
                        if (a) {
                            var u = s.formSubmitted;
                            s.prepareElement(i), s.formSubmitted = u, s.successList.push(i), delete s.invalid[i.name], s.showErrors()
                        } else {
                            var o = {},
                                l = r || s.defaultMessage(i, "remote");
                            o[i.name] = n.message = t.isFunction(l) ? l(e) : l, s.invalid[i.name] = !0, s.showErrors(o)
                        }
                        n.valid = a, s.stopRequest(i, a)
                    }
                }, r)), "pending"
            },
            minlength: function(e, i, r) {
                var n = t.isArray(e) ? e.length : this.getLength(t.trim(e), i);
                return this.optional(i) || n >= r
            },
            maxlength: function(e, i, r) {
                var n = t.isArray(e) ? e.length : this.getLength(t.trim(e), i);
                return this.optional(i) || n <= r
            },
            rangelength: function(e, i, r) {
                var n = t.isArray(e) ? e.length : this.getLength(t.trim(e), i);
                return this.optional(i) || n >= r[0] && n <= r[1]
            },
            min: function(t, e, i) {
                return this.optional(e) || t >= i
            },
            max: function(t, e, i) {
                return this.optional(e) || t <= i
            },
            range: function(t, e, i) {
                return this.optional(e) || t >= i[0] && t <= i[1]
            },
            email: function(t, e) {
                return this.optional(e) || /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(t)
            },
            url: function(t, e) {
                return this.optional(e) || /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(t)
            },
            date: function(t, e) {
                return this.optional(e) || !/Invalid|NaN/.test(new Date(t).toString())
            },
            dateISO: function(t, e) {
                return this.optional(e) || /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/.test(t)
            },
            number: function(t, e) {
                return this.optional(e) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(t)
            },
            digits: function(t, e) {
                return this.optional(e) || /^\d+$/.test(t)
            },
            creditcard: function(t, e) {
                if (this.optional(e)) return "dependency-mismatch";
                if (/[^0-9 \-]+/.test(t)) return !1;
                for (var i = 0, r = 0, n = !1, s = (t = t.replace(/\D/g, "")).length - 1; s >= 0; s--) {
                    var a = t.charAt(s);
                    r = parseInt(a, 10), n && (r *= 2) > 9 && (r -= 9), i += r, n = !n
                }
                return i % 10 == 0
            },
            equalTo: function(e, i, r) {
                var n = t(r);
                return this.settings.onfocusout && n.unbind(".validate-equalTo").bind("blur.validate-equalTo", function() {
                    t(i).valid()
                }), e === n.val()
            }
        }
    }), t.format = t.validator.format
})(jQuery),
function(t) {
    var e = {};
    if (t.ajaxPrefilter) t.ajaxPrefilter(function(t, i, r) {
        var n = t.port;
        "abort" === t.mode && (e[n] && e[n].abort(), e[n] = r)
    });
    else {
        var i = t.ajax;
        t.ajax = function(r) {
            var n = ("mode" in r ? r : t.ajaxSettings).mode,
                s = ("port" in r ? r : t.ajaxSettings).port;
            return "abort" === n ? (e[s] && e[s].abort(), e[s] = i.apply(this, arguments)) : i.apply(this, arguments)
        }
    }
}(jQuery),
function(t) {
    t.extend(t.fn, {
        validateDelegate: function(e, i, r) {
            return this.bind(i, function(i) {
                var n = t(i.target);
                if (n.is(e)) return r.apply(n, arguments)
            })
        }
    })
}(jQuery), $.extend($.validator.messages, {
    required: "Bu alanın doldurulması zorunludur.",
    remote: "Lütfen bu alanı düzeltin.",
    email: "Lütfen geçerli bir e-posta adresi giriniz.",
    url: "Lütfen geçerli bir web adresi (URL) giriniz.",
    date: "Lütfen geçerli bir tarih giriniz.",
    dateISO: "Lütfen geçerli bir tarih giriniz(ISO formatında)",
    number: "Lütfen geçerli bir sayı giriniz.",
    digits: "Lütfen sadece sayısal karakterler giriniz.",
    creditcard: "Lütfen geçerli bir kredi kartı giriniz.",
    equalTo: "Lütfen aynı değeri tekrar giriniz.",
    extension: "Lütfen geçerli uzantıya sahip bir değer giriniz.",
    maxlength: $.validator.format("Lütfen en fazla {0} karakter uzunluğunda bir değer giriniz."),
    minlength: $.validator.format("Lütfen en az 10 karakter uzunluğunda bir değer giriniz."),
    rangelength: $.validator.format("Lütfen en az {0} ve en fazla {1} uzunluğunda bir değer giriniz."),
    range: $.validator.format("Lütfen {0} ile {1} arasında bir değer giriniz."),
    max: $.validator.format("Lütfen {0} değerine eşit ya da daha küçük bir değer giriniz."),
    min: $.validator.format("Lütfen {0} değerine eşit ya da daha büyük bir değer giriniz."),
    require_from_group: $.validator.format("Lütfen bu alanların en az {0} tanesini doldurunuz.")
});
! function(t, e, i, s) {
    function n(e, i) {
        this.settings = null, this.options = t.extend({}, n.Defaults, i), this.$element = t(e), this._handlers = {}, this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._widths = [], this._invalidated = {}, this._pipe = [], this._drag = {
            time: null,
            target: null,
            pointer: null,
            stage: {
                start: null,
                current: null
            },
            direction: null
        }, this._states = {
            current: {},
            tags: {
                initializing: ["busy"],
                animating: ["busy"],
                dragging: ["interacting"]
            }
        }, t.each(["onResize", "onThrottledResize"], t.proxy(function(e, i) {
            this._handlers[i] = t.proxy(this[i], this)
        }, this)), t.each(n.Plugins, t.proxy(function(t, e) {
            this._plugins[t.charAt(0).toLowerCase() + t.slice(1)] = new e(this)
        }, this)), t.each(n.Workers, t.proxy(function(e, i) {
            this._pipe.push({
                filter: i.filter,
                run: t.proxy(i.run, this)
            })
        }, this)), this.setup(), this.initialize()
    }
    n.Defaults = {
        items: 3,
        loop: !1,
        center: !1,
        rewind: !1,
        checkVisibility: !0,
        mouseDrag: !0,
        touchDrag: !0,
        pullDrag: !0,
        freeDrag: !1,
        margin: 0,
        stagePadding: 0,
        merge: !1,
        mergeFit: !0,
        autoWidth: !1,
        startPosition: 0,
        rtl: !1,
        smartSpeed: 250,
        fluidSpeed: !1,
        dragEndSpeed: !1,
        responsive: {},
        responsiveRefreshRate: 200,
        responsiveBaseElement: e,
        fallbackEasing: "swing",
        slideTransition: "",
        info: !1,
        nestedItemSelector: !1,
        itemElement: "div",
        stageElement: "div",
        refreshClass: "owl-refresh",
        loadedClass: "owl-loaded",
        loadingClass: "owl-loading",
        rtlClass: "owl-rtl",
        responsiveClass: "owl-responsive",
        dragClass: "owl-drag",
        itemClass: "owl-item",
        stageClass: "owl-stage",
        stageOuterClass: "owl-stage-outer",
        grabClass: "owl-grab"
    }, n.Width = {
        Default: "default",
        Inner: "inner",
        Outer: "outer"
    }, n.Type = {
        Event: "event",
        State: "state"
    }, n.Plugins = {}, n.Workers = [{
        filter: ["width", "settings"],
        run: function() {
            this._width = this.$element.width()
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(t) {
            t.current = this._items && this._items[this.relative(this._current)]
        }
    }, {
        filter: ["items", "settings"],
        run: function() {
            this.$stage.children(".cloned").remove()
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(t) {
            var e = this.settings.margin || "",
                i = !this.settings.autoWidth,
                s = this.settings.rtl,
                n = {
                    width: "auto",
                    "margin-left": s ? e : "",
                    "margin-right": s ? "" : e
                };
            !i && this.$stage.children().css(n), t.css = n
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(t) {
            var e = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
                i = null,
                s = this._items.length,
                n = !this.settings.autoWidth,
                o = [];
            for (t.items = {
                    merge: !1,
                    width: e
                }; s--;) i = this._mergers[s], i = this.settings.mergeFit && Math.min(i, this.settings.items) || i, t.items.merge = i > 1 || t.items.merge, o[s] = n ? e * i : this._items[s].width();
            this._widths = o
        }
    }, {
        filter: ["items", "settings"],
        run: function() {
            var e = [],
                i = this._items,
                s = this.settings,
                n = Math.max(2 * s.items, 4),
                o = 2 * Math.ceil(i.length / 2),
                r = s.loop && i.length ? s.rewind ? n : Math.max(n, o) : 0,
                a = "",
                h = "";
            for (r /= 2; r > 0;) e.push(this.normalize(e.length / 2, !0)), a += i[e[e.length - 1]][0].outerHTML, e.push(this.normalize(i.length - 1 - (e.length - 1) / 2, !0)), h = i[e[e.length - 1]][0].outerHTML + h, r -= 1;
            this._clones = e, t(a).addClass("cloned").appendTo(this.$stage), t(h).addClass("cloned").prependTo(this.$stage)
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function() {
            for (var t = this.settings.rtl ? 1 : -1, e = this._clones.length + this._items.length, i = -1, s = 0, n = 0, o = []; ++i < e;) s = o[i - 1] || 0, n = this._widths[this.relative(i)] + this.settings.margin, o.push(s + n * t);
            this._coordinates = o
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function() {
            var t = this.settings.stagePadding,
                e = this._coordinates,
                i = {
                    width: Math.ceil(Math.abs(e[e.length - 1])) + 2 * t,
                    "padding-left": t || "",
                    "padding-right": t || ""
                };
            this.$stage.css(i)
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(t) {
            var e = this._coordinates.length,
                i = !this.settings.autoWidth,
                s = this.$stage.children();
            if (i && t.items.merge)
                for (; e--;) t.css.width = this._widths[this.relative(e)], s.eq(e).css(t.css);
            else i && (t.css.width = t.items.width, s.css(t.css))
        }
    }, {
        filter: ["items"],
        run: function() {
            this._coordinates.length < 1 && this.$stage.removeAttr("style")
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(t) {
            t.current = t.current ? this.$stage.children().index(t.current) : 0, t.current = Math.max(this.minimum(), Math.min(this.maximum(), t.current)), this.reset(t.current)
        }
    }, {
        filter: ["position"],
        run: function() {
            this.animate(this.coordinates(this._current))
        }
    }, {
        filter: ["width", "position", "items", "settings"],
        run: function() {
            var t, e, i, s, n = this.settings.rtl ? 1 : -1,
                o = 2 * this.settings.stagePadding,
                r = this.coordinates(this.current()) + o,
                a = r + this.width() * n,
                h = [];
            for (i = 0, s = this._coordinates.length; i < s; i++) t = this._coordinates[i - 1] || 0, e = Math.abs(this._coordinates[i]) + o * n, (this.op(t, "<=", r) && this.op(t, ">", a) || this.op(e, "<", r) && this.op(e, ">", a)) && h.push(i);
            this.$stage.children(".active").removeClass("active"), this.$stage.children(":eq(" + h.join("), :eq(") + ")").addClass("active"), this.$stage.children(".center").removeClass("center"), this.settings.center && this.$stage.children().eq(this.current()).addClass("center")
        }
    }], n.prototype.initializeStage = function() {
        this.$stage = this.$element.find("." + this.settings.stageClass), this.$stage.length || (this.$element.addClass(this.options.loadingClass), this.$stage = t("<" + this.settings.stageElement + ">", {
            class: this.settings.stageClass
        }).wrap(t("<div/>", {
            class: this.settings.stageOuterClass
        })), this.$element.append(this.$stage.parent()))
    }, n.prototype.initializeItems = function() {
        var e = this.$element.find(".owl-item");
        if (e.length) return this._items = e.get().map(function(e) {
            return t(e)
        }), this._mergers = this._items.map(function() {
            return 1
        }), void this.refresh();
        this.replace(this.$element.children().not(this.$stage.parent())), this.isVisible() ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass)
    }, n.prototype.initialize = function() {
        var t, e, i;
        (this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading")) && (t = this.$element.find("img"), e = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : s, i = this.$element.children(e).width(), t.length && i <= 0 && this.preloadAutoWidthImages(t));
        this.initializeStage(), this.initializeItems(), this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized")
    }, n.prototype.isVisible = function() {
        return !this.settings.checkVisibility || this.$element.is(":visible")
    }, n.prototype.setup = function() {
        var e = this.viewport(),
            i = this.options.responsive,
            s = -1,
            n = null;
        i ? (t.each(i, function(t) {
            t <= e && t > s && (s = Number(t))
        }), "function" == typeof(n = t.extend({}, this.options, i[s])).stagePadding && (n.stagePadding = n.stagePadding()), delete n.responsive, n.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + s))) : n = t.extend({}, this.options), this.trigger("change", {
            property: {
                name: "settings",
                value: n
            }
        }), this._breakpoint = s, this.settings = n, this.invalidate("settings"), this.trigger("changed", {
            property: {
                name: "settings",
                value: this.settings
            }
        })
    }, n.prototype.optionsLogic = function() {
        this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
    }, n.prototype.prepare = function(e) {
        var i = this.trigger("prepare", {
            content: e
        });
        return i.data || (i.data = t("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(e)), this.trigger("prepared", {
            content: i.data
        }), i.data
    }, n.prototype.update = function() {
        for (var e = 0, i = this._pipe.length, s = t.proxy(function(t) {
                return this[t]
            }, this._invalidated), n = {}; e < i;)(this._invalidated.all || t.grep(this._pipe[e].filter, s).length > 0) && this._pipe[e].run(n), e++;
        this._invalidated = {}, !this.is("valid") && this.enter("valid")
    }, n.prototype.width = function(t) {
        switch (t = t || n.Width.Default) {
            case n.Width.Inner:
            case n.Width.Outer:
                return this._width;
            default:
                return this._width - 2 * this.settings.stagePadding + this.settings.margin
        }
    }, n.prototype.refresh = function() {
        this.enter("refreshing"), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$element.addClass(this.options.refreshClass), this.update(), this.$element.removeClass(this.options.refreshClass), this.leave("refreshing"), this.trigger("refreshed")
    }, n.prototype.onThrottledResize = function() {
        e.clearTimeout(this.resizeTimer), this.resizeTimer = e.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate)
    }, n.prototype.onResize = function() {
        return !!this._items.length && this._width !== this.$element.width() && !!this.isVisible() && (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized")))
    }, n.prototype.registerEventHandlers = function() {
        t.support.transition && this.$stage.on(t.support.transition.end + ".owl.core", t.proxy(this.onTransitionEnd, this)), !1 !== this.settings.responsive && this.on(e, "resize", this._handlers.onThrottledResize), this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass), this.$stage.on("mousedown.owl.core", t.proxy(this.onDragStart, this)), this.$stage.on("dragstart.owl.core selectstart.owl.core", function() {
            return !1
        })), this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", t.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", t.proxy(this.onDragEnd, this)))
    }, n.prototype.onDragStart = function(e) {
        var s = null;
        3 !== e.which && (t.support.transform ? s = {
            x: (s = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","))[16 === s.length ? 12 : 4],
            y: s[16 === s.length ? 13 : 5]
        } : (s = this.$stage.position(), s = {
            x: this.settings.rtl ? s.left + this.$stage.width() - this.width() + this.settings.margin : s.left,
            y: s.top
        }), this.is("animating") && (t.support.transform ? this.animate(s.x) : this.$stage.stop(), this.invalidate("position")), this.$element.toggleClass(this.options.grabClass, "mousedown" === e.type), this.speed(0), this._drag.time = (new Date).getTime(), this._drag.target = t(e.target), this._drag.stage.start = s, this._drag.stage.current = s, this._drag.pointer = this.pointer(e), t(i).on("mouseup.owl.core touchend.owl.core", t.proxy(this.onDragEnd, this)), t(i).one("mousemove.owl.core touchmove.owl.core", t.proxy(function(e) {
            var s = this.difference(this._drag.pointer, this.pointer(e));
            t(i).on("mousemove.owl.core touchmove.owl.core", t.proxy(this.onDragMove, this)), Math.abs(s.x) < Math.abs(s.y) && this.is("valid") || (e.preventDefault(), this.enter("dragging"), this.trigger("drag"))
        }, this)))
    }, n.prototype.onDragMove = function(t) {
        var e = null,
            i = null,
            s = null,
            n = this.difference(this._drag.pointer, this.pointer(t)),
            o = this.difference(this._drag.stage.start, n);
        this.is("dragging") && (t.preventDefault(), this.settings.loop ? (e = this.coordinates(this.minimum()), i = this.coordinates(this.maximum() + 1) - e, o.x = ((o.x - e) % i + i) % i + e) : (e = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), i = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), s = this.settings.pullDrag ? -1 * n.x / 5 : 0, o.x = Math.max(Math.min(o.x, e + s), i + s)), this._drag.stage.current = o, this.animate(o.x))
    }, n.prototype.onDragEnd = function(e) {
        var s = this.difference(this._drag.pointer, this.pointer(e)),
            n = this._drag.stage.current,
            o = s.x > 0 ^ this.settings.rtl ? "left" : "right";
        t(i).off(".owl.core"), this.$element.removeClass(this.options.grabClass), (0 !== s.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(this.closest(n.x, 0 !== s.x ? o : this._drag.direction)), this.invalidate("position"), this.update(), this._drag.direction = o, (Math.abs(s.x) > 3 || (new Date).getTime() - this._drag.time > 300) && this._drag.target.one("click.owl.core", function() {
            return !1
        })), this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"))
    }, n.prototype.closest = function(e, i) {
        var n = -1,
            o = this.width(),
            r = this.coordinates();
        return this.settings.freeDrag || t.each(r, t.proxy(function(t, a) {
            return "left" === i && e > a - 30 && e < a + 30 ? n = t : "right" === i && e > a - o - 30 && e < a - o + 30 ? n = t + 1 : this.op(e, "<", a) && this.op(e, ">", r[t + 1] !== s ? r[t + 1] : a - o) && (n = "left" === i ? t + 1 : t), -1 === n
        }, this)), this.settings.loop || (this.op(e, ">", r[this.minimum()]) ? n = e = this.minimum() : this.op(e, "<", r[this.maximum()]) && (n = e = this.maximum())), n
    }, n.prototype.animate = function(e) {
        var i = this.speed() > 0;
        this.is("animating") && this.onTransitionEnd(), i && (this.enter("animating"), this.trigger("translate")), t.support.transform3d && t.support.transition ? this.$stage.css({
            transform: "translate3d(" + e + "px,0px,0px)",
            transition: this.speed() / 1e3 + "s" + (this.settings.slideTransition ? " " + this.settings.slideTransition : "")
        }) : i ? this.$stage.animate({
            left: e + "px"
        }, this.speed(), this.settings.fallbackEasing, t.proxy(this.onTransitionEnd, this)) : this.$stage.css({
            left: e + "px"
        })
    }, n.prototype.is = function(t) {
        return this._states.current[t] && this._states.current[t] > 0
    }, n.prototype.current = function(t) {
        if (t === s) return this._current;
        if (0 === this._items.length) return s;
        if (t = this.normalize(t), this._current !== t) {
            var e = this.trigger("change", {
                property: {
                    name: "position",
                    value: t
                }
            });
            e.data !== s && (t = this.normalize(e.data)), this._current = t, this.invalidate("position"), this.trigger("changed", {
                property: {
                    name: "position",
                    value: this._current
                }
            })
        }
        return this._current
    }, n.prototype.invalidate = function(e) {
        return "string" === t.type(e) && (this._invalidated[e] = !0, this.is("valid") && this.leave("valid")), t.map(this._invalidated, function(t, e) {
            return e
        })
    }, n.prototype.reset = function(t) {
        (t = this.normalize(t)) !== s && (this._speed = 0, this._current = t, this.suppress(["translate", "translated"]), this.animate(this.coordinates(t)), this.release(["translate", "translated"]))
    }, n.prototype.normalize = function(t, e) {
        var i = this._items.length,
            n = e ? 0 : this._clones.length;
        return !this.isNumeric(t) || i < 1 ? t = s : (t < 0 || t >= i + n) && (t = ((t - n / 2) % i + i) % i + n / 2), t
    }, n.prototype.relative = function(t) {
        return t -= this._clones.length / 2, this.normalize(t, !0)
    }, n.prototype.maximum = function(t) {
        var e, i, s, n = this.settings,
            o = this._coordinates.length;
        if (n.loop) o = this._clones.length / 2 + this._items.length - 1;
        else if (n.autoWidth || n.merge) {
            if (e = this._items.length)
                for (i = this._items[--e].width(), s = this.$element.width(); e-- && !((i += this._items[e].width() + this.settings.margin) > s););
            o = e + 1
        } else o = n.center ? this._items.length - 1 : this._items.length - n.items;
        return t && (o -= this._clones.length / 2), Math.max(o, 0)
    }, n.prototype.minimum = function(t) {
        return t ? 0 : this._clones.length / 2
    }, n.prototype.items = function(t) {
        return t === s ? this._items.slice() : (t = this.normalize(t, !0), this._items[t])
    }, n.prototype.mergers = function(t) {
        return t === s ? this._mergers.slice() : (t = this.normalize(t, !0), this._mergers[t])
    }, n.prototype.clones = function(e) {
        var i = this._clones.length / 2,
            n = i + this._items.length,
            o = function(t) {
                return t % 2 == 0 ? n + t / 2 : i - (t + 1) / 2
            };
        return e === s ? t.map(this._clones, function(t, e) {
            return o(e)
        }) : t.map(this._clones, function(t, i) {
            return t === e ? o(i) : null
        })
    }, n.prototype.speed = function(t) {
        return t !== s && (this._speed = t), this._speed
    }, n.prototype.coordinates = function(e) {
        var i, n = 1,
            o = e - 1;
        return e === s ? t.map(this._coordinates, t.proxy(function(t, e) {
            return this.coordinates(e)
        }, this)) : (this.settings.center ? (this.settings.rtl && (n = -1, o = e + 1), i = this._coordinates[e], i += (this.width() - i + (this._coordinates[o] || 0)) / 2 * n) : i = this._coordinates[o] || 0, i = Math.ceil(i))
    }, n.prototype.duration = function(t, e, i) {
        return 0 === i ? 0 : Math.min(Math.max(Math.abs(e - t), 1), 6) * Math.abs(i || this.settings.smartSpeed)
    }, n.prototype.to = function(t, e) {
        var i = this.current(),
            s = null,
            n = t - this.relative(i),
            o = (n > 0) - (n < 0),
            r = this._items.length,
            a = this.minimum(),
            h = this.maximum();
        this.settings.loop ? (!this.settings.rewind && Math.abs(n) > r / 2 && (n += -1 * o * r), (s = (((t = i + n) - a) % r + r) % r + a) !== t && s - n <= h && s - n > 0 && (i = s - n, t = s, this.reset(i))) : this.settings.rewind ? t = (t % (h += 1) + h) % h : t = Math.max(a, Math.min(h, t)), this.speed(this.duration(i, t, e)), this.current(t), this.isVisible() && this.update()
    }, n.prototype.next = function(t) {
        t = t || !1, this.to(this.relative(this.current()) + 1, t)
    }, n.prototype.prev = function(t) {
        t = t || !1, this.to(this.relative(this.current()) - 1, t)
    }, n.prototype.onTransitionEnd = function(t) {
        if (t !== s && (t.stopPropagation(), (t.target || t.srcElement || t.originalTarget) !== this.$stage.get(0))) return !1;
        this.leave("animating"), this.trigger("translated")
    }, n.prototype.viewport = function() {
        var s;
        return this.options.responsiveBaseElement !== e ? s = t(this.options.responsiveBaseElement).width() : e.innerWidth ? s = e.innerWidth : i.documentElement && i.documentElement.clientWidth ? s = i.documentElement.clientWidth : console.warn("Can not detect viewport width."), s
    }, n.prototype.replace = function(e) {
        this.$stage.empty(), this._items = [], e && (e = e instanceof jQuery ? e : t(e)), this.settings.nestedItemSelector && (e = e.find("." + this.settings.nestedItemSelector)), e.filter(function() {
            return 1 === this.nodeType
        }).each(t.proxy(function(t, e) {
            e = this.prepare(e), this.$stage.append(e), this._items.push(e), this._mergers.push(1 * e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)
        }, this)), this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items")
    }, n.prototype.add = function(e, i) {
        var n = this.relative(this._current);
        i = i === s ? this._items.length : this.normalize(i, !0), e = e instanceof jQuery ? e : t(e), this.trigger("add", {
            content: e,
            position: i
        }), e = this.prepare(e), 0 === this._items.length || i === this._items.length ? (0 === this._items.length && this.$stage.append(e), 0 !== this._items.length && this._items[i - 1].after(e), this._items.push(e), this._mergers.push(1 * e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[i].before(e), this._items.splice(i, 0, e), this._mergers.splice(i, 0, 1 * e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)), this._items[n] && this.reset(this._items[n].index()), this.invalidate("items"), this.trigger("added", {
            content: e,
            position: i
        })
    }, n.prototype.remove = function(t) {
        (t = this.normalize(t, !0)) !== s && (this.trigger("remove", {
            content: this._items[t],
            position: t
        }), this._items[t].remove(), this._items.splice(t, 1), this._mergers.splice(t, 1), this.invalidate("items"), this.trigger("removed", {
            content: null,
            position: t
        }))
    }, n.prototype.preloadAutoWidthImages = function(e) {
        e.each(t.proxy(function(e, i) {
            this.enter("pre-loading"), i = t(i), t(new Image).one("load", t.proxy(function(t) {
                i.attr("src", t.target.src), i.css("opacity", 1), this.leave("pre-loading"), !this.is("pre-loading") && !this.is("initializing") && this.refresh()
            }, this)).attr("src", i.attr("src") || i.attr("data-src") || i.attr("data-src-retina"))
        }, this))
    }, n.prototype.destroy = function() {
        for (var s in this.$element.off(".owl.core"), this.$stage.off(".owl.core"), t(i).off(".owl.core"), !1 !== this.settings.responsive && (e.clearTimeout(this.resizeTimer), this.off(e, "resize", this._handlers.onThrottledResize)), this._plugins) this._plugins[s].destroy();
        this.$stage.children(".cloned").remove(), this.$stage.unwrap(), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$stage.remove(), this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel")
    }, n.prototype.op = function(t, e, i) {
        var s = this.settings.rtl;
        switch (e) {
            case "<":
                return s ? t > i : t < i;
            case ">":
                return s ? t < i : t > i;
            case ">=":
                return s ? t <= i : t >= i;
            case "<=":
                return s ? t >= i : t <= i
        }
    }, n.prototype.on = function(t, e, i, s) {
        t.addEventListener ? t.addEventListener(e, i, s) : t.attachEvent && t.attachEvent("on" + e, i)
    }, n.prototype.off = function(t, e, i, s) {
        t.removeEventListener ? t.removeEventListener(e, i, s) : t.detachEvent && t.detachEvent("on" + e, i)
    }, n.prototype.trigger = function(e, i, s, o, r) {
        var a = {
                item: {
                    count: this._items.length,
                    index: this.current()
                }
            },
            h = t.camelCase(t.grep(["on", e, s], function(t) {
                return t
            }).join("-").toLowerCase()),
            l = t.Event([e, "owl", s || "carousel"].join(".").toLowerCase(), t.extend({
                relatedTarget: this
            }, a, i));
        return this._supress[e] || (t.each(this._plugins, function(t, e) {
            e.onTrigger && e.onTrigger(l)
        }), this.register({
            type: n.Type.Event,
            name: e
        }), this.$element.trigger(l), this.settings && "function" == typeof this.settings[h] && this.settings[h].call(this, l)), l
    }, n.prototype.enter = function(e) {
        t.each([e].concat(this._states.tags[e] || []), t.proxy(function(t, e) {
            this._states.current[e] === s && (this._states.current[e] = 0), this._states.current[e]++
        }, this))
    }, n.prototype.leave = function(e) {
        t.each([e].concat(this._states.tags[e] || []), t.proxy(function(t, e) {
            this._states.current[e]--
        }, this))
    }, n.prototype.register = function(e) {
        if (e.type === n.Type.Event) {
            if (t.event.special[e.name] || (t.event.special[e.name] = {}), !t.event.special[e.name].owl) {
                var i = t.event.special[e.name]._default;
                t.event.special[e.name]._default = function(t) {
                    return !i || !i.apply || t.namespace && -1 !== t.namespace.indexOf("owl") ? t.namespace && t.namespace.indexOf("owl") > -1 : i.apply(this, arguments)
                }, t.event.special[e.name].owl = !0
            }
        } else e.type === n.Type.State && (this._states.tags[e.name] ? this._states.tags[e.name] = this._states.tags[e.name].concat(e.tags) : this._states.tags[e.name] = e.tags, this._states.tags[e.name] = t.grep(this._states.tags[e.name], t.proxy(function(i, s) {
            return t.inArray(i, this._states.tags[e.name]) === s
        }, this)))
    }, n.prototype.suppress = function(e) {
        t.each(e, t.proxy(function(t, e) {
            this._supress[e] = !0
        }, this))
    }, n.prototype.release = function(e) {
        t.each(e, t.proxy(function(t, e) {
            delete this._supress[e]
        }, this))
    }, n.prototype.pointer = function(t) {
        var i = {
            x: null,
            y: null
        };
        return (t = (t = t.originalEvent || t || e.event).touches && t.touches.length ? t.touches[0] : t.changedTouches && t.changedTouches.length ? t.changedTouches[0] : t).pageX ? (i.x = t.pageX, i.y = t.pageY) : (i.x = t.clientX, i.y = t.clientY), i
    }, n.prototype.isNumeric = function(t) {
        return !isNaN(parseFloat(t))
    }, n.prototype.difference = function(t, e) {
        return {
            x: t.x - e.x,
            y: t.y - e.y
        }
    }, t.fn.owlCarousel = function(e) {
        var i = Array.prototype.slice.call(arguments, 1);
        return this.each(function() {
            var s = t(this),
                o = s.data("owl.carousel");
            o || (o = new n(this, "object" == typeof e && e), s.data("owl.carousel", o), t.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function(e, i) {
                o.register({
                    type: n.Type.Event,
                    name: i
                }), o.$element.on(i + ".owl.carousel.core", t.proxy(function(t) {
                    t.namespace && t.relatedTarget !== this && (this.suppress([i]), o[i].apply(this, [].slice.call(arguments, 1)), this.release([i]))
                }, o))
            })), "string" == typeof e && "_" !== e.charAt(0) && o[e].apply(o, i)
        })
    }, t.fn.owlCarousel.Constructor = n
}(window.Zepto || window.jQuery, window, document),
function(t, e, i, s) {
    var n = function(e) {
        this._core = e, this._interval = null, this._visible = null, this._handlers = {
            "initialized.owl.carousel": t.proxy(function(t) {
                t.namespace && this._core.settings.autoRefresh && this.watch()
            }, this)
        }, this._core.options = t.extend({}, n.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    n.Defaults = {
        autoRefresh: !0,
        autoRefreshInterval: 500
    }, n.prototype.watch = function() {
        this._interval || (this._visible = this._core.isVisible(), this._interval = e.setInterval(t.proxy(this.refresh, this), this._core.settings.autoRefreshInterval))
    }, n.prototype.refresh = function() {
        this._core.isVisible() !== this._visible && (this._visible = !this._visible, this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh())
    }, n.prototype.destroy = function() {
        var t, i;
        for (t in e.clearInterval(this._interval), this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.AutoRefresh = n
}(window.Zepto || window.jQuery, window, document),
function(t, e, i, s) {
    var n = function(e) {
        this._core = e, this._loaded = [], this._handlers = {
            "initialized.owl.carousel change.owl.carousel resized.owl.carousel": t.proxy(function(e) {
                if (e.namespace && this._core.settings && this._core.settings.lazyLoad && (e.property && "position" == e.property.name || "initialized" == e.type)) {
                    var i = this._core.settings,
                        s = i.center && Math.ceil(i.items / 2) || i.items,
                        n = i.center && -1 * s || 0,
                        o = (e.property && void 0 !== e.property.value ? e.property.value : this._core.current()) + n,
                        r = this._core.clones().length,
                        a = t.proxy(function(t, e) {
                            this.load(e)
                        }, this);
                    for (i.lazyLoadEager > 0 && (s += i.lazyLoadEager, i.loop && (o -= i.lazyLoadEager, s++)); n++ < s;) this.load(r / 2 + this._core.relative(o)), r && t.each(this._core.clones(this._core.relative(o)), a), o++
                }
            }, this)
        }, this._core.options = t.extend({}, n.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    n.Defaults = {
        lazyLoad: !1,
        lazyLoadEager: 0
    }, n.prototype.load = function(i) {
        var s = this._core.$stage.children().eq(i),
            n = s && s.find(".owl-lazy");
        !n || t.inArray(s.get(0), this._loaded) > -1 || (n.each(t.proxy(function(i, s) {
            var n, o = t(s),
                r = e.devicePixelRatio > 1 && o.attr("data-src-retina") || o.attr("data-src") || o.attr("data-srcset");
            this._core.trigger("load", {
                element: o,
                url: r
            }, "lazy"), o.is("img") ? o.one("load.owl.lazy", t.proxy(function() {
                o.css("opacity", 1), this._core.trigger("loaded", {
                    element: o,
                    url: r
                }, "lazy")
            }, this)).attr("src", r) : o.is("source") ? o.one("load.owl.lazy", t.proxy(function() {
                this._core.trigger("loaded", {
                    element: o,
                    url: r
                }, "lazy")
            }, this)).attr("srcset", r) : ((n = new Image).onload = t.proxy(function() {
                o.css({
                    "background-image": 'url("' + r + '")',
                    opacity: "1"
                }), this._core.trigger("loaded", {
                    element: o,
                    url: r
                }, "lazy")
            }, this), n.src = r)
        }, this)), this._loaded.push(s.get(0)))
    }, n.prototype.destroy = function() {
        var t, e;
        for (t in this.handlers) this._core.$element.off(t, this.handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.Lazy = n
}(window.Zepto || window.jQuery, window, document),
function(t, e, i, s) {
    var n = function(i) {
        this._core = i, this._previousHeight = null, this._handlers = {
            "initialized.owl.carousel refreshed.owl.carousel": t.proxy(function(t) {
                t.namespace && this._core.settings.autoHeight && this.update()
            }, this),
            "changed.owl.carousel": t.proxy(function(t) {
                t.namespace && this._core.settings.autoHeight && "position" === t.property.name && this.update()
            }, this),
            "loaded.owl.lazy": t.proxy(function(t) {
                t.namespace && this._core.settings.autoHeight && t.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update()
            }, this)
        }, this._core.options = t.extend({}, n.Defaults, this._core.options), this._core.$element.on(this._handlers), this._intervalId = null;
        var s = this;
        t(e).on("load", function() {
            s._core.settings.autoHeight && s.update()
        }), t(e).resize(function() {
            s._core.settings.autoHeight && (null != s._intervalId && clearTimeout(s._intervalId), s._intervalId = setTimeout(function() {
                s.update()
            }, 250))
        })
    };
    n.Defaults = {
        autoHeight: !1,
        autoHeightClass: "owl-height"
    }, n.prototype.update = function() {
        var e = this._core._current,
            i = e + this._core.settings.items,
            s = this._core.settings.lazyLoad,
            n = this._core.$stage.children().toArray().slice(e, i),
            o = [],
            r = 0;
        t.each(n, function(e, i) {
            o.push(t(i).height())
        }), (r = Math.max.apply(null, o)) <= 1 && s && this._previousHeight && (r = this._previousHeight), this._previousHeight = r, this._core.$stage.parent().height(r).addClass(this._core.settings.autoHeightClass)
    }, n.prototype.destroy = function() {
        var t, e;
        for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.AutoHeight = n
}(window.Zepto || window.jQuery, window, document),
function(t, e, i, s) {
    var n = function(e) {
        this._core = e, this._videos = {}, this._playing = null, this._handlers = {
            "initialized.owl.carousel": t.proxy(function(t) {
                t.namespace && this._core.register({
                    type: "state",
                    name: "playing",
                    tags: ["interacting"]
                })
            }, this),
            "resize.owl.carousel": t.proxy(function(t) {
                t.namespace && this._core.settings.video && this.isInFullScreen() && t.preventDefault()
            }, this),
            "refreshed.owl.carousel": t.proxy(function(t) {
                t.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove()
            }, this),
            "changed.owl.carousel": t.proxy(function(t) {
                t.namespace && "position" === t.property.name && this._playing && this.stop()
            }, this),
            "prepared.owl.carousel": t.proxy(function(e) {
                if (e.namespace) {
                    var i = t(e.content).find(".owl-video");
                    i.length && (i.css("display", "none"), this.fetch(i, t(e.content)))
                }
            }, this)
        }, this._core.options = t.extend({}, n.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", t.proxy(function(t) {
            this.play(t)
        }, this))
    };
    n.Defaults = {
        video: !1,
        videoHeight: !1,
        videoWidth: !1
    }, n.prototype.fetch = function(t, e) {
        var i = t.attr("data-vimeo-id") ? "vimeo" : t.attr("data-vzaar-id") ? "vzaar" : "youtube",
            s = t.attr("data-vimeo-id") || t.attr("data-youtube-id") || t.attr("data-vzaar-id"),
            n = t.attr("data-width") || this._core.settings.videoWidth,
            o = t.attr("data-height") || this._core.settings.videoHeight,
            r = t.attr("href");
        if (!r) throw new Error("Missing video URL.");
        if ((s = r.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/))[3].indexOf("youtu") > -1) i = "youtube";
        else if (s[3].indexOf("vimeo") > -1) i = "vimeo";
        else {
            if (!(s[3].indexOf("vzaar") > -1)) throw new Error("Video URL not supported.");
            i = "vzaar"
        }
        s = s[6], this._videos[r] = {
            type: i,
            id: s,
            width: n,
            height: o
        }, e.attr("data-video", r), this.thumbnail(t, this._videos[r])
    }, n.prototype.thumbnail = function(e, i) {
        var s, n, o = i.width && i.height ? "width:" + i.width + "px;height:" + i.height + "px;" : "",
            r = e.find("img"),
            a = "src",
            h = "",
            l = this._core.settings,
            c = function(i) {
                '<div class="owl-video-play-icon"></div>',
                s = l.lazyLoad ? t("<div/>", {
                    class: "owl-video-tn " + h,
                    srcType: i
                }) : t("<div/>", {
                    class: "owl-video-tn",
                    style: "opacity:1;background-image:url(" + i + ")"
                }),
                e.after(s),
                e.after('<div class="owl-video-play-icon"></div>')
            };
        if (e.wrap(t("<div/>", {
                class: "owl-video-wrapper",
                style: o
            })), this._core.settings.lazyLoad && (a = "data-src", h = "owl-lazy"), r.length) return c(r.attr(a)), r.remove(), !1;
        "youtube" === i.type ? (n = "//img.youtube.com/vi/" + i.id + "/hqdefault.jpg", c(n)) : "vimeo" === i.type ? t.ajax({
            type: "GET",
            url: "//vimeo.com/api/v2/video/" + i.id + ".json",
            jsonp: "callback",
            dataType: "jsonp",
            success: function(t) {
                n = t[0].thumbnail_large, c(n)
            }
        }) : "vzaar" === i.type && t.ajax({
            type: "GET",
            url: "//vzaar.com/api/videos/" + i.id + ".json",
            jsonp: "callback",
            dataType: "jsonp",
            success: function(t) {
                n = t.framegrab_url, c(n)
            }
        })
    }, n.prototype.stop = function() {
        this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null, this._core.leave("playing"), this._core.trigger("stopped", null, "video")
    }, n.prototype.play = function(e) {
        var i, s = t(e.target).closest("." + this._core.settings.itemClass),
            n = this._videos[s.attr("data-video")],
            o = n.width || "100%",
            r = n.height || this._core.$stage.height();
        this._playing || (this._core.enter("playing"), this._core.trigger("play", null, "video"), s = this._core.items(this._core.relative(s.index())), this._core.reset(s.index()), (i = t('<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>')).attr("height", r), i.attr("width", o), "youtube" === n.type ? i.attr("src", "//www.youtube.com/embed/" + n.id + "?autoplay=1&rel=0&v=" + n.id) : "vimeo" === n.type ? i.attr("src", "//player.vimeo.com/video/" + n.id + "?autoplay=1") : "vzaar" === n.type && i.attr("src", "//view.vzaar.com/" + n.id + "/player?autoplay=true"), t(i).wrap('<div class="owl-video-frame" />').insertAfter(s.find(".owl-video")), this._playing = s.addClass("owl-video-playing"))
    }, n.prototype.isInFullScreen = function() {
        var e = i.fullscreenElement || i.mozFullScreenElement || i.webkitFullscreenElement;
        return e && t(e).parent().hasClass("owl-video-frame")
    }, n.prototype.destroy = function() {
        var t, e;
        for (t in this._core.$element.off("click.owl.video"), this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.Video = n
}(window.Zepto || window.jQuery, window, document),
function(t, e, i, s) {
    var n = function(e) {
        this.core = e, this.core.options = t.extend({}, n.Defaults, this.core.options), this.swapping = !0, this.previous = s, this.next = s, this.handlers = {
            "change.owl.carousel": t.proxy(function(t) {
                t.namespace && "position" == t.property.name && (this.previous = this.core.current(), this.next = t.property.value)
            }, this),
            "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": t.proxy(function(t) {
                t.namespace && (this.swapping = "translated" == t.type)
            }, this),
            "translate.owl.carousel": t.proxy(function(t) {
                t.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
            }, this)
        }, this.core.$element.on(this.handlers)
    };
    n.Defaults = {
        animateOut: !1,
        animateIn: !1
    }, n.prototype.swap = function() {
        if (1 === this.core.settings.items && t.support.animation && t.support.transition) {
            this.core.speed(0);
            var e, i = t.proxy(this.clear, this),
                s = this.core.$stage.children().eq(this.previous),
                n = this.core.$stage.children().eq(this.next),
                o = this.core.settings.animateIn,
                r = this.core.settings.animateOut;
            this.core.current() !== this.previous && (r && (e = this.core.coordinates(this.previous) - this.core.coordinates(this.next), s.one(t.support.animation.end, i).css({
                left: e + "px"
            }).addClass("animated owl-animated-out").addClass(r)), o && n.one(t.support.animation.end, i).addClass("animated owl-animated-in").addClass(o))
        }
    }, n.prototype.clear = function(e) {
        t(e.target).css({
            left: ""
        }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd()
    }, n.prototype.destroy = function() {
        var t, e;
        for (t in this.handlers) this.core.$element.off(t, this.handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.Animate = n
}(window.Zepto || window.jQuery, window, document),
function(t, e, i, s) {
    var n = function(e) {
        this._core = e, this._call = null, this._time = 0, this._timeout = 0, this._paused = !0, this._handlers = {
            "changed.owl.carousel": t.proxy(function(t) {
                t.namespace && "settings" === t.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : t.namespace && "position" === t.property.name && this._paused && (this._time = 0)
            }, this),
            "initialized.owl.carousel": t.proxy(function(t) {
                t.namespace && this._core.settings.autoplay && this.play()
            }, this),
            "play.owl.autoplay": t.proxy(function(t, e, i) {
                t.namespace && this.play(e, i)
            }, this),
            "stop.owl.autoplay": t.proxy(function(t) {
                t.namespace && this.stop()
            }, this),
            "mouseover.owl.autoplay": t.proxy(function() {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
            }, this),
            "mouseleave.owl.autoplay": t.proxy(function() {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play()
            }, this),
            "touchstart.owl.core": t.proxy(function() {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
            }, this),
            "touchend.owl.core": t.proxy(function() {
                this._core.settings.autoplayHoverPause && this.play()
            }, this)
        }, this._core.$element.on(this._handlers), this._core.options = t.extend({}, n.Defaults, this._core.options)
    };
    n.Defaults = {
        autoplay: !1,
        autoplayTimeout: 5e3,
        autoplayHoverPause: !1,
        autoplaySpeed: !1
    }, n.prototype._next = function(s) {
        this._call = e.setTimeout(t.proxy(this._next, this, s), this._timeout * (Math.round(this.read() / this._timeout) + 1) - this.read()), this._core.is("interacting") || i.hidden || this._core.next(s || this._core.settings.autoplaySpeed)
    }, n.prototype.read = function() {
        return (new Date).getTime() - this._time
    }, n.prototype.play = function(i, s) {
        var n;
        this._core.is("rotating") || this._core.enter("rotating"), i = i || this._core.settings.autoplayTimeout, n = Math.min(this._time % (this._timeout || i), i), this._paused ? (this._time = this.read(), this._paused = !1) : e.clearTimeout(this._call), this._time += this.read() % i - n, this._timeout = i, this._call = e.setTimeout(t.proxy(this._next, this, s), i - n)
    }, n.prototype.stop = function() {
        this._core.is("rotating") && (this._time = 0, this._paused = !0, e.clearTimeout(this._call), this._core.leave("rotating"))
    }, n.prototype.pause = function() {
        this._core.is("rotating") && !this._paused && (this._time = this.read(), this._paused = !0, e.clearTimeout(this._call))
    }, n.prototype.destroy = function() {
        var t, e;
        for (t in this.stop(), this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.autoplay = n
}(window.Zepto || window.jQuery, window, document),
function(t, e, i, s) {
    "use strict";
    var n = function(e) {
        this._core = e, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
            next: this._core.next,
            prev: this._core.prev,
            to: this._core.to
        }, this._handlers = {
            "prepared.owl.carousel": t.proxy(function(e) {
                e.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + t(e.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>")
            }, this),
            "added.owl.carousel": t.proxy(function(t) {
                t.namespace && this._core.settings.dotsData && this._templates.splice(t.position, 0, this._templates.pop())
            }, this),
            "remove.owl.carousel": t.proxy(function(t) {
                t.namespace && this._core.settings.dotsData && this._templates.splice(t.position, 1)
            }, this),
            "changed.owl.carousel": t.proxy(function(t) {
                t.namespace && "position" == t.property.name && this.draw()
            }, this),
            "initialized.owl.carousel": t.proxy(function(t) {
                t.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), this._initialized = !0, this._core.trigger("initialized", null, "navigation"))
            }, this),
            "refreshed.owl.carousel": t.proxy(function(t) {
                t.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation"))
            }, this)
        }, this._core.options = t.extend({}, n.Defaults, this._core.options), this.$element.on(this._handlers)
    };
    n.Defaults = {
        nav: !1,
        navText: ['<span aria-label="Previous">&#x2039;</span>', '<span aria-label="Next">&#x203a;</span>'],
        navSpeed: !1,
        navElement: 'button type="button" role="presentation"',
        navContainer: !1,
        navContainerClass: "owl-nav",
        navClass: ["owl-prev", "owl-next"],
        slideBy: 1,
        dotClass: "owl-dot",
        dotsClass: "owl-dots",
        dots: !0,
        dotsEach: !1,
        dotsData: !1,
        dotsSpeed: !1,
        dotsContainer: !1
    }, n.prototype.initialize = function() {
        var e, i = this._core.settings;
        for (e in this._controls.$relative = (i.navContainer ? t(i.navContainer) : t("<div>").addClass(i.navContainerClass).appendTo(this.$element)).addClass("disabled"), this._controls.$previous = t("<" + i.navElement + ">").addClass(i.navClass[0]).html(i.navText[0]).prependTo(this._controls.$relative).on("click", t.proxy(function(t) {
                this.prev(i.navSpeed)
            }, this)), this._controls.$next = t("<" + i.navElement + ">").addClass(i.navClass[1]).html(i.navText[1]).appendTo(this._controls.$relative).on("click", t.proxy(function(t) {
                this.next(i.navSpeed)
            }, this)), i.dotsData || (this._templates = [t('<button role="button">').addClass(i.dotClass).append(t("<span>")).prop("outerHTML")]), this._controls.$absolute = (i.dotsContainer ? t(i.dotsContainer) : t("<div>").addClass(i.dotsClass).appendTo(this.$element)).addClass("disabled"), this._controls.$absolute.on("click", "button", t.proxy(function(e) {
                var s = t(e.target).parent().is(this._controls.$absolute) ? t(e.target).index() : t(e.target).parent().index();
                e.preventDefault(), this.to(s, i.dotsSpeed)
            }, this)), this._overrides) this._core[e] = t.proxy(this[e], this)
    }, n.prototype.destroy = function() {
        var t, e, i, s, n;
        for (t in n = this._core.settings, this._handlers) this.$element.off(t, this._handlers[t]);
        for (e in this._controls) "$relative" === e && n.navContainer ? this._controls[e].html("") : this._controls[e].remove();
        for (s in this.overides) this._core[s] = this._overrides[s];
        for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null)
    }, n.prototype.update = function() {
        var t, e, i = this._core.clones().length / 2,
            s = i + this._core.items().length,
            n = this._core.maximum(!0),
            o = this._core.settings,
            r = o.center || o.autoWidth || o.dotsData ? 1 : o.dotsEach || o.items;
        if ("page" !== o.slideBy && (o.slideBy = Math.min(o.slideBy, o.items)), o.dots || "page" == o.slideBy)
            for (this._pages = [], t = i, e = 0, 0; t < s; t++) {
                if (e >= r || 0 === e) {
                    if (this._pages.push({
                            start: Math.min(n, t - i),
                            end: t - i + r - 1
                        }), Math.min(n, t - i) === n) break;
                    e = 0, 0
                }
                e += this._core.mergers(this._core.relative(t))
            }
    }, n.prototype.draw = function() {
        var e, i = this._core.settings,
            s = this._core.items().length <= i.items,
            n = this._core.relative(this._core.current()),
            o = i.loop || i.rewind;
        this._controls.$relative.toggleClass("disabled", !i.nav || s), i.nav && (this._controls.$previous.toggleClass("disabled", !o && n <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !o && n >= this._core.maximum(!0))), this._controls.$absolute.toggleClass("disabled", !i.dots || s), i.dots && (e = this._pages.length - this._controls.$absolute.children().length, i.dotsData && 0 !== e ? this._controls.$absolute.html(this._templates.join("")) : e > 0 ? this._controls.$absolute.append(new Array(e + 1).join(this._templates[0])) : e < 0 && this._controls.$absolute.children().slice(e).remove(), this._controls.$absolute.find(".active").removeClass("active"), this._controls.$absolute.children().eq(t.inArray(this.current(), this._pages)).addClass("active"))
    }, n.prototype.onTrigger = function(e) {
        var i = this._core.settings;
        e.page = {
            index: t.inArray(this.current(), this._pages),
            count: this._pages.length,
            size: i && (i.center || i.autoWidth || i.dotsData ? 1 : i.dotsEach || i.items)
        }
    }, n.prototype.current = function() {
        var e = this._core.relative(this._core.current());
        return t.grep(this._pages, t.proxy(function(t, i) {
            return t.start <= e && t.end >= e
        }, this)).pop()
    }, n.prototype.getPosition = function(e) {
        var i, s, n = this._core.settings;
        return "page" == n.slideBy ? (i = t.inArray(this.current(), this._pages), s = this._pages.length, e ? ++i : --i, i = this._pages[(i % s + s) % s].start) : (i = this._core.relative(this._core.current()), s = this._core.items().length, e ? i += n.slideBy : i -= n.slideBy), i
    }, n.prototype.next = function(e) {
        t.proxy(this._overrides.to, this._core)(this.getPosition(!0), e)
    }, n.prototype.prev = function(e) {
        t.proxy(this._overrides.to, this._core)(this.getPosition(!1), e)
    }, n.prototype.to = function(e, i, s) {
        var n;
        !s && this._pages.length ? (n = this._pages.length, t.proxy(this._overrides.to, this._core)(this._pages[(e % n + n) % n].start, i)) : t.proxy(this._overrides.to, this._core)(e, i)
    }, t.fn.owlCarousel.Constructor.Plugins.Navigation = n
}(window.Zepto || window.jQuery, window, document),
function(t, e, i, s) {
    "use strict";
    var n = function(i) {
        this._core = i, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
            "initialized.owl.carousel": t.proxy(function(i) {
                i.namespace && "URLHash" === this._core.settings.startPosition && t(e).trigger("hashchange.owl.navigation")
            }, this),
            "prepared.owl.carousel": t.proxy(function(e) {
                if (e.namespace) {
                    var i = t(e.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
                    if (!i) return;
                    this._hashes[i] = e.content
                }
            }, this),
            "changed.owl.carousel": t.proxy(function(i) {
                if (i.namespace && "position" === i.property.name) {
                    var s = this._core.items(this._core.relative(this._core.current())),
                        n = t.map(this._hashes, function(t, e) {
                            return t === s ? e : null
                        }).join();
                    if (!n || e.location.hash.slice(1) === n) return;
                    e.location.hash = n
                }
            }, this)
        }, this._core.options = t.extend({}, n.Defaults, this._core.options), this.$element.on(this._handlers), t(e).on("hashchange.owl.navigation", t.proxy(function(t) {
            var i = e.location.hash.substring(1),
                s = this._core.$stage.children(),
                n = this._hashes[i] && s.index(this._hashes[i]);
            void 0 !== n && n !== this._core.current() && this._core.to(this._core.relative(n), !1, !0)
        }, this))
    };
    n.Defaults = {
        URLhashListener: !1
    }, n.prototype.destroy = function() {
        var i, s;
        for (i in t(e).off("hashchange.owl.navigation"), this._handlers) this._core.$element.off(i, this._handlers[i]);
        for (s in Object.getOwnPropertyNames(this)) "function" != typeof this[s] && (this[s] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.Hash = n
}(window.Zepto || window.jQuery, window, document),
function(t, e, i, s) {
    function n(e, i) {
        var n = !1,
            o = e.charAt(0).toUpperCase() + e.slice(1);
        return t.each((e + " " + a.join(o + " ") + o).split(" "), function(t, e) {
            if (r[e] !== s) return n = !i || e, !1
        }), n
    }

    function o(t) {
        return n(t, !0)
    }
    var r = t("<support>").get(0).style,
        a = "Webkit Moz O ms".split(" "),
        h = {
            transition: {
                end: {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd",
                    transition: "transitionend"
                }
            },
            animation: {
                end: {
                    WebkitAnimation: "webkitAnimationEnd",
                    MozAnimation: "animationend",
                    OAnimation: "oAnimationEnd",
                    animation: "animationend"
                }
            }
        },
        l = function() {
            return !!n("transform")
        },
        c = function() {
            return !!n("perspective")
        },
        p = function() {
            return !!n("animation")
        };
    (function() {
        return !!n("transition")
    })() && (t.support.transition = new String(o("transition")), t.support.transition.end = h.transition.end[t.support.transition]), p() && (t.support.animation = new String(o("animation")), t.support.animation.end = h.animation.end[t.support.animation]), l() && (t.support.transform = new String(o("transform")), t.support.transform3d = c())
}(window.Zepto || window.jQuery, window, document);
! function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.Sweetalert2 = e()
}(this, function() {
    "use strict";

    function t(e) {
        return (t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(e)
    }

    function e(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function o(t, e) {
        for (var o = 0; o < e.length; o++) {
            var n = e[o];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }

    function n() {
        return (n = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var o = arguments[e];
                for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (t[n] = o[n])
            }
            return t
        }).apply(this, arguments)
    }

    function a(t) {
        return (a = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function s(t, e) {
        return (s = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    function r(t, e, o) {
        return (r = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
            } catch (t) {
                return !1
            }
        }() ? Reflect.construct : function(t, e, o) {
            var n = [null];
            n.push.apply(n, e);
            var a = new(Function.bind.apply(t, n));
            return o && s(a, o.prototype), a
        }).apply(null, arguments)
    }

    function i(t, e, o) {
        return (i = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(t, e, o) {
            var n = function(t, e) {
                for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = a(t)););
                return t
            }(t, e);
            if (n) {
                var s = Object.getOwnPropertyDescriptor(n, e);
                return s.get ? s.get.call(o) : s.value
            }
        })(t, e, o || t)
    }
    var l = "SweetAlert2:",
        c = function(t) {
            return Array.prototype.slice.call(t)
        },
        u = function(t) {
            console.warn("".concat(l, " ").concat(t))
        },
        p = function(t) {
            console.error("".concat(l, " ").concat(t))
        },
        d = [],
        w = function(t) {
            return "function" == typeof t ? t() : t
        },
        m = function(t) {
            return t && Promise.resolve(t) === t
        },
        f = Object.freeze({
            cancel: "cancel",
            backdrop: "backdrop",
            close: "close",
            esc: "esc",
            timer: "timer"
        }),
        g = function(t) {
            var e = {};
            for (var o in t) e[t[o]] = "swal2-" + t[o];
            return e
        },
        h = g(["container", "shown", "height-auto", "iosfix", "popup", "modal", "no-backdrop", "toast", "toast-shown", "toast-column", "fade", "show", "hide", "noanimation", "close", "title", "header", "content", "actions", "confirm", "cancel", "footer", "icon", "icon-text", "image", "input", "file", "range", "select", "radio", "checkbox", "label", "textarea", "inputerror", "validation-message", "progresssteps", "activeprogressstep", "progresscircle", "progressline", "loading", "styled", "top", "top-start", "top-end", "top-left", "top-right", "center", "center-start", "center-end", "center-left", "center-right", "bottom", "bottom-start", "bottom-end", "bottom-left", "bottom-right", "grow-row", "grow-column", "grow-fullscreen", "rtl"]),
        b = g(["success", "warning", "info", "question", "error"]),
        y = {
            previousBodyPadding: null
        },
        v = function(t, e) {
            return t.classList.contains(e)
        },
        k = function(t) {
            if (t.focus(), "file" !== t.type) {
                var e = t.value;
                t.value = "", t.value = e
            }
        },
        x = function(t, e, o) {
            t && e && ("string" == typeof e && (e = e.split(/\s+/).filter(Boolean)), e.forEach(function(e) {
                t.forEach ? t.forEach(function(t) {
                    o ? t.classList.add(e) : t.classList.remove(e)
                }) : o ? t.classList.add(e) : t.classList.remove(e)
            }))
        },
        C = function(t, e) {
            x(t, e, !0)
        },
        B = function(t, e) {
            x(t, e, !1)
        },
        A = function(t, e) {
            for (var o = 0; o < t.childNodes.length; o++)
                if (v(t.childNodes[o], e)) return t.childNodes[o]
        },
        S = function(t) {
            t.style.opacity = "", t.style.display = t.id === h.content ? "block" : "flex"
        },
        P = function(t) {
            t.style.opacity = "", t.style.display = "none"
        },
        T = function(t) {
            return t && (t.offsetWidth || t.offsetHeight || t.getClientRects().length)
        },
        L = function() {
            return document.body.querySelector("." + h.container)
        },
        E = function(t) {
            var e = L();
            return e ? e.querySelector("." + t) : null
        },
        O = function() {
            return E(h.popup)
        },
        z = function() {
            var t = O();
            return c(t.querySelectorAll("." + h.icon))
        },
        j = function() {
            return E(h.title)
        },
        M = function() {
            return E(h.content)
        },
        V = function() {
            return E(h.image)
        },
        q = function() {
            return E(h.progresssteps)
        },
        H = function() {
            return E(h["validation-message"])
        },
        R = function() {
            return E(h.confirm)
        },
        I = function() {
            return E(h.cancel)
        },
        Y = function() {
            return E(h.actions)
        },
        Z = function() {
            return E(h.footer)
        },
        N = function() {
            return E(h.close)
        },
        D = function() {
            var t = c(O().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort(function(t, e) {
                    return t = parseInt(t.getAttribute("tabindex")), (e = parseInt(e.getAttribute("tabindex"))) < t ? 1 : t < e ? -1 : 0
                }),
                e = c(O().querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable], audio[controls], video[controls]')).filter(function(t) {
                    return "-1" !== t.getAttribute("tabindex")
                });
            return function(t) {
                for (var e = [], o = 0; o < t.length; o++) - 1 === e.indexOf(t[o]) && e.push(t[o]);
                return e
            }(t.concat(e)).filter(function(t) {
                return T(t)
            })
        },
        X = function() {
            return !U() && !document.body.classList.contains(h["no-backdrop"])
        },
        U = function() {
            return document.body.classList.contains(h["toast-shown"])
        },
        _ = function() {
            return "undefined" == typeof window || "undefined" == typeof document
        },
        $ = '\n <div aria-labelledby="'.concat(h.title, '" aria-describedby="').concat(h.content, '" class="').concat(h.popup, '" tabindex="-1">\n   <div class="').concat(h.header, '">\n     <ul class="').concat(h.progresssteps, '"></ul>\n     <div class="').concat(h.icon, " ").concat(b.error, '">\n       <span class="swal2-x-mark"><span class="swal2-x-mark-line-left"></span><span class="swal2-x-mark-line-right"></span></span>\n     </div>\n     <div class="').concat(h.icon, " ").concat(b.question, '">\n       <span class="').concat(h["icon-text"], '">?</span>\n      </div>\n     <div class="').concat(h.icon, " ").concat(b.warning, '">\n       <span class="').concat(h["icon-text"], '">!</span>\n      </div>\n     <div class="').concat(h.icon, " ").concat(b.info, '">\n       <span class="').concat(h["icon-text"], '">i</span>\n      </div>\n     <div class="').concat(h.icon, " ").concat(b.success, '">\n       <div class="swal2-success-circular-line-left"></div>\n       <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>\n       <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>\n       <div class="swal2-success-circular-line-right"></div>\n     </div>\n     <img class="').concat(h.image, '" />\n     <h2 class="').concat(h.title, '" id="').concat(h.title, '"></h2>\n     <button type="button" class="').concat(h.close, '">×</button>\n   </div>\n   <div class="').concat(h.content, '">\n     <div id="').concat(h.content, '"></div>\n     <input class="').concat(h.input, '" />\n     <input type="file" class="').concat(h.file, '" />\n     <div class="').concat(h.range, '">\n       <input type="range" />\n       <output></output>\n     </div>\n     <select class="').concat(h.select, '"></select>\n     <div class="').concat(h.radio, '"></div>\n     <label for="').concat(h.checkbox, '" class="').concat(h.checkbox, '">\n       <input type="checkbox" />\n       <span class="').concat(h.label, '"></span>\n     </label>\n     <textarea class="').concat(h.textarea, '"></textarea>\n     <div class="').concat(h["validation-message"], '" id="').concat(h["validation-message"], '"></div>\n   </div>\n   <div class="').concat(h.actions, '">\n     <button type="button" class="').concat(h.confirm, '">OK</button>\n     <button type="button" class="').concat(h.cancel, '">Cancel</button>\n   </div>\n   <div class="').concat(h.footer, '">\n   </div>\n </div>\n').replace(/(^|\n)\s*/g, ""),
        W = function(t) {
            var e = L();
            if (e && (e.parentNode.removeChild(e), B([document.documentElement, document.body], [h["no-backdrop"], h["toast-shown"], h["has-column"]])), !_()) {
                var o = document.createElement("div");
                o.className = h.container, o.innerHTML = $;
                var n = "string" == typeof t.target ? document.querySelector(t.target) : t.target;
                n.appendChild(o);
                var a, s = O(),
                    r = M(),
                    i = A(r, h.input),
                    l = A(r, h.file),
                    c = r.querySelector(".".concat(h.range, " input")),
                    u = r.querySelector(".".concat(h.range, " output")),
                    d = A(r, h.select),
                    w = r.querySelector(".".concat(h.checkbox, " input")),
                    m = A(r, h.textarea);
                s.setAttribute("role", t.toast ? "alert" : "dialog"), s.setAttribute("aria-live", t.toast ? "polite" : "assertive"), t.toast || s.setAttribute("aria-modal", "true"), "rtl" === window.getComputedStyle(n).direction && C(L(), h.rtl);
                var f = function(t) {
                    At.isVisible() && a !== t.target.value && At.resetValidationMessage(), a = t.target.value
                };
                return i.oninput = f, l.onchange = f, d.onchange = f, w.onchange = f, m.oninput = f, c.oninput = function(t) {
                    f(t), u.value = c.value
                }, c.onchange = function(t) {
                    f(t), c.nextSibling.value = c.value
                }, s
            }
            p("SweetAlert2 requires document to initialize")
        },
        K = function(e, o) {
            if (!e) return P(o);
            if (e instanceof HTMLElement) o.appendChild(e);
            else if ("object" === t(e))
                if (o.innerHTML = "", 0 in e)
                    for (var n = 0; n in e; n++) o.appendChild(e[n].cloneNode(!0));
                else o.appendChild(e.cloneNode(!0));
            else e && (o.innerHTML = e);
            S(o)
        },
        F = function() {
            if (_()) return !1;
            var t = document.createElement("div"),
                e = {
                    WebkitAnimation: "webkitAnimationEnd",
                    OAnimation: "oAnimationEnd oanimationend",
                    animation: "animationend"
                };
            for (var o in e)
                if (e.hasOwnProperty(o) && void 0 !== t.style[o]) return e[o];
            return !1
        }(),
        Q = function(t) {
            var e = Y(),
                o = R(),
                n = I();
            if (t.showConfirmButton || t.showCancelButton ? S(e) : P(e), t.showCancelButton ? n.style.display = "inline-block" : P(n), t.showConfirmButton ? o.style.removeProperty("display") : P(o), o.innerHTML = t.confirmButtonText, n.innerHTML = t.cancelButtonText, o.setAttribute("aria-label", t.confirmButtonAriaLabel), n.setAttribute("aria-label", t.cancelButtonAriaLabel), o.className = h.confirm, C(o, t.confirmButtonClass), n.className = h.cancel, C(n, t.cancelButtonClass), t.buttonsStyling) {
                C([o, n], h.styled), t.confirmButtonColor && (o.style.backgroundColor = t.confirmButtonColor), t.cancelButtonColor && (n.style.backgroundColor = t.cancelButtonColor);
                var a = window.getComputedStyle(o).getPropertyValue("background-color");
                o.style.borderLeftColor = a, o.style.borderRightColor = a
            } else B([o, n], h.styled), o.style.backgroundColor = o.style.borderLeftColor = o.style.borderRightColor = "", n.style.backgroundColor = n.style.borderLeftColor = n.style.borderRightColor = ""
        },
        J = function(t) {
            var e = M().querySelector("#" + h.content);
            t.html ? K(t.html, e) : t.text ? (e.textContent = t.text, S(e)) : P(e)
        },
        G = function(t) {
            for (var e = z(), o = 0; o < e.length; o++) P(e[o]);
            if (t.type)
                if (-1 !== Object.keys(b).indexOf(t.type)) {
                    var n = At.getPopup().querySelector(".".concat(h.icon, ".").concat(b[t.type]));
                    S(n), t.animation && C(n, "swal2-animate-".concat(t.type, "-icon"))
                } else p('Unknown type! Expected "success", "error", "warning", "info" or "question", got "'.concat(t.type, '"'))
        },
        tt = function(t) {
            var e = V();
            t.imageUrl ? (e.setAttribute("src", t.imageUrl), e.setAttribute("alt", t.imageAlt), S(e), t.imageWidth ? e.setAttribute("width", t.imageWidth) : e.removeAttribute("width"), t.imageHeight ? e.setAttribute("height", t.imageHeight) : e.removeAttribute("height"), e.className = h.image, t.imageClass && C(e, t.imageClass)) : P(e)
        },
        et = function(t) {
            var e = q(),
                o = parseInt(null === t.currentProgressStep ? At.getQueueStep() : t.currentProgressStep, 10);
            t.progressSteps && t.progressSteps.length ? (S(e), e.innerHTML = "", o >= t.progressSteps.length && u("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"), t.progressSteps.forEach(function(n, a) {
                var s = document.createElement("li");
                if (C(s, h.progresscircle), s.innerHTML = n, a === o && C(s, h.activeprogressstep), e.appendChild(s), a !== t.progressSteps.length - 1) {
                    var r = document.createElement("li");
                    C(r, h.progressline), t.progressStepsDistance && (r.style.width = t.progressStepsDistance), e.appendChild(r)
                }
            })) : P(e)
        },
        ot = function(t) {
            var e = j();
            t.titleText ? e.innerText = t.titleText : t.title && ("string" == typeof t.title && (t.title = t.title.split("\n").join("<br />")), K(t.title, e))
        },
        nt = [],
        at = function() {
            var t = O();
            t || At(""), t = O();
            var e = Y(),
                o = R(),
                n = I();
            S(e), S(o), C([t, e], h.loading), o.disabled = !0, n.disabled = !0, t.setAttribute("data-loading", !0), t.setAttribute("aria-busy", !0), t.focus()
        },
        st = {},
        rt = {
            title: "",
            titleText: "",
            text: "",
            html: "",
            footer: "",
            type: null,
            toast: !1,
            customClass: "",
            customContainerClass: "",
            target: "body",
            backdrop: !0,
            animation: !0,
            heightAuto: !0,
            allowOutsideClick: !0,
            allowEscapeKey: !0,
            allowEnterKey: !0,
            stopKeydownPropagation: !0,
            keydownListenerCapture: !1,
            showConfirmButton: !0,
            showCancelButton: !1,
            preConfirm: null,
            confirmButtonText: "OK",
            confirmButtonAriaLabel: "",
            confirmButtonColor: null,
            confirmButtonClass: "",
            cancelButtonText: "Cancel",
            cancelButtonAriaLabel: "",
            cancelButtonColor: null,
            cancelButtonClass: "",
            buttonsStyling: !0,
            reverseButtons: !1,
            focusConfirm: !0,
            focusCancel: !1,
            showCloseButton: !1,
            closeButtonAriaLabel: "Close this dialog",
            showLoaderOnConfirm: !1,
            imageUrl: null,
            imageWidth: null,
            imageHeight: null,
            imageAlt: "",
            imageClass: "",
            timer: null,
            width: null,
            padding: null,
            background: null,
            input: null,
            inputPlaceholder: "",
            inputValue: "",
            inputOptions: {},
            inputAutoTrim: !0,
            inputClass: "",
            inputAttributes: {},
            inputValidator: null,
            validationMessage: null,
            grow: !1,
            position: "center",
            progressSteps: [],
            currentProgressStep: null,
            progressStepsDistance: null,
            onBeforeOpen: null,
            onAfterClose: null,
            onOpen: null,
            onClose: null
        },
        it = [],
        lt = ["allowOutsideClick", "allowEnterKey", "backdrop", "focusConfirm", "focusCancel", "heightAuto", "keydownListenerCapture"],
        ct = function(t) {
            return rt.hasOwnProperty(t)
        },
        ut = function(t) {
            return -1 !== it.indexOf(t)
        },
        pt = Object.freeze({
            isValidParameter: ct,
            isUpdatableParameter: function(t) {
                return -1 !== ["title", "titleText", "text", "html", "type", "showConfirmButton", "showCancelButton", "confirmButtonText", "confirmButtonAriaLabel", "confirmButtonColor", "confirmButtonClass", "cancelButtonText", "cancelButtonAriaLabel", "cancelButtonColor", "cancelButtonClass", "buttonsStyling", "reverseButtons", "imageUrl", "imageWidth", "imageHeigth", "imageAlt", "imageClass", "progressSteps", "currentProgressStep"].indexOf(t)
            },
            isDeprecatedParameter: ut,
            argsToParams: function(e) {
                var o = {};
                switch (t(e[0])) {
                    case "object":
                        n(o, e[0]);
                        break;
                    default:
                        ["title", "html", "type"].forEach(function(n, a) {
                            switch (t(e[a])) {
                                case "string":
                                    o[n] = e[a];
                                    break;
                                case "undefined":
                                    break;
                                default:
                                    p("Unexpected type of ".concat(n, '! Expected "string", got ').concat(t(e[a])))
                            }
                        })
                }
                return o
            },
            isVisible: function() {
                return !!O()
            },
            clickConfirm: function() {
                return R().click()
            },
            clickCancel: function() {
                return I().click()
            },
            getContainer: L,
            getPopup: O,
            getTitle: j,
            getContent: M,
            getImage: V,
            getIcons: z,
            getCloseButton: N,
            getActions: Y,
            getConfirmButton: R,
            getCancelButton: I,
            getFooter: Z,
            getFocusableElements: D,
            getValidationMessage: H,
            isLoading: function() {
                return O().hasAttribute("data-loading")
            },
            fire: function() {
                for (var t = arguments.length, e = new Array(t), o = 0; o < t; o++) e[o] = arguments[o];
                return r(this, e)
            },
            mixin: function(t) {
                return function(r) {
                    function l() {
                        return e(this, l),
                            function(t, e) {
                                return !e || "object" != typeof e && "function" != typeof e ? function(t) {
                                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return t
                                }(t) : e
                            }(this, a(l).apply(this, arguments))
                    }
                    return function(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                writable: !0,
                                configurable: !0
                            }
                        }), e && s(t, e)
                    }(l, r), o(l.prototype, [{
                        key: "_main",
                        value: function(e) {
                            return i(a(l.prototype), "_main", this).call(this, n({}, t, e))
                        }
                    }]), l
                }(this)
            },
            queue: function(t) {
                var e = this;
                nt = t;
                var o = function() {
                        nt = [], document.body.removeAttribute("data-swal2-queue-step")
                    },
                    n = [];
                return new Promise(function(t) {
                    ! function a(s, r) {
                        s < nt.length ? (document.body.setAttribute("data-swal2-queue-step", s), e.fire(nt[s]).then(function(e) {
                            void 0 !== e.value ? (n.push(e.value), a(s + 1, r)) : (o(), t({
                                dismiss: e.dismiss
                            }))
                        })) : (o(), t({
                            value: n
                        }))
                    }(0)
                })
            },
            getQueueStep: function() {
                return document.body.getAttribute("data-swal2-queue-step")
            },
            insertQueueStep: function(t, e) {
                return e && e < nt.length ? nt.splice(e, 0, t) : nt.push(t)
            },
            deleteQueueStep: function(t) {
                void 0 !== nt[t] && nt.splice(t, 1)
            },
            showLoading: at,
            enableLoading: at,
            getTimerLeft: function() {
                return st.timeout && st.timeout.getTimerLeft()
            },
            stopTimer: function() {
                return st.timeout && st.timeout.stop()
            },
            resumeTimer: function() {
                return st.timeout && st.timeout.start()
            },
            toggleTimer: function() {
                var t = st.timeout;
                return t && (t.running ? t.stop() : t.start())
            },
            increaseTimer: function(t) {
                return st.timeout && st.timeout.increase(t)
            },
            isTimerRunning: function() {
                return st.timeout && st.timeout.isRunning()
            }
        }),
        dt = {
            promise: new WeakMap,
            innerParams: new WeakMap,
            domCache: new WeakMap
        };

    function wt() {
        var t = dt.innerParams.get(this),
            e = dt.domCache.get(this);
        t.showConfirmButton || (P(e.confirmButton), t.showCancelButton || P(e.actions)), B([e.popup, e.actions], h.loading), e.popup.removeAttribute("aria-busy"), e.popup.removeAttribute("data-loading"), e.confirmButton.disabled = !1, e.cancelButton.disabled = !1
    }
    var mt = function() {
            return !!window.MSInputMethodContext && !!document.documentMode
        },
        ft = function() {
            var t = L(),
                e = O();
            t.style.removeProperty("align-items"), e.offsetTop < 0 && (t.style.alignItems = "flex-start")
        },
        gt = {
            swalPromiseResolve: new WeakMap
        };

    function ht(t) {
        var e = L(),
            o = O(),
            n = dt.innerParams.get(this),
            a = gt.swalPromiseResolve.get(this),
            s = n.onClose,
            r = n.onAfterClose;
        if (o) {
            null !== s && "function" == typeof s && s(o), B(o, h.show), C(o, h.hide);
            var i = function() {
                U() ? yt(r) : (new Promise(function(t) {
                    var e = window.scrollX,
                        o = window.scrollY;
                    st.restoreFocusTimeout = setTimeout(function() {
                        st.previousActiveElement && st.previousActiveElement.focus ? (st.previousActiveElement.focus(), st.previousActiveElement = null) : document.body && document.body.focus(), t()
                    }, 100), void 0 !== e && void 0 !== o && window.scrollTo(e, o)
                }).then(function() {
                    return yt(r)
                }), st.keydownTarget.removeEventListener("keydown", st.keydownHandler, {
                    capture: st.keydownListenerCapture
                }), st.keydownHandlerAdded = !1), e.parentNode && e.parentNode.removeChild(e), B([document.documentElement, document.body], [h.shown, h["height-auto"], h["no-backdrop"], h["toast-shown"], h["toast-column"]]), X() && (null !== y.previousBodyPadding && (document.body.style.paddingRight = y.previousBodyPadding, y.previousBodyPadding = null), function() {
                    if (v(document.body, h.iosfix)) {
                        var t = parseInt(document.body.style.top, 10);
                        B(document.body, h.iosfix), document.body.style.top = "", document.body.scrollTop = -1 * t
                    }
                }(), "undefined" != typeof window && mt() && window.removeEventListener("resize", ft), c(document.body.children).forEach(function(t) {
                    t.hasAttribute("data-previous-aria-hidden") ? (t.setAttribute("aria-hidden", t.getAttribute("data-previous-aria-hidden")), t.removeAttribute("data-previous-aria-hidden")) : t.removeAttribute("aria-hidden")
                }))
            };
            F && !v(o, h.noanimation) ? o.addEventListener(F, function t() {
                o.removeEventListener(F, t), v(o, h.hide) && i()
            }) : i(), a(t || {})
        }
    }
    var bt, yt = function(t) {
            null !== t && "function" == typeof t && setTimeout(function() {
                t()
            })
        },
        vt = function t(o, n) {
            e(this, t);
            var a, s, r = n;
            this.running = !1, this.start = function() {
                return this.running || (this.running = !0, s = new Date, a = setTimeout(o, r)), r
            }, this.stop = function() {
                return this.running && (this.running = !1, clearTimeout(a), r -= new Date - s), r
            }, this.increase = function(t) {
                var e = this.running;
                return e && this.stop(), r += t, e && this.start(), r
            }, this.getTimerLeft = function() {
                return this.running && (this.stop(), this.start()), r
            }, this.isRunning = function() {
                return this.running
            }, this.start()
        },
        kt = {
            email: function(t, e) {
                return /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(t) ? Promise.resolve() : Promise.resolve(e || "Invalid email address")
            },
            url: function(t, e) {
                return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&\/\/=]*)$/.test(t) ? Promise.resolve() : Promise.resolve(e || "Invalid URL")
            }
        },
        xt = function(t) {
            var e = L(),
                o = O();
            null !== t.onBeforeOpen && "function" == typeof t.onBeforeOpen && t.onBeforeOpen(o), t.animation ? (C(o, h.show), C(e, h.fade), B(o, h.hide)) : B(o, h.fade), S(o), e.style.overflowY = "hidden", F && !v(o, h.noanimation) ? o.addEventListener(F, function t() {
                o.removeEventListener(F, t), e.style.overflowY = "auto"
            }) : e.style.overflowY = "auto", C([document.documentElement, document.body, e], h.shown), t.heightAuto && t.backdrop && !t.toast && C([document.documentElement, document.body], h["height-auto"]), X() && (null === y.previousBodyPadding && document.body.scrollHeight > window.innerHeight && (y.previousBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")), document.body.style.paddingRight = y.previousBodyPadding + function() {
                if ("ontouchstart" in window || navigator.msMaxTouchPoints) return 0;
                var t = document.createElement("div");
                t.style.width = "50px", t.style.height = "50px", t.style.overflow = "scroll", document.body.appendChild(t);
                var e = t.offsetWidth - t.clientWidth;
                return document.body.removeChild(t), e
            }() + "px"), function() {
                if (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream && !v(document.body, h.iosfix)) {
                    var t = document.body.scrollTop;
                    document.body.style.top = -1 * t + "px", C(document.body, h.iosfix)
                }
            }(), "undefined" != typeof window && mt() && (ft(), window.addEventListener("resize", ft)), c(document.body.children).forEach(function(t) {
                t === L() || function(t, e) {
                    if ("function" == typeof t.contains) return t.contains(e)
                }(t, L()) || (t.hasAttribute("aria-hidden") && t.setAttribute("data-previous-aria-hidden", t.getAttribute("aria-hidden")), t.setAttribute("aria-hidden", "true"))
            }), setTimeout(function() {
                e.scrollTop = 0
            })), U() || st.previousActiveElement || (st.previousActiveElement = document.activeElement), null !== t.onOpen && "function" == typeof t.onOpen && setTimeout(function() {
                t.onOpen(o)
            })
        },
        Ct = Object.freeze({
            hideLoading: wt,
            disableLoading: wt,
            getInput: function(t) {
                var e = dt.innerParams.get(this),
                    o = dt.domCache.get(this);
                if (!(t = t || e.input)) return null;
                switch (t) {
                    case "select":
                    case "textarea":
                    case "file":
                        return A(o.content, h[t]);
                    case "checkbox":
                        return o.popup.querySelector(".".concat(h.checkbox, " input"));
                    case "radio":
                        return o.popup.querySelector(".".concat(h.radio, " input:checked")) || o.popup.querySelector(".".concat(h.radio, " input:first-child"));
                    case "range":
                        return o.popup.querySelector(".".concat(h.range, " input"));
                    default:
                        return A(o.content, h.input)
                }
            },
            close: ht,
            closePopup: ht,
            closeModal: ht,
            closeToast: ht,
            enableButtons: function() {
                var t = dt.domCache.get(this);
                t.confirmButton.disabled = !1, t.cancelButton.disabled = !1
            },
            disableButtons: function() {
                var t = dt.domCache.get(this);
                t.confirmButton.disabled = !0, t.cancelButton.disabled = !0
            },
            enableConfirmButton: function() {
                dt.domCache.get(this).confirmButton.disabled = !1
            },
            disableConfirmButton: function() {
                dt.domCache.get(this).confirmButton.disabled = !0
            },
            enableInput: function() {
                var t = this.getInput();
                if (!t) return !1;
                if ("radio" === t.type)
                    for (var e = t.parentNode.parentNode.querySelectorAll("input"), o = 0; o < e.length; o++) e[o].disabled = !1;
                else t.disabled = !1
            },
            disableInput: function() {
                var t = this.getInput();
                if (!t) return !1;
                if (t && "radio" === t.type)
                    for (var e = t.parentNode.parentNode.querySelectorAll("input"), o = 0; o < e.length; o++) e[o].disabled = !0;
                else t.disabled = !0
            },
            showValidationMessage: function(t) {
                var e = dt.domCache.get(this);
                e.validationMessage.innerHTML = t;
                var o = window.getComputedStyle(e.popup);
                e.validationMessage.style.marginLeft = "-".concat(o.getPropertyValue("padding-left")), e.validationMessage.style.marginRight = "-".concat(o.getPropertyValue("padding-right")), S(e.validationMessage);
                var n = this.getInput();
                n && (n.setAttribute("aria-invalid", !0), n.setAttribute("aria-describedBy", h["validation-message"]), k(n), C(n, h.inputerror))
            },
            resetValidationMessage: function() {
                var t = dt.domCache.get(this);
                t.validationMessage && P(t.validationMessage);
                var e = this.getInput();
                e && (e.removeAttribute("aria-invalid"), e.removeAttribute("aria-describedBy"), B(e, h.inputerror))
            },
            getProgressSteps: function() {
                return dt.innerParams.get(this).progressSteps
            },
            setProgressSteps: function(t) {
                var e = n({}, dt.innerParams.get(this), {
                    progressSteps: t
                });
                dt.innerParams.set(this, e), et(e)
            },
            showProgressSteps: function() {
                var t = dt.domCache.get(this);
                S(t.progressSteps)
            },
            hideProgressSteps: function() {
                var t = dt.domCache.get(this);
                P(t.progressSteps)
            },
            _main: function(e) {
                var o = this;
                ! function(t) {
                    for (var e in t) ct(e) || u('Unknown parameter "'.concat(e, '"')), t.toast && -1 !== lt.indexOf(e) && u('The parameter "'.concat(e, '" is incompatible with toasts')), ut(e) && (o = 'The parameter "'.concat(e, '" is deprecated and will be removed in the next major release.'), -1 === d.indexOf(o) && (d.push(o), u(o)));
                    var o
                }(e);
                var a = n({}, rt, e);
                ! function(t) {
                    var e;
                    t.inputValidator || Object.keys(kt).forEach(function(e) {
                        t.input === e && (t.inputValidator = kt[e])
                    }), (!t.target || "string" == typeof t.target && !document.querySelector(t.target) || "string" != typeof t.target && !t.target.appendChild) && (u('Target parameter is not valid, defaulting to "body"'), t.target = "body"), "function" == typeof t.animation && (t.animation = t.animation.call());
                    var o = O(),
                        n = "string" == typeof t.target ? document.querySelector(t.target) : t.target;
                    e = o && n && o.parentNode !== n.parentNode ? W(t) : o || W(t), t.width && (e.style.width = "number" == typeof t.width ? t.width + "px" : t.width), t.padding && (e.style.padding = "number" == typeof t.padding ? t.padding + "px" : t.padding), t.background && (e.style.background = t.background);
                    for (var a = window.getComputedStyle(e).getPropertyValue("background-color"), s = e.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix"), r = 0; r < s.length; r++) s[r].style.backgroundColor = a;
                    var i = L(),
                        l = N(),
                        c = Z();
                    if (ot(t), J(t), "string" == typeof t.backdrop ? L().style.background = t.backdrop : t.backdrop || C([document.documentElement, document.body], h["no-backdrop"]), !t.backdrop && t.allowOutsideClick && u('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`'), t.position in h ? C(i, h[t.position]) : (u('The "position" parameter is not valid, defaulting to "center"'), C(i, h.center)), t.grow && "string" == typeof t.grow) {
                        var p = "grow-" + t.grow;
                        p in h && C(i, h[p])
                    }
                    t.showCloseButton ? (l.setAttribute("aria-label", t.closeButtonAriaLabel), S(l)) : P(l), e.className = h.popup, t.toast ? (C([document.documentElement, document.body], h["toast-shown"]), C(e, h.toast)) : C(e, h.modal), t.customClass && C(e, t.customClass), t.customContainerClass && C(i, t.customContainerClass), et(t), G(t), tt(t), Q(t), K(t.footer, c), !0 === t.animation ? B(e, h.noanimation) : C(e, h.noanimation), t.showLoaderOnConfirm && !t.preConfirm && u("showLoaderOnConfirm is set to true, but preConfirm is not defined.\nshowLoaderOnConfirm should be used together with preConfirm, see usage example:\nhttps://sweetalert2.github.io/#ajax-request")
                }(a), Object.freeze(a), dt.innerParams.set(this, a), st.timeout && (st.timeout.stop(), delete st.timeout), clearTimeout(st.restoreFocusTimeout);
                var s = {
                    popup: O(),
                    container: L(),
                    content: M(),
                    actions: Y(),
                    confirmButton: R(),
                    cancelButton: I(),
                    closeButton: N(),
                    validationMessage: H(),
                    progressSteps: q()
                };
                dt.domCache.set(this, s);
                var r = this.constructor;
                return new Promise(function(e) {
                    var n = function(t) {
                            o.closePopup({
                                value: t
                            })
                        },
                        i = function(t) {
                            o.closePopup({
                                dismiss: t
                            })
                        };
                    gt.swalPromiseResolve.set(o, e), a.timer && (st.timeout = new vt(function() {
                        i("timer"), delete st.timeout
                    }, a.timer)), a.input && setTimeout(function() {
                        var t = o.getInput();
                        t && k(t)
                    }, 0);
                    for (var l = function(t) {
                            a.showLoaderOnConfirm && r.showLoading(), a.preConfirm ? (o.resetValidationMessage(), Promise.resolve().then(function() {
                                return a.preConfirm(t, a.validationMessage)
                            }).then(function(e) {
                                T(s.validationMessage) || !1 === e ? o.hideLoading() : n(e || t)
                            })) : n(t)
                        }, c = function(t) {
                            var e = t.target,
                                n = s.confirmButton,
                                c = s.cancelButton,
                                u = n && (n === e || n.contains(e)),
                                p = c && (c === e || c.contains(e));
                            switch (t.type) {
                                case "click":
                                    if (u && r.isVisible())
                                        if (o.disableButtons(), a.input) {
                                            var d = function() {
                                                var t = o.getInput();
                                                if (!t) return null;
                                                switch (a.input) {
                                                    case "checkbox":
                                                        return t.checked ? 1 : 0;
                                                    case "radio":
                                                        return t.checked ? t.value : null;
                                                    case "file":
                                                        return t.files.length ? t.files[0] : null;
                                                    default:
                                                        return a.inputAutoTrim ? t.value.trim() : t.value
                                                }
                                            }();
                                            a.inputValidator ? (o.disableInput(), Promise.resolve().then(function() {
                                                return a.inputValidator(d, a.validationMessage)
                                            }).then(function(t) {
                                                o.enableButtons(), o.enableInput(), t ? o.showValidationMessage(t) : l(d)
                                            })) : o.getInput().checkValidity() ? l(d) : (o.enableButtons(), o.showValidationMessage(a.validationMessage))
                                        } else l(!0);
                                    else p && r.isVisible() && (o.disableButtons(), i(r.DismissReason.cancel))
                            }
                        }, d = s.popup.querySelectorAll("button"), f = 0; f < d.length; f++) d[f].onclick = c, d[f].onmouseover = c, d[f].onmouseout = c, d[f].onmousedown = c;
                    if (s.closeButton.onclick = function() {
                            i(r.DismissReason.close)
                        }, a.toast) s.popup.onclick = function() {
                        a.showConfirmButton || a.showCancelButton || a.showCloseButton || a.input || i(r.DismissReason.close)
                    };
                    else {
                        var g = !1;
                        s.popup.onmousedown = function() {
                            s.container.onmouseup = function(t) {
                                s.container.onmouseup = void 0, t.target === s.container && (g = !0)
                            }
                        }, s.container.onmousedown = function() {
                            s.popup.onmouseup = function(t) {
                                s.popup.onmouseup = void 0, (t.target === s.popup || s.popup.contains(t.target)) && (g = !0)
                            }
                        }, s.container.onclick = function(t) {
                            g ? g = !1 : t.target === s.container && w(a.allowOutsideClick) && i(r.DismissReason.backdrop)
                        }
                    }
                    a.reverseButtons ? s.confirmButton.parentNode.insertBefore(s.cancelButton, s.confirmButton) : s.confirmButton.parentNode.insertBefore(s.confirmButton, s.cancelButton);
                    var b = function(t, e) {
                        for (var o = D(a.focusCancel), n = 0; n < o.length; n++) return (t += e) === o.length ? t = 0 : -1 === t && (t = o.length - 1), o[t].focus();
                        s.popup.focus()
                    };
                    st.keydownHandlerAdded && (st.keydownTarget.removeEventListener("keydown", st.keydownHandler, {
                        capture: st.keydownListenerCapture
                    }), st.keydownHandlerAdded = !1), a.toast || (st.keydownHandler = function(t) {
                        return function(t, e) {
                            if (e.stopKeydownPropagation && t.stopPropagation(), "Enter" !== t.key || t.isComposing)
                                if ("Tab" === t.key) {
                                    for (var n = t.target, a = D(e.focusCancel), l = -1, c = 0; c < a.length; c++)
                                        if (n === a[c]) {
                                            l = c;
                                            break
                                        } t.shiftKey ? b(l, -1) : b(l, 1), t.stopPropagation(), t.preventDefault()
                                } else -1 !== ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Left", "Right", "Up", "Down"].indexOf(t.key) ? document.activeElement === s.confirmButton && T(s.cancelButton) ? s.cancelButton.focus() : document.activeElement === s.cancelButton && T(s.confirmButton) && s.confirmButton.focus() : "Escape" !== t.key && "Esc" !== t.key || !0 !== w(e.allowEscapeKey) || (t.preventDefault(), i(r.DismissReason.esc));
                            else if (t.target && o.getInput() && t.target.outerHTML === o.getInput().outerHTML) {
                                if (-1 !== ["textarea", "file"].indexOf(e.input)) return;
                                r.clickConfirm(), t.preventDefault()
                            }
                        }(t, a)
                    }, st.keydownTarget = a.keydownListenerCapture ? window : s.popup, st.keydownListenerCapture = a.keydownListenerCapture, st.keydownTarget.addEventListener("keydown", st.keydownHandler, {
                        capture: st.keydownListenerCapture
                    }), st.keydownHandlerAdded = !0), o.enableButtons(), o.hideLoading(), o.resetValidationMessage(), a.toast && (a.input || a.footer || a.showCloseButton) ? C(document.body, h["toast-column"]) : B(document.body, h["toast-column"]);
                    for (var y, v, x = ["input", "file", "range", "select", "radio", "checkbox", "textarea"], L = function(t) {
                            t.placeholder && !a.inputPlaceholder || (t.placeholder = a.inputPlaceholder)
                        }, E = 0; E < x.length; E++) {
                        var O = h[x[E]],
                            z = A(s.content, O);
                        if (y = o.getInput(x[E])) {
                            for (var j in y.attributes)
                                if (y.attributes.hasOwnProperty(j)) {
                                    var M = y.attributes[j].name;
                                    "type" !== M && "value" !== M && y.removeAttribute(M)
                                } for (var V in a.inputAttributes) "range" === x[E] && "placeholder" === V || y.setAttribute(V, a.inputAttributes[V])
                        }
                        z.className = O, a.inputClass && C(z, a.inputClass), P(z)
                    }
                    switch (a.input) {
                        case "text":
                        case "email":
                        case "password":
                        case "number":
                        case "tel":
                        case "url":
                            y = A(s.content, h.input), "string" == typeof a.inputValue || "number" == typeof a.inputValue ? y.value = a.inputValue : m(a.inputValue) || u('Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(t(a.inputValue), '"')), L(y), y.type = a.input, S(y);
                            break;
                        case "file":
                            L(y = A(s.content, h.file)), y.type = a.input, S(y);
                            break;
                        case "range":
                            var q = A(s.content, h.range),
                                H = q.querySelector("input"),
                                R = q.querySelector("output");
                            H.value = a.inputValue, H.type = a.input, R.value = a.inputValue, S(q);
                            break;
                        case "select":
                            var I = A(s.content, h.select);
                            if (I.innerHTML = "", a.inputPlaceholder) {
                                var Y = document.createElement("option");
                                Y.innerHTML = a.inputPlaceholder, Y.value = "", Y.disabled = !0, Y.selected = !0, I.appendChild(Y)
                            }
                            v = function(t) {
                                t.forEach(function(t) {
                                    var e = t[0],
                                        o = t[1],
                                        n = document.createElement("option");
                                    n.value = e, n.innerHTML = o, a.inputValue.toString() === e.toString() && (n.selected = !0), I.appendChild(n)
                                }), S(I), I.focus()
                            };
                            break;
                        case "radio":
                            var Z = A(s.content, h.radio);
                            Z.innerHTML = "", v = function(t) {
                                t.forEach(function(t) {
                                    var e = t[0],
                                        o = t[1],
                                        n = document.createElement("input"),
                                        s = document.createElement("label");
                                    n.type = "radio", n.name = h.radio, n.value = e, a.inputValue.toString() === e.toString() && (n.checked = !0);
                                    var r = document.createElement("span");
                                    r.innerHTML = o, r.className = h.label, s.appendChild(n), s.appendChild(r), Z.appendChild(s)
                                }), S(Z);
                                var e = Z.querySelectorAll("input");
                                e.length && e[0].focus()
                            };
                            break;
                        case "checkbox":
                            var N = A(s.content, h.checkbox),
                                X = o.getInput("checkbox");
                            X.type = "checkbox", X.value = 1, X.id = h.checkbox, X.checked = Boolean(a.inputValue), N.querySelector("span").innerHTML = a.inputPlaceholder, S(N);
                            break;
                        case "textarea":
                            var U = A(s.content, h.textarea);
                            U.value = a.inputValue, L(U), S(U);
                            break;
                        case null:
                            break;
                        default:
                            p('Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "'.concat(a.input, '"'))
                    }
                    if ("select" === a.input || "radio" === a.input) {
                        var _ = function(t) {
                            return v((e = t, o = [], "undefined" != typeof Map && e instanceof Map ? e.forEach(function(t, e) {
                                o.push([e, t])
                            }) : Object.keys(e).forEach(function(t) {
                                o.push([t, e[t]])
                            }), o));
                            var e, o
                        };
                        m(a.inputOptions) ? (r.showLoading(), a.inputOptions.then(function(t) {
                            o.hideLoading(), _(t)
                        })) : "object" === t(a.inputOptions) ? _(a.inputOptions) : p("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(t(a.inputOptions)))
                    } else -1 !== ["text", "email", "number", "tel", "textarea"].indexOf(a.input) && m(a.inputValue) && (r.showLoading(), P(y), a.inputValue.then(function(t) {
                        y.value = "number" === a.input ? parseFloat(t) || 0 : t + "", S(y), y.focus(), o.hideLoading()
                    }).catch(function(t) {
                        p("Error in inputValue promise: " + t), y.value = "", S(y), y.focus(), o.hideLoading()
                    }));
                    xt(a), a.toast || (w(a.allowEnterKey) ? a.focusCancel && T(s.cancelButton) ? s.cancelButton.focus() : a.focusConfirm && T(s.confirmButton) ? s.confirmButton.focus() : b(-1, 1) : document.activeElement && "function" == typeof document.activeElement.blur && document.activeElement.blur()), s.container.scrollTop = 0
                })
            },
            update: function(t) {
                var e = {};
                Object.keys(t).forEach(function(o) {
                    At.isUpdatableParameter(o) ? e[o] = t[o] : u('Invalid parameter to update: "'.concat(o, '". Updatable params are listed here: TODO (@limonte) add link'))
                });
                var o = n({}, dt.innerParams.get(this), e);
                Q(o), J(o), G(o), tt(o), et(o), ot(o), dt.innerParams.set(this, o)
            }
        });

    function Bt() {
        if ("undefined" != typeof window) {
            "undefined" == typeof Promise && p("This package requires a Promise library, please include a shim to enable it in this browser (See: https://github.com/sweetalert2/sweetalert2/wiki/Migration-from-SweetAlert-to-SweetAlert2#1-ie-support)"), bt = this;
            for (var t = arguments.length, e = new Array(t), o = 0; o < t; o++) e[o] = arguments[o];
            var n = Object.freeze(this.constructor.argsToParams(e));
            Object.defineProperties(this, {
                params: {
                    value: n,
                    writable: !1,
                    enumerable: !0
                }
            });
            var a = this._main(this.params);
            dt.promise.set(this, a)
        }
    }
    Bt.prototype.then = function(t) {
        return dt.promise.get(this).then(t)
    }, Bt.prototype.finally = function(t) {
        return dt.promise.get(this).finally(t)
    }, n(Bt.prototype, Ct), n(Bt, pt), Object.keys(Ct).forEach(function(t) {
        Bt[t] = function() {
            var e;
            if (bt) return (e = bt)[t].apply(e, arguments)
        }
    }), Bt.DismissReason = f;
    var At = Bt;
    return At.default = At
}), "undefined" != typeof window && window.Sweetalert2 && (window.Sweetalert2.version = "8.0.1", window.swal = window.sweetAlert = window.Swal = window.SweetAlert = window.Sweetalert2), "undefined" != typeof document && function(t, e) {
    var o = t.createElement("style");
    if (t.getElementsByTagName("head")[0].appendChild(o), o.styleSheet) o.styleSheet.disabled || (o.styleSheet.cssText = e);
    else try {
        o.innerHTML = e
    } catch (t) {
        o.innerText = e
    }
}(document, "@-webkit-keyframes swal2-show{0%{-webkit-transform:scale(.7);transform:scale(.7)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes swal2-show{0%{-webkit-transform:scale(.7);transform:scale(.7)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}100%{-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes swal2-hide{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}100%{-webkit-transform:scale(.5);transform:scale(.5);opacity:0}}@keyframes swal2-hide{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}100%{-webkit-transform:scale(.5);transform:scale(.5);opacity:0}}@-webkit-keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.875em;width:1.5625em}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.875em;width:1.5625em}}@-webkit-keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@-webkit-keyframes swal2-rotate-success-circular-line{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}100%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@keyframes swal2-rotate-success-circular-line{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}100%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@-webkit-keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;-webkit-transform:scale(.4);transform:scale(.4);opacity:0}50%{margin-top:1.625em;-webkit-transform:scale(.4);transform:scale(.4);opacity:0}80%{margin-top:-.375em;-webkit-transform:scale(1.15);transform:scale(1.15)}100%{margin-top:0;-webkit-transform:scale(1);transform:scale(1);opacity:1}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;-webkit-transform:scale(.4);transform:scale(.4);opacity:0}50%{margin-top:1.625em;-webkit-transform:scale(.4);transform:scale(.4);opacity:0}80%{margin-top:-.375em;-webkit-transform:scale(1.15);transform:scale(1.15)}100%{margin-top:0;-webkit-transform:scale(1);transform:scale(1);opacity:1}}@-webkit-keyframes swal2-animate-error-icon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}100%{-webkit-transform:rotateX(0);transform:rotateX(0);opacity:1}}@keyframes swal2-animate-error-icon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}100%{-webkit-transform:rotateX(0);transform:rotateX(0);opacity:1}}body.swal2-toast-shown .swal2-container{background-color:transparent}body.swal2-toast-shown .swal2-container.swal2-shown{background-color:transparent}body.swal2-toast-shown .swal2-container.swal2-top{top:0;right:auto;bottom:auto;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{top:0;right:0;bottom:auto;left:auto}body.swal2-toast-shown .swal2-container.swal2-top-left,body.swal2-toast-shown .swal2-container.swal2-top-start{top:0;right:auto;bottom:auto;left:0}body.swal2-toast-shown .swal2-container.swal2-center-left,body.swal2-toast-shown .swal2-container.swal2-center-start{top:50%;right:auto;bottom:auto;left:0;-webkit-transform:translateY(-50%);transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{top:50%;right:auto;bottom:auto;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{top:50%;right:0;bottom:auto;left:auto;-webkit-transform:translateY(-50%);transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-left,body.swal2-toast-shown .swal2-container.swal2-bottom-start{top:auto;right:auto;bottom:0;left:0}body.swal2-toast-shown .swal2-container.swal2-bottom{top:auto;right:auto;bottom:0;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{top:auto;right:0;bottom:0;left:auto}body.swal2-toast-column .swal2-toast{flex-direction:column;align-items:stretch}body.swal2-toast-column .swal2-toast .swal2-actions{flex:1;align-self:stretch;height:2.2em;margin-top:.3125em}body.swal2-toast-column .swal2-toast .swal2-loading{justify-content:center}body.swal2-toast-column .swal2-toast .swal2-input{height:2em;margin:.3125em auto;font-size:1em}body.swal2-toast-column .swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast{flex-direction:row;align-items:center;width:auto;padding:.625em;box-shadow:0 0 .625em #d9d9d9;overflow-y:hidden}.swal2-popup.swal2-toast .swal2-header{flex-direction:row}.swal2-popup.swal2-toast .swal2-title{flex-grow:1;justify-content:flex-start;margin:0 .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{position:initial;width:.8em;height:.8em;line-height:.8}.swal2-popup.swal2-toast .swal2-content{justify-content:flex-start;font-size:1em}.swal2-popup.swal2-toast .swal2-icon{width:2em;min-width:2em;height:2em;margin:0}.swal2-popup.swal2-toast .swal2-icon-text{font-size:2em;font-weight:700;line-height:1em}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{height:auto;margin:0 .3125em}.swal2-popup.swal2-toast .swal2-styled{margin:0 .3125em;padding:.3125em .625em;font-size:1em}.swal2-popup.swal2-toast .swal2-styled:focus{box-shadow:0 0 0 .0625em #fff,0 0 0 .125em rgba(50,100,150,.4)}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:2em;height:2.8125em;-webkit-transform:rotate(45deg);transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.25em;left:-.9375em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:2em 2em;transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.25em;left:.9375em;-webkit-transform-origin:0 2em;transform-origin:0 2em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast.swal2-show{-webkit-animation:showSweetToast .5s;animation:showSweetToast .5s}.swal2-popup.swal2-toast.swal2-hide{-webkit-animation:hideSweetToast .2s forwards;animation:hideSweetToast .2s forwards}.swal2-popup.swal2-toast .swal2-animate-success-icon .swal2-success-line-tip{-webkit-animation:animate-toast-success-tip .75s;animation:animate-toast-success-tip .75s}.swal2-popup.swal2-toast .swal2-animate-success-icon .swal2-success-line-long{-webkit-animation:animate-toast-success-long .75s;animation:animate-toast-success-long .75s}@-webkit-keyframes showSweetToast{0%{-webkit-transform:translateY(-.625em) rotateZ(2deg);transform:translateY(-.625em) rotateZ(2deg);opacity:0}33%{-webkit-transform:translateY(0) rotateZ(-2deg);transform:translateY(0) rotateZ(-2deg);opacity:.5}66%{-webkit-transform:translateY(.3125em) rotateZ(2deg);transform:translateY(.3125em) rotateZ(2deg);opacity:.7}100%{-webkit-transform:translateY(0) rotateZ(0);transform:translateY(0) rotateZ(0);opacity:1}}@keyframes showSweetToast{0%{-webkit-transform:translateY(-.625em) rotateZ(2deg);transform:translateY(-.625em) rotateZ(2deg);opacity:0}33%{-webkit-transform:translateY(0) rotateZ(-2deg);transform:translateY(0) rotateZ(-2deg);opacity:.5}66%{-webkit-transform:translateY(.3125em) rotateZ(2deg);transform:translateY(.3125em) rotateZ(2deg);opacity:.7}100%{-webkit-transform:translateY(0) rotateZ(0);transform:translateY(0) rotateZ(0);opacity:1}}@-webkit-keyframes hideSweetToast{0%{opacity:1}33%{opacity:.5}100%{-webkit-transform:rotateZ(1deg);transform:rotateZ(1deg);opacity:0}}@keyframes hideSweetToast{0%{opacity:1}33%{opacity:.5}100%{-webkit-transform:rotateZ(1deg);transform:rotateZ(1deg);opacity:0}}@-webkit-keyframes animate-toast-success-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes animate-toast-success-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@-webkit-keyframes animate-toast-success-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes animate-toast-success-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto!important}body.swal2-no-backdrop .swal2-shown{top:auto;right:auto;bottom:auto;left:auto;background-color:transparent}body.swal2-no-backdrop .swal2-shown>.swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}body.swal2-no-backdrop .swal2-shown.swal2-top{top:0;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}body.swal2-no-backdrop .swal2-shown.swal2-top-left,body.swal2-no-backdrop .swal2-shown.swal2-top-start{top:0;left:0}body.swal2-no-backdrop .swal2-shown.swal2-top-end,body.swal2-no-backdrop .swal2-shown.swal2-top-right{top:0;right:0}body.swal2-no-backdrop .swal2-shown.swal2-center{top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}body.swal2-no-backdrop .swal2-shown.swal2-center-left,body.swal2-no-backdrop .swal2-shown.swal2-center-start{top:50%;left:0;-webkit-transform:translateY(-50%);transform:translateY(-50%)}body.swal2-no-backdrop .swal2-shown.swal2-center-end,body.swal2-no-backdrop .swal2-shown.swal2-center-right{top:50%;right:0;-webkit-transform:translateY(-50%);transform:translateY(-50%)}body.swal2-no-backdrop .swal2-shown.swal2-bottom{bottom:0;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}body.swal2-no-backdrop .swal2-shown.swal2-bottom-left,body.swal2-no-backdrop .swal2-shown.swal2-bottom-start{bottom:0;left:0}body.swal2-no-backdrop .swal2-shown.swal2-bottom-end,body.swal2-no-backdrop .swal2-shown.swal2-bottom-right{right:0;bottom:0}.swal2-container{display:flex;position:fixed;top:0;right:0;bottom:0;left:0;flex-direction:row;align-items:center;justify-content:center;padding:10px;background-color:transparent;z-index:1060;overflow-x:hidden;-webkit-overflow-scrolling:touch}.swal2-container.swal2-top{align-items:flex-start}.swal2-container.swal2-top-left,.swal2-container.swal2-top-start{align-items:flex-start;justify-content:flex-start}.swal2-container.swal2-top-end,.swal2-container.swal2-top-right{align-items:flex-start;justify-content:flex-end}.swal2-container.swal2-center{align-items:center}.swal2-container.swal2-center-left,.swal2-container.swal2-center-start{align-items:center;justify-content:flex-start}.swal2-container.swal2-center-end,.swal2-container.swal2-center-right{align-items:center;justify-content:flex-end}.swal2-container.swal2-bottom{align-items:flex-end}.swal2-container.swal2-bottom-left,.swal2-container.swal2-bottom-start{align-items:flex-end;justify-content:flex-start}.swal2-container.swal2-bottom-end,.swal2-container.swal2-bottom-right{align-items:flex-end;justify-content:flex-end}.swal2-container.swal2-grow-fullscreen>.swal2-modal{display:flex!important;flex:1;align-self:stretch;justify-content:center}.swal2-container.swal2-grow-row>.swal2-modal{display:flex!important;flex:1;align-content:center;justify-content:center}.swal2-container.swal2-grow-column{flex:1;flex-direction:column}.swal2-container.swal2-grow-column.swal2-bottom,.swal2-container.swal2-grow-column.swal2-center,.swal2-container.swal2-grow-column.swal2-top{align-items:center}.swal2-container.swal2-grow-column.swal2-bottom-left,.swal2-container.swal2-grow-column.swal2-bottom-start,.swal2-container.swal2-grow-column.swal2-center-left,.swal2-container.swal2-grow-column.swal2-center-start,.swal2-container.swal2-grow-column.swal2-top-left,.swal2-container.swal2-grow-column.swal2-top-start{align-items:flex-start}.swal2-container.swal2-grow-column.swal2-bottom-end,.swal2-container.swal2-grow-column.swal2-bottom-right,.swal2-container.swal2-grow-column.swal2-center-end,.swal2-container.swal2-grow-column.swal2-center-right,.swal2-container.swal2-grow-column.swal2-top-end,.swal2-container.swal2-grow-column.swal2-top-right{align-items:flex-end}.swal2-container.swal2-grow-column>.swal2-modal{display:flex!important;flex:1;align-content:center;justify-content:center}.swal2-container:not(.swal2-top):not(.swal2-top-start):not(.swal2-top-end):not(.swal2-top-left):not(.swal2-top-right):not(.swal2-center-start):not(.swal2-center-end):not(.swal2-center-left):not(.swal2-center-right):not(.swal2-bottom):not(.swal2-bottom-start):not(.swal2-bottom-end):not(.swal2-bottom-left):not(.swal2-bottom-right):not(.swal2-grow-fullscreen)>.swal2-modal{margin:auto}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-container .swal2-modal{margin:0!important}}.swal2-container.swal2-fade{transition:background-color .1s}.swal2-container.swal2-shown{background-color:rgba(0,0,0,.4)}.swal2-popup{display:none;position:relative;flex-direction:column;justify-content:center;width:32em;max-width:100%;padding:1.25em;border-radius:.3125em;background:#fff;font-family:inherit;font-size:1rem;box-sizing:border-box}.swal2-popup:focus{outline:0}.swal2-popup.swal2-loading{overflow-y:hidden}.swal2-popup .swal2-header{display:flex;flex-direction:column;align-items:center}.swal2-popup .swal2-title{display:block;position:relative;max-width:100%;margin:0 0 .4em;padding:0;color:#595959;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}.swal2-popup .swal2-actions{flex-wrap:wrap;align-items:center;justify-content:center;margin:1.25em auto 0;z-index:1}.swal2-popup .swal2-actions:not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}.swal2-popup .swal2-actions:not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0,0,0,.1),rgba(0,0,0,.1))}.swal2-popup .swal2-actions:not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.2))}.swal2-popup .swal2-actions.swal2-loading .swal2-styled.swal2-confirm{width:2.5em;height:2.5em;margin:.46875em;padding:0;border:.25em solid transparent;border-radius:100%;border-color:transparent;background-color:transparent!important;color:transparent;cursor:default;box-sizing:border-box;-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.swal2-popup .swal2-actions.swal2-loading .swal2-styled.swal2-cancel{margin-right:30px;margin-left:30px}.swal2-popup .swal2-actions.swal2-loading :not(.swal2-styled).swal2-confirm::after{display:inline-block;width:15px;height:15px;margin-left:5px;border:3px solid #999;border-radius:50%;border-right-color:transparent;box-shadow:1px 1px 1px #fff;content:'';-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal}.swal2-popup .swal2-styled{margin:.3125em;padding:.625em 2em;font-weight:500;box-shadow:none}.swal2-popup .swal2-styled:not([disabled]){cursor:pointer}.swal2-popup .swal2-styled.swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#3085d6;color:#fff;font-size:1.0625em}.swal2-popup .swal2-styled.swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#aaa;color:#fff;font-size:1.0625em}.swal2-popup .swal2-styled:focus{outline:0;box-shadow:0 0 0 2px #fff,0 0 0 4px rgba(50,100,150,.4)}.swal2-popup .swal2-styled::-moz-focus-inner{border:0}.swal2-popup .swal2-footer{justify-content:center;margin:1.25em 0 0;padding:1em 0 0;border-top:1px solid #eee;color:#545454;font-size:1em}.swal2-popup .swal2-image{max-width:100%;margin:1.25em auto}.swal2-popup .swal2-close{position:absolute;top:0;right:0;justify-content:center;width:1.2em;height:1.2em;padding:0;transition:color .1s ease-out;border:none;border-radius:0;outline:initial;background:0 0;color:#ccc;font-family:serif;font-size:2.5em;line-height:1.2;cursor:pointer;overflow:hidden}.swal2-popup .swal2-close:hover{-webkit-transform:none;transform:none;color:#f27474}.swal2-popup>.swal2-checkbox,.swal2-popup>.swal2-file,.swal2-popup>.swal2-input,.swal2-popup>.swal2-radio,.swal2-popup>.swal2-select,.swal2-popup>.swal2-textarea{display:none}.swal2-popup .swal2-content{justify-content:center;margin:0;padding:0;color:#545454;font-size:1.125em;font-weight:300;line-height:normal;z-index:1;word-wrap:break-word}.swal2-popup #swal2-content{text-align:center}.swal2-popup .swal2-checkbox,.swal2-popup .swal2-file,.swal2-popup .swal2-input,.swal2-popup .swal2-radio,.swal2-popup .swal2-select,.swal2-popup .swal2-textarea{margin:1em auto}.swal2-popup .swal2-file,.swal2-popup .swal2-input,.swal2-popup .swal2-textarea{width:100%;transition:border-color .3s,box-shadow .3s;border:1px solid #d9d9d9;border-radius:.1875em;font-size:1.125em;box-shadow:inset 0 1px 1px rgba(0,0,0,.06);box-sizing:border-box}.swal2-popup .swal2-file.swal2-inputerror,.swal2-popup .swal2-input.swal2-inputerror,.swal2-popup .swal2-textarea.swal2-inputerror{border-color:#f27474!important;box-shadow:0 0 2px #f27474!important}.swal2-popup .swal2-file:focus,.swal2-popup .swal2-input:focus,.swal2-popup .swal2-textarea:focus{border:1px solid #b4dbed;outline:0;box-shadow:0 0 3px #c4e6f5}.swal2-popup .swal2-file::-webkit-input-placeholder,.swal2-popup .swal2-input::-webkit-input-placeholder,.swal2-popup .swal2-textarea::-webkit-input-placeholder{color:#ccc}.swal2-popup .swal2-file:-ms-input-placeholder,.swal2-popup .swal2-input:-ms-input-placeholder,.swal2-popup .swal2-textarea:-ms-input-placeholder{color:#ccc}.swal2-popup .swal2-file::-ms-input-placeholder,.swal2-popup .swal2-input::-ms-input-placeholder,.swal2-popup .swal2-textarea::-ms-input-placeholder{color:#ccc}.swal2-popup .swal2-file::placeholder,.swal2-popup .swal2-input::placeholder,.swal2-popup .swal2-textarea::placeholder{color:#ccc}.swal2-popup .swal2-range input{width:80%}.swal2-popup .swal2-range output{width:20%;font-weight:600;text-align:center}.swal2-popup .swal2-range input,.swal2-popup .swal2-range output{height:2.625em;margin:1em auto;padding:0;font-size:1.125em;line-height:2.625em}.swal2-popup .swal2-input{height:2.625em;padding:0 .75em}.swal2-popup .swal2-input[type=number]{max-width:10em}.swal2-popup .swal2-file{font-size:1.125em}.swal2-popup .swal2-textarea{height:6.75em;padding:.75em}.swal2-popup .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;color:#545454;font-size:1.125em}.swal2-popup .swal2-checkbox,.swal2-popup .swal2-radio{align-items:center;justify-content:center}.swal2-popup .swal2-checkbox label,.swal2-popup .swal2-radio label{margin:0 .6em;font-size:1.125em}.swal2-popup .swal2-checkbox input,.swal2-popup .swal2-radio input{margin:0 .4em}.swal2-popup .swal2-validation-message{display:none;align-items:center;justify-content:center;padding:.625em;background:#f0f0f0;color:#666;font-size:1em;font-weight:300;overflow:hidden}.swal2-popup .swal2-validation-message::before{display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center;content:'!';zoom:normal}@supports (-ms-accelerator:true){.swal2-range input{width:100%!important}.swal2-range output{display:none}}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-range input{width:100%!important}.swal2-range output{display:none}}@-moz-document url-prefix(){.swal2-close:focus{outline:2px solid rgba(50,100,150,.4)}}.swal2-icon{position:relative;justify-content:center;width:5em;height:5em;margin:1.25em auto 1.875em;border:.25em solid transparent;border-radius:50%;line-height:5em;cursor:default;box-sizing:content-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;zoom:normal}.swal2-icon-text{font-size:3.75em}.swal2-icon.swal2-error{border-color:#f27474}.swal2-icon.swal2-error .swal2-x-mark{position:relative;flex-grow:1}.swal2-icon.swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.swal2-icon.swal2-warning{border-color:#facea8;color:#f8bb86}.swal2-icon.swal2-info{border-color:#9de0f6;color:#3fc3ee}.swal2-icon.swal2-question{border-color:#c9dae1;color:#87adbd}.swal2-icon.swal2-success{border-color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;-webkit-transform:rotate(45deg);transform:rotate(45deg);border-radius:50%}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.4375em;left:-2.0635em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:3.75em 3.75em;transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.6875em;left:1.875em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:0 3.75em;transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}.swal2-icon.swal2-success .swal2-success-ring{position:absolute;top:-.25em;left:-.25em;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%;z-index:2;box-sizing:content-box}.swal2-icon.swal2-success .swal2-success-fix{position:absolute;top:.5em;left:1.625em;width:.4375em;height:5.625em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);z-index:1}.swal2-icon.swal2-success [class^=swal2-success-line]{display:block;position:absolute;height:.3125em;border-radius:.125em;background-color:#a5dc86;z-index:2}.swal2-icon.swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.875em;width:1.5625em;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.swal2-icon.swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.swal2-progresssteps{align-items:center;margin:0 0 1.25em;padding:0;font-weight:600}.swal2-progresssteps li{display:inline-block;position:relative}.swal2-progresssteps .swal2-progresscircle{width:2em;height:2em;border-radius:2em;background:#3085d6;color:#fff;line-height:2em;text-align:center;z-index:20}.swal2-progresssteps .swal2-progresscircle:first-child{margin-left:0}.swal2-progresssteps .swal2-progresscircle:last-child{margin-right:0}.swal2-progresssteps .swal2-progresscircle.swal2-activeprogressstep{background:#3085d6}.swal2-progresssteps .swal2-progresscircle.swal2-activeprogressstep~.swal2-progresscircle{background:#add8e6}.swal2-progresssteps .swal2-progresscircle.swal2-activeprogressstep~.swal2-progressline{background:#add8e6}.swal2-progresssteps .swal2-progressline{width:2.5em;height:.4em;margin:0 -1px;background:#3085d6;z-index:10}[class^=swal2]{-webkit-tap-highlight-color:transparent}.swal2-show{-webkit-animation:swal2-show .3s;animation:swal2-show .3s}.swal2-show.swal2-noanimation{-webkit-animation:none;animation:none}.swal2-hide{-webkit-animation:swal2-hide .15s forwards;animation:swal2-hide .15s forwards}.swal2-hide.swal2-noanimation{-webkit-animation:none;animation:none}.swal2-rtl .swal2-close{right:auto;left:0}.swal2-animate-success-icon .swal2-success-line-tip{-webkit-animation:swal2-animate-success-line-tip .75s;animation:swal2-animate-success-line-tip .75s}.swal2-animate-success-icon .swal2-success-line-long{-webkit-animation:swal2-animate-success-line-long .75s;animation:swal2-animate-success-line-long .75s}.swal2-animate-success-icon .swal2-success-circular-line-right{-webkit-animation:swal2-rotate-success-circular-line 4.25s ease-in;animation:swal2-rotate-success-circular-line 4.25s ease-in}.swal2-animate-error-icon{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-animate-error-icon .swal2-x-mark{-webkit-animation:swal2-animate-error-x-mark .5s;animation:swal2-animate-error-x-mark .5s}@-webkit-keyframes swal2-rotate-loading{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes swal2-rotate-loading{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll!important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:initial!important}}");
! function(t, a, e) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof exports ? module.exports = t(require("jquery")) : t(a || e)
}(function(t) {
    "use strict";
    var a = function(a, e, n) {
        var s = {
            invalid: [],
            getCaret: function() {
                try {
                    var t, e = 0,
                        n = a.get(0),
                        r = document.selection,
                        o = n.selectionStart;
                    return r && -1 === navigator.appVersion.indexOf("MSIE 10") ? ((t = r.createRange()).moveStart("character", -s.val().length), e = t.text.length) : (o || "0" === o) && (e = o), e
                } catch (t) {}
            },
            setCaret: function(t) {
                try {
                    if (a.is(":focus")) {
                        var e, n = a.get(0);
                        n.setSelectionRange ? n.setSelectionRange(t, t) : ((e = n.createTextRange()).collapse(!0), e.moveEnd("character", t), e.moveStart("character", t), e.select())
                    }
                } catch (t) {}
            },
            events: function() {
                a.on("keydown.mask", function(t) {
                    a.data("mask-keycode", t.keyCode || t.which), a.data("mask-previus-value", a.val()), a.data("mask-previus-caret-pos", s.getCaret()), s.maskDigitPosMapOld = s.maskDigitPosMap
                }).on(t.jMaskGlobals.useInput ? "input.mask" : "keyup.mask", s.behaviour).on("paste.mask drop.mask", function() {
                    setTimeout(function() {
                        a.keydown().keyup()
                    }, 100)
                }).on("change.mask", function() {
                    a.data("changed", !0)
                }).on("blur.mask", function() {
                    i === s.val() || a.data("changed") || a.trigger("change"), a.data("changed", !1)
                }).on("blur.mask", function() {
                    i = s.val()
                }).on("focus.mask", function(a) {
                    !0 === n.selectOnFocus && t(a.target).select()
                }).on("focusout.mask", function() {
                    n.clearIfNotMatch && !r.test(s.val()) && s.val("")
                })
            },
            getRegexMask: function() {
                for (var t, a, n, s, r, i, l = [], c = 0; c < e.length; c++)(t = o.translation[e.charAt(c)]) ? (a = t.pattern.toString().replace(/.{1}$|^.{1}/g, ""), n = t.optional, (s = t.recursive) ? (l.push(e.charAt(c)), r = {
                    digit: e.charAt(c),
                    pattern: a
                }) : l.push(n || s ? a + "?" : a)) : l.push(e.charAt(c).replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"));
                return i = l.join(""), r && (i = i.replace(new RegExp("(" + r.digit + "(.*" + r.digit + ")?)"), "($1)?").replace(new RegExp(r.digit, "g"), r.pattern)), new RegExp(i)
            },
            destroyEvents: function() {
                a.off(["input", "keydown", "keyup", "paste", "drop", "blur", "focusout", ""].join(".mask "))
            },
            val: function(t) {
                var e, n = a.is("input") ? "val" : "text";
                return arguments.length > 0 ? (a[n]() !== t && a[n](t), e = a) : e = a[n](), e
            },
            calculateCaretPosition: function() {
                var t = a.data("mask-previus-value") || "",
                    e = s.getMasked(),
                    n = s.getCaret();
                if (t !== e) {
                    var r = a.data("mask-previus-caret-pos") || 0,
                        o = e.length,
                        i = t.length,
                        l = 0,
                        c = 0,
                        u = 0,
                        k = 0,
                        f = 0;
                    for (f = n; f < o && s.maskDigitPosMap[f]; f++) c++;
                    for (f = n - 1; f >= 0 && s.maskDigitPosMap[f]; f--) l++;
                    for (f = n - 1; f >= 0; f--) s.maskDigitPosMap[f] && u++;
                    for (f = r - 1; f >= 0; f--) s.maskDigitPosMapOld[f] && k++;
                    if (n > i) n = 10 * o;
                    else if (r >= n && r !== i) {
                        if (!s.maskDigitPosMapOld[n]) {
                            var d = n;
                            n -= k - u, n -= l, s.maskDigitPosMap[n] && (n = d)
                        }
                    } else n > r && (n += u - k, n += c)
                }
                return n
            },
            behaviour: function(e) {
                e = e || window.event, s.invalid = [];
                var n = a.data("mask-keycode");
                if (-1 === t.inArray(n, o.byPassKeys)) {
                    var r = s.getMasked(),
                        i = s.getCaret();
                    return setTimeout(function() {
                        s.setCaret(s.calculateCaretPosition())
                    }, t.jMaskGlobals.keyStrokeCompensation), s.val(r), s.setCaret(i), s.callbacks(e)
                }
            },
            getMasked: function(t, a) {
                var r, i, l, c = [],
                    u = void 0 === a ? s.val() : a + "",
                    k = 0,
                    f = e.length,
                    d = 0,
                    p = u.length,
                    v = 1,
                    h = "push",
                    m = -1,
                    g = 0,
                    M = [];
                for (n.reverse ? (h = "unshift", v = -1, r = 0, k = f - 1, d = p - 1, i = function() {
                        return k > -1 && d > -1
                    }) : (r = f - 1, i = function() {
                        return k < f && d < p
                    }); i();) {
                    var y = e.charAt(k),
                        b = u.charAt(d),
                        w = o.translation[y];
                    w ? (b.match(w.pattern) ? (c[h](b), w.recursive && (-1 === m ? m = k : k === r && k !== m && (k = m - v), r === m && (k -= v)), k += v) : b === l ? (g--, l = void 0) : w.optional ? (k += v, d -= v) : w.fallback ? (c[h](w.fallback), k += v, d -= v) : s.invalid.push({
                        p: d,
                        v: b,
                        e: w.pattern
                    }), d += v) : (t || c[h](y), b === y ? (M.push(d), d += v) : (l = y, M.push(d + g), g++), k += v)
                }
                var C = e.charAt(r);
                f !== p + 1 || o.translation[C] || c.push(C);
                var j = c.join("");
                return s.mapMaskdigitPositions(j, M, p), j
            },
            mapMaskdigitPositions: function(t, a, e) {
                var r = n.reverse ? t.length - e : 0;
                s.maskDigitPosMap = {};
                for (var o = 0; o < a.length; o++) s.maskDigitPosMap[a[o] + r] = 1
            },
            callbacks: function(t) {
                var r = s.val(),
                    o = r !== i,
                    l = [r, t, a, n],
                    c = function(t, a, e) {
                        "function" == typeof n[t] && a && n[t].apply(this, e)
                    };
                c("onChange", !0 === o, l), c("onKeyPress", !0 === o, l), c("onComplete", r.length === e.length, l), c("onInvalid", s.invalid.length > 0, [r, t, a, s.invalid, n])
            }
        };
        a = t(a);
        var r, o = this,
            i = s.val();
        e = "function" == typeof e ? e(s.val(), void 0, a, n) : e, o.mask = e, o.options = n, o.remove = function() {
            var t = s.getCaret();
            return o.options.placeholder && a.removeAttr("placeholder"), a.data("mask-maxlength") && a.removeAttr("maxlength"), s.destroyEvents(), s.val(o.getCleanVal()), s.setCaret(t), a
        }, o.getCleanVal = function() {
            return s.getMasked(!0)
        }, o.getMaskedVal = function(t) {
            return s.getMasked(!1, t)
        }, o.init = function(i) {
            if (i = i || !1, n = n || {}, o.clearIfNotMatch = t.jMaskGlobals.clearIfNotMatch, o.byPassKeys = t.jMaskGlobals.byPassKeys, o.translation = t.extend({}, t.jMaskGlobals.translation, n.translation), o = t.extend(!0, {}, o, n), r = s.getRegexMask(), i) s.events(), s.val(s.getMasked());
            else {
                n.placeholder && a.attr("placeholder", n.placeholder), a.data("mask") && a.attr("autocomplete", "off");
                for (var l = 0, c = !0; l < e.length; l++) {
                    var u = o.translation[e.charAt(l)];
                    if (u && u.recursive) {
                        c = !1;
                        break
                    }
                }
                c && a.attr("maxlength", e.length).data("mask-maxlength", !0), s.destroyEvents(), s.events();
                var k = s.getCaret();
                s.val(s.getMasked()), s.setCaret(k)
            }
        }, o.init(!a.is("input"))
    };
    t.maskWatchers = {};
    var e = function() {
            var e = t(this),
                s = {},
                r = e.attr("data-mask");
            if (e.attr("data-mask-reverse") && (s.reverse = !0), e.attr("data-mask-clearifnotmatch") && (s.clearIfNotMatch = !0), "true" === e.attr("data-mask-selectonfocus") && (s.selectOnFocus = !0), n(e, r, s)) return e.data("mask", new a(this, r, s))
        },
        n = function(a, e, n) {
            n = n || {};
            var s = t(a).data("mask"),
                r = JSON.stringify,
                o = t(a).val() || t(a).text();
            try {
                return "function" == typeof e && (e = e(o)), "object" != typeof s || r(s.options) !== r(n) || s.mask !== e
            } catch (t) {}
        };
    t.fn.mask = function(e, s) {
        s = s || {};
        var r = this.selector,
            o = t.jMaskGlobals,
            i = o.watchInterval,
            l = s.watchInputs || o.watchInputs,
            c = function() {
                if (n(this, e, s)) return t(this).data("mask", new a(this, e, s))
            };
        return t(this).each(c), r && "" !== r && l && (clearInterval(t.maskWatchers[r]), t.maskWatchers[r] = setInterval(function() {
            t(document).find(r).each(c)
        }, i)), this
    }, t.fn.masked = function(t) {
        return this.data("mask").getMaskedVal(t)
    }, t.fn.unmask = function() {
        return clearInterval(t.maskWatchers[this.selector]), delete t.maskWatchers[this.selector], this.each(function() {
            var a = t(this).data("mask");
            a && a.remove().removeData("mask")
        })
    }, t.fn.cleanVal = function() {
        return this.data("mask").getCleanVal()
    }, t.applyDataMask = function(a) {
        ((a = a || t.jMaskGlobals.maskElements) instanceof t ? a : t(a)).filter(t.jMaskGlobals.dataMaskAttr).each(e)
    };
    var s, r, o, i = {
        maskElements: "input,td,span,div",
        dataMaskAttr: "*[data-mask]",
        dataMask: !0,
        watchInterval: 300,
        watchInputs: !0,
        keyStrokeCompensation: 10,
        useInput: !/Chrome\/[2-4][0-9]|SamsungBrowser/.test(window.navigator.userAgent) && (s = "input", o = document.createElement("div"), (r = (s = "on" + s) in o) || (o.setAttribute(s, "return;"), r = "function" == typeof o[s]), o = null, r),
        watchDataMask: !1,
        byPassKeys: [9, 16, 17, 18, 36, 37, 38, 39, 40, 91],
        translation: {
            0: {
                pattern: /\d/
            },
            9: {
                pattern: /\d/,
                optional: !0
            },
            "#": {
                pattern: /\d/,
                recursive: !0
            },
            A: {
                pattern: /[a-zA-Z0-9]/
            },
            S: {
                pattern: /[a-zA-Z]/
            }
        }
    };
    t.jMaskGlobals = t.jMaskGlobals || {}, (i = t.jMaskGlobals = t.extend(!0, {}, i, t.jMaskGlobals)).dataMask && t.applyDataMask(), setInterval(function() {
        t.jMaskGlobals.watchDataMask && t.applyDataMask()
    }, i.watchInterval)
}, window.jQuery, window.Zepto);
"use strict";
$(function() {
    $(document).ready(function() {
        $(".slider-container .owl-item").on("mouseenter", function() {
            $(window).width() > 958 && ($(this).nextAll().addClass("has-positive-translate"), $(this).prevAll().addClass("has-negative-translate"))
        }).on("mouseleave", function() {
            $(window).width() > 958 && $(".slider-container .owl-item").removeClass("has-negative-translate has-positive-translate")
        })
    })
}), jQuery.event.special.touchstart = {
    setup: function(e, t, i) {
        t.indexOf("noPreventDefault") ? this.addEventListener("touchstart", i, {
            passive: !1
        }) : this.addEventListener("touchstart", i, {
            passive: !0
        })
    }
}, $(function() {
    var e = $("#bs-mealbox-navbar-collapse-1 .container-fluid");
    $("nav .navbar-header");
    $(window).width() > 768 && $(window).scroll(function() {
        var t = $(window).scrollTop(),
            i = $(".j-menu").offset().top;
        e.toggleClass("sticky", t >= i)
    })
}), $(function() {
    $("#nav-icon1").click(function() {
        $(this).toggleClass("open"), $(".j-menu").toggleClass("active"), $(".dropdown-menu").removeClass("active"), $(".mobile-top-header").toggleClass("active-menu")
    })
}), $(function() {
    $(window).width() > 550 ? (setTimeout(function() {
        var e = $(".owl-carousel .owl-item .vegan-packet-item"),
            t = -1;
        e.each(function() {
            $(this).height() > t && (t = $(this).height())
        }), $(e[0]).height(t), $(e[2]).height(t), $(e[1]).height(t + 70)
    }, 2e3), setTimeout(function() {
        var e = $(".owl-carousel .owl-item .protein-packet-item"),
            t = -1;
        e.each(function() {
            $(this).height() > t && (t = $(this).height())
        }), $(e[0]).height(t), $(e[2]).height(t), $(e[1]).height(t + 70)
    }, 2e3)) : (setTimeout(function() {
        var e = $(".owl-carousel .owl-item .vegan-packet-item"),
            t = -1;
        e.each(function() {
            $(this).height() > t && (t = $(this).height())
        }), $(e).height(t)
    }, 2e3), setTimeout(function() {
        var e = $(".owl-carousel .owl-item .protein-packet-item"),
            t = -1;
        e.each(function() {
            $(this).height() > t && (t = $(this).height())
        }), $(e).height(t)
    }, 2e3))
}), $(function() {
    $("#step1-form-container").on("click", ".add", function(e) {
        e.preventDefault(), $(this).prev().val(+$(this).prev().val() + 1)
    }), $("#step1-form-container").on("click", ".sub", function(e) {
        e.preventDefault(), "0" == $("#item1-num").attr("min") && "0" == $(this).next().val() || $(this).next().val() >= 1 && $(this).next().val(+$(this).next().val() - 1)
    }), $(".add").click(function() {
        $(this).prev().val(+$(this).prev().val() + 1)
    }), $(".sub").click(function() {
        $("#item1-num").attr("min") == $("#item1-num").val() && $(this).next().val() == $("#item1-num").val() || $(this).next().val() > 1 && $(this).next().val(+$(this).next().val() - 1)
    }), $(".change-item-num input").bind("keyup", function() {
        $("#item1-num").attr("min") > $("#item1-num").val() && $("#item1-num").val($("#item1-num").attr("min"))
    })
}), $(function() {
    $(".btn-toggle").click(function() {
        $(this).hasClass("active") ? $(this).removeClass("active") : $(this).addClass("active")
    })
}), $(function() {
    $("body").tooltip({
        selector: "[data-toggle=tooltip]"
    }), $(".i_show_ccv").tooltip()
}), $(function() {
    $(".pop").popover({
        trigger: "manual",
        html: !0,
        animation: !1
    }).on("mouseenter", function() {
        var e = this;
        $(this).popover("show"), $(".popover").on("mouseleave", function() {
            $(e).popover("hide")
        })
    }).on("mouseleave", function() {
        var e = this;
        setTimeout(function() {
            $(".popover:hover").length || $(e).popover("hide")
        }, 100)
    })
}), $(function() {
    $("#lunch").change(function() {
        "1" === $("option:selected", this).val() || ("2" === $("option:selected", this).val() ? $("#redirecturl").val("/catering") : $("option:selected", this).val())
    });
    $("#personalcount").change(function() {
        "1" === $("option:selected", this).val() && "3" === $("#lunch:selected", this).val() ? $("#redirecturl").val("/iyi-yasam-aboneligi") : "2" === $("option:selected", this).val() || $("option:selected", this).val()
    });
    $("#lunchpaying").change(function() {
        "1" === $("option:selected", this).val() || "2" === $("option:selected", this).val() || $("option:selected", this).val()
    });
    $("#istherekitchen").change(function() {
        "1" === $("option:selected", this).val() || ("2" === $("option:selected", this).val() ? $("#redirecturl").val("/abonelik") : $("option:selected", this).val())
    });
    $("#kitchenappliances").change(function() {
        "1" === $("option:selected", this).val() || "2" === $("option:selected", this).val() || $("option:selected", this).val()
    }), $("#anketStep1Button").click(function() {
        $("#anket").validate({
            rules: {
                lunch: {
                    required: !0
                },
                personalcount: {
                    required: !0
                },
                lunchpaying: {
                    required: !0
                },
                istherekitchen: {
                    required: !0
                },
                kitchenappliances: {
                    required: !0
                }
            }
        }), $("#anket").valid() && ($("#anketStep1").hide(), $("#anketStep2").show())
    }), $("#anket").validate({
        rules: {
            name: {
                required: !0
            },
            email: {
                required: !0,
                email: !0
            },
            phone: {
                required: !0,
                minlength: 14
            },
            epostaControl: {
                required: !0
            },
            kbtp: {
                required: !0
            }
        },
        submitHandler: function() {
            $(function(e) {
                $.ajax({
                    type: "post",
                    url: "/xhr/anket",
                    data: $("#anket").serialize(),
                    success: function(e) {
                        if ("ok" == e) return window.location.pathname = window.location.pathname + "/tesekkurler", !1
                    },
                    error: function(e) {
                        Swal.fire({
                            type: "error",
                            title: "Bir Problem Oluştu",
                            text: "Lütfen Tekrar Deneyin"
                        })
                    }
                })
            })
        }
    }), $("#anyQuestion_cat").validate({
        rules: {
            name: {
                required: !0
            },
            email: {
                required: !0,
                email: !0
            },
            phone: {
                required: !0,
                minlength: 14
            },
            people: {
                required: !0
            },
            epostaControl: {
                required: !0
            },
            kbtp: {
                required: !0
            }
        },
        submitHandler: function() {
            $(function(e) {
                $.ajax({
                    type: "post",
                    url: "/xhr/anyquestion",
                    data: $("#anyQuestion_cat").serialize(),
                    success: function(e) {
                        if ("ok" == e) return window.location.pathname = window.location.pathname + "/tesekkurler", !1
                    },
                    error: function(e) {
                        Swal.fire({
                            type: "error",
                            title: "Bir Problem Oluştu",
                            text: "Lütfen Tekrar Deneyin"
                        })
                    }
                })
            })
        }
    }), $("#anyQuestion").validate({
        rules: {
            name: {
                required: !0
            },
            email: {
                required: !0,
                email: !0
            },
            phone: {
                required: !0,
                minlength: 14
            },
            people: {
                required: !0
            },
            epostaControl: {
                required: !0
            },
            kbtp: {
                required: !0
            }
        },
        submitHandler: function() {
            $(function(e) {
                $.ajax({
                    type: "post",
                    url: "/xhr/anyquestion",
                    data: $("#anyQuestion").serialize(),
                    success: function(e) {
                        if ("ok" == e) return window.location.pathname = window.location.pathname + "/tesekkurler", !1
                    },
                    error: function(e) {
                        Swal.fire({
                            type: "error",
                            title: "Bir Problem Oluştu",
                            text: "Lütfen Tekrar Deneyin"
                        })
                    }
                })
            })
        }
    }), $("#anyQuestion2").validate({
        rules: {
            name: {
                required: !0
            },
            email: {
                required: !0,
                email: !0
            },
            phone: {
                required: !0,
                minlength: 14
            },
            epostaControl: {
                required: !0
            },
            kbtp: {
                required: !0
            }
        },
        submitHandler: function() {
            $(function(e) {
                $.ajax({
                    type: "post",
                    url: "/xhr/anyquestion",
                    data: $("#anyQuestion2").serialize(),
                    success: function(e) {
                        if ("ok" == e) return window.location.pathname = window.location.pathname + "/tesekkurler", !1
                    },
                    error: function(e) {
                        Swal.fire({
                            type: "error",
                            title: "Bir Problem Oluştu",
                            text: "Lütfen Tekrar Deneyin"
                        })
                    }
                })
            })
        }
    }), $("#anyQuestion3").validate({
        rules: {
            name: {
                required: !0
            },
            email: {
                required: !0,
                email: !0
            },
            phone: {
                required: !0,
                minlength: 14
            },
            epostaControl: {
                required: !0
            },
            kbtp: {
                required: !0
            }
        },
        submitHandler: function(e) {
            $.ajax({
                type: "post",
                url: "/xhr/anyquestion",
                data: $("#anyQuestion3").serialize(),
                success: function(e) {
                    if ("ok" == e) return window.location.pathname = window.location.pathname + "/tesekkurler", !1
                },
                error: function(e) {
                    Swal.fire({
                        type: "error",
                        title: "Bir Problem Oluştu",
                        text: "Lütfen Tekrar Deneyin"
                    })
                }
            })
        }
    }), $("#dietitianForm").validate({
        rules: {
            name: {
                required: !0
            },
            phone: {
                required: !0,
                minlength: 14
            },
            email: {
                required: !0,
                email: !0
            },
            kbtp: {
                required: !0
            }
        },
        submitHandler: function() {
            $(function(e) {
                $.ajax({
                    type: "POST",
                    url: "/xhr/dietitian",
                    data: $("#dietitianForm").serialize(),
                    success: function(e) {
                        if ("ok" == e) return window.location.pathname = window.location.pathname + "/tesekkurler", !1
                    },
                    error: function(e) {
                        Swal.fire({
                            type: "error",
                            title: "Bir Problem Oluştu",
                            text: "Lütfen Tekrar Deneyin"
                        })
                    }
                })
            })
        }
    }), $("#announcementForm").validate({
        rules: {
            email: {
                required: !0,
                email: !0
            },
            kbtp: {
                required: !0
            }
        },
        submitHandler: function() {
            $(function(e) {
                $.ajax({
                    type: "post",
                    url: "/xhr/announcement",
                    data: $("#announcementForm").serialize(),
                    success: function(e) {
                        "ok" == e && (Swal.fire({
                            position: "center-center",
                            type: "success",
                            title: "Başarı İle Gönderildi",
                            showConfirmButton: !1,
                            timer: 2500
                        }), document.getElementById("announcementForm").reset()), window.dataLayer = window.dataLayer || [], dataLayer.push({
                            event: "formSubmission",
                            formType: "Karnınızı Doyuracak Haberler"
                        })
                    },
                    error: function(e) {
                        Swal.fire({
                            type: "error",
                            title: "Bir Problem Oluştu",
                            text: "Lütfen Tekrar Deneyin"
                        })
                    }
                })
            })
        }
    }), $("#partnerlik").validate({
        rules: {
            isim: {
                required: !0
            },
            phone: {
                required: !0,
                minlength: 14
            },
            email: {
                required: !0,
                email: !0
            },
            kurye: {
                required: !0
            },
            saat: {
                required: !0
            },
            tip: {
                required: !0
            },
            semt: {
                required: !0
            },
            yetkili: {
                required: !0
            },
            kbtp: {
                required: !0
            }
        },
        submitHandler: function() {
            $(function(e) {
                $.ajax({
                    type: "post",
                    url: "/xhr/partnerlik",
                    data: $("#partnerlik").serialize(),
                    success: function(e) {
                        "ok" == e && (Swal.fire({
                            position: "center-center",
                            type: "success",
                            title: "Başarı İle Gönderildi",
                            showConfirmButton: !1,
                            timer: 2500
                        }), document.getElementById("announcementForm").reset())
                    },
                    error: function(e) {
                        Swal.fire({
                            type: "error",
                            title: "Bir Problem Oluştu",
                            text: "Lütfen Tekrar Deneyin"
                        })
                    }
                })
            })
        }
    }), $("#personalTrainer").validate({
        rules: {
            name: {
                required: !0
            },
            phone: {
                required: !0,
                minlength: 14
            },
            email: {
                required: !0,
                email: !0
            },
            address: {
                required: !0
            },
            heardFrom: {
                required: !0
            },
            people: {
                required: !0
            },
            note: {
                required: !0
            }
        },
        submitHandler: function() {
            $(function(e) {
                $.ajax({
                    type: "post",
                    url: "/xhr/personaltrainer",
                    data: $("#personalTrainer").serialize(),
                    success: function(e) {
                        if ("ok" == e) return window.location.pathname = window.location.pathname + "/tesekkurler", !1
                    },
                    error: function(e) {
                        Swal.fire({
                            type: "error",
                            title: "Bir Problem Oluştu",
                            text: "Lütfen Tekrar Deneyin"
                        })
                    }
                })
            })
        }
    })
}), $(function() {
    var e = $(location).attr("href"),
        t = e.slice(e.length - 4, e.length);
    "tab2" === t ? ($("#pills-why-mealbox").removeClass("active show"), $("#pills-why-mealbox-tab").removeClass("show active"), $("#pills-enterprise-tab").addClass("active show"), $("#pills-enterprise").addClass("active show")) : "tab3" === t && ($("#pills-why-mealbox").removeClass("active show"), $("#pills-why-mealbox-tab").removeClass("show active"), $("#pills-interpress-tab").addClass("active show"), $("#pills-interpress").addClass("active show"))
}), $(function() {
    var e = $(location).attr("href"),
        t = e.slice(e.length - 15, e.length),
        i = $(".mobile-navbar").height();
    if ($(".view-menu,.buy-item,.btn-ask-dietitian").on("click", function() {
            setTimeout(function() {
                window.location.href.indexOf("#") > -1 && $(window).width() > 958 ? $("html, body").scrollTop($(window).scrollTop() + -2.3 * i) : $("html, body").scrollTop($(window).scrollTop() + -1.5 * i)
            }, 200)
        }), "?goesToPackets" == t) {
        i = $(".mobile-navbar").height();
        window.location.hash = "#mealbox-category-meals", $("html, body").scrollTop($(window).scrollTop() + -1.5 * i)
    }
}), $(function() {
    $(window).width() < 768 && ($("#special-modal-container .modal-dialog").hasClass("modal-dialog-centered") && $("#special-modal-container .modal-dialog").removeClass("modal-dialog-centered"), $("#calendarPopUp1 .modal-dialog").hasClass("modal-dialog-centered") && $("#calendarPopUp1 .modal-dialog").removeClass("modal-dialog-centered"))
}), $(function() {
    $(".pnq-close").on("click", function() {
        $(".modal").removeClass("show d-block"), $(".modal").css("display", "none"), $(".modal-backdrop").removeClass()
    })
}), $(function() {
    $("input[name='phone']").bind("keyup", function() {
        "0" == $(this).val().substring(1, 2) && $(this).val("")
    })
}), $(function() {
    $("input[name='customerphone']").bind("keyup", function() {
        "0" == $(this).val().substring(1, 2) && $(this).val("")
    })
}), $(function() {
    $("input[name='phone']").mask("(000) 000 0000"), $("input[name='customerphone']").mask("(000) 000 0000"), $("input[name='card_number']").mask("9999999999999999"), $("input[name='cart_number']").mask("0000 0000 0000 0000"), $("input[name='age']").mask("00"), $("input[name='weight']").mask("000"), $("input[name='size']").mask("000"), $("input[name='hip']").mask("000"), $("input[name='waist']").mask("000"), $("input[name='cart_cvc']").mask("000")
}), $(function() {
    $(".edit_input").click(function() {
        $(this).parent().children(":first-child").removeAttr("disabled")
    })
}), $(document).ready(function() {
    $.fn.datepicker.defaults.format = "dd-mm-yyyy", $(".datepicker").datepicker(), $(".input-daterange input").each(function() {
        $(this).datepicker("clearDates")
    })
}), $(document).ready(function() {
    $("#date-month").datepicker({
        format: "yyyy-mm",
        viewMode: "months",
        minViewMode: "months"
    })
}), $(function() {
    var e, t = $(".planCalendar");
    $(".planCalendar").hasClass("not_hot_meal") ? t.length > 0 && (e = (new Date).getHours() < "17" ? "+2d" : "+3d", t.datepicker({
        format: "dd-mm-yyyy",
        autoclose: !0,
        startDate: e,
        daysOfWeekDisabled: "0",
        weekStart: 1
    })) : t.length > 0 && (e = (new Date).getHours() < "16" ? "+2d" : "+3d", t.datepicker({
        format: "dd-mm-yyyy",
        autoclose: !0,
        startDate: e,
        daysOfWeekDisabled: "6,0",
        weekStart: 1
    }))
}), $(document).ready(function() {
    $(".main_btn_container").css("display", "none"), $(document).on("mouseenter", ".btn_on_hover", function() {
        $(".main_btn_container").css("display", "block"), $(".main_phone_item").css("display", "flex"), $(".main_whatsapp_item").css("display", "flex"), $(".reach_now_text").hide(), $(this).css("background-color", "#eaeaea")
    }).on("mouseleave", ".btn_on_hover", function() {
        $(".main_phone_item").hide(), $(".main_whatsapp_item").hide(), $(".reach_now_text").show(), $(".main_btn_container").css("display", "none"), $(this).css("background-color", "#89a548")
    })
}), $(".delete-address").click(function() {
    Swal.fire({
        position: "center-center",
        type: "success",
        title: "Adresiniz Başarı İle Silindi.",
        showConfirmButton: !1,
        timer: 2500
    })
}), $(".delete-destek").click(function() {
    Swal.fire({
        position: "center-center",
        type: "success",
        title: "Mesajınız Başarı İle Silindi.",
        showConfirmButton: !1,
        timer: 2500
    })
}), $("#anyQuestion2").validate({
    rules: {
        name: {
            required: !0
        },
        email: {
            required: !0,
            email: !0
        },
        phone: {
            required: !0,
            minlength: 14
        },
        epostaControl: {
            required: !0
        },
        kbtp: {
            required: !0
        }
    },
    submitHandler: function() {
        $(function(e) {
            $.ajax({
                type: "post",
                url: "/xhr/anyquestion",
                data: $("#anyQuestion2").serialize(),
                success: function(e) {
                    if ("ok" == e) return window.location.pathname = window.location.pathname + "/tesekkurler", !1
                },
                error: function(e) {
                    Swal.fire({
                        type: "error",
                        title: "Bir Problem Oluştu",
                        text: "Lütfen Tekrar Deneyin"
                    })
                }
            })
        })
    }
}), $(function() {
    setTimeout(function() {
        var e = $("#mealbox-references .references-header"),
            t = -1;
        e.each(function() {
            $(this).height() > t && (t = $(this).height())
        }), $(e).height(t)
    }, 2e3)
}), $(function() {
    $(".pqb1").click(function(e) {}), $('FORM[NAME="step1Form"]').validate({
        rules: {
            age: {
                required: !0
            },
            weight: {
                required: !0
            },
            size: {
                required: !0
            }
        },
        submitHandler: function(e) {
            $(".p_q_m_b1").trigger("click")
        }
    }), $('FORM[NAME="step1Form"]').submit(function(e) {
        e.preventDefault()
    }), $(".pqb2").click(function(e) {}), $('FORM[NAME="step2Form"]').validate({
        rules: {
            option: {
                required: !0
            },
            target: {
                required: !0
            }
        },
        submitHandler: function(e) {
            $(".p_q_m_b2").trigger("click")
        }
    }), $('FORM[NAME="step2Form"]').submit(function(e) {
        e.preventDefault()
    }), $(".pqb3").click(function(e) {}), $('FORM[NAME="step3Form"]').validate({
        rules: {
            achieve: {
                required: !0
            }
        },
        submitHandler: function(e) {
            $(".p_q_m_b3").trigger("click")
        }
    }), $('FORM[NAME="step3Form"]').submit(function(e) {
        e.preventDefault()
    }), $(".pqb4").click(function(e) {}), $('FORM[NAME="step3Form"]').submit(function(e) {
        e.preventDefault()
    }), $('FORM[NAME="step4Form"]').validate({
        rules: {
            name: {
                required: !0
            },
            phone: {
                required: !0,
                minlength: 14
            },
            email: {
                required: !0,
                email: !0
            },
            mkvkk: {
                required: !0
            }
        },
        submitHandler: function(e) {
            var t = $("formGlobal").attr("action");
            $("formGlobal").find("form").contents().unwrap().wrap("<formTemp />"), $("formGlobal").unwrap().wrap('<form action="' + t + '" method="post" name="formGlobal"/>'), window.dataLayer = window.dataLayer || [], dataLayer.push({
                event: "formSubmission",
                formType: "Kişiye Özel Sorular"
            }), $('FORM[NAME="formGlobal"]').submit()
        }
    })
}), $(function() {
    $(".pqb1_p").click(function(e) {}), $('FORM[NAME="step1Form_p"]').validate({
        rules: {
            age: {
                required: !0
            },
            weight: {
                required: !0
            },
            size: {
                required: !0
            },
            egsersiz: {
                required: !0
            }
        },
        submitHandler: function(e) {
            $(".p_q_m_b1_p").trigger("click")
        }
    }), $('FORM[NAME="step1Form_p"]').submit(function(e) {
        e.preventDefault()
    }), $(".pqb2_p").click(function(e) {}), $('FORM[NAME="step2Form_p"]').validate({
        rules: {
            target: {
                required: !0
            },
            water: {
                required: !0
            }
        },
        submitHandler: function(e) {
            $(".p_q_m_b2_p").trigger("click")
        }
    }), $('FORM[NAME="step2Form_p"]').submit(function(e) {
        e.preventDefault()
    }), $(".pqb3_p").click(function(e) {}), $('FORM[NAME="step3Form_p"]').validate({
        rules: {
            achieve: {
                required: !0
            }
        },
        submitHandler: function(e) {
            $(".p_q_m_b3_p").trigger("click")
        }
    }), $('FORM[NAME="step3Form_p"]').submit(function(e) {
        e.preventDefault()
    }), $('FORM[NAME="step4Form_p"]').validate({
        rules: {
            name: {
                required: !0
            },
            phone: {
                required: !0,
                minlength: 14
            },
            email: {
                required: !0,
                email: !0
            },
            mkvkk: {
                required: !0
            }
        },
        submitHandler: function(e) {
            var t = $("formGlobal").attr("action");
            $("formGlobal").find("form").contents().unwrap().wrap("<formTemp />"), $("formGlobal").unwrap().wrap('<form action="' + t + '" method="post" name="formGlobal"/>'), window.dataLayer = window.dataLayer || [], dataLayer.push({
                event: "formSubmission",
                formType: "Kişiye Özel Sorular"
            }), $('FORM[NAME="formGlobal"]').submit()
        }
    }), $('FORM[NAME="step3Form"]').submit(function(e) {
        e.preventDefault()
    })
}), $(function() {
    if ($("#BackToTop a").length) {
        var e = function() {
            $(window).scrollTop() > 100 ? $("#BackToTop a").addClass("show") : $("#BackToTop a").removeClass("show")
        };
        e(), $(window).on("scroll", function() {
            e()
        }), $("#BackToTop a").on("click", function(e) {
            e.preventDefault(), $("html,body").animate({
                scrollTop: 0
            }, 700)
        })
    }
}), $(function() {
    $(".navbar_item").on("mouseenter", function() {
        $(".shadow-fluid").show()
    }).on("mouseleave", function() {
        $(".shadow-fluid").hide()
    })
}), $(function() {
    $("#tableYazdir").click(function() {
        $("body iframe").css("display", "none"), window.print()
    })
}), $(function() {
    $(window).innerWidth() > 1100 && ($(".my-account-menu-abone li").on("mouseenter", function() {
        $(this).find("span").addClass("tooptip-profile-menu-2"), $(this).find("span").show()
    }).on("mouseleave", function() {
        $(this).find("span").removeClass("tooptip-profile-menu-2"), $(this).find("span").css("display", "none")
    }), $(".my-account-menu-abone li").on("touchstart", function() {
        $(this).find("span").addClass("tooptip-profile-menu-2"), $(this).find("span").show()
    }).on("touchend", function() {
        $(this).find("span").removeClass("tooptip-profile-menu-2"), $(this).find("span").css("display", "none")
    }))
});
$(function() {
    var a = $("#main-slider .owl-carousel");
    a.children().each(function(a) {
        $(this).attr("data-position", a)
    }), a.owlCarousel({
        items: 1,
        nav: !0,
        dots: !0,
        lazyLoad: !0,
        autoplay: !0,
        autoplayHoverPause: !0,
        loop: !0,
        autoplay: !0,
        autoplayTimeout: 4e3,
        autoWith: !0,
        navText: ["", ""],
        responsiveClass: !0,
        responsive: {
            0: {
                items: 1,
                nav: !1,
                autoplayTimeout: 8e3,
                autoplay: !0,
                scrollPerPage: !0
            },
            1000: {
                items: 1,
                nav: !0,
                autoplay: !0
            }
        }
    });
    var t = $(".group_subscription .owl-carousel");
    t.children().each(function(a) {
        $(this).attr("data-position", a)
    }), t.owlCarousel({
        items: 5,
        nav: !0,
        dots: !1,
        autoWith: !1,
        onInitialized: function(a) {
            parseInt(a.item.count) <= 2 ? (this.options.loop = !1, this.options.center = !0, this.options.autoplay = !1) : this.options.loop = !0
        },
        autoplayHoverPause: !0,
        margin: 10,
        navText: ["", ""],
        responsiveClass: !0,
        responsive: {
            0: {
                items: 1,
                nav: !1,
                autoplay: !0,
                stagePadding: 30
            },
            500: {
                items: 2,
                nav: !0,
                autoplay: !0
            },
            700: {
                items: 3,
                nav: !0,
                autoplay: !0
            },
            901: {
                items: 3,
                nav: !0,
                autoplay: !0
            },
            959: {
                items: 4,
                nav: !0
            },
            1200: {
                items: 5,
                nav: !0
            },
            1650: {
                items: 5,
                nav: !0,
                autoplay: !0
            }
        }
    }), t.trigger("refresh.owl.carousel");
    var e = $("#onetime-order-slider .owl-carousel");
    e.children().each(function(a) {
        $(this).attr("data-position", a)
    }), e.owlCarousel({
        items: 5,
        nav: !0,
        dots: !1,
        autoWith: !1,
        autoplayHoverPause: !0,
        margin: 10,
        onInitialized: function(a) {
            parseInt(a.item.count) <= 2 ? (this.options.loop = !1, this.options.center = !0, this.options.autoplay = !1) : this.options.loop = !0
        },
        navText: ["", ""],
        responsiveClass: !0,
        responsive: {
            0: {
                items: 1,
                nav: !1,
                autoplay: !0,
                stagePadding: 30
            },
            500: {
                items: 2,
                nav: !0,
                autoplay: !0
            },
            700: {
                items: 3,
                nav: !0,
                autoplay: !0
            },
            901: {
                items: 3,
                nav: !0,
                autoplay: !0
            },
            959: {
                items: 4,
                nav: !0
            },
            1200: {
                items: 5,
                nav: !0
            },
            1650: {
                items: 5,
                nav: !0,
                autoplay: !0
            }
        }
    }), e.trigger("refresh.owl.carousel");
    var s = $("#personal-subscription .owl-carousel");
    s.children().each(function(a) {
        $(this).attr("data-position", a)
    }), s.owlCarousel({
        items: 5,
        nav: !0,
        dots: !1,
        autoWith: !1,
        autoplayHoverPause: !0,
        margin: 10,
        onInitialized: function(a) {
            parseInt(a.item.count) <= 2 ? (this.options.loop = !1, this.options.center = !0, this.options.autoplay = !1) : this.options.loop = !0
        },
        navText: ["", ""],
        responsiveClass: !0,
        responsive: {
            0: {
                items: 1,
                nav: !1,
                autoplay: !0,
                stagePadding: 30
            },
            500: {
                items: 2,
                nav: !0,
                autoplay: !0
            },
            700: {
                items: 3,
                nav: !0,
                autoplay: !0
            },
            901: {
                items: 3,
                nav: !0,
                autoplay: !0
            },
            959: {
                items: 4,
                nav: !0
            },
            1200: {
                items: 5,
                nav: !0
            },
            1650: {
                items: 5,
                nav: !0,
                autoplay: !0
            }
        }
    }), s.trigger("refresh.owl.carousel");
    var o = $("#vegan-main .owl-carousel");
    o.children().each(function(a) {
        $(this).attr("data-position", a)
    }), o.owlCarousel({
        items: 1,
        nav: !0,
        dots: !0,
        loop: !0,
        autoplay: !0,
        navText: ["", "<img src='/assets/mealbox/img/sliderright-arrow.png'>"],
        responsiveClass: !0
    });
    var i = $("#protein-main .owl-carousel");
    i.children().each(function(a) {
        $(this).attr("data-position", a)
    }), i.owlCarousel({
        items: 1,
        nav: !0,
        dots: !0,
        loop: !0,
        navText: ["", "<img src='/assets/mealbox/img/sliderright-arrow.png'>"],
        responsiveClass: !0
    }), (n = $("#vegan-packets-slider .owl-carousel")).children().each(function(a) {
        $(this).attr("data-position", a)
    }), n.owlCarousel({
        items: 3,
        nav: !1,
        dots: !1,
        loop: !1,
        navText: ["<img src='/assets/mealbox/img/category-arrow-left.png'>", "<img src='/assets/mealbox/img/category-arrow-right.png'>"],
        responsiveClass: !0,
        responsive: {
            0: {
                items: 1,
                nav: !1,
                stagePadding: 40,
                rewind: !0,
                startPosition: 1
            },
            500: {
                items: 2
            },
            960: {
                items: 2
            },
            1100: {
                items: 2
            },
            1101: {
                items: 3,
                loop: !1
            },
            1700: {
                items: 3,
                loop: !1
            }
        }
    });
    var n, r = $("#protein-packets-slider .owl-carousel");
    r.children().each(function(a) {
        $(this).attr("data-position", a)
    }), r.owlCarousel({
        items: 3,
        nav: !1,
        dots: !1,
        loop: !1,
        navText: ["<img src='/assets/mealbox/img/category-arrow-left.png'>", "<img src='/assets/mealbox/img/category-arrow-right.png'>"],
        responsiveClass: !0,
        responsive: {
            0: {
                items: 1,
                nav: !1,
                startPosition: 1,
                stagePadding: 40
            },
            500: {
                items: 2
            },
            960: {
                items: 2
            },
            965: {
                items: 3
            },
            1700: {
                items: 3
            }
        }
    }), (n = $("#mealbox-category-meals .owl-carousel")).owlCarousel({
        nav: !1,
        dots: !1,
        loop: !1,
        responsiveClass: !0,
        navText: ["<img src='/assets/mealbox/img/category-arrow-left.png'>", "<img src='/assets/mealbox/img/category-arrow-right.png'>"],
        responsive: {
            0: {
                items: 1,
                startPosition: 1,
                nav: !1,
                stagePadding: 40
            },
            500: {
                items: 2
            },
            960: {
                items: 2
            },
            965: {
                items: 3
            },
            1700: {
                items: 3
            }
        }
    }), $("#category-sample-menu .owl-carousel").owlCarousel({
        items: 6,
        nav: !0,
        loop: !0,
        dots: !1,
        navText: ["<img src='/assets/mealbox/img/category-arrow-left.png'>", "<img src='/assets/mealbox/img/category-arrow-right.png'>"],
        responsive: {
            0: {
                items: 3,
                stagePadding: 15
            },
            500: {
                items: 3
            },
            500: {
                items: 4
            },
            700: {
                items: 6
            },
            1600: {
                items: 6
            }
        }
    }), setTimeout(function() {
        var a = $("#category-sample-menu .owl-carousel .owl-item .sample-menu-footer"),
            t = -1;
        a.each(function() {
            $(this).height() > t && (t = $(this).height())
        }), $(a).height(t)
    }, 2e3), $("#daily-tastes .owl-carousel").owlCarousel({
        items: 2,
        nav: !0,
        loop: !0,
        margin: 20,
        navText: ["<img src='/assets/mealbox/img/daily-tastes-sleft.png'>", "<img src='/assets/mealbox/img/daily-tastes-sright.png'>"]
    });
    var l = new Date,
        m = ("0" + (l.getMonth() + 1)).slice(-2),
        p = ("0" + l.getDate()).slice(-2),
        g = l.getFullYear() + "-" + m + "-" + p;
    ix = $("#weekCalendar").find('[data-date="' + g + '"]').index(), ix < 0 && (ix = 0);
    var c = $(".calendar-slider-container .owl-carousel");
    c.owlCarousel({
        items: 4,
        nav: !0,
        autoWidth: !0,
        loop: !0,
        center: !0,
        margin: 0,
        startPosition: ix,
        navText: ["<i class='fa fa-angle-left owl-icon-padding' aria-hidden='true'></i>", "<i class='fa fa-angle-right owl-icon-padding' aria-hidden='true'></i>"],
        responsive: {
            0: {
                items: 3
            },
            700: {
                items: 3
            },
            1000: {
                items: 4
            },
            1200: {
                items: 4
            }
        }
    }), c.children().each(function(a) {
        $(this).attr("data-position", a)
    }), $(document).on("click", ".owl-item>div", function() {
        c.trigger("to.owl.carousel", $(this).data("position"))
    }), $(".owl_corporate .owl-carousel").owlCarousel({
        nav: !0,
        loop: !0,
        navText: ["<img src='/assets/mealbox/img/category-arrow-left.png'>", "<img src='/assets/mealbox/img/category-arrow-right.png'>"],
        responsive: {
            0: {
                items: 1,
                loop: !0,
                nav: !1,
                stagePadding: 40,
                startPosition: 1
            },
            500: {
                items: 2
            },
            960: {
                items: 2
            },
            965: {
                items: 3
            },
            1700: {
                items: 3
            }
        }
    }), $("#vegan-menu-container .owl-carousel").owlCarousel({
        items: 3,
        nav: !0,
        loop: !0,
        margin: 15,
        navText: ["<img src='/assets/mealbox/img/category-arrow-left.png'>", "<img src='/assets/mealbox/img/category-arrow-right.png'>"],
        responsive: {
            0: {
                items: 1,
                loop: !0,
                nav: !1,
                stagePadding: 40
            },
            500: {
                items: 2
            },
            960: {
                items: 2
            },
            965: {
                items: 3
            },
            1700: {
                items: 3
            }
        }
    }), setTimeout(function() {
        var a = $("#vegan-menu-container .owl-carousel .owl-item .vegan-menu-rounded"),
            t = -1;
        a.each(function() {
            $(this).height() > t && (t = $(this).height())
        }), $(a).height(t)
    }, 2e3)
});
var $partnership = $("#partnership-slider .owl-carousel");
$partnership.children().each(function(a) {
    $(this).attr("data-position", a)
}), $partnership.owlCarousel({
    items: 1,
    nav: !0,
    dots: !0,
    autoplay: !0,
    autoplayHoverPause: !0,
    loop: !0,
    autoplay: !0,
    autoplayTimeout: 4e3,
    autoWith: !0,
    navText: ["<img src='/assets/mealbox/img/calendar-month-left.png'>", "<img src='/assets/mealbox/img/calendar-month-right.png'>"],
    responsiveClass: !0,
    responsive: {
        0: {
            items: 1,
            nav: !0,
            autoplay: !0,
            scrollPerPage: !0
        },
        1000: {
            items: 1,
            nav: !0,
            autoplay: !0
        }
    }
});
var Cart = new(Cart = function() {
    this.add = function(s, e, t, a) {
        var r = [];
        return console.log(a), $.ajax({
            async: !1,
            method: "POST",
            url: GC.url.cart_add,
            data: {
                product_id: s,
                quantity: e,
                options: t,
                period: a
            },
            success: function(s) {
                1 == s.status ? (r.status = 1, r.message = s.message) : (r.status = 0, r.message = s.message);
				
				if(s.status == 1)
					$('span.cart-count').html(s.count);
            },
            error: function(s, e, t) {
                var a = $.parseJSON(s.responseText),
                    u = Object.keys(a.errors).map(function(s) {
                        return a.errors[s]
                    });
                r.status = 0, r.message = u[0][0]
            }
        }), r
    }, this.remove = function(s) {
        var e = [];
        return $.ajax({
            async: !1,
            method: "POST",
            url: GC.url.cart_remove,
            data: {
                product_id: s
            },
            success: function(s) {
                1 == s.status ? (e.status = 1, e.message = s.message) : (e.status = 0, e.message = s.message)
            },
            error: function() {
                e.status = 0, e.message = "Ürün Sepetten Kaldırılamadı"
            }
        }), e
    }, this.updateMultiple = function(s) {
        var e = [];
        return $.ajax({
            async: !1,
            method: "POST",
            url: GC.url.cart_update_multiple,
            data: s,
            success: function(s) {
                e.status = 1, e.message = "", e.results = s
            },
            error: function() {
                e.status = 0, e.results = [], e.message = "Ürünler Yenilenemedi!"
            }
        }), e
    }
});

function basketAdd(a, i, n) {
    if (console.log(n), a < 1) Swal.fire("Uyarı", "Ürün Buluanamdı", "question");
    else if (i < 1) Swal.fire("Uyarı", "Lütfen kişi sayısını giriniz.", "question");
    else {
        var t = Cart.add(a, i, [], n); 
        1 == t.status ? $("#open_basket_success").trigger("click") : Swal.fire("Uyarı", t.message, "question");
    }
	
	
}
$(".product-container").find(".btn-basket-add").click(function(a) {
    var i = $(this),
        n = i.parents(".product-container");
    basketAdd(i.data("product_id"), n.find('INPUT[NAME="quantity"]').val() ? n.find('INPUT[NAME="quantity"]').val() : 1, n.find('INPUT[NAME="syaperiod"]').val() ? n.find('INPUT[NAME="syaperiod"]').val() : null)
});
! function(t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof exports ? t(require("jquery")) : t(jQuery)
}(function(t, e) {
    function i() {
        return new Date(Date.UTC.apply(Date, arguments))
    }

    function a() {
        var t = new Date;
        return i(t.getFullYear(), t.getMonth(), t.getDate())
    }

    function s(t) {
        return function() {
            return this[t].apply(this, arguments)
        }
    }
    var n, o = (n = {
            get: function(t) {
                return this.slice(t)[0]
            },
            contains: function(t) {
                for (var e = t && t.valueOf(), i = 0, a = this.length; i < a; i++)
                    if (this[i].valueOf() === e) return i;
                return -1
            },
            remove: function(t) {
                this.splice(t, 1)
            },
            replace: function(e) {
                e && (t.isArray(e) || (e = [e]), this.clear(), this.push.apply(this, e))
            },
            clear: function() {
                this.length = 0
            },
            copy: function() {
                var t = new o;
                return t.replace(this), t
            }
        }, function() {
            var e = [];
            return e.push.apply(e, arguments), t.extend(e, n), e
        }),
        r = function(e, i) {
            t(e).data("datepicker", this), this._process_options(i), this.dates = new o, this.viewDate = this.o.defaultViewDate, this.focusDate = null, this.element = t(e), this.isInput = this.element.is("input"), this.inputField = this.isInput ? this.element : this.element.find("input"), this.component = !!this.element.hasClass("date") && this.element.find(".add-on, .input-group-addon, .btn"), this.hasInput = this.component && this.inputField.length, this.component && 0 === this.component.length && (this.component = !1), this.isInline = !this.component && this.element.is("div"), this.picker = t(f.template), this._check_template(this.o.templates.leftArrow) && this.picker.find(".prev").html(this.o.templates.leftArrow), this._check_template(this.o.templates.rightArrow) && this.picker.find(".next").html(this.o.templates.rightArrow), this._buildEvents(), this._attachEvents(), this.isInline ? this.picker.addClass("datepicker-inline").appendTo(this.element) : this.picker.addClass("datepicker-dropdown dropdown-menu"), this.o.rtl && this.picker.addClass("datepicker-rtl"), this.viewMode = this.o.startView, this.o.calendarWeeks && this.picker.find("thead .datepicker-title, tfoot .today, tfoot .clear").attr("colspan", function(t, e) {
                return parseInt(e) + 1
            }), this._allow_update = !1, this.setStartDate(this._o.startDate), this.setEndDate(this._o.endDate), this.setDaysOfWeekDisabled(this.o.daysOfWeekDisabled), this.setDaysOfWeekHighlighted(this.o.daysOfWeekHighlighted), this.setDatesDisabled(this.o.datesDisabled), this.fillDow(), this.fillMonths(), this._allow_update = !0, this.update(), this.showMode(), this.isInline && this.show()
        };
    r.prototype = {
        constructor: r,
        _resolveViewName: function(t, i) {
            return 0 === t || "days" === t || "month" === t ? 0 : 1 === t || "months" === t || "year" === t ? 1 : 2 === t || "years" === t || "decade" === t ? 2 : 3 === t || "decades" === t || "century" === t ? 3 : 4 === t || "centuries" === t || "millennium" === t ? 4 : i !== e && i
        },
        _check_template: function(i) {
            try {
                return i !== e && "" !== i && ((i.match(/[<>]/g) || []).length <= 0 || t(i).length > 0)
            } catch (t) {
                return !1
            }
        },
        _process_options: function(e) {
            this._o = t.extend({}, this._o, e);
            var s = this.o = t.extend({}, this._o),
                n = s.language;
            p[n] || (n = n.split("-")[0], p[n] || (n = c.language)), s.language = n, s.startView = this._resolveViewName(s.startView, 0), s.minViewMode = this._resolveViewName(s.minViewMode, 0), s.maxViewMode = this._resolveViewName(s.maxViewMode, 4), s.startView = Math.min(s.startView, s.maxViewMode), s.startView = Math.max(s.startView, s.minViewMode), !0 !== s.multidate && (s.multidate = Number(s.multidate) || !1, !1 !== s.multidate && (s.multidate = Math.max(0, s.multidate))), s.multidateSeparator = String(s.multidateSeparator), s.weekStart %= 7, s.weekEnd = (s.weekStart + 6) % 7;
            var o = f.parseFormat(s.format);
            s.startDate !== -1 / 0 && (s.startDate ? s.startDate instanceof Date ? s.startDate = this._local_to_utc(this._zero_time(s.startDate)) : s.startDate = f.parseDate(s.startDate, o, s.language, s.assumeNearbyYear) : s.startDate = -1 / 0), s.endDate !== 1 / 0 && (s.endDate ? s.endDate instanceof Date ? s.endDate = this._local_to_utc(this._zero_time(s.endDate)) : s.endDate = f.parseDate(s.endDate, o, s.language, s.assumeNearbyYear) : s.endDate = 1 / 0), s.daysOfWeekDisabled = s.daysOfWeekDisabled || [], t.isArray(s.daysOfWeekDisabled) || (s.daysOfWeekDisabled = s.daysOfWeekDisabled.split(/[,\s]*/)), s.daysOfWeekDisabled = t.map(s.daysOfWeekDisabled, function(t) {
                return parseInt(t, 10)
            }), s.daysOfWeekHighlighted = s.daysOfWeekHighlighted || [], t.isArray(s.daysOfWeekHighlighted) || (s.daysOfWeekHighlighted = s.daysOfWeekHighlighted.split(/[,\s]*/)), s.daysOfWeekHighlighted = t.map(s.daysOfWeekHighlighted, function(t) {
                return parseInt(t, 10)
            }), s.datesDisabled = s.datesDisabled || [], t.isArray(s.datesDisabled) || (s.datesDisabled = [s.datesDisabled]), s.datesDisabled = t.map(s.datesDisabled, function(t) {
                return f.parseDate(t, o, s.language, s.assumeNearbyYear)
            });
            var r = String(s.orientation).toLowerCase().split(/\s+/g),
                h = s.orientation.toLowerCase();
            if (r = t.grep(r, function(t) {
                    return /^auto|left|right|top|bottom$/.test(t)
                }), s.orientation = {
                    x: "auto",
                    y: "auto"
                }, h && "auto" !== h)
                if (1 === r.length) switch (r[0]) {
                    case "top":
                    case "bottom":
                        s.orientation.y = r[0];
                        break;
                    case "left":
                    case "right":
                        s.orientation.x = r[0]
                } else h = t.grep(r, function(t) {
                    return /^left|right$/.test(t)
                }), s.orientation.x = h[0] || "auto", h = t.grep(r, function(t) {
                    return /^top|bottom$/.test(t)
                }), s.orientation.y = h[0] || "auto";
                else;
            if (s.defaultViewDate) {
                var l = s.defaultViewDate.year || (new Date).getFullYear(),
                    d = s.defaultViewDate.month || 0,
                    u = s.defaultViewDate.day || 1;
                s.defaultViewDate = i(l, d, u)
            } else s.defaultViewDate = a()
        },
        _events: [],
        _secondaryEvents: [],
        _applyEvents: function(t) {
            for (var i, a, s, n = 0; n < t.length; n++) i = t[n][0], 2 === t[n].length ? (a = e, s = t[n][1]) : 3 === t[n].length && (a = t[n][1], s = t[n][2]), i.on(s, a)
        },
        _unapplyEvents: function(t) {
            for (var i, a, s, n = 0; n < t.length; n++) i = t[n][0], 2 === t[n].length ? (s = e, a = t[n][1]) : 3 === t[n].length && (s = t[n][1], a = t[n][2]), i.off(a, s)
        },
        _buildEvents: function() {
            var e = {
                keyup: t.proxy(function(e) {
                    -1 === t.inArray(e.keyCode, [27, 37, 39, 38, 40, 32, 13, 9]) && this.update()
                }, this),
                keydown: t.proxy(this.keydown, this),
                paste: t.proxy(this.paste, this)
            };
            !0 === this.o.showOnFocus && (e.focus = t.proxy(this.show, this)), this.isInput ? this._events = [
                [this.element, e]
            ] : this.component && this.hasInput ? this._events = [
                [this.inputField, e],
                [this.component, {
                    click: t.proxy(this.show, this)
                }]
            ] : this._events = [
                [this.element, {
                    click: t.proxy(this.show, this),
                    keydown: t.proxy(this.keydown, this)
                }]
            ], this._events.push([this.element, "*", {
                blur: t.proxy(function(t) {
                    this._focused_from = t.target
                }, this)
            }], [this.element, {
                blur: t.proxy(function(t) {
                    this._focused_from = t.target
                }, this)
            }]), this.o.immediateUpdates && this._events.push([this.element, {
                "changeYear changeMonth": t.proxy(function(t) {
                    this.update(t.date)
                }, this)
            }]), this._secondaryEvents = [
                [this.picker, {
                    click: t.proxy(this.click, this)
                }],
                [t(window), {
                    resize: t.proxy(this.place, this)
                }],
                [t(document), {
                    mousedown: t.proxy(function(t) {
                        this.element.is(t.target) || this.element.find(t.target).length || this.picker.is(t.target) || this.picker.find(t.target).length || this.isInline || this.hide()
                    }, this)
                }]
            ]
        },
        _attachEvents: function() {
            this._detachEvents(), this._applyEvents(this._events)
        },
        _detachEvents: function() {
            this._unapplyEvents(this._events)
        },
        _attachSecondaryEvents: function() {
            this._detachSecondaryEvents(), this._applyEvents(this._secondaryEvents)
        },
        _detachSecondaryEvents: function() {
            this._unapplyEvents(this._secondaryEvents)
        },
        _trigger: function(e, i) {
            var a = i || this.dates.get(-1),
                s = this._utc_to_local(a);
            this.element.trigger({
                type: e,
                date: s,
                dates: t.map(this.dates, this._utc_to_local),
                format: t.proxy(function(t, e) {
                    0 === arguments.length ? (t = this.dates.length - 1, e = this.o.format) : "string" == typeof t && (e = t, t = this.dates.length - 1), e = e || this.o.format;
                    var i = this.dates.get(t);
                    return f.formatDate(i, e, this.o.language)
                }, this)
            })
        },
        show: function() {
            if (!(this.inputField.prop("disabled") || this.inputField.prop("readonly") && !1 === this.o.enableOnReadonly)) return this.isInline || this.picker.appendTo(this.o.container), this.place(), this.picker.show(), this._attachSecondaryEvents(), this._trigger("show"), (window.navigator.msMaxTouchPoints || "ontouchstart" in document) && this.o.disableTouchKeyboard && t(this.element).blur(), this
        },
        hide: function() {
            return this.isInline || !this.picker.is(":visible") ? this : (this.focusDate = null, this.picker.hide().detach(), this._detachSecondaryEvents(), this.viewMode = this.o.startView, this.showMode(), this.o.forceParse && this.inputField.val() && this.setValue(), this._trigger("hide"), this)
        },
        destroy: function() {
            return this.hide(), this._detachEvents(), this._detachSecondaryEvents(), this.picker.remove(), delete this.element.data().datepicker, this.isInput || delete this.element.data().date, this
        },
        paste: function(e) {
            var i;
            if (e.originalEvent.clipboardData && e.originalEvent.clipboardData.types && -1 !== t.inArray("text/plain", e.originalEvent.clipboardData.types)) i = e.originalEvent.clipboardData.getData("text/plain");
            else {
                if (!window.clipboardData) return;
                i = window.clipboardData.getData("Text")
            }
            this.setDate(i), this.update(), e.preventDefault()
        },
        _utc_to_local: function(t) {
            return t && new Date(t.getTime() + 6e4 * t.getTimezoneOffset())
        },
        _local_to_utc: function(t) {
            return t && new Date(t.getTime() - 6e4 * t.getTimezoneOffset())
        },
        _zero_time: function(t) {
            return t && new Date(t.getFullYear(), t.getMonth(), t.getDate())
        },
        _zero_utc_time: function(t) {
            return t && new Date(Date.UTC(t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()))
        },
        getDates: function() {
            return t.map(this.dates, this._utc_to_local)
        },
        getUTCDates: function() {
            return t.map(this.dates, function(t) {
                return new Date(t)
            })
        },
        getDate: function() {
            return this._utc_to_local(this.getUTCDate())
        },
        getUTCDate: function() {
            var t = this.dates.get(-1);
            return void 0 !== t ? new Date(t) : null
        },
        clearDates: function() {
            this.inputField && this.inputField.val(""), this.update(), this._trigger("changeDate"), this.o.autoclose && this.hide()
        },
        setDates: function() {
            var e = t.isArray(arguments[0]) ? arguments[0] : arguments;
            return this.update.apply(this, e), this._trigger("changeDate"), this.setValue(), this
        },
        setUTCDates: function() {
            var e = t.isArray(arguments[0]) ? arguments[0] : arguments;
            return this.update.apply(this, t.map(e, this._utc_to_local)), this._trigger("changeDate"), this.setValue(), this
        },
        setDate: s("setDates"),
        setUTCDate: s("setUTCDates"),
        remove: s("destroy"),
        setValue: function() {
            var t = this.getFormattedDate();
            return this.inputField.val(t), this
        },
        getFormattedDate: function(i) {
            i === e && (i = this.o.format);
            var a = this.o.language;
            return t.map(this.dates, function(t) {
                return f.formatDate(t, i, a)
            }).join(this.o.multidateSeparator)
        },
        getStartDate: function() {
            return this.o.startDate
        },
        setStartDate: function(t) {
            return this._process_options({
                startDate: t
            }), this.update(), this.updateNavArrows(), this
        },
        getEndDate: function() {
            return this.o.endDate
        },
        setEndDate: function(t) {
            return this._process_options({
                endDate: t
            }), this.update(), this.updateNavArrows(), this
        },
        setDaysOfWeekDisabled: function(t) {
            return this._process_options({
                daysOfWeekDisabled: t
            }), this.update(), this.updateNavArrows(), this
        },
        setDaysOfWeekHighlighted: function(t) {
            return this._process_options({
                daysOfWeekHighlighted: t
            }), this.update(), this
        },
        setDatesDisabled: function(t) {
            this._process_options({
                datesDisabled: t
            }), this.update(), this.updateNavArrows()
        },
        place: function() {
            if (this.isInline) return this;
            var e = this.picker.outerWidth(),
                i = this.picker.outerHeight(),
                a = t(this.o.container),
                s = a.width(),
                n = "body" === this.o.container ? t(document).scrollTop() : a.scrollTop(),
                o = a.offset(),
                r = [];
            this.element.parents().each(function() {
                var e = t(this).css("z-index");
                "auto" !== e && 0 !== e && r.push(parseInt(e))
            });
            var h = Math.max.apply(Math, r) + this.o.zIndexOffset,
                l = this.component ? this.component.parent().offset() : this.element.offset(),
                d = this.component ? this.component.outerHeight(!0) : this.element.outerHeight(!1),
                c = this.component ? this.component.outerWidth(!0) : this.element.outerWidth(!1),
                u = l.left - o.left,
                p = l.top - o.top;
            "body" !== this.o.container && (p += n), this.picker.removeClass("datepicker-orient-top datepicker-orient-bottom datepicker-orient-right datepicker-orient-left"), "auto" !== this.o.orientation.x ? (this.picker.addClass("datepicker-orient-" + this.o.orientation.x), "right" === this.o.orientation.x && (u -= e - c)) : l.left < 0 ? (this.picker.addClass("datepicker-orient-left"), u -= l.left - 10) : u + e > s ? (this.picker.addClass("datepicker-orient-right"), u += c - e) : this.picker.addClass("datepicker-orient-left");
            var f = this.o.orientation.y;
            if ("auto" === f && (f = -n + p - i < 0 ? "bottom" : "top"), this.picker.addClass("datepicker-orient-" + f), "top" === f ? p -= i + parseInt(this.picker.css("padding-top")) : p += d, this.o.rtl) {
                var g = s - (u + c);
                this.picker.css({
                    top: p,
                    right: g,
                    zIndex: h
                })
            } else this.picker.css({
                top: p,
                left: u,
                zIndex: h
            });
            return this
        },
        _allow_update: !0,
        update: function() {
            if (!this._allow_update) return this;
            var e = this.dates.copy(),
                i = [],
                a = !1;
            return arguments.length ? (t.each(arguments, t.proxy(function(t, e) {
                e instanceof Date && (e = this._local_to_utc(e)), i.push(e)
            }, this)), a = !0) : (i = (i = this.isInput ? this.element.val() : this.element.data("date") || this.inputField.val()) && this.o.multidate ? i.split(this.o.multidateSeparator) : [i], delete this.element.data().date), i = t.map(i, t.proxy(function(t) {
                return f.parseDate(t, this.o.format, this.o.language, this.o.assumeNearbyYear)
            }, this)), i = t.grep(i, t.proxy(function(t) {
                return !this.dateWithinRange(t) || !t
            }, this), !0), this.dates.replace(i), this.dates.length ? this.viewDate = new Date(this.dates.get(-1)) : this.viewDate < this.o.startDate ? this.viewDate = new Date(this.o.startDate) : this.viewDate > this.o.endDate ? this.viewDate = new Date(this.o.endDate) : this.viewDate = this.o.defaultViewDate, a ? this.setValue() : i.length && String(e) !== String(this.dates) && this._trigger("changeDate"), !this.dates.length && e.length && this._trigger("clearDate"), this.fill(), this.element.change(), this
        },
        fillDow: function() {
            var e = this.o.weekStart,
                i = "<tr>";
            for (this.o.calendarWeeks && (this.picker.find(".datepicker-days .datepicker-switch").attr("colspan", function(t, e) {
                    return parseInt(e) + 1
                }), i += '<th class="cw">&#160;</th>'); e < this.o.weekStart + 7;) i += '<th class="dow', t.inArray(e, this.o.daysOfWeekDisabled) > -1 && (i += " disabled"), i += '">' + p[this.o.language].daysMin[e++ % 7] + "</th>";
            i += "</tr>", this.picker.find(".datepicker-days thead").append(i)
        },
        fillMonths: function() {
            for (var t = this._utc_to_local(this.viewDate), e = "", i = 0; i < 12;) {
                e += '<span class="month' + (t && t.getMonth() === i ? " focused" : "") + '">' + p[this.o.language].monthsShort[i++] + "</span>"
            }
            this.picker.find(".datepicker-months td").html(e)
        },
        setRange: function(e) {
            e && e.length ? this.range = t.map(e, function(t) {
                return t.valueOf()
            }) : delete this.range, this.fill()
        },
        getClassNames: function(e) {
            var i = [],
                a = this.viewDate.getUTCFullYear(),
                s = this.viewDate.getUTCMonth(),
                n = new Date;
            return e.getUTCFullYear() < a || e.getUTCFullYear() === a && e.getUTCMonth() < s ? i.push("old") : (e.getUTCFullYear() > a || e.getUTCFullYear() === a && e.getUTCMonth() > s) && i.push("new"), this.focusDate && e.valueOf() === this.focusDate.valueOf() && i.push("focused"), this.o.todayHighlight && e.getUTCFullYear() === n.getFullYear() && e.getUTCMonth() === n.getMonth() && e.getUTCDate() === n.getDate() && i.push("today"), -1 !== this.dates.contains(e) && i.push("active"), this.dateWithinRange(e) || i.push("disabled"), this.dateIsDisabled(e) && i.push("disabled", "disabled-date"), -1 !== t.inArray(e.getUTCDay(), this.o.daysOfWeekHighlighted) && i.push("highlighted"), this.range && (e > this.range[0] && e < this.range[this.range.length - 1] && i.push("range"), -1 !== t.inArray(e.valueOf(), this.range) && i.push("selected"), e.valueOf() === this.range[0] && i.push("range-start"), e.valueOf() === this.range[this.range.length - 1] && i.push("range-end")), i
        },
        _fill_yearsView: function(i, a, s, n, o, r, h, l) {
            var d, c, u, p, f, g, D, v, m, y, w;
            for (d = "", c = this.picker.find(i), u = parseInt(o / s, 10) * s, f = parseInt(r / n, 10) * n, g = parseInt(h / n, 10) * n, p = t.map(this.dates, function(t) {
                    return parseInt(t.getUTCFullYear() / n, 10) * n
                }), c.find(".datepicker-switch").text(u + "-" + (u + 9 * n)), D = u - n, v = -1; v < 11; v += 1) m = [a], y = null, -1 === v ? m.push("old") : 10 === v && m.push("new"), -1 !== t.inArray(D, p) && m.push("active"), (D < f || D > g) && m.push("disabled"), D === this.viewDate.getFullYear() && m.push("focused"), l !== t.noop && ((w = l(new Date(D, 0, 1))) === e ? w = {} : "boolean" == typeof w ? w = {
                enabled: w
            } : "string" == typeof w && (w = {
                classes: w
            }), !1 === w.enabled && m.push("disabled"), w.classes && (m = m.concat(w.classes.split(/\s+/))), w.tooltip && (y = w.tooltip)), d += '<span class="' + m.join(" ") + '"' + (y ? ' title="' + y + '"' : "") + ">" + D + "</span>", D += n;
            c.find("td").html(d)
        },
        fill: function() {
            var a, s, n = new Date(this.viewDate),
                o = n.getUTCFullYear(),
                r = n.getUTCMonth(),
                h = this.o.startDate !== -1 / 0 ? this.o.startDate.getUTCFullYear() : -1 / 0,
                l = this.o.startDate !== -1 / 0 ? this.o.startDate.getUTCMonth() : -1 / 0,
                d = this.o.endDate !== 1 / 0 ? this.o.endDate.getUTCFullYear() : 1 / 0,
                c = this.o.endDate !== 1 / 0 ? this.o.endDate.getUTCMonth() : 1 / 0,
                u = p[this.o.language].today || p.en.today || "",
                g = p[this.o.language].clear || p.en.clear || "",
                D = p[this.o.language].titleFormat || p.en.titleFormat;
            if (!isNaN(o) && !isNaN(r)) {
                this.picker.find(".datepicker-days .datepicker-switch").text(f.formatDate(n, D, this.o.language)), this.picker.find("tfoot .today").text(u).toggle(!1 !== this.o.todayBtn), this.picker.find("tfoot .clear").text(g).toggle(!1 !== this.o.clearBtn), this.picker.find("thead .datepicker-title").text(this.o.title).toggle("" !== this.o.title), this.updateNavArrows(), this.fillMonths();
                var v = i(o, r - 1, 28),
                    m = f.getDaysInMonth(v.getUTCFullYear(), v.getUTCMonth());
                v.setUTCDate(m), v.setUTCDate(m - (v.getUTCDay() - this.o.weekStart + 7) % 7);
                var y = new Date(v);
                v.getUTCFullYear() < 100 && y.setUTCFullYear(v.getUTCFullYear()), y.setUTCDate(y.getUTCDate() + 42), y = y.valueOf();
                for (var w, k = []; v.valueOf() < y;) {
                    if (v.getUTCDay() === this.o.weekStart && (k.push("<tr>"), this.o.calendarWeeks)) {
                        var C = new Date(+v + (this.o.weekStart - v.getUTCDay() - 7) % 7 * 864e5),
                            _ = new Date(Number(C) + (11 - C.getUTCDay()) % 7 * 864e5),
                            b = new Date(Number(b = i(_.getUTCFullYear(), 0, 1)) + (11 - b.getUTCDay()) % 7 * 864e5),
                            T = (_ - b) / 864e5 / 7 + 1;
                        k.push('<td class="cw">' + T + "</td>")
                    }(w = this.getClassNames(v)).push("day"), this.o.beforeShowDay !== t.noop && ((s = this.o.beforeShowDay(this._utc_to_local(v))) === e ? s = {} : "boolean" == typeof s ? s = {
                        enabled: s
                    } : "string" == typeof s && (s = {
                        classes: s
                    }), !1 === s.enabled && w.push("disabled"), s.classes && (w = w.concat(s.classes.split(/\s+/))), s.tooltip && (a = s.tooltip)), w = t.isFunction(t.uniqueSort) ? t.uniqueSort(w) : t.unique(w), k.push('<td class="' + w.join(" ") + '"' + (a ? ' title="' + a + '"' : "") + ">" + v.getUTCDate() + "</td>"), a = null, v.getUTCDay() === this.o.weekEnd && k.push("</tr>"), v.setUTCDate(v.getUTCDate() + 1)
                }
                this.picker.find(".datepicker-days tbody").empty().append(k.join(""));
                var M = p[this.o.language].monthsTitle || p.en.monthsTitle || "Months",
                    U = this.picker.find(".datepicker-months").find(".datepicker-switch").text(this.o.maxViewMode < 2 ? M : o).end().find("span").removeClass("active");
                if (t.each(this.dates, function(t, e) {
                        e.getUTCFullYear() === o && U.eq(e.getUTCMonth()).addClass("active")
                    }), (o < h || o > d) && U.addClass("disabled"), o === h && U.slice(0, l).addClass("disabled"), o === d && U.slice(c + 1).addClass("disabled"), this.o.beforeShowMonth !== t.noop) {
                    var F = this;
                    t.each(U, function(i, a) {
                        var s = new Date(o, i, 1),
                            n = F.o.beforeShowMonth(s);
                        n === e ? n = {} : "boolean" == typeof n ? n = {
                            enabled: n
                        } : "string" == typeof n && (n = {
                            classes: n
                        }), !1 !== n.enabled || t(a).hasClass("disabled") || t(a).addClass("disabled"), n.classes && t(a).addClass(n.classes), n.tooltip && t(a).prop("title", n.tooltip)
                    })
                }
                this._fill_yearsView(".datepicker-years", "year", 10, 1, o, h, d, this.o.beforeShowYear), this._fill_yearsView(".datepicker-decades", "decade", 100, 10, o, h, d, this.o.beforeShowDecade), this._fill_yearsView(".datepicker-centuries", "century", 1e3, 100, o, h, d, this.o.beforeShowCentury)
            }
        },
        updateNavArrows: function() {
            if (this._allow_update) {
                var t = new Date(this.viewDate),
                    e = t.getUTCFullYear(),
                    i = t.getUTCMonth();
                switch (this.viewMode) {
                    case 0:
                        this.o.startDate !== -1 / 0 && e <= this.o.startDate.getUTCFullYear() && i <= this.o.startDate.getUTCMonth() ? this.picker.find(".prev").css({
                            visibility: "hidden"
                        }) : this.picker.find(".prev").css({
                            visibility: "visible"
                        }), this.o.endDate !== 1 / 0 && e >= this.o.endDate.getUTCFullYear() && i >= this.o.endDate.getUTCMonth() ? this.picker.find(".next").css({
                            visibility: "hidden"
                        }) : this.picker.find(".next").css({
                            visibility: "visible"
                        });
                        break;
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                        this.o.startDate !== -1 / 0 && e <= this.o.startDate.getUTCFullYear() || this.o.maxViewMode < 2 ? this.picker.find(".prev").css({
                            visibility: "hidden"
                        }) : this.picker.find(".prev").css({
                            visibility: "visible"
                        }), this.o.endDate !== 1 / 0 && e >= this.o.endDate.getUTCFullYear() || this.o.maxViewMode < 2 ? this.picker.find(".next").css({
                            visibility: "hidden"
                        }) : this.picker.find(".next").css({
                            visibility: "visible"
                        })
                }
            }
        },
        click: function(e) {
            var s, n, o, r, h, l, d;
            e.preventDefault(), e.stopPropagation(), (s = t(e.target)).hasClass("datepicker-switch") && this.showMode(1);
            var c = s.closest(".prev, .next");
            c.length > 0 && (n = f.modes[this.viewMode].navStep * (c.hasClass("prev") ? -1 : 1), 0 === this.viewMode ? (this.viewDate = this.moveMonth(this.viewDate, n), this._trigger("changeMonth", this.viewDate)) : (this.viewDate = this.moveYear(this.viewDate, n), 1 === this.viewMode && this._trigger("changeYear", this.viewDate)), this.fill()), s.hasClass("today") && !s.hasClass("day") && (this.showMode(-2), this._setDate(a(), "linked" === this.o.todayBtn ? null : "view")), s.hasClass("clear") && this.clearDates(), s.hasClass("disabled") || (s.hasClass("day") && (o = parseInt(s.text(), 10) || 1, r = this.viewDate.getUTCFullYear(), h = this.viewDate.getUTCMonth(), s.hasClass("old") && (0 === h ? (h = 11, r -= 1, l = !0, d = !0) : (h -= 1, l = !0)), s.hasClass("new") && (11 === h ? (h = 0, r += 1, l = !0, d = !0) : (h += 1, l = !0)), this._setDate(i(r, h, o)), d && this._trigger("changeYear", this.viewDate), l && this._trigger("changeMonth", this.viewDate)), s.hasClass("month") && (this.viewDate.setUTCDate(1), o = 1, h = s.parent().find("span").index(s), r = this.viewDate.getUTCFullYear(), this.viewDate.setUTCMonth(h), this._trigger("changeMonth", this.viewDate), 1 === this.o.minViewMode ? (this._setDate(i(r, h, o)), this.showMode()) : this.showMode(-1), this.fill()), (s.hasClass("year") || s.hasClass("decade") || s.hasClass("century")) && (this.viewDate.setUTCDate(1), o = 1, h = 0, r = parseInt(s.text(), 10) || 0, this.viewDate.setUTCFullYear(r), s.hasClass("year") && (this._trigger("changeYear", this.viewDate), 2 === this.o.minViewMode && this._setDate(i(r, h, o))), s.hasClass("decade") && (this._trigger("changeDecade", this.viewDate), 3 === this.o.minViewMode && this._setDate(i(r, h, o))), s.hasClass("century") && (this._trigger("changeCentury", this.viewDate), 4 === this.o.minViewMode && this._setDate(i(r, h, o))), this.showMode(-1), this.fill())), this.picker.is(":visible") && this._focused_from && t(this._focused_from).focus(), delete this._focused_from
        },
        _toggle_multidate: function(t) {
            var e = this.dates.contains(t);
            if (t || this.dates.clear(), -1 !== e ? (!0 === this.o.multidate || this.o.multidate > 1 || this.o.toggleActive) && this.dates.remove(e) : !1 === this.o.multidate ? (this.dates.clear(), this.dates.push(t)) : this.dates.push(t), "number" == typeof this.o.multidate)
                for (; this.dates.length > this.o.multidate;) this.dates.remove(0)
        },
        _setDate: function(t, e) {
            e && "date" !== e || this._toggle_multidate(t && new Date(t)), e && "view" !== e || (this.viewDate = t && new Date(t)), this.fill(), this.setValue(), e && "view" === e || this._trigger("changeDate"), this.inputField && this.inputField.change(), !this.o.autoclose || e && "date" !== e || this.hide()
        },
        moveDay: function(t, e) {
            var i = new Date(t);
            return i.setUTCDate(t.getUTCDate() + e), i
        },
        moveWeek: function(t, e) {
            return this.moveDay(t, 7 * e)
        },
        moveMonth: function(t, e) {
            if (!(i = t) || isNaN(i.getTime())) return this.o.defaultViewDate;
            var i;
            if (!e) return t;
            var a, s, n = new Date(t.valueOf()),
                o = n.getUTCDate(),
                r = n.getUTCMonth(),
                h = Math.abs(e);
            if (e = e > 0 ? 1 : -1, 1 === h) s = -1 === e ? function() {
                return n.getUTCMonth() === r
            } : function() {
                return n.getUTCMonth() !== a
            }, a = r + e, n.setUTCMonth(a), (a < 0 || a > 11) && (a = (a + 12) % 12);
            else {
                for (var l = 0; l < h; l++) n = this.moveMonth(n, e);
                a = n.getUTCMonth(), n.setUTCDate(o), s = function() {
                    return a !== n.getUTCMonth()
                }
            }
            for (; s();) n.setUTCDate(--o), n.setUTCMonth(a);
            return n
        },
        moveYear: function(t, e) {
            return this.moveMonth(t, 12 * e)
        },
        moveAvailableDate: function(t, e, i) {
            do {
                if (t = this[i](t, e), !this.dateWithinRange(t)) return !1;
                i = "moveDay"
            } while (this.dateIsDisabled(t));
            return t
        },
        weekOfDateIsDisabled: function(e) {
            return -1 !== t.inArray(e.getUTCDay(), this.o.daysOfWeekDisabled)
        },
        dateIsDisabled: function(e) {
            return this.weekOfDateIsDisabled(e) || t.grep(this.o.datesDisabled, function(t) {
                return a = t, (i = e).getUTCFullYear() === a.getUTCFullYear() && i.getUTCMonth() === a.getUTCMonth() && i.getUTCDate() === a.getUTCDate();
                var i, a
            }).length > 0
        },
        dateWithinRange: function(t) {
            return t >= this.o.startDate && t <= this.o.endDate
        },
        keydown: function(t) {
            if (this.picker.is(":visible")) {
                var e, i, a = !1,
                    s = this.focusDate || this.viewDate;
                switch (t.keyCode) {
                    case 27:
                        this.focusDate ? (this.focusDate = null, this.viewDate = this.dates.get(-1) || this.viewDate, this.fill()) : this.hide(), t.preventDefault(), t.stopPropagation();
                        break;
                    case 37:
                    case 38:
                    case 39:
                    case 40:
                        if (!this.o.keyboardNavigation || 7 === this.o.daysOfWeekDisabled.length) break;
                        e = 37 === t.keyCode || 38 === t.keyCode ? -1 : 1, 0 === this.viewMode ? t.ctrlKey ? (i = this.moveAvailableDate(s, e, "moveYear")) && this._trigger("changeYear", this.viewDate) : t.shiftKey ? (i = this.moveAvailableDate(s, e, "moveMonth")) && this._trigger("changeMonth", this.viewDate) : 37 === t.keyCode || 39 === t.keyCode ? i = this.moveAvailableDate(s, e, "moveDay") : this.weekOfDateIsDisabled(s) || (i = this.moveAvailableDate(s, e, "moveWeek")) : 1 === this.viewMode ? (38 !== t.keyCode && 40 !== t.keyCode || (e *= 4), i = this.moveAvailableDate(s, e, "moveMonth")) : 2 === this.viewMode && (38 !== t.keyCode && 40 !== t.keyCode || (e *= 4), i = this.moveAvailableDate(s, e, "moveYear")), i && (this.focusDate = this.viewDate = i, this.setValue(), this.fill(), t.preventDefault());
                        break;
                    case 13:
                        if (!this.o.forceParse) break;
                        s = this.focusDate || this.dates.get(-1) || this.viewDate, this.o.keyboardNavigation && (this._toggle_multidate(s), a = !0), this.focusDate = null, this.viewDate = this.dates.get(-1) || this.viewDate, this.setValue(), this.fill(), this.picker.is(":visible") && (t.preventDefault(), t.stopPropagation(), this.o.autoclose && this.hide());
                        break;
                    case 9:
                        this.focusDate = null, this.viewDate = this.dates.get(-1) || this.viewDate, this.fill(), this.hide()
                }
                a && (this.dates.length ? this._trigger("changeDate") : this._trigger("clearDate"), this.inputField && this.inputField.change())
            } else 40 !== t.keyCode && 27 !== t.keyCode || (this.show(), t.stopPropagation())
        },
        showMode: function(t) {
            t && (this.viewMode = Math.max(this.o.minViewMode, Math.min(this.o.maxViewMode, this.viewMode + t))), this.picker.children("div").hide().filter(".datepicker-" + f.modes[this.viewMode].clsName).show(), this.updateNavArrows()
        }
    };
    var h = function(e, i) {
        t(e).data("datepicker", this), this.element = t(e), this.inputs = t.map(i.inputs, function(t) {
            return t.jquery ? t[0] : t
        }), delete i.inputs, d.call(t(this.inputs), i).on("changeDate", t.proxy(this.dateUpdated, this)), this.pickers = t.map(this.inputs, function(e) {
            return t(e).data("datepicker")
        }), this.updateDates()
    };
    h.prototype = {
        updateDates: function() {
            this.dates = t.map(this.pickers, function(t) {
                return t.getUTCDate()
            }), this.updateRanges()
        },
        updateRanges: function() {
            var e = t.map(this.dates, function(t) {
                return t.valueOf()
            });
            t.each(this.pickers, function(t, i) {
                i.setRange(e)
            })
        },
        dateUpdated: function(e) {
            if (!this.updating) {
                this.updating = !0;
                var i = t(e.target).data("datepicker");
                if (void 0 !== i) {
                    var a = i.getUTCDate(),
                        s = t.inArray(e.target, this.inputs),
                        n = s - 1,
                        o = s + 1,
                        r = this.inputs.length;
                    if (-1 !== s) {
                        if (t.each(this.pickers, function(t, e) {
                                e.getUTCDate() || e.setUTCDate(a)
                            }), a < this.dates[n])
                            for (; n >= 0 && a < this.dates[n];) this.pickers[n--].setUTCDate(a);
                        else if (a > this.dates[o])
                            for (; o < r && a > this.dates[o];) this.pickers[o++].setUTCDate(a);
                        this.updateDates(), delete this.updating
                    }
                }
            }
        },
        remove: function() {
            t.map(this.pickers, function(t) {
                t.remove()
            }), delete this.element.data().datepicker
        }
    };
    var l = t.fn.datepicker,
        d = function(i) {
            var a, s = Array.apply(null, arguments);
            if (s.shift(), this.each(function() {
                    var e = t(this),
                        n = e.data("datepicker"),
                        o = "object" == typeof i && i;
                    if (!n) {
                        var l = function(e, i) {
                                var a = t(e).data(),
                                    s = {},
                                    n = new RegExp("^" + i.toLowerCase() + "([A-Z])");

                                function o(t, e) {
                                    return e.toLowerCase()
                                }
                                for (var r in i = new RegExp("^" + i.toLowerCase()), a) i.test(r) && (s[r.replace(n, o)] = a[r]);
                                return s
                            }(this, "date"),
                            d = function(e) {
                                var i = {};
                                if (p[e] || (e = e.split("-")[0], p[e])) {
                                    var a = p[e];
                                    return t.each(u, function(t, e) {
                                        e in a && (i[e] = a[e])
                                    }), i
                                }
                            }(t.extend({}, c, l, o).language),
                            f = t.extend({}, c, d, l, o);
                        e.hasClass("input-daterange") || f.inputs ? (t.extend(f, {
                            inputs: f.inputs || e.find("input").toArray()
                        }), n = new h(this, f)) : n = new r(this, f), e.data("datepicker", n)
                    }
                    "string" == typeof i && "function" == typeof n[i] && (a = n[i].apply(n, s))
                }), a === e || a instanceof r || a instanceof h) return this;
            if (this.length > 1) throw new Error("Using only allowed for the collection of a single element (" + i + " function)");
            return a
        };
    t.fn.datepicker = d;
    var c = t.fn.datepicker.defaults = {
            assumeNearbyYear: !1,
            autoclose: !1,
            beforeShowDay: t.noop,
            beforeShowMonth: t.noop,
            beforeShowYear: t.noop,
            beforeShowDecade: t.noop,
            beforeShowCentury: t.noop,
            calendarWeeks: !1,
            clearBtn: !1,
            toggleActive: !1,
            daysOfWeekDisabled: [],
            daysOfWeekHighlighted: [],
            datesDisabled: [],
            endDate: 1 / 0,
            forceParse: !0,
            format: "mm.dd.yyyy",
            keyboardNavigation: !0,
            language: "en",
            minViewMode: 0,
            maxViewMode: 4,
            multidate: !1,
            multidateSeparator: ",",
            orientation: "auto",
            rtl: !1,
            startDate: -1 / 0,
            startView: 0,
            todayBtn: !1,
            todayHighlight: !1,
            weekStart: 0,
            disableTouchKeyboard: !1,
            enableOnReadonly: !0,
            showOnFocus: !0,
            zIndexOffset: 10,
            container: "body",
            immediateUpdates: !1,
            title: "",
            templates: {
                leftArrow: "&laquo;",
                rightArrow: "&raquo;"
            }
        },
        u = t.fn.datepicker.locale_opts = ["format", "rtl", "weekStart"];
    t.fn.datepicker.Constructor = r;
    var p = t.fn.datepicker.dates = {
            en: {
                days: ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"],
                daysShort: ["Pz", "Pzt", "Sal", "Çrş", "Prş", "Cu", "Cts"],
                daysMin: ["Pz", "Pzt", "Sa", "Çr", "Pr", "Cu", "Ct"],
                months: ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"],
                monthsShort: ["Oca", "Şub", "Mar", "Nis", "May", "Haz", "Tem", "Ağu", "Eyl", "Eki", "Kas", "Ara"],
                today: "Today",
                clear: "Clear",
                titleFormat: "MM yyyy"
            }
        },
        f = {
            modes: [{
                clsName: "days",
                navFnc: "Month",
                navStep: 1
            }, {
                clsName: "months",
                navFnc: "FullYear",
                navStep: 1
            }, {
                clsName: "years",
                navFnc: "FullYear",
                navStep: 10
            }, {
                clsName: "decades",
                navFnc: "FullDecade",
                navStep: 100
            }, {
                clsName: "centuries",
                navFnc: "FullCentury",
                navStep: 1e3
            }],
            isLeapYear: function(t) {
                return t % 4 == 0 && t % 100 != 0 || t % 400 == 0
            },
            getDaysInMonth: function(t, e) {
                return [31, f.isLeapYear(t) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][e]
            },
            validParts: /dd?|DD?|mm?|MM?|yy(?:yy)?/g,
            nonpunctuation: /[^ -\/:-@\u5e74\u6708\u65e5\[-`{-~\t\n\r]+/g,
            parseFormat: function(t) {
                if ("function" == typeof t.toValue && "function" == typeof t.toDisplay) return t;
                var e = t.replace(this.validParts, "\0").split("\0"),
                    i = t.match(this.validParts);
                if (!e || !e.length || !i || 0 === i.length) throw new Error("Invalid date format.");
                return {
                    separators: e,
                    parts: i
                }
            },
            parseDate: function(s, n, o, h) {
                if (!s) return e;
                if (s instanceof Date) return s;
                if ("string" == typeof n && (n = f.parseFormat(n)), n.toValue) return n.toValue(s, n, o);
                var l, d, c, u, g = /([\-+]\d+)([dmwy])/,
                    D = s.match(/([\-+]\d+)([dmwy])/g),
                    v = {
                        d: "moveDay",
                        m: "moveMonth",
                        w: "moveWeek",
                        y: "moveYear"
                    },
                    m = {
                        yesterday: "-1d",
                        today: "+0d",
                        tomorrow: "+1d"
                    };
                if (/^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/.test(s)) {
                    for (s = new Date, c = 0; c < D.length; c++) l = g.exec(D[c]), d = parseInt(l[1]), u = v[l[2]], s = r.prototype[u](s, d);
                    return i(s.getUTCFullYear(), s.getUTCMonth(), s.getUTCDate())
                }
                if (void 0 !== m[s] && (D = (s = m[s]).match(/([\-+]\d+)([dmwy])/g), /^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/.test(s))) {
                    for (s = new Date, c = 0; c < D.length; c++) l = g.exec(D[c]), d = parseInt(l[1]), u = v[l[2]], s = r.prototype[u](s, d);
                    return i(s.getUTCFullYear(), s.getUTCMonth(), s.getUTCDate())
                }

                function y(t, e) {
                    return !0 === e && (e = 10), t < 100 && (t += 2e3) > (new Date).getFullYear() + e && (t -= 100), t
                }
                D = s && s.match(this.nonpunctuation) || [], s = new Date;
                var w, k, C = {},
                    _ = ["yyyy", "yy", "M", "MM", "m", "mm", "d", "dd"],
                    b = {
                        yyyy: function(t, e) {
                            return t.setUTCFullYear(h ? y(e, h) : e)
                        },
                        yy: function(t, e) {
                            return t.setUTCFullYear(h ? y(e, h) : e)
                        },
                        m: function(t, e) {
                            if (isNaN(t)) return t;
                            for (e -= 1; e < 0;) e += 12;
                            for (e %= 12, t.setUTCMonth(e); t.getUTCMonth() !== e;) t.setUTCDate(t.getUTCDate() - 1);
                            return t
                        },
                        d: function(t, e) {
                            return t.setUTCDate(e)
                        }
                    };
                b.M = b.MM = b.mm = b.m, b.dd = b.d, s = a();
                var T = n.parts.slice();

                function M() {
                    var t = this.slice(0, D[c].length),
                        e = D[c].slice(0, t.length);
                    return t.toLowerCase() === e.toLowerCase()
                }
                if (D.length !== T.length && (T = t(T).filter(function(e, i) {
                        return -1 !== t.inArray(i, _)
                    }).toArray()), D.length === T.length) {
                    var U, F, x;
                    for (c = 0, U = T.length; c < U; c++) {
                        if (w = parseInt(D[c], 10), l = T[c], isNaN(w)) switch (l) {
                            case "MM":
                                k = t(p[o].months).filter(M), w = t.inArray(k[0], p[o].months) + 1;
                                break;
                            case "M":
                                k = t(p[o].monthsShort).filter(M), w = t.inArray(k[0], p[o].monthsShort) + 1
                        }
                        C[l] = w
                    }
                    for (c = 0; c < _.length; c++)(x = _[c]) in C && !isNaN(C[x]) && (F = new Date(s), b[x](F, C[x]), isNaN(F) || (s = F))
                }
                return s
            },
            formatDate: function(e, i, a) {
                if (!e) return "";
                if ("string" == typeof i && (i = f.parseFormat(i)), i.toDisplay) return i.toDisplay(e, i, a);
                var s = {
                    d: e.getUTCDate(),
                    D: p[a].daysShort[e.getUTCDay()],
                    DD: p[a].days[e.getUTCDay()],
                    m: e.getUTCMonth() + 1,
                    M: p[a].monthsShort[e.getUTCMonth()],
                    MM: p[a].months[e.getUTCMonth()],
                    yy: e.getUTCFullYear().toString().substring(2),
                    yyyy: e.getUTCFullYear()
                };
                s.dd = (s.d < 10 ? "0" : "") + s.d, s.mm = (s.m < 10 ? "0" : "") + s.m, e = [];
                for (var n = t.extend([], i.separators), o = 0, r = i.parts.length; o <= r; o++) n.length && e.push(n.shift()), e.push(s[i.parts[o]]);
                return e.join("")
            },
            headTemplate: '<thead><tr><th colspan="7" class="datepicker-title"></th></tr><tr><th class="prev"></th><th colspan="5" class="datepicker-switch"></th><th class="next"></th></tr></thead>',
            contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>',
            footTemplate: '<tfoot><tr><th colspan="7" class="today"></th></tr><tr><th colspan="7" class="clear"></th></tr></tfoot>'
        };
    f.template = '<div class="datepicker"><div class="datepicker-days"><table class="table-condensed">' + f.headTemplate + "<tbody></tbody>" + f.footTemplate + '</table></div><div class="datepicker-months"><table class="table-condensed">' + f.headTemplate + f.contTemplate + f.footTemplate + '</table></div><div class="datepicker-years"><table class="table-condensed">' + f.headTemplate + f.contTemplate + f.footTemplate + '</table></div><div class="datepicker-decades"><table class="table-condensed">' + f.headTemplate + f.contTemplate + f.footTemplate + '</table></div><div class="datepicker-centuries"><table class="table-condensed">' + f.headTemplate + f.contTemplate + f.footTemplate + "</table></div></div>", t.fn.datepicker.DPGlobal = f, t.fn.datepicker.noConflict = function() {
        return t.fn.datepicker = l, this
    }, t.fn.datepicker.version = "1.6.4", t(document).on("focus.datepicker.data-api click.datepicker.data-api", '[data-provide="datepicker"]', function(e) {
        var i = t(this);
        i.data("datepicker") || (e.preventDefault(), d.call(i, "show"))
    }), t(function() {
        d.call(t('[data-provide="datepicker-inline"]'))
    })
});
$(".mnt-payment-method-input-div .mnt-custom-input-1 input").on("change", function() {
    
	container = $(this).attr('data-container');
	
	$('.payment-type').hide();
	$('.payment-type#'+ container).slideDown();
	
	
	/*
	var e = $(this),
        i = e.attr("id"),
        p = $(".payment-type#paymentCredit"),
        n = $(".payment-type#paymentSodexo"),
        t = $(".payment-type#paymentMultinet");
    
	e.is(":checked") && "on" == e.val() && ("method1" == i ? (p.slideDown(), n.slideUp(), t.slideUp(), p.find("input").prop("required", !0), n.find("input").prop("required", !1), t.find("input").prop("required", !1)) : "method2" == i ? (p.slideUp(), n.slideDown(), t.slideUp(), p.find("input").prop("required", !1), n.find("input").prop("required", !0), t.find("input").prop("required", !1)) : "method3" == i && (p.slideUp(), n.slideUp(), t.slideDown(), p.find("input").prop("required", !1), n.find("input").prop("required", !1), t.find("input").prop("required", !0)))
*/
}).trigger("change");