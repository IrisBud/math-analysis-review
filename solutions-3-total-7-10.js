window.REVIEW_SOLUTIONS['3.total:exercise:7'] = {
  "statement": "设 f 为 \\(U_-^\\circ(x_0)\\) 上的递增函数。证明：若存在数列 \\(x_n\\subset U_-^\\circ(x_0)\\)、\\(x_n\\to x_0\\)，使 \\(f(x_n)\\to A\\)，则\n\\[\nf(x_0-0)=\\sup_{x\\in U_-^\\circ(x_0)}f(x)=A.\n\\]",
  "focus": "用趋近端点的一条有界函数值数列和单调性，先确定上确界，再证明单侧极限。",
  "solution": "由 \\(f(x_n)\\to A\\)，存在 N 使 n≥N 时 \\(f(x_n)<A+1\\)。任取左邻域内的 t，因为 \\(x_n\\to x_0\\) 且 \\(t<x_0\\)，充分大 n 时 \\(x_n>t\\)，故 \\(f(t)\\le f(x_n)<A+1\\)。因此值集有上界。\n\n对任意固定 t，仍由充分大时 \\(x_n>t\\) 得 \\(f(t)\\le f(x_n)\\)，令 n→∞，得到 \\(f(t)\\le A\\)。另一方面，每项 \\(f(x_n)\\) 不超过值集的上确界，故 \\(A\\le\\sup f\\)。于是 \\(\\sup f=A\\)。\n\n任给 ε>0，由上确界性质取左侧点 s，使 \\(f(s)>A-\\varepsilon\\)。当 \\(s<x<x_0\\) 时，单调性给出 \\(A-\\varepsilon<f(s)\\le f(x)\\le A\\)。所以 \\(f(x)\\to A\\ (x\\to x_0^-)\\)，结论成立。",
  "exam": "任取左邻域内 t，充分大 n 时 \\(t<x_n\\)，故 \\(f(t)\\le f(x_n)\\to A\\)，于是 A 是上界。又 \\(f(x_n)\\le\\sup f\\) 且趋于 A，故 \\(\\sup f=A\\)。任给 ε，取 s 使 \\(f(s)>A-\\varepsilon\\)，则 \\(s<x<x_0\\) 时 \\(A-\\varepsilon<f(s)\\le f(x)\\le A\\)，故左极限为 A。",
  "guidance": "不能直接由一条函数值收敛的路径断定函数极限；关键是递增性使每个固定左侧点最终都被这条路径中的点控制。",
  "type": "proof",
  "reference": "华师大《数学分析》第六版上册第三章总练习第 7 题，印刷第 67 页（PDF 第 80 页）。",
  "solutionSource": "参考《教材习题详解》上册第五版第三章总练习第 11 题，印刷第 163 页（PDF 第 56 页）；题面与条件对应但题号不同。",
  "variantDeferred": true,
  "verification": "六版题面及五版跨题号答案已首轮核对；独立数学二审与举一反三待补。"
};
window.REVIEW_SOLUTIONS['3.total:exercise:8'] = {
  "statement": "设函数 f 在 \\((0,+\\infty)\\) 上满足 \\(f(2x)=f(x)\\)，且 \\(\\lim_{x\\to+\\infty}f(x)=A\\)。证明：\\(f(x)\\equiv A\\)。",
  "focus": "反复放大任意正点，利用函数方程保持函数值不变。",
  "solution": "任取 \\(x>0\\)。反复使用函数方程，\\(f(2^n x)=f(x)\\) 对所有正整数 n 成立。由于 \\(2^n x\\to+\\infty\\)，归结原则给出 \\(f(2^n x)\\to A\\)。左侧是常数列 \\(f(x)\\)，所以 \\(f(x)=A\\)。x 任意，故 f 在正半轴恒等于 A。",
  "exam": "任取 x>0，\\(f(x)=f(2^n x)\\)，而 \\(2^n x\\to+\\infty\\)。由归结原则，\\(f(x)=\\lim_n f(2^n x)=A\\)，故 \\(f\\equiv A\\)。",
  "guidance": "题设的二倍关系可以反复使用，把固定点推到无穷远而不改变函数值；极限就决定了这个固定值。",
  "type": "proof",
  "reference": "华师大《数学分析》第六版上册第三章总练习第 8 题，印刷第 67 页（PDF 第 80 页）。",
  "solutionSource": "参考《教材习题详解》上册第五版第三章总练习第 12 题，印刷第 163 页（PDF 第 56 页）；题面与条件对应但题号不同。",
  "variantDeferred": true,
  "verification": "六版题面及五版跨题号答案已首轮核对；独立数学二审与举一反三待补。"
};
window.REVIEW_SOLUTIONS['3.total:exercise:9'] = {
  "statement": "设函数 f 在 \\((0,+\\infty)\\) 上满足 \\(f(x^2)=f(x)\\)，且\n\\(\\lim_{x\\to0^+}f(x)=\\lim_{x\\to+\\infty}f(x)=f(1)\\)。证明：\\(f(x)\\equiv f(1)\\)。",
  "focus": "迭代平方后按 0<x<1 和 x>1 分类，分别趋于 0 与正无穷。",
  "solution": "任取 \\(x>0\\)。由函数方程反复迭代，\\(f(x^{2^n})=f(x)\\)。\n\n若 \\(0<x<1\\)，则 \\(x^{2^n}\\to0^+\\)，由题设及归结原则，\\(f(x)=\\lim_n f(x^{2^n})=f(1)\\)。\n\n若 \\(x>1\\)，则 \\(x^{2^n}\\to+\\infty\\)，同理 \\(f(x)=f(1)\\)。若 \\(x=1\\)，结论显然。故在整个正半轴 \\(f(x)\\equiv f(1)\\)。",
  "exam": "由函数方程 \\(f(x^{2^n})=f(x)\\)。若 0<x<1，\\(x^{2^n}\\to0^+\\)；若 x>1，\\(x^{2^n}\\to+\\infty\\)。两种情况下由题设都得 \\(f(x)=f(1)\\)，x=1 显然。",
  "guidance": "反复平方是否趋向同一个地方取决于 x 与 1 的大小，必须分类。每一类都构造趋向题设极限处、但函数值保持不变的数列。",
  "type": "proof",
  "reference": "华师大《数学分析》第六版上册第三章总练习第 9 题，印刷第 67 页（PDF 第 80 页）。",
  "solutionSource": "参考《教材习题详解》上册第五版第三章总练习第 13 题，印刷第 163—164 页（PDF 第 56—57 页）；题面与条件对应但题号不同。",
  "variantDeferred": true,
  "verification": "六版题面及五版跨题号答案已首轮核对；独立数学二审与举一反三待补。"
};
window.REVIEW_SOLUTIONS['3.total:exercise:10'] = {
  "statement": "设 f 定义在 \\((a,+\\infty)\\) 上，且在每一个有限区间 \\((a,b)\\) 上有界，并满足 \\(\\lim_{x\\to+\\infty}(f(x+1)-f(x))=A\\)。证明：\\(\\displaystyle\\lim_{x\\to+\\infty}f(x)/x=A\\)。",
  "focus": "把实数 x 的函数值写成固定有限区间的起点加整数步差分之和，并统一控制尾部。",
  "solution": "任给 \\(\\varepsilon>0\\)。由题设，存在实数 T，使所有 \\(t>T\\) 均满足\n\\[\n|f(t+1)-f(t)-A|<\\varepsilon.\n\\]\n选整数 \\(N>\\max\\{a,T\\}\\)。由题设，f 在 \\((a,N+2)\\) 上有界，故存在 C>0，使 \\(|f(t)|\\le C\\) 对所有 \\(t\\in[N,N+1)\\) 成立。\n\n对充分大的 x，令 \\(m=\\lfloor x\\rfloor-N\\)、\\(t=x-m\\)。则 m 为正整数、\\(t\\in[N,N+1)\\)、\\(x=t+m\\)。将差分望远镜求和：\n\\[\nf(x)=f(t)+\\sum_{k=0}^{m-1}[f(t+k+1)-f(t+k)].\n\\]\n每个 \\(t+k\\ge N>T\\)，因此\n\\[\n\\left|\\frac{f(x)}x-\\frac{mA}{x}\\right|\n\\le\\frac Cx+\\frac{m\\varepsilon}{x}.\n\\]\n由于 \\(m/x\\to1\\)，若要误差小于任意给定的正数 ρ，先在上述构造中取 \\(\\varepsilon=\\rho/6\\)，再取充分大的 x，使 \\(m/x<2\\)、\\(C/x<\\rho/3\\) 且 \\(|mA/x-A|<\\rho/3\\)，则总误差小于 ρ。故极限为 A。\n\n这里有界条件用于统一控制随 x 变化的起点 t；仅知道每个固定起点的数列极限并不足以直接得到实变量极限。",
  "exam": "任给 ε>0，取 N 足够大，使 t≥N 时 \\(|f(t+1)-f(t)-A|<\\varepsilon\\)，且 \\(|f|\\le C\\) 于 \\([N,N+1)\\)。写 \\(x=t+m\\)，其中 \\(t\\in[N,N+1)\\)、m 为整数。由望远镜求和，\n\\[\n\\left|\\frac{f(x)}x-A\\right|\n\\le\\frac Cx+\\frac{m\\varepsilon}{x}+|A|\\left|\\frac mx-1\\right|.\n\\]\n令 x→+∞，因 m/x→1，再令 ε→0，得结论。",
  "guidance": "差分只告诉每一步增加多少。把任意大实数 x 连续减去整数步，落入同一个有限区间，利用该区间上有界控制初始值；随后把每一步误差相加并除以 x。",
  "type": "proof",
  "reference": "华师大《数学分析》第六版上册第三章总练习第 10 题，印刷第 67 页（PDF 第 80 页）。",
  "solutionSource": "参考《教材习题详解》上册第五版第三章总练习第 14 题，印刷第 164 页（PDF 第 57 页）；题面与条件对应但题号不同。",
  "variantDeferred": true,
  "verification": "六版题面及五版跨题号答案已首轮核对；独立数学二审与举一反三待补。"
};
