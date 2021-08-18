import vk from '@vkontakte/vk-bridge';

let state = {
    data: {
        progress: 0,
        price: 0,
        appid: 0,
        homedir: '',
        sub: false,
        msg: false
    },
    api: {
        getPrice: e => {
            let p = (e[1] - Date.parse(e[0]) / 1e3) / 86400;
            state.data.price = Math.floor(p * 10);
        },
        showAd: () => (
            vk.send("VKWebAppShowNativeAds",{ad_format:"preloader"})
        ),
        share: () => (
            vk.send("VKWebAppShowStoryBox", {
                "background_type": "image",
                "url": state.data.homedir+"/getimage.php?sum="+state.data.price,
                "locked": true,
                "attachment": {
                    "text": "watch",
                    "type": "url",
                    "url": "https://vk.com/app"+state.data.appid
                }
            })
        ),
        subscribe: () => {
            if (state.data.sub) vk.send("VKWebAppJoinGroup",{group_id:state.data.sub})
        },
        messages: () => {
            if (state.data.msg) vk.send("VKWebAppAllowMessagesFromGroup",{group_id:state.data.msg})
        }
    }
}

vk.send("VKWebAppInit");
vk.send("VKWebAppSetViewSettings", {
    "status_bar_style": "light",
    "action_bar_color": "#5558da"
});
vk.send("VKWebAppGetUserInfo").then(e => e.id).then(e => {
    fetch('./getdate.php?id='+e).then(e => e.json()).then(e => {
        state.api.getPrice([e.rdate, e.now]);
        state.data.sub = e.sub;
        state.data.msg = e.msg;
    })
});

export default state;