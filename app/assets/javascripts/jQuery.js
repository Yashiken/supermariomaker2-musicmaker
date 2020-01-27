$(document).ready(function () {
    let draw = 1;
    let erase = 0;
    let bpm = 0;
    let cbpm = 0;
    let scl = 0;
    let bpms = [28, 56, 85, 112, 140, 168, 196, 224, 250, 280, 310, 360];
    let bpms_note = [500, 250, 164.705882, 125, 100, 83.3333333, 71.4285714, 62.5, 56, 50, 45.1612903, 38.8888889];
    let originalbpm = [42, 70, 98, 126, 154, 182, 208, 237, 265, 295, 335];
    let objects = [
        "亀スクロール", "兎スクロール", "歩き", "虎スクロール", "こうそく溶岩リフト", "走り", "歩き(青コンベア順走)", "走り(赤コンベア順走)", "赤砲台 + メットこうら", "走り(青コンベア順走)", "赤砲台 + メットこうら(赤コンベア順走)", "赤砲台 + メット(青コンベア順走)"
    ];
    let instruments = [
        {
            name: "コイン(パラシュート)",
            instrument: "タンバリン"
            ///
        },
        {
            name: "10コイン(パラシュート)",
            instrument: "ウィンドチャイム"
            ///
        },
        {
            name: "くつクリボー",
            instrument: "アコーディオン1"
            ///
        },
        {
            name: "クイーンくつクリボー",
            instrument: "アコーディオン2"
            ///
        },
        {
            name: "ヨッシー",
            instrument: "ズルナ"
            ///

        },
        {
            name: "クリボー",
            instrument: "ピアノ"
            ///
        },
        {
            name: "クリボン",
            instrument: "ピアノ"
            ///
        },
        {
            name: "カキボー",
            instrument: "ホンキートンク"
            ///
        },
        {
            name: "カキボン",
            instrument: "ホンキートンク"
            ///
        },
        {
            name: "ノコノコ(緑)",
            instrument: "木琴"
            ///
        },
        {
            name: "ノコノコ(赤)",
            instrument: "鉄琴"
            ///
        },
        {
            name: "ハダカガメ(緑)",
            instrument: "犬"
            //なし
        },
        {
            name: "ハダカガメ(赤)",
            instrument: "猫"
            //なし
        },
        {
            name: "メット",
            instrument: "ガムラン"
            ///
        },
        {
            name: "トゲメット",
            instrument: "ハープシーコード"
            ///
        },
        {
            name: "トゲゾー",
            instrument: "トランペット"
            ///
        },
        {
            name: "パックンフラワー",
            instrument: "ピチカートストリングス"
            ///
        },
        {
            name: "ピーパックン",
            instrument: "ピチカートストリングス"
            ///
        },
        {
            name: "ファイアパックン",
            instrument: "ハーモニカ"
            ///
        },
        {
            name: "ブラックパックン",
            instrument: "電子ピアノ1"
            ///
        },
        {
            name: "ドッスン",
            instrument: "和太鼓"
            ///
        },
        {
            name: "チョロプー",
            instrument: "サントゥール"
            ///
        },
        {
            name: "ハンマーブロス",
            instrument: "オーバードライブギター"
            //
        },
        {
            name: "メガブロス",
            instrument: "エレキベース"
            //
        },
        {
            name: "ワンワン",
            instrument: "木魚"
            //
        },
        {
            name: "杭なしワンワン",
            instrument: "電子ピアノ2"
            //
        },
        {
            name: "ハナチャン",
            instrument: "鐘"
            //
        },
        {
            name: "ボムへい",
            instrument: "オーケストラヒット"
            //
        },
        {
            name: "カロン",
            instrument: "フルート"
            //
        },
        {
            name: "カメック",
            instrument: "コーラス"
            //
        },
        {
            name: "クッパクラウン",
            instrument: "シンセパッド"
            //
        },
        {
            name: "キラー砲台",
            instrument: "ティンパニ"
            //
        },
        {
            name: "砲台",
            instrument: "ティンパレス"
            //
        },
        {
            name: "Pスイッチ",
            instrument: "スネアドラム"
            //
        },
        {
            name: "POWブロック",
            instrument: "バスドラム"
            //
        },
        {
            name: "ジャンプ台(縦)",
            instrument: "クラッシュシンバル"
            //
        },
        {
            name: "ジャンプ台(横)",
            instrument: "クローズハイハット"
            //
        },
        {
            name: "トゲこんぼう",
            instrument: "ドラ"
        },
        {
            name: "スーパーキノコ",
            instrument: "ファミコン音"
            //
        },
        {
            name: "ファイアフラワー",
            instrument: "リコーダー"
            //
        },
        {
            name: "でかキノコ",
            instrument: "三味線"
            //
        },
        {
            name: "スーパーボールフラワー",
            instrument: "パイプオルガン"
            //
        },
        {
            name: "スーパースター",
            instrument: "オルゴール"
            //
        },
        {
            name: "1UPキノコ",
            instrument: "オルガン"
            //
        },
        {
            name: "くさったキノコ",
            instrument: "シンセベース"
            //
        },
        {
            name: "ツララ",
            instrument: "シンセベル"
            //
        },
        {
            name: "クッパ",
            instrument: "ディストーションギター"
            //
        },
        {
            name: "クッパJr.",
            instrument: "サックス"
            //
        },
        {
            name: "ブンブン",
            instrument: "ホルン"
            //
        }
    ];
    let note = 0.0;
    let notes = "";
    let select_ob = "";
    let text = "";
    let chord = 1;
    let scll = 0;
    let measures = [
        $("#measure1").offset().left - 200,
        $("#measure2").offset().left - 82,
        $("#measure3").offset().left - 82,
        $("#measure4").offset().left - 82,
        $("#measure5").offset().left - 82,
        $("#measure6").offset().left - 82,
        $("#measure7").offset().left - 82,
        $("#measure8").offset().left - 82,
        $("#measure9").offset().left - 82,
        $("#measure10").offset().left - 82,
        $("#measure11").offset().left - 82,
        $("#measure12").offset().left - 82,
        $("#measure13").offset().left - 82,
        $("#measure14").offset().left - 82, //裏面
        $("#measure15").offset().left - 82,
        $("#measure16").offset().left - 82,
        $("#measure17").offset().left - 82,
        $("#measure18").offset().left - 82,
        $("#measure19").offset().left - 82,
        $("#measure20").offset().left - 82,
        $("#measure21").offset().left - 82,
        $("#measure22").offset().left - 82,
        $("#measure23").offset().left - 82,
        $("#measure24").offset().left - 82,
        $("#measure25").offset().left - 82,
        $("#measure26").offset().left - 82
    ];
    let sorces = [
        "/h-do.wav", "/h-shi.wav", "/h-lasha.wav", "/h-la.wav", "/h-sosha.wav", "/h-so.wav", "/h-fasha.wav", "/h-fa.wav", "/h-mi.wav", "/h-lesha.wav", "/h-le.wav", "/h-dosha.wav", "/l-do.wav", "/l-shi.wav", "/l-lasha.wav", "/l-la.wav", "/l-sosha.wav", "/l-so.wav", "/l-fasha.wav", "/l-fa.wav", "/l-mi.wav", "/l-lesha.wav", "/l-le.wav", "/le-dosha.wav", "/l-do2.wav"
    ];
    let folders = [
        "/ピアノ", "/アコーディオン1", "/アコーディオン2", "/ウィンドチャイム", "/エレキベース", "/オーケストラヒット", "/オーバードライブギター", "/ハーモニカ", "/オルガン", "/オルゴール", "/ガムラン", "/クラッシュシンバル", "/クローズハイハット", "/サックス", "/サントゥール", "/シンセパッド", "/シンセベース", "/スネアドラム", "/ズルナ", "/タンバリン", "/ディストーションギター", "/ティンパレス", "/トランペット", "/ハープシーコード", "/パイプオルガン", "/バスドラム", "/ピチカートストリングス", "/ファミコン音", "/フルート", "/ホルン", "/ホンキートンク", "/リコーダー", "/三味線", "/鐘", "/鉄琴", "/電子ピアノ1", "/電子ピアノ2", "/木魚", "/木琴", "/和太鼓"
    ];
    let ob_name = 0;
    let scroll_count = 1;
    //入力に対し近いBPMを表示
    function change_bpm(bpm) {
        for (let i = 0; i <= 11; i++) {
            if (bpm <= originalbpm[i]) {
                return bpms[i];
            }
        }
    }
    //変換されたBPMに応じてスクロール手段を表示
    function change_object(bpm) {
        for (let i = 0; i <= 11; i++) {
            if (bpm == bpms[i]) {
                return objects[i];
            }
        }
    }
    //高さに応じて音を鳴らす
    function musical_scal(row, text) {
        for (let i = 1; i <= 25; i++) {
            if (row == i) {
                var s1 = new Audio(text + sorces[row - 1]);
                return s1.play();
            }
        }
    }

    function play_back(row, text) {
        musical_scal(row, text);
    }
    //BPMに応じて16分の間隔を調整
    function note_check() {
        for (let i = 0; i < bpms.length; i++) {
            if (scl == bpms[i]) {
                note = bpms_note[i];
            }
        }
    }
    //遅延
    function diray() {}
    let counta = 1;
    //和音を再生
    function playchord(num) {
        let row = $(".play_" + num).closest("tr").index();
        row += 1;
        let text = $(".play_" + num).text();
        let row2 = $(".play__" + num).closest("tr").index();
        row2 += 1;
        let text2 = $(".play__" + num).text();
        let row3 = $(".play___" + num).closest("tr").index();
        row3 += 1;
        let text3 = $(".play___" + num).text();
        let row4 = $(".play____" + num).closest("tr").index();
        row4 += 1;
        let text4 = $(".play____" + num).text();
        num += 1;
        setTimeout(play_back, note * (num - 1), row, text);
        setTimeout(play_back, note * (num - 1), row2, text2);
        setTimeout(play_back, note * (num - 1), row3, text3);
        setTimeout(play_back, note * (num - 1), row4, text4);
        counta += 1;
    }
    //左から順番に再生
    function playback() {
        note_check();
        for (let i = 1; i <= 416; i++) {
            if ($(".play" + i).hasClass("play_" + i) || $(".play" + i).hasClass("play__" + i) || $(".play" + i).hasClass("play___" + i) || $(".play" + i).hasClass("play____" + i)) {
                playchord(i);
            } else {
                setTimeout(diray, note * (i - 1));
            }
        }
    }
    //再生するためのクラスを付与
    function addclass(col) {
        for (let i = 1; i <= 416; i++) {
            if (col == i) {
                if (!$(".play" + i).hasClass("play_" + i)) {
                    return "play_" + i;
                } else if (!$(".play" + i).hasClass("play__" + i)) {
                    return "play__" + i;
                } else if (!$(".play" + i).hasClass("play___" + i)) {
                    return "play___" + i;
                } else if (!$(".play" + i).hasClass("play____" + i)) {
                    return "play____" + i;
                }
            }
        }
    }
    //再生するためのクラスを取り除く
    function removeclass(col, row) {
        for (let i = 1; i <= 416; i++) {
            if (col == i) {
                if ($(".play" + i).hasClass("play_" + i) && $(".r" + row).hasClass("play_" + i)) {
                    return "play_" + i;
                } else if ($(".play" + i).hasClass("play__" + i) && $(".r" + row).hasClass("play__" + i)) {
                    return "play__" + i;
                } else if ($(".play" + i).hasClass("play___" + i) && $(".r" + row).hasClass("play___" + i)) {
                    return "play___" + i;
                } else if ($(".play" + i).hasClass("play____" + i) && $(".r" + row).hasClass("play____" + i)) {
                    return "play____" + i;
                }
            }
        }
    }
    //パーツ名と楽器名を関連付け
    function instruments_check() {
        for (let num = 0; num <= 48; num++) {
            if (select_ob == instruments[num].name) {
                if (ob_name == 0) {
                    return instruments[num].instrument;
                } else {
                    return instruments[num].name;
                }
            }
        }
    }
    //消しボタン
    $(".erase").click(function () {
        erase = 1;
        draw = 0;
        $(".items-list").removeClass("show-list");
    });
    //リストの非表示を取り消し
    $(".buttons2").click(function () {
        erase = 0;
        draw = 1;
        $(".items-list").addClass("show-list");
    });
    //全消しボタン
    function removeplay() {
        $(".piano td").removeClass();
        $(".piano td").css("background-color", "")
    }
    $(".allerase").click(function () {
        let allerase = confirm("配置したパーツをリセットします。よろしいですか？");
        if (allerase == true) {
            $(".piano_table td").text("");
            removeplay();
            $(".items-list").removeClass("show-list");
            erase = 0;
            draw = 1;
        }
    });
    //マス目クリック
    $(".piano_table td").click(function () {
        let row = $(this).closest("tr").index();
        row += 1;
        let col = this.cellIndex;
        col += 1;
        //console.log("Row:" + row + "Col:" + col);
        if (select_ob != "" && draw == 1) {
            if ($(this).text() == "") {
                $(this).addClass(addclass(col));
            }
            $(this).text(instruments_check());
            $(this).css("background-color", "#ffe4e1");
            $("td", $(this).parent().prevAll().eq(0)).eq($(this).index()).text(select_ob + "+雲");
            let text = $(this).text();
            musical_scal(row, text);
        } else {
            $(this).text("");
            $("td", $(this).parent().prevAll().eq(0)).eq($(this).index()).text("");
            $(this).css("background-color", "");
            $(this).removeClass(removeclass(col, row));
        }
    });
    //変換クリック
    $(".trans").click(function () {
        bpm = document.getElementById("bpm").value;
        afterbpm.value = change_bpm(bpm);
        scl = afterbpm.value;
        transportation.value = change_object(scl);
        console.log(scl);
    });
    //ゲームスキンクリック
    $(".gameskin").click(function () {
        $(".selecting").removeClass("selecting");
        $(".cansee").removeClass("cansee");
        var clickedIndex = $(".gameskin").index($(this));
        $(this).addClass("selecting");
        $(".object_btn").eq(clickedIndex).addClass("cansee");
    });
    //選択中のパーツ
    $(".ob_btn").click(function () {
        $(".selecting2").removeClass("selecting2");
        $(this).addClass("selecting2");
        select_ob = $(this).text();
        $("#select_p").text(select_ob);
        for (let num = 0; num <= 48; num++) {
            if (select_ob == instruments[num].name) {
                $("#select_m").text(instruments[num].instrument);
            }
        }
    });
    //選択中のボタン
    $("button.buttons1").click(function () {
        $("button.buttons1").removeClass("border");
        $(this).addClass("border");
    });
    //再生ボタン
    $("#playback").click(function () {
        if (scl >= 28) {
            playback();
        } else {
            alert("BPMが入力されていません");
        }
    });
    //小節線クリック
    for (let i = 1; i <= 26; i++) {
        $("#ameasure" + i).click(function () {
            $(".piano_box").animate({
                scrollLeft: measures[i - 1]
            }, {
                queue: false
            });
        });
    }
    //エディット画面横スクロール
    $(".piano_box").on("scroll", function () {
        scll = $(".piano_box").scrollLeft();
        scll += 1;
        for (let i = 1; i <= 26; i++) {
            if (scll < measures[i] && scll > measures[i - 1]) {
                $("#ameasure" + i).css("border", "4px solid");
                $("#ameasure" + i).css("border-color", "red");
            }
            if (scll < measures[i - 1] || scll > measures[i]) {
                $("#ameasure" + i).css("border", "2px solid");
                $("#ameasure" + i).css("border-color", "black");
            }
        }
    });
    $("#ameasure1").css("border", "4px solid");
    $("#ameasure1").css("border-color", "red");
    //スクロール追従
    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 180) {
            $(".opsions").addClass("fixed");
            $(".edit_table1").addClass("fixed");
        } else {
            $(".opsions").removeClass("fixed");
            $(".edit_table1").removeClass("fixed");
        }
    });
});
