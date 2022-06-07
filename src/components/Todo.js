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
  const [items, putItems] = React.useState([
      /* テストコード 開始 */
    { key: getKey(), text: '日本語の宿題', done: false },
    { key: getKey(), text: 'reactを勉強する', done: false },
    { key: getKey(), text: '明日の準備をする', done: false },
    /* テストコード 終了 */
  ]);

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
    </div>
  );
}

export default Todo;