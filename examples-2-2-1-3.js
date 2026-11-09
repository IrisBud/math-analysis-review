window.REVIEW_SOLUTIONS["2.2:example:1"] = {
  "statement": "设 \\(a_n\\ge0\\)（\\(n=1,2,\\ldots\\)）。证明：若 \\(\\lim a_n=a\\)，则 \\(\\lim\\sqrt{a_n}=\\sqrt a\\)。",
  "focus": "保不等式性保证极限非负；按 a=0 和 a>0 分情况证明根式极限。",
  "reference": "华师大《数学分析》第六版上册 §2.2 定理 2.5、例 1，印刷第 29 页（PDF 第 42 页）。",
  "solutionSource": "依据华师大第六版上册 §2.2 例 1 整理。",
  "solution": "由 \\(a_n\\ge0\\)、\\(a_n\\to a\\) 和保不等式性，得 \\(a\\ge0\\)。\n\n若 \\(a=0\\)，任给 \\(\\varepsilon>0\\)，由 \\(a_n\\to0\\)，存在 \\(N\\)，当 \\(n>N\\) 时 \\(0\\le a_n<\\varepsilon^2\\)，所以 \\(|\\sqrt{a_n}-0|<\\varepsilon\\)。\n\n若 \\(a>0\\)，有\n\\[\n|\\sqrt{a_n}-\\sqrt a|\n=\\frac{|a_n-a|}{\\sqrt{a_n}+\\sqrt a}\n\\le\\frac{|a_n-a|}{\\sqrt a}.\n\\]\n任给 \\(\\varepsilon>0\\)，由 \\(a_n\\to a\\)，存在 \\(N\\)，当 \\(n>N\\) 时 \\(|a_n-a|<\\sqrt a\\,\\varepsilon\\)。于是根式之差小于 \\(\\varepsilon\\)。因此两种情况均有 \\(\\sqrt{a_n}\\to\\sqrt a\\)。",
  "exam": "由保不等式性，\\(a\\ge0\\)。若 \\(a=0\\)，任给 \\(\\varepsilon>0\\)，当 n 充分大时 \\(0\\le a_n<\\varepsilon^2\\)，故 \\(|\\sqrt{a_n}|<\\varepsilon\\)。\n\n若 \\(a>0\\)，\\(\\displaystyle|\\sqrt{a_n}-\\sqrt a|\\le |a_n-a|/\\sqrt a\\)。任给 \\(\\varepsilon>0\\)，当 n 充分大时 \\(|a_n-a|<\\sqrt a\\,\\varepsilon\\)，故根式之差小于 \\(\\varepsilon\\)。所以 \\(\\sqrt{a_n}\\to\\sqrt a\\)。",
  "guidance": "要证明根式极限，先检查目标 \\(\\sqrt a\\) 有意义：已知每项非负，保不等式性保证 \\(a\\ge0\\)。有理化后的分母含 \\(\\sqrt a\\)，当 \\(a=0\\) 时不能除以它，因此先单独处理零，再用有理化处理正数。",
  "variantSource": "陈纪修等《数学分析》第三版上册，第二章 §2 习题第 6 题，印刷第 38 页（PDF 第 57 页）。改编：把原题的平方根改为立方根。",
  "variant": "设 \\(x_n\\ge0\\)、\\(x_n\\to a\\ge0\\)，证明 \\(\\sqrt[3]{x_n}\\to\\sqrt[3]a\\)。",
  "variantSolution": "对于 \\(u,v\\ge0\\)，令 \\(s=\\sqrt[3]u\\)、\\(t=\\sqrt[3]v\\)。因为 \\(s^2+st+t^2\\ge(s-t)^2\\)，所以\n\\[\n|u-v|=|s-t|(s^2+st+t^2)\\ge|s-t|^3.\n\\]\n任给 \\(\\varepsilon>0\\)，由 \\(x_n\\to a\\)，存在 \\(N\\)，当 \\(n>N\\) 时 \\(|x_n-a|<\\varepsilon^3\\)。于是 \\(|\\sqrt[3]{x_n}-\\sqrt[3]a|<\\varepsilon\\)，得证。",
  "verification": "非负条件、零与正两种情形以及立方根练习的估计已人工检查。"
};

window.REVIEW_SOLUTIONS["2.2:example:2"] = {
  "statement": "求数列 \\(\\{\\sqrt[n]{n}\\}\\) 的极限。",
  "focus": "二项式估计结合夹逼性；选择二次项产生趋零上界。",
  "reference": "华师大《数学分析》第六版上册 §2.2 定理 2.6、例 2，印刷第 29—30 页（PDF 第 42—43 页）。",
  "solutionSource": "依据华师大第六版上册 §2.2 例 2 整理。",
  "solution": "当 \\(n>1\\) 时，令 \\(h_n=\\sqrt[n]{n}-1>0\\)。由二项式展开，\n\\[\nn=(1+h_n)^n\\ge1+\\frac{n(n-1)}2h_n^2,\n\\qquad 0<h_n<\\sqrt{\\frac2{n-1}}.\n\\]\n因此\n\\[\n1<\\sqrt[n]{n}<1+\\sqrt{\\frac2{n-1}}.\n\\]\n任给 \\(\\varepsilon>0\\)，取 \\(N>1+2/\\varepsilon^2\\)，则 \\(n>N\\) 时 \\(\\sqrt{2/(n-1)}<\\varepsilon\\)，故右端趋于 1。由夹逼性，所求极限为 1。",
  "exam": "当 \\(n>1\\) 时令 \\(h_n=\\sqrt[n]{n}-1>0\\)。由 \\(n=(1+h_n)^n\\ge1+n(n-1)h_n^2/2\\)，得\n\\[\n1<\\sqrt[n]{n}<1+\\sqrt{2/(n-1)}.\n\\]\n右端趋于 1，故由夹逼性 \\(\\displaystyle\\lim\\sqrt[n]{n}=1\\)。",
  "guidance": "设 \\(h_n\\) 为根式与目标 1 的差，再展开 \\(n=(1+h_n)^n\\)。只用一次项只能得到 \\(h_n\\) 的常数上界；二次项含 \\(n(n-1)\\)，与左边的 n 比较后才能留下一个趋于 0 的 \\(1/(n-1)\\)。最后使用本节刚介绍的夹逼性。",
  "variantSource": "陈纪修等《数学分析》第三版上册第二章 §2 习题 9(9)，印刷第 38 页（PDF 第 57 页）。原题求该极限；这里增加不直接引用本例结论、使用二项式估计的要求。",
  "variant": "不直接引用 \\(\\sqrt[n]n\\to1\\)，利用二项式估计求\n\\[\n\\lim_{n\\to\\infty}\\sqrt[n]{n\\lg n}.\n\\]\n这里 \\(\\lg\\) 为以 10 为底的对数。",
  "variantSolution": "对 \\(n\\ge10\\)，有 \\(1\\le n\\lg n\\le n^2\\)：前一不等式由 \\(\\lg n\\ge1\\) 得到；后一不等式由 \\(10^n\\ge n\\)，即 \\(\\lg n\\le n\\) 得到。\n\n令 \\(h_n=\\sqrt[n]{n\\lg n}-1\\ge0\\)。由于底数上界为 \\(n^2\\)，保留二项式展开的三次项：\n\\[\nn^2\\ge n\\lg n=(1+h_n)^n\n\\ge\\binom n3 h_n^3.\n\\]\n当 \\(n\\ge10\\) 时，\n\\[\n0\\le h_n^3\\le\\frac{6n}{(n-1)(n-2)}\\le\\frac{24}{n}\\to0.\n\\]\n任给 \\(\\varepsilon>0\\)，取 \\(N>\\max\\{10,24/\\varepsilon^3\\}\\)，则 \\(n>N\\) 时 \\(h_n<\\varepsilon\\)。因此由定义，原极限为 \\(\\boxed1\\)。",
  "verification": "华师大原例与陈教材对应证明已首轮对照。原先练习仅将 n 换为 n²、实质过近；已替换为陈教材 n lg n 的开方题，并同步更换来源和完整解答。全站语义去重与独立二审仍未完成。"
};

window.REVIEW_SOLUTIONS["2.2:example:3"] = {
  "statement": "证明：\\(\\displaystyle\\lim_{n\\to\\infty}\\frac1{\\sqrt[n]{n!}}=0\\)。",
  "focus": "把根式与 ε 的比较转化为幂与阶乘的比较，使用 §2.1 例 6。",
  "reference": "华师大《数学分析》第六版上册 §2.2 例 3，印刷第 30 页（PDF 第 43 页）；所用幂与阶乘的极限见 §2.1 例 6，印刷第 24 页。",
  "solutionSource": "依据华师大第六版上册 §2.2 例 3 整理。",
  "solution": "任给 \\(\\varepsilon>0\\)。由于 \\(1/\\varepsilon\\) 是固定实数，依 §2.1 例 6，\n\\[\n\\frac{(1/\\varepsilon)^n}{n!}\\to0.\n\\]\n所以存在正整数 \\(N\\)，当 \\(n>N\\) 时该正数小于 1，即 \\(1<\\varepsilon^n n!\\)。各项均为正，取 n 次根得到 \\(1<\\varepsilon\\sqrt[n]{n!}\\)，因此\n\\[\n0<\\frac1{\\sqrt[n]{n!}}<\\varepsilon.\n\\]\n由定义，所求极限为 0。",
  "exam": "任给 \\(\\varepsilon>0\\)，由 §2.1 例 6，\\((1/\\varepsilon)^n/n!\\to0\\)，故 n 充分大时 \\((1/\\varepsilon)^n/n!<1\\)。取 n 次根得 \\(0<1/\\sqrt[n]{n!}<\\varepsilon\\)。所以极限为 0。",
  "guidance": "这里根指数也随着 n 改变，不能直接套普通根式极限法则。先从目标 \\(1/\\sqrt[n]{n!}<\\varepsilon\\) 出发，两边都是正数，取 n 次方可变成 \\((1/\\varepsilon)^n/n!<1\\)。后一形式恰好与前一节已经证明的结果一致。",
  "variantSource": "陈纪修等《数学分析》第三版上册，第二章 §2 习题第 9 题（7），印刷第 38 页（PDF 第 57 页）。改编：将 n! 改为 (n+1)!。",
  "variant": "证明：\\(\\displaystyle\\lim_{n\\to\\infty}\\frac1{\\sqrt[n]{(n+1)!}}=0\\)。",
  "variantSolution": "任给 \\(\\varepsilon>0\\)。由 §2.1 例 6，\\((1/\\varepsilon)^n/n!\\to0\\)，因此充分大的 \\(n\\) 满足 \\((1/\\varepsilon)^n/n!<1\\)。又 \\((n+1)!\\ge n!>0\\)，所以\n\\[\n0<\\frac{(1/\\varepsilon)^n}{(n+1)!}\n\\le\\frac{(1/\\varepsilon)^n}{n!}<1.\n\\]\n取 n 次根得 \\(1/\\sqrt[n]{(n+1)!}<\\varepsilon\\)，由定义得证。",
  "verification": "ε 固定后可应用 §2.1 例 6；取根时各数均正，已人工核查。"
};

