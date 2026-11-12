window.REVIEW_TOPICS.stolz = {
  id:'stolz', title:'Stolz 定理：从差商到适用条件',
  status:'第1题对应25-26期中考试T9原题，其余四题自编；按本章定理及其条件逐题复核，不计入教材原题数。',
  boundary:'主解使用华师大第六版上册第二章总练习第 3 题 Stolz 定理，印刷第 40—41 页（PDF 第 53—54 页）。每次使用前检查分母严格递增并趋于正无穷。',
  items:[
    {
      number:1,title:'平方和的增长',examLabel:'25-26期中考试T9原题',
      statement:String.raw`求 \(\displaystyle\lim_{n\to\infty}\frac{1^2+2^2+\cdots+n^2}{n^3}\)。`,
      solution:String.raw`令 \(A_n=\sum_{k=1}^n k^2\)、\(B_n=n^3\)。\(B_n\) 严格递增且趋于正无穷，计算差商得
\[
\frac{A_n-A_{n-1}}{B_n-B_{n-1}}
=\frac{n^2}{n^3-(n-1)^3}
=\frac1{3-\frac3n+\frac1{n^2}}\longrightarrow\frac13.
\]
由 Stolz 定理，原极限为 \(\boxed{\frac13}\)。`,
      exam:String.raw`令 \(A_n=\sum_{k=1}^n k^2\)、\(B_n=n^3\)。\(B_n\uparrow+\infty\)，且差商为 \(\frac1{3-\frac3n+\frac1{n^2}}\to\frac13\)，故原极限为 \(\frac13\)。`,
      guidance:'分子是部分和，相邻两项之差只剩最后一项；分母立方差的最高次项决定尺度。'
    },
    {
      number:2,title:'带指数权重的部分和',
      statement:String.raw`求 \(\displaystyle\lim_{n\to\infty}\frac{\sum_{k=1}^n k2^k}{n2^n}\)。`,
      solution:String.raw`设 \(A_n=\sum_{k=1}^n k2^k\)、\(B_n=n2^n\)。对 \(n\ge2\)，\(B_n-B_{n-1}=2^{n-1}(n+1)>0\)，而 \(B_n\to+\infty\)。于是
\[
\frac{A_n-A_{n-1}}{B_n-B_{n-1}}
=\frac{n2^n}{2^{n-1}(n+1)}
=\frac{2n}{n+1}\longrightarrow2.
\]
由 Stolz 定理，极限为 \(\boxed2\)。`,
      exam:String.raw`\(B_n=n2^n\) 严格递增且趋于正无穷。部分和与分母的差商为 \(\frac{n2^n}{2^{n-1}(n+1)}\to2\)，由 Stolz 得极限 2。`,
      guidance:'指数型分母也先验证递增；计算相邻差时提取共同的 2 的幂。'
    },
    {
      number:3,title:'平方权重的平均值',
      statement:String.raw`设 \(a_n\to a\in\mathbb R\)，证明
\[
\frac{1^2a_1+2^2a_2+\cdots+n^2a_n}{1^2+2^2+\cdots+n^2}\longrightarrow a.
\]`,
      solution:String.raw`令 \(A_n=\sum_{k=1}^n k^2a_k\)、\(B_n=\sum_{k=1}^n k^2\)。每次增量 \(B_n-B_{n-1}=n^2>0\)，且 \(B_n\ge n\to+\infty\)。所以
\[
\frac{A_n-A_{n-1}}{B_n-B_{n-1}}
=\frac{n^2a_n}{n^2}=a_n\longrightarrow a.
\]
由 Stolz 定理得证。这里无需预先计算平方和的闭式。`,
      exam:String.raw`令 \(A_n=\sum_{k=1}^n k^2a_k\)、\(B_n=\sum_{k=1}^n k^2\)。因 \(B_n\uparrow+\infty\) 且相邻差商为 \(a_n\to a\)，由 Stolz 得结论。`,
      guidance:'将分母也看作部分和，利用同一个正权重在相邻差商中约去。'
    },
    {
      number:4,title:'根式和的渐近尺度',
      statement:String.raw`求 \(\displaystyle\lim_{n\to\infty}\frac{\sqrt1+\sqrt2+\cdots+\sqrt n}{n\sqrt n}\)。`,
      solution:String.raw`令 \(A_n=\sum_{k=1}^n\sqrt{k}\)、\(B_n=n\sqrt n\)。\(B_n\) 严格递增且趋于正无穷。利用平方差，
\[
\begin{aligned}
\frac{A_n-A_{n-1}}{B_n-B_{n-1}}
&=\frac{\sqrt n}{n^{\frac32}-(n-1)^{\frac32}}\\
&=\frac{1+(1-\frac1n)^{\frac32}}{3-\frac3n+\frac1{n^2}}
\longrightarrow\frac23.
\end{aligned}
\]
由 Stolz 定理，所求为 \(\boxed{\frac23}\)。根式均取非负值，去心尾部中的分母不为零。`,
      exam:String.raw`\(B_n=n\sqrt n\uparrow+\infty\)。分母差乘以共轭后，相邻差商为 \(\frac{1+(1-\frac1n)^{\frac32}}{3-\frac3n+\frac1{n^2}}\to\frac23\)，由 Stolz 得极限 \(\frac23\)。`,
      guidance:'对两个三次半幂的差使用平方差，再将分子、分母除以适当的 n 的幂。'
    },
    {
      number:5,title:'倒数根号和的尺度',
      statement:String.raw`求 \(\displaystyle\lim_{n\to\infty}\frac{\sum_{k=1}^n\frac1{\sqrt{k}}}{\sqrt n}\)。`,
      solution:String.raw`令 \(A_n=\sum_{k=1}^n\frac1{\sqrt{k}}\)、\(B_n=\sqrt n\)。\(B_n\) 严格递增且趋于正无穷。当 \(n\ge2\) 时，有理化分母差得
\[
\frac{A_n-A_{n-1}}{B_n-B_{n-1}}
=\frac{\frac1{\sqrt n}}{\sqrt n-\sqrt{n-1}}
=1+\sqrt{1-\frac1n}\longrightarrow2.
\]
由 Stolz 定理，极限为 \(\boxed2\)。`,
      exam:String.raw`\(B_n=\sqrt n\uparrow+\infty\)，相邻差商有理化后为 \(1+\sqrt{1-\frac1n}\to2\)，故由 Stolz 定理原极限为 2。`,
      guidance:'分母相邻差是两个根式之差，先有理化，再比较分子与分母的根式。'
    }
  ]
};
