const box = document.getElementById("input");
const toUsd = document.getElementById("VndToUsd");
const toVnd = document.getElementById("UsdToVnd");
const submit = document.getElementById("submit");
const result = document.getElementById("result");
let res;

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function convert() {
    if (toUsd.checked)
    {
        res = Number(box.value);
        res = (res / 25422);
        result.textContent = res.toFixed(1) + " $";
    }
    else if (toVnd.checked)
    {
        res = Number(box.value);
        res = numberWithCommas(res * 25422);
        result.textContent = res + " đ";
    }
    else
    {
        result.textContent = "please select an unit";    
    }
}
