window.EXAM_FOCUS = {
  "en": {
    "label": "数列极限 ε–N 定义",
    "hint": "任给精度，再找统一的 N，控制所有充分靠后的项。"
  },
  "ed": {
    "label": "函数极限 ε–δ 定义",
    "hint": "注意去心邻域及 δ 对 ε 的依赖。"
  },
  "stolz": {
    "label": "Stolz 定理",
    "hint": "先检查分母数列条件与差商极限。"
  },
  "discontinuity": {
    "label": "间断点",
    "hint": "结合函数定义域、单侧极限和点值判断。"
  },
  "asymptote": {
    "label": "渐近线",
    "hint": "按自变量趋近位置分别检查竖直与无穷远处的渐近线。"
  },
  "monotone": {
    "label": "单调有界定理",
    "hint": "必须同时证明单调性和有界性。"
  },
  "oneinf": {
    "label": "1 的无穷次方型 · 凑 1",
    "hint": "先确认底数趋于 1，再找趋零增量和合适的指数；注意底数为正。"
  },
  "equivalent": {
    "label": "等价无穷小",
    "hint": "先检查同一极限过程与替换条件，和差不能随意逐项替换。"
  },
  "squeeze": {
    "label": "迫敛性（夹逼定理）",
    "hint": "两侧的极限必须相同，不等式要最终成立。"
  },
  "continuousParam": {
    "label": "根据连续性求参数",
    "hint": "检查点值与相应单侧极限，分段点及端点要分别处理。"
  }
};
window.QUESTION_CLASSIFICATION = {
  "2.1:example:1": {
    "type": "mixed",
    "topics": [
      "en"
    ]
  },
  "2.1:example:2": {
    "type": "proof",
    "topics": [
      "en"
    ]
  },
  "2.1:example:3": {
    "type": "proof",
    "topics": [
      "en"
    ]
  },
  "2.1:example:4": {
    "type": "proof",
    "topics": [
      "en"
    ]
  },
  "2.1:example:5": {
    "type": "proof",
    "topics": [
      "en"
    ]
  },
  "2.1:example:6": {
    "type": "proof",
    "topics": [
      "en"
    ]
  },
  "2.1:example:7": {
    "type": "proof",
    "topics": [
      "en"
    ]
  },
  "2.1:example:8": {
    "type": "proof",
    "topics": [
      "en"
    ]
  },
  "2.1:example:9": {
    "type": "proof",
    "topics": [
      "en"
    ]
  },
  "2.1:exercise:1": {
    "type": "mixed",
    "topics": [
      "en"
    ]
  },
  "2.1:exercise:2": {
    "type": "proof",
    "topics": [
      "en"
    ]
  },
  "2.1:exercise:3": {
    "type": "calculation",
    "topics": []
  },
  "2.1:exercise:4": {
    "type": "proof",
    "topics": [
      "en"
    ]
  },
  "2.1:exercise:5": {
    "type": "proof",
    "topics": [
      "en"
    ]
  },
  "2.1:exercise:6": {
    "type": "proof",
    "topics": [
      "en"
    ]
  },
  "2.1:exercise:7": {
    "type": "classification",
    "topics": []
  },
  "2.1:exercise:8": {
    "type": "proof",
    "topics": [
      "en"
    ]
  },
  "2.1:exercise:9": {
    "type": "proof",
    "topics": [
      "en"
    ]
  },
  "2.1:exercise:10": {
    "type": "proof",
    "topics": [
      "en"
    ]
  },
  "2.2:example:1": {
    "type": "proof",
    "topics": [
      "en"
    ]
  },
  "2.2:example:2": {
    "type": "calculation",
    "topics": [
      "en",
      "squeeze"
    ]
  },
  "2.2:example:3": {
    "type": "proof",
    "topics": [
      "en"
    ]
  },
  "2.2:example:4": {
    "type": "calculation",
    "topics": []
  },
  "2.2:example:5": {
    "type": "calculation",
    "topics": []
  },
  "2.2:example:6": {
    "type": "calculation",
    "topics": []
  },
  "2.2:exercise:1": {
    "type": "calculation",
    "topics": []
  },
  "2.2:exercise:2": {
    "type": "proof",
    "topics": [
      "en"
    ]
  },
  "2.2:exercise:3": {
    "type": "calculation",
    "topics": [
      "squeeze"
    ]
  },
  "2.2:exercise:4": {
    "type": "mixed",
    "topics": []
  },
  "2.2:exercise:5": {
    "type": "proof",
    "topics": []
  },
  "2.2:exercise:6": {
    "type": "judgement",
    "topics": []
  },
  "2.2:exercise:7": {
    "type": "calculation",
    "topics": ["squeeze", "stolz"],
    "topicNotes": {"squeeze":"第（1）—（3）问", "stolz":"第（2）问后续方法"}
  },
  "2.2:exercise:8": {
    "type": "proof",
    "topics": ["squeeze"]
  },
  "2.2:exercise:9": {
    "type": "proof",
    "topics": ["squeeze"]
  },
  "2.3:example:1": {
    "type": "proof",
    "topics": ["monotone"]
  },
  "2.3:example:2": {
    "type": "proof",
    "topics": ["monotone", "squeeze"],
    "topicNotes": {"squeeze":"补充方法"}
  },
  "2.3:example:3": {"type":"proof", "topics":["squeeze"]},
  "2.3:example:4": {"type":"proof", "topics":["monotone","oneinf"], "topicNotes":{"oneinf":"以数列形式引入 e"}},
  "2.3:example:5": {"type":"proof", "topics":[]},
  "2.3:example:6": {"type":"proof", "topics":[]},
  "2.3:example:7": {"type":"proof", "topics":[]},
  "2.3:exercise:1": {"type":"calculation", "topics":["oneinf"], "topicNotes":{"oneinf":"五个小问"}},
  "2.3:exercise:2": {"type":"judgement", "topics":[]},
  "2.3:exercise:3": {"type":"mixed", "topics":["monotone","squeeze"], "topicNotes":{"monotone":"第（1）、（2）问", "squeeze":"第（3）问及补充方法"}},
  "2.3:exercise:4": {"type":"proof", "topics":["monotone"]},
  "2.3:exercise:5": {"type":"proof", "topics":["monotone"], "topicNotes":{"monotone":"第（2）问补充方法"}},
  "2.3:exercise:6": {"type":"proof", "topics":["monotone"]},
  "2.3:exercise:7": {"type":"proof", "topics":["squeeze"], "topicNotes":{"squeeze":"几何上界与迫敛"}},
  "2.3:exercise:8": {"type":"proof", "topics":["monotone"]},
  "2.3:exercise:9": {"type":"proof", "topics":["monotone"]},
  "2.3:exercise:10": {"type":"proof", "topics":["monotone","squeeze"], "topicNotes":{"squeeze":"夹住 e 的误差"}},
  "2.3:exercise:11": {"type":"proof", "topics":["monotone"]},
  "2.3:exercise:12": {"type":"proof", "topics":["monotone","squeeze"], "topicNotes":{"squeeze":"第（4）问的反方向"}},
  "2.total:exercise:1": {"type":"calculation", "topics":["squeeze"], "topicNotes":{"squeeze":"第（1）问根式夹逼"}},
  "2.total:exercise:2": {"type":"proof", "topics":["squeeze"], "topicNotes":{"squeeze":"第（2）问二进分段"}},
  "2.total:exercise:3": {"type":"proof", "topics":["stolz"], "topicNotes":{"stolz":"证明定理"}},
  "2.total:exercise:4": {"type":"proof", "topics":["stolz","squeeze"], "topicNotes":{"stolz":"算术平均与几何平均", "squeeze":"几何平均的上下界"}},
  "2.total:exercise:5": {"type":"proof", "topics":["stolz"], "topicNotes":{"stolz":"应用上一题以 Stolz 定理证明的结论"}},
  "2.total:exercise:6": {"type":"proof", "topics":["monotone"]},
  "2.total:exercise:7": {"type":"proof", "topics":["monotone"], "topicNotes":{"monotone":"先证明绝对差部分和收敛"}},
  "2.total:exercise:8": {"type":"proof", "topics":["monotone"]},
  "2.total:exercise:9": {"type":"proof", "topics":["monotone","squeeze"], "topicNotes":{"squeeze":"练习中的间距估计"}},
  "2.total:exercise:10": {"type":"proof", "topics":[]},
  "2.total:exercise:11": {"type":"proof", "topics":["squeeze"], "topicNotes":{"squeeze":"统一误差界的补充证明"}},
  "2.total:exercise:12": {"type":"mixed", "topics":["oneinf"], "topicNotes":{"oneinf":"两个 n² 次幂应用"}},
  "2.total:exercise:13": {"type":"proof", "topics":[]},
  "2.total:exercise:14": {"type":"judgement", "topics":[]},
  "3.1:example:1": {"type":"proof", "topics":[]},
  "3.1:example:2": {"type":"proof", "topics":[]},
  "3.1:example:7": {"type":"proof", "topics":["ed"], "topicNotes":{"ed":"定义域端点的单侧极限"}},
  "3.2:example:1": {"type":"calculation", "topics":["squeeze"], "topicNotes":{"squeeze":"取整不等式的左右夹逼"}},
  "3.2:example:4": {"type":"proof", "topics":["ed"], "topicNotes":{"ed":"数列根式与单调性构造 δ"}},
  "3.1:example:3": {"type":"proof", "topics":["ed"]},
  "3.1:example:4": {"type":"proof", "topics":["ed"]},
  "3.1:example:5": {"type":"proof", "topics":["ed"]},
  "3.1:example:6": {"type":"proof", "topics":["ed"]},
  "3.1:exercise:2": {"type":"proof", "topics":["ed"], "topicNotes":{"ed":"极限定义的否定与量词"}},
  "3.1:exercise:3": {"type":"proof", "topics":["ed"], "topicNotes":{"ed":"去心邻域和变量平移"}},
  "3.1:exercise:4": {"type":"proof", "topics":["ed"], "topicNotes":{"ed":"反三角不等式和定义证明"}},
  "3.1:exercise:5": {"type":"proof", "topics":["ed"], "topicNotes":{"ed":"左右极限与定义证明"}},
  "3.1:exercise:6": {"type":"proof", "topics":["ed"], "topicNotes":{"ed":"左右极限与去心邻域"}},
  "3.1:exercise:7": {"type":"proof", "topics":["ed"], "topicNotes":{"ed":"右邻域与正无穷之间的倒数代换"}},
  "3.1:exercise:8": {"type":"proof", "topics":["ed"], "topicNotes":{"ed":"有限个特殊点与去心邻域"}},
  "3.1:exercise:1": {"type":"proof", "topics":["ed"], "topicNotes":{"ed":"有限点极限小问"}},
  "3.4:example:3": {"type":"calculation", "topics":["oneinf"]},
  "3.4:example:4": {"type":"calculation", "topics":["oneinf"]},
  "3.4:example:5": {"type":"calculation", "topics":["oneinf","squeeze"], "topicNotes":{"squeeze":"原书用迫敛性"}},
  "3.4:exercise:2": {"type":"calculation", "topics":["oneinf"], "topicNotes":{"oneinf":"六个小问"}},
  "3.4:exercise:4": {"type":"calculation", "topics":["oneinf"], "topicNotes":{"oneinf":"第（2）问"}},
  "3.5:example:1": {"type":"calculation", "topics":["equivalent"]},
  "3.5:example:2": {"type":"calculation", "topics":["equivalent"]},
  "3.5:example:6": {"type":"calculation", "topics":["asymptote"]},
  "3.5:exercise:2": {"type":"calculation", "topics":["equivalent"], "topicNotes":{"equivalent":"应用等价无穷小替换"}},
  "3.5:exercise:4": {"type":"calculation", "topics":["asymptote"], "topicNotes":{"asymptote":"三个小问"}},
  "3.5:exercise:9": {"type":"proof", "topics":["equivalent"]},
  "3.total:exercise:2": {"type":"calculation", "topics":["asymptote"], "topicNotes":{"asymptote":"以极限形式确定直线参数"}},
  "4.1:example:1": {"type":"proof", "topics":["ed"], "topicNotes":{"ed":"连续性的 ε–δ 定义"}},
  "4.1:example:2": {"type":"classification", "topics":["discontinuity"], "topicNotes":{"discontinuity":"单侧连续性与间断"}},
  "4.1:example:3": {"type":"proof", "topics":["discontinuity"], "topicNotes":{"discontinuity":"有理点处不连续"}},
  "4.1:exercise:1": {"type":"proof", "topics":["ed"], "topicNotes":{"ed":"按定义证明连续"}},
  "4.1:exercise:2": {"type":"classification", "topics":["discontinuity"]},
  "4.1:exercise:3": {"type":"calculation", "topics":["discontinuity","squeeze","equivalent"], "topicNotes":{"discontinuity":"延拓可去间断点", "squeeze":"第（3）问", "equivalent":"第（2）问补充方法"}},
  "4.1:exercise:4": {"type":"proof", "topics":[]},
  "4.1:exercise:5": {"type":"proof", "topics":[]},
  "4.1:exercise:6": {"type":"proof", "topics":["discontinuity"]},
  "4.1:exercise:7": {"type":"proof", "topics":["discontinuity"]},
  "4.1:exercise:9": {
    "type": "proof",
    "topics": [
      "discontinuity"
    ]
  }
};
window.REVIEW_SOLUTIONS['2.2:example:6'].solution += "\n\n补充／后续内容 · 方法二（导数，华师大 §5.1—§5.2）：\n令 \\(h=1/n\\)，则 \\(h\\to0\\)，并且\n\\[\n\\sqrt n(\\sqrt{n+1}-\\sqrt n)\n=\\frac{\\sqrt{1+h}-1}{h}.\n\\]\n右侧是函数 \\(f(x)=\\sqrt x\\) 在 \\(x=1\\) 处的差商。由导数公式 \\(f'(x)=1/(2\\sqrt x)\\)（\\(x>0\\)），极限为 \\(f'(1)=1/2\\)。该方法使用第五章的导数知识，本节主解仍以上面的有理化为主。";

