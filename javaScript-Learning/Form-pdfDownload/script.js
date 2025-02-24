document.getElementById("submit").addEventListener("click", function(){

    console.log("click the btn")

    const formDiv = document.getElementById("formDiv").style.display = "none";
    const CollectData = document.getElementById("collectData").style.display = "block";
    // CollectData.style.transition = "display 2s";
    // ================================================================================================

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    console.log(name);
    // ================================================================================================

    const collectName = document.getElementById("CollectName").innerText = name;
    const collectPhone = document.getElementById("CollectPhone").innerText = phone;
    const collectEmail = document.getElementById("CollectEmail").innerText = email;

    html2pdf().form(CollectData).save();
})
