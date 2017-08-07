function log() {
    var login = document.getElementsByName('login')[0].value;
    var password = document.getElementsByName('password')[0].value;
    var tmp = {
        login: login,
        password: password
    };
    var credentials = {
        login: 'admin',
        password: 'qwerty',
    };
    console.log(tmp.login, credentials.login, tmp.password, credentials.password);
    if (tmp.login == credentials.login && tmp.password == credentials.password){
        var html = '<span class="green">обнаружено соответствие</span>';
    } else {
        var html = '<span class="red">соответствие не обнаружено</span>';
    }
    document.getElementById('result_log').innerHTML = html;
}
document.getElementById('login').addEventListener('click', log);