exports.index = function (req,res){

    res.render('./static/index',{
      friendships: [
        {
          link: "http://www.uc.cn",
          icon: "./static/imgs/jason.png",
          title: "JasonChen Coffee"
        },
        {
          link: "http://www.uc.cn",
          icon: "./static/imgs/coffee.png",
          title: "JasonChen Coffee"
        }
      ],
      indexNews: [
        {
          link: "http://localhost:3000/?page=circleLoading",
          src: "./static/imgs/news0.png"
        },
        {
          link: "http://localhost:3000/?page=index",
          src: "./static/imgs/news1.png"
        },
        {
          link: "http://localhost:3000/?page=circleLoading",
          src: "./static/imgs/news2.png"
        },
        {
          link: "http://localhost:3000/?page=polygon",
          src: "./static/imgs/news3.png"
        }
      ],
      rings: ["","","","","","","","","","","","","","",""]
    })

  }