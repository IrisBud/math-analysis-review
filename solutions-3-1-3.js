window.REVIEW_SOLUTIONS['3.1:exercise:3'] = {
  "type": "proof",
  "statement": "设 \\(\\displaystyle\\lim_{x\\to x_0}f(x)=A\\)，证明：\\(\\displaystyle\\lim_{h\\to0}f(x_0+h)=A\\)。",
  "focus": "用 \\(h=x-x_0\\) 将去心邻域精确对应，并保留所有量词。",
  "reference": "华师大《数学分析》第六版上册 §3.1 定义 2，印刷第 44 页（PDF 第 57 页）；习题 3.1 第 3 题，印刷第 48 页（PDF 第 61 页）。",
  "solutionSource": "参考《教材习题详解》上册第五版习题 3.1 第 3 题，印刷第 145 页（PDF 第 38 页）；题面对应。以下补充 δ 如何原样沿用及去心条件。",
  "solution": "任给 \\(\\varepsilon>0\\)。因为 \\(\\lim_{x\\to x_0}f(x)=A\\)，按定义存在 \\(\\delta>0\\)，只要 \\(0<|x-x_0|<\\delta\\)，便有 \\(|f(x)-A|<\\varepsilon\\)。\n\n对于同一个 \\(\\delta\\)，任取满足 \\(0<|h|<\\delta\\) 的 \\(h\\)，令 \\(x=x_0+h\\)。那么\n\\[\n0<|x-x_0|=|h|<\\delta,\n\\]\n因此 \\(|f(x_0+h)-A|<\\varepsilon\\)。由函数极限定义，\\(\\lim_{h\\to0}f(x_0+h)=A\\)。注意 \\(h\\ne0\\) 恰好保证 \\(x\\ne x_0\\)，不需要 \\(f(x_0)\\) 有定义。",
  "exam": "任给 \\(\\varepsilon>0\\)，由已知存在 \\(\\delta>0\\)，使 \\(0<|x-x_0|<\\delta\\) 时 \\(|f(x)-A|<\\varepsilon\\)。若 \\(0<|h|<\\delta\\)，则 \\(0<|(x_0+h)-x_0|<\\delta\\)，故 \\(|f(x_0+h)-A|<\\varepsilon\\)。由定义即得结论。",
  "guidance": "已知和待证控制的是同一个函数值，区别只在自变量的写法。令 \\(x=x_0+h\\) 后，两个“到极限点的距离”完全相同，因此 δ 不需要重新估计。别把 \\(h=0\\) 代入：函数极限只约束去心邻域。",
  "variantSource": "自编。已查看陈第三版 §3.1 的有限点、单侧极限定义及习题（印刷 60、68、72—73 页），以及汤家凤第一章极限题型部分（印刷 13—14 页），没有把查阅范围之外的材料视为已查遍。此练习加入平方代换与右侧方向，训练去心和单侧邻域之间的对应。",
  "variant": "设 \\(f\\) 在 \\(a\\) 的某个右去心邻域内有定义。证明：\n\\[\n\\lim_{x\\to a^+}f(x)=L\n\\quad\\Longleftrightarrow\\quad\n\\lim_{h\\to0}f(a+h^2)=L.\n\\]",
  "variantSolution": "先证必要性。任给 \\(\\varepsilon>0\\)，由右极限定义，存在 \\(\\eta>0\\)，当 \\(0<x-a<\\eta\\) 时有 \\(|f(x)-L|<\\varepsilon\\)。取 \\(\\delta=\\sqrt\\eta\\)。若 \\(0<|h|<\\delta\\)，则 \\(0<h^2<\\eta\\)，故 \\(|f(a+h^2)-L|<\\varepsilon\\)。\n\n再证充分性。任给 \\(\\varepsilon>0\\)，由右式存在 \\(\\delta>0\\)，当 \\(0<|h|<\\delta\\) 时有 \\(|f(a+h^2)-L|<\\varepsilon\\)。对任意 \\(0<x-a<\\delta^2\\)，取 \\(h=\\sqrt{x-a}>0\\)，则 \\(0<|h|<\\delta\\) 且 \\(a+h^2=x\\)，从而 \\(|f(x)-L|<\\varepsilon\\)。由右极限定义得到左式。",
  "verification": "已核对原题、五版答案与去心条件；练习为自编，核对平方代换的双向覆盖。尚未独立二审及全站语义去重。"
};
