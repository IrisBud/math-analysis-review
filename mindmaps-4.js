window.REVIEW_MINDMAPS['4'] = {
  "title": "函数的连续性",
  "description": "从一点的连续性出发，连接间断点、闭区间上的性质、一致连续性及初等函数。点击节点查看条件、公式、教材位置和相关题；虚线表示跨分支联系。",
  "nodes": [
    {
      "id": "root",
      "label": "函数的连续性",
      "x": 425,
      "y": 10,
      "explanation": "连续性不仅关心附近的函数值，还要求点值存在，且与该点的极限一致。",
      "formula": "\\(\\displaystyle \\lim_{x\\to a}f(x)=f(a)\\)",
      "reference": "华师大第六版上册第四章，印刷第 68 页起（PDF 第 81 页起）。",
      "section": "4.1",
      "question": "4.1:exercise:3"
    },
    {
      "id": "point",
      "label": "一点处连续",
      "x": 70,
      "y": 100,
      "explanation": "先检查函数在点附近及该点的定义，再检查极限与点值；区间端点要按定义域检查相应单侧连续。",
      "formula": "\\(\\forall\\varepsilon>0,\\exists\\delta>0:\\ |x-a|<\\delta\\Rightarrow|f(x)-f(a)|<\\varepsilon\\)",
      "reference": "华师大 §4.1 定义 1，印刷第 68—69 页。",
      "section": "4.1",
      "question": "4.1:exercise:1"
    },
    {
      "id": "closed",
      "label": "闭区间性质",
      "x": 425,
      "y": 100,
      "explanation": "在闭区间上连续的函数具有有界、取得最大最小值和介值等性质；这些结论要逐条检查区间和连续性条件。",
      "formula": "\\(f\\in C[a,b]\\Rightarrow \\exists M,m:\\ m\\le f(x)\\le M\\)",
      "reference": "华师大 §4.2，印刷第 74—76 页。",
      "section": "4.2",
      "question": "4.2:example:3"
    },
    {
      "id": "extended",
      "label": "延伸与计算",
      "x": 780,
      "y": 100,
      "explanation": "从局部连续出发研究反函数、一致连续性及初等函数，不能把闭区间结论机械套用到开区间。",
      "formula": "\\(f\\text{在}a\\text{连续},\\ g\\text{在}f(a)\\text{连续}\\Rightarrow g\\circ f\\text{在}a\\text{连续}\\)",
      "reference": "华师大 §4.2—§4.3，印刷第 73—84 页；复合须满足取值与定义域条件。",
      "section": "4.2",
      "question": "4.2:example:1"
    },
    {
      "id": "definition",
      "label": "ε–δ 与点值",
      "x": 10,
      "y": 210,
      "explanation": "任给 ε>0，所取 δ 可依赖 ε 和固定点 a；连续性允许 x=a，并要求 f(a) 已定义。",
      "formula": "\\(|x-a|<\\delta\\Rightarrow|f(x)-f(a)|<\\varepsilon\\)",
      "reference": "华师大 §4.1 定义 1，印刷第 68—69 页。",
      "section": "4.1",
      "question": "4.1:exercise:1"
    },
    {
      "id": "discontinuity",
      "label": "间断点分类",
      "x": 170,
      "y": 210,
      "explanation": "两个有限单侧极限相同但点值缺失或不等于极限：可去；两侧有限且不同：跳跃；至少一侧无有限极限：第二类。",
      "formula": "\\(f(a-)=f(a+)\\ne f(a)\\quad\\text{可去}\\)",
      "reference": "华师大 §4.1 二、间断点及其分类，印刷第 69—70 页。",
      "section": "4.1",
      "question": "4.1:exercise:2"
    },
    {
      "id": "extreme",
      "label": "有界与最值",
      "x": 330,
      "y": 210,
      "explanation": "闭区间上的连续函数有界且取得最大值与最小值；区间不闭或不有界时不能直接套用。",
      "formula": "\\(f\\in C[a,b]\\Rightarrow\\exists x_m,x_M\\in[a,b]:f(x_m)\\le f(x)\\le f(x_M)\\)",
      "reference": "华师大 §4.2 定理 4.6 与有界性引理，印刷第 74—75 页。",
      "section": "4.2",
      "question": "4.2:exercise:6"
    },
    {
      "id": "ivt",
      "label": "介值与零点",
      "x": 490,
      "y": 210,
      "explanation": "闭区间上连续，且两端函数值异号时，至少有一个内点使函数值为零；零点唯一需要额外条件。",
      "formula": "\\(f\\in C[a,b],\\ f(a)f(b)<0\\Rightarrow\\exists\\xi\\in(a,b):f(\\xi)=0\\)",
      "reference": "华师大 §4.2 定理 4.7 及零点存在性推论，印刷第 75—76 页。",
      "section": "4.2",
      "question": "4.2:example:3"
    },
    {
      "id": "uniform",
      "label": "一致连续",
      "x": 650,
      "y": 210,
      "explanation": "对每个 ε 所选的同一个 δ 要对区间内所有点对都有效；逐点连续时 δ 可以依赖所选点。",
      "formula": "\\(\\forall\\varepsilon>0,\\exists\\delta>0,\\forall x,y\\in I:\\ |x-y|<\\delta\\Rightarrow|f(x)-f(y)|<\\varepsilon\\)",
      "reference": "华师大 §4.2 一致连续性定义，印刷第 78—80 页。",
      "section": "4.2",
      "question": "4.2:example:8"
    },
    {
      "id": "elementary",
      "label": "初等函数",
      "x": 810,
      "y": 210,
      "explanation": "使用基本初等函数时，先检查定义域；例如实对数要求自变量为正。复合函数还须检查内层值落在外层定义域中。",
      "formula": "\\(\\displaystyle\\lim_{x\\to a}\\ln x=\\ln a\\quad(a>0)\\)",
      "reference": "华师大 §4.3 指数、对数和幂函数的连续性，印刷第 82—84 页。",
      "section": "4.3",
      "question": "4.3:example:1"
    },
    {
      "id": "piecewise",
      "label": "单侧与分段",
      "x": 10,
      "y": 340,
      "explanation": "内点处分段函数连续，须左右极限都存在且等于点值；若题目含参数，可通过这一等式寻找条件。相关例题本身不含参数。",
      "formula": "\\(f(a-)=f(a+)=f(a)\\)",
      "reference": "华师大 §4.1 单侧连续性与例 2，印刷第 69 页。",
      "section": "4.1",
      "question": "4.1:example:2"
    },
    {
      "id": "local",
      "label": "局部保号",
      "x": 170,
      "y": 340,
      "explanation": "若 f 在 a 连续且 f(a)>0，则 a 的某个邻域内 f 保持正号；若点值为 0，不能直接推出附近为正。",
      "formula": "\\(f(a)>0\\Rightarrow \\exists\\delta>0:\\ |x-a|<\\delta\\Rightarrow f(x)>0\\)",
      "reference": "华师大 §4.2 定理 4.3，印刷第 73 页。",
      "section": "4.2",
      "question": "4.2:exercise:2"
    },
    {
      "id": "inverse",
      "label": "反函数连续",
      "x": 330,
      "y": 340,
      "explanation": "若 f 在闭区间上严格单调且连续，则反函数在其值域上连续；严格单调是这里保证反函数存在的条件。",
      "formula": "\\(f^{-1}(f(x))=x\\)",
      "reference": "华师大 §4.2 定理 4.8，印刷第 77 页。",
      "section": "4.2",
      "question": "4.2:example:5"
    },
    {
      "id": "root_method",
      "label": "构造辅助函数",
      "x": 490,
      "y": 340,
      "explanation": "要证明 f(x)=x 的解存在，可构造 h(x)=f(x)-x；还需证明 h 连续并在两端异号或某端已为零。",
      "formula": "\\(h(x)=f(x)-x,\\quad h(\\xi)=0\\Rightarrow f(\\xi)=\\xi\\)",
      "reference": "华师大 §4.2 例 4，印刷第 76—77 页。",
      "section": "4.2",
      "question": "4.2:example:4"
    },
    {
      "id": "not_uniform",
      "label": "逐点不等于一致",
      "x": 650,
      "y": 340,
      "explanation": "1/x 在 (0,1) 每一点连续，但靠近 0 时不存在对整个区间统一有效的 δ；逐点连续不一定一致连续。",
      "formula": "\\(f(x)=1/x,\\quad x\\in(0,1)\\)",
      "reference": "华师大 §4.2 例 9，印刷第 78 页。",
      "section": "4.2",
      "question": "4.2:example:9"
    },
    {
      "id": "power",
      "label": "变底数与指数",
      "x": 810,
      "y": 340,
      "explanation": "若 u(x)→a>0、v(x)→b，可先在充分小邻域确认 u(x)>0，再用对数和指数的连续性处理变底数幂。",
      "formula": "\\(u(x)\\to a>0,\\ v(x)\\to b\\Rightarrow u(x)^{v(x)}\\to a^b\\)",
      "reference": "华师大 §4.3 例 1，印刷第 83—84 页。",
      "section": "4.3",
      "question": "4.3:example:1"
    }
  ],
  "edges": [
    {
      "from": "root",
      "to": "point"
    },
    {
      "from": "root",
      "to": "closed"
    },
    {
      "from": "root",
      "to": "extended"
    },
    {
      "from": "point",
      "to": "definition"
    },
    {
      "from": "point",
      "to": "discontinuity"
    },
    {
      "from": "point",
      "to": "piecewise"
    },
    {
      "from": "point",
      "to": "local"
    },
    {
      "from": "closed",
      "to": "extreme"
    },
    {
      "from": "closed",
      "to": "ivt"
    },
    {
      "from": "closed",
      "to": "inverse"
    },
    {
      "from": "closed",
      "to": "root_method"
    },
    {
      "from": "extended",
      "to": "uniform"
    },
    {
      "from": "extended",
      "to": "elementary"
    },
    {
      "from": "extended",
      "to": "not_uniform"
    },
    {
      "from": "extended",
      "to": "power"
    },
    {
      "from": "discontinuity",
      "to": "piecewise",
      "cross": true,
      "text": "分段点要先比较两侧极限；如果相同但与点值不符或点值缺失，就是可去间断，不能只看一个单侧极限。"
    },
    {
      "from": "extreme",
      "to": "uniform",
      "cross": true,
      "text": "闭区间上的连续函数既有界并取得最值，也一致连续；两者都依赖闭区间连续这一共同条件，有界本身不能保证一致连续。"
    },
    {
      "from": "ivt",
      "to": "root_method",
      "cross": true,
      "text": "构造辅助函数后，可将不动点问题变成零点问题，再核验连续与端点异号。"
    },
    {
      "from": "inverse",
      "to": "elementary",
      "cross": true,
      "text": "指数函数连续且严格单调，其反函数对数函数的连续性可由反函数连续定理说明。"
    }
  ]
};
