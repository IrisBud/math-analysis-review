Object.assign(window.REVIEW_SOLUTIONS["2.1:exercise:3"], {
  "variant": "根据本节基本数列极限，求下列极限，并指出哪些原数列是无穷小数列：\n\\[\nn^{-2/3},\\qquad (-1/4)^n,\\qquad \\sqrt[n]{7},\\qquad (1/5)^{n/2}.\n\\]",
  "variantSolution": "由 \\(n^{-\\alpha}\\to0\\)（\\(\\alpha>0\\)），第一项趋于 0。因 \\(|-1/4|<1\\)，第二项趋于 0；因 \\(7>0\\)，第三项趋于 1；第四项写作 \\((1/\\sqrt5)^n\\)，其中底数在 0 与 1 之间，故趋于 0。因此四个极限为 \\(0,0,1,0\\)，第一个、第二个和第四个数列是无穷小数列。",
  "variantSource": "自编。已查看陈纪修第三版上册第二章 §2 的相关例题与习题（印刷第 29—38 页），并检索汤家凤《高数辅导讲义》第一章极限定义部分（PDF 第 14 页）；本次查到的候选存在题面重复或核心训练点不足，未对两书作穷尽检索。"
});

Object.assign(window.REVIEW_SOLUTIONS["2.1:exercise:4"], {
  "variant": "设 \\(k_n\\in\\{0,1\\}\\)，令 \\(b_n=a_{n+k_n}\\)。证明：如果 \\(a_n\\to a\\)，则 \\(b_n\\to a\\)；再举例说明逆命题不一定成立。",
  "variantSolution": "若 \\(a_n\\to a\\)，任给 \\(\\varepsilon>0\\)，存在 \\(N\\) 使 \\(j>N\\) 时 \\(|a_j-a|<\\varepsilon\\)。当 \\(n>N\\) 时 \\(n+k_n\\ge n>N\\)，故 \\(|b_n-a|<\\varepsilon\\)，即 \\(b_n\\to a\\)。\n\n逆命题不成立：取 \\(a_n=(-1)^n\\)，偶数 n 时取 \\(k_n=0\\)，奇数 n 时取 \\(k_n=1\\)。于是 \\(b_n=1\\to1\\)，但 \\(\\{a_n\\}\\) 有无穷多个 1 和无穷多个 −1，不收敛。这里变化的位移可能反复选中同一类项，不能像固定平移一样直接反推。",
  "variantSource": "自编。已查看陈纪修第三版上册第二章 §2 的相关例题与习题（印刷第 29—38 页），并检索汤家凤《高数辅导讲义》第一章极限定义部分（PDF 第 14 页）；本次查到的候选存在题面重复或核心训练点不足，未对两书作穷尽检索。"
});

Object.assign(window.REVIEW_SOLUTIONS["2.1:exercise:7"], {
  "variant": "判断以下三个数列分别有界还是无界，是否为无穷大数列：\n\\[\nu_n=n[1+(-1)^n],\\qquad v_n=(-1)^n(n+1),\\qquad w_n=\\frac{\\sin n}{n}.\n\\]",
  "variantSolution": "\\(u_n\\) 的偶数项为 \\(2n\\)，可以任意大；奇数项为 0，所以它无界但不是无穷大数列。\n\n对任意 \\(M>0\\)，当 \\(n>M\\) 时 \\(|v_n|=n+1>M\\)，所以 \\(v_n\\) 是无穷大数列，因而无界；它的符号交替，不是正无穷大或负无穷大数列。\n\n由于 \\(|w_n|\\le1/n\\le1\\)，数列 \\(w_n\\) 有界，所以不是无穷大数列。",
  "variantSource": "自编。已查看陈纪修第三版上册第二章 §2 的相关例题与习题（印刷第 29—38 页），并检索汤家凤《高数辅导讲义》第一章极限定义部分（PDF 第 14 页）；本次查到的候选存在题面重复或核心训练点不足，未对两书作穷尽检索。"
});

Object.assign(window.REVIEW_SOLUTIONS["2.1:exercise:8"], {
  "variant": "设 \\(|x_n|\\to1\\)。若从某一项开始 \\(x_n\\ge0\\)，证明 \\(x_n\\to1\\)；若从某一项开始 \\(x_n\\le0\\)，证明 \\(x_n\\to-1\\)。去掉最终符号条件后，上述两个结论是否至少有一个必然成立？",
  "variantSolution": "若 \\(n>N_0\\) 时 \\(x_n\\ge0\\)，则此后 \\(x_n=|x_n|\\)。任给 \\(\\varepsilon>0\\)，由 \\(|x_n|\\to1\\)，充分大的 n 满足 \\(|\\,|x_n|-1|<\\varepsilon\\)，于是 \\(|x_n-1|<\\varepsilon\\)，故 \\(x_n\\to1\\)。\n\n若最终 \\(x_n\\le0\\)，此后 \\(x_n=-|x_n|\\)，所以 \\(|x_n+1|=||x_n|-1|\\to0\\)，故 \\(x_n\\to-1\\)。\n\n去掉条件后，取 \\(x_n=(-1)^n\\)，则 \\(|x_n|=1\\to1\\)，但奇偶项分别为 −1 和 1，数列发散。故两个结论都不必成立。",
  "variantSource": "自编。已查看陈纪修第三版上册第二章 §2 的相关例题与习题（印刷第 29—38 页），并检索汤家凤《高数辅导讲义》第一章极限定义部分（PDF 第 14 页）；本次查到的候选存在题面重复或核心训练点不足，未对两书作穷尽检索。"
});

Object.assign(window.REVIEW_SOLUTIONS["2.1:exercise:9"], {
  "variant": "按 \\(\\varepsilon\\)–\\(N\\) 定义证明 \\(\\lim a_n=0\\)，其中\n\\[\na_n=\\begin{cases}\n3/n,&n\\text{ 为偶数},\\\\\n\\sqrt{n+4}-\\sqrt n,&n\\text{ 为奇数}.\n\\end{cases}\n\\]",
  "variantSolution": "偶数 n 时 \\(|a_n|=3/n\\le3/\\sqrt n\\)。奇数 n 时有理化得到\n\\[\n|a_n|=\\frac4{\\sqrt{n+4}+\\sqrt n}\\le\\frac2{\\sqrt n}\n\\le\\frac3{\\sqrt n}.\n\\]\n任给 \\(\\varepsilon>0\\)，取正整数 \\(N\\ge9/\\varepsilon^2\\)。无论 n 为奇数还是偶数，只要 \\(n>N\\)，都有 \\(|a_n|\\le3/\\sqrt n<\\varepsilon\\)。所以由定义 \\(a_n\\to0\\)。",
  "variantSource": "自编。已查看陈纪修第三版上册第二章 §2 的相关例题与习题（印刷第 29—38 页），并检索汤家凤《高数辅导讲义》第一章极限定义部分（PDF 第 14 页）；本次查到的候选存在题面重复或核心训练点不足，未对两书作穷尽检索。"
});

Object.assign(window.REVIEW_SOLUTIONS["2.1:example:1"], {
  "variant": "一根长为 1 尺的木棒，每天截下当天剩余长度的三分之二。求第 n 天截下的长度，并按定义证明第 n 天截下的长度趋于 0。",
  "variantSolution": "每天保留前一天剩余长度的 \\(1/3\\)，所以第 n 天开始时余长为 \\((1/3)^{n-1}\\)，第 n 天截下\n\\[\na_n=\\frac23\\left(\\frac13\\right)^{n-1}=\\frac2{3^n}.\n\\]\n由 \\(3^n=(1+2)^n\\ge1+2n\\)，有 \\(0<a_n\\le2/(1+2n)<1/n\\)。任给 \\(\\varepsilon>0\\)，取正整数 \\(N\\ge1/\\varepsilon\\)，当 \\(n>N\\) 时 \\(|a_n|<\\varepsilon\\)。因此 \\(a_n\\to0\\)。",
  "variantSource": "自编。已查看陈纪修第三版上册第二章 §2 的相关例题与习题（印刷第 29—38 页），并检索汤家凤《高数辅导讲义》第一章极限定义部分（PDF 第 14 页）；本次查到的候选存在题面重复或核心训练点不足，未对两书作穷尽检索。"
});

Object.assign(window.REVIEW_SOLUTIONS["2.1:example:2"], {
  "variant": "设 \\(\\alpha>0\\)，按 \\(\\varepsilon\\)–\\(N\\) 定义证明\n\\[\n\\frac{1+(-1)^n}{n^\\alpha}\\longrightarrow0.\n\\]",
  "variantSolution": "因为 \\(|1+(-1)^n|\\le2\\)，故 \\(\\left|(1+(-1)^n)/n^\\alpha\\right|\\le2/n^\\alpha\\)。任给 \\(\\varepsilon>0\\)，取正整数 \\(N\\ge(2/\\varepsilon)^{1/\\alpha}\\)。当 \\(n>N\\) 时 \\(2/n^\\alpha<\\varepsilon\\)，因此按定义该数列趋于 0。",
  "variantSource": "自编。已查看陈纪修第三版上册第二章 §2 的相关例题与习题（印刷第 29—38 页），并检索汤家凤《高数辅导讲义》第一章极限定义部分（PDF 第 14 页）；本次查到的候选存在题面重复或核心训练点不足，未对两书作穷尽检索。"
});

Object.assign(window.REVIEW_SOLUTIONS["2.1:example:3"], {
  "variant": "用 \\(\\varepsilon\\)–\\(N\\) 定义证明\n\\[\n\\lim_{n\\to\\infty}\\frac{n+2}{n+\\sqrt n}=1.\n\\]",
  "variantSolution": "通分并估计：\n\\[\n\\left|\\frac{n+2}{n+\\sqrt n}-1\\right|\n=\\frac{|2-\\sqrt n|}{n+\\sqrt n}\n\\le\\frac{2+\\sqrt n}{n}\n=\\frac2n+\\frac1{\\sqrt n}\n\\le\\frac3{\\sqrt n}.\n\\]\n任给 \\(\\varepsilon>0\\)，取正整数 \\(N\\ge9/\\varepsilon^2\\)，则 \\(n>N\\) 时距离小于 \\(\\varepsilon\\)，由定义得证。",
  "variantSource": "自编。已查看陈纪修第三版上册第二章 §2 的相关例题与习题（印刷第 29—38 页），并检索汤家凤《高数辅导讲义》第一章极限定义部分（PDF 第 14 页）；本次查到的候选存在题面重复或核心训练点不足，未对两书作穷尽检索。"
});

Object.assign(window.REVIEW_SOLUTIONS["2.1:example:6"], {
  "variant": "按 \\(\\varepsilon\\)–\\(N\\) 定义证明 \\(\\displaystyle n^3/n!\\to0\\)。",
  "variantSolution": "当 \\(n\\ge4\\) 时，\n\\[\n\\frac{n^3}{n!}\n=\\frac{n^2}{(n-1)(n-2)(n-3)!}\n\\le \\frac4{(n-3)!}\n\\le \\frac4{n-3}.\n\\]\n这里用到 \\(n/(n-1)\\le2\\)、\\(n/(n-2)\\le2\\) 和 \\((n-3)!\\ge n-3\\)。任给 \\(\\varepsilon>0\\)，取正整数 \\(N>3+4/\\varepsilon\\)，则 \\(n>N\\) 时该数小于 \\(\\varepsilon\\)。所以该数列按定义趋于 0。",
  "variantSource": "自编。已查看陈纪修第三版上册第二章 §2 的相关例题与习题（印刷第 29—38 页），并检索汤家凤《高数辅导讲义》第一章极限定义部分（PDF 第 14 页）；本次查到的候选存在题面重复或核心训练点不足，未对两书作穷尽检索。"
});

Object.assign(window.REVIEW_SOLUTIONS["2.2:example:3"], {
  "variant": "设 \\(p\\) 为固定的正整数，证明 \\(\\displaystyle\\sqrt[n]{n^p/n!}\\to0\\)。",
  "variantSolution": "先注意 \\(n\\le2^n\\)（可由二项式定理得到），所以 \\(n^p\\le2^{pn}\\)。任给 \\(\\varepsilon>0\\)，由华师大 §2.1 例 6，对固定正数 \\(2^p/\\varepsilon\\) 有\n\\[\n0\\le\\frac{n^p}{\\varepsilon^n n!}\n\\le\\frac{(2^p/\\varepsilon)^n}{n!}\\longrightarrow0.\n\\]\n因此存在 N，当 \\(n>N\\) 时上式小于 1，也就是 \\(n^p/n!<\\varepsilon^n\\)。两边非负，取 n 次根得 \\(\\sqrt[n]{n^p/n!}<\\varepsilon\\)，所以极限为 0。",
  "variantSource": "自编。已查看陈纪修第三版上册第二章 §2 的相关例题与习题（印刷第 29—38 页），并检索汤家凤《高数辅导讲义》第一章极限定义部分（PDF 第 14 页）；本次查到的候选存在题面重复或核心训练点不足，未对两书作穷尽检索。"
});

Object.assign(window.REVIEW_SOLUTIONS["2.2:example:5"], {
  "variant": "讨论参数 \\(a\\in\\mathbb R\\)，求 \\(\\displaystyle\\lim_{n\\to\\infty}\\frac{a^n}{2+a^{2n}}\\)；对于极限不存在的情况说明理由。",
  "variantSolution": "若 \\(|a|<1\\)，则 \\(a^n\\to0\\)、\\(a^{2n}\\to0\\)，原式趋于 0。若 \\(|a|>1\\)，分子分母同除以 \\(a^{2n}>0\\)，得\n\\[\n\\frac{a^n}{2+a^{2n}}\n=\\frac{a^{-n}}{1+2a^{-2n}}\\longrightarrow0.\n\\]\n当 \\(a=1\\) 时，各项均为 \\(1/3\\)。当 \\(a=-1\\) 时，数列为 \\((-1)^n/3\\)，奇偶项分别为 \\(-1/3\\) 和 \\(1/3\\)，没有极限。综上：\\(a\\ne\\pm1\\) 时极限为 0；\\(a=1\\) 时为 \\(1/3\\)；\\(a=-1\\) 时极限不存在。分母始终不小于 2。",
  "variantSource": "自编。已查看陈纪修第三版上册第二章 §2 的相关例题与习题（印刷第 29—38 页），并检索汤家凤《高数辅导讲义》第一章极限定义部分（PDF 第 14 页）；本次查到的候选存在题面重复或核心训练点不足，未对两书作穷尽检索。"
});

Object.assign(window.REVIEW_SOLUTIONS["2.2:example:6"], {
  "variantSource": "陈纪修等《数学分析》第三版上册，第二章 §2 例 2.2.11，印刷第 37 页（PDF 第 56 页）。原题未改动；与华师大例 6 都使用共轭有理化，但原式和极限不同。",
  "variant": "求极限：\\(\\displaystyle\\lim_{n\\to\\infty}n\\bigl(\\sqrt{n^2+1}-\\sqrt{n^2-1}\\bigr)\\)。",
  "variantSolution": "有理化后，再将分母除以 \\(n>0\\)，得到\n\\[\nn(\\sqrt{n^2+1}-\\sqrt{n^2-1})\n=\\frac{2n}{\\sqrt{n^2+1}+\\sqrt{n^2-1}}\n=\\frac2{\\sqrt{1+1/n^2}+\\sqrt{1-1/n^2}}.\n\\]\n分母趋于 2，故所求极限为 1。"
});
