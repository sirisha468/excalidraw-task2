const p = async e=>{
    const i = await e.getFile();
    return i.handle = e,
    i
}
;
var l = async(e=[{}])=>{
    Array.isArray(e) || (e = [e]);
    const i = [];
    e.forEach((a,c)=>{
        i[c] = {
            description: a.description || "",
            accept: {}
        },
        a.mimeTypes ? a.mimeTypes.map(s=>{
            i[c].accept[s] = a.extensions || []
        }
        ) : i[c].accept["*/*"] = a.extensions || []
    }
    );
    const n = await window.showOpenFilePicker({
        id: e[0].id,
        startIn: e[0].startIn,
        types: i,
        multiple: e[0].multiple || !1,
        excludeAcceptAllOption: e[0].excludeAcceptAllOption || !1
    })
      , t = await Promise.all(n.map(p));
    return e[0].multiple ? t : t[0]
}
;
export {l as default};
//# sourceMappingURL=file-open-002ab408-9ae3a7ce.js.map
