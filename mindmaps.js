window.REVIEW_MINDMAPS = {
  "2": {
    "title": "数列极限",
    "description": "从定义出发，连接收敛性质、构造极限与存在性判别。点击节点查看条件、联系和相关题目；虚线表示跨分支联系。",
    "nodes": [
      {
        "id": "root",
        "label": "数列极限",
        "x": 412,
        "y": 12,
        "explanation": "研究当正整数 n 不断增大时，数列是否趋近某个有限数，以及如何证明极限存在或求出极限。",
        "formula": "\\(\\lim_{n\\to\\infty}a_n=a\\)",
        "reference": "华师大第六版上册第二章，印刷第 22 页起（PDF 第 35 页起）。",
        "section": "2.1",
        "question": "2.1:exercise:1"
      },
      {
        "id": "concept",
        "label": "2.1 极限的概念",
        "x": 85,
        "y": 110,
        "explanation": "数列极限的定义用任意精度 ε 与足够大的下标 N 描述；固定有限项的增删改不改变收敛性。",
        "formula": "\\(\\forall\\varepsilon>0,\\ \\exists N,\\ n>N\\Rightarrow |a_n-a|<\\varepsilon\\)",
        "reference": "华师大 §2.1，印刷第 22—26 页。",
        "section": "2.1",
        "question": "2.1:example:3"
      },
      {
        "id": "properties",
        "label": "2.2 收敛的性质",
        "x": 412,
        "y": 110,
        "explanation": "在已知收敛的条件下，可使用唯一性、有界性、保号性、保不等式性、迫敛性及四则运算等性质。",
        "formula": "\\(\\lim a_n=a,\\ \\lim b_n=b\\ne0\\Rightarrow\\lim(a_n/b_n)=a/b\\)",
        "reference": "华师大 §2.2，印刷第 28—32 页。",
        "section": "2.2",
        "question": "2.2:example:4"
      },
      {
        "id": "existence",
        "label": "2.3 极限存在条件",
        "x": 739,
        "y": 110,
        "explanation": "对于不易猜出极限的数列，可先由单调有界定理或柯西收敛准则判断收敛，再依据条件求极限。",
        "formula": "\\(\\text{单调且有界}\\Rightarrow\\text{收敛}\\)",
        "reference": "华师大 §2.3，印刷第 34—40 页。",
        "section": "2.3",
        "question": "2.3:example:1"
      },
      {
        "id": "epsilon",
        "label": "ε–N 定义",
        "x": 15,
        "y": 230,
        "explanation": "先任给正的 ε，再寻找允许依赖 ε 的 N；对所有大于 N 的下标都要满足误差要求。",
        "formula": "\\(|a_n-a|<\\varepsilon\\quad(n>N)\\)",
        "reference": "华师大 §2.1，印刷第 22—23 页。",
        "section": "2.1",
        "question": "2.1:exercise:2"
      },
      {
        "id": "zero",
        "label": "无穷小与无穷大",
        "x": 180,
        "y": 230,
        "explanation": "无穷小数列趋于 0；无穷大量要求绝对值最终超过任意正数。无界不一定是无穷大。",
        "formula": "\\(a_n\\to a\\Longleftrightarrow a_n-a\\to0\\)",
        "reference": "华师大 §2.1，印刷第 26 页。",
        "section": "2.1",
        "question": "2.1:exercise:10"
      },
      {
        "id": "bounded",
        "label": "有界与保序",
        "x": 345,
        "y": 230,
        "explanation": "收敛数列必有界；保号和保不等式有各自条件。有界只是收敛的必要条件。",
        "formula": "\\(a_n\\to a\\Rightarrow\\exists M>0,\\ |a_n|\\le M\\)",
        "reference": "华师大 §2.2，印刷第 28—29 页。",
        "section": "2.2",
        "question": "2.2:exercise:2"
      },
      {
        "id": "squeeze",
        "label": "迫敛性与运算",
        "x": 510,
        "y": 230,
        "explanation": "当夹住目标数列的两端都收敛到同一极限时，可确定中间数列的极限；商运算还需分母极限非零。",
        "formula": "\\(a_n\\le c_n\\le b_n,\\ a_n,b_n\\to a\\Rightarrow c_n\\to a\\)",
        "reference": "华师大 §2.2，印刷第 29—31 页。",
        "section": "2.2",
        "question": "2.2:exercise:3"
      },
      {
        "id": "mono",
        "label": "单调有界定理",
        "x": 675,
        "y": 230,
        "explanation": "单调递增并有上界、或单调递减并有下界，才可由此定理推出收敛。",
        "formula": "\\(\\text{递增且有上界}\\Rightarrow\\lim a_n=\\sup\\{a_n\\}\\)",
        "reference": "华师大 §2.3，印刷第 34 页。",
        "section": "2.3",
        "question": "2.3:example:1"
      },
      {
        "id": "cauchy",
        "label": "柯西收敛准则",
        "x": 840,
        "y": 230,
        "explanation": "实数列收敛当且仅当其足够靠后的任意两项可以任意接近；判别时不必先知道极限。",
        "formula": "\\(\\forall\\varepsilon>0,\\ \\exists N,\\ m,n>N\\Rightarrow|a_m-a_n|<\\varepsilon\\)",
        "reference": "华师大 §2.3，印刷第 37 页。",
        "section": "2.3",
        "question": "2.3:example:7"
      },
      {
        "id": "subseq",
        "label": "子列与发散",
        "x": 345,
        "y": 360,
        "explanation": "收敛数列的每个子列都收敛到同一极限；找到两个极限不同的子列可以证明发散。",
        "formula": "\\(a_n\\to a\\Rightarrow a_{n_k}\\to a\\)",
        "reference": "华师大 §2.2，印刷第 32 页。",
        "section": "2.2",
        "question": "2.2:exercise:5"
      },
      {
        "id": "stolz",
        "label": "Stolz 定理",
        "x": 675,
        "y": 360,
        "explanation": "当分母数列严格递增且趋于正无穷，并且差商极限存在时，可以借助差商求数列商的极限；需逐条检查定理条件。",
        "formula": "\\(\\displaystyle\\frac{x_{n+1}-x_n}{y_{n+1}-y_n}\\to L\\Rightarrow\\frac{x_n}{y_n}\\to L\\)",
        "reference": "华师大第二章总练习第 3 题，印刷第 40—41 页。",
        "section": "2.total",
        "question": "2.total:exercise:3"
      }
    ],
    "edges": [
      {
        "from": "root",
        "to": "concept"
      },
      {
        "from": "root",
        "to": "properties"
      },
      {
        "from": "root",
        "to": "existence"
      },
      {
        "from": "concept",
        "to": "epsilon"
      },
      {
        "from": "concept",
        "to": "zero"
      },
      {
        "from": "properties",
        "to": "bounded"
      },
      {
        "from": "properties",
        "to": "squeeze"
      },
      {
        "from": "properties",
        "to": "subseq"
      },
      {
        "from": "existence",
        "to": "mono"
      },
      {
        "from": "existence",
        "to": "cauchy"
      },
      {
        "from": "existence",
        "to": "stolz"
      },
      {
        "from": "epsilon",
        "to": "bounded",
        "cross": true,
        "text": "从 ε–N 定义取固定精度，可证明收敛数列的尾项有界，再合并有限前项。"
      },
      {
        "from": "zero",
        "to": "squeeze",
        "cross": true,
        "text": "夹逼两侧趋于 0 时，中间数列也是无穷小；无穷小又可用来刻画一般极限。"
      },
      {
        "from": "bounded",
        "to": "mono",
        "cross": true,
        "text": "单独有界不足以保证收敛；增加单调性后，可应用单调有界定理。"
      },
      {
        "from": "subseq",
        "to": "cauchy",
        "cross": true,
        "text": "收敛数列的子列都趋于同一极限；柯西准则则可在不预先知道极限时判定收敛。"
      }
    ]
  }
};

