# Today I Learned

## 目的
HTMLのチェックボックス要素のname属性が同じだと配列の扱いになるかの挙動の検証。

## 検証結果
  
検証部のコード
```javascript
// 検証部 チェックボックスのname属性が同一(配列)の場合
function test02_(){
    const data = document.getElementsByName('chkbox');
    console.log(typeof data);
    // 下記のコードが正常に動いている時点で配列
    console.log(data[0].value);
    console.log(data[1].value);
    console.log(data[2].value);
    for(let i = 0;i < data.length;i++){
         console.log(data[i]);
    }
    const disp_Field_ = document.getElementById('disp_field_');
    disp_Field_.textContent = data.values;
}
```

- サーバーサイド（PHPなど）へ送信する場合、
`name="hoge[]"` のように記述しないと配列として受け取れないケースがある点に注意。

## 使用技術スタック
- HTML
- CSS
- Vanilla JS

## 開発環境
使用OS：MacOS Sequioia 15.5  
エディタ：Visual Studio Code 1.109.3 (Universal)
