import './style.css';

//bien namefunction =('tham so dau vao) =>{ lenh}
const MyComponent =()=>{
    //html + js + css
    return(
      <>
        <div> Nguyen anh duy - hoidanit</div>
        <div className="child"
              style={
                {borderRadius: "10px;"}
              }
        >tag </div>      
      </>
    );
  };
  export default MyComponent;