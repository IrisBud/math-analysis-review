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
  "4.1:exercise:9": {
    "type": "proof",
    "topics": [
      "discontinuity"
    ]
  }
};
window.REVIEW_SOLUTIONS['2.2:example:6'].solution += "\n\n补充／后续内容 · 方法二（导数，华师大 §5.1—§5.2）：\n令 \\(h=1/n\\)，则 \\(h\\to0\\)，并且\n\\[\n\\sqrt n(\\sqrt{n+1}-\\sqrt n)\n=\\frac{\\sqrt{1+h}-1}{h}.\n\\]\n右侧是函数 \\(f(x)=\\sqrt x\\) 在 \\(x=1\\) 处的差商。由导数公式 \\(f'(x)=1/(2\\sqrt x)\\)（\\(x>0\\)），极限为 \\(f'(1)=1/2\\)。该方法使用第五章的导数知识，本节主解仍以上面的有理化为主。";

