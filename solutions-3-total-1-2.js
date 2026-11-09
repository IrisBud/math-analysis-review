window.REVIEW_SOLUTIONS['3.total:exercise:1'] = {
  "type": "calculation",
  "statement": "求下列极限（\\([x]\\) 为不超过 x 的最大整数，m、n 为正整数）：\n（1）\\(\\displaystyle\\lim_{x\\to3^-}(x-[x])\\)；（2）\\(\\displaystyle\\lim_{x\\to1^+}([x]+1)^{-1}\\)；\n（3）\\(\\displaystyle\\lim_{x\\to+\\infty}\\left[\\sqrt{(a+x)(b+x)}-\\sqrt{(a-x)(b-x)}\\right]\\)；\n（4）\\(\\displaystyle\\lim_{x\\to+\\infty}\\frac{x}{\\sqrt{x^2-a^2}}\\)；（5）\\(\\displaystyle\\lim_{x\\to-\\infty}\\frac{x}{\\sqrt{x^2-a^2}}\\)；\n（6）\\(\\displaystyle\\lim_{x\\to0}\\frac{\\sqrt{1+x}-\\sqrt{1-x}}{\\sqrt[3]{1+x}-\\sqrt[3]{1-x}}\\)；\n（7）\\(\\displaystyle\\lim_{x\\to1}\\left(\\frac m{1-x^m}-\\frac n{1-x^n}\\right)\\)。",
  "focus": "单侧取整、根式有理化、正负无穷的 |x| 和有限幂和消去。",
  "solution": "（1）x 在 3 左侧充分接近 3 时 \\([x]=2\\)，故 \\(x-[x]\\to\\boxed1\\)。\n\n（2）\\(1<x<2\\) 时 \\([x]=1\\)，故极限为 \\(\\boxed{1/2}\\)。\n\n（3）充分大的 x 使根式有定义。有理化并将分母除以正数 x：\n\\[\n\\frac{2(a+b)x}{\\sqrt{(a+x)(b+x)}+\\sqrt{(a-x)(b-x)}}\n=\\frac{2(a+b)}{\\sqrt{(1+a/x)(1+b/x)}+\\sqrt{(a/x-1)(b/x-1)}}\n\\longrightarrow\\boxed{a+b}.\n\\]\n\n（4）（5）\\(\\sqrt{x^2-a^2}=|x|\\sqrt{1-a^2/x^2}\\)。因此正无穷侧 \\(x/|x|=1\\)，负无穷侧 \\(x/|x|=-1\\)，极限分别为 \\(\\boxed1\\)、\\(\\boxed{-1}\\)。\n\n（6）令 \\(u=\\sqrt[3]{1+x}\\)、\\(v=\\sqrt[3]{1-x}\\)。先对分子有理化，再用立方差，得\n\\[\n\\frac{\\sqrt{1+x}-\\sqrt{1-x}}{u-v}\n=\\frac{u^2+uv+v^2}{\\sqrt{1+x}+\\sqrt{1-x}}\n\\longrightarrow\\boxed{3/2}.\n\\]\n去心邻域中 \\(u-v\\ne0\\)，故约分合法。\n\n（7）设 \\(S_k(x)=1+x+\\cdots+x^{k-1}\\)。当 x≠1 时，\n\\[\n\\frac m{1-x^m}-\\frac n{1-x^n}\n=\\frac{mS_n(x)-nS_m(x)}{(1-x)S_m(x)S_n(x)}.\n\\]\n由于 \\(S_k(1)=k\\)，且\n\\[\n\\lim_{x\\to1}\\frac{S_k(x)-k}{x-1}\n=\\sum_{j=1}^{k-1}j=\\frac{k(k-1)}2,\n\\]\n分子除以 \\(x-1\\) 的极限为 \\(mn(n-m)/2\\)，而 \\((1-x)/(x-1)=-1\\)、\\(S_mS_n\\to mn\\)。故结果为 \\(\\boxed{(m-n)/2}\\)，包含 m=1、n=1 与 m=n。\n\n补充／后续内容：第（6）问也可用根式函数在 1 的导数求差商之比；第（7）问可在满足洛必达法则条件下求解。主解只用代数与本章极限。",
  "exam": "（1）左侧 \\([x]=2\\)，得 1；（2）右侧 \\([x]=1\\)，得 1/2。（3）有理化，差的分子为 \\(2(a+b)x\\)，分母除以 x 后趋于 2，得 a+b。（4）（5）用 \\(\\sqrt{x^2-a^2}=|x|\\sqrt{1-a^2/x^2}\\)，分别得 1、−1。\n\n（6）分子平方有理化、分母立方差分解，得 \\((u^2+uv+v^2)/(\\sqrt{1+x}+\\sqrt{1-x})\\to3/2\\)。（7）令 \\(S_k=\\sum_{j=0}^{k-1}x^j\\)，通分后用 \\((S_k-k)/(x-1)\\to k(k-1)/2\\)，得 \\((m-n)/2\\)。",
  "guidance": "先确定取整的单侧值；根式差采用共轭，提取 x 时分清 |x|。第（7）问先分别分解 1−xᵐ、1−xⁿ，再利用有限幂和减去其在 1 的值，避免两个发散项直接相减。",
  "reference": "华师大《数学分析》第六版上册第三章总练习第 1 题，印刷第 66 页（PDF 第 79 页）。",
  "solutionSource": "参考《教材习题详解》上册第五版第三章总练习第 1 题，印刷第 159—160 页（PDF 第 52—53 页）；完整小问对应。",
  "variantDeferred": true,
  "verification": "题面及五版答案经首轮对照；独立数学二审与举一反三待补。"
};
window.REVIEW_SOLUTIONS['3.total:exercise:2'] = {
  "type": "calculation",
  "statement": "分别求满足下列条件的常数 a 与 b：\n（1）\\(\\displaystyle\\lim_{x\\to+\\infty}\\left(\\frac{x^2+1}{x+1}-ax-b\\right)=0\\)；\n（2）\\(\\displaystyle\\lim_{x\\to-\\infty}(\\sqrt{x^2-x+1}-ax-b)=0\\)；\n（3）\\(\\displaystyle\\lim_{x\\to+\\infty}(\\sqrt{x^2-x+1}-ax-b)=0\\)。",
  "focus": "渐近线参数：先由 f(x)/x 确定 a，再由 f(x)−ax 确定 b；根式提取 |x|。",
  "solution": "若 \\(f(x)-ax-b\\to0\\)，则除以 x 可得 \\(a=\\lim f(x)/x\\)，再由原式得 \\(b=\\lim(f(x)-ax)\\)。\n\n（1）\\((x^2+1)/(x+1)=x-1+2/(x+1)\\)，因此 \\(\\boxed{a=1,b=-1}\\)。\n\n（2）x→−∞ 时 \\(\\sqrt{x^2-x+1}/x=-\\sqrt{1-1/x+1/x^2}\\to-1\\)，故 a=−1。有理化：\n\\[\n\\sqrt{x^2-x+1}+x\n=\\frac{1-x}{\\sqrt{x^2-x+1}-x}\\longrightarrow\\frac12.\n\\]\n于是 \\(\\boxed{a=-1,b=1/2}\\)。\n\n（3）x→+∞ 时 \\(\\sqrt{x^2-x+1}/x\\to1\\)，故 a=1。又\n\\[\n\\sqrt{x^2-x+1}-x\n=\\frac{1-x}{\\sqrt{x^2-x+1}+x}\\longrightarrow-\\frac12.\n\\]\n所以 \\(\\boxed{a=1,b=-1/2}\\)。\n\n以上各组代回余项均趋于 0；两侧不同源于 \\(\\sqrt{x^2}=|x|\\)。",
  "exam": "由 \\(f-ax-b\\to0\\) 得 \\(a=\\lim f/x\\)、\\(b=\\lim(f-ax)\\)。（1）多项式除法得 \\((a,b)=(1,-1)\\)。（2）负无穷侧 \\(\\sqrt{x^2-x+1}/x\\to-1\\)，再有理化得 \\(b=1/2\\)。（3）正无穷侧商趋于 1，有理化得 \\(b=-1/2\\)。",
  "guidance": "把待求的 ax+b 看成对应方向的渐近线。先把原式除以 x 找斜率，再减去斜率项找截距；根式在负无穷提取的是 −x，不是 x。",
  "reference": "华师大《数学分析》第六版上册第三章总练习第 2 题，印刷第 66 页（PDF 第 79 页）。",
  "solutionSource": "参考《教材习题详解》上册第五版第三章总练习第 2 题，印刷第 160—161 页（PDF 第 53—54 页）；完整小问对应。",
  "variantDeferred": true,
  "verification": "题面及五版答案经首轮对照；独立数学二审与举一反三待补。"
};
