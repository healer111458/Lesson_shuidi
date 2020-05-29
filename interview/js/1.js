function chageObjProperty(o) {
    o.siteUrl = "http://www.baidu.com";
    o = new Object();
    o.siteUrl = "http://www.google.com";
  }
  
  
  let webSite = new Object();
  chageObjProperty(webSite);
  console.log(webSite.siteUrl);