window.REVIEW_SOLUTIONS['2.total:exercise:1'] = {
  "type": "calculation",
  "statement": "求下列数列的极限：\n\\[\n(1)\\ \\lim_{n\\to\\infty}\\sqrt[n]{n^3+3^n};\\qquad\n(2)\\ \\lim_{n\\to\\infty}\\frac{n^5}{e^n};\n\\]\n\\[\n(3)\\ \\lim_{n\\to\\infty}\\bigl(\\sqrt{n+2}-2\\sqrt{n+1}+\\sqrt n\\bigr).\n\\]",
  "focus": "分别用根式夹逼、相邻项比值及根式差有理化处理三类极限。",
  "reference": "华师大《数学分析》第六版上册 §2.2 例 2 和迫敛性，印刷第 29—30 页；§2.3 习题 7，印刷第 39 页；第二章总练习第 1 题，印刷第 40 页（PDF 第 53 页）。",
  "solutionSource": "参考文件名标注第五版的《教材习题详解》上册第二章总练习第 1 题，印刷第 139 页（PDF 第 32 页）；三个小问的完整表达式一致。补充夹逼上界、相邻比值和根式差的依据。",
  "solution": "（1）对正整数 \\(n\\)，\n\\[\n3^n\\le n^3+3^n\\le2n^3\\,3^n.\n\\]\n两边取 \\(n\\) 次根，得到\n\\[\n3\\le\\sqrt[n]{n^3+3^n}\n\\le3\\,\\sqrt[n]2\\,(\\sqrt[n]n)^3.\n\\]\n由本章已证明的 \\(\\sqrt[n]2\\to1\\)、\\(\\sqrt[n]n\\to1\\)，上界趋于 3，因此由迫敛性，极限为 \\(\\boxed3\\)。\n\n（2）令 \\(u_n=n^5/e^n>0\\)。则\n\\[\n\\frac{u_n}{u_{n+1}}\n=e\\left(\\frac n{n+1}\\right)^5\\longrightarrow e>1.\n\\]\n由 §2.3 习题 7 的相邻项比值结论，\\(u_n\\to\\boxed0\\)。这里 \\(e>1\\) 且各 \\(u_n\\) 都为正，符合该结论的条件。\n\n（3）把原式分成两个相邻根式差，并分别有理化：\n\\[\n\\begin{aligned}\n&\\sqrt{n+2}-2\\sqrt{n+1}+\\sqrt n\\\\\n&=\\frac1{\\sqrt{n+2}+\\sqrt{n+1}}\n-\\frac1{\\sqrt{n+1}+\\sqrt n}.\n\\end{aligned}\n\\]\n两项分母都趋于正无穷，因此两个分式均趋于 0，所求极限为 \\(\\boxed0\\)。",
  "exam": "（1）由\n\\[\n3\\le\\sqrt[n]{n^3+3^n}\n\\le3\\sqrt[n]2(\\sqrt[n]n)^3\\to3,\n\\]\n得极限 3。\n\n（2）设 \\(u_n=n^5/e^n>0\\)，则 \\(u_n/u_{n+1}=e[n/(n+1)]^5\\to e>1\\)，由 §2.3 习题 7 得 \\(u_n\\to0\\)。\n\n（3）原式为\n\\[\n\\frac1{\\sqrt{n+2}+\\sqrt{n+1}}\n-\\frac1{\\sqrt{n+1}+\\sqrt n}\\to0.\n\\]",
  "guidance": "第一问把指数项 3^n 当作主要量，再用 n 的多项式因子夹住，n 次根会让这些多项式因子趋于 1。第二问不要直接比较 n⁵ 和 eⁿ 的数值；相邻项之比恰好满足上一节已证明的判别结论。第三问先拆成两个相邻根式差，每个差有理化后都趋于 0，避免直接处理三个分别趋于无穷的项。",
  "variantSource": "陈纪修等《数学分析》第三版上册第二章 §2 习题 9(6)，印刷第 38 页（PDF 第 57 页），原题未改动。它与第（3）问都需要处理相近根式之差，但多出四次根和 \\(\\sqrt n\\) 因子，需连续有理化。",
  "variant": "求极限\n\\[\n\\lim_{n\\to\\infty}\\sqrt n\\left(\\sqrt[4]{n^2+1}-\\sqrt{n+1}\\right).\n\\]",
  "variantSolution": "记 \\(A_n=\\sqrt[4]{n^2+1}\\)、\\(B_n=\\sqrt{n+1}\\)。先利用平方差：\n\\[\n\\sqrt n(A_n-B_n)\n=\\frac{\\sqrt n}{A_n+B_n}\n\\left[\\sqrt{n^2+1}-(n+1)\\right].\n\\]\n括号中的差再作一次有理化：\n\\[\n\\sqrt{n^2+1}-n-1\n=\\frac1{\\sqrt{n^2+1}+n}-1\\longrightarrow-1.\n\\]\n另一方面，\n\\[\n\\frac{A_n}{\\sqrt n}=\\left(1+\\frac1{n^2}\\right)^{1/4}\\to1,\n\\qquad\n\\frac{B_n}{\\sqrt n}=\\sqrt{1+\\frac1n}\\to1.\n\\]\n第四次根可视为连续两次平方根，并用本节根式极限结论，故\n\\[\n\\frac{\\sqrt n}{A_n+B_n}\n=\\frac1{A_n/\\sqrt n+B_n/\\sqrt n}\\to\\frac12.\n\\]\n相乘得到 \\(\\boxed{-1/2}\\)。负号来自第二次有理化后的括号，不能因两个根式都趋于正无穷就忽略。",
  "verification": "华师大三小问、五版答案及陈教材习题已首轮对照；检查 n 次根上下界、相邻比值条件和练习两次有理化的负号。独立数学二审和全站语义去重仍未完成。"
};
