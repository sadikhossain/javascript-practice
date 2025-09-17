//This is the js portion of HTML file titled "jsTryCatchFinal.html"
//Practitionergit "Sadik Hossain"
function newFunc() {
    const msg = document.getElementById("p1");
    msg.innerHTML = "";

    let a = document.getElementById("demo2").value;
    try {
        if (a.trim() == "") throw "is empty";
        if (isNaN(a)) throw "is not a number";
        a = Number(a);
        if (a > 10) throw "is too high";
        if (a < 5) throw "is too low";
    }
    catch (err2) {
        msg.innerHTML = "Input " + err2;
    }
    finally {
        document.getElementById("demo2").value = "";
    }
}