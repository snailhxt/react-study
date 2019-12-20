// import React, {Component} from 'react';
//
// class ProsDemo extends Component {
//     render() {
//         return (
//             <div>
//                <h1>{this.props.title}</h1>
//             </div>
//         );
//     }
// }
//
// export default ProsDemo;


//快速创建函数组件，rsf
import React from 'react';

// function ProsDemo(props) {
//     return (
//         <div>
//             {props.title}
//         </div>
//     );
// }

//解构的写法 title参数的传入（从父组件）
function ProsDemo({title}) {
    return (
        <div>
            {title}
        </div>
    );
}

export default ProsDemo;

