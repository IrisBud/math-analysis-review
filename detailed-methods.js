// Maintain the textbook answer and add detailed, separate supplementary methods.
(() => {
  const data = {
  "methods": {
    "3.1:exercise:1": "补充／后续内容 · 方法二（第四章连续性，仅用于第（2）、（4）、（5）问）：\n\n（2）\\(P(x)=x^2-6x+10\\) 是多项式，在 \\(x=2\\) 处连续。因此\n\\[\n\\lim_{x\\to2}(x^2-6x+10)\n=2^2-6\\cdot2+10=\\boxed2.\n\\]\n\n（4）当 \\(x\\in[-2,2]\\) 时，\\(f(x)=\\sqrt{4-x^2}\\) 有定义，且在定义域内连续。因为 2 是定义区间的右端点，所以从左侧趋近：\n\\[\n\\lim_{x\\to2^-}\\sqrt{4-x^2}\n=\\sqrt{4-2^2}=\\boxed0.\n\\]\n\n（5）余弦函数在任意实数 \\(x_0\\) 处连续，故\n\\[\n\\lim_{x\\to x_0}\\cos x=\\cos x_0.\n\\]\n\n以上使用第四章连续性，只覆盖所列三问；题目要求按定义证明，不能以此替代主解。",
    "3.1:exercise:6": "补充／后续内容 · 方法二（第四章连续性，仅用于第（3）问）：\n当 \\(x<0\\) 时，\\(f(x)=1+x^2\\)。由多项式在 0 处连续，\n\\[\n\\lim_{x\\to0^-}f(x)=\\lim_{x\\to0^-}(1+x^2)=1+0^2=1.\n\\]\n当 \\(x>0\\) 时，\\(f(x)=2^x\\)。由指数函数在 0 处连续，\n\\[\n\\lim_{x\\to0^+}f(x)=\\lim_{x\\to0^+}2^x=2^0=1.\n\\]\n左右极限相等，所以 \\(\\lim_{x\\to0}f(x)=1\\)。尽管 \\(f(0)=0\\)，点值不影响去心极限。这使用第四章连续性。",
    "2.total:exercise:10": "补充 · 方法二（子列法，仅用于第（1）、（2）问）：\n\n（1）对偶数下标和奇数下标分别有\n\\[\na_{2k}=2k\\longrightarrow+\\infty,\\qquad\na_{2k+1}=-(2k+1)\\longrightarrow-\\infty.\n\\]\n若原数列收敛于有限值，则每个子列都必须收敛于同一有限值；上述子列不满足，故原数列发散。\n\n（2）取两个周期子列：\n\\[\na_{4k+1}=\\sin\\left(2k\\pi+\\frac\\pi2\\right)=1,\\qquad\na_{4k+3}=\\sin\\left(2k\\pi+\\frac{3\\pi}2\\right)=-1.\n\\]\n两子列分别趋于 1 和 −1，极限不同，故原数列发散。\n\n本题指定使用柯西准则，因此该方法只作补充；第（3）问仍见主解。",
    "3.1:example:6": "补充／后续内容 · 连续性方法（华师大第四章）：\n题设 \\(|x_0|<1\\)，故 \\(1-x_0^2>0\\)。令 \\(g(x)=1-x^2\\)，多项式 g 在 \\(x_0\\) 连续；平方根函数在正数处连续，因此复合函数 \\(\\sqrt{g(x)}\\) 在 \\(x_0\\) 连续。于是\n\\[\n\\lim_{x\\to x_0}\\sqrt{1-x^2}\n=\\sqrt{\\lim_{x\\to x_0}(1-x^2)}\n=\\boxed{\\sqrt{1-x_0^2}}.\n\\]\n这使用后续连续性结论，不能替代本节要求的定义证明。",
    "3.1:example:7": "补充／后续内容 · 方法二（第四章连续性）：\n\\(f(x)=\\sqrt{1-x^2}\\) 在定义区间 \\([-1,1]\\) 上连续；两个端点只能从区间内部趋近。于是\n\\[\n\\lim_{x\\to1^-}f(x)=f(1)=\\sqrt{1-1^2}=0,\n\\qquad\n\\lim_{x\\to(-1)^+}f(x)=f(-1)=\\sqrt{1-(-1)^2}=0.\n\\]\n这里使用根式函数的连续性，主解仍按单侧极限定义证明。",
    "3.2:example:2": "补充／后续内容 · 方法二（第四章连续性）：\n\\(\\cos(\\pi/4)=\\sqrt2/2\\ne0\\)，所以 \\(\\tan x\\) 在 \\(\\pi/4\\) 的某邻域有定义并连续。由连续函数四则运算，\\(F(x)=x\\tan x-1\\) 在该点连续，故\n\\[\n\\lim_{x\\to\\pi/4}(x\\tan x-1)\n=\\frac\\pi4\\tan\\frac\\pi4-1\n=\\boxed{\\frac\\pi4-1}.\n\\]\n这使用第四章连续性，主解采用本节的极限运算法则。",
    "3.2:example:3": "补充／后续内容 · 方法二（第五章导数）：\n令 \\(F(x)=\\sum_{k=1}^{n}x^k\\)，则 \\(F(1)=n\\)。按导数定义及有限和的求导法则，\n\\[\n\\lim_{x\\to1}\\frac{x+x^2+\\cdots+x^n-n}{x-1}\n=\\lim_{x\\to1}\\frac{F(x)-F(1)}{x-1}\n=F'(1)\n=\\sum_{k=1}^{n}k\n=\\boxed{\\frac{n(n+1)}2}.\n\\]\n其中 n 是固定正整数。此法使用第五章求导知识，不替代本节的代数主解。",
    "3.2:example:4": "补充／后续内容 · 方法二（第四章连续性）：\n由于 \\(a>1\\)，指数函数 \\(F(x)=a^x\\) 在 0 处连续。因此\n\\[\n\\lim_{x\\to0}a^x=F(0)=a^0=\\boxed1.\n\\]\n此法使用第四章连续性，主证明不依赖这一后续结论。",
    "3.2:exercise:8": "补充／后续内容 · 方法二（第五章导数，仅用于第（4）问）：\n令 \\(F(t)=t^{1/n}\\)。因为 n 为正整数，F 在 \\(t=1\\) 的某个正数邻域可导，\n\\[\nF'(t)=\\frac1n t^{1/n-1},\\qquad F'(1)=\\frac1n.\n\\]\n将原式认作 \\(t=1+x\\) 的差商，得到\n\\[\n\\lim_{x\\to0}\\frac{\\sqrt[n]{1+x}-1}{x}\n=\\lim_{x\\to0}\\frac{F(1+x)-F(1)}{x}\n=F'(1)=\\boxed{\\frac1n}.\n\\]\n此法用到第五章；本节主解使用幂差和根式极限。",
    "3.4:example:1": "补充／后续内容 · 方法二（洛必达法则，华师大 §6.2）：\n当 \\(x\\to\\pi\\) 时，分子 \\(\\sin x\\to0\\)、分母 \\(\\pi-x\\to0\\)。两者在 π 附近可导，且分母导数恒为 −1、不为零。由洛必达法则，\n\\[\n\\lim_{x\\to\\pi}\\frac{\\sin x}{\\pi-x}\n=\\lim_{x\\to\\pi}\\frac{\\cos x}{-1}\n=-\\cos\\pi=\\boxed1.\n\\]\n此法使用第六章。",
    "3.4:example:2": "补充／后续内容 · 方法二（两次洛必达法则，华师大 §6.2）：\n当 \\(x\\to0\\) 时原式为 \\(0/0\\) 型；分母导数 \\(2x\\) 在去心邻域不为 0，第一次求导后仍为 \\(0/0\\) 型。再次求导时分母导数为 2，不为零，因此\n\\[\n\\lim_{x\\to0}\\frac{1-\\cos x}{x^2}\n=\\lim_{x\\to0}\\frac{\\sin x}{2x}\n=\\lim_{x\\to0}\\frac{\\cos x}{2}\n=\\boxed{\\frac12}.\n\\]\n两次均在满足可导与非零分母导数的邻域内应用；这是第六章方法。",
    "3.4:example:5": "补充／后续内容 · 方法二（对数与等价无穷小，华师大 §3.5、§4.3）：\n对 \\(n\\ge2\\) 令 \\(u_n=\\frac1n-\\frac1{n^2}>0\\)、\\(y_n=(1+u_n)^n\\)，故对数有定义。由于 \\(u_n\\to0\\) 且 \\(\\ln(1+u_n)/u_n\\to1\\)，\n\\[\n\\ln y_n=n\\ln(1+u_n)\n=nu_n\\,\\frac{\\ln(1+u_n)}{u_n}\n=\\left(1-\\frac1n\\right)\n\\frac{\\ln(1+u_n)}{u_n}\\longrightarrow1.\n\\]\n由指数函数连续性，\\(y_n=e^{\\ln y_n}\\to\\boxed e\\)。此法使用后续等价无穷小与连续性。",
    "3.4:exercise:1": "补充／后续内容 · 方法二（第五章导数，仅用于第（8）问）：\n设 \\(F(x)=\\sin^2x\\)。它在任意实数 a 处可导，且\n\\[\nF'(x)=2\\sin x\\cos x=\\sin2x.\n\\]\n因此按导数定义，\n\\[\n\\lim_{x\\to a}\\frac{\\sin^2x-\\sin^2a}{x-a}\n=F'(a)=\\boxed{\\sin2a}.\n\\]\n这是第五章方法，其余小问的计算见主解。",
    "4.1:exercise:1": "补充／后续内容 · 方法二（连续函数运算，仅用于第（1）问）：\n任取 \\(a\\ne0\\)。常数函数 1 和恒等函数 \\(x\\mapsto x\\) 均在 a 处连续，且分母在 a 的值非零。由连续函数的商的性质，\n\\[\n\\lim_{x\\to a}\\frac1x\n=\\frac{\\lim_{x\\to a}1}{\\lim_{x\\to a}x}\n=\\frac1a=f(a).\n\\]\n所以 \\(1/x\\) 在任意 \\(a\\ne0\\) 处连续。该方法使用第四章后续的连续函数运算；本题要求的定义证明见主解。"
  },
  "chenSource": "陈纪修等《数学分析》第三版上册 §3.1 定理 3.1.5 的证明，印刷第 66—67 页（PDF 第 85—86 页）。下列先写出与华师大习题对应的定义否定，再完整展示陈教材用该否定证明海涅定理充分性的推理；为符合去心邻域范围，选点半径中额外加入固定邻域半径。海涅定理属于华师大 §3.3 后续内容，不作为本题主解前提。",
  "chenSolution": "设 f 在 \\(x_0\\) 的某个去心邻域 \\(0<|x-x_0|<r\\) 内有定义。按有限点极限的定义，\n\\[\n\\lim_{x\\to x_0}f(x)=A\n\\Longleftrightarrow\n\\forall\\varepsilon>0\\;\\exists\\delta>0\\;\\forall x:\n\\quad 0<|x-x_0|<\\delta\\Longrightarrow |f(x)-A|<\\varepsilon.\n\\]\n其中可将 δ 缩小到不超过 r。逐层取反得到：\n\\[\n\\lim_{x\\to x_0}f(x)\\ne A\n\\Longleftrightarrow\n\\exists\\varepsilon_0>0\\;\\forall\\delta>0\\;\\exists x:\\quad\n0<|x-x_0|<\\delta,\\qquad |f(x)-A|\\ge\\varepsilon_0.\n\\]\n反例点取在 f 的定义域中；固定的 \\(\\varepsilon_0\\) 不随 δ 改变，而 x 可以随 δ 改变。这正是华师大本题所需的否定形式。\n\n陈教材定理 3.1.5 随后用该否定证明归结原则的充分性：假设对每个满足 \\(x_n\\ne x_0\\)、\\(x_n\\to x_0\\) 的定义域内数列，都有 \\(f(x_n)\\to A\\)。反设函数极限不等于 A，则按上式，对每个正整数 n 取\n\\[\n\\delta_n=\\min\\left\\{\\frac r2,\\frac1n\\right\\}>0,\n\\]\n可选到 \\(x_n\\) 满足\n\\[\n0<|x_n-x_0|<\\delta_n\\le\\frac1n,\n\\qquad |f(x_n)-A|\\ge\\varepsilon_0.\n\\]\n于是 \\(x_n\\ne x_0\\)、\\(x_n\\to x_0\\)，但 \\(f(x_n)\\) 始终与 A 相距至少 \\(\\varepsilon_0\\)，不可能趋于 A，与假设矛盾。因此 \\(\\lim_{x\\to x_0}f(x)=A\\)。\n\n反方向也可直接验证：若函数极限为 A，对给定 ε 取到对应 δ；因为 \\(x_n\\to x_0\\) 且 \\(x_n\\ne x_0\\)，充分大 n 时 \\(0<|x_n-x_0|<\\delta\\)，于是 \\(|f(x_n)-A|<\\varepsilon\\)，故 \\(f(x_n)\\to A\\)。这完成定理的两个方向；定理用于华师大后续 §3.3。"
};
  for (const [id, replacement] of Object.entries(data.methods)) {
    const q=window.REVIEW_SOLUTIONS[id];
    if (!q || typeof q.solution !== 'string') { console.error('缺少需细化的题解：'+id); continue; }
    const positions=['补充／后续内容','补充 · 方法二','补充／其他方法'].map(x=>q.solution.indexOf(x)).filter(x=>x>=0);
    if (!positions.length) { console.error('缺少补充方法标记：'+id); continue; }
    q.solution=q.solution.slice(0,Math.min(...positions))+replacement;
  }
  const chen=window.REVIEW_SOLUTIONS['3.1:exercise:2'];
  if (chen) {
    chen.chenSource=data.chenSource;
    chen.chenSolution=data.chenSolution.replace('设 f 在', '设 f 的定义域为 \\(D_f\\)，且 f 在')
      .replace('\\forall x:\n\\quad 0<|x-x_0|<\\delta', '\\forall x\\in D_f:\n\\quad 0<|x-x_0|<\\delta')
      .replace('\\exists x:\\quad', '\\exists x\\in D_f:\\quad');
  }
})();
