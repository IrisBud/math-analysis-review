// Carefully reviewed refinements; keep the main textbook solutions unchanged.
(() => {
  const q=window.REVIEW_SOLUTIONS;
  function replaceSupplement(id, text) {
    const v=q[id], marker='补充／后续内容';
    if (!v || !v.solution || !v.solution.includes(marker)) {
      console.error('未找到补充方法：'+id); return;
    }
    v.solution=v.solution.slice(0,v.solution.indexOf(marker))+text;
  }
  replaceSupplement('3.2:exercise:1', String.raw`补充／后续内容 · 洛必达法则（华师大 §6.2，仅第（4）—（7）问）：

（4）在 \(x\to0\) 时为 \(\frac00\) 型。充分小的去心邻域内 \(2x+6x^2\ne0\)，第一次求导后仍为 \(\frac00\) 型；第二次的分母导数 \(2+12x\) 充分靠近 0 时不为零，故
\[
\lim_{x\to0}\frac{(x-1)^3+1-3x}{x^2+2x^3}
=\lim_{x\to0}\frac{3(x-1)^2-3}{2x+6x^2}
=\lim_{x\to0}\frac{6x-6}{2+12x}=-3.
\]

（5）\(m,n\) 是正整数。分子、分母都趋于 0，且 \(mx^{m-1}\) 在 1 的充分小邻域中非零，因此
\[
\lim_{x\to1}\frac{x^n-1}{x^m-1}
=\lim_{x\to1}\frac{nx^{n-1}}{mx^{m-1}}=\frac nm.
\]

（6）两根式在 4 附近可导，分母导数 \(\frac1{2\sqrt x}\ne0\)。由洛必达法则，
\[
\lim_{x\to4}\frac{\sqrt{1+2x}-3}{\sqrt{x}-2}
=\lim_{x\to4}\frac{\frac1{\sqrt{1+2x}}}{\frac1{2\sqrt x}}
=\frac{\frac13}{\frac14}=\frac43.
\]

（7）因为 \(a>0\)，在 0 的充分小邻域内 \(a^2+x>0\)，根式可导，分母导数恒为 1。故
\[
\lim_{x\to0}\frac{\sqrt{a^2+x}-a}{x}
=\lim_{x\to0}\frac{1}{2\sqrt{a^2+x}}=\frac1{2a}.
\]
以上是后续方法，不替代本节的代数主解。`);
  replaceSupplement('3.total:exercise:1', String.raw`补充／后续内容：

（6）用根式函数的导数（华师大第五章）。令 \(F(t)=\sqrt{1+t}\)、\(G(t)=\sqrt[3]{1+t}\)，则 \(F'(0)=\frac12\)、\(G'(0)=\frac13\)。由于
\[
\frac{F(x)-F(-x)}{2x}
=\frac12\left(\frac{F(x)-F(0)}x+\frac{F(-x)-F(0)}{-x}\right)\to\frac12,
\]
同理 \(\frac{G(x)-G(-x)}{2x}\to\frac13\)。后一个极限非零，因此原式极限为 \(\frac{\frac12}{\frac13}=\frac32\)。

（7）用两次洛必达法则（华师大 §6.2）。先通分，令
\[
P(x)=m(1-x^n)-n(1-x^m),\quad
Q(x)=(1-x^m)(1-x^n).
\]
当 \(x\to1\) 时，\(P,Q\to0\)，而
\[
P'(x)=mn(x^{m-1}-x^{n-1}),\quad
Q'(x)=-mx^{m-1}(1-x^n)-nx^{n-1}(1-x^m).
\]
在 1 的充分小去心邻域中，\(Q'(x)\ne0\)：两项同号。又 \(P',Q'\to0\)，并且
\[
P''(1)=mn(m-n),\qquad Q''(1)=2mn\ne0.
\]
连续性保证 \(Q''\) 在 1 附近不为零，两次使用洛必达法则得到
\[
\lim_{x\to1}\frac{P(x)}{Q(x)}
=\frac{mn(m-n)}{2mn}=\boxed{\frac{m-n}{2}}.
\]
这里 \(m,n\) 都是正整数，包括 1 和 \(m=n\) 的情形。`);

  // Replace only mathematically checked, exact fragments in the pictured problem.
  const problem=q['3.1:exercise:1'];
  if (problem) {
    const pairs=[
      [String.raw`(x^2-5)/(x^2-1)`,String.raw`\frac{x^2-5}{x^2-1}`],
      [String.raw`4/(x^2-1)`,String.raw`\frac4{x^2-1}`],
      [String.raw`(6x+5)/x`,String.raw`\frac{6x+5}{x}`],
      [String.raw`\varepsilon^2/4`,String.raw`\frac{\varepsilon^2}{4}`],
      [String.raw`\varepsilon/19`,String.raw`\frac{\varepsilon}{19}`],
      [String.raw`5/\varepsilon`,String.raw`\frac5\varepsilon`],
      [String.raw`4/\varepsilon`,String.raw`\frac4\varepsilon`],
      [String.raw`\varepsilon/3`,String.raw`\frac\varepsilon3`],
      [String.raw`5/x`,String.raw`\frac5x`]
    ];
    for (const field of ['statement','solution','exam','guidance','variant','variantSolution']) {
      if (typeof problem[field]==='string') for(const [a,b] of pairs) problem[field]=problem[field].split(a).join(b);
    }
  }
})();
