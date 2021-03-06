@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

body {
    font-family: 'Poppins', sans-serif;
    font-size: 15px;
    color: #616161;
    line-height: 28px;
}

a {
    color: #2bafc4 !important;
    -webkit-transition: all 500ms;
    transition: all 500ms
}

    a:hover {
        color: #f6aa35;
        text-decoration: none;
        outline: 0;
    }

h1,
h2,
h3,
h4 {
    font-family: 'Poppins', sans-serif;
}

h1 {
    font-weight: 700;
    font-size: 40px;
}

h3 {
    font-weight: 700;
    font-size: 36px;
}

.hero-main img {
    max-width: 100%;
}

.wrapper {
    overflow: hidden;
}

input[type="text"],
input[type="password"],
input[type="color"],
input[type="date"],
input[type="datetime"],
input[type="datetime-local"],
input[type="email"],
input[type="number"],
input[type="range"],
input[type="search"],
input[type="tel"],
input[type="time"],
input[type="url"],
input[type="month"],
input[type="week"],
textarea,
select {
    width: 100%;
    background-color: #ffffff;
    font-size: 15px;
    line-height: 40px;
    height: 46px;
    max-width: 100%;
    vertical-align: middle;
    padding: 2px 15px;
    border: 1px solid #ebebeb;
    border-radius: 4px;
    transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
}

    input[type="text"]:focus,
    input[type="password"]:focus,
    input[type="color"]:focus,
    input[type="date"]:focus,
    input[type="datetime"]:focus,
    input[type="datetime-local"]:focus,
    input[type="email"]:focus,
    input[type="number"]:focus,
    input[type="range"]:focus,
    input[type="search"]:focus,
    input[type="tel"]:focus,
    input[type="time"]:focus,
    input[type="url"]:focus,
    input[type="month"]:focus,
    input[type="week"]:focus,
    textarea:focus {
        color: #495057;
        border-color: #80bdff;
        outline: 0;
        box-shadow: 0px 0px 5px 1px rgba(0, 123, 255, .25);
        -webkit-box-shadow: 0px 0px 5px 1px rgba(0, 123, 255, .25);
    }

textarea {
    height: 150px;
    border: 1px solid #ebebeb;
}

    textarea.form-control {
        border: 1px solid #ebebeb;
    }

.p-tb {
    padding-top: 90px;
    padding-bottom: 90px;
}

.p-t {
    padding-top: 90px;
}

.p-b {
    padding-bottom: 90px;
}

.lead,
p.lead {
    font-size: 18px;
    font-weight: 300;
    line-height: 1.6;
}

.btn {
    color: #1d1d1d !important;
    padding: 14px 30px;
    background: #2bafc4;
    -webkit-border-radius: 4px;
    border-radius: 4px;
    font-weight: 700;
    text-transform: uppercase;
}

    .btn:hover {
        background: #f0931e;
        color: #1d1d1d
    }

.btn2 {
    border: 1px solid #2bafc4;
    background: transparent;
    color: #fff;
}

    .btn2:hover {
        background: #2bafc4;
        color: #fff;
    }

.btn3 {
    border: 1px solid #ffffff;
    background: #ffffff;
    color: #1d1d1d;
}

    .btn3:hover {
        background: #dddddd;
        color: #1d1d1d;
        border: 1px solid #dddddd;
    }

.btn4 {
    border: 1px solid #000000;
    background: #000000;
    color: #ffffff;
}

    .btn4:hover {
        background: #2bafc4;
        color: #ffffff;
        border: 1px solid #2bafc4;
    }

.empty-15 {
    display: table;
    margin: auto;
    clear: both;
    height: 30px;
}

.empty-30 {
    display: table;
    margin: auto;
    clear: both;
    height: 30px;
}

.empty-45 {
    display: table;
    margin: auto;
    clear: both;
    height: 45px;
}

.sec-title:after {
    min-height: 5px;
    content: "";
    display: block;
    margin: 30px 0;
    background: url(images/line2.png) no-repeat 0 0;
}

.sec-title.text-center:after {
    min-height: 6px;
    content: "";
    display: block;
    margin: 30px 0;
    background: url(images/line2.png) no-repeat 0 0;
}

.sec-title.text-center:after {
    background-position: center;
    margin: 25px auto;
}

.sec-title.text-center.cst-black:after {
    min-height: 6px;
    content: "";
    display: block;
    margin: 30px 0;
    background: url(images/line2.png) no-repeat 0 0;
}

.sec-title.text-center.cst-black:after {
    background-position: center;
    margin: 25px auto;
}

.sub-txt {
    max-width: 740px;
    margin: 0 auto;
    font-size: 18px;
    margin-bottom: 40px;
}

.sec-title {
    margin-bottom: 0;
    color: #1d1d1d;
    display: table;
    width: 100%;
}

    .sec-title h1 + h3 {
        font-weight: normal;
    }

.white-sec .sec-title,
.white-sec .section-heading {
    color: #fff;
}

.white-sec .sub-txt {
    color: #bbb;
}

.carbon-layout .white-sec .sub-txt {
    color: #ffffff;
    font-size: inherit;
}

.owl-carousel .owl-dots {
    display: block;
    margin-top: 40px;
    text-align: center;
}

    .owl-carousel .owl-dots button {
        height: 8px;
        width: 8px;
        margin: 0 3px;
        outline: 0;
        -webkit-border-radius: 50%;
        border-radius: 50%;
        background: #2bafc4;
    }

        .owl-carousel .owl-dots button.active {
            width: 30px;
            -webkit-border-radius: 3px;
            border-radius: 3px;
        }

.owl-carousel .owl-nav {
    margin: 15px 0px;
}

    .owl-carousel .owl-nav button {
        border: 2px solid #a5a5a5 !important;
        ;
        background: none;
        padding: 5px;
        width: 32px !important;
        height: 32px !important;
        line-height: 28px;
        font-size: 18px;
        margin-right: 10px;
        outline: 0;
    }

        .owl-carousel .owl-nav button span {
            font-size: 30px;
            line-height: 24px;
            outline: 0;
        }

.white-bg {
    background: #ffffff !important;
}

.accent-color {
    color: #2bafc4 !important;
}

blockquote {
    padding: 30px 30px 30px 30px;
    border-left: 3px solid #2bafc4;
    font-size: 24px;
    background: #f5f5f5;
    line-height: 1.4;
    position: relative;
    overflow: hidden;
}

    blockquote::before {
        content: '???????????????';
        position: absolute;
        bottom: -45px;
        right: 45px;
        font-size: 194px;
        line-height: 0;
        font-weight: 700;
        color: #ebebeb;
        font-family: poppins;
    }

@media (min-width: 1200px) {
    .container {
        max-width: 1200px;
    }
}

.black-bg {
    background-color: #000000;
}

.dark-gray-bg {
    background-color: #0f0f0f;
}

.dark-gray-bg-tone-2 {
    background-color: #333333;
}

.white-bg {
    background-color: #ffffff;
}

.light-gray-bg {
    background-color: #f2f2f2;
}

ol,
ul,
dl {
    padding: 0px 0px 0px 15px;
}

.mobile-visible {
    display: none;
}

.hero-main {
    padding-top: 0px;
    color: #fff;
    position: relative;
    background-size: auto 100%;
    background-position: 75%;
    background-repeat: no-repeat;
    height: 100vh;
    /*padding-bottom: 60px;*/
    overflow: hidden;
    display: flex;
    align-items: center;
}

/*  .hero-main:before {
        position: absolute;
        background: rgba(0, 0, 0, 0.9);
        content: "";
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;
    }*/

.layout-2 .hero-left p {
    font-size: 24px;
    line-height: 1.5;
}

.layout-2 .row {
    padding: 150px 0px
}

.hero-left h1, .hero-left h4 {
    font-weight: bold;
}

   
.hero-left p {
    font-size: 16px;
}

.hero-caption h1 span {
    font-weight: 300;
    color: #2bafc4;
}

.hero-left .hero-btns {
    margin-top: 15px;
    width: 100%;
    clear: both;
    float: left;
}

    .hero-left .hero-btns .btn2:before {
        background: url(https://privapp.network/images/arrow1.png);
        width: 16px;
        height: 21px;
        display: inline-block;
        content: "";
        vertical-align: middle;
        margin-right: 10px;
    }

#what-s-priva {
    color: black;
}

.sale-box-inner {
    border: 1px solid #2bafc4;
    text-align: center;
    color: #fff;
    -webkit-border-radius: 7px;
    border-radius: 7px;
    overflow: hidden;
    cursor: pointer;
    border-radius: 3px;
    margin-bottom: 10px;
    padding: 26px 0 26px 90px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}

    .sale-box-inner img {
        margin-right: 10px;
    }

@media only screen and (max-width: 576px) {
    .sale-box-inner {
        padding: 10px;
    }

        .sale-box-inner b a {
            font-size: 15px !important;
        }
}

.sale-box-inner:hover {
    -webkit-box-shadow: 6px 6px 18px rgba(0, 0, 0, 0.13);
    box-shadow: 6px 6px 18px rgba(0, 0, 0, 0.13);
}

.sale-box-head {
    background: #2bafc4;
    padding: 15px 5px;
}

    .sale-box-head h4 {
        font-size: 24px;
        margin-bottom: 0;
        line-height: 28px;
        font-weight: 700;
    }

.sale-box-desc {
    margin: 0;
    padding: 20px 10px;
    list-style: none;
    color: #808080;
}

    .sale-box-desc strong {
        display: block;
        color: #1d1d1d;
        font-size: 18px;
    }

    .sale-box-desc li {
        margin-top: 15px;
    }

        .sale-box-desc li:first-child {
            margin-top: 0;
        }

            .sale-box-desc li:first-child span {
                color: #2bafc4;
            }

.sale-box:nth-child(2) .sale-box-head {
    background: #f6aa35;
}

.sale-box:nth-child(2) .sale-box-desc li:first-child span {
    color: #f6aa35;
}

.sale-box:nth-child(2) .sale-box-inner {
    border-color: #d4d4d4;
}

.sale-box:nth-child(3) .sale-box-inner {
    border-color: #f0931e
}

.sale-box:nth-child(3) .sale-box-head {
    background: #f0931e;
}

.sale-box:nth-child(3) .sale-box-desc li:first-child span {
    color: #f0931e;
}

.pre-sale-timer {
    text-align: center;
    max-width: 420px;
    width: 100%;
    float: right;
    padding: 30px;
    padding-top: 0px;
    padding-bottom: 0px;
    background: -moz-linear-gradient(bottom, rgba(251, 189, 24, 1) 0%, rgba(251, 189, 24, 0) 100%);
    background: -webkit-linear-gradient(bottom, rgba(251, 189, 24, 1) 0%, rgba(251, 189, 24, 0) 100%);
    background: linear-gradient(to top, rgba(251, 189, 24, 1) 0%, rgba(251, 189, 24, 0) 100%);
    filter: progid: DXImageTransform.Microsoft.gradient(startColorstr='#2bafc4', endColorstr='#00fbbd18', GradientType=0);
    bottom: 0px;
    position: relative;
    height: 100vh;
    display: table;
}

    .pre-sale-timer > div {
        display: table-cell;
        vertical-align: middle;
    }

    .pre-sale-timer h3 {
        font-size: 32px;
        margin-bottom: 25px;
    }

        .pre-sale-timer h3 span {
            font-weight: 300;
        }

.brand-logo-slider {
    background: #0f0f0f;
    padding-top: 35px;
    padding-bottom: 35px;
    clear: both;
    overflow: hidden;
    line-height: 0;
}

.brand-logos {
    text-align: center;
}

.owl-carousel .owl-item img {
    display: inline-block;
    width: auto;
    vertical-align: middle;
}

.brand-logo-slider.c-l {
    padding-top: 90px;
    padding-bottom: 90px;
}

.c-l .brand-logos {
    margin: 30px 0px 0px;
}

    .c-l .brand-logos .owl-item img {
        opacity: 0.6
    }

.owl-item {
    min-height: 1px;
    float: left;
    -webkit-backface-visibility: hidden;
}

@media only screen and (min-width: 768px) {
    .brand-logos .owl-stage-outer {
        display: flex;
        justify-content: center;
    }
}

.brand-logos {
    text-align: center;
}

.owl-carousel .owl-item img {
    display: inline-block;
    width: auto;
    vertical-align: middle;
}

.brand-logo-slider.c-l {
    padding-top: 90px;
    padding-bottom: 90px;
}

.c-l .brand-logos {
    margin: 30px 0px 0px;
}

    .c-l .brand-logos .owl-item img {
        opacity: 0.6
    }


.about-section {
    padding: 45px 0
}

    .about-section h5 {
        font-size: 18px;
        line-height: 28px;
        color: #606060;
        font-weight: 700;
    }

    .about-section.style-2 h5 {
        font-size: 24px;
        line-height: 1.5;
        font-weight: 400;
    }

img.play-btn-img {
    float: left;
    margin-right: 40px;
}

.watch-link {
    position: relative;
    margin-top: 0px;
    clear: both;
    width: auto;
    display: inline-block;
}

    .watch-link:hover i {
        background: #2bafc4;
        color: #fff
    }

    .watch-link i {
        width: 53px;
        height: 53px;
        line-height: 50px;
        display: inline-block;
        vertical-align: middle;
        border: 2px solid #2bafc4;
        border-radius: 50%;
        text-align: center;
        color: #2bafc4;
        -webkit-transition: all 500ms;
        transition: all 500ms;
    }

    .watch-link span {
        color: #808080;
        display: inline-block;
        vertical-align: middle;
        padding-left: 15px;
        padding-top: 6px;
    }

    .watch-link strong {
        line-height: 20px;
        color: #1d1d1d;
        text-transform: uppercase;
        font-size: 20px;
        font-weight: 700;
        display: block;
    }

.button-wrapper a {
    display: inline-block;
}

    .button-wrapper a + a {
        margin-left: 30px;
    }

.carbon-layout .about-left {
    padding-left: 60px;
}

    .carbon-layout .about-left h2.section-heading {
        margin: 0px 0px 15px 0px;
    }

h2.section-heading {
    font-size: 3.5rem;
    margin: 0px 0px 30px 0px;
    color: #000000;
    font-weight: bold;
}

    h2.section-heading span {
        color: #2bafc4;
        font-weight: bold;
    }

.carbon-layout .about-left h4 {
    color: #000000;
    font-size: 30px;
    margin: 0px 0px 30px 0px;
}

.carbon-layout .about-left h5 {
    color: #000000;
    font-size: 24px;
    margin: 0px 0px 15px 0px;
    font-weight: normal;
    line-height: 1.5;
}

.about-section.c-l {
    position: relative;
}

    .about-section.c-l:before {
        background: #efefef;
        position: absolute;
        height: 100%;
        right: calc(((100% - 1200px) / 2) + ((1200px * 75) / 100));
        width: 50%;
        top: 0;
        content: "";
    }

.c-l.about-section img {
    -webkit-box-shadow: 0px 0px 0px 20px #fff;
    box-shadow: 0px 0px 0px 20px #fff;
}

.c-l.benefits {
    background: none;
}

.about-section.diamond-layout .section-heading {
    margin: 0px 0px 15px 0px;
}

.about-section.diamond-layout h4 {
    color: #000000;
    font-size: 30px;
    margin: 0 0 15px 0;
}

.about-section.diamond-layout h5 {
    font-weight: normal;
}

.tab-section {
    margin: 15px 0px;
}

    .tab-section .nav-tabs {
        margin-bottom: 15px;
    }

        .tab-section .nav-tabs .nav-item {
            margin: 0px 15px;
            color: #000000;
            font-weight: bold;
            font-size: 18px;
        }

            .tab-section .nav-tabs .nav-item:first-child {
                margin-left: 0px;
            }

        .tab-section .nav-tabs .nav-link {
            padding: 15px 0px;
            cursor: pointer;
            position: relative;
        }

            .tab-section .nav-tabs .nav-link:after {
                background: #2bafc4;
                height: 3px;
                content: "";
                position: absolute;
                bottom: -3px;
                left: 0;
                width: 0;
                -webkit-transition: all 300ms;
                transition: all 300ms;
            }

            .tab-section .nav-tabs .nav-link.active,
            .tab-section .nav-tabs .nav-item.show .nav-link,
            .tab-section .nav-tabs .nav-link:hover,
            .tab-section .nav-tabs .nav-link:focus {
                border-color: transparent;
                background-color: transparent;
                color: #2bafc4;
            }

                .tab-section .nav-tabs .nav-link.active:after,
                .tab-section .nav-tabs .nav-item.show .nav-link:after,
                .tab-section .nav-tabs .nav-link:hover:after,
                .tab-section .nav-tabs .nav-link:focus:after {
                    right: 0;
                    width: 100%;
                }

.tab-content {
    margin-bottom: 15px;
}

.diamond-icon {
    position: relative;
    padding-left: 55px;
}

    .diamond-icon:before {
        background: url('https://privapp.network/images/coinpool-dots-circle2.png') no-repeat scroll 0px 0px;
        content: "";
        height: 223px;
        width: 223px;
        z-index: 0;
        -webkit-animation: rotate-right 25s linear 0s infinite;
        animation: rotate-right 25s linear 0s infinite;
        opacity: 1;
        top: -7px;
        left: -11px;
        position: absolute;
    }

    .diamond-icon img {
        position: relative;
        max-width: 130px;
        padding-bottom: 100px;
        padding-top: 30px;
    }

.currency-convertor {
    float: left;
    width: 100%;
}


.roadmap-sec {
    width: 100%;
    clear: both;
    border-top: 5px solid #2bafc4;
    background-image: url(images/map-bg.png);
    background-repeat: no-repeat;
    background-color: #000000;
    background-position: center;
    background-size: 100% auto;
    position: relative;
}

.roadmap-slider {
    text-align: center;
    color: #fff;
    line-height: 21px;
    margin-top: 50px;
    clear: both;
    width: 100%;
}

    .roadmap-slider .owl-item span {
        color: #2bafc4;
        font-size: 18px;
        line-height: 28px;
        font-weight: 700;
        margin-bottom: 90px;
        position: relative;
        display: block;
    }

       

    .roadmap-slider .owl-item p {
        padding: 0 20px;
    }

    .roadmap-slider:before {
        background: url(images/slider-line.png) no-repeat center;
        position: absolute;
        width: 100%;
        background-size: 100% 3px;
        content: "";
        top: 70px;
        left: 0;
        height: 3px;
    }

.vertical-roadmap {
    width: 100%;
    padding: 30px 0px 0;
    position: relative;
}

    .vertical-roadmap:before {
        content: '';
        position: absolute;
        top: 0px;
        left: 50%;
        bottom: 0px;
        width: 3px;
        background: rgba(255, 255, 255, 0.20);
        margin-left: -1px;
    }

    .vertical-roadmap:after {
        content: "";
        display: table;
        clear: both;
    }

.roadmap-item {
    clear: both;
    text-align: left;
    position: relative;
    color: #bbbbbb;
}

    .roadmap-item .title {
        margin-bottom: 15px;
        float: left;
        width: 50%;
        padding-right: 30px;
        text-align: right;
        position: relative;
        font-size: 24px;
        color: #ffffff;
        font-weight: bold;
    }

        .roadmap-item .title:before {
            content: '';
            position: absolute;
            width: 18px;
            height: 18px;
            box-shadow: 0px 0px 0px 6px #000000;
            background: #333333;
            border-radius: 100%;
            top: 5px;
            right: -11px;
            z-index: 99;
        }

    .roadmap-item.done .title:before {
        background: #2bafc4;
    }

    .roadmap-item.active .title:before {
        background: #2bafc4;
        -webkit-animation: blink 2.0s linear infinite;
        -moz-animation: blink 2.0s linear infinite;
        -ms-animation: blink 2.0s linear infinite;
        -o-animation: blink 2.0s linear infinite;
        animation: blink 2.0s linear infinite;
    }

@keyframes blink {
    0% {
        box-shadow: 0px 0px 0px 8px rgba(251, 189, 24, 0.2);
    }

    50% {
        box-shadow: 0px 0px 0px 1px rgba(251, 189, 24, 0.2);
    }

    100% {
        box-shadow: 0px 0px 0px 8px rgba(251, 189, 24, 0.2);
    }
}

@-webkit-keyframes blink {
    0% {
        box-shadow: 0px 0px 0px 8px rgba(251, 189, 24, 0.2);
    }

    50% {
        box-shadow: 0px 0px 0px 1px rgba(251, 189, 24, 0.2);
    }

    100% {
        box-shadow: 0px 0px 0px 8px rgba(251, 189, 24, 0.2);
    }
}

.roadmap-item .title span {
    color: #2bafc4;
    font-size: 18px;
    font-weight: bold;
}

.roadmap-text {
    margin: 0 0 50px;
    float: right;
    width: 50%;
    padding-left: 30px;
}

.roadmap-item:last-child .roadmap-text {
    margin: 0 0 0px;
}

.roadmap-sec.c-l {
    border: none;
    background: #000000;
}

.roadmap-item:after {
    clear: both;
    display: table;
    content: "";
}

.roadmap-item .roadmap-day {
    position: absolute;
    top: 50%;
    left: 100%;
    transform: translateY(-50%);
    padding: 0px;
    text-align: left;
    color: #000000;
    font-size: 16px;
    white-space: nowrap;
    background: #2bafc4;
    padding: 5px 15px;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    border-radius: 4px;
    margin-left: 30px;
}

    .roadmap-item .roadmap-day:after {
        width: 0;
        height: 0;
        border-top: 8px solid transparent;
        border-right: 13px solid #2bafc4;
        border-bottom: 8px solid transparent;
        content: "";
        display: block;
        position: absolute;
        top: 50%;
        left: -13px;
        margin-top: -8px;
    }

.roadmap-item:nth-child(2n+1) .roadmap-day {
    left: auto;
    right: 100%;
    text-align: right;
    margin-left: 0px;
    margin-right: 30px;
}

    .roadmap-item:nth-child(2n+1) .roadmap-day:after {
        border-top: 8px solid transparent;
        border-left: 13px solid #2bafc4;
        border-right: none;
        border-bottom: 8px solid transparent;
        content: "";
        display: block;
        position: absolute;
        top: 50%;
        right: -13px;
        left: auto;
        margin-top: -8px;
    }

.c-l .roadmap-text {
    padding: 30px;
    position: relative;
    margin: 0;
    float: left;
    text-align: right;
}

    .c-l .roadmap-text p {
        margin-bottom: 0px;
    }

.c-l .roadmap-item:nth-child(2n+1) .roadmap-text {
    width: calc(50% + 1px);
    float: right;
    border-right: 0;
    text-align: left;
}

.c-l .roadmap-item .roadmap-text::before {
    content: '';
    position: absolute;
    width: 18px;
    height: 18px;
    background: #2bafc4;
    border-radius: 100%;
    top: 50%;
    right: -9px;
    z-index: 99;
    transform: translateY(-50%);
    box-shadow: 0px 0px 0px 4px rgb(88, 89, 91);
}

.c-l .roadmap-item:nth-child(2n+1) .roadmap-text::before {
    left: -7px;
    right: auto;
}

.roadmap-item-text h4 {
    color: #2bafc4;
}

.circle-ripple {
    background-color: transparent;
    width: 20em;
    height: 20em;
    border-radius: 50%;
    animation: ripple 3s linear infinite;
    position: absolute;
    box-shadow: inset 0 0 30px 5px rgba(251, 189, 24, 0.2), 0 0 30px 5px rgba(251, 189, 24, 0.2);
    left: 0;
    display: table;
    margin: -10em auto 0;
    right: 0;
    top: 50%;
}

@keyframes ripple {
    0% {
        transform: scale(1);
        opacity: 0;
        box-shadow: inset 0 0 30px 5px rgba(251, 189, 24, 0.2), 0 0 30px 5px rgba(251, 189, 24, 0.2);
    }

    60% {
        transform: scale(2);
        opacity: 1;
        box-shadow: inset 0 0 50px 5px rgba(251, 189, 24, 0.3), 0 0 50px 5px rgba(251, 189, 24, 0.3);
    }

    100% {
        transform: scale(3);
        opacity: 0;
        box-shadow: inset 0 0 80px 5px rgba(251, 189, 24, 0.4), 0 0 80px 5px rgba(251, 189, 24, 0.4);
    }
}

.roadmap-sec.diamond-layout {
    background-image: none;
    border: none;
    background-color: #ffffff;
}

.horizontal-roadmap .roadmap-item {
    clear: none;
    text-align: center;
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    padding: 180px 0px 0px;
}

    .horizontal-roadmap .roadmap-item.even {
        padding: 0px 0px 180px;
    }

.horizontal-roadmap .roadmap-icon {
    display: table;
    margin: auto;
    background: #000000;
    padding: 10px;
    -webkit-border-radius: 50%;
    border-radius: 50%;
    position: absolute;
    top: 15px;
    left: 50%;
    transform: translateX(-50%);
    border: 6px solid #ffffff;
    box-shadow: 0 0 0 2px #fbbd17;
}

    .horizontal-roadmap .roadmap-icon:after {
        background: #000000;
        content: "";
        height: 75px;
        width: 2px;
        position: absolute;
        left: 50%;
        top: 100%;
        margin-left: -1px;
        margin-top: 7px;
    }

.horizontal-roadmap .roadmap-item.even .roadmap-icon:after {
    top: auto;
    bottom: 100%;
    margin-top: 0;
    margin-bottom: 7px;
    background: #fbbd17;
}

.horizontal-roadmap .roadmap-item.even .roadmap-icon {
    top: auto;
    bottom: 15px;
    background: #fbbd17;
    box-shadow: 0 0 0 2px #000;
}

.horizontal-roadmap .roadmap-text {
    float: none;
    width: 100%;
    padding: 30px 15px 0px;
    display: table;
    position: relative;
    color: #616161;
    margin: 0;
}

.horizontal-roadmap .roadmap-item-text h4 {
    font-weight: normal;
    font-size: 20px;
    color: #000000;
}

.horizontal-roadmap .roadmap-item-text p {
    margin: 0px;
    line-height: 1.4;
}

.horizontal-roadmap .roadmap-item .roadmap-day {
    position: static;
    transform: none;
    padding: 0;
    background: none;
    margin: 0px 0px 10px 0px;
    text-align: center;
    text-transform: uppercase;
    font-size: 15px;
}

.horizontal-roadmap .roadmap-item:nth-child(2n+1) .roadmap-day::after {
    display: none;
}

.horizontal-roadmap .roadmap-item:after {
    height: 9px;
    content: "";
    width: 100%;
    background: #000000;
    position: absolute;
    top: 179px;
    left: 0px;
    right: 0px;
}

.horizontal-roadmap .roadmap-item:before {
    width: 0;
    height: 0;
    border-left: 16px solid transparent;
    border-right: 16px solid transparent;
    border-bottom: 12px solid #000;
    content: "";
    display: block;
    position: absolute;
    left: 50%;
    top: 168px;
    margin-left: -16px;
}

.horizontal-roadmap .roadmap-item.even .roadmap-text {
    padding: 0px 15px 30px;
}

.horizontal-roadmap .roadmap-item.even:after {
    background: #2bafc4;
    top: auto;
    bottom: 179px;
}

.horizontal-roadmap .roadmap-item.even:before {
    border-top: 12px solid #2bafc4;
    border-bottom: 0px;
    top: auto;
    bottom: 168px;
}

.roadmap-live-slider {
    display: block;
}

    .roadmap-live-slider .roadmap-item {
        clear: none;
        padding-top: 80px;
        text-align: center;
        padding-bottom: 15px;
    }

    .roadmap-live-slider .slick-list {
        padding: 0px !important;
    }

        .roadmap-live-slider .slick-list:before {
            height: 3px;
            width: 100%;
            background: #000000;
            content: "";
            display: block;
            position: absolute;
            top: 25px;
            left: 0px;
            right: 0px;
        }

    .roadmap-live-slider .roadmap-item:before {
        height: 25px;
        width: 25px;
        content: "";
        border: 5px solid #000000;
        position: absolute;
        background: #2bafc4;
        -webkit-border-radius: 50px;
        border-radius: 50px;
        left: 50%;
        transform: translateX(-50%);
        top: 14px;
        -webkit-transition: all 300ms ease-in;
        transition: all 300ms ease-in;
    }

    .roadmap-live-slider .roadmap-item div {
        padding: 30px;
        -webkit-transition: all 300ms ease-in;
        transition: all 300ms ease-in;
        -webkit-border-radius: 8px;
        border-radius: 8px;
        padding: 15px 30px 60px;
        position: relative;
    }

    .roadmap-live-slider .roadmap-item .roadmap-date {
        font-size: 16px;
        color: #000000;
        font-family: 'Poppins', sans-serif;
        font-weight: 600;
        margin-bottom: 15px;
        display: block;
    }

    .roadmap-live-slider .roadmap-item h4 {
        font-size: 18px;
        color: #000000;
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
        display: block;
    }

    .roadmap-live-slider .roadmap-item .live-mark {
        visibility: hidden;
        opacity: 0;
        transition: all 400ms;
        color: #fff;
        background: #000;
        left: 0;
        right: 0;
        position: absolute;
        bottom: 0;
        padding: 5px 15px;
        -webkit-border-radius: 0 0 8px 8px;
        border-radius: 0 0 8px 8px;
    }

    .roadmap-live-slider .roadmap-item.slick-current .live-mark {
        visibility: visible;
        opacity: 1;
        transition: all 400ms;
    }

    .roadmap-live-slider .roadmap-item.slick-current:before {
        height: 36px;
        width: 36px;
        top: 8px;
        border: 6px solid #000000;
        -webkit-box-shadow: 1px 1px 7px 1px rgba(0, 0, 0, 0.8);
        box-shadow: 1px 1px 7px 1px rgba(0, 0, 0, 0.8);
        -webkit-transition: all 300ms ease-in;
        transition: all 300ms ease-in;
    }

    .roadmap-live-slider .roadmap-item.slick-current div {
        -webkit-transition: all 300ms ease-in;
        transition: all 300ms ease-in;
        background: #2bafc4;
        -webkit-box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.5);
        box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.5);
    }

    .roadmap-live-slider .roadmap-item div:before {
        width: 0;
        height: 0;
        border-left: 15px solid transparent;
        border-right: 15px solid transparent;
        border-bottom: 0px solid #2bafc4;
        content: "";
        position: absolute;
        bottom: 100%;
        left: 50%;
        transform: translateX(-50%);
        opacity: 0;
        -webkit-transition: all 400ms ease-in;
        transition: all 400ms ease-in;
    }

    .roadmap-live-slider .roadmap-item.slick-current div:before {
        -webkit-transition: all 400ms ease-in;
        transition: all 400ms ease-in;
        opacity: 1;
        bottom: 100%;
        border-bottom: 20px solid #2bafc4;
    }

.slick-prev,
.slick-next {
    font-size: 0;
    line-height: 0;
    position: absolute;
    top: 50%;
    display: block;
    width: 20px;
    height: 20px;
    padding: 0;
    -webkit-transform: translate(0, -50%);
    -ms-transform: translate(0, -50%);
    transform: translate(0, -50%);
    cursor: pointer;
    color: transparent;
    border: none;
    outline: none;
    background: transparent;
}

    .slick-prev::before,
    .slick-next::before {
        font-family: "Font Awesome 5 Free";
        font-size: 20px;
        line-height: 1;
        opacity: .75;
        color: white;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-weight: bold;
    }

    .slick-prev::before {
        content: '\f053';
    }

    .slick-next::before {
        content: '\f054';
    }

.slick-next {
    right: -25px;
}

.slick-prev {
    left: -25px;
}

.roadmap-live-slider .slick-prev,
.roadmap-live-slider .slick-next {
    top: 25px;
    background: #000000;
    height: 40px;
    width: 40px;
}

    .roadmap-live-slider .slick-prev:hover:before,
    .roadmap-live-slider .slick-next:hover:before {
        color: #2bafc4;
        opacity: 1;
    }

.token-allocation-box.style-4 {
    background: #fbbe18;
    background: -moz-linear-gradient(-45deg, #fbbe18 0%, #e3a126 100%);
    background: -webkit-gradient(left top, right bottom, color-stop(0%, #fbbe18), color-stop(100%, #e3a126));
    background: -webkit-linear-gradient(-45deg, #fbbe18 0%, #e3a126 100%);
    background: -o-linear-gradient(-45deg, #fbbe18 0%, #e3a126 100%);
    background: -ms-linear-gradient(-45deg, #fbbe18 0%, #e3a126 100%);
    background: linear-gradient(135deg, #fbbe18 0%, #e3a126 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#fbbe18', endColorstr='#e3a126', GradientType=1);
    padding: 50px;
    -webkit-border-radius: 15px;
    border-radius: 15px;
}

    .token-allocation-box.style-4 .token-sale-left {
        -ms-flex: 0 0 100%;
        flex: 0 0 100%;
        max-width: 100%;
        color: #000000;
        padding: 0;
    }

    .token-allocation-box.style-4 #clock li + li::before,
    .token-allocation-box.style-4 #clock li + li::after {
        background: #000;
    }

    .token-allocation-box.style-4 #clock li span {
        background: #ffffff;
        color: #000000;
    }

    .token-allocation-box.style-4 .rang-slider-main {
        color: #000;
        padding-top: 30px;
    }

    .token-allocation-box.style-4 .hero-right-btn {
        margin-bottom: 0;
    }

    .token-allocation-box.style-4 .rang-slider-toltip,
    .token-allocation-box.style-4 .rang-slider-total span {
        color: rgb(0, 0, 0);
    }

.no-js .owl-carousel, .owl-carousel.owl-loaded {
    display: block;
}

.owl-carousel, .owl-carousel .owl-item {
    -webkit-tap-highlight-color: transparent;
    position: relative;
}

    .owl-carousel .owl-stage-outer {
        position: relative;
        overflow: hidden;
        -webkit-transform: translate3d(0,0,0);
    }

    .owl-carousel, .owl-carousel .owl-item {
        -webkit-tap-highlight-color: transparent;
        position: relative;
    }

        .owl-carousel .owl-stage {
            position: relative;
            -ms-touch-action: pan-Y;
            touch-action: manipulation;
            -moz-backface-visibility: hidden;
        }

        .owl-carousel .owl-dots {
            display: block;
            margin-top: 40px;
            text-align: center;
        }

            .owl-carousel .owl-dots button.active {
                width: 30px;
                -webkit-border-radius: 3px;
                border-radius: 3px;
            }

.owl-dots button {
    border: none;
}


#btnCheckDomain {
    padding: 10px !important;
    width: 100%;
    background: #bf9c3f;
}

    #btnCheckDomain:hover {
        padding: 10px !important;
        width: 100%;
        background: #f0931e;
        color: #1d1d1d;
    }

/*brand slider start*/

.slick-wrapper {
    padding-top: 10px;
    padding-bottom: 10px;
}

    .slick-wrapper .slide {
        height: 100px;
        border: solid 1px #d4d4d4;
        background-color: #fff;
        border-radius: 3px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #2bafc4;
        font-size: 35px;
        font-weight: 600;
    }

.slick-slide {
    margin: 0px 20px;
}

.logo-carousel {
    overflow: inherit;
}

.slick-track::before, .slick-track::after {
    display: table;
    content: '';
}

.slick-track::after {
    clear: both;
}

.slick-track {
    padding: 1rem 0;
}

.slick-loading .slick-track {
    visibility: hidden;
}

.slick-slide.dragging img {
    pointer-events: none;
}

.slick-loading .slick-slide {
    visibility: hidden;
}

.slick-arrow {
    position: absolute;
    top: 50%;
    background: url(https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/arrow.svg?sanitize=true) center no-repeat;
    color: #fff;
    filter: invert(77%) sepia(32%) saturate(1%) hue-rotate(344deg) brightness(105%) contrast(103%);
    border: none;
    width: 2rem;
    height: 1.5rem;
    text-indent: -10000px;
    margin-top: -16px;
    z-index: 99;
    display: none !important;
}

    .slick-arrow.slick-next {
        right: -40px;
        transform: rotate(180deg);
    }

    .slick-arrow.slick-prev {
        left: -40px;
    }

/* Media Queries */

@media (max-width: 768px) {
    .slick-arrow {
        width: 1rem;
        height: 1rem;
    }
}

body {
    background-color: #010101;
}

.row {
    overflow: hidden;
}

/*brand slider end*/

.circle-privapp {
    box-shadow: 3px 3px 0 0 rgba(0, 0, 0, 0.08);
    border: solid 6px #2bafc4;
    background-color: #fff;
    width: 96px;
    height: 96px;
    display: flex;
    align-items: center;
    border-radius: 50%;
    padding-left: 30px;
}

.price-chart-container .price-title {
    font-size: 20px;
    font-weight: 500;
    color: #000;
}

.price-chart-container .price-tag {
    border-radius: 3px;
    background-color: #2bafc4;
    line-height: 24px;
    padding: 0 5px;
    color: #000;
    font-size: 16px;
}

.price-chart-container .price-indicator {
    font-size: 36px;
    font-weight: bold;
    color: #000;
    line-height: 50px;
}

.price-chart-container .price-chart-wrapper {
    border-radius: 3px;
    border: solid 1px #d4d4d4;
    background-color: #fff;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
}

.price-chart-container .price-chart-per {
    border-radius: 3px;
    background-color: #21b69a;
    line-height: 17px;
    padding: 0 8px;
    color: #fff;
    font-size: 12px;
    font-weight: 800;
    position: absolute;
    top: 7px;
    right: 7px;
}

#countdown {
    margin-top: 20px;
}

    #countdown label {
        clear: both;
        display: block;
    }

    #countdown div {
        color: #FFF;
        font-size: 30px;
        font-weight: 800;
        text-align: center;
        display: block;
    }

.video-wrapper {
	top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
		min-height: -webkit-fill-available;
		overflow: hidden
}

  .videoBg{
        position:overlay;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
		min-height: -webkit-fill-available;
    }

    @media (min-aspect-ratio: 16/9) {
      .videoBg{
       
        width: 100%;
        height: auto;
      }
    }
    @media (max-aspect-ratio: 16/9) {
      .videoBg {
       
       width:100%; 
        height: 100%;

        padding:0
      }
    }

video{
  object-fit:cover

}