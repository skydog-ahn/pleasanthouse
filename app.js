/* ==========================================================================
   Pleasant House - Interactive Scripts & Multi-Language Engine
   Languages: Korean (default), Japanese, English
   ========================================================================== */

// 1. Multi-Language Translations Dictionary
const i18nData = {
  ko: {
    announcement_badge: "1日 1組 限定",
    announcement_text: "하루 오직 한 팀만을 위한 프라이빗 독채 고민가 & 힐링 E-Bike 투어 패키지 예약 접수 중",
    announcement_cta: "예약 문의하기 →",
    nav_about: "소개",
    nav_pillars: "4대 시너지",
    nav_stay: "객실 & 시설",
    nav_tour: "E-Bike 투어",
    nav_pricing: "패키지 & 요금",
    nav_location: "오시는 길",
    nav_faq: "FAQ",
    cta_book: "예약 문의",
    hero_kicker: "ASUKA VILLAGE, NARA · 1 DAY 1 GROUP EXCLUSIVE",
    hero_title: "천년의 숨결을 품은 아스카의 들판,<br><span class=\"text-gold\">단 한 팀만을 위한</span> 따뜻한 쉼의 집",
    hero_desc: "한일 부부의 인생 2막이 담긴 150m² 프라이빗 고민가 독채 스테이.<br>매일 아침 갓 구운 천연효모 빵과 조식, 아스카의 숨은 비경을 누비는 E-Bike 가이드 투어, 그리고 사람의 온기가 머무는 살롱.",
    feat1_title: "150m² 고민가 독채",
    feat1_sub: "1일 1팀 한정 프라이빗",
    feat2_title: "수제 베이커리 조식",
    feat2_sub: "갓 구운 천연발효 빵 & 커피",
    feat3_title: "E-Bike 가이드 투어",
    feat3_sub: "아스카 문화유산 전일정 동행",
    feat4_title: "감성 스냅 사진 증정",
    feat4_sub: "여행의 영화 같은 순간 기록",
    label_checkin: "체크인 희망일",
    label_guests: "인원",
    opt_couple: "커플 / 2인 (권장)",
    opt_solo: "1인 솔로 리트리트",
    opt_3: "성인 3인 (패밀리)",
    opt_4: "성인 4인 (소규모 그룹)",
    label_package: "선호 패키지",
    pkg_signature_opt: "시그니처 익스피리언스 (숙박+조식+투어+스냅)",
    pkg_retreat_opt: "심플 스테이 리트리트 (숙박+수제조식)",
    pkg_anniv_opt: "애니버서리 스페셜 (기념일 커스텀)",
    btn_check_plan: "실시간 견적 & 상담",
    story_kicker: "PHILOSOPHY & STORY",
    story_title: "인생의 두 번째 막, 마음을 나누는 쉼터",
    story_lead: "Pleasant House는 단순한 숙박 시설이 아닙니다. 도시를 떠나 천년 고도 나라의 아스카무라에 둥지를 튼 한일 부부가 여행자들과 삶의 따뜻한 여유를 나누기 위해 정성껏 빚어낸 복합 문화 힐링 공간입니다.",
    story_c1_title: "삶의 질과 환대를 최우선으로",
    story_c1_desc: "최대 이윤을 추구하기보다는 여유 있는 라이프스타일과 방문객 한 분 한 분과의 진솔한 교감을 지향합니다. 하루 단 1팀에게만 온전한 공간과 진심 어린 시간을 봉헌합니다.",
    story_c2_title: "지붕 없는 야외 박물관, 아스카무라",
    story_c2_desc: "고대 아스카 시대의 숨결이 깃든 고분과 수수께끼 석조물, 계단식 다랑이논이 그림처럼 펼쳐진 곳. 쫓기듯 스쳐 지나가는 관광이 아닌, 머물며 사색하는 깊이 있는 여행을 선물합니다.",
    story_c3_title: "한일 문화의 따스한 가교",
    story_c3_desc: "한국인 남편과 일본인 아내가 함께 운영하며, 언어의 장벽 없이 가장 섬세하고 친절한 로컬 안내와 고향 집 같은 편안한 케어를 경험하실 수 있습니다.",
    host_quote_text: "바쁜 일상에서 벗어나 사랑하는 이와 조용히 눈을 맞추고, 향긋한 빵 냄새와 함께 아침을 맞이하며, 바람결 따라 자전거를 달리는 자유. 저희가 아스카에서 찾은 이 소박하고도 깊은 행복을 여러분과 나누고 싶습니다.",
    host_name: "안(Ahn) 부부 올림",
    host_role: "Pleasant House 호스트 & 가이드",
    pillars_kicker: "FOUR SYNERGIES",
    pillars_title: "Pleasant House를 이루는 4가지 감동",
    pillars_lead: "숙박, 수제 베이커리, E-Bike 가이드 투어, 그리고 살롱 카페의 결합 — 여행의 모든 순간이 하나의 아름다운 이야기로 이어집니다.",
    p1_badge: "PILLAR 01 · 宿泊",
    p1_heading: "150m² 고풍스러운 전통 고민가의 온전한 사유",
    p1_desc: "나라 전통 가옥의 웅장한 목조 대들보와 다다미의 포근함, 그리고 모던한 럭셔리 설비가 조화를 이룹니다. 다른 투숙객 없이 정원과 툇마루(엔가와), 히노끼 감성의 욕조까지 오직 귀하만의 프라이빗한 휴식을 위해 준비됩니다.",
    p1_pt1: "✓ 1일 1팀 전용(최대 4인) 완전한 프라이버시 보장",
    p1_pt2: "✓ 최고급 프리미엄 킹 베딩 & 포근한 온돌/다다미 룸",
    p1_pt3: "✓ 일본식 사계절 정원이 내려다보이는 툇마루 다도 공간",
    link_view_room: "객실 상세 보기 →",
    p2_badge: "PILLAR 02 · 朝食・製パン",
    p2_heading: "아침을 깨우는 천연 효모 수제 빵 & 아스카 로컬 조식",
    p2_desc: "매일 아침 오븐에서 바로 구워져 나오는 천연 발효 사워도우와 바삭한 크루아상. 아스카의 깨끗한 토양에서 자란 제철 채소, 신선한 달걀, 수제 잼, 그리고 정성껏 내린 핸드드립 커피가 따뜻한 아침을 선물합니다.",
    p2_pt1: "✓ 당일 아침 직접 구워내는 프랑스산 버터 & 유기농 밀가루 빵",
    p2_pt2: "✓ 아스카 특산 딸기(아스카루비), 무화과, 로컬 채소 샐러드",
    p2_pt3: "✓ 우천 시 호스트와 함께하는 프라이빗 제빵 클래스 전환 가능",
    p3_badge: "PILLAR 03 · 自転車ツアー",
    p3_heading: "고대의 숨결을 달리는 힐링 E-Bike 가이드 투어",
    p3_desc: "전기 어시스트 자전거(E-Bike)로 언덕길도 가볍고 상쾌하게! 일반 단체 관광객이 닿지 못하는 아스카무라의 오솔길, 이나부치 다랑이논의 황금빛 물결, 이시부타이 고분의 장엄함을 호스트의 흥미진진한 해설과 함께 만납니다.",
    p3_pt1: "✓ 파워풀한 최신형 전동 자전거 & 헬멧, 음료 전원 제공",
    p3_pt2: "✓ 호스트 단독 동행 프라이빗 코스 (계절별 맞춤 루트)",
    p3_pt3: "✓ 여행자 안전을 위한 레크리에이션 상해·배상책임 보험 가입",
    link_view_tour: "투어 코스 자세히 보기 →",
    p4_badge: "PILLAR 04 · カフェサロン・撮影",
    p4_heading: "대화와 음악이 흐르는 살롱, 그리고 시네마틱 스냅",
    p4_desc: "오래된 고재 서가와 LP 턴테이블이 놓인 살롱 카페에서 현지 로컬 차와 담소를 나눕니다. 투어와 숙박 중에는 호스트가 전문 장비로 두 분의 자연스러운 미소와 아스카의 절경을 담은 고화질 스냅 사진과 숏폼 비디오를 선물해 드립니다.",
    p4_pt1: "✓ 여행 중 촬영된 원본 및 보정본 사진 30장+ 증정",
    p4_pt2: "✓ 저녁 시간 살롱에서 즐기는 따뜻한 차와 교류의 시간",
    p4_pt3: "✓ 결혼기념일, 생일, 프로포즈를 위한 서프라이즈 지원",
    stay_kicker: "ROOM & AMENITIES",
    stay_title: "오직 두 분만을 위한 고요한 공간",
    stay_lead: "약 150m²(45평) 규모의 일본 전통 목조 가옥을 현대적 라이프스타일에 맞게 정밀 리노베이션하였습니다.",
    spec1_t: "독채 전용 면적",
    spec1_d: "약 150m² (넓은 거실, 메인 침실, 전통 다실, 다이닝 키친, 전용 정원)",
    spec2_t: "침실 구성",
    spec2_d: "럭셔리 킹사이즈 플랫폼 베드 1개 + 추가 다다미용 최고급 이불 세트",
    spec3_t: "욕실 & 휴식",
    spec3_d: "편백 향 가득한 욕조, 오가닉 어메니티, 호텔식 대형 타월 및 가운",
    spec4_t: "키친 & 카페 바",
    spec4_d: "발뮤다 토스터기, 핸드드립 커피 바, 전기포트, 냉장고, 고급 티 세트",
    spec5_t: "스마트 편의시설",
    spec5_d: "초고속 광대역 Wi-Fi, 마샬 블루투스 스피커, 공기청정기, 냉난방 완비",
    spec6_t: "주차 & 역 픽업",
    spec6_d: "전용 무료 주차 공간 완비, 긴테쓰 아스카역 무료 왕복 픽업 서비스",
    gal_ext: "사계절 정원 & 툇마루",
    gal_bed: "모던 럭셔리 침실",
    gal_bake: "수제 베이커리 다이닝",
    gal_salon: "살롱 & 라이브러리",
    tour_kicker: "SIGNATURE HERITAGE TOUR",
    tour_title: "아스카무라 힐링 E-Bike 투어 코스",
    tour_lead: "걷기에는 너무 멀고, 자동차로는 스쳐 지나치기 쉬운 아스카의 아름다움. 최신 전기자전거로 편안하게 바람을 가르며 천년의 역사 속으로 여행을 떠납니다.",
    t_step1_t: "Pleasant House 출발 & 안전 브리핑",
    t_step1_d: "체형에 맞춘 E-Bike 세팅, 헬멧 착용, 안전 수칙 안내 후 상쾌한 아침 공기를 마시며 전원길로 출발합니다.",
    t_step2_t: "이시부타이 고분 (石舞台古墳) & 거석 유적 탐방",
    t_step2_d: "소가노 우마코의 무덤으로 알려진 거대한 석실 고분. 웅장한 돌의 무게감과 고대 역사의 비밀을 호스트의 이야기로 듣습니다.",
    t_step3_t: "이나부치 다랑이논 (稲渕の棚田) & 포토 스냅",
    t_step3_d: "‘일본의 계단식 논 100선’에 빛나는 비경. 봄의 신록, 가을의 붉은 피안화와 황금빛 들판을 배경으로 인생 사진을 남깁니다.",
    t_step4_t: "아스카 로컬 카페 런치 & 휴식",
    t_step4_d: "현지 농가에서 직접 재배한 신선한 채소와 향토 요리를 맛볼 수 있는 숨은 로컬 레스토랑에서 여유로운 점심을 즐깁니다.",
    t_step5_t: "아스카데라 (飛鳥寺) & 수수께끼 석조물",
    t_step5_d: "일본에서 가장 오래된 대불이 모셔진 유서 깊은 사찰과 미스터리한 고대 석조 유적을 둘러본 뒤 Pleasant House로 귀환합니다.",
    rain_policy_t: "우천 시 100% 안심 프로그램 운영",
    rain_policy_d: "기상 악화로 자전거 운행이 어려운 날에는 당황하실 필요가 없습니다. Pleasant House 살롱에서 즐기는 '천연효모 수제 베이킹 클래스', '아스카 역사 스토리텔링 살롱', 또는 차량을 이용한 '에도 전통거리(이마이초) 산책 투어'로 안전하게 대체 진행됩니다.",
    price_kicker: "TRANSPARENT VALUE",
    price_title: "합리적이고 투명한 패키지 요금 안내",
    price_lead: "숙박, 수제 식사, 투어, 스냅 촬영을 개별 예약할 때의 번거로움과 비용(약 108,000엔 상당)을 덜어드리고, 약 30% 절감된 합리적인 올인원 패키지 요금을 제공합니다.",
    badge_best: "가장 인기 있는 시그니처 플랜",
    p_plan1_name: "시그니처 익스피리언스 (1박 2일)",
    p_plan1_desc: "숙박 + 수제조식 + E-Bike 가이드 투어 + 스냅 촬영 올인원",
    price_note_sig: "평일: 68,000엔 | 주말·공휴일: 75,000엔",
    p1_f1: "✓ 150m² 프라이빗 고민가 독채 1박 (1일 1팀 전용)",
    p1_f2: "✓ 당일 아침 갓 구운 천연효모 수제 베이커리 & 로컬 조식",
    p1_f3: "✓ 호스트 전담 아스카 문화유산 E-Bike 가이드 투어 (전동자전거 & 헬멧 대여 포함)",
    p1_f4: "✓ 여행의 순간을 담은 전문 스냅 사진 (30장 이상 고화질 전송)",
    p1_f5: "✓ 투어 참가자 전원 레크리에이션 상해보험 자동 가입",
    p1_f6: "✓ 긴테쓰 아스카역 무료 왕복 픽업 서비스",
    p1_f7: "✓ 우천 시 수제 베이킹 클래스 & 아스카 역사 살롱 무료 대체",
    btn_book_sig: "시그니처 패키지 예약 문의",
    p_plan2_name: "심플 스테이 리트리트 (1박 2일)",
    p_plan2_desc: "조용한 고택에서의 사색과 휴식을 원하는 분들을 위한 스테이",
    price_note_ret: "평일: 42,000엔 | 주말·공휴일: 48,000엔",
    p2_f1: "✓ 150m² 프라이빗 고민가 독채 1박 (1일 1팀 전용)",
    p2_f2: "✓ 당일 아침 갓 구운 천연효모 수제 베이커리 & 로컬 조식",
    p2_f3: "✓ 웰컴 로컬 티 & 계절 디저트 제공",
    p2_f4: "✓ 살롱 라이브러리 및 음악 감상 공간 자유 이용",
    p2_f5: "✓ 긴테쓰 아스카역 무료 왕복 픽업 서비스",
    p2_f6: "✕ 전일정 가이드 투어 및 스냅 촬영 (불포함, 개별 옵션 신청 가능)",
    btn_book_ret: "심플 리트리트 예약 문의",
    addon_tag: "SPECIAL ANNIVERSARY",
    addon_title: "소중한 기념일, 감동을 더하는 특별 맞춤 옵션",
    addon_desc: "생일, 결혼기념일, 프러포즈, 부모님 효도 여행을 위한 '수제 기념일 케이크 & 스파클링 와인' (+¥8,000), '아스카 로컬 프라이빗 디너 예약 대행' 등 원하시는 감동의 순간을 맞춤 연출해 드립니다.",
    calc_heading: "실시간 예상 요금 계산기",
    calc_sub: "일정과 옵션을 선택하시면 예상 결제 금액을 엔화(JPY)와 원화(KRW)로 바로 확인하실 수 있습니다.",
    calc_plan_label: "패키지 종류",
    calc_day_label: "숙박 요일",
    calc_weekday: "평일 (일~목)",
    calc_weekend: "주말 / 일본 공휴일 (금, 토, 연휴)",
    calc_nights_label: "숙박 일수",
    calc_addon_label: "기념일 특별 옵션",
    calc_opt_none: "선택 안 함",
    calc_opt_cake: "수제 케이크 & 스파클링 와인 (+8,000엔)",
    calc_opt_dinner: "로컬 디너 2인 코스 예약 (+14,000엔)",
    calc_opt_full: "풀 스페셜 (케이크+와인+디너) (+20,000엔)",
    calc_total_label: "예상 합계 금액 (세금 및 보험료 포함)",
    btn_apply_calc: "이 조건으로 예약 문의 작성 ↓",
    loc_kicker: "LOCATION & ACCESS",
    loc_title: "오시는 길 & 픽업 서비스 안내",
    loc_lead: "오사카, 교토, 간사이 국제공항에서 1시간 이내에 닿을 수 있는 천년의 힐링 안식처입니다.",
    loc_transit_t: "주요 거점에서의 대중교통",
    pickup_title: "긴테쓰 아스카역 무료 픽업",
    pickup_desc: "사전에 도착 시간을 알려주시면 호스트가 직접 긴테쓰 아스카역(飛鳥駅) 또는 카시하라진구마에역(橿原神宮前駅)으로 마중 나갑니다.",
    loc_address_t: "주소 및 주변 관광 안내",
    btn_open_gmap: "구글 지도에서 크게 보기 ↗",
    faq_kicker: "QUESTIONS & ANSWERS",
    faq_title: "자주 묻는 질문 (FAQ)",
    faq_q1: "Q. 1일 1팀 전용 숙소라는 것은 다른 손님과 마주치지 않는다는 뜻인가요?",
    faq_a1: "네, 맞습니다. Pleasant House는 오직 하루 단 한 팀(기본 2인, 최대 4인)에게만 150m² 독채 가옥과 전용 정원을 온전히 제공합니다. 다른 여행자의 방해 없이 완벽한 프라이버시와 평온함을 누리실 수 있습니다.",
    faq_q2: "Q. 일본어를 잘 못하는데 의사소통에 문제가 없나요?",
    faq_a2: "전혀 걱정하지 않으셔도 됩니다. 호스트는 한국인 남편과 일본인 아내로 이루어진 부부로서, 한국어, 일본어, 영어로 완벽한 소통이 가능합니다. 예약 상담부터 투어 가이드, 긴급 상황 대처까지 모국어로 편안하게 안내받으실 수 있습니다.",
    faq_q3: "Q. E-Bike(전기자전거)를 타본 적이 없거나 자전거가 서툴러도 투어가 가능한가요?",
    faq_a3: "Pleasant House가 제공하는 E-Bike는 조작이 매우 직관적이고 안정적이며 페달을 살짝만 밟아도 언덕을 힘들이지 않고 오를 수 있습니다. 출발 전 호스트가 1:1 안전 브리핑과 주행 연습을 돕습니다. 만약 자전거 주행이 전혀 불가능하신 경우, 호스트 전용 차량을 이용한 프라이빗 드라이브 투어로 변경도 가능합니다.",
    faq_q4: "Q. 비가 오거나 날씨가 안 좋으면 투어는 어떻게 되나요?",
    faq_a4: "우천 시에는 참가자의 안전을 위해 야외 자전거 투어를 중단하고, Pleasant House 실내에서 진행되는 '천연효모 제빵 클래스', '아스카 역사 문화 살롱', 또는 차량을 이용한 '에도 전통거리(이마이초) 산책 투어'로 무료 전환됩니다. 비가 와도 더욱 낭만적인 추억을 만드실 수 있습니다.",
    faq_q5: "Q. 식사는 어떻게 제공되나요? (조식 & 석식)",
    faq_a5: "매일 아침 호스트가 당일 새벽 직접 구워낸 천연발효 빵과 아스카산 제철 유기농 채소, 샐러드, 계란 요리, 핸드드립 커피가 조식으로 무료 제공됩니다. 저녁 식사의 경우 아스카무라의 유명 로컬 전통 맛집 또는 프라이빗 코스 요리 전문점 예약 및 왕복 차량 픽업을 정성껏 도와드립니다.",
    faq_q6: "Q. 예약 및 취소, 환불 규정은 어떻게 되나요?",
    faq_a6: "1일 1팀 전용 운영 특성상, 체크인 14일 전까지는 전액 100% 무료 취소가 가능하며, 7일 전 50%, 3일 전 20%, 2일 전~당일은 환불이 불가합니다. 예약 문의서를 제출해 주시면 24시간 이내에 예약 확정 안내와 결제 링크(카드 결제 / 계좌이체)를 개별 안내해 드립니다.",
    book_kicker: "RESERVATION & INQUIRY",
    book_title: "Pleasant House 예약 문의",
    book_desc: "하루 단 1팀에게만 허락된 공간이기에, 빠른 마감이 예상됩니다. 희망하시는 일정과 옵션을 남겨주시면 호스트가 일정을 확인한 후 24시간 이내에 정성껏 회신드립니다.",
    f_name: "예약자 성함 (한글/영문) *",
    f_phone: "연락처 (휴대전화) *",
    f_email: "이메일 주소 *",
    f_checkin: "체크인 희망일 *",
    f_checkout: "체크아웃 희망일 *",
    f_guests: "투숙 인원 *",
    f_package: "원하시는 패키지 *",
    f_special: "특별 요청사항 (기념일 축하, 알레르기 식단, 픽업 시간 등)",
    f_consent: "개인정보 수집 및 예약 상담 연락에 동의합니다.",
    btn_submit_res: "예약 문의서 제출하기",
    succ_t: "예약 문의가 정상 접수되었습니다!",
    succ_d: "소중한 문의 감사드립니다. 호스트가 일정을 확인한 후 남겨주신 연락처/이메일로 24시간 이내에 상세 견적 및 확정 안내를 드리겠습니다.",
    btn_new_inquiry: "새 문의 작성하기",
    foot_desc: "나라현 아스카무라의 아름다운 자연과 고대 역사 속에서 삶의 쉼표를 선물하는 1일 1팀 한정 체험형 고민가 살롱 & 게스트하우스.",
    foot_quick: "빠른 이동",
    foot_info: "운영 및 위치 정보"
  },
  ja: {
    announcement_badge: "1日 1組 限定",
    announcement_text: "一日一組だけの完全プライベート古民家宿 ＆ 癒しのE-Bikeツアー ご予約受付中",
    announcement_cta: "ご予約・お問い合わせ →",
    nav_about: "宿について",
    nav_pillars: "4つの柱",
    nav_stay: "客室＆設備",
    nav_tour: "E-Bikeツアー",
    nav_pricing: "プラン＆料金",
    nav_location: "アクセス",
    nav_faq: "よくある質問",
    cta_book: "ご予約相談",
    hero_kicker: "奈良・明日香村 · 1日1組限定のプライベートリトリート",
    hero_title: "千年の時を紡ぐ明日香の息吹、<br><span class=\"text-gold\">一日一組だけの</span> 温もりあふれる宿",
    hero_desc: "日韓夫婦のセカンドライフから生まれた150m²の古民家宿。<br>毎朝焼き立ての天然酵母パン朝食、明日香の秘境を巡るE-Bikeガイドツアー、そして人が集う温かなサロン。",
    feat1_title: "150m² 古民家一棟貸し",
    feat1_sub: "一日一組限定の贅沢",
    feat2_title: "手作りパンの朝食",
    feat2_sub: "焼き立て天然酵母パン＆珈琲",
    feat3_title: "E-Bikeガイドツアー",
    feat3_sub: "明日香の文化財を専属案内",
    feat4_title: "記念スナップ写真贈呈",
    feat4_sub: "映画のような旅の瞬間を記録",
    label_checkin: "チェックイン希望日",
    label_guests: "ご宿泊人数",
    opt_couple: "カップル / 2名様（推奨）",
    opt_solo: "1名様（ソロリトリート）",
    opt_3: "大人3名様（ご家族）",
    opt_4: "大人4名様（小グループ）",
    label_package: "ご希望プラン",
    pkg_signature_opt: "シグネチャー（宿泊＋朝食＋ツアー＋写真）",
    pkg_retreat_opt: "シンプルステイ（宿泊＋手作り朝食）",
    pkg_anniv_opt: "アニバーサリー（記念日カスタム）",
    btn_check_plan: "見積もり＆ご相談",
    story_kicker: "PHILOSOPHY & STORY",
    story_title: "人生の第二幕、心を結ぶやすらぎの家",
    story_lead: "Pleasant House（サロン・プレザント）は、単なる宿泊施設ではありません。都会を離れ奈良・明日香村に移住した夫婦が、旅人と人生の温かな余白を分かち合うために創り上げた体験型ゲストハウスです。",
    story_c1_title: "ライフスタイルと温かな歓待",
    story_c1_desc: "利益の最大化ではなく、お客様一人ひとりとの真心の通う交流を何よりも大切にしています。一日に一組様だけをお迎えし、丁寧な時間をお届けします。",
    story_c2_title: "屋根のない野外博物館、明日香村",
    story_c2_desc: "古代の息吹を宿す古墳や巨石遺跡、棚田が広がる美しい村。通り過ぎるだけの観光ではなく、暮らすように深く味わう旅を提案します。",
    story_c3_title: "日韓をつなぐ温かな架け橋",
    story_c3_desc: "韓国出身の夫と日本人の妻が共におもてなし。日本語・韓国語・英語でストレスなく、実家に帰ってきたような安心感をお届けします。",
    host_quote_text: "忙しい日常を少し離れて、大切な人と語らい、焼きたてパンの香りで目覚め、風を感じて自転車を走らせる。私たちが明日香で見つけた豊かな幸せを、ぜひご体験ください。",
    host_name: "アン（Ahn）夫妻より",
    host_role: "Pleasant House ホスト＆専属ガイド",
    pillars_kicker: "FOUR SYNERGIES",
    pillars_title: "Pleasant Houseが誇る4つの体験",
    pillars_lead: "宿泊、焼き立てパン朝食、E-Bikeツアー、そしてサロンカフェ。すべてが重なり合い、一生の記憶に残る滞在を紡ぎます。",
    p1_badge: "PILLAR 01 · 宿泊",
    p1_heading: "150m² 趣ある伝統古民家を贅沢に独り占め",
    p1_desc: "奈良の伝統建築の梁と畳の心地よさに、現代の快適性を美しく融合。他のお客様を気にすることなく、日本庭園を望む縁側や檜の香るお風呂で心ほどける時間をお過ごしいただけます。",
    p1_pt1: "✓ 1日1組限定（最大4名様）完全なプライバシー確保",
    p1_pt2: "✓ 高級キングサイズベッド＆快適なお布団スペース",
    p1_pt3: "✓ 四季折々の日本庭園を眺める縁側ティーラウンジ",
    link_view_room: "客室詳細を見る →",
    p2_badge: "PILLAR 02 · 朝食・製パン",
    p2_heading: "朝の目覚めを彩る天然酵母パン＆明日香野菜の朝食",
    p2_desc: "毎朝オーブンから香ばしく焼き上がる自家製サワードウやクロワッサン。明日香の肥沃な大地で育った旬の野菜、卵、特製ジャム、挽きたてドリップ珈琲が最高の朝をお届けします。",
    p2_pt1: "✓ 当日早朝に焼き上げるフランス産バター使用の特製パン",
    p2_pt2: "✓ あすかルビー苺や地場野菜をふんだんに使ったプレート",
    p2_pt3: "✓ 雨天時はホスト直伝のプライベートパン作り教室に変更可能",
    p3_badge: "PILLAR 03 · 自転車ツアー",
    p3_heading: "古代の風を駆け抜けるプライベートE-Bikeツアー",
    p3_desc: "電動アシスト付き自転車で、起伏のある明日香村の道も軽やかに快適に！石舞台古墳、稲渕の棚田、飛鳥寺など、ガイドブックには載らない隠れた絶景へホストがご案内します。",
    p3_pt1: "✓ 最新型電動アシスト自転車・ヘルメット・ドリンク完備",
    p3_pt2: "✓ ホスト専任のエスコート（季節に合わせた特別ルート）",
    p3_pt3: "✓ 万一に備えたレクリエーション傷害・賠償責任保険加入",
    link_view_tour: "ツアー詳細を見る →",
    p4_badge: "PILLAR 04 · カフェサロン・撮影",
    p4_heading: "音楽と語らいのサロン、そして記念スナップ撮影",
    p4_desc: "古材の本棚とレコードが流れるサロンで、香り高いお茶とともにゆったりとした夜を。ツアー中にはホストがプロ機材で自然なお二人の笑顔と明日香の絶景を高画質スナップで撮影しプレゼントします。",
    p4_pt1: "✓ 高画質スナップ写真（30カット以上データ贈呈）",
    p4_pt2: "✓ 夜のサロンで楽しむ特別なお茶とおもてなし",
    p4_pt3: "✓ 記念日・誕生日・プロポーズのサプライズ対応",
    stay_kicker: "ROOM & AMENITIES",
    stay_title: "お二人だけの静謐なプライベート空間",
    stay_lead: "約150m²（約45坪）の歴史ある日本家屋を贅沢にリノベーションいたしました。",
    spec1_t: "専有延床面積",
    spec1_d: "約150m²（広々としたリビング、主寝室、和室茶室、ダイニングキッチン、専用庭）",
    spec2_t: "ベッド構成",
    spec2_d: "キングサイズ特注プラットフォームベッド1台 ＋ 高級敷布団セット",
    spec3_t: "浴室・リラクゼーション",
    spec3_d: "檜の香るバスタブ、オーガニックアメニティ、高級今治タオル完備",
    spec4_t: "キッチン・カフェバー",
    spec4_d: "BALMUDAトースター、ハンドドリップ珈琲セット、ケトル、冷蔵庫",
    spec5_t: "スマート設備",
    spec5_d: "高速Wi-Fi、Marshallスピーカー、空気清浄機、冷暖房完備",
    spec6_t: "駐車場・送迎",
    spec6_d: "専用無料駐車場完備、近鉄飛鳥駅からの無料往復送迎対応",
    gal_ext: "日本庭園＆縁側",
    gal_bed: "主寝室（キングベッド）",
    gal_bake: "朝食ダイニング",
    gal_salon: "サロン＆ライブラリ",
    tour_kicker: "SIGNATURE HERITAGE TOUR",
    tour_title: "明日香村 E-Bikeヘリテージツアー",
    tour_lead: "歩くには遠く、車では見逃してしまう明日香の素朴な美しさ。最新のE-Bikeで心地よい風を感じながら、悠久の歴史を巡ります。",
    t_step1_t: "Pleasant House出発 ＆ 安全講習",
    t_step1_d: "体格に合わせたサドル調整、操作方法や安全ルールを確認後、爽やかな朝の田園へ出発します。",
    t_step2_t: "石舞台古墳 ＆ 巨石遺跡探訪",
    t_step2_d: "蘇我馬子の墓と伝えられる巨大な石室。歴史の壮大さと古代のロマンをガイドの分かりやすい解説とともに体感します。",
    t_step3_t: "稲渕の棚田 ＆ 記念スナップ撮影",
    t_step3_d: "「日本の棚田百選」に選ばれた絶景。彼岸花や黄金の稲穂、新緑を背景にお二人の最高の記念写真を撮影します。",
    t_step4_t: "地元カフェでのランチ ＆ ご休憩",
    t_step4_d: "明日香村の地元野菜をたっぷり使った郷土料理や隠れ家カフェで、のんびりとランチを楽しみます。",
    t_step5_t: "飛鳥寺 ＆ 酒船石など古代遺跡巡り",
    t_step5_d: "日本最古の大仏が鎮座する名刹や、謎に包まれた古代の石造物を巡り、宿へと帰着します。",
    rain_policy_t: "雨天時も安心の代替プログラム",
    rain_policy_d: "天候不良で自転車運行が難しい場合でもご安心ください。サロンでの「自家製パン作り体験」「明日香歴史サロン」、またはお車での「重要伝統的建造物群保存地区・今井町巡り」へ振替可能です。",
    price_kicker: "TRANSPARENT VALUE",
    price_title: "明瞭で価値あるパッケージ料金",
    price_lead: "宿泊・手作り朝食・E-Bikeツアー・撮影を別々に手配する手間や費用（約108,000円相当）を大幅に抑え、約30%お得なオールインワン価格を設定しております。",
    badge_best: "一番人気のシグネチャープラン",
    p_plan1_name: "シグネチャー・エクスペリエンス（1泊2日）",
    p_plan1_desc: "宿泊＋手作り朝食＋E-Bikeガイドツアー＋写真撮影 オールインワン",
    price_note_sig: "平日: 68,000円 | 週末・祝日: 75,000円（2名様税込）",
    p1_f1: "✓ 150m² 古民家一棟貸し 1泊（一日一組限定）",
    p1_f2: "✓ 当日早朝に焼き上げる天然酵母パン＆旬の明日香野菜朝食",
    p1_f3: "✓ ホスト専任 明日香E-Bikeガイドツアー（電動自転車・ヘルメット付）",
    p1_f4: "✓ プロ機材による高画質記念スナップ写真データ（30カット以上）",
    p1_f5: "✓ レクリエーション傷害保険・賠償責任保険加入",
    p1_f6: "✓ 近鉄飛鳥駅 無料往復送迎",
    p1_f7: "✓ 雨天時パン教室または歴史サロンへの安心無料振替",
    btn_book_sig: "シグネチャープランを予約相談",
    p_plan2_name: "シンプルステイ・リトリート（1泊2日）",
    p_plan2_desc: "静寂な古民家で読書や休息を愛でる方のための滞在プラン",
    price_note_ret: "平日: 42,000円 | 週末・祝日: 48,000円（2名様税込）",
    p2_f1: "✓ 150m² 古民家一棟貸し 1泊（一日一組限定）",
    p2_f2: "✓ 当日早朝に焼き上げる天然酵母パン＆旬の明日香野菜朝食",
    p2_f3: "✓ ウェルカムローカルティー＆季節のお茶菓子",
    p2_f4: "✓ サロンライブラリー＆音楽鑑賞スペースのご利用",
    p2_f5: "✓ 近鉄飛鳥駅 無料往復送迎",
    p2_f6: "✕ ガイドツアー・スナップ撮影（含まれません。個別追加可）",
    btn_book_ret: "シンプルステイを予約相談",
    addon_tag: "SPECIAL ANNIVERSARY",
    addon_title: "特別な記念日を彩るカスタムオプション",
    addon_desc: "誕生日、結婚記念日、プロポーズに最適な「手作りケーキ＆スパークリングワイン（+8,000円）」や「地元シェフによる特別ディナー手配」など、真心を込めて演出いたします。",
    calc_heading: "リアルタイム料金計算ツール",
    calc_sub: "ご希望の条件を選択すると、概算料金（円／ウォン換算）を即時にご確認いただけます。",
    calc_plan_label: "プラン選択",
    calc_day_label: "宿泊曜日",
    calc_weekday: "平日（日〜木）",
    calc_weekend: "週末・日本の祝日（金・土・連休）",
    calc_nights_label: "宿泊日数",
    calc_addon_label: "記念日オプション",
    calc_opt_none: "選択なし",
    calc_opt_cake: "手作りケーキ＆スパークリングワイン（+8,000円）",
    calc_opt_dinner: "ローカルディナー2名コース手配（+14,000円）",
    calc_opt_full: "フルスペシャル（ケーキ＋ワイン＋ディナー）（+20,000円）",
    calc_total_label: "合計概算金額（消費税・保険料込み）",
    btn_apply_calc: "この条件でお問い合わせフォームに入力 ↓",
    loc_kicker: "LOCATION & ACCESS",
    loc_title: "アクセス・送迎のご案内",
    loc_lead: "大阪・京都・関西空港から約1時間でたどり着ける、千年の歴史と緑に包まれたやすらぎの里です。",
    loc_transit_t: "主要ターミナルからのアクセス",
    pickup_title: "近鉄飛鳥駅からの無料送迎",
    pickup_desc: "事前にお知らせいただければ、近鉄飛鳥駅または橿原神宮前駅までホストがお車でお迎えに伺います。",
    loc_address_t: "所在地・周辺観光案内",
    btn_open_gmap: "Googleマップで開く ↗",
    faq_kicker: "QUESTIONS & ANSWERS",
    faq_title: "よくあるご質問（FAQ）",
    faq_q1: "Q. 1日1組限定とは、他のお客様と一緒になることはありませんか？",
    faq_a1: "はい、ございません。150m²の古民家と専用日本庭園を、一日一組様（基本2名、最大4名）だけで貸切にてご利用いただけます。",
    faq_q2: "Q. 日本語や韓国語での対応は可能ですか？",
    faq_a2: "ホストは韓国出身の夫と日本人の妻です。日本語、韓国語、英語に完全対応しておりますので、言葉の心配なく安心してお過ごしいただけます。",
    faq_q3: "Q. 電動アシスト自転車（E-Bike）に乗ったことがなくても大丈夫ですか？",
    faq_a3: "非常に扱いやすく、少しペダルを踏むだけで坂道も楽々登れます。出発前にホストが乗り方を丁寧にお教えします。どうしても自転車が難しい場合は、お車でのドライブツアーへの変更も承ります。",
    faq_q4: "Q. 雨の日のツアーはどうなりますか？",
    faq_a4: "雨天時は安全を考慮し、サロンでの「手作りパン教室」「明日香歴史サロン」、またはお車での「今井町伝統街並みツアー」へと無料で変更いたします。",
    faq_q5: "Q. 食事の提供について教えてください。",
    faq_a5: "朝食は毎朝焼き立てのパンと明日香野菜を無料でご用意します。夕食は村内の隠れ家名店のご紹介・ご予約代行および無料送迎を承ります。",
    faq_q6: "Q. キャンセル規定はどうなっていますか？",
    faq_a6: "14日前までは無料キャンセル可能です。7日前50%、3日前20%、前日・当日は100%のキャンセル料を申し受けます。お問い合わせ後、詳細をご案内いたします。",
    book_kicker: "RESERVATION & INQUIRY",
    book_title: "ご予約・お問い合わせ",
    book_desc: "一日一組様限定のため、お早めのご連絡をおすすめいたします。日程とご希望内容をお知らせいただければ、24時間以内に丁寧にお返事いたします。",
    f_name: "お名前（漢字／ローマ字） *",
    f_phone: "お電話番号 *",
    f_email: "メールアドレス *",
    f_checkin: "チェックイン希望日 *",
    f_checkout: "チェックアウト希望日 *",
    f_guests: "ご宿泊人数 *",
    f_package: "ご希望プラン *",
    f_special: "ご要望（記念日のお祝い、食事のアレルギー、送迎時刻など）",
    f_consent: "個人情報の取り扱いおよび予約連絡に同意します。",
    btn_submit_res: "予約問い合わせを送信する",
    succ_t: "お問い合わせありがとうございます！",
    succ_d: "内容を受信いたしました。空室状況を確認の上、24時間以内にご案内メールをお送りいたします。",
    btn_new_inquiry: "新しいお問い合わせを作成",
    foot_desc: "奈良県明日香村の豊かな自然と歴史に抱かれた、1日1組限定の体験型古民家ゲストハウス＆サロン。",
    foot_quick: "クイックリンク",
    foot_info: "施設・運営情報"
  },
  en: {
    announcement_badge: "1 Group / Day Only",
    announcement_text: "Exclusive 1-Group-Per-Day Heritage Kominka Retreat & E-Bike Tour in Asuka, Nara — Reservations Open",
    announcement_cta: "Inquire Now →",
    nav_about: "About",
    nav_pillars: "4 Pillars",
    nav_stay: "Stay & Specs",
    nav_tour: "E-Bike Tour",
    nav_pricing: "Plans & Rates",
    nav_location: "Access",
    nav_faq: "FAQ",
    cta_book: "Book Stay",
    hero_kicker: "ASUKA VILLAGE, NARA · 1 DAY 1 GROUP EXCLUSIVE",
    hero_title: "Where Ancient Japanese Heritage Meets Serenity:<br><span class=\"text-gold\">A Private Retreat</span> Reserved Just for You",
    hero_desc: "A restored 150m² Kominka townhouse hosted by a warm Korean-Japanese couple.<br>Freshly baked artisanal bread every morning, scenic guided E-Bike heritage tours, and a soulful cultural salon.",
    feat1_title: "150m² Private Kominka",
    feat1_sub: "1 Group Per Day Exclusive",
    feat2_title: "Artisanal Breakfast",
    feat2_sub: "Warm Sourdough & Fresh Drip Coffee",
    feat3_title: "Guided E-Bike Tour",
    feat3_sub: "Explore Asuka's Historic Ruins",
    feat4_title: "Commemorative Snaps",
    feat4_sub: "Cinematic High-Res Photos Included",
    label_checkin: "Desired Check-in",
    label_guests: "Guests",
    opt_couple: "Couple / 2 Guests (Recommended)",
    opt_solo: "1 Guest (Solo Retreat)",
    opt_3: "3 Adults (Family)",
    opt_4: "4 Adults (Small Group)",
    label_package: "Preferred Package",
    pkg_signature_opt: "Signature Experience (Stay + Breakfast + Tour + Photos)",
    pkg_retreat_opt: "Simple Stay Retreat (Stay + Artisanal Breakfast)",
    pkg_anniv_opt: "Anniversary Special (Custom Celebration)",
    btn_check_plan: "Check Rates & Inquire",
    story_kicker: "PHILOSOPHY & STORY",
    story_title: "A Second Life, Shared with Heartfelt Hospitality",
    story_lead: "Pleasant House is not just another hotel. Created by an international couple who chose peaceful Asuka Village for their second chapter of life, this retreat is dedicated to quiet luxury, genuine human connections, and slow living.",
    story_c1_title: "Lifestyle & Quality Over Scale",
    story_c1_desc: "We host only one party per day to give you our undivided care and attention, crafting an unforgettable sanctuary away from the hustle of city life.",
    story_c2_title: "Asuka: An Open-Air Museum",
    story_c2_desc: "Asuka is the historic birthplace of Japan, filled with ancient megaliths, burial tombs, and lush terraced rice fields. Ideal for slow, immersive exploration.",
    story_c3_title: "A Bridge Between Cultures",
    story_c3_desc: "Hosted by a Korean husband and Japanese wife, we welcome you in fluent Korean, Japanese, and English with warmth that feels like coming home.",
    host_quote_text: "To wake up to the scent of warm oven-fresh bread, share meaningful conversations in our salon, and cycle alongside ancient hills — we warmly invite you to experience this gentle joy in Asuka.",
    host_name: "From the Ahn Couple",
    host_role: "Hosts & Local Heritage Guides",
    pillars_kicker: "FOUR SYNERGIES",
    pillars_title: "The Four Synergy Pillars of Pleasant House",
    pillars_lead: "Private accommodation, artisanal baking, guided cycling tours, and an intimate salon cafe seamlessly intertwine to create your perfect getaway.",
    p1_badge: "PILLAR 01 · STAY",
    p1_heading: "Exclusive 150m² Traditional Japanese Kominka Residence",
    p1_desc: "Experience high wooden beams, authentic tatami aromas, a private Zen rock garden, and a Hinoki cypress bath paired with modern king bedding and thoughtful amenities.",
    p1_pt1: "✓ 1 group per day exclusive privacy (up to 4 guests)",
    p1_pt2: "✓ Luxury king platform bed & premium traditional futon sets",
    p1_pt3: "✓ Private Japanese garden with tea veranda (Engawa)",
    link_view_room: "View Room Details →",
    p2_badge: "PILLAR 02 · BAKERY",
    p2_heading: "Warm Oven-Baked Sourdough & Fresh Asuka Breakfast",
    p2_desc: "Start each day with sourdough bread and pastries baked right before your eyes, accompanied by organic Asuka seasonal berries, farm vegetables, eggs, and specialty pour-over coffee.",
    p2_pt1: "✓ Baked fresh each morning with French butter and natural yeast",
    p2_pt2: "✓ Seasonal local produce plate and specialty drip coffee",
    p2_pt3: "✓ Rainy day hands-on baking class alternative with host",
    p3_badge: "PILLAR 03 · E-BIKE TOUR",
    p3_heading: "Guided E-Bike Adventures Through Historic Trails",
    p3_desc: "Glide up gentle rolling hills effortlessly on modern electric-assist bicycles. Visit Ishibutai megalith tomb, terraced rice paddies of Inabuchi, and peaceful rural shrines with your host.",
    p3_pt1: "✓ Premium E-bikes, helmets, and refreshments provided",
    p3_pt2: "✓ Private personalized routing for your pace and interests",
    p3_pt3: "✓ Full recreational injury & public liability insurance included",
    link_view_tour: "View Tour Itinerary →",
    p4_badge: "PILLAR 04 · SALON & SNAPS",
    p4_heading: "Music, Literature Salon & Commemorative Photography",
    p4_desc: "Relax in our vintage library with vinyl records and local teas. Throughout your stay, the host captures professional high-resolution photos and video reels of your journey.",
    p4_pt1: "✓ Over 30 edited high-res digital souvenir photos included",
    p4_pt2: "✓ Relaxed evening tea & cultural conversation in the salon",
    p4_pt3: "✓ Personalized support for anniversaries and surprise proposals",
    stay_kicker: "ROOM & AMENITIES",
    stay_title: "A Serene Space Designed Exclusively for Two",
    stay_lead: "A meticulously renovated 150m² Japanese heritage residence balancing wabi-sabi serenity and modern indulgence.",
    spec1_t: "Private Floor Area",
    spec1_d: "Approx. 150m² (Spacious living, master bedroom, tea room, dining kitchen, Zen garden)",
    spec2_t: "Sleeping Setup",
    spec2_d: "1 Custom King Platform Bed + Luxury Japanese Futon sets for extra guests",
    spec3_t: "Bath & Wellness",
    spec3_d: "Aromatic Hinoki cypress bathtub, organic bath toiletries, luxury bathrobes",
    spec4_t: "Kitchen & Cafe Bar",
    spec4_d: "BALMUDA toaster, pour-over specialty coffee bar, electric kettle, refrigerator",
    spec5_t: "Smart Amenities",
    spec5_d: "High-speed optical Wi-Fi, Marshall Bluetooth speaker, air purifier, climate control",
    spec6_t: "Parking & Transit",
    spec6_d: "Complimentary private parking on-site, free roundtrip station pickup service",
    gal_ext: "Garden & Veranda",
    gal_bed: "Master King Suite",
    gal_bake: "Bakery Dining",
    gal_salon: "Salon & Library",
    tour_kicker: "SIGNATURE HERITAGE TOUR",
    tour_title: "Asuka Heritage E-Bike Cycling Route",
    tour_lead: "Too expansive for walking, too picturesque for a car. Experience Asuka's timeless spirit with the wind gently blowing past on our smooth electric bikes.",
    t_step1_t: "Departure from Pleasant House & Safety Briefing",
    t_step1_d: "Custom saddle adjustment, easy controls check, and a briefing before embarking into scenic village roads.",
    t_step2_t: "Ishibutai Megalithic Tomb Exploration",
    t_step2_d: "Marvel at Japan's largest stone tomb chamber while learning the fascinating political intrigue of ancient Asuka.",
    t_step3_t: "Inabuchi Terraced Rice Fields & Photo Shoot",
    t_step3_d: "Listed among Japan's top 100 rice terraces. Capture breathtaking photos amidst seasonal flora and sweeping valleys.",
    t_step4_t: "Local Farmer's Cafe Lunch & Relaxation",
    t_step4_d: "Enjoy a leisurely lunch at a hidden countryside cafe featuring organic vegetables grown by local villagers.",
    t_step5_t: "Asuka-dera Temple & Mystery Stone Monuments",
    t_step5_d: "Visit Japan's oldest Buddhist bronze statue and explore mysterious carved megaliths before heading back.",
    rain_policy_t: "100% Worry-Free Rainy Day Alternatives",
    rain_policy_d: "If weather prevents cycling, our indoor programs seamlessly kick in: artisan sourdough bread making, Asuka history salon, or a private driven excursion to the historic Edo merchant district of Imai-cho.",
    price_kicker: "TRANSPARENT VALUE",
    price_title: "Transparent & Value-Packed Packages",
    price_lead: "Save approximately 30% compared to booking lodging, gourmet meals, private tours, and photography separately (est. ¥108,000 value).",
    badge_best: "Most Popular Signature Choice",
    p_plan1_name: "Signature Experience (2 Days / 1 Night)",
    p_plan1_desc: "Lodging + Artisanal Breakfast + Guided E-Bike Tour + Photo Snapshots All-in-One",
    price_note_sig: "Weekday: ¥68,000 | Weekend & Holiday: ¥75,000 (2 guests, tax incl.)",
    p1_f1: "✓ 1 Night Private 150m² Kominka House (1 group per day)",
    p1_f2: "✓ Oven-fresh artisanal sourdough & local Asuka breakfast spread",
    p1_f3: "✓ Private Host-Guided E-Bike Heritage Tour (E-Bikes & helmets included)",
    p1_f4: "✓ Professional high-resolution photo snap service (30+ digital photos)",
    p1_f5: "✓ Comprehensive recreational travel insurance included",
    p1_f6: "✓ Complimentary roundtrip pickup from Kintetsu Asuka Station",
    p1_f7: "✓ Free backup switch to Artisan Baking Class in case of rain",
    btn_book_sig: "Inquire Signature Package",
    p_plan2_name: "Simple Stay Retreat (2 Days / 1 Night)",
    p_plan2_desc: "Ideal for guests seeking peaceful reading, relaxation, and rural serenity",
    price_note_ret: "Weekday: ¥42,000 | Weekend & Holiday: ¥48,000 (2 guests, tax incl.)",
    p2_f1: "✓ 1 Night Private 150m² Kominka House (1 group per day)",
    p2_f2: "✓ Oven-fresh artisanal sourdough & local Asuka breakfast spread",
    p2_f3: "✓ Welcome local tea & seasonal sweet treats",
    p2_f4: "✓ Unlimited access to Salon library, vinyl listening area & garden",
    p2_f5: "✓ Complimentary roundtrip pickup from Kintetsu Asuka Station",
    p2_f6: "✕ Guided tour & photo snapshots (not included, can be requested)",
    btn_book_ret: "Inquire Simple Retreat",
    addon_tag: "SPECIAL ANNIVERSARY",
    addon_title: "Tailored Celebrations for Memorable Milestones",
    addon_desc: "Celebrate birthdays, honeymoons, or anniversaries with our Handcrafted Celebration Cake & Sparkling Wine (+¥8,000) or Private Local Chef Dinner reservation.",
    calc_heading: "Live Rate Estimator",
    calc_sub: "Choose your dates and options to estimate your package price in Japanese Yen (JPY) and Korean Won (KRW).",
    calc_plan_label: "Package Selection",
    calc_day_label: "Day of Week",
    calc_weekday: "Weekday (Sun - Thu)",
    calc_weekend: "Weekend / Japan Holiday (Fri, Sat, Holidays)",
    calc_nights_label: "Nights",
    calc_addon_label: "Special Add-on",
    calc_opt_none: "None",
    calc_opt_cake: "Cake & Sparkling Wine (+¥8,000)",
    calc_opt_dinner: "Local Dinner Course for 2 (+¥14,000)",
    calc_opt_full: "Full Celebration (Cake + Wine + Dinner) (+¥20,000)",
    calc_total_label: "Estimated Total (Taxes & Insurance Included)",
    btn_apply_calc: "Apply to Booking Form ↓",
    loc_kicker: "LOCATION & ACCESS",
    loc_title: "Location & Pickup Service",
    loc_lead: "Located within an hour's reach from Osaka, Kyoto, and Kansai International Airport (KIX).",
    loc_transit_t: "Transit from Major Hubs",
    pickup_title: "Free Station Pickup",
    pickup_desc: "Let us know your arrival time in advance and we will warmly greet you at Kintetsu Asuka or Kashiharajingu-mae Station in our private vehicle.",
    loc_address_t: "Address & Surrounding Attractions",
    btn_open_gmap: "Open in Google Maps ↗",
    faq_kicker: "QUESTIONS & ANSWERS",
    faq_title: "Frequently Asked Questions",
    faq_q1: "Q. Does '1 group per day' mean we have the whole house to ourselves?",
    faq_a1: "Yes, absolutely! Pleasant House is strictly reserved for one group (2 to 4 guests) per day. You enjoy the entire 150m² home and Japanese garden in total privacy.",
    faq_q2: "Q. Can we communicate in English or Korean?",
    faq_a2: "Yes! Your hosts are an international couple fluent in English, Korean, and Japanese. We are delighted to guide and support you in your preferred language.",
    faq_q3: "Q. What if I am not confident on a bicycle?",
    faq_a3: "Our modern E-bikes feature gentle electric assistance that makes pedaling uphill effortless. We provide safety coaching before leaving. If needed, we can also provide a private scenic car drive instead.",
    faq_q4: "Q. What happens if it rains on tour day?",
    faq_a4: "For your safety, outdoor cycling is paused and seamlessly replaced with our indoor Artisan Sourdough Baking Class, Asuka History Salon, or an automobile excursion to historic Imai-cho.",
    faq_q5: "Q. How do meals work?",
    faq_a5: "Freshly baked artisan bread and organic local breakfast are prepared every morning. For dinner, we gladly recommend and reserve local hidden culinary gems with free pickup.",
    faq_q6: "Q. What is the cancellation policy?",
    faq_a6: "Free cancellation up to 14 days prior to check-in. 50% fee at 7 days, 80% at 3 days, non-refundable within 48 hours. After submitting your inquiry, we send full details and secure payment options.",
    book_kicker: "RESERVATION & INQUIRY",
    book_title: "Reserve Your Stay at Pleasant House",
    book_desc: "Because we host only one party per day, availability is strictly limited. Please submit your requested dates below and we will confirm within 24 hours.",
    f_name: "Full Name *",
    f_phone: "Phone Number *",
    f_email: "Email Address *",
    f_checkin: "Check-in Date *",
    f_checkout: "Check-out Date *",
    f_guests: "Number of Guests *",
    f_package: "Preferred Package *",
    f_special: "Special Requests (Anniversary notes, dietary allergies, arrival time)",
    f_consent: "I agree to the privacy policy and contacting for reservation inquiries.",
    btn_submit_res: "Submit Reservation Inquiry",
    succ_t: "Inquiry Successfully Sent!",
    succ_d: "Thank you for reaching out. We will review our availability and reply with a personalized confirmation within 24 hours.",
    btn_new_inquiry: "Submit Another Inquiry",
    foot_desc: "An exclusive 1-group-a-day experiential retreat in Asuka, Nara. Private Kominka stay, artisanal bakery, and guided cycling adventures.",
    foot_quick: "Quick Links",
    foot_info: "Operations & Contact"
  }
};

let currentLanguage = 'ko';

// 2. Language Switcher Function
function setLanguage(lang) {
  if (!i18nData[lang]) return;
  currentLanguage = lang;
  localStorage.setItem('pleasant_house_lang', lang);

  // Update button states
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });

  // Update all elements with data-i18n
  const dict = i18nData[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      if (dict[key].includes('<') && dict[key].includes('>')) {
        el.innerHTML = dict[key];
      } else {
        el.textContent = dict[key];
      }
    }
  });

  // Recalculate price in case labels change
  calculateEstimate();
}

// 3. Live Pricing Calculator
function calculateEstimate() {
  const plan = document.getElementById('calcPlan')?.value || 'signature';
  const dayType = document.getElementById('calcDayType')?.value || 'weekday';
  const nights = parseInt(document.getElementById('calcNights')?.value || '1', 10);
  const addon = document.getElementById('calcAddon')?.value || 'none';

  let baseRate = 0;
  if (plan === 'signature') {
    baseRate = (dayType === 'weekday') ? 68000 : 75000;
  } else {
    baseRate = (dayType === 'weekday') ? 42000 : 48000;
  }

  // Multi-night discount factor
  let discount = 1.0;
  if (nights === 2) discount = 0.90; // 10% off
  if (nights >= 3) discount = 0.85; // 15% off

  let stayCost = Math.round(baseRate * nights * discount);

  // Addon costs
  let addonCost = 0;
  if (addon === 'anniversary') addonCost = 8000;
  else if (addon === 'dinner') addonCost = 14000;
  else if (addon === 'full') addonCost = 20000;

  const totalJpy = stayCost + addonCost;
  const approxKrw = Math.round(totalJpy * 9.1);

  const jpyEl = document.getElementById('calcResultJpy');
  const krwEl = document.getElementById('calcResultKrw');

  if (jpyEl) jpyEl.textContent = '¥' + totalJpy.toLocaleString();
  if (krwEl) {
    if (currentLanguage === 'ko') {
      krwEl.textContent = `(약 ${approxKrw.toLocaleString()}원 / 환율 910원 기준)`;
    } else if (currentLanguage === 'ja') {
      krwEl.textContent = `(消費税・レクリエーション保険料込み)`;
    } else {
      krwEl.textContent = `(Approx. $${Math.round(totalJpy / 155)} USD / Taxes incl.)`;
    }
  }
}

// 4. Hero Form to Booking Form Bridge
function goToBooking() {
  const heroCheckin = document.getElementById('heroCheckin')?.value;
  const heroGuests = document.getElementById('heroGuests')?.value;
  const heroPackage = document.getElementById('heroPackage')?.value;

  if (heroCheckin) {
    const ci = document.getElementById('checkinDate');
    if (ci) ci.value = heroCheckin;
  }
  if (heroGuests) {
    const g = document.getElementById('guestCount');
    if (g) g.value = heroGuests;
  }
  if (heroPackage) {
    const p = document.getElementById('packageSelect');
    if (p) {
      if (heroPackage === 'retreat') p.value = 'retreat';
      else p.value = 'signature';
    }
  }

  const bookingSection = document.getElementById('booking');
  if (bookingSection) {
    bookingSection.scrollIntoView({ behavior: 'smooth' });
  }
}

function selectPlan(planType) {
  const p = document.getElementById('packageSelect');
  if (p) p.value = planType;
  const bookingSection = document.getElementById('booking');
  if (bookingSection) {
    bookingSection.scrollIntoView({ behavior: 'smooth' });
  }
}

function applyToBookingForm() {
  const plan = document.getElementById('calcPlan')?.value;
  const p = document.getElementById('packageSelect');
  if (p && plan) p.value = plan;

  const addon = document.getElementById('calcAddon')?.value;
  const specialReq = document.getElementById('specialRequest');
  if (specialReq && addon && addon !== 'none') {
    let note = '';
    if (addon === 'anniversary') note = '[계산기 옵션] 수제 기념일 케이크 & 스파클링 와인 희망';
    else if (addon === 'dinner') note = '[계산기 옵션] 로컬 디너 2인 코스 예약 대행 희망';
    else if (addon === 'full') note = '[계산기 옵션] 풀 스페셜(케이크+와인+디너) 희망';
    specialReq.value = note;
  }

  const bookingSection = document.getElementById('booking');
  if (bookingSection) {
    bookingSection.scrollIntoView({ behavior: 'smooth' });
  }
}

// 5. Reservation Form Submit Handler
function handleFormSubmit(event) {
  event.preventDefault();
  const form = document.getElementById('reservationForm');
  const successBox = document.getElementById('formSuccessMessage');

  const name = document.getElementById('guestName')?.value || '';
  const email = document.getElementById('guestEmail')?.value || '';
  const phone = document.getElementById('guestPhone')?.value || '';
  const checkin = document.getElementById('checkinDate')?.value || '';
  const checkout = document.getElementById('checkoutDate')?.value || '';
  const guests = document.getElementById('guestCount')?.value || '';
  const pkg = document.getElementById('packageSelect')?.value || '';
  const req = document.getElementById('specialRequest')?.value || '';

  // Show success box
  if (form && successBox) {
    form.style.display = 'none';
    successBox.style.display = 'block';
  }

  console.log("Inquiry Submitted:", { name, email, phone, checkin, checkout, guests, pkg, req });
}

function resetForm() {
  const form = document.getElementById('reservationForm');
  const successBox = document.getElementById('formSuccessMessage');
  if (form && successBox) {
    form.reset();
    form.style.display = 'flex';
    successBox.style.display = 'none';
  }
}

// 6. Lightbox Modal
function openLightbox(src) {
  const modal = document.getElementById('imageLightbox');
  const img = document.getElementById('lightboxImg');
  if (modal && img) {
    img.src = src;
    modal.classList.add('active');
  }
}

function closeLightbox() {
  const modal = document.getElementById('imageLightbox');
  if (modal) {
    modal.classList.remove('active');
  }
}

// 7. Initialization & Event Listeners
document.addEventListener('DOMContentLoaded', () => {
  // Restore saved language or default to Korean
  const savedLang = localStorage.getItem('pleasant_house_lang') || 'ko';
  setLanguage(savedLang);

  // Language buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const l = btn.getAttribute('data-lang');
      if (l) setLanguage(l);
    });
  });

  // Sticky Header Scrolled Class
  window.addEventListener('scroll', () => {
    const header = document.getElementById('siteHeader');
    if (header) {
      if (window.scrollY > 40) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }
  });

  // Mobile Drawer Toggle
  const mobileToggle = document.getElementById('mobileToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const drawerClose = document.getElementById('drawerClose');
  const drawerLinks = document.querySelectorAll('.drawer-link');

  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      mobileDrawer.classList.add('open');
    });
  }

  if (drawerClose && mobileDrawer) {
    drawerClose.addEventListener('click', () => {
      mobileDrawer.classList.remove('open');
    });
  }

  drawerLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (mobileDrawer) mobileDrawer.classList.remove('open');
    });
  });

  // FAQ Accordion
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    if (questionBtn) {
      questionBtn.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        // Close others
        faqItems.forEach(other => other.classList.remove('active'));
        if (!isActive) {
          item.classList.add('active');
        }
      });
    }
  });

  // Set default dates for booking bar (tomorrow & next day)
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const dayAfter = new Date(tomorrow);
  dayAfter.setDate(dayAfter.getDate() + 1);

  const tomorrowStr = tomorrow.toISOString().split('T')[0];
  const dayAfterStr = dayAfter.toISOString().split('T')[0];

  const heroCi = document.getElementById('heroCheckin');
  const ci = document.getElementById('checkinDate');
  const co = document.getElementById('checkoutDate');

  if (heroCi) heroCi.value = tomorrowStr;
  if (ci) ci.value = tomorrowStr;
  if (co) co.value = dayAfterStr;

  // Initialize Price Calculator
  calculateEstimate();
});
