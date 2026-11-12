window.REVIEW_TOPICS['continuousParam'] = {
  "id": "continuousParam",
  "title": "根据连续性求参数",
  "status": "本专题五题自编，已逐题核对；题目不计入教材原题数。",
  "boundary": "主解使用华师大第六版上册 §4.1 单侧连续性定义、§3.4 第一重要极限与第一章正数实幂的顺序性质，印刷第 68—70、55—56 页；参数条件与定义域要单独检查。",
  "items": [
    {
      "number": 1,
      "title": "单个分段点与一个参数",
      "statement": "设\n\\[\nf(x)=\\begin{cases}\nx^2+1,&x<2,\\\\\na,&x\\ge2.\n\\end{cases}\n\\]\n求 \\(a\\)，使 \\(f\\) 在 \\(x=2\\) 处连续。",
      "solution": "左极限为 \\(\\lim_{x\\to2^-}(x^2+1)=5\\)；右极限与点值均为 \\(a\\)。连续需要左、右极限都等于点值，故 \\(a=5\\)。\n\n反过来，当 \\(a=5\\) 时，两侧极限和 \\(f(2)\\) 都等于 5，条件充分。因此 \\(\\boxed{a=5}\\)。",
      "exam": "\\(f(2-)=5\\)，\\(f(2+)=f(2)=a\\)。连续当且仅当 \\(a=5\\)。",
      "guidance": "在分段点先计算两侧极限，再写出该点实际落在哪一个分支。这里只用改变常数分支即可使三者相等。"
    },
    {
      "number": 2,
      "title": "重要极限与补点",
      "statement": "设\n\\[\nf(x)=\\begin{cases}\n\\dfrac{\\sin 3x}{x},&x\\ne0,\\\\\na,&x=0.\n\\end{cases}\n\\]\n求 \\(a\\)，使 \\(f\\) 在 \\(0\\) 处连续。",
      "solution": "当 \\(x\\to0\\) 且 \\(x\\ne0\\) 时，\n\\[\n\\frac{\\sin 3x}{x}\n=3\\frac{\\sin 3x}{3x}\\longrightarrow3,\n\\]\n其中使用 \\(\\sin t/t\\to1\\)（\\(t\\to0\\)）。所以连续要求 \\(f(0)=a=3\\)。取 \\(a=3\\) 时，极限确实等于点值，因此 \\(\\boxed{a=3}\\)。",
      "exam": "由 \\(\\sin 3x/x=3\\sin 3x/(3x)\\to3\\)，在 0 处连续当且仅当 \\(a=3\\)。",
      "guidance": "分母为 x，而重要极限要求分母与正弦的自变量相同。先凑出 3x，再把多出的系数 3 放在外面。"
    },
    {
      "number": 3,
      "title": "左右分支和两个参数",
      "statement": "设\n\\[\nf(x)=\\begin{cases}\nax+1,&x<1,\\\\\nb,&x=1,\\\\\nx^2+2,&x>1.\n\\end{cases}\n\\]\n求所有 \\(a,b\\)，使 \\(f\\) 在 \\(1\\) 处连续。",
      "solution": "在 \\(x=1\\) 的左极限是 \\(a+1\\)，右极限是 \\(3\\)，点值是 \\(b\\)。连续当且仅当\n\\[\na+1=3=b.\n\\]\n所以 \\(a=2,\\ b=3\\)。将这两个值代回，左右极限和点值确实相等，故全部解为 \\(\\boxed{a=2,\\ b=3}\\)。",
      "exam": "连续要求 \\(f(1-)=a+1=f(1+)=3=f(1)=b\\)，故 \\(\\boxed{a=2,\\ b=3}\\)。",
      "guidance": "这里点值由单独的分支给出，不能只让左、右极限相等，还必须让它们与 b 相等。"
    },
    {
      "number": 4,
      "title": "根式有理化与参数范围",
      "statement": "设 \\(a,b\\in\\mathbb R\\)，在 0 的某个足够小的邻域内定义\n\\[\nf(x)=\\begin{cases}\n\\dfrac{\\sqrt{1+ax}-1}{x},&x\\ne0,\\\\\nb,&x=0.\n\\end{cases}\n\\]\n求 \\(a,b\\) 应满足的条件，使 \\(f\\) 在 0 处连续。",
      "solution": "任意固定 \\(a\\in\\mathbb R\\)，当 \\(|x|<1/[2(|a|+1)]\\) 时，\\(|ax|<1/2\\)，所以根号内为正，函数在 0 附近有定义。\n\n又有\n\\[\n\\left|\\sqrt{1+ax}-1\\right|\n=\\frac{|ax|}{\\sqrt{1+ax}+1}\n\\le |a|\\,|x|\\longrightarrow0,\n\\]\n故根号趋于 1。对 \\(x\\ne0\\)，有理化得\n\\[\n\\frac{\\sqrt{1+ax}-1}{x}\n=\\frac{a}{\\sqrt{1+ax}+1}\n\\longrightarrow\\frac a2.\n\\]\n这一公式也适用于 \\(a=0\\)。因此连续当且仅当点值 \\(b=a/2\\)，其中 \\(a\\) 可取任意实数：\n\\[\n\\boxed{a\\in\\mathbb R,\\qquad b=a/2}.\n\\]",
      "exam": "对任意固定 \\(a\\)，\\(x\\) 在 0 附近时根号内为正。有理化得 \\((\\sqrt{1+ax}-1)/x=a/(\\sqrt{1+ax}+1)\\to a/2\\)，故连续当且仅当 \\(\\boxed{b=a/2}\\)，其中 \\(a\\in\\mathbb R\\)。",
      "guidance": "先确认任意固定的 a 都允许找到一个足够小的邻域，再有理化根号差；不能因为式中有 a，就未检查地假设它必须为正。"
    },
    {
      "number": 5,
      "title": "振荡、幂次和参数分类",
      "statement": "设 \\(a,b,\\alpha\\in\\mathbb R\\)，\n\\[\nf(x)=\\begin{cases}\nax,&x<0,\\\\\nb,&x=0,\\\\\nx^\\alpha\\sin(1/x),&x>0.\n\\end{cases}\n\\]\n求所有参数，使 \\(f\\) 在 0 处连续。",
      "solution": "左极限 \\(\\lim_{x\\to0^-}ax=0\\)，所以连续时必须有 \\(b=0\\)。还需分类讨论右极限。\n\n若 \\(\\alpha>0\\)，因为\n\\[\n|x^\\alpha\\sin(1/x)|\\le x^\\alpha,\n\\]\n而任给 \\(\\varepsilon>0\\)，当 \\(0<x<\\varepsilon^{1/\\alpha}\\) 时，\\(x^\\alpha<\\varepsilon\\)，所以右极限为 0。此时只要 \\(b=0\\)，左右极限与点值相等，\\(a\\) 可任取实数。\n\n若 \\(\\alpha=0\\)，取\n\\[\nx_n=\\frac1{2n\\pi+\\pi/2},\\qquad\ny_n=\\frac1{2n\\pi+3\\pi/2}.\n\\]\n两列都从右侧趋于 0，而函数值分别为 1 和 −1，右极限不存在，无法通过改变 \\(b\\) 使其连续。\n\n若 \\(\\alpha<0\\)，沿上述 \\(x_n\\) 有 \\(\\sin(1/x_n)=1\\)，于是 \\(f(x_n)=x_n^\\alpha=1/x_n^{-\\alpha}\\to+\\infty\\)，右侧不存在有限极限，同样无法连续。\n\n综上全部参数为\n\\[\n\\boxed{\\alpha>0,\\qquad b=0,\\qquad a\\in\\mathbb R}.\n\\]",
      "exam": "左极限为 0。若 \\(\\alpha>0\\)，由 \\(|x^\\alpha\\sin(1/x)|\\le x^\\alpha\\to0\\)，连续当且仅当 \\(b=0\\)，\\(a\\) 任意。若 \\(\\alpha=0\\)，可取两列使正弦分别为 1、−1，右极限不存在；若 \\(\\alpha<0\\)，沿正弦为 1 的一列有函数值趋于 \\(+\\infty\\)，亦不连续。因此答案为 \\(\\alpha>0,\\ b=0,\\ a\\in\\mathbb R\\)。",
      "guidance": "先看振荡前面的系数是否能够压到 0。只有正幂可以用夹逼消除振荡；零次幂保留振荡，负幂会沿合适数列放大。单独讨论这些情形，才能说明答案既必要又充分。"
    }
  ]
};

// 区分 §4.1 例 2 的线性／二次分段练习，加入约分和自由参数关系。
Object.assign(window.REVIEW_TOPICS.continuousParam.items[2], {
  title:'分段消去与参数关系',
  statement:String.raw`设 \(a,b,c\in\mathbb R\)，
\[
f(x)=\begin{cases}
\dfrac{x^2-1}{x-1},&x<1,\\
c,&x=1,\\
ax+b,&x>1.
\end{cases}
\]
求所有参数，使 \(f\) 在 \(x=1\) 处连续。`,
  solution:String.raw`当 \(x<1\) 时 \(x\ne1\)，故可约去非零因子 \(x-1\)：
\[
\frac{x^2-1}{x-1}=x+1\longrightarrow2\qquad(x\to1^-).
\]
右支为 \(ax+b\)，右极限为 \(a+b\)，点值为 \(c\)。连续当且仅当三者相等，即
\[
2=a+b=c.
\]
因此 \(a\) 可任取实数，其余参数必须为 \(b=2-a\)、\(c=2\)。反过来代入这些值，两侧极限和点值均为 2，确实连续。`,
  exam:String.raw`左侧约分得 \(x+1\to2\)，右极限为 \(a+b\)，点值为 \(c\)。连续当且仅当 \(a+b=c=2\)，即 \(\boxed{a\in\mathbb R,\ b=2-a,\ c=2}\)。`,
  guidance:'先在左分支约去非零因子，求出确定的左极限；再令右极限和单独给出的点值都等于它。注意一个参数可以自由取值。'
});

// 与 §3.3 例 1 的幂次振荡练习区分：改为自变量幂次导致的三种右侧行为。
Object.assign(window.REVIEW_TOPICS.continuousParam.items[4], {
  title:'自变量幂次与连续性分类',
  statement:String.raw`设 \(a,b,\alpha\in\mathbb R\)，
\[
f(x)=\begin{cases}
a+x,&x<0,\\
b,&x=0,\\
\sin(x^\alpha),&x>0.
\end{cases}
\]
求所有参数，使 \(f\) 在 0 处连续。`,
  solution:String.raw`左极限为 \(a\)，点值为 \(b\)。对右极限按 \(\alpha\) 分类：

若 \(\alpha>0\)，则 \(x^\alpha\to0\)，由 \(|\sin t|\le|t|\) 得右极限为 0，连续当且仅当 \(a=b=0\)。

若 \(\alpha=0\)，对 \(x>0\) 有 \(x^\alpha=1\)，右侧函数恒为 \(\sin1\)，连续当且仅当 \(a=b=\sin1\)。

若 \(\alpha<0\)，取
\[
x_n=(2n\pi+\tfrac\pi2)^{\frac1\alpha},\qquad
y_n=(2n\pi+\tfrac{3\pi}2)^{\frac1\alpha}.
\]
因为 \(\frac1\alpha<0\)，两列均从右侧趋于 0，而对应函数值分别为 1 与 \(-1\)，故右极限不存在，不能连续。

综上，全部参数是
\[
\boxed{\alpha>0,\ a=b=0\quad\text{或}\quad
\alpha=0,\ a=b=\sin1}.
\]`,
  exam:String.raw`左极限为 \(a\)、点值为 \(b\)。当 \(\alpha>0\) 时，右极限为 0，故 \(a=b=0\)；当 \(\alpha=0\) 时，右极限为 \(\sin1\)，故 \(a=b=\sin1\)。当 \(\alpha<0\) 时，取 \((2n\pi+\frac\pi2)^{\frac1\alpha}\) 和 \((2n\pi+\frac{3\pi}2)^{\frac1\alpha}\) 分别使右支取值为 1 和 \(-1\)，右极限不存在。上述两种参数情况即为全部答案。`,
  guidance:'先求左极限和点值，再按 α 正、零、负分类。α 为负时，右支中的自变量趋于正无穷，构造两列让正弦分别取 1 和 −1。'
});
