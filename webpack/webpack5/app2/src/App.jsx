import React, { lazy, Suspense } from 'react';
const RemoteApp1 = lazy(() => import('app1/Button'));
function App() {
  return (
    <div>
      456
      <Suspense fallback="组件正在加载中...">
        <RemoteApp1 />
      </Suspense>
    </div>
  )
}
export default App;