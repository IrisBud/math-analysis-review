// Only entries checked against the exam PDF and the textbook are listed here.
window.MIDTERM_REFERENCES = {
  '3.5:exercise:2': [
    { label: '23-24期中考试T7原题（第1小问）' }
  ],
  '3.5:example:6': [
    { label: '23-24期中考试T16原题' }
  ],
  '2.total:exercise:8': [
    { label: '23-24期中考试T17原题（证明题）' },
    {
      label: '24-25期中考试T12改编题',
      statement: '设 \\(x_1>0\\)，\\(x_{n+1}=\\frac12\\left(x_n+\\frac1{x_n}\\right)\\)（\\(n=1,2,\\ldots\\)）。讨论数列 \\(\\{x_n\\}\\) 的收敛性，若收敛求其极限。',
      solution: '对任意 \\(t>0\\)，\\(\\frac12(t+\\frac1t)-1=\\frac{(t-1)^2}{2t}\\ge0\\)。故 \\(x_2\\ge1\\)，其后各项均不小于 1。对 \\(n\\ge2\\)，\\[x_{n+1}-x_n=\\frac{1-x_n^2}{2x_n}\\le0.\\]因此从第二项起单调递减且有下界 1，设极限为 \\(L\\ge1\\)。在递推式中取极限得 \\(L=\\frac12(L+\\frac1L)\\)，故 \\(L^2=1\\)，由 \\(L>0\\) 得 \\(L=1\\)。这也包含 \\(0<x_1<1\\) 的情形。'
    }
  ],
  '3.2:example:1': [
    { label: '25-26期中考试T7原题' }
  ],
  '3.1:exercise:1': [
    {
      label: '25-26期中考试T7改编题（对应举一反三）',
      statement: String.raw`设 \(\lfloor t\rfloor\) 表示不超过 \(t\) 的最大整数，求 \(\displaystyle\lim_{x\to0}x\lfloor\frac1x\rfloor\)。`,
      solution: String.raw`当 \(x\ne0\) 时，令 \(r=\frac1x-\lfloor\frac1x\rfloor\)，则 \(0\le r<1\)，且 \(x\lfloor\frac1x\rfloor=1-xr\)。因此无论 x 从哪一侧趋于 0，误差均满足 \(|xr|\le|x|\to0\)，所求极限为 \(\boxed1\)。本页举一反三在试卷式基础上加入 \(x\lfloor-\frac1x\rfloor\)，需要处理取整的对称和。`
    }
  ],
  '2.total:exercise:1': [
    { label: '25-26期中考试T12原题（第1小问）' }
  ],
  '4.1:example:3': [
    { label: '25-26期中考试T18原题' }
  ],
  '2.2:exercise:8': [
    {
      label: '25-26期中考试T6改编题',
      statement: '求 \\(\\displaystyle\\lim_{n\\to\\infty}\\sqrt[n]{2023^n+2024^n+2025^n}\\)。',
      solution: '每一项均为正，且 \\(2025^n\\le2023^n+2024^n+2025^n\\le3\\cdot2025^n\\)。取 \\(n\\) 次根得 \\(2025\\le\\sqrt[n]{2023^n+2024^n+2025^n}\\le2025\\sqrt[n]3\\)。由于 \\(\\sqrt[n]3\\to1\\)，由迫敛性极限为 \\(2025\\)。'
    },
    {
      label: '25-26期中考试T12改编题（幂和增加多项式项）',
      statement: String.raw`求 \(\displaystyle\lim_{n\to\infty}\sqrt[n]{n^3+3^n}\)。`,
      solution: String.raw`记 \(u_n=\frac{n^3}{3^n}\)。因 \(\frac{u_{n+1}}{u_n}=\frac{(1+\frac1n)^3}{3}\to\frac13<1\)，从某一项起其比值小于固定的 \(q\in(0,1)\)，故 \(u_n\to0\)。于是充分大 n 时 \(0<u_n<1\)，从而
\[3\le\sqrt[n]{n^3+3^n}=3\sqrt[n]{1+u_n}\le3\sqrt[n]2\longrightarrow3.\]
本题在教材的有限个固定正数幂和中加入随 n 变化的多项式项，先证明它相对 \(3^n\) 可忽略。`
    }
  ],
  '2.3:exercise:3': [
    {
      label: '24-25期中考试T2改编题（填空题；教材第2小问）',
      statement: '求数列 \\(\\sqrt2,\\sqrt{2+\\sqrt2},\\sqrt{2+\\sqrt{2+\\sqrt2}},\\ldots\\) 的极限。',
      solution: '记 \\(x_1=\\sqrt2\\)、\\(x_{n+1}=\\sqrt{2+x_n}\\)。归纳可得 \\(x_n<2\\)，因为 \\(x_n<2\\) 蕴含 \\(x_{n+1}<2\\)。又 \\(x_2>x_1\\)，平方根的单调性使数列递增。故它收敛；设极限为 \\(L\\ge0\\)，则 \\(L=\\sqrt{2+L}\\)，即 \\((L-2)(L+1)=0\\)，因此 \\(L=2\\)。'
    },
    {
      label: '25-26期中考试T14改编题（第2小问）',
      statement: '先证明数列 \\(\\sqrt3,\\sqrt{3+\\sqrt3},\\sqrt{3+\\sqrt{3+\\sqrt3}},\\ldots\\) 的极限存在，再求该极限。',
      solution: '记 \\(x_1=\\sqrt3\\)、\\(x_{n+1}=\\sqrt{3+x_n}\\)，并令 \\(r=\\frac{1+\\sqrt{13}}2\\)，则 \\(r^2=3+r\\)、\\(r>\\sqrt3\\)。由归纳法 \\(x_n<r\\)。又 \\(x_2>x_1\\)，平方根的单调性使 \\(x_n>x_{n-1}\\) 蕴含 \\(x_{n+1}>x_n\\)，故数列递增有上界。设极限为 \\(L\\ge0\\)，取极限得 \\(L=\\sqrt{3+L}\\)，即 \\(L^2-L-3=0\\)。负根不合 \\(L\\ge0\\)，故 \\(L=\\frac{1+\\sqrt{13}}2\\)。'
    }
  ],
  '3.5:exercise:5': [
    {
      label: '25-26期中考试T13改编题（第1小问）',
      statement: '已知 \\(\\beta x^\\alpha\\) 与 \\(\\sin2x-2\\sin x\\) 当 \\(x\\to0\\) 时是等价无穷小，求 \\(\\alpha,\\beta\\)。',
      solution: '由半角公式，\\[\\sin2x-2\\sin x=2\\sin x(\\cos x-1)=-4\\sin x\\sin^2\\frac{x}{2}.\\]故 \\(\\sin2x-2\\sin x\\sim-x^3\\)。先从正侧比较幂次：若 \\(\\beta x^\\alpha\\) 与它等价，二者比值必须趋于 1，因此 \\(\\alpha=3\\)、\\(\\beta=-1\\)。这组结果在双侧邻域中均有定义，代回后确实等价。'
    }
  ],
  '3.3:exercise:6': [
    {
      label: '24-25期中考试T17改编题（证明题）',
      statement: '请用 \\(\\varepsilon\\)–\\(\\delta\\) 语言描述函数极限不存在，并证明狄利克雷函数 \\(D(x)=1\\)（\\(x\\) 有理）、\\(D(x)=0\\)（\\(x\\) 无理）处处无极限。',
      solution: '在 \\(x_0\\) 处不存在有限极限的定义为：对每个 \\(A\\in\\mathbb R\\)，存在 \\(\\varepsilon>0\\)，对每个 \\(\\delta>0\\)，都能找到 \\(x\\) 使 \\(0<|x-x_0|<\\delta\\) 且 \\(|f(x)-A|\\ge\\varepsilon\\)。对狄利克雷函数，任给 \\(A\\)，在 0 与 1 中至少有一个与 \\(A\\) 的距离不小于 \\(\\frac12\\)。任意去心邻域既有有理数也有无理数，故总能选到使函数值等于该数的点。取 \\(\\varepsilon=\\frac12\\)，就得到所述否定条件；\\(x_0\\) 任意，故处处无有限极限。'
    }
  ],
  '2.2:example:2': [
    { label: '24-25期中考试T1原题（选择题）' }
  ],
  '2.3:example:2': [
    { label: '24-25期中考试T2原题（填空题）' }
  ],
  '2.3:exercise:1': [
    {
      label: '23-24期中考试T6改编题（第3小问）',
      statement: '求 \\(\\displaystyle\\lim_{n\\to\\infty}\\left(\\frac{n+2024}{n+2023}\\right)^n\\)。',
      solution: '令 \\(m=n+2023\\)，则 \\(m\\to\\infty\\)，且 \\(\\frac{n+2024}{n+2023}=1+\\frac1m\\)。故\n\\[\n\\left(1+\\frac1m\\right)^n=\\frac{(1+\\frac1m)^m}{(1+\\frac1m)^{2023}}\\longrightarrow\\frac e1=e.\n\\]\n分母的指数 2023 是固定整数，其极限为 1。'
    }
  ],
  '3.total:exercise:2': [
    {
      label: '23-24期中考试T3改编题（选择题；教材第1小问）',
      statement: '已知 \\(\\displaystyle\\lim_{x\\to+\\infty}\\left(\\frac{x^2}{x+1}-ax-b\\right)=0\\)，其中 \\(a,b\\) 为常数。选择：A. \\(a=1,b=1\\)；B. \\(a=1,b=-1\\)；C. \\(a=-1,b=1\\)；D. \\(a=-1,b=-1\\)。',
      solution: '多项式除法得 \\(\\frac{x^2}{x+1}=x-1+\\frac1{x+1}\\)。因此要使 \\((1-a)x-1-b+\\frac1{x+1}\\to0\\)，先须 \\(a=1\\)，再须 \\(b=-1\\)；代回可验证。故选 B。'
    },
    {
      label: '25-26期中考试T8改编题（填空题；教材第2小问）',
      statement: '若 \\(\\displaystyle\\lim_{x\\to-\\infty}(\\sqrt{x^2-x+1}-ax-b)=0\\)，求 \\(a+b\\)。',
      solution: '由于 \\(x<0\\) 时 \\(\\frac{\\sqrt{x^2-x+1}}{x}=-\\sqrt{1-\\frac1x+\\frac1{x^2}}\\to-1\\)，所求 \\(a=-1\\)。再有理化：\n\\[\n\\sqrt{x^2-x+1}+x=\\frac{1-x}{\\sqrt{x^2-x+1}-x}\\longrightarrow\\frac12.\n\\]\n因此 \\(b=\\frac12\\)，故 \\(a+b=-\\frac12\\)。'
    }
  ]
};

window.MIDTERM_REFERENCES['2.1:example:8'] = [
  {
    label: '23-24期中考试T1改编题（选择题；第②项）',
    statement: '设数列 \\(\\{x_n\\}\\) 有以下命题：①有界当且仅当收敛；② \\(x_n\\to a\\) 当且仅当 \\(x_{2n+1}\\to a\\) 且 \\(x_{2n}\\to a\\)；③ \\(x_n\\to a\\) 当且仅当 \\(x_{n+2023}\\to a\\)；④ \\(x_n\\to a\\) 当且仅当 \\(x_{3n+1}\\to a\\) 且 \\(x_{3n+2}\\to a\\)。正确的命题有几个？A. 1；B. 2；C. 3；D. 4。',
    solution: '①错误：\\(x_n=(-1)^n\\) 有界但不收敛。②正确：两个奇偶子列都趋于同一极限，合起来覆盖除有限项外所有下标。③正确：平移只去掉有限项，有限项不影响极限。④错误：取 \\(x_{3n}=1\\)、\\(x_{3n+1}=x_{3n+2}=0\\)，后两列均趋于 0，原列不收敛。因此正确的有 2 个，选 B。'
  },
  {
    label: '25-26期中考试T1改编题（选择题；B项）',
    statement: '下列命题正确的是：A. 对任意 \\(\\varepsilon>0\\)，\\((a-\\varepsilon,a+\\varepsilon)\\) 内有无穷多项 \\(a_n\\)，则 \\(a_n\\) 收敛；B. 奇、偶子列都收敛，则原列收敛；C. \\(b_n,c_n\\) 都收敛且最终 \\(b_n<a_n<c_n\\)，则 \\(a_n\\) 收敛；D. \\(a_n+b_n\\) 收敛、\\(a_n\\) 单调且 \\(b_n\\) 有界，则 \\(a_n\\) 收敛。',
    solution: 'A 错：取 \\(a=0\\)、\\(a_{2n}=0\\)、\\(a_{2n-1}=1\\)。B 错：取 \\(a_n=(-1)^n\\)，两子列分别趋于 1 和 −1。C 错：取 \\(b_n=-2,c_n=2,a_n=(-1)^n\\)，两侧极限不同，不能使用迫敛性。D 对：收敛数列 \\(a_n+b_n\\) 有界，\\(b_n\\) 有界，故其差 \\(a_n\\) 有界；再由单调有界定理，\\(a_n\\) 收敛。选 D。'
  }
];

window.MIDTERM_REFERENCES['2.2:exercise:2'] = [
  {
    label: '24-25期中考试T4改编题（选择题）',
    statement: '下列说法正确的是：A. \\(a_n\\) 有界且 \\(b_n\\) 收敛，则 \\(a_nb_n\\) 收敛；B. \\(a_n\\) 有界且 \\(b_n\\to0\\)，则 \\(a_nb_n\\to0\\)；C. \\(a_n,b_n\\) 均无界，则 \\(a_nb_n\\) 无界；D. \\(a_n\\to0\\) 且 \\(b_n\\) 无界，则 \\(a_nb_n\\to0\\)。',
    solution: 'B 是教材的有界数列与无穷小乘积结论。A 错：取 \\(a_n=(-1)^n,b_n=1\\)。C 错：令偶数 \\(n\\) 时 \\(a_n=n,b_n=\\frac1n\\)，奇数 \\(n\\) 时 \\(a_n=\\frac1n,b_n=n\\)；两列均无界，乘积恒为 1。D 错：取 \\(a_n=\\frac1n,b_n=n\\)，乘积恒为 1。故选 B。'
  }
];

// 试卷选择题可同时关联其中直接使用或改变条件的教材命题。
window.MIDTERM_REFERENCES['2.1:exercise:4'] = [
  {...window.MIDTERM_REFERENCES['2.1:example:8'][0], label:'23-24期中考试T1改编题（选择题；第③项）'}
];
window.MIDTERM_REFERENCES['2.1:example:7'] = [
  {...window.MIDTERM_REFERENCES['2.1:example:8'][0], label:'23-24期中考试T1考点练习（选择题；第①项的反例）'}
];
window.MIDTERM_REFERENCES['2.1:example:9'] = [
  {...window.MIDTERM_REFERENCES['2.1:example:8'][0], label:'23-24期中考试T1改编题（选择题；第③项）'}
];
window.MIDTERM_REFERENCES['2.3:exercise:6'] = [
  {...window.MIDTERM_REFERENCES['2.1:example:8'][1], label:'25-26期中考试T1考点练习（选择题；D项与举一反三）'}
];
window.MIDTERM_REFERENCES['2.1:exercise:3'] = [{
  label:'24-25期中考试T1改编题（选择题；教材第2、6小问）',
  statement:String.raw`求数列极限 \(\displaystyle\lim_{n\to\infty}\sqrt[n]n\)：A. \(1\)；B. \(\pi\)；C. \(\frac12\)；D. \(0\)。`,
  solution:String.raw`令 \(u_n=\sqrt[n]n-1\ge0\)。当 \(n\ge2\) 时，由二项式展开
\[n=(1+u_n)^n\ge1+\frac{n(n-1)}2u_n^2,\]
从而 \(0\le u_n^2\le\frac2n\to0\)。故 \(u_n\to0\)，所求极限为 1，选 A。教材对应小问的根号内是固定正数，这里改为随 n 增大的 n，不能直接把固定底数结论当成证明。`
}];
window.MIDTERM_REFERENCES['2.1:example:5'] = [
  {...window.MIDTERM_REFERENCES['2.1:exercise:3'][0], label:'24-25期中考试T1改编题（选择题；固定底数改为n）',
   solution:window.MIDTERM_REFERENCES['2.1:exercise:3'][0].solution.replace('教材对应小问','教材本例')}
];
window.MIDTERM_REFERENCES['2.2:exercise:6'] = [
  {...window.MIDTERM_REFERENCES['2.1:example:8'][0], label:'23-24期中考试T1改编题（选择题；第④项）'},
  {...window.MIDTERM_REFERENCES['2.1:example:8'][1], label:'25-26期中考试T1改编题（选择题；B项）'}
];
window.MIDTERM_REFERENCES['2.total:exercise:14'] = [
  {...window.MIDTERM_REFERENCES['2.2:exercise:2'][0], label:'24-25期中考试T4改编题（选择题；C项）'}
];
window.MIDTERM_REFERENCES['2.2:exercise:4'] = [
  {...window.MIDTERM_REFERENCES['2.2:exercise:2'][0], label:'24-25期中考试T4考点练习（选择题；A项与积的收敛性）'}
];
window.MIDTERM_REFERENCES['2.3:example:4'] = [
  {...window.MIDTERM_REFERENCES['2.3:exercise:1'][0], label:'23-24期中考试T6改编题（底数偏移）'}
];
window.MIDTERM_REFERENCES['3.4:exercise:2'] = [
  {
    ...window.MIDTERM_REFERENCES['2.3:exercise:1'][0],
    label:'23-24期中考试T6改编题（教材第6小问）',
    solution:window.MIDTERM_REFERENCES['2.3:exercise:1'][0].solution + String.raw` 教材第（6）问给出 \((1+\frac\alpha x)^{\beta x}\)；本题令 \(x=n+2023\)、\(\alpha=\beta=1\)，再把指数由 \(x\) 改为 \(x-2023\)。`
  }
];
window.MIDTERM_REFERENCES['2.3:exercise:4'] = [
  {...window.MIDTERM_REFERENCES['2.3:exercise:1'][0], label:'23-24期中考试T6改编题（底数偏移，改问极限）'}
];
window.MIDTERM_REFERENCES['2.total:exercise:5'] = [
  {label:'24-25期中考试T1原题（选择题；教材第3小问）'}
];
window.MIDTERM_REFERENCES['2.total:exercise:12'] = [
  {
    ...window.MIDTERM_REFERENCES['2.1:exercise:3'][0],
    label:'24-25期中考试T1改编题（选择题；练习取p=1）',
    solution:String.raw`本题是本页练习 \(x_n=n^p\) 中 \(p=1\) 的 n 次根极限，结果为 1，选 A。也可令 \(u_n=\sqrt[n]n-1\ge0\)，由二项式展开得
\[n=(1+u_n)^n\ge1+\frac{n(n-1)}2u_n^2,\]
故 \(0\le u_n^2\le\frac2n\to0\)，从而 \(\sqrt[n]n\to1\)。`
  },
  {
    ...window.MIDTERM_REFERENCES['2.2:exercise:8'][1],
    label:'25-26期中考试T12改编题（练习取p=3）',
    solution:String.raw`本页练习取 \(p=3\) 得 \(\sqrt[n]{n^3}\to1\)。充分大 n 时 \(\sqrt[n]{n^3}<3\)，即 \(n^3<3^n\)，故
\[3\le\sqrt[n]{n^3+3^n}\le3\sqrt[n]2\longrightarrow3.\]
试卷在练习的 \(n^3\) 外增加 \(3^n\)，需要再比较两项并夹逼。`
  }
];
window.MIDTERM_REFERENCES['3.1:exercise:2'] = [
  {...window.MIDTERM_REFERENCES['3.3:exercise:6'][0], label:'24-25期中考试T17改编题（证明题；增加对所有候选极限的否定与实例）'}
];

(window.MIDTERM_REFERENCES['3.3:example:1'] ||= []).push({
  label: '23-24期中考试T2改编题（选择题）',
  statement: '当 \\(x\\to0\\) 时，\\(\\displaystyle f(x)=\\frac1{x^3}\\sin\\frac1x\\) 是：A. 无穷小；B. 无穷大；C. 有界但不是无穷小；D. 无界但不是无穷大。',
  solution: '取 \\(x_n=(2n\\pi+\\frac\\pi2)^{-1}\\to0\\)，则 \\(f(x_n)=x_n^{-3}\\to+\\infty\\)，故函数在每个去心邻域内无界。另取 \\(y_n=\\frac1{n\\pi}\\to0\\)，则 \\(f(y_n)=0\\)，所以它不满足无穷大要求 \\(|f(x)|\\to+\\infty\\)。故选 D。'
});

window.MIDTERM_REFERENCES['4.1:exercise:3'] = [
  {
    label: '23-24期中考试T4考点练习（选择题）',
    statement: '若 \\(f(x)=e^{-\\frac1{x^2}}\\arctan\\frac2x\\)，则 \\(x=0\\) 是：A. 连续点；B. 无穷间断点；C. 跳跃间断点；D. 可去间断点。',
    solution: '当 \\(x\\ne0\\) 时 \\(|\\arctan\\frac2x|<\\frac\\pi2\\)，故 \\(0\\le|f(x)|<\\frac\\pi2e^{-\\frac1{x^2}}\\to0\\)。原式在 0 无定义，而双侧极限存在且为 0；补定义 \\(f(0)=0\\) 可使其在该点连续，因此 0 是可去间断点，选 D。'
  }
];

window.MIDTERM_REFERENCES['4.1:exercise:2'] = [
  {
    label: '25-26期中考试T3改编题（选择题；教材第2小问）',
    statement: '设 \\(\\displaystyle f(x)=\\frac{2+e^{\\frac1x}}{1+e^{\\frac1x}}+\\frac{\\sin x}{|x|}\\)，则 \\(x=0\\) 是：A. 可去间断点；B. 跳跃间断点；C. 无穷间断点；D. 连续点。',
    solution: '当 \\(x\\to0^+\\)，\\(e^{\\frac1x}\\to+\\infty\\)，第一项趋于 1，第二项趋于 1，右极限为 2。当 \\(x\\to0^-\\)，\\(e^{\\frac1x}\\to0\\)，第一项趋于 2，而 \\(\\frac{\\sin x}{|x|}=-\\frac{\\sin x}{x}\\to-1\\)，左极限为 1。左右极限有限但不相等，故为跳跃间断点，选 B。'
  },
  {
    label: '24-25期中考试T5改编题（填空题）',
    statement: '设 \\(f(x)=\\frac{|x^3-x|}{x}\\)（\\(x\\ne0\\)），\\(f(0)=1\\)，求 \\(\\displaystyle\\lim_{x\\to0^+}f(x)\\)。',
    solution: '当 \\(0<x<1\\) 时 \\(x^3-x<0\\)，故 \\(f(x)=\\frac{x-x^3}{x}=1-x^2\\to1\\)。答案为 1。点值 \\(f(0)=1\\) 不影响右极限的计算。'
  }
];

window.MIDTERM_REFERENCES['4.1:exercise:4'] = [
  {
    label: '25-26期中考试T4改编题（选择题）',
    statement: '设 \\(f\\) 在 \\(x_0\\) 处不连续，\\(k\\) 为任意常数。下列哪一项必然成立：A. \\(kf\\) 不连续；B. \\(f^2\\) 不连续；C. \\(|f|\\) 不连续；D. 以上都不正确。',
    solution: 'A 不必成立：取 \\(k=0\\)，则 \\(kf\\equiv0\\)。B、C 也不必成立：令 \\(f(x)=-1\\)（\\(x<x_0\\)），\\(f(x)=1\\)（\\(x\\ge x_0\\)）。它在 \\(x_0\\) 处不连续，但 \\(f^2\\equiv1\\)、\\(|f|\\equiv1\\)，均连续。故选 D。'
  }
];

window.MIDTERM_REFERENCES['3.3:exercise:6'].push({
  label: '23-24期中考试T17改编题（计算分析题）',
  statement: '分析讨论狄利克雷函数 \\(D(x)=1\\)（\\(x\\) 有理），\\(D(x)=0\\)（\\(x\\) 无理）的有界性、单调性、奇偶性、周期性，以及它在任意 \\(x_0\\in\\mathbb R\\) 处极限的存在性。',
  solution: '它只取 0、1，故有界。每个非退化区间中有理数与无理数都稠密；在任一区间内可以按任意先后次序取到函数值 0、1，因此既不递增也不递减。\\(x\\) 与 \\(-x\\) 同为有理数或同为无理数，所以 \\(D(-x)=D(x)\\)，它是偶函数。任何正有理数 \\(T\\) 都是周期，因为加有理数保留有理性与无理性；若 \\(T\\) 为无理数，则 \\(D(0)=1\\)、\\(D(T)=0\\)，故它不是周期。最后任意去心邻域都有有理数和无理数，函数值分别为 1、0，故在每个 \\(x_0\\) 处有限极限均不存在。'
});
window.MIDTERM_REFERENCES['4.1:example:1'] = [
  {...window.MIDTERM_REFERENCES['3.3:exercise:6'].find(x=>x.label.includes('23-24期中考试T17')), label:'23-24期中考试T17改编题（计算分析题；去掉因子 x）'}
];

window.MIDTERM_REFERENCES['3.1:exercise:6'] = [
  {
    label: '24-25期中考试T2考点练习（选择题）',
    statement: '设 \\(f(x)=\\dfrac{1-3^{\\frac1x}}{1+3^{\\frac1x}}\\)，则 \\(\\lim_{x\\to0}f(x)\\) 为：A. 1；B. −1；C. 不存在但不是无穷；D. \\(+\\infty\\)。',
    solution: '当 \\(x\\to0^-\\) 时 \\(3^{\\frac1x}\\to0\\)，故左极限为 1。当 \\(x\\to0^+\\) 时 \\(3^{\\frac1x}\\to+\\infty\\)，分子、分母同除以该正数，得右极限为 −1。左右极限不同，所以双侧有限极限不存在；同时 \\(|f(x)|<1\\)，它也不是无穷大。选 C。'
  }
];
window.MIDTERM_REFERENCES['3.1:exercise:6'].push(
  {...window.MIDTERM_REFERENCES['4.1:exercise:2'][0], label:'25-26期中考试T3改编题（选择题；教材第1小问的符号项）'},
  {...window.MIDTERM_REFERENCES['4.1:exercise:2'][1], label:'24-25期中考试T5改编题（填空题；教材第1小问的符号项）'}
);

window.MIDTERM_REFERENCES['3.5:example:2'] = [
  {
    label: '25-26期中考试T2改编题（选择题；D项）',
    statement: '当 \\(x\\to0^+\\) 时，下列无穷小中与 \\(x\\) 等价的是：A. \\(e^{-\\sin x}-1\\)；B. \\(\\sqrt{1+x}-\\cos x\\)；C. \\(1-\\cos\\sqrt{2x}\\)；D. \\(\\tan x-\\sin x\\)。',
    solution: 'A 在充分小的正 \\(x\\) 处为负，而 \\(x>0\\)，不可能等价于 \\(x\\)。B 有\n\\[\\frac{\\sqrt{1+x}-\\cos x}{x}=\\frac1{\\sqrt{1+x}+1}+\\frac{1-\\cos x}{x}\\longrightarrow\\frac12.\\]\n对 C，令 \\(t=\\sqrt{2x}\\)，由 \\(\\frac{1-\\cos t}{t^2}\\to\\frac12\\) 得 \\(\\frac{1-\\cos\\sqrt{2x}}x\\to1\\)。D 用 \\(\\tan x-\\sin x=\\frac{\\sin x(1-\\cos x)}{\\cos x}\\)，除以 \\(x\\) 后趋于 0。故选 C。'
  }
];

window.MIDTERM_REFERENCES['3.4:exercise:1'] = [
  {...window.MIDTERM_REFERENCES['3.5:example:2'][0], label:'25-26期中考试T2改编题（选择题；教材第5小问）'},
  {
    label:'23-24期中考试T7改编题（教材第6、7小问）',
    statement:String.raw`求 \(\displaystyle\lim_{x\to\infty}\frac{x\arctan(\frac1x)}{x-\cos x}\)。`,
    solution:String.raw`令 \(t=\frac1x\to0\)。由本题第（6）问的 \(\frac{\arctan t}{t}\to1\)，得 \(x\arctan(\frac1x)\to1\)；它与第（7）问的 \(x\sin(\frac1x)\to1\) 只在内层函数上不同。由于 \(|x-\cos x|\ge|x|-1\to+\infty\)，故所求极限为 \(\boxed{0}\)，正、负无穷两侧均成立。`
  }
];

window.MIDTERM_REFERENCES['4.1:exercise:2'].push(
  {
    label: '24-25期中考试T4考点练习（填空题）',
    statement: '函数 \\(\\displaystyle f(x)=\\frac{1-e^{\\frac1{x-1}}}{1+e^{\\frac1{x-1}}}e^{\\frac1x}\\) 的第二类间断点为哪些？',
    solution: '原式在 \\(x=0,1\\) 未定义，其他点由所用初等函数的连续性可知连续。当 \\(x\\to0\\) 时，第一个因子趋于正数 \\(\\frac{1-e^{-1}}{1+e^{-1}}\\)；而 \\(e^{\\frac1x}\\) 从右趋于正无穷、从左趋于 0，所以 0 是第二类中的无穷间断点。当 \\(x\\to1^-\\) 时第一因子趋于 1，从右趋于 −1，\\(e^{\\frac1x}\\to e\\)，左右极限分别为 \\(e,-e\\)，故 1 是跳跃间断点，不是第二类。答案为 \\(x=0\\)。其中初等函数在定义区间的连续性属于华师大 §4.3，可暂作后续工具；两处单侧极限的分类本身使用 §4.1。'
  },
  {
    label: '23-24期中考试T14考点练习（计算题）',
    statement: '设 \\(\\displaystyle f(x)=\\lim_{n\\to\\infty}\\frac{1+x}{1+x^{2n}}\\)。讨论 \\(f\\) 的连续性，若有间断点则判断其类型。',
    solution: '逐点求数列极限：当 \\(|x|<1\\) 时 \\(x^{2n}\\to0\\)，故 \\(f(x)=1+x\\)；当 \\(|x|>1\\) 时分母趋于正无穷，故 \\(f(x)=0\\)；\\(f(1)=1\\)、\\(f(-1)=0\\)。在 −1 处，左右极限和函数值均为 0，故连续；在 1 处左极限为 2、右极限为 0、函数值为 1，故是跳跃间断点。其他点分别位于上述连续表达式的内部，故连续。'
  },
  {
    label: '24-25期中考试T14考点练习（计算题）',
    statement: '设 \\(\\displaystyle f(x)=\\lim_{n\\to\\infty}\\frac{x^n-1}{x^n+1}\\)。讨论 \\(f\\) 的连续性，若有间断点则判断其类型。',
    solution: '当 \\(|x|<1\\) 时数列极限为 −1；当 \\(|x|>1\\) 时写为 \\(1-\\frac2{x^n+1}\\)，极限为 1；当 \\(x=1\\) 时为 0。\\(x=-1\\) 时分母在所有奇数 \\(n\\) 上为 0，故按原式该点无定义。在 −1 处左、右极限依次为 1、−1，故为跳跃间断点；在 1 处左、右极限依次为 −1、1，且函数值为 0，也是跳跃间断点。其余定义域上的点均连续。'
  },
  {
    label: '25-26期中考试T15考点练习（计算题）',
    statement: '设 \\(\\displaystyle f(x)=\\lim_{n\\to\\infty}\\frac{1+x}{1+n x^{2n}}\\)。讨论 \\(f\\) 的连续性，若有间断点则判断其类型。',
    solution: '当 \\(0<|x|<1\\)，令 \\(a=|x|^{-2}>1\\)，由第二章已证的 \\(\\frac{n}{a^n}\\to0\\) 得 \\(n x^{2n}\\to0\\)；\\(x=0\\) 时也显然成立。因此 \\(|x|<1\\) 时 \\(f(x)=1+x\\)。当 \\(|x|>1\\) 时分母趋于正无穷，故 \\(f(x)=0\\)；在 \\(x=\\pm1\\) 时分母为 \\(1+n\\)，故两点函数值均为 0。在 −1 处两侧极限与点值均为 0，连续；在 1 处左极限为 2、右极限及点值为 0，故为跳跃间断点。其余点连续。\n\n与 23-24 期中 T14 对照：那道题的分母为 \\(1+x^{2n}\\)，在 \\(x=1\\) 的函数值为 1；本题多出因子 n，故点值变为 0，但两题在 1 的左右极限仍分别为 2 和 0。'
  }
);

window.MIDTERM_REFERENCES['3.3:exercise:5'] = [
  {
    label: '25-26期中考试T5改编题（选择题；B项；原卷记号待核实）',
    statement: '下列命题正确的是：A. 若 \\(f\\) 在 \\(U^\\circ(x_0)\\) 单调有界，则 \\(\\lim_{x\\to x_0}f(x)\\) 存在；B. 若 \\(f\\) 在 \\(U_+^\\circ(x_0)\\) 单调递增有界，则 \\(f(x_0+0)=\\sup_{U_+^\\circ(x_0)}f(x)\\)；C. 若 \\(f(x)>0,x\\in D\\)，且有界，则 \\(\\sup\\{f(x)>0,\\ x\\in D\\}>0\\)；D. 若集合 \\(E\\) 有上确界 \\(\\beta\\)，则 \\(\\beta\\in E\\)。其中 C 选项按原卷记号保留。',
    solution: 'A 不对：在 \\(x_0\\) 两侧分别取 −1、1，函数在去心邻域单调有界，但双侧极限不存在。B 不对：递增函数在右侧趋近端点时取的是右侧值集的下确界；例如 \\(f(x)=x\\) 在 \\((0,1)\\) 上，右极限为 0 而上确界为 1。D 不对：\\(E=(0,1)\\) 的上确界 1 不属于 \\(E\\)。\n\n原卷 C 的花括号写作 \\(\\{f(x)>0,\\ x\\in D\\}\\)，它不是规范的函数值集合记法，且未明确 \\(D\\) 非空。如果其意图是“\\(D\\ne\\varnothing\\)，且 \\(f\\) 在 \\(D\\) 上正且有上界，则 \\(\\sup\\{f(x):x\\in D\\}>0\\)”，该命题成立：任选 \\(x_*\\in D\\)，上确界至少为 \\(f(x_*)>0\\)。在这一解释下可选 C；原卷记号的实际意图尚需核实，不将修正后的说法冒充原文。'
  }
];

(window.MIDTERM_REFERENCES['3.2:exercise:4'] ||= []).push({
  label: '25-26期中考试T16考点练习（原卷符号待核实）',
  statement: '已知 \\(\\displaystyle\\lim_{x\\to+\\infty}\\frac{x^5}{(x+1)^a-x^n}=b\\)，其中 \\(a\\) 为正整数，\\(b\\) 为非零常数，求 \\(a,b\\)。原卷分母第二项的指数印为 \\(n\\)，但未交代其含义。',
  solution: '原卷没有给出 \\(n\\) 的含义，不能把 \\(x^n\\) 擅自改为 \\(x^a\\)，也不能无条件给出唯一的 \\(a,b\\)。以下仅说明一种明确假设下的结果：若 \\(n\\) 是固定实数，则在 \\(x>0\\) 时各实数幂有定义。\n\n若 \\(a>n\\)，分母最高阶为 \\(x^a\\)，有限非零极限要求 \\(a=5,n<5\\)，此时 \\(b=1\\)。若 \\(a<n\\)，分母最高阶为 \\(-x^n\\)，要求 \\(n=5,a\\in\\{1,2,3,4\\}\\)，此时 \\(b=-1\\)。若 \\(a=n\\)，由正整数的二项式展开，\\((x+1)^a-x^a\\sim a x^{a-1}\\)，有限非零极限要求 \\(a=n=6\\)，此时 \\(b=\\frac16\\)。这些分类依赖于“\\(n\\) 为固定实数”的额外假设；原卷若有其他题意，结果须重新核对。'
});

(window.MIDTERM_REFERENCES['3.5:exercise:5'] ||= []).push({
  label: '23-24期中考试T8考点练习（填空题）',
  statement: '当 \\(x\\to0\\) 时，\\((1+a x^2)^{\\frac15}-1\\) 与 \\(\\cos x-1\\) 为等价无穷小，求常数 \\(a\\)。',
  solution: '当 \\(x\\) 充分接近 0 时 \\(1+a x^2>0\\)。令 \\(t=(1+a x^2)^{\\frac15}\\)，则 \\(t\\to1\\)，且\n\\[\nt-1=\\frac{a x^2}{t^4+t^3+t^2+t+1}.\n\\]\n因此 \\(\\frac{t-1}{\\cos x-1}\\to\\frac{\\frac{a}{5}}{-\\frac12}=-\\frac{2a}{5}\\)。等价要求该比值为 1，故 \\(a=-\\frac52\\)；代回可验证分母及两函数在充分小的去心邻域内非零。'
});
window.MIDTERM_REFERENCES['3.2:exercise:8'] = [
  {...window.MIDTERM_REFERENCES['3.5:exercise:5'].find(x=>x.label.includes('23-24期中考试T8')), label:'23-24期中考试T8改编题（填空题；教材第4小问）'},
  {
    ...window.MIDTERM_REFERENCES['3.1:exercise:1'][0],
    label:'25-26期中考试T7改编题（教材第5小问；倒数换元）',
    solution:String.raw`令 \(y=\frac1x\)。当 \(x\to0\) 的两侧趋近时，\(|y|\to\infty\)，且
\[x\left\lfloor\frac1x\right\rfloor=\frac{\lfloor y\rfloor}{y}.\]
这正是教材第（5）问在双向无穷远处的函数。也可直接令 \(r=y-\lfloor y\rfloor\in[0,1)\)，得到
\[\left|\frac{\lfloor y\rfloor}{y}-1\right|=\frac r{|y|}\le\frac1{|y|}\longrightarrow0.\]
因此试卷极限为 \(\boxed1\)。`
  }
];
window.MIDTERM_REFERENCES['3.2:example:4'] = [
  {
    ...window.MIDTERM_REFERENCES['3.1:exercise:1'][0],
    label:'25-26期中考试T7改编题（对应举一反三的指数）',
    solution:String.raw`对 \(x\ne0\)，设 \(r=\frac1x-\lfloor\frac1x\rfloor\)，则 \(0\le r<1\)。于是
\[x\left\lfloor\frac1x\right\rfloor=1-xr\longrightarrow1,\]
其中 \(|xr|\le|x|\to0\)，适用于两侧趋近。因而试卷答案为 \(\boxed1\)。

本页练习的指数是在试卷式上再乘 \(x\)：
\[x^2\left\lfloor\frac1x\right\rfloor=x\left(x\left\lfloor\frac1x\right\rfloor\right)\longrightarrow0.\]
接着利用本例 \(a^u\to1\)（\(u\to0\)）即可求出练习极限。`
  }
];

window.MIDTERM_REFERENCES['2.2:exercise:3'] = [
  {
    label: '23-24期中考试T11考点练习（计算题）',
    statement: '求 \\(\\displaystyle\\lim_{n\\to\\infty}\\left(\\frac1{n^2+n+1}+\\frac2{n^2+n+2}+\\cdots+\\frac n{n^2+n+n}\\right)\\)。',
    solution: '对于 \\(1\\le k\\le n\\)，分母满足 \\(n^2+n+1\\le n^2+n+k\\le n^2+2n\\)。各项均为正，所以\n\\[\n\\frac{\\sum_{k=1}^n k}{n^2+2n}\\le\\sum_{k=1}^n\\frac{k}{n^2+n+k}\\le\\frac{\\sum_{k=1}^n k}{n^2+n+1}.\n\\]\n利用 \\(\\sum_{k=1}^n k=\\frac{n(n+1)}2\\)，两端均趋于 \\(\\frac12\\)。由迫敛性，原极限为 \\(\\frac12\\)。'
  },
  {
    label: '25-26期中考试T9考点练习（填空题）',
    statement: '求 \\(\\displaystyle\\lim_{n\\to\\infty}\\left(\\frac{1^2}{n^3}+\\frac{2^2}{n^3}+\\cdots+\\frac{n^2}{n^3}\\right)\\)。',
    solution: '由平方和公式 \\(\\sum_{k=1}^{n}k^2=\\frac{n(n+1)(2n+1)}6\\)，原式等于 \\(\\frac{n(n+1)(2n+1)}{6n^3}\\to\\frac13\\)。'
  }
];

window.MIDTERM_REFERENCES['2.1:exercise:9'] = [
  {...window.MIDTERM_REFERENCES['2.2:exercise:3'][0], label:'23-24期中考试T11改编题（教材第2小问；改变分母）'},
  {...window.MIDTERM_REFERENCES['2.2:exercise:3'][1], label:'25-26期中考试T9改编题（教材第2小问；改变分子幂次）'}
];
window.MIDTERM_REFERENCES['2.3:example:2'].push({
  ...window.MIDTERM_REFERENCES['2.3:exercise:3'][1],
  label:'25-26期中考试T14改编题（嵌套根号内由2改为3）'
});

window.MIDTERM_REFERENCES['2.2:example:2'].push({
  label: '24-25期中考试T11考点练习（计算题）',
  statement: '求 \\(\\displaystyle\\lim_{n\\to\\infty}\\left(1+\\frac13+\\frac15+\\cdots+\\frac1{2n+1}\\right)^{\\frac1n}\\)。',
  solution: '令括号内和为 \\(S_n\\)。它共有 \\(n+1\\) 项，每项正且不超过 1，所以 \\(1\\le S_n\\le n+1\\)。取 \\(n\\) 次根，\\(1\\le S_n^{\\frac1n}\\le(n+1)^{\\frac1n}\\)。而 \\((n+1)^{\\frac1n}=(1+\\frac1n)^{\\frac1n}n^{\\frac1n}\\to1\\)，最后一个因子是本例的结论，第一个因子也由夹逼趋于 1。故原极限为 1。'
});
window.MIDTERM_REFERENCES['2.2:example:2'].push({
  ...window.MIDTERM_REFERENCES['2.2:exercise:8'][1],
  label:'25-26期中考试T12改编题（n次根n的应用）',
  solution:String.raw`由本例 \(n^{\frac1n}\to1\)，有 \(\sqrt[n]{n^3}=(n^{\frac1n})^3\to1\)。因此充分大 n 时 \(\sqrt[n]{n^3}<3\)，即 \(n^3<3^n\)。于是
\[3\le\sqrt[n]{n^3+3^n}\le3\sqrt[n]2\longrightarrow3.\]
试卷在本例的多项式底数基础上加入 \(3^n\)，再利用两项的增长比较与夹逼求极限。`
});

window.MIDTERM_REFERENCES['2.1:exercise:5'] = [
  {...window.MIDTERM_REFERENCES['2.1:example:8'][1], label:'25-26期中考试T1改编题（选择题；A项对应举一反三）'}
];
window.MIDTERM_REFERENCES['2.2:exercise:1'] = [
  {...window.MIDTERM_REFERENCES['2.2:exercise:3'][0], label:'23-24期中考试T11改编题（对应举一反三）'},
  {...window.MIDTERM_REFERENCES['2.2:exercise:3'][1], label:'25-26期中考试T9改编题（对应举一反三）'}
];

(window.MIDTERM_REFERENCES['3.4:example:2'] ||= []).push({
  label: '24-25期中考试T3改编题（填空题；余弦极限与参数）',
  statement: '设 \\(a>0\\)，且 \\(\\displaystyle\\lim_{x\\to0}\\frac{x^2}{(b-\\cos x)\\sqrt{a+x^2}}=1\\)，求 \\(a,b\\)。',
  solution: '若 \\(b\\ne1\\)，分母趋于非零数 \\((b-1)\\sqrt a\\)，极限为 0，矛盾。因此 \\(b=1\\)。由 \\(\\frac{1-\\cos x}{x^2}\\to\\frac12\\) 与 \\(\\sqrt{a+x^2}\\to\\sqrt a>0\\)，原极限为 \\(\\frac2{\\sqrt a}\\)。令其等于 1，得 \\(a=4\\)。代回满足题设，故 \\((a,b)=(4,1)\\)。'
});

window.MIDTERM_REFERENCES['3.5:example:3'] = [
  {...window.MIDTERM_REFERENCES['3.3:example:1'][0], label:'23-24期中考试T2考点练习（选择题；辨析无界和无穷大）'}
];
window.MIDTERM_REFERENCES['3.1:exercise:8'] = [{
  label:'25-26期中考试T18改编题（由极限判断连续性）',
  statement:String.raw`证明黎曼函数 \(R(x)=\frac1q\)（\(x=\frac pq\in(0,1)\) 为既约真分数）、\(R(x)=0\)（\(x=0,1\) 或 \(x\) 为 \((0,1)\) 内无理数），在 \((0,1)\) 内任何无理点连续、任何有理点不连续。`,
  solution:String.raw`由本题已证的结论，对任意 \(x_0\in(0,1)\)，都有 \(\lim_{x\to x_0}R(x)=0\)。若 \(x_0\) 是无理数，则 \(R(x_0)=0\)，等于其极限，故连续；若 \(x_0=\frac pq\) 为既约真分数，则 \(R(x_0)=\frac1q>0\)，不等于极限，故不连续。`
}];

window.MIDTERM_REFERENCES['3.4:example:2'].push({
  ...window.MIDTERM_REFERENCES['3.5:example:2'][0],
  label:'25-26期中考试T2改编题（选择题；C项）'
});

window.MIDTERM_REFERENCES['3.total:exercise:2'].push({
  label: '24-25期中考试T16改编题（教材第2、3小问）',
  statement: '求曲线 \\(y=\\sqrt{x^2-x+1}\\) 的斜渐近线。',
  solution: '当 \\(x\\to+\\infty\\) 时，\\[\\sqrt{x^2-x+1}-x=\\frac{1-x}{\\sqrt{x^2-x+1}+x}\\longrightarrow-\\frac12,\\]故有斜渐近线 \\(y=x-\\frac12\\)。当 \\(x\\to-\\infty\\) 时，\\[\\sqrt{x^2-x+1}+x=\\frac{1-x}{\\sqrt{x^2-x+1}-x}\\longrightarrow\\frac12,\\]故有斜渐近线 \\(y=-x+\\frac12\\)。根式在全实数上有定义，这两条分别对应正、负无穷方向。'
});

(window.MIDTERM_REFERENCES['3.5:exercise:4'] ||= []).push({
  label: '25-26期中考试T10考点练习（填空题）',
  statement: '设 \\(g\\) 是 \\(\\displaystyle f(t)=\\frac12\\ln\\frac{3+t}{3-t}\\) 的反函数，求曲线 \\(y=g(x)\\) 的渐近线方程。',
  solution: '原函数的实定义域为 \\((-3,3)\\)。由 \\(x=\\frac12\\ln\\frac{3+t}{3-t}\\)，得 \\(e^{2x}=\\frac{3+t}{3-t}\\)，解得\n\\[\ng(x)=3\\frac{e^{2x}-1}{e^{2x}+1}.\n\\]\n当 \\(x\\to+\\infty\\) 时 \\(g(x)\\to3\\)；当 \\(x\\to-\\infty\\) 时 \\(g(x)\\to-3\\)。因此水平渐近线为 \\(y=3\\)、\\(y=-3\\)。反函数在所有实数上有定义且有界，不存在垂直或其他斜渐近线。'
});

(window.MIDTERM_REFERENCES['3.4:example:3'] ||= []).push({
  label: '25-26期中考试T11考点练习（计算题）',
  statement: '求 \\(\\displaystyle\\lim_{x\\to\\infty}\\left(\\cos\\frac1x\\right)^{x^2}\\)。',
  solution: '当 \\(x\\) 的绝对值充分大时 \\(\\cos\\frac1x>0\\)。令 \\(u=\\cos\\frac1x-1\\)，则 \\(u\\to0\\)，并由 \\(\\frac{1-\\cos t}{t^2}\\to\\frac12\\) 得 \\(x^2u\\to-\\frac12\\)。按照本节的 \\(1^\\infty\\) 型极限定理：若 \\(u\\to0\\)、\\(v u\\to L\\) 且底数最终为正，则 \\((1+u)^v\\to e^L\\)。这里取 \\(v=x^2\\)、\\(L=-\\frac12\\)，故极限为 \\(e^{-\\frac12}\\)。'
});
window.MIDTERM_REFERENCES['3.4:example:2'].push({
  ...window.MIDTERM_REFERENCES['3.4:example:3'].find(x=>x.label.includes('25-26期中考试T11')),
  label:'25-26期中考试T11考点练习（余弦二次极限与幂式）'
});
window.MIDTERM_REFERENCES['4.1:exercise:3'].push(
  {...window.MIDTERM_REFERENCES['3.4:example:2'].find(x=>x.label.includes('24-25期中考试T3')), label:'24-25期中考试T3改编题（填空题；教材第2小问）'},
  {...window.MIDTERM_REFERENCES['3.4:example:2'].find(x=>x.label.includes('25-26期中考试T2')), label:'25-26期中考试T2改编题（选择题；教材第2小问与C项）'},
  {...window.MIDTERM_REFERENCES['3.4:example:2'].find(x=>x.label.includes('25-26期中考试T11')), label:'25-26期中考试T11考点练习（教材第2小问的余弦二次极限）'}
);

(window.MIDTERM_REFERENCES['3.5:exercise:2'] ||= []).push({
  label: '23-24期中考试T12考点练习（计算题；§4.3 对数极限）',
  statement: '求 \\(\\displaystyle\\lim_{x\\to0}\\frac{\\sqrt{1+x\\sin x}-\\sqrt{\\cos x}}{\\ln(1+\\tan^2x)}\\)。',
  solution: '使用华师大 §4.3 后续的对数基本极限 \\(\\frac{\\ln(1+t)}t\\to1\\)。在 0 的充分小去心邻域中根式及分母均有意义，分子有理化为\n\\[\n\\frac{x\\sin x+1-\\cos x}{\\sqrt{1+x\\sin x}+\\sqrt{\\cos x}}.\n\\]\n由 \\(\\frac{\\sin x}{x}\\to1\\)、\\(\\frac{1-\\cos x}{x^2}\\to\\frac12\\)，分子中 \\(x\\sin x+1-\\cos x\\) 除以 \\(x^2\\) 趋于 \\(\\frac32\\)，两个根式之和趋于 2。另一方面，\\[\\frac{\\ln(1+\\tan^2x)}{x^2}=\\frac{\\ln(1+\\tan^2x)}{\\tan^2x}\\left(\\frac{\\tan x}{x}\\right)^2\\longrightarrow1.\\]\n故原极限为 \\(\\frac{3}{2}\\cdot\\frac12=\\frac34\\)。'
});

window.MIDTERM_REFERENCES['3.5:exercise:5'].push({
  label: '24-25期中考试T3考点练习（选择题；§4.3 对数极限）',
  statement: '设 \\(a=\\ln(\\cos2x)\\)，\\(b=\\ln\\frac{1-x^2}{1+x^2}\\)。当 \\(x\\to0\\) 时，\\(a\\) 是 \\(b\\) 的：A. 高阶无穷小；B. 等价无穷小；C. 同阶但非等价无穷小；D. 低阶无穷小。',
  solution: '在 0 的充分小邻域，两对数的真数均为正。使用华师大 §4.3 后续的 \\(\\ln(1+t)\\sim t\\)（\\(t\\to0\\)）：\n\\[\na\\sim\\cos2x-1\\sim-2x^2,\\qquad\nb\\sim\\frac{1-x^2}{1+x^2}-1=-\\frac{2x^2}{1+x^2}\\sim-2x^2.\n\\]\n因此 \\(\\frac{a}{b}\\to1\\)，二者等价，选 B。'
});

window.MIDTERM_REFERENCES['3.4:example:3'].push({
  label: '24-25期中考试T13考点练习（计算题；§4.3 对数极限）',
  statement: '设 \\(n\\) 为固定正整数，求 \\(\\displaystyle\\lim_{x\\to0}\\left(\\frac{e^x+e^{2x}+\\cdots+e^{nx}}n\\right)^{\\frac1x}\\)。',
  solution: '设底数为 \\(1+u(x)\\)，它始终为正且 \\(u(x)\\to0\\)。使用华师大 §4.3 后续的 \\(\\frac{e^t-1}{t}\\to1\\) 及 \\(\\frac{\\ln(1+t)}t\\to1\\)，有\n\\[\n\\frac{u(x)}x=\\frac1n\\sum_{k=1}^n\\frac{e^{kx}-1}{x}\\longrightarrow\\frac1n\\sum_{k=1}^n k=\\frac{n+1}{2}.\n\\]\n若 \\(u(x)\\ne0\\)，原式对数为 \\(\\frac{\\ln(1+u(x))}{u(x)}\\frac{u(x)}x\\to\\frac{n+1}{2}\\)；当 \\(x\\ne0\\) 时各 \\(e^{kx}-1\\) 与 \\(x\\) 同号，故 \\(u(x)\\ne0\\)。由指数函数连续性，原极限为 \\(e^{\\frac{n+1}{2}}\\)。'
});

window.MIDTERM_REFERENCES['3.1:exercise:6'].push(
  {
    label: '23-24期中考试T15改编题（教材第2小问；§4.3 对数极限）',
    statement: '确定常数 \\(a\\) 使 \\(\\displaystyle\\lim_{x\\to0}\\left(\\frac{\\ln(1+e^{\\frac3x})}{\\ln(1+e^{\\frac1x})}+a[x]\\right)\\) 存在，并求该极限。\\([x]\\) 表示不超过 \\(x\\) 的最大整数。',
    solution: '使用华师大 §4.3 后续的 \\(\\ln(1+t)\\sim t\\) 和对数、指数极限。当 \\(x\\to0^+\\) 时 \\([x]=0\\)，且 \\(\\ln(1+e^{\\frac3x})=\\frac3x+\\ln(1+e^{-\\frac3x})\\)，同理分母为 \\(\\frac1x+\\ln(1+e^{-\\frac1x})\\)，其比趋于 3，故右极限为 3。当 \\(x\\to0^-\\)，令 \\(t=e^{\\frac1x}\\to0^+\\)，对数比为 \\(\\frac{\\ln(1+t^3)}{\\ln(1+t)}\\sim t^2\\to0\\)，且 \\([x]=-1\\)，左极限为 \\(-a\\)。要使双侧极限存在，须且只须 \\(-a=3\\)，故 \\(a=-3\\)，极限为 3。'
  },
  {
    label: '24-25期中考试T15改编题（教材第2小问；§4.3 对数极限）',
    statement: '确定参数 \\(\\lambda\\) 使 \\(\\displaystyle\\lim_{x\\to0}\\left(\\frac{\\ln(1+e^{\\frac2x})}{\\ln(1+e^{\\frac1x})}+\\lambda[x]\\right)\\) 存在，并求极限。',
    solution: '使用华师大 §4.3 后续的 \\(\\ln(1+t)\\sim t\\) 和对数、指数极限。\\(x\\to0^+\\) 时，\\([x]=0\\)，把两对数分别写成 \\(\\frac2x+\\ln(1+e^{-\\frac2x})\\) 与 \\(\\frac1x+\\ln(1+e^{-\\frac1x})\\)，比值趋于 2，右极限为 2。\\(x\\to0^-\\) 时令 \\(t=e^{\\frac1x}\\to0^+\\)，对数比 \\(\\frac{\\ln(1+t^2)}{\\ln(1+t)}\\sim t\\to0\\)，而 \\([x]=-1\\)，左极限为 \\(-\\lambda\\)。左右相等当且仅当 \\(\\lambda=-2\\)，此时极限为 2。\n\n与 23-24 期中 T15 对照：那题分子指数为 \\(\\frac3x\\)，所以右极限为 3、相应参数为 −3；本题改为 \\(\\frac2x\\)，得到 2 和 −2。'
  }
);

window.MIDTERM_REFERENCES['4.1:exercise:1'] = [
  {
    label: '23-24期中考试T5考点练习（选择题；第五章导数）',
    statement: '设 \\(f(x)\\) 在 \\(x=0\\) 处连续，下列命题错误的是：A. 若 \\(\\lim_{x\\to0}\\frac{f(x)}x\\) 存在，则 \\(f(0)=0\\)；B. 若 \\(\\lim_{x\\to0}\\frac{f(x)+f(-x)}x\\) 存在，则 \\(f(0)=0\\)；C. 若 \\(\\lim_{x\\to0}\\frac{f(x)}x\\) 存在，则 \\(f\\) 在 0 处可导；D. 若 \\(\\lim_{x\\to0}\\frac{f(x)-f(-x)}x\\) 存在，则 \\(f\\) 在 0 处可导。',
    solution: '本题用到华师大第五章导数定义。A：若 \\(\\frac{f(x)}{x}\\) 有有限极限，由乘积极限得 \\(f(x)\\to0\\)，再由连续性得 \\(f(0)=0\\)。B：同理 \\(f(x)+f(-x)\\to0\\)，由连续性左端趋于 \\(2f(0)\\)，故 \\(f(0)=0\\)。C：由 A 得 \\(f(0)=0\\)，所以导数差商 \\(\\frac{f(x)-f(0)}x\\) 的极限存在。D 错：取 \\(f(x)=|x|\\)，它在 0 连续，给出的对称差商恒为 0，但左右导数分别为 −1 和 1，不可导。故选 D。'
  },
  {
    label: '23-24期中考试T9考点练习（填空题；第五章导数）',
    statement: '设 \\(f\\) 在 0 处连续，且 \\(\\displaystyle\\lim_{x\\to0}\\frac{f(x)}x=2\\)，求 \\(f^{\\prime}(0)\\)。',
    solution: '本题用到第五章导数定义。由 \\(\\frac{f(x)}x\\to2\\) 及 \\(x\\to0\\)，得 \\(f(x)\\to0\\)；连续性给出 \\(f(0)=0\\)。于是 \\(f^{\\prime}(0)=\\lim_{x\\to0}\\frac{f(x)-f(0)}x=2\\)。'
  },
  {
    label: '24-25期中考试T5改编题（选择题；教材第1小问；§4.2 一致连续）',
    statement: '区间 \\((0,1)\\) 上非一致连续的函数是：A. \\(y=\\sin x\\)；B. \\(y=\\cos x\\)；C. \\(y=\\frac1x\\)；D. \\(y=x^2\\)。',
    solution: '本题用到华师大 §4.2 后续的一致连续定义。由和差化积和 \\(|\\sin t|\\le|t|\\)，\\(|\\sin x-\\sin y|\\le|x-y|\\)，余弦同理；又 \\(x,y\\in(0,1)\\) 时 \\(|x^2-y^2|<2|x-y|\\)。因此 A、B、D 均可按 \\(\\varepsilon\\) 选与位置无关的 \\(\\delta\\)。取 \\(x_n=\\frac1n\\)、\\(y_n=\\frac1{n+1}\\)（\\(n\\ge2\\)），则 \\(|x_n-y_n|\\to0\\)，但倒数之差恒为 1，故 C 不一致连续。选 C。'
  }
];

window.MIDTERM_REFERENCES['4.1:exercise:1'].push({
  label: '23-24期中考试T10考点练习（填空题；第五章导数）',
  statement: '设 \\(y(x)=x(x+1)(x+2)\\cdots(x+2023)\\)，求 \\(\\left.\\dfrac{dy}{dx}\\right|_{x=-1}\\)。',
  solution: '本题用到第五章导数定义。将 \\(y(x)=(x+1)G(x)\\)，其中 \\(G(x)=x(x+2)\\cdots(x+2023)\\)。因为 \\(y(-1)=0\\)，差商为\n\\[\n\\frac{y(x)-y(-1)}{x-(-1)}=G(x)\\longrightarrow G(-1).\n\\]\n多项式连续，且 \\(G(-1)=(-1)\\cdot1\\cdot2\\cdots2022=-2022!\\)，所以所求导数为 \\(-2022!\\)。'
});

(window.MIDTERM_REFERENCES['4.1:example:2'] ||= []).push({
  label: '24-25期中考试T1改编题（填空题；分段函数与复合）',
  statement: '设 \\(f(x)=\\sin x\\)，\\(g(x)=\\begin{cases}x-\\pi,&x\\le0,\\\\x+\\pi,&x>0.\\end{cases}\\) 问复合函数 \\(f(g(x))\\) 在 \\(x=0\\) 处是否连续。',
  solution: '对 \\(x\\le0\\)，\\(\\sin(x-\\pi)=-\\sin x\\)；对 \\(x>0\\)，\\(\\sin(x+\\pi)=-\\sin x\\)。因此对所有实数 \\(f(g(x))=-\\sin x\\)，在 0 处连续。注意 \\(g\\) 在 0 的左、右极限分别为 \\(-\\pi,\\pi\\)，自身不连续。华师大 §4.2 习题 5 使用同一组函数，还要求证明内层不连续；该教材题属于后续小节，本处保留试卷问法。'
});

window.MIDTERM_REFERENCES['4.1:exercise:1'].push(
  {
    label: '23-24期中考试T18考点练习（证明题；§4.2 介值定理）',
    statement: '设函数 \\(f\\) 在闭区间 \\([a,b]\\) 上连续，且 \\(f(a)=f(b)\\)，证明：存在 \\(\\xi\\in[a,b)\\)，使得 \\(f(\\xi)=f(\\xi+\\frac{b-a}{2})\\)。',
    solution: '按通常区间约定 \\(a<b\\)，并使用华师大 §4.2 后续的连续函数介值定理。令 \\(m=\\frac{a+b}{2}\\)、\\(h(t)=f(t+\\frac{b-a}{2})-f(t)\\)，其中 \\(t\\in[a,m]\\)。则 \\(h\\) 连续，且 \\(h(a)=f(m)-f(a)\\)、\\(h(m)=f(b)-f(m)=-h(a)\\)。若端点之一为零，直接取该端点；否则两端异号，由介值定理存在 \\(\\xi\\in(a,m)\\) 使 \\(h(\\xi)=0\\)。所取点总在 \\([a,m]\\subset[a,b)\\)，且 \\(\\xi+\\frac{b-a}{2}\\in[a,b]\\)，所以两个函数值均有定义并相等。'
  },
  {
    label: '24-25期中考试T18考点练习（证明题；§4.2 介值定理）',
    statement: '设 \\(f\\) 在 \\([0,1]\\) 上连续且 \\(f(0)=f(1)\\)，证明：对任意正整数 \\(n\\)，存在 \\(\\xi\\in[0,1]\\) 使 \\(f(\\xi)=f(\\xi+\\frac1n)\\)。',
    solution: '使用华师大 §4.2 后续的介值定理。令 \\(h(t)=f(t+\\frac1n)-f(t)\\)，定义在 \\([0,1-\\frac1n]\\) 上。若 \\(n=1\\)，取 \\(\\xi=0\\) 即可。若 \\(n\\ge2\\)，记 \\(d_k=h(\\frac{k}{n})\\)（\\(k=0,\\ldots,n-1\\)），则望远镜求和给出 \\(\\sum_{k=0}^{n-1}d_k=f(1)-f(0)=0\\)。若某个 \\(d_k=0\\)，直接取该点；否则这些数必有正有负。连续函数 \\(h\\) 在对应两点间由介值定理取 0。于是可取得更强的 \\(\\xi\\in[0,1-\\frac1n]\\)，保证 \\(\\xi+\\frac1n\\in[0,1]\\)。原卷只写 \\(\\xi\\in[0,1]\\)，此处补明使函数值有定义的范围。'
  },
  {
    label: '25-26期中考试T17考点练习（证明题；§4.2 介值定理）',
    statement: '设 \\(f\\) 在 \\([a,b]\\) 上连续，任取 \\(p>0,q>0\\)，证明：存在 \\(\\xi\\in[a,b]\\)，使 \\(p f(a)+q f(b)=(p+q)f(\\xi)\\)。',
    solution: '使用华师大 §4.2 后续的介值定理。因为 \\(p,q>0\\)，\\[\\frac{p f(a)+q f(b)}{p+q}=\\frac p{p+q}f(a)+\\frac q{p+q}f(b)\\] 是两个端点函数值的凸组合，因而介于 \\(f(a)\\) 与 \\(f(b)\\) 之间。若两端点函数值相等，取任一端点；否则由介值定理存在 \\(\\xi\\in[a,b]\\) 取到该值。两边乘以 \\(p+q>0\\) 即得结论。'
  }
);
