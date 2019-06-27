import img1 from '@/images/home/1.png';
import img2 from '@/images/home/2.png';
import img3 from '@/images/home/3.png';
import img4 from '@/images/home/4.png';
const Mock = require('mockjs');


let bannerlist = [];
const getBanner = function () {
  for (var i = 0; i < 10; i++) {
    var item = {
      id: 'img' + i,
      itemSrc: Mock.Random.image('200x100', '#894FC4', '#FFF', 'png', '我是第' + i + '张图片'),
      alt: Mock.mock('@url()'),
      href: Mock.mock('@url()'),
    }
    bannerlist.push(item);
  }
  console.log(bannerlist)
  return bannerlist
}


let homeDogList = [];
let homeCatList = [];
let dogs = ['泰迪', '哈士奇', '萨摩耶', '阿拉斯加犬', '雪纳瑞', '柯基', '金毛']
let cats = ['波斯猫', '橘猫', '加菲猫', '蓝猫', '布偶']
const getProList = function () {
  for (var i = 0; i < 5; i++) {
    let item = {
      id: 'dog' + i,
      type: 1, // 1 表示 狗
      title: dogs[Math.floor(Math.random() * dogs.length)],
      itemSrc: Mock.Random.image('100x100', Mock.mock('@color()')),
      color: Mock.mock('@color()'),
      'sex': i % 2
    }
    homeDogList.push(item)
  }
 
  for (var i = 0; i < 6; i++) {
    let item = {
      id: 'cat' + i,
      type: 2, // 2 表示 猫
      title: cats[Math.floor(Math.random() * cats.length)],
      itemSrc: Mock.Random.image('100x100', Mock.mock('@color()')),
      color: Mock.mock('@color()'),
      'sex': i % 2
    }
    homeCatList.push(item)
  }
  

  return {
    dogList: homeDogList,
    catList: homeCatList,
    homeGoodsList: homeGoodsList
  }
}
let homeGoodsList = []
const getHomeGoodsList = function(){
  homeGoodsList = [
    {src:img1},{src:img2},{src:img3},{src:img4},{src:'/static/media/2.a245895a.png'},
  ]
  return homeGoodsList
  }

Mock.mock('http://www.daxunxun.com/banner', 'get', getBanner)
Mock.mock('http://www.daxunxun.com/douban', 'get', getProList)
Mock.mock('http://www.xiaoxunxun.com/goods','get',getHomeGoodsList)
