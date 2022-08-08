(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [405], {
        8985: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, { default: function() { return Nn } });
            var a = n(2684),
                o = n(3655),
                i = n.n(o),
                r = n(9317),
                s = n.n(r),
                l = n(8598),
                c = function() { return (0, a.useEffect)((function() { var e = new(i())(".".concat(s().writing), { strings: ["Кросплатформенный", "Портативный", "Blockchain-agnostic", "Суверенный"], showCursor: !1, typeSpeed: 60, backSpeed: 20, loop: !0 }); return function() { e.destroy() } }), []), (0, l.jsx)("div", { className: s().writing }) },
                d = n(3656),
                u = n(71),
                h = n(2269);

            function p(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) { return Object.getOwnPropertyDescriptor(e, t).enumerable }))), n.push.apply(n, a)
                }
                return n
            }

            function g(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? p(Object(n), !0).forEach((function(t) {
                        (0, d.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : p(Object(n)).forEach((function(t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t)) }))
                }
                return e
            }
            var m = function(e) { return .8 * e - 8 || e };

            function f(e) {
                var t = e.size,
                    n = void 0 === t ? 110 : t,
                    a = e.className,
                    o = e.style,
                    i = (0, h.dD)().isMobile,
                    r = m(i ? 120 : n),
                    s = Math.floor(n / 50);
                return (0, l.jsx)("div", { className: a, style: g({ width: i ? "".concat(r / 10, "rem") : r, height: i ? "".concat(r / 10, "rem") : r, position: "relative", display: "inline-block", margin: "0 ".concat(s, "px") }, o), children: (0, l.jsx)(u.default, { src: "/assets/icons/o.svg", layout: "fill", loading: "eager" }) })
            }
            var _ = function(e) {
                    e.className;
                    var t = e.id,
                        n = e.size,
                        a = void 0 === n ? 110 : n,
                        o = m(a),
                        i = Math.floor(a / 50);
                    return (0, l.jsx)("div", { id: t, style: { position: "relative", display: "inline-block", width: o, height: o, margin: "0 ".concat(i, "px") } })
                },
                b = n(4029),
                w = n(203),
                x = n.n(w),
                y = n(3588),
                v = n.n(y),
                N = n(6557),
                j = n(7057),
                k = n(1972),
                E = n(747),
                C = n(8384),
                I = n(4112);

            function S(e) {
                var t = function() { if ("undefined" === typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" === typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0 } catch (e) { return !1 } }();
                return function() {
                    var n, a = (0, E.Z)(e);
                    if (t) {
                        var o = (0, E.Z)(this).constructor;
                        n = Reflect.construct(a, arguments, o)
                    } else n = a.apply(this, arguments);
                    return (0, k.Z)(this, n)
                }
            }

            function A(e, t) {
                var n = "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (!n) {
                    if (Array.isArray(e) || (n = function(e, t) { if (!e) return; if ("string" === typeof e) return L(e, t); var n = Object.prototype.toString.call(e).slice(8, -1); "Object" === n && e.constructor && (n = e.constructor.name); if ("Map" === n || "Set" === n) return Array.from(e); if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return L(e, t) }(e)) || t && e && "number" === typeof e.length) {
                        n && (e = n);
                        var a = 0,
                            o = function() {};
                        return { s: o, n: function() { return a >= e.length ? { done: !0 } : { done: !1, value: e[a++] } }, e: function(e) { throw e }, f: o }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var i, r = !0,
                    s = !1;
                return { s: function() { n = n.call(e) }, n: function() { var e = n.next(); return r = e.done, e }, e: function(e) { s = !0, i = e }, f: function() { try { r || null == n.return || n.return() } finally { if (s) throw i } } }
            }

            function L(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
                return a
            }
            var D, T = function() {
                    function e(t) {
                        if ((0, C.Z)(this, e), (0, d.Z)(this, "ele", void 0), (0, d.Z)(this, "initTop", void 0), !t) throw new Error("need provide element");
                        this.ele = t, this.initTop = t.getBoundingClientRect && t.getBoundingClientRect().top || 0
                    }
                    return (0, I.Z)(e, [{
                        key: "setStyle",
                        value: function(e) {
                            if (this.ele) {
                                var t, n = A(e);
                                try {
                                    for (n.s(); !(t = n.n()).done;) {
                                        var a = t.value;
                                        this.ele.style[a.attribute] = a.value
                                    }
                                } catch (o) { n.e(o) } finally { n.f() }
                            }
                        }
                    }, { key: "top", get: function() { return this.initTop } }]), e
                }(),
                P = function(e) {
                    (0, j.Z)(n, e);
                    var t = S(n);

                    function n(e) {
                        var a, o = e.ele,
                            i = e.lineEle,
                            r = e.graphEle,
                            s = e.labelEle,
                            l = e.options;
                        return (0, C.Z)(this, n), a = t.call(this, o), (0, d.Z)((0, N.Z)(a), "xDistance", void 0), (0, d.Z)((0, N.Z)(a), "radian", void 0), (0, d.Z)((0, N.Z)(a), "opacityOffset", .15), (0, d.Z)((0, N.Z)(a), "line", void 0), (0, d.Z)((0, N.Z)(a), "graph", void 0), (0, d.Z)((0, N.Z)(a), "label", void 0), a.radian = l.radian, a.xDistance = l.xDistance, a.line = i && new T(i), a.graph = r && new T(r), a.label = s && new T(s), a
                    }
                    return (0, I.Z)(n, [{
                        key: "setOpacity",
                        value: function(e) {
                            var t = !this.graph,
                                n = t ? 0 : this.opacityOffset,
                                a = Math.max(0, e - n);
                            this.setStyle([{ attribute: "opacity", value: a }]), this.translate(t ? 1 : e)
                        }
                    }, { key: "setTransForm", value: function(e) { this.setStyle([{ attribute: "transform", value: e }]) } }, { key: "getRadian", value: function() { var e = this.radian % (2 * Math.PI); return e > 0 && e < Math.PI / 2 ? { radian: Math.PI / 2 - e, xcoe: -1, ycoe: -1 } : e > Math.PI / 2 && e < Math.PI ? { radian: e - Math.PI / 2, xcoe: 1, ycoe: -1 } : e > Math.PI && e < 3 * Math.PI / 2 ? { radian: 3 * Math.PI / 2 - e, xcoe: 1, ycoe: 1 } : e > 3 * Math.PI / 2 ? { radian: e - 3 * Math.PI / 2, xcoe: -1, ycoe: 1 } : void 0 } }, {
                        key: "translate",
                        value: function(e) {
                            var t = this.getRadian(),
                                n = t.xcoe,
                                a = t.ycoe,
                                o = t.radian,
                                i = n * this.xDistance * e * Math.tan(o),
                                r = a * this.xDistance * e;
                            this.setTransForm("translate(".concat(r, "px,").concat(i, "px)")), this.line.setStyle([{ attribute: "width", value: "".concat((this.xDistance - 60) / Math.cos(o) * e, "px") }])
                        }
                    }, { key: "setLineOpacity", value: function(e) { this.line.setStyle([{ attribute: "opacity", value: e }]), this.label.setStyle([{ attribute: "opacity", value: e }]) } }, { key: "setGraphOpacity", value: function(e) { this.setOpacity(1), this.graph && this.graph.setStyle([{ attribute: "opacity", value: e }]) } }, { key: "hideNode", value: function() { this.setOpacity(0) } }]), n
                }(T),
                O = "scroll-animation-anchor";
            ! function(e) { e.Friend = "friend", e.Follower = "follower", e.Following = "following", e.Demo = "demo" }(D || (D = {}));
            var M, R, F, B, Z, U, z = n(7834),
                W = n(3535),
                G = n(685),
                V = n(5072);

            function K(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) { return Object.getOwnPropertyDescriptor(e, t).enumerable }))), n.push.apply(n, a)
                }
                return n
            }

            function q(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? K(Object(n), !0).forEach((function(t) {
                        (0, d.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : K(Object(n)).forEach((function(t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t)) }))
                }
                return e
            }
            var Y, H, J, Q, X, $, ee, te, ne, ae, oe, ie, re, se, le, ce, de, ue, he, pe, ge, me = {};
            ! function(e) { e.Connected = "CONNECTED", e.Disconnected = "DISCONNECTED", e.DuplicateAddress = "DUPLICATE_ADDRESS", e.Failed = "FAILED", e.InvalidAddress = "INVALID_ADDRESS", e.InvalidOperation = "INVALID_OPERATION", e.InvalidSignature = "INVALID_SIGNATURE", e.OperationExpired = "OPERATION_EXPIRED", e.SigningKeyExpired = "SIGNING_KEY_EXPIRED", e.Success = "SUCCESS" }(Y || (Y = {})),
            function(e) { e.DeprecatedApi = "DEPRECATED_API" }(H || (H = {})),
            function(e) { e.Connected = "CONNECTED", e.Disconnected = "DISCONNECTED", e.DuplicateAddress = "DUPLICATE_ADDRESS", e.Failed = "FAILED", e.InvalidAddress = "INVALID_ADDRESS", e.InvalidOperation = "INVALID_OPERATION", e.InvalidSignature = "INVALID_SIGNATURE", e.OperationExpired = "OPERATION_EXPIRED", e.SigningKeyExpired = "SIGNING_KEY_EXPIRED", e.Success = "SUCCESS" }(J || (J = {})),
            function(e) { e.Accept = "ACCEPT", e.Block = "BLOCK", e.Init = "INIT", e.Reject = "REJECT", e.Terminate = "TERMINATE", e.Unblock = "UNBLOCK" }(Q || (Q = {})),
            function(e) { e.ExceedLimit = "EXCEED_LIMIT", e.InconsistencyError = "INCONSISTENCY_ERROR", e.InvalidAddress = "INVALID_ADDRESS", e.InvalidOperation = "INVALID_OPERATION", e.InvalidParameter = "INVALID_PARAMETER", e.InvalidSignature = "INVALID_SIGNATURE", e.OperationExpired = "OPERATION_EXPIRED", e.Success = "SUCCESS" }(X || (X = {})),
            function(e) { e.Connected = "CONNECTED", e.Disconnected = "DISCONNECTED", e.DuplicateAddress = "DUPLICATE_ADDRESS", e.Failed = "FAILED", e.InvalidAddress = "INVALID_ADDRESS", e.InvalidOperation = "INVALID_OPERATION", e.InvalidSignature = "INVALID_SIGNATURE", e.OperationExpired = "OPERATION_EXPIRED", e.SigningKeyExpired = "SIGNING_KEY_EXPIRED", e.Success = "SUCCESS" }($ || ($ = {})),
            function(e) { e.Follow = "FOLLOW", e.Like = "LIKE", e.Report = "REPORT", e.Vote = "VOTE", e.Watch = "WATCH" }(ee || (ee = {})),
            function(e) { e.Connected = "CONNECTED", e.Disconnected = "DISCONNECTED", e.DuplicateAddress = "DUPLICATE_ADDRESS", e.Failed = "FAILED", e.InvalidAddress = "INVALID_ADDRESS", e.InvalidOperation = "INVALID_OPERATION", e.InvalidSignature = "INVALID_SIGNATURE", e.OperationExpired = "OPERATION_EXPIRED", e.SigningKeyExpired = "SIGNING_KEY_EXPIRED", e.Success = "SUCCESS" }(te || (te = {})),
            function(e) { e.DeprecatedApi = "DEPRECATED_API" }(ne || (ne = {})),
            function(e) { e.Eth = "ETH", e.Solana = "SOLANA" }(ae || (ae = {})),
            function(e) { e.Defi = "DEFI", e.Game = "GAME", e.Nft = "NFT", e.Social = "SOCIAL" }(oe || (oe = {})),
            function(e) { e.Indexing = "INDEXING", e.Success = "SUCCESS" }(ie || (ie = {})),
            function(e) { e.Failed = "FAILED", e.Success = "SUCCESS" }(re || (re = {})),
            function(e) { e.DeprecatedApi = "DEPRECATED_API" }(se || (se = {})),
            function(e) { e.DeprecatedApi = "DEPRECATED_API" }(le || (le = {})),
            function(e) { e.HandleExists = "HANDLE_EXISTS", e.InvalidAddress = "INVALID_ADDRESS", e.Success = "SUCCESS" }(ce || (ce = {})),
            function(e) { e.Success = "SUCCESS" }(de || (de = {})),
            function(e) { e.Featured = "FEATURED", e.Nftmarket = "NFTMARKET", e.Plaza = "PLAZA" }(ue || (ue = {})),
            function(e) { e.DeprecatedApi = "DEPRECATED_API" }(he || (he = {})),
            function(e) { e.AlreadyVerified = "ALREADY_VERIFIED", e.Failed = "FAILED", e.GistNotFound = "GIST_NOT_FOUND", e.InvalidAddress = "INVALID_ADDRESS", e.InvalidHandle = "INVALID_HANDLE", e.Success = "SUCCESS", e.UnsupportedNetwork = "UNSUPPORTED_NETWORK" }(pe || (pe = {})),
            function(e) { e.AlreadyVerified = "ALREADY_VERIFIED", e.Failed = "FAILED", e.InvalidAddress = "INVALID_ADDRESS", e.InvalidHandle = "INVALID_HANDLE", e.Success = "SUCCESS", e.TweetNotFound = "TWEET_NOT_FOUND", e.UnsupportedNetwork = "UNSUPPORTED_NETWORK" }(ge || (ge = {}));
            var fe = (0, W.Ps)(M || (M = (0, z.Z)(["\n    fragment Connect on Connect {\n  address\n  domain\n  avatar\n  alias\n  namespace\n}\n    "]))),
                _e = (0, W.Ps)(R || (R = (0, z.Z)(["\n    fragment PageInfo on PageInfo {\n  startCursor\n  endCursor\n  hasNextPage\n  hasPreviousPage\n}\n    "]))),
                be = (0, W.Ps)(F || (F = (0, z.Z)(["\n    mutation subscribe($email: String!) {\n  subscribe(input: {email: $email}) {\n    result\n  }\n}\n    "])));
            var we = (0, W.Ps)(B || (B = (0, z.Z)(["\n    query GetIdentity($address: String!, $first: Int, $after: String) {\n  identity(address: $address) {\n    address\n    domain\n    twitter {\n      handle\n      verified\n    }\n    avatar\n    followerCount\n    followingCount\n    followings(first: $first, after: $after) {\n      pageInfo {\n        ...PageInfo\n      }\n      list {\n        ...Connect\n      }\n    }\n    followers(first: $first, after: $after) {\n      pageInfo {\n        ...PageInfo\n      }\n      list {\n        ...Connect\n      }\n    }\n    friends(first: $first, after: $after) {\n      pageInfo {\n        ...PageInfo\n      }\n      list {\n        ...Connect\n      }\n    }\n  }\n}\n    ", "\n", ""])), _e, fe);

            function xe(e) { var t = q(q({}, me), e); return V.a(we, t) }
            var ye = (0, W.Ps)(Z || (Z = (0, z.Z)(["\n    query GetTotalUsersAndConnectionsOfSol {\n  homePage(network: SOLANA) {\n    userCount\n    connectionCount\n    indexedUserCount\n    indexedConnectionCount\n  }\n}\n    "])));
            var ve = (0, W.Ps)(U || (U = (0, z.Z)(["\n    query GetTotalUsersAndConnectionsOfETH {\n  homePage(network: ETH) {\n    userCount\n    connectionCount\n    indexedUserCount\n    indexedConnectionCount\n  }\n}\n    "])));
            var Ne = n(991),
                je = n.n(Ne),
                ke = function() { return (0, l.jsx)("div", { style: { background: "#fff", width: 80, height: 80, borderRadius: "50%", zIndex: 3 }, children: (0, l.jsx)(f, { style: { margin: 0 } }) }) },
                Ee = function() { return (0, l.jsx)("a", { href: "https://graph.cyberconnect.me/", target: "_blank", style: { zIndex: 3 }, children: (0, l.jsx)("div", { style: { background: "#000", width: 50, height: 50, borderRadius: "50%", zIndex: 3, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }, children: (0, l.jsx)(u.default, { src: "/assets/icons/right.svg", height: 20, width: 20 }) }) }) },
                Ce = function() { return (0, l.jsx)("div", { className: je().imgWrapper, id: "img", children: (0, l.jsx)("div", { children: (0, l.jsx)(u.default, { src: "/assets/connect_logo_no_word_black.svg", layout: "fill" }) }) }) },
                Ie = function(e) {
                    switch (e) {
                        case "left":
                            return 0;
                        case "right":
                            return 177
                    }
                },
                Se = (0, a.forwardRef)((function(e, t) {
                    var n = e.label,
                        a = e.type,
                        o = e.direction,
                        i = e.graphData,
                        r = a !== D.Demo ? (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(h.kJ, { className: je().graph, ref: function(e) { return t.current["".concat(a, "Chart")] = e }, deg: Ie(o), label: n, data: i, style: { left: "left" === o ? "-140px" : "-94.5px", top: "left" === o ? "none" : "6px" }, centerElement: (0, l.jsx)("div", { style: { position: "absolute", left: "65%", background: "#fff", width: 80, height: 80, borderRadius: "50%", zIndex: 10 }, children: (0, l.jsx)(f, { style: { margin: 0 } }) }) }), (0, l.jsx)(ke, {})] }) : (0, l.jsx)(Ee, {});
                    return (0, l.jsxs)("div", { className: je().node, ref: function(e) { return t.current[a] = e }, children: [(0, l.jsx)("div", { ref: function(e) { return t.current["".concat(a, "Label")] = e }, className: v()(je().label, je()[o]), children: n }), r, (0, l.jsx)(h.E6, { reverse: a === D.Follower || a === D.Demo, className: "".concat(je().linkline, " ").concat(je()["".concat(a, "Line")]), ref: function(e) { t.current["".concat(a, "Line")] = e } })] })
                })),
                Ae = function(e) {
                    var t = new T(e.current.container),
                        n = new P({ ele: e.current.friend, lineEle: e.current.friendLine, graphEle: e.current.friendChart, labelEle: e.current.friendLabel, options: { xDistance: 300, radian: 5 * Math.PI / 3 } }),
                        a = new P({ ele: e.current.follower, lineEle: e.current.followerLine, graphEle: e.current.followerChart, labelEle: e.current.followerLabel, options: { xDistance: 500, radian: 5 * Math.PI / 12 } });
                    return { container: t, friendNodeEle: n, followingNodeEle: new P({ ele: e.current.following, lineEle: e.current.followingLine, graphEle: e.current.followingChart, labelEle: e.current.followingLabel, options: { xDistance: 220, radian: 5 * Math.PI / 4 } }), followerNodeEle: a, demoNodeEle: new P({ ele: e.current.demo, lineEle: e.current.demoLine, labelEle: e.current.demoLabel, options: { xDistance: 250, radian: 25 * Math.PI / 36 } }) }
                };

            function Le(e) {
                var t, n = e.active,
                    o = xe({ variables: { address: "0x148d59faf10b52063071eddf4aaf63a395f2d41c", first: 50 } }).data,
                    i = (0, a.useRef)(null),
                    r = (0, a.useRef)((t = { container: {} }, (0, d.Z)(t, D.Follower, {}), (0, d.Z)(t, D.Friend, {}), (0, d.Z)(t, D.Following, {}), (0, d.Z)(t, D.Demo, {}), t)),
                    s = (0, a.useRef)({ top: 0, left: 0 });
                return (0, a.useEffect)((function() {
                    if (n) {
                        var e = function() {
                            var e = document.querySelector("#".concat(O));
                            if (e) {
                                var t = document.body.getBoundingClientRect(),
                                    n = t.top,
                                    a = t.left,
                                    o = e.getBoundingClientRect(),
                                    i = o.top,
                                    l = o.left;
                                s.current = { top: i - n, left: l - a }, r.current.container.style.left = s.current.left + "px", r.current.container.style.top = s.current.top + "px"
                            }
                        };
                        (0, b.Z)(x().mark((function t() {
                            var n, a, o, l, c, d, u, h, p, g, m, f;
                            return x().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, document.fonts.ready;
                                    case 2:
                                        return e(), n = Ae(r), a = n.container, o = n.followerNodeEle, l = n.followingNodeEle, c = n.friendNodeEle, d = n.demoNodeEle, u = function(e) { c.setOpacity(e), o.setOpacity(e), l.setOpacity(e) }, h = function(e) { c.setGraphOpacity(e), o.setGraphOpacity(e), l.setGraphOpacity(e) }, p = function(e) { c.setLineOpacity(e), o.setLineOpacity(e), l.setLineOpacity(e), d.setLineOpacity(e) }, g = function(e) {
                                            var t = window.innerHeight,
                                                n = e,
                                                g = document.querySelector("#img"),
                                                m = Math.min(Math.max(80, n / 3), 180);
                                            if (a.setStyle([{ attribute: "width", value: m + "px" }, { attribute: "height", value: m + "px" }, { attribute: "margin-left", value: (80 - m) / 2 + "px" }]), a.setStyle([{ attribute: "left", value: "".concat(s.current.left - window.scrollX, "px") }]), n >= .8 * t && n <= 1.4 * t) {
                                                var f = Math.min(.6 * t, n - .8 * t) / (.6 * t);
                                                g.style.opacity = f, i.current && (i.current.style["z-index"] = 0), u(f), p(0), r.current.containerLabel.style.opacity = 0
                                            } else if (n > 1.4 * t && n <= 1.7 * t) {
                                                var _ = n - 1.4 * t,
                                                    b = Math.min(.3 * t, _) / (.3 * t);
                                                p(b), r.current.containerLabel.style.opacity = b, u(1), h(0), g.style.opacity = 1
                                            } else if (n > 1.7 * t && n <= 3 * t) {
                                                var w = n - 1.7 * t,
                                                    x = Math.min(.3 * t, w);
                                                if (h(x / (.3 * t)), p(1), u(1), g.style.opacity = 1, n >= 2 * t && i.current && (i.current.style["z-index"] = 2), n >= 2 * t && n < 2.75 * t) {
                                                    var y = n - 2 * t,
                                                        v = Math.min(.2 * t, y);
                                                    d.setOpacity(v / (.2 * t))
                                                } else if (n >= 2.75 * t) {
                                                    var N = n - 2.75 * t,
                                                        j = (.2 * t - Math.min(.2 * t, N)) / (.2 * t);
                                                    d.setOpacity(j)
                                                } else d.setOpacity(0)
                                            } else if (n > 3 * t && n <= 3.3 * t) {
                                                var k = n - 3 * t,
                                                    E = (.3 * t - Math.min(.3 * t, k)) / (.3 * t);
                                                p(E), h(E), g.style.opacity = 1, d.setOpacity(0), r.current.containerLabel.style.opacity = E
                                            } else if (n >= 3.3 * t && n <= 4 * t) {
                                                var C = n - 3.3 * t,
                                                    I = (.4 * t - Math.min(.4 * t, C)) / (.4 * t);
                                                g.style.opacity = I, h(0), u(I)
                                            } else n > 4 * t ? (g.style.opacity = 0, i.current && (i.current.style["z-index"] = 0), r.current.containerLabel.style.opacity = 0, a.setStyle([{ attribute: "top", value: "".concat(Math.min(5 * t - n - 240, s.current.top), "px") }])) : (g.style.opacity = 0, c.hideNode(), o.hideNode(), l.hideNode(), d.hideNode(), r.current.containerLabel.style.opacity = 0, a.setStyle([{ attribute: "top", value: s.current.top }]));
                                            n > 5 * t && (c.hideNode(), o.hideNode(), l.hideNode(), d.hideNode())
                                        }, f = function() { m = window.requestAnimationFrame((function() { g(window.scrollY) })) }, window.addEventListener("resize", (function() { window.requestAnimationFrame((function() { window.scrollY > 4 * window.innerHeight || (e(), a.setStyle([{ attribute: "left", value: "".concat(s.current.left - window.scrollX, "px") }])) })) })), document.addEventListener("scroll", f), g(window.scrollY), t.abrupt("return", (function() { document.removeEventListener("scroll", f), window.cancelAnimationFrame(m) }));
                                    case 13:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    }
                }), []), (0, l.jsx)("div", { ref: function(e) { return i.current = e }, className: v()(je().scrollMotionWrapper, (0, d.Z)({}, je().hide, !n)), children: (0, l.jsx)("section", { className: je().content, children: (0, l.jsxs)("div", { className: je().anchorElement, ref: function(e) { return r.current.container = e }, children: [(0, l.jsx)("div", { ref: function(e) { return r.current.containerLabel = e }, className: je().ensLabel, children: "cyberlab.eth" }), (0, l.jsx)(f, { style: { width: "100%", height: "100%", margin: 0, zIndex: 3 } }), (0, l.jsx)(Ce, {}), (0, l.jsx)(Se, { ref: r, direction: "left", label: "Подписчики", type: D.Follower }), (0, l.jsx)(Se, { ref: r, direction: "right", label: "Друзья", type: D.Friend, graphData: o }), (0, l.jsx)(Se, { ref: r, direction: "right", label: "Последователи", type: D.Following, graphData: o }), (0, l.jsx)(Se, { ref: r, direction: "top", label: "CyberGraph 3D Demo", type: D.Demo })] }) }) })
            }
            var De = n(7070),
                Te = n(6920),
                Pe = n.n(Te),
                Oe = [{ type: "logo" }],
                Me = n(1848);

            function Re(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) { return Object.getOwnPropertyDescriptor(e, t).enumerable }))), n.push.apply(n, a)
                }
                return n
            }
            var Fe = function() { window.scrollTo({ top: 0, behavior: "smooth" }) },
                Be = function() { return (0, l.jsx)("div", { className: Pe().pcHeaderWrapper, children: Oe.map((function(e) { return "logo" === e.type ? (0, l.jsx)("span", { className: v()(Pe().pcHeaderItem, Pe().pcLogo), children: (0, l.jsx)(u.default, { src: "/assets/grains.svg", width: 30, height: 30, loading: "eager" }) }, e.text) : (0, l.jsx)("span", { className: Pe().pcHeaderItem, children: (0, l.jsx)("a", { href: e.url, target: "_blank", children: e.text }) }, e.text) })) }) },
                Ze = function() {
                    var e = (0, a.useState)(!1),
                        t = e[0],
                        n = e[1];
                    return (0, a.useEffect)((function() { document.body.style.overflow = t ? "hidden" : "auto" }), [t]), (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)("div", { className: v()(Pe().topNavMobile, (0, d.Z)({}, Pe().menuOpen, t)), children: (0, l.jsx)(De.Z, { onClickAway: function() { return n(!1) }, children: (0, l.jsx)("div", { className: Pe().nav, children: (0, l.jsxs)("div", { className: Pe().menu, children: [(0, l.jsxs)("div", { className: v()(Pe().menuTrigger, (0, d.Z)({}, Pe().menuOpen, t)), onClick: function(e) { e.stopPropagation(), n(!t) }, children: [(0, l.jsx)("div", { className: Pe().menuBar }), (0, l.jsx)("div", { className: Pe().menuBar })] }), (0, l.jsx)("div", { className: Pe().menuContent, children: Oe.map((function(e) { return "logo" === e.type ? null : (0, l.jsx)("a", { href: e.url, className: Pe().menuItem, children: e.text }, e.url) })) })] }) }) }) }), (0, l.jsx)("span", { onClick: Fe, className: v()(Pe().mobileLogo, (0, d.Z)({}, Pe().whiteLogo, t)) })] })
                };

            function Ue(e) {
                e.className;
                var t = (0, h.dD)().isMobile,
                    n = (0, a.useState)({ scrollTop: 0, isCollapse: !1 }),
                    o = n[0],
                    i = n[1];
                return (0, a.useEffect)((function() {
                    if (!t) {
                        var e = (0, Me.P2)((function(e) {
                            var t = document.documentElement.scrollTop;
                            t > o.scrollTop ? o.isCollapse = !0 : o.isCollapse = !1, o.scrollTop = t, i(function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {};
                                    t % 2 ? Re(Object(n), !0).forEach((function(t) {
                                        (0, d.Z)(e, t, n[t])
                                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Re(Object(n)).forEach((function(t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t)) }))
                                }
                                return e
                            }({}, o))
                        }), 200);
                        return window.addEventListener("scroll", e),
                            function() { window.removeEventListener("scroll", e) }
                    }
                }), [t]), (0, l.jsx)("div", { className: v()(Pe().header, (0, d.Z)({}, Pe().collapse, o.isCollapse)), children: t ? (0, l.jsx)(Ze, {}) : (0, l.jsx)(Be, {}) })
            }
            var ze = n(2691),
                We = n(8738),
                Ge = n(7125),
                Ve = n(9801),
                Ke = n(7916),
                qe = [{ name: "github", icon: "Github-white.svg", link: "https://github.com/cyberconnecthq/js-cyberconnect" }, { name: "twitter", icon: "Twitter-white.svg", link: "https://twitter.com/CyberConnectHQ" }, { name: "mirror", icon: "Mirror.svg", link: "https://mirror.xyz/cyberlab.eth/j4u2JeUYaRJfHfWENGWqmBiKAJlMaZDoZbwN3_xXaUE" }, { name: "discord", icon: "Discord-white.svg", link: "https://discord.com/invite/bYJ3cB7bbC" }],
                Ye = [{ title: "Developer Center", links: [{ title: "API Docs", url: "https://docs.cyberconnect.me" }, { title: "Showcase", url: "https://docs.cyberconnect.me/overview/build-with-cyberconnect/#idea-pool" }, { title: "Community", url: "https://docs.cyberconnect.me/overview/community/" }] }, { title: "Products", links: [{ title: "ETH Profile", url: "https://app.cyberconnect.me/plaza" }, { title: "SOL Profile", url: "https://sol.cyberconnect.me/" }, { title: "CyberGraph", url: "https://graph.cyberconnect.me/" }] }, { title: "About", links: [{ title: "Join Us", url: "https://cyberconnect.notion.site/Careers-CyberConnect-6462206a41d44c29bc32c92044d8d008" }, { title: "Build with Us", url: "https://cyberconnect.typeform.com/to/KdBTNEwl" }, { title: "Branding Assets", url: "https://cyberconnect.notion.site/Branding-Assets-92fa2d00e1224973ae79ea3c72bff4a6" }] }, { title: "Community", links: [{ title: "Social Portal", url: "https://web3social.xyz/" }, { title: "GitHub", url: "https://github.com/cyberconnecthq/js-cyberconnect" }, { title: "Twitter", url: "https://twitter.com/CyberConnectHQ" }, { title: "Mirror", url: "https://mirror.xyz/cyberlab.eth/j4u2JeUYaRJfHfWENGWqmBiKAJlMaZDoZbwN3_xXaUE" }, { title: "Discord", url: "https://discord.com/invite/bYJ3cB7bbC" }] }],
                He = n(3106),
                Je = n.n(He),
                Qe = function(e) { var t = e.data; return (0, l.jsx)("a", { href: t.link, target: "_blank", title: t.name, children: (0, l.jsx)("div", { className: Je().metaIcon, children: (0, l.jsx)(u.default, { src: "/assets/icons/".concat(t.icon), layout: "fill", alt: t.name }) }) }) },
                Xe = function() { return (0, l.jsx)("div", { className: Je().linkMaps, children: Ye.map((function(e) { return (0, l.jsxs)("div", { className: Je().linkSection, children: [(0, l.jsx)("h3", { children: e.title }), e.links.map((function(e) { return (0, l.jsx)(ze.default, { href: e.url, children: (0, l.jsx)("a", { target: "_blank", children: e.title }) }, e.title) }))] }, e.title) })) }) },
                $e = function() {
                    var e = (0, a.useState)(void 0),
                        t = e[0],
                        n = e[1],
                        o = function(e) { return e === t };
                    return (0, l.jsx)(We.Z, {
                        sx: { width: "100%", bgcolor: "#000", p: 0 },
                        component: "nav",
                        "aria-labelledby": "nested-list-subheader",
                        children: Ye.map((function(e, a) {
                            return (0, l.jsxs)("div", {
                                children: [(0, l.jsxs)(Ge.Z, {
                                    disableRipple: !0,
                                    disableTouchRipple: !0,
                                    onClick: function() {
                                        var e;
                                        n((e = a) === t ? void 0 : e)
                                    },
                                    sx: { padding: 0 },
                                    children: [(0, l.jsx)(Ve.Z, { primary: e.title, sx: { ">span": { fontSize: "2.4rem", fontFamily: "Outfit", fontWeight: 700 } } }), o(a) ? (0, l.jsx)("span", { style: { fontSize: "4rem", fontWeight: 700 }, children: "-" }) : (0, l.jsx)("span", { style: { fontSize: "4rem", fontWeight: 700 }, children: "+" })]
                                }), (0, l.jsx)(Ke.Z, { in: o(a), timeout: "auto", unmountOnExit: !0, children: (0, l.jsx)(We.Z, { component: "div", disablePadding: !0, children: e.links.map((function(e) { return (0, l.jsx)(Ge.Z, { disableRipple: !0, disableTouchRipple: !0, sx: { p: 0 }, onClick: function() { return window.open(e.url) }, children: (0, l.jsx)(Ve.Z, { primary: e.title, sx: { ">span": { fontSize: "2.4rem", fontFamily: "Outfit", color: "rgba(256,256,256,0.7)", fontWeight: 500 } } }) }, e.title) })) }) })]
                            }, e.title)
                        }))
                    })
                },
                et = function() { return (0, h.dD)().isMobile ? (0, l.jsx)($e, {}) : (0, l.jsx)(Xe, {}) };

            function tt() { return (0, l.jsx)("section", { className: Je().footer, children: (0, l.jsxs)("div", { className: Je().main, children: [(0, l.jsx)(et, {}), (0, l.jsxs)("div", { className: Je().footerLogo, children: [(0, l.jsx)("div", { className: Je().logo, children: (0, l.jsx)(u.default, { src: "/assets/logo-white.svg", layout: "fill" }) }), (0, l.jsx)("div", { className: Je().metaLinks, children: qe.map((function(e) { return (0, l.jsx)(Qe, { data: e }, e.name) })) })] }), (0, l.jsx)("div", { className: Je().copyright, children: "\xa9 2021-2022 CyberConnect. Все права защищены." })] }) }) }
            var nt = n(2063),
                at = n.n(nt),
                ot = function(e) {
                    var t = e.children,
                        n = e.className,
                        a = void 0 === n ? "" : n;
                    return (0, l.jsx)("section", { className: v()(at().sectionLayout, (0, d.Z)({}, a, a)), children: t })
                },
                it = n(9446),
                rt = n.n(it),
                st = function() { return (0, l.jsx)("div", { className: rt().slogan, children: (0, l.jsxs)("h1", { children: [(0, l.jsxs)("span", { children: ["ПОДКЛЮЧИМ"] }), (0, l.jsx)("br", {}), (0, l.jsxs)("span", { children: ["КАЖДОГ", (0, l.jsxs)("span", { children: [(0, l.jsx)(_, { id: O, className: rt().o }), ""] }), "\xa0", (0, l.jsx)("span", { className: rt().linearFont, children: "К WEB3" })] })] }) }) },
                lt = function() { return (0, l.jsx)("div", { className: rt().slogan, children: (0, l.jsxs)("h1", { children: [(0, l.jsx)("span", { children: "ПОДКЛЮЧИМ" }), (0, l.jsx)("br", {}), (0, l.jsxs)("span", { children: ["КАЖДОГО", (0, l.jsx)("br", {}), (0, l.jsx)("span", { children: "К" }), "\xa0", (0, l.jsx)("span", { className: rt().linearFont, children: "Web3" })] })] }) }) };

            function ct() { var e = (0, h.dD)().isMobile; return (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(ot, { className: rt().welcomePage, children: (0, l.jsxs)("div", { className: rt().safeArea, children: [(0, l.jsxs)("div", { className: rt().sloganWrapper, children: [e ? (0, l.jsx)(lt, {}) : (0, l.jsx)(st, {}), (0, l.jsx)(c, {}), (0, l.jsx)("div", { className: rt().desc, children: "CYBERCONNECT - это децентрализованный social graph протокол, который позволяет разработчикам децентрализованных приложений персонализировать их и расширять возможности пользователей." }), (0, l.jsxs)("div", { className: rt().buttonWrapper, children: [(0, l.jsx)("button", { className: rt().whiteBtn, onClick: function() { return window.open("https://pancakeswap.finance/swap?outputCurrency=0xffA2b2895769f8C7DCee5A63dC6aEE07aEc67237") }, "btn-type": "border", children: "КУПИТЬ ТОКЕН" }), (0, l.jsx)("button", { onClick: function() { return window.open("https://tradingchart.bar/CYB") }, "btn-type": "primary", children: "ГРАФИК" })] })] }), e && (0, l.jsx)("div", { style: { position: "absolute", width: "2.4rem", height: "6rem", bottom: "12rem", left: "calc(50% - 1.5rem)" }, children: (0, l.jsx)(u.default, { src: "/assets/arrow-down.svg", layout: "fill" }) })] }) }), (0, l.jsx)(Le, { active: !e })] }) }
            var dt = n(9300),
                ut = n.n(dt),
                ht = [{ title: "ETH Profile", url: "https://app.cyberconnect.me/plaza" }, { title: "SOL Profile", url: "https://sol.cyberconnect.me/plaza" }];

            function pt() {
                var e = (0, h.dD)().isMobile,
                    t = (0, a.useState)(0),
                    n = t[0],
                    o = t[1];
                return (0, l.jsxs)(ot, { className: ut().demoSection, children: [(0, l.jsx)("div", { className: ut().title, children: (0, l.jsxs)("div", { children: [(0, l.jsx)("span", { className: ut().tag, children: "PRODUCTS" }), (0, l.jsx)("h1", { children: "Try Demos" })] }) }), (0, l.jsx)("div", { className: ut().main, children: ht.map((function(t, a) { return (0, l.jsx)(h.Ze, { width: "100%", ratio: e ? .58 : 1, children: (0, l.jsxs)("a", { href: t.url, target: "_blank", onMouseOver: function() { return o(a) }, className: v()(ut().demoCard, (0, d.Z)({}, ut().hover, e || n === a)), children: [(0, l.jsx)("h2", { children: t.title }), (0, l.jsx)("div", { className: ut().iconWrapper, children: (0, l.jsx)(u.default, { src: "/assets/arrow-black-horizonal.svg", width: 50, height: 20 }) })] }) }, t.url) })) })] })
            }
            var gt = n(752),
                mt = [{ title: "CyberLetter Issue#1: Season\u2019s Greetings and End of Year Recap", content: "It's that time of the year again: chilly wind and mulled wine, sparkling lights and wool socks, letters and songs, and we turn heart and soul to the dearest ones in life. Well, tbh it never feels like winter here at the HQ - the hustle never stops, and things move fast.But we just would like to take the chance, and pause for a bit, to reflect on...", date: "12/25/2021", url: "https://mirror.xyz/cyberlab.eth/m0oafTJhjCzkgdgPMowT54A6SXaRB-tOq1yVUbwgCjg" }, { title: "CyberLetter Issue#2: Co-defining 2022 & Updates", content: "Happy 2022 everyone! Hope you\u2019ve all had a great holiday. 2022 - we still find this number a bit hard to get our heads around, but it is here and we are well into another cycle of time.Time as a concept is fascinating but elusive. We haven\u2019t yet reached any consensus if it really exists or if it is absolute, but...", date: "01/13/2022", url: "https://mirror.xyz/cyberlab.eth/3-Nxce3wOhi6m1yYBcwtHB0vGkqOjFsQNNC8I7lMjLw" }, { title: "CyberLetter Issue#3: CyberConnect on Solana & Updates", content: "Joining the Solana ecosystem is by far the most important strategic move for CyberConnect. We\u2019ve witnessed the incredible development of Solana in the past year, and we believe in the great prospect for Solana as a solid infrastructure of Web3. Powerful for developers. Fast for everyone. ", date: "01/31/2022", url: "https://mirror.xyz/cyberlab.eth/1O_aQogxq1kN-EToRo1yRrNmJHNoEVu3cqRl8AnArf8" }, { title: "CyberLetter Issue#4: ETHDenver & Dev Community Updates", content: "An estimated 10,000 visitor inflow into Denver puts this at the top of my all-time conference list in terms of size and sheer talent. Every single day, I picked the brains of incredibly bright and kind people from all kinds of backgrounds - Web2 devs looking to get into Web3, artists with published records on Catalogue, OG whales with risk appetites of sharks\u2019 who got into the space in 2011, veteran devs and founders of foundational Web3 infrastructure, undergrad kids launching their own Web3 project even though they\u2019re not old enough to drink\u2026", date: "02/24/2022", url: "https://mirror.xyz/cyberlab.eth/ysvXMEA9hoblipN8uWZvKen1JNm40rtyXjdFJMB9yOY" }, { title: "CyberLetter Issue#5: Community Updates", content: "Hi there!\xa0CyberConnect is a decentralized protocol for constructing blockchain address-based social graphs. We democratize social connections and make social graphs self-sovereign, portable, composable, blockchain-agnostic, and contextually meaningful. If you like what we are building, make sure to play around with our website, subscribe to this newsletter, check out our Mirror, and follow us on\xa0Twitter.", date: "05/03/2022", url: "https://mirror.xyz/cyberlab.eth/MbAGOhwq9q8jsN00fneRUDePr1YTfBz1HcnK7BlvVlg" }, { title: "CyberLetter Issue#6: Series A Funding and Link3", content: "Hey Gang! We want to take this opportunity to express our gratitude for your faith in us, this community, and our mission. This has been one of the most incredible few weeks for our team as we\u2019ve achieved some major milestones, launched a new product, expanded the team, and grown our community manifold! We couldn\u2019t have done this without you and we are so thrilled to continue on our journey to enabling meaningful social connections on web3.", date: "05/28/2022", url: "https://mirror.xyz/cyberlab.eth/rBrsYjCf1MKhRLwzyYis-icgx0pfoWZDr8MFVoBDY2E" }, { title: "CyberLetter Issue#7: Bi-Weekly Community Updates", content: "CyberConnect is a decentralized social graph protocol that helps developers bootstrap network effects and build powerful social dApps while returning data ownership back to users. Through our publicly accessible protocol, we are democratizing social connections and making social graphs self-sovereign, portable, composable, blockchain-agnostic, and contextually meaningful.", date: "06/17/2022", url: "https://mirror.xyz/cyberlab.eth/-wql2diBfI9hIGokpbo_GhCLtU7irMWYepCrOoBeM50" }, { title: "CyberLetter Issue#8: Bi-Weekly Community Updates", content: "CyberConnect is a decentralized social graph protocol that helps developers bootstrap network effects and build powerful social dApps while returning data ownership back to users. Through our publicly accessible protocol, we are democratizing social connections and making social graphs self-sovereign, portable, composable, blockchain-agnostic, and contextually meaningful.", date: "07/6/2022", url: "https://mirror.xyz/cyberlab.eth/m3D0fzM5e5qQAZTWGdIhaKUOH99QLESaQw7VQtQdbC0" }, { title: "CyberLetter #9: Notable New Partners & Dev Center Update", content: "CyberConnect is a decentralized social graph protocol that helps developers bootstrap network effects and build powerful social dApps while returning data ownership back to users. Through our publicly accessible protocol, we are democratizing social connections and making social graphs self-sovereign, portable, composable, blockchain-agnostic, and contextually meaningful.", date: "07/16/2022", url: "https://mirror.xyz/cyberlab.eth/ixjsTAfDv2P_nvHm-xy1aTw2pPKlmVQnkCLYtWugdIg" }],
                ft = n(9077),
                _t = n.n(ft);

            function bt() { return (0, l.jsxs)(ot, { className: _t().newsSection, children: [(0, l.jsx)("span", { className: _t().tag, children: "CYBERLETTER" }), (0, l.jsxs)("div", { className: _t().newsMain, children: [(0, l.jsx)("h1", { className: _t().title, children: "News" }), (0, l.jsxs)("ul", { className: _t().newsList, children: [(0, gt.Z)(mt).reverse().slice(0, 3).map((function(e) { return (0, l.jsx)("a", { href: e.url, target: "_blank", children: (0, l.jsxs)("li", { className: _t().newsCard, children: [(0, l.jsx)("h2", { className: _t().newsTitle, children: e.title }), (0, l.jsx)("div", { className: _t().newsContent, children: e.content }), (0, l.jsx)("div", { className: _t().newsDate, children: e.date })] }) }, e.url) })), (0, l.jsx)("button", { "btn-type": "primary", onClick: function() { window.open("https://web3social.xyz/") }, children: "View more on Web3 social portal" })] })] })] }) }
            var wt = n(2237),
                xt = n.n(wt),
                yt = [{ url: "https://multicoin.capital/", name: "Multicoin", logo: "Multicoin Capital.png", height: 45 }, { url: "https://www.animocabrands.com/", name: "Animoca Brands", logo: "Animoca Brands.png", height: 55 }, { url: "https://www.sky9capital.com/", name: "sky9", logo: "sky9capital-b.png", height: 45 }, { url: "https://delphidigital.io/ventures", name: "Delphi Ventures", logo: "Delphi Ventures.png", height: 15 }, { url: "https://protocol.ai/", name: "Protocol Labs", logo: "ProtocolLabs.png", height: 45 }, { url: "https://iosg.vc/", name: "IOSG", logo: "IOSG.png", height: 60 }, { url: "https://tribecap.co/", name: "Tribe Capital", logo: "TRIBE CAPITAL.png", height: 17 }, { url: "https://www.spartangroup.io/index.html", name: "spartan group", logo: "spartan group.png", height: 50 }, { url: "https://polygonstudios.com/", name: "Polygon Stiduos", logo: "PolygonStiduos.png", height: 50 }, { url: "https://www.latticecap.co/", name: "Lattice", logo: "Lattice.png", height: 22 }, { url: "https://www.folius.ventures/", name: "folius ventures", logo: "folius ventutes.png", height: 36 }, { url: "https://www.hashed.com/", name: "hashed", logo: "hashed.png", height: 28 }, { url: "https://www.ggvc.com/", name: "GGV", logo: "GGV_capital_logo_white.png", height: 20 }, { url: "https://www.ambergroup.io/", name: "Amber", logo: "Amber.png", height: 38 }, { url: "https://draperdragon.com/", name: "draper dragon", logo: "DraperDragon_02_Black.png", height: 30 }, { url: "https://www.uphonestcapital.com/#/", name: "uphonest", logo: "UpHonestCapital_logo1.png", height: 35 }, { url: "http://www.7xvc.com/", name: "SevenX", logo: "SevenX.png", height: 35 }, { url: "https://www.gate.io/", name: "gate.io", logo: "Gateio.png", height: 45 }, { url: "https://mask.io/", name: "mask", logo: "mask.png" }, { url: "https://smrtilab.xyz/", name: "smrti lab", logo: "smrti lab.png", height: 55 }, { url: "https://www.incecap.com/", name: "INCE", logo: "ince.png", height: 55 }, { url: "https://hk.linkedin.com/company/zoo-capital?trk=ppro_cprof", name: "zoocap", logo: "zoo.png", height: 25 }, { url: "https://www.streamingfast.io/", name: "streamingfast", logo: "streamingfast.png", height: 40 }];

            function vt() { return (0, l.jsx)("section", { className: xt().backer, children: (0, l.jsxs)("div", { className: xt().main, children: [(0, l.jsx)("div", { className: xt().tag, children: "CYBERCONNECT" }), (0, l.jsx)("h1", { className: xt().title, children: "Партнеры" }), (0, l.jsx)("div", { className: xt().backerList, children: yt.map((function(e) { return (0, l.jsx)("div", { style: { height: e.height }, children: (0, l.jsx)("a", { href: e.url, target: "_blank", rel: "noopener noreferrer", children: (0, l.jsx)(u.default, { src: "/assets/logos/".concat(e.logo), layout: "fill", objectFit: "contain", alt: e.name, lazyBoundary: "800px", quality: 40 }) }, e.name) }) })) })] }) }) }
            var Nt, jt = n(5296);
            ! function(e) { e.all = "#All", e.social = "#Social", e.nft = "#NFT", e.identity = "#Identity", e.tool = "#Tool", e.defi = "#DeFi", e.wallet = "#Wallet", e.game = "#Game", e.infra = "#Infra" }(Nt || (Nt = {}));
            var kt = [{ project: "WombatExchange", logo: "/assets/dataNetwork/WombatExchange.svg", blockchain: jt.lf.Bsc, tags: [Nt.all, Nt.defi], content: "Обменивайте стейблкоины            с минимальным            проскальзыванием и            делайте ставки с            максимальной            доходностью. Всего одна стабильная валюта, чтобы зарабатывать. ", link: "https://www.wombat.exchange/" }, { project: "Space ID", logo: "data:image/png;base64,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", blockchain: jt.lf.Bsc, tags: [Nt.all, Nt.identity], content: "SPACE ID разрабатывает универсальную службу каталогов с помощью одного Oracle, который беспрепятственно связывает и координирует людей, активы и dApps в блокчейнах.", link: "https://space.id/" }, { project: "NFTGo", logo: "/assets/dataNetwork/NFTGO.svg", blockchain: jt.lf.Eth, tags: [Nt.all, Nt.nft, Nt.tool], content: "Лучшая платформа по NFT- аналитике.", link: "https://nftgo.io/" }, { project: "Light.so", logo: "/assets/dataNetwork/Light.png", blockchain: jt.lf.Eth, tags: [Nt.all, Nt.social], content: "Light.so это социальная сеть в Метавселенной, в которо пользователи открывают для себя новые связи, следят за другими и делятся собственным опытом. ", link: "https://light.so" }, { project: "Grape Protocol", logo: "/assets/dataNetwork/Grape.png", blockchain: jt.lf.Sol, tags: [Nt.all, Nt.social, Nt.nft], content: "Grape Protocol - набор инструментов для создания сообществ на базе токенов на Solana. ", link: "https://grape.art/" }, { project: "Hello World", logo: "/assets/dataNetwork/helloWorld.png", blockchain: jt.lf.Eth, tags: [Nt.all, Nt.social], content: "Hello World - вебприложение для социальной коммуникации, которое дает пользователям возможность открыть для себя сеть Etherium. ", link: "https://helloworld.social/" }, { project: "zkLink", logo: "/assets/dataNetwork/zkLink.png", blockchain: jt.lf.Multichain, tags: [Nt.all, Nt.defi], content: "Безопасная, унифицированная мультичейн сеть уровня L2 на базе революционной технологии zeroknowledge. ", link: "https://zk.link/" }, { project: "Project Galaxy", logo: "/assets/dataNetwork/Project Galaxy.png", blockchain: jt.lf.Eth, tags: [Nt.all, Nt.identity], content: "Project Galaxy - это самая большая в мире сеть передачи передачи данных в WEB3. ", link: "https://galaxy.eco/" }, { project: "Unipass", logo: "/assets/dataNetwork/Unipass.png", blockchain: jt.lf.Nervos, tags: [Nt.all, Nt.identity], content: "UniPass - универсальная система криптоидентичности. Ваш пропуск в метавселенную и крипта мир.", link: "https://www.unipass.id/" }, { project: "TreasureLand", logo: "/assets/dataNetwork/Treasureland.png", blockchain: jt.lf.Bsc, tags: [Nt.all, Nt.nft], content: "Безопасная, унифицированная мультичейн сеть уровня L2 на базе революционной технологии zeroknowledge. ", link: "https://treasureland.market/" }, { project: "Convo Space", logo: "/assets/dataNetwork/Convo.png", blockchain: jt.lf.IPFS, tags: [Nt.all, Nt.tool, Nt.identity], content: "Convo предлагает инфраструктуру и различные инструменты для создания Социальных Платформ с высоким уровнем компонуемости..", link: "https://theconvo.space/" }, { project: "NFTSCAN", logo: "/assets/dataNetwork/NFTScan.png", blockchain: jt.lf.Eth, tags: [Nt.all, Nt.tool, Nt.nft], content: "NFTSCAN - профессиональный инструмент для аналитики NFT-активов и платформа открытых данных.", link: "https://www.nftscan.com/" }, { project: "Mask", logo: "/assets/dataNetwork/Mask.png", blockchain: jt.lf.Eth, tags: [Nt.all, Nt.social, Nt.tool, Nt.identity], content: "Mask Network обеспечивает приватность и другие преимущества WEB3 для таких социальных медиа, как Facebook & Twitter, используя расширение для браузера с открытым исходным кодом.", link: "https://mask.io/" }, { project: "Ceramic", logo: "/assets/dataNetwork/Ceramic.png", blockchain: jt.lf.IPFS, tags: [Nt.all, Nt.identity], content: "Ceramic - децентрализованная сеть, обеспечивающая неограниченную компонуемую инфраструктуру для приложений в WEB3.", link: "https://ceramic.network/" }, { project: "Bress", logo: "/assets/dataNetwork/Bress.png", blockchain: jt.lf.Arweave, tags: [Nt.all, Nt.social], content: "Bress.xyz - это децентрализованная социальная платформа на Mirror.xyz.", link: "https://bress.xyz/" }, { project: "Bonfida", logo: "/assets/dataNetwork/Bonfida.png", blockchain: jt.lf.Sol, tags: [Nt.all, Nt.identity], content: "Bonfida предлагает уникальные домены на Solana.", link: "http://bonfida.org/" }, { project: "SphinxUP", logo: "/assets/dataNetwork/SphinxUp.png", blockchain: jt.lf.Eth, tags: [Nt.all, Nt.tool, Nt.nft], content: "SphinxUP - ПО для наиболее эффективного NFT-трейдинга.", link: "https://sphinxup.com/" }, { project: "Roci Finance", logo: "/assets/dataNetwork/Roci Finance.png", blockchain: jt.lf.Eth, tags: [Nt.all, Nt.defi], content: "Новый мультичейн DeFi примитив для различных видов крипто-лендинга.", link: "https://roci.fi/" }, { project: "Clover", logo: "/assets/dataNetwork/Clover.png", blockchain: jt.lf.Multichain, tags: [Nt.all, Nt.wallet, Nt.tool], content: "Clover обеспечивает мультичейн, кроссчейн и мультиактивы", link: "https://clv.org/" }, { project: "Inspect", logo: "/assets/dataNetwork/Inspect.png", blockchain: jt.lf.Eth, tags: [Nt.all, Nt.tool, Nt.nft], content: "Inspect - расширение для Chrome, которое помогает вам узнать больше о NFTs прямо из вашей ленты в Twitter.", link: "https://go.nftinspect.io/" }, { project: "Meson Network", logo: "/assets/dataNetwork/Meson Network.png", blockchain: jt.lf.Multichain, tags: [Nt.all, Nt.infra], content: "Meson Network - трейдинговая платформа пропускной способности, основанная на блокчейне.", link: "https://meson.network/" }, {
                    project: "Etherloop",
                    logo: "/assets/dataNetwork/Etherloop.png",
                    blockchain: jt.lf.Eth,
                    tags: [Nt.all, Nt.social],
                    content: "Etherloop - социальная            сеть в web приложении,             которое позволяет             пользователям             соединяться с адресами             рядом и быть в курсе             баланса, токенов и пр.",
                    link: "https://etherloop.moonlabs.xyz/"
                }, { project: "ShowMe", logo: "/assets/dataNetwork/ShowMe.png", blockchain: jt.lf.Eth, tags: [Nt.all, Nt.nft, Nt.social], content: "ShowMe - социальная сеть в WEB3 с                возможностью подписки                на NFT.", link: "https://showme.fan/" }, { project: "RSS3", logo: "/assets/dataNetwork/rss3.png", blockchain: jt.lf.Multichain, tags: [Nt.all, Nt.social], content: "RSS3 - это открытый информационный                синдикационный протокол,                созданный для поддержки                эффективного и                децентрализованного                информационного                рапредления", link: "https://rss3.io/" }, { project: "Dialect", logo: "/assets/dataNetwork/Dialect.png", blockchain: jt.lf.Sol, tags: [Nt.all, Nt.social, Nt.tool], content: "Dialect - первый протокол для смартобщения - динамичные,                компонуемые dApp                 уведомления и чат между                кошельками.", link: "https://www.dialect.to/" }, { project: "Metaforo", logo: "/assets/dataNetwork/Metaforo.png", blockchain: jt.lf.Multichain, tags: [Nt.all, Nt.social, Nt.tool], content: "Metaforo - собственная платформа сообщества                Web3.", link: "https://metaforo.io/" }, { project: "gm.xyz", logo: "/assets/dataNetwork/gm.xyz.png", blockchain: jt.lf.Eth, tags: [Nt.all, Nt.social], content: "Дает возможность создания crypto-native,                дцентрализованного                сообщества от лица                пользователя.", link: "https://gm.xyz/" }, { project: "CreDa", logo: "/assets/dataNetwork/CreDa.png", blockchain: jt.lf.Eth, tags: [Nt.all, Nt.defi], content: "Первая надежная система кредитных рейтингов для                Web3 и способ                коммуникации между ончейн и традиционной                финансовой системой.", link: "https://creda.app/" }, { project: "NeroVerse", logo: "/assets/dataNetwork/NeroVerse.png", blockchain: jt.lf.Sol, tags: [Nt.all, Nt.game], content: "NeroVerse - метавселенная, связанная                с играми, коллекционными                предметами и                виртуального опыта,                охватывающая несколько                блокчейнов. ", link: "https://www.neroverse.com/" }, { project: "Realy", logo: "/assets/dataNetwork/Realy.png", blockchain: jt.lf.Sol, tags: [Nt.all, Nt.game, Nt.nft], content: "Фантастическая и первая в своем роде метавселенная уличной культуры.", link: "https://realy.pro/" }, { project: "Login.xyz", logo: "/assets/dataNetwork/Login.xyz.png", blockchain: jt.lf.Eth, tags: [Nt.all, Nt.identity], content: "Вход с помощью Ethereum это новая форма аутентификации, которая позволяет пользователям контролировать свою цифровую идентификацию с помощью учетной записи Ethereum. ", link: "https://login.xyz/" }, { project: "Monaco", logo: "/assets/dataNetwork/Monaco.png", blockchain: jt.lf.Eth, tags: [Nt.all, Nt.social, Nt.nft], content: "Децентрализованная социальная сеть в WEB3.", link: "https://monaconft.io/" }, { project: "MetaJam", logo: "/assets/dataNetwork/MetaJam.png", blockchain: jt.lf.Eth, tags: [Nt.all, Nt.social, Nt.tool], content: "Исследуйте, финансируйте, создавайте web3 продукты и найдите свое место в новой парадигме.", link: "https://www.metajam.studio/" }, { project: "BovineVerse", logo: "/assets/dataNetwork/BovineVerse.png", blockchain: jt.lf.Bsc, tags: [Nt.all, Nt.game], content: "Fi+ игровая платформа будущего в метавселенной WEB3.", link: "https://www.bovine-verse.games/#/" }, { project: "Metascan", logo: "/assets/dataNetwork/Metascan.png", blockchain: jt.lf.Multichain, tags: [Nt.all, Nt.social, Nt.nft, Nt.tool], content: "Ресурс №1 c инструментами для NFT Twitter аналитики в WEB3.", link: "https://metascan.pro/" }],
                Et = n(2843),
                Ct = n.n(Et),
                It = "auto",
                St = .78,
                At = function(e) {
                    var t = e.isMobile,
                        n = e.children,
                        a = e.active;
                    return t ? n : (0, l.jsx)("div", { className: v()(Ct().slideInAnimation, (0, d.Z)({}, Ct().active, a)), children: n })
                },
                Lt = Object.values(Nt),
                Dt = Object.values(h.lf),
                Tt = function(e) {
                    var t = e.onChange,
                        n = e.value;
                    return (0, l.jsx)("div", { className: Ct().tagSwitcher, onClick: function(e) { e.target.id && e.target.id !== n && t(e.target.id) }, children: Lt.map((function(e, t) { return (0, l.jsx)("button", { className: "".concat(Ct().filterTag, " ").concat(e === n ? Ct().activeFilterTag : ""), id: e, children: e }, e) })) })
                },
                Pt = function(e) {
                    var t = e.onChange,
                        n = e.value;
                    return (0, l.jsx)("div", { className: Ct().tagSwitcher, onClick: function(e) { e.target.id && e.target.id !== n && t(e.target.id) }, style: { marginTop: "10px" }, children: Dt.map((function(e, t) { return (0, l.jsxs)("button", { className: "".concat(Ct().filterTag, " ").concat(e === n ? Ct().activeFilterTag : ""), style: { display: "flex", alignItems: "center", justifyContent: "center" }, id: e, children: ["All" != e ? (0, l.jsx)("img", { src: "/assets".concat(jt.LM[e]), width: "18px", height: "18px", style: { marginRight: "5px", pointerEvents: "none" } }) : null, e.toUpperCase().replace("BSC", "BNB CHAIN")] }, e) })) })
                },
                Ot = function(e) { var t = e.dataItem; return (0, l.jsxs)("a", { className: Ct().ecoCard, href: t.link, target: "_blank", children: [(0, l.jsxs)("div", { className: Ct().cardContent, children: [(0, l.jsx)(h.T, { className: Ct().cardAvatar, src: t.logo || "/assets/grains.svg", badge: h.lf[t.blockchain] }), (0, l.jsx)("h3", { className: Ct().cardTitle, children: t.project }), (0, l.jsx)("div", { className: Ct().cardDesc, title: t.content, children: t.content })] }), (0, l.jsx)("div", { className: Ct().cardFooter, children: t.tags.slice(1).map((function(e, t) { return (0, l.jsx)("span", { children: e }, t) })) })] }) },
                Mt = function(e) {
                    var t = e.chain,
                        n = e.tag,
                        o = e.setHasmore,
                        i = e.isOpen,
                        r = e.collapseList,
                        s = (0, h.dD)().isMobile,
                        c = (0, a.useState)(!1),
                        u = c[0],
                        p = c[1],
                        g = (0, a.useMemo)((function() { return (0, gt.Z)(kt).filter((function(e) { return e.tags.includes(n) })).filter((function(e) { return "All" == t ? e : e.blockchain == t || "Multichain" == e.blockchain })).map((function(e, t) { return (0, l.jsx)(h.Ze, { width: "100%", ratio: s ? It : St, children: (0, l.jsx)(Ot, { dataItem: e }) }, e.project) })) }), [n, s, u, t]);
                    return (0, a.useEffect)((function() { g.length > 9 ? o(!0) : o(!1), r(), p(!0) }), [g]), (0, l.jsxs)(At, { isMobile: s, active: u, children: [(0, l.jsx)("div", { className: Ct().body, children: g.slice(0, 9) }), (0, l.jsx)(Ke.Z, { className: v()(Ct().body, Ct().collapseBody, (0, d.Z)({}, Ct().isCollapsed, !i)), in: i, children: g.slice(9) })] })
                },
                Rt = function(e) {
                    var t = e.setHasmore,
                        n = e.isOpen,
                        o = e.collapseList,
                        i = (0, a.useState)(Nt.all),
                        r = i[0],
                        s = i[1],
                        c = (0, a.useState)(h.lf.All),
                        d = c[0],
                        u = c[1];
                    return (0, l.jsxs)("div", { className: Ct().ecosystemContent, children: [(0, l.jsx)(Tt, { onChange: s, value: r }), (0, l.jsx)(Pt, { onChange: u, value: d }), (0, l.jsx)(Mt, { tag: r, chain: d, setHasmore: t, isOpen: n, collapseList: o })] })
                };

            function Ft() {
                var e = (0, a.useState)(!1),
                    t = e[0],
                    n = e[1],
                    o = (0, a.useState)(!1),
                    i = o[0],
                    r = o[1];
                return (0, l.jsx)(ot, { className: Ct().ecosystemSection, children: (0, l.jsxs)("div", { className: Ct().main, children: [(0, l.jsx)("div", { className: Ct().tag, children: "CYBERCONNECT" }), (0, l.jsx)("h1", { className: Ct().title, children: "Экосистема" }), (0, l.jsx)("h6", { className: Ct().subTitle, children: "знакомьтесь с проектами в CYBERCONNECT" }), (0, l.jsx)(Rt, { setHasmore: n, isOpen: i, collapseList: function() { return r(!1) } }), t && (0, l.jsx)("button", { className: Ct().showMore, "btn-type": "primary", onClick: function() { r((function(e) { return !e })) }, children: i ? "СВЕРНУТЬ" : "ПОКАЗАТЬ БОЛЬШЕ" })] }) })
            }
            var Bt = n(9365),
                Zt = n.n(Bt),
                Ut = function(e) {
                    var t = e.text,
                        n = e.number,
                        o = (0, a.useState)(0),
                        i = o[0],
                        r = o[1],
                        s = (0, a.useRef)(null);
                    return (0, a.useEffect)((function() {
                        if (n) {
                            var e = new IntersectionObserver((function(e) { e.forEach((function(e) { e.isIntersecting && r(n) })) }), { root: null, rootMargin: "0px" });
                            return e.observe(s.current),
                                function() { e && e.unobserve(s.current), e && e.disconnect() }
                        }
                    }), [n]), (0, l.jsxs)("div", { className: Zt().protocolNumber, ref: s, children: [(0, l.jsx)(h.Bc, { className: Zt().number, to: i }), (0, l.jsx)("span", { className: Zt().text, children: t })] })
                },
                zt = function(e) {
                    var t = e.title,
                        n = e.users,
                        a = e.connections;
                    return (0, l.jsxs)("div", { className: Zt().ProtocalCard, children: [(0, l.jsx)("h2", { className: Zt().cardTitle, children: t }), (0, l.jsxs)("div", { className: Zt().content, children: [(0, l.jsx)(Ut, { text: "общее число пользователей", number: n }), (0, l.jsx)(Ut, { text: "кол-во подлючений", number: a })] })] })
                },
                Wt = function() { return (0, l.jsx)("div", { className: Zt().icon, children: (0, l.jsx)(u.default, { src: "/assets/fire.svg", width: 30, height: 30 }) }) },
                Gt = function() { return (0, l.jsx)("div", { className: Zt().icon, children: (0, l.jsx)(u.default, { src: "/assets/eth.svg", width: 30, height: 30 }) }) },
                Vt = function() { return (0, l.jsx)("div", { className: v()(Zt().icon, Zt().solIcon), children: (0, l.jsx)(u.default, { src: "/assets/sol.svg", width: 24, height: 24 }) }) };

            function Kt(e) {
                var t = function(e) { var t = q(q({}, me), e); return V.a(ve, t) }().data,
                    n = function(e) { var t = q(q({}, me), e); return V.a(ye, t) }().data;
                return (0, l.jsxs)(ot, { className: Zt().protocal, children: [(0, l.jsx)("div", { className: Zt().tag, children: "CYBERCONNECT" }), (0, l.jsx)("h1", { className: Zt().title, children: "В цифрах" }), (0, l.jsx)(zt, { users: ((null === t || void 0 === t ? void 0 : t.homePage.userCount) || 0) + ((null === n || void 0 === n ? void 0 : n.homePage.userCount) || 0), connections: ((null === t || void 0 === t ? void 0 : t.homePage.connectionCount) || 0) + ((null === n || void 0 === n ? void 0 : n.homePage.connectionCount) || 0), title: (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(Gt, {}), (0, l.jsx)(Vt, {}), "ETH & SOL"] }) }), (0, l.jsx)(zt, { users: ((null === t || void 0 === t ? void 0 : t.homePage.indexedUserCount) || 0) + ((null === n || void 0 === n ? void 0 : n.homePage.indexedUserCount) || 0), connections: ((null === t || void 0 === t ? void 0 : t.homePage.indexedConnectionCount) || 0) + ((null === n || void 0 === n ? void 0 : n.homePage.indexedConnectionCount) || 0), title: (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(Wt, {}), "Indexing & Recommendation"] }) })] })
            }
            var qt = n(2618),
                Yt = n.n(qt),
                Ht = n(654),
                Jt = function(e) {
                    var t = e.entries,
                        n = e.title;
                    return (0, l.jsxs)("div", { className: Yt().DataNetworkItem, children: [(0, l.jsx)("span", { className: Yt().itemTitle, children: n }), (0, l.jsx)("div", { className: Yt().iconList, children: null === t || void 0 === t ? void 0 : t.map((function(e, t) { return (0, l.jsxs)("div", { className: Yt().iconItem, children: [(0, l.jsx)("div", { className: Yt().icon, children: (0, l.jsx)(Ht.default, { src: e.src, width: "100%", height: "100%", alt: "" }) }), (0, l.jsx)("div", { className: Yt().name, children: e.name })] }, t) })) })] })
                },
                Qt = n(2409),
                Xt = n.n(Qt),
                $t = [{ src: "/assets/dataNetwork/Light.png", name: "Light" }, { src: "/assets/dataNetwork/Convo.png", name: "Convo" }, { src: "/assets/dataNetwork/Snapshot.png", name: "Snapshot" }],
                en = [{ src: "/assets/dataNetwork/Realy.png", name: "Realy" }, { src: "/assets/dataNetwork/StepN.png", name: "STEPN" }, { src: "/assets/dataNetwork/Highstreet.png", name: "Highstreet" }],
                tn = [{ src: "/assets/dataNetwork/Treasureland.png", name: "Treasureland" }, { src: "/assets/dataNetwork/Rarible.png", name: "Rarible" }, { src: "/assets/dataNetwork/Grape.png", name: "Grape" }],
                nn = [{ src: "/assets/dataNetwork/Ethereum.png", name: "Ethereum" }, { src: "/assets/dataNetwork/Solana.png", name: "Solana" }, { src: "/assets/dataNetwork/Polygon.png", name: "Polygon" }],
                an = [{ src: "/assets/dataNetwork/Context.png", name: "Context" }, { src: "/assets/dataNetwork/Foundation.png", name: "Foundation" }, { src: "/assets/dataNetwork/Rarible.png", name: "Rarible" }],
                on = [{ src: "/assets/dataNetwork/Arweave.png", name: "Arweave" }, { src: "/assets/dataNetwork/Ipfs.png", name: "IPFS" }, { src: "/assets/dataNetwork/Ceramic.png", name: "Ceramic" }],
                rn = function() {
                    var e = (0, a.useRef)(null),
                        t = (0, a.useRef)(null),
                        n = (0, a.useRef)(null),
                        o = (0, a.useState)(!1),
                        i = o[0],
                        r = o[1],
                        s = (0, h.dD)().isMobile,
                        c = { root: null, rootMargin: "0px 0px -50% 0px", thresholds: 1 };
                    return (0, a.useEffect)((function() {
                        var t = new IntersectionObserver((function(e) { e.forEach((function(e) { e.isIntersecting && r(!0) })) }), c);
                        return t.observe(e.current),
                            function() { t.unobserve(e.current), t.disconnect() }
                    }), []), (0, l.jsxs)("div", { className: Xt().dataNetworkGroup, children: [(0, l.jsxs)("div", { className: Xt().dataNetworkTitle, children: [(0, l.jsx)("div", { className: Xt().tag, children: "THE" }), "CyberConnect Передача Данных"] }), s ? (0, l.jsx)("div", { className: Xt().dataNetworkMobile, children: (0, l.jsx)("img", { src: "/assets/dataNetwork/dataNetwork.png", alt: "" }) }) : (0, l.jsxs)("div", { className: Xt().dataNetwork, children: [(0, l.jsxs)("div", { ref: t, className: v()(Xt().index, (0, d.Z)({}, Xt().startIndex, i)), children: [(0, l.jsx)("span", { className: Xt().indexTitle, children: "CyberConnect Передача Данных" }), (0, l.jsxs)("div", { className: Xt().indexList, children: [(0, l.jsx)("span", { className: Xt().indexItem, children: "Indexer" }), (0, l.jsx)("span", { className: Xt().indexItem, children: "Indexer" }), (0, l.jsx)("span", { className: Xt().indexItem, children: "Recommender" }), (0, l.jsx)("span", { className: Xt().indexItem, children: "Recommender" })] })] }), (0, l.jsx)("div", { className: v()(Xt().dataFlow, (0, d.Z)({}, Xt().startFlow, i)), children: (0, l.jsx)("div", { className: Xt().dataFlowLine, children: (0, l.jsx)(h.E6, { style: { height: "3px" }, backgroundImage: "linear-gradient(to right, #fff 50%, transparent 50%)" }) }) }), (0, l.jsxs)("div", { ref: e, className: v()(Xt().dapps, (0, d.Z)({}, Xt().startDapps, i)), children: [(0, l.jsx)("span", { className: Xt().title, children: "dApps" }), (0, l.jsxs)("div", { className: Xt().dappList, children: [(0, l.jsx)("div", { className: Xt().dappItem, children: (0, l.jsx)(Jt, { entries: $t, title: "social" }) }), (0, l.jsx)("div", { className: Xt().dappItem, children: (0, l.jsx)(Jt, { entries: en, title: "game" }) }), (0, l.jsx)("div", { className: Xt().dappItem, children: (0, l.jsx)(Jt, { entries: tn, title: "nft" }) })] })] }), (0, l.jsxs)("div", { ref: n, className: v()(Xt().source, (0, d.Z)({}, Xt().startSource, i)), children: [(0, l.jsx)("span", { className: Xt().title, children: "Social Graph Data Source" }), (0, l.jsxs)("div", { className: Xt().dappList, children: [(0, l.jsx)("div", { className: Xt().dappItem, children: (0, l.jsx)(Jt, { entries: nn, title: "on-chain" }) }), (0, l.jsx)("div", { className: Xt().dappItem, children: (0, l.jsx)(Jt, { entries: an, title: "off-chain" }) }), (0, l.jsx)("div", { className: Xt().dappItem, children: (0, l.jsx)(Jt, { entries: on, title: "Decentralized Storage" }) })] })] }), (0, l.jsxs)("div", { className: v()(Xt().bottomFlow, (0, d.Z)({}, Xt().startFlow, i)), children: [(0, l.jsx)("div", { className: Xt().leftLine, children: (0, l.jsx)(h.E6, { style: { height: "3px" } }) }), (0, l.jsx)("div", { className: Xt().rightLine, children: (0, l.jsx)(h.E6, { style: { height: "3px" } }) })] })] })] })
                },
                sn = n(8203),
                ln = n.n(sn),
                cn = function() { return (0, l.jsxs)("div", { className: ln().ensLine, children: [(0, l.jsx)("div", { className: ln().boldLine }), (0, l.jsx)("span", { children: "Cyberlab.eth" })] }) },
                dn = function() { var e = xe({ variables: { address: "0x148d59faf10b52063071eddf4aaf63a395f2d41c", first: 50 } }).data; return (0, l.jsx)("div", { className: ln().graphMotion, children: (0, l.jsxs)("div", { className: ln().avatarCC, children: [(0, l.jsx)("div", { className: ln().black, children: (0, l.jsxs)("div", { className: ln().logo, children: [(0, l.jsx)("img", { src: "/assets/logos/cyberconnect-avatar.svg", alt: "" }), (0, l.jsx)("div", { className: ln().ccEns, children: (0, l.jsx)(cn, {}) })] }) }), (0, l.jsxs)("div", { className: ln().followingsPipe, children: [(0, l.jsx)(h.E6, {}), (0, l.jsx)("div", { className: ln().followingsGraph, children: (0, l.jsx)(h.kJ, { data: e, className: ln().graph, deg: 137, parentDeg: 48, type: "following", label: "following" }) })] }), (0, l.jsxs)("div", { className: ln().followersPipe, children: [(0, l.jsx)(h.E6, {}), (0, l.jsx)("div", { className: ln().followersGraph, children: (0, l.jsx)(h.kJ, { className: ln().graph, type: "followers", deg: 109, parentDeg: 76, label: "followers" }) })] }), (0, l.jsxs)("div", { className: ln().friendsPipe, children: [(0, l.jsx)(h.E6, {}), (0, l.jsx)("div", { className: ln().friendsGraph, children: (0, l.jsx)(h.kJ, { data: e, className: ln().graph, type: "friends", deg: 107, parentDeg: 78, label: "friends" }) })] })] }) }) },
                un = n(2407),
                hn = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                pn = n(7778),
                gn = n(3997),
                mn = n.n(gn),
                fn = function(e) { return !!e && hn.test(e) };

            function _n() {
                var e = function(e) { var t = q(q({}, me), e); return G.D(be, t) }(),
                    t = (0, un.Z)(e, 1)[0],
                    n = (0, a.useState)(""),
                    o = n[0],
                    i = n[1],
                    r = (0, a.useState)(!1),
                    s = r[0],
                    c = r[1],
                    d = function() {
                        var e = (0, b.Z)(x().mark((function e() {
                            var n, a;
                            return x().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!fn(o)) { e.next = 5; break }
                                        return e.next = 3, t({ variables: { email: o }, context: { headers: { authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiY3liZXJjb25uZWN0IiwiZXhwIjoxNjUyNTc0MDA4LCJpYXQiOjE2NDc0MDgyNzgsImlzcyI6ImN5YmVyY29ubmVjdCJ9.vVSkxoHZNKGvCKSrO5pTHw04u0FggcBkPHywKFosVPg" } } });
                                    case 3:
                                        a = e.sent, "SUCCESS" === (null === (n = a.data) || void 0 === n ? void 0 : n.subscribe.result) && (c(!0), i(""));
                                    case 5:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function() { return e.apply(this, arguments) }
                    }();
                return (0, l.jsxs)(ot, { className: mn().emailSection, children: [(0, l.jsx)("div", { className: mn().main, children: (0, l.jsxs)("div", { className: mn().content, children: [(0, l.jsx)("div", { className: mn().emailInput, children: (0, l.jsx)("input", { value: o, placeholder: "Enter your email here", onChange: function(e) { return i(e.target.value) } }) }), (0, l.jsxs)("h1", { onClick: d, children: ["Subscribe", (0, l.jsx)("div", { className: mn().submitBtn, children: (0, l.jsx)(u.default, { src: "/assets/arrow-white-horizonal.svg", layout: "fill" }) })] })] }) }), (0, l.jsx)(pn.Z, { anchorOrigin: { vertical: "top", horizontal: "center" }, sx: { ".MuiPaper-root": { width: 200, textAlign: "center", color: "#fff", backgroundColor: "#000", borderRadius: "100px", display: "flex", justifyContent: "center", alignItems: "center", padding: 0, minWidth: "auto", marginTop: "100px", "@media(max-width: 750px)": { fontSize: "3rem" } } }, open: s, autoHideDuration: 3e3, message: "Subscribe Successfully", onClose: function() { return c(!1) } })] })
            }
            var bn = n(8705),
                wn = n.n(bn);

            function xn() { return (0, l.jsx)(ot, { className: wn().contactUsscetion, children: (0, l.jsxs)("div", { className: wn().hubLink, children: [(0, l.jsx)("span", { children: "Want to CyberConnect with us?" }), (0, l.jsx)("h1", { children: "Contact Us" }), (0, l.jsx)("a", { className: wn().linkBtn, href: "https://cyberconnect.typeform.com/to/KdBTNEwl", target: "_blank", children: "SAY HI HERE" })] }) }) }
            var yn = n(8136),
                vn = n.n(yn);
            var Nn = function() { var e = (0, h.dD)().isMobile; return (0, l.jsxs)("div", { className: vn().landingpage, children: [(0, l.jsx)(Ue, { className: vn().header }), (0, l.jsx)(ct, {}), e ? (0, l.jsx)(dn, {}) : null, (0, l.jsx)(rn, {}), (0, l.jsx)(Kt, {}), (0, l.jsx)(Ft, {}), (0, l.jsx)(pt, {}), (0, l.jsx)(bt, {}), (0, l.jsx)(vt, {}), (0, l.jsx)(xn, {}), (0, l.jsx)(_n, {}), (0, l.jsx)(tt, {})] }) }
        },
        5301: function(e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() { return n(8985) }])
        },
        9317: function(e) { e.exports = { writing: "typewriter_writing__2WwL_", blink: "typewriter_blink__MR_a_" } },
        2237: function(e) { e.exports = { backer: "backer_backer__23wfm", main: "backer_main__ng8K3", tag: "backer_tag__2T1c4", title: "backer_title__2ZZ5P", backerList: "backer_backerList__28Js4", bgLinear: "backer_bgLinear__cA7r2" } },
        8705: function(e) { e.exports = { contactUsscetion: "contactus_contactUsscetion__3_-wz", hubLink: "contactus_hubLink__3KYia", bgLinear: "contactus_bgLinear__4GCgG", linkBtn: "contactus_linkBtn__217c-" } },
        2409: function(e) { e.exports = { dataNetworkGroup: "dataNetwork_dataNetworkGroup__29PrO", dataNetworkTitle: "dataNetwork_dataNetworkTitle__FT_7K", tag: "dataNetwork_tag__12HeV", dataNetwork: "dataNetwork_dataNetwork__1448R", dataFlow: "dataNetwork_dataFlow__25l77", startFlow: "dataNetwork_startFlow__376If", sourceFadeIn: "dataNetwork_sourceFadeIn__2ne4V", dataFlowLine: "dataNetwork_dataFlowLine__323NS", bottomFlow: "dataNetwork_bottomFlow__1LMFa", leftLine: "dataNetwork_leftLine__3zmiR", rightLine: "dataNetwork_rightLine__3Fw2X", dataNetworkMobile: "dataNetwork_dataNetworkMobile__3agWM", dapps: "dataNetwork_dapps__3KilV", index: "dataNetwork_index__3EB4i", source: "dataNetwork_source__3zlP7", startDapps: "dataNetwork_startDapps__1aDwx", dappsFadeIn: "dataNetwork_dappsFadeIn__HEsty", bgLinear: "dataNetwork_bgLinear__pVyS1", startIndex: "dataNetwork_startIndex__3clg2", indexFadeIn: "dataNetwork_indexFadeIn__2gghC", startSource: "dataNetwork_startSource__1YwDN", title: "dataNetwork_title__3vdgx", dappList: "dataNetwork_dappList__p0NRw", indexList: "dataNetwork_indexList__1yWWN", indexItem: "dataNetwork_indexItem__3SWY_", indexTitle: "dataNetwork_indexTitle__2gdcd", dappItem: "dataNetwork_dappItem__2TTqC" } },
        2618: function(e) { e.exports = { DataNetworkItem: "dataNetworkItem_DataNetworkItem__1UL4t", itemTitle: "dataNetworkItem_itemTitle__2KBcq", iconList: "dataNetworkItem_iconList__2jfDQ", iconItem: "dataNetworkItem_iconItem__3QEKy", icon: "dataNetworkItem_icon__1duIP", bgLinear: "dataNetworkItem_bgLinear__2_K7g" } },
        9300: function(e) { e.exports = { demoSection: "demo_demoSection__3eG-H", title: "demo_title__3CU20", tag: "demo_tag__2hZ9_", main: "demo_main__2w6ZU", demoCard: "demo_demoCard__2gDkH", iconWrapper: "demo_iconWrapper__3XVKO", hover: "demo_hover__2d75A", bgLinear: "demo_bgLinear__3n8tj" } },
        2843: function(e) { e.exports = { ecosystemSection: "ecosystem_ecosystemSection__3ebWX", main: "ecosystem_main__3gcJf", tag: "ecosystem_tag__3CAgx", title: "ecosystem_title__2kq_W", subTitle: "ecosystem_subTitle__3KECO", ecosystemContent: "ecosystem_ecosystemContent__1-8Av", tagSwitcher: "ecosystem_tagSwitcher__FKsfa", filterTag: "ecosystem_filterTag__2U3Z6", activeFilterTag: "ecosystem_activeFilterTag__3GssI", body: "ecosystem_body__1aLuT", ecoCard: "ecosystem_ecoCard__1sqiI", cardAvatar: "ecosystem_cardAvatar__9RdTc", cardTitle: "ecosystem_cardTitle__3gvHA", cardDesc: "ecosystem_cardDesc__DKRes", cardContent: "ecosystem_cardContent__1JS9C", cardFooter: "ecosystem_cardFooter__AcKro", collapseBody: "ecosystem_collapseBody__CjAk1", isCollapsed: "ecosystem_isCollapsed__26bXM", slideInAnimation: "ecosystem_slideInAnimation__15P6L", active: "ecosystem_active__3xDT2", showMore: "ecosystem_showMore__3H9yF", bgLinear: "ecosystem_bgLinear__1urwm" } },
        3997: function(e) { e.exports = { emailSection: "email_emailSection__28IvL", bgLinear: "email_bgLinear__1T2Fu", main: "email_main__mYsc9", title: "email_title__3YQ4a", content: "email_content__1hoqa", submitBtn: "email_submitBtn__1_oVq", emailInput: "email_emailInput__1Q-gt" } },
        3106: function(e) { e.exports = { footer: "footer_footer__JYk8i", main: "footer_main__1NGZU", linkMaps: "footer_linkMaps__20X6D", linkSection: "footer_linkSection__33PWJ", footerLogo: "footer_footerLogo__3Cyzx", logo: "footer_logo__1ZV6I", metaLinks: "footer_metaLinks__27X_E", metaIcon: "footer_metaIcon__19wPH", copyright: "footer_copyright__3VtES", bgLinear: "footer_bgLinear__xeLnQ" } },
        8203: function(e) { e.exports = { graphMotion: "graphMotion_graphMotion__238OC", avatarCC: "graphMotion_avatarCC__2RUie", black: "graphMotion_black__2y7lt", logo: "graphMotion_logo__114Ey", ccEns: "graphMotion_ccEns__1RYlu", followingsPipe: "graphMotion_followingsPipe__da9Gu", followingsGraph: "graphMotion_followingsGraph__3UvaJ", followersPipe: "graphMotion_followersPipe__3Wh4v", followersGraph: "graphMotion_followersGraph__1Sjj-", friendsPipe: "graphMotion_friendsPipe__iM3-p", friendsGraph: "graphMotion_friendsGraph__DYv-t", graph: "graphMotion_graph__3aLXT", ensLine: "graphMotion_ensLine__TrnW4", boldLine: "graphMotion_boldLine__Bp3tT" } },
        9446: function(e) { e.exports = { welcomePage: "indexPage_welcomePage__35Brj", safeArea: "indexPage_safeArea__30y-A", sloganWrapper: "indexPage_sloganWrapper__1vT71", slogan: "indexPage_slogan__3el2p", linearFont: "indexPage_linearFont__31gcX", colorLinear: "indexPage_colorLinear__21IZR", o: "indexPage_o__2ymG0", desc: "indexPage_desc__oSoiu", buttonWrapper: "indexPage_buttonWrapper__3k7xV", whiteBtn: "indexPage_whiteBtn__2O6Z6", bgLinear: "indexPage_bgLinear__Imdib" } },
        9077: function(e) { e.exports = { newsSection: "news_newsSection__3iOqj", tag: "news_tag__D0IhO", newsMain: "news_newsMain__1EXsr", title: "news_title__1qgIH", newsList: "news_newsList__1op3T", newsCard: "news_newsCard__xmovG", newsTitle: "news_newsTitle__1uYI9", newsContent: "news_newsContent__2gpyJ", newsDate: "news_newsDate__1g25J", bgLinear: "news_bgLinear__fFNEB" } },
        9365: function(e) { e.exports = { protocal: "protocal_protocal__1RQaY", tag: "protocal_tag__1rfAp", title: "protocal_title__aJsz3", ProtocalCard: "protocal_ProtocalCard__3oYH_", cardTitle: "protocal_cardTitle__3QoUD", icon: "protocal_icon__T9uSn", solIcon: "protocal_solIcon__2k0ET", content: "protocal_content__2pj74", protocolNumber: "protocal_protocolNumber__1G3JI", number: "protocal_number__1J0N7", text: "protocal_text__kA5M5", bgLinear: "protocal_bgLinear__q-_mY" } },
        991: function(e) { e.exports = { scrollMotionWrapper: "scrollMotion_scrollMotionWrapper__2rseE", content: "scrollMotion_content__1YS4s", anchorElement: "scrollMotion_anchorElement__1YSra", imgWrapper: "scrollMotion_imgWrapper__2isKb", node: "scrollMotion_node__BwQpO", linkline: "scrollMotion_linkline__2G-bI", friendLine: "scrollMotion_friendLine__F6neP", followerLine: "scrollMotion_followerLine____QUt", followingLine: "scrollMotion_followingLine__dp8tZ", demoLine: "scrollMotion_demoLine__2HJu1", label: "scrollMotion_label__1Od38", left: "scrollMotion_left__1bXyL", right: "scrollMotion_right__3dz6Z", top: "scrollMotion_top__9PuZD", graph: "scrollMotion_graph__HHheP", ensLabel: "scrollMotion_ensLabel__3brEM", hide: "scrollMotion_hide__1kTcL", a: "scrollMotion_a__35gxI", c: "scrollMotion_c__RY7eN", bgLinear: "scrollMotion_bgLinear__m9zA2" } },
        6920: function(e) { e.exports = { header: "header_header__2ncPx", pcHeaderWrapper: "header_pcHeaderWrapper__EfBA9", pcHeaderItem: "header_pcHeaderItem__2bwGZ", pcLogo: "header_pcLogo__1GCvY", collapse: "header_collapse__llVot", mobileLogo: "header_mobileLogo__1Boee", whiteLogo: "header_whiteLogo__42pRy", topNavMobile: "header_topNavMobile__1JoDT", nav: "header_nav__3aZav", menu: "header_menu__1om0c", menuTrigger: "header_menuTrigger__28boT", menuOpen: "header_menuOpen__2iiG9", menuContent: "header_menuContent__25Ybe", menuItem: "header_menuItem__15uw6", launch: "header_launch__2I3zh", logo: "header_logo__1rcV4" } },
        2063: function(e) { e.exports = { sectionLayout: "sectionLayout_sectionLayout__9WQyS", bgLinear: "sectionLayout_bgLinear__25YBy" } },
        8136: function(e) { e.exports = { landingpage: "index_landingpage__1pbTr", bgLinear: "index_bgLinear__3sitZ" } }
    },
    function(e) {
        e.O(0, [63, 774, 888, 179], (function() { return t = 5301, e(e.s = t); var t }));
        var t = e.O();
        _N_E = t
    }
]);