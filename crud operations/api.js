axios.get("https://64fdc852596493f7af7e9018.mockapi.io/api/v1/Fares").then((response) => {
    const api  = response.data;
    const apiTable = document.getElementById("data-list");
   
    api.map((result) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>
                <div class="card-container">
                    <h1>${result.title}</h1>
                    <img src=" ${result.image}">
                    <p>${result.id}</p>         
                </div>
            </td>

            <button id="id" onclick="deleteData('${result.id}')">حذف</button>
            <button onclick="editData('${result.id}', '${result.image}', '${result.title}')">تعديل</button>
    `;
    apiTable.appendChild(row);
    });
});

const deleteData = (id) => {
    axios.delete(`https://64fdc852596493f7af7e9018.mockapi.io/api/v1/Fares/${id}`)
    .then((response) => {
        console.log(response.data);
    });
};

const editData = (id, image, title) => {
  const newamge = prompt("قم بأدخال رابط الصورة ", image);
  const newtitle = prompt("New title ", title);

  if (newamge || newtitle) {

    axios.put(`https://64fdc852596493f7af7e9018.mockapi.io/api/v1/Fares/${id}`,{
            image: newamge,
            title: newtitle,
        })
      .then((response) => {
        console.log(response);
      });
    }
};