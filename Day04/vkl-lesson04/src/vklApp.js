import VklFuncComp from "./components/vklFuncComp";
import VklFuncComp1 from "./components/vklFuncComp1";
import VklClassComp from "./components/vklClassComp";

function vklApp() {
  // object
  const users = {
    fullName:'Chach van doanh',
    age:20,
    phone:"064545465"
  }
  return (
    <div className="container border">
      <h1>Demo Component - Props - State</h1>
      <hr/>
      <div className='alert alert-danger'>
          <VklFuncComp name="Vu Linh" address="25 Vu Ngoc Phan" company = "Devmaster" />
          <hr/>
          <VklFuncComp name="Mai Binh An" address="K23CNT2" company = "FIT-NTU" />
      </div>
      <div className="alert alert-info">
        <VklFuncComp1 renderInfo={users} />
      </div>
        <VklClassComp />
        {/* chuyen  du lieu tu vklApp -> xuong vklclasscomp  */}
        <VklClassComp name="K23CNT1" renderUsers={users} />
    </div>
  );
}

export default vklApp;
