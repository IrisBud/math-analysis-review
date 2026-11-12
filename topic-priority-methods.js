// 本节方法优先；原有对数及后续方法保留供进一步学习。
const priorityOneinf = [
  {
    "solution": "当 \\(n\\ge1\\) 时底数为正。令 \\(u_n=\\frac2n\\)，则 \\(u_n\\to0\\)，且 \\(nu_n=2\\)。由第二个基本极限的推广 \\((1+u_n)^n\\to e^{\\lim nu_n}\\)，所求为 \\(e^2\\)。也可写作 \\(\\bigl((1+\\frac2n)^{\\frac n2}\\bigr)^2\\)，内层趋于 \\(e\\)。",
    "exam": "令 \\(u_n=\\frac2n\\to0\\)，有 \\(nu_n=2\\)。由第二基本极限的推广，\\((1+u_n)^n\\to e^2\\)。"
  },
  {
    "solution": "在 0 的充分小邻域内 \\(1+x\\) 与 \\(1+3x\\) 均为正。先凑出 1：\\[\\frac{1+3x}{1+x}=1+u,\\qquad u=\\frac{2x}{1+x}\\to0.\\]指数为 \\(v=\\frac1x\\)，且 \\(uv=\\frac2{1+x}\\to2\\)。由第二基本极限的推广，原极限为 \\(e^2\\)。",
    "exam": "充分靠近 0 时底数为正。令 \\(u=\\frac{2x}{1+x}\\to0\\)，\\(v=\\frac1x\\)，则 \\(uv\\to2\\)，原极限为 \\(e^2\\)。"
  },
  {
    "solution": "在 0 的充分小邻域内 \\(\\cos x>0\\)。令 \\(u=\\cos x-1\\to0\\)、\\(v=\\frac1{x^2}\\)。由半角公式和正弦基本极限，\\[uv=\\frac{\\cos x-1}{x^2}=-\\frac12\\left(\\frac{\\sin\\frac x2}{\\frac x2}\\right)^2\\longrightarrow-\\frac12.\\]故由第二基本极限的推广，原极限为 \\(e^{-\\frac12}\\)。",
    "exam": "近 0 时 \\(\\cos x>0\\)，令 \\(u=\\cos x-1\\)、\\(v=\\frac1{x^2}\\)，则 \\(u\\to0\\)、\\(uv\\to-\\frac12\\)，故极限为 \\(e^{-\\frac12}\\)。"
  },
  {
    "solution": "当 \\(n\\ge2\\) 时底数为正。对偶数 n，底数增量为 \\(u=\\frac1n\\)，且 \\(nu=1\\)，故偶数子列趋于 \\(e\\)。对奇数 n，增量为 \\(u=-\\frac1n\\)，且 \\(nu=-1\\)，故奇数子列趋于 \\(e^{-1}\\)。两个子列极限不同，原数列发散。有限个前项不影响结论。",
    "exam": "偶数 n 时 \\(nu=1\\)，子列趋于 \\(e\\)；奇数 n 时 \\(nu=-1\\)，子列趋于 \\(e^{-1}\\)。两子列极限不同，原数列发散。"
  },
  {
    "solution": "对固定 \\(a,b\\)，充分接近 0 时底数为正。令 \\(u=ax+bx^2\\)。若 \\(a=0\\)，则 \\(\\frac{u}{x^2}=b\\)，由第二基本极限的推广，原式趋于 \\(e^b\\)；\\(b=0\\) 时原式恒为 1，也符合这一结果。若 \\(a\\ne0\\)，在充分小的去心邻域中 \\(u=x(a+bx)\\ne0\\)，且\\[\\frac{u}{x^2}=\\frac ax+b.\\]将原式写为 \\(\\bigl((1+u)^{\\frac1u}\\bigr)^{\\frac{u}{x^2}}\\)。内层趋于 \\(e>2\\)，故充分靠近时大于 2；指数在左右两侧趋于符号相反的无穷。一侧原式大于趋于正无穷的 \\(2^{\\frac{u}{x^2}}\\)，另一侧介于 0 与趋于 0 的 \\(2^{\\frac{u}{x^2}}\\) 之间，因此双侧有限极限不存在。综上当且仅当 \\(a=0\\) 时双侧有限极限存在，值为 \\(e^b\\)。",
    "exam": "若 \\(a=0\\)，底数增量与指数的积恒为 \\(b\\)，极限为 \\(e^b\\)。若 \\(a\\ne0\\)，将原式写成 \\(\\bigl((1+u)^{\\frac1u}\\bigr)^{\\frac{u}{x^2}}\\)，其中 \\(u=ax+bx^2\\)。内层趋于 \\(e>2\\)，指数 \\(\\frac ax+b\\) 在两侧趋于符号相反的无穷，所以双侧有限极限不存在。"
  }
];
window.REVIEW_TOPICS.oneinf.boundary = '主解使用华师大第六版上册 §3.4 两个重要极限及其推广，印刷第 55—58 页（PDF 第 68—71 页）；对数法和其他后续方法另作补充并注明范围。';
const priorityOneinfGuidance = [
  '把底数写成 1 加一个趋于 0 的量，再计算该增量和指数的乘积。',
  '先计算分式减去 1，找出真正趋于 0 的增量；同时确认底数在所讨论邻域内为正。',
  '先用半角公式计算余弦与 1 的差，再把这个增量乘以指数。',
  '分别看偶数项和奇数项：底数增量的符号不同，分别计算增量与指数的乘积。',
  '先按线性系数是否为 0 分类；若不为 0，再分左右方向研究指数，并检查底数正性。'
];
window.REVIEW_TOPICS.oneinf.items.forEach((item, i) => {
  item.solution = priorityOneinf[i].solution + '\n\n补充／后续内容 · 对数法（§4.3）：\n' + item.solution;
  item.exam = priorityOneinf[i].exam;
  item.guidance = priorityOneinfGuidance[i];
});
// 原 (1+2/n)^n 是教材 3.4 习题 2(6) 的直接特例；加入底数、指数扰动。
Object.assign(window.REVIEW_TOPICS.oneinf.items[0], {
  title:'底数和指数同时扰动',
  statement:String.raw`求 \(\displaystyle\lim_{n\to\infty}\left(1+\frac1{n+\sqrt n}\right)^{n+(-1)^n\sqrt n}\)。`,
  solution:String.raw`令 \(u_n=\frac1{n+\sqrt n}\)，\(v_n=n+(-1)^n\sqrt n\)。底数始终为正，且 \(u_n\to0\)。因为
\[
v_nu_n=\frac{n+(-1)^n\sqrt n}{n+\sqrt n}
=\frac{1+\frac{(-1)^n}{\sqrt n}}{1+\frac1{\sqrt n}}\longrightarrow1,
\]
又 \(v_n\ge n-\sqrt n\to+\infty\)，由第二个基本极限的推广，所求为 \(\boxed e\)。交替项除以 n 后趋于 0，故不会产生不同的奇偶子列极限。`,
  exam:String.raw`取 \(u_n=\frac1{n+\sqrt n}\)、\(v_n=n+(-1)^n\sqrt n\)，则 \(u_n\to0\)、\(v_nu_n\to1\)，底数为正。由第二个基本极限的推广，原极限为 \(e\)。`,
  guidance:'先把底数写成 1 加增量，再把增量乘以完整指数；把分子、分母同时除以 n，检查交替扰动是否消失。'
});
// 原一次式比值与教材习题 3.4 第 2 题（4）仅系数不同，改为根式底数。
Object.assign(window.REVIEW_TOPICS.oneinf.items[1], {
  title:'根式底数的二次增量',
  statement:String.raw`求 \(\displaystyle\lim_{x\to0}\left(\frac{\sqrt{1+2x}}{1+x}\right)^{\frac1{x^2}}\)。`,
  solution:String.raw`当 \(|x|<\frac14\) 时，根号内与分母均为正，底数也为正且趋于 1。令
\[u=\frac{\sqrt{1+2x}}{1+x}-1.\]
将根号差有理化：
\[
u=\frac{\sqrt{1+2x}-(1+x)}{1+x}
=-\frac{x^2}{(1+x)(\sqrt{1+2x}+1+x)}.
\]
因此 \(u\to0\)，且
\[\frac{u}{x^2}\longrightarrow-\frac12.\]
由第二个基本极限的推广，所求为 \(\boxed{e^{-\frac12}}\)。以上推导同时适用于正、负两侧。`,
  exam:String.raw`近 0 时底数为正，令 \(u=\frac{\sqrt{1+2x}}{1+x}-1\)。有理化得
\[\frac{u}{x^2}=-\frac1{(1+x)(\sqrt{1+2x}+1+x)}\to-\frac12.\]
又 \(u\to0\)，由第二个基本极限的推广，极限为 \(e^{-\frac12}\)。`,
  guidance:'先对整个底数减 1；分子是根号差，有理化后再与指数相乘。不要把两个一阶等价式相减。'
});
window.REVIEW_TOPICS.oneinf.items[0].examVariant = {
  label: '23-24期中考试T6改编题',
  content: String.raw`试卷题面：求 \(\displaystyle\lim_{n\to\infty}\left(\frac{n+2024}{n+2023}\right)^n\)。

解：底数可写为 \(1+\frac1{n+2023}\)。令 \(u_n=\frac1{n+2023}\)，则 \(u_n\to0\)，且 \(nu_n=\frac n{n+2023}\to1\)。由第二个基本极限的推广，原极限为 \(\boxed{e}\)。`
};
window.REVIEW_TOPICS.oneinf.items[2].examVariant = {
  label: '25-26期中考试T11改编题',
  content: String.raw`试卷题面：计算 \(\displaystyle\lim_{x\to\infty}\left(\cos\frac1x\right)^{x^2}\)。

解：令 \(t=\frac1x\)。当 \(x\to\infty\)（即 \(|x|\to\infty\)）时，\(t\to0\)，原式化为 \((\cos t)^{\frac1{t^2}}\)。本专题题目的双侧极限已存在，所以无论 \(x\) 趋于正无穷还是负无穷，原极限均为 \(\boxed{e^{-1/2}}\)。`
};

