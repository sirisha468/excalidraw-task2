function l(e) {
    function i(r) {
        if (Object(r) !== r)
            return Promise.reject(new TypeError(r + " is not an object."));
        var n = r.done;
        return Promise.resolve(r.value).then(function(s) {
            return {
                value: s,
                done: n
            }
        })
    }
    return l = function(r) {
        this.s = r,
        this.n = r.next
    }
    ,
    l.prototype = {
        s: null,
        n: null,
        next: function() {
            return i(this.n.apply(this.s, arguments))
        },
        return: function(r) {
            var n = this.s.return;
            return n === void 0 ? Promise.resolve({
                value: r,
                done: !0
            }) : i(n.apply(this.s, arguments))
        },
        throw: function(r) {
            var n = this.s.return;
            return n === void 0 ? Promise.reject(r) : i(n.apply(this.s, arguments))
        }
    },
    new l(e)
}
const p = async(e,i,r=e.name,n)=>{
    const s = []
      , f = [];
    var v, c = !1, d = !1;
    try {
        for (var h, y = function(t) {
            var o, a, u, w = 2;
            for (typeof Symbol < "u" && (a = Symbol.asyncIterator,
            u = Symbol.iterator); w--; ) {
                if (a && (o = t[a]) != null)
                    return o.call(t);
                if (u && (o = t[u]) != null)
                    return new l(o.call(t));
                a = "@@asyncIterator",
                u = "@@iterator"
            }
            throw new TypeError("Object is not async iterable")
        }(e.values()); c = !(h = await y.next()).done; c = !1) {
            const t = h.value
              , o = `${r}/${t.name}`;
            t.kind === "file" ? f.push(t.getFile().then(a=>(a.directoryHandle = e,
            a.handle = t,
            Object.defineProperty(a, "webkitRelativePath", {
                configurable: !0,
                enumerable: !0,
                get: ()=>o
            })))) : t.kind !== "directory" || !i || n && n(t) || s.push(p(t, i, o, n))
        }
    } catch (t) {
        d = !0,
        v = t
    } finally {
        try {
            c && y.return != null && await y.return()
        } finally {
            if (d)
                throw v
        }
    }
    return [...(await Promise.all(s)).flat(), ...await Promise.all(f)]
}
;
var m = async(e={})=>{
    e.recursive = e.recursive || !1;
    const i = await window.showDirectoryPicker({
        id: e.id,
        startIn: e.startIn
    });
    return p(i, e.recursive, void 0, e.skipDirectory)
}
;
export {m as default};
//# sourceMappingURL=directory-open-4ed118d0-f36e5697.js.map
