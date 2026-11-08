window.REVIEW_MINDMAPS['3'] = {
  "title": "函数极限",
  "description": "从去心邻域出发，连接极限定义、存在性、运算和求解方法。点击节点查看条件、公式、教材位置及相关题；虚线表示跨分支联系。",
  "nodes": [
    {
      "id": "root",
      "label": "函数极限",
      "x": 425,
      "y": 10,
      "explanation": "研究 x 接近有限点或无穷远时，函数值的变化；是否有极限和函数在点上的取值是不同的问题。",
      "formula": "\\(\\lim_{x\\to a}f(x)=A\\)",
      "reference": "华师大第六版上册第三章，印刷第 43 页起（PDF 第 56 页起）。",
      "section": "3.1",
      "question": "3.1:example:3"
    },
    {
      "id": "definition",
      "label": "极限的定义",
      "x": 70,
      "y": 100,
      "explanation": "针对 x 趋于有限点、正无穷或负无穷，要使用与趋近方式相对应的邻域及量词。",
      "formula": "\\(\\forall\\varepsilon>0,\\ \\exists\\delta>0\\)",
      "reference": "华师大 §3.1，印刷第 43—48 页。",
      "section": "3.1",
      "question": "3.1:example:5"
    },
    {
      "id": "properties",
      "label": "极限性质与存在",
      "x": 425,
      "y": 100,
      "explanation": "先核实各个极限存在和运算条件，再使用四则运算或迫敛；不存在时可用归结原理分析。",
      "formula": "\\(\\lim(f+g)=\\lim f+\\lim g\\)",
      "reference": "华师大 §3.2—§3.3，印刷第 48—55 页。",
      "section": "3.2",
      "question": "3.2:example:2"
    },
    {
      "id": "methods",
      "label": "计算与应用",
      "x": 780,
      "y": 100,
      "explanation": "重要极限、无穷小的比较以及渐近线都依赖具体的极限过程和适用条件；下式比较的是同一过程中两个无穷小，且分母在所讨论邻域内不为零。",
      "formula": "\\(\\alpha(x)\\sim\\beta(x)\\iff \\alpha(x)/\\beta(x)\\to1\\)",
      "reference": "华师大 §3.4—§3.5，印刷第 55—66 页。",
      "section": "3.5",
      "question": "3.5:example:2"
    },
    {
      "id": "ed",
      "label": "有限点 ε–δ",
      "x": 10,
      "y": 210,
      "explanation": "先任给 ε>0，再找允许依赖 ε 的 δ>0；只要求去心邻域内的函数值满足误差要求。",
      "formula": "\\(\\forall\\varepsilon>0,\\exists\\delta>0:\\ 0<|x-a|<\\delta\\Rightarrow|f(x)-A|<\\varepsilon\\)",
      "reference": "华师大 §3.1 定义 2，印刷第 44—45 页。",
      "section": "3.1",
      "question": "3.1:example:5"
    },
    {
      "id": "infinity",
      "label": "无穷远处的极限",
      "x": 170,
      "y": 210,
      "explanation": "x 趋于正无穷时，用 x>M 代替有限点的去心邻域；负无穷和双向无穷须分别检查。",
      "formula": "\\(\\forall\\varepsilon>0,\\exists M>0:\\ x>M\\Rightarrow|f(x)-A|<\\varepsilon\\)",
      "reference": "华师大 §3.1 定义 1，印刷第 43—44 页。",
      "section": "3.1",
      "question": "3.1:example:1"
    },
    {
      "id": "heine",
      "label": "归结原理",
      "x": 330,
      "y": 210,
      "explanation": "有限点极限存在，当且仅当每个位于定义域、避开该点且趋于它的数列，都使对应函数值趋于同一极限。构造两列不同极限可证不存在。",
      "formula": "\\(x_n\\in D_f\\setminus\\{a\\},\\ x_n\\to a\\Rightarrow f(x_n)\\to A\\)",
      "reference": "华师大 §3.3 归结原理，印刷第 52—53 页。",
      "section": "3.3",
      "question": "3.3:example:1"
    },
    {
      "id": "ops",
      "label": "运算与复合",
      "x": 490,
      "y": 210,
      "explanation": "和、积法则要求相应极限存在；商还要求分母极限不为零。复合极限定理另有内层函数避开特殊点等条件。",
      "formula": "\\(f\\to A,\\ g\\to B\\ne0\\Rightarrow f/g\\to A/B\\)",
      "reference": "华师大 §3.2 定理 3.7—3.8，印刷第 50—51 页。",
      "section": "3.2",
      "question": "3.2:example:2"
    },
    {
      "id": "squeeze",
      "label": "迫敛性",
      "x": 490,
      "y": 340,
      "explanation": "在所讨论的去心邻域内，目标函数夹在两函数之间；当两侧都趋于同一极限时，中间也趋于该极限。",
      "formula": "\\(g\\le f\\le h,\\ g,h\\to A\\Rightarrow f\\to A\\)",
      "reference": "华师大 §3.2 迫敛性，印刷第 49—50 页。",
      "section": "3.2",
      "question": "3.2:example:1"
    },
    {
      "id": "exist",
      "label": "存在与不存在",
      "x": 330,
      "y": 340,
      "explanation": "可利用单调有界条件判断适当单侧极限存在，也可利用归结原理或柯西准则证明极限不存在；单独有界并不够。下式中两列均在 f 的定义域内且不取 a，两个函数值数列有不同的极限。",
      "formula": "\\(\\exists x_n,y_n\\to a:\\ \\lim f(x_n)\\ne\\lim f(y_n)\\Rightarrow\\lim f(x)\\text{不存在}\\)",
      "reference": "华师大 §3.3，印刷第 52—55 页。",
      "section": "3.3",
      "question": "3.3:example:1"
    },
    {
      "id": "special",
      "label": "第一重要极限",
      "x": 650,
      "y": 210,
      "explanation": "先证明正弦的几何不等式及余弦的极限，再用迫敛性得到第一重要极限；不能把结论用于其自身的证明。",
      "formula": "\\(\\displaystyle\\lim_{t\\to0}\\frac{\\sin t}{t}=1\\)",
      "reference": "华师大 §3.4，印刷第 55—56 页。",
      "section": "3.4",
      "question": "3.4:example:1"
    },
    {
      "id": "oneinf",
      "label": "1 的无穷型",
      "x": 810,
      "y": 210,
      "explanation": "先确认底数为正并将其写成 1+u，使 u→0；配合指数寻找重要极限结构。一般对数法用到后面的指数、对数连续性。",
      "formula": "\\(\\displaystyle\\lim_{u\\to0}(1+u)^{1/u}=e\\)",
      "reference": "华师大 §3.4，印刷第 56—58 页；一般对数法见 §4.3。",
      "section": "3.4",
      "question": "3.4:example:5"
    },
    {
      "id": "equiv",
      "label": "等价无穷小",
      "x": 650,
      "y": 340,
      "explanation": "在同一极限过程中，比较的两个量均为无穷小且分母在去心邻域内不为零时，两者之比趋于 1 才是等价；在乘除中可适当替换，和差中的各项不能随意逐项替换。",
      "formula": "\\(\\sin t\\sim t,\\quad 1-\\cos t\\sim t^2/2\\quad(t\\to0)\\)",
      "reference": "华师大 §3.5，印刷第 60—62 页。",
      "section": "3.5",
      "question": "3.5:example:2"
    },
    {
      "id": "asym",
      "label": "渐近线",
      "x": 810,
      "y": 340,
      "explanation": "分别检查有限点附近的无穷极限和正、负无穷远的行为；水平线可视为斜率为零的直线渐近线。",
      "formula": "\\(\\displaystyle\\lim_{x\\to\\pm\\infty}[f(x)-(kx+b)]=0\\)",
      "reference": "华师大 §3.5 曲线的渐近线，印刷第 63—65 页。",
      "section": "3.5",
      "question": "3.5:example:6"
    },
    {
      "id": "continuous",
      "label": "联系：连续性",
      "x": 10,
      "y": 340,
      "explanation": "第四章进一步要求点值存在，并与函数在该点的极限相等；仅有极限存在并不保证连续。",
      "formula": "\\(\\displaystyle\\lim_{x\\to a}f(x)=f(a)\\)",
      "reference": "华师大 §4.1 连续性定义，印刷第 68—69 页。",
      "section": "4.1",
      "question": "4.1:exercise:3"
    }
  ],
  "edges": [
    {
      "from": "root",
      "to": "definition"
    },
    {
      "from": "root",
      "to": "properties"
    },
    {
      "from": "root",
      "to": "methods"
    },
    {
      "from": "definition",
      "to": "ed"
    },
    {
      "from": "definition",
      "to": "infinity"
    },
    {
      "from": "properties",
      "to": "heine"
    },
    {
      "from": "properties",
      "to": "ops"
    },
    {
      "from": "properties",
      "to": "squeeze"
    },
    {
      "from": "properties",
      "to": "exist"
    },
    {
      "from": "methods",
      "to": "special"
    },
    {
      "from": "methods",
      "to": "oneinf"
    },
    {
      "from": "methods",
      "to": "equiv"
    },
    {
      "from": "methods",
      "to": "asym"
    },
    {
      "from": "ed",
      "to": "continuous",
      "cross": true,
      "text": "连续性在极限存在之外，还要求点值存在且等于该极限；去心邻域的函数极限本身不决定点值。"
    },
    {
      "from": "infinity",
      "to": "asym",
      "cross": true,
      "text": "研究无穷远处函数与直线的差是否趋于零，可判断该直线是否为渐近线；正、负方向需要分别检查。"
    },
    {
      "from": "squeeze",
      "to": "special",
      "cross": true,
      "text": "第一重要极限的证明利用几何不等式夹住正弦比值，再利用迫敛性。"
    },
    {
      "from": "special",
      "to": "equiv",
      "cross": true,
      "text": "第一重要极限说明 sin t 与 t 的比趋于 1，因而它们在 t→0 时等价。"
    }
  ]
};
