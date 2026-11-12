window.REVIEW_SOLUTIONS['3.4:exercise:3'] = {
  "type": "proof",
  "statement": "证明：\n\\[\n\\lim_{x\\to0}\\left(\\lim_{n\\to\\infty}\\cos x\\cos\\frac x2\\cos\\frac{x}{2^2}\\cdots\\cos\\frac{x}{2^n}\\right)=1.\n\\]",
  "focus": "反复使用倍角公式，先求对 n 的极限，再求 x→0；不能随意交换极限顺序。",
  "solution": "由 \\(\\sin t=2\\sin(t/2)\\cos(t/2)\\)，对 \\(n\\ge1\\) 反复使用得\n\\[\n\\sin x=2^n\\sin\\frac{x}{2^n}\n\\prod_{k=1}^n\\cos\\frac{x}{2^k}.\n\\]\n当 \\(0<|x|<\\pi\\) 时，\\(\\sin(x/2^n)\\ne0\\)，故\n\\[\n\\cos x\\prod_{k=1}^n\\cos\\frac{x}{2^k}\n=\\cos x\\frac{\\sin x}{x}\n\\frac{x/2^n}{\\sin(x/2^n)}.\n\\]\n先固定非零 x、令 \\(n\\to\\infty\\)，由基本极限，最后一个因子趋于 1，内层极限为 \\(\\cos x\\,\\sin x/x\\)。当 \\(x=0\\) 时，原乘积恒为 1。最后令 \\(x\\to0\\)，得到 \\(\\cos x\\,\\sin x/x\\to1\\)，故结论成立。",
  "exam": "由反复倍角公式，\\(\\sin x=2^n\\sin(x/2^n)\\prod_{k=1}^n\\cos(x/2^k)\\)。对固定的 \\(0<|x|<\\pi\\)，内层极限为 \\(\\cos x\\sin x/x\\)；x=0 时乘积恒为 1。再令 x→0，得 1。",
  "guidance": "连乘中的角度不断减半，倍角公式恰好能让相邻因子连锁消去。题目规定先 n→∞，应固定 x 处理，再计算外层 x→0。",
  "reference": "华师大《数学分析》第六版上册 §3.4 习题第 3 题，印刷第 58 页（PDF 第 71 页）。",
  "solutionSource": "参考文件名标注第五版的《教材习题详解》上册（扫描件封面版次未独立确认）习题 3.4 第 3 题，印刷第 154 页（PDF 第 47 页）；题面对应。",
  "variantDeferred": true,
  "verification": "原题与五版答案已首轮对照，独立数学二审及举一反三待补。"
};
window.REVIEW_SOLUTIONS['3.4:exercise:4'] = {
  "type": "calculation",
  "statement": "利用归结原则计算下列极限：\n（1）\\(\\displaystyle\\lim_{n\\to\\infty}\\sqrt n\\sin(\\pi/n)\\)；\n（2）\\(\\displaystyle\\lim_{n\\to\\infty}(1+1/n+1/n^2)^n\\)。",
  "focus": "先构造相应的正无穷处函数极限，再由归结原则取 x=n。",
  "solution": "（1）设 \\(F(x)=\\sqrt{x}\\sin(\\pi/x)\\)（x>0），则\n\\[\nF(x)=\\frac\\pi{\\sqrt{x}}\\frac{\\sin(\\pi/x)}{\\pi/x}\\longrightarrow0\n\\quad(x\\to+\\infty).\n\\]\n由归结原则取 \\(x_n=n\\)，原数列极限为 \\(\\boxed0\\)。\n\n（2）设 \\(G(x)=(1+1/x+1/x^2)^x\\)。当 x→+∞ 时底数为正，令 \\(u=1/x+1/x^2\\to0\\)，则 \\(xu=1+1/x\\to1\\)。由本节习题 2 已说明的第二基本极限推论，\\(G(x)\\to e\\)。由归结原则取 \\(x_n=n\\)，得到数列极限 \\(\\boxed e\\)。",
  "exam": "（1）\\(\\sqrt{x}\\sin(\\pi/x)=(\\pi/\\sqrt{x})[\\sin(\\pi/x)/(\\pi/x)]\\to0\\)；由归结原则得数列极限为 0。（2）对函数 \\((1+1/x+1/x^2)^x\\)，取 \\(u=1/x+1/x^2\\)，则 \\(xu\\to1\\)，故函数极限为 e，再由归结原则得数列极限 e。",
  "guidance": "归结原则的方向是：先证明一个函数在正无穷的极限，再把自然数 n 当作趋向正无穷的数列代入。第二问先把底数增量整体记为 u。",
  "reference": "华师大《数学分析》第六版上册 §3.4 习题第 4 题，印刷第 58 页（PDF 第 71 页）。",
  "solutionSource": "参考文件名标注第五版的《教材习题详解》上册（扫描件封面版次未独立确认）习题 3.4 第 4 题，印刷第 154—155 页（PDF 第 47—48 页）；题面对应。",
  "variantDeferred": true,
  "verification": "原题与五版答案已首轮对照，独立数学二审及举一反三待补。"
};
