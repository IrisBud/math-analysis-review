(() => {
  const q=window.REVIEW_SOLUTIONS;
  q['4.2:example:8']={
    type:'proof',
    statement:String.raw`证明：\(f(x)=ax+b\) 在 \((-\infty,+\infty)\) 上一致连续，其中 \(a,b\) 为给定实数。`,
    focus:'一致连续的定义；选择只依赖 ε 和固定系数、适用于整个区间的同一个 δ。',
    reference:'华东师范大学《数学分析》第六版上册 §4.2 一致连续定义和例 8，印刷第 78 页（PDF 第 91 页）。',
    solutionSource:'按华师大第六版 §4.2 例 8 的定义证明整理；补充 a=0 和阈值与点的位置无关的说明。',
    solution:String.raw`任给 \(\varepsilon>0\)，取
\[
\delta=\frac{\varepsilon}{|a|+1}>0.
\]
对任意 \(x',x''\in\mathbb R\)，只要 \(|x'-x''|<\delta\)，就有
\[
\begin{aligned}
|f(x')-f(x'')|
&=|a(x'-x'')|=|a|\,|x'-x''|\\
&<\frac{|a|}{|a|+1}\varepsilon\le\varepsilon.
\end{aligned}
\]
这里选取的 \(\delta\) 与两点的位置无关，且当 \(a=0\) 时仍有效。由一致连续定义，\(f\) 在 \(\mathbb R\) 上一致连续。`,
    exam:String.raw`任给 \(\varepsilon>0\)，取 \(\delta=\frac{\varepsilon}{|a|+1}\)。任取 \(x',x''\in\mathbb R\)，若 \(|x'-x''|<\delta\)，则
\[
|f(x')-f(x'')|=|a||x'-x''|<\frac{|a|}{|a|+1}\varepsilon\le\varepsilon.
\]
故 \(f\) 在 \(\mathbb R\) 上一致连续。`,
    guidance:'先计算任意两点的函数值差，发现它至多是两点距离的固定倍数。于是可以先由误差要求反推一个统一的距离；分母写成 \(|a|+1\) 还可同时处理斜率为 0 的情况。',
    chenSource:'陈纪修等《数学分析》第三版上册 §3.4 例 3.4.3，印刷第 95 页（PDF 第 114 页），实际证明正弦函数在全实轴一致连续；与本题函数不同，均用统一的两点误差估计。',
    chenSolution:String.raw`陈例对任意实数 \(u,v\)，由和差化积及 \(|\sin t|\le|t|\) 得
\[
|\sin u-\sin v|
=2\left|\cos\frac{u+v}{2}\sin\frac{u-v}{2}\right|
\le|u-v|.
\]
任给 \(\varepsilon>0\)，取 \(\delta=\varepsilon\)。任意 \(u,v\in\mathbb R\) 满足 \(|u-v|<\delta\) 时，
\[
|\sin u-\sin v|\le|u-v|<\varepsilon.
\]
因此正弦函数在全实轴一致连续。与华师大例 8 的共同点是：函数值差可由点距的固定倍数统一控制；这两道题的函数不同。`,
    variantDeferred:true,
    verification:'华师大印刷第 78 页例 8 与陈版印刷第 95 页例 3.4.3 已目视核对；统一 δ 与 a=0 经首轮检查。练习及独立二审待补。'
  };
  q['4.2:example:9']={
    type:'proof',
    statement:String.raw`证明：\(f(x)=\frac1x\) 在 \((0,1)\) 上不一致连续，尽管它在该区间上每一点连续。`,
    focus:'一致连续定义的否定；固定一个正误差，再对任意 δ 构造区间内的两个点。',
    reference:'华东师范大学《数学分析》第六版上册 §4.2 例 9，印刷第 78 页（PDF 第 91 页）。',
    solutionSource:'依据华师大第六版 §4.2 例 9 整理；将“任意 δ”下的取点写成统一公式，补足点均在开区间和固定误差的检查。',
    solution:String.raw`函数 \(f(x)=\frac1x\) 在 \((0,1)\) 内各点连续。下面用一致连续定义的否定证明它不一致连续。

固定 \(\varepsilon_0=1\)。任给 \(\delta>0\)，令
\[
d=\min\left\{\frac\delta2,\frac14\right\},\qquad
x'=d,\quad x''=\frac d2.
\]
于是 \(x',x''\in(0,1)\)，并且
\[
|x'-x''|=\frac d2<\delta,
\qquad
|f(x')-f(x'')|=\left|\frac1d-\frac2d\right|=\frac1d\ge4>\varepsilon_0.
\]
因此对这个固定的 \(\varepsilon_0\)，无论 \(\delta\) 取多小，都能找到距离小于 \(\delta\) 而函数值相差至少 \(\varepsilon_0\) 的两点。由定义的否定，\(f\) 在 \((0,1)\) 上不一致连续。`,
    exam:String.raw`取 \(\varepsilon_0=1\)。任给 \(\delta>0\)，令 \(d=\min\{\frac\delta2,\frac14\}\)，取 \(x'=d\)、\(x''=\frac d2\)。则两点属于 \((0,1)\)，且
\[
|x'-x''|=\frac d2<\delta,\qquad
|f(x')-f(x'')|=\frac1d\ge4>1.
\]
由一致连续定义的否定，\(f\) 不一致连续。`,
    guidance:'否定一致连续时，不能让固定误差随 δ 改变。倒数在 0 附近增长很快，所以把两个点都放在 0 附近并让一个是另一个的一半：它们相距很近，倒数之差却不会小。',
    chenSource:'陈纪修等《数学分析》第三版上册 §3.4 例 3.4.4，印刷第 95—96 页（PDF 第 114—115 页），与本例讨论相同函数与区间；陈教材随后在印刷第 96 页用一致连续数列判别法再作证明。',
    chenSolution:String.raw`陈教材在后续定理 3.4.5 后给出这一例的两列证明。取 \(n\ge2\)，令
\[
x_n'=\frac1{2n},\qquad x_n''=\frac1n.
\]
两列均在 \((0,1)\) 内，并且
\[
|x_n'-x_n''|=\frac1{2n}\longrightarrow0,
\qquad
|f(x_n')-f(x_n'')|=|2n-n|=n\longrightarrow+\infty.
\]
如果 \(f\) 一致连续，那么任意两列的距离趋于 0 时，相应函数值差也应趋于 0；这里不满足，故不一致连续。这个数列判别法是华师大紧接着的例 10，故在本例主解中仍使用定义。`,
    variantDeferred:true,
    verification:'华师大印刷第 78 页例 9 与陈第三版印刷 95—96 页同函数例题已目视核对；取点、固定误差和后续数列法的知识边界经首轮检查。练习及独立二审待补。'
  };
})();
