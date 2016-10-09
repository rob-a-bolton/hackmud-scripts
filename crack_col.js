function(ct,a)
{
    var cs = ["purple","blue","cyan","green","lime","yellow","orange","red"];
    var m = a.t.call({}).match(/c00[1-3]/);
    if(m.count<1){return { ok:false}}
    m=m[0];
    var o;
    for(var i=0; i<8; i++) {
        o = m=="c001"?{c001:cs[i]}
              : (m=="c002"?{c002:cs[i], c002_complement:cs[(i+4)%8]}
              : { c003:cs[i],
                  c003_triad_1:cs[(i+3)%8],
                  c003_triad_2:cs[(i+5)%8]});
        var r=a.t.call(o);
        if(("" + r).match(/LOCK_UNLOCKED/)) {
            return JSON.stringify(o);
        }
    }
    o.m=m;
    return { ok:false, msg:JSON.stringify(o) }
}
