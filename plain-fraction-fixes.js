// Format specifically reviewed fractions written as plain prose, leaving
// source-page separators and already-delimited formulas untouched.
(() => {
  const q=window.REVIEW_SOLUTIONS;
  const R=String.raw;
  const rules={
    '2.1:example:1':{solutionSource:{'q=1/2':R`q=\frac12`},chenSource:{'q=1/2':R`q=\frac12`}},
    '2.2:exercise:3':{solutionSource:{'1/2':R`\frac12`},guidance:{'1/2':R`\frac12`}},
    '2.2:exercise:8':{variantSource:{'1/n':R`\frac1n`}},
    '2.3:example:3':{guidance:{'1/(n+1)':R`\frac1{n+1}`,'1/n':R`\frac1n`}},
    '2.3:example:4':{guidance:{'1/[k(k−1)]':R`\frac1{k(k-1)}`}},
    '2.3:example:7':{guidance:{'9/10^k':R`\frac9{10^k}`,'1/m':R`\frac1m`},variantSource:{'1/[n(n+1)]':R`\frac1{n(n+1)}`}},
    '2.3:exercise:1':{variantSource:{'⌊n/2⌋':R`\lfloor\frac n2\rfloor`}},
    '2.3:exercise:4':{variantSource:{'n/(n+1)':R`\frac n{n+1}`}},
    '2.3:exercise:5':{guidance:{'1/[k(k−1)]':R`\frac1{k(k-1)}`,'1/k²':R`\frac1{k^2}`,'1/m−1/n':R`\frac1m-\frac1n`}},
    '2.3:exercise:7':{guidance:{'1/q':R`\frac1q`}},
    '2.3:exercise:9':{guidance:{'1+1/(n+1)':R`1+\frac1{n+1}`,'1+1/n':R`1+\frac1n`}},
    '2.3:exercise:10':{guidance:{'1+1/n':R`1+\frac1n`,'a_n/n':R`\frac{a_n}n`,'3/n':R`\frac3n`}},
    '2.total:exercise:2':{guidance:{'1/|q|':R`\frac1{|q|}`},variantSource:{'n^k/a^n→0':R`\frac{n^k}{a^n}\to0`}},
    '2.total:exercise:5':{guidance:{'(n+1)^n/n!':R`\frac{(n+1)^n}{n!}`}},
    '2.total:exercise:10':{guidance:{'1/2':R`\frac12`}},
    '3.1:exercise:2':{variantSource:{'1/2':R`\frac12`},variantSolution:{'1/2':R`\frac12`}},
    '3.1:exercise:7':{guidance:{'x<1/M':R`x<\frac1M`,'1/x':R`\frac1x`},verification:{'δ=1/M':R`\delta=\frac1M`}},
    '3.1:exercise:8':{guidance:{'1/ε':R`\frac1\varepsilon`}},
    '3.1:example:1':{guidance:{'|x|>1/ε':R`|x|>\frac1\varepsilon`,'M=1/ε':R`M=\frac1\varepsilon`,'1/|x|':R`\frac1{|x|}`}},
    '3.1:example:2':{guidance:{'−π/2':R`-\frac\pi2`,'π/2':R`\frac\pi2`,'π/4':R`\frac\pi4`}},
    '3.1:example:3':{chenSource:{'(x(x-1)/(x^2-1))':R`\frac{x(x-1)}{x^2-1}`}},
    '3.1:example:7':{guidance:{'ε²/2':R`\frac{\varepsilon^2}2`}},
    '3.2:example:1':{guidance:{'[1/x]':R`[\frac1x]`,'1/x−1':R`\frac1x-1`,'1/x':R`\frac1x`}},
    '3.2:example:4':{guidance:{'−1/N':R`-\frac1N`,'1/N':R`\frac1N`}},
    '3.3:example:1':{guidance:{'1/x':R`\frac1x`}},
    '3.3:exercise:6':{exam:{'ε₀=1/2':R`\varepsilon_0=\frac12`}},
    '3.4:example:1':{chenSource:{'sin t/t→1':R`\frac{\sin t}t\to1`}},
    '3.4:example:2':{guidance:{'sin t/t':R`\frac{\sin t}t`,'(x/2)²':R`(\frac x2)^2`},chenSource:{'sin t/t→1':R`\frac{\sin t}t\to1`}},
    '3.4:example:3':{guidance:{'1/(2x)':R`\frac1{2x}`},chenSource:{'(1+1/t)^t→e':R`(1+\frac1t)^t\to e`}},
    '3.4:example:4':{guidance:{'−1/u':R`-\frac1u`,'1/x':R`\frac1x`},chenSource:{'(1+1/t)^t→e':R`(1+\frac1t)^t\to e`}},
    '3.4:example:5':{guidance:{'(1+1/n)^n':R`(1+\frac1n)^n`,'1/n':R`\frac1n`},chenSource:{'(1+1/t)^t→e':R`(1+\frac1t)^t\to e`}},
    '3.4:exercise:1':{focus:{'sin t/t→1':R`\frac{\sin t}t\to1`},guidance:{'sin t/t':R`\frac{\sin t}t`,'x²/2≥0':R`\frac{x^2}2\ge0`}},
    '3.5:example:2':{chenSource:{'sin t/t→1':R`\frac{\sin t}t\to1`}},
    '3.5:example:3':{guidance:{'1/x²>G':R`\frac1{x^2}>G`,'|x|<1/√G':R`|x|<\frac1{\sqrt G}`}},
    '3.5:example:5':{guidance:{'G/K':R`\frac GK`},chenSolution:{'G/K':R`\frac GK`}},
    '3.5:exercise:3':{statement:{'1/f':R`\frac1f`,'1/g':R`\frac1g`},solution:{'1/f':R`\frac1f`,'1/g':R`\frac1g`},exam:{'1/g':R`\frac1g`},guidance:{'1/G':R`\frac1G`,'1/ε':R`\frac1\varepsilon`}},
    '3.5:exercise:6':{exam:{'α=n(n+1)/2':R`\alpha=\frac{n(n+1)}2`,'α=5/2':R`\alpha=\frac52`}},
    '3.5:exercise:9':{focus:{'f/g→1':R`\frac fg\to1`}},
    '3.total:exercise:1':{exam:{'1/2':R`\frac12`}},
    '3.total:exercise:2':{focus:{'f(x)/x':R`\frac{f(x)}x`}},
    '3.total:exercise:10':{exam:{'m/x→1':R`\frac mx\to1`}},
    '4.1:exercise:7':{guidance:{'ε/2':R`\frac\varepsilon2`}}
  };
  function update(value,replacements) {
    const keys=Object.keys(replacements).sort((a,b)=>b.length-a.length);
    const escape=s=>s.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
    const pattern=new RegExp(keys.map(escape).join('|'),'g');
    return value.split(/(\\\([\s\S]*?\\\)|\\\[[\s\S]*?\\\])/g)
      .map((part,i)=>i%2?part:part.replace(pattern,m=>'\\('+replacements[m]+'\\)')).join('');
  }
  for(const [id,fields] of Object.entries(rules))for(const [field,replacements] of Object.entries(fields)) {
    if(q[id] && typeof q[id][field]==='string') q[id][field]=update(q[id][field],replacements);
  }
  const items=window.REVIEW_TOPICS;
  if(items?.oneinf?.items?.[0]?.guidance) items.oneinf.items[0].guidance=update(items.oneinf.items[0].guidance,{'2/n':R`\frac2n`});
  if(items?.oneinf?.items?.[4]?.guidance) items.oneinf.items[4].guidance=update(items.oneinf.items[4].guidance,{'1/x^2':R`\frac1{x^2}`,'a/x':R`\frac ax`});
  const map=window.REVIEW_MINDMAPS?.[4]?.nodes;
  if(map) for(const node of map)if(node.explanation && node.explanation.includes('1/x'))node.explanation=update(node.explanation,{'1/x':R`\frac1x`});
})();
