import { createTag } from "./public/createTag.js";
import { createDiv } from "./public/createDiv.js";
import { createHTML } from "./public/createHTML.js";
import { createHomePage } from "./public/createHomePage.js";
import { createSearchPage } from "./public/createSearchPage.js";
import { createAddPage } from "./public/createAddPage.js";
// import { students } from "./public/obj/studentsObj.js";
import { CONTENT_TYPES } from "./public/obj/CONTENT_TYPES.js";
import fs from "fs";
import http from "http";
import path from "path";
import querystring from "querystring";

const __dirname = path.resolve(); // 디렉토리 경로
// let endsWith = req.url.endsWith(".js"); // 해당 디렉토리경로 파일 요총이 js이면
function saveToJSON(data, callback) {
    const filePath = path.join(__dirname, "students.json");
    console.log(filePath);
    fs.writeFile(
        filePath,
        JSON.stringify(data, null, 2),
        "utf8",
        function (error) {
            if (error) {
                callback(error);
            } else {
                callback(null);
            }
        }
    );
}

function loadFromJSON(callback) {
    const filePath = path.join(__dirname, "students.json"); // 경로
    fs.readFile(filePath, "utf8", function (error, data) {
        // json 파일 읽어서
        callback(null, JSON.parse(data));
    });
}

const server = http.createServer(function (req, res) {
    const parsedUrl = req.url.split("?");
    const pathname = parsedUrl[0];
    const query = parsedUrl[1] ? querystring.parse(parsedUrl[1]) : {};

    if (pathname === "/") {
        loadFromJSON(function (error, students) {
            // JSON.parse(data) 넘어온다.
            if (error) {
                res.writeHead(500, CONTENT_TYPES.html);
                res.end(createHTML(createTag("h1", "500 - 서버 에러")));
            } else {
                res.writeHead(200, CONTENT_TYPES.html);
                res.end(createHomePage(students)); // JSON.parse(data) 넘어온다.
            }
        });
    } else if (pathname === "/search") {
        if (Object.keys(query).length === 0) {
            res.writeHead(200, CONTENT_TYPES.html);
            res.end(createSearchPage());
        } else {
            loadFromJSON(function (error, students) {
                if (error) {
                    res.writeHead(500, CONTENT_TYPES.html);
                    res.end(createHTML(createTag("h1", "500 - 서버 에러")));
                } else {
                    const filtered = [];
                    for (let i = 0; i < students.length; i++) {
                        const student = students[i];
                        let nameMatch = true;
                        let foodMatch = true;

                        // if (query.name === true) {
                        nameMatch = student.name.includes(query.name);
                        // }

                        if (query.food === true) {
                            foodMatch = false;
                            for (let j = 0; j < student.food.like.length; j++) {
                                if (student.food.like[j] === query.food) {
                                    foodMatch = true;
                                    break;
                                }
                            }
                            if (!foodMatch === true) {
                                for (
                                    let j = 0;
                                    j < student.food.hate.length;
                                    j++
                                ) {
                                    if (student.food.hate[j] === query.food) {
                                        foodMatch = true;
                                        break;
                                    }
                                }
                            }
                        }

                        if (nameMatch && foodMatch) {
                            filtered.push(student);
                        }
                    }
                    res.writeHead(200, CONTENT_TYPES.html);
                    res.end(createHomePage(filtered));
                }
            });
        }
    } else if (pathname === "/add") {
        res.writeHead(200, CONTENT_TYPES.html);
        res.end(createAddPage());
    } else if (pathname === "/student") {
        loadFromJSON(function (error, students) {
            const query = querystring.parse(parsedUrl[1]);
            if (error) {
                res.writeHead(500, CONTENT_TYPES.html);
                res.end(createHTML(createTag("h1", "500 - 서버 에러")));
            } else {
                let foundStudent = null;
                for (let i = 0; i < students.length; i++) {
                    if (students[i].order === Number(query.order)) {
                        foundStudent = students[i];
                        break;
                    }
                }
                const content = `
                        ${createTag("h1", foundStudent.name + " 상세 정보")}
                        ${createDiv(
                            `
                            ${createTag("p", "순번: " + foundStudent.order)}
                            ${createTag(
                                "p",
                                "좋아하는 음식: " +
                                    foundStudent.food.like.join(", ")
                            )}
                            ${createTag(
                                "p",
                                "싫어하는 음식: " +
                                    foundStudent.food.hate.join(", ")
                            )}
                        `,
                            "student-card"
                        )}
                    `;
                res.writeHead(200, CONTENT_TYPES.html);
                res.end(createHTML(content));
            }
        });
    } else if (pathname === "/api/students" && req.method === "POST") {
        let body = "";
        req.on("data", function (chunk) {
            body = body + chunk;
        });

        req.on("end", function () {
            const formData = querystring.parse(body);
            loadFromJSON(function (error, students) {
                if (error) {
                    res.writeHead(500, CONTENT_TYPES.html);
                    res.end(createHTML(createTag("h1", "500 - 서버 에러")));
                } else {
                    const newStudent = {
                        order: students.length + 1,
                        name: formData.name,
                        food: {
                            like: formData.likeFoods
                                .split(",")
                                .map(function (item) {
                                    return item.trim();
                                }),
                            hate: formData.hateFoods
                                .split(",")
                                .map(function (item) {
                                    return item.trim();
                                }),
                        },
                    };

                    students.push(newStudent);
                    saveToJSON(students, function (saveError) {
                        if (saveError === true) {
                            res.writeHead(500, CONTENT_TYPES.html);
                            res.end(
                                createHTML(createTag("h1", "500 - 서버 에러"))
                            );
                        } else {
                            res.writeHead(302, { Location: "/" });
                            res.end();
                        }
                    });
                }
            });
        });
    } else {
        res.writeHead(404, CONTENT_TYPES.html);
        res.end(createHTML(createTag("h1", "404 - 페이지를 찾을 수 없습니다")));
    }
});

const PORT = 3005;
server.listen(PORT, function () {
    console.log("서버가 http://localhost:" + PORT + " 에서 실행 중입니다.");
});
