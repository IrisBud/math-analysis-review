window.REVIEW_SOLUTIONS['3.5:example:1'] = {
  "type": "calculation",
  "statement": "求 \\(\\displaystyle\\lim_{x\\to0}\\frac{\\arctan x}{\\sin4x}\\)。",
  "focus": "乘除因子中使用已证明的等价无穷小。",
  "solution": "当 \\(x\\to0\\) 时，由 §3.4 已得 \\(\\arctan x\\sim x\\)、\\(\\sin4x\\sim4x\\)。因此按等价无穷小乘除替换定理，\n\\[\n\\frac{\\arctan x}{\\sin4x}\\sim\\frac{x}{4x}=\\frac14,\n\\qquad\\text{故极限为 }\\boxed{1/4}.\n\\]\n也可写为 \\((\\arctan x/x)/(4\\sin4x/(4x))\\)，分别由基本极限求出。",
  "exam": "由 \\(\\arctan x\\sim x\\)、\\(\\sin4x\\sim4x\\)，原极限为 \\(\\lim x/(4x)=1/4\\)。",
  "guidance": "分子分母各是单独的乘除因子，可以替换；两个等价关系都必须基于同一过程 x→0。",
  "reference": "华师大《数学分析》第六版上册 §3.5 例 1，印刷第 61 页（PDF 第 74 页）。",
  "solutionSource": "依据华师大第六版 §3.5 原例补足条件；陈教材实际相关证明另列。",
  "chenSource": "陈第三版 §3.1 例 3.1.5，印刷第 66 页（PDF 第 85 页），证明常数倍正弦的极限，与本题分母的基本替换有关。",
  "chenSolution": "陈例对非零常数 α 写 \\(\\sin(\\alpha x)/x=\\alpha\\,\\sin(\\alpha x)/(\\alpha x)\\)，由基本极限得 α。华师大本题分母对应 α=4；分子还需使用已在 §3.4 得到的 \\(\\arctan x/x\\to1\\)。",
  "variantDeferred": true,
  "verification": "华师大例题与陈教材相关证明已首轮对照；独立二审及举一反三待补。"
};
window.REVIEW_SOLUTIONS['3.5:example:2'] = {
  "type": "calculation",
  "statement": "利用等价无穷小代换求 \\(\\displaystyle\\lim_{x\\to0}\\frac{\\tan x-\\sin x}{\\sin x^3}\\)。",
  "focus": "先因式分解差式，再对乘除因子替换；不可在相减项中直接逐项替换。",
  "solution": "先写\n\\[\n\\tan x-\\sin x=\\frac{\\sin x}{\\cos x}(1-\\cos x).\n\\]\n当 x→0 时，\\(\\sin x\\sim x\\)、\\(1-\\cos x\\sim x^2/2\\)、\\(\\sin(x^3)\\sim x^3\\)，且 \\(\\cos x\\to1\\)。所以原式极限为\n\\[\n\\lim\\frac{x(x^2/2)}{x^3}=\\boxed{\\frac12}.\n\\]\n不能先将 \\(\\tan x\\) 和 \\(\\sin x\\) 各自替换成 x 后相减，因为差式的首项会相消。",
  "exam": "\\(\\tan x-\\sin x=\\sin x(1-\\cos x)/\\cos x\\)。由 \\(\\sin x\\sim x\\)、\\(1-\\cos x\\sim x^2/2\\)、\\(\\sin(x^3)\\sim x^3\\)，得极限 \\(1/2\\)。",
  "guidance": "先把差式变成乘积，才能安全地逐个替换。若先把两个相减项都换成 x，会错误丢掉决定答案的高阶差。",
  "reference": "华师大《数学分析》第六版上册 §3.5 例 2，印刷第 61—62 页（PDF 第 74—75 页）。",
  "solutionSource": "依据华师大第六版 §3.5 原例补足条件；陈教材实际相关证明另列。",
  "chenSource": "陈第三版 §3.1 例 3.1.4，印刷第 64—65 页（PDF 第 83—84 页），证明 sin t/t→1 并使用半角恒等式，与本题所需基础等价有关。",
  "chenSolution": "陈例利用夹逼得到 \\(\\sin t/t\\to1\\)，并用 \\(1-\\cos t=2\\sin^2(t/2)\\)。因此可推出 \\(1-\\cos t\\sim t^2/2\\)；本题再先将分子差式分解，才能对所得乘积使用这些关系。",
  "variantDeferred": true,
  "verification": "华师大例题与陈教材相关证明已首轮对照；独立二审及举一反三待补。"
};
window.REVIEW_SOLUTIONS['3.5:example:3'] = {
  "type": "proof",
  "statement": "证明：\\(\\displaystyle\\lim_{x\\to0}\\frac1{x^2}=+\\infty\\)。",
  "focus": "正无穷极限的 G–δ 定义，直接由目标不等式反推 δ。",
  "solution": "任给 \\(G>0\\)，取 \\(\\delta=1/\\sqrt G\\)。当 \\(0<|x|<\\delta\\) 时，\\(x^2<1/G\\)，从而 \\(1/x^2>G\\)。故按正无穷极限定义，结论成立。",
  "exam": "任给 G>0，取 \\(\\delta=1/\\sqrt G\\)。若 \\(0<|x|<\\delta\\)，则 \\(1/x^2>G\\)，由定义得证。",
  "guidance": "正无穷的定义是先给任何高度 G，再寻找足够小的去心邻域。解 1/x²>G 得到 |x|<1/√G。",
  "reference": "华师大《数学分析》第六版上册 §3.5 例 3，印刷第 62 页（PDF 第 75 页）。",
  "solutionSource": "依据华师大第六版 §3.5 原例补足条件；陈教材实际相关证明另列。",
  "chenSource": "陈第三版 §3.1 例 3.1.10，印刷第 69 页（PDF 第 88 页），实际证明一个左侧趋于负无穷的分式，与本题同用阈值及邻域估计，题面不同。",
  "chenSolution": "陈例考虑 \\(x\\to1^-\\) 时 \\(x^2/(x-1)\\to-\\infty\\)。先限制 \\(-1/2<x-1<0\\)，有 \\(x^2>1/4\\)，再按给定 G 选择 \\(\\delta=\\min\\{1/2,1/(4G)\\}\\)，便使 \\(x^2/(x-1)<-G\\)。本题不需要先控制额外分子，但同样由目标阈值倒推 δ。",
  "variantDeferred": true,
  "verification": "华师大例题与陈教材相关证明已首轮对照；独立二审及举一反三待补。"
};
window.REVIEW_SOLUTIONS['3.5:example:4'] = {
  "type": "proof",
  "statement": "证明：当 \\(a>1\\) 时，\\(\\displaystyle\\lim_{x\\to+\\infty}a^x=+\\infty\\)。",
  "focus": "利用指数单调性，根据目标阈值反求无穷远阈值。",
  "solution": "任给 \\(G>0\\)，取 \\(M=\\max\\{1,\\log_a G\\}>0\\)。由于 \\(a>1\\)，\\(a^x\\) 严格递增；当 \\(x>M\\) 时，\n\\[\na^x>a^{\\log_a G}=G.\n\\]\n由正无穷极限定义，\\(a^x\\to+\\infty\\)。若 \\(G\\le1\\)，上式的取法仍然有效，不必假设 G 一定大于 1。",
  "exam": "任给 G>0，取 \\(M=\\max\\{1,\\log_aG\\}\\)。当 \\(x>M\\) 时，\\(a^x>G\\)，故由定义得证。",
  "guidance": "a>1 保证指数函数递增，解 aˣ>G 得到 x>logₐG。再与正数 1 取最大值，可保证无穷远定义中 M 为正。",
  "reference": "华师大《数学分析》第六版上册 §3.5 例 4，印刷第 62—63 页（PDF 第 75—76 页）。",
  "solutionSource": "依据华师大第六版 §3.5 原例补足条件；陈教材实际相关证明另列。",
  "chenSource": "陈第三版 §3.1 例 3.1.9，印刷第 69 页（PDF 第 88 页），实际证明 eˣ 在负无穷趋于零；与本题通过指数单调性反求阈值有关，底数和方向不同。",
  "chenSolution": "陈例对 \\(0<\\varepsilon<1\\) 取 \\(M=\\ln(1/\\varepsilon)\\)，使 \\(x<-M\\) 时 \\(e^x<\\varepsilon\\)。本题则给定 G，要求函数值超过 G；同样利用单调性，将阈值反解为 \\(x>\\log_aG\\)。",
  "variantDeferred": true,
  "verification": "华师大例题与陈教材相关证明已首轮对照；独立二审及举一反三待补。"
};
window.REVIEW_SOLUTIONS['3.5:example:5'] = {
  "type": "proof",
  "statement": "设 \\(f(x)\\) 为 \\(x\\to x_0\\) 时的无穷大量，\\(g(x)\\) 在某去心邻域满足 \\(|g(x)|\\ge K>0\\)。证明：\\(f(x)g(x)\\) 为 \\(x\\to x_0\\) 时的无穷大量。",
  "focus": "绝对值下界保持乘积的无穷大量；阈值应除以 K。",
  "solution": "任给 \\(G>0\\)。由 \\(f\\) 为无穷大量，存在 \\(\\delta_1>0\\)，当 \\(0<|x-x_0|<\\delta_1\\) 时，\\(|f(x)|>G/K\\)。题设存在 \\(\\delta_2>0\\)，在对应去心邻域 \\(|g(x)|\\ge K\\)。令 \\(\\delta=\\min\\{\\delta_1,\\delta_2\\}\\)，则\n\\[\n|f(x)g(x)|>\\frac GK\\,K=G.\n\\]\n由定义，乘积为无穷大量。这里“无穷大量”是绝对值趋于无穷，不要求乘积固定趋于正无穷或负无穷。",
  "exam": "任给 G>0，由题设可在足够小的共同去心邻域内有 \\(|f(x)|>G/K\\)、\\(|g(x)|\\ge K\\)。因此 \\(|f(x)g(x)|>G\\)，由定义得证。",
  "guidance": "要使乘积绝对值大于 G，已知第二个因子至少为 K，就只需把第一个因子压到 G/K 以上。K 必须是与 x 无关的正数；仅有 g(x)≠0 不够。",
  "reference": "华师大《数学分析》第六版上册 §3.5 例 5，印刷第 63 页（PDF 第 76 页）。",
  "solutionSource": "依据华师大第六版 §3.5 原例补足条件；陈教材实际相关证明另列。",
  "chenSource": "陈第三版 §3.1 例 3.1.10，印刷第 69 页（PDF 第 88 页），用局部正下界和给定阈值证明无穷极限；与本题的因子下界思路相关，并非同一道乘积题。",
  "chenSolution": "陈例在 \\(x\\to1^-\\) 时先限制邻域得到 \\(x^2>1/4\\)，再根据给定 G 控制 \\(x-1\\)，使 \\(x^2/(x-1)<-G\\)。本题与其共同点是先找到不趋零的因子下界，再用 G/K 控制另一因子；陈例还有负号与单侧方向，需要额外处理。",
  "variantDeferred": true,
  "verification": "华师大例题与陈教材相关证明已首轮对照；独立二审及举一反三待补。"
};
