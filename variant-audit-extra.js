Object.assign(window.REVIEW_SOLUTIONS["2.1:example:2"], {
  "variantSource": "自编。已查看陈纪修第三版上册第二章 §2 相关习题（印刷第 37—38 页），并检索汤家凤《高数辅导讲义》第一章的数列极限定义（PDF 第 14 页）；本次未选到同时满足本题训练点和站内不重复要求的可核实题目，未穷尽检索。",
  "variant": "设 \\(\\alpha>0\\)，按 \\(\\varepsilon\\)–\\(N\\) 定义证明：\n\\[\n\\frac{n^\\alpha}{n^{2\\alpha}+1}\\longrightarrow0.\n\\]",
  "variantSolution": "由于 \\(n^{2\\alpha}+1>n^{2\\alpha}>0\\)，所以\n\\[\n0<\\frac{n^\\alpha}{n^{2\\alpha}+1}<\\frac1{n^\\alpha}.\n\\]\n任给 \\(\\varepsilon>0\\)，取正整数 \\(N\\ge\\varepsilon^{-1/\\alpha}\\)。当 \\(n>N\\) 时 \\(1/n^\\alpha<\\varepsilon\\)，因此由定义所给数列趋于 0。"
});

Object.assign(window.REVIEW_SOLUTIONS["2.1:exercise:10"], {
  "variantSource": "自编。已查看陈纪修第三版上册第二章 §3 的无穷大定义、倒数定理和习题（印刷第 39—44 页），并检索汤家凤讲义第一章的极限概念（PDF 第 14 页）；未对两书作穷尽检索。",
  "variant": "证明：对于任意实数列 \\(\\{a_n\\}\\)，\\(|a_n|\\to+\\infty\\) 的充分必要条件是 \\(\\displaystyle 1/(1+|a_n|)\\to0\\)。说明为何这里不必假定每项非零。",
  "variantSolution": "若 \\(|a_n|\\to+\\infty\\)，任给 \\(\\varepsilon>0\\)，存在 \\(N\\)，使 \\(n>N\\) 时 \\(|a_n|>1/\\varepsilon\\)。于是\n\\[\n0<\\frac1{1+|a_n|}<\\frac1{|a_n|}<\\varepsilon.\n\\]\n故 \\(1/(1+|a_n|)\\to0\\)。\n\n反之，若该数列趋于 0，任给 \\(M>0\\)，取 \\(\\varepsilon=1/(M+1)\\)，则充分大的 n 满足\n\\[\n\\frac1{1+|a_n|}<\\frac1{M+1},\n\\]\n由两边为正可得 \\(|a_n|>M\\)。故 \\(|a_n|\\to+\\infty\\)。无论 \\(a_n\\) 是否为 0，\\(1+|a_n|\\ge1\\)，分母始终非零。"
});
