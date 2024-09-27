const TodoData =(props)=>{ //chỗn props này có thể truyền vô key /{name}/ của obj được truyền từ component cha (app.jsx) sang component con (tododata.jsx) cái này hơi vắng tắt nên suy sét khi sử dụng
    //props ở đây mang kiểu đói tượng 

    console.log('>>> check props', props);
    const{ name ,age ,data}= props;
    // const name =props.name ;
    // const age = props.age ;
    // const dâta = props.data ;
    console.log('>>> check todo list ', props);
    return (
        <div className='todo-data'>
            <div>my name is {name}</div>
            {/* <div>Im {age} year old</div>
            <div>where i am was born is {data.country}</div> */}
            <div> {JSON.stringify(props.todoList) }</div>
            <div>Learning </div>
            <div>watching tv </div>
            <div></div>
        </div>
    )
}
export { TodoData };
