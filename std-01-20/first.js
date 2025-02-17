// 게임 캐릭터 데이터베이스
const characters = [
    {
        // 기본 정보
        id: 1,
        name: "김민지",
        level: 15,
        class: "정원사 요정",

        // 스탯 - 꽃을 잘 가꾸는 정원사 특성을 반영
        stats: {
            hp: 120,
            mp: 80,
            strength: 8,
            dexterity: 15,
            intelligence: 12,
            defense: 7,
        },

        // 장비 - 정원사 컨셉에 맞는 아이템
        equipment: {
            weapon: "행복한 물뿌리개",
            armor: "꽃무늬 앞치마",
            accessory: "레인보우 꽃씨 주머니",
        },

        // 보유 아이템
        inventory: [
            "마법의 씨앗",
            "햇살 영양제",
            "무지개 비료",
            "행복한 꽃잎 5개",
        ],

        // 보유 스킬
        skills: ["꽃피우기", "새싹 힐링", "꽃가루 버프", "자연의 축복"],

        // 현재 상태
        status: {
            isAlive: true,
            effects: ["식물 친화력 증가"],
        },
    },
    {
        // 기본 정보
        id: 2,
        name: "김요훈",
        level: 12,
        class: "달빛 음악가",

        // 스탯 - 음악을 통해 버프를 주는 특성
        stats: {
            hp: 95,
            mp: 110,
            strength: 7,
            dexterity: 13,
            intelligence: 14,
            defense: 6,
        },

        // 장비 - 음악가 컨셉에 맞는 아이템
        equipment: {
            weapon: "달빛 하프",
            armor: "멜로디 로브",
            accessory: "리듬의 팔찌",
        },

        // 보유 아이템
        inventory: [
            "음표 물약",
            "화음의 결정석",
            "악보 조각 3개",
            "달빛 엘릭서",
        ],

        // 보유 스킬
        skills: [
            "힐링 멜로디",
            "용기의 소나타",
            "평화의 세레나데",
            "달빛 심포니",
        ],

        // 현재 상태
        status: {
            isAlive: true,
            effects: ["음악의 가호"],
        },
    },
    {
        // 기본 정보
        id: 3,
        name: "김윤지",
        level: 14,
        class: "꿈나무 화가",

        // 스탯 - 그림으로 마법을 부리는 특성
        stats: {
            hp: 100,
            mp: 95,
            strength: 6,
            dexterity: 14,
            intelligence: 15,
            defense: 8,
        },

        // 장비 - 화가 컨셉에 맞는 아이템
        equipment: {
            weapon: "무지개 붓",
            armor: "물감 묻은 작업복",
            accessory: "영감의 팔레트",
        },

        // 보유 아이템
        inventory: [
            "마법의 물감",
            "상상력의 결정",
            "희망의 스케치북",
            "반짝이는 크레파스 세트",
        ],

        // 보유 스킬
        skills: [
            "컬러풀 힐링",
            "희망의 그림자",
            "상상력 폭발",
            "무지개 브러시",
        ],

        // 현재 상태
        status: {
            isAlive: true,
            effects: ["예술적 영감 충만"],
        },
    },
    {
        // 기본 정보
        id: 4,
        name: "김재승",
        level: 13,
        class: "푸딩 메이커",

        // 스탯 - 달콤한 디저트로 힐링을 주는 특성
        stats: {
            hp: 110,
            mp: 85,
            strength: 9,
            dexterity: 12,
            intelligence: 13,
            defense: 7,
        },

        // 장비 - 제과사 컨셉에 맞는 아이템
        equipment: {
            weapon: "마법의 거품기",
            armor: "달콤한 쉐프복",
            accessory: "행복한 레시피 북",
        },

        // 보유 아이템
        inventory: [
            "무지개 설탕",
            "행복한 우유",
            "반짝이는 젤리",
            "달콤한 시럽 3개",
        ],

        // 보유 스킬
        skills: ["푸딩 폭탄", "달콤한 힐링", "디저트 버프", "행복한 레시피"],

        // 현재 상태
        status: {
            isAlive: true,
            effects: ["달콤한 오오라"],
        },
    },
    {
        // 기본 정보
        id: 5,
        name: "손정민",
        level: 16,
        class: "동물 친구",

        // 스탯 - 동물들과 교감하는 특성
        stats: {
            hp: 115,
            mp: 90,
            strength: 10,
            dexterity: 14,
            intelligence: 11,
            defense: 9,
        },

        // 장비 - 동물 친구 컨셉에 맞는 아이템
        equipment: {
            weapon: "사랑의 먹이통",
            armor: "포근한 동물잠옷",
            accessory: "우정의 호루라기",
        },

        // 보유 아이템
        inventory: [
            "특제 간식",
            "동물 의사소통 물약",
            "푹신한 쿠션",
            "반짝이는 털실",
        ],

        // 보유 스킬
        skills: ["동물 교감", "우정의 힐링", "동물 친구 소환", "사랑의 하모니"],

        // 현재 상태
        status: {
            isAlive: true,
            effects: ["동물 친화력 증가"],
        },
    },
    {
        // 기본 정보
        id: 6,
        name: "안은별",
        level: 15,
        class: "별빛 마법사",

        // 스탯 - 별의 힘을 다루는 특성
        stats: {
            hp: 95,
            mp: 120,
            strength: 7,
            dexterity: 11,
            intelligence: 16,
            defense: 6,
        },

        // 장비 - 별빛 마법사 컨셉에 맞는 아이템
        equipment: {
            weapon: "별빛 스태프",
            armor: "은하수 로브",
            accessory: "위시 스타 목걸이",
        },

        // 보유 아이템
        inventory: [
            "별의 파편",
            "우주의 엘릭서",
            "유성 조각",
            "반짝이는 스타더스트",
        ],

        // 보유 스킬
        skills: [
            "스타더스트 샤워",
            "위시 스타 힐링",
            "코즈믹 버프",
            "별빛 보호막",
        ],

        // 현재 상태
        status: {
            isAlive: true,
            effects: ["별의 축복"],
        },
    },
    {
        // 기본 정보
        id: 7,
        name: "윤종환",
        level: 14,
        class: "구름 기사",

        // 스탯 - 포근한 구름의 힘을 사용하는 특성
        stats: {
            hp: 130,
            mp: 75,
            strength: 12,
            dexterity: 10,
            intelligence: 11,
            defense: 11,
        },

        // 장비 - 구름 기사 컨셉에 맞는 아이템
        equipment: {
            weapon: "솜솜이 검",
            armor: "포근한 구름갑옷",
            accessory: "무지개 망토",
        },

        // 보유 아이템
        inventory: ["구름 조각", "하늘의 이슬", "무지개 결정", "푹신한 솜사탕"],

        // 보유 스킬
        skills: ["구름 실드", "포근포근 힐링", "무지개 브리지", "솜사탕 스톰"],

        // 현재 상태
        status: {
            isAlive: true,
            effects: ["포근한 수호"],
        },
    },
    {
        // 기본 정보
        id: 8,
        name: "최정민",
        level: 13,
        class: "캔디 매지션",

        // 스탯 - 달콤한 사탕의 마법을 부리는 특성
        stats: {
            hp: 105,
            mp: 100,
            strength: 8,
            dexterity: 13,
            intelligence: 14,
            defense: 7,
        },

        // 장비 - 캔디 매지션 컨셉에 맞는 아이템
        equipment: {
            weapon: "롤리팝 완드",
            armor: "달콤한 캔디드레스",
            accessory: "슈가러시 팔찌",
        },

        // 보유 아이템
        inventory: [
            "마법의 사탕",
            "달콤한 엘릭서",
            "반짝이는 카라멜",
            "무지개 젤리빈",
        ],

        // 보유 스킬
        skills: ["캔디 힐링", "슈가러시 버프", "달콤한 폭발", "젤리빈 실드"],

        // 현재 상태
        status: {
            isAlive: true,
            effects: ["달콤한 마법 강화"],
        },
    },
    {
        // 기본 정보
        id: 9,
        name: "최현준",
        level: 15,
        class: "장난감 기술자",

        // 스탯 - 장난감을 다루는 특성
        stats: {
            hp: 110,
            mp: 95,
            strength: 11,
            dexterity: 15,
            intelligence: 13,
            defense: 8,
        },

        // 장비 - 장난감 기술자 컨셉에 맞는 아이템
        equipment: {
            weapon: "마법의 장난감 망치",
            armor: "작업용 멜빵바지",
            accessory: "반짝이는 공구벨트",
        },

        // 보유 아이템
        inventory: [
            "마법의 부품",
            "장난감 엔진",
            "반짝이는 나사",
            "행복한 장난감 상자",
        ],

        // 보유 스킬
        skills: [
            "장난감 소환",
            "로봇 친구",
            "신나는 장난감 퍼레이드",
            "장난감 메이커",
        ],

        // 현재 상태
        status: {
            isAlive: true,
            effects: ["발명가의 영감"],
        },
    },
    {
        // 기본 정보
        id: 10,
        name: "전선일",
        level: 14,
        class: "쿠키 메이지",

        // 스탯 - 쿠키 마법을 다루는 특성
        stats: {
            hp: 100,
            mp: 105,
            strength: 9,
            dexterity: 12,
            intelligence: 15,
            defense: 7,
        },

        // 장비 - 쿠키 메이지 컨셉에 맞는 아이템
        equipment: {
            weapon: "과자 지팡이",
            armor: "초코칩 로브",
            accessory: "쿠키 레시피 북",
        },

        // 보유 아이템
        inventory: [
            "마법의 밀가루",
            "반짝이는 설탕",
            "행복한 초코칩",
            "쿠키 조각",
        ],

        // 보유 스킬
        skills: ["쿠키 폭발", "달콤한 힐링", "쿠키 실드", "과자 폭탄"],
        // 현재 상태
        status: {
            isAlive: true,
            effects: ["발명가의 영감"],
        },
    },
];

// 1. 객체 속성 접근하기
// characters 배열의 첫 번째 캐릭터(김민지)의 이름과 레벨을 dot notation으로 출력하기 - 김민지를 감지해서 > 김민지가 맞으면 그것만 표출

// 2. 객체 중첩 속성 접근하기
// characters 배열에서 김요훈의 HP 값을 bracket notation으로 출력하기

// 3. 배열 순회하기
// characters 배열의 모든 캐릭터 이름을 dot notation으로 출력하기

// 4. 객체 내 객체 접근하기
// characters 배열에서 김윤지의 weapon 값을 bracket notation으로 출력하기

// 5. 배열의 길이 구하기
// characters 배열에서 김재승의 skills 배열 길이를 dot notation으로 출력하기

// 6. 배열 요소 삭제하기
// characters 배열에서 손정민의 inventory 첫 번째 아이템을 dot notation으로 삭제하기

// 7. 객체 속성 값 변경하기
// characters 배열에서 안은별의 isAlive 상태를 bracket notation으로 false로 변경하기

// 8. 객체 속성 값 수정하기
// characters 배열에서 윤종환의 defense 값을 3 증가시키기

// 9. 배열에 새로운 요소 추가하기
// • characters 배열에 새로운 캐릭터 객체 추가하기

// 10. 중첩 배열 접근하기
// • characters 배열의 모든 캐릭터의 effects 목록을 bracket notation으로 출력하기

// 1번

// let target = "김민지";
// for(let i = 0; i < arr.length; i++) {
// 	if(
// }

// 인풋에 입력하면 if문에서 벨류값 검사해서 밑에서 뽑아줘

// 1 번
function inputValue() {
    // characters 길이 알아오고
    for (let index = 0; index < characters.length; index++) {
        let valueText = characters[index].name;
        let inputText = document.getElementById("inputText");
        // let outPut = document.getElementById("outPut").innerHTML
        if (inputText.value === valueText) {
            document.getElementById(
                "outPut"
            ).innerHTML = `${characters[index].name} ${characters[index].level}Lv`;
            break;
        } else {
            document.getElementById("outPut").innerHTML = "아닌데";
            // break;
        }
        if (inputText.value === valueText + "무기") {
            document.getElementById(
                "outPut"
            ).innerHTML = `${characters[index].equipment.weapon}`;
            break; // 멈춤
        } else {
            document.getElementById("outPut").innerHTML = "아닌데";
            // break;
        }
    }
}
let selectArrClick = document.getElementById("selectArrContainer");
let selectClick = document.getElementById("selectEffectsArrContainer");

// 3번,10번
for (let index = 0; index < characters.length; index++) {
    selectArrClick.innerHTML += `
    <option>${characters[index].name}</option>`;
    function selectClickBtn() {
        for (let index = 0; index < characters.length; index++) {
            if (selectArrClick.value === characters[index].name) {
                selectClick.innerHTML = `<p>${characters[index].status.effects}</p>`;
            }
        }
    }
}
// // console.log();
// console.log(characters[0].level);

// // 2번
// console.log(characters[1]["stats"]["hp"]);

// // 3번
// for (let index = 0; index < characters.length; index++) {
//     console.log(characters[index].name);
// }

// // 4번
// console.log(characters[0]["equipment"]["weapon"]);

// // 5번
// let targetInfo = {
//     targetName: "김재승",
//     targetKeyName: "skills",
// };

// console.log(characters);

// for (let i = 0; i < characters[3]["skills"].length; i++) {
//     console.log(i);
// }

// // 6번
// characters[4].inventory.shift();
// console.log(characters[4].inventory);

// // 7번

// // function isAliveChecker(arr, {}) {
// // 	arguments[0]
// // 	arguments[1]

// // }
// console.log((characters[5]["status"]["isAlive"] = "false"));

// // 8번
// console.log(characters[6]["stats"]["defense"] + 3);

// //  9번
// characters.select = {
//     stats: "black",
// };
// console.log(characters);

// // 10번
for (let i = 0; i < characters.length; i++) {
    console.log(characters[i]["status"]["effects"]);
}
