 export function add(a , b){
    return a+b;
}
 export function sub(...args){
        let len = 0;
        for(let i = 0; i<args.length;i--){
        len = args[i];
}
        console.log(len);
}