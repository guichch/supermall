import {request} from './request'

export function getDetail(iid) {
  return request({
    url: '/detail',
    params: {
      iid
    }
  })
}

export function getRecommend() {
  return request({
    url: '/recommend'
  })
}

export class Goods {
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title;
    this.desc = itemInfo.desc;
    this.newPrice = itemInfo.price;
    this.oldPrice = itemInfo.oldPrice;
    this.discount = itemInfo.discountDesc;
    this.columns = columns;
    this.services = services;
    this.realPrice = itemInfo.lowNowPrice;
    this.discountBgColor = itemInfo.discountBgColor
  }
}

export class Shop {
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo;
    this.name = shopInfo.name;
    this.fans = shopInfo.cFans;
    this.sells = shopInfo.cSells;
    this.score = shopInfo.score;
    this.goodsCount = shopInfo.cGoods
  }
}

export class Params {
  constructor(itemParams) {
    this.tables = itemParams.rule.tables[0];
  }
}

export class ItemInfo {
  constructor(itemParams) {
    this.tables = itemParams.info.set;
  }
}

export class Product {
  constructor(img, goods, iid) {
    this.img = img;
    this.title = goods.title;
    this.price = goods.realPrice;
    this.desc = goods.desc;
    this.iid = iid;
  }
}