function apiMainList(data) {
  console.log(data);
  let apiList = document.getElementById("apiList");
  data.forEach((element) => {
    apiList.innerHTML += `
        <p>${element.id}</p>
        <p>${element.inputName}</p>
        <button type="submit">수정</button>
        <button>삭제</button>
        `;
  });
}

export default apiMainList;
