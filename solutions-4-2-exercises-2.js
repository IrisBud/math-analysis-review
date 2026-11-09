(() => {
  const q=window.REVIEW_SOLUTIONS;
  const source='参考文件名标注第五版的《教材习题详解》上册习题 4.2，印刷第 169 页（PDF 第 62 页）；已与华师大第六版完整题面对照，资料封面版次仍待独立确认。';
  q['4.2:exercise:5']={
    type:'proof',
    statement:String.raw`设 \(f(x)=\sin x\)，
\[
g(x)=\begin{cases}x-\pi,&x\le0,\\x+\pi,&x>0.\end{cases}
\]
证明：复合函数 \(f\circ g\) 在 \(x=0\) 处连续，但 \(g\) 在 \(x=0\) 处不连续。`,
    focus:'复合函数的连续性不能反推出内层函数连续；通过分段代入检查点值与左右极限。',
    reference:'华师大第六版上册 §4.1 连续性定义与 §4.2 复合函数，习题 4.2 第 5 题，印刷第 81 页（PDF 第 94 页）。',
    solutionSource:source,
    solution:String.raw`由正弦函数的周期性，对 \(x\le0\) 与 \(x>0\) 分别有
\[
\sin(x-\pi)=-\sin x,\qquad
\sin(x+\pi)=-\sin x.
\]
因此两个分支合并为
\[
(f\circ g)(x)=-\sin x\qquad(x\in\mathbb R).
\]
正弦函数在 0 处连续，故 \(f\circ g\) 在 0 处连续。

另一方面，
\[
\lim_{x\to0^-}g(x)=-\pi,\qquad
\lim_{x\to0^+}g(x)=\pi.
\]
左右极限不相等，所以 \(g\) 在 0 处不连续。这里虽然内层有跳跃，但两个对应值经过正弦函数后都变为 0。`,
    exam:String.raw`由 \(\sin(x-\pi)=\sin(x+\pi)=-\sin x\)，得 \(f\circ g=-\sin x\)，故在 0 连续。又
\[
\lim_{x\to0^-}g(x)=-\pi\ne\pi=\lim_{x\to0^+}g(x),
\]
所以 \(g\) 在 0 不连续。`,
    guidance:'先分别把两个分支代入外层函数，再观察正弦的周期性能否把它们化成同一式。对内层则单独比较左右极限；复合后连续并不自动消除内层本身的跳跃。',
    variantDeferred:true,
    verification:'华师大六版印刷 81 页及标注五版答案印刷 169 页对应；分支、点值和两侧极限经首轮检查。练习及独立二审待补。'
  };
  q['4.2:exercise:6']={
    type:'proof',
    statement:String.raw`设 \(f\) 在 \([a,+\infty)\) 上连续，且 \(\lim_{x\to+\infty}f(x)\) 存在。证明：\(f\) 在 \([a,+\infty)\) 上有界。又问：\(f\) 在该区间上必有最大值或最小值吗？`,
    focus:'有限区间与无穷远尾部拼接有界；分清“至少有一个最值”和“两个最值都存在”。',
    reference:'华师大第六版上册 §4.2 闭区间有界与最值定理、习题 4.2 第 6 题，印刷第 74、81 页（PDF 第 87、94 页）。',
    solutionSource:source+' 答案正文分别举例说明不一定同时取得最大值和最小值，并在归纳中指出至少取得其中一个；以下补全后一结论的证明。',
    solution:String.raw`设有限极限为 \(L\)。取 \(\varepsilon=1\)，存在 \(A>a\)，使 \(x\ge A\) 时
\[
|f(x)-L|<1,\qquad |f(x)|<|L|+1.
\]
另一方面，\(f\) 在闭区间 \([a,A]\) 上连续，故有界。合并闭区间与尾部，得 \(f\) 在 \([a,+\infty)\) 上有界。

下面证明它至少取得最大值或最小值中的一个。记
\[
M=\sup_{x\ge a}f(x),\qquad m=\inf_{x\ge a}f(x).
\]
由于 \(f(x)\to L\)，有 \(m\le L\le M\)。

若 \(M>L\)，取 \(\varepsilon=\frac{M-L}{2}>0\)。存在 \(B>a\)，使 \(x\ge B\) 时
\[
f(x)<L+\varepsilon=\frac{L+M}{2}<M.
\]
由上确界性质，存在某个 \(x_1\ge a\) 使 \(f(x_1)>\frac{L+M}{2}\)，因此 \(x_1<B\)。在紧区间 \([a,B]\) 上，\(f\) 取得最大值 \(M_B\)，且 \(M_B\ge f(x_1)>\frac{L+M}{2}\)。尾部所有值都小于该数，所以 \(M_B\) 就是全区间的最大值。

若 \(M=L\) 且 \(m<L\)，对 \(-f\) 应用上面的论证，可知 \(f\) 取得最小值。若 \(M=m=L\)，则 \(f\) 恒等于 \(L\)，最大值和最小值都取得。因此答案是：至少取得一个最值。

但不一定两个都取得。例如 \(f(x)=\frac1x\) 在 \([1,+\infty)\) 上连续并趋于 0，有最大值 1，却无最小值；\(f(x)=-\frac1x\) 有最小值 \(-1\)，却无最大值。`,
    exam:String.raw`设 \(f(x)\to L\)。尾部由极限的局部有界性有界，某个闭区间 \([a,A]\) 上由连续性有界，故全区间有界。

记上、下确界为 \(M,m\)，则 \(m\le L\le M\)。若 \(M>L\)，充分远处 \(f(x)<\frac{L+M}{2}\)，而由上确界性质某点的函数值大于该数；故全区间最大值在某个闭区间上取得。若 \(M=L\)、\(m<L\)，对 \(-f\) 同理得最小值；若 \(M=m=L\)，则 \(f\equiv L\)。故至少取得最大值或最小值之一。

两者不一定都取得：\(\frac1x\) 在 \([1,+\infty)\) 有最大值而无最小值，\(-\frac1x\) 有最小值而无最大值。`,
    guidance:'先把无限区间分成一个闭区间和一个足够远的尾部：前者由连续性控制，后者由极限控制。题目的“最大值或最小值”应先辨认成至少一个；若上确界比尾部极限大，取得接近上确界的值的点就被限制在有限闭区间内。',
    variantDeferred:true,
    verification:'华师大六版印刷第 81 页与标注五版答案印刷第 169 页对照；参考资料归纳结论“至少一个最值”已补证，两个反例只说明不一定两者都取得。练习和独立二审待补。'
  };
  q['4.2:exercise:7']={
    type:'proof',
    statement:String.raw`若对任何充分小的 \(\varepsilon>0\)，\(f\) 在 \([a+\varepsilon,b-\varepsilon]\) 上连续，能否由此推出 \(f\) 在 \((a,b)\) 上连续？`,
    focus:'开区间内任一点都可包含在某个较小闭区间的内部；注意“充分小”。',
    reference:'华师大第六版上册 §4.1 点的连续性、§4.2 习题第 7 题，印刷第 81 页（PDF 第 94 页）。',
    solutionSource:source,
    solution:String.raw`可以。任取 \(x_0\in(a,b)\)。由题设，存在 \(\eta>0\)，使所有充分小于 \(\eta\) 的正 \(\varepsilon\) 对应的闭区间上 \(f\) 连续。选择
\[
0<\varepsilon<\min\left\{\eta,\frac{x_0-a}{2},\frac{b-x_0}{2}\right\}.
\]
则
\[
a+\varepsilon<x_0<b-\varepsilon.
\]
因此 \(x_0\) 是题设闭区间的内点；在该闭区间上的连续性就给出 \(f\) 在 \(x_0\) 的连续性。由于 \(x_0\) 是 \((a,b)\) 内任意点，\(f\) 在整个开区间连续。`,
    exam:String.raw`可以。任取 \(x_0\in(a,b)\)，选择充分小的正 \(\varepsilon\) 使
\[
\varepsilon<\min\left\{\frac{x_0-a}{2},\frac{b-x_0}{2}\right\},
\]
并满足题设的“充分小”范围。则 \(x_0\in(a+\varepsilon,b-\varepsilon)\)，由题设 \(f\) 在 \(x_0\) 连续。\(x_0\) 任意，故 \(f\) 在 \((a,b)\) 连续。`,
    guidance:'先固定开区间里的一个点，再让闭区间两端的收缩量小于它到两个端点的距离。这样该点落在某个已知连续的闭区间内部，不需要一次选一个闭区间覆盖整个开区间。',
    variantDeferred:true,
    verification:'华师大六版印刷第 81 页与标注五版答案印刷第 169 页对照；充分小范围及内点条件经首轮检查。练习和独立二审待补。'
  };
  q['4.2:exercise:8']={
    type:'calculation',
    statement:String.raw`求极限：
（1）\(\displaystyle\lim_{x\to\frac\pi4}(\pi-x)\tan x\)；
（2）\(\displaystyle\lim_{x\to1^+}\frac{x\sqrt{1+2x}-\sqrt{x^2-1}}{x+1}\)。`,
    focus:'连续函数四则运算及根式的单侧定义域；计算前检查分母非零。',
    reference:'华师大第六版上册 §4.2 连续函数运算与习题 4.2 第 8 题，印刷第 73、81 页（PDF 第 86、94 页）。',
    solutionSource:source,
    solution:String.raw`（1）\(\cos\frac\pi4=\frac{\sqrt2}2\ne0\)，所以 \(\tan x\) 在 \(\frac\pi4\) 的邻域连续。由连续函数的积，
\[
\lim_{x\to\frac\pi4}(\pi-x)\tan x
=\left(\pi-\frac\pi4\right)\tan\frac\pi4
=\boxed{\frac{3\pi}{4}}.
\]

（2）在 \(x\to1^+\) 时，\(x^2-1\ge0\)，根式有定义；各组成函数在这一侧连续，且分母趋于 \(2\ne0\)。所以
\[
\lim_{x\to1^+}\frac{x\sqrt{1+2x}-\sqrt{x^2-1}}{x+1}
=\frac{1\cdot\sqrt3-0}{2}
=\boxed{\frac{\sqrt3}{2}}.
\]`,
    exam:String.raw`（1）\(\tan x\) 在 \(\frac\pi4\) 连续，故极限为 \((\pi-\frac\pi4)\tan\frac\pi4=\frac{3\pi}{4}\)。

（2）各根式在右侧有定义，且分母趋于 2，故由连续性及商法则，极限为 \(\frac{\sqrt3}{2}\)。`,
    guidance:'可直接代入之前，先检查函数是否在所趋向的一侧有定义、分母极限是否非零。第二问中的 \(\sqrt{x^2-1}\) 决定要按题目给出的右侧趋近处理。',
    variantDeferred:true,
    verification:'华师大六版印刷第 81 页两个小问与标注五版答案印刷第 169 页对照；第一问切线分母、第二问单侧根式及分母经首轮检查。练习和独立二审待补。'
  };
})();
