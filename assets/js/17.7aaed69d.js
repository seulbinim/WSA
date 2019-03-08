(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{323:function(s,t,a){"use strict";a.r(t);var n=a(6),e=Object(n.a)({},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"유연한-박스-레이아웃"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#유연한-박스-레이아웃","aria-hidden":"true"}},[s._v("#")]),s._v(" 유연한 박스 레이아웃")]),s._v(" "),a("p",[s._v("웹이 형태가 다양해지고, 표시되는 기기가 다양해지면서 요소의 배치도 유연해질 필요성이 생겼습니다. CSS3에는 기존의 position 속성을 바탕으로 한 배치 방법과는 다른 방식으로 요소를 배치할 수 있는 새로운 방법이 추가되었습니다. 이번에는 CSS3에서 새롭게 추가된 요소 배치 방법인 Flexible Box Layout에 대해 살펴보겠습니다.")]),s._v(" "),a("h2",{attrs:{id:"display-flex-display-inline–flex"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#display-flex-display-inline–flex","aria-hidden":"true"}},[s._v("#")]),s._v(" display : flex, display : inline–flex")]),s._v(" "),a("p",[s._v("CSS3에 추가된 유연한 박스 레이아웃을 사용하려면 가장 먼저 기존에 사용했던 display 속성에 추가된 새로운 값인 flex 또는 inline-flex를 지정해야 합니다. 두 값의 차이점은 블록 수준의 유연한 박스를 생성할 것인지, 인라인 수준의 유연한 박스를 생성할 것인지를 결정할 수 있다는 것에 있습니다.")]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* 예시 */")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("div")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("display")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" flex "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"flex–direction-속성"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flex–direction-속성","aria-hidden":"true"}},[s._v("#")]),s._v(" flex–direction 속성")]),s._v(" "),a("p",[s._v("flex-direction은 요소 박스의 배치 방향을 지정하는 속성입니다. flex-direction 속성은 요소 박스가 반드시 display 속성 값으로 flex 또는 inline-flex로 지정되어 있어야 하며, row, column, rowreverse, column-reverse 등의 속성 값을 지정하여 flex 박스에 포함된 자식 요소 박스를 가로 또는 세로 방향이나 역방향으로 표시합니다.")]),s._v(" "),a("div",{staticStyle:{width:"100%"}},[a("base-img",{attrs:{src:"design/flex-direction.png",alt:""}})],1),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* 예시 */")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("div")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("display")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" flex "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("flex-direction")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" row "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h2",{attrs:{id:"flex–wrap-속성"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flex–wrap-속성","aria-hidden":"true"}},[s._v("#")]),s._v(" flex–wrap 속성")]),s._v(" "),a("p",[s._v("flew-wrap은 flex로 지정된 요소에 포함된 자식 요소 박스가 한 줄 또는 여러 줄로 배치될 것인지를 지정하는 속성으로, 초기값 none은 모든 자식 요소를 하나의 단일 행이나 열에 표시합니다. 만약 flex-wrap 속성 값을 wrap으로 지정할 경우, 모든 자식 요소는 여러 줄로 배치됩니다. wrap-reverse는 역방향으로 여러 줄을 배치합니다.")]),s._v(" "),a("div",{staticStyle:{width:"75%"}},[a("base-img",{attrs:{src:"design/flex-wrap.png",alt:""}})],1),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* 예시 */")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("div")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("display")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" flex "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("flex-direction")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" row "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("flex-wrap")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" wrap "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h2",{attrs:{id:"flex–flow-속성"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flex–flow-속성","aria-hidden":"true"}},[s._v("#")]),s._v(" flex–flow 속성")]),s._v(" "),a("p",[s._v("flew-flow은 flex-direction 속성과 flex-flow 속성을 일괄적으로 지정할 수 있는 대표 속성입니다.")]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* 예시 */")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("div")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("display")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" flex "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("flex-direction")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" row "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("flex-wrap")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" wrap "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h2",{attrs:{id:"order-속성"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#order-속성","aria-hidden":"true"}},[s._v("#")]),s._v(" order 속성")]),s._v(" "),a("p",[s._v("order는 요소 박스의 배치 순서를 지정하기 위한 속성입니다. 속성 값에 지정된 숫자 중 가장 낮은 번호의 요소가 가장 먼저 배치됩니다. 만약 요소 박스의 order 값이 동일하게 지정된 경우에는 일반적인 흐름에 따라 먼저 배치된 요소가 우선합니다.")]),s._v(" "),a("div",{staticStyle:{width:"50%"}},[a("base-img",{attrs:{src:"design/order.png",alt:""}})],1),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* 예시 */")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("div")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("display")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" flex "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("flex-direction")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" row "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("flex-wrap")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" wrap "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".box1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("order")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 1 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".box4")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("order")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" -1 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h2",{attrs:{id:"flex-grow-속성"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flex-grow-속성","aria-hidden":"true"}},[s._v("#")]),s._v(" flex-grow 속성")]),s._v(" "),a("p",[s._v("flex-grow 속성은 flex로 정의된 부모 요소가 자식 요소보다 크거나 작을 경우, 자식 요소의 크기를 조정하는 방법으로 자식 요소에 확대 비율을 지정하여 부모 요소의 크기에 맞게 자동으로 크기를 조정합니다. 이때 속성 값에는 음수 값을 사용할 수 없습니다.")]),s._v(" "),a("p",[s._v("만일 flex로 정의된 부모 요소의 너비가 500px이고, 부모 요소에 포함된 A, B, C의 자식 요소가 각각 100px의 크기로 지정된 경우, A, B, C 요소 박스에 flex-grow를 선언하지 않은 경우에는 다음과 같이 나타납니다.")]),s._v(" "),a("div",{staticStyle:{width:"50%"}},[a("base-img",{attrs:{src:"design/flex-grow.png",alt:""}})],1),s._v(" "),a("p",[s._v("그러나 A, B, C 요소 박스에 flex-grow를 각각 1, 2, 3으로 지정하면 남는 영역인 200px을 4등분하여 각각 1/4, 2/4, 1/4 크기를 기존 너비에 더해 다음과 같이 나타납니다.")]),s._v(" "),a("div",{staticStyle:{width:"50%"}},[a("base-img",{attrs:{src:"design/flex-grow2.png",alt:""}})],1),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* 예시 */")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("div")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("display")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" flex "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("flex-direction")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" row "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".box1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("flex-grow")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 1 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".box2")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("flex-grow")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 2 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".box3")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("flex-grow")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 1 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h2",{attrs:{id:"flex-shrink-속성"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flex-shrink-속성","aria-hidden":"true"}},[s._v("#")]),s._v(" flex-shrink 속성")]),s._v(" "),a("p",[s._v("flex-shrink 속성은 flex-grow 속성과 마찬가지로 flex로 정의된 부모 요소가 자식 요소보다 크거나 작을 경우 자식 요소의 크기를 조정하는 방법으로, 자식 요소에 축소 비율을 지정하여 부모 요소의 크기에 맞게 자동으로 조정합니다. 이때 속성 값에는 음수 값을 사용할 수 없습니다.")]),s._v(" "),a("p",[s._v("만일 flex로 정의된 부모 요소의 너비가 500px이고, 부모 요소에 포함된 A, B, C의 자식 요소가 각각 200px의 크기로 지정된 경우, A, B, C 요소 박스가 배치되기 위해서는 총 600px의 영역이 필요합니다. 그러나 부모 요소의 너비보다 100px이 추가되어 있기 때문에 각각의 박스 크기를 축소할 필요가 있습니다.")]),s._v(" "),a("p",[s._v("이때 축소 크기를 결정하는 비율은 flex-shrink에 정의된 값이며, A, B, C 박스의 flex-shrink 속성 값이 각각 1, 2, 1로 지정된 경우에는 다음과 같이 나타납니다.")]),s._v(" "),a("div",{staticStyle:{width:"50%"}},[a("base-img",{attrs:{src:"design/flex-shrink.png",alt:""}})],1),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* 예시 */")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("div")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("display")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" flex "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("flex-direction")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" row "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".box1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("flex-shrink")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 1 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".box2")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("flex-shrink")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 2 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".box3")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("flex-shrink")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 1 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h2",{attrs:{id:"flex-basis-속성"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flex-basis-속성","aria-hidden":"true"}},[s._v("#")]),s._v(" flex-basis 속성")]),s._v(" "),a("p",[s._v("flex-basis는 유연하게 조절되는 박스의 기준 크기를 지정하는 속성으로, width 속성에서 사용할 수 있는 값과 동일합니다. 만일 width 속성과 flex-basis 속성이 함께 선언된 경우, flex로 정의된 요소는 flexbasis 속성 값으로 적용됩니다.")]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* 예시 */")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("div")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("display")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" flex "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("flex-direction")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" row "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".box1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("flex-grow")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 1 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("flex-basis")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 100px "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".box2")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("flex-grow")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 2 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("flex-basis")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 100px "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".box3")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("flex-grow")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 1 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("flex-basis")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 100px "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br")])]),a("h2",{attrs:{id:"flex-속성"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flex-속성","aria-hidden":"true"}},[s._v("#")]),s._v(" flex 속성")]),s._v(" "),a("p",[s._v("flex는 flex-grow 속성과 flex-shrink 속성 그리고 flex-basis 속성을 일괄적으로 지정할 수 있는 대표 속성입니다.")]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* 예시 */")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("div")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("display")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" flex "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("flex-direction")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" row "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".box1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("flex")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 1 1 100px "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".box2")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("flex")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 2 2 100px "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".box3")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("flex")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 1 1 100px "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h2",{attrs:{id:"justify–content-속성"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#justify–content-속성","aria-hidden":"true"}},[s._v("#")]),s._v(" justify–content 속성")]),s._v(" "),a("p",[s._v("justify-content는 flex로 지정된 부모 요소 내에서 자식 요소의 정렬 방식을 지정하기 위한 속성입니다. 해당 정렬은 flex-direction 속성 값이 행 방향이냐, 열 방향이냐에 따라 start와 end 영역이 결정됩니다. 만약 자식 요소가 행 방향으로 정의되어 있을 경우 flex-start는 부모 요소의 좌측, flex-end는 부모 요소의 우측을 의미합니다. 열 방향일 경우에는 상단과 하단이 각각 flex-start와 flex-end로 지정됩니다.")]),s._v(" "),a("p",[s._v("다음 그림은 각각 flex-start, flex-end, center, space-between, space-around 값을 지정했을 경우 정렬되는 결과입니다.")]),s._v(" "),a("div",{staticStyle:{display:"flex","flex-wrap":"wrap"}},[a("div",{staticStyle:{width:"50%"}},[a("base-img",{attrs:{src:"design/flex-start.png",alt:""}})],1),s._v(" "),a("div",{staticStyle:{width:"50%"}},[a("base-img",{attrs:{src:"design/flex-end.png",alt:""}})],1),s._v(" "),a("div",{staticStyle:{width:"50%"}},[a("base-img",{attrs:{src:"design/center.png",alt:""}})],1),s._v(" "),a("div",{staticStyle:{width:"50%"}},[a("base-img",{attrs:{src:"design/space-between.png",alt:""}})],1),s._v(" "),a("div",{staticStyle:{width:"50%"}},[a("base-img",{attrs:{src:"design/space-around.png",alt:""}})],1)]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* 예시 */")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("div")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("display")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" flex "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("flex-direction")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" row "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("justify-content")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" space-between "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h2",{attrs:{id:"align–content-속성"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#align–content-속성","aria-hidden":"true"}},[s._v("#")]),s._v(" align–content 속성")]),s._v(" "),a("p",[s._v("align-content는 flex로 지정된 부모 요소 내에서 여러 개의 행이나 열로 구성된 요소 박스의 정렬을 지정하기 위한 속성입니다.")]),s._v(" "),a("div",{staticStyle:{display:"flex","flex-wrap":"wrap"}},[a("div",{staticStyle:{width:"50%"}},[a("base-img",{attrs:{src:"design/flex-start2.png",alt:""}})],1),s._v(" "),a("div",{staticStyle:{width:"50%"}},[a("base-img",{attrs:{src:"design/flex-end2.png",alt:""}})],1),s._v(" "),a("div",{staticStyle:{width:"50%"}},[a("base-img",{attrs:{src:"design/center2.png",alt:""}})],1),s._v(" "),a("div",{staticStyle:{width:"50%"}},[a("base-img",{attrs:{src:"design/space-between2.png",alt:""}})],1),s._v(" "),a("div",{staticStyle:{width:"50%"}},[a("base-img",{attrs:{src:"design/space-around2.png",alt:""}})],1),s._v(" "),a("div",{staticStyle:{width:"50%"}},[a("base-img",{attrs:{src:"design/stretch.png",alt:""}})],1)]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* 예시 */")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("div")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("display")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" flex "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("flex-direction")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" row "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("align-content")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" center "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h2",{attrs:{id:"align–items-align–self-속성"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#align–items-align–self-속성","aria-hidden":"true"}},[s._v("#")]),s._v(" align–items, align–self 속성")]),s._v(" "),a("p",[s._v("align-items, align-self 속성은 라인 박스의 높이에 따라 배치되는 요소 박스에 배치에 영향을 주는 교차축(cross axis)을 지정하는 속성입니다. flex-direction 속성 값은 row 또는 column에 따라 요소 박스가 배치되는데, 이때 요소 박스의 너비나 높이가 기준 축으로 정해집니다.")]),s._v(" "),a("p",[s._v("전체 요소의 기준축을 동일하게 지정할 때는 align-items 속성을 flex가 정의된 부모 요소에 지정해야 합니다. 만약 자식 요소마다 기준 축을 지정해야 할 경우에는 align-self 속성으로 지정할 수 있습니다.")]),s._v(" "),a("div",{staticStyle:{width:"50%"}},[a("base-img",{attrs:{src:"design/align-items.png",alt:""}})],1),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* 예시 */")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("div")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("display")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" flex "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("flex-direction")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" row "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("align-items")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" center "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* 예시 */")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("div")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("display")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" flex "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("flex-direction")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" row "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".box1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("align-self")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" flex-start "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".box2")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("align-self")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" flex-end "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".box3")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("align-self")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" center "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".box4")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("align-self")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" baseline "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".box5")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("align-self")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" stretch "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("p",[s._v("🌐"),a("strong",[s._v("좀 더 자세한 정보는 MDN 기술 문서를 참조하시기 바랍니다.")])]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Glossary/Flex",target:"_blank",rel:"noopener noreferrer"}},[s._v("display: flex"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://developer.mozilla.org/ko/docs/Web/CSS/flex-direction",target:"_blank",rel:"noopener noreferrer"}},[s._v("flex–direction 속성"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://developer.mozilla.org/ko/docs/Web/CSS/flex-wrap",target:"_blank",rel:"noopener noreferrer"}},[s._v("flex–wrap 속성"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://developer.mozilla.org/ko/docs/Web/CSS/flex-flow",target:"_blank",rel:"noopener noreferrer"}},[s._v("flex–flow 속성"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://developer.mozilla.org/ko/docs/Web/CSS/order",target:"_blank",rel:"noopener noreferrer"}},[s._v("order 속성"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://developer.mozilla.org/ko/docs/Web/CSS/flex-grow",target:"_blank",rel:"noopener noreferrer"}},[s._v("flex–grow 속성"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://developer.mozilla.org/ko/docs/Web/CSS/flex-shrink",target:"_blank",rel:"noopener noreferrer"}},[s._v("flex–shrink 속성"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://developer.mozilla.org/ko/docs/Web/CSS/flex-basis",target:"_blank",rel:"noopener noreferrer"}},[s._v("flex–basis 속성"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://developer.mozilla.org/ko/docs/Web/CSS/flex",target:"_blank",rel:"noopener noreferrer"}},[s._v("flex 속성"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content",target:"_blank",rel:"noopener noreferrer"}},[s._v("justify–content 속성"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://developer.mozilla.org/ko/docs/Web/CSS/align-content",target:"_blank",rel:"noopener noreferrer"}},[s._v("align–content 속성"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://developer.mozilla.org/ko/docs/Web/CSS/align-items",target:"_blank",rel:"noopener noreferrer"}},[s._v("align–items 속성"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://developer.mozilla.org/ko/docs/Web/CSS/align-self",target:"_blank",rel:"noopener noreferrer"}},[s._v("align–self 속성"),a("OutboundLink")],1)])])])},[],!1,null,null,null);t.default=e.exports}}]);