var audioSprite,
  currentSprite,
  onTimeUpdate,
  playSprite,
  currentTime,
  dateNum,
  todayDate,
  yesterdayDate,
  calendarMoYe,
  dayClicked,
  dayID,
  firstDate,
  firstUseDay,
  today,
  firstUseTime,
  currentDate,
  todayNum,
  firstNum,
  userEmail,
  tuvm58dj,
  fieldToUpdate,
  infoToUpdate,
  goldNum,
  silverNum,
  bronzeNum,
  goalCount1,
  goalCount2,
  goalCount3,
  goalCount4,
  goalCount5,
  goalCount6,
  storeInfo,
  currentSection = 'Goals',
  currentSecShort = 'goals',
  currentProgram = 'Complete',
  lessonTitle = 'Progress & Achievements',
  soundType = soundType,
  moreToday = !1,
  allMonths = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
  oneDay = 864e5,
  wtZGh = '/php/',
  ETTNv = 'www.',
  cWbBT = '.php',
  KsXgx = 'update',
  rvUnf = 'eliseunogueira',
  YLtLU = 'https://',
  OGXpV = '.com.br',
  goalArray = [];
function startLesson() {
  if (localStorage.getItem(storeInfo + 'goalsSTORE')) {
    var a = (a = new Date()).getDate() + a.format('mmmm') + a.getFullYear(),
      t = [];
    if (
      -1 ===
      (t = localStorage.getItem(storeInfo + 'goalsSTORE').split(':')).indexOf(a)
    ) {
      for (t.push(a), i = 1; i <= 5; i++) t.push('0');
      (t.push('1'),
        localStorage.setItem(storeInfo + 'goalsSTORE', t.join(':')),
        (infoToUpdate = t.join(':')),
        (fieldToUpdate = 'goals'),
        updateDatabase());
    }
  }
  ((localStorage.getItem(storeInfo + 'goalsSTORE').length <= 3 ||
    null == localStorage.getItem(storeInfo + 'goalsSTORE')) &&
    ((b = [
      (x = (x = new Date()).getDate() + x.format('mmmm') + x.getFullYear()),
      '0',
      '0',
      '0',
      '0',
      '0',
      '1',
    ]),
    localStorage.setItem(storeInfo + 'goalsSTORE', b.join(':')),
    (infoToUpdate = b.join(':')),
    (fieldToUpdate = 'goals'),
    updateDatabase()),
    localStorage.getItem(storeInfo + 'goalsSTORE') &&
      (goalArray = localStorage.getItem(storeInfo + 'goalsSTORE').split(':')),
    (today = new Date()),
    (todayNum = today.getTime()));
  var e = new Date(todayNum - oneDay);
  ((todayDate = today.getDate() + today.format('mmmm') + today.getFullYear()),
    (yesterdayDate = e.getDate() + e.format('mmmm') + e.getFullYear()),
    (firstNum = (firstDate = goalArray[0]
      ? ((M = goalArray[0].replace(/[0-9]/g, '')),
        (C = goalArray[0].split(M)),
        new Date(C[1], allMonths.indexOf(M), C[0]))
      : new Date()).getTime()));
  var s = Math.ceil(Math.abs((today.getTime() - firstDate.getTime()) / oneDay));
  ((firstUseDay = firstDate.getDate()),
    (firstUseTime = firstDate.getTime()),
    1 != s
      ? $('#fact1').html(
          "It's been <strong>" +
            s +
            "</strong> days since you've started using OUINO.",
        )
      : $('#fact1').html('You have just started using OUINO.'));
  var r,
    o = 0,
    d = 0,
    n = 0,
    l = 0,
    c = 0,
    m = 0,
    g = 0,
    w = 0,
    u = [];
  for (xx = 0; xx < goalArray.length; xx++)
    xx % 7 == 0 &&
      ('000000' !=
        (r =
          goalArray[xx + 1] +
          goalArray[xx + 2] +
          goalArray[xx + 3] +
          goalArray[xx + 4] +
          goalArray[xx + 5] +
          goalArray[xx + 6]) && (o++, u.push(goalArray[xx])),
      '1' == r.charAt(0) && l++,
      '1' == r.charAt(1) && c++,
      '1' == r.charAt(2) && m++,
      '1' == r.charAt(3) && g++,
      '1' == r.charAt(4) && w++,
      '1' == r.charAt(5) && d++,
      '00000' != r.slice(0, -1) && n++);
  (1 != d
    ? $('#fact2').html(
        'You have used OUINO for a total of <strong>' + d + '</strong> days.',
      )
    : $('#fact2').html(
        'You have used OUINO for a total of <strong>' + d + '</strong> day.',
      ),
    10 <= d &&
      ($('.award3 p').html('Ouino Days'),
      $('.award3 h2').html(d),
      $('.award3 p, .award3 h2').show()),
    10 <= d && d < 25
      ? ($('.award3 .outImg').css({ width: '25%' }),
        $('.award3 .inImg').css({ width: '400%' }))
      : 25 <= d && d < 65
        ? ($('.award3 .outImg').css({ width: '50%' }),
          $('.award3 .inImg').css({ width: '200%' }))
        : 65 <= d && d < 100
          ? ($('.award3 .outImg').css({ width: '75%' }),
            $('.award3 .inImg').css({ width: '133.33%' }))
          : 100 <= d &&
            ($('.award3 .outImg').css({ width: '100%' }),
            $('.award3 .inImg').css({ width: '100%' })),
    (silverNum = 160),
    (goldNum = 200),
    (bronzeNum = 130) <= d && d < silverNum
      ? $('.award3').addClass('bronze')
      : silverNum <= d && d < goldNum
        ? $('.award3').addClass('silver')
        : goldNum <= d && $('.award3').addClass('gold'),
    1 != n
      ? $('#fact11').html(
          "You've tagged external sources for a total of <strong>" +
            n +
            '</strong> days.',
        )
      : $('#fact11').html(
          "You've tagged external sources for a total of <strong>" +
            n +
            '</strong> day.',
        ),
    (T = round((l / s) * 100, 1)),
    $('#fact14').html(
      "You've tagged external listening activities on <strong>" +
        T +
        '%</strong> of days.',
    ),
    10 <= l &&
      ($('.award11 p').html('Listening Days'),
      $('.award11 h2').html(l),
      $('.award11 p, .award11 h2').show()),
    10 <= l && l < 25
      ? ($('.award11 .outImg').css({ width: '25%' }),
        $('.award11 .inImg').css({ width: '400%' }))
      : 25 <= l && l < 65
        ? ($('.award11 .outImg').css({ width: '50%' }),
          $('.award11 .inImg').css({ width: '200%' }))
        : 65 <= l && l < 100
          ? ($('.award11 .outImg').css({ width: '75%' }),
            $('.award11 .inImg').css({ width: '133.33%' }))
          : 100 <= l &&
            ($('.award11 .outImg').css({ width: '100%' }),
            $('.award11 .inImg').css({ width: '100%' })),
    (silverNum = 160),
    (goldNum = 200),
    (bronzeNum = 120) <= l && l < silverNum
      ? $('.award11').addClass('bronze')
      : silverNum <= l && l < goldNum
        ? $('.award11').addClass('silver')
        : goldNum <= l && $('.award11').addClass('gold'),
    (T = round((c / s) * 100, 1)),
    $('#fact15').html(
      "You've tagged external reading activities on <strong>" +
        T +
        '%</strong> of days.',
    ),
    10 <= c &&
      ($('.award12 p').html('Reading Days'),
      $('.award12 h2').html(c),
      $('.award12 p, .award12 h2').show()),
    10 <= c && c < 25
      ? ($('.award12 .outImg').css({ width: '25%' }),
        $('.award12 .inImg').css({ width: '400%' }))
      : 25 <= c && c < 65
        ? ($('.award12 .outImg').css({ width: '50%' }),
          $('.award12 .inImg').css({ width: '200%' }))
        : 65 <= c && c < 100
          ? ($('.award12 .outImg').css({ width: '75%' }),
            $('.award12 .inImg').css({ width: '133.33%' }))
          : 100 <= c &&
            ($('.award12 .outImg').css({ width: '100%' }),
            $('.award12 .inImg').css({ width: '100%' })),
    (silverNum = 160),
    (goldNum = 200),
    (bronzeNum = 120) <= c && c < silverNum
      ? $('.award12').addClass('bronze')
      : silverNum <= c && c < goldNum
        ? $('.award12').addClass('silver')
        : goldNum <= c && $('.award12').addClass('gold'),
    (T = round((m / s) * 100, 1)),
    $('#fact16').html(
      "You've tagged external watching activities on <strong>" +
        T +
        '%</strong> of days.',
    ),
    10 <= m &&
      ($('.award13 p').html('Watching Days'),
      $('.award13 h2').html(m),
      $('.award13 p, .award13 h2').show()),
    10 <= m && m < 25
      ? ($('.award13 .outImg').css({ width: '25%' }),
        $('.award13 .inImg').css({ width: '400%' }))
      : 25 <= m && m < 65
        ? ($('.award13 .outImg').css({ width: '50%' }),
          $('.award13 .inImg').css({ width: '200%' }))
        : 65 <= m && m < 100
          ? ($('.award13 .outImg').css({ width: '75%' }),
            $('.award13 .inImg').css({ width: '133.33%' }))
          : 100 <= m &&
            ($('.award13 .outImg').css({ width: '100%' }),
            $('.award13 .inImg').css({ width: '100%' })),
    (silverNum = 160),
    (goldNum = 200),
    (bronzeNum = 120) <= m && m < silverNum
      ? $('.award13').addClass('bronze')
      : silverNum <= m && m < goldNum
        ? $('.award13').addClass('silver')
        : goldNum <= m && $('.award13').addClass('gold'),
    (T = round((g / s) * 100, 1)),
    $('#fact17').html(
      "You've tagged external writing activities on <strong>" +
        T +
        '%</strong> of days.',
    ),
    10 <= g &&
      ($('.award14 p').html('Writing Days'),
      $('.award14 h2').html(g),
      $('.award14 p, .award14 h2').show()),
    10 <= g && g < 25
      ? ($('.award14 .outImg').css({ width: '25%' }),
        $('.award14 .inImg').css({ width: '400%' }))
      : 25 <= g && g < 65
        ? ($('.award14 .outImg').css({ width: '50%' }),
          $('.award14 .inImg').css({ width: '200%' }))
        : 65 <= g && g < 100
          ? ($('.award14 .outImg').css({ width: '75%' }),
            $('.award14 .inImg').css({ width: '133.33%' }))
          : 100 <= g &&
            ($('.award14 .outImg').css({ width: '100%' }),
            $('.award14 .inImg').css({ width: '100%' })),
    (silverNum = 160),
    (goldNum = 200),
    (bronzeNum = 120) <= g && g < silverNum
      ? $('.award14').addClass('bronze')
      : silverNum <= g && g < goldNum
        ? $('.award14').addClass('silver')
        : goldNum <= g && $('.award14').addClass('gold'),
    (T = round((w / s) * 100, 1)),
    $('#fact18').html(
      "You've tagged external speaking activities on <strong>" +
        T +
        '%</strong> of days.',
    ),
    10 <= w &&
      ($('.award15 p').html('Speaking Days'),
      $('.award15 h2').html(w),
      $('.award15 p, .award15 h2').show()),
    10 <= w && w < 25
      ? ($('.award15 .outImg').css({ width: '25%' }),
        $('.award15 .inImg').css({ width: '400%' }))
      : 25 <= w && w < 65
        ? ($('.award15 .outImg').css({ width: '50%' }),
          $('.award15 .inImg').css({ width: '200%' }))
        : 65 <= w && w < 100
          ? ($('.award15 .outImg').css({ width: '75%' }),
            $('.award15 .inImg').css({ width: '133.33%' }))
          : 100 <= w &&
            ($('.award15 .outImg').css({ width: '100%' }),
            $('.award15 .inImg').css({ width: '100%' })),
    (silverNum = 160),
    (goldNum = 200),
    (bronzeNum = 120) <= w && w < silverNum
      ? $('.award15').addClass('bronze')
      : silverNum <= w && w < goldNum
        ? $('.award15').addClass('silver')
        : goldNum <= w && $('.award15').addClass('gold'),
    $('.award1 p').html('First Use'));
  for (var h = !1, p = 1; !1 === h; ) {
    var v = new Date();
    (v.setDate(v.getDate() - p),
      (v = v.getDate() + v.format('mmmm') + v.getFullYear()),
      -1 !== u.indexOf(v) ? p++ : (h = !0));
  }
  1 != p
    ? $('#fact12').html(
        "You've used OUINO or external sources for <strong>" +
          p +
          '</strong> days in a row.',
      )
    : $('#fact12').html(
        "You haven't studied yesterday, so today starts your new streak.",
      );
  var I = [];
  for (ww = 0; ww < u.length; ww++) {
    for (h = !1, p = 1; !1 === h; ) {
      var f = u[ww].replace(/[0-9]/g, ''),
        y = u[ww].split(f);
      ((v = new Date(y[1], allMonths.indexOf(f), y[0])).setDate(
        v.getDate() + p,
      ),
        (v = v.getDate() + v.format('mmmm') + v.getFullYear()),
        -1 !== u.indexOf(v) ? p++ : (h = !0));
    }
    I.push(p);
  }
  var N = Math.max.apply(Math, I);
  (1 != N
    ? $('#fact13').html(
        'Your longest day streak is <strong>' + N + '</strong> days in a row.',
      )
    : $('#fact13').html(
        'You have only been active for <strong>1</strong> day in a row. Try to improve!',
      ),
    5 <= N &&
      ($('.award2 p').html('Day Streak'),
      $('.award2 h2').html(N),
      $('.award2 p, .award2 h2').show()),
    5 <= N && N < 10
      ? ($('.award2 .outImg').css({ width: '25%' }),
        $('.award2 .inImg').css({ width: '400%' }))
      : 10 <= N && N < 20
        ? ($('.award2 .outImg').css({ width: '50%' }),
          $('.award2 .inImg').css({ width: '200%' }))
        : 20 <= N && N < 30
          ? ($('.award2 .outImg').css({ width: '75%' }),
            $('.award2 .inImg').css({ width: '133.33%' }))
          : 30 <= N &&
            ($('.award2 .outImg').css({ width: '100%' }),
            $('.award2 .inImg').css({ width: '100%' })),
    (silverNum = 60),
    (goldNum = 80),
    (bronzeNum = 40) <= N && N < silverNum
      ? $('.award2').addClass('bronze')
      : silverNum <= N && N < goldNum
        ? $('.award2').addClass('silver')
        : goldNum <= N && $('.award2').addClass('gold'));
  var x,
    a = round((o / s) * 100, 1);
  $('#fact3').html(
    'You have been active on <strong>' + a + '%</strong> of days.',
  );
  var b =
      (x = localStorage.getItem(storeInfo + 'extraScoresSTORE')
        ? localStorage
            .getItem(storeInfo + 'extraScoresSTORE')
            .split(':')
            .map(Number)
        : [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])[0] +
      x[1] +
      x[2] +
      x[3] +
      x[4] +
      x[5] +
      x[6] +
      x[7] +
      x[8],
    e = Math.max(x[9], x[10], x[11]),
    M = Math.max(x[12], x[13], x[14]);
  $('#fact8').html(
    'Extra Pronunciation Sentences Practiced: <strong>' + b + '</strong>',
  );
  var C = x[15],
    T = Math.floor(C / 3600);
  C %= 3600;
  ((N = Math.floor(C / 60)), (s = C % 60), (a = 's'), (b = 's'), (C = 's'));
  (1 == T && (a = ''),
    1 == N && (b = ''),
    1 == s && (C = ''),
    $('#fact19').html(
      'Extra Reading Practice Time: <strong>' +
        T +
        '</strong> hour' +
        a +
        ', <strong>' +
        N +
        '</strong> minute' +
        b +
        ', and  <strong>' +
        s +
        '</strong> second' +
        C,
    ));
  ((N = x[0] + x[3] + x[6]),
    (b = x[1] + x[4] + x[7]),
    (s = x[2] + x[5] + x[8]),
    (C = N + 2 * b + 4 * s));
  (100 <= (C = round(C)) &&
    ($('.award18 p').html('Extra Pronunciation'),
    $('.award18 h2').html(N + '/' + b + '/' + s),
    $('.award18 p, .award18 h2').show()),
    100 <= C && C < 200
      ? ($('.award18 .outImg').css({ width: '25%' }),
        $('.award18 .inImg').css({ width: '400%' }))
      : 200 <= C && C < 300
        ? ($('.award18 .outImg').css({ width: '50%' }),
          $('.award18 .inImg').css({ width: '200%' }))
        : 300 <= C && C < 400
          ? ($('.award18 .outImg').css({ width: '75%' }),
            $('.award18 .inImg').css({ width: '133.33%' }))
          : 400 <= C &&
            ($('.award18 .outImg').css({ width: '100%' }),
            $('.award18 .inImg').css({ width: '100%' })),
    (silverNum = 600),
    (goldNum = 700),
    (bronzeNum = 500) <= C && C < silverNum
      ? $('.award18').addClass('bronze')
      : silverNum <= C && C < goldNum
        ? $('.award18').addClass('silver')
        : goldNum <= C && $('.award18').addClass('gold'),
    $('#fact9').html(
      'Extra Listening Practice Streak: <strong>' +
        e +
        '</strong> correct sentences',
    ),
    5 <= (C = round((C = x[9] + 2 * x[10] + 4 * x[11]))) &&
      ($('.award19 p').html('Extra Listening'),
      $('.award19 h2').html(x[9] + '/' + x[10] + '/' + x[11]),
      $('.award19 p, .award19 h2').show()),
    5 <= C && C < 20
      ? ($('.award19 .outImg').css({ width: '25%' }),
        $('.award19 .inImg').css({ width: '400%' }))
      : 20 <= C && C < 30
        ? ($('.award19 .outImg').css({ width: '50%' }),
          $('.award19 .inImg').css({ width: '200%' }))
        : 30 <= C && C < 50
          ? ($('.award19 .outImg').css({ width: '75%' }),
            $('.award19 .inImg').css({ width: '133.33%' }))
          : 50 <= C &&
            ($('.award19 .outImg').css({ width: '100%' }),
            $('.award19 .inImg').css({ width: '100%' })),
    $('#fact10').html(
      'Extra Writing Practice Streak: <strong>' +
        M +
        '</strong> correct sentences',
    ),
    (silverNum = 80),
    (goldNum = 95),
    (bronzeNum = 65) <= C && C < silverNum
      ? $('.award19').addClass('bronze')
      : silverNum <= C && C < goldNum
        ? $('.award19').addClass('silver')
        : goldNum <= C && $('.award19').addClass('gold'),
    5 <= (C = round((C = x[12] + 2 * x[13] + 4 * x[14]))) &&
      ($('.award20 p').html('Extra Writing'),
      $('.award20 h2').html(x[12] + '/' + x[13] + '/' + x[14]),
      $('.award20 p, .award20 h2').show()),
    5 <= C && C < 15
      ? ($('.award20 .outImg').css({ width: '25%' }),
        $('.award20 .inImg').css({ width: '400%' }))
      : 15 <= C && C < 25
        ? ($('.award20 .outImg').css({ width: '50%' }),
          $('.award20 .inImg').css({ width: '200%' }))
        : 25 <= C && C < 35
          ? ($('.award20 .outImg').css({ width: '75%' }),
            $('.award20 .inImg').css({ width: '150%' }))
          : 35 <= C &&
            ($('.award20 .outImg').css({ width: '100%' }),
            $('.award20 .inImg').css({ width: '100%' })),
    (silverNum = 55),
    (goldNum = 65),
    (bronzeNum = 45) <= C && C < silverNum
      ? $('.award20').addClass('bronze')
      : silverNum <= C && C < goldNum
        ? $('.award20').addClass('silver')
        : goldNum <= C && $('.award20').addClass('gold'),
    (dateNum = todayNum),
    generateCalendar(),
    generateProgress());
}
function backAction() {
  $('.explanations').is(':visible')
    ? $('.explanations').hide()
    : $('.choices').is(':visible')
      ? homeMenu()
      : location.reload();
}
function loadButtonsMain() {
  ($('#volDiv').addClass('forceHide'),
    $('.closeWin, #goalBack').on('click', function () {
      $('.goalCont, #goalBack').hide();
    }),
    $('.goals').on('click', function () {
      var a = $(this).attr('id').split('goal').join('');
      ($('#calDay' + dayClicked)
        .children('.iGoal' + a)
        .addClass('fullOpacity'),
        (fieldToUpdate =
          ((infoToUpdate =
            ($(this).hasClass('goalActive')
              ? ($(this).removeClass('goalActive'),
                $(this).children('.checkGoal').hide(),
                $('#calDay' + dayClicked)
                  .children('.iGoal' + a)
                  .removeClass('fullOpacity'),
                window['goalCount' + a]--,
                calInfo(),
                (goalArray[goalArray.indexOf(dayID) + parseInt(a)] = '0'))
              : ($(this).addClass('goalActive'),
                $(this).children('.checkGoal').show(),
                $('#calDay' + dayClicked)
                  .children('.iGoal' + a)
                  .addClass('fullOpacity'),
                window['goalCount' + a]++,
                calInfo(),
                (goalArray[goalArray.indexOf(dayID) + parseInt(a)] = '1')),
            localStorage.setItem(storeInfo + 'goalsSTORE', goalArray.join(':')),
            goalArray.join(':'))),
          'goals')),
        updateDatabase(),
        updateFacts());
    }),
    $('#prog1').on('click', function () {
      $('.progress').hasClass('hide') &&
        ($('.progress').removeClass('hide'),
        $('.progress2').addClass('hide'),
        $('#prog2').css({ opacity: '0.4' }),
        $('#prog1').css({ opacity: '1' }));
    }),
    $('#prog2').on('click', function () {
      $('.progress2').hasClass('hide') &&
        ($('.progress2').removeClass('hide'),
        $('.progress').addClass('hide'),
        $('#prog1').css({ opacity: '0.4' }),
        $('#prog2').css({ opacity: '1' }));
    }),
    $('.quesBtn').on('click', function () {
      $('.explanations').fadeIn();
    }),
    $('.explanations').on('click', function () {
      $('.explanations').hide();
    }),
    $('.calPrev').on('click', function () {
      (currentDate.setMonth(currentDate.getMonth() - 1),
        (dateNum = currentDate.getTime()),
        generateCalendar());
    }),
    $('.calNext').on('click', function () {
      (currentDate.setMonth(currentDate.getMonth() + 1),
        (dateNum = currentDate.getTime()),
        generateCalendar());
    }),
    $('#act1').on('click', function () {
      ($('.progress, .progress2, .progress3, #bg1, #backBtn').show(),
        $('.choices, #bg3, #calBack, #backBtn2').hide());
    }),
    $('#act2').on('click', function () {
      ($('.awards, #backBtn').show(),
        $('.choices, #bg1, #bg3, #calBack, #backBtn2').hide());
    }),
    $('.calClick').on('click', function () {
      ($('.calNext, .calPrev').removeClass('hide'),
        $('.calendar, #calBack, #backBtn2').show(),
        $('.progress, .progress2, .progress3, #backBtn').hide());
    }),
    $('#calBack, #backBtn2').on('click', function () {
      ($('.progress, .progress2, .progress3, #backBtn').show(),
        $('.calendar, #calBack, #backBtn2, .goalCont, #goalBack').hide(),
        $('.calNext, .calPrev').addClass('hide'));
    }),
    $('#act3').on('click', function () {
      ($('.calNext, .calPrev').removeClass('hide'),
        $('.calendar, #bg3, #backBtn').show(),
        $('.choices, #bg1, #calBack, #backBtn2').hide());
    }),
    $('.lessonTitle, .background').on('click', function () {
      ($('.calNext, .calPrev').addClass('hide'),
        $(
          '.awards, .calendar, .progress, .progress2, .progress3, #bg1, #bg3, #calBack, #backBtn2, .goalCont, #goalBack',
        ).hide(),
        $('.choices').show());
    }),
    (window.onkeyup = function (a) {
      8 == (a.keyCode || a.which) && backAction();
    }),
    $('#backBtn').on('click', function () {
      $('.explanations').is(':visible')
        ? $('.explanations').hide()
        : ($('.calNext, .calPrev').addClass('hide'),
          $(
            '.awards, .calendar, .progress, .progress2, .progress3, #bg1, #bg3, #calBack, #backBtn2, .goalCont, #goalBack',
          ).hide(),
          $('.choices').is(':visible') ? backAction() : $('.choices').show());
    }),
    $('#backBtn').show(),
    $('#volDiv').hide(),
    'mobile' == currentDevice
      ? ($('.calendar-day').addClass('noHover'),
        $('#menuMain2').on('touchstart mousedown', function (a) {
          (a.preventDefault(), homeMenu());
        }),
        $(
          '.smallIcon, .smallUnderline, .smallerUnderline, .smallLogo, .menuTitleContainer, .closeWin, .calNext, .calPrev, .acts',
        )
          .on('touchstart', function () {
            $(this).addClass('fullOpacity');
          })
          .on('touchend touchcancel', function () {
            $(this).removeClass('fullOpacity');
          }))
      : ($('#menuMain2').on('click', homeMenu),
        $(
          '.smallIcon, .menuTitleContainer, #menuMain2, .calendar-day, .goals, .closeWin, .calNext, .calPrev, .acts, .calClick',
        ).on('mouseenter', function () {}),
        $('.calendar-day').hover(function () {
          $(this).toggleClass('whiteBack');
        }),
        $(
          '.smallIcon, .smallUnderline, .smallerUnderline, .smallLogo, .menuTitleContainer, .closeWin, .calNext, .calPrev, .acts',
        ).hover(function () {
          $(this).toggleClass('fullOpacity');
        }),
        $('.goals, .calClick').hover(function () {
          $(this).toggleClass('fullOpacity2');
        })));
}
function calClick() {
  for (var a = 1; a <= 5; a++)
    $(this)
      .children('.iGoal' + a)
      .hasClass('fullOpacity')
      ? ($('#goal' + a).addClass('goalActive'),
        $('#goal' + a)
          .children('.checkGoal')
          .show())
      : ($('#goal' + a).removeClass('goalActive'),
        $('#goal' + a)
          .children('.checkGoal')
          .hide());
  ((dayClicked = $(this).attr('id').split('calDay').join('')),
    (dayID =
      dayClicked +
      $('#calMonth')
        .html()
        .split('&nbsp;')
        .join('')
        .split('<img class="quesBtn" src="images/logo4.svg">')
        .join('')));
  var t = (t = $('#calMonth').html().split('&nbsp;'))[0];
  if (-1 === goalArray.indexOf(dayID))
    for (goalArray.push(dayID), a = 1; a <= 6; a++) goalArray.push('0');
  (dayID == todayDate
    ? $('.goalCont h2').text(
        'How did you practice ' + lessonLanguage + ' today?',
      )
    : dayID == yesterdayDate
      ? $('.goalCont h2').text(
          'How did you practice ' + lessonLanguage + ' yesterday?',
        )
      : $('.goalCont h2').text(
          'How did you practice ' +
            lessonLanguage +
            ' on ' +
            t +
            ' ' +
            dayClicked +
            '?',
        ),
    $('.goalCont, #goalBack').show());
}
function updateFacts() {
  var a,
    t = Math.ceil(Math.abs((today.getTime() - firstDate.getTime()) / oneDay)),
    e = 0,
    s = 0,
    r = 0,
    o = 0,
    d = 0,
    i = 0,
    n = 0,
    l = 0,
    c = [];
  for (xx = 0; xx < goalArray.length; xx++)
    xx % 7 == 0 &&
      ('000000' !=
        (a =
          goalArray[xx + 1] +
          goalArray[xx + 2] +
          goalArray[xx + 3] +
          goalArray[xx + 4] +
          goalArray[xx + 5] +
          goalArray[xx + 6]) && (e++, c.push(goalArray[xx])),
      '1' == a.charAt(0) && o++,
      '1' == a.charAt(1) && d++,
      '1' == a.charAt(2) && i++,
      '1' == a.charAt(3) && n++,
      '1' == a.charAt(4) && l++,
      '1' == a.charAt(5) && s++,
      '00000' != a.slice(0, -1) && r++);
  (1 != s
    ? $('#fact2').html(
        'You have used OUINO for a total of <strong>' + s + '</strong> days.',
      )
    : $('#fact2').html(
        'You have used OUINO for a total of <strong>' + s + '</strong> day.',
      ),
    25 <= s &&
      ($('.award3 p').html('Ouino Days'),
      $('.award3 h2').html(s),
      $('.award3 p, .award3 h2').show()),
    25 <= s && s < 50
      ? ($('.award3 .outImg').css({ width: '25%' }),
        $('.award3 .inImg').css({ width: '400%' }))
      : 50 <= s && s < 75
        ? ($('.award3 .outImg').css({ width: '50%' }),
          $('.award3 .inImg').css({ width: '200%' }))
        : 75 <= s && s < 100
          ? ($('.award3 .outImg').css({ width: '75%' }),
            $('.award3 .inImg').css({ width: '133.33%' }))
          : 100 <= s &&
            ($('.award3 .outImg').css({ width: '100%' }),
            $('.award3 .inImg').css({ width: '100%' })),
    (silverNum = 160),
    (goldNum = 200),
    (bronzeNum = 130) <= s && s < silverNum
      ? $('.award3').addClass('bronze')
      : silverNum <= s && s < goldNum
        ? $('.award3').addClass('silver')
        : goldNum <= s && $('.award3').addClass('gold'),
    1 != r
      ? $('#fact11').html(
          "You've tagged external sources for a total of <strong>" +
            r +
            '</strong> days.',
        )
      : $('#fact11').html(
          "You've tagged external sources for a total of <strong>" +
            r +
            '</strong> day.',
        ),
    (v = round((o / t) * 100, 1)),
    $('#fact14').html(
      "You've tagged external listening activities on <strong>" +
        v +
        '%</strong> of days.',
    ),
    10 <= o &&
      ($('.award11 p').html('Listening Days'),
      $('.award11 h2').html(o),
      $('.award11 p, .award11 h2').show()),
    10 <= o && o < 25
      ? ($('.award11 .outImg').css({ width: '25%' }),
        $('.award11 .inImg').css({ width: '400%' }))
      : 25 <= o && o < 65
        ? ($('.award11 .outImg').css({ width: '50%' }),
          $('.award11 .inImg').css({ width: '200%' }))
        : 65 <= o && o < 100
          ? ($('.award11 .outImg').css({ width: '75%' }),
            $('.award11 .inImg').css({ width: '133.33%' }))
          : 100 <= o &&
            ($('.award11 .outImg').css({ width: '100%' }),
            $('.award11 .inImg').css({ width: '100%' })),
    (silverNum = 160),
    (goldNum = 200),
    (bronzeNum = 120) <= o && o < silverNum
      ? $('.award11').addClass('bronze')
      : silverNum <= o && o < goldNum
        ? $('.award11').addClass('silver')
        : goldNum <= o && $('.award11').addClass('gold'),
    (v = round((d / t) * 100, 1)),
    $('#fact15').html(
      "You've tagged external reading activities on <strong>" +
        v +
        '%</strong> of days.',
    ),
    10 <= d &&
      ($('.award12 p').html('Reading Days'),
      $('.award12 h2').html(d),
      $('.award12 p, .award12 h2').show()),
    10 <= d && d < 25
      ? ($('.award12 .outImg').css({ width: '25%' }),
        $('.award12 .inImg').css({ width: '400%' }))
      : 25 <= d && d < 65
        ? ($('.award12 .outImg').css({ width: '50%' }),
          $('.award12 .inImg').css({ width: '200%' }))
        : 65 <= d && d < 100
          ? ($('.award12 .outImg').css({ width: '75%' }),
            $('.award12 .inImg').css({ width: '133.33%' }))
          : 100 <= d &&
            ($('.award12 .outImg').css({ width: '100%' }),
            $('.award12 .inImg').css({ width: '100%' })),
    (silverNum = 160),
    (goldNum = 200),
    (bronzeNum = 120) <= d && d < silverNum
      ? $('.award12').addClass('bronze')
      : silverNum <= d && d < goldNum
        ? $('.award12').addClass('silver')
        : goldNum <= d && $('.award12').addClass('gold'),
    (v = round((i / t) * 100, 1)),
    $('#fact16').html(
      "You've tagged external watching activities on <strong>" +
        v +
        '%</strong> of days.',
    ),
    10 <= i &&
      ($('.award13 p').html('Watching Days'),
      $('.award13 h2').html(i),
      $('.award13 p, .award13 h2').show()),
    10 <= i && i < 25
      ? ($('.award13 .outImg').css({ width: '25%' }),
        $('.award13 .inImg').css({ width: '400%' }))
      : 25 <= i && i < 65
        ? ($('.award13 .outImg').css({ width: '50%' }),
          $('.award13 .inImg').css({ width: '200%' }))
        : 65 <= i && i < 100
          ? ($('.award13 .outImg').css({ width: '75%' }),
            $('.award13 .inImg').css({ width: '133.33%' }))
          : 100 <= i &&
            ($('.award13 .outImg').css({ width: '100%' }),
            $('.award13 .inImg').css({ width: '100%' })),
    (silverNum = 160),
    (goldNum = 200),
    (bronzeNum = 120) <= i && i < silverNum
      ? $('.award13').addClass('bronze')
      : silverNum <= i && i < goldNum
        ? $('.award13').addClass('silver')
        : goldNum <= i && $('.award13').addClass('gold'),
    (v = round((n / t) * 100, 1)),
    $('#fact17').html(
      "You've tagged external writing activities on <strong>" +
        v +
        '%</strong> of days.',
    ),
    10 <= n &&
      ($('.award14 p').html('Writing Days'),
      $('.award14 h2').html(n),
      $('.award14 p, .award14 h2').show()),
    10 <= n && n < 25
      ? ($('.award14 .outImg').css({ width: '25%' }),
        $('.award14 .inImg').css({ width: '400%' }))
      : 25 <= n && n < 65
        ? ($('.award14 .outImg').css({ width: '50%' }),
          $('.award14 .inImg').css({ width: '200%' }))
        : 65 <= n && n < 100
          ? ($('.award14 .outImg').css({ width: '75%' }),
            $('.award14 .inImg').css({ width: '150%' }))
          : 100 <= n &&
            ($('.award14 .outImg').css({ width: '100%' }),
            $('.award14 .inImg').css({ width: '100%' })),
    (silverNum = 160),
    (goldNum = 200),
    (bronzeNum = 120) <= n && n < silverNum
      ? $('.award14').addClass('bronze')
      : silverNum <= n && n < goldNum
        ? $('.award14').addClass('silver')
        : goldNum <= n && $('.award14').addClass('gold'),
    (v = round((l / t) * 100, 1)),
    $('#fact18').html(
      "You've tagged external speaking activities on <strong>" +
        v +
        '%</strong> of days.',
    ),
    10 <= l &&
      ($('.award15 p').html('Speaking Days'),
      $('.award15 h2').html(l),
      $('.award15 p, .award15 h2').show()),
    10 <= l && l < 25
      ? ($('.award15 .outImg').css({ width: '25%' }),
        $('.award15 .inImg').css({ width: '400%' }))
      : 25 <= l && l < 65
        ? ($('.award15 .outImg').css({ width: '50%' }),
          $('.award15 .inImg').css({ width: '200%' }))
        : 65 <= l && l < 100
          ? ($('.award15 .outImg').css({ width: '75%' }),
            $('.award15 .inImg').css({ width: '133.33%' }))
          : 100 <= l &&
            ($('.award15 .outImg').css({ width: '100%' }),
            $('.award15 .inImg').css({ width: '100%' })),
    (silverNum = 160),
    (goldNum = 200),
    (bronzeNum = 120) <= l && l < silverNum
      ? $('.award15').addClass('bronze')
      : silverNum <= l && l < goldNum
        ? $('.award15').addClass('silver')
        : goldNum <= l && $('.award15').addClass('gold'));
  for (var m = !1, g = 1; !1 === m; ) {
    var w = new Date();
    (w.setDate(w.getDate() - g),
      (w = w.getDate() + w.format('mmmm') + w.getFullYear()),
      -1 !== c.indexOf(w) ? g++ : (m = !0));
  }
  1 != g
    ? $('#fact12').html(
        "You've used OUINO or external sources for <strong>" +
          g +
          '</strong> days in a row.',
      )
    : $('#fact12').html(
        "You haven't studied yesterday, so today starts your new streak.",
      );
  var u = [];
  for (ww = 0; ww < c.length; ww++) {
    for (m = !1, g = 1; !1 === m; ) {
      var h = c[ww].replace(/[0-9]/g, ''),
        p = c[ww].split(h);
      ((w = new Date(p[1], allMonths.indexOf(h), p[0])).setDate(
        w.getDate() + g,
      ),
        (w = w.getDate() + w.format('mmmm') + w.getFullYear()),
        -1 !== c.indexOf(w) ? g++ : (m = !0));
    }
    u.push(g);
  }
  var v = Math.max.apply(Math, u);
  (1 != v
    ? $('#fact13').html(
        'Your longest day streak is <strong>' + v + '</strong> days in a row.',
      )
    : $('#fact13').html(
        'You have only been active for <strong>1</strong> day in a row.',
      ),
    5 <= v &&
      ($('.award2 p').html('Day Streak'),
      $('.award2 h2').html(v),
      $('.award2 p, .award2 h2').show()),
    5 <= v && v < 10
      ? ($('.award2 .outImg').css({ width: '25%' }),
        $('.award2 .inImg').css({ width: '400%' }))
      : 10 <= v && v < 20
        ? ($('.award2 .outImg').css({ width: '50%' }),
          $('.award2 .inImg').css({ width: '200%' }))
        : 20 <= v && v < 30
          ? ($('.award2 .outImg').css({ width: '75%' }),
            $('.award2 .inImg').css({ width: '133.33%' }))
          : 30 <= v &&
            ($('.award2 .outImg').css({ width: '100%' }),
            $('.award2 .inImg').css({ width: '100%' })),
    (silverNum = 60),
    (goldNum = 80),
    (bronzeNum = 40) <= v && v < silverNum
      ? $('.award2').addClass('bronze')
      : silverNum <= v && v < goldNum
        ? $('.award2').addClass('silver')
        : goldNum <= v && $('.award2').addClass('gold'));
  t = round((e / t) * 100, 1);
  $('#fact3').html(
    'You have been active on <strong>' + t + '%</strong> of days.',
  );
}
function homeMenu() {
  ($('#loadLogo').show(),
    setTimeout(function () {
      ((sessionStorage.menuType = 'home'),
        'iOS' == osType || -1 != osType.indexOf('droid')
          ? (window.location = '../home.html')
          : (window.location = '../index.html'));
    }, 100));
}
function mainMenu() {
  ($('#loadLogo').show(),
    setTimeout(function () {
      'iOS' == osType || -1 != osType.indexOf('droid')
        ? (window.location = '../home.html')
        : (window.location = '../index.html');
    }, 100));
}
function generateCalendar() {
  function a(a, t) {
    ((this.month = isNaN(a) || null == a ? currentDate.getMonth() : a),
      (this.year = isNaN(t) || null == t ? currentDate.getFullYear() : t),
      (this.html = ''));
  }
  ((cal_days_labels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']),
    (cal_months_labels = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ]),
    (cal_days_in_month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]),
    (currentDate = new Date(dateNum)),
    (calendarMoYe = currentDate.format('mmmm') + currentDate.getFullYear()),
    (a.prototype.generateHTML = function () {
      ($('.calPrev').is(':hidden') && $('.calPrev').show(),
        $('.calNext').is(':hidden') && $('.calNext').show(),
        (moreToday = todayNum < dateNum));
      var a = new Date(this.year, this.month, 1).getDay(),
        t = cal_days_in_month[this.month];
      1 == this.month &&
        ((this.year % 4 == 0 && this.year % 100 != 0) ||
          this.year % 400 == 0) &&
        (t = 29);
      var e = '<table class="calendar-table">';
      ((e += '<tr><th colspan="7" id="calMonth">'),
        (e += cal_months_labels[this.month] + '&nbsp;' + this.year),
        (e += '<img class="quesBtn" src="images/logo4.svg"/></th></tr>'),
        (e += '<tr class="calendar-header">'));
      for (var s = 0; s <= 6; s++)
        ((e += '<td class="calendar-header-day">'),
          (e += cal_days_labels[s]),
          (e += '</td>'));
      e += '</tr><tr>';
      for (var r = 1, s = 0; s < 9; s++) {
        for (var o, d = 0; d <= 6; d++)
          r <= t && (0 < s || a <= d)
            ? ((o = new Date(
                currentDate.getFullYear(),
                currentDate.getMonth(),
                r,
              ).getTime()),
              moreToday
                ? ((e +=
                    '<td class="calendar-day" id="calDay' +
                    r +
                    '" style="color: rgba(255,255,255,0.2); pointer-events: none;">'),
                  $('.calNext').is(':visible') && $('.calNext').hide())
                : o < firstUseTime
                  ? ((e +=
                      '<td class="calendar-day" id="calDay' +
                      r +
                      '" style="color: rgba(255,255,255,0.2); pointer-events: none; font-weight: normal;">'),
                    $('.calPrev').is(':visible') && $('.calPrev').hide())
                  : r + calendarMoYe != todayDate
                    ? (e += '<td class="calendar-day" id="calDay' + r + '">')
                    : ((e +=
                        '<td class="calendar-day today" id="calDay' +
                        r +
                        '" style="color: #ffbd3b;">'),
                      (moreToday = !0)),
              (e += '<b>' + r + '</b>'),
              r++,
              (e +=
                '<img class="iconGoal iGoal1" src="images/goalListen.svg"/><img class="iconGoal iGoal2" src="images/goalRead.svg"/><img class="iconGoal iGoal3" src="images/goalWatch.svg"/><img class="iconGoal iGoal4" src="images/goalWrite.svg"/><img class="iconGoal iGoal5" src="images/goalSpeak.svg"/><img class="iconGoal iGoal6" src="images/goalOuino.svg"/></td>'))
            : ((e +=
                '<td class="calendar-day" style="color: rgba(255,255,255,0.2); pointer-events: none; font-weight: normal;">'),
              (e += '</td>'));
        if (t < r) break;
        e += '</tr><tr>';
      }
      ((e += '<tr><th colspan="7" id="calProg"></th>'),
        (e += '</tr></table>'),
        (this.html = e));
    }),
    (a.prototype.getHTML = function () {
      return this.html;
    }));
  var t = new a();
  for (
    t.generateHTML(),
      $('.calendar').html(t.getHTML()),
      setTimeout(function () {}, 3e3),
      $('.calendar-day').on('click', calClick),
      $('.quesBtn').on('click', function () {
        $('.explanations').fadeIn();
      }),
      $('.calendar-day').on('mouseenter', function () {}),
      goalCount6 =
        goalCount5 =
        goalCount4 =
        goalCount3 =
        goalCount2 =
        goalCount1 =
          0,
      z = 1;
    z <= 31;
    z++
  )
    if (-1 < goalArray.indexOf(z + calendarMoYe))
      for (zz = 1; zz <= 6; zz++)
        '1' === goalArray[goalArray.indexOf(z + calendarMoYe) + zz] &&
          ($('#calDay' + z)
            .children('.iGoal' + zz)
            .addClass('fullOpacity'),
          window['goalCount' + zz]++);
  calInfo();
}
function calInfo() {
  $('#calProg').html(
    '<div class="legend"><img class="goalIcon" src="images/goalListen.svg">Listening:&nbsp;<strong>' +
      goalCount1 +
      '</strong></div><div class="legend"><img class="goalIcon" src="images/goalRead.svg">Reading:&nbsp;<strong>' +
      goalCount2 +
      '</strong></div><div class="legend"><img class="goalIcon" src="images/goalWatch.svg">Watching:&nbsp;<strong>' +
      goalCount3 +
      '</strong></div><div class="legend"><img class="goalIcon" src="images/goalWrite.svg">Writing:&nbsp;<strong>' +
      goalCount4 +
      '</strong></div><div class="legend"><img class="goalIcon" src="images/goalSpeak.svg">Speaking:&nbsp;<strong>' +
      goalCount5 +
      '</strong></div><div class="legend"><img class="goalIcon ouinoIcon" src="images/goalOuino.svg"><b>Ouino:&nbsp;<strong>' +
      goalCount6 +
      '</strong></div>',
  );
}
function generateProgress() {
  var a = [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0,
    ],
    t = [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ];
  (localStorage.getItem(storeInfo + 'starGoalSTORE') &&
    (a = localStorage.getItem(storeInfo + 'starGoalSTORE').split(':')),
    localStorage.getItem(storeInfo + 'scoreGoalSTORE') &&
      (t = localStorage.getItem(storeInfo + 'scoreGoalSTORE').split(':')),
    $('#pMeter1 .starNum').text(a[1]),
    $('#pMeter1 .starTotal').text(a[2]),
    $('#pMeter1 .starMeter').css({ width: a[3] + '%' }),
    $('#pMeter1 .medalNum0').text(t[1]),
    $('#pMeter1 .medalNum1').text(t[2]),
    $('#pMeter1 .medalNum2').text(t[3]),
    $('#pMeter1 .medalNum3').text(t[4]),
    $('#pMeter1 .scoreNum').text(t[5]),
    $('#pMeter1 .medalTotal').text(t[6]),
    $('#pMeter1 .scoreMeter').css({ width: t[5] + '%' }));
  var e = t[5];
  (10 <= e &&
    ($('.award4 p').html('Building Blocks'),
    $('.award4 h2').html(e + '%'),
    $('.award4 p, .award4 h2').show()),
    10 <= e && e < 22
      ? ($('.award4 .outImg').css({ width: '25%' }),
        $('.award4 .inImg').css({ width: '400%' }))
      : 22 <= e && e < 35
        ? ($('.award4 .outImg').css({ width: '35%' }),
          $('.award4 .inImg').css({ width: '285%' }))
        : 35 <= e && e < 45
          ? ($('.award4 .outImg').css({ width: '45%' }),
            $('.award4 .inImg').css({ width: '221%' }))
          : 45 <= e && e < 55
            ? ($('.award4 .outImg').css({ width: '55%' }),
              $('.award4 .inImg').css({ width: '181%' }))
            : 55 <= e && e < 65
              ? ($('.award4 .outImg').css({ width: '65%' }),
                $('.award4 .inImg').css({ width: '152%' }))
              : 65 <= e && e < 75
                ? ($('.award4 .outImg').css({ width: '75%' }),
                  $('.award4 .inImg').css({ width: '133.33%' }))
                : 75 <= e && e < 85
                  ? ($('.award4 .outImg').css({ width: '85%' }),
                    $('.award4 .inImg').css({ width: '117%' }))
                  : 85 <= e &&
                    ($('.award4 .outImg').css({ width: '100%' }),
                    $('.award4 .inImg').css({ width: '100%' })),
    (silverNum = 90),
    (goldNum = 95),
    (bronzeNum = 85) <= e && e < silverNum
      ? $('.award4').addClass('bronze')
      : silverNum <= e && e < goldNum
        ? $('.award4').addClass('silver')
        : goldNum <= e && $('.award4').addClass('gold'),
    $('#pMeter2 .starNum').text(a[5]),
    $('#pMeter2 .starTotal').text(a[6]),
    $('#pMeter2 .starMeter').css({ width: a[7] + '%' }),
    $('#pMeter2 .medalNum0').text(t[8]),
    $('#pMeter2 .medalNum1').text(t[9]),
    $('#pMeter2 .medalNum2').text(t[10]),
    $('#pMeter2 .medalNum3').text(t[11]),
    $('#pMeter2 .scoreNum').text(t[12]),
    $('#pMeter2 .medalTotal').text(t[13]),
    $('#pMeter2 .scoreMeter').css({ width: t[12] + '%' }),
    10 <= (e = t[12]) &&
      ($('.award5 p').html('Vocabulary'),
      $('.award5 h2').html(e + '%'),
      $('.award5 p, .award5 h2').show()),
    10 <= e && e < 22
      ? ($('.award5 .outImg').css({ width: '25%' }),
        $('.award5 .inImg').css({ width: '400%' }))
      : 22 <= e && e < 35
        ? ($('.award5 .outImg').css({ width: '35%' }),
          $('.award5 .inImg').css({ width: '285%' }))
        : 35 <= e && e < 45
          ? ($('.award5 .outImg').css({ width: '45%' }),
            $('.award5 .inImg').css({ width: '221%' }))
          : 45 <= e && e < 55
            ? ($('.award5 .outImg').css({ width: '55%' }),
              $('.award5 .inImg').css({ width: '181%' }))
            : 55 <= e && e < 65
              ? ($('.award5 .outImg').css({ width: '65%' }),
                $('.award5 .inImg').css({ width: '152%' }))
              : 65 <= e && e < 75
                ? ($('.award5 .outImg').css({ width: '75%' }),
                  $('.award5 .inImg').css({ width: '133.33%' }))
                : 75 <= e && e < 85
                  ? ($('.award5 .outImg').css({ width: '85%' }),
                    $('.award5 .inImg').css({ width: '117%' }))
                  : 85 <= e &&
                    ($('.award5 .outImg').css({ width: '100%' }),
                    $('.award5 .inImg').css({ width: '100%' })),
    (silverNum = 90),
    (goldNum = 95),
    (bronzeNum = 85) <= e && e < silverNum
      ? $('.award5').addClass('bronze')
      : silverNum <= e && e < goldNum
        ? $('.award5').addClass('silver')
        : goldNum <= e && $('.award5').addClass('gold'),
    $('#pMeter3 .starNum').text(a[9]),
    $('#pMeter3 .starTotal').text(a[10]),
    $('#pMeter3 .starMeter').css({ width: a[11] + '%' }),
    $('#pMeter3 .medalNum0').text(t[15]),
    $('#pMeter3 .medalNum1').text(t[16]),
    $('#pMeter3 .medalNum2').text(t[17]),
    $('#pMeter3 .medalNum3').text(t[18]),
    $('#pMeter3 .scoreNum').text(t[19]),
    $('#pMeter3 .medalTotal').text(t[20]),
    $('#pMeter3 .scoreMeter').css({ width: t[19] + '%' }),
    10 <= (e = t[19]) &&
      ($('.award6 p').html('Conversations'),
      $('.award6 h2').html(e + '%'),
      $('.award6 p, .award6 h2').show()),
    10 <= e && e < 22
      ? ($('.award6 .outImg').css({ width: '25%' }),
        $('.award6 .inImg').css({ width: '400%' }))
      : 22 <= e && e < 35
        ? ($('.award6 .outImg').css({ width: '35%' }),
          $('.award6 .inImg').css({ width: '285%' }))
        : 35 <= e && e < 45
          ? ($('.award6 .outImg').css({ width: '45%' }),
            $('.award6 .inImg').css({ width: '221%' }))
          : 45 <= e && e < 55
            ? ($('.award6 .outImg').css({ width: '55%' }),
              $('.award6 .inImg').css({ width: '181%' }))
            : 55 <= e && e < 65
              ? ($('.award6 .outImg').css({ width: '65%' }),
                $('.award6 .inImg').css({ width: '152%' }))
              : 65 <= e && e < 75
                ? ($('.award6 .outImg').css({ width: '75%' }),
                  $('.award6 .inImg').css({ width: '133.33%' }))
                : 75 <= e && e < 85
                  ? ($('.award6 .outImg').css({ width: '85%' }),
                    $('.award6 .inImg').css({ width: '117%' }))
                  : 85 <= e &&
                    ($('.award6 .outImg').css({ width: '100%' }),
                    $('.award6 .inImg').css({ width: '100%' })),
    (silverNum = 90),
    (goldNum = 95),
    (bronzeNum = 85) <= e && e < silverNum
      ? $('.award6').addClass('bronze')
      : silverNum <= e && e < goldNum
        ? $('.award6').addClass('silver')
        : goldNum <= e && $('.award6').addClass('gold'),
    $('#pMeter5 .starNum').text(a[13]),
    $('#pMeter5 .starTotal').text(a[14]),
    $('#pMeter5 .starMeter').css({ width: a[15] + '%' }),
    $('#pMeter5 .medalNum0').text(t[22]),
    $('#pMeter5 .medalNum1').text(t[23]),
    $('#pMeter5 .medalNum2').text(t[24]),
    $('#pMeter5 .medalNum3').text(t[25]),
    $('#pMeter5 .scoreNum').text(t[26]),
    $('#pMeter5 .medalTotal').text(t[27]),
    $('#pMeter5 .scoreMeter').css({ width: t[26] + '%' }),
    10 <= (e = t[26]) &&
      ($('.award7 p').html('Individual Verbs'),
      $('.award7 h2').html(e + '%'),
      $('.award7 p, .award7 h2').show()),
    10 <= e && e < 22
      ? ($('.award7 .outImg').css({ width: '25%' }),
        $('.award7 .inImg').css({ width: '400%' }))
      : 22 <= e && e < 35
        ? ($('.award7 .outImg').css({ width: '35%' }),
          $('.award7 .inImg').css({ width: '285%' }))
        : 35 <= e && e < 45
          ? ($('.award7 .outImg').css({ width: '45%' }),
            $('.award7 .inImg').css({ width: '221%' }))
          : 45 <= e && e < 55
            ? ($('.award7 .outImg').css({ width: '55%' }),
              $('.award7 .inImg').css({ width: '181%' }))
            : 55 <= e && e < 65
              ? ($('.award7 .outImg').css({ width: '65%' }),
                $('.award7 .inImg').css({ width: '152%' }))
              : 65 <= e && e < 75
                ? ($('.award7 .outImg').css({ width: '75%' }),
                  $('.award7 .inImg').css({ width: '133.33%' }))
                : 75 <= e && e < 85
                  ? ($('.award7 .outImg').css({ width: '85%' }),
                    $('.award7 .inImg').css({ width: '117%' }))
                  : 85 <= e &&
                    ($('.award7 .outImg').css({ width: '100%' }),
                    $('.award7 .inImg').css({ width: '100%' })),
    (silverNum = 90),
    (goldNum = 95),
    (bronzeNum = 85) <= e && e < silverNum
      ? $('.award7').addClass('bronze')
      : silverNum <= e && e < goldNum
        ? $('.award7').addClass('silver')
        : goldNum <= e && $('.award7').addClass('gold'),
    $('#pMeter10 .starNum').text(a[29]),
    $('#pMeter10 .starTotal').text(a[30]),
    $('#pMeter10 .starMeter').css({ width: a[31] + '%' }),
    $('#pMeter10 .medalNum0').text(t[50]),
    $('#pMeter10 .medalNum1').text(t[51]),
    $('#pMeter10 .medalNum2').text(t[52]),
    $('#pMeter10 .medalNum3').text(t[53]),
    $('#pMeter10 .scoreNum').text(t[54]),
    $('#pMeter10 .medalTotal').text(t[55]),
    $('#pMeter10 .scoreMeter').css({ width: t[54] + '%' }),
    $('#pMeter11 .starNum').text(a[33]),
    $('#pMeter11 .starTotal').text(a[34]),
    $('#pMeter11 .starMeter').css({ width: a[35] + '%' }),
    $('#pMeter11 .medalNum0').text(t[57]),
    $('#pMeter11 .medalNum1').text(t[58]),
    $('#pMeter11 .medalNum2').text(t[59]),
    $('#pMeter11 .medalNum3').text(t[60]),
    $('#pMeter11 .scoreNum').text(t[61]),
    $('#pMeter11 .medalTotal').text(t[62]),
    $('#pMeter11 .scoreMeter').css({ width: t[61] + '%' }),
    $('#pMeter6 .starNum').text(a[17]),
    $('#pMeter6 .starTotal').text(a[18]),
    $('#pMeter6 .starMeter').css({ width: a[19] + '%' }),
    $('#pMeter6 .medalNum0').text(t[29]),
    $('#pMeter6 .medalNum1').text(t[30]),
    $('#pMeter6 .medalNum2').text(t[31]),
    $('#pMeter6 .medalNum3').text(t[32]),
    $('#pMeter6 .scoreNum').text(t[33]),
    $('#pMeter6 .medalTotal').text(t[34]),
    $('#pMeter6 .scoreMeter').css({ width: t[33] + '%' }),
    10 <= (e = t[33]) &&
      ($('.award8 p').html('Key Verbs'),
      $('.award8 h2').html(e + '%'),
      $('.award8 p, .award8 h2').show()),
    10 <= e && e < 22
      ? ($('.award8 .outImg').css({ width: '25%' }),
        $('.award8 .inImg').css({ width: '400%' }))
      : 22 <= e && e < 35
        ? ($('.award8 .outImg').css({ width: '35%' }),
          $('.award8 .inImg').css({ width: '285%' }))
        : 35 <= e && e < 45
          ? ($('.award8 .outImg').css({ width: '45%' }),
            $('.award8 .inImg').css({ width: '221%' }))
          : 45 <= e && e < 55
            ? ($('.award8 .outImg').css({ width: '55%' }),
              $('.award8 .inImg').css({ width: '181%' }))
            : 55 <= e && e < 65
              ? ($('.award8 .outImg').css({ width: '65%' }),
                $('.award8 .inImg').css({ width: '152%' }))
              : 65 <= e && e < 75
                ? ($('.award8 .outImg').css({ width: '75%' }),
                  $('.award8 .inImg').css({ width: '133.33%' }))
                : 75 <= e && e < 85
                  ? ($('.award8 .outImg').css({ width: '85%' }),
                    $('.award8 .inImg').css({ width: '117%' }))
                  : 85 <= e &&
                    ($('.award8 .outImg').css({ width: '100%' }),
                    $('.award8 .inImg').css({ width: '100%' })),
    (silverNum = 90),
    (goldNum = 95),
    (bronzeNum = 85) <= e && e < silverNum
      ? $('.award8').addClass('bronze')
      : silverNum <= e && e < goldNum
        ? $('.award8').addClass('silver')
        : goldNum <= e && $('.award8').addClass('gold'),
    $('#pMeter8 .starNum').text(a[21]),
    $('#pMeter8 .starTotal').text(a[22]),
    $('#pMeter8 .starMeter').css({ width: a[23] + '%' }),
    $('#pMeter8 .medalNum0').text(t[36]),
    $('#pMeter8 .medalNum1').text(t[37]),
    $('#pMeter8 .medalNum2').text(t[38]),
    $('#pMeter8 .medalNum3').text(t[39]),
    $('#pMeter8 .scoreNum').text(t[40]),
    $('#pMeter8 .medalTotal').text(t[41]),
    $('#pMeter8 .scoreMeter').css({ width: t[40] + '%' }),
    10 <= (e = t[40]) &&
      ($('.award9 p').html('Verb Endings'),
      $('.award9 h2').html(e + '%'),
      $('.award9 p, .award9 h2').show()),
    10 <= e && e < 22
      ? ($('.award9 .outImg').css({ width: '25%' }),
        $('.award9 .inImg').css({ width: '400%' }))
      : 22 <= e && e < 35
        ? ($('.award9 .outImg').css({ width: '35%' }),
          $('.award9 .inImg').css({ width: '285%' }))
        : 35 <= e && e < 45
          ? ($('.award9 .outImg').css({ width: '45%' }),
            $('.award9 .inImg').css({ width: '221%' }))
          : 45 <= e && e < 55
            ? ($('.award9 .outImg').css({ width: '55%' }),
              $('.award9 .inImg').css({ width: '181%' }))
            : 55 <= e && e < 65
              ? ($('.award9 .outImg').css({ width: '65%' }),
                $('.award9 .inImg').css({ width: '152%' }))
              : 65 <= e && e < 75
                ? ($('.award9 .outImg').css({ width: '75%' }),
                  $('.award9 .inImg').css({ width: '133.33%' }))
                : 75 <= e && e < 85
                  ? ($('.award9 .outImg').css({ width: '85%' }),
                    $('.award9 .inImg').css({ width: '117%' }))
                  : 85 <= e &&
                    ($('.award9 .outImg').css({ width: '100%' }),
                    $('.award9 .inImg').css({ width: '100%' })),
    (silverNum = 90),
    (goldNum = 95),
    (bronzeNum = 85) <= e && e < silverNum
      ? $('.award9').addClass('bronze')
      : silverNum <= e && e < goldNum
        ? $('.award9').addClass('silver')
        : goldNum <= e && $('.award9').addClass('gold'),
    $('#pMeter9 .starNum').text(a[25]),
    $('#pMeter9 .starTotal').text(a[26]),
    $('#pMeter9 .starMeter').css({ width: a[27] + '%' }),
    $('#pMeter9 .medalNum0').text(t[43]),
    $('#pMeter9 .medalNum1').text(t[44]),
    $('#pMeter9 .medalNum2').text(t[45]),
    $('#pMeter9 .medalNum3').text(t[46]),
    $('#pMeter9 .scoreNum').text(t[47]),
    $('#pMeter9 .medalTotal').text(t[48]),
    $('#pMeter9 .scoreMeter').css({ width: t[47] + '%' }),
    10 <= (e = t[47]) &&
      ($('.award16 p').html('Program Progress'),
      $('.award16 h2').html(e + '%'),
      $('.award16 p, .award16 h2').show()),
    10 <= e && e < 22
      ? ($('.award16 .outImg').css({ width: '25%' }),
        $('.award16 .inImg').css({ width: '400%' }))
      : 22 <= e && e < 35
        ? ($('.award16 .outImg').css({ width: '35%' }),
          $('.award16 .inImg').css({ width: '285%' }))
        : 35 <= e && e < 45
          ? ($('.award16 .outImg').css({ width: '45%' }),
            $('.award16 .inImg').css({ width: '221%' }))
          : 45 <= e && e < 55
            ? ($('.award16 .outImg').css({ width: '55%' }),
              $('.award16 .inImg').css({ width: '181%' }))
            : 55 <= e && e < 65
              ? ($('.award16 .outImg').css({ width: '65%' }),
                $('.award16 .inImg').css({ width: '152%' }))
              : 65 <= e && e < 75
                ? ($('.award16 .outImg').css({ width: '75%' }),
                  $('.award16 .inImg').css({ width: '133.33%' }))
                : 75 <= e && e < 85
                  ? ($('.award16 .outImg').css({ width: '85%' }),
                    $('.award16 .inImg').css({ width: '117%' }))
                  : 85 <= e &&
                    ($('.award16 .outImg').css({ width: '100%' }),
                    $('.award16 .inImg').css({ width: '100%' })),
    (silverNum = 90),
    (goldNum = 95),
    (bronzeNum = 85) <= e && e < silverNum
      ? $('.award16').addClass('bronze')
      : silverNum <= e && e < goldNum
        ? $('.award16').addClass('silver')
        : goldNum <= e && $('.award16').addClass('gold'));
  t = round((t[43] / t[48]) * 100, 1);
  $('#fact4').html(
    'You have completed <strong>' + t + '%</strong> of the exercises in OUINO.',
  );
  var s,
    a = round((a[25] / a[26]) * 100, 1);
  ($('#fact5').html(
    'You have tagged <strong>' +
      a +
      '%</strong> of the knowledge stars in the program.',
  ),
    $('#fact6').html(
      'You are awesome for learning <strong>' + lessonLanguage + '</strong>!',
    ),
    10 <= (e = round(a)) &&
      ($('.award17 p').html('Knowledge Stars'),
      $('.award17 h2').html(e + '%'),
      $('.award17 p, .award17 h2').show()),
    10 <= e && e < 22
      ? ($('.award17 .outImg').css({ width: '25%' }),
        $('.award17 .inImg').css({ width: '400%' }))
      : 22 <= e && e < 35
        ? ($('.award17 .outImg').css({ width: '35%' }),
          $('.award17 .inImg').css({ width: '285%' }))
        : 35 <= e && e < 45
          ? ($('.award17 .outImg').css({ width: '45%' }),
            $('.award17 .inImg').css({ width: '221%' }))
          : 45 <= e && e < 55
            ? ($('.award17 .outImg').css({ width: '55%' }),
              $('.award17 .inImg').css({ width: '181%' }))
            : 55 <= e && e < 65
              ? ($('.award17 .outImg').css({ width: '65%' }),
                $('.award17 .inImg').css({ width: '152%' }))
              : 65 <= e && e < 75
                ? ($('.award17 .outImg').css({ width: '75%' }),
                  $('.award17 .inImg').css({ width: '133.33%' }))
                : 75 <= e && e < 85
                  ? ($('.award17 .outImg').css({ width: '85%' }),
                    $('.award17 .inImg').css({ width: '117%' }))
                  : 85 <= e &&
                    ($('.award17 .outImg').css({ width: '100%' }),
                    $('.award17 .inImg').css({ width: '100%' })),
    (silverNum = 90),
    (goldNum = 95),
    (bronzeNum = 85) <= e && e < silverNum
      ? $('.award17').addClass('bronze')
      : silverNum <= e && e < goldNum
        ? $('.award17').addClass('silver')
        : goldNum <= e && $('.award17').addClass('gold'),
    localStorage.getItem(storeInfo + 'starSTOREpronun') &&
      ((a = localStorage
        .getItem(storeInfo + 'starSTOREpronun')
        .split(':')
        .join('')
        .split('0')
        .join('').length),
      'Spanish' == lessonLanguage
        ? (s = 48)
        : 'French' == lessonLanguage || 'Italian' == lessonLanguage
          ? (s = 71)
          : 'German' == lessonLanguage
            ? (s = 46)
            : 'Portuguese' == lessonLanguage && (s = 72),
      (pronunPercent = round((a / s) * 100, 1)),
      100 < pronunPercent && (pronunPercent = 100),
      $('#fact7').html(
        'You have tagged <strong>' +
          pronunPercent +
          '%</strong> of the sounds in the pronunciation module.',
      ),
      10 <= (e = round(pronunPercent)) &&
        ($('.award10 p').html('Pronunciation'),
        $('.award10 h2').html(e + '%'),
        $('.award10 p, .award10 h2').show()),
      10 <= e && e < 22
        ? ($('.award10 .outImg').css({ width: '25%' }),
          $('.award10 .inImg').css({ width: '400%' }))
        : 22 <= e && e < 35
          ? ($('.award10 .outImg').css({ width: '35%' }),
            $('.award10 .inImg').css({ width: '285%' }))
          : 35 <= e && e < 45
            ? ($('.award10 .outImg').css({ width: '45%' }),
              $('.award10 .inImg').css({ width: '221%' }))
            : 45 <= e && e < 55
              ? ($('.award10 .outImg').css({ width: '55%' }),
                $('.award10 .inImg').css({ width: '181%' }))
              : 55 <= e && e < 65
                ? ($('.award10 .outImg').css({ width: '65%' }),
                  $('.award10 .inImg').css({ width: '152%' }))
                : 65 <= e && e < 75
                  ? ($('.award10 .outImg').css({ width: '75%' }),
                    $('.award10 .inImg').css({ width: '133.33%' }))
                  : 75 <= e && e < 85
                    ? ($('.award10 .outImg').css({ width: '85%' }),
                      $('.award10 .inImg').css({ width: '117%' }))
                    : 85 <= e &&
                      ($('.award10 .outImg').css({ width: '100%' }),
                      $('.award10 .inImg').css({ width: '100%' })),
      (silverNum = 90),
      (goldNum = 95),
      (bronzeNum = 85) <= e && e < silverNum
        ? $('.award10').addClass('bronze')
        : silverNum <= e && e < goldNum
          ? $('.award10').addClass('silver')
          : goldNum <= e && $('.award10').addClass('gold')));
}
function round(a, t) {
  return void 0 === t || 0 == +t
    ? Math.round(a)
    : ((a = +a),
      (t = +t),
      isNaN(a) || 'number' != typeof t || t % 1 != 0
        ? NaN
        : ((a = a.toString().split('e')),
          +(
            (a = (a = Math.round(+(a[0] + 'e' + (a[1] ? +a[1] + t : t))))
              .toString()
              .split('e'))[0] +
            'e' +
            (a[1] ? +a[1] - t : -t)
          )));
}
function updateDatabase() {
  (':' == infoToUpdate.charAt(infoToUpdate.length - 1) && (infoToUpdate += '0'),
    ':' == infoToUpdate.charAt(0) && (infoToUpdate = '0' + infoToUpdate),
    (infoToUpdate = infoToUpdate.split('::').join(':0:')));
  var a = new XMLHttpRequest(),
    e = YLtLU + ETTNv + rvUnf + OGXpV + wtZGh + KsXgx + cWbBT,
    s =
      'email=' +
      userEmail +
      '&password=' +
      tuvm58dj +
      userEmail.substring(1, 3) +
      '&fieldToUpdate=' +
      fieldToUpdate +
      '&infoToUpdate=' +
      infoToUpdate +
      '&lessonLang=' +
      lessonLanguage,
    r = 2,
    o = 3e3;
  !(function t() {
    (a.open('POST', e, !0),
      a.setRequestHeader('Content-type', 'application/x-www-form-urlencoded'),
      (a.onreadystatechange = function () {
        4 == a.readyState &&
          200 != a.status &&
          (0 < r
            ? (r--, setTimeout(t, o))
            : console.error(
                'Failed to update database after multiple attempts.',
              ));
      }));
    try {
      a.send(s);
    } catch (a) {
      (console.error('Error sending request:', a),
        0 < r && (r--, setTimeout(t, o)));
    }
  })();
}
($(document).ready(function () {
  ((viewport = document.querySelector('meta[name=viewport]')),
    $('html').innerWidth() < 350 || $('html').innerHeight() < 350
      ? viewport.setAttribute(
          'content',
          'initial-scale=1.5,height=device-height,user-scalable=no, width=device-width,maximum-scale=0.7,minimum-scale=0.7,viewport-fit=cover',
        )
      : $('html').innerWidth() < 450 || $('html').innerHeight() < 450
        ? 760 < $('html').innerWidth() || 760 < $('html').innerHeight()
          ? (viewport.setAttribute(
              'content',
              'initial-scale=1.5,height=device-height,user-scalable=no, width=device-width,maximum-scale=0.9,minimum-scale=0.9,viewport-fit=cover',
            ),
            -1 != osType.indexOf('droid') && $('body').addClass('android'))
          : viewport.setAttribute(
              'content',
              'initial-scale=1.5,height=device-height,user-scalable=no, width=device-width,maximum-scale=0.8,minimum-scale=0.8,viewport-fit=cover',
            )
        : viewport.setAttribute(
            'content',
            'initial-scale=1.5,height=device-height,user-scalable=no, width=device-width,maximum-scale=1,minimum-scale=1,viewport-fit=cover',
          ));
  var a = $('html').innerHeight();
  if (
    ($('body').hasClass('android')
      ? ($(window).resize(function () {
          $('html').innerWidth() < 550 &&
            $('.awards').css({ height: 0.86 * a + 'px' });
        }),
        $(window).load(function () {
          $('html').innerWidth() < 550 &&
            $('.awards').css({ height: 0.86 * a + 'px' });
        }))
      : ($(window).resize(function () {
          $('html').innerWidth() < 550 &&
            $('.awards').css({ height: 0.87 * a + 'px' });
        }),
        $(window).load(function () {
          $('html').innerWidth() < 550 &&
            $('.awards').css({ height: 0.87 * a + 'px' });
        })),
    'iOS' == osType &&
      ($('html').innerWidth() < 500 || $('html').innerHeight() < 500) &&
      $('.menuTitleContainer').addClass('forceHide'),
    null == sessionStorage.userEmailSTORE)
  )
    return (
      sessionStorage.clear(),
      'iOS' == osType || osType.indexOf('droid'),
      void (window.location = '../index.html')
    );
  ((userEmail = sessionStorage.userEmailSTORE),
    (tuvm58dj = sessionStorage.tuvm58djSTORE),
    (storeInfo = langShort + userEmail),
    (audioSprite = document.getElementById('sfxSprite')).addEventListener(
      'timeupdate',
      onTimeUpdate,
      !1,
    ),
    $('.lessonTitle').text('Progress & Achievements'),
    $('#goal1 p').text(
      'I listened to ' +
        lessonLanguage +
        ' radio, music or podcasts for at least 15 minutes.',
    ),
    $('#goal2 p').text(
      'I spent at least 10 minutes reading a book, article or news in ' +
        lessonLanguage +
        '.',
    ),
    $('#goal3 p').text(
      'I watched at least 15 minutes of a movie or television episode in ' +
        lessonLanguage +
        '.',
    ),
    $('#goal4 p').text(
      'I spent at least 10 minutes writing a letter, story or diary in ' +
        lessonLanguage +
        '.',
    ),
    $('#goal5 p').text(
      'I had an actual conversation in ' +
        lessonLanguage +
        ' for at least 5 minutes.',
    ),
    startLesson(),
    loadButtonsMain(),
    $(document).on('blur', 'input, textarea', function () {
      setTimeout(function () {
        window.scrollTo(document.body.scrollLeft, document.body.scrollTop);
      }, 0);
    }));
}),
  (window.onload = function () {
    $('.menuBar').css({ visibility: 'visible' });
  }),
  (currentSprite = {}));
var mobileInit = !0;
('mobile' == currentDevice && (mobileInit = !1),
  (onTimeUpdate = function () {
    this.currentTime >= currentSprite.start + currentSprite.length &&
      this.pause();
  }),
  (playSprite = function (a) {
    0 == mobileInit
      ? ((currentSprite = spriteData.blank),
        (audioSprite.currentTime = currentSprite.start),
        audioSprite.play(),
        (mobileInit = !0))
      : spriteData[a] &&
        spriteData[a].length &&
        ((currentSprite = spriteData[a]),
        (audioSprite.currentTime = currentSprite.start),
        audioSprite.play());
  }));
var meta,
  spriteData = {
    blank: { start: 0, length: 1.5 },
    quizGood: { start: 2, length: 1.5 },
    quizBad: { start: 4, length: 1.2 },
    pause: { start: 6, length: 1 },
    shimmer: { start: 8, length: 1 },
    transition: { start: 10, length: 1 },
    rollover: { start: 12, length: 0.5 },
    swoosh: { start: 13, length: 0.5 },
    endFail: { start: 14, length: 1.5 },
    endGood: { start: 16, length: 2 },
    endPass: { start: 19, length: 2.8 },
    lightBeep: { start: 23, length: 3.8 },
  },
  dateFormat = (function () {
    function u(a, t) {
      for (a = String(a), t = t || 2; a.length < t; ) a = '0' + a;
      return a;
    }
    var h = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g,
      $ =
        /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
      p = /[^-+\dA-Z]/g;
    return function (a, t, e) {
      var s = dateFormat;
      if (
        (1 != arguments.length ||
          '[object String]' != Object.prototype.toString.call(a) ||
          /\d/.test(a) ||
          ((t = a), (a = void 0)),
        (a = a ? new Date(a) : new Date()),
        isNaN(a))
      )
        throw SyntaxError('invalid date');
      'UTC:' == (t = String(s.masks[t] || t || s.masks.default)).slice(0, 4) &&
        ((t = t.slice(4)), (e = !0));
      var r = e ? 'getUTC' : 'get',
        o = a[r + 'Date'](),
        d = a[r + 'Day'](),
        i = a[r + 'Month'](),
        n = a[r + 'FullYear'](),
        l = a[r + 'Hours'](),
        c = a[r + 'Minutes'](),
        m = a[r + 'Seconds'](),
        g = a[r + 'Milliseconds'](),
        r = e ? 0 : a.getTimezoneOffset(),
        w = {
          d: o,
          dd: u(o),
          ddd: s.i18n.dayNames[d],
          dddd: s.i18n.dayNames[d + 7],
          m: i + 1,
          mm: u(i + 1),
          mmm: s.i18n.monthNames[i],
          mmmm: s.i18n.monthNames[i + 12],
          yy: String(n).slice(2),
          yyyy: n,
          h: l % 12 || 12,
          hh: u(l % 12 || 12),
          H: l,
          HH: u(l),
          M: c,
          MM: u(c),
          s: m,
          ss: u(m),
          l: u(g, 3),
          L: u(99 < g ? Math.round(g / 10) : g),
          t: l < 12 ? 'a' : 'p',
          tt: l < 12 ? 'am' : 'pm',
          T: l < 12 ? 'A' : 'P',
          TT: l < 12 ? 'AM' : 'PM',
          Z: e ? 'UTC' : (String(a).match($) || ['']).pop().replace(p, ''),
          o:
            (0 < r ? '-' : '+') +
            u(100 * Math.floor(Math.abs(r) / 60) + (Math.abs(r) % 60), 4),
          S: ['th', 'st', 'nd', 'rd'][
            3 < o % 10 ? 0 : (((o % 100) - (o % 10) != 10) * o) % 10
          ],
        };
      return t.replace(h, function (a) {
        return a in w ? w[a] : a.slice(1, a.length - 1);
      });
    };
  })();
((dateFormat.masks = {
  default: 'ddd mmm dd yyyy HH:MM:ss',
  shortDate: 'm/d/yy',
  mediumDate: 'mmm d, yyyy',
  longDate: 'mmmm d, yyyy',
  fullDate: 'dddd, mmmm d, yyyy',
  shortTime: 'h:MM TT',
  mediumTime: 'h:MM:ss TT',
  longTime: 'h:MM:ss TT Z',
  isoDate: 'yyyy-mm-dd',
  isoTime: 'HH:MM:ss',
  isoDateTime: "yyyy-mm-dd'T'HH:MM:ss",
  isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'",
}),
  (dateFormat.i18n = {
    dayNames: [
      'Sun',
      'Mon',
      'Tue',
      'Wed',
      'Thu',
      'Fri',
      'Sat',
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ],
    monthNames: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ],
  }),
  (Date.prototype.format = function (a, t) {
    return dateFormat(this, a, t);
  }),
  -1 != osType.indexOf('droid') &&
    (((meta = document.createElement('meta')).httpEquiv =
      'Content-Security-Policy'),
    (meta.content =
      "default-src *; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline'"),
    document.head.appendChild(meta)));
var brColor = document.createElement('meta');
if (
  (brColor.setAttribute('name', 'theme-color'),
  (brColor.content = '#202020'),
  document.getElementsByTagName('head')[0].appendChild(brColor),
  'mobile' == currentDevice)
) {
  var appSuspended = !1,
    phoneG = document.createElement('script');
  function onResume() {
    if (!sessionStorage.getItem('userEmailSTORE'))
      return (
        sessionStorage.clear(),
        localStorage.removeItem(lessonLanguage + 'timeClosed'),
        $('#loadLogo').show(),
        void setTimeout(function () {
          (sessionStorage.clear(), (window.location = '../index.html'));
        }, 100)
      );
    var a;
    (localStorage[lessonLanguage + 'timeClosed'] &&
      ((a = Date.now() - localStorage[lessonLanguage + 'timeClosed']),
      localStorage.removeItem(lessonLanguage + 'timeClosed'),
      36e5 < a &&
        (sessionStorage.clear(),
        $('#loadLogo').show(),
        setTimeout(function () {
          (sessionStorage.clear(), (window.location = '../index.html'));
        }, 100))),
      (appSuspended = !1));
  }
  function onPause() {
    ((localStorage[lessonLanguage + 'timeClosed'] = Date.now()),
      (appSuspended = !0));
  }
  function onMenubutton() {
    navigator.app.exitApp();
  }
  function onBackbutton(a) {
    (a.preventDefault(),
      $('#loadLogo').show(),
      setTimeout(function () {
        'iOS' == osType || -1 != osType.indexOf('droid')
          ? (window.location = '../home.html')
          : (window.location = '../index.html');
      }, 100));
  }
  function onDeviceReady() {
    (('iOS' != osType && -1 == osType.indexOf('droid')) ||
      (($('html').innerWidth() < 590 || $('html').innerHeight() < 590) &&
        screen.orientation.lock('portrait')),
      StatusBar.hide(),
      window.MobileAccessibility &&
        window.MobileAccessibility.usePreferredTextZoom(!1),
      -1 != osType.indexOf('droid') &&
        navigator.app.overrideButton('menubutton', !0),
      document.removeEventListener('backbutton', onBackbutton, !1),
      document.removeEventListener('menubutton', onMenubutton, !1),
      document.removeEventListener('pause', onPause, !1),
      document.removeEventListener('resume', onResume, !1),
      document.addEventListener('backbutton', onBackbutton, !1),
      document.addEventListener('menubutton', onMenubutton, !1),
      document.addEventListener('pause', onPause, !1),
      document.addEventListener('resume', onResume, !1));
  }
  (phoneG.setAttribute('src', '../cordova.js'),
    document.head.appendChild(phoneG),
    (window.onload = function () {
      document.addEventListener('deviceready', onDeviceReady, !1);
    }));
} else if ('windows' == osType || 'mac' == osType) {
  if ('windows' == osType)
    try {
      var gui = require('nw.gui'),
        win = gui.Window.get();
    } catch (a) {
      console.log('require not found');
    }
  function fullScreenOn() {
    isMac
      ? ($('#closeWinBtn, #closeWinBtn2').show(),
        $('#fullToggle').attr('src', '../common/min2.svg'))
      : $('#fullToggle').attr('src', '../common/min.svg');
  }
  function fullScreenOff() {
    isMac
      ? ($('#closeWinBtn, #closeWinBtn2').hide(),
        $('#fullToggle').attr('src', '../common/max2.svg'))
      : $('#fullToggle').attr('src', '../common/max.svg');
    var a = 0.8 * screen.height,
      t = 0.8 * screen.width;
    (win.resizeTo(t, a), win.setPosition('center'));
  }
  var isMac = !1,
    wasFull = !0;
  $(document).ready(function () {
    void 0 !== gui &&
      ('mac' == osType && (isMac = !0),
      $('body').append(
        '<div id="consoleLoad" style="position: fixed; z-index: 999999; bottom: 0; left: 0; width: 10px; height:10px;"></div>',
      ),
      $('#loginCover').append(
        '<img id="closeWinBtn2" src="../common/close.svg" class="smallIcon2" style="position: absolute; top: 3px; right: 2px;"/>',
      ),
      isMac
        ? $('.menuBtnContainer').append(
            '<img id="fullToggle" src="../common/min2.svg" class="smallIcon2" style="padding-left: 10px;"/><img id="closeWinBtn" src="../common/close.svg" class="smallIcon2" />',
          )
        : $('.menuBtnContainer').append(
            '<img id="minimizeBtn" src="../common/minimize.svg" class="smallIcon2" style="padding-left: 10px;"/><img id="fullToggle" src="../common/min.svg" class="smallIcon2" /><img id="closeWinBtn" src="../common/close.svg" class="smallIcon2" />',
          ),
      (win.title = lessonTitle),
      isMac ||
        ($('.menuBar').css({
          '-webkit-user-select': 'none',
          '-webkit-app-region': 'drag',
        }),
        $(
          '.smallIcon, .smallIcon2, #menuMain2, #verbBanner, .menuBtnContainer, .ui-slider-handle',
        ).css({ '-webkit-app-region': 'no-drag' }),
        0 == $('#tutorialBtn:visible').length &&
          $('.menuTitleContainer').css({ '-webkit-app-region': 'no-drag' }),
        $('#minimizeBtn').on('click', function () {
          win.minimize();
        })),
      $('#consoleLoad').dblclick(function () {
        win.isDevToolsOpen() ? win.closeDevTools() : win.showDevTools();
      }),
      $('#fullToggle').on('click', function () {
        win.isFullscreen
          ? win.leaveFullscreen()
          : ((localStorage.winHeight = win.height),
            (localStorage.winWidth = win.width),
            win.enterFullscreen());
      }),
      $(document).keyup(function (a) {
        27 == a.keyCode &&
          win.isFullscreen &&
          (win.leaveFullscreen(),
          $('#fullToggle').attr('src', '../common/max.svg'));
      }),
      $('#closeWinBtn, #closeWinBtn2').on('click', function () {
        (win.isFullscreen ||
          ((localStorage.winHeight = win.height),
          (localStorage.winWidth = win.width)),
          win.isFullscreen && isMac && win.leaveFullscreen(),
          win.close());
      }),
      win.on('enter-fullscreen', fullScreenOn),
      win.on('leave-fullscreen', fullScreenOff),
      'mobile' != currentDevice &&
        ($('.smallIcon2').on('mouseenter', function () {
          playSprite('rollover');
        }),
        $('.smallIcon2').hover(function () {
          $(this).toggleClass('fullOpacity');
        }),
        $('#fullToggle').hover(function () {
          ($('#arrowLabel').text('FULLSCREEN ON / OFF'),
            $('.instructions').toggleClass('showDiv'));
        }),
        $('#closeWinBtn').hover(function () {
          ($('#arrowLabel').text('CLOSE PROGRAM'),
            $('.instructions').toggleClass('showDiv'));
        }),
        $('#minimizeBtn').hover(function () {
          ($('#arrowLabel').text('MINIMIZE'),
            $('.instructions').toggleClass('showDiv'));
        })),
      win.isFullscreen
        ? ($('#fullToggle').attr('src', '../common/min.svg'),
          isMac && $('#fullToggle').attr('src', '../common/min2.svg'))
        : isMac
          ? ($('#fullToggle').attr('src', '../common/max2.svg'),
            $('#closeWinBtn, #closeWinBtn2').hide())
          : $('#fullToggle').attr('src', '../common/max.svg'),
      $(function () {
        var s = new (function (a, t, e) {
          return (
            (s = new gui.Menu()),
            (cut = new gui.MenuItem({
              label: a || 'Cut',
              click: function () {
                document.execCommand('cut');
              },
            })),
            (copy = new gui.MenuItem({
              label: t || 'Copy',
              click: function () {
                document.execCommand('copy');
              },
            })),
            (paste = new gui.MenuItem({
              label: e || 'Paste',
              click: function () {
                document.execCommand('paste');
              },
            })),
            s.append(cut),
            s.append(copy),
            s.append(paste),
            s
          );
        })();
        $(document).on('contextmenu', function (a) {
          (a.preventDefault(), s.popup(a.originalEvent.x, a.originalEvent.y));
        });
      }));
  });
}
