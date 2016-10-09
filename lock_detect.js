function(context, args)
{
    if(!(args && args.t)) {
        return { ok:false, msg: "No !t!arget provided" };
    }

    var s = args.t.call({});
    var m = ("" + s).match(/([^ ]+) lock/);
    if(m) {
        return { ok:true, msg: m[0] };
    } else {
        return { ok:false, msg: "Not a lock" };
    }
}
