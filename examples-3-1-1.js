window.REVIEW_SOLUTIONS['3.1:example:1'] = {
  "type": "proof",
  "statement": "证明：\\(\\displaystyle\\lim_{x\\to\\infty}\\frac1x=0\\)。",
  "focus": "无穷远处的定义需要同时覆盖正、负两侧；由误差直接倒推 M。",
  "reference": "华师大《数学分析》第六版上册 §3.1 定义 1、例 1，印刷第 43—44 页（PDF 第 56—57 页）。",
  "solutionSource": "依据华师大第六版 §3.1 例 1 的定义证明，补充双向无穷的范围；陈教材中的同类无穷远定义证明另列。",
  "solution": "任给 \\(\\varepsilon>0\\)，取 \\(M=1/\\varepsilon>0\\)。当 \\(|x|>M\\) 时，\\(x\\ne0\\)，并且\n\\[\n\\left|\\frac1x-0\\right|=\\frac1{|x|}<\\frac1M=\\varepsilon.\n\\]\n因此按 \\(x\\to\\infty\\) 的定义，\\(\\lim_{x\\to\\infty}1/x=0\\)。这里 \\(|x|>M\\) 包括 \\(x>M\\) 与 \\(x<-M\\)；不是只证明正无穷的一侧。",
  "exam": "任给 \\(\\varepsilon>0\\)，取 \\(M=1/\\varepsilon\\)。当 \\(|x|>M\\) 时，\\(|1/x-0|=1/|x|<1/M=\\varepsilon\\)。故由定义，\\(\\lim_{x\\to\\infty}1/x=0\\)。",
  "guidance": "定义要求误差小于 ε，而这里误差恰是 1/|x|。反过来解不等式就得到 |x|>1/ε，所以可以取 M=1/ε。之后要正向写出：任意给定 ε、取这个 M、检查所有满足条件的 x。",
  "chenSource": "陈纪修等《数学分析》第三版上册 §3.1 例 3.1.9，印刷第 69 页（PDF 第 88 页）。陈例证明 eˣ 在负无穷处趋于 0，与华师大例题不是同一函数，但同样通过误差不等式反求无穷远阈值。",
  "chenSolution": "陈例要证 \\(x\\to-\\infty\\) 时 \\(e^x\\to0\\)。当 \\(0<\\varepsilon<1\\) 时，取 \\(M=\\ln(1/\\varepsilon)>0\\)。若 \\(x<-M\\)，由指数函数单调性，\\(0<e^x<e^{-M}=\\varepsilon\\)。当 \\(\\varepsilon\\ge1\\) 时可用较小的正数代替 ε 先得到更强估计。于是由定义得证。它与本例一样，先解出误差小于 ε 的充分条件；两题自变量趋近方向与函数形式不同。",
  "variantSource": "自编。已查看陈第三版 §3.1 习题 1 和汤家凤第一章极限题型部分（印刷 13—14 页）；部分陈习题已用于站内其他练习。以下保留无穷远定义训练，但增加分式估计；未声称查遍两书。",
  "variant": "按无穷远处极限定义证明：\\(\\displaystyle\\lim_{x\\to\\infty}\\frac{x}{x^2+1}=0\\)。",
  "variantSolution": "任给 \\(\\varepsilon>0\\)，取 \\(M=1/\\varepsilon\\)。当 \\(|x|>M\\) 时，\\(x\\ne0\\)，而 \\(x^2+1>x^2\\)，所以\n\\[\n\\left|\\frac{x}{x^2+1}\\right|<\\frac{|x|}{x^2}=\\frac1{|x|}<\\varepsilon.\n\\]\n因此按定义极限为 0。正、负无穷两侧都由 \\(|x|>M\\) 同时覆盖。",
  "verification": "核对华师大原例与陈教材不同函数的同类证明；M、双侧条件及练习估计经首轮检查。独立二审和全站语义去重未完成。"
};
