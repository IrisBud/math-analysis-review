window.REVIEW_SOLUTIONS['3.2:exercise:2'] = {
  "type": "calculation",
  "statement": "利用迫敛性求极限：\n（1）\\(\\displaystyle\\lim_{x\\to-\\infty}\\frac{x-\\cos x}{x}\\)；\n（2）\\(\\displaystyle\\lim_{x\\to+\\infty}\\frac{x\\sin x}{x^2-4}\\)。",
  "focus": "用三角函数的有界性夹逼无穷远处的误差，注意分母符号。",
  "solution": "（1）\\(x<0\\) 时，\\(|\\cos x/x|\\le1/|x|\\to0\\)。因此\n\\[\n\\frac{x-\\cos x}{x}=1-\\frac{\\cos x}{x}\\longrightarrow\\boxed1.\n\\]\n（2）当 \\(x>2\\) 时，\\(x^2-4>0\\)，所以\n\\[\n-\\frac{x}{x^2-4}\\le\\frac{x\\sin x}{x^2-4}\\le\\frac{x}{x^2-4}.\n\\]\n两侧均趋于 0，因为 \\(x/(x^2-4)=(1/x)/(1-4/x^2)\\to0\\)。由迫敛性，原极限为 \\(\\boxed0\\)。",
  "exam": "（1）\\(|\\cos x/x|\\le1/|x|\\to0\\)，故极限为 1。（2）\\(x>2\\) 时，\\(|x\\sin x/(x^2-4)|\\le x/(x^2-4)\\to0\\)，故极限为 0。",
  "guidance": "三角函数本身不必有极限，关键是它始终被 1 控制；将有界因子乘上趋于 0 的部分。第二问要先取 x>2，才能确定分母为正。",
  "reference": "华师大《数学分析》第六版上册 §3.2 习题第 2 题，印刷第 51 页（PDF 第 64 页）。",
  "solutionSource": "参考《教材习题详解》上册第五版习题 3.2 第 2 题，印刷第 147—148 页（PDF 第 40—41 页）；题面与第六版相同，解答按第六版重新整理。",
  "variantDeferred": true,
  "verification": "教材题面与五版答案已首轮对照；独立数学二审尚未完成。举一反三暂缓补充。"
};
window.REVIEW_SOLUTIONS['3.2:exercise:3'] = {
  "type": "proof",
  "statement": "设 \\(\\lim_{x\\to x_0}f(x)=A\\)、\\(\\lim_{x\\to x_0}g(x)=B\\)。证明：\n（1）\\(\\lim(f\\pm g)=A\\pm B\\)；（2）\\(\\lim fg=AB\\)；（3）当 \\(B\\ne0\\) 时，\\(\\lim f/g=A/B\\)。",
  "focus": "按定义证明四则运算法则；乘法先建立局部有界，除法先控制分母远离零。",
  "solution": "（1）任给 \\(\\varepsilon>0\\)，分别取邻域使 \\(|f-A|<\\varepsilon/2\\)、\\(|g-B|<\\varepsilon/2\\)，取两半径的较小值。由三角不等式，\\(|(f\\pm g)-(A\\pm B)|<\\varepsilon\\)。\n\n（2）由 \\(f\\to A\\)，在某个去心邻域有 \\(|f|<|A|+1\\)。将误差拆为\n\\[\nfg-AB=f(g-B)+B(f-A).\n\\]\n任给 ε，分别使 \\(|g-B|<\\varepsilon/[2(|A|+1)]\\)、\\(|f-A|<\\varepsilon/[2(|B|+1)]\\)，并同时处于上述有界邻域，便有 \\(|fg-AB|<\\varepsilon\\)。\n\n（3）设 \\(B\\ne0\\)。先取邻域使 \\(|g-B|<|B|/2\\)，于是 \\(|g|>|B|/2\\)，商有定义。又\n\\[\n\\left|\\frac fg-\\frac AB\\right|\n\\le\\frac{2}{|B|^2}\\bigl(|B||f-A|+|A||g-B|\\bigr).\n\\]\n任给 ε，可让两项误差同时小于 \\(\\eta=\\varepsilon|B|^2/[4(|A|+|B|+1)]\\)，再与分母下界的邻域取交集，右边小于 ε。故商极限为 \\(A/B\\)。",
  "exam": "（1）两误差均小于 \\(\\varepsilon/2\\)，由三角不等式得证。（2）先取邻域使 \\(|f|<|A|+1\\)，再由 \\(fg-AB=f(g-B)+B(f-A)\\) 分别控制两项。（3）由 \\(B\\ne0\\)，在充分小的去心邻域 \\(|g|>|B|/2\\)，结合\n\\[\n\\left|\\frac fg-\\frac AB\\right|\\le\\frac{2(|B||f-A|+|A||g-B|)}{|B|^2}\\to0.\n\\]\n故三个结论成立。",
  "guidance": "加减只需把误差分配给两项；乘法先把其中一个函数限制在有界范围内；除法最容易漏掉分母，必须先给 |g| 找到严格正下界，才能控制误差。",
  "reference": "华师大《数学分析》第六版上册 §3.2 习题第 3 题，印刷第 51 页（PDF 第 64 页）。",
  "solutionSource": "参考《教材习题详解》上册第五版习题 3.2 第 3 题，印刷第 148—149 页（PDF 第 41—42 页）；题面与第六版相同，解答按第六版重新整理。",
  "variantDeferred": true,
  "verification": "教材题面与五版答案已首轮对照；独立数学二审尚未完成。举一反三暂缓补充。"
};
window.REVIEW_SOLUTIONS['3.2:exercise:4'] = {
  "type": "calculation",
  "statement": "设\n\\[\nf(x)=\\frac{a_mx^m+a_{m-1}x^{m-1}+\\cdots+a_1x+a_0}\n{b_nx^n+b_{n-1}x^{n-1}+\\cdots+b_1x+b_0},\n\\quad a_m\\ne0,\\ b_n\\ne0,\\ m\\le n.\n\\]\n求 \\(\\displaystyle\\lim_{x\\to+\\infty}f(x)\\)。",
  "focus": "按分子、分母最高次数比较，先同除以分母最高次幂。",
  "solution": "将分子和分母同除以 \\(x^n\\)。分母趋于 \\(b_n\\ne0\\)，故充分大时不为零。\n\n若 \\(m<n\\)，分子中每一项都含正次幂的 \\(1/x\\)，因此分子趋于 0，极限为 0。\n\n若 \\(m=n\\)，分子趋于 \\(a_m\\)，分母趋于 \\(b_n\\)，由商法则，极限为 \\(a_m/b_n\\)。故\n\\[\n\\boxed{\\lim_{x\\to+\\infty}f(x)=\n\\begin{cases}0,&m<n,\\\\a_m/b_n,&m=n.\\end{cases}}\n\\]",
  "exam": "分子分母同除以 \\(x^n\\)，分母趋于 \\(b_n\\ne0\\)。当 \\(m<n\\) 时分子趋于 0；当 \\(m=n\\) 时分子趋于 \\(a_m\\)。所以极限分别为 0 和 \\(a_m/b_n\\)。",
  "guidance": "无穷远时最高次项决定比较尺度。题设只有 m≤n，因此只需讨论 m<n 和 m=n；先同除再使用商法则，不能漏掉分母最高次系数非零的条件。",
  "reference": "华师大《数学分析》第六版上册 §3.2 习题第 4 题，印刷第 52 页（PDF 第 65 页）。",
  "solutionSource": "参考《教材习题详解》上册第五版习题 3.2 第 4 题，印刷第 149 页（PDF 第 42 页）；五版答案同题用 a₀、b₀ 表示最高次系数，第六版改用 aₘ、bₙ；比较的是相同次数条件，记号不同。",
  "variantDeferred": true,
  "verification": "教材题面与五版答案已首轮对照；独立数学二审尚未完成。举一反三暂缓补充。"
};
