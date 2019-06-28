// homegoodslist
import img1 from '@/images/home/1.png';
import img2 from '@/images/home/2.png';
import img3 from '@/images/home/3.png';
import img4 from '@/images/home/4.png';
import img5 from '@/images/home/chanpin.png';
// goodsimglist
import img6 from '@/images/detail/detail-introduce.png';
import img7 from '@/images/detail/donot.png';
import img8 from '@/images/detail/champion.png';
import img9 from '@/images/detail/details.png';
import img10 from '@/images/detail/size.png';
import img11 from '@/images/detail/wash.png';
import img12 from '@/images/detail/bandstory.png';


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
let goodsimglist = []

const getGoodsImgList =function () {
  goodsimglist = [{src:img6},{src:img7},{src:img8},{src:img9},{src:img10},{src:img11},{src:img12}]
  return goodsimglist
}

let homeGoodsList = []
const getHomeGoodsList = function(){
  homeGoodsList = [
    {src:img1,title:'SHISEIDO 资生堂 UNO 男...',describe:'男人也要重视洗脸',pricenow:'22',priceold:'33'},{src:img2,title:'MEDIAN 麦迪安专业消理...',describe:'笑容自带闪光灯',pricenow:'11',priceold:'22'},{src:img3,title:'MOROCCANOIL摩洛哥油 ...',describe:' 再受损也能起死回生 ',pricenow:'3',priceold:'6'},{src:img4,title:'MEDIAN 麦迪安专业消理...',describe:' 柠檬酸钙易吸收 ',pricenow:'60',priceold:'123'},{src:img5,title:'Swisse 钙&VD片 150片/...',describe:' DIY蓝胖子冰淇凌 ',pricenow:'111',priceold:'473'},{src:img5,title:'Maxigenes美可卓 全脂高...',describe:' DIY蓝胖子冰淇凌 ',pricenow:'343',priceold:'786'},
  ]
  return homeGoodsList
  }

Mock.mock('http://www.daxunxun.com/banner', 'get', getBanner)
Mock.mock('http://www.daxunxun.com/douban', 'get', getProList)
Mock.mock('http://www.xiaoxunxun.com/goods','get',getHomeGoodsList)
Mock.mock('http://www.wangchengye.com/imglist','get',getGoodsImgList)
