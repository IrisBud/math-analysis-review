window.REVIEW_SOLUTIONS["2.1:example:1"] = {
  "statement": "一尺之棰，日取其半：一根长为一尺的木棒每天截下剩余部分的一半，第 \\(n\\) 天截下的部分长 \\(2^{-n}\\) 尺。教材据此说明 \\(\\{2^{-n}\\}\\) 的通项随着 \\(n\\) 增大趋近于 0。",
  "focus": "从具体过程建立数列；理解截下长度可以无限接近 0。",
  "reference": "华师大《数学分析》第六版上册 §2.1 例 1，印刷第 22 页（PDF 第 35 页）；形式化证明可参考同节例 4，印刷第 24 页。",
  "solutionSource": "依据华师大第六版上册例 1 的叙述整理；例 1 是引入性例子，原书没有要求在此处写完整定义证明，下面补充一个证明。",
  "solution": "第一天截下 \\(1/2\\) 尺，以后每天截下的长度是前一天的一半，因此第 \\(n\\) 天截下 \\(a_n=2^{-n}\\) 尺。\n\n要严格说明 \\(a_n\\to0\\)，注意二项式定理给出 \\(2^n=(1+1)^n\\ge1+n\\)，从而 \\(0<2^{-n}\\le1/(n+1)<1/n\\)。任给 \\(\\varepsilon>0\\)，取正整数 \\(N\\ge1/\\varepsilon\\)，当 \\(n>N\\) 时\n\\[\n|a_n-0|=2^{-n}<1/n<\\varepsilon.\n\\]\n由数列极限定义，\\(a_n\\to0\\)。",
  "exam": "第 \\(n\\) 天截下的长度为 \\(a_n=2^{-n}\\)。由 \\(2^n\\ge1+n\\)，有 \\(0<a_n<1/n\\)。任给 \\(\\varepsilon>0\\)，取正整数 \\(N\\ge1/\\varepsilon\\)，则 \\(n>N\\) 时 \\(|a_n|<\\varepsilon\\)，故 \\(a_n\\to0\\)。",
  "guidance": "先区分“第 \\(n\\) 天截下的长度”和“到第 \\(n\\) 天一共截下的长度”，前者构成题中数列。每次折半给出通项，而严格证明还要说明：不管给定的精度多小，从某一天以后，每一天截下的长度都在该精度以内。",
  "variantSource": "陈纪修等《数学分析》第三版上册，第二章 §2 习题第 1 题（2），印刷第 37 页（PDF 第 56 页）。原题要求用定义证明是无穷小量。",
  "variant": "按定义证明：数列 \\(\\{(-1)^n(0.99)^n\\}\\) 是无穷小量。",
  "variantSolution": "令 \\(h=1/99>0\\)，则 \\(|(-1)^n(0.99)^n|=(1+h)^{-n}\\le1/(1+nh)<99/n\\)。任给 \\(\\varepsilon>0\\)，取正整数 \\(N\\ge99/\\varepsilon\\)，则 \\(n>N\\) 时该绝对值小于 \\(\\varepsilon\\)，故该数列趋于 0。",
  "verification": "第 n 天截下的通项和补充证明已人工检查。相似练习已重新核对原书题面及页码。"
};

window.REVIEW_SOLUTIONS["2.1:example:2"] = {
  "statement": "证明：\\(\\displaystyle\\lim_{n\\to\\infty}\\frac1{n^\\alpha}=0\\)，其中 \\(\\alpha>0\\)。",
  "focus": "从距离小于 ε 反推 N；正指数条件。",
  "reference": "华师大《数学分析》第六版上册 §2.1 例 2，印刷第 23 页（PDF 第 36 页），以及第 22 页的 ε–N 定义。",
  "solutionSource": "依据华师大第六版上册例 2 的证明整理。",
  "solution": "任给 \\(\\varepsilon>0\\)。由于 \\(\\alpha>0\\)，可选正整数 \\(N>\\varepsilon^{-1/\\alpha}\\)。当 \\(n>N\\) 时，\\(n^\\alpha>N^\\alpha>1/\\varepsilon\\)，所以\n\\[\n\\left|\\frac1{n^\\alpha}-0\\right|=\\frac1{n^\\alpha}<\\varepsilon.\n\\]\n由定义，\\(1/n^\\alpha\\to0\\)。",
  "exam": "任给 \\(\\varepsilon>0\\)，取正整数 \\(N>\\varepsilon^{-1/\\alpha}\\)。因 \\(\\alpha>0\\)，当 \\(n>N\\) 时 \\(\\displaystyle|n^{-\\alpha}|<\\varepsilon\\)。由定义得证。",
  "guidance": "想让 \\(1/n^\\alpha<\\varepsilon\\)，利用 \\(\\alpha>0\\) 可等价地要求 \\(n>\\varepsilon^{-1/\\alpha}\\)，所以选 \\(N\\) 超过这个数。\\(N\\) 可以依赖给定的 \\(\\varepsilon\\) 和固定的 \\(\\alpha\\)，但选定以后必须对所有 \\(n>N\\) 都有效。",
  "variantSource": "陈纪修等《数学分析》第三版上册，第二章 §2 习题第 1 题（4），印刷第 38 页（PDF 第 57 页）。原题要求用定义证明是无穷小量。",
  "variant": "按定义证明 \\(\\displaystyle\\frac{1+2+\\cdots+n}{n^3}\\to0\\)。",
  "variantSolution": "由求和公式，\\(0<(1+\\cdots+n)/n^3=(n+1)/(2n^2)\\le1/n\\)。任给 \\(\\varepsilon>0\\)，取正整数 \\(N\\ge1/\\varepsilon\\)，当 \\(n>N\\) 时该数小于 \\(\\varepsilon\\)，由定义得证。",
  "verification": "正指数与 N 的选择已人工检查；陈教材题面及页码已查看原文。"
};

window.REVIEW_SOLUTIONS["2.1:example:3"] = {
  "statement": "证明：\\(\\displaystyle\\lim_{n\\to\\infty}\\frac{3n^2}{n^2-3}=3\\)。",
  "focus": "计算与目标的差，再在明确的 n 范围内放缩。",
  "reference": "华师大《数学分析》第六版上册 §2.1 例 3，印刷第 23 页（PDF 第 36 页）。",
  "solutionSource": "依据华师大第六版上册例 3 的证明整理，补充正整数 N 的选取。",
  "solution": "当 \\(n\\ge3\\) 时，\\(n^2-3\\ge n>0\\)，从而\n\\[\n\\left|\\frac{3n^2}{n^2-3}-3\\right|=\\frac9{n^2-3}\\le\\frac9n.\n\\]\n任给 \\(\\varepsilon>0\\)，取正整数 \\(N\\ge\\max\\{3,9/\\varepsilon\\}\\)。只要 \\(n>N\\)，就同时满足放缩的前提且 \\(9/n<\\varepsilon\\)，按定义得证。",
  "exam": "当 \\(n\\ge3\\) 时，\\(\\displaystyle\\left|\\frac{3n^2}{n^2-3}-3\\right|=\\frac9{n^2-3}\\le\\frac9n\\)。任给 \\(\\varepsilon>0\\)，取正整数 \\(N\\ge\\max\\{3,9/\\varepsilon\\}\\)，则 \\(n>N\\) 时距离小于 \\(\\varepsilon\\)，故极限为 3。",
  "guidance": "先通分，目标 3 抵消了分子的最高次项，得到容易控制的 \\(9/(n^2-3)\\)。为了用 \\(1/n\\) 作上界，需要先限制 \\(n\\ge3\\)，因此选择 N 时必须同时照顾这个范围与精度要求。",
  "variantSource": "陈纪修等《数学分析》第三版上册，第二章 §2 例 2.2.5，印刷第 31—32 页（PDF 第 50—51 页）。原题未改动。",
  "variant": "按定义证明：\\(\\displaystyle\\lim_{n\\to\\infty}\\frac{n^2+1}{2n^2-7n}=\\frac12\\)。",
  "variantSolution": "当 \\(n\\ge7\\) 时 \\(2n-7\\ge n>0\\)，故\n\\[\n\\left|\\frac{n^2+1}{2n^2-7n}-\\frac12\\right|\n=\\frac{7n+2}{2n(2n-7)}\n\\le\\frac{9}{2n}<\\frac5n.\n\\]\n任给 \\(\\varepsilon>0\\)，取正整数 \\(N\\ge\\max\\{7,5/\\varepsilon\\}\\)。若 \\(n>N\\)，则距离小于 \\(\\varepsilon\\)，依定义得证。",
  "verification": "通分、估计、N 及陈教材原例题面均已人工检查。"
};

