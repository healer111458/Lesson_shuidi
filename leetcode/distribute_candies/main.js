<<<<<<< HEAD
var distributeCandies = (candies) => {
    //去重 数据结构 有种结构 数组容器 不重复 set在ES6才有;

    const count = new Set(candies);
    console.log(count);
    console.log(count.size);    
    return Math.min(count.size,candies.length>>1);//数学对象
}
distributeCandies([1,1,2,2,3,3]);
=======
var distributeCandies = (candies) => {
    //去重 数据结构 有种结构 数组容器 不重复 set在ES6才有;

    const count = new Set(candies);
    console.log(count);
    console.log(count.size);    
    return Math.min(count.size,candies.length>>1);//数学对象
}
distributeCandies([1,1,2,2,3,3]);
>>>>>>> 30450c61afa5694556f31ce14e3e5a4c2596cdbe
