window.REVIEW_MINDMAPS['5'] = {
  "title": "导数和微分",
  "description": "从差商极限出发，连接可导条件、求导法则、参数曲线、高阶导数和微分。点击节点查看公式、条件与教材位置；虚线说明跨分支联系。",
  "nodes": [
    {
      "id": "root",
      "label": "导数和微分",
      "x": 425,
      "y": 10,
      "explanation": "导数刻画函数在一点的瞬时变化率；微分用增量的线性主部描述该点附近的变化。",
      "formula": "\\(dy=f'(x)\\,dx\\)",
      "reference": "华师大第六版上册第五章，印刷第 87 页起（PDF 第 100 页起）。",
      "section": "5.1",
      "question": "5.1:example:1"
    },
    {
      "id": "concept",
      "label": "导数的概念",
      "x": 70,
      "y": 100,
      "explanation": "导数由差商的有限极限定义，既可用于分析变化率，也可给出曲线在该点的切线斜率。",
      "formula": "\\(\\displaystyle f'(a)=\\lim_{h\\to0}\\frac{f(a+h)-f(a)}h\\)",
      "reference": "华师大 §5.1，印刷第 87—92 页。",
      "section": "5.1",
      "question": "5.1:example:1"
    },
    {
      "id": "rules",
      "label": "求导与高阶",
      "x": 425,
      "y": 100,
      "explanation": "先检查所求导函数在点处的定义与可导条件，再按四则法则、复合法则和参数关系计算。",
      "formula": "\\((uv)'=u'v+uv'\\)",
      "reference": "华师大 §5.2—§5.4，印刷第 94—108 页。",
      "section": "5.2",
      "question": "5.2:example:2"
    },
    {
      "id": "differential",
      "label": "微分与近似",
      "x": 780,
      "y": 100,
      "explanation": "可微时，函数增量分为关于自变量增量的线性主部和更高阶的余项；线性主部就是微分。",
      "formula": "\\(\\Delta y=f'(a)\\Delta x+o(\\Delta x)\\)",
      "reference": "华师大 §5.5，印刷第 109—113 页。",
      "section": "5.5",
      "question": "5.5:example:1"
    },
    {
      "id": "definition",
      "label": "差商与可导",
      "x": 10,
      "y": 210,
      "explanation": "f 在 a 附近有定义时，差商的有限双侧极限存在才称为在 a 可导；求某点导数不要直接假设公式在该点可用。",
      "formula": "\\(\\displaystyle f'(a)=\\lim_{x\\to a}\\frac{f(x)-f(a)}{x-a}\\)",
      "reference": "华师大 §5.1 定义 1，印刷第 88 页。",
      "section": "5.1",
      "question": "5.1:example:1"
    },
    {
      "id": "onesided",
      "label": "左右导数",
      "x": 170,
      "y": 210,
      "explanation": "在内点处，左右导数都存在且相等，才有导数；端点处按相应一侧讨论。",
      "formula": "\\(f'_-(a)=f'_+(a)\\Rightarrow f'(a)\\text{存在}\\)",
      "reference": "华师大 §5.1 定义 2、定理 5.2，印刷第 89 页。",
      "section": "5.1",
      "question": "5.1:example:5"
    },
    {
      "id": "algebra",
      "label": "四则求导",
      "x": 330,
      "y": 210,
      "explanation": "两函数在点处可导时可用和、积法则；商法则还要求分母在该点不为零。",
      "formula": "\\(\\displaystyle (u/v)'=\\frac{u'v-uv'}{v^2}\\quad(v\\ne0)\\)",
      "reference": "华师大 §5.2 定理 5.4—5.6，印刷第 94—95 页。",
      "section": "5.2",
      "question": "5.2:example:2"
    },
    {
      "id": "chain",
      "label": "复合求导",
      "x": 490,
      "y": 210,
      "explanation": "内层在 a 可导，外层在内层取值处可导，才能应用链式法则；求导时要乘内层导数。",
      "formula": "\\((f\\circ g)'(a)=f'(g(a))g'(a)\\)",
      "reference": "华师大 §5.2 定理 5.8，印刷第 98 页。",
      "section": "5.2",
      "question": "5.2:example:7"
    },
    {
      "id": "parametric",
      "label": "参数曲线",
      "x": 650,
      "y": 210,
      "explanation": "若参数函数可导且 x'(t0)≠0，参数曲线在该点的切线斜率可用导数之比；x'=0 的情况不能直接套用。",
      "formula": "\\(\\displaystyle \\frac{dy}{dx}=\\frac{dy/dt}{dx/dt},\\quad dx/dt\\ne0\\)",
      "reference": "华师大 §5.3 参变量函数的导数，印刷第 102—103 页。",
      "section": "5.3",
      "question": "5.3:exercise:1"
    },
    {
      "id": "dy",
      "label": "微分的定义",
      "x": 810,
      "y": 210,
      "explanation": "当 Δx→0 时，若增量等于 AΔx 加上 o(Δx)，称在该点可微；一元情形下 A 是该点导数。",
      "formula": "\\(\\Delta y=A\\Delta x+o(\\Delta x),\\qquad dy=A\\,dx\\)",
      "reference": "华师大 §5.5 定义与定理 5.9，印刷第 109—110 页。",
      "section": "5.5",
      "question": "5.5:example:1"
    },
    {
      "id": "continuous",
      "label": "可导与连续",
      "x": 10,
      "y": 340,
      "explanation": "若函数在一点可导，则它在该点连续；反过来不成立，例如绝对值函数在 0 连续但不可导。",
      "formula": "\\(\\text{可导}\\Rightarrow\\text{连续}\\)",
      "reference": "华师大 §5.1 定理 5.1 与例 2，印刷第 88—89 页。",
      "section": "5.1",
      "question": "5.1:example:2"
    },
    {
      "id": "tangent",
      "label": "切线方程",
      "x": 170,
      "y": 340,
      "explanation": "导数存在且有限时，它给出切线斜率；没有有限导数并不自动排除竖直切线等其他几何情形。",
      "formula": "\\(y-f(a)=f'(a)(x-a)\\)",
      "reference": "华师大 §5.1 导数的几何意义及例 7，印刷第 91 页。",
      "section": "5.1",
      "question": "5.1:example:7"
    },
    {
      "id": "higher",
      "label": "高阶导数",
      "x": 330,
      "y": 340,
      "explanation": "二阶导数是对一阶导函数再求导；讨论某点高阶导数时应先确认前一阶导函数在该点附近有定义。",
      "formula": "\\(f''(a)=\\displaystyle\\lim_{h\\to0}\\frac{f'(a+h)-f'(a)}h\\)",
      "reference": "华师大 §5.4 高阶导数定义，印刷第 104—105 页。",
      "section": "5.4",
      "question": "5.4:example:6"
    },
    {
      "id": "leibniz",
      "label": "乘积的高阶导数",
      "x": 490,
      "y": 340,
      "explanation": "两个函数具有所需阶数的导数时，可用莱布尼茨公式展开乘积的 n 阶导数；约定零阶导数为原函数。",
      "formula": "\\(\\displaystyle(uv)^{(n)}=\\sum_{k=0}^n {n\\choose k}u^{(k)}v^{(n-k)}\\)",
      "reference": "华师大 §5.4 莱布尼茨公式和例 4，印刷第 106 页。",
      "section": "5.4",
      "question": "5.4:example:4"
    },
    {
      "id": "approx",
      "label": "线性近似",
      "x": 650,
      "y": 340,
      "explanation": "若函数在 a 可导且 h 较小，可用线性主部近似增量；近似误差是相对于 h 的高阶无穷小，并非恒等式。",
      "formula": "\\(f(a+h)=f(a)+f'(a)h+o(h)\\)",
      "reference": "华师大 §5.5 微分在近似计算中的应用，印刷第 112 页。",
      "section": "5.5",
      "question": "5.5:example:4"
    },
    {
      "id": "invariant",
      "label": "一阶微分形式",
      "x": 810,
      "y": 340,
      "explanation": "若 y=f(u)、u=g(x)，且相关函数可导，则 dy=f'(u)du；这一形式不变性不能照搬到高阶微分。",
      "formula": "\\(dy=f'(u)\\,du,\\quad du=g'(x)\\,dx\\)",
      "reference": "华师大 §5.5 微分形式不变性，印刷第 111—112 页。",
      "section": "5.5",
      "question": "5.5:example:2"
    }
  ],
  "edges": [
    {
      "from": "root",
      "to": "concept"
    },
    {
      "from": "root",
      "to": "rules"
    },
    {
      "from": "root",
      "to": "differential"
    },
    {
      "from": "concept",
      "to": "definition"
    },
    {
      "from": "concept",
      "to": "onesided"
    },
    {
      "from": "concept",
      "to": "continuous"
    },
    {
      "from": "concept",
      "to": "tangent"
    },
    {
      "from": "rules",
      "to": "algebra"
    },
    {
      "from": "rules",
      "to": "chain"
    },
    {
      "from": "rules",
      "to": "parametric"
    },
    {
      "from": "rules",
      "to": "higher"
    },
    {
      "from": "rules",
      "to": "leibniz"
    },
    {
      "from": "differential",
      "to": "dy"
    },
    {
      "from": "differential",
      "to": "approx"
    },
    {
      "from": "differential",
      "to": "invariant"
    },
    {
      "from": "definition",
      "to": "continuous",
      "cross": true,
      "text": "差商有有限极限时，函数增量可写为差商乘输入增量，从而函数增量趋于零；连续不能反推可导。"
    },
    {
      "from": "definition",
      "to": "tangent",
      "cross": true,
      "text": "差商的极限既是导数，也是在该点具有有限斜率的切线斜率。"
    },
    {
      "from": "chain",
      "to": "invariant",
      "cross": true,
      "text": "复合求导乘上内层导数；将 du=g'(x)dx 代入后，就得到一阶微分的形式不变性。"
    },
    {
      "from": "dy",
      "to": "approx",
      "cross": true,
      "text": "微分是增量的线性主部，余项比输入增量高阶，因此在增量较小时可用线性项近似。"
    }
  ]
};
