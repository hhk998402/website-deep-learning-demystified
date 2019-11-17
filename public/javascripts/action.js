var first_tab= [{
        title: "Introduction to Neural Networks — Part 1",
        description: "Defining Neural Networks",
        link: "https://medium.com/deep-learning-demystified/introduction-to-neural-networks-part-1-e13f132c6d7e",
        date: "May 26, 2019"
    },
    {
        title: "Introduction to Neural Networks — Part 2",
        description: "Training Neural Networks",
        link: "https://medium.com/deep-learning-demystified/introduction-to-neural-networks-part-2-c261a99f4138",
        date: "May 26, 2019"
    },
    {
        title: "Loss Functions Explained",
        description: "Intuitive explanations of various Loss Functions in Deep Learning",
        link: "https://medium.com/deep-learning-demystified/loss-functions-explained-3098e8ff2b27",
        date: "Sep 30, 2019"
    },
    {
        title: "Understanding Optimizers",
        description: "Exploring how the different popular optimizers in Deep Learning work",
        link: "https://medium.com/deep-learning-demystified/https-medium-com-deep-learning-demystified-understanding-optimizers-313b787a69fe",
        date: "Oct 7, 2019"
    },
    {
        title: "Generalization in Neural Networks",
        description: "Training Neural Networks",
        link: "https://medium.com/deep-learning-demystified/generalization-in-neural-networks-7765ee42ac23",
        date: "Oct 17, 2019"
    }
];

var second_tab = [];
var third_tab = [];

// POPULATING WITH FIRST TAB ON OPENING PAGE (BY DEFAULT)
if(!first_tab || first_tab.length <= 0){
    var work_in_progress = document.createElement("div");
    work_in_progress.className = "col-sm-12 workinprogress";

    var img = document.createElement("img");
    img.src = "/images/workinprogress.jpeg";

    work_in_progress.appendChild(img);
    elem.appendChild(work_in_progress);
}
else{
    var elem = document.getElementById("links");
    elem.innerHTML = "";
    var tab_title = document.createElement("h1");
    tab_title.className = "tab-title";
    tab_title.innerHTML = "Fundamentals of Deep Learning";
    elem.appendChild(tab_title);

    for(let i = 0; i<first_tab.length;i++){
        var tab_data = document.createElement("div");
        tab_data.className = "col-sm-12 tab-data";
        
        var title = document.createElement("h2");
        var link = document.createElement("a");
        link.href = first_tab[i].link;
        link.innerHTML = first_tab[i].title;
        link.className = "article-link";
        title.appendChild(link);

        var desc = document.createElement("h6");
        desc.innerHTML = first_tab[i].description;

        var date = document.createElement("p");
        date.innerHTML = first_tab[i].date;
        
        tab_data.appendChild(title);
        tab_data.appendChild(desc);
        tab_data.appendChild(date);
        elem.appendChild(tab_data);

        var hr = document.createElement("hr");
        hr.className = "link-separator";
        
        if(i<first_tab.length-1)
            elem.appendChild(hr);
    }
}

// FIRST TAB DATA POPULATION

$(".tab-1").on("click", function() {
    var elem = document.getElementById("links");
    elem.innerHTML = "";

    if(!first_tab || first_tab.length <= 0){
        var work_in_progress = document.createElement("div");
        work_in_progress.className = "col-sm-12 workinprogress";
    
        var img = document.createElement("img");
        img.src = "/images/workinprogress.jpeg";
    
        work_in_progress.appendChild(img);
        elem.appendChild(work_in_progress);
    }
    
    else{
        var tab_title = document.createElement("h1");
        tab_title.className = "tab-title";
        tab_title.innerHTML = "Fundamentals of Deep Learning";
        elem.appendChild(tab_title);

        for(let i = 0; i<first_tab.length;i++){
            var tab_data = document.createElement("div");
            tab_data.className = "col-sm-12 tab-data";
            
            var title = document.createElement("h2");
            var link = document.createElement("a");
            link.href = first_tab[i].link;
            link.innerHTML = first_tab[i].title;
            link.className = "article-link";
            title.appendChild(link);

            var desc = document.createElement("h6");
            desc.innerHTML = first_tab[i].description;

            var date = document.createElement("p");
            date.innerHTML = first_tab[i].date;
            
            tab_data.appendChild(title);
            tab_data.appendChild(desc);
            tab_data.appendChild(date);
            elem.appendChild(tab_data);

            var hr = document.createElement("hr");
            hr.className = "link-separator";

            if(i<first_tab.length-1)
                elem.appendChild(hr);
        }
    }
});

// SECOND TAB DATA POPULATION

$(".tab-2").on("click", function() {
    var elem = document.getElementById("links");
    elem.innerHTML = "";

    if(!second_tab || second_tab.length <= 0){
        var work_in_progress = document.createElement("div");
        work_in_progress.className = "col-sm-12 workinprogress";
    
        var img = document.createElement("img");
        img.src = "/images/workinprogress.jpeg";
    
        work_in_progress.appendChild(img);
        elem.appendChild(work_in_progress);
    }
    
    else{
        var tab_title = document.createElement("h1");
        tab_title.className = "tab-title";
        tab_title.innerHTML = "Deep Natural Language Processing";
        elem.appendChild(tab_title);

        for(let i = 0; i<second_tab.length;i++){
            var tab_data = document.createElement("div");
            tab_data.className = "col-sm-12 tab-data";
            
            var title = document.createElement("h2");
            var link = document.createElement("a");
            link.href = second_tab[i].link;
            link.innerHTML = second_tab[i].title;
            link.className = "article-link";
            title.appendChild(link);

            var desc = document.createElement("h6");
            desc.innerHTML = second_tab[i].description;

            var date = document.createElement("p");
            date.innerHTML = second_tab[i].date;
            
            tab_data.appendChild(title);
            tab_data.appendChild(desc);
            tab_data.appendChild(date);
            elem.appendChild(tab_data);

            var hr = document.createElement("hr");
            hr.className = "link-separator";

            if(i<second_tab.length-1)
                elem.appendChild(hr);
        }
    }
});

// THIRD TAB DATA POPULATION

$(".tab-3").on("click", function() {
    var elem = document.getElementById("links");
    elem.innerHTML = "";

    if(!third_tab || third_tab.length <= 0){
        var work_in_progress = document.createElement("div");
        work_in_progress.className = "col-sm-12 workinprogress";
    
        var img = document.createElement("img");
        img.src = "/images/workinprogress.jpeg";
    
        work_in_progress.appendChild(img);
        elem.appendChild(work_in_progress);
    }
    
    else{
        var tab_title = document.createElement("h1");
        tab_title.className = "tab-title";
        tab_title.innerHTML = "Deep Computer Vision";
        elem.appendChild(tab_title);

        for(let i = 0; i<third_tab.length;i++){
            var tab_data = document.createElement("div");
            tab_data.className = "col-sm-12 tab-data";
            
            var title = document.createElement("h2");
            var link = document.createElement("a");
            link.href = third_tab[i].link;
            link.innerHTML = third_tab[i].title;
            link.className = "article-link";
            title.appendChild(link);

            var desc = document.createElement("h6");
            desc.innerHTML = third_tab[i].description;

            var date = document.createElement("p");
            date.innerHTML = third_tab[i].date;
            
            tab_data.appendChild(title);
            tab_data.appendChild(desc);
            tab_data.appendChild(date);
            elem.appendChild(tab_data);

            var hr = document.createElement("hr");
            hr.className = "link-separator";

            if(i<third_tab.length-1)
                elem.appendChild(hr);
        }
    }
});

////////// CODE TO HANDLE TEXT TYPING EFFECT ON HOME PAGE

var TxtRotate = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10);
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  };
  
  TxtRotate.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];
  
    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
  
    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
  
    var that = this;
    var delta = 300 - Math.random() * 100;
  
    if (this.isDeleting) { delta /= 2; }
  
    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }
  
    setTimeout(function() {
      that.tick();
    }, delta);
  };
  
  window.onload = function() {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-rotate');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
    document.body.appendChild(css);
  };