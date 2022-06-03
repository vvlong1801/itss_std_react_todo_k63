import React, {useState} from "react"

/* 
  【TodoItemコンポーネント】
　・Todoアイテムを表示する
　・チェックボックスにチェックが入っているか管理する
　・チェックボックスにチェックが入っているかアイテムをグレーアウトする
*/
function TodoItem({item}) {
  const [check, setCheck] = useState(false)
  
  return (
    <label className="panel-block">
      <input type="checkbox" onClick={() => setCheck(!check)}/>
      <p className={check? "has-text-grey-light":""}>{item.text}</p>
    </label>
  );
}

export default TodoItem;