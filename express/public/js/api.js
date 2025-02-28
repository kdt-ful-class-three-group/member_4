console.log("연결완");
fetch("http://localhost:3001/data")
    .then((res) => {
        res.json;
    })
    .then((data) => {
        console.log(data);
    });
