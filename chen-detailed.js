// Expanded explanations based on the cited Chen textbook proofs.
(() => {
  const q=window.REVIEW_SOLUTIONS;
  const notes={
    '2.3:example:5': String.raw`陈教材定理 2.4.5 从有界数列出发，证明它有收敛子列。设
\[
a_1\le x_n\le b_1\quad(n=1,2,\ldots).
\]
把 \([a_1,b_1]\) 二等分，至少一个半区间含有无穷多个下标对应的数列项；选其中一个记为 \([a_2,b_2]\)。继续二等分，每次保留含无穷多个数列项的一个半区间，得到
\[
[a_{k+1},b_{k+1}]\subseteq[a_k,b_k],\qquad
b_k-a_k=\frac{b_1-a_1}{2^{k-1}}\longrightarrow0.
\]
由闭区间套定理，存在 \(\xi\) 使
\[
a_k\longrightarrow\xi,\qquad b_k\longrightarrow\xi.
\]
先取 \(n_1\) 使 \(x_{n_1}\in[a_1,b_1]\)。若已选 \(n_k\)，因为 \([a_{k+1},b_{k+1}]\) 内有无穷多个数列项，可以选 \(n_{k+1}>n_k\) 使 \(x_{n_{k+1}}\) 落在该区间。因此
\[
a_k\le x_{n_k}\le b_k,\qquad k=1,2,\ldots,
\]
由迫敛性得到 \(x_{n_k}\to\xi\)。

这里有界性是陈定理的条件；华师大例题不假设有界，要求构造的是单调子列，不能直接把本定理的结论当作原题证明。`,
    '2.total:exercise:3': String.raw`设 \(b_n\) 严格递增且 \(b_n\to+\infty\)，记差商为
\[
d_n=\frac{a_n-a_{n-1}}{b_n-b_{n-1}}.
\]
陈教材先证 \(d_n\to0\)。任给 \(\varepsilon>0\)，取 \(N\) 使 \(b_N>0\)，并且当 \(k>N\) 时
\[
|a_k-a_{k-1}|<\varepsilon(b_k-b_{k-1}).
\]
对 \(k=N+1,\ldots,n\) 求和，利用三角不等式和望远镜求和，得
\[
|a_n-a_N|<\varepsilon(b_n-b_N).
\]
由于 \(b_n>0\)，两边除以 \(b_n\)：
\[
\left|\frac{a_n}{b_n}\right|
\le\frac{|a_N|}{b_n}+\varepsilon\left(1-\frac{b_N}{b_n}\right)
<\frac{|a_N|}{b_n}+\varepsilon.
\]
固定 \(N\) 后，第一项趋于 0。由于 \(\varepsilon\) 任意，得到 \(\frac{a_n}{b_n}\to0\)。

若 \(d_n\to A\) 为有限数，令 \(c_n=a_n-Ab_n\)，则
\[
\frac{c_n-c_{n-1}}{b_n-b_{n-1}}=d_n-A\longrightarrow0.
\]
由刚证的零极限情形，\(\frac{c_n}{b_n}\to0\)，从而 \(\frac{a_n}{b_n}=A+\frac{c_n}{b_n}\to A\)。

若 \(d_n\to+\infty\)，充分大 \(n\) 时 \(a_n-a_{n-1}>b_n-b_{n-1}>0\)。累加可知 \(a_n\to+\infty\) 且最终严格递增；交换两列并使用已证的零极限情形，
\[
\frac{b_n}{a_n}\longrightarrow0,
\qquad \frac{a_n}{b_n}\longrightarrow+\infty.
\]
若 \(d_n\to-\infty\)，把以上正无穷结论用于 \(-a_n\)，得到 \(\frac{a_n}{b_n}\to-\infty\)。这些正负无穷的细节按陈教材思路补写。`,
    '4.1:example:3': String.raw`陈教材先在 \([0,1]\) 证明黎曼函数的极限为 0。任给 \(\varepsilon>0\)，取
\[
N=\left\lfloor\frac1\varepsilon\right\rfloor.
\]
区间中既约分母不超过 \(N\) 的有理数只有有限个，记为集合 \(E_N\)。去掉可能等于 \(x_0\) 的点，若余下非空，取
\[
\delta=\min\{|r-x_0|:r\in E_N,\ r\ne x_0\}>0;
\]
若余下为空，则任取正数 \(\delta\)。对定义域内满足 \(0<|x-x_0|<\delta\) 的点，分两种情况：

若 \(x\) 是无理数，则 \(R(x)=0\)；若 \(x\) 是既约分数且分母为 \(q\)，则 \(x\notin E_N\)，因此 \(q>N\)，并有
\[
|R(x)-0|=\frac1q\le\frac1{N+1}<\varepsilon.
\]
由定义，\(\lim_{x\to x_0}R(x)=0\)，在区间端点分别理解为右极限与左极限。与陈版点值比较：无理点的值为 0，因而连续；有理点的值为正，因而不连续。

华师大在 \([0,1]\) 的端点取值另作规定，故端点连续性必须按华师大的题设判断，不能照搬陈版整数点的点值。`,
    '4.1:exercise:6': String.raw`陈教材先考虑开区间 \((a,b)\) 上单调递增的 \(f\)，任取 \(x_0\in(a,b)\)。左侧值集非空，且以 \(f(x_0)\) 为上界；右侧值集非空，且以 \(f(x_0)\) 为下界。令
\[
A=\sup\{f(x):a<x<x_0\},\qquad
B=\inf\{f(x):x_0<x<b\}.
\]
由单调性，\(A\le f(x_0)\le B\)。

任给 \(\varepsilon>0\)，由上确界性质，可取 \(s\in(a,x_0)\) 使 \(A-\varepsilon<f(s)\)。当 \(s<x<x_0\) 时，
\[
A-\varepsilon<f(s)\le f(x)\le A,
\]
所以 \(\lim_{x\to x_0^-}f(x)=A\)。

同理，由下确界性质可取 \(t\in(x_0,b)\) 使 \(f(t)<B+\varepsilon\)。当 \(x_0<x<t\) 时，
\[
B\le f(x)\le f(t)<B+\varepsilon,
\]
所以 \(\lim_{x\to x_0^+}f(x)=B\)。

若 \(A=B\)，夹在中间的 \(f(x_0)\) 与它们相等，函数在该点连续；因此不连续时 \(A<B\)，左右极限都有限，属于华师大所说的第一类间断点。单调递减可对 \(-f\) 应用相同证明；端点情形按华师大习题的单侧定义另行判断。`
  };
  const exponential=String.raw`陈教材例 3.1.13 证明
\[
\lim_{t\to\infty}\left(1+\frac1t\right)^t=e.
\]
先令 \(t\to+\infty\)，取整数 \(n=[t]\)，则 \(n\le t<n+1\)。因为各底数都大于 1，指数函数关于底数和指数的单调性给出
\[
\left(1+\frac1{n+1}\right)^n
<\left(1+\frac1t\right)^t
<\left(1+\frac1n\right)^{n+1}.
\]
两端利用数列极限 \((1+\frac1n)^n\to e\)：
\[
\left(1+\frac1{n+1}\right)^n
=\frac{(1+\frac1{n+1})^{n+1}}{1+\frac1{n+1}}\longrightarrow e,
\qquad
\left(1+\frac1n\right)^{n+1}
=\left(1+\frac1n\right)^n\left(1+\frac1n\right)\longrightarrow e.
\]
由迫敛性，正无穷侧极限为 \(e\)。

再令 \(t=-y\)，则 \(y\to+\infty\)，充分大时 \(y>1\)，且
\[
\left(1+\frac1t\right)^t
=\left(1-\frac1y\right)^{-y}
=\left(1+\frac1{y-1}\right)^{y-1}
 \left(1+\frac1{y-1}\right)\longrightarrow e.
\]
因此双侧无穷处的极限均为 \(e\)。再以 \(t=\frac1u\) 代换，就得到
\[
\lim_{u\to0}(1+u)^{\frac1u}=e,
\]
其中 \(u\) 足够靠近 0 时底数为正。陈例是本题所用基础极限的证明，并非华师大这道例题的同一题面。`;
  for(const id of ['3.4:example:3','3.4:example:4','3.4:example:5']) notes[id]=exponential;
  const sine=String.raw`陈教材例 3.1.4 由几何关系得到：当 \(0<t<\frac\pi2\) 时，
\[
\sin t<t<\tan t,\qquad
\cos t<\frac{\sin t}t<1.
\]
因为 \(\frac{\sin t}t\) 与 \(\cos t\) 都是偶函数，后一组不等式也适用于负的 \(t\)。由 \(|\sin u|\le|u|\) 和半角公式，
\[
0\le1-\cos t=2\sin^2\frac t2\le\frac{t^2}{2}\longrightarrow0.
\]
所以 \(\cos t\to1\)；由迫敛性，
\[
\lim_{t\to0}\frac{\sin t}t=1.
\]
这给出了华师大题目使用的基础极限；对具体题目还应依照各自的代换方式计算。`;
  for(const id of ['3.4:example:1','3.4:example:2']) notes[id]=sine;
  const threshold=String.raw`陈教材例 3.1.10 证明
\[
\lim_{x\to1^-}\frac{x^2}{x-1}=-\infty.
\]
任给 \(G>0\)，取
\[
\delta=\min\left\{\frac12,\frac1{4G}\right\}>0.
\]
当 \(0<1-x<\delta\) 时，\(\frac12<x<1\)，因而 \(x^2>\frac14\)。又由于 \(x-1<0\)，除以它时不等号反向，所以
\[
\frac{x^2}{x-1}
<\frac1{4(x-1)}
=-\frac1{4(1-x)}
<-\frac1{4\delta}\le-G.
\]
因此依左侧无穷极限的定义，陈例结论成立。这里必须保留负分母造成的不等号反向；该例和华师大原题题面不同，相关之处是先获得局部正下界，再根据给定阈值选择邻域。`;
  for(const id of ['3.5:example:3','3.5:example:5']) notes[id]=threshold;
  const expzero=String.raw`陈教材例 3.1.9 证明
\[
\lim_{x\to-\infty}e^x=0.
\]
任给 \(\varepsilon>0\)，令 \(\eta=\min\{\varepsilon,\frac12\}\)，并取
\[
M=\ln\frac1\eta>0.
\]
只要 \(x<-M\)，由指数函数的单调性，
\[
0<|e^x-0|=e^x<e^{-M}=\eta\le\varepsilon.
\]
这对任意正误差都成立，故由定义得证。取较小的 \(\eta\) 是为同时处理 \(\varepsilon\ge1\) 的情况；陈例与华师大题目函数不同，共同方法是从目标误差反求阈值。`;
  for(const id of ['3.1:example:1','3.1:example:2','3.5:example:4']) notes[id]=expzero;
  notes['3.1:example:7']=String.raw`陈教材例 3.1.2 证明 \(x\to2\) 时 \(x^2\to4\)。任给 \(\varepsilon>0\)，取
\[
\delta=\min\left\{1,\frac\varepsilon5\right\}.
\]
若 \(0<|x-2|<\delta\)，则 \(1<x<3\)，从而 \(|x+2|<5\)。于是
\[
|x^2-4|=|x-2||x+2|<5\delta\le\varepsilon.
\]
由定义可得陈例结论。华师大本例也通过平方差控制另一因子，但它包含根式且在端点趋近，因此还需处理根式定义域、单侧方向，并按 \(\varepsilon^2\) 选取邻域；两题并不相同。`;
  notes['3.5:example:6']=String.raw`陈教材例 5.4.14 考虑另一条曲线
\[
g(x)=\frac{(x-1)^2}{3(x+1)}.
\]
在两侧无穷远处，把分子分母分别除以相应的最高次幂：
\[
k=\lim_{x\to\pm\infty}\frac{g(x)}x
=\lim_{x\to\pm\infty}\frac{(1-\frac1x)^2}{3(1+\frac1x)}
=\frac13.
\]
再通分求截距：
\[
b=\lim_{x\to\pm\infty}\left(g(x)-\frac x3\right)
=\lim_{x\to\pm\infty}\frac{-3x+1}{3(x+1)}=-1.
\]
因此斜渐近线是 \(y=\frac x3-1\)。

有限点处，分母只在 \(x=-1\) 为零，分子趋于 4。结合 \(x+1\) 两侧的符号，
\[
\lim_{x\to-1^-}g(x)=-\infty,\qquad
\lim_{x\to-1^+}g(x)=+\infty.
\]
故 \(x=-1\) 是垂直渐近线；其余有限点分母非零，不产生垂直渐近线。两书的函数不同，上述是陈例的完整计算；华师大原题的渐近线需按其自身分母和余项计算。`;
  notes['3.2:example:1']=exponential+String.raw`

华师大本例使用取整不等式控制另一个表达式；陈例与其关联在于先用整数部分建立夹逼。以上重要极限是华师大 §3.4 的后续内容，不作为本题主解。`;
  notes['3.2:example:2']=String.raw`陈教材定理 3.1.4 证明商法则。设 \(f(x)\to A\)、\(g(x)\to B\ne0\)。任给 \(\varepsilon>0\)，先取
\[
\eta=\min\left\{\frac{|B|}{2},
\frac{\varepsilon|B|^2}{4(|A|+|B|+1)}\right\}>0.
\]
在充分小的去心邻域内，同时有 \(|f(x)-A|<\eta\)、\(|g(x)-B|<\eta\)。由反三角不等式，
\[
|g(x)|\ge |B|-|g(x)-B|>\frac{|B|}{2}>0.
\]
因此该邻域内的商有定义，并且
\[
\begin{aligned}
\left|\frac{f(x)}{g(x)}-\frac AB\right|
&=\frac{|B(f(x)-A)-A(g(x)-B)|}{|B|\,|g(x)|}\\
&\le\frac{|B||f(x)-A|+|A||g(x)-B|}{|B|\,|g(x)|}\\
&<\frac{2(|A|+|B|)\eta}{|B|^2}<\varepsilon.
\end{aligned}
\]
故 \(\lim\frac{f(x)}{g(x)}=\frac AB\)。这里为说明量词选择而补写了 \(\eta\) 的具体值。

华师大例 2 中取 \(f(x)=\sin x\)、\(g(x)=\cos x\)，在相应点 \(B=\frac{\sqrt2}2\ne0\)；陈定理是所需的依据，不是同一道具体例题。`;
  notes['3.3:example:1']=String.raw`陈教材例 3.1.6 与华师大本例同题。取两列
\[
x_n=\frac1{n\pi},\qquad
y_n=\frac1{2n\pi+\frac\pi2}.
\]
两列均不为 0，且 \(x_n\to0\)、\(y_n\to0\)。对函数 \(f(x)=\sin\frac1x\)，
\[
f(x_n)=\sin(n\pi)=0,\qquad
f(y_n)=\sin\left(2n\pi+\frac\pi2\right)=1.
\]
假设 \(\lim_{x\to0}f(x)=A\)，由归结原则，两列的函数值都应趋于 \(A\)。但前者恒为 0、后者恒为 1，数列极限的唯一性迫使 \(A=0=1\)，矛盾。因此函数极限不存在。两列都必须处于去心定义域内且趋向同一个点。`;
  notes['3.5:example:1']=String.raw`陈教材例 3.1.5 使用第一重要极限。对固定非零常数 \(\alpha\)，令 \(t=\alpha x\)，则 \(x\to0\) 时 \(t\to0\)，并且
\[
\frac{\sin(\alpha x)}x
=\alpha\frac{\sin(\alpha x)}{\alpha x}
=\alpha\frac{\sin t}t\longrightarrow\alpha.
\]
若 \(\alpha=0\)，原式在去心邻域恒为 0，结论也成立。华师大本题分母可用 \(\alpha=4\) 的结论，分子还要另用 \(\arctan x\) 的相应极限。`;
  notes['3.5:example:2']=String.raw`陈教材例 3.1.4 给出 \(\frac{\sin t}t\to1\)。结合半角公式，在 \(t\ne0\) 时
\[
\frac{1-\cos t}{t^2}
=\frac{2\sin^2(\frac t2)}{t^2}
=\frac12\left(\frac{\sin(\frac t2)}{\frac t2}\right)^2
\longrightarrow\frac12.
\]
因此 \(1-\cos t\sim\frac{t^2}2\)。这提供了华师大原题所需的基础等价关系；涉及两个无穷小相减时，仍应先分解原差式，再对所得乘积使用等价关系。`;
  notes['2.3:example:7']=String.raw`陈教材例 2.4.12 研究平方倒数部分和
\[
s_n=1+\frac1{2^2}+\cdots+\frac1{n^2}.
\]
当 \(n>m\ge1\) 时，对 \(k\ge m+1\ge2\) 有
\[
\frac1{k^2}<\frac1{k(k-1)}=\frac1{k-1}-\frac1k.
\]
因此尾和可以裂项：
\[
0<s_n-s_m
<\sum_{k=m+1}^n\left(\frac1{k-1}-\frac1k\right)
=\frac1m-\frac1n<\frac1m.
\]
任给 \(\varepsilon>0\)，取正整数 \(N>\frac1\varepsilon\)。当 \(n>m>N\) 时，\(|s_n-s_m|<\frac1m<\varepsilon\)；交换大小也得到对任意 \(m,n>N\) 的同一结论。由柯西准则，\(\{s_n\}\) 收敛。

华师大本例不是同一个数列：陈例靠裂项控制尾和，华师大例用相应的有限等比和控制尾部。`;
  notes['2.2:example:4']=String.raw`陈教材例 2.3.3 设 \(k,l\) 为正整数，\(a_0b_0\ne0\)，讨论
\[
R_n=\frac{a_0n^k+a_1n^{k-1}+\cdots+a_k}
{b_0n^l+b_1n^{l-1}+\cdots+b_l}.
\]
分别从分子、分母提出最高次幂：
\[
R_n=n^{k-l}
\frac{a_0+\frac{a_1}{n}+\cdots+\frac{a_k}{n^k}}
{b_0+\frac{b_1}{n}+\cdots+\frac{b_l}{n^l}}.
\]
由于 \(\frac1{n^j}\to0\)（\(j\ge1\)），且 \(b_0\ne0\)，后面的商在充分大 \(n\) 时有定义，并有
\[
\frac{a_0+\frac{a_1}{n}+\cdots+\frac{a_k}{n^k}}
{b_0+\frac{b_1}{n}+\cdots+\frac{b_l}{n^l}}
\longrightarrow\frac{a_0}{b_0}\ne0.
\]
因此分三种情况：
\[
\begin{cases}
k<l:&R_n\to0,\\
k=l:&R_n\to\frac{a_0}{b_0},\\
k>l:&|R_n|\to+\infty.
\end{cases}
\]
第三种情况下，后一个商最终与 \(\frac{a_0}{b_0}\) 同号：该比值为正时 \(R_n\to+\infty\)，为负时 \(R_n\to-\infty\)。陈教材把这一情形记为无穷大量。

华师大本例只用到分子次数不大于分母次数的部分；两书记号不同，不应仅凭下标相同就对应系数。`;
  notes['2.2:exercise:8']=String.raw`陈教材例 2.2.8 利用有限个数的最大值估计正幂和。按华师大题设，设 \(a_1,\ldots,a_m>0\)，记
\[
M=\max\{a_1,\ldots,a_m\}>0.
\]
可把某个取到最大值的下标重新编号为 1，使 \(a_1=M\)。这是因为有限和与最大值都不因重新排列而改变；有多个最大值时任选一个。

对每个 \(i\) 有 \(0<a_i\le M\)，因此
\[
M^n\le\sum_{i=1}^m a_i^n\le mM^n.
\]
各项非负，取 \(n\) 次根得
\[
M\le\left(\sum_{i=1}^m a_i^n\right)^{\frac1n}\le M\sqrt[n]{m}.
\]
这里 \(m\) 是固定正整数，已知 \(\sqrt[n]{m}\to1\)，由迫敛性得到
\[
\lim_{n\to\infty}\left(\sum_{i=1}^m a_i^n\right)^{\frac1n}=M.
\]
陈例还允许非负数；这里保留华师大题目中所有 \(a_i>0\) 的条件。`;
  notes['2.3:example:6']=String.raw`陈教材定理 2.4.6 设 \(\{x_n\}\) 无界，证明存在绝对值趋于无穷的子列。先说明：对任意 \(M>0\)，集合
\[
E_M=\{n\in\mathbb N:|x_n|>M\}
\]
必为无限集。否则只有有限个例外下标 \(n_1,\ldots,n_j\)；取
\[
C=\max\{M,|x_{n_1}|,\ldots,|x_{n_j}|\}
\]
便有所有 \(n\) 均满足 \(|x_n|\le C\)，与无界矛盾；若没有例外则直接以 \(M\) 为界。

由此可选 \(n_1\) 使 \(|x_{n_1}|>1\)；若已选 \(n_k\)，集合 \(E_{k+1}\) 无限，故可选 \(n_{k+1}>n_k\)，使
\[
|x_{n_{k+1}}|>k+1.
\]
这样得到严格递增的下标和 \(|x_{n_k}|>k\)。任给 \(G>0\)，当 \(k>G\) 时 \(|x_{n_k}|>G\)，所以 \(|x_{n_k}|\to+\infty\)。

陈定理的结论不保证子列趋于正无穷；华师大例题假设更强的无上界，故可直接选择 \(a_{n_k}>k\)，得到正无穷。`;
  notes['3.2:example:4']=String.raw`陈教材例 3.1.1 证明 \(\lim_{x\to0}e^x=1\)。任给 \(\varepsilon>0\)，先令
\[
\eta=\min\left\{\varepsilon,\frac12\right\},\qquad
\delta=\min\{-\ln(1-\eta),\ln(1+\eta)\}>0.
\]
因为 \(0<\eta<1\)，两个对数端点均有意义。若 \(0<|x|<\delta\)，则
\[
\ln(1-\eta)<x<\ln(1+\eta).
\]
指数函数严格递增，故
\[
1-\eta<e^x<1+\eta,
\qquad |e^x-1|<\eta\le\varepsilon.
\]
由定义得到陈例结论。这里用 \(\eta\) 补齐任意正误差的情形；陈例的底数是 \(e\)，华师大本例讨论任意给定的 \(a>1\)，并用其他已学结论证明。`;
  for(const [id,text] of Object.entries(notes)) {
    if(!q[id] || !q[id].chenSource) { console.error('缺少陈教材来源：'+id); continue; }
    q[id].chenSolution=text;
  }
  const maxmin=q['2.total:exercise:11'];
  if(maxmin && maxmin.solution.includes('对最小值同理')) {
    maxmin.solution=maxmin.solution.replace('对最小值同理，故由迫敛性得到两项结论。',String.raw`同样，由两列各自的上下界，
\[
\min\{a,b\}-\delta_n\le T_n\le\min\{a,b\}+\delta_n.
\]
因为 \(\delta_n\to0\)，分别对两组不等式使用迫敛性，即得 \(S_n\to\max\{a,b\}\)、\(T_n\to\min\{a,b\}\)。`);
  }
  const unbounded=q['2.total:exercise:13'];
  if(unbounded) unbounded.solution=unbounded.solution.replace('由 \\(|b_n|>1\\) 最终成立可得尾部 \\(|a_n|<M\\)；再合并有限个前项可知 \\(\\{a_n\\}\\) 有界，矛盾。',String.raw`取 \(N\) 使 \(n>N\) 时 \(|b_n|>1\)。这些下标满足
\[
|a_n|=\frac{|a_nb_n|}{|b_n|}\le M.
\]
令 \(C=\max\{M,|a_1|,\ldots,|a_N|\}\)，则所有 \(n\) 都有 \(|a_n|\le C\)，与 \(\{a_n\}\) 无界矛盾。`);
  const asymptote=q['3.5:example:6'];
  if(asymptote) asymptote.solution=asymptote.solution.replace('余项在 \\(x\\to\\pm\\infty\\) 时趋于 0，可立即读出斜渐近线 \\(y=x-2\\)；有限点的垂直渐近线仍要单独检查。',String.raw`因为分子次数低于分母，余项在 \(x\to\pm\infty\) 时趋于 0，故斜渐近线为 \(y=x-2\)。

再看有限点。分母为 \((x+3)(x-1)\)，分子在两个候选点分别趋于 \(-27\)、\(1\)，都非零。比较因子的左右号，得到
\[
\begin{aligned}
\lim_{x\to-3^-}f(x)&=-\infty,&\quad \lim_{x\to-3^+}f(x)&=+\infty,\\
\lim_{x\to1^-}f(x)&=-\infty,&\quad \lim_{x\to1^+}f(x)&=+\infty.
\end{aligned}
\]
所以垂直渐近线为 \(x=-3\) 与 \(x=1\)。其余有限点分母不为零；两侧无穷远的函数值无有限极限，所以没有其他垂直或水平渐近线。`);
  const recurrence=q['2.total:exercise:9'];
  if(recurrence && recurrence.variantSolution) {
    recurrence.variantSolution=recurrence.variantSolution
      .replace('Lge u_1',String.raw`L\ge u_1`)
      .replace('迭代并用迫敛性，也可立即得到 \\(x_n\\to r\\)。',String.raw`迭代得到
\[
0\le|x_n-r|\le\frac{|x_1-r|}{4^{n-1}}\longrightarrow0.
\]
由迫敛性，\(x_n\to r=\sqrt2-1\)。`);
  }
  const powers=q['3.4:exercise:2'];
  if(powers && powers.solution.includes('补充／后续内容：也可取对数')) {
    powers.solution=powers.solution.slice(0,powers.solution.indexOf('补充／后续内容：也可取对数'))+String.raw`补充／后续内容 · 方法二（取对数，华师大 §3.5 与 §4.3）：

在对应极限过程的充分小邻域或充分大的区间内，各题底数都为正。对于非零的 \(u\to0\)，用后续结论
\[
\frac{\ln(1+u)}u\longrightarrow1.
\]
若 \(y=(1+u)^v\)，则
\[
\ln y=(vu)\frac{\ln(1+u)}u.
\]
以下逐问计算 \(vu\)，再用指数函数连续性还原：

（1）\(u=-\frac2x\)、\(v=-x\)，故
\[
\ln y=2\frac{\ln(1-\frac2x)}{-\frac2x}\to2,
\qquad y\to e^2.
\]

（2）\(\alpha=0\) 时 \(y=1=e^0\)。若 \(\alpha\ne0\)，取 \(u=\alpha x\)，有
\[
\ln y=\alpha\frac{\ln(1+\alpha x)}{\alpha x}\to\alpha,
\qquad y\to e^\alpha.
\]

（3）在充分小去心邻域中 \(\tan x\ne0\)，令 \(u=\tan x\)，则 \(v=\cot x=\frac1u\)，故
\[
\ln y=\frac{\ln(1+\tan x)}{\tan x}\to1,
\qquad y\to e.
\]

（4）底数先写为 \(1+u\)，其中 \(u=\frac{2x}{1-x}\)。于是
\[
\ln y=\frac2{1-x}\frac{\ln(1+u)}u\to2,
\qquad y\to e^2.
\]

（5）取 \(u=\frac3{3x-1}\)，则
\[
\ln y=\frac{3(2x-1)}{3x-1}\frac{\ln(1+u)}u\to2,
\qquad y\to e^2.
\]

（6）若 \(\alpha=0\)，则 \(y=1\)；若 \(\alpha\ne0\)，取 \(u=\frac\alpha x\)，得到
\[
\ln y=\alpha\beta\frac{\ln(1+u)}u\to\alpha\beta,
\qquad y\to e^{\alpha\beta}.
\]
这同样包含 \(\beta=0\)。该方法使用本节之后的对数等价无穷小与指数连续性，主解仍按本节基本极限处理。`;
  }
  const topic=window.REVIEW_TOPICS?.oneinf?.items;
  if(topic?.[2]?.solution) {
    topic[2].solution=topic[2].solution.replace('因此 \\(\\ln y=\\ln(\\cos x)/x^2\\to-1/2\\)，故 \\(y\\to e^{-1/2}\\)。替换发生在乘除结构中，且相关量在充分小的去心邻域内非零。',String.raw`在充分小的去心邻域内 \(\cos x-1\ne0\)，故
\[
\ln y=\frac{\ln(\cos x)}{x^2}
=\frac{\ln(\cos x)}{\cos x-1}\cdot\frac{\cos x-1}{x^2}
\longrightarrow1\cdot\left(-\frac12\right)=-\frac12.
\]
由指数函数连续性，\(y=e^{\ln y}\to e^{-\frac12}\)。替换发生在乘除结构中。`);
  }
  if(topic?.[4]?.solution) {
    topic[4].solution=topic[4].solution.replace('对固定 \\(a,b\\)，当 \\(x\\to0\\) 时，\n\\[\n\\ln(1+ax+bx^2)\n=ax+\\left(b-\\frac{a^2}{2}\\right)x^2+o(x^2).\n\\]',String.raw`对固定 \(a,b\)，令 \(u=ax+bx^2\)。当 \(x\to0\) 时，\(u=O(x)\)，且
\[
u^2=a^2x^2+2abx^3+b^2x^4=a^2x^2+o(x^2).
\]
由 \(\ln(1+u)=u-\frac{u^2}{2}+o(u^2)\)，可得
\[
\begin{aligned}
\ln(1+ax+bx^2)
&=ax+bx^2-\frac12\bigl(a^2x^2+o(x^2)\bigr)+o(x^2)\\
&=ax+\left(b-\frac{a^2}{2}\right)x^2+o(x^2).
\end{aligned}
\]`);
  }
})();
