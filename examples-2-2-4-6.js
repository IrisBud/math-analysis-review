window.REVIEW_SOLUTIONS["2.2:example:4"] = {
  "statement": "求极限\n\\[\n\\lim_{n\\to\\infty}\n\\frac{a_mn^m+a_{m-1}n^{m-1}+\\cdots+a_1n+a_0}\n{b_kn^k+b_{k-1}n^{k-1}+\\cdots+b_1n+b_0},\n\\]\n其中 \\(m\\le k\\)，\\(a_m\\ne0\\)，\\(b_k\\ne0\\)。",
  "focus": "分子分母同除以分母最高次幂；检查商的分母极限非零。",
  "reference": "华师大《数学分析》第六版上册 §2.2 四则运算法则定理 2.7、例 4，印刷第 30—31 页（PDF 第 43—44 页）。",
  "solutionSource": "依据华师大第六版上册 §2.2 例 4 整理。",
  "solution": "分子与分母同除以 \\(n^k\\)。分母化为\n\\[\nb_k+\\frac{b_{k-1}}n+\\cdots+\\frac{b_0}{n^k}\\longrightarrow b_k\\ne0.\n\\]\n由 §2.1 的基本极限和有限次四则运算，若 \\(m=k\\)，分子趋于 \\(a_m\\)；若 \\(m<k\\)，分子各项均含 \\(1/n\\) 的正整数次幂，因而趋于 0。分母极限非零，充分大的 n 处分母非零，可用商的极限法则：\n\\[\n\\boxed{\\begin{cases}a_m/b_k,&m=k,\\\\0,&m<k.\\end{cases}}\n\\]",
  "exam": "分子分母同除以 \\(n^k\\)。分母趋于 \\(b_k\\ne0\\)；分子在 \\(m=k\\) 时趋于 \\(a_m\\)，在 \\(m<k\\) 时趋于 0。由商的极限法则，所求依次为 \\(a_m/b_k\\) 和 0。",
  "guidance": "比较分子分母的最高次数，并用分母最高次幂归一化。这样分母留下非零首项 \\(b_k\\)，其余项都是 \\(1/n\\) 的正幂。不能只凭“最高次项决定”就跳过分母极限非零这一使用商法则的条件。",
  "variantSource": "陈纪修等《数学分析》第三版上册，第二章 §2 习题第 9 题（1），印刷第 38 页（PDF 第 57 页）。原题未改动。",
  "variant": "求极限：\\(\\displaystyle\\lim_{n\\to\\infty}\\frac{3n^2+4n-1}{n^2+1}\\)。",
  "variantSolution": "分子分母同除以 \\(n^2\\)，得到\n\\[\n\\frac{3+4/n-1/n^2}{1+1/n^2}\\longrightarrow\\frac31=3,\n\\]\n分母极限为 1，非零。",
  "verification": "两类次数关系和分母非零条件已检查；陈教材练习原题及结果已核对。"
};

window.REVIEW_SOLUTIONS["2.2:example:5"] = {
  "statement": "求 \\(\\displaystyle\\lim_{n\\to\\infty}\\frac{a^n}{a^n+1}\\)，其中 \\(a\\ne-1\\)。",
  "focus": "按 a 的取值分情况；区分 |a|<1、a=1、|a|>1。",
  "reference": "华师大《数学分析》第六版上册 §2.2 例 5，印刷第 31—32 页（PDF 第 44—45 页）；几何数列极限见 §2.1 例 4，印刷第 24 页。",
  "solutionSource": "依据华师大第六版上册 §2.2 例 5 整理。",
  "solution": "若 \\(a=1\\)，每一项都是 \\(1/2\\)，极限为 \\(1/2\\)。\n\n若 \\(|a|<1\\)，由 §2.1 例 4，\\(a^n\\to0\\)，由商的极限法则，\\(a^n/(a^n+1)\\to0\\)。\n\n若 \\(|a|>1\\)，则 \\(|1/a|<1\\)，所以 \\(a^{-n}\\to0\\)。分子分母同除以非零数 \\(a^n\\)，得\n\\[\n\\frac{a^n}{a^n+1}=\\frac1{1+a^{-n}}\\longrightarrow1.\n\\]\n故答案依次为 \\(1/2,0,1\\)。\\(a=-1\\) 已被题设排除，因为此时奇数项分母为零。",
  "exam": "当 \\(a=1\\) 时极限为 \\(1/2\\)；当 \\(|a|<1\\) 时，\\(a^n\\to0\\)，故极限为 0；当 \\(|a|>1\\) 时，\\(a^{-n}\\to0\\)，由 \\(\\displaystyle a^n/(a^n+1)=1/(1+a^{-n})\\)，得极限为 1。",
  "guidance": "变化的是幂 \\(a^n\\)，所以先比较底数绝对值与 1，而不是默认它总趋于 0。若绝对值大于 1，改看它的倒数幂；这同时覆盖 \\(a<-1\\)，不需要把交替符号误判为极限不存在。\\(a=-1\\) 在题设中被排除，是因为分母会为零。",
  "variantSource": "陈纪修等《数学分析》第三版上册，第二章 §2 习题第 9 题（3），印刷第 38 页（PDF 第 57 页）。原题未改动。",
  "variant": "求极限：\\(\\displaystyle\\lim_{n\\to\\infty}\\frac{3^n+n^3}{3^{n+1}+(n+1)^3}\\)。",
  "variantSolution": "先证 \\(n^3/3^n\\to0\\)。对 \\(n\\ge6\\)，二项式定理给出 \\(3^n\\ge16{n\\choose4}=\\frac23n(n-1)(n-2)(n-3)\\)。因为 \\(n-1,n-2,n-3\\ge n/2\\)，所以 \\(3^n\\ge n^4/12\\)，从而 \\(0\\le n^3/3^n\\le12/n\\to0\\)。又 \\((n+1)^3/3^n=(1+1/n)^3(n^3/3^n)\\to0\\)。\n\n分子分母同除以 \\(3^n\\)，所求为\n\\[\n\\lim\\frac{1+n^3/3^n}{3+(n+1)^3/3^n}=\\frac13.\n\\]",
  "verification": "参数分类与练习中指数压过多项式的具体估计已人工检查。"
};

window.REVIEW_SOLUTIONS["2.2:example:6"] = {
  "statement": "求 \\(\\displaystyle\\lim_{n\\to\\infty}\\sqrt n\\,(\\sqrt{n+1}-\\sqrt n)\\)。",
  "focus": "根式差有理化；利用平方根极限及四则运算。",
  "reference": "华师大《数学分析》第六版上册 §2.2 例 1、例 6，印刷第 29、32 页（PDF 第 42、45 页）。",
  "solutionSource": "依据华师大第六版上册 §2.2 例 6 整理。",
  "solution": "将根式差有理化并把分子分母同除以 \\(\\sqrt n\\)，得\n\\[\n\\sqrt n(\\sqrt{n+1}-\\sqrt n)\n=\\frac{\\sqrt n}{\\sqrt{n+1}+\\sqrt n}\n=\\frac1{\\sqrt{1+1/n}+1}.\n\\]\n由 \\(1+1/n\\to1\\) 和本节例 1，\\(\\sqrt{1+1/n}\\to1\\)。分母趋于 2，故所求极限为 \\(\\boxed{1/2}\\)。",
  "exam": "\\[\n\\sqrt n(\\sqrt{n+1}-\\sqrt n)\n=\\frac1{\\sqrt{1+1/n}+1}\n\\longrightarrow\\frac12.\n\\]",
  "guidance": "根式相减会产生抵消，先乘共轭把差变成 1。接着提取 \\(\\sqrt n\\)，分母就只剩趋于常数的根式；使用商法则前，确认分母极限为 2，而不是 0。",
  "variantSource": "陈纪修等《数学分析》第三版上册，第二章 §2 习题第 2 题（3），印刷第 38 页（PDF 第 57 页）。原题未改动；此处按本节已学的四则运算和根式极限求解。",
  "variant": "求极限：\\(\\displaystyle\\lim_{n\\to\\infty}(\\sqrt{n^2+n}-n)\\)。",
  "variantSolution": "有理化并除以 \\(n\\)，得到\n\\[\n\\sqrt{n^2+n}-n=\\frac{n}{\\sqrt{n^2+n}+n}\n=\\frac1{\\sqrt{1+1/n}+1}\\longrightarrow\\frac12,\n\\]\n其中使用根式极限与分母极限为 2。",
  "verification": "共轭变形、根式与商的条件以及练习原题已人工检查。"
};

