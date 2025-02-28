console.log("연결완");

fetch("data")
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        apiFetch(data);
    });
function apiFetch(data) {
    let apiList = document.getElementById("apiList");
    data.forEach((element) => {
        apiList.innerHTML += `<p>${element.id}</p><p>${element.inputName}</p>`;
    });
}
