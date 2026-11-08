window.REVIEW_SOLUTIONS["2.1:example:4"] = {
  "statement": "证明：\\(\\displaystyle\\lim_{n\\to\\infty}q^n=0\\)，其中 \\(|q|<1\\)。",
  "focus": "几何数列的极限；q=0 与 0<|q|<1 分别处理；用二项式放缩。",
  "reference": "华师大《数学分析》第六版上册 §2.1 例 4，印刷第 24 页（PDF 第 37 页）。",
  "solutionSource": "依据华师大第六版上册例 4 的二项式估计整理。",
  "solution": "当 \\(q=0\\) 时，\\(q^n=0\\)，结论显然成立。设 \\(0<|q|<1\\)，令 \\(h=1/|q|-1>0\\)。由二项式定理，\\((1+h)^n\\ge1+nh\\)，故\n\\[\n|q^n|=(1+h)^{-n}\\le\\frac1{1+nh}<\\frac1{nh}.\n\\]\n任给 \\(\\varepsilon>0\\)，取正整数 \\(N\\ge1/(h\\varepsilon)\\)。当 \\(n>N\\) 时 \\(|q^n|<\\varepsilon\\)，按定义得证。",
  "exam": "当 \\(q=0\\) 时结论显然。设 \\(0<|q|<1\\)，令 \\(h=1/|q|-1>0\\)，则 \\(\\displaystyle|q^n|=(1+h)^{-n}\\le1/(1+nh)<1/(nh)\\)。任给 \\(\\varepsilon>0\\)，取正整数 \\(N\\ge1/(h\\varepsilon)\\)，当 \\(n>N\\) 时 \\(|q^n|<\\varepsilon\\)。所以 \\(q^n\\to0\\)。",
  "guidance": "幂中的底数是小于 1 的正数时，直接与 \\(1/n\\) 比较不够直观。先取倒数，写成 \\((1+h)^n\\)，其中 \\(h>0\\)，二项式展开的线性项给出 \\(1+nh\\)。取倒数后就得到能用 N 控制的上界。\\(q\\) 可以是负数，因此先取绝对值；\\(q=0\\) 需单独处理，避免除以零。",
  "variantSource": "陈纪修等《数学分析》第三版上册，第二章 §2 习题第 1 题（5），印刷第 38 页（PDF 第 57 页）。原题要求按定义证明是无穷小量。",
  "variant": "按定义证明：\\(\\displaystyle\\frac{n^2}{3^n}\\to0\\)。",
  "variantSolution": "当 \\(n\\ge3\\) 时，二项式展开给出\n\\[\n3^n=(1+2)^n\\ge {n\\choose3}2^3=\\frac43n(n-1)(n-2).\n\\]\n因此 \\(\\displaystyle0<\\frac{n^2}{3^n}\\le\\frac{3n}{4(n-1)(n-2)}\\le\\frac2{n-2}\\)。任给 \\(\\varepsilon>0\\)，取正整数 \\(N>2+2/\\varepsilon\\)，则 \\(n>N\\) 时该数小于 \\(\\varepsilon\\)，故极限为 0。",
  "verification": "参数范围、二项式估计及相似题 N 的选择已人工检查。"
};

window.REVIEW_SOLUTIONS["2.1:example:5"] = {
  "statement": "证明：\\(\\displaystyle\\lim_{n\\to\\infty}\\sqrt[n]{a}=1\\)，其中 \\(a>0\\)。",
  "focus": "固定正数的 n 次根；分别处理 a>1、a=1、0<a<1。",
  "reference": "华师大《数学分析》第六版上册 §2.1 例 5，印刷第 24 页（PDF 第 37 页）。",
  "solutionSource": "依据华师大第六版上册例 5；原书证明 a>1 并将 0<a<1 留给读者，以下补全。",
  "solution": "当 \\(a=1\\) 时结论显然。先设 \\(a>1\\)，令 \\(h_n=\\sqrt[n]{a}-1>0\\)。由二项式定理，\n\\[\na=(1+h_n)^n\\ge1+nh_n,\\qquad\n0<h_n\\le\\frac{a-1}{n}.\n\\]\n任给 \\(\\varepsilon>0\\)，取正整数 \\(N\\ge(a-1)/\\varepsilon\\)，当 \\(n>N\\) 时 \\(|\\sqrt[n]{a}-1|<\\varepsilon\\)。\n\n当 \\(0<a<1\\) 时，令 \\(b=1/a>1\\)、\\(t_n=\\sqrt[n]{b}>1\\)。同理 \\(0<t_n-1\\le(b-1)/n\\)。由于 \\(\\sqrt[n]{a}=1/t_n\\)，有\n\\[\n|\\sqrt[n]{a}-1|=1-\\frac1{t_n}=\\frac{t_n-1}{t_n}\\le t_n-1\\le\\frac{b-1}{n}.\n\\]\n任给 \\(\\varepsilon>0\\)，取正整数 \\(N\\ge(b-1)/\\varepsilon\\) 即可。因此所有 \\(a>0\\) 均成立。",
  "exam": "\\(a=1\\) 时显然。若 \\(a>1\\)，令 \\(h_n=\\sqrt[n]{a}-1>0\\)，由 \\(a=(1+h_n)^n\\ge1+nh_n\\)，得 \\(0<h_n\\le(a-1)/n\\)。任给 \\(\\varepsilon>0\\)，取 \\(N\\ge(a-1)/\\varepsilon\\)，则 \\(n>N\\) 时距离小于 \\(\\varepsilon\\)。\n\n若 \\(0<a<1\\)，令 \\(b=1/a>1\\)、\\(t_n=\\sqrt[n]{b}\\)。同理 \\(0<t_n-1\\le(b-1)/n\\)，而 \\(\\displaystyle|\\sqrt[n]{a}-1|=(t_n-1)/t_n\\le(b-1)/n\\)。取 \\(N\\ge(b-1)/\\varepsilon\\) 即得结论。",
  "guidance": "当 \\(a>1\\) 时，目标是控制 \\(\\sqrt[n]{a}-1\\)，就把这段距离设为 \\(h_n\\)，通过 \\((1+h_n)^n=a\\) 的展开获得 \\(h_n\\) 的上界。\\(0<a<1\\) 时根号值在 1 的另一侧，可对倒数 \\(1/a>1\\) 做同样估计，再通过倒数恒等式得到原数列的距离。不要忘记 \\(a=1\\) 的简单情况。",
  "variantSource": "陈纪修等《数学分析》第三版上册，第二章 §2 习题第 2 题（4），印刷第 38 页（PDF 第 57 页）。原题未改动。",
  "variant": "按定义证明：\\(\\displaystyle\\lim_{n\\to\\infty}\\sqrt[n]{3n+2}=1\\)。",
  "variantSolution": "令 \\(h_n=\\sqrt[n]{3n+2}-1>0\\)。当 \\(n\\ge2\\) 时，由二项式定理，\n\\[\n3n+2=(1+h_n)^n\\ge1+\\frac{n(n-1)}2h_n^2.\n\\]\n因此\n\\[\n0<h_n^2\\le\\frac{2(3n+1)}{n(n-1)}\\le\\frac8{n-1}.\n\\]\n任给 \\(\\varepsilon>0\\)，取正整数 \\(N>1+8/\\varepsilon^2\\)，则 \\(n>N\\) 时 \\(h_n<\\varepsilon\\)，故极限为 1。",
  "verification": "三类 a、二项式放缩与练习的二次项估计已人工检查。"
};

window.REVIEW_SOLUTIONS["2.1:example:6"] = {
  "statement": "证明：对固定实数 \\(a\\)，\\(\\displaystyle\\lim_{n\\to\\infty}\\frac{a^n}{n!}=0\\)。",
  "focus": "用阶乘增长控制固定底数的幂；先固定足够大的 k，再将其余因子估计为不超过 1。",
  "reference": "华师大《数学分析》第六版上册 §2.1 例 6，印刷第 24 页（PDF 第 37 页）。",
  "solutionSource": "依据华师大第六版上册例 6 的分组方法整理。",
  "solution": "当 \\(a=0\\) 时结论显然。设 \\(a\\ne0\\)，取正整数 \\(k>|a|\\)，并令 \\(K=|a|^k/k!\\)。当 \\(n>k\\) 时，展开为\n\\[\n\\left|\\frac{a^n}{n!}\\right|\n=K\\frac{|a|}{k+1}\\cdots\\frac{|a|}{n-1}\\frac{|a|}{n}\n\\le\\frac{K|a|}{n},\n\\]\n其中中间乘积为空时按 1 计算；其他每个因子都不超过 1。\n\n任给 \\(\\varepsilon>0\\)，取正整数 \\(N\\ge\\max\\{k,K|a|/\\varepsilon\\}\\)。当 \\(n>N\\) 时，\\(|a^n/n!|<\\varepsilon\\)，故极限为 0。",
  "exam": "\\(a=0\\) 时显然。若 \\(a\\ne0\\)，取正整数 \\(k>|a|\\)，记 \\(K=|a|^k/k!\\)。当 \\(n>k\\) 时，\n\\[\n\\left|\\frac{a^n}{n!}\\right|\n=K\\frac{|a|}{k+1}\\cdots\\frac{|a|}{n}\\le\\frac{K|a|}{n}.\n\\]\n任给 \\(\\varepsilon>0\\)，取正整数 \\(N\\ge\\max\\{k,K|a|/\\varepsilon\\}\\)，则 \\(n>N\\) 时 \\(|a^n/n!|<\\varepsilon\\)，故结论成立。",
  "guidance": "阶乘不是一个固定次幂，而是 \\(1\\cdot2\\cdots n\\)。选择 \\(k>|a|\\) 以后，后面的分母都比 \\(|a|\\) 大，所以对应的比值不超过 1。把有限个前面的因子合并成固定常数 K，保留最后一个 \\(|a|/n\\) 控制距离即可；K 可以依赖固定的 a，但不能依赖 n。",
  "variantSource": "陈纪修等《数学分析》第三版上册，第二章 §2 习题第 1 题（6），印刷第 38 页（PDF 第 57 页）。原题要求按定义证明是无穷小量。",
  "variant": "按定义证明：\\(\\displaystyle\\frac{3^n}{n!}\\to0\\)。",
  "variantSolution": "取 \\(K=3^4/4!\\)。当 \\(n>4\\) 时，\\(\\displaystyle0<3^n/n!=K(3/5)\\cdots(3/n)\\le3K/n\\)，其中中间可能为空的乘积按 1 处理。任给 \\(\\varepsilon>0\\)，取正整数 \\(N\\ge\\max\\{4,3K/\\varepsilon\\}\\)。当 \\(n>N\\) 时 \\(3^n/n!<\\varepsilon\\)，故极限为 0。",
  "verification": "阶乘分组、空乘积情况及所选 N 已人工检查。"
};

