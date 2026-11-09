window.REVIEW_SOLUTIONS['3.1:example:2'] = {
  "type": "proof",
  "statement": "证明：（1）\\(\\displaystyle\\lim_{x\\to-\\infty}\\arctan x=-\\pi/2\\)；（2）\\(\\displaystyle\\lim_{x\\to+\\infty}\\arctan x=\\pi/2\\)。",
  "focus": "利用反正切的值域与单调性，将角度误差转为 x 的阈值，并分别控制正、负方向。",
  "reference": "华师大《数学分析》第六版上册 §3.1 例 2，印刷第 44 页（PDF 第 57 页）；正、负无穷处极限定义见印刷第 43—44 页。",
  "solutionSource": "依据华师大第六版 §3.1 例 2 的反三角函数单调性与定义证明，补全正无穷小问并处理任意 ε。陈教材的相关阈值构造另列。",
  "solution": "任给 \\(\\varepsilon>0\\)，令 \\(\\eta=\\min\\{\\varepsilon,\\pi/4\\}\\)，并取\n\\[\nM=\\tan\\left(\\frac\\pi2-\\eta\\right)>0.\n\\]\n因为 \\(0<\\eta\\le\\pi/4\\)，上述角度位于 \\((0,\\pi/2)\\)。\n\n（1）若 \\(x<-M\\)，由 \\(\\arctan\\) 严格递增及其值域为 \\((-\\pi/2,\\pi/2)\\)，\n\\[\n-\\frac\\pi2<\\arctan x\n<\\arctan(-M)=-\\frac\\pi2+\\eta.\n\\]\n因此 \\(|\\arctan x+\\pi/2|<\\eta\\le\\varepsilon\\)。由负无穷处的定义，极限为 \\(-\\pi/2\\)。\n\n（2）若 \\(x>M\\)，同理\n\\[\n\\frac\\pi2-\\eta=\\arctan M<\\arctan x<\\frac\\pi2,\n\\]\n故 \\(|\\arctan x-\\pi/2|<\\eta\\le\\varepsilon\\)。由正无穷处的定义，极限为 \\(\\pi/2\\)。\n\n两侧极限不同，所以 \\(x\\to\\infty\\)（包括正、负两侧）时 \\(\\arctan x\\) 没有共同的有限极限。",
  "exam": "任给 \\(\\varepsilon>0\\)，取 \\(\\eta=\\min\\{\\varepsilon,\\pi/4\\}\\)、\\(M=\\tan(\\pi/2-\\eta)>0\\)。由反正切单调性及值域，\\(x<-M\\) 时\n\\(-\\pi/2<\\arctan x<-\\pi/2+\\eta\\)，故误差小于 ε；\\(x>M\\) 时\n\\(\\pi/2-\\eta<\\arctan x<\\pi/2\\)，故误差也小于 ε。由定义得两个结论。",
  "guidance": "反正切的值永远在 −π/2 与 π/2 之间，所以靠近上端点时只需要控制另一侧的不等式。先把目标角度差限制为 η，再用正切将角度边界转换成自变量的阈值。取 η 不大于 π/4，是为了对任意 ε 都能使用同一个正的阈值构造。",
  "chenSource": "陈纪修等《数学分析》第三版上册 §3.1 例 3.1.9，印刷第 69 页（PDF 第 88 页）。其题目是 eˣ 在负无穷趋于 0，并非反正切；证明同样由目标误差反推无穷远阈值。",
  "chenSolution": "陈例对 \\(0<\\varepsilon<1\\) 取 \\(M=\\ln(1/\\varepsilon)\\)。若 \\(x<-M\\)，则 \\(0<e^x<e^{-M}=\\varepsilon\\)；更大的 ε 可由较小的误差要求涵盖。陈例借指数、对数的单调性反求阈值；华师大本例改用正切与反正切的单调性，两个结论和函数并不相同。",
  "variantSource": "自编。已查陈第三版 §3.1 例题与习题，以及汤家凤第一章极限题型局部（印刷 13—14 页）；未穷尽其他章节。练习把无穷远端点改为反正弦定义域的有限端点，仍用反函数单调性构造单侧邻域。",
  "variant": "按左极限定义证明：\\(\\displaystyle\\lim_{x\\to1^-}\\arcsin x=\\pi/2\\)。",
  "variantSolution": "任给 \\(\\varepsilon>0\\)，令 \\(\\eta=\\min\\{\\varepsilon,\\pi/2\\}\\)，取 \\(\\delta=1-\\cos\\eta>0\\)。当 \\(0<1-x<\\delta\\) 时，\\(\\cos\\eta<x<1\\)，且 \\(x\\) 在反正弦定义域内。由于反正弦严格递增，\n\\[\n\\frac\\pi2-\\eta=\\arcsin(\\cos\\eta)<\\arcsin x<\\frac\\pi2.\n\\]\n因此 \\(|\\arcsin x-\\pi/2|<\\eta\\le\\varepsilon\\)。由左极限定义得证。",
  "verification": "已核对教材两小问与 Chen 相关证明；检查端点值域、正阈值和任意 ε。自编练习与全站语义去重、独立二审未完成。"
};
