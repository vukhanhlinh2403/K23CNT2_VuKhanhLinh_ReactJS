import VklJsxExpression from "./components/vklJsxExpression";
import VklFuncComp from "./components/vklFuncComp";
import VklClassComp from "./components/vklClassComp";
function vklApp() {
  return (
    <div className="container border mt-3 bg-white">
      <h1>React JS Lesson03 - Vu Khanh Linh</h1>

      <VklJsxExpression/>


      <hr/>
      {/* su dung fuction components  */}
      <VklFuncComp />


      {/* su dung class components */}
      <VklClassComp></VklClassComp>
    </div>
  );
}

export default vklApp;
