import React, { useState } from 'react';
/* 
  【inputコンポーネント】
　・新しいTodoを作成するINPUTフィールドを作成するコンポーネント
　・Enterをクリックされたら入力された文字を使って新しいTodoを作成する
*/
function Input( {onAdd} ) {
  const [item, setItem] = useState("")
  const handleKeyDown = e => {
    if(e.keyCode === 13){
      onAdd(item);
      setItem("");
    }
  }
  return (
    <div className="panel-block">
      <input className="input" type="text" 
        placeholder="Todoを入力してください" 
        onChange = {e => setItem(e.target.value)}
        onKeyDown = {handleKeyDown}
        />
    </div>
  );
}

export default Input;
