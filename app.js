(() => {
  'use strict';
  const content = document.getElementById('content');
  const nav = document.getElementById('nav');
  const solutions = window.REVIEW_SOLUTIONS || {};
  const notes = window.REVIEW_NOTES || {};
  const guides = window.REVIEW_GUIDES || {};
  const examFocus = window.EXAM_FOCUS || {};
  const questionClasses = window.QUESTION_CLASSIFICATION || {};
  const topicBank = window.REVIEW_TOPICS || {};
  const mindmaps = window.REVIEW_MINDMAPS || {};
  const esc = x => String(x ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const storageKey = 'math-analysis-review-marks-v1';
  const starStorageKey = 'math-analysis-review-stars-v1';
  const sectionStorageKey = 'math-analysis-review-sections-v1';
  let inventory = null;
  let marks = {};
  let stars = {};
  let reviewedSections = {};
  const mapSelection = {}, mapZoom = {};
  let pendingQuestion = null;
  const directoryOnly = [
    ['4.2',4,'连续函数的性质',73],['4.3',4,'初等函数的连续性',82],
    ['5.1',5,'导数的概念',87],['5.2',5,'求导法则',94],
    ['5.3',5,'参变量函数的导数',102],['5.4',5,'高阶导数',104],
    ['5.5',5,'微分',109]
  ];
  let storageAvailable = true;
  try { marks = JSON.parse(localStorage.getItem(storageKey) || '{}') || {}; }
  catch (_) { storageAvailable = false; }
  try { stars = JSON.parse(localStorage.getItem(starStorageKey) || '{}') || {}; }
  catch (_) { storageAvailable = false; }
  try { reviewedSections = JSON.parse(localStorage.getItem(sectionStorageKey) || '{}') || {}; }
  catch (_) { storageAvailable = false; }
  function saveMark() {
    try { localStorage.setItem(storageKey, JSON.stringify(marks)); }
    catch (_) { storageAvailable = false; }
  }
  function saveLocal(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); }
    catch (_) { storageAvailable = false; }
  }
  function go(id) {
    if (location.hash === '#' + id) render();
    else location.hash = id;
    window.scrollTo(0, 0);
  }
  function navHtml(current) {
    let html = '<div class="nav-group"><button class="nav-button" data-go="home" ' + (current==='home'?'aria-current="page"':'') + '>复习总览</button>' +
      '<button class="nav-button" data-go="stars" aria-label="星号收藏夹" ' + (current==='stars'?'aria-current="page"':'') + '>⭐</button>' +
      '<button class="nav-button" data-go="topics" ' + (current==='topics'?'aria-current="page"':'') + '>考试重点</button></div>';
    for (const chapter of [2,3,4,5]) {
      html += '<div class="nav-group"><div class="nav-title">第 ' + chapter + ' 章</div>';
      for (const s of inventory.sections.filter(x => x.chapter === chapter)) {
        const title = s.id.endsWith('.total') ? '总练习题' : s.id + ' ' + s.title;
        html += '<button class="nav-button" data-go="' + esc(s.id) + '" ' + (current===s.id?'aria-current="page"':'') + '>' + esc(title) + '</button>';
      }
      html += '</div>';
    }
    return html;
  }
  function hero(title, description, index) {
    return '<div class="hero"><div><h1>' + esc(title) + '</h1><p>' + esc(description) + '</p></div><div class="hero-index" aria-hidden="true">' + esc(index || '') + '</div></div>';
  }
  function heading(title, small) {
    return '<div class="section-title"><h2>' + esc(title) + '</h2>' + (small?'<small>'+esc(small)+'</small>':'') + '</div>';
  }
  function guideHtml(id) {
    const guide = guides[id];
    if (!guide) return '';
    let html = heading('知识对照与记忆') + '<div class="panel"><p class="source">'+esc(guide.location)+'</p><div class="table-scroll"><table class="study-table"><thead><tr>'+
      guide.headers.map(x=>'<th scope="col">'+esc(x)+'</th>').join('')+'</tr></thead><tbody>'+
      guide.rows.map(row=>'<tr>'+row.map((cell,i)=>i===0?'<th scope="row">'+esc(cell)+'</th>':'<td>'+esc(cell)+'</td>').join('')+'</tr>').join('')+
      '</tbody></table></div>';
    for (const cue of guide.cues) html+='<p><strong>'+esc(cue.phrase)+'</strong><br>'+esc(cue.explanation)+'</p><p class="source">'+esc(cue.location)+'</p>';
    return html+'</div>';
  }
  function home() {
    const ex = inventory.sections.reduce((n,s) => n+s.numbered_examples,0);
    const qs = inventory.sections.reduce((n,s) => n+s.exercise_questions,0);
    const complete = Object.keys(solutions).length;
    const chapterNames = {'2':'数列极限','3':'函数极限','4':'函数的连续性','5':'导数和微分'};
    return hero('从定义出发，稳稳复习', '按华师大教材章节学习；先尝试，再展开题解与思路。', '∑') +
      '<div class="notice"><strong>制作中：</strong>第二章至第五章首轮清单包含 ' + ex + ' 道编号例题、' + qs + ' 道习题及总练习大题；目前共 ' + complete + ' 道题完成首轮整理。清单、未编号要求和答案对应仍待复核，未整理题目不能视为已有题解。</div>' +
      heading('按章节开始','教材印刷页与 PDF 页分别标注') +
      '<div class="overview">' + [2,3,4,5].map(n => '<button class="tile" data-go="chapter' + n + '"><strong>第 ' + n + ' 章 · ' + chapterNames[n] + '</strong><small>包括本章各节与总练习题</small></button>').join('') + '</div>' +
      heading('使用说明') + '<div class="panel"><p>题目按例题、课后习题和章末总练习排列。已整理的题目可分别展开常规解答、考场书写版、思路引导与举一反三。</p><p>复习标记、星号收藏与小节复习状态保存在当前浏览器，不同浏览器、网址和设备不会自动同步。章节导图与其余题解正在制作。</p></div>';
  }
  function chapterPage(chapter) {
    const sections = inventory.sections.filter(s=>s.chapter===chapter);
    const name = {2:'数列极限',3:'函数极限',4:'函数的连续性',5:'导数和微分'}[chapter];
    return hero('第 ' + chapter + ' 章 · ' + name, '按小节与章末总练习查找题目。', String(chapter)) +
      (mindmaps[chapter] ? mapHtml(chapter) : '<div class="notice">本章思维导图尚未完成；题目与解答正在逐项整理。</div>') +
      heading('小节与题目') + '<div class="overview">' + sections.map(s=>'<button class="tile" data-go="'+esc(s.id)+'"><strong>'+esc(s.id.endsWith('.total')?s.title:s.id+' '+s.title)+'</strong><small>'+(s.pending_inventory?'印刷第 '+s.printed_pages[0]+' 页起 · 例题、习题清单待逐页核对':'编号例题 '+s.numbered_examples+' · 习题大题 '+s.exercise_questions+' · 印刷页 '+s.printed_pages.join('—'))+'</small></button>').join('') + '</div>';
  }
  function mapHtml(chapter) {
    const map=mindmaps[chapter], nodes=map.nodes, byId=Object.fromEntries(nodes.map(n=>[n.id,n]));
    const selected=byId[mapSelection[chapter]] || nodes[0], zoom=mapZoom[chapter] || 1;
    const edges=map.edges.map(e=>{
      const a=byId[e.from], b=byId[e.to];
      return '<line x1="'+(a.x+75)+'" y1="'+(a.y+28)+'" x2="'+(b.x+75)+'" y2="'+(b.y+28)+'" class="'+(e.cross?'cross':'branch')+'" />';
    }).join('');
    const links=map.edges.filter(e=>e.cross && (e.from===selected.id || e.to===selected.id));
    return heading('知识思维导图','点击节点查看解释')+'<div class="panel mindmap-panel"><p>'+esc(map.description)+'</p>'+
      '<div class="map-tools"><button class="btn" data-map-zoom="down" data-chapter="'+chapter+'" aria-label="缩小导图">−</button><span>缩放 '+Math.round(zoom*100)+'%</span><button class="btn" data-map-zoom="up" data-chapter="'+chapter+'" aria-label="放大导图">＋</button><span>图内可左右滚动；实线：层级，虚线：知识联系</span></div>'+
      '<div class="map-scroll" tabindex="0" aria-label="思维导图，可滚动查看"><div class="map-canvas" style="width:'+(1000*zoom)+'px;height:'+(430*zoom)+'px"><div class="map-stage" style="transform:scale('+zoom+')"><svg class="map-edges" viewBox="0 0 1000 430" aria-hidden="true">'+edges+'</svg>'+
      nodes.map(n=>'<button class="map-node" style="left:'+n.x+'px;top:'+n.y+'px" data-map-node="'+esc(n.id)+'" data-chapter="'+chapter+'" aria-pressed="'+(selected.id===n.id)+'">'+esc(n.label)+'</button>').join('')+'</div></div></div>'+
      '<div class="map-detail"><h3>'+esc(selected.label)+'</h3><p>'+esc(selected.explanation)+'</p><div class="math-block">'+esc(selected.formula)+'</div><p class="source">'+esc(selected.reference)+'</p>'+
      (links.length?'<p><strong>与其他知识的联系</strong></p><ul>'+links.map(e=>'<li><strong>'+esc(byId[e.from].label)+' → '+esc(byId[e.to].label)+'：</strong> '+esc(e.text)+'</li>').join('')+'</ul>':'')+
      '<button class="btn" data-map-question="'+esc(selected.question)+'">查看相关题目</button></div></div>';
  }
  function sourceText(q) {
    let text = q.reference_match || '参考答案待对照';
    if (q.answer_printed_pages) text += '；答案资料 ' + q.answer_section + ' 第 ' + q.answer_question_number + ' 题，印刷页 ' + q.answer_printed_pages.join('—') + '，PDF 页 ' + q.answer_pdf_pages.join('—');
    if (q.reference_note) text += '；' + q.reference_note;
    if (q.cross_section_reference) text += '；' + q.cross_section_reference;
    return text;
  }
  function label(q) { return q.kind === 'example' ? '例 ' + q.number : '第 ' + q.number + ' 题'; }
  function markButtons(id) {
    return '<div class="controls" aria-label="复习标记"><button class="btn" data-mark="mastered" data-id="'+esc(id)+'" aria-pressed="'+(marks[id]==='mastered')+'">已掌握</button><button class="btn" data-mark="review" data-id="'+esc(id)+'" aria-pressed="'+(marks[id]==='review')+'">待复习</button>'+starButton(id)+'</div>';
  }
  function starButton(id) {
    const selected=!!stars[id];
    return '<button class="btn star-btn" data-star="'+esc(id)+'" aria-pressed="'+selected+'" aria-label="'+(selected?'取消星号收藏':'加入星号收藏')+'">'+(selected?'★ 已收藏':'☆ 收藏')+'</button>';
  }
  function starsPage() {
    const items=[];
    for (const s of inventory.sections) for (const q of s.items) {
      if(stars[q.id]) items.push({q,s});
    }
    const extra=[];
    for (const topic of Object.values(topicBank)) for (const item of topic.items) {
      if(stars['topic:'+topic.id+':'+item.number]) extra.push({topic,item});
    }
    const count=items.length+extra.length;
    return hero('⭐', '星号收藏夹：在题目上点“收藏”即可加入。收藏仅保存在当前浏览器。', '★') +
      (count ? '<p class="source">已收藏 '+count+' 道题；取消收藏后会从此处移除。</p>'+items.map(({q,s})=>card(q,s)).join('')+extra.map(({topic,item})=>topicCard(topic,item)).join('') :
        '<div class="panel"><p>还没有收藏的题目。进入小节后，点击题目右侧的“☆ 收藏”。</p></div>');
  }
  function focusTags(keys,notes) {
    const names=(keys||[]).filter(k=>examFocus[k]).map(k=>'<span class="focus-chip">'+esc(examFocus[k].label+(notes&&notes[k]?' · '+notes[k]:''))+'</span>').join('');
    return names?'<div class="focus-list" aria-label="本题考试重点">'+names+'</div>':'';
  }
  function detail(title,text,tags,notes) {
    return '<details><summary>'+esc(title)+'</summary><div class="answer math-block">'+focusTags(tags,notes)+esc(text)+'</div></details>';
  }
  function topicsPage() {
    const counts={}, doneCounts={};
    const knownIds=new Set(inventory.sections.flatMap(s=>s.items.map(q=>q.id)));
    for(const [id,c] of Object.entries(questionClasses)) {
      if(!knownIds.has(id)) continue;
      for(const key of c.topics||[]) {
        counts[key]=(counts[key]||0)+1;
        if(solutions[id]) doneCounts[key]=(doneCounts[key]||0)+1;
      }
    }
    return hero('考试重点', '按考点查看已核对的教材题与专项练习；题解整理状态单独显示。', '∑')+
      '<div class="notice">统计含已核对考点但题解待整理的大题；尚未检查的原题没有计入。各考点的全范围覆盖情况仍需逐题核查。</div>'+
      '<div class="overview">'+Object.entries(examFocus).map(([key,v])=>'<button class="tile" data-go="topic:'+esc(key)+'"><strong>'+esc(v.label)+'</strong><small>'+esc(v.hint)+' · 已标注 '+(counts[key]||0)+' 道大题，其中 '+(doneCounts[key]||0)+' 道已首轮整理'+(topicBank[key]?' · 已有五题补充专题':'')+'</small></button>').join('')+'</div>';
  }
  function topicCard(topic,item) {
    const id='topic:'+topic.id+':'+item.number;
    return '<article class="question is-calculation" id="'+esc(id)+'"><div class="qhead"><div><div class="qnum">考试重点专题 · 自编 · 第 '+item.number+' 题</div><h3>'+esc(item.title)+'</h3><div class="meta"><span class="tag">计算与讨论</span></div></div><div class="controls">'+starButton(id)+'</div></div>'+
      '<div class="statement math-block">'+esc(item.statement)+'</div><p class="source">知识对照：'+esc(topic.boundary)+'</p>'+
      detail('常规解答',item.solution,[topic.id])+detail('考场书写版',item.exam)+detail('思路引导',item.guidance)+
      '<p class="source">题目来源：自编；数学内容已首轮人工检查，仍待独立复核。</p></article>';
  }
  function topicPage(key) {
    const info=examFocus[key];
    if(!info) return topicsPage();
    const related=[];
    for(const s of inventory.sections) for(const q of s.items) {
      if((questionClasses[q.id]?.topics||[]).includes(key)) related.push({q,s});
    }
    const topic=topicBank[key];
    let html=hero(info.label,info.hint,'∑')+
      '<div class="notice">这里包含已核对考点、但题解仍待整理的教材大题；全范围尚未核查完成。</div>';
    if(topic) html+=heading('补充专题','五题自编，循序渐进')+'<p class="source">'+esc(topic.status)+' '+esc(topic.boundary)+'</p>'+topic.items.map(item=>topicCard(topic,item)).join('');
    html+=heading('已标注的教材题','目前 '+related.length+' 道大题');
    html+=related.length?related.map(({q,s})=>card(q,s)).join(''):'<div class="panel">该考点的教材题尚在逐项整理与标注。</div>';
    return html;
  }
  function card(q,s) {
    const worked=solutions[q.id];
    const classification=questionClasses[q.id] || {};
    const kind=classification.type || (q.question_type==='judgement'?'judgement':(worked?.type || ''));
    const kindLabel={proof:'证明题',calculation:'计算题',mixed:'计算与证明',judgement:'判断题',classification:'分类判断'}[kind] || '';
    const parts=q.numbered_parts.length?'编号小问：'+q.numbered_parts.join('、'):'未编号的题内要求待细核';
    const location='华师大第六版上册 · '+s.id+' · 印刷第 '+q.printed_page+' 页起 · PDF 第 '+q.pdf_page+' 页';
    if (!worked) {
      return '<article class="question pending '+(kind?'is-'+esc(kind):'')+'" id="'+esc(q.id)+'"><div class="qhead"><div><div class="qnum">'+esc(location)+'</div><h3>'+esc(label(q))+'</h3><div class="meta">'+(kindLabel?esc(kindLabel)+' · ':'')+esc(parts)+(q.after_printed_divider?' · 原书分隔线后':'')+'</div><span class="tag pending-label">题面与题解待整理</span></div><div class="controls">'+starButton(q.id)+'</div></div>'+focusTags(classification.topics,classification.topicNotes)+'<p class="source">'+esc(sourceText(q))+'</p></article>';
    }
    return '<article class="question '+(kind?'is-'+esc(kind):'')+'" id="'+esc(q.id)+'"><div class="qhead"><div><div class="qnum">'+esc(location)+'</div><h3>'+esc(label(q))+'</h3><div class="meta">'+(kindLabel?'<span class="kind-label">'+esc(kindLabel)+'</span> ':'')+'<span class="tag">'+esc(worked.focus)+'</span></div></div>'+markButtons(q.id)+'</div>' +
      '<div class="statement math-block">'+esc(worked.statement)+'</div>' +
      '<p class="source">知识对照：'+esc(worked.reference)+'</p>' +
      detail('常规解答',worked.solution,classification.topics,classification.topicNotes) + (worked.chenSolution ? detail('陈纪修版对应讲解', worked.chenSource + '\n\n' + worked.chenSolution) : '') + (worked.type==='judgement'||q.question_type==='judgement'?'':detail('考场书写版',worked.exam)) + detail('思路引导',worked.guidance) +
      (worked.variant && !worked.otherHomework ? '<details><summary>举一反三</summary><div class="answer"><p class="source">'+esc(worked.variantSource)+'</p><div class="statement math-block">'+esc(worked.variant)+'</div>'+detail('查看练习解答',worked.variantSolution)+'</div></details>' : '') +
      '<p class="source">'+esc(worked.solutionSource)+'</p><p class="source">'+esc(worked.verification)+'</p></article>';
  }
  function sectionPage(s) {
    const examples=s.items.filter(q=>q.kind==='example');
    const exercises=s.items.filter(q=>q.kind==='exercise');
    const done=s.items.filter(q=>solutions[q.id]).length;
    const title=s.id.endsWith('.total')?s.title:s.id+' '+s.title;
    const desc='华师大第六版上册 · 印刷第 '+s.printed_pages.join('—')+' 页'+(s.pending_inventory?'起':'')+'（PDF 第 '+s.pdf_pages.join('—')+' 页'+(s.pending_inventory?'起':'')+'）';
    let html=hero(title,desc,s.id.endsWith('.total')?'':s.id);
    html+='<div class="section-review"><button class="btn" data-section-review="'+esc(s.id)+'" aria-pressed="'+!!reviewedSections[s.id]+'">'+(reviewedSections[s.id]?'✓ 本小节已复习':'标记本小节已复习')+'</button><span>仅记录小节复习状态，不改变题目的掌握标记。</span></div>';
    html+=s.pending_inventory
      ? '<div class="notice"><strong>题目清单待整理：</strong>已核对教材目录和本节起始页，例题、习题数量和题目尚未逐页清点。</div>'
      : '<div class="notice"><strong>整理进度：</strong>本部分 '+s.numbered_examples+' 道编号例题、'+s.exercise_questions+' 道习题大题；'+done+' 道已做首轮整理。清单与答案来源仍在复核，横线标记保留原书排版，不代表删题。</div>';
    html+=heading('本节提醒')+'<div class="panel">'+esc(notes[s.id]||'本节提醒尚未整理。请先以华师大原书的定义、定理和例题为准。')+'</div>';
    html+=guideHtml(s.id);
    if(examples.length) html+=heading('教材例题','保留原书例题编号')+examples.map(q=>card(q,s)).join('');
    if(exercises.length) html+=heading(s.id.endsWith('.total')?'章末总练习':'课后习题','保留原书题号与小问')+exercises.map(q=>card(q,s)).join('');
    return html;
  }
  function render() {
    if(!inventory) return;
    const id=decodeURIComponent(location.hash.slice(1)||'home');
    nav.innerHTML=navHtml(id);
    const found=inventory.sections.find(s=>s.id===id);
    content.innerHTML=found?sectionPage(found):id==='stars'?starsPage():id==='topics'?topicsPage():id.startsWith('topic:')?topicPage(id.slice(6)):/^chapter[2345]$/.test(id)?chapterPage(Number(id.slice(-1))):home();
    if(!storageAvailable) content.insertAdjacentHTML('afterbegin','<div class="notice">当前浏览器无法保存复习标记，请检查本地存储设置。</div>');
    if(typeof renderMathInElement==='function') renderMathInElement(content,{delimiters:[{left:'\\[',right:'\\]',display:true},{left:'\\(',right:'\\)',display:false}],throwOnError:false});
    const mapScroller=content.querySelector('.map-scroll');
    if(mapScroller) mapScroller.scrollLeft=(mapScroller.scrollWidth-mapScroller.clientWidth)/2;
    if(pendingQuestion) {
      const target=document.getElementById(pendingQuestion); pendingQuestion=null;
      if(target) requestAnimationFrame(()=>target.scrollIntoView({block:'start'}));
    }
  }
  document.addEventListener('click', event => {
    const button=event.target.closest('button');
    if(!button) return;
    if(button.dataset.mapNode || button.dataset.mapZoom) {
      const chapter=button.dataset.chapter, scroller=content.querySelector('.map-scroll');
      const left=scroller?.scrollLeft || 0, top=scroller?.scrollTop || 0;
      if(button.dataset.mapNode) mapSelection[chapter]=button.dataset.mapNode;
      else mapZoom[chapter]=Math.min(1.5,Math.max(.75,(mapZoom[chapter]||1)+(button.dataset.mapZoom==='up'?.25:-.25)));
      render();
      const next=content.querySelector('.map-scroll'); if(next) {next.scrollLeft=left;next.scrollTop=top;}
    }
    if(button.dataset.mapQuestion) {pendingQuestion=button.dataset.mapQuestion;go(pendingQuestion.split(':')[0]);}
    if(button.dataset.go) go(button.dataset.go);
    if(button.dataset.star) {
      const id=button.dataset.star;
      if(stars[id]) delete stars[id]; else stars[id]=true;
      saveLocal(starStorageKey,stars);
      if(location.hash==='#stars') render();
      else {
        button.setAttribute('aria-pressed',String(!!stars[id]));
        button.setAttribute('aria-label',stars[id]?'取消星号收藏':'加入星号收藏');
        button.textContent=stars[id]?'★ 已收藏':'☆ 收藏';
        if(!storageAvailable) render();
      }
    }
    if(button.dataset.sectionReview) {
      const id=button.dataset.sectionReview;
      if(reviewedSections[id]) delete reviewedSections[id]; else reviewedSections[id]=true;
      saveLocal(sectionStorageKey,reviewedSections);
      button.setAttribute('aria-pressed',String(!!reviewedSections[id]));
      button.textContent=reviewedSections[id]?'✓ 本小节已复习':'标记本小节已复习';
      if(!storageAvailable) render();
    }
    if(button.dataset.mark) {
      const id=button.dataset.id;
      marks[id]=marks[id]===button.dataset.mark?null:button.dataset.mark;
      saveMark();
      button.parentElement.querySelectorAll('[data-mark]').forEach(b=>b.setAttribute('aria-pressed',String(marks[id]===b.dataset.mark)));
      if(!storageAvailable) render();
    }
  });
  window.addEventListener('hashchange',render);
  fetch('inventory.json',{cache:'no-store'}).then(r=>{if(!r.ok) throw Error('HTTP '+r.status); return r.json();})
    .then(data=>{
      inventory=data;
      for (const [id,chapter,title,page] of directoryOnly) {
        if (!inventory.sections.some(s=>s.id===id)) inventory.sections.push({
          id,chapter,title,printed_pages:[page],pdf_pages:[page+13],
          numbered_examples:null,exercise_questions:null,items:[],pending_inventory:true
        });
      }
      render();
    })
    .catch(()=>{content.innerHTML='<div class="notice">无法读取本地题目清单。请用项目中的启动脚本打开网站，再刷新页面。</div>';});
})();
