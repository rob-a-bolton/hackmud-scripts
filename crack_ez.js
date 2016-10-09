function(c,a) {
    var [l,t,s,p] = [a.l, a.t, ["open", "unlock", "release"], [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101]];
    var r,x,i;
    r={};
    x="";
    e={ ok:false };
    function m() {
        x=""+a.t.call(r);
        if(x.match(/CK_UN/))
            e.ok=true;
    }
    for(i=0; i<3; i++) {
        r[l]=s[i];
        m();
        if(!x.match(/ck com/))
            break;
    }
    i=0;
    while(i++<=9 && x.match(/dig/)) {
        r.digit=i;
        m();
    }
    i=0;
    while(i++<26 && x.match(/prime missing/)) {
        r.ez_prime=p[i];
        m();
    }
    if(e.ok){
        e.msg=JSON.stringify(r);
    } else {
        e.msg={req:r,res:x}
    }
    return e;
}
