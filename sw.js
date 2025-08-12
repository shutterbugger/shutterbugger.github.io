/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/11/13/1、k8s介绍等/index.html","f7d14eb5e1c6689d5766ccf90ae63755"],["/archives/2024/11/index.html","5ad681748c86b94caa7d5aca624d1cdc"],["/archives/2024/index.html","289fe52c333a4915c5d8ba0cdbd2ed65"],["/archives/index.html","ac5823506a149b2c1503e8fe9bf617ea"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/index-1.html","b57ab82459f68e615534e680def1e766"],["/categories/index.html","190063e6d96e868c8934a9e2cdc8d69e"],["/categories/k8s/index.html","835969292d5bd8a197b4ff8c96a8e182"],["/css/cat.css","1c764825dbbb149105718a8ef098dc9b"],["/css/color.css","028d68ac907d28f1358ef714c0bd6f96"],["/css/custom.css","9f44201060c74a276cdcfef6a830be2e"],["/css/daohang.css","7fdbe70293e7b223f18ebc3b313b7699"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","89f7c1fae9112d4551b35dacac2b63d9"],["/css/juzhong.css","ef1d195c017446153a85eb225c6b4ada"],["/css/kslink.css","c981b7cfc01136a30313d5542dc4d3bd"],["/css/menu.css","7fdbe70293e7b223f18ebc3b313b7699"],["/css/pl.css","543f5be479785a3a9813e199278ada2b"],["/css/touming.css","7b28b7d74fa3706d8762617ff75c1fc5"],["/css/transpancy.css","66bbde1d222cb02ef0c966188ba31ec6"],["/css/universe.css","d9749442fdc363f40f00606e8c4bf141"],["/css/var.css","79724aa6b7a7f2d9e145de2a572bbd46"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/51cto.jpg","68cf05b6d9a61cadd82dc6242b688415"],["/img/Snipaste_2024-05-09_20-55-52(已处理).png","b485ceb0cefb42086935319f8cbb6476"],["/img/bg.png","05a141bfd03ad138bdfc7a24d84aa16c"],["/img/bg1.jpg","cebc2cc7ca7654d4a72ffa5f1d80ddce"],["/img/bg10.png","d92059edd6708bdde3c22e4fa562e2a4"],["/img/bg6.jpg","159585ec33ff08bb0642adcc0b5d1db7"],["/img/bg7.jpg","75616710d545dfba62e80ea942457453"],["/img/bg8.jpg","aa007ff42aa9524f430851e453a8f042"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/flower.jpg","8af0f3073308e6450d62a18081fef5b2"],["/img/flower1.jpg","715d3f8086e2d428b60d834779f516d9"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/google.png","338e4330c1d4a44c0f780b21f62b1dc8"],["/img/wallhaven-j5gy6w.jpg","175cad1cef1eccf594a7477f7904e225"],["/img/wallhaven-l8782r.png","3db924d3363a31a2954f00f8f380dade"],["/img/云彩.jpg","ead945db9ce0385f45e901d135fd6f98"],["/img/初恋.jpg","79786dc5bbb852fff9c8c03540857e6e"],["/img/图书.png","0c7b050037a1fb26313962b6079a131e"],["/img/宇宙.jpg","f1e75ab68f035005494ffde801cf14f5"],["/img/微信公众号.png","430d4a94c83ace85b7b417d45bf9dbcf"],["/img/懒洋洋.jpg","e4dab8a1445862f5d03013ba3433d80c"],["/img/打水漂.png","5ed69f2314466fda59b3f2f56f08b5fc"],["/img/旅行小狗.jpg","f446bc724f6ce684d4b93ad31c9012e6"],["/img/暴雪.jpg","ffd1cece1d1357245eba7f41c96f0829"],["/img/桃花.jpg","c2b5d19f9903d32db03168487ab8a565"],["/img/橘子.jpg","877adf646c74768d6319554a4e0ae268"],["/img/流星.jpg","720760562200bb0b5a0dacf4bde792e5"],["/img/海上生明月.jpg","9e4d3d0fd69fb58fdb6a4e68bee15ab8"],["/img/瀑布.png","ea8d1d67588a91011b1cbc9c96e444dd"],["/img/狗尾巴草.png","87c054154d77c777c4c6057f0618b1e5"],["/img/猫咪.jpg","8b1074e9a645edde1a69cf48a5807b9c"],["/img/科技少女.jpg","3c2480cb65fda41165a2715de6cfbab9"],["/img/落日.jpg","0f954f6c110428e1a04fcbf90ca16645"],["/img/落日.png","40a63292f7bbdbf4fc1fa47d74ea339a"],["/index.html","f4d4a40c6f1c047679fe6795ecb4af2f"],["/js/cat.js","1664d7ac41c11d6693afe56efe396149"],["/js/diytitle.js","0688e02711b6fe0f74982b7a96c1c7ee"],["/js/grayscale.js","362feca3293c66db1463810e3f93783d"],["/js/kslink.js","de6190314599da9152776055f39c784c"],["/js/main.js","c1abc98ff6aa69f598f43b8604fb7b3e"],["/js/nav.js","b2c7cf86aefe6922efd2881a6fa5db8e"],["/js/randombg.js","94b847c155ff4ab04f1e7c841f7c4fef"],["/js/ripples.js","517af910a11b06129cf1e708c1495f27"],["/js/sakura.js","820180028794bdb467db10652ededcb2"],["/js/search/algolia.js","5e2a2c65f28bddbb3d94529453e91716"],["/js/search/local-search.js","2e3ff3d156bb208f752d95375ebca557"],["/js/snow.js","e6384c632474e6c346087ebbf9e54184"],["/js/snow.min.js","8c3d2f6f0febfdc077a081742ad1b31b"],["/js/tw_cn.js","fd395fc3b4df9c7da17e730d173cfbea"],["/js/universe.js","fafdd847299ee73d084aa36ced9bce97"],["/js/utils.js","2fd35bd141fd541a188ef52dd30108d5"],["/js/weather.js","33ed006c1363620964182896a11d0a7b"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/link/index.html","45d9a546916c07f2d6ea24a37cd238d3"],["/live2d-widget-master/README.en.html","4b26bfa90839695f7649777a52d398d7"],["/live2d-widget-master/README.html","9001b3b373608ba45a15bac2520669eb"],["/live2d-widget-master/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget-master/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget-master/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget-master/autoload.js","61240c876fa2eb8c5206b78430419284"],["/live2d-widget-master/demo/demo.html","141482d5569a35aec669d6b111908c58"],["/live2d-widget-master/demo/login.html","bf42aaf8b22335b60412591922b85210"],["/live2d-widget-master/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget-master/rollup.config.js","171b7912f3e5340c9fc61251ef193bd1"],["/live2d-widget-master/src/index.js","327f309d88198834dd4bd2fe6a606dc5"],["/live2d-widget-master/src/message.js","5f980402bfc065345253e6ce024dc1de"],["/live2d-widget-master/src/model.js","b5562a236eeda01308e5a4107e6ec80f"],["/live2d-widget-master/src/tools.js","fda693610457903a19c3861298fb416a"],["/live2d-widget-master/src/utils.js","2578501ad87a8d99ceec05d79fe2c64b"],["/live2d-widget-master/src/waifu-tips.js","e49236cc73dbcfda841588bba50dbfd3"],["/live2d-widget-master/waifu-tips.js","7ef813587dba0e4bc55c7ccafcaea531"],["/live2d-widget-master/waifu.css","ca56626026609cc76c19c028e1380207"],["/live2d-widget-master/waifu_大.css","3ba97af3afe0dd8a7d405a63ce3e2e2a"],["/live2d_api/README.html","32d1e859af56d9d5089cbbd6c540f252"],["/live2d_api/model/HyperdimensionNeptunia/blanc_classic/textures.1024/00.png","9d0c689285e6021efdc75656dd0cdd5f"],["/live2d_api/model/HyperdimensionNeptunia/blanc_classic/textures.1024/01.png","6c0151376e387aa3c0c1545458227e95"],["/live2d_api/model/HyperdimensionNeptunia/blanc_classic/textures.1024/02.png","7f065538a31167a833cf9e91ae2754bf"],["/live2d_api/model/HyperdimensionNeptunia/blanc_classic/textures.1024/03.png","4bffae039fdbdb6e126e1bceabf6852d"],["/live2d_api/model/HyperdimensionNeptunia/blanc_normal/textures.1024/00.png","9d0c689285e6021efdc75656dd0cdd5f"],["/live2d_api/model/HyperdimensionNeptunia/blanc_normal/textures.1024/01.png","6c0151376e387aa3c0c1545458227e95"],["/live2d_api/model/HyperdimensionNeptunia/blanc_normal/textures.1024/02.png","06fac404eb7ce7576c27408a66d2d195"],["/live2d_api/model/HyperdimensionNeptunia/blanc_normal/textures.1024/03.png","a7db1d8ecc7fa18c461c4169ba4ae706"],["/live2d_api/model/HyperdimensionNeptunia/blanc_swimwear/textures.1024/00.png","9d0c689285e6021efdc75656dd0cdd5f"],["/live2d_api/model/HyperdimensionNeptunia/blanc_swimwear/textures.1024/01.png","256e987dbccb87793437690cab5ebbdd"],["/live2d_api/model/HyperdimensionNeptunia/blanc_swimwear/textures.1024/02.png","01506addfc8c859d82c0d02fe322062e"],["/live2d_api/model/HyperdimensionNeptunia/histoire/textures.1024/00.png","45552f931019f59422e912d74277671d"],["/live2d_api/model/HyperdimensionNeptunia/histoire/textures.1024/01.png","8a7ea0601f56314cabe3554b363ea193"],["/live2d_api/model/HyperdimensionNeptunia/histoire/textures.1024/02.png","4d9ed0f240ae7242f70e8ca245f40610"],["/live2d_api/model/HyperdimensionNeptunia/histoire/textures.1024/03.png","c56fe341422cd8f8e1b627d18881f156"],["/live2d_api/model/HyperdimensionNeptunia/histoirenohover/textures.1024/00.png","45552f931019f59422e912d74277671d"],["/live2d_api/model/HyperdimensionNeptunia/histoirenohover/textures.1024/01.png","8a7ea0601f56314cabe3554b363ea193"],["/live2d_api/model/HyperdimensionNeptunia/histoirenohover/textures.1024/02.png","4d9ed0f240ae7242f70e8ca245f40610"],["/live2d_api/model/HyperdimensionNeptunia/histoirenohover/textures.1024/03.png","c56fe341422cd8f8e1b627d18881f156"],["/live2d_api/model/HyperdimensionNeptunia/nepgear/textures.1024/00.png","9b7f9c129596ba92319a14196bebff81"],["/live2d_api/model/HyperdimensionNeptunia/nepgear/textures.1024/01.png","8b1d2336dd37cd8a8c3b760e73108c4a"],["/live2d_api/model/HyperdimensionNeptunia/nepgear/textures.1024/02.png","a7fc5f441b3873a2a9617c3194f81935"],["/live2d_api/model/HyperdimensionNeptunia/nepgear/textures.1024/03.png","ab748b6b04b8f4653a65057e2b8cb88f"],["/live2d_api/model/HyperdimensionNeptunia/nepgear_extra/textures.1024/00.png","6816376f851dcd084a923e1d87bfe6a3"],["/live2d_api/model/HyperdimensionNeptunia/nepgear_extra/textures.1024/01.png","e7a8948cb249938c96b5661e51d61cf6"],["/live2d_api/model/HyperdimensionNeptunia/nepgear_extra/textures.1024/02.png","ce91d5e1626c30022d50e6c75c6789b1"],["/live2d_api/model/HyperdimensionNeptunia/nepgear_extra/textures.1024/03.png","1918cb5ad275f2797938b255a859ffd7"],["/live2d_api/model/HyperdimensionNeptunia/nepgearswim/textures.1024/00.png","9b7f9c129596ba92319a14196bebff81"],["/live2d_api/model/HyperdimensionNeptunia/nepgearswim/textures.1024/01.png","8b1d2336dd37cd8a8c3b760e73108c4a"],["/live2d_api/model/HyperdimensionNeptunia/nepgearswim/textures.1024/02.png","785652eb751b6c0fa72b160fee9b3791"],["/live2d_api/model/HyperdimensionNeptunia/nepgearswim/textures.1024/03.png","3e8267a0afd9101961d843bab1d5b705"],["/live2d_api/model/HyperdimensionNeptunia/nepmaid/textures.1024/00.png","318efe6cbd2ae78487afe1ca3858b150"],["/live2d_api/model/HyperdimensionNeptunia/nepmaid/textures.1024/01.png","c69c1d64699e43e2553f0cb094c4facc"],["/live2d_api/model/HyperdimensionNeptunia/nepmaid/textures.1024/02.png","8c35940c4c8a007833d30fc512555416"],["/live2d_api/model/HyperdimensionNeptunia/nepnep/textures.1024/00.png","318efe6cbd2ae78487afe1ca3858b150"],["/live2d_api/model/HyperdimensionNeptunia/nepnep/textures.1024/01.png","c69c1d64699e43e2553f0cb094c4facc"],["/live2d_api/model/HyperdimensionNeptunia/nepnep/textures.1024/02.png","16d8e01a69d41333d065bff2f4ac5bae"],["/live2d_api/model/HyperdimensionNeptunia/nepswim/textures.1024/00.png","318efe6cbd2ae78487afe1ca3858b150"],["/live2d_api/model/HyperdimensionNeptunia/nepswim/textures.1024/01.png","c69c1d64699e43e2553f0cb094c4facc"],["/live2d_api/model/HyperdimensionNeptunia/nepswim/textures.1024/02.png","eb9b00a62e9dc676166e86e0c513b3c9"],["/live2d_api/model/HyperdimensionNeptunia/neptune_classic/textures.1024/00.png","318efe6cbd2ae78487afe1ca3858b150"],["/live2d_api/model/HyperdimensionNeptunia/neptune_classic/textures.1024/01.png","04ab2348970a7d57364846c7adfbedbc"],["/live2d_api/model/HyperdimensionNeptunia/neptune_classic/textures.1024/02.png","03378670972cf1fe424efb70e95ac47b"],["/live2d_api/model/HyperdimensionNeptunia/neptune_santa/textures.1024/00.png","318efe6cbd2ae78487afe1ca3858b150"],["/live2d_api/model/HyperdimensionNeptunia/neptune_santa/textures.1024/01.png","04ab2348970a7d57364846c7adfbedbc"],["/live2d_api/model/HyperdimensionNeptunia/neptune_santa/textures.1024/02.png","41c5250769ad4927fa842eb6229ab3c9"],["/live2d_api/model/HyperdimensionNeptunia/noir/textures.1024/00.png","26e570fe69e86985eb5e19654171a648"],["/live2d_api/model/HyperdimensionNeptunia/noir/textures.1024/01.png","bb72d2b90e1efac90dfa5c555de4fca5"],["/live2d_api/model/HyperdimensionNeptunia/noir/textures.1024/02.png","ff789d0058cb3178013d5a60ed83c0e0"],["/live2d_api/model/HyperdimensionNeptunia/noir_classic/textures.1024/00.png","26e570fe69e86985eb5e19654171a648"],["/live2d_api/model/HyperdimensionNeptunia/noir_classic/textures.1024/01.png","bb72d2b90e1efac90dfa5c555de4fca5"],["/live2d_api/model/HyperdimensionNeptunia/noir_classic/textures.1024/02.png","db1362999c2e8949851b8af461cb499c"],["/live2d_api/model/HyperdimensionNeptunia/noir_santa/textures.1024/00.png","26e570fe69e86985eb5e19654171a648"],["/live2d_api/model/HyperdimensionNeptunia/noir_santa/textures.1024/01.png","bb72d2b90e1efac90dfa5c555de4fca5"],["/live2d_api/model/HyperdimensionNeptunia/noir_santa/textures.1024/02.png","5eed30ce6845c8d0901d4a99345112eb"],["/live2d_api/model/HyperdimensionNeptunia/noireswim/textures.1024/00.png","26e570fe69e86985eb5e19654171a648"],["/live2d_api/model/HyperdimensionNeptunia/noireswim/textures.1024/01.png","bb72d2b90e1efac90dfa5c555de4fca5"],["/live2d_api/model/HyperdimensionNeptunia/noireswim/textures.1024/02.png","40b387f0fbf3ea6f31bd4ee631d1543e"],["/live2d_api/model/HyperdimensionNeptunia/vert_classic/textures.1024/00.png","355595542ce8b87e3c01ddf6df88d630"],["/live2d_api/model/HyperdimensionNeptunia/vert_classic/textures.1024/01.png","0961e2d850247ca9b4c8ce261c1df13f"],["/live2d_api/model/HyperdimensionNeptunia/vert_classic/textures.1024/02.png","3f2ede6201f36fb4054f545b1210fbe8"],["/live2d_api/model/HyperdimensionNeptunia/vert_classic/textures.1024/03.png","e12e95e1975953711ded30593b7436d1"],["/live2d_api/model/HyperdimensionNeptunia/vert_normal/textures.1024/00.png","355595542ce8b87e3c01ddf6df88d630"],["/live2d_api/model/HyperdimensionNeptunia/vert_normal/textures.1024/01.png","0961e2d850247ca9b4c8ce261c1df13f"],["/live2d_api/model/HyperdimensionNeptunia/vert_normal/textures.1024/02.png","1f0a36d7abef0cf615b34f3eadc25042"],["/live2d_api/model/HyperdimensionNeptunia/vert_normal/textures.1024/03.png","9e969e5137242f83c4416bb08cde6b7b"],["/live2d_api/model/HyperdimensionNeptunia/vert_swimwear/textures.1024/00.png","355595542ce8b87e3c01ddf6df88d630"],["/live2d_api/model/HyperdimensionNeptunia/vert_swimwear/textures.1024/01.png","0961e2d850247ca9b4c8ce261c1df13f"],["/live2d_api/model/HyperdimensionNeptunia/vert_swimwear/textures.1024/02.png","5230c719aed0724fc97e231a7ef25c58"],["/live2d_api/model/HyperdimensionNeptunia/vert_swimwear/textures.1024/03.png","8c4e10348c7b42598c16dfb0cb21f8be"],["/live2d_api/model/KantaiCollection/murakumo/textures.1024/00.png","a6e1e162ce3db2e76b572f6c62821ba6"],["/live2d_api/model/Potion-Maker/Pio/textures/animal-costume-racoon.png","0dabb2091d075415910677b708a6e5b1"],["/live2d_api/model/Potion-Maker/Pio/textures/animal-costume.png","f019f0e114e00d873921957239da9948"],["/live2d_api/model/Potion-Maker/Pio/textures/bunny-girl-costume-red.png","aa697d3bbe71ffa00c8a8307d5678cc4"],["/live2d_api/model/Potion-Maker/Pio/textures/bunny-girl-costume.png","1e4c43236c202cbfe059302da2263a70"],["/live2d_api/model/Potion-Maker/Pio/textures/cake-costume-choco.png","03a43c659223acadd0ee6c15e46f339f"],["/live2d_api/model/Potion-Maker/Pio/textures/cake-costume-cream.png","fd150e783c4e9f43266ba8595eb170ad"],["/live2d_api/model/Potion-Maker/Pio/textures/default-costume.png","125aff5644c4803497ead55609f636d2"],["/live2d_api/model/Potion-Maker/Pio/textures/dress-costume-brown.png","fcdd89878365c7ff017d6de91967f19d"],["/live2d_api/model/Potion-Maker/Pio/textures/dress-costume.png","d0452dd45809d14eca4d8c651aadb809"],["/live2d_api/model/Potion-Maker/Pio/textures/elementary-school-costume-navy.png","b9a0fbb1ef74dc2a9dec86e8e4492b74"],["/live2d_api/model/Potion-Maker/Pio/textures/elementary-school-costume.png","7d5cd87a5377f5d25740dd3055cb6554"],["/live2d_api/model/Potion-Maker/Pio/textures/fall-dress-costume-beige.png","ee84468fa85e22972711daf6f3bc9fb2"],["/live2d_api/model/Potion-Maker/Pio/textures/fall-dress-costume-brown.png","637e1345a20954aa51a80ca7fdea1881"],["/live2d_api/model/Potion-Maker/Pio/textures/frill-bikini-costume-green.png","7108196ab91086524fc671a23eecb4fb"],["/live2d_api/model/Potion-Maker/Pio/textures/frill-bikini-costume-purple.png","3e69ec40d92a86256f459fffbf986fac"],["/live2d_api/model/Potion-Maker/Pio/textures/frill-blouse-costume-green.png","c019350ee901bc60006226bfacc1fd4c"],["/live2d_api/model/Potion-Maker/Pio/textures/frill-blouse-costume-red.png","255eb9bf5f863e6c35e38f70445c9849"],["/live2d_api/model/Potion-Maker/Pio/textures/furisode-costume.png","917f06713ec69be14f9d2779708378be"],["/live2d_api/model/Potion-Maker/Pio/textures/halloween-costume.png","208f6d752b5fd1a5c7c372714ecf9845"],["/live2d_api/model/Potion-Maker/Pio/textures/hanbok-costume-pink.png","b7440f104ff98736b017caaae070c794"],["/live2d_api/model/Potion-Maker/Pio/textures/hanbok-costume-red.png","9d5140641160f832cda19c32cb5622c0"],["/live2d_api/model/Potion-Maker/Pio/textures/hanbok-costume-skyblue.png","af1882cb21728ce1650871fe51707006"],["/live2d_api/model/Potion-Maker/Pio/textures/hanbok-costume-yellow.png","ee3780a886a7a52b302616fed3669f61"],["/live2d_api/model/Potion-Maker/Pio/textures/hanbok-costume.png","12bc692819d62afd273399ce9dd5b5ab"],["/live2d_api/model/Potion-Maker/Pio/textures/healer-costume.png","42ccbc5182de1274c9ea911771f25105"],["/live2d_api/model/Potion-Maker/Pio/textures/kids-costume-navy.png","df1d786de387426e7cb3884ce5a8df57"],["/live2d_api/model/Potion-Maker/Pio/textures/kids-costume.png","d6eaf5472fa693cc20aec882c48a7cf8"],["/live2d_api/model/Potion-Maker/Pio/textures/maid-costume-red.png","555f955641a0efe437e4209504bf90f5"],["/live2d_api/model/Potion-Maker/Pio/textures/maid-costume.png","eaf0dae1d65587db28f9381efb6a2aee"],["/live2d_api/model/Potion-Maker/Pio/textures/new2015-costume-pajamas.png","232d84a83c6b1e5b9bd09043fa8cc022"],["/live2d_api/model/Potion-Maker/Pio/textures/new2015-costume.png","22073d5b44d7076d8446a45462452f23"],["/live2d_api/model/Potion-Maker/Pio/textures/night-witch-costume-black.png","98f3c3cd4618a969ab6bf45b750a0451"],["/live2d_api/model/Potion-Maker/Pio/textures/night-witch-costume-gray.png","9ed8ced4b7c45077ae3548c2b6866c08"],["/live2d_api/model/Potion-Maker/Pio/textures/nightsky-costume.png","11e3c9ffdab2317081f5f614bc20ebeb"],["/live2d_api/model/Potion-Maker/Pio/textures/overalls-costume-white.png","b322578543fe16d5edcb0d1cd0294127"],["/live2d_api/model/Potion-Maker/Pio/textures/overalls-costume.png","3f976a6cccd7b5d8798a6cb77327294e"],["/live2d_api/model/Potion-Maker/Pio/textures/pajamas-costume-pink.png","9bb8dd82bc906fb60ee55d1030c676a8"],["/live2d_api/model/Potion-Maker/Pio/textures/pajamas-costume.png","d67c4aa0270b88d3b36bc9856d4c08b1"],["/live2d_api/model/Potion-Maker/Pio/textures/party-dress-costume-brown.png","7bfdbc7718fd613a176e9d89dd4ed4d7"],["/live2d_api/model/Potion-Maker/Pio/textures/party-dress-costume-purple.png","b8016d14b9e24392ede728a7532eb097"],["/live2d_api/model/Potion-Maker/Pio/textures/qipao-costume-pink.png","9dbd01c19000c98bd19450aab7e166c7"],["/live2d_api/model/Potion-Maker/Pio/textures/qipao-costume-red.png","9df4355f0aa665bca31d9431706e2191"],["/live2d_api/model/Potion-Maker/Pio/textures/ribbon-dress-costume-red.png","a85c56ea23edbfb5dafae69bb5d3497b"],["/live2d_api/model/Potion-Maker/Pio/textures/ribbon-dress-costume-yellow.png","112d7b16c58ff2ad931b01e28d74f01c"],["/live2d_api/model/Potion-Maker/Pio/textures/sailor-costume-black.png","c439ae04714558637e907d873992700f"],["/live2d_api/model/Potion-Maker/Pio/textures/sailor-costume.png","aa8d1f95975de14cb0e8d7efa2cf46cd"],["/live2d_api/model/Potion-Maker/Pio/textures/sakura-costume-navy.png","3fcc8fc8478cbfb3efb5eb5337533f31"],["/live2d_api/model/Potion-Maker/Pio/textures/sakura-costume.png","ac2f96a0f875ae72880f2be18597de71"],["/live2d_api/model/Potion-Maker/Pio/textures/santa-costume-green.png","de78fd3e385f17101f759faf4f476282"],["/live2d_api/model/Potion-Maker/Pio/textures/santa-costume.png","7978fe89d1460451272b1698ecca669a"],["/live2d_api/model/Potion-Maker/Pio/textures/sarori-costume.png","70a2e22dfb1786f9275646a9d902d212"],["/live2d_api/model/Potion-Maker/Pio/textures/school-2017-costume-gray.png","f297b816e81fbea90ff8cd47dadcb891"],["/live2d_api/model/Potion-Maker/Pio/textures/school-2017-costume-yellow.png","2297d6901c36464711ce11071846266d"],["/live2d_api/model/Potion-Maker/Pio/textures/school-costume-red.png","3da14d96bf5b1a7acb9e99e456878683"],["/live2d_api/model/Potion-Maker/Pio/textures/school-costume.png","e91c01cbe27d7fff5798c61fcbaae2ba"],["/live2d_api/model/Potion-Maker/Pio/textures/sfc-uniform-costume-red.png","2d47479eace500b4faac855c267c6fea"],["/live2d_api/model/Potion-Maker/Pio/textures/sfc-uniform-costume-yellow.png","b916154dec7980c09b9e715f56917a7d"],["/live2d_api/model/Potion-Maker/Pio/textures/shaman-costume-black.png","fd514e64a96abdbcf784ca97c057160e"],["/live2d_api/model/Potion-Maker/Pio/textures/shaman-costume-blue.png","18b5544d5f0e193ffcf08b9b16820ba0"],["/live2d_api/model/Potion-Maker/Pio/textures/sinsiroad-shop-costume-junior.png","f90ec7a5f209f2771049d5563db2c294"],["/live2d_api/model/Potion-Maker/Pio/textures/sinsiroad-shop-costume-senior.png","a7c22142e222b6045531f1202c40f405"],["/live2d_api/model/Potion-Maker/Pio/textures/sorceress-costume.png","28353102ada7f0f602544fbaa235b093"],["/live2d_api/model/Potion-Maker/Pio/textures/sporty-hood-costume-black.png","1604fdcfc62e420c240dc7c931b4ab79"],["/live2d_api/model/Potion-Maker/Pio/textures/sporty-hood-costume-blue.png","d912848919fc97a147de8a41cb4ceea7"],["/live2d_api/model/Potion-Maker/Pio/textures/star-witch-costume-brown.png","3fbcaaa40b17ba4334d294c28aedce0c"],["/live2d_api/model/Potion-Maker/Pio/textures/star-witch-costume.png","7e541e43e01dbc3ff4954f10e6ce7c81"],["/live2d_api/model/Potion-Maker/Pio/textures/succubus-costume-black.png","44095a4a95e49f65bb45340566181fe8"],["/live2d_api/model/Potion-Maker/Pio/textures/succubus-costume-red.png","224ed13f035f30fb65fd730acd8ee4ab"],["/live2d_api/model/Potion-Maker/Pio/textures/sukumizu-costume-white.png","09e7b605575a63e27b033d87fef6b162"],["/live2d_api/model/Potion-Maker/Pio/textures/sukumizu-costume.png","77f6d468da4e3a64e628cb70110e4bd8"],["/live2d_api/model/Potion-Maker/Pio/textures/summer-dress-costume-blue.png","b10bc67d2406c4d03433e8e4462f47b3"],["/live2d_api/model/Potion-Maker/Pio/textures/summer-dress-costume-white.png","8856db8a67025e7d9dca0e7b09bb728b"],["/live2d_api/model/Potion-Maker/Pio/textures/swimsuit-2017-costume-navy.png","c50744c50f719aad2a5dde5731755490"],["/live2d_api/model/Potion-Maker/Pio/textures/swimsuit-2017-costume-red.png","4ecbfa8852069714f506553b93277dad"],["/live2d_api/model/Potion-Maker/Pio/textures/tirami1-costume.png","9bfbe84595123699526b59ebae1bc520"],["/live2d_api/model/Potion-Maker/Pio/textures/turtleneck-costume-red.png","a1ff824fd321e87a508e92715646ca98"],["/live2d_api/model/Potion-Maker/Pio/textures/turtleneck-costume.png","beaa0699b9df759f8068886ac910d3ef"],["/live2d_api/model/Potion-Maker/Pio/textures/valentine-costume-brown.png","5a23ef77781e2c6be787c86e1578cb0e"],["/live2d_api/model/Potion-Maker/Pio/textures/valentine-costume-pink.png","589c5e0d0af529bf2105223f5b07743e"],["/live2d_api/model/Potion-Maker/Pio/textures/winter-coat-2017-costume-brown.png","02d1f5aeef7ee086b99c555380c80d15"],["/live2d_api/model/Potion-Maker/Pio/textures/winter-coat-2017-costume-white.png","ccec8c94247016f8be502b3464280a6c"],["/live2d_api/model/Potion-Maker/Pio/textures/winter-coat-costume-pink.png","371c86036c8389d47df22f093c54d5a8"],["/live2d_api/model/Potion-Maker/Pio/textures/winter-coat-costume-white.png","75aeb4f3d0df5130651c82f5f9b0aedb"],["/live2d_api/model/Potion-Maker/Pio/textures/winter-costume-white.png","9a4050e463c9721c3e68728e07b15b17"],["/live2d_api/model/Potion-Maker/Pio/textures/winter-costume.png","7e9cfd052ff915b655eae6cf6f2e454b"],["/live2d_api/model/Potion-Maker/Pio/textures/witch-costume-white.png","be3983955fd060e290f63deb0651fe6e"],["/live2d_api/model/Potion-Maker/Pio/textures/witch-costume.png","d8f77264282e2fed946721a13661b9e5"],["/live2d_api/model/Potion-Maker/Tia/textures/bikini-costume-blue.png","b79487a90c242b94480ec3d5e9985933"],["/live2d_api/model/Potion-Maker/Tia/textures/bikini-costume-pink.png","4f34e715d949dcc339fc9c3f59dfa249"],["/live2d_api/model/Potion-Maker/Tia/textures/blackcat-costume.png","e761c2d54eea71fd82f2ca79e6fd5adb"],["/live2d_api/model/Potion-Maker/Tia/textures/blazer-costume-black.png","e4f779a217ebf885a45f669131cf8aa3"],["/live2d_api/model/Potion-Maker/Tia/textures/blazer-costume-brown.png","a137244c6a4cd2f5ec5c5b5ed53f6db8"],["/live2d_api/model/Potion-Maker/Tia/textures/blueround-costume.png","bc03575969dff087acb345f7c8c9371f"],["/live2d_api/model/Potion-Maker/Tia/textures/bunny-girl-costume-red.png","bd50cf3db5d1f4f2f37f4fb3cc1c017e"],["/live2d_api/model/Potion-Maker/Tia/textures/bunny-girl-costume.png","68d49de69b12d4e1b324aacd45513346"],["/live2d_api/model/Potion-Maker/Tia/textures/cami-dress-costume-pink.png","0b80c79db26ee878b1b1c51b6a09af23"],["/live2d_api/model/Potion-Maker/Tia/textures/cute-pajamas-costume-purple.png","1d495cef8c1252348b030bc396e3b22b"],["/live2d_api/model/Potion-Maker/Tia/textures/cute-pajamas-costume-skyblue.png","ee03a8c9c5aca29ef307e0bb9d7bb249"],["/live2d_api/model/Potion-Maker/Tia/textures/default-costume.png","68187b65d79e05a7144b8b13d2962709"],["/live2d_api/model/Potion-Maker/Tia/textures/frill-blouse-costume-green.png","9c907f04b3831476ec344a15143a4df2"],["/live2d_api/model/Potion-Maker/Tia/textures/frill-blouse-costume-red.png","d30b533600f2934c395a9469cfd4a5e0"],["/live2d_api/model/Potion-Maker/Tia/textures/halloween-costume.png","3097e5bca8e7384b383948d919feee9a"],["/live2d_api/model/Potion-Maker/Tia/textures/hanbok-costume-gorgeous.png","568602ed524f536eaa1fe945f01bba64"],["/live2d_api/model/Potion-Maker/Tia/textures/hanbok-costume.png","c810b0014f9f7574b68711969ca90a20"],["/live2d_api/model/Potion-Maker/Tia/textures/hood-costume-gray.png","27226439accb64ceeb1e619c7e378226"],["/live2d_api/model/Potion-Maker/Tia/textures/hood-costume-red.png","cc4dd3933eb27832ac01b1f8bad86bd0"],["/live2d_api/model/Potion-Maker/Tia/textures/jersey-costume-blue.png","da158e8949a46da85ad92779e93700e8"],["/live2d_api/model/Potion-Maker/Tia/textures/jersey-costume-red.png","7c8f40aab2ff7230b10bd944f3cbe04f"],["/live2d_api/model/Potion-Maker/Tia/textures/knight-costume.png","372d39422f668301eecc0bf035938ac2"],["/live2d_api/model/Potion-Maker/Tia/textures/macaron-dress-costume-green.png","ffccf8894317afee24a5e1d495484bc4"],["/live2d_api/model/Potion-Maker/Tia/textures/macaron-dress-costume-pink.png","4bb537c1f16b613173d239cf4c9fed6b"],["/live2d_api/model/Potion-Maker/Tia/textures/magical-girl-costume.png","d029dc37eb7b74f6de05975ac950647d"],["/live2d_api/model/Potion-Maker/Tia/textures/maid-costume-black.png","e525f6a23e06a588e2bebb2f0409fecf"],["/live2d_api/model/Potion-Maker/Tia/textures/maid-costume-blue.png","4f169e958c236c0a6ca042e1dfef4f4c"],["/live2d_api/model/Potion-Maker/Tia/textures/marine-costume-navy.png","6e99221f52506f1bad5bdd5cdaa7b530"],["/live2d_api/model/Potion-Maker/Tia/textures/marine-costume.png","4528a4d8d133ead99e449153eee86700"],["/live2d_api/model/Potion-Maker/Tia/textures/nordic-costume-beige.png","0b3893c7da4f8f50f58fd7998fcac3e1"],["/live2d_api/model/Potion-Maker/Tia/textures/nordic-costume-navy.png","06ab11a73494ac90058c47a876e6febd"],["/live2d_api/model/Potion-Maker/Tia/textures/nurse-costume-red.png","2ee72bef5a1b4df060920da5ffc16f04"],["/live2d_api/model/Potion-Maker/Tia/textures/nurse-costume.png","4a320bc545fe5b38fe130b925084e273"],["/live2d_api/model/Potion-Maker/Tia/textures/pajamas-costume-blue.png","9f3b5eda785949fc1863cf34d7ace552"],["/live2d_api/model/Potion-Maker/Tia/textures/pajamas-costume-green.png","68def1fa8a60bf5a69189d89e96d20ee"],["/live2d_api/model/Potion-Maker/Tia/textures/pushcat-costume.png","8c8a406dd15dd583cfa7f87d0286f8b5"],["/live2d_api/model/Potion-Maker/Tia/textures/sabori-costume.png","a0260d376ad6091c4bdd7d77947ba0df"],["/live2d_api/model/Potion-Maker/Tia/textures/sailor-bikini-costume-black.png","01e6111c9ddce2509b9de6af6167fa31"],["/live2d_api/model/Potion-Maker/Tia/textures/sailor-bikini-costume-white.png","53a486a228052d4771252a791aae526e"],["/live2d_api/model/Potion-Maker/Tia/textures/sailor-costume-black.png","fb5352f21f084ac7e72812069964b6f1"],["/live2d_api/model/Potion-Maker/Tia/textures/sailor-costume.png","c5405c59a57c74991e188e01a41035a7"],["/live2d_api/model/Potion-Maker/Tia/textures/sakura-costume-navy.png","e02df4ca49e390533b437691d951ec86"],["/live2d_api/model/Potion-Maker/Tia/textures/sakura-costume.png","1b3e18414702e8d1aeaca3485d946e1a"],["/live2d_api/model/Potion-Maker/Tia/textures/santa-costume.png","269126cde2f03e111a5d281282635b24"],["/live2d_api/model/Potion-Maker/Tia/textures/santa2016-costume.png","f13e6c081a0a0ec931da0e442dc4059a"],["/live2d_api/model/Potion-Maker/Tia/textures/sports-bikini-costume-green.png","d0038a2b6e777c3cd5ccab72d6c135ff"],["/live2d_api/model/Potion-Maker/Tia/textures/sports-bikini-costume-navy.png","b2ed0dc56e227135e7894bfea4f75fe0"],["/live2d_api/model/Potion-Maker/Tia/textures/spring-dress-costume-brown.png","a0142d1b10ea9ca752c173f8537e1e4d"],["/live2d_api/model/Potion-Maker/Tia/textures/spring-dress-costume-navy.png","5f6613ec4e9eb551b96dd7d82777d88a"],["/live2d_api/model/Potion-Maker/Tia/textures/sukumizu-costume-white.png","e35105e2e744a44ef463be8a9ffac7a6"],["/live2d_api/model/Potion-Maker/Tia/textures/sukumizu-costume.png","d3fe953f514fc04538536831e9d989ae"],["/live2d_api/model/Potion-Maker/Tia/textures/sulbim-costume-rainbow.png","e7fb83dea093f9ad1881a7fb9848effc"],["/live2d_api/model/Potion-Maker/Tia/textures/sulbim-costume-snowflake.png","4cdc8a7f486dbc1999d9f8221f89166e"],["/live2d_api/model/Potion-Maker/Tia/textures/summer-uniform-costume-blue.png","92406c1d4eca0125ee3138e17a959898"],["/live2d_api/model/Potion-Maker/Tia/textures/summer-uniform-costume-green.png","cf3fec20a5cbc4c7c7203c215e4ac758"],["/live2d_api/model/Potion-Maker/Tia/textures/thief-costume.png","789313ac57ccba1192df7f3d54ada727"],["/live2d_api/model/Potion-Maker/Tia/textures/traveler-costume-brown.png","34f03843d30bd183baa65a36154d1b32"],["/live2d_api/model/Potion-Maker/Tia/textures/traveler-costume-white.png","68ebf7762c1374e584f7db8bfc6ba448"],["/live2d_api/model/Potion-Maker/Tia/textures/vampire-costume-real.png","a4bfc6f3847911c6d3fb67d2fd1c2bd6"],["/live2d_api/model/Potion-Maker/Tia/textures/vampire-costume.png","938b88556496fdf8e74156017dbe7de1"],["/live2d_api/model/Potion-Maker/Tia/textures/warrior-costume.png","0fbb04a5a8264c926996cebf3520fb45"],["/live2d_api/model/Potion-Maker/Tia/textures/whiteday-costume-purple.png","319ad5552dc292a46c4194fb101d0961"],["/live2d_api/model/Potion-Maker/Tia/textures/whiteday-costume-red.png","d386666790ef70f9a9d8e67f0babdc2c"],["/live2d_api/model/ShizukuTalk/shizuku-48/textures.512/00.png","65f35fe8642a9a7fa36df5fdaa455e65"],["/live2d_api/model/ShizukuTalk/shizuku-48/textures.512/01.png","cd908aa9a1cd257a90c1e9d1fa537153"],["/live2d_api/model/ShizukuTalk/shizuku-48/textures.512/02.png","0a60d532b129f3b9fd0b579771cb55b4"],["/live2d_api/model/ShizukuTalk/shizuku-48/textures.512/03.png","cc8e797d1162bdca5a7d34b80ba773df"],["/live2d_api/model/ShizukuTalk/shizuku-48/textures.512/04.png","95338fe1ad033d97f4328a3f49c73a76"],["/live2d_api/model/ShizukuTalk/shizuku-48/textures.512/05.png","f940ba794b80b35cdc620d715b03d369"],["/live2d_api/model/ShizukuTalk/shizuku-48/textures.512/06.png","65f35fe8642a9a7fa36df5fdaa455e65"],["/live2d_api/model/ShizukuTalk/shizuku-48/textures.512/07.png","65f35fe8642a9a7fa36df5fdaa455e65"],["/live2d_api/model/ShizukuTalk/shizuku-pajama/textures.512/00.png","65f35fe8642a9a7fa36df5fdaa455e65"],["/live2d_api/model/ShizukuTalk/shizuku-pajama/textures.512/01.png","0a60d532b129f3b9fd0b579771cb55b4"],["/live2d_api/model/ShizukuTalk/shizuku-pajama/textures.512/02.png","23ceac1e2295b76b9376c9360c8be10c"],["/live2d_api/model/ShizukuTalk/shizuku-pajama/textures.512/03.png","95338fe1ad033d97f4328a3f49c73a76"],["/live2d_api/model/ShizukuTalk/shizuku-pajama/textures.512/04.png","1091e937e2e1745cd915da007849a49f"],["/live2d_api/model/ShizukuTalk/shizuku-pajama/textures.512/05.png","f940ba794b80b35cdc620d715b03d369"],["/live2d_api/model/ShizukuTalk/shizuku-pajama/textures.512/06.png","65f35fe8642a9a7fa36df5fdaa455e65"],["/live2d_api/model/ShizukuTalk/shizuku-pajama/textures.512/07.png","65f35fe8642a9a7fa36df5fdaa455e65"],["/live2d_api/model/ShizukuTalk/shizuku-pajama/textures.512/08.png","65f35fe8642a9a7fa36df5fdaa455e65"],["/live2d_api/model/bilibili-live/22/texture_00/closet-default-v2.png","3b25bafe060883837bc59ac3d7d13985"],["/live2d_api/model/bilibili-live/22/texture_01/cba-normal-upper.png","b65c4a7d19a71d0193b91ecb61ba9b54"],["/live2d_api/model/bilibili-live/22/texture_01/cba-super-upper.png","bfd113fdb26c4463dfbc9854f4a797a3"],["/live2d_api/model/bilibili-live/22/texture_01/default-upper.png","c2ea84dd614477162463a727cba06061"],["/live2d_api/model/bilibili-live/22/texture_01/newyear-upper.png","c5b74274e5cb2c611f1fe915879cab4a"],["/live2d_api/model/bilibili-live/22/texture_01/school2017-upper.png","4face07d63e41b82b49ba81f673a6745"],["/live2d_api/model/bilibili-live/22/texture_01/spring-2018-upper.png","111f42b5f8ece92b9df9f9db8760516a"],["/live2d_api/model/bilibili-live/22/texture_01/summer2017-high-upper.png","5e0e4f87c8d6bd5e774f3514b0adb891"],["/live2d_api/model/bilibili-live/22/texture_01/summer2017-low-upper.png","cc4899b11e4c1f22fd6354604ec461d7"],["/live2d_api/model/bilibili-live/22/texture_01/tomo-high-upper.png","35e56980eb1126746d3edb0096939a0f"],["/live2d_api/model/bilibili-live/22/texture_01/tomo-low-upper.png","855dda8cb9573c0a0b8708e3acea2b56"],["/live2d_api/model/bilibili-live/22/texture_01/valley2017-upper.png","487c55960893a9d3833cd53ffe5a9ba7"],["/live2d_api/model/bilibili-live/22/texture_01/vdays-upper.png","afc88b7aec7dc859b3b7b1772c5fd48c"],["/live2d_api/model/bilibili-live/22/texture_01/xmas-upper.png","63341fb53356574f0675f1e715012716"],["/live2d_api/model/bilibili-live/22/texture_02/cba-normal-lower.png","8d7736ebf957f305d8a2ff9692789dd2"],["/live2d_api/model/bilibili-live/22/texture_02/cba-super-lower.png","01c80a87541e299503ade422c4ad3ff0"],["/live2d_api/model/bilibili-live/22/texture_02/default-lower.png","827dcaace5dc27ddbe297902db1fd02b"],["/live2d_api/model/bilibili-live/22/texture_02/newyear-lower.png","971a86fb8a55fd85c1633bc0d2fc2e14"],["/live2d_api/model/bilibili-live/22/texture_02/school2017-lower.png","78c2f7776be314023119bec23e26c575"],["/live2d_api/model/bilibili-live/22/texture_02/spring-2018-lower.png","526a98b2f2fb32902006392a42ed8e34"],["/live2d_api/model/bilibili-live/22/texture_02/summer2017-high-lower.png","3b3be38acc8060a1e422f518d08e5175"],["/live2d_api/model/bilibili-live/22/texture_02/summer2017-low-lower.png","eaab66805c7d54a4e47c2ca9ff1bd9ec"],["/live2d_api/model/bilibili-live/22/texture_02/tomo-high-lower.png","027078b71799003008b223a585b9bc3d"],["/live2d_api/model/bilibili-live/22/texture_02/tomo-low-lower.png","5657f6c91bae74d4c493377a4aa115ce"],["/live2d_api/model/bilibili-live/22/texture_02/valley2017-lower.png","9a155d5c94b285ad2726114894d25c16"],["/live2d_api/model/bilibili-live/22/texture_02/vdays-lower.png","fc095afeeae1c1955bcefa1d0a2ea9ef"],["/live2d_api/model/bilibili-live/22/texture_02/xmas-lower.png","20494a1fea4e1515eaeb80c9a48ae80d"],["/live2d_api/model/bilibili-live/22/texture_03/cba-hat.png","bb20d37476dbaa2e1945f316ded3c52e"],["/live2d_api/model/bilibili-live/22/texture_03/default-hat.png","d6caab31b818ad9de9e3ae8d7538a47b"],["/live2d_api/model/bilibili-live/22/texture_03/newyear-hat.png","99b4c1cb8b2b1cd31996c47da8f09e49"],["/live2d_api/model/bilibili-live/22/texture_03/school2017-hat.png","3f3c13b6099ccd48e3e161e36678f51e"],["/live2d_api/model/bilibili-live/22/texture_03/spring-2018-hat.png","8d0052424548e063f74a024e0b6b954e"],["/live2d_api/model/bilibili-live/22/texture_03/summer2017-hat.png","602fa57f8304b894648bb6e69dd51a88"],["/live2d_api/model/bilibili-live/22/texture_03/tomo-high-hat.png","2ccdba9b978542501051500aff8f9420"],["/live2d_api/model/bilibili-live/22/texture_03/tomo-low-hat.png","00c01f994775626e4a4bc65b21cef57c"],["/live2d_api/model/bilibili-live/22/texture_03/valley2017-hat.png","979b2eec4d56803218df33aceff033ad"],["/live2d_api/model/bilibili-live/22/texture_03/vdays-hat.png","a6eddbe0a23ac31b9e1d33edc544a9f2"],["/live2d_api/model/bilibili-live/22/texture_03/xmas-hat.png","50565b1ee73536ecdbab36c6872841a6"],["/live2d_api/model/bilibili-live/22/texture_03/xmas-headwear.png","e51ac78ba1c7e67950300d6b94b2c3c6"],["/live2d_api/model/bilibili-live/33/texture_00/closet-default-v2.png","121525748ef0a5beffc4adcef1e8385f"],["/live2d_api/model/bilibili-live/33/texture_01/cba-normal-upper.png","cbdb60dc59b6a08c64821aaa97512742"],["/live2d_api/model/bilibili-live/33/texture_01/cba-super-upper.png","758799940c83fae9c2ae914e53524ed2"],["/live2d_api/model/bilibili-live/33/texture_01/default-upper.png","45954db1e5f5703228a389e2f341b83d"],["/live2d_api/model/bilibili-live/33/texture_01/newyear-upper.png","f15ada8a27eb4431e81c36582ad4c5eb"],["/live2d_api/model/bilibili-live/33/texture_01/school2017-upper.png","defcfa6952f742dda0e1db15a1a36f1a"],["/live2d_api/model/bilibili-live/33/texture_01/spring-2018-upper.png","2a1b2ac3471f8f62258fbf0bd369d726"],["/live2d_api/model/bilibili-live/33/texture_01/summer2017-high-upper.png","f1ffb745920c7e6647ec5f3bf5505434"],["/live2d_api/model/bilibili-live/33/texture_01/summer2017-low-upper.png","1952c6094c4a6395fcc220ff3cb5b13e"],["/live2d_api/model/bilibili-live/33/texture_01/tomo-high-upper.png","adaae15046f327ca0487b3fa7eb4a851"],["/live2d_api/model/bilibili-live/33/texture_01/tomo-low-upper.png","f7787616bb8becf875eb2287cd5b75e0"],["/live2d_api/model/bilibili-live/33/texture_01/valley2017-upper.png","1a8b5d61f235847e1819f1c18bfb50be"],["/live2d_api/model/bilibili-live/33/texture_01/vdays-upper.png","e1ff4f7a54645a73a4a68b2d8d4809c4"],["/live2d_api/model/bilibili-live/33/texture_01/xmas-upper.png","2bcf94bc9d9ce523fad40f254822fff0"],["/live2d_api/model/bilibili-live/33/texture_02/cba-normal-lower.png","13ad7bf3aa1a42a5e1dd1e2f31ea31da"],["/live2d_api/model/bilibili-live/33/texture_02/cba-super-lower.png","9e502802683d219c7affecc3e291dd92"],["/live2d_api/model/bilibili-live/33/texture_02/default-lower.png","ebad9aa8610cff82e9edbc02b8b6c6ba"],["/live2d_api/model/bilibili-live/33/texture_02/newyear-lower.png","7e33d1c03c5916193050f71341b4a7a8"],["/live2d_api/model/bilibili-live/33/texture_02/school2017-lower.png","4387272e066ab932ebbf3465aae7521c"],["/live2d_api/model/bilibili-live/33/texture_02/spring-2018-lower.png","3b9ad7e69909bea9a4a9d31787079cbc"],["/live2d_api/model/bilibili-live/33/texture_02/summer2017-high-lower.png","3f7cf4cc9d5e25f164d85c7ba58e84f6"],["/live2d_api/model/bilibili-live/33/texture_02/summer2017-low-lower.png","0352fb78c14e385aca9404819d44ca30"],["/live2d_api/model/bilibili-live/33/texture_02/tomo-high-lower.png","79b74fc078412d335029e51a60b5d52e"],["/live2d_api/model/bilibili-live/33/texture_02/tomo-low-lower.png","29f35b59f6c42324d19f0f3ab08ba050"],["/live2d_api/model/bilibili-live/33/texture_02/valley2017-lower.png","11a57782793a2932ea8c42e7affbd589"],["/live2d_api/model/bilibili-live/33/texture_02/vdays-lower.png","116183fcdd5f52e08be83f17ac36f0fb"],["/live2d_api/model/bilibili-live/33/texture_02/xmas-lower.png","6e34e2f4df0e4d038ecdf83a3b173cde"],["/live2d_api/model/bilibili-live/33/texture_03/cba-hat.png","7f42a4d361ac032cd737e695a7feba1d"],["/live2d_api/model/bilibili-live/33/texture_03/default-hat.png","ff84419bbde867efa962b8d9c2d3457c"],["/live2d_api/model/bilibili-live/33/texture_03/newyear-hat.png","4aa01901e8825803f713dcc936358a15"],["/live2d_api/model/bilibili-live/33/texture_03/school2017-hat.png","4ad14efbe80725cd817dfea8adee4e04"],["/live2d_api/model/bilibili-live/33/texture_03/spring-2018-hat.png","13c77f51a6aabe3ca2d525813d6ac3c2"],["/live2d_api/model/bilibili-live/33/texture_03/summer2017-hat.png","3b1ee34c813f7646d5c4955cc724426d"],["/live2d_api/model/bilibili-live/33/texture_03/tomo-high-hat.png","cae282aed0ee8820ce2466700537adce"],["/live2d_api/model/bilibili-live/33/texture_03/tomo-low-hat.png","8fc09a82177fb337f9cc20856e46037c"],["/live2d_api/model/bilibili-live/33/texture_03/valley2017-hat.png","97445440e605da915613e44ff7829656"],["/live2d_api/model/bilibili-live/33/texture_03/vdays-hat.png","7723d023b27259ad45e09bde6c7acb79"],["/live2d_api/model/bilibili-live/33/texture_03/xmas-hat.png","d0bbb2defaecb5d4c0ef52ab360c3265"],["/live2d_api/model/bilibili-live/33/texture_03/xmas-headwear.png","eb41b0556d6d31fe17d2032b3632c778"],["/music/index.html","309aaf281f4a26c35161c0cd86c8540a"],["/sw-register.js","390018c741d22101ebcb866f3ae3ca76"],["/tags/index.html","477c0a31a04a4d9b04d747db43d41f7d"],["/tags/k8s/index.html","5945e8c2577921ad2562ea69d5dd7130"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
