(() => {
  const q=window.REVIEW_SOLUTIONS;
  const source='参考文件名标注第五版的《教材习题详解》上册习题 4.2，印刷第 169—170 页（PDF 第 62—63 页）；资料封面版次仍待独立确认。';
  q['4.2:exercise:9']={
    type:'proof',
    statement:String.raw`证明：若 \(f\) 在 \([a,b]\) 上连续，且对任何 \(x\in[a,b]\) 都有 \(f(x)\ne0\)，则 \(f\) 在 \([a,b]\) 上恒正或恒负。`,
    focus:'用零点存在定理反证连续且无零点的函数不能变号。',
    reference:'华师大第六版上册 §4.2 零点存在定理与习题第 9 题，印刷第 75、81 页（PDF 第 88、94 页）。',
    solutionSource:source+' 第 9 题完整题面已对照一致。',
    solution:String.raw`任取 \(x_0\in[a,b]\)，由题设 \(f(x_0)\ne0\)。若 \(f(x_0)>0\)，反设存在 \(x_1\in[a,b]\) 使 \(f(x_1)<0\)。函数在以 \(x_0,x_1\) 为端点的闭区间上连续，且两端函数值异号，由零点定理存在介于两点之间的 \(\xi\)，使 \(f(\xi)=0\)，与题设矛盾。

因此 \(f(x_0)>0\) 时全区间均为正。若 \(f(x_0)<0\)，对 \(-f\) 同理可知全区间均为负。故 \(f\) 恒正或恒负。`,
    exam:String.raw`若 \(f\) 不恒号，则存在 \(x_1,x_2\in[a,b]\) 使 \(f(x_1)>0>f(x_2)\)。由连续性与零点定理，二者之间存在 \(\xi\) 使 \(f(\xi)=0\)，与题设矛盾。故 \(f\) 恒正或恒负。`,
    guidance:'“既有正值又有负值”会迫使连续曲线经过零；把恒号的结论取反后，直接在这两个点之间使用零点定理。无零点是必要条件，不能省略。',
    variantDeferred:true,
    verification:'六版原题与标注五版答案第 9 题完整条件已首轮对照；零点定理的区间和无零点条件经检查。练习及独立二审待补。'
  };
  q['4.2:exercise:10']={
    type:'proof',
    statement:'证明：任一实系数奇次方程至少有一个实根。',
    focus:'奇次多项式两端函数值最终异号，结合连续性与零点定理。',
    reference:'华师大第六版上册 §4.2 零点存在定理与习题第 10 题，印刷第 75、81 页（PDF 第 88、94 页）。',
    solutionSource:source+' 第 10 题题面与结论已对照一致，补充分首项系数符号的说明。',
    solution:String.raw`设方程左侧为实系数多项式
\[
P(x)=a_0x^{2m+1}+a_1x^{2m}+\cdots+a_{2m+1},\qquad a_0\ne0.
\]
若 \(a_0<0\)，将方程两边乘以 \(-1\) 不改变实根，故可设 \(a_0>0\)。由多项式最高次项，
\[
\frac{P(x)}{x^{2m+1}}
=a_0+\frac{a_1}{x}+\cdots+\frac{a_{2m+1}}{x^{2m+1}}
\longrightarrow a_0>0\quad(|x|\to\infty).
\]
因此可取足够大的 \(R>0\)，使两侧的上述比值均为正。由于次数 \(2m+1\) 为奇数，
\[
P(-R)<0<P(R).
\]
\(P\) 在 \([-R,R]\) 连续，由零点定理存在 \(\xi\in(-R,R)\) 使 \(P(\xi)=0\)，故方程至少有一个实根。`,
    exam:String.raw`设奇次多项式 \(P(x)=a_0x^{2m+1}+\cdots+a_{2m+1}\)，\(a_0\ne0\)。乘以 \(-1\) 如有必要，可设 \(a_0>0\)。因
\[
\frac{P(x)}{x^{2m+1}}\to a_0>0\quad(|x|\to\infty),
\]
可取 \(R>0\) 使 \(P(-R)<0<P(R)\)。由 \(P\) 连续及零点定理，存在 \(\xi\in(-R,R)\) 使 \(P(\xi)=0\)。`,
    guidance:'奇次幂在正、负无穷方向符号相反，最高次项在足够远处决定多项式符号。找到两个有限端点异号后，才能将零点定理用于相应闭区间；定理只保证至少一个根。',
    variantDeferred:true,
    verification:'六版第 10 题与标注五版答案第 10 题已对照；首项系数符号、奇次性和有限端点经首轮检查。练习及独立二审待补。'
  };
  q['4.2:exercise:11']={
    type:'proof',
    statement:String.raw`（1）试用一致连续的定义证明：若 \(f,g\) 都在区间 \(I\) 上一致连续，则 \(f\pm g\) 也在 \(I\) 上一致连续。
（2）请举例说明：\(f,g\) 都在区间 \(I\) 上一致连续，但 \(fg\) 或 \(\frac fg\)（\(g\ne0\)）不一定在 \(I\) 上一致连续。`,
    focus:'一致连续定义的误差分配；乘积和商分别用满足条件的反例。',
    reference:'华师大第六版上册 §4.2 一致连续定义和例 9、11，习题第 11 题，印刷第 78—79、81 页（PDF 第 91—92、94 页）。',
    solutionSource:source+' 仅部分对应：第五版资料第 11 题只证明和的一致连续性；六版还要求差及乘积、商的反例，以下自行补全，不能标为完整同题原解。',
    solution:String.raw`（1）任给 \(\varepsilon>0\)。由 \(f,g\) 分别一致连续，存在 \(\delta_f,\delta_g>0\)，当 \(x,y\in I\) 且距离分别小于这两个数时，有
\[
|f(x)-f(y)|<\frac\varepsilon2,\qquad
|g(x)-g(y)|<\frac\varepsilon2.
\]
取 \(\delta=\min\{\delta_f,\delta_g\}\)。只要 \(|x-y|<\delta\)，由三角不等式，
\[
|(f\pm g)(x)-(f\pm g)(y)|
\le|f(x)-f(y)|+|g(x)-g(y)|<\varepsilon.
\]
故 \(f+g\) 和 \(f-g\) 均一致连续。

（2）乘积反例：在 \(I=\mathbb R\) 上取 \(f(x)=g(x)=x\)。两者一致连续，但 \(fg=x^2\) 不一致连续：取
\[
x_n=n,\qquad y_n=n+\frac1n,
\]
则 \(|x_n-y_n|=\frac1n\to0\)，而
\[
|x_n^2-y_n^2|=2+\frac1{n^2}\longrightarrow2\ne0.
\]
由数列判别法，乘积不一致连续。

商的反例：在 \(I=(0,1)\) 上取 \(f(x)=1\)、\(g(x)=x\)。两函数一致连续且 \(g\ne0\)，但 \(\frac fg=\frac1x\) 在 \((0,1)\) 上不一致连续，证明见本节例 9。`,
    exam:String.raw`（1）对给定 \(\varepsilon>0\)，分别取 \(\delta_f,\delta_g\)，使点距小时两函数值差均小于 \(\frac\varepsilon2\)。令 \(\delta=\min\{\delta_f,\delta_g\}\)，由三角不等式得 \(f\pm g\) 一致连续。

（2）在 \(\mathbb R\) 上取 \(f=g=x\)，则乘积 \(x^2\) 不一致连续；例如 \(n\) 与 \(n+\frac1n\) 的点距趋零而平方差趋于 2。在 \((0,1)\) 上取 \(f=1,g=x\)，两者一致连续且 \(g\ne0\)，但商 \(\frac1x\) 不一致连续。`,
    guidance:'加减时给每个误差分一半，再取两个距离阈值的较小值。乘积可能因函数值本身无界而放大，商还可能因分母靠近零而放大；两个反例要分别验证原函数一致连续及分母非零。',
    variantDeferred:true,
    verification:'六版第 11 题两小问与标注五版资料印刷 170 页比较：资料仅覆盖第（1）问的和，差与第（2）问由本站补写；已检查两个反例的区间、函数值和分母。练习及独立二审待补。'
  };
  q['4.2:exercise:12']={
    type:'proof',
    statement:String.raw`证明：\(f(x)=\sqrt x\) 在 \([0,+\infty)\) 上一致连续。`,
    focus:'先按教材提示拼接闭区间与远端区间；也可用平方根差的统一估计。',
    reference:'华师大第六版上册 §4.2 一致连续定理、例 12 与习题第 12 题，印刷第 80—81 页（PDF 第 93—94 页）。',
    solutionSource:source+' 第 12 题题面一致；先按原题提示及参考解分区间，再写完整的直接估计。',
    solution:String.raw`按提示写成 \([0,+\infty)=[0,1]\cup[1,+\infty)\)。\(\sqrt x\) 在闭区间 \([0,1]\) 连续，故由一致连续定理在该区间一致连续。

对任意 \(x,y\ge1\)，有理化得到
\[
|\sqrt x-\sqrt y|
=\frac{|x-y|}{\sqrt x+\sqrt y}\le\frac{|x-y|}{2}.
\]
任给 \(\varepsilon>0\)，在 \([1,+\infty)\) 取 \(\delta=2\varepsilon\) 即可，因此它在该区间也一致连续。两个区间共同包含端点 1，由本节例 12 的拼接结论，\(\sqrt x\) 在整个 \([0,+\infty)\) 一致连续。

方法二（直接估计）：对任意 \(x,y\ge0\)，
\[
|x-y|=|\sqrt x-\sqrt y|(\sqrt x+\sqrt y)
\ge|\sqrt x-\sqrt y|^2.
\]
任给 \(\varepsilon>0\)，取 \(\delta=\varepsilon^2\)。若 \(|x-y|<\delta\)，则
\[
|\sqrt x-\sqrt y|^2<\varepsilon^2,
\qquad |\sqrt x-\sqrt y|<\varepsilon.
\]
由定义得证；该估计在 \(x=y=0\) 时也成立，不需要除以零。`,
    exam:String.raw`在 \([0,1]\) 上，由闭区间连续函数的一致连续定理，\(\sqrt x\) 一致连续。对 \(x,y\ge1\)，
\[
|\sqrt x-\sqrt y|\le\frac{|x-y|}{2},
\]
故它在 \([1,+\infty)\) 也一致连续。两区间共同包含 1，由相邻区间拼接结论，\(\sqrt x\) 在 \([0,+\infty)\) 一致连续。`,
    guidance:'区间无界，不能直接使用闭区间定理。按提示分成靠近 0 的闭区间和远端；远端有理化后分母有统一正下界。直接法则把根式差的平方压到 \(|x-y|\) 以下，一次控制整个区间。',
    variantDeferred:true,
    verification:'六版第 12 题与标注五版答案第 12 题及两种方法已对照；检查端点 0、拼接点 1、直接法零分母情形。练习及独立二审待补。'
  };
})();
