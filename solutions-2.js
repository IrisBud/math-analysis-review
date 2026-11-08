window.REVIEW_SOLUTIONS["2.1:exercise:2"] = {
  statement: "按 \\(\\varepsilon\\)–\\(N\\) 定义证明：\n（1）\\(\\displaystyle\\lim_{n\\to\\infty}\\frac{n}{n+1}=1\\)；\n（2）\\(\\displaystyle\\lim_{n\\to\\infty}\\frac{3n^2+n}{2n^2-1}=\\frac32\\)；\n（3）\\(\\displaystyle\\lim_{n\\to\\infty}\\frac{n!}{n^n}=0\\)；\n（4）\\(\\displaystyle\\lim_{n\\to\\infty}\\sin\\frac{\\pi}{n}=0\\)；\n（5）\\(\\displaystyle\\lim_{n\\to\\infty}\\frac{n}{a^n}=0\\)，其中 \\(a>1\\)。",
  focus: "用定义证明数列极限；通过放缩找到便于选择 N 的上界。",
  reference: "华师大《数学分析》第六版上册 §2.1，极限定义与例 2、例 3 印刷第 22—23 页，例 4 印刷第 24 页；习题 2.1 第 2 题印刷第 27 页（PDF 第 40 页）。第（4）问使用基本三角不等式 \\(|\\sin t|\\le |t|\\)。",
  solutionSource: "参考答案资料：文件名标注第五版的《教材习题详解》上册，习题 2.1 第 2 题，资料印刷第 126—127 页（PDF 第 19—20 页）；五个小问已与第六版题面对照。以下按其放缩思路整理，并独立检查。",
  solution: "下面每问都先任给 \\(\\varepsilon>0\\)，再选取正整数 \\(N\\)。\n\n（1）\\[\\left|\\frac{n}{n+1}-1\\right|=\\frac1{n+1}<\\frac1n.\\]取 \\(N\\ge 1/\\varepsilon\\)，则 \\(n>N\\) 时右侧小于 \\(\\varepsilon\\)。\n\n（2）当 \\(n\\ge1\\) 时，\\[\\left|\\frac{3n^2+n}{2n^2-1}-\\frac32\\right|=\\frac{2n+3}{4n^2-2}\\le\\frac{5n}{2n^2}=\\frac5{2n}.\\]取 \\(N\\ge5/(2\\varepsilon)\\)，则 \\(n>N\\) 时该距离小于 \\(\\varepsilon\\)。\n\n（3）把阶乘展开；由于后面每个因子都不大于 1，\\[0<\\frac{n!}{n^n}=\\frac1n\\cdot\\frac2n\\cdots\\frac nn\\le\\frac1n.\\]取 \\(N\\ge1/\\varepsilon\\) 即可。\n\n（4）由 \\(|\\sin t|\\le|t|\\)，\\[\\left|\\sin\\frac{\\pi}{n}\\right|\\le\\frac{\\pi}{n}.\\]取 \\(N\\ge\\pi/\\varepsilon\\) 即可。\n\n（5）令 \\(h=a-1>0\\)。当 \\(n\\ge2\\) 时，由二项式定理，\\[a^n=(1+h)^n\\ge\\frac{n(n-1)}2h^2,\\qquad 0<\\frac n{a^n}\\le\\frac2{(n-1)h^2}.\\]取正整数 \\(N>1+2/(h^2\\varepsilon)\\)。若 \\(n>N\\)，则 \\(2/((n-1)h^2)<\\varepsilon\\)，故该数列按定义趋于 0。",
  exam: "任给 \\(\\varepsilon>0\\)：\n（1）\\(|n/(n+1)-1|<1/n\\)，取正整数 \\(N\\ge1/\\varepsilon\\)。\n（2）\\(\\left|(3n^2+n)/(2n^2-1)-3/2\\right|=(2n+3)/(4n^2-2)\\le5/(2n)\\)，取 \\(N\\ge5/(2\\varepsilon)\\)。\n（3）\\(0<n!/n^n=(1/n)(2/n)\\cdots(n/n)\\le1/n\\)，取 \\(N\\ge1/\\varepsilon\\)。\n（4）\\(|\\sin(\\pi/n)|\\le\\pi/n\\)，取 \\(N\\ge\\pi/\\varepsilon\\)。\n（5）令 \\(h=a-1>0\\)。当 \\(n\\ge2\\) 时，\\(a^n\\ge n(n-1)h^2/2\\)，故 \\(0<n/a^n\\le2/((n-1)h^2)\\)。取正整数 \\(N>1+2/(h^2\\varepsilon)\\)。\n各问在 \\(n>N\\) 时与所给极限的距离均小于 \\(\\varepsilon\\)，结论成立。",
  guidance: "每问都从“与目标极限的距离”开始，而不是先猜 \\(N\\)。算出或估计这个距离，再把上界变成容易控制的 \\(C/n\\) 或 \\(C/(n-1)\\)，最后由上界小于 \\(\\varepsilon\\) 反推 \\(N\\)。\n第（2）问分子、分母都有 \\(n\\)，先通分才能看清差值；这里用较松的 \\(5/(2n)\\) 就够了。第（3）问把阶乘拆成乘积，保留第一个因子 \\(1/n\\)，其余因子不大于 1。第（5）问需要用二项式展开中的二次项：它提供 \\(n(n-1)\\)，与分子里的一个 \\(n\\) 约去后还留下趋大的 \\(n-1\\)。\n每问选出的 \\(N\\) 都依赖 \\(\\varepsilon\\)；第（5）问也依赖固定参数 \\(a\\)。不必追求最小的 \\(N\\)，但要检查放缩所需的 \\(n\\ge2\\) 确实满足。",
  variantSource: "陈纪修等《数学分析》第三版上册，第二章 §2 习题第 2 题（1），印刷第 38 页（PDF 第 57 页）。原题及目标极限均未改动。",
  variant: "按定义证明：\\[\\lim_{n\\to\\infty}\\frac{2n^2-1}{3n^2+2}=\\frac23.\\]",
  variantSolution: "任给 \\(\\varepsilon>0\\)，当 \\(n\\ge1\\) 时，\\[\\left|\\frac{2n^2-1}{3n^2+2}-\\frac23\\right|=\\frac7{9n^2+6}<\\frac7{9n}.\\]取正整数 \\(N\\ge7/(9\\varepsilon)\\)，则 \\(n>N\\) 时该距离小于 \\(\\varepsilon\\)。由定义，所给极限成立。",
  verification: "已对照两版题面与陈教材练习，并手工核查五个估计及所选 N；尚未进行全站数学复核。"
};

window.REVIEW_SOLUTIONS["2.1:exercise:3"] = {
  statement: "根据教材中例 2、例 4 和例 5 的结果求下列极限，并指出哪些是无穷小数列：\n（1）\\(\\displaystyle\\lim_{n\\to\\infty}\\frac1{\\sqrt n}\\)；（2）\\(\\displaystyle\\lim_{n\\to\\infty}\\sqrt[n]{3}\\)；\n（3）\\(\\displaystyle\\lim_{n\\to\\infty}\\frac1{n^3}\\)；（4）\\(\\displaystyle\\lim_{n\\to\\infty}\\frac1{3^n}\\)；\n（5）\\(\\displaystyle\\lim_{n\\to\\infty}\\frac1{\\sqrt{2^n}}\\)；（6）\\(\\displaystyle\\lim_{n\\to\\infty}\\sqrt[n]{10}\\)；\n（7）\\(\\displaystyle\\lim_{n\\to\\infty}\\frac1{\\sqrt[n]{2}}\\)。",
  focus: "识别三个基本数列极限，并根据极限是否为 0 判断无穷小量。",
  reference: "华师大《数学分析》第六版上册 §2.1，例 2 印刷第 23 页，例 4、例 5 印刷第 24 页；习题 2.1 第 3 题印刷第 27 页（PDF 第 40 页）。",
  solutionSource: "参考答案资料：文件名标注第五版的《教材习题详解》上册，习题 2.1 第 3 题，资料印刷第 127 页（PDF 第 20 页）；七个小问与第六版题面已对照。",
  solution: "使用本节结果：当 \\(\\alpha>0\\) 时 \\(n^{-\\alpha}\\to0\\)；当 \\(|q|<1\\) 时 \\(q^n\\to0\\)；当 \\(a>0\\) 时 \\(\\sqrt[n]{a}\\to1\\)。\n（1）\\(1/\\sqrt n=n^{-1/2}\\to0\\)。\n（2）\\(\\sqrt[n]{3}\\to1\\)。\n（3）\\(1/n^3=n^{-3}\\to0\\)。\n（4）\\(1/3^n=(1/3)^n\\to0\\)。\n（5）\\(1/\\sqrt{2^n}=(1/\\sqrt2)^n\\to0\\)，其中 \\(0<1/\\sqrt2<1\\)。\n（6）\\(\\sqrt[n]{10}\\to1\\)。\n（7）\\(1/\\sqrt[n]{2}=\\sqrt[n]{1/2}\\to1\\)。\n所以七个极限依次是 \\(0,1,0,0,0,1,1\\)。极限为 0 的第（1）、（3）、（4）、（5）个数列是无穷小数列。",
  exam: "由 \\(n^{-\\alpha}\\to0\\ (\\alpha>0)\\)、\\(q^n\\to0\\ (|q|<1)\\) 和 \\(\\sqrt[n]{a}\\to1\\ (a>0)\\)，七个极限依次为 \\(0,1,0,0,0,1,1\\)。其中（1）、（3）、（4）、（5）的极限为 0，故它们是无穷小数列。",
  guidance: "先看变化的下标 \\(n\\) 位于哪里：作为固定底数的指数时，比较底数的绝对值与 1；作为根指数时，想到正数的 \\(n\\) 次方根趋于 1。第（5）问先改写成 \\((1/\\sqrt2)^n\\)，第（7）问先改写成 \\(\\sqrt[n]{1/2}\\)，就能直接看出属于哪种类型。\n“无穷小”说的是一个极限为 0 的数列；趋于 1 的三个数列不能直接称为无穷小数列。",
  variantSource: "陈纪修等《数学分析》第三版上册，第二章 §2 习题第 1 题（3），印刷第 38 页（PDF 第 57 页）。原题要求按定义证明该数列是无穷小量；数列未改动。",
  variant: "按定义证明：\\[\\lim_{n\\to\\infty}\\left(\\frac1n+5^{-n}\\right)=0.\\]",
  variantSolution: "由二项式定理，\\(5^n=(1+4)^n\\ge1+4n\\)，所以对 \\(n\\ge1\\)，\\[0<\\frac1n+5^{-n}\\le\\frac1n+\\frac1{4n}=\\frac5{4n}.\\]任给 \\(\\varepsilon>0\\)，取正整数 \\(N\\ge5/(4\\varepsilon)\\)，当 \\(n>N\\) 时上式小于 \\(\\varepsilon\\)，因此该数列趋于 0。",
  verification: "七个基本极限及无穷小判断已逐项与原题和参考答案核对；陈教材练习与定义证明已人工检查。"
};

window.REVIEW_SOLUTIONS["2.1:exercise:4"] = {
  statement: "证明：若 \\(\\lim_{n\\to\\infty}a_n=a\\)，则对任一正整数 \\(k\\)，有 \\(\\lim_{n\\to\\infty}a_{n+k}=a\\)。",
  focus: "数列极限的定义；删除或移动有限个前项不改变极限。",
  reference: "华师大《数学分析》第六版上册 §2.1，数列极限定义印刷第 22—23 页，例 9 印刷第 26 页；习题第 4 题印刷第 27 页（PDF 第 40 页）。",
  solutionSource: "参考答案资料：文件名标注第五版的《教材习题详解》上册，习题 2.1 第 4 题，资料印刷第 127 页（PDF 第 20 页）；题面已与第六版对照。",
  solution: "设 \\(a_n\\to a\\)，并固定任意正整数 \\(k\\)。任给 \\(\\varepsilon>0\\)，由数列极限定义，存在正整数 \\(N\\)，使得只要正整数 \\(j>N\\)，就有 \\(|a_j-a|<\\varepsilon\\)。\n当 \\(n>N\\) 时，由 \\(k>0\\) 得 \\(n+k>N\\)。将上面的下标 \\(j\\) 取为 \\(n+k\\)，便有 \\(|a_{n+k}-a|<\\varepsilon\\)。因此按定义，\\(a_{n+k}\\to a\\)。",
  exam: "任给 \\(\\varepsilon>0\\)，因 \\(a_n\\to a\\)，存在正整数 \\(N\\)，当 \\(j>N\\) 时 \\(|a_j-a|<\\varepsilon\\)。固定正整数 \\(k\\)，若 \\(n>N\\)，则 \\(n+k>N\\)，故 \\(|a_{n+k}-a|<\\varepsilon\\)。由定义，\\(a_{n+k}\\to a\\)。",
  guidance: "原数列的定义给出的是“下标足够大时”的结论。新数列第 \\(n\\) 项是原数列第 \\(n+k\\) 项，所以只要保证 \\(n+k>N\\)，就能直接使用原来的估计。\n这里 \\(k\\) 是一个固定的正整数，故 \\(n>N\\) 已足够；不必重新计算新的极限。写证明时把 \\(j=n+k\\) 的角色交代清楚，可以避免混淆两套下标。",
  variantSource: "陈纪修等《数学分析》第三版上册，第二章 §2 习题第 4 题，印刷第 38 页（PDF 第 57 页）。该题要求证明双向等价，是华师大原题的加强形式；题意未改动。",
  variant: "设 \\(k\\) 为正整数，证明：\\(\\lim_{n\\to\\infty}x_n=a\\) 的充分必要条件是 \\(\\lim_{n\\to\\infty}x_{n+k}=a\\)。",
  variantSolution: "必要性与原题相同。证明充分性：设 \\(x_{n+k}\\to a\\)。任给 \\(\\varepsilon>0\\)，存在正整数 \\(M\\)，使 \\(j>M\\) 时 \\(|x_{j+k}-a|<\\varepsilon\\)。取 \\(N=M+k\\)。当 \\(n>N\\) 时，令 \\(j=n-k\\)，则 \\(j>M\\) 且 \\(n=j+k\\)，因此 \\(|x_n-a|=|x_{j+k}-a|<\\varepsilon\\)。由定义 \\(x_n\\to a\\)。",
  verification: "已对照两书题面，分别检查原题与相似题的两个方向以及下标范围。"
};
