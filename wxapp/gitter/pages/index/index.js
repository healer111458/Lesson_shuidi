const github = require('../../api/github.js');

const timeRange = [
  {label : 'Daily', value: 'Daily'},
  {label : 'Weekly', value: 'Weekly'},
  {label : 'Monthly', value: 'Monthly'},
]
const languages = [
  'All',
  'C', 'CSS', 'C#', 'C++',
  'Dart', 'Dockerfile',
  'Erlang',
  'Gradle', 'Go',
  'HTML', 'Haskell',
  'Java', 'JavaScript', 'JSON', 'Julia',
  'Kotlin',
  'MATLAB',
  'Python', 'PHP',
  'R', 'Ruby', 'Rust',
  'Shell', 'SQL', 'Swift',
  'TeX',
  'Vue'
].map(it => ({label: it, value: it}))
const sinceCacheKey = 'Trending:since';
const langCacheKey = 'Trending:lang'; 
Page({
  data: {
    since: timeRange[wx.getStorageSync(sinceCacheKey)] || timeRange[0],  //Sync()  同步
    lang: languages[wx.getStorageSync(langCacheKey)] || languages[0],   
    selectedIndices: [wx.getStorageSync(sinceCacheKey) || 0,wx.getStorageSync(langCacheKey) || 0], // picker value
    selectorValues: [timeRange, languages],
  },
  changeFilter(event) {
    const selectedIndices = event.detail.value;
    console.log(selectedIndices);

    this.setData({
      selectedIndices,
      since: timeRange[selectedIndices[0]],
      lang: languages[selectedIndices[1]]
    });
    wx.startPullDownRefresh();
  },
  onPullDownRefresh() {
    //  console.log('--------');
    this.reloadData();
  },
  reloadData() {
    // trending time language 
    const [timeIndex,langIndex] = this.data.selectedIndices;
    const lang = languages[langIndex] || languages[0];
    const since = timeRange[timeIndex] || timeRange[0];
    this.setData({
      lang,
      since
    },() => {
      //确保响应式更新之后在执行
      //setStorage 数据存储
      wx.setStorage({
        key: sinceCacheKey,
        data:timeIndex
      })
      wx.setStorage({
        key: langCacheKey,
        data:langIndex
      })
    });
    // github.trendings(since.value,lang.value)   返回 Promise的函数
    github.trendings(since.value,lang.value).then(data =>{
      console.log(data);
    })
    .catch(() => {
      console.log('出错了');
    })
  }
})