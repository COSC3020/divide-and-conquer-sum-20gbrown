function divideAndConquerSum(a){
    if (a.length == 0){
        return 0;
    }

    if (a.length == 1) {
        return a[0];
    }
    
    var mid1 = Math.floor(a.length/3);
    var mid2 = Math.floor((mid1 + a.length)/2);
    
    return divideAndConquerSum(a.slice(0,mid1))+divideAndConquerSum(a.slice(mid1,mid2))+divideAndConquerSum(a.slice(mid2));
}

/*
function msort(x, lo, hi, tmp) {
    if(lo >= hi) return;
    var mid = Math.floor((lo+hi)/2);
    msort(x, lo, mid, tmp);
    msort(x, mid+1, hi, tmp);
    merge(x, lo, mid, hi, tmp);
}

function mergesort(x) {
    var tmp = [];
    msort(x, 0, x.length - 1, tmp);
}
*/
    


