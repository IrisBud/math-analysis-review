window.REVIEW_SOLUTIONS['2.total:exercise:11'] = {
  "type": "proof",
  "statement": "设 \\(\\lim a_n=a\\)、\\(\\lim b_n=b\\)，记\n\\[\nS_n=\\max\\{a_n,b_n\\},\\qquad T_n=\\min\\{a_n,b_n\\}.\n\\]\n证明：（1）\\(\\lim S_n=\\max\\{a,b\\}\\)；（2）\\(\\lim T_n=\\min\\{a,b\\}\\)。",
  "focus": "把最大最小值化为四则运算和绝对值；同时处理极限相等和不相等的情况。",
  "reference": "华师大《数学分析》第六版上册第一章总练习第 1 题最大、最小值公式（印刷第 20 页），§2.2 数列极限运算（印刷第 29—32 页）；第二章总练习第 11 题印刷第 42 页（PDF 第 55 页）。",
  "solutionSource": "参考文件名标注第五版的《教材习题详解》上册第二章总练习第 10 题，印刷第 143—144 页（PDF 第 36—37 页）；与第六版第 11 题两个小问一致，题号不同。补充绝对值极限依据与 a=b 的说明。",
  "solution": "对任意实数 \\(x,y\\)，\n\\[\n\\max\\{x,y\\}=\\frac{x+y+|x-y|}{2},\\qquad\n\\min\\{x,y\\}=\\frac{x+y-|x-y|}{2}.\n\\]\n因此\n\\[\nS_n=\\frac{a_n+b_n+|a_n-b_n|}{2},\\qquad\nT_n=\\frac{a_n+b_n-|a_n-b_n|}{2}.\n\\]\n\n由极限运算，\\(a_n-b_n\\to a-b\\)。反三角不等式给出\n\\[\n\\bigl||a_n-b_n|-|a-b|\\bigr|\n\\le|(a_n-b_n)-(a-b)|\\to0,\n\\]\n故 \\(|a_n-b_n|\\to|a-b|\\)。对上面两个公式取极限，得到\n\\[\n\\begin{aligned}\n\\lim S_n&=\\frac{a+b+|a-b|}{2}=\\max\\{a,b\\},\\\\\n\\lim T_n&=\\frac{a+b-|a-b|}{2}=\\min\\{a,b\\}.\n\\end{aligned}\n\\]\n公式对 \\(a=b\\) 也成立，不需要假设两列最终能确定大小顺序。\n\n方法二（共同误差控制）：令 \\(\\delta_n=\\max\\{|a_n-a|,|b_n-b|\\}\\)。由于两个误差都趋于 0，任给 \\(\\varepsilon>0\\)，充分大时它们同时小于 \\(\\varepsilon\\)，故 \\(\\delta_n\\to0\\)。因为 \\(a_n\\le a+\\delta_n\\)、\\(b_n\\le b+\\delta_n\\)，且两式也有对应下界，\n\\[\n\\max\\{a,b\\}-\\delta_n\\le S_n\\le\\max\\{a,b\\}+\\delta_n.\n\\]\n对最小值同理，故由迫敛性得到两项结论。",
  "exam": "由最大、最小值公式，\n\\[\nS_n=\\frac{a_n+b_n+|a_n-b_n|}{2},\\qquad\nT_n=\\frac{a_n+b_n-|a_n-b_n|}{2}.\n\\]\n因 \\(a_n-b_n\\to a-b\\)，由反三角不等式得 \\(|a_n-b_n|\\to|a-b|\\)。故\n\\[\n\\lim S_n=\\frac{a+b+|a-b|}{2}=\\max\\{a,b\\},\n\\quad\n\\lim T_n=\\frac{a+b-|a-b|}{2}=\\min\\{a,b\\}.\n\\]",
  "guidance": "如果直接比较 a_n 与 b_n，a=b 时两列可能无限次交换大小，分类会变麻烦。最大、最小值公式把大小判断统一成绝对值；极限运算只剩四则运算和绝对值，而后者可用反三角不等式证明。公式不依赖两列最终哪一列更大。",
  "variantSource": "改编自陈纪修等《数学分析》第三版上册第二章 §2 习题 6，印刷第 38 页（PDF 第 57 页）。陈原题证明非负收敛数列的平方根收敛；这里增加第二列与最大值，要求处理平方根极限和最大值的组合。",
  "variant": "设 \\(x_n,y_n\\ge0\\)，\\(x_n\\to x\\ge0\\)、\\(y_n\\to y\\ge0\\)。证明\n\\[\n\\lim_{n\\to\\infty}\\max\\{\\sqrt{x_n},\\sqrt{y_n}\\}\n=\\sqrt{\\max\\{x,y\\}}.\n\\]",
  "variantSolution": "设 \\(M_n=\\max\\{x_n,y_n\\}\\)、\\(M=\\max\\{x,y\\}\\)。由原题已经证明的最大值极限，\\(M_n\\to M\\)，且 \\(M_n,M\\ge0\\)。平方根在非负数上保持大小，故\n\\[\n\\max\\{\\sqrt{x_n},\\sqrt{y_n}\\}=\\sqrt{M_n}.\n\\]\n\n为证明平方根极限，不必假设 \\(M>0\\)。对任意 \\(u,v\\ge0\\)，\n\\[\n|u-v|=|\\sqrt u-\\sqrt v|(\\sqrt u+\\sqrt v)\n\\ge|\\sqrt u-\\sqrt v|^2.\n\\]\n于是\n\\[\n|\\sqrt{M_n}-\\sqrt M|^2\\le|M_n-M|\\to0.\n\\]\n任给 \\(\\varepsilon>0\\)，充分大 \\(n\\) 时右侧小于 \\(\\varepsilon^2\\)，故平方根之差的绝对值小于 \\(\\varepsilon\\)。因此 \\(\\sqrt{M_n}\\to\\sqrt M\\)，所求结论成立。这个估计同时覆盖 \\(M=0\\)，避免在分母可能趋零时直接有理化。",
  "verification": "华师大两个小问、五版不同题号答案及陈教材练习已首轮对照；检查 a=b、零平方根和绝对值极限。独立数学二审及全站语义去重尚未完成。"
};
