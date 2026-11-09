(() => {
  const q=window.REVIEW_SOLUTIONS;
  q['4.2:example:10']={
    type:'proof',
    statement:String.raw`函数 \(f\) 定义在区间 \(I\) 上。证明：\(f\) 在 \(I\) 上一致连续，当且仅当对任意 \(I\) 内的两列 \(\{x_n'\}\)、\(\{x_n''\}\)，只要 \(|x_n'-x_n''|\to0\)，就有 \(|f(x_n')-f(x_n'')|\to0\)。`,
    focus:'一致连续的数列判别法；必要性代入统一 δ，充分性用定义的否定构造两列。',
    reference:'华东师范大学《数学分析》第六版上册 §4.2 例 10，印刷第 78—79 页（PDF 第 91—92 页）。',
    solutionSource:'依据华师大第六版 §4.2 例 10 整理；补充量词顺序及按定义否定选点的细节。',
    solution:String.raw`必要性：设 \(f\) 在 \(I\) 上一致连续。任给 \(\varepsilon>0\)，存在 \(\delta>0\)，使所有 \(u,v\in I\) 满足 \(|u-v|<\delta\) 时，\(|f(u)-f(v)|<\varepsilon\)。对于题设的两列，由 \(|x_n'-x_n''|\to0\)，存在 \(N\)，当 \(n>N\) 时
\[
|x_n'-x_n''|<\delta,
\qquad |f(x_n')-f(x_n'')|<\varepsilon.
\]
由数列极限定义，函数值差趋于 0。

充分性：假设题述数列条件成立，反设 \(f\) 不一致连续。由定义的否定，存在固定的 \(\varepsilon_0>0\)，对每个 \(\delta>0\)，都可找 \(u,v\in I\)，使
\[
|u-v|<\delta,\qquad |f(u)-f(v)|\ge\varepsilon_0.
\]
对每个正整数 \(n\) 取 \(\delta=\frac1n\)，选出相应的 \(x_n',x_n''\in I\)，则
\[
|x_n'-x_n''|<\frac1n\longrightarrow0,
\qquad |f(x_n')-f(x_n'')|\ge\varepsilon_0.
\]
第一式与题设结合应得到函数值差趋于 0，却与第二式矛盾。因此 \(f\) 一致连续。`,
    exam:String.raw`若 \(f\) 一致连续，任给 \(\varepsilon>0\) 取相应统一的 \(\delta>0\)；由 \(|x_n'-x_n''|\to0\)，充分大 \(n\) 时点距小于 \(\delta\)，故函数值差小于 \(\varepsilon\)，从而趋于 0。

反之，若 \(f\) 不一致连续，则存在 \(\varepsilon_0>0\)，对每个 \(n\) 可取 \(x_n',x_n''\in I\)，使
\[
|x_n'-x_n''|<\frac1n,\qquad
|f(x_n')-f(x_n'')|\ge\varepsilon_0.
\]
这与所给数列条件矛盾。故 \(f\) 一致连续。`,
    guidance:'必要性中先按一致连续性固定 δ，再用两列距离趋零使它们最终落进 δ；充分性中反过来，把“每个 δ 都会失败”分别用在 δ 等于各个正整数的倒数上。固定的 ε₀ 不能随 n 改变。',
    chenSource:'陈纪修等《数学分析》第三版上册 §3.4 定理 3.4.5，印刷第 96 页（PDF 第 115 页），与华师大例 10 是相同的数列判别法；陈教材使用反证法证明充分性。',
    chenSolution:String.raw`陈定理的必要性：给定 \(\varepsilon>0\)，由一致连续性取统一的 \(\delta>0\)。若 \(|x_n'-x_n''|\to0\)，则存在 \(N\) 使 \(n>N\) 时 \(|x_n'-x_n''|<\delta\)，于是
\[
|f(x_n')-f(x_n'')|<\varepsilon,
\qquad |f(x_n')-f(x_n'')|\to0.
\]
充分性：反设 \(f\) 不一致连续，则存在 \(\varepsilon_0>0\)，对每个正整数 \(n\) 可按 \(\delta=\frac1n\) 选取两点，使
\[
|x_n'-x_n''|<\frac1n,\qquad
|f(x_n')-f(x_n'')|\ge\varepsilon_0.
\]
两点距离趋零，函数值差却不趋零，与定理假设矛盾，故 \(f\) 一致连续。两个方向均要求两列始终位于同一个定义区间。`,
    variantDeferred:true,
    verification:'华师大印刷 78—79 页例 10 与陈第三版印刷 96 页定理 3.4.5 已目视对照；数列和一致连续性的量词经首轮检查。练习、独立二审待补。'
  };
  q['4.2:example:11']={
    type:'proof',
    statement:String.raw`证明：函数 \(f(x)=\sin\frac1x\) 在 \((0,1)\) 上不一致连续。`,
    focus:'使用一致连续数列判别法的否定，找点距趋零而函数值差不趋零的两列。',
    reference:'华东师范大学《数学分析》第六版上册 §4.2 例 10—11，印刷第 79 页（PDF 第 92 页）。',
    solutionSource:'依据华师大第六版 §4.2 例 11 整理；补充两列都位于开区间以及点距趋零的估计。',
    solution:String.raw`对 \(n=1,2,\ldots\)，取
\[
x_n'=\frac1{2n\pi},\qquad
x_n''=\frac1{2n\pi+\frac\pi2}.
\]
两列均在 \((0,1)\) 内，并且都趋于 0，故
\[
|x_n'-x_n''|\le|x_n'|+|x_n''|\longrightarrow0.
\]
但相应函数值满足
\[
f(x_n')=\sin(2n\pi)=0,\qquad
f(x_n'')=\sin\left(2n\pi+\frac\pi2\right)=1,
\]
因此 \(|f(x_n')-f(x_n'')|=1\) 不趋于 0。根据上一例的一致连续数列判别法，\(f\) 在 \((0,1)\) 上不一致连续。`,
    exam:String.raw`取 \(x_n'=\frac1{2n\pi}\)、\(x_n''=\frac1{2n\pi+\frac\pi2}\)，它们都在 \((0,1)\) 内且点距趋于 0；但
\[
|f(x_n')-f(x_n'')|=|0-1|=1\not\to0.
\]
由一致连续数列判别法，\(f\) 不一致连续。`,
    guidance:'正弦函数有固定的零点与取值为 1 的点；先让倒数分别取这些值，再把它们倒过来作为原自变量。两列都靠近 0，因而互相靠近，但函数值始终差 1。',
    chenSource:'陈纪修等《数学分析》第三版上册 §3.4 定理 3.4.5，印刷第 96 页（PDF 第 115 页），实际证明一致连续数列判别法；陈教材此处的示例是倒数函数，并非本题正弦复合函数。',
    chenSolution:String.raw`陈定理的必要性为：若 \(f\) 在区间上一致连续，且两列点满足 \(|x_n'-x_n''|\to0\)，则必有 \(|f(x_n')-f(x_n'')|\to0\)。其证明是：任给 \(\varepsilon>0\)，先由一致连续性取统一 \(\delta>0\)，再取 \(N\) 使 \(n>N\) 时 \(|x_n'-x_n''|<\delta\)，于是
\[
|f(x_n')-f(x_n'')|<\varepsilon.
\]
华师大本题取主解中两列，使点距趋零但函数值差恒为 1，违反陈定理的必要条件。两列的具体构造来自华师大本例，不误称为陈教材同题。`,
    variantDeferred:true,
    verification:'华师大印刷第 79 页例 11 与陈教材印刷第 96 页数列判别定理已目视核对；两列定义域和恒定函数值差经首轮检查。练习及独立二审待补。'
  };
  q['4.2:example:12']={
    type:'proof',
    statement:String.raw`设区间 \(I_1\) 的右端点 \(c\in I_1\)，区间 \(I_2\) 的左端点 \(c\in I_2\)。若 \(f\) 分别在 \(I_1\)、\(I_2\) 上一致连续，证明 \(f\) 在 \(I=I_1\cup I_2\) 上一致连续；两区间可有界也可无界。`,
    focus:'按两点落在同一区间或分居两区间分类；跨区间时通过共同端点分拆误差。',
    reference:'华东师范大学《数学分析》第六版上册 §4.2 例 12，印刷第 80 页（PDF 第 93 页）。',
    solutionSource:'依据华师大第六版 §4.2 例 12 整理；使用两区间一致连续性分别控制半个误差，补出跨端点距离关系。',
    solution:String.raw`任给 \(\varepsilon>0\)。由 \(f\) 在 \(I_1\)、\(I_2\) 上分别一致连续，存在 \(\delta_1,\delta_2>0\)，使得在相应区间内两点距离小于各自 \(\delta_i\) 时，函数值差小于 \(\frac\varepsilon2\)。取
\[
\delta=\min\{\delta_1,\delta_2\}>0.
\]
任取 \(x,y\in I\) 且 \(|x-y|<\delta\)。若二者属于同一个 \(I_i\)，直接得到 \(|f(x)-f(y)|<\frac\varepsilon2<\varepsilon\)。

若二者分居两个区间，不妨设 \(x\in I_1\)、\(y\in I_2\)，则 \(x\le c\le y\)，故
\[
|x-c|\le|x-y|<\delta\le\delta_1,
\qquad
|y-c|\le|x-y|<\delta\le\delta_2.
\]
由于 \(c\in I_1\cap I_2\)，分别应用两区间的一致连续性，再用三角不等式，
\[
|f(x)-f(y)|\le|f(x)-f(c)|+|f(c)-f(y)|
<\frac\varepsilon2+\frac\varepsilon2=\varepsilon.
\]
对任意两点均成立，故 \(f\) 在 \(I\) 上一致连续。`,
    exam:String.raw`任给 \(\varepsilon>0\)，由两区间上的一致连续性，分别对 \(\frac\varepsilon2\) 取 \(\delta_1,\delta_2>0\)，令 \(\delta=\min\{\delta_1,\delta_2\}\)。若 \(x,y\) 在同一区间且 \(|x-y|<\delta\)，则函数值差小于 \(\varepsilon\)。若 \(x\in I_1\)、\(y\in I_2\)，则 \(x\le c\le y\)，故 \(|x-c|,|y-c|<\delta\)，从而
\[
|f(x)-f(y)|\le|f(x)-f(c)|+|f(c)-f(y)|<\varepsilon.
\]
因此 \(f\) 在并集上一致连续。`,
    guidance:'同一区间的两点可以直接使用已有条件；难点是两点分居两侧。共同端点恰好在两个区间里，可把函数值差拆成到端点的两段，并各分配一半误差。区间是否有界在这个证明中不影响结论。',
    variantDeferred:true,
    verification:'华师大印刷第 80 页例 12 已目视核对；共同端点属于两个区间、两点分类和统一 δ 经首轮检查。尚未确认适合引用的陈教材对应证明；练习与独立二审待补。'
  };
})();
