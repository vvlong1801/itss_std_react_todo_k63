import React, { useState } from 'react';

/* 
  【Todoのデータ構成】
　・key：Todoを特定するID（String）
　・text：Todoの内容（String）
　・done：完了状態（Boolean true:完了済み,, false:未完了）
*/

/* コンポーネント */
import TodoItem from './TodoItem';
import Input from './Input';
import Filter from './Filter';

/* カスタムフック */
import useStorage from '../hooks/storage';

/* ライブラリ */
import {getKey} from "../lib/util";

function Todo() {
  const [items, putItems, clearItems] = useStorage();

  const [activeTab, setActiveTab] = React.useState('ALL');
  
  const onAdd = (input) => {
    const newItem = {
      key: getKey(),
      text: input,
      done: false,
    }
    putItems(prev => [...prev, newItem])
  }

  const handleClickTab = (tab) => setActiveTab(tab);
  
  const displayItems = items.filter( item => {
    if(activeTab === "ALL") return true;
    if(activeTab === "ON_GOING") return !item.done;
    if(activeTab === "DONE") return item.done;
  })
  return (
    <div className="panel">
      <div className="panel-heading">
        ITSS ToDoアプリ
      </div>
      <Input onAdd = {onAdd}/>
      <Filter activeTab = {activeTab} handle = {handleClickTab}/>
      {displayItems.map(item => (
        <TodoItem
          key = {item.key}
          item={item}
          />
      ))}
      <div className="panel-block">
        {displayItems.length} items
      </div>
      <div className="panel-block">
        <button className="button is-light is-fullwidth" onClick={clearItems}>
          全てのToDoを削除
        </button>
      </div>
    </div>
  );
}

export default Todo;