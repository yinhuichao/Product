//top3 or top5 or top9
var jsonData = [
                {
                    "name": "大数据",
                    "type": "root",
                    "children": [
                        { "name": "文思海辉", "type": "company", "children": [{ "name": "", "type": "child" }] },
                        { "name": "博斯信息技术（集团）有限公司", "type": "company", "children": [{ "name": "", "type": "child" }] },
                        { "name": "甲骨文软件系统有限公司", "type": "company", "children": [{ "name": "", "type": "child" }] },
                        { "name": "北京数海科技有限公司", "type": "company", "children": [{ "name": "", "type": "child" }] },
                        { "name": "北京博海云天有限公司", "type": "company", "children": [{ "name": "", "type": "child" }] },
                        { "name": "阿里巴巴集团", "type": "company", "children": [{ "name": "", "type": "child" }] },
                        { "name": "百度集团", "type": "company", "children": [{ "name": "", "type": "child" }] },
                        { "name": "博彦科技", "type": "company", "children": [{ "name": "", "type": "child" }] },
                        { "name": "阿卡迈（北京）信息技术有限公司", "type": "company", "children": [{ "name": "", "type": "child" }] },
                        { "name": "艾默生网络能源有限公司", "type": "company", "children": [{ "name": "", "type": "child" }] },
                        { "name": "北京市海淀区", "type": "area", "children": [{ "name": "", "type": "child" }] },
                        { "name": "天津市和平区", "type": "area", "children": [{ "name": "", "type": "child" }] },
                        { "name": "石家庄市新平区", "type": "area", "children": [{ "name": "", "type": "child" }] },
                        { "name": "北京市朝阳区", "type": "area", "children": [{ "name": "", "type": "child" }] },
                        { "name": "承德市丰宁坝上草原", "type": "area", "children": [{ "name": "", "type": "child" }] },
                        { "name": "上海市矿工去", "type": "area", "children": [{ "name": "", "type": "child" }] },
                        { "name": "南京市海淀区", "type": "area", "children": [{ "name": "", "type": "child" }] },
                        { "name": "沈阳市小沈阳", "type": "area", "children": [{ "name": "", "type": "child" }] },
                        { "name": "邯郸市广平县", "type": "area", "children": [{ "name": "", "type": "child" }] },
                        { "name": "秦皇岛看海区", "type": "area", "children": [{ "name": "", "type": "child" }] },
                        { "name": "李彦宏", "type": "people", "children": [{ "name": "", "type": "child" }] },
                        { "name": "毕胜", "type": "people", "children": [{ "name": "", "type": "child" }] },
                        { "name": "马化腾", "type": "people", "children": [{ "name": "", "type": "child" }] },
                        { "name": "王菲", "type": "people", "children": [{ "name": "", "type": "child" }] },
                        { "name": "李彦宏", "type": "people", "children": [{ "name": "", "type": "child" }] },
                        { "name": "刘强东", "type": "people", "children": [{ "name": "", "type": "child" }] },
                        { "name": "奶茶妹", "type": "people", "children": [{ "name": "", "type": "child" }] },
                        { "name": "毕胜", "type": "people", "children": [{ "name": "", "type": "child" }] },
                    ]
                },
                {
                    "name": "数据应用",
                    "type": "root",
                    "children": [
                        { "name": "中兴通", "type": "company", "children": [{ "name": "", "type": "child" }] },
                        { "name": "文思海辉", "type": "company", "children": [{ "name": "", "type": "child" }] },
                        { "name": "淘宝信息技术有限公司", "type": "company", "children": [{ "name": "", "type": "child" }] },
                        { "name": "北京数海科技有限公司", "type": "company", "children": [{ "name": "", "type": "child" }] },
                        { "name": "北京博海云天有限公司", "type": "company", "children": [{ "name": "", "type": "child" }] },
                        { "name": "阿里巴巴集团", "type": "company", "children": [{ "name": "", "type": "child" }] },
                        { "name": "百度集团", "type": "company", "children": [{ "name": "", "type": "child" }] },
                        { "name": "博彦科技", "type": "company", "children": [{ "name": "", "type": "child" }] },
                        { "name": "阿卡迈（北京）信息技术有限公司", "type": "company", "children": [{ "name": "", "type": "child" }] },
                        { "name": "艾默生网络能源有限公司", "type": "company", "children": [{ "name": "", "type": "child" }] },
                        { "name": "北京市海淀区", "type": "area", "children": [{ "name": "", "type": "child" }] },
                        { "name": "北京市朝阳区", "type": "area", "children": [{ "name": "", "type": "child" }] },
                        { "name": "河北省邯郸市", "type": "area", "children": [{ "name": "", "type": "child" }] },
                        { "name": "天津市和平区", "type": "area", "children": [{ "name": "", "type": "child" }] },
                        { "name": "承德市丰宁坝上草原", "type": "area", "children": [{ "name": "", "type": "child" }] },
                        { "name": "上海市矿工去", "type": "area", "children": [{ "name": "", "type": "child" }] },
                        { "name": "南京市海淀区", "type": "area", "children": [{ "name": "", "type": "child" }] },
                        { "name": "沈阳市小沈阳", "type": "area", "children": [{ "name": "", "type": "child" }] },
                        { "name": "邯郸市广平县", "type": "area", "children": [{ "name": "", "type": "child" }] },
                        { "name": "秦皇岛看海区", "type": "area", "children": [{ "name": "", "type": "child" }] },
                        { "name": "周杰伦", "type": "people", "children": [{ "name": "", "type": "child" }] },
                        { "name": "马云", "type": "people", "children": [{ "name": "", "type": "child" }] },
                        { "name": "李彦宏", "type": "people", "children": [{ "name": "", "type": "child" }] },
                        { "name": "马化腾", "type": "people", "children": [{ "name": "", "type": "child" }] },
                        { "name": "李彦宏", "type": "people", "children": [{ "name": "", "type": "child" }] },
                        { "name": "刘强东", "type": "people", "children": [{ "name": "", "type": "child" }] },
                        { "name": "奶茶妹", "type": "people", "children": [{ "name": "", "type": "child" }] },
                        { "name": "毕胜", "type": "people", "children": [{ "name": "", "type": "child" }] },
                    ]
                },
                {
                    "name": "互联网+",
                    "type": "root",
                    "children": [
                        { "name": "软通动力信息技术（集团）有限公司", "type": "company", "children": [{ "name": "", "type": "child" }] },
                        { "name": "智博云天有限公司", "type": "company", "children": [{ "name": "", "type": "child" }] },
                        { "name": "乐淘奇品文化有限公司", "type": "company", "children": [{ "name": "", "type": "child" }] },
                        { "name": "北京数海科技有限公司", "type": "company", "children": [{ "name": "", "type": "child" }] },
                        { "name": "北京博海云天有限公司", "type": "company", "children": [{ "name": "", "type": "child" }] },
                        { "name": "阿里巴巴集团", "type": "company", "children": [{ "name": "", "type": "child" }] },
                        { "name": "百度集团", "type": "company", "children": [{ "name": "", "type": "child" }] },
                        { "name": "博彦科技", "type": "company", "children": [{ "name": "", "type": "child" }] },
                        { "name": "阿卡迈（北京）信息技术有限公司", "type": "company", "children": [{ "name": "", "type": "child" }] },
                        { "name": "艾默生网络能源有限公司", "type": "company", "children": [{ "name": "", "type": "child" }] },
                        { "name": "邯郸市广平县", "type": "area", "children": [{ "name": "", "type": "child" }] },
                        { "name": "保定市安国区", "type": "area", "children": [{ "name": "", "type": "child" }] },
                        { "name": "北京市南四环", "type": "area", "children": [{ "name": "", "type": "child" }] },
                        { "name": "石家庄市新平区", "type": "area", "children": [{ "name": "", "type": "child" }] },
                        { "name": "承德市丰宁坝上草原", "type": "area", "children": [{ "name": "", "type": "child" }] },
                        { "name": "上海市矿工去", "type": "area", "children": [{ "name": "", "type": "child" }] },
                        { "name": "南京市海淀区", "type": "area", "children": [{ "name": "", "type": "child" }] },
                        { "name": "沈阳市小沈阳", "type": "area", "children": [{ "name": "", "type": "child" }] },
                        { "name": "邯郸市广平县", "type": "area", "children": [{ "name": "", "type": "child" }] },
                        { "name": "秦皇岛看海区", "type": "area", "children": [{ "name": "", "type": "child" }] },
                        { "name": "刘强东", "type": "people", "children": [{ "name": "", "type": "child" }] },
                        { "name": "马云", "type": "people", "children": [{ "name": "", "type": "child" }] },
                        { "name": "马化腾", "type": "people", "children": [{ "name": "", "type": "child" }] },
                        { "name": "王菲", "type": "people", "children": [{ "name": "", "type": "child" }] },
                        { "name": "李彦宏", "type": "people", "children": [{ "name": "", "type": "child" }] },
                        { "name": "刘天文", "type": "people", "children": [{ "name": "", "type": "child" }] },
                        { "name": "奶茶妹", "type": "people", "children": [{ "name": "", "type": "child" }] },
                        { "name": "毕胜", "type": "people", "children": [{ "name": "", "type": "child" }] },
                    ]
                },
                {
                    "name": "云计算",
                    "type": "root",
                    "children": [
                        { "name": "艾默生网络能源有限公司", "type": "company", "children": [{ "name": "", "type": "child" }] },
                        { "name": "牛气冲天有限公司", "type": "company", "children": [{ "name": "", "type": "child" }] },
                        { "name": "天生丽质有限公司", "type": "company", "children": [{ "name": "", "type": "child" }] },
                        { "name": "北京数海科技有限公司", "type": "company", "children": [{ "name": "", "type": "child" }] },
                        { "name": "北京博海云天有限公司", "type": "company", "children": [{ "name": "", "type": "child" }] },
                        { "name": "阿里巴巴集团", "type": "company", "children": [{ "name": "", "type": "child" }] },
                        { "name": "百度集团", "type": "company", "children": [{ "name": "", "type": "child" }] },
                        { "name": "博彦科技", "type": "company", "children": [{ "name": "", "type": "child" }] },
                        { "name": "阿卡迈（北京）信息技术有限公司", "type": "company", "children": [{ "name": "", "type": "child" }] },
                        { "name": "艾默生网络能源有限公司", "type": "company", "children": [{ "name": "", "type": "child" }] },
                        { "name": "云南南路", "type": "area", "children": [{ "name": "", "type": "child" }] },
                        { "name": "昌平区中关村", "type": "area", "children": [{ "name": "", "type": "child" }] },
                        { "name": "深圳市北风区", "type": "area", "children": [{ "name": "", "type": "child" }] },
                        { "name": "石家庄市新平区", "type": "area", "children": [{ "name": "", "type": "child" }] },
                        { "name": "承德市丰宁坝上草原", "type": "area", "children": [{ "name": "", "type": "child" }] },
                        { "name": "上海市矿工去", "type": "area", "children": [{ "name": "", "type": "child" }] },
                        { "name": "南京市海淀区", "type": "area", "children": [{ "name": "", "type": "child" }] },
                        { "name": "沈阳市小沈阳", "type": "area", "children": [{ "name": "", "type": "child" }] },
                        { "name": "邯郸市广平县", "type": "area", "children": [{ "name": "", "type": "child" }] },
                        { "name": "秦皇岛看海区", "type": "area", "children": [{ "name": "", "type": "child" }] },
                        { "name": "成龙", "type": "people", "children": [{ "name": "", "type": "child" }] },
                        { "name": "马云", "type": "people", "children": [{ "name": "", "type": "child" }] },
                        { "name": "李嘉诚", "type": "people", "children": [{ "name": "", "type": "child" }] },
                        { "name": "王菲", "type": "people", "children": [{ "name": "", "type": "child" }] },
                        { "name": "李彦宏", "type": "people", "children": [{ "name": "", "type": "child" }] },
                        { "name": "刘天文", "type": "people", "children": [{ "name": "", "type": "child" }] },
                        { "name": "奶茶妹", "type": "people", "children": [{ "name": "", "type": "child" }] },
                        { "name": "毕胜", "type": "people", "children": [{ "name": "", "type": "child" }] },
                    ]
                },
                {
                    "name": "可视化",
                    "type": "root",
                    "children": [
                        { "name": "IBM中国有限公司", "type": "company", "children": [{ "name": "", "type": "child" }] },
                        { "name": "搜狗有限公司", "type": "company", "children": [{ "name": "", "type": "child" }] },
                        { "name": "乐淘奇品文化有限公司", "type": "company", "children": [{ "name": "", "type": "child" }] },
                        { "name": "北京数海科技有限公司", "type": "company", "children": [{ "name": "", "type": "child" }] },
                        { "name": "北京博海云天有限公司", "type": "company", "children": [{ "name": "", "type": "child" }] },
                        { "name": "阿里巴巴集团", "type": "company", "children": [{ "name": "", "type": "child" }] },
                        { "name": "百度集团", "type": "company", "children": [{ "name": "", "type": "child" }] },
                        { "name": "博彦科技", "type": "company", "children": [{ "name": "", "type": "child" }] },
                        { "name": "阿卡迈（北京）信息技术有限公司", "type": "company", "children": [{ "name": "", "type": "child" }] },
                        { "name": "艾默生网络能源有限公司", "type": "company", "children": [{ "name": "", "type": "child" }] },
                        { "name": "北京中关村", "type": "area", "children": [{ "name": "", "type": "child" }] },
                        { "name": "天津市河北路", "type": "area", "children": [{ "name": "", "type": "child" }] },
                        { "name": "北京市南四环", "type": "area", "children": [{ "name": "", "type": "child" }] },
                        { "name": "石家庄市新平区", "type": "area", "children": [{ "name": "", "type": "child" }] },
                        { "name": "承德市丰宁坝上草原", "type": "area", "children": [{ "name": "", "type": "child" }] },
                        { "name": "上海市矿工去", "type": "area", "children": [{ "name": "", "type": "child" }] },
                        { "name": "南京市海淀区", "type": "area", "children": [{ "name": "", "type": "child" }] },
                        { "name": "沈阳市小沈阳", "type": "area", "children": [{ "name": "", "type": "child" }] },
                        { "name": "邯郸市广平县", "type": "area", "children": [{ "name": "", "type": "child" }] },
                        { "name": "秦皇岛看海区", "type": "area", "children": [{ "name": "", "type": "child" }] },
                        { "name": "雷东明", "type": "people", "children": [{ "name": "", "type": "child" }] },
                        { "name": "陈旭晖", "type": "people", "children": [{ "name": "", "type": "child" }] },
                        { "name": "李彦宏", "type": "people", "children": [{ "name": "", "type": "child" }] },
                        { "name": "王菲", "type": "people", "children": [{ "name": "", "type": "child" }] },
                        { "name": "马化腾", "type": "people", "children": [{ "name": "", "type": "child" }] },
                        { "name": "刘天文", "type": "people", "children": [{ "name": "", "type": "child" }] },
                        { "name": "奶茶妹", "type": "people", "children": [{ "name": "", "type": "child" }] },
                        { "name": "毕胜", "type": "people", "children": [{ "name": "", "type": "child" }] },
                    ]
                },
                {
                    "name": "物联网",
                    "type": "root",
                    "children": [
                        { "name": "方正有限公司", "type": "company", "children": [{ "name": "", "type": "child" }] },
                        { "name": "亚信科技有限公司", "type": "company", "children": [{ "name": "", "type": "child" }] },
                        { "name": "文思海辉", "type": "company", "children": [{ "name": "", "type": "child" }] },
                        { "name": "北京数海科技有限公司", "type": "company", "children": [{ "name": "", "type": "child" }] },
                        { "name": "北京博海云天有限公司", "type": "company", "children": [{ "name": "", "type": "child" }] },
                        { "name": "阿里巴巴集团", "type": "company", "children": [{ "name": "", "type": "child" }] },
                        { "name": "百度集团", "type": "company", "children": [{ "name": "", "type": "child" }] },
                        { "name": "博彦科技", "type": "company", "children": [{ "name": "", "type": "child" }] },
                        { "name": "阿卡迈（北京）信息技术有限公司", "type": "company", "children": [{ "name": "", "type": "child" }] },
                        { "name": "艾默生网络能源有限公司", "type": "company", "children": [{ "name": "", "type": "child" }] },
                        { "name": "秦皇岛北戴河", "type": "area", "children": [{ "name": "", "type": "child" }] },
                        { "name": "山东蓬莱", "type": "area", "children": [{ "name": "", "type": "child" }] },
                        { "name": "北京市四惠区", "type": "area", "children": [{ "name": "", "type": "child" }] },
                        { "name": "石家庄市新平区", "type": "area", "children": [{ "name": "", "type": "child" }] },
                        { "name": "承德市丰宁坝上草原", "type": "area", "children": [{ "name": "", "type": "child" }] },
                        { "name": "上海市矿工去", "type": "area", "children": [{ "name": "", "type": "child" }] },
                        { "name": "南京市海淀区", "type": "area", "children": [{ "name": "", "type": "child" }] },
                        { "name": "沈阳市小沈阳", "type": "area", "children": [{ "name": "", "type": "child" }] },
                        { "name": "邯郸市广平县", "type": "area", "children": [{ "name": "", "type": "child" }] },
                        { "name": "秦皇岛看海区", "type": "area", "children": [{ "name": "", "type": "child" }] },
                        { "name": "刘强东", "type": "people", "children": [{ "name": "", "type": "child" }] },
                        { "name": "马云", "type": "people", "children": [{ "name": "", "type": "child" }] },
                        { "name": "马化腾", "type": "people", "children": [{ "name": "", "type": "child" }] },
                        { "name": "王菲", "type": "people", "children": [{ "name": "", "type": "child" }] },
                        { "name": "李彦宏", "type": "people", "children": [{ "name": "", "type": "child" }] },
                        { "name": "刘天文", "type": "people", "children": [{ "name": "", "type": "child" }] },
                        { "name": "奶茶妹", "type": "people", "children": [{ "name": "", "type": "child" }] },
                        { "name": "毕胜", "type": "people", "children": [{ "name": "", "type": "child" }] },
                    ]
                },
                {
                    "name": "电商",
                    "type": "root",
                    "children": [
                        { "name": "阿卡迈（北京）信息技术有限公司", "type": "company", "children": [{ "name": "", "type": "child" }] },
                        { "name": "搜狐娱乐有限公司", "type": "company", "children": [{ "name": "", "type": "child" }] },
                        { "name": "土豆有限公司", "type": "company", "children": [{ "name": "", "type": "child" }] },
                        { "name": "北京数海科技有限公司", "type": "company", "children": [{ "name": "", "type": "child" }] },
                        { "name": "北京博海云天有限公司", "type": "company", "children": [{ "name": "", "type": "child" }] },
                        { "name": "阿里巴巴集团", "type": "company", "children": [{ "name": "", "type": "child" }] },
                        { "name": "百度集团", "type": "company", "children": [{ "name": "", "type": "child" }] },
                        { "name": "博彦科技", "type": "company", "children": [{ "name": "", "type": "child" }] },
                        { "name": "软通动力信息技术（集团）有限公司", "type": "company", "children": [{ "name": "", "type": "child" }] },
                        { "name": "艾默生网络能源有限公司", "type": "company", "children": [{ "name": "", "type": "child" }] },
                        { "name": "南宁市中山路", "type": "area", "children": [{ "name": "", "type": "child" }] },
                        { "name": "国贸大望路", "type": "area", "children": [{ "name": "", "type": "child" }] },
                        { "name": "中关村软件园", "type": "area", "children": [{ "name": "", "type": "child" }] },
                        { "name": "石家庄市新平区", "type": "area", "children": [{ "name": "", "type": "child" }] },
                        { "name": "承德市丰宁坝上草原", "type": "area", "children": [{ "name": "", "type": "child" }] },
                        { "name": "上海市矿工去", "type": "area", "children": [{ "name": "", "type": "child" }] },
                        { "name": "南京市海淀区", "type": "area", "children": [{ "name": "", "type": "child" }] },
                        { "name": "沈阳市小沈阳", "type": "area", "children": [{ "name": "", "type": "child" }] },
                        { "name": "邯郸市广平县", "type": "area", "children": [{ "name": "", "type": "child" }] },
                        { "name": "秦皇岛看海区", "type": "area", "children": [{ "name": "", "type": "child" }] },
                        { "name": "任正非", "type": "people", "children": [{ "name": "", "type": "child" }] },
                        { "name": "李彦宏", "type": "people", "children": [{ "name": "", "type": "child" }] },
                        { "name": "马化腾", "type": "people", "children": [{ "name": "", "type": "child" }] },
                        { "name": "王菲", "type": "people", "children": [{ "name": "", "type": "child" }] },
                        { "name": "李彦宏", "type": "people", "children": [{ "name": "", "type": "child" }] },
                        { "name": "刘天文", "type": "people", "children": [{ "name": "", "type": "child" }] },
                        { "name": "奶茶妹", "type": "people", "children": [{ "name": "", "type": "child" }] },
                        { "name": "毕胜", "type": "people", "children": [{ "name": "", "type": "child" }] },
                    ]
                },
                {
                    "name": "数博会",
                    "type": "root",
                    "children": [
                        { "name": "艾默生网络能源有限公司", "type": "company", "children": [{ "name": "", "type": "child" }] },
                        { "name": "博彦科技", "type": "company", "children": [{ "name": "", "type": "child" }] },
                        { "name": "北京数海科技有限公司", "type": "company", "children": [{ "name": "", "type": "child" }] },
                        { "name": "乐淘奇品文化有限公司", "type": "company", "children": [{ "name": "", "type": "child" }] },
                        { "name": "北京博海云天有限公司", "type": "company", "children": [{ "name": "", "type": "child" }] },
                        { "name": "阿里巴巴集团", "type": "company", "children": [{ "name": "", "type": "child" }] },
                        { "name": "百度集团", "type": "company", "children": [{ "name": "", "type": "child" }] },
                        { "name": "博彦科技", "type": "company", "children": [{ "name": "", "type": "child" }] },
                        { "name": "阿卡迈（北京）信息技术有限公司", "type": "company", "children": [{ "name": "", "type": "child" }] },
                        { "name": "软通动力信息技术（集团）有限公司", "type": "company", "children": [{ "name": "", "type": "child" }] },
                        { "name": "沈阳市丰台区", "type": "area", "children": [{ "name": "", "type": "child" }] },
                        { "name": "南京市矿金路", "type": "area", "children": [{ "name": "", "type": "child" }] },
                        { "name": "北京市南四环", "type": "area", "children": [{ "name": "", "type": "child" }] },
                        { "name": "石家庄市新平区", "type": "area", "children": [{ "name": "", "type": "child" }] },
                        { "name": "承德市丰宁坝上草原", "type": "area", "children": [{ "name": "", "type": "child" }] },
                        { "name": "上海市矿工去", "type": "area", "children": [{ "name": "", "type": "child" }] },
                        { "name": "南京市海淀区", "type": "area", "children": [{ "name": "", "type": "child" }] },
                        { "name": "沈阳市小沈阳", "type": "area", "children": [{ "name": "", "type": "child" }] },
                        { "name": "邯郸市广平县", "type": "area", "children": [{ "name": "", "type": "child" }] },
                        { "name": "秦皇岛看海区", "type": "area", "children": [{ "name": "", "type": "child" }] },
                        { "name": "成清波", "type": "people", "children": [{ "name": "", "type": "child" }] },
                        { "name": "李嘉诚", "type": "people", "children": [{ "name": "", "type": "child" }] },
                        { "name": "许家印", "type": "people", "children": [{ "name": "", "type": "child" }] },
                        { "name": "王菲", "type": "people", "children": [{ "name": "", "type": "child" }] },
                        { "name": "李彦宏", "type": "people", "children": [{ "name": "", "type": "child" }] },
                        { "name": "刘天文", "type": "people", "children": [{ "name": "", "type": "child" }] },
                        { "name": "奶茶妹", "type": "people", "children": [{ "name": "", "type": "child" }] },
                        { "name": "毕胜", "type": "people", "children": [{ "name": "", "type": "child" }] },
                    ]
                },
                {
                    "name": "可视化",
                    "type": "root",
                    "children": [
                        { "name": "阿里巴巴集团", "type": "company", "children": [{ "name": "", "type": "child" }] },
                        { "name": "百度集团", "type": "company", "children": [{ "name": "", "type": "child" }] },
                        { "name": "博彦科技", "type": "company", "children": [{ "name": "", "type": "child" }] },
                        { "name": "北京数海科技有限公司", "type": "company", "children": [{ "name": "", "type": "child" }] },
                        { "name": "北京博海云天有限公司", "type": "company", "children": [{ "name": "", "type": "child" }] },
                        { "name": "软通动力信息技术（集团）有限公司", "type": "company", "children": [{ "name": "", "type": "child" }] },
                        { "name": "百度集团", "type": "company", "children": [{ "name": "", "type": "child" }] },
                        { "name": "博彦科技", "type": "company", "children": [{ "name": "", "type": "child" }] },
                        { "name": "阿卡迈（北京）信息技术有限公司", "type": "company", "children": [{ "name": "", "type": "child" }] },
                        { "name": "艾默生网络能源有限公司", "type": "company", "children": [{ "name": "", "type": "child" }] },
                        { "name": "北京市海淀区", "type": "area", "children": [{ "name": "", "type": "child" }] },
                        { "name": "北京市昌平区", "type": "area", "children": [{ "name": "", "type": "child" }] },
                        { "name": "武汉软件园", "type": "area", "children": [{ "name": "", "type": "child" }] },
                        { "name": "石家庄市新平区", "type": "area", "children": [{ "name": "", "type": "child" }] },
                        { "name": "承德市丰宁坝上草原", "type": "area", "children": [{ "name": "", "type": "child" }] },
                        { "name": "上海市矿工去", "type": "area", "children": [{ "name": "", "type": "child" }] },
                        { "name": "南京市海淀区", "type": "area", "children": [{ "name": "", "type": "child" }] },
                        { "name": "沈阳市小沈阳", "type": "area", "children": [{ "name": "", "type": "child" }] },
                        { "name": "邯郸市广平县", "type": "area", "children": [{ "name": "", "type": "child" }] },
                        { "name": "秦皇岛看海区", "type": "area", "children": [{ "name": "", "type": "child" }] },
                        { "name": "杨澜", "type": "people", "children": [{ "name": "", "type": "child" }] },
                        { "name": "丁磊", "type": "people", "children": [{ "name": "", "type": "child" }] },
                        { "name": "曹德旺", "type": "people", "children": [{ "name": "", "type": "child" }] },
                        { "name": "王菲", "type": "people", "children": [{ "name": "", "type": "child" }] },
                        { "name": "李彦宏", "type": "people", "children": [{ "name": "", "type": "child" }] },
                        { "name": "刘天文", "type": "people", "children": [{ "name": "", "type": "child" }] },
                        { "name": "奶茶妹", "type": "people", "children": [{ "name": "", "type": "child" }] },
                        { "name": "毕胜", "type": "people", "children": [{ "name": "", "type": "child" }] },
                    ]
                }
];