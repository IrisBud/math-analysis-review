Object.assign(window.REVIEW_SOLUTIONS["2.1:example:1"], {
  "solution": "第一天截下 \\(1/2\\) 尺，以后每天截下的长度是前一天的一半，所以第 \\(n\\) 天截下 \\(a_n=2^{-n}\\) 尺。\n\n按陈纪修例 2.2.2 的方法，任给 \\(\\varepsilon>0\\)。因为 \\(\\ln(1/2)<0\\)，只要\n\\[\nn>\\frac{\\ln\\varepsilon}{\\ln(1/2)},\n\\]\n就有 \\(n\\ln(1/2)<\\ln\\varepsilon\\)，从而 \\((1/2)^n<\\varepsilon\\)。取大于上式右端的正整数 \\(N\\)，则对所有 \\(n>N\\) 都有 \\(|a_n|<\\varepsilon\\)。由定义，\\(a_n\\to0\\)。",
  "exam": "第 \\(n\\) 天截下 \\(a_n=2^{-n}\\) 尺。任给 \\(\\varepsilon>0\\)，取正整数 \\(N>\\ln\\varepsilon/\\ln(1/2)\\)。因 \\(\\ln(1/2)<0\\)，当 \\(n>N\\) 时 \\(n\\ln(1/2)<\\ln\\varepsilon\\)，即 \\(2^{-n}<\\varepsilon\\)。故 \\(a_n\\to0\\)。",
  "solutionSource": "按华师大第六版上册 §2.1 例 1 的情境建立数列；补充证明采用陈纪修第三版上册 §2 例 2.2.2（印刷第 30 页 / PDF 第 49 页）取 q=1/2。华师大例 1 原文为引入性叙述，没有在此处写完整定义证明。"
});

Object.assign(window.REVIEW_SOLUTIONS["2.1:example:3"], {
  "solutionSource": "按陈纪修第三版上册 §2 例 2.2.5（印刷第 31—32 页 / PDF 第 50—51 页）的通分和估计思路整理华师大第六版上册 §2.1 例 3；两题分式不同，陈例原题和细解另列。"
});

Object.assign(window.REVIEW_SOLUTIONS["2.1:example:4"], {
  "exam": "若 \\(q=0\\)，结论显然。若 \\(0<|q|<1\\)，任给 \\(\\varepsilon>0\\)，取正整数 \\(\\displaystyle N>\\ln\\varepsilon/\\ln|q|\\)。因 \\(\\ln|q|<0\\)，当 \\(n>N\\) 时 \\(n\\ln|q|<\\ln\\varepsilon\\)，故 \\(|q|^n<\\varepsilon\\)。由定义 \\(q^n\\to0\\)。",
  "guidance": "先取绝对值，这样无论 q 正负，都转化为研究正数 \\(|q|^n\\)。陈教材用对数求 N：由 \\(|q|^n<\\varepsilon\\) 取对数，关键是 \\(\\ln|q|<0\\)，除以它必须把不等号反向。\\(q=0\\) 需要单独处理，避免对 0 取对数。华师大原例也提供二项式放缩法，两种方法都可使用。"
});

Object.assign(window.REVIEW_SOLUTIONS["2.2:example:4"], {
  "solutionSource": "按陈纪修第三版上册 §3 例 2.3.3（印刷第 41 页 / PDF 第 60 页）的多项式同除最高次幂方法，整理华师大第六版上册 §2.2 例 4；只使用本题 m≤k 的情况。"
});

Object.assign(window.REVIEW_SOLUTIONS["2.2:example:5"], {
  "solutionSource": "按陈纪修第三版上册 §2 例 2.2.9（印刷第 36 页 / PDF 第 55 页）的指数式归一化思路，整理华师大第六版上册 §2.2 例 5；两题不同，华师大题需额外按参数分类。"
});
