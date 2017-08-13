(function() {
	Array.prototype.indexOf || (Array.prototype.indexOf = function(a, b) {
		for (var g = b || 0,
		h = this.length; g < h; g++) if (this[g] === a) return g;
		return - 1
	})
})(); (function(a) {
	a.getElementsByClassName || (a.getElementsByClassName = function(b) {
		var g = [],
		h = a.getElementsByTagName("*"),
		k,
		e;
		b = " " + b + " ";
		for (k = 0; k < h.length; k++) e = h[k],
		-1 < (" " + (e.className || e.getAttribute("class")) + " ").indexOf(b) && g.push(e);
		return g
	})
})(document); (function() {
	function a(a) {
		this.el = a;
		a = a.className.replace(/^\s+|\s+$/g, "").split(/\s+/);
		for (var b = 0; b < a.length; b++) h.call(this, a[b])
	}
	function b(a, b, e) {
		Object.defineProperty ? Object.defineProperty(a, b, {
			get: e
		}) : a.__defineGetter__(b, e)
	}
	if (! ("undefined" === typeof window.Element || "classList" in document.documentElement)) {
		var g = Array.prototype,
		h = g.push,
		k = g.splice,
		e = g.join;
		a.prototype = {
			add: function(a) {
				this.contains(a) || (h.call(this, a), this.el.className = this.toString())
			},
			contains: function(a) {
				return - 1 != this.el.className.indexOf(a)
			},
			item: function(a) {
				return this[a] || null
			},
			remove: function(a) {
				if (this.contains(a)) {
					for (var b = 0; b < this.length && this[b] != a; b++);
					k.call(this, b, 1);
					this.el.className = this.toString()
				}
			},
			toString: function() {
				return e.call(this, " ")
			},
			toggle: function(a) {
				this.contains(a) ? this.remove(a) : this.add(a);
				return this.contains(a)
			}
		};
		window.DOMTokenList = a;
		b(Element.prototype, "classList",
		function() {
			return new a(this)
		})
	}
})(); (function(a, b) {
	function g() {}
	function h(a, f) {
		if (a) {
			"object" === typeof a && (a = [].slice.call(a));
			for (var c = 0,
			d = a.length; c < d; c++) f.call(a, a[c], c)
		}
	}
	function k(a, f) {
		var c = Object.prototype.toString.call(f).slice(8, -1);
		return f !== b && null !== f && c === a
	}
	function e(a) {
		return k("Function", a)
	}
	function r(a) {
		return k("Array", a)
	}
	function m(a) {
		a = a || g;
		a._done || (a(), a._done = 1)
	}
	function l(a) {
		var f = {};
		if ("object" === typeof a) for (var c in a) a[c] && (f = {
			name: c,
			url: a[c]
		});
		else f = a.split("/"),
		f = f[f.length - 1],
		c = f.indexOf("?"),
		f = {
			name: -1 !== c ? f.substring(0, c) : f,
			url: a
		};
		return (a = v[f.name]) && a.url === f.url ? a: v[f.name] = f
	}
	function f(a) {
		a = a || v;
		for (var f in a) if (a.hasOwnProperty(f) && a[f].state !== B) return ! 1;
		return ! 0
	}
	function c(a) {
		a.state = K;
		h(a.onpreload,
		function(a) {
			a.call()
		})
	}
	function d(a, f) {
		a.state === b && (a.state = G, a.onpreload = [], C({
			url: a.url,
			type: "cache"
		},
		function() {
			c(a)
		}))
	}
	function u() {
		var a = arguments,
		f = a[a.length - 1],
		c = [].slice.call(a, 1),
		b = c[0];
		e(f) || (f = null);
		if (r(a[0])) return a[0].push(f),
		n.load.apply(null, a[0]),
		n;
		b ? (h(c,
		function(a) { ! e(a) && a && d(l(a))
		}), x(l(a[0]), e(b) ? b: function() {
			n.load.apply(null, c)
		})) : x(l(a[0]));
		return n
	}
	function s() {
		var a = arguments,
		c = a[a.length - 1],
		d = {};
		e(c) || (c = null);
		if (r(a[0])) return a[0].push(c),
		n.load.apply(null, a[0]),
		n;
		h(a,
		function(a, f) {
			a !== c && (a = l(a), d[a.name] = a)
		});
		h(a,
		function(a, b) {
			a !== c && (a = l(a), x(a,
			function() {
				f(d) && m(c)
			}))
		});
		return n
	}
	function x(a, c) {
		c = c || g;
		a.state === B ? c() : a.state === H ? n.ready(a.name, c) : a.state === G ? a.onpreload.push(function() {
			x(a, c)
		}) : (a.state = H, C(a,
		function() {
			a.state = B;
			c();
			h(w[a.name],
			function(a) {
				m(a)
			});
			y && f() && h(w.ALL,
			function(a) {
				m(a)
			})
		}))
	}
	function D(a) {
		a = (a || "").split("?")[0].split(".");
		return a[a.length - 1].toLowerCase()
	}
	function C(f, c) {
		function d(a) {
			q.onload = q.onreadystatechange = q.onerror = null;
			c()
		}
		function b(d) {
			d = d || a.event;
			if ("load" === d.type || /loaded|complete/.test(q.readyState) && (!p.documentMode || 9 > p.documentMode)) a.clearTimeout(f.errorTimeout),
			a.clearTimeout(f.cssTimeout),
			q.onload = q.onreadystatechange = q.onerror = null,
			c()
		}
		function u() {
			if (f.state !== B && 20 >= f.cssRetries) {
				for (var c = 0,
				d = p.styleSheets.length; c < d; c++) if (p.styleSheets[c].href === q.href) {
					b({
						type: "load"
					});
					return
				}
				f.cssRetries++;
				f.cssTimeout = a.setTimeout(u, 250)
			}
		}
		c = c || g;
		var q;
		"css" === D(f.url) ? (q = p.createElement("link"), q.type = "text/" + (f.type || "css"), q.rel = "stylesheet", q.href = f.url, f.cssRetries = 0, f.cssTimeout = a.setTimeout(u, 500)) : (q = p.createElement("script"), q.type = "text/" + (f.type || "javascript"), q.src = f.url);
		q.onload = q.onreadystatechange = b;
		q.onerror = d;
		q.async = !1;
		q.defer = !1;
		f.errorTimeout = a.setTimeout(function() {
			d({
				type: "timeout"
			})
		},
		7E3);
		var e = p.head || p.getElementsByTagName("head")[0];
		e.insertBefore(q, e.lastChild)
	}
	function z() {
		for (var a = p.getElementsByTagName("script"), f = 0, c = a.length; f < c; f++) {
			var d = a[f].getAttribute("data-headjs-load");
			if (d) {
				n.load(d);
				break
			}
		}
	}
	function t() {
		p.body ? y || (y = !0, z(), h(E,
		function(a) {
			m(a)
		})) : (a.clearTimeout(n.readyTimeout), n.readyTimeout = a.setTimeout(t, 50))
	}
	function A() {
		p.addEventListener ? (p.removeEventListener("DOMContentLoaded", A, !1), t()) : "complete" === p.readyState && (p.detachEvent("onreadystatechange", A), t())
	}
	a.a10 = a.a10 || {};
	var p = a.document,
	E = [],
	w = {},
	v = {},
	q = "async" in p.createElement("script") || "MozAppearance" in p.documentElement.style || a.opera,
	y,
	I = a.a10.head_conf && a.a10.head_conf.head || "head",
	n = a.a10[I] = a.a10[I] ||
	function() {
		n.ready.apply(null, arguments)
	},
	G = 1,
	K = 2,
	H = 3,
	B = 4;
	if ("complete" === p.readyState) t();
	else if (p.addEventListener) p.addEventListener("DOMContentLoaded", A, !1),
	a.addEventListener("load", t, !1);
	else {
		p.attachEvent("onreadystatechange", A);
		a.attachEvent("onload", t);
		var F = !1;
		try {
			F = !a.frameElement && p.documentElement
		} catch(L) {}
		F && F.doScroll &&
		function J() {
			if (!y) {
				try {
					F.doScroll("left")
				} catch(f) {
					a.clearTimeout(n.readyTimeout);
					n.readyTimeout = a.setTimeout(J, 50);
					return
				}
				t()
			}
		} ()
	}
	n.load = n.js = q ? s: u;
	n.test = function(a, f, c, d) {
		a = "object" === typeof a ? a: {
			test: a,
			success: f ? r(f) ? f: [f] : !1,
			failure: c ? r(c) ? c: [c] : !1,
			callback: d || g
		}; (f = !!a.test) && a.success ? (a.success.push(a.callback), n.load.apply(null, a.success)) : !f && a.failure ? (a.failure.push(a.callback), n.load.apply(null, a.failure)) : d();
		return n
	};
	n.ready = function(a, c) {
		if (a === p) return y ? m(c) : E.push(c),
		n;
		e(a) && (c = a, a = "ALL");
		if (r(a)) {
			var d = {};
			h(a,
			function(a) {
				d[a] = v[a];
				n.ready(a,
				function() {
					f(d) && m(c)
				})
			});
			return n
		}
		if ("string" !== typeof a || !e(c)) return n;
		var q = v[a];
		if (q && q.state === B || "ALL" === a && f() && y) return m(c),
		n; (q = w[a]) ? q.push(c) : q = w[a] = [c];
		return n
	};
	n.ready(p,
	function() {
		f() && h(w.ALL,
		function(a) {
			m(a)
		});
		n.feature && n.feature("domloaded", !0)
	})
})(window);
var getStaticFile = function(a, b, g) {
	var h = {
		"/templates/games.tv/images/pixel.gif": "http://shard1.auth-83051f68-ec6c-44e0-afe5-bd8902acff57.cdn.spilcloud.com/images/1393247036.22_pixel.gif",
		"/templates/games.tv/images/blank_thumb.jpg": "http://shard2.auth-83051f68-ec6c-44e0-afe5-bd8902acff57.cdn.spilcloud.com/images/1393247039.68_blank_thumb.jpg",
		"/templates/games.tv/images/preloader_gif.gif": "http://shard1.auth-83051f68-ec6c-44e0-afe5-bd8902acff57.cdn.spilcloud.com/images/1393247042.95_preloader_gif.gif",
		"/templates/games.tv/images/cross.png": "http://shard2.auth-83051f68-ec6c-44e0-afe5-bd8902acff57.cdn.spilcloud.com/images/1393247046.09_cross.png",
		"/templates/games.tv/images/check.png": "http://shard1.auth-83051f68-ec6c-44e0-afe5-bd8902acff57.cdn.spilcloud.com/images/1393247049.12_check.png",
		"/templates/games.tv/images/spinner.gif": "http://shard2.auth-83051f68-ec6c-44e0-afe5-bd8902acff57.cdn.spilcloud.com/images/1393247052.29_spinner.gif",
		"/templates/games.tv/images/facebook-login.jpg": "http://shard1.auth-83051f68-ec6c-44e0-afe5-bd8902acff57.cdn.spilcloud.com/images/1393247055.49_facebook-login.jpg",
		"/templates/games.tv/css/grayscale.svg": "http://shard1.auth-83051f68-ec6c-44e0-afe5-bd8902acff57.cdn.spilcloud.com/archives/1393247058.64_grayscale.svg",
		"/templates/games.tv/css/boys/img/favicon.ico": "http://shard1.auth-83051f68-ec6c-44e0-afe5-bd8902acff57.cdn.spilcloud.com/archives/1393593347.26_favicon.ico",
		"/templates/games.tv/css/boys/img/new_game.gif": "http://shard2.auth-83051f68-ec6c-44e0-afe5-bd8902acff57.cdn.spilcloud.com/images/1393247067.91_new_game.gif",
		"/templates/games.tv/css/boys/img/achievement_game.png": "http://shard2.auth-83051f68-ec6c-44e0-afe5-bd8902acff57.cdn.spilcloud.com/images/1393247070.9_achievement_game.png",
		"/templates/games.tv/css/boys/img/preferred_game.png": "http://shard2.auth-83051f68-ec6c-44e0-afe5-bd8902acff57.cdn.spilcloud.com/images/1393321924.91_preferred_game.png",
		"/templates/games.tv/css/boys/img/icon_keys.png": "http://shard2.auth-83051f68-ec6c-44e0-afe5-bd8902acff57.cdn.spilcloud.com/images/1393247077.0_icon_keys.png",
		"/templates/games.tv/css/boys/img/icons_sheet25x25.png": "http://shard2.auth-83051f68-ec6c-44e0-afe5-bd8902acff57.cdn.spilcloud.com/images/1393247080.01_icons_sheet25x25.png",
		"/templates/games.tv/css/boys/img/blocked_sponsor_rect.jpg": "http://shard1.auth-83051f68-ec6c-44e0-afe5-bd8902acff57.cdn.spilcloud.com/images/1393247129.67_blocked_sponsor_rect.jpg",
		"/templates/games.tv/css/boys/img/blocked_sponsor_tall.jpg": "http://shard2.auth-83051f68-ec6c-44e0-afe5-bd8902acff57.cdn.spilcloud.com/images/1393247132.64_blocked_sponsor_tall.jpg",
		"/templates/games.tv/css/boys/img/blocked_sponsor_wide.jpg": "http://shard1.auth-83051f68-ec6c-44e0-afe5-bd8902acff57.cdn.spilcloud.com/images/1393247135.6_blocked_sponsor_wide.jpg",
		"/templates/games.tv/css/boys/img/logos/wide_logo_up.png": "http://shard2.auth-83051f68-ec6c-44e0-afe5-bd8902acff57.cdn.spilcloud.com/images/1393247138.67_wide_logo_up.png",
		"/templates/games.tv/css/boys/img/logos/wide_logo_hover.png": "http://shard2.auth-83051f68-ec6c-44e0-afe5-bd8902acff57.cdn.spilcloud.com/images/1393247141.97_wide_logo_hover.png",
		"/templates/games.tv/css/boys/img/logos/wide_logo_down.png": "http://shard1.auth-83051f68-ec6c-44e0-afe5-bd8902acff57.cdn.spilcloud.com/images/1393247146.27_wide_logo_down.png",
		"/templates/games.tv/css/boys/img/controls.png": "http://shard2.auth-83051f68-ec6c-44e0-afe5-bd8902acff57.cdn.spilcloud.com/images/1393247149.32_controls.png",
		"/templates/games.tv/css/boys/img/moregames.png": "http://shard1.auth-83051f68-ec6c-44e0-afe5-bd8902acff57.cdn.spilcloud.com/images/1393247152.39_moregames.png",
		"/templates/games.tv/css/girls/img/favicon.ico": "http://shard1.auth-83051f68-ec6c-44e0-afe5-bd8902acff57.cdn.spilcloud.com/archives/1393593391.94_favicon.ico",
		"/templates/games.tv/css/girls/img/new_game.gif": "http://shard1.auth-83051f68-ec6c-44e0-afe5-bd8902acff57.cdn.spilcloud.com/images/1393247159.69_new_game.gif",
		"/templates/games.tv/css/boys/img/download_button_up.png": "http://shard1.auth-83051f68-ec6c-44e0-afe5-bd8902acff57.cdn.spilcloud.com/images/1393247222.03_download_button_up.png",
		"/templates/games.tv/css/girls/img/achievement_game.png": "http://shard2.auth-83051f68-ec6c-44e0-afe5-bd8902acff57.cdn.spilcloud.com/images/1393247225.6_achievement_game.png",
		"/templates/games.tv/css/girls/img/icon_keys.png": "http://shard1.auth-83051f68-ec6c-44e0-afe5-bd8902acff57.cdn.spilcloud.com/images/1393247229.42_icon_keys.png",
		"/templates/games.tv/css/girls/img/icons_sheet25x25.png": "http://shard1.auth-83051f68-ec6c-44e0-afe5-bd8902acff57.cdn.spilcloud.com/images/1393247231.42_icons_sheet25x25.png",
		"/templates/games.tv/css/girls/img/logos/wide_logo_up.png": "http://shard2.auth-83051f68-ec6c-44e0-afe5-bd8902acff57.cdn.spilcloud.com/images/1393247240.98_wide_logo_up.png",
		"/templates/games.tv/css/girls/img/logos/wide_logo_hover.png": "http://shard2.auth-83051f68-ec6c-44e0-afe5-bd8902acff57.cdn.spilcloud.com/images/1393247244.19_wide_logo_hover.png",
		"/templates/games.tv/css/girls/img/logos/wide_logo_down.png": "http://shard2.auth-83051f68-ec6c-44e0-afe5-bd8902acff57.cdn.spilcloud.com/images/1393247247.24_wide_logo_down.png",
		"/templates/games.tv/css/girls/img/controls.png": "http://shard2.auth-83051f68-ec6c-44e0-afe5-bd8902acff57.cdn.spilcloud.com/images/1393247250.26_controls.png",
		"/templates/games.tv/css/girls/img/moregames.png": "http://shard1.auth-83051f68-ec6c-44e0-afe5-bd8902acff57.cdn.spilcloud.com/images/1393247253.34_moregames.png",
		"/templates/games.tv/css/girls/img/download_button_up.png": "http://shard2.auth-83051f68-ec6c-44e0-afe5-bd8902acff57.cdn.spilcloud.com/images/1393247256.51_download_button_up.png",
		"/templates/games.tv/css/boys/style.dist.css": "http://shard1.auth-83051f68-ec6c-44e0-afe5-bd8902acff57.cdn.spilcloud.com/10/1395409699_style.dist.css",
		"/templates/games.tv/css/girls/img/preferred_game.png": "http://shard2.auth-83051f68-ec6c-44e0-afe5-bd8902acff57.cdn.spilcloud.com/images/1393247332.39_preferred_game.png",
		"/templates/games.tv/css/girls/img/blocked_sponsor_rect.jpg": "http://shard2.auth-83051f68-ec6c-44e0-afe5-bd8902acff57.cdn.spilcloud.com/images/1393247337.82_blocked_sponsor_rect.jpg",
		"/templates/games.tv/css/girls/img/blocked_sponsor_tall.jpg": "http://shard2.auth-83051f68-ec6c-44e0-afe5-bd8902acff57.cdn.spilcloud.com/images/1393247340.9_blocked_sponsor_tall.jpg",
		"/templates/games.tv/css/girls/img/blocked_sponsor_wide.jpg": "http://shard2.auth-83051f68-ec6c-44e0-afe5-bd8902acff57.cdn.spilcloud.com/images/1393247343.07_blocked_sponsor_wide.jpg",
		"/templates/games.tv/css/girls/style.dist.css": "http://shard2.auth-83051f68-ec6c-44e0-afe5-bd8902acff57.cdn.spilcloud.com/10/1395409708_style.dist.css",
		"/templates/games.tv/css/iframe.dist.css": "http://shard1.auth-83051f68-ec6c-44e0-afe5-bd8902acff57.cdn.spilcloud.com/css/1393247354.64_iframe.dist.css",
		"/templates/games.tv/css/boys/img/new_game.png": "http://shard1.auth-83051f68-ec6c-44e0-afe5-bd8902acff57.cdn.spilcloud.com/images/1393324130.34_new_game.png",
		"/templates/games.tv/css/girls/img/new_game.png": "http://shard2.auth-83051f68-ec6c-44e0-afe5-bd8902acff57.cdn.spilcloud.com/images/1393325786.93_new_game.png",
		"/templates/games.tv/css/play.dist.css": "http://shard1.auth-83051f68-ec6c-44e0-afe5-bd8902acff57.cdn.spilcloud.com/10/1397744385_play.dist.css",
		"/templates/games.tv/css/boys/img/favicon-57.png": "http://shard1.auth-83051f68-ec6c-44e0-afe5-bd8902acff57.cdn.spilcloud.com/images/1393593350.61_favicon-57.png",
		"/templates/games.tv/css/boys/img/favicon-64.png": "http://shard2.auth-83051f68-ec6c-44e0-afe5-bd8902acff57.cdn.spilcloud.com/images/1393593354.89_favicon-64.png",
		"/templates/games.tv/css/boys/img/favicon-120.png": "http://shard1.auth-83051f68-ec6c-44e0-afe5-bd8902acff57.cdn.spilcloud.com/images/1393593358.96_favicon-120.png",
		"/templates/games.tv/css/boys/img/favicon-128.png": "http://shard2.auth-83051f68-ec6c-44e0-afe5-bd8902acff57.cdn.spilcloud.com/images/1393593362.55_favicon-128.png",
		"/templates/games.tv/css/boys/img/favicon-144.png": "http://shard2.auth-83051f68-ec6c-44e0-afe5-bd8902acff57.cdn.spilcloud.com/images/1393593366.55_favicon-144.png",
		"/templates/games.tv/css/boys/img/favicon-152.png": "http://shard2.auth-83051f68-ec6c-44e0-afe5-bd8902acff57.cdn.spilcloud.com/images/1393593369.99_favicon-152.png",
		"/templates/games.tv/css/boys/img/favicon-196.png": "http://shard1.auth-83051f68-ec6c-44e0-afe5-bd8902acff57.cdn.spilcloud.com/images/1393593374.2_favicon-196.png",
		"/templates/games.tv/css/girls/img/favicon-57.png": "http://shard2.auth-83051f68-ec6c-44e0-afe5-bd8902acff57.cdn.spilcloud.com/images/1393593395.24_favicon-57.png",
		"/templates/games.tv/css/girls/img/favicon-64.png": "http://shard2.auth-83051f68-ec6c-44e0-afe5-bd8902acff57.cdn.spilcloud.com/images/1393593399.21_favicon-64.png",
		"/templates/games.tv/css/girls/img/favicon-120.png": "http://shard1.auth-83051f68-ec6c-44e0-afe5-bd8902acff57.cdn.spilcloud.com/images/1393593403.08_favicon-120.png",
		"/templates/games.tv/css/girls/img/favicon-128.png": "http://shard1.auth-83051f68-ec6c-44e0-afe5-bd8902acff57.cdn.spilcloud.com/images/1393593407.49_favicon-128.png",
		"/templates/games.tv/css/girls/img/favicon-144.png": "http://shard2.auth-83051f68-ec6c-44e0-afe5-bd8902acff57.cdn.spilcloud.com/images/1393593411.41_favicon-144.png",
		"/templates/games.tv/css/girls/img/favicon-152.png": "http://shard2.auth-83051f68-ec6c-44e0-afe5-bd8902acff57.cdn.spilcloud.com/images/1393593414.7_favicon-152.png",
		"/templates/games.tv/css/girls/img/favicon-196.png": "http://shard2.auth-83051f68-ec6c-44e0-afe5-bd8902acff57.cdn.spilcloud.com/images/1393593417.94_favicon-196.png",
		"/templates/games.tv/css/fonts/a10icons-webfont.eot": "http://shard1.auth-83051f68-ec6c-44e0-afe5-bd8902acff57.cdn.spilcloud.com/archives/1393925671.87_a10icons-webfont.eot",
		"/templates/games.tv/css/fonts/a10icons-webfont.woff": "http://shard1.auth-83051f68-ec6c-44e0-afe5-bd8902acff57.cdn.spilcloud.com/archives/1393925771.07_a10icons-webfont.woff",
		"/templates/games.tv/css/fonts/a10icons-webfont.svg": "http://shard1.auth-83051f68-ec6c-44e0-afe5-bd8902acff57.cdn.spilcloud.com/archives/1393925775.46_a10icons-webfont.svg"
	};
	a = h[a] && !g && !window.isDevEnv ? h[a] : a + "?v=14.4.1";
	b && 0 > a.indexOf("//") && (a = b + a);
	return a
}; (function(a, b) {
	a.gaAccount || (a.gaAccount = "UA-25553061-1");
	a.gaDomain || (a.gaDomain = "a10.com");
	a.siteUrl || (a.siteUrl = "");
	a.gridView || (a.gridView = !1);
	a.SpilGames || (a.SpilGames = function(a) {
		return function() {
			a.push(arguments);
			return a
		}
	} (a.SpilGames || []));
	a.SpilGamesBootstrap || a.a10.head.load(a.siteUrl + "/javascripts/spapi.js")
})(window, window.document); (function(a, b, g) {
	if (!a.a10 || !a.a10.utils) a._gaq = a._gaq || [],
	a.a10 = a.a10 || {},
	a.a10.utils = new
	function() {
		var h = [];
		a.navigator.platform.toUpperCase();
		var k = [function() {
			return new XMLHttpRequest
		},
		function() {
			return new ActiveXObject("Msxml2.XMLHTTP")
		},
		function() {
			return new ActiveXObject("Msxml3.XMLHTTP")
		},
		function() {
			return new ActiveXObject("Microsoft.XMLHTTP")
		}],
		e = function() {
			for (var a = !1,
			c = 0; c < k.length; c++) {
				try {
					a = k[c]()
				} catch(d) {
					continue
				}
				break
			}
			return a
		},
		r = function() {
			var a = new XMLHttpRequest;
			return "withCredentials" in a ? a: "undefined" !== typeof XDomainRequest ? (a = new XDomainRequest, a.onprogress = function() {},
			a) : !1
		},
		m = function() {
			var a = [];
			return {
				listEvents: a,
				add: function(c, d, b) {
					a.push(arguments)
				},
				flush: function() {
					var c, d;
					for (c = a.length - 1; 0 <= c; c -= 1) d = a[c],
					d[0].removeEventListener && d[0].removeEventListener(d[1], d[2], d[3]),
					"on" != d[1].substring(0, 2) && (d[1] = "on" + d[1]),
					d[0].detachEvent && d[0].detachEvent(d[1], d[2]),
					d[0][d[1]] = null
				}
			}
		} (),
		l = this;
		l.urlParams = function() {
			for (var a = {},
			c = !0,
			d = /\+/g,
			b = /([^&=]+)=?([^&]*)/g,
			e = window.location.search.substring(1); c;)(c = b.exec(e)) && (a[decodeURIComponent(c[1].replace(d, " "))] = decodeURIComponent(c[2].replace(d, " ")));
			return a
		} ();
		l.platform = function() {
			var f = a.navigator.platform;
			return l.urlParams.dev ? l.urlParams.dev: 0 <= f.indexOf("Mac") ? "Mac": 0 <= f.indexOf("Win") ? "Windows": f.match(/(iPhone|iPod|iPad)/i) ? "iOS": "Other"
		} ();
		l.triggerEvent = function(a, c) {
			var d;
			if (b.createEvent) d = b.createEvent("HTMLEvents"),
			d.initEvent(c, !0, !0),
			a.dispatchEvent(d);
			else {
				d = b.createEventObject();
				d.eventType = c;
				try {
					a.fireEvent("on" + d.eventType, d)
				} catch(e) {}
			}
		};
		l.addEvent = function(a, c, d) {
			var b = function(b) {
				return function() {
					a["e" + c[b] + d](window.event)
				}
			};
			c = c.split(" ");
			for (var e = 0; e < c.length; e++) a.addEventListener ? (a.addEventListener(c[e], d, !1), m.add(a, c[e], d)) : a.attachEvent ? (a["e" + c[e] + d] = d, a[c[e] + d] = b(e), a.attachEvent("on" + c[e], a[c[e] + d]), m.add(a, c[e], d)) : a["on" + c[e]] = a["e" + c[e] + d]
		};
		l.ajax = function(a) {
			var c = a.cors === g ? !1 : !!a.cors,
			d = a.credentials === g ? !0 : !!a.credentials,
			b = c ? r() : g,
			h = a.url ? a.url: "",
			l = a.type === g ? "GET": a.type,
			k,
			m = function() {
				"function" === typeof a.complete && a.complete(b, b.status)
			},
			z = function() {
				var c;
				try {
					c = JSON.parse(b.responseText)
				} catch(d) {
					c = b.responseText
				}
				"function" === typeof a.success && a.success(c, b.status, b);
				m()
			},
			t = function() {
				"function" === typeof a.error && a.error(b, b.status);
				m()
			};
			b || (b = e(), c = !1);
			if (!b || !h) return null;
			a.data && ("GET" === l ? h += a.data: "POST" === l && (k = a.data));
			b.open(l, h);
			c && d && (b.withCredentials = !0);
			"POST" === l && "setRequestHeader" in b && b.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			c ? (b.onload = z, b.onerror = t) : b.onreadystatechange = function() {
				4 === b.readyState && (100 > b.status || 400 <= b.status ? t() : z())
			}; (c || 4 !== b.readyState) && b.send(k);
			return b
		};
		l.addTimer = function(a, c, b, e, g) {
			e = {
				repeat: b,
				page: e,
				ref: g
			};
			e.id = b ? setInterval(a, c) : setTimeout(a, c);
			h.push(e);
			return e
		};
		l.killTimers = function(a, c) {
			for (var b, e = []; (b = h.pop()) !== g;)(!a || b.page === a) && (!c || b.ref === c) ? b.repeat ? clearInterval(b.id) : clearTimeout(b.id) : e.push(b);
			h = e
		};
		l.deBounce = function(a, c, b) {
			var e, g = c || 250;
			return function() {
				var c = this,
				h = arguments;
				if (!b || !e) b ? a.apply(c, Array.prototype.slice.call(h)) : clearTimeout(e),
				e = setTimeout(function() {
					b || a.apply(c, Array.prototype.slice.call(h));
					e = null
				},
				g)
			}
		};
		l.htmlEscape = function(a) {
			return String(a).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
		};
		l.htmlMeta = function(a, c, b) {
			var e = document.getElementsByTagName("meta");
			c || (c = "property");
			for (var g = 0; g < e.length; g++) if (e[g].getAttribute(c) === a) return "undefined" !== typeof b ? e[g].setAttribute("content", b) : e[g].getAttribute("content")
		};
		l.addUrlParam = function(a, c, b) {
			b = c + "=" + b;
			0 <= a.indexOf("?") ? (c = a.replace(RegExp("[?&]" + c + "[^&]*"), "$1" + b), c === a && (c += "&" + b)) : c = a + "?" + b;
			return c
		};
		l.addEvent(a, "unload", m.flush)
	}
})(window, window.document); (function(a, b, g) {
	if (!a.a10 || !a.a10.hacks) a._gaq = a._gaq || [],
	a.a10 = a.a10 || {},
	a.a10.hacks = new
	function() {
		var a = !1,
		b = function() {
			"standalone" in window.navigator && window.navigator.standalone && document.addEventListener("click",
			function(a) {
				if (!a.defaultPrevented) {
					for (var b = a.target;
					"A" !== b.nodeName && "HTML" !== b.nodeName;) b = b.parentNode;
					"A" === b.nodeName && ("href" in b && "_blank" !== b.target) && (document.location.href = b.href, a.preventDefault())
				}
			},
			!1)
		};
		this.init = function() {
			a || (a = !0, b())
		}
	}
})(window, window.document); (function(a, b, g) {
	if (!a.a10 || !a.a10.focus) a._gaq = a._gaq || [],
	a.a10 = a.a10 || {},
	a.a10.focus = new
	function() {
		var h = "hidden",
		k = function(e) {
			e = e || a.event; ("focus" == e.type || "focusin" == e.type ? 0 : "blur" == e.type || "focusout" == e.type || b[h]) ? a.a10.utils.triggerEvent(b, "blurIn") : a.a10.utils.triggerEvent(b, "blurOut")
		};
		g && (this.setupAutofocus = function() {
			g(b).on("mouseenter", "input[type=text], input[type=password], input[type=search]",
			function() {
				var a = g(this),
				b = a.data("deftext");
				a.data("locked");
				a.is(".autofocus") && ("undefined" === typeof b && (b = a.val(), a.data("deftext", b)), g(this).focus())
			}).on("mouseleave", "input[type=text], input[type=password], input[type=search]",
			function() {
				var a = g(this),
				b = a.data("deftext"),
				h = a.data("locked");
				a.is(".autofocus") && (a.val() === b && !h) && (a.is(".search-input") && a.data("active", !1), g(this).blur())
			}).on("click", "input[type=text], input[type=password], input[type=search]",
			function() {
				g(this).data("locked", !0)
			}).on("blur", "input[type=text], input[type=password], input[type=search]",
			function() {
				g(this).data("locked", !1)
			})
		},
		this.setupPlaceholders = function() {
			g(b).on("focus", "input[placeholder]",
			function() {
				var a = g(this),
				b = a.attr("placeholder");
				b && (a.data("placeholder", b), a.attr("placeholder", ""))
			}).on("blur", "input[placeholder]",
			function() {
				var a = g(this),
				b = a.data("placeholder");
				b && a.attr("placeholder", b)
			})
		});
		h in b ? b.addEventListener("visibilitychange", k) : (h = "mozHidden") in b ? b.addEventListener("mozvisibilitychange", k) : (h = "webkitHidden") in b ? b.addEventListener("webkitvisibilitychange", k) : (h = "msHidden") in b ? b.addEventListener("msvisibilitychange", k) : "onfocusin" in b ? b.onfocusin = b.onfocusout = k: a.onfocus = a.onblur = k
	}
})(window, window.document, window.jQuery); (function(a, b, g, h) {
	if (!a.a10 || !a.a10.analytics) a._gaq = a._gaq || [],
	a.a10 = a.a10 || {},
	a.a10.analytics = new
	function() {
		var k = 1,
		e = [],
		r = [],
		m = function(f, c, d) {
			0 > e.indexOf(f) && e.push(f);
			"" !== f && (f += ".");
			d || (d = "none");
			a._gaq.push([f + "_setAccount", c], [f + "_setAllowAnchor", !0], [f + "_setDomainName", d], [f + "_trackPageview", b.location.pathname + b.location.search + b.location.hash])
		},
		l = this;
		l.trackPage = function(b, c, d, e, l) {
			if (c) {
				if (0 <= r.indexOf(c)) return;
				r.push(c)
			}
			g && m("portal", g, h);
			m("aggregated", "UA-8223336-1", h);
			"function" === typeof a.SpilGames && a.SpilGames(["JSLib", "Portal"],
			function(a, g) {
				"undefined" !== typeof b && g.set("pagetype", b);
				"undefined" !== typeof c && g.set("pagetypedetail", parseInt(c, 10) || null);
				"undefined" !== typeof d && g.set("pageid", parseInt(d, 10) || null);
				"undefined" !== typeof e && g.set("categoryname", e);
				"undefined" !== typeof l && g.set("portalversion", l);
				a("tracker.page.track");
				a("tracker.event.init")
			})
		};
		l.trackEvent = function() {
			for (var b = Array.prototype.slice.call(arguments), c = 0; c < e.length; c++) a._gaq.push(Array.prototype.concat.call([e[c] + "._trackEvent"], b))
		};
		l.updateTimeSpent = function(f, c) {
			var d = "/xhr/timespent/",
			e = 0,
			g = 0,
			h = 0,
			l = 60,
			k = 15,
			m = !0,
			r;
			c && (d = c + d);
			a.a10.utils.addEvent(b, "blurIn",
			function() {
				m = !1
			});
			a.a10.utils.addEvent(b, "blurOut",
			function() {
				m = !0
			});
			a.a10.utils.addTimer(function() {
				if (m) if (e++, 1 < l) l--;
				else {
					l = k;
					60 > k && (k += 5);
					var b = e,
					c = b - g;
					g = b;
					r && r.abort();
					r = a.a10.utils.ajax({
						url: d + f + "/" + c + "?dev=" + a.a10.utils.platform + "&seq=" + h,
						type: "POST",
						cors: !0,
						error: function() {
							k = 60
						}
					});
					h++
				}
			},
			1E3, !0, "gamepage")
		};
		l.updateClicks = function(b, c, e, g, h) {
			var l = "/xhr/updateclicks/" + b;
			g && (l = g + l);
			"undefined" !== typeof h ? h && (l += "/" + b) : "undefined" !== typeof sessionStorage && sessionStorage.getItem("clickedGame") == b && (sessionStorage.removeItem("clickedGame"), l += "/" + b);
			a.a10.utils.ajax({
				url: l + "?dev=" + a.a10.utils.platform,
				type: "POST",
				cors: !0,
				success: function(a) {
					"function" === typeof e && e(a, c)
				}
			})
		};
		l.updateDisplays = function(b, c, e, g, h) {
			b = "/xhr/updatedisplays/" + b.join("/");
			h && (b = h + b);
			a.a10.utils.ajax({
				url: b + "?dev=" + a.a10.utils.platform + "&pref=" + c + "&lp=" + e,
				type: "POST",
				cors: !0,
				success: function(a) {
					"function" === typeof g && g(a)
				}
			})
		}; (function() {
			var a = b.createElement("script");
			a.type = "text/javascript";
			a.async = !0;
			a.src ="";
			var c = b.getElementsByTagName("script")[0];
			c.parentNode.insertBefore(a, c)
		})(); (function() {
			setInterval(function() {
				l.trackEvent("unbounce", "every 5 minutes", "" + k);
				k++
			},
			3E5)
		})()
	}
})(window, window.document, window.gaAccount, window.gaDomain); (function(a, b, g, h, k, e) {
	if (!a.a10 || !a.a10.play) a._gaq = a._gaq || [],
	a.a10 = a.a10 || {},
	a.a10.play = new
	function() {
		var r, m, l = [],
		f,
		c = !1,
		d = !1,
		u = a.a10.utils.addEvent,
		s = function(a, c, e) {
			a || (a = "div");
			if (a = b.createElement(a)) c && (c = "a10-" + c, a.setAttribute("id", c), a.setAttribute("class", c)),
			e && (a.innerHTML = e);
			return a
		},
		x = function(a) {
			b.body && (b.body.firstChild ? b.body.insertBefore(a, b.body.firstChild) : b.body.appendChild(a))
		},
		D = function(a) {
			a && a.stopPropagation && a.stopPropagation()
		},
		C = function(a) {
			a && a.preventDefault && a.preventDefault()
		},
		z = function(a) { (a = b.getElementById("a10-playMenu")) && a.classList.toggle("a10-open");
			d = !0
		},
		t = function(a, c, e, f, d, h) {
			var k, m = s("li", c);
			f && (0 === f.indexOf("a10-playMenuIcon:") ? (k = b.createElement("i"), k.setAttribute("class", "a10-playMenuIcon-" + f.substr(17))) : (k = b.createElement("img"), k.setAttribute("src", f), k.setAttribute("title", e)), f = k);
			d && ("/" === d[0] && (d = g + d), 0 !== d.indexOf("javascript:") && (d += 0 > d.indexOf("#ref=") ? "#ref=": ",", d += "play-menu"), k = b.createElement("a"), k.setAttribute("href", d), k.setAttribute("target", "_top"), d = k);
			"thumb" === c && (f && d && h) && (d.setAttribute("data-id", h), u(f, "load",
			function(a) { (a = d.getAttribute("data-id")) && l.push(a)
			}), u(d, "click",
			function(a) { (a = d.getAttribute("data-id")) && "undefined" !== typeof sessionStorage && sessionStorage.setItem("clickedGame", a)
			}));
			k = d ? d: m;
			f && k.appendChild(f);
			"thumb" !== c && (c = b.createElement("span"), c.appendChild(b.createTextNode(e)), k.appendChild(c));
			k !== m && m.appendChild(k);
			E() || a.appendChild(m)
		},
		A = function(c) {
			var d;
			c.setAttribute("action", g + "/search");
			c.setAttribute("method", "get");
			u(c, "submit",
			function(b) {
				var c;
				if (this.getElementsByTagName && (c = this.getElementsByTagName("input")) && c.length) a.location.href = g + "/" + encodeURIComponent(c[0].value) + "-games/",
				C(b)
			});
			d = b.createElement("input");
			d.setAttribute("type", "search");
			d.setAttribute("name", "q");
			d.setAttribute("maxlength", 32);
			d.setAttribute("placeholder", "Find Game");
			d.setAttribute("data-role", "none");
			d.classList.add("autofocus");
			c.appendChild(d)
		},
		p = function() {
			a.a10.utils.addTimer(function() {
				var b = [];
				if (d) {
					for (; l.length;) b.push(l.pop());
					b.length && a.a10.analytics.updateDisplays(b, 0, 0, null, g)
				}
			},
			5E3, !0)
		},
		E = function() {
			var b = a.navigator.standalone,
			c = a.navigator.userAgent.toLowerCase(),
			d = /safari/.test(c),
			e = !1;
			/iphone|ipod|ipad/.test(c) && (!b && !d) && (e = !0);
			return e
		},
		w = function() {
			var b, c, d, h, l, k, m, p, r;
			b = s("span", "playMenu");
			b.classList.add("a10-loading");
			b.style.display = "none";
			f || (u(b, "click contextmenu dblclick mousedown mouseenter mouseleave mousemove mouseout mouseover mouseup show", D), u(b, "touchstart touchend touchmove touchenter touchleave touchcancel", D), u(b, "MSPointerDown MSPointerMove MSPointerUp MSPointerOver MSPointerOut MSPointerHover MSPointerCancel", D));
			u(b, "dragstart", C);
			h = s("form", "playMenuSearch");
			A(h);
			/*
			a.a10.head.load(e("/templates/games.tv/css/play.dist.css", g));
			c = s("div", "playMenuHeader", '<a href="' + g + '/#ref=play-menu-logo" target="_top"><img class="a10-playMenuLogo" src="' + e("/templates/games.tv/css/boys/img/logos/wide_logo_up.png", g) + '"></a>');
			d = s("div", "playMenuButton", '<i class="a10-playMenuIcon-menu"></i>');
			c.appendChild(d);
			u(d, "click", z);
			d = s("div", "playMenuSocial");
			d.innerHTML = '<iframe></iframe>';
			c.appendChild(d);
			d = s("div", "playMenuHeaderSearch");
			d.appendChild(h);
			c.appendChild(d);
			b.appendChild(c);
			c = s("div", "playMenuBody");
			d = s("ul", "playMenuThumbs");
			k = s("div", "playMenuFooter");
			m = s("div", "playMenuBack");
			m.innerHTML = '<a href="javascript:history.back();" target="_top"><i class="a10-playMenuIcon-back"></i>Back</a>';
			l = s("ul", "playMenuItems");
			p = s("div", "playMenuLogin");
			r = s("div", "playMenuLogout");
			p.innerHTML = '<a><i class="a10-playMenuIcon-login"></i>Log in</a>';
			r.innerHTML = '<a><i class="a10-playMenuIcon-logout"></i>Log out </a>';
			t(l, "playMenuPopular", "Popular", "a10-playMenuIcon:popular", "/");
			t(l, "playMenuNew", "New", "a10-playMenuIcon:new", "/newest/");
			t(l, "playMenuLastPlayed", "Last played", "a10-playMenuIcon:last-played", "/favorite/");
			k.appendChild(m);
			c.appendChild(h.cloneNode(!0));
			c.appendChild(d);
			c.appendChild(l);
			c.appendChild(k);
			k.appendChild(p);
			k.appendChild(r);
			b.appendChild(c);
			f && b.classList.add("a10-gridview");
			p.onclick = function() {
				a.a10 && a.a10.services && a.a10.services.showSignInBox()
			};
			r.onclick = function() {
				a.a10 && a.a10.services && a.a10.services.logout()
			};
			x(b);
			b.classList.remove("a10-loading")
		},*/
		/*v = function(a) {bbs.82java.com/forum.php};*/
		this.init = function() {
			c || a.a10.utils.addTimer(function() {
				a.a10.utils.htmlMeta("og:title");
				a.a10.utils.htmlMeta("game:id");
				r = a.a10.utils.htmlMeta("game:gid");
				m = a.a10.utils.htmlMeta("game:lid");
				h = h ? h: "gamepage";
				f = "homepage" === h || "tagpage" === h;
				var b = a.location.href,
				b = b.replace("");
				a.location.href !== b && (a.location.href = b);
				p();
				E() || w();
				a.a10.analytics && m && (a.a10.analytics.trackPage(h, 1, r), a.a10.analytics.updateClicks(m, {},
				v, g, !0), a.a10.analytics.updateTimeSpent(m, g));
				a.a10.hacks && a.a10.hacks.init();
				c = !0
			},
			10)
		};
		this.update = function(a, d) {
			var e, f = {
				popular: "playMenuPopular",
				newest: "playMenuNew",
				favorite: "playMenuLastPlayed"
			};
			if (c) {
				if ("login" === a || "logout" === a) {
					if (e = b.getElementById("a10-playMenuLogin")) e.style.display = "login" === a ? "none": "block";
					if (e = b.getElementById("a10-playMenuLogout")) e.style.display = "login" === a ? "block": "none"
				} else "preferred" === a && v(d);
				k && f[k] && (e = b.getElementById("a10-" + f[k]), e.classList.add("a10-playMenuActive"))
			}
		}
	}
})(window, window.document, window.siteUrl, window.pageType, window.pageSortby, window.getStaticFile); (function(a, b, g) {
	a.GameAPI || (a.GameAPI = new
	function() {
		var h = g + "/javascripts/api.js",
		k = function(e) {
			var k = [],
			l = function() {
				"function" === typeof e && e()
			}; (!a.a10 || !a.a10.services) && k.push(h);
			a.a10.head.load(k,
			function() { ! a.a10 || !a.a10.services ? a.a10API.loadAPI(function() {
					a.a10 = a.a10API.getAPI();
					a !== a.parent && 0 <= b.referrer.indexOf(g) ? a.a10API.embedFrame(null, null, l) : a.a10.services.connect(l)
				},
				a.isDevEnv, !1) : l()
			})
		},
		e = this;
		e.version = "0.7.7-a10";
		e.isReady = !1;
		e.loadAPI = function(b) {
			e.isReady || (e.isReady = !0, k(function() {
				e.Branding = a.a10.branding;
				e.GameBreak = a.a10.gamebreak;
				e.Branding._loadConfig(function() {
					"function" === typeof b && b(e)
				})
			}))
		}
	})
})(window, window.document, window.siteUrl);