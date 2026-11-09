window.REVIEW_SOLUTIONS['3.2:exercise:8'] = {
  "type": "calculation",
  "statement": "求下列极限（n 为正整数）：\n（1）\\(\\displaystyle\\lim_{x\\to0^-}\\frac{|x|}{x}\\frac1{1+x^n}\\)；\n（2）\\(\\displaystyle\\lim_{x\\to0^+}\\frac{|x|}{x}\\frac1{1+x^n}\\)；\n（3）\\(\\displaystyle\\lim_{x\\to-1}\\left(\\frac1{x+1}-\\frac3{x^3+1}\\right)\\)；\n（4）\\(\\displaystyle\\lim_{x\\to0}\\frac{\\sqrt[n]{1+x}-1}{x}\\)；\n（5）\\(\\displaystyle\\lim_{x\\to\\infty}\\frac{[x]}x\\)。",
  "focus": "分侧绝对值、通分消因子、n 次幂差和取整迫敛。",
  "solution": "（1）（2）当 x<0 时 \\(|x|/x=-1\\)，当 x>0 时为 1；又 \\(1/(1+x^n)\\to1\\)，故左右极限分别为 \\(\\boxed{-1}\\) 和 \\(\\boxed1\\)。\n\n（3）当 \\(x\\ne-1\\) 且充分靠近 −1 时，\n\\[\n\\frac1{x+1}-\\frac3{x^3+1}\n=\\frac{x^2-x-2}{(x+1)(x^2-x+1)}\n=\\frac{x-2}{x^2-x+1}\\longrightarrow\\boxed{-1}.\n\\]\n约分后的分母极限为 3。\n\n（4）令 \\(u=\\sqrt[n]{1+x}\\)。当 x 充分接近 0 时根式有意义，且由本节习题 5（n=1 时直接成立）有 \\(u\\to1\\)。因为\n\\[\nx=u^n-1=(u-1)(u^{n-1}+\\cdots+u+1),\n\\]\n所以 \\(x\\ne0\\) 时原式为 \\(1/(u^{n-1}+\\cdots+1)\\)，其极限为 \\(\\boxed{1/n}\\)。\n\n（5）由 \\(0\\le x-[x]<1\\)，\n\\[\n\\left|\\frac{[x]}x-1\\right|<\\frac1{|x|}\\longrightarrow0\n\\quad(x\\to\\infty).\n\\]\n此估计同时覆盖正、负无穷，故极限为 \\(\\boxed1\\)。\n\n补充／后续内容：第（4）问也可用第五章导数定义求出 \\(t^{1/n}\\) 在 1 处的导数 \\(1/n\\)；本节主解只用幂差和根式极限。",
  "exam": "（1）（2）按 x 正负分别得到 −1 和 1。（3）通分、约去 x+1 后得 \\((x-2)/(x^2-x+1)\\to-1\\)。（4）令 \\(u=\\sqrt[n]{1+x}\\to1\\)，则原式为 \\(1/(u^{n-1}+\\cdots+1)\\to1/n\\)。（5）\\(|[x]/x-1|<1/|x|\\to0\\)，故极限为 1。",
  "guidance": "不要在绝对值附近不分左右；差式先通分才能看见可消因子。n 次根与整数次幂互逆，可用幂差消去 x；取整则控制它与 x 的差。",
  "reference": "华师大《数学分析》第六版上册 §3.2 习题第 8 题，印刷第 52 页（PDF 第 65 页）；定理 3.8 位于印刷第 51 页（PDF 第 64 页）。",
  "solutionSource": "参考《教材习题详解》上册第五版习题 3.2 第 8 题，印刷第 150 页（PDF 第 43 页）；题面与第六版对应。",
  "variantDeferred": true,
  "verification": "教材与相关参考答案经首轮对照；独立数学二审尚未完成。举一反三暂缓补充。"
};
window.REVIEW_SOLUTIONS['3.2:exercise:9'] = {
  "type": "proof",
  "statement": "（1）证明：若 \\(\\displaystyle\\lim_{x\\to0}f(x^3)\\) 存在，则 \\(\\displaystyle\\lim_{x\\to0}f(x)=\\lim_{x\\to0}f(x^3)\\)。\n（2）若 \\(\\displaystyle\\lim_{x\\to0}f(x^2)\\) 存在，是否成立 \\(\\displaystyle\\lim_{x\\to0}f(x)=\\lim_{x\\to0}f(x^2)\\)？",
  "focus": "比较立方和平方代换对 0 附近左右两侧的覆盖；平方只覆盖非负侧。",
  "solution": "（1）设 \\(\\lim_{t\\to0}f(t^3)=A\\)。任给 \\(\\varepsilon>0\\)，存在 \\(\\delta>0\\)，当 \\(0<|t|<\\delta\\) 时 \\(|f(t^3)-A|<\\varepsilon\\)。取 \\(\\delta_1=\\delta^3\\)。若 \\(0<|x|<\\delta_1\\)，令 \\(t=\\sqrt[3]x\\)，则 \\(0<|t|<\\delta\\)、\\(t^3=x\\)，因此 \\(|f(x)-A|<\\varepsilon\\)。故 \\(\\lim_{x\\to0}f(x)=A\\)。\n\n（2）不一定。取符号函数 \\(f(x)=\\operatorname{sgn}x\\)，则当 \\(x\\ne0\\) 时 \\(f(x^2)=1\\)，故其极限为 1；但 \\(f(x)\\) 在 0 处左、右极限分别为 −1 与 1，双侧极限不存在。\n\n平方代换只能看到 f 在 0 右侧的行为；与 §3.1 习题 3 的平方代换练习相联系，它实际对应右极限，而不足以决定左侧。",
  "exam": "（1）设 \\(f(t^3)\\to A\\)。任给 ε，取 δ 使 \\(0<|t|<\\delta\\) 时误差小于 ε；若 \\(0<|x|<\\delta^3\\)，令 \\(t=\\sqrt[3]x\\)，即得 \\(|f(x)-A|<\\varepsilon\\)。（2）取 \\(f(x)=\\operatorname{sgn}x\\)，则 \\(f(x^2)\\to1\\)，而 \\(f(x)\\) 在 0 的左右极限不同，不存在双侧极限。",
  "guidance": "想从复合函数倒推出 f 的极限，关键是内层能否覆盖目标点附近的所有点。立方可取正可取负且有实立方根；平方始终非负，无法提供左侧信息。",
  "reference": "华师大《数学分析》第六版上册 §3.2 习题第 9 题，印刷第 52 页（PDF 第 65 页）；定理 3.8 位于印刷第 51 页（PDF 第 64 页）。",
  "solutionSource": "参考《教材习题详解》上册第五版习题 3.2 第 9 题，印刷第 150 页（PDF 第 43 页）；题面与第六版对应。",
  "variantDeferred": true,
  "verification": "教材与相关参考答案经首轮对照；独立数学二审尚未完成。举一反三暂缓补充。"
};
window.REVIEW_SOLUTIONS['3.2:exercise:10'] = {
  "type": "proof",
  "statement": "证明定理 3.8：设 \\(\\lim_{x\\to x_0}f(x)=u_0\\)、\\(\\lim_{u\\to u_0}g(u)=A\\)，且在 \\(x_0\\) 的某去心邻域中 \\(f(x)\\ne u_0\\)，则 \\(\\lim_{x\\to x_0}g(f(x))=A\\)。",
  "focus": "复合极限的两层邻域传递；不能遗漏内层不取外层极限点的条件。",
  "solution": "任给 \\(\\varepsilon>0\\)。由 \\(g(u)\\to A\\)，存在 \\(\\eta>0\\)，使得\n\\[\n0<|u-u_0|<\\eta\\quad\\Longrightarrow\\quad|g(u)-A|<\\varepsilon.\n\\]\n由 \\(f(x)\\to u_0\\)，存在 \\(\\delta_1>0\\)，使得 \\(0<|x-x_0|<\\delta_1\\) 时 \\(|f(x)-u_0|<\\eta\\)。由题设另有 \\(\\delta_2>0\\)，使同一去心邻域中 \\(f(x)\\ne u_0\\)。\n\n取 \\(\\delta=\\min\\{\\delta_1,\\delta_2\\}\\)。当 \\(0<|x-x_0|<\\delta\\) 时，\n\\[\n0<|f(x)-u_0|<\\eta,\n\\]\n故 \\(|g(f(x))-A|<\\varepsilon\\)。由定义得证。\n\n条件为何需要检查？令 \\(u_0=0\\)，\\(g(u)=0\\ (u\\ne0)\\)、\\(g(0)=1\\)，并令 \\(f(x)\\equiv0\\)。则 \\(g(u)\\to0\\)、\\(f(x)\\to0\\)，但 \\(g(f(x))\\equiv1\\)。如果内层允许取到 \\(u_0\\)，仅凭外层的去心极限不能推出原结论。",
  "exam": "任给 ε>0，由 \\(g(u)\\to A\\) 取 η>0，使 \\(0<|u-u_0|<\\eta\\) 时 \\(|g(u)-A|<\\varepsilon\\)。由 \\(f(x)\\to u_0\\) 取 δ₁，使 \\(|f(x)-u_0|<\\eta\\)；由题设取 δ₂，使去心邻域内 \\(f(x)\\ne u_0\\)。取两者较小值，得到 \\(0<|f(x)-u_0|<\\eta\\)，故 \\(|g(f(x))-A|<\\varepsilon\\)。",
  "guidance": "从外层的 ε 反推它需要的 η，再从内层找到保证距离小于 η 的 δ。外层定义还要求距离大于 0，这正是题目额外给出 f(x)≠u₀ 的原因。",
  "reference": "华师大《数学分析》第六版上册 §3.2 习题第 10 题，印刷第 52 页（PDF 第 65 页）；定理 3.8 位于印刷第 51 页（PDF 第 64 页）。",
  "solutionSource": "五版答案第三章总练习第 5 题讨论相应充分条件，印刷第 161 页（PDF 第 54 页），题目表述为询问条件，与第六版要求证明的定理相关而非完全同题。",
  "variantDeferred": true,
  "verification": "教材与相关参考答案经首轮对照；独立数学二审尚未完成。举一反三暂缓补充。"
};
