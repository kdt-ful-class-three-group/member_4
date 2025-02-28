import fs from "fs";
// json데이터 받아오고 저장
function writeJson(bodyData) {
    let jsonArr = [];

    const bodyDataJsonStr = JSON.stringify(bodyData);
    console.log(bodyDataJsonStr);
    // const bodyDataJsonParse = JSON.pares(bodyData);
    // console.log(bodyDataJsonParse);
    const previousJson = fs.readFileSync("src/json/data.json", "utf-8");
    if (bodyData) {
        jsonArr = JSON.parse(previousJson);
        jsonArr.push(bodyData); // 기존 데이터 유지
        bodyData.id = jsonArr.length; // jsonArr.push(bodyData); 이것보다 위로가면 length 못가져옴
    } else {
        // data.json에 데이터가 없으면 실행
        jsonArr = [];
        // const bodyDataJsonStr = JSON.stringify(bodyData);
        // console.log(bodyDataJsonStr);

        // jsonArr.push(bodyDataJsonParse);
    }

    fs.writeFileSync("src/json/data.json", JSON.stringify(jsonArr, null, 2));
}

export default writeJson;
