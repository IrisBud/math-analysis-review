window.REVIEW_SOLUTIONS["2.1:exercise:8"] = {
  "statement": "证明：若 \\(\\lim_{n\\to\\infty}a_n=a\\)，则 \\(\\lim_{n\\to\\infty}|a_n|=|a|\\)。当且仅当 \\(a\\) 为何值时反之也成立？",
  "focus": "反三角不等式；判断逆命题成立时必须明确固定的 a 和量词。",
  "reference": "华师大《数学分析》第六版上册 §2.1，数列极限定义印刷第 22—23 页；习题第 8 题印刷第 27 页（PDF 第 40 页）。",
  "solutionSource": "参考答案资料：文件名标注第五版的《教材习题详解》上册，习题 2.1 第 8 题，印刷第 128 页（PDF 第 21 页）；题面已对照。",
  "solution": "由反三角不等式，对每个 \\(n\\) 有\n\\[\n\\bigl||a_n|-|a|\\bigr|\\le|a_n-a|.\n\\]\n任给 \\(\\varepsilon>0\\)，由 \\(a_n\\to a\\)，存在正整数 \\(N\\)，使 \\(n>N\\) 时 \\(|a_n-a|<\\varepsilon\\)，因此 \\(\\bigl||a_n|-|a|\\bigr|<\\varepsilon\\)，即 \\(|a_n|\\to|a|\\)。\n\n逆命题对所有数列成立，当且仅当 \\(a=0\\)。若 \\(a=0\\)，由 \\(|a_n|\\to0\\) 和 \\(|a_n-0|=|a_n|\\)，按定义有 \\(a_n\\to0\\)。若 \\(a\\ne0\\)，取常数数列 \\(a_n=-a\\)，则 \\(|a_n|=|a|\\to|a|\\)，但 \\(|a_n-a|=2|a|>0\\)，故它不趋于 \\(a\\)。所以只有 \\(a=0\\)。",
  "exam": "由反三角不等式 \\(\\bigl||a_n|-|a|\\bigr|\\le|a_n-a|\\)，根据极限定义得 \\(|a_n|\\to|a|\\)。\n\n当 \\(a=0\\) 时，\\(|a_n|\\to0\\) 等价于 \\(|a_n-0|\\to0\\)，故逆命题成立；当 \\(a\\ne0\\) 时取 \\(a_n=-a\\)，则 \\(|a_n|\\to|a|\\) 而 \\(a_n\\not\\to a\\)。因此所求为 \\(a=0\\)。",
  "guidance": "要证明绝对值数列的极限，先写出它到目标 \\(|a|\\) 的距离，再用反三角不等式把它压到已知能控制的 \\(|a_n-a|\\) 之下。\n\n逆命题不是询问某一个特殊数列是否可逆，而是固定 \\(a\\) 后，问这种推论能否对所有满足前提的数列成立。当 \\(a\\ne0\\) 时，绝对值无法区分 \\(a\\) 与 \\(-a\\)，这直接提示反例。",
  "variantSource": "陈纪修等《数学分析》第三版上册，第二章 §2 习题第 6 题，印刷第 38 页（PDF 第 57 页）。原题未改动。",
  "variant": "设 \\(x_n\\ge0\\) 且 \\(\\lim x_n=a\\ge0\\)，证明 \\(\\lim\\sqrt{x_n}=\\sqrt a\\)。",
  "variantSolution": "对于任意非负 \\(u,v\\)，由\n\\[\n|u-v|=|\\sqrt u-\\sqrt v|(\\sqrt u+\\sqrt v)\n\\ge|\\sqrt u-\\sqrt v|^2\n\\]\n可得 \\(|\\sqrt u-\\sqrt v|\\le\\sqrt{|u-v|}\\)。任给 \\(\\varepsilon>0\\)，由 \\(x_n\\to a\\)，存在 \\(N\\)，当 \\(n>N\\) 时 \\(|x_n-a|<\\varepsilon^2\\)。于是 \\(|\\sqrt{x_n}-\\sqrt a|<\\varepsilon\\)，由定义得证。",
  "verification": "证明和 a=0 的双向判断已人工检查；练习估计对 a=0 仍适用。"
};

window.REVIEW_SOLUTIONS["2.1:exercise:9"] = {
  "statement": "按 \\(\\varepsilon\\)–\\(N\\) 定义证明：\n（1）\\(\\lim(\\sqrt{n+1}-\\sqrt n)=0\\)；\n（2）\\(\\displaystyle\\lim\\frac{1+2+\\cdots+n}{n^3}=0\\)；\n（3）\\(\\lim a_n=1\\)，其中 \\(\\displaystyle a_n=\\begin{cases}(n-1)/n,&n\\text{ 为偶数},\\\\ \\sqrt{n^2+n}/n,&n\\text{ 为奇数}.\\end{cases}\\)",
  "focus": "有理化、求和公式和分奇偶统一估计；依据估计构造 N。",
  "reference": "华师大《数学分析》第六版上册 §2.1，数列极限定义与例 2、例 3 印刷第 22—23 页；习题 2.1 第 9 题印刷第 27 页（PDF 第 40 页）。",
  "solutionSource": "参考答案资料：文件名标注第五版的《教材习题详解》上册，习题 2.1 第 9 题，印刷第 128—129 页（PDF 第 21—22 页）。资料第（1）问将 ε 的取值误印为 ε<0；应为任意 ε>0。",
  "solution": "（1）有理化：\n\\[\n0<\\sqrt{n+1}-\\sqrt n=\\frac1{\\sqrt{n+1}+\\sqrt n}<\\frac1{\\sqrt n}.\n\\]\n任给 \\(\\varepsilon>0\\)，取正整数 \\(N\\ge1/\\varepsilon^2\\)。当 \\(n>N\\) 时，上式小于 \\(\\varepsilon\\)，故极限为 0。\n\n（2）由求和公式，\n\\[\n0<\\frac{1+\\cdots+n}{n^3}=\\frac{n+1}{2n^2}\\le\\frac1n.\n\\]\n任给 \\(\\varepsilon>0\\)，取正整数 \\(N\\ge1/\\varepsilon\\)，则 \\(n>N\\) 时该数小于 \\(\\varepsilon\\)，故极限为 0。\n\n（3）当 \\(n\\) 为偶数时，\\(|a_n-1|=1/n\\)；当 \\(n\\) 为奇数时，有理化得\n\\[\n|a_n-1|=\\frac{\\sqrt{n^2+n}-n}{n}\n=\\frac1{\\sqrt{n^2+n}+n}<\\frac1n.\n\\]\n因此无论奇偶都有 \\(|a_n-1|\\le1/n\\)。任给 \\(\\varepsilon>0\\)，取正整数 \\(N\\ge1/\\varepsilon\\)，当 \\(n>N\\) 时 \\(|a_n-1|<\\varepsilon\\)，故 \\(a_n\\to1\\)。",
  "exam": "任给 \\(\\varepsilon>0\\)。\n（1）\\(\\displaystyle0<\\sqrt{n+1}-\\sqrt n=1/(\\sqrt{n+1}+\\sqrt n)<1/\\sqrt n\\)。取正整数 \\(N\\ge1/\\varepsilon^2\\)。\n（2）\\(\\displaystyle0<(1+\\cdots+n)/n^3=(n+1)/(2n^2)\\le1/n\\)。取 \\(N\\ge1/\\varepsilon\\)。\n（3）偶数 \\(n\\) 时 \\(|a_n-1|=1/n\\)；奇数 \\(n\\) 时 \\(\\displaystyle|a_n-1|=1/(\\sqrt{n^2+n}+n)<1/n\\)。取 \\(N\\ge1/\\varepsilon\\)，则对两种情况均有 \\(|a_n-1|<\\varepsilon\\)。\n故三问结论均成立。",
  "guidance": "每问都从距离目标有多远入手。第（1）问两个根式相减，直接估计不便，有理化后分子变成 1；第（2）问先用等差数列求和消掉求和号；第（3）问先分别估计奇数项和偶数项，再找一个共同上界 \\(1/n\\)，这样一个 \\(N\\) 就能同时控制全部足够大的下标。\n\n别忘了给定的 \\(\\varepsilon\\) 必须是正数；参考资料第（1）问的负号是误印，不能照搬。",
  "variantSource": "陈纪修等《数学分析》第三版上册，第二章 §2 习题第 2 题（3），印刷第 38 页（PDF 第 57 页）。原题未改动。",
  "variant": "按定义证明：\\(\\displaystyle\\lim_{n\\to\\infty}(\\sqrt{n^2+n}-n)=\\frac12\\)。",
  "variantSolution": "有理化后\n\\[\n\\sqrt{n^2+n}-n=\\frac1{\\sqrt{1+1/n}+1},\n\\]\n所以\n\\[\n\\left|\\sqrt{n^2+n}-n-\\frac12\\right|\n=\\frac{\\sqrt{1+1/n}-1}{2(\\sqrt{1+1/n}+1)}\n=\\frac{1}{2n(\\sqrt{1+1/n}+1)^2}\n\\le\\frac1{8n}.\n\\]\n任给 \\(\\varepsilon>0\\)，取正整数 \\(N\\ge1/(8\\varepsilon)\\)，当 \\(n>N\\) 时所求距离小于 \\(\\varepsilon\\)，故极限为 \\(1/2\\)。",
  "verification": "三问的估计、所选 N 与参考答案误印已人工检查；练习有理化估计已核算。"
};

window.REVIEW_SOLUTIONS["2.1:exercise:10"] = {
  "statement": "设 \\(a_n\\ne0\\)，证明：\\(\\lim a_n=0\\) 的充分必要条件是 \\(\\displaystyle\\lim 1/a_n=\\infty\\)。",
  "focus": "无穷小与无穷大的倒数关系；充分必要条件的两个方向；非零条件。",
  "reference": "华师大《数学分析》第六版上册 §2.1，无穷小、无穷大定义印刷第 25—26 页；习题第 10 题印刷第 27 页（PDF 第 40 页）。这里 (infty) 表示绝对值趋于无穷。",
  "solutionSource": "参考答案资料：文件名标注第五版的《教材习题详解》上册，习题 2.1 第 10 题，印刷第 129 页（PDF 第 22 页）；题面已对照。",
  "solution": "本题每个 \\(a_n\\ne0\\)，故倒数都有定义。本书的 \\(1/a_n\\to\\infty\\) 意味着：任给 \\(M>0\\)，最终总有 \\(|1/a_n|>M\\)，不要求符号固定。\n\n必要性：设 \\(a_n\\to0\\)。任给 \\(M>0\\)，把 \\(\\varepsilon\\) 取为 \\(1/M>0\\)。由定义，存在 \\(N\\)，使 \\(n>N\\) 时 \\(0<|a_n|<1/M\\)，故 \\(|1/a_n|>M\\)。这就证明 \\(1/a_n\\to\\infty\\)。\n\n充分性：设 \\(1/a_n\\to\\infty\\)。任给 \\(\\varepsilon>0\\)，取 \\(M=1/\\varepsilon>0\\)。由定义，存在 \\(N\\)，使 \\(n>N\\) 时 \\(|1/a_n|>1/\\varepsilon\\)，于是 \\(|a_n|<\\varepsilon\\)。故 \\(a_n\\to0\\)。",
  "exam": "若 \\(a_n\\to0\\)，任给 \\(M>0\\)，取 \\(\\varepsilon=1/M\\)，则充分大的 \\(n\\) 满足 \\(0<|a_n|<1/M\\)，所以 \\(|1/a_n|>M\\)，即 \\(1/a_n\\to\\infty\\)。\n\n反之，若 \\(1/a_n\\to\\infty\\)，任给 \\(\\varepsilon>0\\)，取 \\(M=1/\\varepsilon\\)，则充分大的 \\(n\\) 满足 \\(|1/a_n|>1/\\varepsilon\\)，从而 \\(|a_n|<\\varepsilon\\)，故 \\(a_n\\to0\\)。",
  "guidance": "两个定义分别以“最终小于任意正数”和“最终大于任意正数”为目标，而取倒数正好使这两个不等式互相转换。所以从目标中的 \\(M\\) 或 \\(\\varepsilon\\) 倒推另一个量：分别取 \\(1/M\\) 与 \\(1/\\varepsilon\\)。\n\n要写出两边的量词，不能仅凭“很小的数的倒数很大”结束。原题给出每项非零，保证倒数有意义；\\(\\infty\\) 的定义控制的是绝对值，不要求所有项都为正。",
  "variantSource": "陈纪修等《数学分析》第三版上册，第二章 §3 习题第 3 题（1），印刷第 44 页（PDF 第 63 页）。原题未改动。",
  "variant": "证明：若 \\(\\{x_n\\}\\) 是无穷大量，且 \\(|y_n|\\ge\\delta>0\\)，则 \\(\\{x_ny_n\\}\\) 是无穷大量。",
  "variantSolution": "任给 \\(M>0\\)。由于 \\(x_n\\) 是无穷大量，对正数 \\(M/\\delta\\)，存在正整数 \\(N\\)，使 \\(n>N\\) 时 \\(|x_n|>M/\\delta\\)。于是\n\\[\n|x_ny_n|=|x_n||y_n|\\ge\\delta|x_n|>M.\n\\]\n由无穷大量的定义，\\(x_ny_n\\to\\infty\\)。",
  "verification": "两方向的量词、非零条件和符号约定已人工检查；练习直接使用定义。"
};

