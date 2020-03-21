const fs = require('fs')

const filePath = '../data/monitor.json'

// Create a JSON file, which will serves as a simple kind of data base, to persist data in the project
fs.appendFile(filePath, '', function (err) {
  if (err) throw err
})

const monitoringData = [
  {
    "avgload": 0,
    "currentload": 16.067871725923712,
    "currentload_user": 6.845682700926202,
    "currentload_system": 8.871128373667961,
    "currentload_nice": 0,
    "currentload_idle": 83.93212827407629,
    "currentload_irq": 0.35106065132954883,
    "raw_currentload": 12907,
    "raw_currentload_user": 5499,
    "raw_currentload_system": 7126,
    "raw_currentload_nice": 0,
    "raw_currentload_idle": 67421,
    "raw_currentload_irq": 282,
    "time": 1584473629325
  },
  {
    "avgload": 0,
    "currentload": 15.483035869862844,
    "currentload_user": 6.478231648121873,
    "currentload_system": 8.518158962487243,
    "currentload_nice": 0,
    "currentload_idle": 84.51696413013717,
    "currentload_irq": 0.48664525925372765,
    "raw_currentload": 12440,
    "raw_currentload_user": 5205,
    "raw_currentload_system": 6844,
    "raw_currentload_nice": 0,
    "raw_currentload_idle": 67906,
    "raw_currentload_irq": 391,
    "time": 1584473639325
  },
  {
    "avgload": 0,
    "currentload": 14.806762984955963,
    "currentload_user": 5.762947687491459,
    "currentload_system": 8.522056722610781,
    "currentload_nice": 0,
    "currentload_idle": 85.19323701504405,
    "currentload_irq": 0.5217585748537212,
    "raw_currentload": 11919,
    "raw_currentload_user": 4639,
    "raw_currentload_system": 6860,
    "raw_currentload_nice": 0,
    "raw_currentload_idle": 68578,
    "raw_currentload_irq": 420,
    "time": 1584473649327
  },
  {
    "avgload": 0,
    "currentload": 13.463810104074705,
    "currentload_user": 4.621812168160849,
    "currentload_system": 8.316028996680053,
    "currentload_nice": 0,
    "currentload_idle": 86.5361898959253,
    "currentload_irq": 0.5259689392338013,
    "raw_currentload": 10828,
    "raw_currentload_user": 3717,
    "raw_currentload_system": 6688,
    "raw_currentload_nice": 0,
    "raw_currentload_idle": 69595,
    "raw_currentload_irq": 423,
    "time": 1584473659328
  },
  {
    "avgload": 0,
    "currentload": 15.179214585558508,
    "currentload_user": 5.61116768921235,
    "currentload_system": 8.927196403288704,
    "currentload_nice": 0,
    "currentload_idle": 84.82078541444149,
    "currentload_irq": 0.640850493057453,
    "raw_currentload": 12222,
    "raw_currentload_user": 4518,
    "raw_currentload_system": 7188,
    "raw_currentload_nice": 0,
    "raw_currentload_idle": 68296,
    "raw_currentload_irq": 516,
    "time": 1584473669328
  },
  {
    "avgload": 0,
    "currentload": 13.799581943960584,
    "currentload_user": 5.286666998457174,
    "currentload_system": 8.046334544368685,
    "currentload_nice": 0,
    "currentload_idle": 86.20041805603942,
    "currentload_irq": 0.46658040113472354,
    "raw_currentload": 11091,
    "raw_currentload_user": 4249,
    "raw_currentload_system": 6467,
    "raw_currentload_nice": 0,
    "raw_currentload_idle": 69281,
    "raw_currentload_irq": 375,
    "time": 1584473679329
  },
  {
    "avgload": 0,
    "currentload": 16.085350841198196,
    "currentload_user": 6.275724002437174,
    "currentload_system": 9.284888275450442,
    "currentload_nice": 0,
    "currentload_idle": 83.91464915880181,
    "currentload_irq": 0.5247385633105781,
    "raw_currentload": 12936,
    "raw_currentload_user": 5047,
    "raw_currentload_system": 7467,
    "raw_currentload_nice": 0,
    "raw_currentload_idle": 67485,
    "raw_currentload_irq": 422,
    "time": 1584473689330
  },
  {
    "avgload": 0,
    "currentload": 15.454353260126103,
    "currentload_user": 5.968088943055054,
    "currentload_system": 8.980114660929475,
    "currentload_nice": 0,
    "currentload_idle": 84.5456467398739,
    "currentload_irq": 0.5061496561415727,
    "raw_currentload": 12427,
    "raw_currentload_user": 4799,
    "raw_currentload_system": 7221,
    "raw_currentload_nice": 0,
    "raw_currentload_idle": 67984,
    "raw_currentload_irq": 407,
    "time": 1584473699330
  },
  {
    "avgload": 0,
    "currentload": 21.333697799535305,
    "currentload_user": 8.502416659418758,
    "currentload_system": 12.229911906862318,
    "currentload_nice": 0,
    "currentload_idle": 78.6663022004647,
    "currentload_irq": 0.6013692332542276,
    "raw_currentload": 17170,
    "raw_currentload_user": 6843,
    "raw_currentload_system": 9843,
    "raw_currentload_nice": 0,
    "raw_currentload_idle": 63313,
    "raw_currentload_irq": 484,
    "time": 1584473709331
  },
  {
    "avgload": 0,
    "currentload": 19.87107693073496,
    "currentload_user": 8.885238557455386,
    "currentload_system": 10.53908758306578,
    "currentload_nice": 0,
    "currentload_idle": 80.12892306926503,
    "currentload_irq": 0.44675079021379327,
    "raw_currentload": 15968,
    "raw_currentload_user": 7140,
    "raw_currentload_system": 8469,
    "raw_currentload_nice": 0,
    "raw_currentload_idle": 64390,
    "raw_currentload_irq": 359,
    "time": 1584473719331
  },
  {
    "avgload": 0,
    "currentload": 20.837635117485355,
    "currentload_user": 8.551739579316607,
    "currentload_system": 11.799534785366886,
    "currentload_nice": 0,
    "currentload_idle": 79.16236488251465,
    "currentload_irq": 0.48636075280186086,
    "raw_currentload": 16752,
    "raw_currentload_user": 6875,
    "raw_currentload_system": 9486,
    "raw_currentload_nice": 0,
    "raw_currentload_idle": 63641,
    "raw_currentload_irq": 391,
    "time": 1584473729332
  },
  {
    "avgload": 0,
    "currentload": 25.66107637032709,
    "currentload_user": 11.208772082499348,
    "currentload_system": 13.907778758531522,
    "currentload_nice": 0,
    "currentload_idle": 74.33892362967292,
    "currentload_irq": 0.5445255292962194,
    "raw_currentload": 20641,
    "raw_currentload_user": 9016,
    "raw_currentload_system": 11187,
    "raw_currentload_nice": 0,
    "raw_currentload_idle": 59796,
    "raw_currentload_irq": 438,
    "time": 1584473739331
  },
  {
    "avgload": 0,
    "currentload": 17.554589504365914,
    "currentload_user": 7.102552285098591,
    "currentload_system": 10.102016666459063,
    "currentload_nice": 0,
    "currentload_idle": 82.44541049563409,
    "currentload_irq": 0.350020552808261,
    "raw_currentload": 14093,
    "raw_currentload_user": 5702,
    "raw_currentload_system": 8110,
    "raw_currentload_nice": 0,
    "raw_currentload_idle": 66188,
    "raw_currentload_irq": 281,
    "time": 1584473749332
  },
  {
    "avgload": 0,
    "currentload": 16.032243618450515,
    "currentload_user": 5.6165099268547545,
    "currentload_system": 9.929342687963377,
    "currentload_nice": 0,
    "currentload_idle": 83.96775638154949,
    "currentload_irq": 0.4863910036323829,
    "raw_currentload": 12888,
    "raw_currentload_user": 4515,
    "raw_currentload_system": 7982,
    "raw_currentload_nice": 0,
    "raw_currentload_idle": 67500,
    "raw_currentload_irq": 391,
    "time": 1584473759332
  },
  {
    "avgload": 0,
    "currentload": 15.164785946228399,
    "currentload_user": 5.193027856227528,
    "currentload_system": 9.506450850367642,
    "currentload_nice": 0,
    "currentload_idle": 84.83521405377161,
    "currentload_irq": 0.4653072396332284,
    "raw_currentload": 12189,
    "raw_currentload_user": 4174,
    "raw_currentload_system": 7641,
    "raw_currentload_nice": 0,
    "raw_currentload_idle": 68188,
    "raw_currentload_irq": 374,
    "time": 1584473769332
  },
  {
    "avgload": 0,
    "currentload": 14.526880252231228,
    "currentload_user": 5.059520115192215,
    "currentload_system": 8.768510817889549,
    "currentload_nice": 0,
    "currentload_idle": 85.47311974776876,
    "currentload_irq": 0.6988493191494644,
    "raw_currentload": 11703,
    "raw_currentload_user": 4076,
    "raw_currentload_system": 7064,
    "raw_currentload_nice": 0,
    "raw_currentload_idle": 68858,
    "raw_currentload_irq": 563,
    "time": 1584473779332
  },
  {
    "avgload": 0,
    "currentload": 19.44399507211389,
    "currentload_user": 5.521472392638037,
    "currentload_system": 13.47453303301435,
    "currentload_nice": 0,
    "currentload_idle": 80.55600492788612,
    "currentload_irq": 0.44798964646150397,
    "raw_currentload": 15625,
    "raw_currentload_user": 4437,
    "raw_currentload_system": 10828,
    "raw_currentload_nice": 0,
    "raw_currentload_idle": 64734,
    "raw_currentload_irq": 360,
    "time": 1584473789333
  },
  {
    "avgload": 0,
    "currentload": 15.640483007593675,
    "currentload_user": 5.73882733723391,
    "currentload_system": 9.492095107680816,
    "currentload_nice": 0,
    "currentload_idle": 84.35951699240633,
    "currentload_irq": 0.4095605626789493,
    "raw_currentload": 12564,
    "raw_currentload_user": 4610,
    "raw_currentload_system": 7625,
    "raw_currentload_nice": 0,
    "raw_currentload_idle": 67766,
    "raw_currentload_irq": 329,
    "time": 1584473799334
  },
  {
    "avgload": 0,
    "currentload": 15.681962202258918,
    "currentload_user": 5.378909307786931,
    "currentload_system": 9.704153775425256,
    "currentload_nice": 0,
    "currentload_idle": 84.31803779774108,
    "currentload_irq": 0.5988991190467315,
    "raw_currentload": 12621,
    "raw_currentload_user": 4329,
    "raw_currentload_system": 7810,
    "raw_currentload_nice": 0,
    "raw_currentload_idle": 67860,
    "raw_currentload_irq": 482,
    "time": 1584473809334
  },
  {
    "avgload": 0,
    "currentload": 17.367445217326384,
    "currentload_user": 7.11521471323868,
    "currentload_system": 9.803018802185086,
    "currentload_nice": 0,
    "currentload_idle": 82.63255478267362,
    "currentload_irq": 0.4492117019026169,
    "raw_currentload": 13957,
    "raw_currentload_user": 5718,
    "raw_currentload_system": 7878,
    "raw_currentload_nice": 0,
    "raw_currentload_idle": 66406,
    "raw_currentload_irq": 361,
    "time": 1584473819335
  },
  {
    "avgload": 0,
    "currentload": 15.699985096129963,
    "currentload_user": 5.6088230910626455,
    "currentload_system": 9.450295593422425,
    "currentload_nice": 0,
    "currentload_idle": 84.30001490387004,
    "currentload_irq": 0.6408664116448904,
    "raw_currentload": 12641,
    "raw_currentload_user": 4516,
    "raw_currentload_system": 7609,
    "raw_currentload_nice": 0,
    "raw_currentload_idle": 67875,
    "raw_currentload_irq": 516,
    "time": 1584473829335
  },
  {
    "avgload": 0,
    "currentload": 16.171116881825974,
    "currentload_user": 6.6013940832225435,
    "currentload_system": 8.968353565349204,
    "currentload_nice": 0,
    "currentload_idle": 83.82888311817402,
    "currentload_irq": 0.6013692332542276,
    "raw_currentload": 13015,
    "raw_currentload_user": 5313,
    "raw_currentload_system": 7218,
    "raw_currentload_nice": 0,
    "raw_currentload_idle": 67468,
    "raw_currentload_irq": 484,
    "time": 1584473839336
  },
  {
    "avgload": 0,
    "currentload": 20.201592832254853,
    "currentload_user": 9.488551518168242,
    "currentload_system": 10.266301642608262,
    "currentload_nice": 0,
    "currentload_idle": 79.79840716774514,
    "currentload_irq": 0.44673967147834737,
    "raw_currentload": 16234,
    "raw_currentload_user": 7625,
    "raw_currentload_system": 8250,
    "raw_currentload_nice": 0,
    "raw_currentload_idle": 64126,
    "raw_currentload_irq": 359,
    "time": 1584473849336
  },
  {
    "avgload": 0,
    "currentload": 17.68447995228806,
    "currentload_user": 6.989053588956675,
    "currentload_system": 10.094057130077159,
    "currentload_nice": 0,
    "currentload_idle": 82.31552004771194,
    "currentload_irq": 0.6013692332542276,
    "raw_currentload": 14233,
    "raw_currentload_user": 5625,
    "raw_currentload_system": 8124,
    "raw_currentload_nice": 0,
    "raw_currentload_idle": 66250,
    "raw_currentload_irq": 484,
    "time": 1584473859337
  },
  {
    "avgload": 0,
    "currentload": 27.161231681047898,
    "currentload_user": 15.448308493021054,
    "currentload_system": 11.324443116307448,
    "currentload_nice": 0,
    "currentload_idle": 72.83876831895209,
    "currentload_irq": 0.38848007171939786,
    "raw_currentload": 21814,
    "raw_currentload_user": 12407,
    "raw_currentload_system": 9095,
    "raw_currentload_nice": 0,
    "raw_currentload_idle": 58499,
    "raw_currentload_irq": 312,
    "time": 1584473869337
  },
  {
    "avgload": 0,
    "currentload": 21.585530974000967,
    "currentload_user": 10.907668037216006,
    "currentload_system": 10.055525881023067,
    "currentload_nice": 0,
    "currentload_idle": 78.41446902599904,
    "currentload_irq": 0.622337055761897,
    "raw_currentload": 17377,
    "raw_currentload_user": 8781,
    "raw_currentload_system": 8095,
    "raw_currentload_nice": 0,
    "raw_currentload_idle": 63126,
    "raw_currentload_irq": 501,
    "time": 1584473879337
  },
  {
    "avgload": 0,
    "currentload": 20.777866083846614,
    "currentload_user": 10.612457778660838,
    "currentload_system": 9.506010331810053,
    "currentload_nice": 0,
    "currentload_idle": 79.2221339161534,
    "currentload_irq": 0.6593979733757203,
    "raw_currentload": 16732,
    "raw_currentload_user": 8546,
    "raw_currentload_system": 7655,
    "raw_currentload_nice": 0,
    "raw_currentload_idle": 63796,
    "raw_currentload_irq": 531,
    "time": 1584473889337
  },
  {
    "avgload": 0,
    "currentload": 22.51045088085996,
    "currentload_user": 11.431273016820942,
    "currentload_system": 10.612620682790883,
    "currentload_nice": 0,
    "currentload_idle": 77.48954911914005,
    "currentload_irq": 0.4665571812481338,
    "raw_currentload": 18093,
    "raw_currentload_user": 9188,
    "raw_currentload_system": 8530,
    "raw_currentload_nice": 0,
    "raw_currentload_idle": 62283,
    "raw_currentload_irq": 375,
    "time": 1584473899337
  },
  {
    "avgload": 0,
    "currentload": 16.979585754731037,
    "currentload_user": 6.868077286047783,
    "currentload_system": 9.450901504991805,
    "currentload_nice": 0,
    "currentload_idle": 83.02041424526895,
    "currentload_irq": 0.6606069636914519,
    "raw_currentload": 13674,
    "raw_currentload_user": 5531,
    "raw_currentload_system": 7611,
    "raw_currentload_nice": 0,
    "raw_currentload_idle": 66858,
    "raw_currentload_irq": 532,
    "time": 1584473909338
  },
  {
    "avgload": 0,
    "currentload": 17.814071912066073,
    "currentload_user": 8.01465565422592,
    "currentload_system": 9.161025895795815,
    "currentload_nice": 0,
    "currentload_idle": 82.18592808793392,
    "currentload_irq": 0.6383903620443395,
    "raw_currentload": 14343,
    "raw_currentload_user": 6453,
    "raw_currentload_system": 7376,
    "raw_currentload_nice": 0,
    "raw_currentload_idle": 66172,
    "raw_currentload_irq": 514,
    "time": 1584473919339
  },
  {
    "avgload": 0,
    "currentload": 16.060172810343758,
    "currentload_user": 6.993224342636911,
    "currentload_system": 8.524895878659787,
    "currentload_nice": 0,
    "currentload_idle": 83.93982718965624,
    "currentload_irq": 0.5420525890470566,
    "raw_currentload": 12918,
    "raw_currentload_user": 5625,
    "raw_currentload_system": 6857,
    "raw_currentload_nice": 0,
    "raw_currentload_idle": 67517,
    "raw_currentload_irq": 436,
    "time": 1584473929339
  },
  {
    "avgload": 0,
    "currentload": 17.65589502302889,
    "currentload_user": 7.004258171841442,
    "currentload_system": 9.970081066653425,
    "currentload_nice": 0,
    "currentload_idle": 82.34410497697111,
    "currentload_irq": 0.681555784534022,
    "raw_currentload": 14222,
    "raw_currentload_user": 5642,
    "raw_currentload_system": 8031,
    "raw_currentload_nice": 0,
    "raw_currentload_idle": 66329,
    "raw_currentload_irq": 549,
    "time": 1584473939339
  },
  {
    "avgload": 0,
    "currentload": 14.889541247885363,
    "currentload_user": 5.656035426410588,
    "currentload_system": 8.747139018807841,
    "currentload_nice": 0,
    "currentload_idle": 85.11045875211464,
    "currentload_irq": 0.486366802666932,
    "raw_currentload": 11970,
    "raw_currentload_user": 4547,
    "raw_currentload_system": 7032,
    "raw_currentload_nice": 0,
    "raw_currentload_idle": 68422,
    "raw_currentload_irq": 391,
    "time": 1584473949340
  },
  {
    "avgload": 0,
    "currentload": 20.856099741704746,
    "currentload_user": 9.642608782038547,
    "currentload_system": 10.55533479038347,
    "currentload_nice": 0,
    "currentload_idle": 79.14390025829525,
    "currentload_irq": 0.6581561692827339,
    "raw_currentload": 16795,
    "raw_currentload_user": 7765,
    "raw_currentload_system": 8500,
    "raw_currentload_nice": 0,
    "raw_currentload_idle": 63733,
    "raw_currentload_irq": 530,
    "time": 1584473959339
  },
  {
    "avgload": 0,
    "currentload": 17.35948004821733,
    "currentload_user": 6.971628826007531,
    "currentload_system": 9.805018081497224,
    "currentload_nice": 0,
    "currentload_idle": 82.64051995178268,
    "currentload_irq": 0.5828331407125725,
    "raw_currentload": 13969,
    "raw_currentload_user": 5610,
    "raw_currentload_system": 7890,
    "raw_currentload_nice": 0,
    "raw_currentload_idle": 66500,
    "raw_currentload_irq": 469,
    "time": 1584473969339
  },
  {
    "avgload": 0,
    "currentload": 21.272336139469527,
    "currentload_user": 9.88696701028364,
    "currentload_system": 10.861861002996804,
    "currentload_nice": 0,
    "currentload_idle": 78.72766386053047,
    "currentload_irq": 0.5235081261890847,
    "raw_currentload": 17107,
    "raw_currentload_user": 7951,
    "raw_currentload_system": 8735,
    "raw_currentload_nice": 0,
    "raw_currentload_idle": 63312,
    "raw_currentload_irq": 421,
    "time": 1584473979339
  },
  {
    "avgload": 0,
    "currentload": 17.489325150319313,
    "currentload_user": 8.092967670455254,
    "currentload_system": 8.988036699075055,
    "currentload_nice": 0,
    "currentload_idle": 82.51067484968068,
    "currentload_irq": 0.4083207807890052,
    "raw_currentload": 14049,
    "raw_currentload_user": 6501,
    "raw_currentload_system": 7220,
    "raw_currentload_nice": 0,
    "raw_currentload_idle": 66280,
    "raw_currentload_irq": 328,
    "time": 1584473989338
  },
  {
    "avgload": 0,
    "currentload": 16.00512801364151,
    "currentload_user": 6.70998095664837,
    "currentload_system": 8.865738147691772,
    "currentload_nice": 0,
    "currentload_idle": 83.99487198635849,
    "currentload_irq": 0.4294089093013704,
    "raw_currentload": 12859,
    "raw_currentload_user": 5391,
    "raw_currentload_system": 7123,
    "raw_currentload_nice": 0,
    "raw_currentload_idle": 67484,
    "raw_currentload_irq": 345,
    "time": 1584473999339
  },
  {
    "avgload": 0,
    "currentload": 15.697667215897123,
    "currentload_user": 5.6120615964023335,
    "currentload_system": 9.329897545807059,
    "currentload_nice": 0,
    "currentload_idle": 84.30233278410287,
    "currentload_irq": 0.7557080736877315,
    "raw_currentload": 12671,
    "raw_currentload_user": 4530,
    "raw_currentload_system": 7531,
    "raw_currentload_nice": 0,
    "raw_currentload_idle": 68048,
    "raw_currentload_irq": 610,
    "time": 1584474009340
  },
  {
    "avgload": 0,
    "currentload": 15.669051321928459,
    "currentload_user": 6.006842923794712,
    "currentload_system": 9.214307931570762,
    "currentload_nice": 0,
    "currentload_idle": 84.33094867807154,
    "currentload_irq": 0.44790046656298604,
    "raw_currentload": 12594,
    "raw_currentload_user": 4828,
    "raw_currentload_system": 7406,
    "raw_currentload_nice": 0,
    "raw_currentload_idle": 67781,
    "raw_currentload_irq": 360,
    "time": 1584474019341
  },
  {
    "avgload": 0,
    "currentload": 15.475820197320129,
    "currentload_user": 5.716809535066002,
    "currentload_system": 9.177998681214776,
    "currentload_nice": 0,
    "currentload_idle": 84.52417980267987,
    "currentload_irq": 0.581011981039352,
    "raw_currentload": 12439,
    "raw_currentload_user": 4595,
    "raw_currentload_system": 7377,
    "raw_currentload_nice": 0,
    "raw_currentload_idle": 67938,
    "raw_currentload_irq": 467,
    "time": 1584474029340
  },
  {
    "avgload": 0,
    "currentload": 17.673453153354714,
    "currentload_user": 7.828075670569517,
    "currentload_system": 9.359385487359237,
    "currentload_nice": 0,
    "currentload_idle": 82.32654684664529,
    "currentload_irq": 0.48599199542595767,
    "raw_currentload": 14219,
    "raw_currentload_user": 6298,
    "raw_currentload_system": 7530,
    "raw_currentload_nice": 0,
    "raw_currentload_idle": 66235,
    "raw_currentload_irq": 391,
    "time": 1584474039340
  },
  {
    "avgload": 0,
    "currentload": 28.019161795549596,
    "currentload_user": 15.820891817764373,
    "currentload_system": 11.461086910656887,
    "currentload_nice": 0,
    "currentload_idle": 71.98083820445041,
    "currentload_irq": 0.7371830671283368,
    "raw_currentload": 22577,
    "raw_currentload_user": 12748,
    "raw_currentload_system": 9235,
    "raw_currentload_nice": 0,
    "raw_currentload_idle": 58000,
    "raw_currentload_irq": 594,
    "time": 1584474049340
  },
  {
    "avgload": 0,
    "currentload": 17.39719388072129,
    "currentload_user": 7.0103272148831195,
    "currentload_system": 9.765493929188363,
    "currentload_nice": 0,
    "currentload_idle": 82.60280611927871,
    "currentload_irq": 0.6213727366498067,
    "raw_currentload": 13999,
    "raw_currentload_user": 5641,
    "raw_currentload_system": 7858,
    "raw_currentload_nice": 0,
    "raw_currentload_idle": 66468,
    "raw_currentload_irq": 500,
    "time": 1584474059340
  },
  {
    "avgload": 0,
    "currentload": 24.89080795888655,
    "currentload_user": 14.234162487712007,
    "currentload_system": 10.268407102771175,
    "currentload_nice": 0,
    "currentload_idle": 75.10919204111345,
    "currentload_irq": 0.38823836840336967,
    "raw_currentload": 20003,
    "raw_currentload_user": 11439,
    "raw_currentload_system": 8252,
    "raw_currentload_nice": 0,
    "raw_currentload_idle": 60360,
    "raw_currentload_irq": 312,
    "time": 1584474069340
  },
  {
    "avgload": 0,
    "currentload": 32.30213587396476,
    "currentload_user": 9.943333956037113,
    "currentload_system": 22.026278099508065,
    "currentload_nice": 0,
    "currentload_idle": 67.69786412603524,
    "currentload_irq": 0.3325238184195778,
    "raw_currentload": 25937,
    "raw_currentload_user": 7984,
    "raw_currentload_system": 17686,
    "raw_currentload_nice": 0,
    "raw_currentload_idle": 54358,
    "raw_currentload_irq": 267,
    "time": 1584474079340
  },
  {
    "avgload": 0,
    "currentload": 34.62608695652174,
    "currentload_user": 14.906832298136646,
    "currentload_system": 19.099378881987576,
    "currentload_nice": 0,
    "currentload_idle": 65.37391304347825,
    "currentload_irq": 0.6198757763975155,
    "raw_currentload": 27874,
    "raw_currentload_user": 12000,
    "raw_currentload_system": 15375,
    "raw_currentload_nice": 0,
    "raw_currentload_idle": 52626,
    "raw_currentload_irq": 499,
    "time": 1584474089341
  },
  {
    "avgload": 0,
    "currentload": 22.409315157013086,
    "currentload_user": 9.223198419306335,
    "currentload_system": 12.602055398839335,
    "currentload_nice": 0,
    "currentload_idle": 77.59068484298692,
    "currentload_irq": 0.5840613388674181,
    "raw_currentload": 18033,
    "raw_currentload_user": 7422,
    "raw_currentload_system": 10141,
    "raw_currentload_nice": 0,
    "raw_currentload_idle": 62438,
    "raw_currentload_irq": 470,
    "time": 1584474099342
  },
  {
    "avgload": 0,
    "currentload": 19.411903843041568,
    "currentload_user": 8.49901029541748,
    "currentload_system": 10.446051763417033,
    "currentload_nice": 0,
    "currentload_idle": 80.58809615695843,
    "currentload_irq": 0.4668417842070537,
    "raw_currentload": 15593,
    "raw_currentload_user": 6827,
    "raw_currentload_system": 8391,
    "raw_currentload_nice": 0,
    "raw_currentload_idle": 64734,
    "raw_currentload_irq": 375,
    "time": 1584474109342
  },
  {
    "avgload": 0,
    "currentload": 19.01934971062371,
    "currentload_user": 8.521076032688343,
    "currentload_system": 9.91579522591222,
    "currentload_nice": 0,
    "currentload_idle": 80.98065028937629,
    "currentload_irq": 0.5824784520231501,
    "raw_currentload": 15314,
    "raw_currentload_user": 6861,
    "raw_currentload_system": 7984,
    "raw_currentload_nice": 0,
    "raw_currentload_idle": 65204,
    "raw_currentload_irq": 469,
    "time": 1584474119342
  },
  {
    "avgload": 0,
    "currentload": 21.21317631844013,
    "currentload_user": 9.869803648482286,
    "currentload_system": 10.743996916074959,
    "currentload_nice": 0,
    "currentload_idle": 78.78682368155987,
    "currentload_irq": 0.5993757538828854,
    "raw_currentload": 17059,
    "raw_currentload_user": 7937,
    "raw_currentload_system": 8640,
    "raw_currentload_nice": 0,
    "raw_currentload_idle": 63358,
    "raw_currentload_irq": 482,
    "time": 1584474129342
  },
  {
    "avgload": 0,
    "currentload": 23.24255308599125,
    "currentload_user": 11.600203294864325,
    "currentload_system": 10.886192064062675,
    "currentload_nice": 0,
    "currentload_idle": 76.75744691400875,
    "currentload_irq": 0.7561577270642486,
    "raw_currentload": 18750,
    "raw_currentload_user": 9358,
    "raw_currentload_system": 8782,
    "raw_currentload_nice": 0,
    "raw_currentload_idle": 61921,
    "raw_currentload_irq": 610,
    "time": 1584474139342
  },
  {
    "avgload": 0,
    "currentload": 18.501200084565543,
    "currentload_user": 8.103368942060166,
    "currentload_system": 9.890437875415055,
    "currentload_nice": 0,
    "currentload_idle": 81.49879991543445,
    "currentload_irq": 0.5073932670903235,
    "raw_currentload": 14877,
    "raw_currentload_user": 6516,
    "raw_currentload_system": 7953,
    "raw_currentload_nice": 0,
    "raw_currentload_idle": 65534,
    "raw_currentload_irq": 408,
    "time": 1584474149342
  },
  {
    "avgload": 0,
    "currentload": 23.31578555287924,
    "currentload_user": 10.882520920761838,
    "currentload_system": 11.756599041493878,
    "currentload_nice": 0,
    "currentload_idle": 76.68421444712075,
    "currentload_irq": 0.6766655906235256,
    "raw_currentload": 18779,
    "raw_currentload_user": 8765,
    "raw_currentload_system": 9469,
    "raw_currentload_nice": 0,
    "raw_currentload_idle": 61763,
    "raw_currentload_irq": 545,
    "time": 1584474159343
  },
  {
    "avgload": 0,
    "currentload": 27.48120067118265,
    "currentload_user": 15.207258716052452,
    "currentload_system": 11.712137219563731,
    "currentload_nice": 0,
    "currentload_idle": 72.51879932881735,
    "currentload_irq": 0.5618047355664657,
    "raw_currentload": 22110,
    "raw_currentload_user": 12235,
    "raw_currentload_system": 9423,
    "raw_currentload_nice": 0,
    "raw_currentload_idle": 58345,
    "raw_currentload_irq": 452,
    "time": 1584474169342
  },
  {
    "avgload": 0,
    "currentload": 22.36552453205646,
    "currentload_user": 11.093837447919906,
    "currentload_system": 10.764255954231702,
    "currentload_nice": 0,
    "currentload_idle": 77.63447546794353,
    "currentload_irq": 0.5074311299048567,
    "raw_currentload": 17983,
    "raw_currentload_user": 8920,
    "raw_currentload_system": 8655,
    "raw_currentload_nice": 0,
    "raw_currentload_idle": 62422,
    "raw_currentload_irq": 408,
    "time": 1584474179342
  },
  {
    "avgload": 0,
    "currentload": 22.89165601062707,
    "currentload_user": 11.272641497721883,
    "currentload_system": 10.862952985139481,
    "currentload_nice": 0,
    "currentload_idle": 77.10834398937293,
    "currentload_irq": 0.7560615277657079,
    "raw_currentload": 18439,
    "raw_currentload_user": 9080,
    "raw_currentload_system": 8750,
    "raw_currentload_nice": 0,
    "raw_currentload_idle": 62110,
    "raw_currentload_irq": 609,
    "time": 1584474189343
  },
  {
    "avgload": 0,
    "currentload": 23.658769654624653,
    "currentload_user": 11.692872832872087,
    "currentload_system": 11.325531466014718,
    "currentload_nice": 0,
    "currentload_idle": 76.34123034537535,
    "currentload_irq": 0.6403653557378474,
    "raw_currentload": 19064,
    "raw_currentload_user": 9422,
    "raw_currentload_system": 9126,
    "raw_currentload_nice": 0,
    "raw_currentload_idle": 61515,
    "raw_currentload_irq": 516,
    "time": 1584474199343
  },
  {
    "avgload": 0,
    "currentload": 18.20558467265054,
    "currentload_user": 8.344641278773016,
    "currentload_system": 9.432693863831588,
    "currentload_nice": 0,
    "currentload_idle": 81.79441532734945,
    "currentload_irq": 0.42824953004593724,
    "raw_currentload": 14624,
    "raw_currentload_user": 6703,
    "raw_currentload_system": 7577,
    "raw_currentload_nice": 0,
    "raw_currentload_idle": 65703,
    "raw_currentload_irq": 344,
    "time": 1584474209342
  },
  {
    "avgload": 0,
    "currentload": 21.146748518099688,
    "currentload_user": 9.68920480670055,
    "currentload_system": 10.893365311727205,
    "currentload_nice": 0,
    "currentload_idle": 78.85325148190032,
    "currentload_irq": 0.5641783996719315,
    "raw_currentload": 17017,
    "raw_currentload_user": 7797,
    "raw_currentload_system": 8766,
    "raw_currentload_nice": 0,
    "raw_currentload_idle": 63454,
    "raw_currentload_irq": 454,
    "time": 1584474219343
  }
]

const monitoringResult = {
  exceed:[],
  recovery:[]
}

let exceedTimeInfo = {}
let recoveryTimeInfo = {}

// (10%), the real value should be 100%
const exceedMax = 15 // (10%)
let counterExceed = 0
let counterRecovery = 0
// if we load every 10,000 miliseconds once a CPU load, in order to monitor 2 minitues
// continuous exceeding state, we need to increment the counterExceed to 12.
const totalTimes = 12

monitoringData.forEach((data)=>{
  if(data.currentload > exceedMax){
    counterExceed ++
    if(counterExceed === totalTimes){
      // TBD
      // notify user that CPU load has exceeded
      exceedTimeInfo.endTime = data.time.toString()
      monitoringResult.exceed.push(exceedTimeInfo)
      // write JSON File
      const jsonStringData = JSON.stringify(monitoringResult, null, 2)
      fs.writeFile(filePath, jsonStringData, function (err) {
          if (err) throw err
      })
      console.log("it ended exceed from for the " + monitoringResult.exceed.length + " times, end at date: "+ data.time.toString());
      exceedTimeInfo = {}
    }else if(counterExceed === 1){
      exceedTimeInfo.startTime = data.time.toString()
      console.log("it started exceed from for the " + (monitoringResult.exceed.length+1) + " times, begins at date: "+ data.time.toString());
    }
  }else{
    if(counterExceed >= totalTimes)
    {
      // this means that we have notify user of high CPU load, once it get below than exceedMax,
      // we need to start monitor if it get recovered from exceeding state
      counterRecovery = 1
      recoveryTimeInfo.startTime = data.time.toString()
      console.log("it started recovery from for the " + (monitoringResult.recovery.length+1) + " times, begins at date: "+ data.time.toString());
    }
    else if(counterExceed === 0)
    {
      counterRecovery ++
    }
  
    if(counterRecovery === totalTimes)
    {
      // when CPU load get recover from exceed state for two minutes or longer
      // TBD
      // notify user that CPU load has been recovered
      recoveryTimeInfo.endTime = data.time.toString()
      monitoringResult.recovery.push(recoveryTimeInfo)
      // write JSON File
      const jsonStringData = JSON.stringify(monitoringResult, null, 2)
      fs.writeFile(filePath, jsonStringData, function (err) {
          if (err) throw err
      })
      console.log("it ended recovery from for the " + monitoringResult.recovery.length + " times, ends at date: "+ data.time.toString());
      recoveryTimeInfo = {}
    }
    counterExceed = 0
  }
})

console.log(monitoringResult)

