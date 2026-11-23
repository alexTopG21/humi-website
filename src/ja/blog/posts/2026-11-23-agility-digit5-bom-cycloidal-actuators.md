---
title: "Digit 5のBOMは15万ドルから3万ドルへ：Agilityの自社製サイクロイド式アクチュエータから読む減速機市場"
date: 2026-11-23
description: "2026年11月にNasdaq上場した米Agilityが公開したDigit 5の部品コスト（約15万ドルから量産時約3万ドル）と自社製サイクロイド式アクチュエータを整理し、日本の減速機メーカーへの含意を検討します。"
translation: /blog/agility-digit5-bom-cycloidal-actuators/
templateEngineOverride: md
---

## はじめに

2026年11月5日、米国の人型ロボットメーカーAgilityが、Nasdaqで「AGLT」の銘柄名により取引を始めました。同社は発表のなかで、米国で初めて上場した純粋な人型ロボット企業であると位置づけています。上場そのものは各社が報じているため、本稿では背景として簡単に触れるにとどめます。

本稿で注目したいのは、上場の過程で出てきた**部品コスト（BOM: Bill of Materials、部品表）の数字**と、同社が「中核技術」と位置づける**自社設計のサイクロイド式アクチュエータ**です。Agilityは投資家向け説明会や規制当局向けの提出書類で、Digit 5のコスト構造と目標値を示しています。人型ロボットの価格を左右する要素が、具体的な数字として現れている珍しい事例です。

人型ロボットでは、関節まわり、とくに減速機（モーターの高速・低トルクの回転を、低速・高トルクに変える装置）がコスト低減の主要な論点とされています。Agilityの資料は、関節を自社設計し、カメラやセンサなどの標準部品は提携先から調達するという方針を示しており、減速機市場を考える際の試金石になりえます。日本はサイクロイド式とハーモニック式の両方の減速機で強い立場にあるため、国内の部品メーカーにも無関係ではありません。

以下では、(1) 上場の背景、(2) サイクロイド減速機の基礎、(3) 公開された数字の整理、(4) コスト低減の3つの柱、(5) 中核技術としてのアクチュエータ、(6) 数字を読む際の注意点、(7) 減速機市場の論点、(8) 日本への示唆の順に見ていきます。本稿の数字はすべて末尾の参考資料に記載されたものです。資料ごとに前提が異なるため、比較には注意が必要です。

## 上場の背景と、市場の初動

今回の上場にはSPAC（特別買収目的会社）の仕組みが使われています。SPACは、自身は事業を持たない上場会社が未上場企業と合併することで、その企業を実質的に上場させる方式です。Agilityの場合、相手方はChurchill Capital Corp XI（CCXI）です。

Bloombergによると、手元資金は経費支払い前で約4.65億ドルで、そのうち約2.01億ドルはFoxconnが主導した投資です。

市場の反応について、The Robot Reportは、株価が10ドルのSPAC基準価格に対して11.26ドルで寄り付き、報道時点では10.30ドルだったと伝えています。初日の値動きだけで事業の評価を判断することはできません。本稿では、これを投資面で確認できる唯一のシグナルとして記録しておきます。

## サイクロイド減速機の基礎

コスト議論に入る前に、関節の構造を確認します。人型ロボットの関節は一般に、モーター、減速機、位置や力を測るセンサ、そしてそれらを制御する電子回路で構成されます。ここでは減速機に注目します。

**サイクロイド減速機**は、偏心したカム（回転軸が中心からずれた部品）で円板（サイクロイド板）を動かし、外周のピンと噛み合わせて減速する方式です。日本で広く知られているのは、ナブテスコのRV減速機です。Substackの解説記事によると、RV減速機はこの方式に分類され、重い荷重がかかるベースや肩の関節に向くとされています。ただし、この記述は信頼度の比較的低い情報源に基づくため、一般論として扱うのが妥当です。

もう一つの主要な方式がハーモニック減速機です。当ブログの前回の記事（中国ハーモニックリデューサーの価格競争）で扱ったのはこちらの系統です。今回のAgilityの話題は、それとは別の減速機ファミリーと、自社設計アクチュエータという設計方針に関わる点で異なります。

## Digit 5のコスト構造：公開された数字を並べる

Agilityが公開した数字を整理します。

| 時点 | 数字 | 内容 | 出典 |
|---|---|---|---|
| 提出書類（9月のForm S-4に記載、Form DRSにも記載） | Digit 4のBOM 約12.5万ドル／台 | 規制当局向け文書 | SEC提出文書、Humanoids Daily |
| 9月15日 | 年1,000台で約7.5万ドル | Digit 5発表時の目標 | The AI Insider |
| 9月15日 | 年10,000台で約3万ドル | 同上 | The AI Insider |
| 10月6日 | Digit 5の立ち上げ時の部品コスト 約15万ドル | 投資家向け説明会 | Humanoids Daily |

ここで注意したいのは、Digit 4の約12.5万ドルとDigit 5の約15万ドルが、同じ定義で比較できるとは限らないことです。Digit 5では可搬重量の向上や充電時間の短縮が図られているため、構成や「立ち上げ時」の定義が違う可能性があります。ただし、資料にはこの差を説明する記述がありませんでした。

目標値は生産規模に強く依存します。年1,000台で約7.5万ドル、年10,000台で約3万ドルという目標は、量産効果を前提としています。立ち上げ時の約15万ドルから約3万ドルへの低減は、単純計算で約80%の削減になります。この大きさを考えると、個別部品の値下げだけでなく、設計変更と調達条件の変更が同時に必要になることが分かります。

受注面では、Humanoids Dailyの記事によると、約3億ドルの注文は1,000台分で、ユースケースが実証されるごとに段階的に実行されます。つまり、全額が確定した売上というより、条件付きの受注残です。同記事は、RaaS（Robots-as-a-Service、ロボットを月額などで提供する事業形態）の製品マージンは、年産1,000台に達するまではおよそ50%と述べています。この数字も量産規模が前提になっています。

## コスト低減の3つの柱

Humanoids Dailyの記事によると、AgilityのCOOは、計画されたコスト低減を次の3つで説明しています。

1. **自社設計サイクロイド式アクチュエータの再設計**: 同社のアクチュエータは、DigitのBOMの約25%を占めるとされています。
2. **標準部品のサプライ提携**: カメラ、センサ、基板などの標準的な部品を、サプライヤーとの提携で調達します。
3. **数量に応じた値引き**: 計画された低減のうち約20%を占めるとされています。

読み方に注意が必要な点があります。第1の柱の約25%は**BOM全体に占める比率**で、第3の柱の約20%は**計画された低減額に占める比率**です。基準が異なるため、単純に足し合わせることはできません。また、資料は残りの内訳を示していません。つまり、3つの柱のうち、資料から低減への寄与度が分かるのは数量値引きだけです。

あえて粗い試算をすると、立ち上げ時の約15万ドルの25%は約3.75万ドルです。もし量産時の約3万ドルでもアクチュエータの比率が同じ25%なら、約7,500ドルになります。これは仮定にもとづく計算で、資料の主張ではありません。25%の基準が立ち上げ時の金額なのか、別の時点の金額なのかも確認できません。それでも、約3.75万ドルから数千ドル規模への引き下げが必要になりうるという見方は、自社アクチュエータの設計変更が低減計画の中心にある理由を理解するうえで参考になります。

## 「中核技術」としてのサイクロイド式アクチュエータ

SECに提出された文書（Form DRS）では、Digitの独自のサイクロイド式アクチュエータが、Agilityの中核となる技術的差別化要素のうち「最も重要な例（the most significant example）」として挙げられています。同社はこの周辺に相当な知的財産を保有し、設計は繰り返しの衝撃への耐性と精密な力制御を目的としているとされています。Humanoids Dailyも、Digit 5の新しい脚部が、繰り返しのリフティングのために開発された独自のサイクロイド式アクチュエータ技術を使うと伝えています。

歩行や荷物の持ち上げでは、関節に繰り返し荷重や衝撃がかかります。設計目標がそこに置かれているのは自然です。ただし、資料からは、なぜサイクロイド方式を選んだのか、ハーモニック方式などと比べてどの程度の性能差があるのかは読み取れません。この点は今後の技術開示を待つ必要があります。

## 数字を読む際の注意点

どの数字がどの程度確かかを区別しておきます。

**(a) 仕様は予備的な推定値です。** Digit 5の仕様として、可搬重量50ポンド（22.7kg）、重量129kg、稼働時間90分、充電時間9分が挙げられています。しかしAgilityの製品ページ（APA Robot掲載）は、これらを量産前のハードウェアに基づく予備的な推定値としています。早期アクセスは2027年上期、一般提供は2027年末までとされています。humanoid.guideのDigit 5ページは「Not Verified（未検証）」の表示です。

**(b) 米国調達の比率は確認されていません。** 投資家向け資料には、部品の約75%を米国から調達するという記述があるとされています。しかし、noteの筆者は、Agilityが完全なBOMや原産国のリストを公表していないと指摘しています。同じ記事は、部品が日本、台湾、韓国などから輸入されている可能性にも触れています。

**(c) 目標値は量産が前提です。** 約3万ドルは年10,000台の生産を前提とした数字です。年1,000台の段階で同水準に届くとは、資料は述べていません。年1,000台時点の目標は約7.5万ドルです。

**(d) 「提出書類の数字」と「説明会の数字」を区別すべきです。** 約12.5万ドルのDigit 4のBOMと約3億ドルの受注残は、9月のForm S-4に含まれていたと、Humanoids Dailyの記事は述べています。一方、10月の説明会で示された約15万ドルは、説明会での数字です。

## 減速機市場の論点

ここからは、減速機メーカーの視点で論点を整理します。

**第一に、サイクロイド減速機のシェアは資料によって割れています。** Jared Watkinsの分析では、関節型ロボット向けRV減速機でナブテスコのシェアは約35%とされています。一方、noteの記事（香川友志氏）やEcconomiの記事では約60%とされ、60%は企業側の推定値だという指摘もあります。本稿の資料だけでは、どちらが妥当か判断できません。

**第二に、Agilityの設計にRV減速機が合うかどうかは、議論の余地があります。** MarketWiseとMenFemの記事は、RV減速機は重負荷向けの部品であり、軽量な人型ロボットの関節に通常選ばれるものではないという趣旨を述べています。一方で、Agilityのサイクロイド式アクチュエータがRV減速機と同系統の部品なのか、どの程度の大きさなのかは、資料からは分かりません。

**第三に、Agilityが減速機を外部調達しているのか、自社製造しているのかも、資料では分かりません。** 外部調達なら、特定の減速機メーカーに直接の売上影響がありえます。自社製造なら、外部の減速機メーカーへの影響は限定的です。今後の開示で最も確認したい点です。

なお、信頼度の比較的低い情報源ですが、ナブテスコは人型ロボットの需要に対応してRV減速機の生産能力を2026年までに倍増させる計画だと述べたとされています。また、同社は2023年にスロバキアのサイクロイド減速機メーカーSpineaを買収したとも伝えられています。いずれも一次資料での確認が必要です。

## 日本への示唆

資料の範囲で言えることと言えないことを分けます。

**減速機メーカー**: Agilityのサイクロイド方式は、前回扱ったハーモニック減速機の価格競争とは別の減速機ファミリーに関わります。ただし、サイクロイド部品を外部から買うのか自社で作るのかが不明なため、日本メーカーへの直接的な売上影響は分かりません。RV減速機の重負荷向けという位置づけと、人型関節への適合性という問いも未解決です。

**モーター、センサ、基板などの標準部品**: Agilityは、カメラ、センサ、基板などでサプライヤー提携によるコスト低減を計画しています。部品メーカーにとっては機会になりえますが、資料は特定の日本のサプライヤーを挙げていません。

**人型ロボットの導入を検討する日本の製造業**: 資料が扱うのは、Agilityの米国調達に関する説明と、倉庫や工場での利用事例までです。日本の顧客や導入事例の記述はなく、本稿では導入可能性を評価できません。

**日本の投資家**: 資料には日本の株主に関する数字がありません。上場初日の値動きは確認できる唯一のシグナルですが、それだけで中長期の判断はできません。

## 次に確認したいポイント

- 完全なBOMと部品の原産国リスト（米国調達比率の裏付け）
- 減速機やアクチュエータの調達先（外部調達か自社製造か）
- 2027年上期の早期アクセス時点での、実際の重量、可搬重量、稼働時間
- Digit 4とDigit 5のBOMの定義の違い
- サイクロイド減速機の市場シェアに関する、信頼できる一次データ

## まとめ

- Agilityは2026年11月5日にNasdaqで取引を開始し、米国初の純粋な人型ロボット上場企業と発表しました。
- Digit 5の立ち上げ時の部品コストは約15万ドルで、年1,000台で約7.5万ドル、年10,000台で約3万ドルを目標としています。
- コスト低減の柱は、自社設計のサイクロイド式アクチュエータ（BOMの約25%）、標準部品のサプライ提携、数量値引き（計画された低減の約20%）です。基準が異なるため、足し合わせはできません。
- 仕様は予備的な推定値で、米国調達比率の裏付けも不足しています。
- 減速機市場では、ナブテスコのシェアについて資料が食い違い、Agilityが減速機を外部調達しているかも不明です。
- 日本への影響は、減速機、標準部品、導入、投資のいずれも、現時点では確認できない部分が多く残っています。

## 参考資料

- [Agility investor day coverage（Humanoids Daily）](https://www.humanoidsdaily.com/news/agility-investor-day-digit-5-launch-costs-and-a-300m-order-that-unlocks-skill-by-skill)
- [Agility Digit 5: The Humanoid Robot Heading to Wall Street（EIF blog）](https://blog.eif.am/agility-digit-5-humanoid-robot-wall-street/)
- [Churchill Capital Corp XI - Form DRS（SEC）](https://www.sec.gov/Archives/edgar/data/0002074973/000121390026110722/filename1.htm)
- [Agility Robotics Unveils Digit 5 With Higher Payload, Faster Charging and New Safety System（The AI Insider）](https://theaiinsider.tech/2026/09/15/agility-robotics-unveils-digit-5-with-higher-payload-faster-charging-and-new-safety-system/)
- [Agility unveils Digit 5, designed to work closer to people（Humanoids Daily）](https://www.humanoidsdaily.com/news/agility-unveils-digit-5-designed-to-work-closer-to-people)
- [Digit 5 - Robot Details, Use Case and Specifications（APA Robot）](https://www.aparobot.com/robots/digit-5)
- [Agility Becomes First U.S. Publicly Listed Pure-Play Humanoid Robotics Company（Agility Robotics）](https://www.agilityrobotics.com/content/agility-becomes-first-u-s-publicly-listed-pure-play-humanoid-robotics-company-begins-trading-today-on-nasdaq-as-aglt)
- [Agility Robotics begins trading on Nasdaq（The Robot Report）](https://www.therobotreport.com/agility-robotics-begins-trading-on-nasdaq/)
- [Nvidia-Backed Humanoid Maker Agility Goes Public in First for the US（Bloomberg）](https://www.bloomberg.com/news/articles/2026-11-05/nvidia-backed-humanoid-maker-agility-goes-public-in-first-for-the-us)
- [Japan's Quiet Monopoly Inside Every Robot Joint（Substack）](https://automotivecloudwatch.substack.com/p/japans-quiet-monopoly-inside-every)
- [6-4. Core Components of Robot Joints（香川友志, note）](https://note.com/kagawatomo/n/n5ef8c54539ff?hl=en)
- [Nabtesco Corporation - The Infinite Unknown（Jared Watkins）](https://www.jaredwatkins.com/research/robotics/actuators/nabtesco/)
- [I Broke Down the Humanoid Robot Bill of Materials（Ecconomi）](https://www.ecconomi.com/en/posts/humanoid-robot-bill-of-materials-joint-suppliers)
- [4 Robotics Stocks to Buy for the Humanoid Robot Boom（MarketWise）](https://marketwise.com/money-megatrends/elon-musk-is-betting-big-on-this-industry-and-these-four-stocks-could-soar/)
- [Nabtesco（MenFem）](https://menfem.com/companies/nabtesco)
- [How Low Can the Cost of Agility Robotics' "Digit" Go?（香川友志, note）](https://note.com/kagawatomo/n/nf53f5125609c?hl=en)
- [Agility Robotics Digit 5 Specs & Price（humanoid.guide）](https://humanoid.guide/product/digit-5/)
