function test01() {
    window.alert('動いてます');
}

// チェックボックスを一つ一つ認識している場合
function test02(){
    // チェックボックスの要素を取得
    const chk01 = document.getElementById('chk01');
    const chk02 = document.getElementById('chk02');
    const chk03 = document.getElementById('chk03');

    const chkary = [];
    chkary.push(chk01.value);
    chkary.push(chk02.value);
    chkary.push(chk03.value);
    
    console.log(chkary[0]);
    console.log(chkary[1]);
    console.log(chkary[2]);

    if(chk01.checked == true){
        console.log("chk01:チェックされてます")
    }
    if(chk02.checked == true){
        console.log("chk02:チェックされてます")
    }
    if(chk03.checked == true){
        console.log("chk03:チpェックされてます")
    }
    const dispField = document.getElementById('disp_field');
    dispField.textContent = chkary.join(', ')
}

// ラジオボタンをなんじゃかんじゃする関数
function test03(){
    const rdo01 = document.getElementById('rdo01');
    const rdo02 = document.getElementById('rdo02');
    const rdo03 = document.getElementById('rdo03');

    const rdoary = [];
    rdoary.push(rdo01.value);
    rdoary.push(rdo02.value);
    rdoary.push(rdo03.value);

    console.log("rdoary:" + rdoary[0]);
    console.log("rdoary:" + rdoary[1]);
    console.log("rdoary:" + rdoary[2]);
}