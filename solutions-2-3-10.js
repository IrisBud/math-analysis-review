window.REVIEW_SOLUTIONS['2.3:exercise:10'] = {
  "type": "proof",
  "statement": "证明：对所有正整数 \\(n\\)，\n\\[\n\\left|e-\\left(1+\\frac1n\\right)^n\\right|<\\frac3n.\n\\]",
  "focus": "用一增一减且同极限的两列夹住 e，并把误差控制在两列间距内。",
  "reference": "华师大《数学分析》第六版上册 §2.3 例 4 与习题 9—10，印刷第 36、40 页；本题印刷第 40 页（PDF 第 53 页）。",
  "solutionSource": "参考文件名标注第五版的《教材习题详解》上册习题 2.3 第 10 题，印刷第 138 页（PDF 第 31 页）；题面一致。补充严格夹住 e 的理由与常数 3 的来源。",
  "solution": "记\n\\[\na_n=\\left(1+\\frac1n\\right)^n,\\qquad\nc_n=\\left(1+\\frac1n\\right)^{n+1}.\n\\]\n由本节例 4，\\(a_n\\) 严格递增且 \\(a_n\\to e\\)；由上一题，\\(c_n\\) 严格递减。又 \\(c_n=a_n(1+1/n)\\to e\\)。因此\n\\[\na_n<e<c_n.\n\\]\n例如，递增列的极限不小于 \\(a_{n+1}>a_n\\)，递减列的极限不大于 \\(c_{n+1}<c_n\\)，所以两侧都是严格不等式。\n\n由此比较误差与两列间距：\n\\[\n0<e-a_n<c_n-a_n\n=\\frac1n\\left(1+\\frac1n\\right)^n\n=\\frac{a_n}{n}.\n\\]\n本节例 4 的二项式估计给出 \\(a_n<3\\)；\\(n=1\\) 时也直接有 \\(a_1=2<3\\)。因此\n\\[\n\\left|e-a_n\\right|=e-a_n<\\frac{a_n}{n}<\\frac3n.\n\\]\n证毕。这里关键是先确认 \\(e-a_n>0\\)，才能去掉绝对值。",
  "exam": "令 \\(a_n=(1+1/n)^n\\)、\\(c_n=(1+1/n)^{n+1}\\)。由例 4 和上一题，\\(a_n\\) 严格递增、\\(c_n\\) 严格递减，且二者均趋于 \\(e\\)，故 \\(a_n<e<c_n\\)。由例 4 的估计 \\(a_n<3\\)，\n\\[\n|e-a_n|=e-a_n<c_n-a_n=\\frac{a_n}{n}<\\frac3n.\n\\]",
  "guidance": "直接估计 e 与 a_n 的差不容易，因为 e 是以极限定义的。上一题提供另一列 c_n：它从上方逼近同一个极限，因此 e 落在 a_n 和 c_n 之间。两列只相差一个因子 1+1/n，作差恰好等于 a_n/n；例 4 又给出 a_n<3，于是自然得到 3/n。",
  "variantSource": "改编自陈纪修等《数学分析》第三版上册第二章 §4 例 2.4.8，印刷第 50—51 页（PDF 第 69—70 页）。原例证明调和部分和减去对数所得数列收敛；这里增加对其极限的误差上界。证明所用对数不等式由本节 e 的两列夹逼及对数单调性得到，不使用导数或积分。",
  "variant": "令\n\\[\ns_n=1+\\frac12+\\cdots+\\frac1n-\\ln n.\n\\]\n证明 \\(\\{s_n\\}\\) 收敛。记极限为 \\(\\gamma\\)，进一步证明\n\\[\n0<s_n-\\gamma\\le\\frac1n.\n\\]",
  "variantSolution": "由本节两列的单调性和共同极限，对正整数 \\(k\\)，\n\\[\n\\left(1+\\frac1k\\right)^k<e<\n\\left(1+\\frac1k\\right)^{k+1}.\n\\]\n取自然对数并利用对数函数递增，得到\n\\[\n\\frac1{k+1}<\\ln\\left(1+\\frac1k\\right)<\\frac1k.\n\\]\n于是\n\\[\ns_{k+1}-s_k=\\frac1{k+1}-\\ln\\left(1+\\frac1k\\right)<0,\n\\]\n故 \\(\\{s_n\\}\\) 严格递减。又对 \\(n\\ge2\\)，将右侧不等式从 \\(k=1\\) 加到 \\(n-1\\)，可得\n\\[\n\\ln n=\\sum_{k=1}^{n-1}\\ln\\frac{k+1}{k}\n<\\sum_{k=1}^{n-1}\\frac1k,\n\\]\n所以 \\(s_n>1/n>0\\)；\\(s_1=1>0\\) 也成立。由单调有界定理，\\(s_n\\to\\gamma\\)。\n\n对 \\(m>n\\)，利用上面的对数估计及裂项公式，\n\\[\n\\begin{aligned}\n0<s_n-s_m\n&=\\sum_{k=n}^{m-1}\\left[\\ln\\left(1+\\frac1k\\right)-\\frac1{k+1}\\right]\\\\\n&<\\sum_{k=n}^{m-1}\\left(\\frac1k-\\frac1{k+1}\\right)\n=\\frac1n-\\frac1m<\\frac1n.\n\\end{aligned}\n\\]\n固定 \\(n\\)，令 \\(m\\to\\infty\\)，由保不等式性得 \\(s_n-\\gamma\\le1/n\\)。另一方面严格递减保证 \\(s_n>s_{n+1}\\ge\\gamma\\)，所以 \\(0<s_n-\\gamma\\le1/n\\)。注意取极限后直接得到的是非严格的上界。",
  "verification": "华师大原题、五版答案及陈教材例题已首轮对照；检查了两列严格夹逼、取极限后上界可取等号、n=1 及对数正数条件。独立二审与全站语义去重尚未完成。"
};
