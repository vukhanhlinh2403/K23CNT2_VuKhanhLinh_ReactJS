import VklExpression from "./components/vklExpression";
import VklFuncComp1 from "./components/vklFuncComp1";
import VklClassComp1 from "./components/vklClassComp1";



function vklApp() {
  return (
    <div className="container border mt-3 bg-white">
      <h1>React JS Lesson04 - Vu Khanh Linh</h1>


      <VklExpression/>



      <hr/>
      {/* su dung fuction components  */}
      <VklFuncComp1/>




      {/* su dung class components */}
      <VklClassComp1></VklClassComp1>
    </div>
  );
}

export default vklApp;
