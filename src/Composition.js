import React from 'react';
function Dialog(props) {
    return(
        <div style={{border:`5px solid ${props.color||"green"}`}}>
            {/*相当于使用匿名插槽*/}
            {props.children}
            {/*具名插槽*/}
            {props.btn}
        </div>
    )

}
function Composition(props) {
    const confimBtn=(
        <button onClick={()=>alert('hi~')}>确认</button>
    )


    return (
        <div>
            <h1>组件复合</h1>
            <Dialog color={"pink"} btn={confimBtn}>
                <h1>复合组件Dialog</h1>
                <p>加油加油</p>
            </Dialog>
        </div>
    );
}

export default Composition;