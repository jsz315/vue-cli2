const imgs = [
    'http://pic25.nipic.com/20121124/2457331_105658001311_2.jpg',
    'http://pic25.nipic.com/20121124/2457331_105529064398_2.jpg',
    'http://pic40.nipic.com/20140402/2457331_122423901000_2.jpg',
    'http://pic36.nipic.com/20131129/2457331_145009026000_2.jpg',
    'http://icon.nipic.com/BannerPic/20190620/design/20190620145429.jpg',
    'http://pic39.nipic.com/20140306/2457331_163220042321_2.jpg'
]

function getData(){
    let obj = {};
    obj.name = getWord();
    obj.img = getImg();
    obj.id = Date.now() + Math.random();
    return obj;
}

function getWord(){
    return `\\u${(Math.round(Math.random() * 20901) + 19968).toString(16)}`;
}

function getImg(){
    var n = Math.floor(Math.random() * imgs.length);
    return imgs[n];
}
module.exports = function (req, res) {
    var list = [];
    for(var i = 0; i < 8; i++){
        list.push(getData());
    }
    res.json({
        code: '400000',
        desc: '成功',
        list: list,
        success: true
    })
}