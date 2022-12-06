/*===================== */
/* ---------Ai--Wk------- */
/* ==================== */
var urunDuzeniTipi=3; //Urun duzen tipi
var mobilBlokCozunurluk=768; //Mobil dinamikblok
var sliderZoomCozunurluk=768; //mobilOzelSlider
var isHoverCartProduct=false; //Hover da kapatma
var kategoriMenuAcikGetir=true; //Kategorimenu tum kirilim
var urunDetayZoomCozunurluk=1025; //Urun resim slider 
var windowidth=window.innerWidth; //window width orani
var urunDetay_varyasyonSecili=true; //varyasyon secme ve secmeme
var sepeteEkleUyariAktif = true; //sepete ekleme popup
//var ShowListProductInCart = false; // Urun Sepette ve sepet adet ibaresi
//Sayfa Yuklenme sahnesi
function CR(){$("link").eq(0).attr("href", "/CustomCss/ticimax/style.css?b=" + Math.random() + "");}
$(document).ready(function () {
    try {var control = globalModel.member.memberRole.split(',')[2]; if (control == 'ticimax') {$('body').before('<a onclick="CR()" style="position:fixed;right:0;top:50%; background:#000;color:#fff;padding:5px 15px;z-index:12154865746;font-size:11px;text-align:center; "><i class="fa fa-refresh"></i><p style="margin:0;">Css Yenile</p></a>'); } }
    catch(e) {}
    //sayfaislemleri
    $('head').append('<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"/>');
    if ($('#divSayfalamaUst').length>0) { KategoriIslemleri(); }//listeleme islemleri
    else if (globalModel.pageType == 'productdetail') {UrunDetayIslemleri(); }//Detay islemleri
    else if (globalModel.pageType == 'cart' || globalModel.pageType == 'ordercomplete'|| globalModel.pageType == 'payment'|| globalModel.pageType == 'ordercompleted') { SepetEkrani(); }//Sepet islemleri
    if ($('.pageContainer').length > 0) {$('body').addClass('SayfaIcerik');}//Icerik sayfasinda bodye class ekleme
    if ($('.magazalarContent').length > 0) {$('body').addClass('Magazalar');}//Magaza sayfasinda bodye class ekleme
    if ($('.userDivRow').length > 0)    {$('body').addClass('UyeGiris');}//Uye giris ekraninda bodye class ekleme
    if ($('.uyeOlContainer').length > 0)    {$('body').addClass('UyeOl');}//Uye ol ekraninda bodye class ekleme
    if ($('.homeHeader').length>0) {$('body').addClass('HomeBody');}


    $('.projectsSlideArea').each(function () {
        $("body").addClass("projectsPage"); 
        projectsCount();
        projectsTab();



        $('.blogAreaBottom').each(function () {//Slider duzeni
            if ($(this).find("div").length > 0 && !$(this).hasClass("owl-carousel"))
                $(this).owlCarousel({ 
                    autoplay: false,
                    loop: true,
                    rewind:true,
                    navClass: ['ProductListprev', 'ProductListnext'],
                    margin:20,
                    nav: true,
                    responsive:{0:{items:2},768:{items:3},1041:{items:3},1160:{items: 4},1460:{items: 4}}
                });
        });

    });



    $('.projectListCate').each(function () {
        $("body").addClass("projectsPage projectsPageList"); 
        projectListCateTab();
    });


    $('.projectDetailSlideArea').each(function () {
        $("body").addClass("projectsPage projectsDetailPage"); 
        
        $('.blogAreaBottom').each(function () {//Slider duzeni
            if ($(this).find("div").length > 0 && !$(this).hasClass("owl-carousel"))
                $(this).owlCarousel({ 
                    autoplay: false,
                    loop: true,
                    rewind:true,
                    navClass: ['ProductListprev', 'ProductListnext'],
                    margin:20,
                    nav: true,
                    responsive:{0:{items:2},768:{items:3},1041:{items:3},1160:{items: 4},1460:{items: 4}}
                });
        });

    });


    $('.projectsDetailArea').each(function () {
        $("body").addClass("projectsPage projectsPageDetailArea"); 
        projectListCateTab();
    });









    GlobalIslemler();

    if ($('.ProjelerContent').length>0) {
        $('.ProjelerContent .PrCont').first().addClass('active'); $('.ProjelerContent .Prtit li').first().addClass('pactive'); $('.ProjelerContent .Prtit li').on('click',function (event) {$('.ProjelerContent .Prtit li').removeClass('pactive'); $(this).addClass('pactive'); var secili = $(this).index(); $('.ProjelerContent .PrCont').removeClass('active'); $('.ProjelerContent .PrCont').eq(secili).addClass('active'); });

        $('.PrCont ul li a').on('click',function () {
            setTimeout(function () {
                $('.fancybox-inner .proSlider ul li').each(function() {
                    var dataimg = $(this).find('img').attr('data-src');
                    $(this).find('img').attr('src',dataimg);
                }); 
            },25);
        });
        $(".menuImageLoad").each(function () {
            if ($(this).attr("src") != undefined && $(this).attr("src").indexOf("/Uploads/images/blank.png") > -1) {
                if ($(window).scrollTop() + $(window).height() > $(this).offset().top) {
                    $(this).attr("src", $(this).attr("data-src"));
                }
            }
        });
        $(window).on("scroll", function () {
            $(".menuImageLoad").each(function () {
                if ($(this).attr("src") != undefined && $(this).attr("src").indexOf("/Uploads/images/blank.png") > -1) {
                    if ($(window).scrollTop() + $(window).height() > $(this).offset().top) {
                        $(this).attr("src", $(this).attr("data-src"));
                    }
                }
            });
        })


    }
});
function GlobalIslemler() {//Tum ekranlar ready sahnesi
    if (!pageInitialized) {
        /*siteozel*/
        $('.mycart').insertBefore('.welcome');
        $('#divNewsLetter').prependTo('.ebultenGelecek');
        $('.welcome').after('<div class="headerfav"><a href="/Hesabim.aspx#/Favorilerim">Favorilerim</a></div>');
        $('.welcome').after('<div class="headeriletisim"><a href="/iletisim.aspx"><i class="fas fa-mobile-alt"></i>İletişim</a></div>');
        $('.headerbanner').insertBefore('.headerContent');
        $('.categoryTitleText').insertBefore('.kategoriBanner');
        $('.headerinfo').insertBefore('.headerContent');
        $('.navigation').insertBefore('#logo');
        $('.YorumYazbtnContent').appendTo('.rightArea');
        $( ".productItem").each(function( index ) {
            $('.productItem').eq(index).find('.productMarka').insertAfter('.productItem:eq('+index+') .productName');
            $('.productItem').eq(index).find('.ozelAlan1').prependTo('.productItem:eq('+index+') .productIcon');
            $('.productItem').eq(index).find('.boxBedenlerContent').appendTo('.productItem:eq('+index+') .productDetail');
        });
        $( ".sliderBannerContainer").each(function( index ) {
            $('.sliderBannerContainer').eq(index).find('.Block_Link').insertAfter('.sliderBannerContainer:eq('+index+') .JKatAdi .bold');
        });

        $('.altKategoriMenu ul li').on('click',function(){
            $(this).find('.acilirAltMenu').toggleClass('goster');
            $(this).toggleClass('rotate');
        });
        
        $('.devambtn').on('click',function(){
            $('.FooterTex').addClass('active');
        });
        $('.gilzebtn').on('click',function(){
            $('.FooterTex').removeClass('active');
        });
        $('.mobilMenu .navUl > li:first-child .altmenuSol > ul').addClass('dispBlock');
        $('.mobilMenu .navUl > li:first-child .altmenuSol > ul').addClass('zindexR');
        $('.mobilMenu .navUl > li:first-child > a').addClass('dispBlockActive');
        $('.mobilMenu .navUl > li:nth-child(3) > a').addClass('links');
        $('.mobilMenu .navUl > li > a').on('click',function(){
            $(this).not('.links').attr('href','javascript:;');
            $('.mobilMenu .altMenu .altMenuler .altmenuSol > ul > li.ulVar').removeClass('active');
            $('.dispBlock').removeClass();
            $('.dispBlockActive').removeClass();
            $('.mobilMenu .navUl > li:first-child .altmenuSol > ul').removeClass('zindexR');
            $(this).parent().find('.altmenuSol > ul').addClass('dispBlock');
            $(this).parent().find('.altmenuSol > ul').addClass('zindexR');
            $(this).parent().find('> a').addClass('dispBlockActive');
        });


        $('.mobilMenu .altmenuSol ul > li.ulVar > a').on('click',function(){
            $(this).parent().addClass('active');
            $(this).attr('href','javascript:;');
        });

        $('.ResimliMenu1AltUl').each(function(index, el) {
            var fullClosed = $(this).parent('li').find('>a').text();
            $(this).closest('li').find('.ResimliMenu1AltUl').prepend('<div class="btnKapsar"><div class="fullClosed"><i class="fal fa-chevron-left"></i></div>'+fullClosed+'</div>');
        });
        $('.mobilMenu .altMenu .altMenuler .altmenuSol > ul > li .btnKapsar').on('click',function(){
            $(this).parent().parent().removeClass('active');
        });
        
        // $('.fullClosed').on('click',function(){
        //     $('.mobilMenu .altmenuSol ul > li').removeClass('.altMenuGoster');
        // });

        // if (windowidth < 768) {
        //     var menuMulti = $('.mobilMenu').html();
        //     $('.footerTop').append('<div class="altMenuMobile">' + menuMulti + '</div>');   
        //     $('.altMenuMobile').addClass('mobilMenu acik');
        //     $('.altMenuMobile .navUl > li').on('click',function(){
        //         $(this).find('.altMenu').toggleClass('goster');
        //         $(this).find('.ResimliDown').toggleClass('iconDegis');
        //             $('.altMenuMobile .altmenuSol ul > li').on('click',function(){
        //                 $(this).find('.ResimliMenu1AltUl').toggleClass('goster');
        //                 $(this).find('.ResimliDown2').toggleClass('iconDegis');
        //             });
        //     });

        // }

    }
    setTimeout(function(){
        $('body a#linkOncekiSayfa').html('<img class="backSvg" src="/CustomCss/images/leftArrow.svg"/> Geri');
        $('#btnKelimeAra').val('');
        $('.sliderBannerContainer .Block_Link a').html('Tüm Ürünler');
        $('#txtbxArama').attr("placeholder", "Ürün Ara");
        $('.UrunKargoBedava .box1').html('<i class="fas fa-wrench"></i><a href="https://www.romanodizayn.com/teslimat"><div class="freeCargo">Ücretsiz <span>Kurulum</span> </div></a>');
        $('.newsbutton').html('Gönder <img class="buttonSvg" src="/CustomCss/images/arrow.svg"/>');
    },100);
    var breadHtml = $('ul.breadcrumb').html();
    $('ul.breadcrumb').after('<div class="breadList" style="display:none;"><div class="mBread"><ul class="breadcrumbList">'+breadHtml+'</ul></div><div class="clbtn"><i class="far fa-times"></i></div></div>');
    var liS = $(".breadcrumbList li");
    $(".breadcrumbList li").each(function(index){if (index > 0){var ul = $("<ul/>"); $(this).appendTo(ul); ul.appendTo(liS[index-1]); } });
    $('.breadcrumb').on('click',function(){$('.breadList').addClass('breadActive').show();$(this).addClass('zindex'); });
    $('.clbtn').on('click',function(){$('.breadList').removeClass('breadActive').hide();$('.breadcrumb').removeClass('zindex'); });
}
function KategoriIslemleri() {//Kategori ready sahnesi
    $("body").addClass("CategoryBody");
    $('.categoryTitle .categoryTitleText').prependTo('.ticiTopBlockContent');
    $(".FooterSC").prependTo(".ticiBottomBlockContent");
    if (windowidth > 1024) {$('.leftBlock .category-vertical-filters .panel .panel-heading').on('click',function(event) {$(this).parent().find('.list-group,.panel-search, .slider-range, .amount,.FiyatTextBox').slideToggle(); $(this).toggleClass('active'); }); }
    //$('.leftBlock .category-vertical-filters .panel .panel-heading').on('click',function(event) {$(this).parent().find('.list-group, .FiyatSlider,.panel-search').slideToggle(); $(this).toggleClass('active'); });
   
    

}
function UrunDetayIslemleri() {//Urun detay ready sahnesi
    $("body").addClass("ProductBody");
    if (productDetailModel.totalStockAmount < 1) {$('.RightDetail').addClass('StokYok');}
    if (!pageInitialized) {
        $('.ProductDetailMain').prepend('<div class="TopDet"></div>');
        $('.ProductDetail > .categoryTitle').insertBefore('#divIcerik');
        $('.leftImage').appendTo('.TopDet');
        $('.RightDetail').appendTo('.TopDet');
        //ilk bolum
        $('.RightDetail').prepend('<div class="TopList"></div>');
        $('.PriceList').prependTo('.TopList');
        $('.ProductName').prependTo('.TopList');
        //ikinci bolum
        $('.TopList').after('<div class="MiddleList"></div>');
        $('#divSatinAl').appendTo('.MiddleList');
        $('#divUrunEkSecenek').prependTo('.MiddleList');
        $('<div class="ekSecenekBilgi"> <div class="secenekAdi"><span>Kumaş ve Renk Seçiniz</span> <img src="/CustomCss/images/color.svg"/> </div> <div class="varyasyonlar"><div class="kumasAdi"></div><div class="vAd"><div class="ozellikKapsar"><div class="renkAdi"></div></div><div class="kumasCesidi"><div class="urunCesidi"></div></div></div></div> </div>').prependTo('#divUrunEkSecenek');
        $('#divStokYok').prependTo('.MiddleList');
        //ucuncu bolum
        $('.MiddleList').after('<div class="BottomList"></div>');
        $('.ProductIcon').appendTo('.BottomList');
        $('.ProductIcon2 ').appendTo('.BottomList');
        $('#divEkstraBilgiler').appendTo('.BottomList');
        $('.product_social_icon_wrapper').appendTo('.BottomList');
        //ek acilirlar
        $('.markaresmi').insertBefore('.ProductName');
        $('#divOnyazi').insertAfter('.ProductName');
        $('#divMagazaStok').insertAfter('.ProductName');
        $('#divTahminiTeslimatSuresi').insertAfter('.ProductName');
        $('#divIndirimOrani').insertAfter('.ProductName');
        $('#divKargoBedava').insertAfter('#divIndirimOrani');
        $('#divParaPuan').insertAfter('.ProductName');
        $('#divToplamStokAdedi').insertAfter('.ProductName');
        $('#divUrunStokAdedi').insertAfter('.ProductName');
        $('#divTedarikci').insertAfter('.ProductName');
        $('#divBarkod').insertAfter('.ProductName');
        $('#divMarka').insertAfter('.ProductName');
        $('#divUrunKodu').insertAfter('.ProductName');
        //alt ekler
        $('.RightDetail .riSingle .riUp').html('<i class="far fa-plus"></i>');
        $('.RightDetail .riSingle .riDown').html('<i class="far fa-minus"></i>');
        $('#divKombinSatinAl').insertAfter('.basketBtn');
        $('.buyfast').insertAfter('.basketBtn');
        $('#divAdetCombo').insertBefore('.basketBtn');
        $('#divTaksitAciklama').insertAfter('#pnlFiyatlar');
        $('#divAdetCombo .left_line').insertBefore('#divAdetCombo');
        $('.pSatisBirimi').insertBefore('.Basketinp');    
        $('.RightDetail').append('<div class="rightArea"></div>');
        $('.vadedetay').appendTo('.rightArea');  
        $('.DetayFirsatUrunu').appendTo('.rightArea');
        $('.puanVer').appendTo('.rightArea');
        $('#divOnyazi').insertAfter('#pnlFiyatlar');
        $('.freePost').insertAfter('#divTahminiTeslimatSuresi');
        $('.UFavorilerimeEkle').prependTo('.leftImage');
        $('<div class="shareDetail"> <div class="shareIcon"></div> </div>').prependTo('.leftImage');
        $('.product_social_icon_wrapper').appendTo('.shareIcon');
        $('#BenzerUrunDiv').appendTo('.ticiBottomBlockContent');
        $('#divUrunKampanyaliFiyat').insertAfter('#pnlFiyatlar');
        $('#BenzerUrunDiv .JKatAdi .bold .satir1').html('BUNLARIDA BEĞENEBİLİRSİNİZ');
        if (windowidth<768) {
            $('.rightArea').insertAfter('#divUrunKodu');
            $('<div class="mobilTitleDetay">Ürün Kampanyaları</div>').insertAfter('.rightArea');
            $('<a class="tumozellik" href="#tumozellikler">Tüm Özellikler <img src="/CustomCss/images/rt.png"/> </a>').prependTo('.TopList');
        }
        //$('.right_line').find('.size_box:nth-child(1)').addClass('selected');

        if ($('#divUrunEkSecenek').length>0) {
            $('.TopDet').addClass('varyantli');
        }

        Sepetteindirim();
        if ($('.ProductBody').length>0) {
            var dfixprie = $('.PriceList').html();
            var dfbutton = $('.basketBtn').html();
            $('.TopDet').after('<div class="detayBottom"><div class="dleft">' + dfixprie + '</div><div class="dright"><div class="basketBtn">' + dfbutton + '</div></div></div>');        
        }
        

        

        //$('.UWhatsApp').insertAfter('.product_social_icon_wrapper li:last-child');
    }
    
    $(".basketBtn,.UFavorilerimeEkle a,.UIstekListemeEkle a").on('click',function () {if ($("#hddnUrunID").val() == "0") {$('html,body').animate({scrollTop: $('#divUrunEkSecenek').offset().top - 110 }, 'slow'); } });
}
function topMenuCallback() {
    $(".navUl li").each(function () {if ($(this).find("ul").length > 0) {$(this).addClass("ulVar"); }});
    if (!pageInitialized) {
        $('body').on('mouseenter','.navUl > li.ulVar, .yanResimliMenu .resimliYanMenu .lfMenu .lfMenuUl .lfMenuitem.ulVar',function() {

            //$('#divIcerik').addClass('hoverr');
        });
        $('body').on('mouseleave','.navUl > li.ulVar, .yanResimliMenu .resimliYanMenu .lfMenu .lfMenuUl .lfMenuitem.ulVar',function() {

            //$('#divIcerik').removeClass('hoverr');
        });
        $('.navigation .navUl > li.ulVar').each(function() {if ($(this).find('.altMenuSag img').length>0 || $(this).find('.altMenuSag .altMenuSagEditor *').length>0) {$(this).find('.altMenu').addClass('picTrue'); } });
    }
    if (windowidth<768){

    }
    MenuResim();
    mobilFooter();
    mobileMenu();
    HeaderFixed();
}

function blockCompleteCallback() {//Blok yuklenme
    if (globalModel.pageType == 'homepage') {//Anasayfa

        $('.projectsArea .proSlider ul li').each(function() {
            var dataimg = $(this).find('img').attr('data-src');
            $(this).find('img').attr('src',dataimg);
        }); 

    }
    if ($('#divSayfalamaUst').length>0) {//listeleme Sayfasi

        $( ".productItem").each(function( index ) {
            $('.productItem').eq(index).find('.boxBedenlerContent').appendTo('.productItem:eq('+index+') .productDetail');
        });
    }
    if (globalModel.pageType == 'productdetail') {//UrunDetay Sayfasi
        UrunDetayPaylas();
        if (!pageInitialized) {
            $('#linkOncekiSayfa').appendTo('ul.breadcrumb');
            if (windowidth<768) {
                $('#linkOncekiSayfa').appendTo('.leftImage');
            }
        }
        /*detayTabAccordion*/
        var cList = $('.urunTab ul li'); var cDiv = $('.urunDetayPanel'); for (var i = 0; i <= cList.length; i++) {for (var i = 0; i <= cDiv.length; i++) {$(cDiv[i]).appendTo(cList[i]); } } $(".urunDetayPanel").hide() ;
        $(".urunOzellik").removeAttr('class').addClass("urunOzellikTab");
        $('.urunOzellikTab .urunTab >ul>li>a').on('click',function (e) {
            var openTab = $(this);
            if ($(this).parent().hasClass('active')) {$('.urunOzellikTab .urunTab >ul>li>a').parent().removeClass('active');}
            else {$('.urunOzellikTab .urunTab >ul>li>a').parent().removeClass('active');$(this).parent().addClass('active');}
            var tabName = openTab.attr('data-tab') || "";if (tabName === "Commets") {TabGetComments();}else if (tabName === "recommendations") {TabGetRecommendations();}
            e.stopPropagation();
        });
        $('.urunOzellikTab .urunTab >ul >li').on('click',function(){
            $(this).removeClass('active');
        });

        
        
    }
}
function urunListCallback() {//Slider ve Urunlisteleme
    //$('.leftBlock .jCarouselLite ul').each(function () {if ($(this).find("li").length > 0 && !$(this).hasClass("owl-carousel")) $(this).owlCarousel({autoplay: true,loop: true, autoplayTimeout: 2000, autoplaySpeed: 2000, navClass: ['ProductListprev', 'ProductListnext'], autoplayHoverPause: true, margin: 1, nav: true, responsive: {0: {items: 1},} }); });
    //$('.rightBlock .jCarouselLite ul').each(function () {if ($(this).find("li").length > 0 && !$(this).hasClass("owl-carousel")) $(this).owlCarousel({autoplay: true,loop: true, autoplayTimeout: 2000, navClass: ['ProductListprev', 'ProductListnext'], autoplaySpeed: 2000, autoplayHoverPause: true, margin: 1, nav: true, responsive: {0: {items: 1},} }); });
    if (globalBlokModel == 1) {//Sol ve Orta blok
        if (urunDuzeniTipi == 0) urunDuzeniTipi = 4; $('.leftBlock').removeClass().addClass('leftBlock LeftMiddle'); $('.centerCount').removeClass().addClass('centerCount LeftMiddle');
    }
    else if (globalBlokModel == 2) {//Sol orta sag
        if (urunDuzeniTipi == 0) urunDuzeniTipi = 2; $('.leftBlock').removeClass().addClass("leftBlock LeftMiddleRight"); $('.rightBlock').removeClass().addClass("rightBlock LeftMiddleRight"); $('.centerCount').removeClass().addClass("centerCount LeftMiddleRight");
    }
    else if (globalBlokModel == 3) {//Sag orta
        if (urunDuzeniTipi == 0) urunDuzeniTipi = 4; $('.rightBlock').removeClass().addClass("rightBlock MiddleRight"); $('.centerCount').removeClass().addClass("centerCount MiddleRight");
    }
    else if (globalBlokModel == 4) {//Sadece orta
        if (urunDuzeniTipi == 0) urunDuzeniTipi = 4; $('.centerCount').removeClass().addClass("centerCount Middle");
    }
    if ($('.blockSelect').length>0) {
        $('body').on('click', '.blockSelect .sort_hrz',function(){urunDuzeniTipi = 1;urunDuzeni(urunDuzeniTipi); }); $('body').on('click', '.blockSelect .sort_2',function(){urunDuzeniTipi = 2;urunDuzeni(urunDuzeniTipi); }); $('body').on('click', '.blockSelect .sort_3',function(){urunDuzeniTipi = 3;urunDuzeni(urunDuzeniTipi); }); $('body').on('click', '.blockSelect .sort_4',function(){urunDuzeniTipi = 4;urunDuzeni(urunDuzeniTipi); }); $('body').on('click', '.blockSelect .sort_5',function(){urunDuzeniTipi = 5;urunDuzeni(urunDuzeniTipi);});
    }
    
    Sepetteindirim();

    $('.sliderBannerContainer:not(.NoSlider) .jCarouselLite ul').each(function () {//Slider duzeni
        if ($(this).find("li").length > 0 && !$(this).hasClass("owl-carousel"))
            $(this).owlCarousel({
                lazyLoad:true,
                autoplay: false,
                loop: false,
                rewind:true,
                navClass: ['ProductListprev', 'ProductListnext'],
                margin:20,
                nav: true,
                responsive:{0:{items:2,margin:10,stagePadding:25},768:{items:3},1041:{items:4},1160:{items: 4,margin:20,dots: true},1460:{items: 5,margin:20,dots: true}}
            });
    });
    urunDuzeni(urunDuzeniTipi);
    if (globalModel.pageType == 'homepage'){//Anasayfa
        if (windowidth>768) {
            $('.sliderCatArea > ul').each(function () {//Slider Genis
                if ($(this).find("li").length > 0 && !$(this).hasClass("owl-carousel"))
                    $(this).owlCarousel({
                        lazyLoad:true,
                        autoplay: false,
                        loop: false,
                        rewind:true,
                        navClass: ['ProductListprev', 'ProductListnext'],
                        margin:20,
                        nav: true,
                        responsive:{0:{items:1,margin:10,autoWidth: true},768:{items:2},1041:{items:3},1160:{nav:true,items: 2,margin:30}}
                    });
            });   
        $('.projectsArea > ul').each(function () {//Slider Ufak
            if ($(this).find("li").length > 0 && !$(this).hasClass("owl-carousel"))
                $(this).owlCarousel({
                    lazyLoad:true,
                    autoplay: false,
                    loop: false,
                    rewind:true,
                    navClass: ['ProductListprev', 'ProductListnext'],
                    margin:20,
                    nav: true,
                    responsive:{0:{items:1,margin:10,autoWidth: true},768:{items:3},1041:{items:4},1160:{nav:true,items: 4,margin:30}}
                });
        }); 
    }  
    $('.owlSliderList').each(function () {//Slider
        if ($(this).find("li").length > 0 && !$(this).hasClass("owl-carousel"))
            $(this).owlCarousel({
                lazyLoad:true,
                autoplay: false,
                loop: false,
                rewind:true,
                navClass: ['ProductListprev', 'ProductListnext'],
                margin:20,
                nav: true,
                responsive:{0:{items:4,margin:5},768:{items:7},1025:{items:9},1160:{nav:true,items: 11}}
            });
    });     

    if ($('.ProjelerContent').length==1) {
        $('head').append('<script type="text/javascript" ticimax="true" src="/CustomCss/ticimax/jquery-ui.min.js"></script>');
        if ($('#accordion').length > 0) {
            $("#accordion").accordion({
                heightStyle: "content"
            });
        }
    }   
}
    if ($('#divSayfalamaUst').length>0) {//listeleme
        $( ".productItem").each(function( index ) {
            $('.productItem').eq(index).find('.boxBedenlerContent').appendTo('.productItem:eq('+index+') .productDetail');
        });
    }
    if (globalModel.pageType == 'productdetail') {//UrunDetay sayfasi
        if($('#divSatinAl').css('display') == 'none'){$('.RightDetail').addClass('StokYok'); }
        $('.detaySliderContainer .jCarouselLite ul').each(function () {
            if ($(this).find("li").length > 0 && !$(this).hasClass("owl-carousel"))
                $(this).owlCarousel({
                    lazyLoad:true,
                    autoplay: false,
                    loop: false,
                    rewind:true,
                    navClass: ['ProductListprev', 'ProductListnext'],
                    margin:20,
                    nav: true,
                    responsive:{0:{items:2,margin:10},768:{items:3},1041:{items:4},1160:{items: 4},1460:{items: 5}}
                });
        });


        if (windowidth>768) {
            imageProductHover();
        }
        productFabricShow();

        
    }
    InitTimers();
    $(".productItem").find("video").parent().addClass("Videolu");
    $(".productItem").find(".TukendiIco").parent().addClass("StokYok");
    $(".productPrice").find(".regularPrice").parent().addClass("IndirimVar");
    $(".sliderBannerContainer .productItem").find("video").parent().addClass("Videolu");
    $(".panel-search input").length > 0 ? $(".panel-search input").attr("placeholder", translateIt("BlokModul_UrunArama_Ara") + "...") : "";
    $(".FiyatTextBox .filterPrice1").length > 0 ? $(".FiyatTextBox .filterPrice1").attr("placeholder", translateIt("FiyatAlarmListem_IlkFiyat")) : "";
    $(".FiyatTextBox .filterPrice2").length > 0 ? $(".FiyatTextBox .filterPrice2").attr("placeholder", translateIt("FiyatAlarmListem_SonFiyat")) : "";

    //Alt Filtre Ekleme
    bottomFilterEkle();
    

}
function urunDuzeni(tip) {//Urun duzen tipi 2 3 4 5 veya tek
    if ($('#divSayfalamaUst').length>0) {
        if ($('.blockSelect .sort_5').length==0) {$('.blockSelect .sort_4').after('<a href="javascript:;" class="sort_5"><i class="fas fa-th"></i></a>');}
        if ($('.blockSelect .sort_2').length==0) {$('.blockSelect .sort_3').before('<a href="javascript:;" class="sort_2"><i class="fas fa-th-large"></i></a>');}
        if ($('.brandlistselection select').length > 0) {$('#divSayfalamaUst').addClass('Slct');}
        $('.sort_hrz').removeClass("Active"); 
        $('.sort_2').removeClass("Active");
        $('.sort_3').removeClass("Active");
        $('.sort_4').removeClass("Active");
        $('.sort_5').removeClass("Active");
        if (tip == 1) {$('.ProductListContent .ProductList:not(.markaSlider)').removeClass().addClass('ProductList PlSc_hrz'); $(".ItemOrj").removeClass().addClass("ItemOrj col-12"); $('.blockSelect .sort_hrz').addClass("Active"); lazyLoad();}
        else if (tip == 2) {$('.ProductListContent .ProductList:not(.markaSlider)').removeClass().addClass('ProductList PlSc_2'); $(".ItemOrj").removeClass().addClass("ItemOrj col-6"); $('.blockSelect .sort_2').addClass("Active"); lazyLoad();}
        else if (tip == 3) {$('.ProductListContent .ProductList:not(.markaSlider)').removeClass().addClass('ProductList PlSc_3'); $(".ItemOrj").removeClass().addClass("ItemOrj col-4"); $('.blockSelect .sort_3').addClass("Active"); lazyLoad();}
        else if (tip == 4) {$('.ProductListContent .ProductList:not(.markaSlider)').removeClass().addClass('ProductList PlSc_4'); $(".ItemOrj").removeClass().addClass("ItemOrj col-3"); $('.blockSelect .sort_4').addClass("Active"); lazyLoad();}
        else if (tip == 5) {$('.ProductListContent .ProductList:not(.markaSlider)').removeClass().addClass('ProductList PlSc_5'); $(".ItemOrj").removeClass().addClass("ItemOrj col-5li"); $('.blockSelect .sort_5').addClass("Active"); lazyLoad();}
        else if (tip == 6) {$('.ProductListContent .ProductList:not(.markaSlider)').removeClass().addClass('ProductList PlSc_6'); $(".ItemOrj").removeClass().addClass("ItemOrj col-2"); lazyLoad(); }

        if ($('.FiltreUst').length == 0) {
            //$('body #divSayfalamaUst .category-vertical-filters.top-filters').prepend('<div class="tukgo"><a onclick="sortingClick(1000)" class="filterOrderInStock">'+translateIt("Urunler_Stoktakiler")+'</a></div>');
            $('body #divSayfalamaUst .category-vertical-filters.top-filters').prepend('<div class="tukgo"><a onclick="setFilter(this)" class="filterOrderInStock">'+translateIt("Urunler_Stoktakiler")+'</a></div>'); 
            $('body #divSayfalamaUst .category-vertical-filters.top-filters').prepend('<div class="FiltreUst"><div class="closeFilt"><i class="fal fa-times"></i></div><span>'+translateIt("UrunFiltreleme_Filtreleme")+'</span><a onclick="clearAllFilters()"><i class="fal fa-trash"></i></a></div>');
            if ($('.moreNum').length==0) {
                $('#divSayfalamaUst .category-vertical-filters.top-filters .panel').find('.panel-heading').append('<div class="moreNum"></div>');
            }
            $('.mobilFilterBtn').on('click',function(event) {
                $('.mobilaf').addClass('acik');
                $('#divSayfalamaUst .filterBlock').addClass('active');
            });
            $('.closeFilt').on('click',function(event) {
                $('.mobilaf').removeClass('acik');
                $('#divSayfalamaUst .filterBlock').removeClass('active');
            });
        }
        $('#divSayfalamaUst .category-vertical-filters.top-filters .panel').each(function(index, el) {
            if ($(this).find('li').hasClass('selected')) {var numlen = $(this).find('li.selected').length; $(this).addClass('more'); $(this).find('.moreNum').html(numlen);}
            else{$(this).removeClass('more'); $(this).find('.moreNum').html(''); }
        });
        $('#divSayfalamaUst .category-vertical-filters.top-filters .panel').each(function(index, el) {
            if ($('#divSayfalamaUst .category-vertical-filters.top-filters .panel').hasClass('more')) {$('.FiltreUst a').addClass('active'); return false; }
            else{$('.FiltreUst a').removeClass('active'); }
        });
        if ($('.sortingContent .filterOrderInStock').hasClass('selected')) {$('.tukgo .filterOrderInStock').addClass('selected');}else{$('.tukgo .filterOrderInStock').removeClass('selected');}
        //if ($('.sortingContent .sortingButton').length > 0) {if ($('.sortingContent .sortingButton > a[onclick="sortingClick(1000)"]').hasClass('selected')) {$('.tukgo .filterOrderInStock').addClass('selected'); }else {$('.tukgo .filterOrderInStock').removeClass('selected'); } }
        if ($('.sortingContent .sortingButton').length > 0) {if ($('.sortingContent .sortingButton > a[onclick="setFilter(this)"]').hasClass('selected')) {$('.tukgo .filterOrderInStock').addClass('selected'); }else {$('.tukgo .filterOrderInStock').removeClass('selected'); } }      

        FiltreFixed();
        
    }
    if (globalModel.pageType == 'productdetail') {if ($('#divUrunKodu span').length==0) {$('#divUrunKodu').prepend('<span>'+translateIt("Global_StokKodu")+'</span>'); } }
}
function ekSecenekListesiCallBack(){
    if (globalModel.pageType == 'productdetail') {if ($('#divUrunKodu span').length==0) {$('#divUrunKodu').prepend('<span>'+translateIt("Global_StokKodu")+'</span>'); } }
    
    productNameShow();

    productFabricShow();
    
    setTimeout(function(){
        if ( /^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
            var clickableElements = ".size_box";
            jQuery(clickableElements ).attr("style", "cursor: pointer;");
            jQuery(clickableElements ).bind( "touchend", function(e) {
              jQuery(this).trigger("click");
          });
        }         
    },300);

     $('.sPric').remove();
Sepetteindirim();
     if ($('.ProductBody').length>0) {
            var dfixprie = $('.PriceList').html();
            $('.detayBottom .dleft').html(dfixprie)
        }

}
function mobileMenu() {//Mobil Menu ve mobil scriptler
    var menuKopya = $(' .navigation').html();
    $('body').prepend('<div class="mobilMenu"><div class="menuUstBolum"><div class="menuBack"></div><div class="CloseBtnMenu"><img src="/CustomCss/images/close.svg" /></div></div><div class="menuIcerikAlan">' + menuKopya + '</div></div>');
    $('.headerContent').prepend('<div class="mobilMenuAcButton"><span>Menu</span><img src="/CustomCss/images/mm.svg" /></div><div class="searchClick"><i class="fal fa-search"></i></div><div class="welcomeOpen"><img src="/CustomCss/images/user.svg" /></div><div class="mycartClick"><img src="/CustomCss/images/cart.svg" /></div>');
    //Resimli Menu
    if ($('.mobilMenu .ResimliMenu1').length>0) {
        // // $('.mobilMenu .ResimliMenu1 li .altMenu').closest('li').append('<div class="ResimliDown"><i class="fal fa-angle-right"></i></div>');
        // $('.mobilMenu .ResimliMenu1 li .altmenuSol li ul').closest('li').append('<div class="ResimliDown2"><i class="fal fa-angle-right"></i></div>');
        // $('.mobilMenu .altMenuMarkalar').parent().parent().addClass('Markalar'); var MarkaName = $('.Markalar').find(' > a').html();
        // $('.mobilMenu .altMenuMarkalar').prepend('<span><div class="UpBtn"><i class="fal fa-long-arrow-left"></i></div><a>'+MarkaName+'</a></span>');
        // // $('.altMenu.rootItemIndex_0.picTrue').addClass('active');
        // $('.ResimliDown').on('click',function(event) {if ($(this).find('.fal').hasClass('fa-angle-right')) {$(this).closest('li').find('.altMenu').addClass('active'); } else {$(this).closest('li').find('.altMenu').removeClass('active'); } });
        // $('.ResimliDown2').on('click',function(event) {if ($(this).find('.fal').hasClass('fa-angle-right')) {$(this).closest('li').find('.ResimliMenu1AltUl').addClass('active'); } else {$(this).closest('li').find('.ResimliMenu1AltUl').removeClass('active'); } });
        // $('.ResimliDown2').each(function(index, el) {var ClickMeNa = $(this).parent('li').find('>a').text(); $(this).closest('li').find('.ResimliMenu1AltUl').prepend('<span><div class="DownBtn"><i class="fal fa-long-arrow-left"></i></div> <a href="">'+ClickMeNa+'</a></span>'); });
        // $('.mobilMenu .altmenuSol > span').prepend('<div class="UpBtn"><i class="fal fa-long-arrow-left"></i></div>');
        // $('.DownBtn').on('click',function(event) {$('.mobilMenu .ResimliMenu1AltUl').removeClass('active'); $('.altMenuler').animate({scrollTop:0},100); $('.menuIcerikAlan').animate({scrollTop:0},100); });
        // $('.UpBtn').on('click',function(event) {$('.altMenu').removeClass('active'); $('.menuIcerikAlan').animate({scrollTop:0},100);});
    }
    //Resimsiz Menu
    if ($('.HeaderMenu2').length>0) {
        // $('.mobilMenu .HeaderMenu2 > li > ul').closest('li').append('<div class="ResimsizDown"><i class="fal fa-angle-right"></i></div>');
        // $('.mobilMenu .HeaderMenu2 > li > ul li ul').closest('li').append('<div class="ResimsizDown2"><i class="fal fa-angle-right"></i></div>');
        // $('.ResimsizDown').on('click',function(event) {if ($(this).find('.fal').hasClass('fa-angle-right')) {$(this).closest('li').find('> ul').addClass('active'); } else {$(this).closest('li').find('> ul').removeClass('active'); } });
        // $('.ResimsizDown2').on('click',function(event) {if ($(this).find('.fal').hasClass('fa-angle-right')) {$(this).closest('li').find('> ul').addClass('active');$(this).closest('ul').addClass('over'); } else {$(this).closest('li').find('> ul').removeClass('active');$(this).closest('ul').removeClass('over'); } });
        // $('.ResimsizDown').each(function(index, el) {var Down1 = $(this).parent('li').find('>a').text(); $(this).closest('li').find('> ul').prepend('<span><div class="NoiBack"><i class="fal fa-long-arrow-left"></i></div> <span>'+Down1+'</span></span>'); });
        // $('.ResimsizDown2').each(function(index, el) {var Down2 = $(this).parent('li').find('>a').text(); $(this).closest('li').find('> ul').prepend('<span><div class="NoiBack2"><i class="fal fa-long-arrow-left"></i></div> <span>'+Down2+'</span></span>'); });
        // $('.NoiBack2').on('click',function(event) {$(this).parent().parent().removeClass('active');$(this).closest('.over').removeClass('over'); $('.mobilMenu .navUl > li > ul').animate({scrollTop:0},100); $('.menuIcerikAlan').animate({scrollTop:0},100); });
        // $('.NoiBack').on('click',function(event) {$('.mobilMenu .navUl > li > ul').removeClass('active'); $('.menuIcerikAlan').animate({scrollTop:0},100); });
    }
    // $('.mobilMenu').after('<div class="mobilaf"></div>');
    // $('body:not(.sepetimBody)').append('<div class="bottomHead"> <ul> <li class="homeC"> <a href="/"><i class="fal fa-home"></i><span>'+translateIt("GlobalMasterPage_Anasayfa")+'</span></a> </li> <li class="favoC"> <a href="javascript:void(0)" onclick="GirisKontrol(0)"><i class="fal fa-heart"></i><span>'+translateIt("Favorilerim_Baslik")+'</span><div class="favNum"></div></a> </li> <li class="cartC"> <a href="/sepetim.aspx"><i class="fal fa-shopping-cart"></i><span>'+translateIt("GlobalMasterPage_Sepetim")+'</span></a> </li> <li class="welcC"> <a href="javascript:void(0)" onclick="GirisKontrol(0)"><i class="fal fa-user"></i><span>'+translateIt("GlobalMasterPage_MobilUyeGirisi")+'</span></a> </li> </ul> </div>');
    
    $(".welcome").insertBefore('.menuBottom');
    $('.mobilMenu').after('<div class="mobilaf"></div>');
    //$('body:not(.sepetimBody)').append('<div class="bottomHead"> <ul> <li class="homeC"> <a href="/"><i class="fal fa-home"></i><span>' + translateIt("GlobalMasterPage_Anasayfa") + '</span></a> </li> <li class="favoC"> <a href="javascript:void(0)" onclick="GirisKontrol(0)"><i class="fal fa-heart"></i><span>' + translateIt("Favorilerim_Baslik") + '</span><div class="favNum"></div></a> </li> <li class="cartC"> <a href="/sepetim.aspx"><i class="fal fa-shopping-cart"></i><span>' + translateIt("GlobalMasterPage_Sepetim") + '</span></a> </li> <li class="welcC"> <a href="javascript:void(0)" onclick="GirisKontrol(0)"><i class="fal fa-user"></i><span>' + translateIt("GlobalMasterPage_MobilUyeGirisi") + '</span></a> </li> </ul> </div>');
    //$('body').append('<div class="topHead"> <div class="mobilMenuAcButton"> <span>Menu</span><i class="far fa-bars"></i> </div> <div class="searchClick"> <i class="fal fa-search"></i> </div> <div class="welcomeOpen"><a href="/UyeGiris"><i class="fal fa-user"></i></a> </div> <div class="myFav"> <a href="/Hesabim#/Favorilerim"><i class="far fa-heart"></i></a> </div> <div class="mycartClick"> <i class="fal fa-shopping-bag"></i> </div></div>');
    $('.menuIcerikAlan').append('<div class="menuBottom"><div class="mobileLink"> <a href="/Hesabim.aspx/#/Favorilerim"> Favori</a> <a href="https://www.romanodizayn.com/Iletisim"> İletişim</a> </div> </div>');
    $('<div class="mobileBanner"><a href="https://www.romanodizayn.com/teslimat"><img src="/Uploads/EditorUploads/cargoBan.png"/></a></div>').prependTo('.menuBottom');

    
    
    if (siteSettings.isAuthenticated == true) {$('.welcC a').attr('href','/hesabim.aspx'); $('.favoC a').attr('href','/Hesabim.aspx/#/Favorilerim'); $('.welcC span').html(translateIt("GlobalMasterPage_MobilHesabim")); }
    $('#divIcerik').on('touchend',function(){$('.welcome').removeClass('active'); $('.searchContent').removeClass('active');});
    if (windowidth<750) {
        //$('.welcome').insertAfter('.headerContent');
        $('.CartProduct').insertAfter('.mobilMenu');
        if ($('.CartProduct span').hasClass('spanustSepetteUrunYok')) {$('.CartProduct').addClass('SepetBos'); }
    }
    $('.searchClick').on('click',function (event) {$('.breadcrumb').removeClass('zindex');$('.breadList').removeClass('breadActive').hide();$('.searchContent').toggleClass('active'); $('.mobilMenu').removeClass('acik'); $('.altMenu').removeClass('active'); $('.ResimliMenu1AltUl').removeClass('active'); $('.mobilMenu .KatMenu1 > li ul').removeClass('active'); $('.mobilMenu .navUl ul').removeClass('active'); $('.mobilMenu .lfMenuAltContent').removeClass('active'); $('.mobilAcilirMenu').html('<i class="fal fa-angle-right"></i>'); $('.CartProduct').removeClass('animated'); $('.welcome').removeClass('active'); $('#lang_flag_container').removeClass('selector'); $('#txtbxArama').focus(); });
    $('.welcomeOpen').on('click',function () {$('.breadcrumb').removeClass('zindex');$('.breadList').removeClass('breadActive').hide();$('.welcome').toggleClass('active'); $('.mobilMenu').removeClass('acik'); $('.altMenu').removeClass('active'); $('.ResimliMenu1AltUl').removeClass('active'); $('.mobilMenu .KatMenu1 > li ul').removeClass('active'); $('.mobilMenu .navUl ul').removeClass('active'); $('.mobilMenu .lfMenuAltContent').removeClass('active'); $('.mobilAcilirMenu').html('<i class="fal fa-angle-right"></i>'); $('.CartProduct').removeClass('animated'); $('.searchContent').removeClass('active'); $('#lang_flag_container').removeClass('selector'); });
    $('.menuBack').on('click',function(){$('.ResimliMenu1AltUl').removeClass('active'); $('.altMenu').removeClass('active'); $('.navUl > li ul').removeClass('active'); });
    $('.mobilMenuAcButton').on('click',function (event) {$('.breadcrumb').removeClass('zindex');$('.breadList').removeClass('breadActive').hide();$('body').addClass('overflow transform'); $('.mobilMenu').addClass('acik'); $('.mobilaf').addClass('acik').removeAttr('style');; $('.CartProduct').removeClass('animated'); $('.welcome').removeClass('active'); $('.searchContent').removeClass('active'); $('#lang_flag_container').removeClass('selector'); });
    $('.mobilaf,.CloseBtnMenu').on('click',function (event) {$('.breadcrumb').removeClass('zindex');$('.breadList').removeClass('breadActive').hide();$('body').removeClass('overflow transform'); $('.mobilMenu').removeClass('acik'); $('.altMenu').removeClass('active'); $('.ResimliMenu1AltUl').removeClass('active'); $('.mobilMenu .KatMenu1 > li ul').removeClass('active'); $('.mobilMenu .navUl ul').removeClass('active'); $('.mobilMenu .lfMenuAltContent').removeClass('active'); $('.mobilAcilirMenu').html('<i class="fal fa-angle-right"></i>'); $('.mobilaf').removeClass('acik').removeAttr('style'); $('.searchContent').removeClass('active'); $('.welcome').removeClass('active'); $('.CartProduct').removeClass('animated'); $('#lang_flag_container').removeClass('selector'); $('body #divSayfalamaUst .filterBlock').removeClass('active'); });
    $('body').on('click','.headerCartBtn,.headerOrderBtn',function(){$('body').removeClass('overflow transform'); $('.CartProduct').removeClass('animated');$('.mobilaf').removeClass('acik'); });
}
function SepetEkrani() {//Sepet ekrani
    $('.mycart').addClass('more');
    $('.navigation .navUl').wrapAll('<div></div>');
    $('.Mic').insertAfter('.navUl');
    setTimeout(function(){var wle = $('.welcome').html(); $('.welcome').html(''); $('.welcome').append('<div>'+wle+'</div>'); },1500);

    Sepetteindirim();
}
function HesabimTakip() {//Siparis Takip -- Hesabim
    $('body').addClass('HesabimTakip');
}
function Iletisimaspx() {//Iletisim Sayfasi
    $('body').addClass('Iletisimaspx');
    var uyead = globalModel.member.memberName;
    var uyemail = globalModel.member.memberEMail;
    $('#mainHolder_txtbxAdSoyad').attr('value',uyead);
    $('#mainHolder_txtbxMail').attr('value',uyemail);
    $('.iletisimLeft,.iletisimRight').wrapAll('<div class="AdBan"></div>');
    $('.iletisimForm').insertAfter('.AdBan');
    $('.iletisimLeftAdres').insertAfter('.iletisimLeftFirmaAdi');
}
function UrunDetayPaylas () {
    var title = $(".ProductName h1 span").text();
    var url = window.location.href;
    var image = location.origin + "" + $('.Images #imgUrunResim').attr('src') + "";
    var description = "";
    var link = "https://web.whatsapp.com/send?phone=905555555555&text=" + url + " Ürünü satın almak istiyorum";
    var socialAppMessage = "Bu ürünü satın almak istiyorum" + encodeURIComponent(productDetailModel.productName) + " - " + encodeURIComponent(window.location.href);
    $(".product_social_icons").on('click',function () {
        if ($(this).attr("content") == "facebook") {
            if (isMobileDevice()) {
                window.open("https://m.facebook.com/sharer.php?u=" + url + "");
            } else {
                window.open("https://www.facebook.com/sharer.php?s=100&p[medium]=100&p[title]=" + $.trim(title) + "&p[images][0]=" + image + "&p[url]=" + url + "&p[summary]=" + $.trim(title) + "&t=" + $.trim(title) + "", "sharer", "toolbar=0,status=0,width=630,height=430");
            }
        } else if ($(this).attr("content") == "twitter") {
            window.open("https://twitter.com/intent/tweet?text=" + $.trim(title) + "&url=" + url + "", "sharer", "toolbar=0,status=0,width=630,height=430");
        } else if ($(this).attr("content") == "pinterest") {
            window.open("https://pinterest.com/pin/create/button/?url=" + url + "&media=" + image + "&description=" + $.trim(title) + "", "sharer", "toolbar=0,status=0,width=630,height=430");
        }else if ($(this).attr("content") == "whatsapp") {
            if (windowidth > 768) {
                window.open(link, "toolbar=0,status=0,width=630,height=430");
            } else {
                window.location.href = "whatsapp://send?phone=905555555555&text=" + socialAppMessage;
            }
        }
    });
}
function sepetBindRefresh(res){//Sepet kontrol
    if (typeof res.cart.products != 'undefined') {
        if (res.cart.products.length>0) {$('.mycart').addClass('more');$('.CartProduct').addClass('more'); $('.SepetBlock').addClass('more');$('.headerOrderBtn').text(translateIt('SiparisTamamla_Baslik')); } else {$('.mycart').removeClass('more');$('.CartProduct').removeClass('more'); $('.SepetBlock').removeClass('more'); }
        $('.CartProduct .SProduct li').each(function(){
            if ($(this).find('.sptAdet').length == 0) {$(this).find('a:eq(0) .SepettopAd').after('<div class="sptAdet"></div>'); }
            $(this).find('.SepettopAd span:eq(0)').wrapAll('<div class="urunAd"></div>');
            $(this).find('.SepettopAd span:eq(1)').wrapAll('<div class="varyAd"></div>');
            $(this).find('.SepetTopAdet').appendTo($(this).find('.sptAdet'));
            $(this).find('.sepetTopSatisBirimi').appendTo($(this).find('.sptAdet'));
            $(this).find('.sptAdet').appendTo($(this).find('.SepettopAd'));
        });
    }

    if (windowidth<768) {
        $('.mycart > a').removeAttr('href');
        if ($('.SepetUst').length==0) {
            $('.CartProduct').prepend('<div class="SepetUst"><div class="seClose"><i class="fal fa-times"></i></div><span>' + translateIt("GlobalMasterPage_Sepetim") + '</span></div>');
        }
    }

}

$(document).on('click','.mycartClick,.sepetUrunSayisi',function () {$('.breadcrumb').removeClass('zindex');$('.breadList').removeClass('breadActive').hide();$('.mobilMenu').removeClass('acik'); $('body').addClass('overflow transform'); $('.CartProduct').addClass('animated'); $('.mobilMenu').removeClass('acik'); $('.altMenu').removeClass('active'); $('.ResimliMenu1AltUl').removeClass('active'); $('.mobilMenu .KatMenu1 > li ul').removeClass('active'); $('.mobilMenu .navUl ul').removeClass('active'); $('.mobilMenu .lfMenuAltContent').removeClass('active'); $('.mobilAcilirMenu').html('<i class="fal fa-angle-right"></i>'); $('.searchContent').removeClass('active'); $('.welcome').removeClass('active'); $('#lang_flag_container').removeClass('selector'); });
$(document).on('click','.seClose',function () {$('.CartProduct').removeClass('animated');$('body').removeClass('overflow transform'); });
$(window).on('load', function() {
    if ($(".hesabimBolumuTutucu").length > 0) { HesabimTakip(); }
    if ($(".iletisimContent").length > 0) { Iletisimaspx(); }
    if (siteSettings.isAuthenticated == true) { UseLogin(); }
});
function mobilFooter(){
    window.blockMenuHeaderScroll = false; $(window).on('touchstart', function(e) {if ($(e.target).closest('.owl-grab').length == 1) {blockMenuHeaderScroll = true;}}); $(window).on('touchend', function() {blockMenuHeaderScroll = false;}); $(window).on('touchmove', function(e) {if (blockMenuHeaderScroll) {e.preventDefault();}}); 
    $('.linkler .blink > ul > li').each(function(){
        if ($(this).find('>ul').length>0) {
            $(this).find('> span').append('<div class="ackapabtn"><i class="fal fa-plus"></i></div>');
        }
    });
    $('.linkler .blink > ul > li .ackapabtn').on('click',function() {
        if ($(this).find('.fal').hasClass('fa-plus')) {
            $('.linkler .blink > ul > li').find('> ul').slideUp('fast');
            $('.linkler .blink > ul > li .ackapabtn').html('<i class="fal fa-plus"></i>');
            $(this).parent().parent().find('>ul').slideDown('fast');
            $(this).html('<i class="fal fa-minus"></i>');
        }else {
            $(this).html('<i class="fal fa-plus"></i>');
            $(this).parent().parent().find('> ul').slideUp('fast');
        }
    });
}

function Sepetteindirim() {
    $('.productIcon').find('.firsatIcon').closest('.productItem').addClass('SptIndirim')
    $('.productIcon').find('.ozelAlan3').closest('.productItem').addClass('SptIndirim3')
    $('.productIcon').find('.ozelAlan4').closest('.productItem').addClass('SptIndirim4')
    $('.productIcon').find('.ozelAlan5').closest('.productItem').addClass('SptIndirim5')
    if (IndirimOrani > 0) {
        $('.productItem.SptIndirim').each(function(item){
            var price = $(this).find('.productDetail .productPrice .discountPrice span:first').text().replace(/^\s+|\s+$/g, '').trim().replace('TL', "");
            if (globalModel.currency == "try"){price = price.replace(/\s/g,'').replace('.','.').replace(',', '.'); }
            else{price = price.replace(',','.'); }

            var new_price = (price * IndirimOrani).toFixed(3);

            var new_price2 = new_price.split('.')[0];
            if(new_price2 == 0){
                var new_price = new_price.split('.')[1];
            }
            var say = new_price2.length;
            if(say >= 4){
                new_price = new_price.replace('.',','); 
            }
            var ondalik = price.includes(".");
            if(ondalik == false){
                new_price = new_price.replace('.',','); 
                if(new_price.split(',')[1]==0){
                    new_price = new_price.split(',')[0].replace('.',','); 
                }else{
                    new_price = new_price.split(',')[0]; 
                }
            }

            if ($(this).find('.KatSepetFiyat').length==0) {
                $(this).find('.productPrice').after('<div class="KatSepetFiyat"><span class="sptBsl">'+Listelemeyazisi+'</span><span class="sptPrice">'+ new_price + ' TL</span></div>');
            }



        });
        if ($('.ProductBody .DetayFirsatUrunu').length > 0) {
            var price2 = $('.RightDetail .IndirimliFiyatContent .indirimliFiyat .spanFiyat,.RightDetail #divIndirimsizFiyat .right_line .spanFiyat').text().replace(/^\s+|\s+$/g, '').trim().replace('TL', "");
            if (globalModel.currency == "try"){price2 = price2.replace(/\s/g,'').replace('.','.').replace(',', '.'); }
            else{price2 = price2.replace(',','.'); }


            var new_priceD = (price2 * IndirimOrani).toFixed(3);

            var new_price2D = new_priceD.split('.')[0];
            if(new_price2D == 0){
                var new_priceD = new_priceD.split('.')[1];
            }
            var say = new_price2D.length;
            if(say >= 4){
                new_priceD = new_priceD.replace('.',','); 
            }
            var ondalik = price2.includes(".");
            if(ondalik == false){
                new_priceD = new_priceD.replace('.',','); 
                if(new_priceD.split(',')[1]==0){
                    new_priceD = new_priceD.split(',')[0].replace('.',','); 
                }else{
                    new_priceD = new_priceD.split(',')[0]; 
                }
            }


            if ($('.sPric').length==0) {
                $('.RightDetail').addClass('SpricV');
                $('#divUrunEkSecenek').addClass('SpricV');
                $('#pnlFiyatlar').after('<div class="sPric"><span class="sptBsl">'+Detayyazisi+'</span><span class="sptPrice">'+new_priceD+' TL</span></div>');
                $('.sPric').insertAfter('.butonUst');
                $('.IlgiliUrun .satir1').html('Bu Ã¼rÃ¼nÃ¼n yanÄ±nda tavsiye ediyoruz');
            }
        }
    }

    if (IndirimOrani3 > 0) {
        $('.productItem.SptIndirim3').each(function(item){
            var price = $(this).find('.productDetail .productPrice .discountPrice span:first').text().replace(/^\s+|\s+$/g, '').trim().replace('TL', "");
            if (globalModel.currency == "try"){price = price.replace(/\s/g,'').replace('.','.').replace(',', '.'); }
            else{price = price.replace(',','.'); }

            var new_price = (price * IndirimOrani3).toFixed(3);

            var new_price2 = new_price.split('.')[0];
            if(new_price2 == 0){
                var new_price = new_price.split('.')[1];
            }
            var say = new_price2.length;
            if(say >= 4){
                new_price = new_price.replace('.',','); 
            }
            var ondalik = price.includes(".");
            if(ondalik == false){
                new_price = new_price.replace('.',','); 
                if(new_price.split(',')[1]==0){
                    new_price = new_price.split(',')[0].replace('.',','); 
                }else{
                    new_price = new_price.split(',')[0]; 
                }
            }

            if ($(this).find('.KatSepetFiyat').length==0) {
                $(this).find('.productPrice').after('<div class="KatSepetFiyat"><span class="sptBsl">'+Listelemeyazisi3+'</span><span class="sptPrice">'+ new_price + ' TL</span></div>');
            }



        });
        if ($('.ProductBody #divOzelAlan3').length > 0) {
            var price2 = $('.RightDetail .IndirimliFiyatContent .indirimliFiyat .spanFiyat,.RightDetail #divIndirimsizFiyat .right_line .spanFiyat').text().replace(/^\s+|\s+$/g, '').trim().replace('TL', "");
            if (globalModel.currency == "try"){price2 = price2.replace(/\s/g,'').replace('.','.').replace(',', '.'); }
            else{price2 = price2.replace(',','.'); }


            var new_priceD = (price2 * IndirimOrani3).toFixed(3);

            var new_price2D = new_priceD.split('.')[0];
            if(new_price2D == 0){
                var new_priceD = new_priceD.split('.')[1];
            }
            var say = new_price2D.length;
            if(say >= 4){
                new_priceD = new_priceD.replace('.',','); 
            }
            var ondalik = price2.includes(".");
            if(ondalik == false){
                new_priceD = new_priceD.replace('.',','); 
                if(new_priceD.split(',')[1]==0){
                    new_priceD = new_priceD.split(',')[0].replace('.',','); 
                }else{
                    new_priceD = new_priceD.split(',')[0]; 
                }
            }


            if ($('.sPric').length==0) {
                $('.RightDetail').addClass('SpricV');
                $('#divUrunEkSecenek').addClass('SpricV');
                $('#pnlFiyatlar').after('<div class="sPric"><span class="sptBsl">'+Detayyazisi3+'</span><span class="sptPrice">'+new_priceD+' TL</span></div>');
                $('.sPric').insertAfter('.butonUst');
                $('.IlgiliUrun .satir1').html('Bu Ã¼rÃ¼nÃ¼n yanÄ±nda tavsiye ediyoruz');
            }
        }
    }

    if (IndirimOrani4 > 0) {
        $('.productItem.SptIndirim4').each(function(item){
            var price = $(this).find('.productDetail .productPrice .discountPrice span:first').text().replace(/^\s+|\s+$/g, '').trim().replace('TL', "");
            if (globalModel.currency == "try"){price = price.replace(/\s/g,'').replace('.','.').replace(',', '.'); }
            else{price = price.replace(',','.'); }

            var new_price = (price * IndirimOrani4).toFixed(3);

            var new_price2 = new_price.split('.')[0];
            if(new_price2 == 0){
                var new_price = new_price.split('.')[1];
            }
            var say = new_price2.length;
            if(say >= 4){
                new_price = new_price.replace('.',','); 
            }
            var ondalik = price.includes(".");
            if(ondalik == false){
                new_price = new_price.replace('.',','); 
                if(new_price.split(',')[1]==0){
                    new_price = new_price.split(',')[0].replace('.',','); 
                }else{
                    new_price = new_price.split(',')[0]; 
                }
            }

            if ($(this).find('.KatSepetFiyat').length==0) {
                $(this).find('.productPrice').after('<div class="KatSepetFiyat"><span class="sptBsl">'+Listelemeyazisi4+'</span><span class="sptPrice">'+ new_price + ' TL</span></div>');
            }



        });
        if ($('.ProductBody #divOzelAlan4').length > 0) {
            var price2 = $('.RightDetail .IndirimliFiyatContent .indirimliFiyat .spanFiyat,.RightDetail #divIndirimsizFiyat .right_line .spanFiyat').text().replace(/^\s+|\s+$/g, '').trim().replace('TL', "");
            if (globalModel.currency == "try"){price2 = price2.replace(/\s/g,'').replace('.','.').replace(',', '.'); }
            else{price2 = price2.replace(',','.'); }


            var new_priceD = (price2 * IndirimOrani4).toFixed(3);

            var new_price2D = new_priceD.split('.')[0];
            if(new_price2D == 0){
                var new_priceD = new_priceD.split('.')[1];
            }
            var say = new_price2D.length;
            if(say >= 4){
                new_priceD = new_priceD.replace('.',','); 
            }
            var ondalik = price2.includes(".");
            if(ondalik == false){
                new_priceD = new_priceD.replace('.',','); 
                if(new_priceD.split(',')[1]==0){
                    new_priceD = new_priceD.split(',')[0].replace('.',','); 
                }else{
                    new_priceD = new_priceD.split(',')[0]; 
                }
            }


            if ($('.sPric').length==0) {
                $('.RightDetail').addClass('SpricV');
                $('#divUrunEkSecenek').addClass('SpricV');
                $('#pnlFiyatlar').after('<div class="sPric"><span class="sptBsl">'+Detayyazisi4+'</span><span class="sptPrice">'+new_priceD+' TL</span></div>');
                $('.sPric').insertAfter('.butonUst');
                $('.IlgiliUrun .satir1').html('Bu Ã¼rÃ¼nÃ¼n yanÄ±nda tavsiye ediyoruz');
            }
        }
    }

    if (IndirimOrani5 > 0) {
        $('.productItem.SptIndirim5').each(function(item){
            var price = $(this).find('.productDetail .productPrice .discountPrice span:first').text().replace(/^\s+|\s+$/g, '').trim().replace('TL', "");
            if (globalModel.currency == "try"){price = price.replace(/\s/g,'').replace('.','.').replace(',', '.'); }
            else{price = price.replace(',','.'); }

            var new_price = (price * IndirimOrani5).toFixed(3);

            var new_price2 = new_price.split('.')[0];
            if(new_price2 == 0){
                var new_price = new_price.split('.')[1];
            }
            var say = new_price2.length;
            if(say >= 4){
                new_price = new_price.replace('.',','); 
            }
            var ondalik = price.includes(".");
            if(ondalik == false){
                new_price = new_price.replace('.',','); 
                if(new_price.split(',')[1]==0){
                    new_price = new_price.split(',')[0].replace('.',','); 
                }else{
                    new_price = new_price.split(',')[0]; 
                }
            }

            if ($(this).find('.KatSepetFiyat').length==0) {
                $(this).find('.productPrice').after('<div class="KatSepetFiyat"><span class="sptBsl">'+Listelemeyazisi5+'</span><span class="sptPrice">'+ new_price + ' TL</span></div>');
            }



        });
        if ($('.ProductBody #divOzelAlan5').length > 0) {
            var price2 = $('.RightDetail .IndirimliFiyatContent .indirimliFiyat .spanFiyat,.RightDetail #divIndirimsizFiyat .right_line .spanFiyat').text().replace(/^\s+|\s+$/g, '').trim().replace('TL', "");
            if (globalModel.currency == "try"){price2 = price2.replace(/\s/g,'').replace('.','.').replace(',', '.'); }
            else{price2 = price2.replace(',','.'); }


            var new_priceD = (price2 * IndirimOrani5).toFixed(3);

            var new_price2D = new_priceD.split('.')[0];
            if(new_price2D == 0){
                var new_priceD = new_priceD.split('.')[1];
            }
            var say = new_price2D.length;
            if(say >= 4){
                new_priceD = new_priceD.replace('.',','); 
            }
            var ondalik = price2.includes(".");
            if(ondalik == false){
                new_priceD = new_priceD.replace('.',','); 
                if(new_priceD.split(',')[1]==0){
                    new_priceD = new_priceD.split(',')[0].replace('.',','); 
                }else{
                    new_priceD = new_priceD.split(',')[0]; 
                }
            }


            if ($('.sPric').length==0) {
                $('.RightDetail').addClass('SpricV');
                $('#divUrunEkSecenek').addClass('SpricV');
                $('#pnlFiyatlar').after('<div class="sPric"><span class="sptBsl">'+Detayyazisi5+'</span><span class="sptPrice">'+new_priceD+' TL</span></div>');
                $('.sPric').insertAfter('.butonUst');
                $('.IlgiliUrun .satir1').html('Bu Ã¼rÃ¼nÃ¼n yanÄ±nda tavsiye ediyoruz');
            }
        }
    }
}


function UseLogin(){
    if (windowidth>768) {$('.welcome').append('<div class="useLogin"> <div class="useName"><span>'+globalModel.member.memberName+'</span></div> <ul> <li class=""><a href="/Hesabim.aspx#/Siparislerim"><i class="fal fa-angle-right"></i><span>'+translateIt("Siparislerim_Baslik")+'</span></a></li> <li class=""><a href="/Hesabim.aspx#/Uyelik-Bilgilerim"><i class="fal fa-angle-right"></i><span>'+translateIt("Hesabim_Baslik")+'</span></a></li> <li class=""><a href="/Hesabim.aspx#/Favorilerim"><i class="fal fa-angle-right"></i><span>'+translateIt("Favorilerim_Baslik")+'</span></a></li> <li class=""><a href="/Hesabim.aspx#/AdresDefterim"><i class="fal fa-angle-right"></i><span>'+translateIt("AdresDefterim_Baslik")+'</span></a></li> <li class=""><a href="/Hesabim.aspx#/IadeTaleplerim"><i class="fal fa-angle-right"></i><span>'+translateIt("IadeTaleplerim_Baslik")+'</span></a></li> <li class=""><a class="kargomNeredeIframe control-item" data-fancybox-type="iframe" href="/kargomnerede.aspx" vspace="500"><i class="fal fa-angle-right"></i><span>'+translateIt("Siparislerim_KargomNerede")+'</span></a></li> <li class="cikisbtn"><a href="/UyeCikis.ashx" onclick="uyeCikisYap()"><i class="fal fa-angle-right"></i><span>'+translateIt("Global_CikisYap")+'</span></a></li> </ul> </div> <style type="text/css"> .useLogin { display: block !important; background: #fff; float: left; padding:0; z-index: 99999; position: absolute; top: 100%; right: 0; box-shadow: 0 0 16px -10px #000; opacity: 0; visibility: hidden;margin-left: -100px; -webkit-transition: all 0.3s ease; -moz-transition: all 0.3s ease; transition: all 0.3s ease; } .welcome:after { position: absolute; left: 0; right: 0; bottom: -15px; height: 15px;} .welcome:hover .useLogin { visibility: visible; opacity: 1; top: 130%; } .useLogin:before, .useLogin:after { bottom: 100%; right: 10px; border: solid transparent;height: 0; width: 0; position: absolute; pointer-events: none; } .useLogin:before { border-color: transparent; border-bottom-color: #f0f0f0; border-width: 9px; margin-left: -9px; } .useLogin:after { border-color: transparent; border-bottom-color: #fff; border-width: 8px; margin-left: -8px; right: 11px; } .useLogin ul{text-align: left;display: block;float: none;} .useLogin ul li{display: block;padding: 0;white-space: nowrap;} .useLogin ul li a{color: #000;font-size: 12px;line-height: 27px;padding: 0 15px;display: block;} .useLogin ul li a i{line-height: 27px;margin-right: 6px;font-size: 15px;font-weight: 300;display: inline-block;vertical-align:top;} .useLogin ul li.cikisbtn{background: #e6e6e6;margin-top: 10px;transition: .1s ease-in-out;}.useLogin .useName{display: block;margin-top: 10px;font-size: 12px;line-height: 27px;padding: 0 15px;font-weight:500;text-align: left;cursor: default;color:'+$('.CartProduct .headerOrderBtn').css('background-color')+';} .useLogin ul li a:hover{color:'+$('.CartProduct .headerOrderBtn').css('background-color')+';} .useLogin ul li.cikisbtn:hover{background:'+$('.CartProduct .headerOrderBtn').css('background-color')+';} .useLogin ul li.cikisbtn a:hover{color: #fff;} .welcome:after {content: "";} .useLogin:before, .useLogin:after {content:"";} </style>');}
}

function imageProductHover() {
    $('.eksecenekLine.resimlivaryasyon .size_box:not(.nostok)').each(function(index, el) {
        image = $(this).find("img").attr("src");
        colorName = $(this).find("img").attr("alt");
        if ($(this).find('.productItemOnizleme').length==0) {
            $(this).append("<div class='productItemOnizleme'><img src=" + image + "><span>" + colorName + "</span></div>");
        }
    });
}

function productFabricShow() {
    $('.eksecenekLine.kutuluvaryasyon .size_box:not(.nostok)').each(function(index, el) {
        if ($(this).hasClass('selected')) {
            fabric = $(this).text();
            $('.varyasyonlar .urunCesidi').html(fabric);
        }
    });

    $('.eksecenekLine.resimlivaryasyon .size_box:not(.nostok)').each(function(index, el) {
        if ($(this).hasClass('selected')) {
            image = $(this).find("img").attr("src");
            colorName = $(this).find("img").attr("alt");
            $('.varyasyonlar .kumasAdi').html("<img src=" + image + ">");
            $('.varyasyonlar .renkAdi').html(colorName);
        }
        if (index > 19) {
            if ($(this).parent().parent().find('.tkBtn').length==0) {
                $('#divUrunEkSecenek .eksecenekLine.resimlivaryasyon .left_line').append('<div class="tkBtn"><div class="devamK">Tümünü Gör</div><div class="kapatK">Gizle</div></div>');
            }
        }
    });

    $("body").on("click",".eksecenekLine.kutuluvaryasyon .size_box:not(.nostok)",function () {

        if ($(this).hasClass('selected')) {
            fabric = $(this).text();
            $('.varyasyonlar .urunCesidi').html(fabric);
        }

        setTimeout(function () {

            imageProductHover();
            $('.eksecenekLine.resimlivaryasyon .size_box:not(.nostok)').each(function(index, el) {
                if ($(this).hasClass('selected')) {
                    image = $(this).find("img").attr("src");
                    colorName = $(this).find("img").attr("alt");
                    $('.varyasyonlar .kumasAdi').html("<img src=" + image + ">");
                    $('.varyasyonlar .renkAdi').html(colorName);
                }

                if (windowidth>1410) {
                    if (index > 19) {
                        if ($(this).parent().parent().find('.tkBtn').length==0) {
                            $('#divUrunEkSecenek .eksecenekLine.resimlivaryasyon .left_line').append('<div class="tkBtn"><div class="devamK">Tümünü Gör</div><div class="kapatK">Gizle</div></div>');
                        }
                    }
                }
                if (windowidth > 1159 && windowidth < 1410) {
                    if (index > 13) {
                        if ($(this).parent().parent().find('.tkBtn').length==0) {
                            $('#divUrunEkSecenek .eksecenekLine.resimlivaryasyon .left_line').append('<div class="tkBtn"><div class="devamK">Tümünü Gör</div><div class="kapatK">Gizle</div></div>');
                        }
                    }
                }
                if (windowidth > 1025 && windowidth < 1159) {
                    if (index > 15) {
                        if ($(this).parent().parent().find('.tkBtn').length==0) {
                            $('#divUrunEkSecenek .eksecenekLine.resimlivaryasyon .left_line').append('<div class="tkBtn"><div class="devamK">Tümünü Gör</div><div class="kapatK">Gizle</div></div>');
                        }
                    }
                }
                if (windowidth > 768 && windowidth < 1025) {
                    if (index > 21) {
                        if ($(this).parent().parent().find('.tkBtn').length==0) {
                            $('#divUrunEkSecenek .eksecenekLine.resimlivaryasyon .left_line').append('<div class="tkBtn"><div class="devamK">Tümünü Gör</div><div class="kapatK">Gizle</div></div>');
                        }
                    }
                }
                if (windowidth < 768) {
                    if (index > 11) {
                        if ($(this).parent().parent().find('.tkBtn').length==0) {
                            $('#divUrunEkSecenek .eksecenekLine.resimlivaryasyon .left_line').append('<div class="tkBtn"><div class="devamK">Tümünü Gör</div><div class="kapatK">Gizle</div></div>');
                        }
                    }
                }
            });
        },100);
    });

    if (windowidth<768) {
        $("body").on("click",".eksecenekLine.resimlivaryasyon .size_box:not(.nostok)",function () {

            imageProductHover();
        });
    }

    TumBtn()
}

function TumBtn() {

    $('body').on('click','.devamK',function () {
        $('.eksecenekLine.resimlivaryasyon').addClass('gosterFull');
    });
    $('body').on('click','.kapatK',function () {
        $('.eksecenekLine.resimlivaryasyon').removeClass('gosterFull');
    });
}

function productNameShow() {
    $('.eksecenekLine.resimlivaryasyon .size_box:not(.nostok)').each(function(index, el) {
        if ($(this).hasClass('selected')) {
            image = $(this).find("img").attr("src");
            colorName = $(this).find("img").attr("alt");
            $('.varyasyonlar .kumasAdi').html("<img src=" + image + ">");
            $('.varyasyonlar .renkAdi').html(colorName);
        }
    });
}

function MenuResim(){
    $(".navigation .navUl li .ulVar").each(function () {
        var imgyolu = $(this).find("> a").html().split("/")[1];
        var menuadi = $(this).find("> a").html().split("/")[0];
        $(this).find("> a").text('');
        $(this).find("> a").prepend('<img src="/Uploads/EditorUploads/' + imgyolu + '"/>');
        $(this).find("> a").append('<span>'+menuadi+'</span>');
        $(this).find("> a").attr('title', menuadi);
        var img = $(this).find("img");
        if (img.attr('src') == '/Uploads/EditorUploads/undefined') {
            $(this).find('img').remove();
        }
    });
}

function FiltreFixed() {
    if (windowidth<768) {
        var position = $(window).scrollTop(); 
        var ScrollBitis = $('.ProductListContent').offset().top + 200;

        $(window).on("scroll", function () {
            var scroll = $(window).scrollTop();
            if(position > scroll) {
                $('#divSayfalamaUst').addClass('fixed');
                $('.categoryTitle').addClass('margin');    
            }

            if (ScrollBitis > scroll ){
                $('#divSayfalamaUst').removeClass('fixed');
                $('.categoryTitle').removeClass('margin');
            }

            position = scroll;
        });
    };

    
    
}




function projectsCount(){

   $('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 10000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
    
});
}


function projectsTab(){
    $('#tabs-nav li:first-child').addClass('active');
    $('.tab-content').hide();
    $('.tab-content:first').show();


    $('#tabs-nav li').click(function(){
      $('#tabs-nav li').removeClass('active');
      $(this).addClass('active');
      $('.tab-content').hide();

      var activeTab = $(this).find('a').attr('href');
      $(activeTab).fadeIn();
      return false;
  });

    $('#tabs-content ul').each(function () {//Slider duzeni
        if ($(this).find("li").length > 0 && !$(this).hasClass("owl-carousel"))
            $(this).owlCarousel({ 
                autoplay: false,
                loop: true,
                rewind:true,
                navClass: ['ProductListprev', 'ProductListnext'],
                margin:20,
                nav: true,
                items:1.2
            });
    });
  
}


function projectListCateTab(){


    class FilterGallery {

        constructor(){
            this.$filtermenuList = $('.filtermenu li');
            this.$container      = $('.container');

            this.updateMenu('all');
            this.$filtermenuList.on('click', $.proxy(this.onClickFilterMenu, this));
        }

        onClickFilterMenu(event){
            const $target      = $(event.target);
            const targetFilter = $target.data('filter');

            this.updateMenu(targetFilter);
            this.updateGallery(targetFilter);
        }

        updateMenu(targetFilter){
            this.$filtermenuList.removeClass('active');
            this.$filtermenuList.each((index, element)=>{
                const targetData = $(element).data('filter');

                if(targetData === targetFilter){
                    $(element).addClass('active');
                }
            })
        }

        updateGallery(targetFilter){

            if(targetFilter === 'all'){
                this.$container.fadeOut(300, ()=>{
                    $('.post').show();
                    this.$container.fadeIn();
                });
            }else {
                this.$container.find('.post').each((index, element)=>{
                    this.$container.fadeOut(300, ()=>{
                        if($(element).hasClass(targetFilter)) {
                            $(element).show();
                        }else {
                            $(element).hide();
                        }
                        this.$container.fadeIn();
                    })
                });
            }
        }
    }

    const fliterGallery = new FilterGallery();

    $(".projectsPage .projectListCate .filtermenu li").click(function(){
    $(this).parent().toggleClass("active");
});

}

function HeaderFixed(){
    var sepetsayfakontrol=$("body").find(".BasketPage").length;
    if(sepetsayfakontrol==0){
        $(window).on("scroll", function () {
            if($(this).scrollTop()>187){
                $('#header').addClass('fixed');
                $('body').addClass('margin');
            }
            else{
                if (window.innerWidth > 768) {
                    $('#header').removeClass('fixed');
                    $('body').removeClass('margin');
                }
            }            
        });
    }
}

//BURADAN SONRASI GÜNCEL DOSYAYA EKLENECEK
//SONRADAN EKLENENLER

//Alt Filtre Ekleme

function bottomFilterEkle(){

    if(windowidth < 768){
        //Alt Filtre Ekleme
        if ($(".bottomFilter").length === 0){

            $(".categoryTitle").append("<div class='bottomFilter'></div>");
            //Kategori
            var filterNodeCategoryToggle = $(".panel.panel-default.vertical-filter-panel.div-kategori.div-kategori-59div-kategori .panel-heading")[0];
            var filterNodeCategoryToggleClone = filterNodeCategoryToggle.cloneNode(true);
            $(".bottomFilter")[0].append(filterNodeCategoryToggleClone);
            var filterNodeCategoryList = $(".panel.panel-default.vertical-filter-panel.div-kategori.div-kategori-59div-kategori .list-group")[0];
            var filterNodeCategoryListClone = filterNodeCategoryList.cloneNode(true);
            $(".bottomFilter")[0].append(filterNodeCategoryListClone);
            //Fiyat
            var filterNodeBrandToggle = $(".panel.panel-default.vertical-filter-panel.div-fiyat .panel-heading")[0];
            var filterNodeBrandToggleClone = filterNodeBrandToggle.cloneNode(true);
            $(".bottomFilter")[0].append(filterNodeBrandToggleClone);
            var filterNodeBrandList = $(".panel.panel-default.vertical-filter-panel.div-fiyat .list-group")[0];
            var filterNodeBrandListClone = filterNodeBrandList.cloneNode(true);
            $(".bottomFilter")[0].append(filterNodeBrandListClone);
            //Renk
            //var filterNodeColorToggle = $(".panel.panel-default.vertical-filter-panel.div-tdetay.div-tdetay-115 .panel-heading")[0];
            //var filterNodeColorToggleClone = filterNodeColorToggle.cloneNode(true);
            //$(".bottomFilter")[0].append(filterNodeColorToggleClone);
            //var filterNodeColorList = $(".panel.panel-default.vertical-filter-panel.div-tdetay.div-tdetay-115 .list-group")[0];
            //var filterNodeColorListClone = filterNodeColorList.cloneNode(true);
            //$(".bottomFilter")[0].append(filterNodeColorListClone);

            $(".bottomFilter .panel-heading").addClass("dropdown-toggle");
            $(".bottomFilter .list-group").addClass("dropdown");

        };

        
    };

}
