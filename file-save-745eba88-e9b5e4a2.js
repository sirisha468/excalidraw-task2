var y = async(e,t=[{}],s=null,p=!1,o=null)=>{
    Array.isArray(t) || (t = [t]),
    t[0].fileName = t[0].fileName || "Untitled";
    const n = [];
    let a = null;
    if (e instanceof Blob && e.type ? a = e.type : e.headers && e.headers.get("content-type") && (a = e.headers.get("content-type")),
    t.forEach((i,l)=>{
        n[l] = {
            description: i.description || "",
            accept: {}
        },
        i.mimeTypes ? (l === 0 && a && i.mimeTypes.push(a),
        i.mimeTypes.map(d=>{
            n[l].accept[d] = i.extensions || []
        }
        )) : a && (n[l].accept[a] = i.extensions || [])
    }
    ),
    s)
        try {
            await s.getFile()
        } catch (i) {
            if (s = null,
            p)
                throw i
        }
    const c = s || await window.showSaveFilePicker({
        suggestedName: t[0].fileName,
        id: t[0].id,
        startIn: t[0].startIn,
        types: n,
        excludeAcceptAllOption: t[0].excludeAcceptAllOption || !1
    });
    !s && o && o();
    const r = await c.createWritable();
    return "stream"in e ? (await e.stream().pipeTo(r),
    c) : "body"in e ? (await e.body.pipeTo(r),
    c) : (await r.write(await e),
    await r.close(),
    c)
}
;
export {y as default};
//# sourceMappingURL=file-save-745eba88-e9b5e4a2.js.map
