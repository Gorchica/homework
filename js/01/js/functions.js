function say_hi() {
    var height = document.getElementById('height').value;
    var gender = $('input[name="gender"]:checked').val();
    var ideal;
    if (gender == 'woman'){
        gender ='Девушка';
        ideal = (height*height*0.00225).toFixed(2);
    } else {
        gender = 'Мужчина';
        ideal = (height*height*0.00225).toFixed(2);
    }
    var html = gender + ', ваш рост - ' + height + 'см,<br>';
        html += ' а идеальный вес = ' + ideal + 'кг.';
 
    document.getElementById('result').innerHTML = html;
}
document.getElementById('say').addEventListener('click', say_hi);

