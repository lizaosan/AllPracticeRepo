window.onload = init;

function init() {
    var button = document.getElementById("confirmButton");
    button.onclick = handleButtonClick;
}

function handleButtonClick() {
    document.getElementById("herosaid").innerHTML = "";

    var textInput = document.getElementById("keywordInput");
    var keyword = textInput.value;

    if (keyword === "毒牙" || keyword === "子辰" || keyword === "范子辰") {
        var say = (`「銃三小，林北很忙！有屁快放！」`);
    }

    else if (keyword === "變身" || keyword === "英雄" || keyword === "百變怪" || keyword === "獸化" || keyword === "transfur") {
        var say = (`毒牙「我們透過百變怪的變身招式改變自己的樣貌來變成英雄。」</br>碎爪「因為有這樣子的獸化能力，所以我們可以使用寶可夢的招式喔～」</br>毒牙「例如這樣。」</br><em>【系統訊息】毒牙使出了猛毒尾，對碎爪效果卓越。</em></br>碎爪「嘎啊啊啊啊啊！」（瀕死）`);
    }

    else if (keyword === "男朋友" || keyword === "喜歡" || keyword === "愛" || keyword === "交往" || keyword === "情人" || keyword === "情侶" || keyword === "愛人") {
        var say = (`毒牙「我才沒有很喜歡他咧！幹！你問這他媽三小問題！」</br>碎爪「我超喜歡毒牙醬的！總有一天我一定要讓他親口說出他喜歡我這件事！」`);
    }

    else if (keyword === "碎爪" || keyword === "毛又展" || keyword === "又展") {
        var say = (`「我是碎爪！貓鼬斬的獸化英雄！本名是毛又展，有諧音關係什麼的…這一定只是個巧合！」`);
    }

    else if (keyword === "你好" || keyword === "哈囉" || keyword === "安安") {
        var say = (`碎爪「嗨～～～你好啊！今天的毒牙碎爪也要活力充沛★精神飽滿！啾咪(ゝ∀･)」</br>毒牙「你也太熱情了吧！？」`);
    }

    else if (keyword === "夏天" || keyword === "暑假" || keyword === "熱" || keyword === "冷氣" || keyword === "冰棒" || keyword === "冷氣" || keyword === "冰淇淋") {
        var say = (`碎爪「好想要去海邊玩水喔…」</br>毒牙「那太麻煩了吧…在家吹冷氣吃冰棒不就好了嗎？」</br>碎爪「那我要吃毒牙的棒ㄅ…冰棒！一定很好吃！」</br>毒牙「剛剛那是性騷擾對不對！我沒說錯，我沒說錯吧！？」`);
    }

    else if (keyword === "寶可夢" || keyword === "神奇寶貝" || keyword === "精靈寶可夢" || keyword === "叉字蝠" || keyword === "收服" || keyword === "寶貝球" || keyword === "精靈球") {
        var say = (`碎爪「我好羨慕毒牙他有一個叉字蝠，他們感情總是很好。但我的爸媽不允許我擁有自己的寶可夢。」</br>毒牙「是他自己從超音蝠的時期就死纏爛打，害我每天晚上要給他一顆蘋果。」</br>碎爪「所以我對你死纏爛打你也會給我你的愛嗎♥」</br>毒牙「我會給你一發破壞死光。」`);
    }

    else if (keyword === "膠衣" || keyword === "乳膠衣" || keyword === "緊身" || keyword === "黏液" || keyword === "味道" || keyword === "體液" || keyword === "能量") {
        var say = (`毒牙「百變怪以人類的體液作為能量…所以時常就要變身來餵養牠們。」</br>碎爪「嘿嘿…不管是口水啊汗水啊還是Ｏ液…」</br>毒牙「幹！說那麼仔細幹三小！」</br>碎爪「所以有的時候我們變身後的乳膠衣會有一絲絲的氣味，那個其實是我們的味道喔>w<」</br>毒牙「就叫你不要說得這麼詳細了！！」`);
    }

    else if (keyword === "18禁" || keyword === "糟糕" || keyword === "髒" || keyword === "色情" || keyword === "變態" || keyword === "性愛" || keyword === "攻受") {
        var say = (`碎爪「嘿嘿嘿…我就知道有人會問這個。」</br>毒牙「欸，碎爪，你，你冷靜一點。不要過來！」</br>碎爪「不行♥既然人家都說要看了！當然要好好服務他們呀！」</br>毒牙「幹！不要！快住手 /// 不要啦！啊…哈啊…！」`);
    }

    else if (keyword === ""){
        var sayNothing = [
            (`碎爪「你什麼都沒說，我也不知道要說什麼耶。那我唱歌給你聽好了！</br><em>【系統訊息】毒牙用唇語叫你快逃。`),
            (`毒牙「…你剛剛有說什麼嗎？反正有問題就快問，趁我還有心情的時候。」`),
            (`碎爪「欸欸欸…電腦好像有點問題，我剛剛沒看見你對我說什麼！…啊！原來是真的沒有說！」`),
            (`毒牙「如果沒有什麼要說的話，那我先走了。」</br>碎爪「不可以啦毒牙！人家只是還在想！」</br>毒牙「好啦好啦…你可以放開我了嗎？噁心死了。」`),
            (`碎爪「我最喜歡毒牙醬了！」</br>毒牙「他才沒有問你問題！他什麼都沒問！」`),
            (`毒牙「zzz…ZZZ…」</br>碎爪「嘿嘿嘿…」拿著手機偷拍毒牙睡著的模樣。`),
        ] 
        var randomIndex = Math.floor( sayNothing.length * Math.random() ); 
        var say = sayNothing[ randomIndex ];
    }

    else {
        var sayOthers = [
            (`毒牙「這個事情我不知道怎麼說。」</br>碎爪「我們聊點別的更有意思的吧？像是暑假去哪玩啊～之類的！」`),
            (`毒牙「去問碎爪。」</br>碎爪「等等，毒牙你這樣太不負責任了！」</br>毒牙「白癡問題當然要白癡回答。」</br>碎爪「QQ」`),
            (`碎爪「寶可夢中心要推出新的貓鼬斬布偶！買爆！我要買十個！」</br>毒牙「…碎爪又來了，這種狀況下沒辦法問他問題。你要不要晚點再來問？」`),
            (`毒牙「街頭塗鴉這種事情是很講究天分的。」</br>碎爪「可是…毒牙…」</br>毒牙「很多人以為只要撇一些無聊的線條就是塗鴉了！怎麼可能！構圖呢？配色呢？涵義呢？平衡呢？別太天真了！」</br>碎爪「嘿…剛剛有人提到塗鴉關鍵字嘛…應該沒有吧。」`),
            (`碎爪「十萬伏特！破壞死光！噴射火焰！</br>毒牙「你在幹什麼？！」</br>碎爪「練習喊出絕招名字呀！這樣才夠酷夠炫！」</br>毒牙「我一定是瘋了才會關心你。你怎麼不好好回答別人問題！」`),
            (`碎爪「欸～那是什麼？可以吃嗎？」</br>毒牙「你第一個想到的是吃嘛！？」`),
        ];
        var randomIndex = Math.floor( sayOthers.length * Math.random() ); 
        var say = sayOthers[ randomIndex ];
    }

    var p = document.createElement("p");
    p.innerHTML = say;
    var div = document.getElementById("herosaid");
    div.appendChild(p);
}
