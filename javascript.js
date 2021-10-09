function calculate(){
    const num1 = document.getElementById('frm').num1.value;
    const num2 = document.getElementById('frm').num2.value;
    const operator = document.getElementById('frm').operator.value;
    var announce = document.getElementById("announce");

    if(num1 != "" && num2 != "" && operator != "")
    {
        switch(operator){
            case '+':
                document.getElementById('result').value = Number(num1)  + Number(num2);
                break;
                
            case '-':
                document.getElementById('result').value = Number(num1)  - Number(num2);
                break;
                
            case '*':
                document.getElementById('result').value = Number(num1)  * Number(num2);
                break;
                
            default:
                document.getElementById('result').value = Number(num1)  / Number(num2);
        }

        return;
    }
    else
    {
        announce.textContent=""
        if(num1 == ""){
            announce.append("Chưa nhập số thứ nhất ");
        }
        if(num2 == ""){
            announce.append("Chưa nhập số thứ hai ");
        }
        if(operator == ""){
            announce.append("Chưa chọn phép tính ");
        }
        return;
    }
}


function check(){
    const num = document.getElementById(this.id).value;

    var announce = document.getElementById('announce');
    announce.textContent = "";

    if(num=="")
    {
        return;
    }

    if(isNaN(Number(num)))
    {
        announce.append("Giá trị nhập ở ô ");
        if (this.id == "num1")
        {
            announce.append("Số thứ nhất ")
        }
        else
        {
            announce.append("Số thứ hai ")

        }

        announce.append("không phải là số.")

    }
}

document.getElementById('calculate').onclick = calculate;
document.getElementById('num1').onblur = check;
document.getElementById('num2').onblur = check;

