// 本文件只覆盖已经单独整理的优先范围练习。
window.REVIEW_SOLUTIONS['2.3:example:4'].solution += '\n\n教材未编号说明 · 为什么 e 是无理数（华师大印刷第 36 页，PDF 第 49 页）：\n记 \\(s_n=\\sum_{k=0}^{n}\\frac1{k!}\\)，其中 \\(0!=1\\)。这个数列递增，且由 \\(k!\\ge k(k-1)\\) 可得 \\(s_n<3\\)（\\(n\\ge2\\)），所以收敛，设极限为 S。本例的二项式展开各项不超过相应的 \\(\\frac1{k!}\\)，故 \\((1+\\frac1n)^n\\le s_n\\)，取极限得 \\(e\\le S\\)。反过来，对任意固定正整数 m，在二项式展开中只保留从 0 次到 m 次的非负项，再令 \\(n\\to\\infty\\)，得到 \\(e\\ge s_m\\)。令 \\(m\\to\\infty\\)，得 \\(e\\ge S\\)。因此 \\(e=S\\)。\n\n反设 \\(e=\\frac pq\\)，其中 p 为整数、q 为不小于 2 的正整数；任一有理数都可通过同乘分子分母写成这种形式。令 \\(I=q!s_q\\)，它是整数。因为 \\(e=S\\ge s_{q+1}>s_q\\)，有 \\(q!e-I>0\\)。另一方面，对 \\(n>q\\)，\\[q!(s_n-s_q)=\\sum_{j=1}^{n-q}\\frac1{(q+1)(q+2)\\cdots(q+j)}\\le\\sum_{j=1}^{n-q}\\frac1{(q+1)^j}<\\frac1q.\\]令 \\(n\\to\\infty\\) 得 \\(q!e-I\\le\\frac1q<1\\)。但 \\(q!e=p(q-1)!\\) 和 I 都是整数，它们的差不可能严格位于 0 与 1 之间，矛盾。因此 e 是无理数。证明只使用有限和、单调有界与极限保不等式，没有预先引用无穷级数公式。';

Object.assign(window.REVIEW_SOLUTIONS['2.1:example:1'], {
  variantDeferred: false,
  variantSource: '自编。参照华师大第六版上册 §2.1 例 1（印刷第 22 页，PDF 第 35 页），保留对半截取的情境，改为研究累计截下长度和它与极限的误差。',
  variant: '一根木棒长 1 尺，每天截下当天剩余部分的一半。设前 n 天累计截下的长度为 \\(S_n\\)。求 \\(S_n\\) 的表达式，并按数列极限定义证明 \\(S_n\\to1\\)。',
  variantSolution: '第 n 天后剩余长度为 \\(2^{-n}\\) 尺，累计截下长度与剩余长度之和为 1，故 \\(S_n=1-2^{-n}\\)。由二项式不等式 \\(2^n=(1+1)^n\\ge1+n\\)，有 \\[|S_n-1|=2^{-n}\\le\\frac1{n+1}<\\frac1n.\\]任给 \\(\\varepsilon>0\\)，取正整数 \\(N\\ge\\frac1\\varepsilon\\)。当 \\(n>N\\) 时，\\(|S_n-1|<\\frac1n<\\varepsilon\\)，因此 \\(S_n\\to1\\)。这道练习研究累计量，而教材引入例描述的是每天截下的单段长度。',
  verification: '已对照华师大第六版印刷第 22 页例 1；检查累计量与余量关系及 ε–N 阈值。原三分之二截取练习与原例仅改变截取比例，已保留在原始解答数据中并由本覆盖版本替换；全站语义去重仍未完成。'
});

Object.assign(window.REVIEW_SOLUTIONS['2.1:exercise:2'], {
  variantDeferred: false,
  variantSource: '自编。参照华师大第六版上册习题 2.1 第 2 题（印刷第 27 页，PDF 第 40 页），增加不收敛的振荡因子，仍要求用定义作统一估计。',
  variant: '按 \\(\\varepsilon\\)–\\(N\\) 定义证明 \\(\\displaystyle\\lim_{n\\to\\infty}\\frac{n\\sin n}{n^2+1}=0\\)。',
  variantSolution: '任给 \\(\\varepsilon>0\\)。因为对每个正整数 n 都有 \\(|\\sin n|\\le1\\)，所以 \\[\\left|\\frac{n\\sin n}{n^2+1}\\right|\\le\\frac{n}{n^2+1}<\\frac1n.\\]取正整数 \\(N\\ge\\frac1\\varepsilon\\)，则当 \\(n>N\\) 时，误差小于 \\(\\frac1n<\\varepsilon\\)。故原数列按定义收敛于 0。这里无需假设 \\(\\sin n\\) 收敛，只用到它有界。',
  verification: '已对照华师大第六版印刷第 27 页第 2 题五问；检查各 ε–N 放缩和新练习的振荡因子。先前陈教材有理分式练习与原题第（2）问仅系数不同，已替换，原数据保留。'
});

Object.assign(window.REVIEW_SOLUTIONS['2.1:exercise:3'], {
  variantDeferred: false,
  variantSource: '自编。参照华师大第六版上册习题 2.1 第 3 题（印刷第 27 页，PDF 第 40 页），把本节基本极限用于带参数的乘积与差，并检验参数条件。',
  variant: '设 \\(\\alpha>0\\)、\\(a>0\\)、\\(|q|\\le1\\)。利用本节结果证明 \\(u_n=n^{-\\alpha}q^n\\) 和 \\(v_n=a^{\\frac1n}-1\\) 都是无穷小数列。若去掉 \\(|q|\\le1\\)，第一个结论是否对所有 q 仍成立？',
  variantSolution: '因为 \\(|q|\\le1\\)，对每个 n 有 \\(|u_n|\\le n^{-\\alpha}\\)。由本节例 2，对任意 \\(\\varepsilon>0\\)，充分大 n 时 \\(n^{-\\alpha}<\\varepsilon\\)，于是 \\(u_n\\to0\\)。由例 5，\\(a^{\\frac1n}\\to1\\)，即对任意 \\(\\varepsilon>0\\)，充分大 n 时 \\(|v_n|=|a^{\\frac1n}-1|<\\varepsilon\\)，故 \\(v_n\\to0\\)。\n\n去掉所给条件后结论不对所有 q 成立。例如取 \\(q=2\\)、\\(\\alpha=1\\)，由二项式定理对 \\(n\\ge2\\) 有 \\(2^n\\ge\\frac{n(n-1)}2\\)，所以 \\(u_n=\\frac{2^n}{n}\\ge\\frac{n-1}{2}\\to+\\infty\\)，不是无穷小。',
  verification: '已对照华师大第六版印刷第 27 页第 3 题七问及“指出无穷小”要求。先前练习仅替换原题各项的常数，已改为参数乘积与条件反例；原数据保留。'
});

Object.assign(window.REVIEW_SOLUTIONS['2.1:exercise:7'], {
  variantDeferred: false,
  variantSource: '自编。参照华师大第六版上册习题 2.1 第 7 题（印刷第 27 页，PDF 第 40 页），用稀疏平方下标区分无界与无穷大，并比较交替符号的无穷大量。',
  variant: '判断以下数列是否有界、是否为无穷大数列：\\[u_n=\\begin{cases}n,&n\\text{ 为完全平方数},\\\\ \\frac1n,&\\text{其他 }n,\\end{cases}\\quad v_n=(-1)^n(n+1),\\quad w_n=\\frac{\\sin n}{n}.\\]',
  variantSolution: '沿 \\(n=k^2\\)，有 \\(u_n=k^2\\to+\\infty\\)，所以 \\(u_n\\) 无界。对每个正整数 k，\\(k^2<k^2+1<(k+1)^2\\)，因此 \\(k^2+1\\) 不是完全平方数；沿这些下标 \\(u_n=\\frac1{k^2+1}\\to0\\)。于是任意靠后均有绝对值不大于 1 的项，\\(u_n\\) 不是无穷大数列。\n\n对任意 \\(M>0\\)，当 \\(n>M\\) 时 \\(|v_n|=n+1>M\\)，所以 \\(v_n\\) 是无穷大数列，因而无界；它符号交替，不是正无穷或负无穷数列。最后 \\(|w_n|\\le\\frac1n\\le1\\)，故 \\(w_n\\) 有界，也不是无穷大数列。',
  verification: '已对照华师大第六版印刷第 27 页习题 7 四问，检查有界、无界、无穷大量的定义。原练习首列仅将教材奇偶例的根号 n 改为 n，现替换为平方下标构造；原数据保留。'
});

Object.assign(window.REVIEW_SOLUTIONS['2.1:exercise:9'], {
  variantDeferred: false,
  variantSource: '自编。参照华师大第六版上册习题 2.1 第 9 题（印刷第 27 页，PDF 第 40 页），在按定义证明极限时加入整数部分。',
  variant: '设 \\([t]\\) 是不超过 t 的最大整数。按 \\(\\varepsilon\\)–\\(N\\) 定义证明 \\(\\displaystyle\\lim_{n\\to\\infty}\\frac{[\\sqrt n]}n=0\\)。',
  variantSolution: '对每个正整数 n，\\(0\\le[\\sqrt n]\\le\\sqrt n\\)，故 \\[\\left|\\frac{[\\sqrt n]}n\\right|\\le\\frac1{\\sqrt n}.\\]任给 \\(\\varepsilon>0\\)，取正整数 \\(N\\ge\\frac1{\\varepsilon^2}\\)。当 \\(n>N\\) 时 \\(\\frac1{\\sqrt n}<\\varepsilon\\)，所以由定义，\\(\\frac{[\\sqrt n]}n\\to0\\)。这里只用整数部分的基本不等式，未假设它本身连续。',
  verification: '已对照华师大第六版印刷第 27 页习题 9 的三个小问；检查奇偶两支、根式有理化和统一 ε–N 阈值。新练习以整数部分估计扩展原题的定义证明，原数据保留。'
});

Object.assign(window.REVIEW_SOLUTIONS['2.2:exercise:1'], {
  variantDeferred: false,
  variantSource: '自编。参照华师大第六版上册习题 2.2 第 1 题第（5）问（印刷第 33 页，PDF 第 46 页），对比固定项数与随 n 增长的项数。',
  variant: '对 \\(1\\le k\\le n\\) 设 \\(a_{n,k}=\\frac{k}{n^2}\\)。先固定 k 求 \\(\\lim_{n\\to\\infty}a_{n,k}\\)，再求 \\(\\displaystyle\\lim_{n\\to\\infty}\\sum_{k=1}^{n}a_{n,k}\\)。这说明有限项和的极限法则能否直接用于项数随 n 增长的和？',
  variantSolution: '固定任意正整数 k，当 \\(n\\ge k\\) 时该项有定义，且 \\(a_{n,k}=\\frac{k}{n^2}\\to0\\)。但是和式的项数是 n；由等差数列求和公式，\\[\\sum_{k=1}^{n}a_{n,k}=\\frac{n(n+1)}{2n^2}=\\frac12+\\frac1{2n}\\longrightarrow\\frac12.\\]因此虽然每个固定 k 对应的项都趋于 0，整个变项数和却趋于 \\(\\frac12\\)。本节有限项和法则适用于项数固定的情况，不能不加论证地把 n 项逐个取极限后相加。',
  verification: '已对照华师大第六版印刷第 33 页习题 1 六问；检查固定 10 项和与变项数和的区别。此前陈例指数式与教材第（3）问均为同除最大指数幂，语义过近，改为变项数和的反例；原数据保留。'
});

Object.assign(window.REVIEW_SOLUTIONS['2.2:exercise:5'], {
  variantDeferred: false,
  variantSource: '自编。参照华师大第六版上册习题 2.2 第 5 题（印刷第 33 页，PDF 第 46 页），以整数部分构造不同于原题的振荡子列。',
  variant: '设 \\([t]\\) 是不超过 t 的最大整数。利用子列极限性质证明数列 \\(\\displaystyle a_n=\\frac n2-\\left[\\frac n2\\right]\\) 发散，并判断它是否有界。',
  variantSolution: '当 \\(n=2k\\) 时，\\(a_{2k}=k-[k]=0\\)。当 \\(n=2k+1\\) 时，\\(\\frac{2k+1}{2}=k+\\frac12\\)，其整数部分为 k，因此 \\(a_{2k+1}=\\frac12\\)。两个子列分别恒为 0 和 \\(\\frac12\\)，极限不同；若原数列收敛，两个子列必须收敛到同一极限，矛盾，故原数列发散。\n\n另一方面，对任意实数 t 有 \\(0\\le t-[t]<1\\)，故 \\(0\\le a_n<1\\)，数列有界。这也说明有界不保证收敛。',
  verification: '已对照华师大第六版印刷第 33 页习题 5 三问，检查子列极限与无界性两种证明。原练习的一支仅改变教材奇偶例的下标模数，已替换为整数部分构造；原数据保留。'
});

Object.assign(window.REVIEW_SOLUTIONS['2.2:exercise:7'], {
  variantDeferred: false,
  variantSource: '陈纪修等《数学分析》第三版上册第二章 §2 习题 9(8)，印刷第 38 页（PDF 第 57 页）。原题未改动；使用平方差分解与乘积相消。',
  variant: '求 \\(\\displaystyle\\lim_{n\\to\\infty}\\prod_{k=2}^{n}\\left(1-\\frac1{k^2}\\right)\\)。',
  variantSolution: '当 \\(k\\ge2\\) 时，平方差分解得 \\(1-\\frac1{k^2}=\\frac{k-1}{k}\\frac{k+1}{k}\\)。因此对 \\(n\\ge2\\)，\\[\\prod_{k=2}^{n}\\left(1-\\frac1{k^2}\\right)=\\left(\\prod_{k=2}^{n}\\frac{k-1}{k}\\right)\\left(\\prod_{k=2}^{n}\\frac{k+1}{k}\\right)=\\frac1n\\cdot\\frac{n+1}{2}=\\frac{n+1}{2n}.\\]由数列极限的四则运算法则，极限为 \\(\\frac12\\)。两组乘积分别相消，须保留首尾因子。',
  verification: '已对照华师大第六版印刷第 33 页习题 7 四问及陈第三版印刷第 38 页习题 9(8)。原调和和式 n 次根练习与 24—25 期中 T11 的奇数倒数和 n 次根实质过近，改为平方差乘积；原数据保留。'
});

Object.assign(window.REVIEW_SOLUTIONS['2.3:exercise:2'], {
  variantDeferred: false,
  variantSource: '自编。参照华师大第六版上册习题 2.3 第 2 题（印刷第 39 页，PDF 第 52 页），检验从唯一正不动点直接推出递推数列收敛的推理。',
  variant: '判断以下推理是否正确，并说明理由：设 \\(x_1=2\\)、\\(x_{n+1}=\\frac1{x_n}\\)。因为方程 \\(x=\\frac1x\\) 在正数范围内只有一个解 1，所以数列 \\(\\{x_n\\}\\) 必收敛且极限为 1。',
  variantSolution: '判断：不正确。由递推关系，\\(x_2=\\frac12\\)、\\(x_3=2\\)，依次可知 \\(x_{2n-1}=2\\)、\\(x_{2n}=\\frac12\\)。奇、偶子列分别趋于 2 和 \\(\\frac12\\)，极限不同，因此原数列不收敛。\n\n方程的唯一正解只说明：如果该正数列已经收敛到非零的有限极限，那么这个极限只能是 1；它本身不保证数列收敛。先证极限存在，再由递推式筛选极限，不能倒置这两步。',
  verification: '已对照华师大第六版印刷第 39 页习题 2；保留判断题型并检查两条子列。原陈版相邻项差判断与本节例 7 练习后半问重复，已替换，原数据保留。'
});

Object.assign(window.REVIEW_SOLUTIONS['2.3:exercise:4'], {
  variantDeferred: false,
  variantSource: '自编。参照华师大第六版上册习题 2.3 第 4 题与例 4（印刷第 36、39 页，PDF 第 49、52 页），将已知递增数列作分式变换，并证明变换后的单调性。',
  variant: '已知 \\(a_n=(1+\\frac1n)^n\\) 严格递增且 \\(a_n\\to e\\)。令 \\(u_n=\\frac{a_n}{1+a_n}\\)。证明 \\(u_n\\) 严格递增，并求其极限。',
  variantSolution: '每个 \\(a_n>0\\)，因此分母均为正。直接通分可得 \\[u_{n+1}-u_n=\\frac{a_{n+1}-a_n}{(1+a_{n+1})(1+a_n)}>0.\\]故 \\(u_n\\) 严格递增。又由 \\(a_n\\to e>0\\)，分母 \\(1+a_n\\to1+e\\ne0\\)，由商的极限法则，\\[u_n=\\frac{a_n}{1+a_n}\\longrightarrow\\frac{e}{1+e}.\\]这里分式变换保持递增通过差式和正分母证明，不能未经检查就对任意变换作同样断言。',
  verification: '已对照华师大第六版印刷第 39 页习题 4；检查本练习分式差的正分母及极限。原练习与原题均通过两个正递增因子的乘积证明，现改为分式变换，原数据保留。'
});

Object.assign(window.REVIEW_SOLUTIONS['3.1:exercise:8'], {
  variantDeferred: false,
  variantSource: '自编。已查看陈纪修第三版上册 §3.2 例 3.2.7 的黎曼函数证明（印刷第 78—79 页，PDF 第 97—98 页）与汤家凤讲义函数极限定义（印刷第 4 页，PDF 第 14 页）。陈例端点取值与华师大题目不同；本练习提炼“只需避开有限个较大函数值”的方法，未穷尽检索相关资料。',
  variant: '设互不相同的实数 \\(a_1,a_2,\\ldots\\) 和实数列 \\(b_n\\to0\\)。定义\n\\[\nh(x)=\\begin{cases}b_n,&x=a_n,\\\\0,&x\\notin\\{a_1,a_2,\\ldots\\}.\\end{cases}\n\\]\n证明：对每个 \\(x_0\\in\\mathbb R\\)，有 \\(\\lim_{x\\to x_0}h(x)=0\\)。若不要求 \\(b_n\\to0\\)，这个结论是否一定不成立？说明理由。',
  variantSolution: '任给 \\(\\varepsilon>0\\)，由 \\(b_n\\to0\\) 可取正整数 \\(N\\)，使 \\(n>N\\) 时 \\(|b_n|<\\varepsilon\\)。集合 \\(F=\\{a_1,\\ldots,a_N\\}\\setminus\\{x_0\\}\\) 有限。若 \\(F\\ne\\varnothing\\)，取 \\(\\delta=\\frac12\\min\\{|a-x_0|:a\\in F\\}>0\\)；若 \\(F\\) 为空，取 \\(\\delta=1\\)。\n\n当 \\(0<|x-x_0|<\\delta\\) 时，\\(x\\notin F\\) 且 \\(x\\ne x_0\\)，所以 \\(x\\) 不是任何 \\(a_1,\\ldots,a_N\\)。若 \\(x=a_n\\)，则 \\(n>N\\)，故 \\(|h(x)|=|b_n|<\\varepsilon\\)；若 \\(x\\) 不是任何 \\(a_n\\)，则 \\(h(x)=0\\)。因此 \\(h(x)\\to0\\)。这里不要求 \\(a_n\\) 本身收敛。\n\n去掉 \\(b_n\\to0\\) 后，结论不一定失败。例如取 \\(a_n=n\\)、\\(b_n=1\\)。对任意固定 \\(x_0\\)，可取足够小的去心邻域避开所有正整数（若 \\(x_0\\) 本身是正整数，只需避开其余正整数），故该邻域内 \\(h(x)=0\\)，仍有 \\(h(x)\\to0\\)。',
  solutionSource: '参考文件名标注第五版的《教材习题详解》上册习题 3.1 第 8 题，印刷第 146—147 页（PDF 第 39—40 页）；题面和华师大第六版对应，资料封面版次尚未独立确认。',
  verification: '已对照华师大第六版印刷第 10、48 页及参考答案；独立检查有限个小分母点、去掉 x₀、自变量在端点时的单侧条件和自编练习的有限排除。'
});

Object.assign(window.REVIEW_SOLUTIONS['3.2:exercise:2'], {
  variantDeferred: false,
  variantSource: '自编。已查看陈纪修第三版上册 §3.1 习题 3、6（印刷第 73 页，PDF 第 92 页）和汤家凤《高数辅导讲义》迫敛定理及例题（印刷第 8 页，PDF 第 18 页）；所查相关题与本题已有题目存在重复或侧重点不同，本练习自行编写，并未穷尽检索两书。',
  variant: '利用迫敛性求极限：\n\\[\n\\lim_{x\\to0}\\frac{\\sqrt{1+x^2\\sin(\\frac{1}{x})}-1}{x}.\n\\]',
  variantSolution: '当 \\(0<|x|<1\\) 时，\\(1+x^2\\sin(\\frac{1}{x})\\ge 1-x^2>0\\)，因此根式有意义。分子有理化得\n\\[\n\\frac{\\sqrt{1+x^2\\sin(\\frac{1}{x})}-1}{x}\n=\\frac{x\\sin(\\frac{1}{x})}{\\sqrt{1+x^2\\sin(\\frac{1}{x})}+1}.\n\\]\n分母至少为 1，又 \\(|\\sin(\\frac{1}{x})|\\le1\\)，于是\n\\[\n0\\le\\left|\\frac{\\sqrt{1+x^2\\sin(\\frac{1}{x})}-1}{x}\\right|\\le |x|\\longrightarrow0.\n\\]\n由迫敛性，所求极限为 \\(0\\)。',
  solutionSource: '参考文件名标注第五版的《教材习题详解》上册习题 3.2 第 2 题，印刷第 147—148 页（PDF 第 40—41 页）；两小问题面与第六版对应，资料封面版次尚未独立确认。',
  verification: '已对照华师大第六版印刷第 51 页及参考答案印刷第 147 页核对两小问题面；本轮独立检查了两问夹逼和分母符号。练习为自编，解答已检查。'
});

Object.assign(window.REVIEW_SOLUTIONS['3.2:exercise:4'], {
  variantDeferred: false,
  variantSource: '自编。已查看陈纪修第三版上册 §3.1 习题 2（印刷第 73 页，PDF 第 92 页）及汤家凤《高数辅导讲义》有理函数极限与例题（印刷第 8 页，PDF 第 18 页）。本题在同次数有理式的极限之后进一步求误差的尺度；所查范围不是两书全部相关题。',
  variant: '设 \\(f(x)=\\dfrac{3x^2+2x+4}{x^2+2x+3}\\)。先求 \\(\\displaystyle\\lim_{x\\to+\\infty}f(x)\\)，再求\n\\[\n\\lim_{x\\to+\\infty}x\\bigl(f(x)-3\\bigr).\n\\]',
  variantSolution: '将分子、分母同除以 \\(x^2\\)，分母趋于 1，分子趋于 3，因此 \\(f(x)\\to3\\)。进一步通分得\n\\[\nf(x)-3=\\frac{-4x-5}{x^2+2x+3}.\n\\]\n将第二个极限的分子、分母同除以 \\(x^2\\)，得到\n\\[\nx\\bigl(f(x)-3\\bigr)\n=\\frac{-4-\\frac{5}{x}}{1+\\frac{2}{x}+\\frac{3}{x^2}}\n\\longrightarrow\\boxed{-4}.\n\\]\n分母 \\(x^2+2x+3=(x+1)^2+2>0\\)，整个实数范围内均非零。',
  solutionSource: '参考文件名标注第五版的《教材习题详解》上册习题 3.2 第 4 题，印刷第 149 页（PDF 第 42 页）；对应的最高次系数分别记为 a₀、b₀，第六版记为 aₘ、bₙ。资料封面版次尚未独立确认。',
  verification: '已对照华师大第六版印刷第 52 页及参考答案印刷第 149 页；本轮独立检查次数分类、最高次系数非零和极限。自编练习检查了通分、分母与结果。'
});

Object.assign(window.REVIEW_SOLUTIONS['3.2:exercise:5'], {
  variantDeferred: false,
  variantSource: '自编。已查看陈纪修第三版上册 §3.1 函数极限四则运算的证明（印刷第 65—66 页，PDF 第 84—85 页）及汤家凤《高数辅导讲义》迫敛定理（印刷第 8 页，PDF 第 18 页）；本题保留根式误差估计并增加逆命题分析，未穷尽检索相关题。',
  variant: '设 \\(f,g\\) 在 0 的某去心邻域内非负，且 \\(f(x)-g(x)\\to0\\)（\\(x\\to0\\)）。证明 \\(\\sqrt{f(x)}-\\sqrt{g(x)}\\to0\\)。反过来，若两个平方根之差趋于 0，是否一定有 \\(f(x)-g(x)\\to0\\)？',
  variantSolution: '对于任意 \\(a,b\\ge0\\)，不妨设 \\(a\\ge b\\)。因为 \\(\\sqrt{ab}\\ge b\\)，所以\n\\[\n|\\sqrt a-\\sqrt b|^2=a+b-2\\sqrt{ab}\\le a-b=|a-b|.\n\\]\n交换 \\(a,b\\) 的情形同理。由题设，任给 \\(\\varepsilon>0\\)，在充分小的去心邻域内 \\(|f(x)-g(x)|<\\varepsilon^2\\)，于是平方根之差的绝对值小于 \\(\\varepsilon\\)，结论成立。这里并不要求 \\(f,g\\) 各自有有限极限。\n\n逆命题不成立。对 \\(x\\ne0\\)，取\n\\[\nf(x)=\\frac1{x^2},\\qquad g(x)=\\left(\\frac1{|x|}+|x|\\right)^2.\n\\]\n二者均为正，且 \\(\\sqrt{g(x)}-\\sqrt{f(x)}=|x|\\to0\\)，但 \\(f(x)-g(x)=-2-x^2\\to-2\\)，并不趋于 0。',
  solutionSource: '参考文件名标注第五版的《教材习题详解》上册习题 3.2 第 5 题，印刷第 149 页（PDF 第 42 页）；题面与第六版对应，资料封面版次尚未独立确认。',
  verification: '已对照华师大第六版印刷第 52 页及参考答案印刷第 149 页；独立检查正函数的极限可为 0、n 次根误差估计及自编练习的逆命题反例。'
});

Object.assign(window.REVIEW_SOLUTIONS['3.2:exercise:3'], {
  variantDeferred: false,
  variantSource: '自编。已查看陈纪修第三版上册 §3.1 定理 3.1.4 的商法则证明（印刷第 65—66 页，PDF 第 84—85 页）和汤家凤讲义的有理函数极限内容（印刷第 8 页，PDF 第 18 页）；本题考察无须两函数各自收敛时如何控制倒数差。未穷尽检索相关材料。',
  variant: '设 \\(f,g\\) 在 \\(x_0\\) 的某去心邻域内有定义，且存在 \\(c>0\\) 使该邻域内 \\(|f(x)|\\ge c\\)、\\(|g(x)|\\ge c\\)。若 \\(f(x)-g(x)\\to0\\)（\\(x\\to x_0\\)），证明 \\(\\dfrac1{f(x)}-\\dfrac1{g(x)}\\to0\\)。若去掉上述共同正下界，结论是否仍然成立？',
  variantSolution: '由正下界，两倒数在所给去心邻域内都有定义，且\n\\[\n\\left|\\frac1{f(x)}-\\frac1{g(x)}\\right|=\\frac{|g(x)-f(x)|}{|f(x)g(x)|}\\le\\frac{|f(x)-g(x)|}{c^2}.\n\\]\n任给 \\(\\varepsilon>0\\)，由题设在充分小的去心邻域内 \\(|f(x)-g(x)|<c^2\\varepsilon\\)，因此倒数之差的绝对值小于 \\(\\varepsilon\\)。证明不要求 \\(f\\)、\\(g\\) 分别具有有限极限。\n\n若去掉正下界，结论不一定成立。例如取 \\(x_0=0\\)，在 \\(x\\ne0\\) 时令 \\(f(x)=x\\)、\\(g(x)=2x\\)。虽有 \\(f(x)-g(x)=-x\\to0\\)，但\n\\[\n\\frac1{f(x)}-\\frac1{g(x)}=\\frac1{2x}\\not\\longrightarrow0.\n\\]',
  exam: '（1）任给 \\(\\varepsilon>0\\)，取共同去心邻域，使 \\(|f-A|<\\frac{\\varepsilon}{2}\\)、\\(|g-B|<\\frac{\\varepsilon}{2}\\)，由三角不等式得结论。\n\n（2）先取邻域使 \\(|f|<|A|+1\\)，再取共同邻域使 \\(|g-B|<\\frac{\\varepsilon}{2(|A|+1)}\\)、\\(|f-A|<\\frac{\\varepsilon}{2(|B|+1)}\\)。由 \\(fg-AB=f(g-B)+B(f-A)\\)，可得 \\(|fg-AB|<\\varepsilon\\)。\n\n（3）由 \\(B\\ne0\\)，在某去心邻域 \\(|g|>\\frac{|B|}{2}\\)。令 \\(\\eta=\\frac{\\varepsilon |B|^2}{4(|A|+|B|+1)}\\)，再取共同邻域使两项 \\(|f-A|\\)、\\(|g-B|\\) 均小于 \\(\\eta\\)。于是\n\\[\n\\left|\\frac fg-\\frac AB\\right|\\le\\frac{2}{|B|^2}\\bigl(|B||f-A|+|A||g-B|\\bigr)<\\varepsilon.\n\\]\n故商的极限为 \\(\\frac AB\\)。',
  solutionSource: '参考文件名标注第五版的《教材习题详解》上册习题 3.2 第 3 题，印刷第 148—149 页（PDF 第 41—42 页）；三小问题面与第六版对应，资料封面版次尚未独立确认。',
  verification: '已对照华师大第六版印刷第 51—52 页及参考答案印刷第 148—149 页；独立检查加减、乘积和商的误差分配及分母下界，并检查自编练习的正下界与反例。'
});

Object.assign(window.REVIEW_SOLUTIONS['3.2:exercise:6'], {
  variantDeferred: false,
  variantSource: '自编。已查看陈纪修第三版上册 §3.1 例 3.1.1（印刷第 61 页，PDF 第 80 页）的固定底数极限证明，以及汤家凤讲义的极限定义与迫敛定理（印刷第 4、8 页，PDF 第 14、18 页）；本题加入底数在有界正区间变化时的统一估计，未穷尽检索相关材料。',
  variant: '设常数 \\(0<m\\le M\\)。证明：任给 \\(\\varepsilon>0\\)，存在与 \\(a\\in[m,M]\\) 无关的 \\(\\delta>0\\)，使得只要 \\(|x|<\\delta\\)，对所有 \\(a\\in[m,M]\\) 都有 \\(|a^x-1|<\\varepsilon\\)。',
  variantSolution: '令 \\(b=\\max\\{2,M,\\frac1m\\}\\)，则 \\(b>1\\)，且对每个 \\(a\\in[m,M]\\) 都有 \\(\\frac1b\\le a\\le b\\)。分别考虑 \\(x\\ge0\\) 和 \\(x<0\\)，利用正底数实数幂的单调性可得\n\\[\nb^{-|x|}\\le a^x\\le b^{|x|}.\n\\]\n于是\n\\[\n|a^x-1|\\le\\max\\{b^{|x|}-1,1-b^{-|x|}\\}=b^{|x|}-1,\n\\]\n其中末个等号由 \\(b^{|x|}\\ge1\\) 得到。由本节例 4 的固定底数结论 \\(b^t\\to1\\)（\\(t\\to0\\)），对任给 \\(\\varepsilon>0\\)，可取 \\(\\delta>0\\)，使 \\(0\\le t<\\delta\\) 时 \\(b^t-1<\\varepsilon\\)（\\(t=0\\) 时显然成立）。此 \\(\\delta\\) 只依赖于 \\(m,M,\\varepsilon\\)，所以对所有 \\(a\\in[m,M]\\) 同时有效。',
  solutionSource: '参考文件名标注第五版的《教材习题详解》上册习题 3.2 第 6 题，印刷第 149 页（PDF 第 42 页）；题面对应，资料封面版次尚未独立确认。',
  verification: '已对照华师大第六版印刷第 52 页及参考答案印刷第 149 页；独立检查底数取倒数和 x 的正负方向，自编练习检查了统一上下界与参数依赖。'
});

Object.assign(window.REVIEW_SOLUTIONS['3.2:exercise:7'], {
  variantDeferred: false,
  variantSource: '自编。已查看陈纪修第三版上册 §3.1 定理 3.1.2 及推论 2（印刷第 63 页，PDF 第 82 页）和汤家凤讲义保号与保序内容（印刷第 6 页，PDF 第 16 页）。本题将比较对象改为两个函数的商，并分析分母变号；未穷尽检索相关资料。',
  variant: '设 \\(g(x)\\ne0\\) 在 \\(x_0\\) 的某去心邻域内成立，且 \\(\\displaystyle\\lim_{x\\to x_0}\\frac{f(x)}{g(x)}=L>1\\)。证明：在某个去心邻域内，\\((f(x)-g(x))g(x)>0\\)。能否由此断言在某个去心邻域内恒有 \\(f(x)>g(x)\\)？',
  variantSolution: '由 \\(L>1\\)，取 \\(\\varepsilon=\\frac{L-1}{2}>0\\)。根据极限定义，在充分小的去心邻域内\n\\[\n\\frac{f(x)}{g(x)}>L-\\varepsilon=\\frac{L+1}{2}>1.\n\\]\n于是 \\(\\frac{f(x)-g(x)}{g(x)}>0\\)。由于 \\(g(x)\\ne0\\)，乘以正数 \\(g(x)^2\\) 得 \\((f(x)-g(x))g(x)>0\\)。这说明 \\(g(x)>0\\) 的点处 \\(f(x)>g(x)\\)，而 \\(g(x)<0\\) 的点处 \\(f(x)<g(x)\\)。\n\n不能断言整个去心邻域内恒有 \\(f(x)>g(x)\\)。例如取 \\(x_0=0\\)、\\(f(x)=2x\\)、\\(g(x)=x\\)，则商恒为 2，但 \\(x<0\\) 时 \\(f(x)<g(x)\\)。',
  solutionSource: '参考文件名标注第五版的《教材习题详解》上册习题 3.2 第 7 题，印刷第 149 页（PDF 第 42 页）；两小问题面对应，资料封面版次尚未独立确认。',
  verification: '已对照华师大第六版印刷第 52 页与参考答案印刷第 149 页；独立检查严格不等式取极限可变为等号、两极限正间隔及练习中分母正负。'
});

Object.assign(window.REVIEW_SOLUTIONS['3.2:exercise:8'], {
  variantDeferred: false,
  variantSource: '自编。已查看陈纪修第三版上册 §3.1 习题 3、6（印刷第 73 页，PDF 第 92 页）中取整和小数部分的题目，以及汤家凤讲义迫敛定理（印刷第 8 页，PDF 第 18 页）；本题增加实参数分类。未穷尽检索相关资料。',
  variant: '记 \\([t]\\) 为不超过 \\(t\\) 的最大整数。对给定实数 \\(c\\)，讨论 \\(\\displaystyle\\lim_{x\\to+\\infty}([x+c]-[x])\\) 是否存在；存在时求其值。',
  variantSolution: '将 \\(c\\) 写成 \\(c=k+r\\)，其中 \\(k\\in\\mathbb Z\\)、\\(0\\le r<1\\)。若 \\(r=0\\)，由整数平移性质 \\([x+k]=[x]+k\\)，原式恒等于 \\(k\\)，极限存在且等于 \\(c\\)。\n\n若 \\(0<r<1\\)，对每个正整数 \\(n\\) 分别取 \\(x=n\\) 和 \\(y=n+1-\\frac r2\\)。二者都可任意大，且\n\\[\n[x+c]-[x]=k,\\qquad [y+c]-[y]=k+1.\n\\]\n第二式中 \\(n<y<n+1\\)，而 \\(y+c=n+k+1+\\frac r2\\)，故两个取整值相差 \\(k+1\\)。若原函数在正无穷有有限极限 \\(A\\)，取 \\(\\varepsilon=\\frac13\\)，则充分大的两类自变量都应使函数值与 \\(A\\) 相距小于 \\(\\frac13\\)，这与 \\(k\\) 和 \\(k+1\\) 相距 1 矛盾。故非整数 \\(c\\) 时极限不存在。\n\n综上，极限存在当且仅当 \\(c\\in\\mathbb Z\\)，存在时等于 \\(c\\)。',
  solutionSource: '参考文件名标注第五版的《教材习题详解》上册习题 3.2 第 8 题，印刷第 150 页（PDF 第 43 页）；五小问题面对应，资料封面版次尚未独立确认。',
  verification: '已对照华师大第六版印刷第 52 页及参考答案印刷第 150 页；独立检查五问的单侧符号、约分、n=1 和正负无穷取整估计，并检查自编练习的整数与非整数分类。'
});

Object.assign(window.REVIEW_SOLUTIONS['3.2:exercise:9'], {
  variantDeferred: false,
  variantSource: '自编。已查看陈纪修第三版上册 §3.1 单侧极限与习题（印刷第 73 页，PDF 第 92 页）及汤家凤讲义有限点、单侧极限定义（印刷第 4 页，PDF 第 14 页）；本题结合平方代换覆盖右侧和比较左右两侧，未穷尽检索相关资料。',
  variant: '设 \\(f\\) 在 0 的某去心邻域内有定义，且 \\(\\lim_{x\\to0}f(x^2)=A\\)。证明：\\(\\lim_{t\\to0}f(t)=A\\) 当且仅当 \\(\\lim_{x\\to0}\\bigl(f(x^2)-f(-x^2)\\bigr)=0\\)。如果只知道后一极限为 0，而不假定 \\(f(x^2)\\) 有极限，是否足以保证 \\(f(t)\\) 的极限存在？',
  variantSolution: '先设 \\(f(t)\\to A\\)。因为 \\(x^2\\) 和 \\(-x^2\\) 在 \\(x\\ne0\\) 时均非零且趋于 0，按定义分别得到 \\(f(x^2)\\to A\\)、\\(f(-x^2)\\to A\\)，两者之差趋于 0。\n\n反之，由题设和差的极限可得 \\(f(-x^2)=f(x^2)-[f(x^2)-f(-x^2)]\\to A\\)。任给 \\(\\varepsilon>0\\)，选共同的 \\(\\delta>0\\)，使 \\(0<|x|<\\delta\\) 时这两个函数值都与 \\(A\\) 相距小于 \\(\\varepsilon\\)。若 \\(0<|t|<\\delta^2\\)，取 \\(x=\\sqrt{|t|}\\)，则 \\(0<x<\\delta\\)。当 \\(t>0\\) 时 \\(t=x^2\\)，当 \\(t<0\\) 时 \\(t=-x^2\\)，所以两侧均有 \\(|f(t)-A|<\\varepsilon\\)。由定义 \\(f(t)\\to A\\)。\n\n只有差趋于 0 并不足够。例如 \\(f(t)=\\sin\\frac1{t^2}\\)（\\(t\\ne0\\)）为偶函数，因此两个值之差恒为 0。但令 \\(t_n=(\\frac\\pi2+2n\\pi)^{-\\frac{1}{2}}\\)、\\(s_n=(\\frac{3\\pi}2+2n\\pi)^{-\\frac{1}{2}}\\)，均趋于 0，而对应函数值分别为 1、−1。若极限存在，取 \\(\\varepsilon=\\frac12\\) 即与极限定义矛盾，所以它不存在。',
  solutionSource: '参考文件名标注第五版的《教材习题详解》上册习题 3.2 第 9 题，印刷第 150 页（PDF 第 43 页）；两小问题面对应，资料封面版次尚未独立确认。',
  verification: '已对照华师大第六版印刷第 52 页及参考答案印刷第 150 页；独立检查立方根对两侧的覆盖、平方只能覆盖右侧，以及自编练习的双侧覆盖与反例。'
});

Object.assign(window.REVIEW_SOLUTIONS['3.2:exercise:10'], {
  variantDeferred: false,
  variantSource: '自编。已查看陈纪修第三版上册 §3.1 极限运算与习题（印刷第 65—66、73 页，PDF 第 84—85、92 页），以及汤家凤讲义无穷远处的函数极限定义（印刷第 4 页，PDF 第 14 页）；本题改变内层的极限类型并检查“无界”与“趋于正无穷”的差别，未穷尽检索相关资料。',
  variant: '设 \\(\\lim_{x\\to x_0}f(x)=+\\infty\\)，\\(\\lim_{u\\to+\\infty}g(u)=A\\)，且复合式在 \\(x_0\\) 的某去心邻域内有定义。证明 \\(\\lim_{x\\to x_0}g(f(x))=A\\)。如果只要求 \\(f\\) 在 \\(x_0\\) 的每个去心邻域内无界，结论是否仍然成立？',
  variantSolution: '任给 \\(\\varepsilon>0\\)。由外层极限，存在实数 \\(M\\)，当 \\(u>M\\) 且 \\(u\\) 在定义域内时 \\(|g(u)-A|<\\varepsilon\\)。由 \\(f(x)\\to+\\infty\\)，存在 \\(\\delta>0\\)，当 \\(0<|x-x_0|<\\delta\\) 时 \\(f(x)>M\\)。缩小 \\(\\delta\\) 使复合式有定义，就得到 \\(|g(f(x))-A|<\\varepsilon\\)，故结论成立。\n\n仅有无界不够。令 \\(x_0=0\\)，\\(f(x)=\\frac1{x^2}\\)（\\(x>0\\)），\\(f(x)=0\\)（\\(x<0\\)），再令 \\(g(u)=\\frac1{1+u^2}\\)。则 \\(f\\) 在每个去心邻域内无界，且 \\(g(u)\\to0\\)（\\(u\\to+\\infty\\)）；但 \\(g(f(x))\\) 在左侧恒为 1，在右侧趋于 0，双侧极限不存在。',
  solutionSource: '华师大第六版 §3.2 习题第 10 题要求证明定理 3.8；文件名标注第五版的答案资料第三章总练习第 5 题（印刷第 161 页，PDF 第 54 页）讨论相关条件，并非完全同题。资料封面版次尚未独立确认。',
  verification: '已对照华师大第六版印刷第 51—52 页的定理 3.8 与习题；独立检查外层去心条件和两层邻域，练习检查了无穷远阈值与无界反例。'
});

Object.assign(window.REVIEW_SOLUTIONS['3.3:example:1'], {
  variantDeferred: false,
  variantSource: '改编自陈纪修第三版上册 §3.1 习题 6(3)，印刷第 73 页（PDF 第 92 页）。原题讨论正无穷处的幂与振荡因子；这里改为在 0 附近讨论，并用绝对值保证任意实参数下的定义域。',
  variant: '设 \\(\\alpha\\in\\mathbb R\\)。讨论 \\(\\displaystyle\\lim_{x\\to0}|x|^\\alpha\\sin\\frac1x\\) 是否存在；存在时求其值。',
  variantSolution: '若 \\(\\alpha>0\\)，则对 \\(x\\ne0\\) 有\n\\[\n\\left||x|^\\alpha\\sin\\frac1x\\right|\\le |x|^\\alpha\\longrightarrow0,\n\\]\n由迫敛性极限为 0。\n\n若 \\(\\alpha=0\\)，原函数为 \\(\\sin\\frac1x\\)。取\n\\[\nx_n=\\frac1{2n\\pi+\\frac\\pi2},\\qquad y_n=\\frac1{2n\\pi+\\frac{3\\pi}2},\n\\]\n则两列都趋于 0，函数值分别恒为 1、−1。由归结原则，有限极限不存在。\n\n若 \\(\\alpha<0\\)，仍取上述 \\(x_n\\)，则函数值为 \\(x_n^\\alpha\\to+\\infty\\)，因此不可能有有限极限。并且沿 \\(z_n=\\frac1{n\\pi}\\to0\\) 函数值恒为 0，所以也不趋于正无穷或负无穷。综上，有限极限存在当且仅当 \\(\\alpha>0\\)，其值为 0。',
  verification: '已对照华师大第六版印刷第 53 页与陈第三版同题例 3.1.6；独立检查两条数列的去心条件，练习分别核查正、零、负参数及绝对值定义域。'
});

Object.assign(window.REVIEW_SOLUTIONS['3.3:exercise:1'], {
  variantDeferred: false,
  variantSource: '自编。已查看陈纪修第三版上册 §3.1 例 3.1.6 和习题 6（印刷第 67、73 页，PDF 第 86、92 页），以及汤家凤讲义的无穷远极限定义（印刷第 4 页，PDF 第 14 页）；本题在周期振荡中加入趋于零的扰动，未穷尽检索相关资料。',
  variant: '利用归结原则判断 \\(\\displaystyle\\lim_{x\\to+\\infty}\\sin\\!\\left(x+\\frac1x\\right)\\) 是否存在。',
  variantSolution: '取 \\(x_n=2n\\pi\\)、\\(y_n=2n\\pi+\\frac\\pi2\\)，两列均趋于正无穷。利用正弦、余弦在 0 处的极限和周期性，\n\\[\n\\sin\\!\\left(x_n+\\frac1{x_n}\\right)=\\sin\\frac1{x_n}\\longrightarrow0,\n\\]\n\\[\n\\sin\\!\\left(y_n+\\frac1{y_n}\\right)=\\cos\\frac1{y_n}\\longrightarrow1.\n\\]\n两个合法路径给出不同极限，因此由归结原则，所求有限极限不存在。',
  solutionSource: '参考文件名标注第五版的《教材习题详解》上册习题 3.3 第 1 题，印刷第 150—151 页（PDF 第 43—44 页）；题面对应，资料封面版次尚未独立确认。',
  verification: '已对照华师大第六版印刷第 55 页及参考答案；独立检查正无穷归结原则的量词、两条原题路径及练习中的三角函数扰动。'
});

Object.assign(window.REVIEW_SOLUTIONS['3.3:exercise:2'], {
  variantDeferred: false,
  variantSource: '自编。已查看陈纪修第三版上册 §3.2 例 3.2.8 关于单调函数单侧极限的证明及 §3.1 习题（印刷第 79、73 页，PDF 第 98、92 页），以及汤家凤讲义无穷远极限定义（印刷第 4 页，PDF 第 14 页）；练习比较增量趋零与上界条件，未穷尽检索相关资料。',
  variant: '设 \\(f\\) 在 \\([0,+\\infty)\\) 上递增，且 \\(f(x+1)-f(x)\\to0\\)（\\(x\\to+\\infty\\)）。\\(f(x)\\) 是否必有有限极限？如果另外知道数列 \\(\\{f(n)\\}\\) 有上界，又能否得出有限极限存在？',
  variantSolution: '仅由增量趋零不能推出有限极限。取 \\(f(x)=\\sqrt{x}\\)，它在 \\([0,+\\infty)\\) 上递增，且\n\\[\nf(x+1)-f(x)=\\frac1{\\sqrt{x+1}+\\sqrt{x}}\\longrightarrow0,\n\\]\n但 \\(f(x)\\to+\\infty\\)。\n\n若另有 \\(f(n)\\le C\\) 对所有正整数 \\(n\\) 成立，则任取 \\(x\\ge0\\)，可选正整数 \\(n\\ge x\\)，由单调性有 \\(f(x)\\le f(n)\\le C\\)。因此 \\(f\\) 在整个区间上有上界，由本题的单调函数极限定理，\\(\\lim_{x\\to+\\infty}f(x)\\) 存在且有限。注意第二问实际上不需要增量趋零这一额外条件。',
  solutionSource: '参考文件名标注第五版的《教材习题详解》上册习题 3.3 第 2 题，印刷第 151 页（PDF 第 44 页）；题面对应，资料封面版次尚未独立确认。',
  verification: '已对照华师大第六版印刷第 55 页及参考答案；独立检查确界逼近、必要性对有限前段的控制、递减情形及练习反例。'
});

Object.assign(window.REVIEW_SOLUTIONS['3.3:exercise:3'], {
  variantDeferred: false,
  variantSource: '自编。已查看陈纪修第三版上册 §3.1 例 3.1.6 与习题 6（印刷第 67、73 页，PDF 第 86、92 页）及汤家凤讲义无穷远极限定义（印刷第 4 页，PDF 第 14 页）；本题使用柯西准则检查更快的振荡，未穷尽检索相关资料。',
  variant: '利用函数极限的柯西准则证明 \\(\\displaystyle\\lim_{x\\to-\\infty}\\sin(x^2)\\) 不存在。进一步说明，可以选择函数值相差 2 的两点，使它们之间的距离也趋于 0。',
  variantSolution: '对正整数 \\(n\\)，令\n\\[\nx_n=-\\sqrt{2n\\pi+\\frac\\pi2},\\qquad y_n=-\\sqrt{2n\\pi+\\frac{3\\pi}2}.\n\\]\n二者趋于负无穷，且 \\(\\sin(x_n^2)=1\\)、\\(\\sin(y_n^2)=-1\\)。任给 \\(M>0\\)，取足够大的 \\(n\\)，就有 \\(x_n,y_n<-M\\)，而函数值之差的绝对值为 2。因此固定 \\(\\varepsilon_0=1\\) 即违反柯西条件，有限极限不存在。\n\n此外，根式有理化给出\n\\[\n|x_n-y_n|=\\frac{\\pi}{\\sqrt{2n\\pi+\\frac{3\\pi}2}+\\sqrt{2n\\pi+\\frac\\pi2}}\\longrightarrow0.\n\\]\n故可以同时使两点任意靠左、彼此任意接近，而函数值仍相差 2。',
  solutionSource: '参考文件名标注第五版的《教材习题详解》上册习题 3.3 第 3 题，印刷第 151 页（PDF 第 44 页）；两问对应，资料封面版次尚未独立确认。',
  verification: '已对照华师大第六版印刷第 55 页及参考答案；独立检查柯西条件的否定量词、原题正弦取值、练习两点的根式差及函数值。'
});

Object.assign(window.REVIEW_SOLUTIONS['3.3:exercise:4'], {
  variantDeferred: false,
  variantSource: '自编。已查看陈纪修第三版上册 §3.1 例 3.1.6 及其后关于归结原则的说明（印刷第 67 页，PDF 第 86 页），以及汤家凤讲义单侧极限定义（印刷第 4 页，PDF 第 14 页）；本题检验把“任意数列”缩小为“单调数列”后会失去什么，未穷尽检索相关资料。',
  variant: '设 \\(f\\) 在 \\(x_0\\) 的某去心邻域内有定义。如果对于每一条趋于 \\(x_0\\) 且留在该邻域内的单调数列 \\(\\{x_n\\}\\)，数列 \\(\\{f(x_n)\\}\\) 都收敛，能否推出 \\(\\lim_{x\\to x_0}f(x)\\) 存在？说明理由。',
  variantSolution: '不能。取 \\(f(x)=\\operatorname{sgn}(x-x_0)\\)（\\(x\\ne x_0\\)）。若去心邻域中的单调递增数列趋于 \\(x_0\\)，则它的每项都小于 \\(x_0\\)；否则某一项大于 \\(x_0\\) 时，后续各项不小于该项，无法趋于 \\(x_0\\)。因此对应函数值恒为 −1。单调递减数列同理每项都大于 \\(x_0\\)，对应函数值恒为 1；允许非严格单调时结论同样成立。\n\n但取 \\(x_n=x_0-\\frac1n\\)、\\(y_n=x_0+\\frac1n\\)（去掉有限个不在指定邻域内的前项），函数值分别恒为 −1 和 1。由归结原则，\\(f(x)\\) 在 \\(x_0\\) 的双侧极限不存在。原题中的交错数列一般不是单调的，因此缩小测试范围后不能直接沿用原题结论。',
  solutionSource: '参考文件名标注第五版的《教材习题详解》上册习题 3.3 第 4 题，印刷第 151 页（PDF 第 44 页）；题面对应，资料封面版次尚未独立确认。',
  verification: '已对照华师大第六版印刷第 55 页及参考答案；独立检查交错数列留在去心邻域、两个子列极限相同和练习中单调趋近的方向。'
});

Object.assign(window.REVIEW_SOLUTIONS['3.3:exercise:5'], {
  variantDeferred: false,
  variantSource: '自编。已查看陈纪修第三版上册 §3.2 例 3.2.8 的单调函数单侧极限证明（印刷第 79 页，PDF 第 98 页）和汤家凤讲义单侧极限定义（印刷第 4 页，PDF 第 14 页）；本题讨论在缺失点补值后保持单调的条件，未穷尽检索相关资料。',
  variant: '设 \\(f\\) 在 \\(x_0\\) 的某去心邻域上递增，左、右极限分别为 \\(A\\)、\\(B\\)。在 \\(x_0\\) 补定义 \\(f(x_0)=c\\)，求使补定义后的函数在该邻域仍递增的所有 \\(c\\)。这样的补值能否保证原函数在 \\(x_0\\) 的双侧极限存在？',
  variantSolution: '由原题，\\(A\\) 是左侧函数值的上确界，\\(B\\) 是右侧函数值的下确界。任意左侧点都小于任意右侧点，故 \\(A\\le B\\)。如果补值后递增，则对每个左侧点 \\(x\\) 和右侧点 \\(y\\) 都有 \\(f(x)\\le c\\le f(y)\\)，取上、下确界得 \\(A\\le c\\le B\\)。\n\n反之，若 \\(A\\le c\\le B\\)，则每个左侧函数值不大于 \\(A\\le c\\)，每个右侧函数值不小于 \\(B\\ge c\\)，与原来两侧内部的递增性合并，补定义后的函数仍递增。故所有可取值为 \\(c\\in[A,B]\\)。\n\n这不保证双侧极限存在。例如 \\(x_0=0\\)，去心邻域内令 \\(f(x)=x\\)（\\(x<0\\)）、\\(f(x)=x+1\\)（\\(x>0\\)），则 \\(A=0\\)、\\(B=1\\)。无论选择 \\(c\\in[0,1]\\) 中哪一个，左右极限仍不同。',
  solutionSource: '参考文件名标注第五版的《教材习题详解》上册习题 3.3 第 5 题，印刷第 151—152 页（PDF 第 44—45 页）；其使用 f(x₀) 作界，而第六版只保证去心邻域有定义，故主解以另一侧固定点给界。资料封面版次尚未独立确认。',
  verification: '已对照华师大第六版印刷第 55 页及参考答案；独立检查双侧固定点给界、两个确界及练习中的补值充要条件。'
});

Object.assign(window.REVIEW_SOLUTIONS['3.3:exercise:6'], {
  variantDeferred: false,
  variantSource: '自编。已查看陈纪修第三版上册 §3.1 习题 5(3) 的狄利克雷函数（印刷第 73 页，PDF 第 92 页）及汤家凤讲义极限定义（印刷第 4 页，PDF 第 14 页）；本题加入无理平移并比较和与积，未穷尽检索相关资料。',
  variant: '设 \\(D\\) 为狄利克雷函数。分别求或讨论 \\(\\displaystyle\\lim_{x\\to x_0}D(x)D(x+\\sqrt2)\\) 和 \\(\\displaystyle\\lim_{x\\to x_0}[D(x)+D(x+\\sqrt2)]\\)，其中 \\(x_0\\in\\mathbb R\\)。',
  variantSolution: '若 \\(x\\) 与 \\(x+\\sqrt2\\) 都是有理数，则两者之差 \\(\\sqrt2\\) 是有理数，矛盾。因此至少一个因子为 0，\\(D(x)D(x+\\sqrt2)\\equiv0\\)，其极限为 0。\n\n对和式，由有理数稠密性，在 \\(x_0\\) 任意去心邻域中可取有理数 \\(q\\)，此时 \\(q+\\sqrt2\\) 无理，和式等于 1。同样可取有理数 \\(p\\)，使 \\(p-2\\sqrt2\\) 落在任意给定的去心邻域中；此时 \\(p-2\\sqrt2\\) 和 \\(p-\\sqrt2\\) 均无理，和式等于 0。两种函数值在任意小去心邻域内都出现，取固定 \\(\\varepsilon_0=\\frac12\\)，由柯西准则的否定知和式没有有限极限。',
  solutionSource: '参考文件名标注第五版的《教材习题详解》上册习题 3.3 第 6 题，印刷第 152 页（PDF 第 45 页）；题面对应，资料封面版次尚未独立确认。',
  verification: '已对照华师大第六版印刷第 55 页及参考答案；独立检查有理和无理数在去心邻域的稠密性，以及练习的平移、积与和。'
});

Object.assign(window.REVIEW_SOLUTIONS['3.3:exercise:7'], {
  variantDeferred: false,
  variantSource: '自编。已查看陈纪修第三版上册 §3.1 习题 15（印刷第 74 页，PDF 第 93 页）的尺度不变函数和无穷远极限；它与本站第三章总练习第 8 题同题，故不作为练习重复采用。另查汤家凤讲义无穷远极限定义（印刷第 4 页，PDF 第 14 页）。本题改为周期函数的周期分段差。',
  variant: '设 \\(f\\) 在 \\(\\mathbb R\\) 上以 \\(T>0\\) 为周期，\\(k\\ge2\\) 是整数。如果 \\(\\displaystyle\\lim_{x\\to+\\infty}[f(x+\\frac{T}{k})-f(x)]\\) 存在且有限，证明这个极限为 0，并证明 \\(\\frac{T}{k}\\) 也是 \\(f\\) 的周期。',
  variantSolution: '记 \\(h(x)=f(x+\\frac{T}{k})-f(x)\\)，设其无穷远极限为 \\(L\\)。由 \\(f\\) 的周期性，\\(h(x+T)=h(x)\\)。任取 \\(x\\in\\mathbb R\\)，令 \\(n\\to\\infty\\)，则 \\(x+nT\\to+\\infty\\)，所以\n\\[\nh(x)=h(x+nT)\\longrightarrow L,\\qquad\\text{从而 }h(x)=L.\n\\]\n对 \\(j=0,1,\\ldots,k-1\\) 求和，得到望远镜式\n\\[\nkL=\\sum_{j=0}^{k-1}\\left[f\\!\\left(x+\\frac{(j+1)T}{k}\\right)-f\\!\\left(x+\\frac{jT}{k}\\right)\\right]=f(x+T)-f(x)=0.\n\\]\n因此 \\(L=0\\)，且对所有 \\(x\\)，\\(f(x+\\frac{T}{k})-f(x)=h(x)=0\\)。由于 \\(\\frac{T}{k}>0\\)，它也是一个周期。',
  solutionSource: '参考文件名标注第五版的《教材习题详解》上册习题 3.3 第 7 题，印刷第 152 页（PDF 第 45 页）；题面对应，资料封面版次尚未独立确认。',
  verification: '已对照华师大第六版印刷第 55 页及参考答案；独立检查固定点周期平移与练习中周期差的有限求和。'
});

Object.assign(window.REVIEW_SOLUTIONS['3.3:exercise:8'], {
  variantDeferred: false,
  variantSource: '自编。已查看陈纪修第三版上册 §3.1 定理 3.1.5 及后面的归结原则说明（印刷第 66—67 页，PDF 第 85—86 页）与汤家凤讲义单侧极限定义（印刷第 4 页，PDF 第 14 页）；本题检验能否将任意递减测试数列进一步限制为固定公比的等比数列，未穷尽检索相关资料。',
  variant: '是否可以在右侧递减数列归结原则中，仅检查所有形如 \\(x_n=x_0+\\dfrac{a}{2^n}\\)（\\(a>0\\)）的数列？也就是说，若这些数列均满足 \\(f(x_n)\\to0\\)，能否推出 \\(f(x)\\to0\\)（\\(x\\to x_0^+\\)）？',
  variantSolution: '不能。令 \\(s_m=\\dfrac1{m+\\sqrt2}\\)（\\(m=1,2,\\ldots\\)），在 \\(x>x_0\\) 定义\n\\[\nf(x)=\\begin{cases}1,&x-x_0=s_m\\text{ 对某个 }m\\text{ 成立},\\\\0,&\\text{其他情况}.\\end{cases}\n\\]\n数列 \\(s_m\\) 严格递减且趋于 0，因此沿 \\(x_0+s_m\\) 函数值恒为 1，右极限不可能是 0。\n\n另一方面，对不同正整数 \\(m,\\ell\\)，两个数 \\(s_m,s_\\ell\\) 的比值不可能是 2 的整数次幂。否则 \\(\\dfrac{\\ell+\\sqrt2}{m+\\sqrt2}=2^j\\)（\\(j\\in\\mathbb Z\\)），即\n\\[\n\\ell-2^jm=(2^j-1)\\sqrt2.\n\\]\n左边为有理数；由 \\(\\sqrt2\\) 无理，必有 \\(2^j-1=0\\)，于是 \\(j=0\\)、\\(\\ell=m\\)，矛盾。\n\n因此对任意固定 \\(a>0\\)，等比数列 \\(\\frac{a}{2^n}\\) 至多命中一个 \\(s_m\\)，从而 \\(f(x_0+\\frac{a}{2^n})\\) 从某项起恒为 0。所有指定的等比测试都通过，却不能推出右极限为 0。',
  solutionSource: '参考文件名标注第五版的《教材习题详解》上册习题 3.3 第 8 题，印刷第 152 页（PDF 第 45 页）；资料将同类定理记为 3.9，华师大第六版为 3.10。资料封面版次尚未独立确认。',
  verification: '已对照华师大第六版印刷第 54—55 页与参考答案；独立检查反例点递归构造的严格递减、去心条件及练习中等比数列至多命中一次。'
});

Object.assign(window.REVIEW_SOLUTIONS['3.4:example:1'], {
  variantDeferred: false,
  variantSource: '陈纪修等《数学分析》第三版上册 §3.1 习题 2(7)，印刷第 73 页（PDF 第 92 页）；原题未改动。它与华师大例 1 都需把接近非零点的三角函数化为接近 0 的增量，但这里的极限点为任意给定的实数。',
  variant: '设 \\(a\\in\\mathbb R\\)，求 \\(\\displaystyle\\lim_{x\\to a}\\frac{\\sin x-\\sin a}{x-a}\\)。',
  variantSolution: '当 \\(x\\ne a\\) 时，由和差化积公式，\n\\[\n\\frac{\\sin x-\\sin a}{x-a}\n=\\cos\\frac{x+a}{2}\\cdot\\frac{\\sin\\frac{x-a}{2}}{\\frac{x-a}{2}}.\n\\]\n当 \\(x\\to a\\) 时，第一因子趋于 \\(\\cos a\\)，第二因子由 \\(\\frac{\\sin t}{t}\\to1\\) 趋于 1。故极限为 \\(\\cos a\\)。证明只使用本节及此前的三角极限，不需要导数。',
  verification: '已对照华师大第六版印刷第 56 页例 1 与陈第三版习题题面；独立检查代换的去心条件、负号及练习中任意 a 的和差化积。'
});

Object.assign(window.REVIEW_SOLUTIONS['3.4:example:2'], {
  variantDeferred: false,
  variantSource: '陈纪修等《数学分析》第三版上册 §3.1 习题 2(9)，印刷第 73 页（PDF 第 92 页）；原题未改动。它与华师大例 2 均需把余弦差化成两个趋零正弦因子的乘积。',
  variant: '求 \\(\\displaystyle\\lim_{x\\to0}\\frac{\\cos x-\\cos3x}{x^2}\\)。',
  variantSolution: '由和差化积公式，\\(\\cos x-\\cos3x=2\\sin2x\\sin x\\)。当 \\(x\\ne0\\) 时，\n\\[\n\\frac{\\cos x-\\cos3x}{x^2}\n=4\\,\\frac{\\sin2x}{2x}\\frac{\\sin x}{x}\\longrightarrow4.\n\\]\n两个因子分别由基本极限趋于 1；故所求极限为 \\(4\\)。',
  verification: '已对照华师大第六版印刷第 56 页例 2 与陈第三版习题题面；独立检查半角公式、洛必达补充法的条件及练习中余弦差的符号和系数。'
});

Object.assign(window.REVIEW_SOLUTIONS['3.4:example:3'], {
  variantDeferred: false,
  variantSource: '陈纪修等《数学分析》第三版上册 §3.1 习题 6(4)，印刷第 73 页（PDF 第 92 页）；原题未改动。它仍使用第二个重要极限，但指数增长使正、负无穷两个方向出现不同结果。',
  variant: '讨论 \\(\\displaystyle\\lim_{x\\to\\infty}\\left(1+\\frac1x\\right)^{x^2}\\) 的情况。',
  variantSolution: '当 \\(|x|\\) 充分大时 \\(1+\\frac1x>0\\)。记 \\(v(x)=(1+\\frac1x)^x\\)，则由本节第二个重要极限，\\(v(x)\\to e>2\\)，且原式可写为 \\(v(x)^x\\)。\n\n当 \\(x\\to+\\infty\\) 时，充分大处 \\(v(x)>2\\)，故 \\(v(x)^x>2^x\\to+\\infty\\)。当 \\(x\\to-\\infty\\) 时，仍有 \\(v(x)>2\\)，但由于指数 \\(x<0\\)，不等式方向反转：\\(0<v(x)^x<2^x\\to0\\)。这两个指数极限可用整数部分和第二章的几何数列极限得到。\n\n因此正无穷方向趋于 \\(+\\infty\\)，负无穷方向趋于 0；两方向不相同，所以 \\(x\\to\\infty\\) 的双侧无穷远极限不存在。',
  verification: '已对照华师大第六版印刷第 57 页例 3 和陈第三版习题 6(4)；独立检查底数正性、实数幂拆分以及负指数时不等号方向。'
});

Object.assign(window.REVIEW_SOLUTIONS['3.4:example:4'], {
  variantDeferred: false,
  variantSource: '改编自汤家凤《高数辅导讲义》第一章两个重要极限例 1，印刷第 10 页（PDF 第 20 页）：原题指数为正的 \\(\\frac1{1-\\cos x}\\)，本练习将其改为负数，考察负指数及底数条件。已查看陈第三版 §3.1 习题 6(4)、6(5)（印刷第 73 页，PDF 第 92 页）；未穷尽检索其他资料。',
  variant: '求 \\(\\displaystyle\\lim_{x\\to0}(1+\\sin x^2)^{-\\frac1{1-\\cos x}}\\)。',
  variantSolution: '当 \\(x\\) 在充分小的去心邻域内时，\\(1+\\sin x^2>0\\)，且 \\(1-\\cos x\\ne0\\)。令 \\(u=\\sin x^2\\)、\\(v=-\\frac1{1-\\cos x}\\)，则 \\(u\\to0\\)。由两个基本三角极限，\n\\[\nuv=-\\frac{\\sin x^2}{1-\\cos x}\n=-\\frac{\\sin x^2}{x^2}\\frac{x^2}{1-\\cos x}\\longrightarrow-2.\n\\]\n由本节基本极限得到的 \\(1^\\infty\\) 型形式 \\((1+u)^v\\to e^{\\lim uv}\\)（其推导见 §3.4 习题 2），故所求极限为 \\(e^{-2}\\)。这里在去心邻域 \\(u\\ne0\\)，并且已经确认底数为正。',
  verification: '已对照华师大第六版印刷第 57 页例 4、汤讲义原题和改动；独立检查指数负号、底数正性及 uv 的极限。'
});

Object.assign(window.REVIEW_SOLUTIONS['3.4:example:5'], {
  variantDeferred: false,
  variantSource: '自编。已查看陈纪修第三版上册 §3.1 例 3.1.13 和习题 6(4)、6(5)（印刷第 71—73 页，PDF 第 90—92 页），以及汤家凤讲义两个重要极限（印刷第 10 页，PDF 第 20 页）；本题在华师大例 5 的增量中加入交替扰动，未穷尽检索其他资料。',
  variant: '利用夹逼法求 \\(\\displaystyle\\lim_{n\\to\\infty}\\left(1+\\frac1n+\\frac{(-1)^n}{n^2}\\right)^n\\)。',
  variantSolution: '当 \\(n\\ge2\\) 时各底数均为正，且\n\\[\n\\left(1+\\frac1n-\\frac1{n^2}\\right)^n\n\\le\\left(1+\\frac1n+\\frac{(-1)^n}{n^2}\\right)^n\n\\le\\left(1+\\frac1n+\\frac1{n^2}\\right)^n.\n\\]\n左端由本例趋于 \\(e\\)。对右端，利用\n\\[\n1+\\frac1n+\\frac1{n^2}\\le\\left(1+\\frac1n\\right)\\left(1+\\frac1{n^2}\\right),\n\\]\n得到右端不超过 \\(\\left(1+\\frac1n\\right)^n\\left(1+\\frac1{n^2}\\right)^n\\to e\\)。它又不小于 \\(\\left(1+\\frac1n\\right)^n\\to e\\)，故右端也趋于 \\(e\\)。这里 \\(\\left(1+\\frac1{n^2}\\right)^n\\to1\\) 是第二章 §2.3 习题 1(5) 的结果。再夹逼即得原极限为 \\(e\\)。交替项虽改变正负，却被两道同极限的界统一控制。',
  verification: '已对照华师大第六版印刷第 57—58 页例 5；独立检查交替项两侧界、底数正性和上界分解，且未调用后续对数方法。'
});

Object.assign(window.REVIEW_SOLUTIONS['3.4:exercise:2'], {
  variantDeferred: false,
  variantSource: '汤家凤《高数辅导讲义》第一章两个重要极限例 2，印刷第 10 页（PDF 第 20 页）；原题未改动。陈纪修第三版 §3.1 习题 6(4)、6(5)（印刷第 73 页，PDF 第 92 页）也已查看。该题先处理底数中的三角差，再配出 \\(1^\\infty\\) 型。',
  variant: '求 \\(\\displaystyle\\lim_{x\\to0}\\left(\\frac{1+\\tan x}{1+\\sin x}\\right)^{\\frac1{x^3}}\\)。',
  variantSolution: '当 \\(x\\) 充分接近 0 时分子、分母均为正。将底数写成 \\(1+u\\)，其中\n\\[\nu=\\frac{\\tan x-\\sin x}{1+\\sin x}.\n\\]\n利用 \\(\\tan x-\\sin x=\\frac{\\sin x(1-\\cos x)}{\\cos x}\\)，可得\n\\[\n\\frac{u}{x^3}\n=\\frac{\\sin x}{x}\\frac{1-\\cos x}{x^2}\\frac1{\\cos x(1+\\sin x)}\\longrightarrow\\frac12.\n\\]\n在充分小的去心邻域 \\(u\\ne0\\)。令 \\(v=\\frac1{x^3}\\)，则 \\(uv\\to\\frac12\\)。由本题主解开头证明的 \\(1^\\infty\\) 型基本形式，原极限为 \\(e^{\\frac12}\\)。',
  verification: '已对照华师大第六版本节习题及汤讲义题面；独立检查正底数、三角差的因式分解和 uv 的极限。全站语义去重仍未完成。'
});

Object.assign(window.REVIEW_SOLUTIONS['3.4:exercise:1'], {
  variantDeferred: false,
  variantSource: '改编自陈纪修等《数学分析》第三版上册 §3.1 例 3.1.5（印刷第 66 页，PDF 第 85 页）。陈例假设两个参数均非零；这里允许分子参数为零，并追问分母参数为零时的定义域。',
  variant: '设 \\(a,b\\in\\mathbb R\\) 且 \\(b\\ne0\\)，求 \\(\\displaystyle\\lim_{x\\to0}\\frac{\\sin(ax)}{\\sin(bx)}\\)。如果去掉 \\(b\\ne0\\) 的条件，原式是否仍可在 0 的去心邻域内定义？',
  variantSolution: '因 \\(b\\ne0\\)，在充分小的去心邻域内 \\(\\sin(bx)\\ne0\\)。当 \\(a\\ne0\\) 时，\\[\\frac{\\sin(ax)}{\\sin(bx)}=\\frac ab\\,\\frac{\\sin(ax)}{ax}\\,\\frac{bx}{\\sin(bx)}\\longrightarrow\\frac ab.\\]当 \\(a=0\\) 时，分子恒为 0，极限仍为 \\(0=\\frac ab\\)。若 \\(b=0\\)，分母恒为 0，商在任何点都没有定义，因此不能讨论所给函数的去心极限。',
  verification: '已对照华师大第六版印刷第 58 页题面；检查原题十小问的代换、根式绝对值和符号，并单独检查本练习参数为零的情形。'
});

Object.assign(window.REVIEW_SOLUTIONS['3.4:exercise:3'], {
  variantDeferred: false,
  variantSource: '自编。参照华师大第六版上册习题 3.4 第 3 题（印刷第 58 页，PDF 第 71 页）中将有限乘积化为商的思路，改用正弦三倍角公式。',
  variant: String.raw`设 \(|x|<\pi\)，求 \(\displaystyle\lim_{n\to\infty}\prod_{k=1}^{n}\frac{1+2\cos(\frac{2x}{3^k})}3\)。`,
  variantSolution: String.raw`由三倍角公式 \(\sin3t=\sin t\,(1+2\cos2t)\)，依次取 \(t=\frac{x}{3^k}\) 并相乘，得
\[
\sin x=3^n\sin\frac{x}{3^n}\prod_{k=1}^n\frac{1+2\cos(\frac{2x}{3^k})}{3}.
\]
若 \(0<|x|<\pi\)，对每个 \(n\ge1\) 均有 \(0<|\frac{x}{3^n}|<\pi\)，所以分母中的正弦不为零。由正弦基本极限，
\[
3^n\sin\frac{x}{3^n}=x\,\frac{\sin(\frac{x}{3^n})}{\frac{x}{3^n}}\longrightarrow x,
\qquad
\prod_{k=1}^{n}\frac{1+2\cos(\frac{2x}{3^k})}{3}
\longrightarrow\frac{\sin x}{x}.
\]
当 \(x=0\) 时，每个因子都等于 1，因此极限为 1。这也等于 \(\frac{\sin x}{x}\) 在 0 处的连续延拓值。`,
  verification: '已对照华师大第六版印刷第 58 页；检查原题乘积包含 cos x、内外极限次序。练习使用三倍角有限乘积，分开核对非零 x 的分母与 x=0 的值。'
});

Object.assign(window.REVIEW_SOLUTIONS['3.4:exercise:4'], {
  variantDeferred: false,
  variantSource: '自编。参照华师大第六版上册习题 3.4 第 4 题第（1）问（印刷第 58 页，PDF 第 71 页），改变数列中的尺度并仍用函数极限的归结原则。',
  variant: '利用归结原则求 \\(\\displaystyle\\lim_{n\\to\\infty}n\\sin\\left(\\frac1n+\\frac1{n^2}\\right)\\)。',
  variantSolution: '先在实变量 \\(x>0\\) 上令 \\(t=\\frac1x+\\frac1{x^2}\\)。当 \\(x\\to+\\infty\\) 时，\\(t\\to0^+\\)，并且 \\(xt=1+\\frac1x\\to1\\)。因此 \\[x\\sin\\left(\\frac1x+\\frac1{x^2}\\right)=xt\\,\\frac{\\sin t}{t}\\longrightarrow1.\\]由归结原则取 \\(x_n=n\\to+\\infty\\)，原数列极限为 1。先计算实变量极限，再代入整数序列，才能说明所用归结原则。',
  verification: '已对照华师大第六版印刷第 58 页题面；检查原题两问的函数延拓、正底数和归结原则，以及练习中的尺度因子。'
});

Object.assign(window.REVIEW_SOLUTIONS['3.5:example:1'], {
  variantDeferred: false,
  variantSource: '自编。参照华师大第六版上册 §3.5 例 1（印刷第 61 页，PDF 第 74 页），将正弦函数嵌入反正切，并检查复合后的去心条件。',
  variant: String.raw`求 \(\displaystyle\lim_{x\to0}\frac{\arctan(\sin x)}{\sin(2x)}\)。`,
  variantSolution: String.raw`当 \(x\) 在充分小的去心邻域内时，\(\sin x\ne0\)、\(\sin(2x)\ne0\)。令 \(u=\sin x\)，则 \(u\to0\) 且 \(u\ne0\)。由基本极限，
\[
\frac{\arctan(\sin x)}{\sin(2x)}
=\frac{\arctan u}{u}\,\frac{\sin x}{x}\,\frac{x}{\sin(2x)}
\longrightarrow1\cdot1\cdot\frac12=\frac12.
\]
这里分别处理复合函数的内层以及每个乘除因子。`,
  verification: '已对照华师大第六版印刷第 61 页例 1；旧练习仅改变系数，现检查复合内层、去心条件和极限。'
});

Object.assign(window.REVIEW_SOLUTIONS['3.5:example:2'], {
  variantDeferred: false,
  variantSource: '自编。参照华师大第六版上册 §3.5 例 2（印刷第 61—62 页，PDF 第 74—75 页），将三角差改为根式与线性项的抵消，先有理化再判断二次尺度。',
  variant: '求 \\(\\displaystyle\\lim_{x\\to0}\\frac{\\sqrt{1+x}-1-\\frac x2}{x^2}\\)。说明为什么不能把分子中 \\(\\sqrt{1+x}-1\\) 直接替换为它的等价无穷小 \\(\\frac x2\\)。',
  variantSolution: '当 \\(x\\) 充分接近 0 时，根式有定义。先有理化并通分：\\[\\sqrt{1+x}-1-\\frac x2=\\frac{x}{\\sqrt{1+x}+1}-\\frac x2=\\frac{x(1-\\sqrt{1+x})}{2(\\sqrt{1+x}+1)}=-\\frac{x^2}{2(\\sqrt{1+x}+1)^2}.\\]因此原极限为 \\(-\\frac18\\)。虽然 \\(\\sqrt{1+x}-1\\sim\\frac x2\\)，直接在差式中替换会把分子误写成 0，丢失抵消后仍存在的二次项。本题先作精确恒等变形，不在差式内部直接作等价替换。',
  verification: '已对照华师大第六版印刷第 61—62 页例 2；检查根式定义域、有理化与二次系数。此前三倍角差与同节习题 5(1) 的双倍角差仅改系数，已替换为结构不同的根式抵消；全站语义去重仍未完成。'
});

Object.assign(window.REVIEW_SOLUTIONS['3.5:example:3'], {
  variantDeferred: false,
  variantSource: '自编。参照华师大第六版上册 §3.5 例 3 及印刷第 63 页关于无界函数的说明（PDF 第 75—76 页），比较局部无界和无穷大量。',
  variant: String.raw`设 \(f(x)=\dfrac{1+\sin(\frac1x)}{x^2}\)。证明 f 在 0 的每个去心邻域内无界，并判断它在 \(x\to0\) 时是否为无穷大量。`,
  variantSolution: String.raw`取
\[
x_n=\frac1{2n\pi+\frac\pi2},\qquad y_n=\frac1{2n\pi+\frac{3\pi}2}.
\]
两列均为正且趋于 0。沿第一列，\(f(x_n)=\frac2{x_n^2}\to+\infty\)，所以任意去心邻域内的函数值都无界。沿第二列，\(f(y_n)=0\)，因此无论邻域多小，都有函数值的绝对值不大于 1 的点，不满足无穷大量的定义。

故 f 虽然局部无界，且函数值始终非负，却不是 \(x\to0\) 时的无穷大量。`,
  verification: '已对照华师大第六版印刷第 62—63 页；旧练习只是平移并取负，现比较去心邻域无界与无穷大量，检查两个数列的函数值。'
});

Object.assign(window.REVIEW_SOLUTIONS['3.5:example:4'], {
  variantDeferred: false,
  variantSource: '华师大第六版上册 §3.5 例 4 后的未编号结论（印刷第 63 页，PDF 第 76 页）：a>1 时指数函数在负无穷的极限为 0。这里将自变量写为 −x，并补充按定义的证明。',
  variant: '设 \\(a>1\\)。按无穷远处有限极限的定义证明 \\(\\displaystyle\\lim_{x\\to+\\infty}a^{-x}=0\\)。',
  variantSolution: '任给 \\(\\varepsilon>0\\)。由第二章数列极限结果 \\(a^n\\to+\\infty\\)，可取正整数 \\(N\\) 使 \\(a^N>\\frac1\\varepsilon\\)。当 \\(x>N\\) 时，指数函数的单调性给出 \\(a^x>a^N\\)，因而 \\[|a^{-x}-0|=a^{-x}<a^{-N}<\\varepsilon.\\]故以 \\(N\\) 为无穷远阈值，得到所需极限。证明不需要导数。',
  verification: '已对照华师大第六版 §3.5 例 4；独立检查整数阈值、指数单调性和倒数不等号。'
});

Object.assign(window.REVIEW_SOLUTIONS['3.5:example:5'], {
  variantDeferred: false,
  variantSource: '自编。参照华师大第六版上册 §3.5 例 5 关于无穷大量乘积的充分条件，检验去掉因子正下界后可能出现的两种结果。',
  variant: '当 \\(x\\to0\\) 时，令 \\(f(x)=\\frac1{x^2}\\)。分别取 \\(g_1(x)=x^2\\)、\\(g_2(x)=x\\)，讨论 \\(f(x)g_1(x)\\) 与 \\(f(x)g_2(x)\\) 是否为无穷大量，并说明这与例 5 的条件有何关系。',
  variantSolution: '首先 \\(f(x)\\to+\\infty\\)，但 \\(f(x)g_1(x)=1\\)，不是无穷大量。另一方面，\\(f(x)g_2(x)=\\frac1x\\) 是无穷大量：任给 \\(G>0\\)，取 \\(\\delta=\\frac1G\\)，当 \\(0<|x|<\\delta\\) 时，\\(|\\frac1x|>G\\)。这里它不是正无穷或负无穷极限，因为两侧符号不同。两个 \\(g_i\\) 都趋于 0，因此都没有局部正下界；一个乘积仍为无穷大量，另一个不是。这说明例 5 的下界是充分条件，去掉后不能保证结论，但也并非每个具体乘积的必要条件。',
  verification: '已对照 §3.5 例 5；独立检查无穷大量按绝对值定义、两侧符号及充分条件与必要条件的区别。'
});

Object.assign(window.REVIEW_SOLUTIONS['3.5:exercise:1'], {
  variantDeferred: false,
  variantSource: '自编。参照华师大第六版上册习题 3.5 第 1 题（印刷第 65 页，PDF 第 78 页），比较大 O 的局部有界与小 o 的比值趋零。',
  variant: '证明 \\(x\\sin\\frac1x=O(x)\\)（\\(x\\to0\\)），并判断它是否也是 \\(o(x)\\)。',
  variantSolution: '当 \\(x\\ne0\\) 时，\\[\\left|\\frac{x\\sin\\frac1x}{x}\\right|=\\left|\\sin\\frac1x\\right|\\le1.\\]所以该比值在去心邻域有界，故 \\(x\\sin\\frac1x=O(x)\\)。另一方面，取 \\(x_n=\\frac1{2n\\pi+\\frac\\pi2}\\to0\\)，比值恒为 1；取 \\(y_n=\\frac1{2n\\pi+\\frac{3\\pi}2}\\to0\\)，比值恒为 −1。由归结原则该比值不趋于 0，因而不是 \\(o(x)\\)。大 O 不要求比值本身有极限。',
  verification: '已对照华师大第六版印刷第 65 页习题 1 的七问和脚注；检查函数类记号、各比值所在去心定义域及练习的两列取值。'
});

Object.assign(window.REVIEW_SOLUTIONS['3.5:exercise:2'], {
  variantDeferred: false,
  variantSource: '自编。参照华师大第六版上册习题 3.5 第 2 题第（2）问（印刷第 65 页，PDF 第 78 页），在根式差之外增加反正切复合。',
  variant: String.raw`利用等价无穷小求 \(\displaystyle\lim_{x\to0}\frac{\arctan(\sqrt{1+x^2}-1)}{1-\cos x}\)。`,
  variantSolution: String.raw`令 \(u=\sqrt{1+x^2}-1\)。当 \(x\to0\) 时，\(u\to0\)，且在充分小的去心邻域内 \(u>0\)。有理化得到
\[
\frac{u}{x^2}=\frac1{\sqrt{1+x^2}+1}\longrightarrow\frac12.
\]
又 \(\frac{\arctan u}{u}\to1\)、\(\frac{1-\cos x}{x^2}\to\frac12\)。因此把原式写成三个乘除因子，得到
\[
\frac{\arctan u}{u}\cdot\frac{u}{x^2}\cdot\frac{x^2}{1-\cos x}\longrightarrow1\cdot\frac12\cdot2=1.
\]
各分母在所选去心邻域内非零。`,
  verification: '已对照华师大第六版印刷第 65 页第 2 题两个小问；旧练习只改变系数，新题检查复合内层及分母非零。'
});

Object.assign(window.REVIEW_SOLUTIONS['3.5:exercise:3'], {
  variantDeferred: false,
  variantSource: '自编。参照华师大第六版定理 3.14 与习题 3.5 第 3 题（印刷第 63、65 页，PDF 第 76、78 页），检查有无限多个零点时倒数的定义域。',
  variant: '令 \\(f(x)=x\\sin\\frac1x\\)（\\(x\\ne0\\)）。证明 \\(f(x)\\to0\\)；它的倒数能否在 0 的某整个去心邻域内定义？若仅在 \\(f(x)\\ne0\\) 的点讨论，倒数是否为无穷大量？',
  variantSolution: '由 \\(|f(x)|\\le|x|\\)，有 \\(f(x)\\to0\\)。但 \\(x_n=\\frac1{n\\pi}\\to0\\) 且 \\(f(x_n)=0\\)，所以任意去心邻域都包含零点，倒数无法在整个去心邻域定义。\n\n在相对定义域 \\(D=\\{x\\ne0:f(x)\\ne0\\}\\) 上，\\[\\left|\\frac1{f(x)}\\right|\\ge\\frac1{|x|}.\\]任给 \\(G>0\\)，取 \\(\\delta=\\frac1G\\)，对 \\(x\\in D\\) 且 \\(0<|x|<\\delta\\) 有倒数绝对值大于 G。故沿 D 趋近 0 时倒数为无穷大量。此结论是相对定义域上的表述，不把原定理要求的整个去心邻域非零条件省掉。',
  verification: '已对照华师大第六版定理 3.14；检查原证明中充分靠近时非零、倒数量词及练习零点序列与相对定义域。'
});

Object.assign(window.REVIEW_SOLUTIONS['3.5:exercise:4'], {
  variantDeferred: false,
  variantSource: '自编。参照华师大第六版上册习题 3.5 第 4 题（印刷第 66 页，PDF 第 79 页），加入绝对值以分别比较正、负无穷方向。',
  variant: String.raw`求曲线 \(y=\frac{x|x|+1}{x-1}\) 的全部渐近线。`,
  variantSolution: String.raw`在 \(x>0\) 时，\(x|x|=x^2\)，故
\[
y=\frac{x^2+1}{x-1}=x+1+\frac2{x-1}.
\]
当 \(x\to+\infty\) 时，余项趋于 0，得到斜渐近线 \(y=x+1\)。当 \(x\to1\) 时分子趋于 2，左、右侧分别趋于负、正无穷，因此 \(x=1\) 是垂直渐近线。

在 \(x<0\) 时，\(x|x|=-x^2\)，于是
\[
y=\frac{1-x^2}{x-1}=-(x+1).
\]
故 \(x\to-\infty\) 时斜渐近线为 \(y=-x-1\)。除 1 外分母不为零，函数在每个有限点附近有界；两端函数值均无有限极限，所以没有其他垂直或水平渐近线。`,
  verification: '已对照华师大第六版印刷第 66 页习题 4 的三个小问；旧练习为同类有理式，现检查含绝对值时正、负无穷渐近线不同以及极点左右符号。'
});

Object.assign(window.REVIEW_SOLUTIONS['3.5:exercise:5'], {
  variantDeferred: false,
  variantSource: '自编。参照华师大第六版上册习题 3.5 第 5 题（印刷第 66 页，PDF 第 79 页），以根式有理化确定无穷小量的阶。',
  variant: '确定实数 \\(\\alpha\\)，使 \\(\\sqrt{1+x^4}-1\\) 与 \\(x^\\alpha\\) 当 \\(x\\to0^+\\) 时为同阶无穷小量。说明唯一性。',
  variantSolution: '有理化得到 \\[\\sqrt{1+x^4}-1=\\frac{x^4}{\\sqrt{1+x^4}+1}.\\]因而其与 \\(x^4\\) 的比值趋于 \\(\\frac12\\)，有正的上下界，故 \\(\\alpha=4\\) 符合教材的同阶定义。若 \\(\\alpha\\ne4\\)，其与 \\(x^\\alpha\\) 的比值是 \\(x^{4-\\alpha}\\) 乘以趋于 \\(\\frac12\\) 的因子：当 \\(\\alpha<4\\) 时趋于 0，当 \\(\\alpha>4\\) 时趋于正无穷，均不能同时具有正的上下界。故答案唯一。',
  verification: '已对照华师大第六版印刷第 60、66 页的同阶定义及习题 5 四问；检查各阶数唯一性、本练习正侧幂函数定义和有理化。'
});

Object.assign(window.REVIEW_SOLUTIONS['3.5:exercise:6'], {
  variantDeferred: false,
  variantSource: '自编。参照华师大第六版上册习题 3.5 第 6 题第（2）问（印刷第 66 页，PDF 第 79 页），改变主导幂次并检验同阶比值可不收敛。',
  variant: '确定 \\(\\alpha\\)，使 \\(x^3(2+\\sin x)\\) 与 \\(x^\\alpha\\) 当 \\(x\\to+\\infty\\) 时为同阶无穷大量。其比值是否一定有极限？',
  variantSolution: '由于 \\(1\\le2+\\sin x\\le3\\)，该函数是无穷大量，且与 \\(x^3\\) 的比值具有正的上下界，故 \\(\\alpha=3\\)。若 \\(\\alpha<3\\)，比值至少为 \\(x^{3-\\alpha}\\to+\\infty\\)；若 \\(\\alpha>3\\)，比值介于 0 与 \\(3x^{3-\\alpha}\\to0\\) 之间；两者都不符合同阶定义。故 \\(\\alpha=3\\) 唯一。\n\n此时比值为 \\(2+\\sin x\\)，沿 \\(x_n=2n\\pi+\\frac\\pi2\\) 趋于 3，沿 \\(y_n=2n\\pi+\\frac{3\\pi}2\\) 趋于 1，所以不收敛；比值不收敛仍可同阶。',
  verification: '已对照华师大第六版印刷第 66 页习题 6 的三问；检查教材同阶定义、原题负侧定义域及本练习参数唯一性。'
});

Object.assign(window.REVIEW_SOLUTIONS['3.5:exercise:7'], {
  variantDeferred: false,
  variantSource: '自编。参照华师大第六版上册习题 3.5 第 7 题（印刷第 66 页，PDF 第 79 页），将无上界改为无下界，并要求递减。',
  variant: '设实数集合 \\(S\\) 无下界。证明存在严格递减数列 \\(\\{y_n\\}\\subset S\\)，使 \\(y_n\\to-\\infty\\)。',
  variantSolution: '由无下界性，先取 \\(y_1\\in S\\) 使 \\(y_1<-1\\)。若已取 \\(y_n\\)，再取 \\(y_{n+1}\\in S\\)，使 \\[y_{n+1}<\\min\\{y_n,-(n+1)\\}.\\]于是 \\(y_{n+1}<y_n\\)，并且对所有 n 有 \\(y_n<-n\\)。任给 \\(G>0\\)，取正整数 \\(N>G\\)；当 \\(n>N\\) 时，\\(y_n<-n<-G\\)。故 \\(y_n\\to-\\infty\\)。每一步的选取均由 S 无下界保证。',
  verification: '已对照华师大第六版印刷第 66 页习题 7；检查原题与练习递归选点严格性及极限阈值。'
});

Object.assign(window.REVIEW_SOLUTIONS['3.5:exercise:8'], {
  variantDeferred: false,
  variantSource: '自编。参照华师大第六版上册习题 3.5 第 8 题（印刷第 66 页，PDF 第 79 页），考察两个符合乘积定理的项相加时可能发生的抵消。',
  variant: '当 \\(x\\to0\\) 时，令 \\(f_1(x)=\\frac1x\\)、\\(f_2(x)=-\\frac1x\\)、\\(g_1(x)=1\\)。分别令 \\(g_2(x)=1+x\\) 和 \\(g_2(x)=1+\\sqrt{|x|}\\)，讨论 \\(f_1g_1+f_2g_2\\) 的极限；这与第 8 题的乘积结论矛盾吗？',
  variantSolution: '两种情形均有 \\(f_1,f_2\\) 的绝对值趋于无穷，且 \\(g_1,g_2\\to1\\ne0\\)。按第 8 题，每个乘积都是无穷大量。\n\n当 \\(g_2=1+x\\) 时，两项相加得到 \\(-1\\)，极限为 −1。当 \\(g_2=1+\\sqrt{|x|}\\) 时，和为 \\(-\\frac{\\sqrt{|x|}}{x}\\)，其绝对值是 \\(\\frac1{\\sqrt{|x|}}\\to+\\infty\\)，故为无穷大量；但左右符号不同，既不趋于正无穷也不趋于负无穷。第 8 题只断言各乘积各自为无穷大量，没有断言它们的和仍是无穷大量，所以并不矛盾。',
  verification: '已对照华师大第六版印刷第 66 页习题 8；检查非零极限给出的局部下界、两个乘积及抵消后的左右符号。'
});

Object.assign(window.REVIEW_SOLUTIONS['3.5:exercise:9'], {
  variantDeferred: false,
  variantSource: '自编。参照华师大第六版上册习题 3.5 第 9 题（印刷第 66 页，PDF 第 79 页），补证从差的小 o 关系反推等价。',
  variant: '设 \\(g\\) 在 \\(x_0\\) 的某去心邻域非零，且 \\(f-g=o(g)\\)（\\(x\\to x_0\\)）。证明 \\(f\\sim g\\)，并证明在充分小的去心邻域 \\(f\\ne0\\) 且 \\(f-g=o(f)\\)。',
  variantSolution: '由定义 \\(\\frac{f-g}{g}\\to0\\)，因此 \\[\\frac fg=1+\\frac{f-g}{g}\\longrightarrow1.\\]故 \\(f\\sim g\\)。由于该比值充分接近 1 时不为 0，结合 g 非零，可知在某个更小的去心邻域 f 也非零。于是 \\[\\frac{f-g}{f}=\\frac{\\frac{f-g}{g}}{\\frac fg}\\longrightarrow0,\\]从而 \\(f-g=o(f)\\)。其中缩小邻域是为了让第二个比值有定义。',
  verification: '已对照华师大第六版印刷第 66 页习题 9；检查等价关系双向转换及 f、g 在去心邻域的非零条件。'
});

Object.assign(window.REVIEW_SOLUTIONS['3.5:exercise:10'], {
  variantDeferred: false,
  variantSource: '自编。参照华师大第六版上册习题 3.5 第 10 题（印刷第 66 页，PDF 第 79 页），将值的趋向从正无穷改为负无穷。',
  variant: '设 f 在某个正无穷邻域有定义。写出并证明 \\(f(x)\\to-\\infty\\)（\\(x\\to+\\infty\\)）的函数—数列归结原则。',
  variantSolution: '原则：\\(f(x)\\to-\\infty\\) 当且仅当对每个趋于正无穷的数列 \\(x_n\\)，其充分靠后的项满足 \\(f(x_n)\\to-\\infty\\)。此处充分靠后各项位于 f 的定义域。\n\n必要性：任给 \\(G>0\\)，存在 \\(M>0\\)，使 \\(x>M\\) 时 \\(f(x)<-G\\)。由 \\(x_n\\to+\\infty\\)，充分大 n 时 \\(x_n>M\\)，故 \\(f(x_n)<-G\\)。\n\n充分性：若函数不趋于负无穷，则存在 \\(G_0>0\\)，对每个正整数 n，可在定义域中取 \\(x_n>n\\) 且 \\(f(x_n)\\ge-G_0\\)。于是 \\(x_n\\to+\\infty\\)，但 \\(f(x_n)\\) 不趋于负无穷，与数列条件矛盾。故函数极限成立。',
  verification: '已对照华师大第六版印刷第 66 页习题 10；检查原题与练习的量词否定、阈值方向和构造数列。'
});

Object.assign(window.REVIEW_SOLUTIONS['3.total:exercise:1'], {
  variantDeferred: false,
  variantSource: '自编。参照华师大第六版第三章总练习第 1 题第（1）问（印刷第 66 页，PDF 第 79 页），同时比较取整函数在整数两侧的极限。',
  variant: '求 \\(\\displaystyle\\lim_{x\\to2^-}(x-[x])\\) 与 \\(\\displaystyle\\lim_{x\\to2^+}(x-[x])\\)，并判断双侧极限是否存在。',
  variantSolution: '当 \\(1<x<2\\) 时 \\([x]=1\\)，故左极限为 \\(\\lim_{x\\to2^-}(x-1)=1\\)。当 \\(2<x<3\\) 时 \\([x]=2\\)，故右极限为 \\(\\lim_{x\\to2^+}(x-2)=0\\)。由于左右极限不同，双侧极限不存在。整数点本身的函数值不影响去心极限。',
  verification: '已对照华师大第六版印刷第 66 页总练习第 1 题；检查七个小问的取整、根式正负方向和有限幂和，练习两侧取整分别检查。'
});

Object.assign(window.REVIEW_SOLUTIONS['3.total:exercise:2'], {
  variantDeferred: false,
  variantSource: '自编。参照华师大第六版第三章总练习第 2 题（印刷第 66 页，PDF 第 79 页），比较同一根式在正、负无穷两侧的线性渐近式。',
  variant: '分别求实数 \\(a_+,b_+,a_-,b_-\\)，使 \\[\\sqrt{x^2+4x+1}-a_+x-b_+\\to0\\quad(x\\to+\\infty),\\] \\[\\sqrt{x^2+4x+1}-a_-x-b_-\\to0\\quad(x\\to-\\infty).\\]',
  variantSolution: '对充分大的 \\(|x|\\)，根式有定义，且 \\(x^2+4x+1=(x+2)^2-3\\)。有理化得 \\[\\sqrt{x^2+4x+1}-|x+2|=\\frac{-3}{\\sqrt{x^2+4x+1}+|x+2|}\\longrightarrow0\\quad(|x|\\to\\infty).\\]正无穷侧 \\(|x+2|=x+2\\)，所以 \\((a_+,b_+)=(1,2)\\)；负无穷侧 \\(|x+2|=-x-2\\)，所以 \\((a_-,b_-)=(-1,-2)\\)。若另一组满足条件，与上述式相减得一个线性函数趋于 0；先除以 x 再取极限知斜率相同，随后常数项也相同，故两组均唯一。',
  verification: '已对照华师大第六版印刷第 66 页总练习第 2 题三问；检查原题负无穷根式符号及练习有理化、两侧截距与唯一性。'
});

Object.assign(window.REVIEW_SOLUTIONS['3.total:exercise:3'], {
  variantDeferred: false,
  variantSource: '自编。参照华师大第六版第三章总练习第 3 题（印刷第 66 页，PDF 第 79 页），检验函数本身与其平方的极限关系。',
  variant: '若 \\(f(x)^2\\) 在 \\(x\\to0\\) 时有极限，能否推出 \\(f(x)\\) 有极限？如果 \\(f(x)^2\\to0\\)，结论是否改变？',
  variantSolution: '一般不能。取 \\(f(x)=\\operatorname{sgn}x\\)（\\(x\\ne0\\)），则 \\(f(x)^2=1\\)，但左右极限分别为 −1 和 1，故 f 的双侧极限不存在。\n\n如果 \\(f(x)^2\\to0\\)，则由 \\(|f(x)|=\\sqrt{f(x)^2}\\to0\\)，可得 \\(f(x)\\to0\\)。也可直接用定义：任给 \\(\\varepsilon>0\\)，取邻域使 \\(f(x)^2<\\varepsilon^2\\)，便有 \\(|f(x)|<\\varepsilon\\)。因此平方极限为 0 时结论成立。',
  verification: '已对照华师大第六版印刷第 66 页总练习第 3 题两问；检查练习中左右极限及平方极限为 0 的特殊情况。'
});

Object.assign(window.REVIEW_SOLUTIONS['3.total:exercise:4'], {
  variantDeferred: false,
  variantSource: '自编。参照华师大第六版第三章总练习第 4 题（印刷第 66 页，PDF 第 79 页），要求在所有整数处同时构造相同现象。',
  variant: '构造处处为正的函数 f，使得对每个整数 m 都有 \\(\\displaystyle\\lim_{x\\to m}f(x)=0\\)。',
  variantSolution: '定义 \\[f(x)=\\begin{cases}1,&x\\in\\mathbb Z,\\\\ \\min_{k\\in\\mathbb Z}|x-k|,&x\\notin\\mathbb Z.\\end{cases}\\]每个非整数到最近整数的距离严格大于 0，整数处函数值为 1，因此 f 处处为正。任给整数 m，当 \\(0<|x-m|<\\frac12\\) 时，m 是离 x 最近的整数，故 \\(f(x)=|x-m|\\to0\\)。于是每个整数处的去心极限均为 0；整数点处的函数值仍为 1。',
  verification: '已对照华师大第六版印刷第 66 页总练习第 4 题；检查原题保号性方向及练习中最近整数、整数点值和去心极限。'
});

Object.assign(window.REVIEW_SOLUTIONS['3.total:exercise:5'], {
  variantDeferred: false,
  variantSource: '自编。参照华师大第六版第三章总练习第 5 题及 §3.2 复合极限条件，构造内层在每个去心邻域内既取得又不取得外层极限点的例子。',
  variant: '令 \\(f(x)=x\\sin\\frac1x\\)（\\(x\\ne0\\)），并令 \\(g(0)=2\\)、\\(g(u)=u\\)（\\(u\\ne0\\)）。分别求 \\(\\lim_{x\\to0}f(x)\\)、\\(\\lim_{u\\to0}g(u)\\)，并讨论 \\(\\lim_{x\\to0}g(f(x))\\)。',
  variantSolution: '由 \\(|f(x)|\\le|x|\\)，内层极限为 0；当 \\(u\\ne0\\) 时 \\(g(u)=u\\)，故外层去心极限也为 0。取 \\(x_n=\\frac1{n\\pi}\\to0\\)，则 \\(f(x_n)=0\\)、\\(g(f(x_n))=2\\)。再取 \\(y_n=\\frac1{2n\\pi+\\frac\\pi2}\\to0\\)，则 \\(f(y_n)=y_n\\ne0\\)、\\(g(f(y_n))=y_n\\to0\\)。两条数列的复合值极限不同，因此复合极限不存在。这里内层会无限次取到 0，外层点值又不等于其极限，恰好说明不能省略教材讨论的条件。',
  verification: '已对照华师大第六版印刷第 66—67 页总练习第 5 题及复合极限条件；检查两列趋近、内层零点与外层点值。'
});

Object.assign(window.REVIEW_SOLUTIONS['3.total:exercise:6'], {
  variantDeferred: false,
  variantSource: '自编。参照华师大第六版第三章总练习第 6 题（印刷第 67 页，PDF 第 80 页），构造趋于正无穷的自变量数列，使振荡函数取到任意指定的有限极限。',
  variant: '设 \\(L\\in\\mathbb R\\)。构造 \\(x_n\\to+\\infty\\)，使 \\(x_n\\sin x_n\\to L\\)。',
  variantSolution: '令 \\(x_n=2n\\pi+\\frac{L}{2n\\pi}\\)。则 \\(x_n\\to+\\infty\\)。记 \\(t_n=\\frac{L}{2n\\pi}\\to0\\)，由周期性和基本极限，\\[x_n\\sin x_n=(2n\\pi+t_n)\\sin t_n=(2n\\pi+t_n)t_n\\frac{\\sin t_n}{t_n}\\longrightarrow L.\\]上式在 \\(L\\ne0\\) 时直接成立；当 \\(L=0\\) 时取 \\(x_n=2n\\pi\\)，函数值恒为 0。故任意给定的实数都可作为沿某条趋于正无穷的数列所得到的极限。',
  verification: '已对照华师大第六版印刷第 67 页总练习第 6 题三问；检查原题三列及练习 L 为负或零的情形。'
});

Object.assign(window.REVIEW_SOLUTIONS['3.total:exercise:7'], {
  variantDeferred: false,
  variantSource: '自编。参照华师大第六版第三章总练习第 7 题（印刷第 67 页，PDF 第 80 页），改为考察右邻域上的下确界。',
  variant: '设 f 在 \\((x_0,x_0+\\delta)\\) 上递增，且存在该区间内的 \\(x_n\\to x_0\\)，使 \\(f(x_n)\\to A\\)。证明 \\(\\lim_{x\\to x_0^+}f(x)=\\inf f=A\\)，其中下确界取遍该区间。',
  variantSolution: '任取区间内的 t。因为 \\(x_n\\to x_0\\)，充分大 n 时 \\(x_n<t\\)，递增性给出 \\(f(x_n)\\le f(t)\\)；令 n 趋于无穷得 \\(A\\le f(t)\\)。故值集有下界 A。又每个 \\(f(x_n)\\ge\\inf f\\)，取极限得 \\(A\\ge\\inf f\\)。因此 \\(\\inf f=A\\)。\n\n任给 \\(\\varepsilon>0\\)，按下确界性质取区间内的 s，使 \\(f(s)<A+\\varepsilon\\)。当 \\(x_0<x<s\\) 时，由单调性和下界性，\\(A\\le f(x)\\le f(s)<A+\\varepsilon\\)，故右极限为 A。',
  verification: '已对照华师大第六版印刷第 67 页总练习第 7 题；检查原题上确界和练习右侧下确界的方向。'
});

Object.assign(window.REVIEW_SOLUTIONS['3.total:exercise:8'], {
  variantDeferred: false,
  variantSource: '自编。参照华师大第六版第三章总练习第 8 题（印刷第 67 页，PDF 第 80 页），改用缩小尺度和零点右极限。',
  variant: '设 f 在 \\((0,+\\infty)\\) 上满足 \\(f(3x)=f(x)\\)，且 \\(\\lim_{x\\to0^+}f(x)=A\\)。证明 f 在正半轴恒等于 A。',
  variantSolution: '固定任意 \\(x>0\\)。由题设对 \\(\\frac{x}{3}\\) 应用函数方程得 \\(f(x)=f(\\frac{x}{3})\\)，反复应用得到 \\(f(x)=f(\\frac{x}{3^n})\\)。由于 \\(\\frac{x}{3^n}\\to0^+\\)，由归结原则 \\(f(\\frac{x}{3^n})\\to A\\)。左边作为关于 n 的常数列等于 \\(f(x)\\)，所以 \\(f(x)=A\\)。x 任意，故 f 恒等于 A。',
  verification: '已对照华师大第六版印刷第 67 页总练习第 8 题；检查正半轴迭代的定义域与缩小后的趋向。'
});

Object.assign(window.REVIEW_SOLUTIONS['3.total:exercise:9'], {
  variantDeferred: false,
  variantSource: '自编。参照华师大第六版第三章总练习第 9 题（印刷第 67 页，PDF 第 80 页），去掉两端极限与点值相等的条件，讨论一般形式。',
  variant: '设 f 在 \\((0,+\\infty)\\) 上满足 \\(f(x^2)=f(x)\\)，且 \\(\\lim_{x\\to0^+}f(x)=A\\)、\\(\\lim_{x\\to+\\infty}f(x)=B\\)。若不假定 A、B 和 \\(f(1)\\) 相等，确定 f 在三个区间 \\((0,1)\\)、\\(\\{1\\}\\)、\\((1,+\\infty)\\) 上的形式，并说明这三个值能否不同。',
  variantSolution: '固定 \\(0<x<1\\)，反复迭代得 \\(f(x)=f(x^{2^n})\\)，而 \\(x^{2^n}\\to0^+\\)，所以 \\(f(x)=A\\)。固定 \\(x>1\\)，同样迭代且 \\(x^{2^n}\\to+\\infty\\)，得到 \\(f(x)=B\\)。在 \\(x=1\\) 处，方程只给出恒等式 \\(f(1)=f(1)\\)，因此可取任意实数 C。\n\n反过来，任取实数 A、B、C，令 f 分别在 \\((0,1)\\)、\\(\\{1\\}\\)、\\((1,+\\infty)\\) 上等于 A、C、B。平方保持这三个区域，故函数方程和所给两端极限均成立。这证明三值可以彼此不同；原题额外要求它们相等，才得到整个正半轴上的常值。',
  verification: '已对照华师大第六版印刷第 67 页总练习第 9 题；检查平方迭代在三个区域内的趋向及反向构造。'
});

Object.assign(window.REVIEW_SOLUTIONS['3.total:exercise:10'], {
  variantDeferred: false,
  variantSource: '自编。参照华师大第六版第三章总练习第 10 题（印刷第 67 页，PDF 第 80 页），检验差分定理的逆命题。',
  variant: '若 f 在每个有限区间上有界，且 \\(\\displaystyle\\lim_{x\\to+\\infty}\\frac{f(x)}x=A\\)，是否必有 \\(\\lim_{x\\to+\\infty}[f(x+1)-f(x)]=A\\)？',
  variantSolution: '不一定。取 \\(f(x)=Ax+\\sin(\\pi x)\\)，它在每个有限区间上有界，且 \\[\\frac{f(x)}x=A+\\frac{\\sin(\\pi x)}x\\longrightarrow A.\\]但 \\[f(x+1)-f(x)=A-2\\sin(\\pi x).\\]沿 \\(x_n=2n+\\frac12\\) 该差分恒为 \\(A-2\\)；沿 \\(y_n=2n+\\frac32\\) 恒为 \\(A+2\\)。因此差分在正无穷没有极限，原题结论不能反推其假设。',
  verification: '已对照华师大第六版印刷第 67 页总练习第 10 题；检查原证中统一控制起点以及练习差分反例的两条路径。'
});

Object.assign(window.REVIEW_SOLUTIONS['4.1:example:3'], {
  variantDeferred: false,
  variantSource: '自编。参照华师大第六版上册 §4.1 例 3 的黎曼函数（印刷第 71 页，PDF 第 84 页），乘以 x 后考察其在闭区间内的连续点。',
  variant: '令 \\(R\\) 为本例中的黎曼函数，在 \\([0,1]\\) 上定义 \\(H(x)=xR(x)\\)。确定 H 在该区间内的连续点，端点采用区间内单侧连续。',
  variantSolution: '由第三章已证黎曼函数在每个 \\(x_0\\in[0,1]\\) 的区间内去心极限为 0；在端点只取区间内一侧。因此 \\(H(x)=xR(x)\\to0\\)。若 \\(x_0\\) 是区间内部的无理数，或 \\(x_0=0,1\\)，则 \\(R(x_0)=0\\)，故 \\(H(x_0)=0\\)，H 在这些点连续。\n\n若 \\(x_0=\\frac pq\\in(0,1)\\) 是既约分数，则 \\(H(x_0)=\\frac pq\\frac1q>0\\)，与去心极限 0 不同，因而不连续。故连续点恰为 0、1 以及 \\((0,1)\\) 中所有无理数。端点取值采用本书定义，不能把其他版本整数端点取值直接代入。',
  verification: '已对照华师大第六版印刷第 71 页例 3 和第 10 页黎曼函数定义；检查端点按单侧连续，以及既约真分数处的函数值。'
});

Object.assign(window.REVIEW_SOLUTIONS['4.1:exercise:6'], {
  variantDeferred: false,
  variantSource: '自编。参照华师大第六版上册习题 4.1 第 6 题（印刷第 72 页，PDF 第 85 页），使用单调取整函数具体识别第一类间断点。',
  variant: '设 \\(f(x)=[2x]\\)，其中方括号表示不超过该数的最大整数。找出 f 的全部间断点并指出类型。',
  variantSolution: '若 \\(2x_0\\notin\\mathbb Z\\)，则 \\(2x\\) 在充分小邻域内处于同一个相邻整数之间，故 \\([2x]\\) 局部为常数，f 在 \\(x_0\\) 连续。\n\n若 \\(x_0=\\frac{k}{2}\\)（\\(k\\in\\mathbb Z\\)），在足够小的左侧邻域 \\(k-1<2x<k\\)，所以左极限为 \\(k-1\\)；右侧邻域 \\(k<2x<k+1\\)，右极限为 k，且 \\(f(x_0)=k\\)。左右极限存在但不相等，故每个半整数点都是跳跃间断点，属于第一类间断点。全部间断点为 \\(\\{\\frac{k}{2}:k\\in\\mathbb Z\\}\\)。',
  verification: '已对照华师大第六版印刷第 72 页习题 6；检查单调函数在区间内点和端点的单侧极限，及练习半整数处左右取整。'
});

Object.assign(window.REVIEW_SOLUTIONS['4.1:exercise:7'], {
  variantDeferred: false,
  variantSource: '自编。参照华师大第六版上册习题 4.1 第 7 题（印刷第 72 页，PDF 第 85 页），构造可去间断点聚集的例子并求连续修正。',
  variant: '定义 \\(f(0)=2\\)，对正整数 n 令 \\(f(\\frac1n)=0\\)，其余实数 x 令 \\(f(x)=\\sin x\\)。证明 f 的间断点均可去，并求 \\(g(x)=\\lim_{y\\to x}f(y)\\)。',
  variantSolution: '固定 \\(x_0\\ne0\\)。数列 \\(\\frac1n\\) 唯一聚点为 0，因此在充分小的去心邻域中，除了可能的中心点 \\(x_0=\\frac1n\\) 外没有这些特殊点，也可避开 0；在该去心邻域内 \\(f(y)=\\sin y\\)，故极限为 \\(\\sin x_0\\)。若 \\(x_0\\) 不是特殊点，点值与极限相同；若 \\(x_0=\\frac1n\\)，点值为 0，而 \\(\\sin\\frac1n>0\\)，所以是可去间断点。\n\n当 \\(y\\to0\\) 时，若 y 是特殊点则 \\(f(y)=0\\)，否则 \\(|f(y)|=|\\sin y|\\le|y|\\)；因此极限为 0，但 \\(f(0)=2\\)，0 也是可去间断点。综上对每个实数 x 都有 \\(g(x)=\\sin x\\)，g 连续。虽然间断点列聚集于 0，仍须单独检查聚点处的极限。',
  verification: '已对照华师大第六版印刷第 72 页习题 7；检查原题两层邻域估计及练习的聚点 0、特殊点和其余点。'
});

Object.assign(window.REVIEW_SOLUTIONS['4.1:exercise:8'], {
  variantDeferred: false,
  variantSource: '自编。参照华师大第六版上册习题 4.1 第 8 题（印刷第 72 页，PDF 第 85 页），考察右极限函数与原单调函数的差。',
  variant: '设 f 在 \\(\\mathbb R\\) 上递增，令 \\(g(x)=f(x+0)\\)。证明对任意 a，\\(\\lim_{x\\to a^+}[g(x)-f(x)]=0\\)。这个差在 \\(x=a\\) 处是否一定等于 0？',
  variantSolution: '本题主解已证明 g 在每点右连续，因此 \\(g(x)\\to g(a)\\)（\\(x\\to a^+\\)）。另一方面，按右极限定义 \\(f(x)\\to f(a+0)=g(a)\\)。由极限的差运算法则，\\(g(x)-f(x)\\to0\\)。\n\n但差在 a 处不一定为 0。取 \\(a=0\\)，令 \\(f(x)=0\\)（\\(x\\le0\\)）、\\(f(x)=1\\)（\\(x>0\\)）。则 f 递增，\\(g(0)=f(0+0)=1\\)，而 \\(f(0)=0\\)，故 \\(g(0)-f(0)=1\\)。右侧趋近时差却恒为 0，说明点值和单侧极限需要分别检查。',
  verification: '已对照华师大第六版印刷第 72 页习题 8；检查单调函数右极限的存在、主解中两层极限估计及练习点值。'
});

// §3.1 习题 3 的旧练习与 §3.2 习题 9 的平方代换实质重合。
Object.assign(window.REVIEW_SOLUTIONS['3.1:exercise:3'], {
  variantDeferred: false,
  variantSource: '自编。参照华师大第六版 §3.1 习题 3 的平移变量（印刷第 48 页，PDF 第 61 页），结合 §3.2 极限的局部有界性。',
  variant: String.raw`设 \(\lim_{x\to a}f(x)=A\)。证明 \(\lim_{h\to0}h f(a+h)=0\)。反过来，如果 \(h f(a+h)\to0\)，能否推出 \(f(x)\) 在 \(a\) 处有有限极限？`,
  variantSolution: String.raw`因为 \(f(x)\to A\)，存在 \(\delta_0>0\)，当 \(0<|x-a|<\delta_0\) 时 \(|f(x)|<|A|+1\)。任给 \(\varepsilon>0\)，取 \(\delta=\min\{\delta_0,\frac{\varepsilon}{|A|+1}\}\)。若 \(0<|h|<\delta\)，则
\[
|h f(a+h)|<|h|(|A|+1)<\varepsilon.
\]
故由定义，\(h f(a+h)\to0\)。

逆向不成立。令 \(f(x)=\frac1{\sqrt{|x-a|}}\)（\(x\ne a\)，在 \(a\) 处可任意定义），则
\[
|h f(a+h)|=\sqrt{|h|}\to0,
\]
但 \(f(x)\to+\infty\)（\(x\to a\)），不存在有限极限。`,
  verification: '对照华师大 §3.1 习题 3 及 §3.2 习题 9，原平方代换练习与后者重复；新题检查局部有界的 δ 选择和无有限极限的反例。'
});

Object.assign(window.REVIEW_SOLUTIONS['3.5:exercise:5'], {
  variantSource: '自编。参照华师大第六版上册习题 3.5 第 5 题及印刷第 60 页同阶定义（PDF 第 73、79 页），增加振荡因子并检验比值是否存在极限。',
  variant: String.raw`确定实数 \(\alpha\)，使 \(x^2(2+\sin\frac1x)\) 与 \(x^\alpha\) 当 \(x\to0^+\) 时为同阶无穷小量；它们的比值是否有极限？`,
  variantSolution: String.raw`因为 \(1\le2+\sin\frac1x\le3\)，原函数趋于 0，且与 \(x^2\) 的比值有正的上下界，所以 \(\alpha=2\) 符合同阶定义。若 \(\alpha<2\)，比值介于 0 和 \(3x^{2-\alpha}\) 之间，趋于 0；若 \(\alpha>2\)，比值不小于 \(x^{2-\alpha}\to+\infty\)。因此所求值唯一。

当 \(\alpha=2\) 时，比值为 \(2+\sin\frac1x\)。取 \(x_n=\frac1{2n\pi+\frac\pi2}\)、\(y_n=\frac1{2n\pi+\frac{3\pi}2}\)，两列均从右趋于 0，比值分别为 3 和 1，故比值没有极限。同阶只要求比值绝对值具有正的上下界。`,
  verification: '已对照华师大第六版印刷第 60、66 页的同阶定义及习题 5 四问；新练习检查正侧幂次唯一性与振荡比值。'
});

Object.assign(window.REVIEW_SOLUTIONS['3.5:exercise:6'], {
  variantSource: '自编。参照华师大第六版上册 §3.5 的同阶定义及习题 6（印刷第 60、66 页，PDF 第 73、79 页），检验同阶关系的传递性和等价关系。',
  variant: String.raw`设 \(f,g,h\) 在 \(x\to+\infty\) 时均为无穷大量，并在充分大的区间内非零。若 f 与 g 同阶、g 与 h 同阶，证明 f 与 h 同阶。由 f 与 g 同阶能否推出 \(f\sim g\)？`,
  variantSolution: String.raw`由同阶定义，在充分大的共同区间内，存在正数 \(m,M,p,P\) 使
\[
m\le\left|\frac fg\right|\le M,\qquad
p\le\left|\frac gh\right|\le P.
\]
相乘得到 \(mp\le\left|\frac fh\right|\le MP\)，因此 f 与 h 同阶。

同阶不必等价。取 \(f(x)=2x\)、\(g(x)=x\)（\(x>0\)），二者均为无穷大量，且比值恒为 2，故同阶；但比值不趋于 1，所以 \(f\not\sim g\)。`,
  verification: '已对照华师大第六版印刷第 60、66 页的同阶定义及习题 6 三问；新题检查传递性及同阶不必等价。'
});

Object.assign(window.REVIEW_SOLUTIONS['3.5:exercise:7'], {
  variantSource: '自编。参照华师大第六版上册习题 3.5 第 7 题（印刷第 66 页，PDF 第 79 页），在无上界集合中交错构造两列并控制间隔。',
  variant: String.raw`设实数集合 \(S\) 无上界。证明存在两列 \(\{x_n\},\{y_n\}\subset S\)，使 \(x_n<y_n<x_{n+1}\)、\(y_n-x_n>n\)，且两列均趋于正无穷。`,
  variantSolution: String.raw`先由无上界性取 \(x_1>1\)，再取 \(y_1>x_1+1\)，二者都属于 S。若已选到 \(y_n\)，则可依次选取
\[
x_{n+1}>\max\{y_n,n+1\},\qquad
y_{n+1}>x_{n+1}+n+1,
\]
并要求二者属于 S；每一步均可由 S 无上界实现。于是 \(x_n<y_n<x_{n+1}\)、\(y_n-x_n>n\)，并且 \(x_n>n\)、\(y_n>x_n\)。所以两列均趋于正无穷。`,
  verification: '已对照华师大第六版印刷第 66 页第 7 题；新练习递归选取交错的两列并保证间隔及趋向。'
});

Object.assign(window.REVIEW_SOLUTIONS['3.5:exercise:10'], {
  variantSource: '自编。参照华师大第六版上册习题 3.5 第 10 题（印刷第 66 页，PDF 第 79 页），比较沿一条数列趋于正无穷与函数极限。',
  variant: String.raw`设 f 在某个正无穷邻域有定义，且在每个正无穷尾部都无上界。证明存在严格递增的 \(x_n\to+\infty\)，使 \(f(x_n)\to+\infty\)。能否推出 \(f(x)\to+\infty\)？`,
  variantSolution: String.raw`先在定义域内取 \(x_1>1\) 且 \(f(x_1)>1\)。选定 \(x_n\) 后，由尾部无上界，可取
\[
x_{n+1}>\max\{x_n+1,n+1\},\qquad f(x_{n+1})>n+1.
\]
于是 \(x_n\) 严格递增、\(x_n>n\)，且 \(f(x_n)>n\)，故两列均趋于正无穷。

但函数不一定趋于正无穷。例如 \(f(x)=x\sin^2x\)（\(x>0\)）：沿 \(2n\pi+\frac\pi2\) 的函数值趋于正无穷，因此每个尾部无上界；沿 \(n\pi\) 的函数值恒为 0，故函数不趋于正无穷。原题的归结原则要求所有趋向正无穷的数列都通过检验。`,
  verification: '已对照华师大第六版印刷第 66 页第 10 题；检查递增选点、尾部无上界以及振荡反例。'
});

Object.assign(window.REVIEW_SOLUTIONS['3.total:exercise:1'], {
  variantSource: '自编。参照华师大第六版第三章总练习第 1 题（印刷第 66 页，PDF 第 79 页）的取整函数，比较不同倍数的取整误差。',
  variant: String.raw`判断 \(\displaystyle\lim_{x\to+\infty}([x]+[2x]-[3x])\) 是否存在，其中方括号表示向下取整。`,
  variantSolution: String.raw`取 \(x_n=n\)，则函数值为 0。另取 \(y_n=n+\frac25\)，则
\[
[y_n]+[2y_n]-[3y_n]=n+2n-(3n+1)=-1.
\]
两列均趋于正无穷，函数值分别恒为 0 和 −1。由归结原则，该极限不存在。`,
  verification: '已对照第三章总练习第 1 题七问；旧练习只改变取整点，新题检查三个取整项在两列上的值。'
});

Object.assign(window.REVIEW_SOLUTIONS['3.total:exercise:2'], {
  variantSource: '自编。参照华师大第六版第三章总练习第 2 题（印刷第 66 页，PDF 第 79 页）的线性渐近式，引入振荡项检验截距极限。',
  variant: String.raw`设 \(f(x)=\sqrt{x^2+x\sin x+1}\)（\(x>0\)）。是否存在实数 a、b，使 \(f(x)-ax-b\to0\)（\(x\to+\infty\)）？`,
  variantSolution: String.raw`因为 \(f(x)^2\ge x^2-x+1>0\)，函数有定义。对正 x 提取平方根中的 \(x^2\)，得到
\[
\frac{f(x)}x=\sqrt{1+\frac{\sin x}x+\frac1{x^2}}\longrightarrow1.
\]
如果所求线性渐近式存在，除以 x 即得 \(a=1\)。但有理化给出
\[
f(x)-x=\frac{\sin x+\frac1x}{\frac{f(x)}x+1}.
\]
沿 \(x_n=2n\pi+\frac\pi2\) 此式趋于 \(\frac12\)，沿 \(y_n=2n\pi+\frac{3\pi}2\) 趋于 \(-\frac12\)，故没有极限，不能找到 b。因此不存在满足要求的 a、b。`,
  verification: '已对照第三章总练习第 2 题三问；旧练习仅改变根式系数，新题核查正根号、斜率及振荡截距。'
});

Object.assign(window.REVIEW_SOLUTIONS['3.total:exercise:3'], {
  variantSource: '自编。参照华师大第六版第三章总练习第 3 题（印刷第 66 页，PDF 第 79 页），比较函数、其平方及带尺度比值的极限。',
  variant: String.raw`构造函数 f，使得 \(f(x)\to0\)、\(\frac{f(x)^2}{|x|}\to1\)（\(x\to0\)），但 \(\frac{f(x)}{\sqrt{|x|}}\) 的双侧极限不存在。`,
  variantSolution: String.raw`取 \(f(x)=\operatorname{sgn}(x)\sqrt{|x|}\)（\(x\ne0\)），并令 \(f(0)=0\)。则 \(|f(x)|=\sqrt{|x|}\to0\)，且当 \(x\ne0\) 时
\[
\frac{f(x)^2}{|x|}=1,\qquad \frac{f(x)}{\sqrt{|x|}}=\operatorname{sgn}(x).
\]
最后一个比值的左、右极限分别为 −1 和 1，所以双侧极限不存在。`,
  verification: '已对照第三章总练习第 3 题两问；原有理／无理分段练习与 §4.1 习题 2(6) 原题相同，现换为平方与带尺度比值的构造题。'
});

Object.assign(window.REVIEW_SOLUTIONS['3.total:exercise:7'], {
  variantSource: '自编。参照华师大第六版第三章总练习第 7 题（印刷第 67 页，PDF 第 80 页），弱化趋近数列的函数值条件。',
  variant: String.raw`设 f 在 \((x_0-\delta,x_0)\) 上递增，且存在该区间内的数列 \(x_n\to x_0\)，使 \(\{f(x_n)\}\) 有上界。证明 f 在 \(x_0\) 处的左极限存在且有限。若只知道 \(\{f(x_n)\}\) 有下界，结论是否仍成立？`,
  variantSolution: String.raw`设对所有 n 有 \(f(x_n)\le C\)。任取区间中的 t，充分大 n 时 \(x_n>t\)，由单调性 \(f(t)\le f(x_n)\le C\)。故值集有上界，记其上确界为 A。任给 \(\varepsilon>0\)，可取区间中 s 使 \(f(s)>A-\varepsilon\)。当 \(s<x<x_0\) 时，\(A-\varepsilon<f(s)\le f(x)\le A\)，因此左极限为有限数 A。

仅有下界不够。例如 \(f(x)=\frac1{x_0-x}\) 在左邻域上递增，取 \(x_n=x_0-\frac1n\) 并去掉不在区间内的前项，则 \(f(x_n)=n\) 有下界，但左极限为正无穷。`,
  verification: '已对照第三章总练习第 7 题；原练习只改左右方向，现检查数列值有上界的较弱条件及仅有下界的反例。'
});

Object.assign(window.REVIEW_SOLUTIONS['3.total:exercise:8'], {
  variantSource: '自编。参照华师大第六版第三章总练习第 8 题（印刷第 67 页，PDF 第 80 页），检验函数方程中极限条件的作用。',
  variant: String.raw`构造正半轴上的非常值函数 f，满足 \(f(2x)=f(x)\)，并判断它在正无穷和在 0 的右侧是否有极限。`,
  variantSolution: String.raw`取 \(f(x)=\sin(2\pi\log_2 x)\)。因为 \(\log_2(2x)=1+\log_2x\)，正弦的周期性保证 \(f(2x)=f(x)\)。

沿 \(x_n=2^n\) 函数值为 0；沿 \(y_n=2^{n+\frac14}\) 函数值为 1。两列均趋于正无穷，所以正无穷处极限不存在。同理将 n 换成 −n，两列都从右趋于 0，函数值仍分别为 0 和 1，故右极限也不存在。`,
  verification: '已对照第三章总练习第 8 题；原练习仅改缩放常数和极限方向，现以对数周期函数说明极限假设不可省略。'
});

Object.assign(window.REVIEW_SOLUTIONS['4.1:example:2'], {
  variantSource: '自编。参照华师大第六版上册 §4.1 例 2（印刷第 69 页，PDF 第 82 页），比较参数变化时的左、右连续性。',
  variant: String.raw`设 \(a,b,c\in\mathbb R\)，令
\[
g(x)=\begin{cases} ax+b,&x<0,\\b,&x=0,\\x^2+c,&x>0.\end{cases}
\]
讨论 g 在 0 处的左、右连续性；若不连续，指出间断点类型。`,
  variantSolution: String.raw`由分段表达式，\(g(0)=b\)，左极限为 b，右极限为 c。故无论 a、b、c 取何实数，g 在 0 左连续；它右连续当且仅当 \(c=b\)。

若 \(c=b\)，两个单侧极限等于点值，故 g 在 0 连续；若 \(c\ne b\)，两个单侧极限有限但不相等，故 0 是跳跃间断点。参数 a 不影响该点两侧的极限。`,
  verification: '已对照华师大 §4.1 例 2；原练习与 §3.1 习题 5 的陈版分段函数重复，新题检查点值、参数条件和间断类型。'
});

Object.assign(window.REVIEW_SOLUTIONS['4.1:example:3'], {
  variantSource: '自编。参照华师大第六版上册 §4.1 例 3 的黎曼函数（印刷第 71 页，PDF 第 84 页），乘以在内部有零点的因子。',
  variant: String.raw`令 R 为本例中的黎曼函数，在 \([0,1]\) 上定义 \(H(x)=(x-\frac12)R(x)\)。确定 H 的全部连续点，端点按区间内单侧连续。`,
  variantSolution: String.raw`由 §3.1 习题 8，R 在区间内趋于任一点时的去心极限为 0，端点从区间内单侧趋近。因为 \(x-\frac12\) 有界，故对每个 \(x_0\in[0,1]\)，H 的相应去心极限也是 0。

无理点以及端点 0、1 处，\(R(x_0)=0\)，所以 H 连续。在有理点 \(x_0=\frac12\) 处，虽然 \(R(\frac12)=\frac12\)，前面的因子为 0，故 \(H(\frac12)=0\)，H 也连续。

对其他既约真分数 \(x_0=\frac pq\)，有 \(R(x_0)=\frac1q>0\) 且 \(x_0-\frac12\ne0\)，所以点值非零，而去心极限为 0，故不连续。全部连续点为 0、1、区间内所有无理数和 \(\frac12\)。`,
  verification: '已对照华师大 §4.1 例 3 和 §3.1 习题 8；旧练习乘以 x 后连续点不变，现检查因子内部零点及端点。'
});

Object.assign(window.REVIEW_SOLUTIONS['2.1:example:4'], {
  variantSource: '自编。参照华师大第六版上册 §2.1 例 4（印刷第 24 页，PDF 第 37 页），将单项几何数列推广为项数随 n 变化的有限尾和。',
  variant: String.raw`设 \(|q|<1\)。利用本例的结果，按数列极限定义证明
\[
\sum_{k=n}^{2n}q^k\longrightarrow0.
\]`,
  variantSolution: String.raw`由三角不等式及有限等比和公式，对每个正整数 n，
\[
\left|\sum_{k=n}^{2n}q^k\right|
\le |q|^n\sum_{j=0}^{n}|q|^j
\le\frac{|q|^n}{1-|q|}.
\]
任给 \(\varepsilon>0\)，由本例 \(|q|^n\to0\)，存在 N，使 \(n>N\) 时 \(|q|^n<(1-|q|)\varepsilon\)。于是上式小于 \(\varepsilon\)，按定义得到所求极限。\(q=0\) 也包含在上述估计中。`,
  verification: '已对照华师大 §2.1 例 4；旧练习是第二章总练习第 2 题中 q=1/3 的特例，现改为有限几何尾和并检查 q=0。'
});

Object.assign(window.REVIEW_SOLUTIONS['4.1:exercise:6'], {
  variantSource: '自编。参照华师大第六版上册习题 4.1 第 6 题（印刷第 72 页，PDF 第 85 页），考察单调函数具有向零点聚集的跳跃点。',
  variant: String.raw`设
\[
f(x)=\begin{cases}
0,&x\le0,\\
\dfrac1{[\frac1x]},&0<x\le1,\\
1,&x>1,
\end{cases}
\]
其中方括号表示向下取整。证明 f 递增，并确定全部间断点及其类型。`,
  variantSolution: String.raw`在 \(0<x\le1\) 上，\([\frac1x]\) 为正整数；随着 x 增大，它不增，因此其倒数不减。再结合其他两段的值，f 在整个实轴递增。

当 \(n\ge2\) 时，\(x=\frac1n\) 附近的左侧有 \([\frac1x]=n\)，右侧有 \([\frac1x]=n-1\)。因此
\[
f\!\left(\frac1n-0\right)=\frac1n,\qquad
f\!\left(\frac1n+0\right)=\frac1{n-1}.
\]
两侧有限极限不同，所以这些点都是跳跃间断点。\(x=1\) 附近两侧函数值都为 1，故连续。

当 \(0<x<\frac12\) 时，\([\frac1x]>\frac1x-1>\frac1{2x}\)，故 \(0<f(x)<2x\)。于是右极限为 0，等于点值，左侧也恒为 0，故 f 在 0 连续。其余点在某个小邻域内处于同一分段且函数值不变，均连续。因此全部间断点恰为 \(\{\frac1n:n=2,3,\ldots\}\)，均为第一类跳跃间断点。`,
  verification: '已对照华师大 §4.1 习题 6；旧练习只对同类取整函数分类，新题核查单调性、各跳跃点与聚点 0。'
});

