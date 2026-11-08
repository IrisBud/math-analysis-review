Object.assign(window.REVIEW_SOLUTIONS["2.1:example:5"], {
  "variantSource": "陈纪修等《数学分析》第三版上册，第二章 §2 例 2.2.8，印刷第 35 页（PDF 第 54 页）。改编：将原题中固定 p 个非负数的结论，具体化为两个非负参数；以下用定义和二项式估计，避免提前使用华师大下一节的夹逼定理。",
  "variant": "设 \\(a,b\\ge0\\)，按定义证明\n\\[\n\\lim_{n\\to\\infty}\\sqrt[n]{a^n+b^n}=\\max\\{a,b\\}.\n\\]",
  "variantSolution": "令 \\(M=\\max\\{a,b\\}\\)。若 \\(M=0\\)，则 \\(a=b=0\\)，结论显然。\n\n若 \\(M>0\\)，由于 \\(M^n\\le a^n+b^n\\le2M^n\\)，取 n 次根得\n\\[\nM\\le\\sqrt[n]{a^n+b^n}\\le M\\sqrt[n]2.\n\\]\n令 \\(h_n=\\sqrt[n]2-1\\ge0\\)。由二项式定理 \\(2=(1+h_n)^n\\ge1+nh_n\\)，得 \\(0\\le h_n\\le1/n\\)。因此\n\\[\n0\\le\\sqrt[n]{a^n+b^n}-M\\le M/n.\n\\]\n任给 \\(\\varepsilon>0\\)，取正整数 \\(N\\ge M/\\varepsilon\\)，则 \\(n>N\\) 时距离小于 \\(\\varepsilon\\)，按定义得到结论。"
});

Object.assign(window.REVIEW_SOLUTIONS["2.2:example:4"], {
  "variantSource": "自编。已查看陈纪修第三版上册第二章 §2 相关内容（印刷第 29—38 页）并检索汤家凤讲义第一章的极限定义部分（PDF 第 14 页）；本次未选到同时符合训练点及站内不重复要求的可核实题目，未作穷尽检索。",
  "variant": "设 \\(a\\in\\mathbb R\\)，讨论\n\\[\n\\lim_{n\\to\\infty}\n\\frac{(a-1)n^2+2n+1}{(a-1)^2n^2+n+1}.\n\\]",
  "variantSolution": "当 \\(a\\ne1\\) 时，分子分母同除以 \\(n^2\\)，分母极限为 \\((a-1)^2>0\\)，故极限为 \\((a-1)/(a-1)^2=1/(a-1)\\)。\n\n当 \\(a=1\\) 时，二次项同时消失，原式为 \\((2n+1)/(n+1)\\)，分子分母同除以 n，极限为 2。原分母对所有 n 和实数 a 均为正，所以数列各项有定义。"
});

Object.assign(window.REVIEW_SOLUTIONS["2.2:exercise:2"], {
  "variantSource": "自编。已查看陈纪修第三版上册第二章 §2 相关内容（印刷第 29—38 页）并检索汤家凤讲义第一章的极限定义部分（PDF 第 14 页）；本次未选到同时符合训练点及站内不重复要求的可核实题目，未作穷尽检索。",
  "variant": "设 \\(a_n\\ne0\\) 且 \\(a_n\\to0\\)，并且对所有 n 有 \\(|b_n|\\le1/\\sqrt{|a_n|}\\)。证明 \\(a_nb_n\\to0\\)；再举例说明 \\(\\{b_n\\}\\) 可以无界。",
  "variantSolution": "由条件，\n\\[\n|a_nb_n|\\le|a_n|\\frac1{\\sqrt{|a_n|}}=\\sqrt{|a_n|}.\n\\]\n任给 \\(\\varepsilon>0\\)，由 \\(a_n\\to0\\)，充分大的 n 满足 \\(|a_n|<\\varepsilon^2\\)，所以 \\(|a_nb_n|<\\varepsilon\\)。按定义 \\(a_nb_n\\to0\\)。\n\n例如取 \\(a_n=1/n^2\\)、\\(b_n=n\\)，则 \\(|b_n|=1/\\sqrt{|a_n|}\\)，数列 \\(\\{b_n\\}\\) 无界，而 \\(a_nb_n=1/n\\to0\\)。这与原题的有界性充分条件并不矛盾。"
});

Object.assign(window.REVIEW_SOLUTIONS["4.1:exercise:9"], {
  "variantSource": "自编。已查看陈纪修第三版上册第三章 §2 附近连续与间断点的例题和习题（印刷第 80—84 页），并检索汤家凤讲义的极限与连续内容；本次未选到符合构造要求且与站内题目不重复的已核实题面，未对两书作穷尽检索。",
  "variant": "构造定义在 \\([0,1]\\) 上的函数，使它恰好在 0 和 1 连续，在每个 \\(x\\in(0,1)\\) 处不连续；并按华师大教材的分类说明这些间断点的类型。",
  "variantSolution": "令\n\\[\nf(x)=\\begin{cases}\nx(1-x),&x\\in\\mathbb Q,\\\\\n0,&x\\notin\\mathbb Q,\n\\end{cases}\\qquad x\\in[0,1].\n\\]\n有 \\(f(0)=f(1)=0\\)，且 \\(0\\le f(x)\\le x\\) 与 \\(0\\le f(x)\\le1-x\\)。由定义或夹逼可知，从区间内部趋于 0 或 1 时函数值都趋于 0，因此两端点连续。\n\n任取 \\(c\\in(0,1)\\)。由有理数与无理数的稠密性，可取区间内的有理数列与无理数列都趋于 c；前者上的函数值趋于 \\(c(1-c)>0\\)，后者上的函数值恒为 0。故在 c 的一侧或两侧都可找到趋于不同值的点列，单侧极限不存在，c 为第二类间断点。函数在整个 \\([0,1]\\) 都已定义。"
});
