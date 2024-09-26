import './style.css';

//bien namefunction =('tham so dau vao) =>{ lenh}
const MyComponent =()=>{
    //html + js + css
    // const hoidanit="eric";
    // const hoidanit=25;
    // const hoidanit=true;
    // const hoidanit=undefined;
    // const hoidanit=null;
    const hoidanit=[1,2,3,4,5,6,7];
    // const hoidanit={
    //   name: 'nguyen anh duy',
    //   age :23
    // };


    return(
      <>
        <div>{JSON.stringify(hoidanit)} - hoidanit update </div>
        <div>{console.log('hello world from JSX on html')}</div>
        <div className="child"
              style={
                {borderRadius: "10px;"}
              }
        >child</div>      
      </>
    );
  };
  export default MyComponent;