(() => {
  const q=window.REVIEW_SOLUTIONS;
  const source='参考文件名标注第五版的《教材习题详解》上册习题 4.2，印刷第 167—168 页（PDF 第 60—61 页）；已逐项核对第六版题面，资料封面版次仍待独立确认。';
  q['4.2:exercise:1']={
    type:'classification',
    statement:String.raw`讨论复合函数 \(f\circ g\) 与 \(g\circ f\) 的连续性，设：
（1）\(f(x)=\operatorname{sgn}x\)，\(g(x)=1+x^2\)；
（2）\(f(x)=\operatorname{sgn}x\)，\(g(x)=(1-x^2)x\)。`,
    focus:'分别计算两种复合顺序，按符号分段并检查分段点的左右极限与点值。',
    reference:'华东师范大学《数学分析》第六版上册 §4.1 间断点与 §4.2 复合连续，习题 4.2 第 1 题，印刷第 81 页（PDF 第 94 页）。',
    solutionSource:source,
    solution:String.raw`记号约定：\(\operatorname{sgn}x\) 在正、零、负数处分别为 \(1,0,-1\)。

（1）因为 \(g(x)=1+x^2>0\)，所以
\[
(f\circ g)(x)=\operatorname{sgn}(1+x^2)=1,
\]
故 \(f\circ g\) 在 \(\mathbb R\) 上连续。反过来，
\[
(g\circ f)(x)=1+(\operatorname{sgn}x)^2
=\begin{cases}1,&x=0,\\2,&x\ne0.\end{cases}
\]
它在 \(x\ne0\) 处连续，而在 0 处极限为 2、函数值为 1，故 0 是可去间断点。

（2）先分解 \(g(x)=x(1-x)(1+x)\)。按三个零点分段检查符号，
\[
(f\circ g)(x)=\begin{cases}
1,&x<-1\text{ 或 }0<x<1,\\
0,&x=-1,0,1,\\
-1,&-1<x<0\text{ 或 }x>1.
\end{cases}
\]
在每个开分段上它为常数，因而连续；在 \(-1,0,1\) 处左右极限分别不同，三个点都是跳跃间断点。

另一复合顺序满足
\[
(g\circ f)(x)=\bigl(1-(\operatorname{sgn}x)^2\bigr)\operatorname{sgn}x=0.
\]
这里 \(x=0\) 与 \(x\ne0\) 均可直接代入检查，因此 \(g\circ f\) 在全实轴连续。`,
    exam:String.raw`（1）\(g(x)>0\)，故 \(f\circ g\equiv1\)，处处连续；而
\[
(g\circ f)(x)=\begin{cases}1,&x=0,\\2,&x\ne0,\end{cases}
\]
故在 0 可去间断，其余处连续。

（2）\(g(x)=x(1-x)(1+x)\) 在 \(-1,0,1\) 分别变号，故 \(f\circ g=\operatorname{sgn}g(x)\) 在这三点均跳跃间断，其余处连续。又 \((g\circ f)(x)=(1-(\operatorname{sgn}x)^2)\operatorname{sgn}x\equiv0\)，故处处连续。`,
    guidance:'复合顺序不能交换，先分别写出“先输入谁、再代入谁”。符号函数的间断行为取决于内层是否过零、如何变号；第二问先找三个零点并标出各区间符号，再检验零点左右两侧。',
    variantDeferred:true,
    verification:'华师大六版印刷第 81 页两小问与标注五版答案印刷第 167—168 页逐项对照；分段符号、三处左右极限及复合顺序经首轮检查。练习及独立二审待补。'
  };
  q['4.2:exercise:2']={
    type:'proof',
    statement:String.raw`设 \(f,g\) 在 \(x_0\) 处连续，证明：
（1）若 \(f(x_0)>g(x_0)\)，则存在 \(U(x_0;\delta)\)，在该邻域上 \(f(x)>g(x)\)；
（2）若在某个去心邻域 \(U^\circ(x_0;\delta)\) 上有 \(f(x)>g(x)\)，则 \(f(x_0)\ge g(x_0)\)。`,
    focus:'差函数的连续性与局部保号；极限保序只能保证非严格不等式。',
    reference:'华师大第六版上册 §4.2 定理 4.3—4.4 与习题 4.2 第 2 题，印刷第 73、81 页（PDF 第 86、94 页）。',
    solutionSource:source,
    solution:String.raw`令 \(h(x)=f(x)-g(x)\)。由连续函数四则运算，\(h\) 在 \(x_0\) 连续。

（1）\(h(x_0)>0\)。取 \(\varepsilon=\frac{h(x_0)}2>0\)，由连续性存在 \(\delta>0\)，当 \(|x-x_0|<\delta\) 时，
\[
|h(x)-h(x_0)|<\frac{h(x_0)}2,
\qquad h(x)>\frac{h(x_0)}2>0.
\]
故整个邻域内 \(f(x)>g(x)\)。

（2）去心邻域中 \(h(x)>0\)，而 \(h\) 在 \(x_0\) 连续，所以由极限的保序性，
\[
h(x_0)=\lim_{x\to x_0}h(x)\ge0,
\qquad f(x_0)\ge g(x_0).
\]
不能把结论加强成严格不等式：例如 \(f(x)=(x-x_0)^2\)、\(g(x)=0\)，去心处严格大于，点值却相等。`,
    exam:String.raw`设 \(h=f-g\)，则 \(h\) 在 \(x_0\) 连续。（1）\(h(x_0)>0\)，由局部保号性存在 \(\delta>0\)，使 \(|x-x_0|<\delta\) 时 \(h(x)>0\)。

（2）去心邻域中 \(h(x)>0\)，由连续性及极限保序性，\(h(x_0)=\lim_{x\to x_0}h(x)\ge0\)。因此两项结论成立。`,
    guidance:'把两个函数的比较改写成一个差函数的符号问题。第一问从点上的严格正值推出附近仍为正；第二问向中心取极限时严格正数可能趋于零，所以只能保证大于或等于。',
    variantDeferred:true,
    verification:'华师大六版印刷第 81 页两小问与标注五版答案印刷第 168 页对照；局部保号、去心条件及非严格结论经首轮检查。练习及独立二审待补。'
  };
  q['4.2:exercise:3']={
    type:'proof',
    statement:String.raw`设 \(f,g\) 在区间 \(I\) 上连续，记 \(F(x)=\max\{f(x),g(x)\}\)、\(G(x)=\min\{f(x),g(x)\}\)。证明 \(F,G\) 都在 \(I\) 上连续。`,
    focus:'最大最小值公式、绝对值连续性和连续函数的四则运算。',
    reference:'华师大第六版上册第一章总练习第 1 题与 §4.2 四则运算；习题 4.2 第 3 题，印刷第 81 页（PDF 第 94 页）。',
    solutionSource:source,
    solution:String.raw`对任意实数 \(u,v\)，
\[
\max\{u,v\}=\frac{u+v+|u-v|}{2},\qquad
\min\{u,v\}=\frac{u+v-|u-v|}{2}.
\]
因此对 \(x\in I\)，
\[
F(x)=\frac{f(x)+g(x)+|f(x)-g(x)|}{2},\qquad
G(x)=\frac{f(x)+g(x)-|f(x)-g(x)|}{2}.
\]
因为 \(f,g\) 在 \(I\) 连续，差函数 \(f-g\) 连续，其绝对值也连续；再由连续函数的和、差及常数倍的连续性，\(F,G\) 均在 \(I\) 连续。该公式在 \(f(x)=g(x)\) 的点也成立，无须另行假设两函数的大小次序。`,
    exam:String.raw`由最大最小值公式，
\[
F=\frac{f+g+|f-g|}{2},\qquad
G=\frac{f+g-|f-g|}{2}.
\]
\(f,g\) 连续，故 \(f-g\)、\(|f-g|\) 及上述和差均连续，所以 \(F,G\) 在 \(I\) 连续。`,
    guidance:'直接按 \(f(x)\) 与 \(g(x)\) 的大小分段时，交点附近可能来回改变次序。最大最小值公式把分段统一为绝对值；绝对值连续性处理了大小相等的点。',
    variantDeferred:true,
    verification:'华师大六版印刷第 81 页与标注五版答案印刷第 168 页对照；相等点、绝对值和公式经首轮检查。练习及独立二审待补。'
  };
  q['4.2:exercise:4']={
    type:'proof',
    statement:String.raw`设 \(f\) 为 \(\mathbb R\) 上的连续函数，常数 \(c>0\)，记
\[
F(x)=\begin{cases}-c,&f(x)<-c,\\f(x),&|f(x)|\le c,\\c,&f(x)>c.\end{cases}
\]
证明 \(F\) 在 \(\mathbb R\) 上连续。`,
    focus:'将截断函数改写成绝对值或最大最小值，自动处理两个接合值。',
    reference:'华师大第六版上册 §4.2 连续函数四则运算与习题 4.2 第 4 题，印刷第 73、81 页（PDF 第 86、94 页）。',
    solutionSource:source+' 以下展开答案的绝对值方法，并完整列出最大最小值形式。',
    solution:String.raw`对任意实数 \(t\)，分别检查 \(t<-c\)、\(-c\le t\le c\)、\(t>c\) 可得
\[
\frac{|t+c|-|t-c|}{2}
=\begin{cases}-c,&t<-c,\\t,&|t|\le c,\\c,&t>c.\end{cases}
\]
因此
\[
F(x)=\frac{|f(x)+c|-|f(x)-c|}{2}.
\]
\(f\) 连续，故 \(f+c\)、\(f-c\) 连续，二者绝对值也连续；由四则运算，\(F\) 在 \(\mathbb R\) 连续。

方法二（最大最小值）：对每个 \(x\)，逐段可验证
\[
F(x)=\max\{-c,\min\{c,f(x)\}\}.
\]
常函数 \(-c,c\) 和 \(f\) 均连续，先用上一题的结论得到 \(\min\{c,f(x)\}\) 连续，再得 \(F\) 连续。`,
    exam:String.raw`由分段定义可验证
\[
F(x)=\frac{|f(x)+c|-|f(x)-c|}{2}.
\]
\(f\) 与常函数连续，绝对值、和差及常数倍保持连续，故 \(F\) 在 \(\mathbb R\) 上连续。`,
    guidance:'分段函数的切换条件是 \(f(x)\) 是否越过两个阈值。把“压在区间内”的操作改写为绝对值或先取最小、再取最大，就能一次处理两个接合值，不必遗漏边界等号。',
    variantDeferred:true,
    verification:'华师大六版印刷第 81 页与标注五版答案印刷第 168 页对照；检查三段公式、两个边界与两种方法。练习及独立二审待补。'
  };
})();
