// who likes it?
//实现一个函数，参数是一个数组（名字），
// []  "no one likes this"
// ["Peter"]  "Peter likes this"
//["Jacob","Alex"]  "Jacob and Alex like this"
//["Max","John","Mark"]   "Max,John and Mark like this"
//["Alex","Max","John","Mark"]  "Alex,Max and 2 others like this"


// const likes = names => {
//     switch (names.length) {
//         case 0: return 'no one likes this'
//         case 1: return names[0] + ' likes this'
//         case 2: return names[0] + ' and ' + names[1] + ' like this'
//         case 3: return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this'
//         default: return names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others like this'
//     }
//   }
// const likes = names =>{
//     const templates = [
//         'no one likes this',
//         '{name} likes this', //{name}=name[0]
//         '{name} and {name} likes this',//{name}=name[0] and name[1]
//         '{name},{name} and {name} likes this',//{name}=name[0],name[1] and name[2]
//         '{name},{name} and {n} others likes this',//{name}=name[0],name[1] and {n}=names.length-2
//     ];
//     let idx = Math.min(names.lenth,4);
//     return templates[idx].replace(/{name}|{n}/g,function(val) {
//        // console.log(val);
//        return val === '{name}'?names.shift():names.length
//     });
// }
// console.log(likes(["Alex","Max","John","Mark"]));


const likes=names=>{
    const templates=[
        'no one likes this',  //直接返回
        '{name} likes this',   //{name} names[0]
        '{name} and {name} like this',//{name} names[0] names[1]
        '{name},{name} and {name} like this',//{name} names[0] names[1] names[2]
        '{name},{name} and {n} others like this'//name} names[0] names[1]  ()返回数组length-2
    ];
    let idx=Math.min(names.length,4);
    return templates[idx].replace(/{name}|{n}/g,function(val){   //|或者
       //  console.log(val);
       return val==='{name}'? names.shift():names.length
    });
}
console.log(likes(["Max","Jhon","Mark","jacob"]));