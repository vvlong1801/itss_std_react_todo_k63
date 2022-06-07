/* 
  【Filterコンポーネント】
　・該当するTodoをステータス毎にで分けてリスト表示する
　・タブで表示する
　・サポートするステータスは「すべて」「未完了」「完了済み」
*/
function Filter( {activeTab, handle} ) {
  
  return (
    <div className="panel-tabs">
      <a className={activeTab === 'ALL'? 'is-active': ''} 
        onClick = {() => handle("ALL")}>
        全て
      </a>    
      <a className={activeTab === 'ON_GOING'? 'is-active': ''}
        onClick = {() => handle("ON_GOING")}>
        未完了
      </a>    
      <a className={activeTab === 'DONE'? 'is-active': ''}
        onClick = {() => handle("DONE")}>完了済み</a>    
    </div>
  );
}

export default Filter