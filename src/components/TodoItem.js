import React, {useState} from "react"

/* 
  【TodoItemコンポーネント】
　・Todoアイテムを表示する
　・チェックボックスにチェックが入っているか管理する
　・チェックボックスにチェックが入っているかアイテムをグレーアウトする
*/
function TodoItem({item}) {
  const [check, setCheck] = useState(false)
  const handleCheck = () => {
    setCheck(!check);
    item.done = !item.done;
  }
  return (
    <label className="panel-block">
      <input type="checkbox" onClick={handleCheck} 
        checked = {item.done? true : false}/>
      <p className={item.done? "has-text-grey-light":""}>{item.text}</p>
    </label>
  );
}

export default TodoItem;